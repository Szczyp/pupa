if(typeof Math.imul == "undefined" || (Math.imul(0xffffffff,5) == 0)) {
    Math.imul = function (a, b) {
        var ah  = (a >>> 16) & 0xffff;
        var al = a & 0xffff;
        var bh  = (b >>> 16) & 0xffff;
        var bl = b & 0xffff;
        // the shift by 0 fixes the sign on the high part
        // the final |0 converts the unsigned value into a signed value
        return ((al * bl) + (((ah * bl + al * bh) << 16) >>> 0)|0);
    }
}

!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var f;"undefined"!=typeof window?f=window:"undefined"!=typeof global?f=global:"undefined"!=typeof self&&(f=self),f.virtualDom=e()}}(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var createElement = require("./vdom/create-element.js")

module.exports = createElement

},{"./vdom/create-element.js":15}],2:[function(require,module,exports){
var diff = require("./vtree/diff.js")

module.exports = diff

},{"./vtree/diff.js":35}],3:[function(require,module,exports){
var h = require("./virtual-hyperscript/index.js")

module.exports = h

},{"./virtual-hyperscript/index.js":22}],4:[function(require,module,exports){
var diff = require("./diff.js")
var patch = require("./patch.js")
var h = require("./h.js")
var create = require("./create-element.js")
var VNode = require('./vnode/vnode.js')
var VText = require('./vnode/vtext.js')

module.exports = {
    diff: diff,
    patch: patch,
    h: h,
    create: create,
    VNode: VNode,
    VText: VText
}

},{"./create-element.js":1,"./diff.js":2,"./h.js":3,"./patch.js":13,"./vnode/vnode.js":31,"./vnode/vtext.js":33}],5:[function(require,module,exports){
/*!
 * Cross-Browser Split 1.1.1
 * Copyright 2007-2012 Steven Levithan <stevenlevithan.com>
 * Available under the MIT License
 * ECMAScript compliant, uniform cross-browser split method
 */

/**
 * Splits a string into an array of strings using a regex or string separator. Matches of the
 * separator are not included in the result array. However, if `separator` is a regex that contains
 * capturing groups, backreferences are spliced into the result each time `separator` is matched.
 * Fixes browser bugs compared to the native `String.prototype.split` and can be used reliably
 * cross-browser.
 * @param {String} str String to split.
 * @param {RegExp|String} separator Regex or string to use for separating the string.
 * @param {Number} [limit] Maximum number of items to include in the result array.
 * @returns {Array} Array of substrings.
 * @example
 *
 * // Basic use
 * split('a b c d', ' ');
 * // -> ['a', 'b', 'c', 'd']
 *
 * // With limit
 * split('a b c d', ' ', 2);
 * // -> ['a', 'b']
 *
 * // Backreferences in result array
 * split('..word1 word2..', /([a-z]+)(\d+)/i);
 * // -> ['..', 'word', '1', ' ', 'word', '2', '..']
 */
module.exports = (function split(undef) {

  var nativeSplit = String.prototype.split,
    compliantExecNpcg = /()??/.exec("")[1] === undef,
    // NPCG: nonparticipating capturing group
    self;

  self = function(str, separator, limit) {
    // If `separator` is not a regex, use `nativeSplit`
    if (Object.prototype.toString.call(separator) !== "[object RegExp]") {
      return nativeSplit.call(str, separator, limit);
    }
    var output = [],
      flags = (separator.ignoreCase ? "i" : "") + (separator.multiline ? "m" : "") + (separator.extended ? "x" : "") + // Proposed for ES6
      (separator.sticky ? "y" : ""),
      // Firefox 3+
      lastLastIndex = 0,
      // Make `global` and avoid `lastIndex` issues by working with a copy
      separator = new RegExp(separator.source, flags + "g"),
      separator2, match, lastIndex, lastLength;
    str += ""; // Type-convert
    if (!compliantExecNpcg) {
      // Doesn't need flags gy, but they don't hurt
      separator2 = new RegExp("^" + separator.source + "$(?!\\s)", flags);
    }
    /* Values for `limit`, per the spec:
     * If undefined: 4294967295 // Math.pow(2, 32) - 1
     * If 0, Infinity, or NaN: 0
     * If positive number: limit = Math.floor(limit); if (limit > 4294967295) limit -= 4294967296;
     * If negative number: 4294967296 - Math.floor(Math.abs(limit))
     * If other: Type-convert, then use the above rules
     */
    limit = limit === undef ? -1 >>> 0 : // Math.pow(2, 32) - 1
    limit >>> 0; // ToUint32(limit)
    while (match = separator.exec(str)) {
      // `separator.lastIndex` is not reliable cross-browser
      lastIndex = match.index + match[0].length;
      if (lastIndex > lastLastIndex) {
        output.push(str.slice(lastLastIndex, match.index));
        // Fix browsers whose `exec` methods don't consistently return `undefined` for
        // nonparticipating capturing groups
        if (!compliantExecNpcg && match.length > 1) {
          match[0].replace(separator2, function() {
            for (var i = 1; i < arguments.length - 2; i++) {
              if (arguments[i] === undef) {
                match[i] = undef;
              }
            }
          });
        }
        if (match.length > 1 && match.index < str.length) {
          Array.prototype.push.apply(output, match.slice(1));
        }
        lastLength = match[0].length;
        lastLastIndex = lastIndex;
        if (output.length >= limit) {
          break;
        }
      }
      if (separator.lastIndex === match.index) {
        separator.lastIndex++; // Avoid an infinite loop
      }
    }
    if (lastLastIndex === str.length) {
      if (lastLength || !separator.test("")) {
        output.push("");
      }
    } else {
      output.push(str.slice(lastLastIndex));
    }
    return output.length > limit ? output.slice(0, limit) : output;
  };

  return self;
})();

},{}],6:[function(require,module,exports){

},{}],7:[function(require,module,exports){
'use strict';

var OneVersionConstraint = require('individual/one-version');

var MY_VERSION = '7';
OneVersionConstraint('ev-store', MY_VERSION);

var hashKey = '__EV_STORE_KEY@' + MY_VERSION;

module.exports = EvStore;

function EvStore(elem) {
    var hash = elem[hashKey];

    if (!hash) {
        hash = elem[hashKey] = {};
    }

    return hash;
}

},{"individual/one-version":9}],8:[function(require,module,exports){
(function (global){
'use strict';

/*global window, global*/

var root = typeof window !== 'undefined' ?
    window : typeof global !== 'undefined' ?
    global : {};

module.exports = Individual;

function Individual(key, value) {
    if (key in root) {
        return root[key];
    }

    root[key] = value;

    return value;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{}],9:[function(require,module,exports){
'use strict';

var Individual = require('./index.js');

module.exports = OneVersion;

function OneVersion(moduleName, version, defaultValue) {
    var key = '__INDIVIDUAL_ONE_VERSION_' + moduleName;
    var enforceKey = key + '_ENFORCE_SINGLETON';

    var versionValue = Individual(enforceKey, version);

    if (versionValue !== version) {
        throw new Error('Can only have one copy of ' +
            moduleName + '.\n' +
            'You already have version ' + versionValue +
            ' installed.\n' +
            'This means you cannot install version ' + version);
    }

    return Individual(key, defaultValue);
}

},{"./index.js":8}],10:[function(require,module,exports){
(function (global){
var topLevel = typeof global !== 'undefined' ? global :
    typeof window !== 'undefined' ? window : {}
var minDoc = require('min-document');

if (typeof document !== 'undefined') {
    module.exports = document;
} else {
    var doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'];

    if (!doccy) {
        doccy = topLevel['__GLOBAL_DOCUMENT_CACHE@4'] = minDoc;
    }

    module.exports = doccy;
}

}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})
},{"min-document":6}],11:[function(require,module,exports){
"use strict";

module.exports = function isObject(x) {
	return typeof x === "object" && x !== null;
};

},{}],12:[function(require,module,exports){
var nativeIsArray = Array.isArray
var toString = Object.prototype.toString

module.exports = nativeIsArray || isArray

function isArray(obj) {
    return toString.call(obj) === "[object Array]"
}

},{}],13:[function(require,module,exports){
var patch = require("./vdom/patch.js")

module.exports = patch

},{"./vdom/patch.js":18}],14:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook.js")

module.exports = applyProperties

function applyProperties(node, props, previous) {
    for (var propName in props) {
        var propValue = props[propName]

        if (propValue === undefined) {
            removeProperty(node, propName, propValue, previous);
        } else if (isHook(propValue)) {
            removeProperty(node, propName, propValue, previous)
            if (propValue.hook) {
                propValue.hook(node,
                    propName,
                    previous ? previous[propName] : undefined)
            }
        } else {
            if (isObject(propValue)) {
                patchObject(node, props, previous, propName, propValue);
            } else {
                node[propName] = propValue
            }
        }
    }
}

function removeProperty(node, propName, propValue, previous) {
    if (previous) {
        var previousValue = previous[propName]

        if (!isHook(previousValue)) {
            if (propName === "attributes") {
                for (var attrName in previousValue) {
                    node.removeAttribute(attrName)
                }
            } else if (propName === "style") {
                for (var i in previousValue) {
                    node.style[i] = ""
                }
            } else if (typeof previousValue === "string") {
                node[propName] = ""
            } else {
                node[propName] = null
            }
        } else if (previousValue.unhook) {
            previousValue.unhook(node, propName, propValue)
        }
    }
}

function patchObject(node, props, previous, propName, propValue) {
    var previousValue = previous ? previous[propName] : undefined

    // Set attributes
    if (propName === "attributes") {
        for (var attrName in propValue) {
            var attrValue = propValue[attrName]

            if (attrValue === undefined) {
                node.removeAttribute(attrName)
            } else {
                node.setAttribute(attrName, attrValue)
            }
        }

        return
    }

    if(previousValue && isObject(previousValue) &&
        getPrototype(previousValue) !== getPrototype(propValue)) {
        node[propName] = propValue
        return
    }

    if (!isObject(node[propName])) {
        node[propName] = {}
    }

    var replacer = propName === "style" ? "" : undefined

    for (var k in propValue) {
        var value = propValue[k]
        node[propName][k] = (value === undefined) ? replacer : value
    }
}

function getPrototype(value) {
    if (Object.getPrototypeOf) {
        return Object.getPrototypeOf(value)
    } else if (value.__proto__) {
        return value.__proto__
    } else if (value.constructor) {
        return value.constructor.prototype
    }
}

},{"../vnode/is-vhook.js":26,"is-object":11}],15:[function(require,module,exports){
var document = require("global/document")

var applyProperties = require("./apply-properties")

var isVNode = require("../vnode/is-vnode.js")
var isVText = require("../vnode/is-vtext.js")
var isWidget = require("../vnode/is-widget.js")
var handleThunk = require("../vnode/handle-thunk.js")

module.exports = createElement

function createElement(vnode, opts) {
    var doc = opts ? opts.document || document : document
    var warn = opts ? opts.warn : null

    vnode = handleThunk(vnode).a

    if (isWidget(vnode)) {
        return vnode.init()
    } else if (isVText(vnode)) {
        return doc.createTextNode(vnode.text)
    } else if (!isVNode(vnode)) {
        if (warn) {
            warn("Item is not a valid virtual dom node", vnode)
        }
        return null
    }

    var node = (vnode.namespace === null) ?
        doc.createElement(vnode.tagName) :
        doc.createElementNS(vnode.namespace, vnode.tagName)

    var props = vnode.properties
    applyProperties(node, props)

    var children = vnode.children

    for (var i = 0; i < children.length; i++) {
        var childNode = createElement(children[i], opts)
        if (childNode) {
            node.appendChild(childNode)
        }
    }

    return node
}

},{"../vnode/handle-thunk.js":24,"../vnode/is-vnode.js":27,"../vnode/is-vtext.js":28,"../vnode/is-widget.js":29,"./apply-properties":14,"global/document":10}],16:[function(require,module,exports){
// Maps a virtual DOM tree onto a real DOM tree in an efficient manner.
// We don't want to read all of the DOM nodes in the tree so we use
// the in-order tree indexing to eliminate recursion down certain branches.
// We only recurse into a DOM node if we know that it contains a child of
// interest.

var noChild = {}

module.exports = domIndex

function domIndex(rootNode, tree, indices, nodes) {
    if (!indices || indices.length === 0) {
        return {}
    } else {
        indices.sort(ascending)
        return recurse(rootNode, tree, indices, nodes, 0)
    }
}

function recurse(rootNode, tree, indices, nodes, rootIndex) {
    nodes = nodes || {}


    if (rootNode) {
        if (indexInRange(indices, rootIndex, rootIndex)) {
            nodes[rootIndex] = rootNode
        }

        var vChildren = tree.children

        if (vChildren) {

            var childNodes = rootNode.childNodes

            for (var i = 0; i < tree.children.length; i++) {
                rootIndex += 1

                var vChild = vChildren[i] || noChild
                var nextIndex = rootIndex + (vChild.count || 0)

                // skip recursion down the tree if there are no nodes down here
                if (indexInRange(indices, rootIndex, nextIndex)) {
                    recurse(childNodes[i], vChild, indices, nodes, rootIndex)
                }

                rootIndex = nextIndex
            }
        }
    }

    return nodes
}

// Binary search for an index in the interval [left, right]
function indexInRange(indices, left, right) {
    if (indices.length === 0) {
        return false
    }

    var minIndex = 0
    var maxIndex = indices.length - 1
    var currentIndex
    var currentItem

    while (minIndex <= maxIndex) {
        currentIndex = ((maxIndex + minIndex) / 2) >> 0
        currentItem = indices[currentIndex]

        if (minIndex === maxIndex) {
            return currentItem >= left && currentItem <= right
        } else if (currentItem < left) {
            minIndex = currentIndex + 1
        } else  if (currentItem > right) {
            maxIndex = currentIndex - 1
        } else {
            return true
        }
    }

    return false;
}

function ascending(a, b) {
    return a > b ? 1 : -1
}

},{}],17:[function(require,module,exports){
var applyProperties = require("./apply-properties")

var isWidget = require("../vnode/is-widget.js")
var VPatch = require("../vnode/vpatch.js")

var updateWidget = require("./update-widget")

module.exports = applyPatch

function applyPatch(vpatch, domNode, renderOptions) {
    var type = vpatch.type
    var vNode = vpatch.vNode
    var patch = vpatch.patch

    switch (type) {
        case VPatch.REMOVE:
            return removeNode(domNode, vNode)
        case VPatch.INSERT:
            return insertNode(domNode, patch, renderOptions)
        case VPatch.VTEXT:
            return stringPatch(domNode, vNode, patch, renderOptions)
        case VPatch.WIDGET:
            return widgetPatch(domNode, vNode, patch, renderOptions)
        case VPatch.VNODE:
            return vNodePatch(domNode, vNode, patch, renderOptions)
        case VPatch.ORDER:
            reorderChildren(domNode, patch)
            return domNode
        case VPatch.PROPS:
            applyProperties(domNode, patch, vNode.properties)
            return domNode
        case VPatch.THUNK:
            return replaceRoot(domNode,
                renderOptions.patch(domNode, patch, renderOptions))
        default:
            return domNode
    }
}

function removeNode(domNode, vNode) {
    var parentNode = domNode.parentNode

    if (parentNode) {
        parentNode.removeChild(domNode)
    }

    destroyWidget(domNode, vNode);

    return null
}

function insertNode(parentNode, vNode, renderOptions) {
    var newNode = renderOptions.render(vNode, renderOptions)

    if (parentNode) {
        parentNode.appendChild(newNode)
    }

    return parentNode
}

function stringPatch(domNode, leftVNode, vText, renderOptions) {
    var newNode

    if (domNode.nodeType === 3) {
        domNode.replaceData(0, domNode.length, vText.text)
        newNode = domNode
    } else {
        var parentNode = domNode.parentNode
        newNode = renderOptions.render(vText, renderOptions)

        if (parentNode && newNode !== domNode) {
            parentNode.replaceChild(newNode, domNode)
        }
    }

    return newNode
}

function widgetPatch(domNode, leftVNode, widget, renderOptions) {
    var updating = updateWidget(leftVNode, widget)
    var newNode

    if (updating) {
        newNode = widget.update(leftVNode, domNode) || domNode
    } else {
        newNode = renderOptions.render(widget, renderOptions)
    }

    var parentNode = domNode.parentNode

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    if (!updating) {
        destroyWidget(domNode, leftVNode)
    }

    return newNode
}

function vNodePatch(domNode, leftVNode, vNode, renderOptions) {
    var parentNode = domNode.parentNode
    var newNode = renderOptions.render(vNode, renderOptions)

    if (parentNode && newNode !== domNode) {
        parentNode.replaceChild(newNode, domNode)
    }

    return newNode
}

function destroyWidget(domNode, w) {
    if (typeof w.destroy === "function" && isWidget(w)) {
        w.destroy(domNode)
    }
}

function reorderChildren(domNode, moves) {
    var childNodes = domNode.childNodes
    var keyMap = {}
    var node
    var remove
    var insert

    for (var i = 0; i < moves.removes.length; i++) {
        remove = moves.removes[i]
        node = childNodes[remove.from]
        if (remove.key) {
            keyMap[remove.key] = node
        }
        domNode.removeChild(node)
    }

    var length = childNodes.length
    for (var j = 0; j < moves.inserts.length; j++) {
        insert = moves.inserts[j]
        node = keyMap[insert.key]
        // this is the weirdest bug i've ever seen in webkit
        domNode.insertBefore(node, insert.to >= length++ ? null : childNodes[insert.to])
    }
}

function replaceRoot(oldRoot, newRoot) {
    if (oldRoot && newRoot && oldRoot !== newRoot && oldRoot.parentNode) {
        oldRoot.parentNode.replaceChild(newRoot, oldRoot)
    }

    return newRoot;
}

},{"../vnode/is-widget.js":29,"../vnode/vpatch.js":32,"./apply-properties":14,"./update-widget":19}],18:[function(require,module,exports){
var document = require("global/document")
var isArray = require("x-is-array")

var render = require("./create-element")
var domIndex = require("./dom-index")
var patchOp = require("./patch-op")
module.exports = patch

function patch(rootNode, patches, renderOptions) {
    renderOptions = renderOptions || {}
    renderOptions.patch = renderOptions.patch || patchRecursive
    renderOptions.render = renderOptions.render || render

    return renderOptions.patch(rootNode, patches, renderOptions)
}

function patchRecursive(rootNode, patches, renderOptions) {
    var indices = patchIndices(patches)

    if (indices.length === 0) {
        return rootNode
    }

    var index = domIndex(rootNode, patches.a, indices)
    var ownerDocument = rootNode.ownerDocument

    if (!renderOptions.document && ownerDocument !== document) {
        renderOptions.document = ownerDocument
    }

    for (var i = 0; i < indices.length; i++) {
        var nodeIndex = indices[i]
        rootNode = applyPatch(rootNode,
            index[nodeIndex],
            patches[nodeIndex],
            renderOptions)
    }

    return rootNode
}

function applyPatch(rootNode, domNode, patchList, renderOptions) {
    if (!domNode) {
        return rootNode
    }

    var newNode

    if (isArray(patchList)) {
        for (var i = 0; i < patchList.length; i++) {
            newNode = patchOp(patchList[i], domNode, renderOptions)

            if (domNode === rootNode) {
                rootNode = newNode
            }
        }
    } else {
        newNode = patchOp(patchList, domNode, renderOptions)

        if (domNode === rootNode) {
            rootNode = newNode
        }
    }

    return rootNode
}

function patchIndices(patches) {
    var indices = []

    for (var key in patches) {
        if (key !== "a") {
            indices.push(Number(key))
        }
    }

    return indices
}

},{"./create-element":15,"./dom-index":16,"./patch-op":17,"global/document":10,"x-is-array":12}],19:[function(require,module,exports){
var isWidget = require("../vnode/is-widget.js")

module.exports = updateWidget

function updateWidget(a, b) {
    if (isWidget(a) && isWidget(b)) {
        if ("name" in a && "name" in b) {
            return a.id === b.id
        } else {
            return a.init === b.init
        }
    }

    return false
}

},{"../vnode/is-widget.js":29}],20:[function(require,module,exports){
'use strict';

var EvStore = require('ev-store');

module.exports = EvHook;

function EvHook(value) {
    if (!(this instanceof EvHook)) {
        return new EvHook(value);
    }

    this.value = value;
}

EvHook.prototype.hook = function (node, propertyName) {
    var es = EvStore(node);
    var propName = propertyName.substr(3);

    es[propName] = this.value;
};

EvHook.prototype.unhook = function(node, propertyName) {
    var es = EvStore(node);
    var propName = propertyName.substr(3);

    es[propName] = undefined;
};

},{"ev-store":7}],21:[function(require,module,exports){
'use strict';

module.exports = SoftSetHook;

function SoftSetHook(value) {
    if (!(this instanceof SoftSetHook)) {
        return new SoftSetHook(value);
    }

    this.value = value;
}

SoftSetHook.prototype.hook = function (node, propertyName) {
    if (node[propertyName] !== this.value) {
        node[propertyName] = this.value;
    }
};

},{}],22:[function(require,module,exports){
'use strict';

var isArray = require('x-is-array');

var VNode = require('../vnode/vnode.js');
var VText = require('../vnode/vtext.js');
var isVNode = require('../vnode/is-vnode');
var isVText = require('../vnode/is-vtext');
var isWidget = require('../vnode/is-widget');
var isHook = require('../vnode/is-vhook');
var isVThunk = require('../vnode/is-thunk');

var parseTag = require('./parse-tag.js');
var softSetHook = require('./hooks/soft-set-hook.js');
var evHook = require('./hooks/ev-hook.js');

module.exports = h;

function h(tagName, properties, children) {
    var childNodes = [];
    var tag, props, key, namespace;

    if (!children && isChildren(properties)) {
        children = properties;
        props = {};
    }

    props = props || properties || {};
    tag = parseTag(tagName, props);

    // support keys
    if (props.hasOwnProperty('key')) {
        key = props.key;
        props.key = undefined;
    }

    // support namespace
    if (props.hasOwnProperty('namespace')) {
        namespace = props.namespace;
        props.namespace = undefined;
    }

    // fix cursor bug
    if (tag === 'INPUT' &&
        !namespace &&
        props.hasOwnProperty('value') &&
        props.value !== undefined &&
        !isHook(props.value)
    ) {
        props.value = softSetHook(props.value);
    }

    transformProperties(props);

    if (children !== undefined && children !== null) {
        addChild(children, childNodes, tag, props);
    }


    return new VNode(tag, props, childNodes, key, namespace);
}

function addChild(c, childNodes, tag, props) {
    if (typeof c === 'string') {
        childNodes.push(new VText(c));
    } else if (typeof c === 'number') {
        childNodes.push(new VText(String(c)));
    } else if (isChild(c)) {
        childNodes.push(c);
    } else if (isArray(c)) {
        for (var i = 0; i < c.length; i++) {
            addChild(c[i], childNodes, tag, props);
        }
    } else if (c === null || c === undefined) {
        return;
    } else {
        throw UnexpectedVirtualElement({
            foreignObject: c,
            parentVnode: {
                tagName: tag,
                properties: props
            }
        });
    }
}

function transformProperties(props) {
    for (var propName in props) {
        if (props.hasOwnProperty(propName)) {
            var value = props[propName];

            if (isHook(value)) {
                continue;
            }

            if (propName.substr(0, 3) === 'ev-') {
                // add ev-foo support
                props[propName] = evHook(value);
            }
        }
    }
}

function isChild(x) {
    return isVNode(x) || isVText(x) || isWidget(x) || isVThunk(x);
}

function isChildren(x) {
    return typeof x === 'string' || isArray(x) || isChild(x);
}

function UnexpectedVirtualElement(data) {
    var err = new Error();

    err.type = 'virtual-hyperscript.unexpected.virtual-element';
    err.message = 'Unexpected virtual child passed to h().\n' +
        'Expected a VNode / Vthunk / VWidget / string but:\n' +
        'got:\n' +
        errorString(data.foreignObject) +
        '.\n' +
        'The parent vnode is:\n' +
        errorString(data.parentVnode)
        '\n' +
        'Suggested fix: change your `h(..., [ ... ])` callsite.';
    err.foreignObject = data.foreignObject;
    err.parentVnode = data.parentVnode;

    return err;
}

function errorString(obj) {
    try {
        return JSON.stringify(obj, null, '    ');
    } catch (e) {
        return String(obj);
    }
}

},{"../vnode/is-thunk":25,"../vnode/is-vhook":26,"../vnode/is-vnode":27,"../vnode/is-vtext":28,"../vnode/is-widget":29,"../vnode/vnode.js":31,"../vnode/vtext.js":33,"./hooks/ev-hook.js":20,"./hooks/soft-set-hook.js":21,"./parse-tag.js":23,"x-is-array":12}],23:[function(require,module,exports){
'use strict';

var split = require('browser-split');

var classIdSplit = /([\.#]?[a-zA-Z0-9\u007F-\uFFFF_:-]+)/;
var notClassId = /^\.|#/;

module.exports = parseTag;

function parseTag(tag, props) {
    if (!tag) {
        return 'DIV';
    }

    var noId = !(props.hasOwnProperty('id'));

    var tagParts = split(tag, classIdSplit);
    var tagName = null;

    if (notClassId.test(tagParts[1])) {
        tagName = 'DIV';
    }

    var classes, part, type, i;

    for (i = 0; i < tagParts.length; i++) {
        part = tagParts[i];

        if (!part) {
            continue;
        }

        type = part.charAt(0);

        if (!tagName) {
            tagName = part;
        } else if (type === '.') {
            classes = classes || [];
            classes.push(part.substring(1, part.length));
        } else if (type === '#' && noId) {
            props.id = part.substring(1, part.length);
        }
    }

    if (classes) {
        if (props.className) {
            classes.push(props.className);
        }

        props.className = classes.join(' ');
    }

    return props.namespace ? tagName : tagName.toUpperCase();
}

},{"browser-split":5}],24:[function(require,module,exports){
var isVNode = require("./is-vnode")
var isVText = require("./is-vtext")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")

module.exports = handleThunk

function handleThunk(a, b) {
    var renderedA = a
    var renderedB = b

    if (isThunk(b)) {
        renderedB = renderThunk(b, a)
    }

    if (isThunk(a)) {
        renderedA = renderThunk(a, null)
    }

    return {
        a: renderedA,
        b: renderedB
    }
}

function renderThunk(thunk, previous) {
    var renderedThunk = thunk.vnode

    if (!renderedThunk) {
        renderedThunk = thunk.vnode = thunk.render(previous)
    }

    if (!(isVNode(renderedThunk) ||
            isVText(renderedThunk) ||
            isWidget(renderedThunk))) {
        throw new Error("thunk did not return a valid node");
    }

    return renderedThunk
}

},{"./is-thunk":25,"./is-vnode":27,"./is-vtext":28,"./is-widget":29}],25:[function(require,module,exports){
module.exports = isThunk

function isThunk(t) {
    return t && t.type === "Thunk"
}

},{}],26:[function(require,module,exports){
module.exports = isHook

function isHook(hook) {
    return hook &&
      (typeof hook.hook === "function" && !hook.hasOwnProperty("hook") ||
       typeof hook.unhook === "function" && !hook.hasOwnProperty("unhook"))
}

},{}],27:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualNode

function isVirtualNode(x) {
    return x && x.type === "VirtualNode" && x.version === version
}

},{"./version":30}],28:[function(require,module,exports){
var version = require("./version")

module.exports = isVirtualText

function isVirtualText(x) {
    return x && x.type === "VirtualText" && x.version === version
}

},{"./version":30}],29:[function(require,module,exports){
module.exports = isWidget

function isWidget(w) {
    return w && w.type === "Widget"
}

},{}],30:[function(require,module,exports){
module.exports = "2"

},{}],31:[function(require,module,exports){
var version = require("./version")
var isVNode = require("./is-vnode")
var isWidget = require("./is-widget")
var isThunk = require("./is-thunk")
var isVHook = require("./is-vhook")

module.exports = VirtualNode

var noProperties = {}
var noChildren = []

function VirtualNode(tagName, properties, children, key, namespace) {
    this.tagName = tagName
    this.properties = properties || noProperties
    this.children = children || noChildren
    this.key = key != null ? String(key) : undefined
    this.namespace = (typeof namespace === "string") ? namespace : null

    var count = (children && children.length) || 0
    var descendants = 0
    var hasWidgets = false
    var hasThunks = false
    var descendantHooks = false
    var hooks

    for (var propName in properties) {
        if (properties.hasOwnProperty(propName)) {
            var property = properties[propName]
            if (isVHook(property) && property.unhook) {
                if (!hooks) {
                    hooks = {}
                }

                hooks[propName] = property
            }
        }
    }

    for (var i = 0; i < count; i++) {
        var child = children[i]
        if (isVNode(child)) {
            descendants += child.count || 0

            if (!hasWidgets && child.hasWidgets) {
                hasWidgets = true
            }

            if (!hasThunks && child.hasThunks) {
                hasThunks = true
            }

            if (!descendantHooks && (child.hooks || child.descendantHooks)) {
                descendantHooks = true
            }
        } else if (!hasWidgets && isWidget(child)) {
            if (typeof child.destroy === "function") {
                hasWidgets = true
            }
        } else if (!hasThunks && isThunk(child)) {
            hasThunks = true;
        }
    }

    this.count = count + descendants
    this.hasWidgets = hasWidgets
    this.hasThunks = hasThunks
    this.hooks = hooks
    this.descendantHooks = descendantHooks
}

VirtualNode.prototype.version = version
VirtualNode.prototype.type = "VirtualNode"

},{"./is-thunk":25,"./is-vhook":26,"./is-vnode":27,"./is-widget":29,"./version":30}],32:[function(require,module,exports){
var version = require("./version")

VirtualPatch.NONE = 0
VirtualPatch.VTEXT = 1
VirtualPatch.VNODE = 2
VirtualPatch.WIDGET = 3
VirtualPatch.PROPS = 4
VirtualPatch.ORDER = 5
VirtualPatch.INSERT = 6
VirtualPatch.REMOVE = 7
VirtualPatch.THUNK = 8

module.exports = VirtualPatch

function VirtualPatch(type, vNode, patch) {
    this.type = Number(type)
    this.vNode = vNode
    this.patch = patch
}

VirtualPatch.prototype.version = version
VirtualPatch.prototype.type = "VirtualPatch"

},{"./version":30}],33:[function(require,module,exports){
var version = require("./version")

module.exports = VirtualText

function VirtualText(text) {
    this.text = String(text)
}

VirtualText.prototype.version = version
VirtualText.prototype.type = "VirtualText"

},{"./version":30}],34:[function(require,module,exports){
var isObject = require("is-object")
var isHook = require("../vnode/is-vhook")

module.exports = diffProps

function diffProps(a, b) {
    var diff

    for (var aKey in a) {
        if (!(aKey in b)) {
            diff = diff || {}
            diff[aKey] = undefined
        }

        var aValue = a[aKey]
        var bValue = b[aKey]

        if (aValue === bValue) {
            continue
        } else if (isObject(aValue) && isObject(bValue)) {
            if (getPrototype(bValue) !== getPrototype(aValue)) {
                diff = diff || {}
                diff[aKey] = bValue
            } else if (isHook(bValue)) {
                 diff = diff || {}
                 diff[aKey] = bValue
            } else {
                var objectDiff = diffProps(aValue, bValue)
                if (objectDiff) {
                    diff = diff || {}
                    diff[aKey] = objectDiff
                }
            }
        } else {
            diff = diff || {}
            diff[aKey] = bValue
        }
    }

    for (var bKey in b) {
        if (!(bKey in a)) {
            diff = diff || {}
            diff[bKey] = b[bKey]
        }
    }

    return diff
}

function getPrototype(value) {
  if (Object.getPrototypeOf) {
    return Object.getPrototypeOf(value)
  } else if (value.__proto__) {
    return value.__proto__
  } else if (value.constructor) {
    return value.constructor.prototype
  }
}

},{"../vnode/is-vhook":26,"is-object":11}],35:[function(require,module,exports){
var isArray = require("x-is-array")

var VPatch = require("../vnode/vpatch")
var isVNode = require("../vnode/is-vnode")
var isVText = require("../vnode/is-vtext")
var isWidget = require("../vnode/is-widget")
var isThunk = require("../vnode/is-thunk")
var handleThunk = require("../vnode/handle-thunk")

var diffProps = require("./diff-props")

module.exports = diff

function diff(a, b) {
    var patch = { a: a }
    walk(a, b, patch, 0)
    return patch
}

function walk(a, b, patch, index) {
    if (a === b) {
        return
    }

    var apply = patch[index]
    var applyClear = false

    if (isThunk(a) || isThunk(b)) {
        thunks(a, b, patch, index)
    } else if (b == null) {

        // If a is a widget we will add a remove patch for it
        // Otherwise any child widgets/hooks must be destroyed.
        // This prevents adding two remove patches for a widget.
        if (!isWidget(a)) {
            clearState(a, patch, index)
            apply = patch[index]
        }

        apply = appendPatch(apply, new VPatch(VPatch.REMOVE, a, b))
    } else if (isVNode(b)) {
        if (isVNode(a)) {
            if (a.tagName === b.tagName &&
                a.namespace === b.namespace &&
                a.key === b.key) {
                var propsPatch = diffProps(a.properties, b.properties)
                if (propsPatch) {
                    apply = appendPatch(apply,
                        new VPatch(VPatch.PROPS, a, propsPatch))
                }
                apply = diffChildren(a, b, patch, apply, index)
            } else {
                apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
                applyClear = true
            }
        } else {
            apply = appendPatch(apply, new VPatch(VPatch.VNODE, a, b))
            applyClear = true
        }
    } else if (isVText(b)) {
        if (!isVText(a)) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
            applyClear = true
        } else if (a.text !== b.text) {
            apply = appendPatch(apply, new VPatch(VPatch.VTEXT, a, b))
        }
    } else if (isWidget(b)) {
        if (!isWidget(a)) {
            applyClear = true
        }

        apply = appendPatch(apply, new VPatch(VPatch.WIDGET, a, b))
    }

    if (apply) {
        patch[index] = apply
    }

    if (applyClear) {
        clearState(a, patch, index)
    }
}

function diffChildren(a, b, patch, apply, index) {
    var aChildren = a.children
    var orderedSet = reorder(aChildren, b.children)
    var bChildren = orderedSet.children

    var aLen = aChildren.length
    var bLen = bChildren.length
    var len = aLen > bLen ? aLen : bLen

    for (var i = 0; i < len; i++) {
        var leftNode = aChildren[i]
        var rightNode = bChildren[i]
        index += 1

        if (!leftNode) {
            if (rightNode) {
                // Excess nodes in b need to be added
                apply = appendPatch(apply,
                    new VPatch(VPatch.INSERT, null, rightNode))
            }
        } else {
            walk(leftNode, rightNode, patch, index)
        }

        if (isVNode(leftNode) && leftNode.count) {
            index += leftNode.count
        }
    }

    if (orderedSet.moves) {
        // Reorder nodes last
        apply = appendPatch(apply, new VPatch(
            VPatch.ORDER,
            a,
            orderedSet.moves
        ))
    }

    return apply
}

function clearState(vNode, patch, index) {
    // TODO: Make this a single walk, not two
    unhook(vNode, patch, index)
    destroyWidgets(vNode, patch, index)
}

// Patch records for all destroyed widgets must be added because we need
// a DOM node reference for the destroy function
function destroyWidgets(vNode, patch, index) {
    if (isWidget(vNode)) {
        if (typeof vNode.destroy === "function") {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(VPatch.REMOVE, vNode, null)
            )
        }
    } else if (isVNode(vNode) && (vNode.hasWidgets || vNode.hasThunks)) {
        var children = vNode.children
        var len = children.length
        for (var i = 0; i < len; i++) {
            var child = children[i]
            index += 1

            destroyWidgets(child, patch, index)

            if (isVNode(child) && child.count) {
                index += child.count
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

// Create a sub-patch for thunks
function thunks(a, b, patch, index) {
    var nodes = handleThunk(a, b)
    var thunkPatch = diff(nodes.a, nodes.b)
    if (hasPatches(thunkPatch)) {
        patch[index] = new VPatch(VPatch.THUNK, null, thunkPatch)
    }
}

function hasPatches(patch) {
    for (var index in patch) {
        if (index !== "a") {
            return true
        }
    }

    return false
}

// Execute hooks when two nodes are identical
function unhook(vNode, patch, index) {
    if (isVNode(vNode)) {
        if (vNode.hooks) {
            patch[index] = appendPatch(
                patch[index],
                new VPatch(
                    VPatch.PROPS,
                    vNode,
                    undefinedKeys(vNode.hooks)
                )
            )
        }

        if (vNode.descendantHooks || vNode.hasThunks) {
            var children = vNode.children
            var len = children.length
            for (var i = 0; i < len; i++) {
                var child = children[i]
                index += 1

                unhook(child, patch, index)

                if (isVNode(child) && child.count) {
                    index += child.count
                }
            }
        }
    } else if (isThunk(vNode)) {
        thunks(vNode, null, patch, index)
    }
}

function undefinedKeys(obj) {
    var result = {}

    for (var key in obj) {
        result[key] = undefined
    }

    return result
}

// List diff, naive left to right reordering
function reorder(aChildren, bChildren) {
    // O(M) time, O(M) memory
    var bChildIndex = keyIndex(bChildren)
    var bKeys = bChildIndex.keys
    var bFree = bChildIndex.free

    if (bFree.length === bChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(N) time, O(N) memory
    var aChildIndex = keyIndex(aChildren)
    var aKeys = aChildIndex.keys
    var aFree = aChildIndex.free

    if (aFree.length === aChildren.length) {
        return {
            children: bChildren,
            moves: null
        }
    }

    // O(MAX(N, M)) memory
    var newChildren = []

    var freeIndex = 0
    var freeCount = bFree.length
    var deletedItems = 0

    // Iterate through a and match a node in b
    // O(N) time,
    for (var i = 0 ; i < aChildren.length; i++) {
        var aItem = aChildren[i]
        var itemIndex

        if (aItem.key) {
            if (bKeys.hasOwnProperty(aItem.key)) {
                // Match up the old keys
                itemIndex = bKeys[aItem.key]
                newChildren.push(bChildren[itemIndex])

            } else {
                // Remove old keyed items
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        } else {
            // Match the item in a with the next free item in b
            if (freeIndex < freeCount) {
                itemIndex = bFree[freeIndex++]
                newChildren.push(bChildren[itemIndex])
            } else {
                // There are no free items in b to match with
                // the free items in a, so the extra free nodes
                // are deleted.
                itemIndex = i - deletedItems++
                newChildren.push(null)
            }
        }
    }

    var lastFreeIndex = freeIndex >= bFree.length ?
        bChildren.length :
        bFree[freeIndex]

    // Iterate through b and append any new keys
    // O(M) time
    for (var j = 0; j < bChildren.length; j++) {
        var newItem = bChildren[j]

        if (newItem.key) {
            if (!aKeys.hasOwnProperty(newItem.key)) {
                // Add any new keyed items
                // We are adding new items to the end and then sorting them
                // in place. In future we should insert new items in place.
                newChildren.push(newItem)
            }
        } else if (j >= lastFreeIndex) {
            // Add any leftover non-keyed items
            newChildren.push(newItem)
        }
    }

    var simulate = newChildren.slice()
    var simulateIndex = 0
    var removes = []
    var inserts = []
    var simulateItem

    for (var k = 0; k < bChildren.length;) {
        var wantedItem = bChildren[k]
        simulateItem = simulate[simulateIndex]

        // remove items
        while (simulateItem === null && simulate.length) {
            removes.push(remove(simulate, simulateIndex, null))
            simulateItem = simulate[simulateIndex]
        }

        if (!simulateItem || simulateItem.key !== wantedItem.key) {
            // if we need a key in this position...
            if (wantedItem.key) {
                if (simulateItem && simulateItem.key) {
                    // if an insert doesn't put this key in place, it needs to move
                    if (bKeys[simulateItem.key] !== k + 1) {
                        removes.push(remove(simulate, simulateIndex, simulateItem.key))
                        simulateItem = simulate[simulateIndex]
                        // if the remove didn't put the wanted item in place, we need to insert it
                        if (!simulateItem || simulateItem.key !== wantedItem.key) {
                            inserts.push({key: wantedItem.key, to: k})
                        }
                        // items are matching, so skip ahead
                        else {
                            simulateIndex++
                        }
                    }
                    else {
                        inserts.push({key: wantedItem.key, to: k})
                    }
                }
                else {
                    inserts.push({key: wantedItem.key, to: k})
                }
                k++
            }
            // a key in simulate has no matching wanted key, remove it
            else if (simulateItem && simulateItem.key) {
                removes.push(remove(simulate, simulateIndex, simulateItem.key))
            }
        }
        else {
            simulateIndex++
            k++
        }
    }

    // remove all the remaining nodes from simulate
    while(simulateIndex < simulate.length) {
        simulateItem = simulate[simulateIndex]
        removes.push(remove(simulate, simulateIndex, simulateItem && simulateItem.key))
    }

    // If the only moves we have are deletes then we can just
    // let the delete patch remove these items.
    if (removes.length === deletedItems && !inserts.length) {
        return {
            children: newChildren,
            moves: null
        }
    }

    return {
        children: newChildren,
        moves: {
            removes: removes,
            inserts: inserts
        }
    }
}

function remove(arr, index, key) {
    arr.splice(index, 1)

    return {
        from: index,
        key: key
    }
}

function keyIndex(children) {
    var keys = {}
    var free = []
    var length = children.length

    for (var i = 0; i < length; i++) {
        var child = children[i]

        if (child.key) {
            keys[child.key] = i
        } else {
            free.push(i)
        }
    }

    return {
        keys: keys,     // A hash of key name to index
        free: free      // An array of unkeyed item indices
    }
}

function appendPatch(apply, patch) {
    if (apply) {
        if (isArray(apply)) {
            apply.push(patch)
        } else {
            apply = [apply, patch]
        }

        return apply
    } else {
        return patch
    }
}

},{"../vnode/handle-thunk":24,"../vnode/is-thunk":25,"../vnode/is-vnode":27,"../vnode/is-vtext":28,"../vnode/is-widget":29,"../vnode/vpatch":32,"./diff-props":34,"x-is-array":12}]},{},[4])(4)
});
var h,aa=aa||{},ba=this;function ca(){}
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}function da(a){var b=n(a);return"array"==b||"object"==b&&"number"==typeof a.length}function ea(a){return"string"==typeof a}function fa(a){return"function"==n(a)}function ga(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}function ia(a){return a[ja]||(a[ja]=++ka)}var ja="closure_uid_"+(1E9*Math.random()>>>0),ka=0;function la(a,b,c){return a.call.apply(a.bind,arguments)}
function ma(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(c,d);return a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function na(a,b,c){na=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?la:ma;return na.apply(null,arguments)}var oa=Date.now||function(){return+new Date};
function pa(a,b){function c(){}c.prototype=b.prototype;a.cg=b.prototype;a.prototype=new c;a.prototype.constructor=a;a.Ee=function(a,c,f){for(var g=Array(arguments.length-2),k=2;k<arguments.length;k++)g[k-2]=arguments[k];return b.prototype[c].apply(a,g)}};function qa(a){if(Error.captureStackTrace)Error.captureStackTrace(this,qa);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}pa(qa,Error);qa.prototype.name="CustomError";var ra;function sa(a,b){for(var c=a.split("%s"),d="",e=Array.prototype.slice.call(arguments,1);e.length&&1<c.length;)d+=c.shift()+e.shift();return d+c.join("%s")}var ta=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")};function ua(a){return Array.prototype.join.call(arguments,"")}function va(a,b){return a<b?-1:a>b?1:0};function wa(a,b){b.unshift(a);qa.call(this,sa.apply(null,b));b.shift()}pa(wa,qa);wa.prototype.name="AssertionError";function xa(a,b){throw new wa("Failure"+(a?": "+a:""),Array.prototype.slice.call(arguments,1));};var ya=Array.prototype,za=ya.indexOf?function(a,b,c){return ya.indexOf.call(a,b,c)}:function(a,b,c){c=null==c?0:0>c?Math.max(0,a.length+c):c;if(ea(a))return ea(b)&&1==b.length?a.indexOf(b,c):-1;for(;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},Aa=ya.forEach?function(a,b,c){ya.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=ea(a)?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ba=ya.filter?function(a,b,c){return ya.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],
f=0,g=ea(a)?a.split(""):a,k=0;k<d;k++)if(k in g){var l=g[k];b.call(c,l,k,a)&&(e[f++]=l)}return e},Ea=ya.some?function(a,b,c){return ya.some.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=ea(a)?a.split(""):a,f=0;f<d;f++)if(f in e&&b.call(c,e[f],f,a))return!0;return!1};function Ha(a){var b;a:{b=Ia;for(var c=a.length,d=ea(a)?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){b=e;break a}b=-1}return 0>b?null:ea(a)?a.charAt(b):a[b]}function Ja(a){return ya.concat.apply(ya,arguments)}
function Ka(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}function La(a,b){a.sort(b||Ma)}function Na(a,b){for(var c=0;c<a.length;c++)a[c]={index:c,value:a[c]};var d=b||Ma;La(a,function(a,b){return d(a.value,b.value)||a.index-b.index});for(c=0;c<a.length;c++)a[c]=a[c].value}function Ma(a,b){return a>b?1:a<b?-1:0};var Oa;a:{var Ra=ba.navigator;if(Ra){var Sa=Ra.userAgent;if(Sa){Oa=Sa;break a}}Oa=""}function Ta(a){return-1!=Oa.indexOf(a)};function Va(a,b){for(var c in a)b.call(void 0,a[c],c,a)}function Wa(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}function Xa(a){var b=[],c=0,d;for(d in a)b[c++]=d;return b}var $a="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ab(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<$a.length;f++)c=$a[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
function bb(a){var b=arguments.length;if(1==b&&"array"==n(arguments[0]))return bb.apply(null,arguments[0]);for(var c={},d=0;d<b;d++)c[arguments[d]]=!0;return c};function cb(){return Ta("Opera")||Ta("OPR")}function fb(){return Ta("Edge")||Ta("Trident")||Ta("MSIE")}function gb(){return(Ta("Chrome")||Ta("CriOS"))&&!cb()&&!fb()};function hb(){return Ta("Edge")};var ib=cb(),kb=fb(),lb=Ta("Gecko")&&!(-1!=Oa.toLowerCase().indexOf("webkit")&&!hb())&&!(Ta("Trident")||Ta("MSIE"))&&!hb(),mb=-1!=Oa.toLowerCase().indexOf("webkit")&&!hb();function nb(){var a=Oa;if(lb)return/rv\:([^\);]+)(\)|;)/.exec(a);if(kb&&hb())return/Edge\/([\d\.]+)/.exec(a);if(kb)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(mb)return/WebKit\/(\S+)/.exec(a)}function ob(){var a=ba.document;return a?a.documentMode:void 0}
var pb=function(){if(ib&&ba.opera){var a=ba.opera.version;return fa(a)?a():a}var a="",b=nb();b&&(a=b?b[1]:"");return kb&&!hb()&&(b=ob(),b>parseFloat(a))?String(b):a}(),qb={};
function rb(a){var b;if(!(b=qb[a])){b=0;for(var c=ta(String(pb)).split("."),d=ta(String(a)).split("."),e=Math.max(c.length,d.length),f=0;0==b&&f<e;f++){var g=c[f]||"",k=d[f]||"",l=RegExp("(\\d*)(\\D*)","g"),m=RegExp("(\\d*)(\\D*)","g");do{var p=l.exec(g)||["","",""],q=m.exec(k)||["","",""];if(0==p[0].length&&0==q[0].length)break;b=va(0==p[1].length?0:parseInt(p[1],10),0==q[1].length?0:parseInt(q[1],10))||va(0==p[2].length,0==q[2].length)||va(p[2],q[2])}while(0==b)}b=qb[a]=0<=b}return b}
var sb=ba.document,tb=ob(),ub=!sb||!kb||!tb&&hb()?void 0:tb||("CSS1Compat"==sb.compatMode?parseInt(pb,10):5);var vb=!kb||kb&&(hb()||9<=ub),xb=kb&&!rb("9");!mb||rb("528");lb&&rb("1.9b")||kb&&rb("8")||ib&&rb("9.5")||mb&&rb("528");lb&&!rb("8")||kb&&rb("9");function yb(){0!=zb&&ia(this);this.fe=this.fe;this.Ci=this.Ci}var zb=0;yb.prototype.fe=!1;function Ab(a,b){this.type=a;this.currentTarget=this.target=b;this.defaultPrevented=this.ld=!1;this.jh=!0}Ab.prototype.stopPropagation=function(){this.ld=!0};Ab.prototype.preventDefault=function(){this.defaultPrevented=!0;this.jh=!1};function Cb(a){return mb?"webkit"+a:ib?"o"+a.toLowerCase():a.toLowerCase()}
var Db={hj:"click",hl:"rightclick",sj:"dblclick",gk:"mousedown",mk:"mouseup",lk:"mouseover",kk:"mouseout",jk:"mousemove",hk:"mouseenter",ik:"mouseleave",ll:"selectstart",Bl:"wheel",Wj:"keypress",Vj:"keydown",Xj:"keyup",ej:"blur",Mj:"focus",tj:"deactivate",Nj:kb?"focusin":"DOMFocusIn",Oj:kb?"focusout":"DOMFocusOut",fj:"change",el:"reset",kl:"select",ol:"submit",Uj:"input",$k:"propertychange",Ij:"dragstart",Dj:"drag",Fj:"dragenter",Hj:"dragover",Gj:"dragleave",Jj:"drop",Ej:"dragend",vl:"touchstart",
ul:"touchmove",tl:"touchend",sl:"touchcancel",dj:"beforeunload",oj:"consolemessage",pj:"contextmenu",xj:"DOMContentLoaded",ERROR:"error",Rj:"help",Yj:"load",ek:"losecapture",Jk:"orientationchange",bl:"readystatechange",fl:"resize",jl:"scroll",yl:"unload",Qj:"hashchange",Kk:"pagehide",Lk:"pageshow",Yk:"popstate",qj:"copy",Mk:"paste",rj:"cut",aj:"beforecopy",bj:"beforecut",cj:"beforepaste",Hk:"online",Fk:"offline",uh:"message",nj:"connect",Zi:Cb("AnimationStart"),Xi:Cb("AnimationEnd"),Yi:Cb("AnimationIteration"),
wl:Cb("TransitionEnd"),Rk:"pointerdown",Xk:"pointerup",Qk:"pointercancel",Uk:"pointermove",Wk:"pointerover",Vk:"pointerout",Sk:"pointerenter",Tk:"pointerleave",Pj:"gotpointercapture",fk:"lostpointercapture",nk:"MSGestureChange",ok:"MSGestureEnd",pk:"MSGestureHold",qk:"MSGestureStart",rk:"MSGestureTap",sk:"MSGotPointerCapture",tk:"MSInertiaStart",uk:"MSLostPointerCapture",vk:"MSPointerCancel",wk:"MSPointerDown",xk:"MSPointerEnter",yk:"MSPointerHover",zk:"MSPointerLeave",Ak:"MSPointerMove",Bk:"MSPointerOut",
Ck:"MSPointerOver",Dk:"MSPointerUp",ql:"text",rl:"textInput",lj:"compositionstart",mj:"compositionupdate",kj:"compositionend",Lj:"exit",Zj:"loadabort",$j:"loadcommit",ak:"loadredirect",bk:"loadstart",ck:"loadstop",gl:"responsive",ml:"sizechanged",zl:"unresponsive",Al:"visibilitychange",nl:"storage",Cj:"DOMSubtreeModified",yj:"DOMNodeInserted",Aj:"DOMNodeRemoved",Bj:"DOMNodeRemovedFromDocument",zj:"DOMNodeInsertedIntoDocument",vj:"DOMAttrModified",wj:"DOMCharacterDataModified"};function Eb(a){Eb[" "](a);return a}Eb[" "]=ca;function Fb(a,b){Ab.call(this,a?a.type:"");this.relatedTarget=this.currentTarget=this.target=null;this.charCode=this.keyCode=this.button=this.screenY=this.screenX=this.clientY=this.clientX=this.offsetY=this.offsetX=0;this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1;this.ge=this.state=null;a&&this.Hd(a,b)}pa(Fb,Ab);
Fb.prototype.Hd=function(a,b){var c=this.type=a.type;this.target=a.target||a.srcElement;this.currentTarget=b;var d=a.relatedTarget;if(d){if(lb){var e;a:{try{Eb(d.nodeName);e=!0;break a}catch(f){}e=!1}e||(d=null)}}else"mouseover"==c?d=a.fromElement:"mouseout"==c&&(d=a.toElement);this.relatedTarget=d;this.offsetX=mb||void 0!==a.offsetX?a.offsetX:a.layerX;this.offsetY=mb||void 0!==a.offsetY?a.offsetY:a.layerY;this.clientX=void 0!==a.clientX?a.clientX:a.pageX;this.clientY=void 0!==a.clientY?a.clientY:
a.pageY;this.screenX=a.screenX||0;this.screenY=a.screenY||0;this.button=a.button;this.keyCode=a.keyCode||0;this.charCode=a.charCode||("keypress"==c?a.keyCode:0);this.ctrlKey=a.ctrlKey;this.altKey=a.altKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.state=a.state;this.ge=a;a.defaultPrevented&&this.preventDefault()};Fb.prototype.stopPropagation=function(){Fb.cg.stopPropagation.call(this);this.ge.stopPropagation?this.ge.stopPropagation():this.ge.cancelBubble=!0};
Fb.prototype.preventDefault=function(){Fb.cg.preventDefault.call(this);var a=this.ge;if(a.preventDefault)a.preventDefault();else if(a.returnValue=!1,xb)try{if(a.ctrlKey||112<=a.keyCode&&123>=a.keyCode)a.keyCode=-1}catch(b){}};var Gb="closure_listenable_"+(1E6*Math.random()|0),Hb=0;function Ib(a,b,c,d,e){this.listener=a;this.df=null;this.src=b;this.type=c;this.Ie=!!d;this.tb=e;this.key=++Hb;this.Nd=this.Ge=!1}function Jb(a){a.Nd=!0;a.listener=null;a.df=null;a.src=null;a.tb=null};function Kb(a){this.src=a;this.Kb={};this.gf=0}Kb.prototype.add=function(a,b,c,d,e){var f=a.toString();a=this.Kb[f];a||(a=this.Kb[f]=[],this.gf++);var g=Lb(a,b,d,e);-1<g?(b=a[g],c||(b.Ge=!1)):(b=new Ib(b,this.src,f,!!d,e),b.Ge=c,a.push(b));return b};Kb.prototype.remove=function(a,b,c,d){a=a.toString();if(!(a in this.Kb))return!1;var e=this.Kb[a];b=Lb(e,b,c,d);return-1<b?(Jb(e[b]),ya.splice.call(e,b,1),0==e.length&&(delete this.Kb[a],this.gf--),!0):!1};
function Ob(a,b){var c=b.type;if(c in a.Kb){var d=a.Kb[c],e=za(d,b),f;(f=0<=e)&&ya.splice.call(d,e,1);f&&(Jb(b),0==a.Kb[c].length&&(delete a.Kb[c],a.gf--))}}Kb.prototype.Of=function(a,b,c,d){a=this.Kb[a.toString()];var e=-1;a&&(e=Lb(a,b,c,d));return-1<e?a[e]:null};function Lb(a,b,c,d){for(var e=0;e<a.length;++e){var f=a[e];if(!f.Nd&&f.listener==b&&f.Ie==!!c&&f.tb==d)return e}return-1};var Pb="closure_lm_"+(1E6*Math.random()|0),Qb={},Sb=0;function Tb(a,b,c,d,e){if("array"==n(b))for(var f=0;f<b.length;f++)Tb(a,b[f],c,d,e);else if(c=Ub(c),a&&a[Gb])a.Gd.add(String(b),c,!1,d,e);else{if(!b)throw Error("Invalid event type");var f=!!d,g=Vb(a);g||(a[Pb]=g=new Kb(a));c=g.add(b,c,!1,d,e);c.df||(d=Wb(),c.df=d,d.src=a,d.listener=c,a.addEventListener?a.addEventListener(b.toString(),d,f):a.attachEvent(Xb(b.toString()),d),Sb++)}}
function Wb(){var a=$b,b=vb?function(c){return a.call(b.src,b.listener,c)}:function(c){c=a.call(b.src,b.listener,c);if(!c)return c};return b}function ac(a,b,c,d,e){if("array"==n(b))for(var f=0;f<b.length;f++)ac(a,b[f],c,d,e);else c=Ub(c),a&&a[Gb]?a.Gd.remove(String(b),c,d,e):a&&(a=Vb(a))&&(b=a.Of(b,c,!!d,e))&&bc(b)}
function bc(a){if("number"!=typeof a&&a&&!a.Nd){var b=a.src;if(b&&b[Gb])Ob(b.Gd,a);else{var c=a.type,d=a.df;b.removeEventListener?b.removeEventListener(c,d,a.Ie):b.detachEvent&&b.detachEvent(Xb(c),d);Sb--;(c=Vb(b))?(Ob(c,a),0==c.gf&&(c.src=null,b[Pb]=null)):Jb(a)}}}function Xb(a){return a in Qb?Qb[a]:Qb[a]="on"+a}function cc(a,b,c,d){var e=!0;if(a=Vb(a))if(b=a.Kb[b.toString()])for(b=b.concat(),a=0;a<b.length;a++){var f=b[a];f&&f.Ie==c&&!f.Nd&&(f=dc(f,d),e=e&&!1!==f)}return e}
function dc(a,b){var c=a.listener,d=a.tb||a.src;a.Ge&&bc(a);return c.call(d,b)}
function $b(a,b){if(a.Nd)return!0;if(!vb){var c;if(!(c=b))a:{c=["window","event"];for(var d=ba,e;e=c.shift();)if(null!=d[e])d=d[e];else{c=null;break a}c=d}e=c;c=new Fb(e,this);d=!0;if(!(0>e.keyCode||void 0!=e.returnValue)){a:{var f=!1;if(0==e.keyCode)try{e.keyCode=-1;break a}catch(g){f=!0}if(f||void 0==e.returnValue)e.returnValue=!0}e=[];for(f=c.currentTarget;f;f=f.parentNode)e.push(f);for(var f=a.type,k=e.length-1;!c.ld&&0<=k;k--){c.currentTarget=e[k];var l=cc(e[k],f,!0,c),d=d&&l}for(k=0;!c.ld&&
k<e.length;k++)c.currentTarget=e[k],l=cc(e[k],f,!1,c),d=d&&l}return d}return dc(a,new Fb(b,this))}function Vb(a){a=a[Pb];return a instanceof Kb?a:null}var ec="__closure_events_fn_"+(1E9*Math.random()>>>0);function Ub(a){if(fa(a))return a;a[ec]||(a[ec]=function(b){return a.handleEvent(b)});return a[ec]};function fc(){yb.call(this);this.Gd=new Kb(this);this.wh=this;this.eh=null}pa(fc,yb);fc.prototype[Gb]=!0;fc.prototype.addEventListener=function(a,b,c,d){Tb(this,a,b,c,d)};fc.prototype.removeEventListener=function(a,b,c,d){ac(this,a,b,c,d)};
fc.prototype.dispatchEvent=function(a){var b,c=this.eh;if(c)for(b=[];c;c=c.eh)b.push(c);var c=this.wh,d=a.type||a;if(ea(a))a=new Ab(a,c);else if(a instanceof Ab)a.target=a.target||c;else{var e=a;a=new Ab(d,c);ab(a,e)}var e=!0,f;if(b)for(var g=b.length-1;!a.ld&&0<=g;g--)f=a.currentTarget=b[g],e=hc(f,d,!0,a)&&e;a.ld||(f=a.currentTarget=c,e=hc(f,d,!0,a)&&e,a.ld||(e=hc(f,d,!1,a)&&e));if(b)for(g=0;!a.ld&&g<b.length;g++)f=a.currentTarget=b[g],e=hc(f,d,!1,a)&&e;return e};
function hc(a,b,c,d){b=a.Gd.Kb[String(b)];if(!b)return!0;b=b.concat();for(var e=!0,f=0;f<b.length;++f){var g=b[f];if(g&&!g.Nd&&g.Ie==c){var k=g.listener,l=g.tb||g.src;g.Ge&&Ob(a.Gd,g);e=!1!==k.call(l,d)&&e}}return e&&0!=d.jh}fc.prototype.Of=function(a,b,c,d){return this.Gd.Of(String(a),b,c,d)};var ic={jj:"complete",pl:"success",ERROR:"error",Wi:"abort",al:"ready",cl:"readystatechange",TIMEOUT:"timeout",Tj:"incrementaldata",Zk:"progress"};function jc(a){a.prototype.then=a.prototype.then;a.prototype.$goog_Thenable=!0}function kc(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}};function lc(a,b,c){this.oi=c;this.Zh=a;this.Ni=b;this.bf=0;this.Te=null}lc.prototype.get=function(){var a;0<this.bf?(this.bf--,a=this.Te,this.Te=a.next,a.next=null):a=this.Zh();return a};lc.prototype.put=function(a){this.Ni(a);this.bf<this.oi&&(this.bf++,a.next=this.Te,this.Te=a)};function mc(){this.lf=this.Pd=null}var oc=new lc(function(){return new nc},function(a){a.reset()},100);mc.prototype.add=function(a,b){var c=oc.get();c.set(a,b);this.lf?this.lf.next=c:this.Pd=c;this.lf=c};mc.prototype.remove=function(){var a=null;this.Pd&&(a=this.Pd,this.Pd=this.Pd.next,this.Pd||(this.lf=null),a.next=null);return a};function nc(){this.next=this.scope=this.lc=null}nc.prototype.set=function(a,b){this.lc=a;this.scope=b;this.next=null};
nc.prototype.reset=function(){this.next=this.scope=this.lc=null};function pc(a){ba.setTimeout(function(){throw a;},0)}function qc(a){!fa(ba.setImmediate)||ba.Window&&ba.Window.prototype&&ba.Window.prototype.setImmediate==ba.setImmediate?(rc||(rc=sc()),rc(a)):ba.setImmediate(a)}var rc;
function sc(){var a=ba.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!Ta("Presto")&&(a=function(){var a=document.createElement("IFRAME");a.style.display="none";a.src="";document.documentElement.appendChild(a);var b=a.contentWindow,a=b.document;a.open();a.write("");a.close();var c="callImmediate"+Math.random(),d="file:"==b.location.protocol?"*":b.location.protocol+"//"+b.location.host,a=na(function(a){if(("*"==d||a.origin==d)&&a.data==
c)this.port1.onmessage()},this);b.addEventListener("message",a,!1);this.port1={};this.port2={postMessage:function(){b.postMessage(c,d)}}});if("undefined"!==typeof a&&!fb()){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var a=c.lg;c.lg=null;a()}};return function(a){d.next={lg:a};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in document.createElement("SCRIPT")?function(a){var b=document.createElement("SCRIPT");b.onreadystatechange=
function(){b.onreadystatechange=null;b.parentNode.removeChild(b);b=null;a();a=null};document.documentElement.appendChild(b)}:function(a){ba.setTimeout(a,0)}};function tc(a,b){uc||vc();wc||(uc(),wc=!0);xc.add(a,b)}var uc;function vc(){if(ba.Promise&&ba.Promise.resolve){var a=ba.Promise.resolve();uc=function(){a.then(yc)}}else uc=function(){qc(yc)}}var wc=!1,xc=new mc;function yc(){for(var a=null;a=xc.remove();){try{a.lc.call(a.scope)}catch(b){pc(b)}oc.put(a)}wc=!1};function zc(a,b){this.Pb=Ac;this.Ec=void 0;this.ud=this.Kc=this.Ya=null;this.Se=this.Mf=!1;if(a==Bc)Cc(this,Dc,b);else try{var c=this;a.call(b,function(a){Cc(c,Dc,a)},function(a){if(!(a instanceof Ec))try{if(a instanceof Error)throw a;throw Error("Promise rejected.");}catch(b){}Cc(c,Fc,a)})}catch(d){Cc(this,Fc,d)}}var Ac=0,Dc=2,Fc=3;function Gc(){this.next=this.context=this.Kd=this.re=this.Xc=null;this.Ce=!1}Gc.prototype.reset=function(){this.context=this.Kd=this.re=this.Xc=null;this.Ce=!1};
var Hc=new lc(function(){return new Gc},function(a){a.reset()},100);function Ic(a,b,c){var d=Hc.get();d.re=a;d.Kd=b;d.context=c;return d}function Bc(){}zc.prototype.then=function(a,b,c){return Jc(this,fa(a)?a:null,fa(b)?b:null,c)};jc(zc);zc.prototype.cancel=function(a){this.Pb==Ac&&tc(function(){var b=new Ec(a);Kc(this,b)},this)};
function Kc(a,b){if(a.Pb==Ac)if(a.Ya){var c=a.Ya;if(c.Kc){for(var d=0,e=null,f=null,g=c.Kc;g&&(g.Ce||(d++,g.Xc==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(c.Pb==Ac&&1==d?Kc(c,b):(f?(d=f,d.next==c.ud&&(c.ud=d),d.next=d.next.next):Lc(c),Mc(c,e,Fc,b)))}a.Ya=null}else Cc(a,Fc,b)}function Nc(a,b){a.Kc||a.Pb!=Dc&&a.Pb!=Fc||Oc(a);a.ud?a.ud.next=b:a.Kc=b;a.ud=b}
function Jc(a,b,c,d){var e=Ic(null,null,null);e.Xc=new zc(function(a,g){e.re=b?function(c){try{var e=b.call(d,c);a(e)}catch(m){g(m)}}:a;e.Kd=c?function(b){try{var e=c.call(d,b);void 0===e&&b instanceof Ec?g(b):a(e)}catch(m){g(m)}}:g});e.Xc.Ya=a;Nc(a,e);return e.Xc}zc.prototype.ph=function(a){this.Pb=Ac;Cc(this,Dc,a)};zc.prototype.qh=function(a){this.Pb=Ac;Cc(this,Fc,a)};
function Cc(a,b,c){if(a.Pb==Ac){if(a==c)b=Fc,c=new TypeError("Promise cannot resolve to itself");else{if(kc(c)){a.Pb=1;b=c;c=a.ph;var d=a.qh;b instanceof zc?Nc(b,Ic(c||ca,d||null,a)):b.then(c,d,a);return}if(ga(c))try{if(d=c.then,fa(d)){Pc(a,c,d);return}}catch(e){b=Fc,c=e}}a.Ec=c;a.Pb=b;a.Ya=null;Oc(a);b!=Fc||c instanceof Ec||Qc(a,c)}}function Pc(a,b,c){function d(b){f||(f=!0,a.qh(b))}function e(b){f||(f=!0,a.ph(b))}a.Pb=1;var f=!1;try{c.call(b,e,d)}catch(g){d(g)}}
function Oc(a){a.Mf||(a.Mf=!0,tc(a.di,a))}function Lc(a){var b=null;a.Kc&&(b=a.Kc,a.Kc=b.next,b.next=null);a.Kc||(a.ud=null);return b}zc.prototype.di=function(){for(var a=null;a=Lc(this);)Mc(this,a,this.Pb,this.Ec);this.Mf=!1};function Mc(a,b,c,d){if(c==Fc&&b.Kd&&!b.Ce)for(;a&&a.Se;a=a.Ya)a.Se=!1;if(b.Xc)b.Xc.Ya=null,Rc(b,c,d);else try{b.Ce?b.re.call(b.context):Rc(b,c,d)}catch(e){Sc.call(null,e)}Hc.put(b)}function Rc(a,b,c){b==Dc?a.re.call(a.context,c):a.Kd&&a.Kd.call(a.context,c)}
function Qc(a,b){a.Se=!0;tc(function(){a.Se&&Sc.call(null,b)})}var Sc=pc;function Ec(a){qa.call(this,a)}pa(Ec,qa);Ec.prototype.name="cancel";function Tc(a,b,c){if(fa(a))c&&(a=na(a,c));else if(a&&"function"==typeof a.handleEvent)a=na(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<b?-1:ba.setTimeout(a,b||0)};bb("area base br col command embed hr img input keygen link meta param source track wbr".split(" "));function Uc(a){if("function"==typeof a.Bc)return a.Bc();if(ea(a))return a.split("");if(da(a)){for(var b=[],c=a.length,d=0;d<c;d++)b.push(a[d]);return b}return Wa(a)}function Vc(a){if("function"==typeof a.Ib)return a.Ib();if("function"!=typeof a.Bc){if(da(a)||ea(a)){var b=[];a=a.length;for(var c=0;c<a;c++)b.push(c);return b}return Xa(a)}}
function Wc(a,b,c){if("function"==typeof a.forEach)a.forEach(b,c);else if(da(a)||ea(a))Aa(a,b,c);else for(var d=Vc(a),e=Uc(a),f=e.length,g=0;g<f;g++)b.call(c,e[g],d&&d[g],a)};function Xc(a,b){this.nc={};this.eb=[];this.Ca=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a){a instanceof Xc?(c=a.Ib(),d=a.Bc()):(c=Xa(a),d=Wa(a));for(var e=0;e<c.length;e++)this.set(c[e],d[e])}}h=Xc.prototype;h.Lg=function(){return this.Ca};h.Bc=function(){Yc(this);for(var a=[],b=0;b<this.eb.length;b++)a.push(this.nc[this.eb[b]]);return a};h.Ib=function(){Yc(this);return this.eb.concat()};
h.de=function(a){return Zc(this.nc,a)};h.lb=function(a,b){if(this===a)return!0;if(this.Ca!=a.Lg())return!1;var c=b||$c;Yc(this);for(var d,e=0;d=this.eb[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};function $c(a,b){return a===b}h.clear=function(){this.nc={};this.Ca=this.eb.length=0};h.remove=function(a){return Zc(this.nc,a)?(delete this.nc[a],this.Ca--,this.eb.length>2*this.Ca&&Yc(this),!0):!1};
function Yc(a){if(a.Ca!=a.eb.length){for(var b=0,c=0;b<a.eb.length;){var d=a.eb[b];Zc(a.nc,d)&&(a.eb[c++]=d);b++}a.eb.length=c}if(a.Ca!=a.eb.length){for(var e={},c=b=0;b<a.eb.length;)d=a.eb[b],Zc(e,d)||(a.eb[c++]=d,e[d]=1),b++;a.eb.length=c}}h.get=function(a,b){return Zc(this.nc,a)?this.nc[a]:b};h.set=function(a,b){Zc(this.nc,a)||(this.Ca++,this.eb.push(a));this.nc[a]=b};h.forEach=function(a,b){for(var c=this.Ib(),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};h.clone=function(){return new Xc(this)};
function Zc(a,b){return Object.prototype.hasOwnProperty.call(a,b)};function ad(a,b,c,d,e){this.reset(a,b,c,d,e)}ad.prototype.Ig=null;var bd=0;ad.prototype.reset=function(a,b,c,d,e){"number"==typeof e||bd++;d||oa();this.pe=a;this.xi=b;delete this.Ig};ad.prototype.nh=function(a){this.pe=a};function cd(a){this.Zg=a;this.Ng=this.wf=this.pe=this.Ya=null}function dd(a,b){this.name=a;this.value=b}dd.prototype.toString=function(){return this.name};var ed=new dd("SEVERE",1E3),fd=new dd("WARNING",900),gd=new dd("INFO",800),hd=new dd("CONFIG",700),id=new dd("FINE",500),jd=new dd("FINEST",300);h=cd.prototype;h.getName=function(){return this.Zg};h.getParent=function(){return this.Ya};h.Kg=function(){this.wf||(this.wf={});return this.wf};h.nh=function(a){this.pe=a};
function kd(a){if(a.pe)return a.pe;if(a.Ya)return kd(a.Ya);xa("Root logger has no level set.");return null}h.log=function(a,b,c){if(a.value>=kd(this).value)for(fa(b)&&(b=b()),a=new ad(a,String(b),this.Zg),c&&(a.Ig=c),c="log:"+a.xi,ba.console&&(ba.console.timeStamp?ba.console.timeStamp(c):ba.console.markTimeline&&ba.console.markTimeline(c)),ba.msWriteProfilerMark&&ba.msWriteProfilerMark(c),c=this;c;){b=c;var d=a;if(b.Ng)for(var e=0,f=void 0;f=b.Ng[e];e++)f(d);c=c.getParent()}};
h.info=function(a,b){this.log(gd,a,b)};var ld={},md=null;function nd(a){md||(md=new cd(""),ld[""]=md,md.nh(hd));var b;if(!(b=ld[a])){b=new cd(a);var c=a.lastIndexOf("."),d=a.substr(c+1),c=nd(a.substr(0,c));c.Kg()[d]=b;b.Ya=c;ld[a]=b}return b};function od(a){var b=pd;b&&b.log(jd,a,void 0)}function qd(a){var b=pd;b&&b.log(fd,a,void 0)}function rd(a,b){a&&a.info(b,void 0)}function sd(a,b){a&&a.log(id,b,void 0)};function td(){}td.prototype.jg=null;function ud(a){var b;(b=a.jg)||(b={},vd(a)&&(b[0]=!0,b[1]=!0),b=a.jg=b);return b};var wd;function xd(){}pa(xd,td);function yd(a){return(a=vd(a))?new ActiveXObject(a):new XMLHttpRequest}function vd(a){if(!a.Og&&"undefined"==typeof XMLHttpRequest&&"undefined"!=typeof ActiveXObject){for(var b=["MSXML2.XMLHTTP.6.0","MSXML2.XMLHTTP.3.0","MSXML2.XMLHTTP","Microsoft.XMLHTTP"],c=0;c<b.length;c++){var d=b[c];try{return new ActiveXObject(d),a.Og=d}catch(e){}}throw Error("Could not create ActiveXObject. ActiveX might be disabled, or MSXML might not be installed");}return a.Og}wd=new xd;var zd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#(.*))?$/;function Ad(a){if(Bd){Bd=!1;var b=ba.location;if(b){var c=b.href;if(c&&(c=(c=Ad(c)[3]||null)?decodeURI(c):c)&&c!=b.hostname)throw Bd=!0,Error();}}return a.match(zd)}var Bd=mb;
function Cd(a,b){for(var c=a.split("\x26"),d=0;d<c.length;d++){var e=c[d].indexOf("\x3d"),f=null,g=null;0<=e?(f=c[d].substring(0,e),g=c[d].substring(e+1)):f=c[d];b(f,g?decodeURIComponent(g.replace(/\+/g," ")):"")}};function Dd(a){fc.call(this);this.headers=new Xc;this.nf=a||null;this.sd=!1;this.mf=this.ia=null;this.Wg=this.Ye="";this.Id=0;this.oe="";this.le=this.Rf=this.We=this.Lf=!1;this.od=0;this.ff=null;this.ih=Ed;this.kf=this.sh=!1}pa(Dd,fc);var Ed="";Dd.prototype.Ea=nd("goog.net.XhrIo");var Fd=/^https?$/i,Gd=["POST","PUT"];h=Dd.prototype;
h.send=function(a,b,c,d){if(this.ia)throw Error("[goog.net.XhrIo] Object is active with another request\x3d"+this.Ye+"; newUri\x3d"+a);b=b?b.toUpperCase():"GET";this.Ye=a;this.oe="";this.Id=0;this.Wg=b;this.Lf=!1;this.sd=!0;this.ia=this.nf?yd(this.nf):yd(wd);this.mf=this.nf?ud(this.nf):ud(wd);this.ia.onreadystatechange=na(this.dh,this);try{sd(this.Ea,Hd(this,"Opening Xhr")),this.Rf=!0,this.ia.open(b,String(a),!0),this.Rf=!1}catch(e){sd(this.Ea,Hd(this,"Error opening Xhr: "+e.message));this.Qe(5,e);
return}a=c||"";var f=this.headers.clone();d&&Wc(d,function(a,b){f.set(b,a)});d=Ha(f.Ib());c=ba.FormData&&a instanceof ba.FormData;!(0<=za(Gd,b))||d||c||f.set("Content-Type","application/x-www-form-urlencoded;charset\x3dutf-8");f.forEach(function(a,b){this.ia.setRequestHeader(b,a)},this);this.ih&&(this.ia.responseType=this.ih);"withCredentials"in this.ia&&(this.ia.withCredentials=this.sh);try{Id(this),0<this.od&&(this.kf=Jd(this.ia),sd(this.Ea,Hd(this,"Will abort after "+this.od+"ms if incomplete, xhr2 "+
this.kf)),this.kf?(this.ia.timeout=this.od,this.ia.ontimeout=na(this.we,this)):this.ff=Tc(this.we,this.od,this)),sd(this.Ea,Hd(this,"Sending request")),this.We=!0,this.ia.send(a),this.We=!1}catch(g){sd(this.Ea,Hd(this,"Send error: "+g.message)),this.Qe(5,g)}};function Jd(a){return kb&&rb(9)&&"number"==typeof a.timeout&&void 0!==a.ontimeout}function Ia(a){return"content-type"==a.toLowerCase()}
h.we=function(){"undefined"!=typeof aa&&this.ia&&(this.oe="Timed out after "+this.od+"ms, aborting",this.Id=8,sd(this.Ea,Hd(this,this.oe)),this.dispatchEvent("timeout"),this.abort(8))};h.Qe=function(a,b){this.sd=!1;this.ia&&(this.le=!0,this.ia.abort(),this.le=!1);this.oe=b;this.Id=a;Kd(this);Ld(this)};function Kd(a){a.Lf||(a.Lf=!0,a.dispatchEvent("complete"),a.dispatchEvent("error"))}
h.abort=function(a){this.ia&&this.sd&&(sd(this.Ea,Hd(this,"Aborting")),this.sd=!1,this.le=!0,this.ia.abort(),this.le=!1,this.Id=a||7,this.dispatchEvent("complete"),this.dispatchEvent("abort"),Ld(this))};h.dh=function(){this.fe||(this.Rf||this.We||this.le?Md(this):this.Gi())};h.Gi=function(){Md(this)};
function Md(a){if(a.sd&&"undefined"!=typeof aa)if(a.mf[1]&&4==Nd(a)&&2==Pd(a))sd(a.Ea,Hd(a,"Local request error detected and ignored"));else if(a.We&&4==Nd(a))Tc(a.dh,0,a);else if(a.dispatchEvent("readystatechange"),4==Nd(a)){sd(a.Ea,Hd(a,"Request complete"));a.sd=!1;try{var b=Pd(a),c;a:switch(b){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:c=!0;break a;default:c=!1}var d;if(!(d=c)){var e;if(e=0===b){var f=Ad(String(a.Ye))[1]||null;if(!f&&self.location)var g=self.location.protocol,
f=g.substr(0,g.length-1);e=!Fd.test(f?f.toLowerCase():"")}d=e}d?(a.dispatchEvent("complete"),a.dispatchEvent("success")):(a.Id=6,a.oe=Qd(a)+" ["+Pd(a)+"]",Kd(a))}finally{Ld(a)}}}function Ld(a){if(a.ia){Id(a);var b=a.ia,c=a.mf[0]?ca:null;a.ia=null;a.mf=null;a.dispatchEvent("ready");try{b.onreadystatechange=c}catch(d){(a=a.Ea)&&a.log(ed,"Problem encountered resetting onreadystatechange: "+d.message,void 0)}}}
function Id(a){a.ia&&a.kf&&(a.ia.ontimeout=null);"number"==typeof a.ff&&(ba.clearTimeout(a.ff),a.ff=null)}function Nd(a){return a.ia?a.ia.readyState:0}function Pd(a){try{return 2<Nd(a)?a.ia.status:-1}catch(b){return-1}}function Qd(a){try{return 2<Nd(a)?a.ia.statusText:""}catch(b){return sd(a.Ea,"Can not get status: "+b.message),""}}h.getResponseHeader=function(a){return this.ia&&4==Nd(this)?this.ia.getResponseHeader(a):void 0};
h.getAllResponseHeaders=function(){return this.ia&&4==Nd(this)?this.ia.getAllResponseHeaders():""};function Hd(a,b){return b+" ["+a.Wg+" "+a.Ye+" "+Pd(a)+"]"};function Rd(a,b){this.Ac=this.pd=this.Tc="";this.Ld=null;this.fd=this.Ob="";this.Jb=this.ki=!1;var c;if(a instanceof Rd)this.Jb=void 0!==b?b:a.Jb,Sd(this,a.Tc),c=a.pd,Td(this),this.pd=c,c=a.Ac,Td(this),this.Ac=c,Ud(this,a.Ld),c=a.Ob,Td(this),this.Ob=c,Vd(this,a.rc.clone()),c=a.fd,Td(this),this.fd=c;else if(a&&(c=Ad(String(a)))){this.Jb=!!b;Sd(this,c[1]||"",!0);var d=c[2]||"";Td(this);this.pd=Wd(d);d=c[3]||"";Td(this);this.Ac=Wd(d,!0);Ud(this,c[4]);d=c[5]||"";Td(this);this.Ob=Wd(d,!0);Vd(this,c[6]||
"",!0);c=c[7]||"";Td(this);this.fd=Wd(c)}else this.Jb=!!b,this.rc=new Xd(null,0,this.Jb)}
Rd.prototype.toString=function(){var a=[],b=this.Tc;b&&a.push(Yd(b,Zd,!0),":");if(b=this.Ac){a.push("//");var c=this.pd;c&&a.push(Yd(c,Zd,!0),"@");a.push(encodeURIComponent(String(b)).replace(/%25([0-9a-fA-F]{2})/g,"%$1"));b=this.Ld;null!=b&&a.push(":",String(b))}if(b=this.Ob)this.Ac&&"/"!=b.charAt(0)&&a.push("/"),a.push(Yd(b,"/"==b.charAt(0)?$d:ae,!0));(b=this.rc.toString())&&a.push("?",b);(b=this.fd)&&a.push("#",Yd(b,be));return a.join("")};
Rd.prototype.resolve=function(a){var b=this.clone(),c=!!a.Tc;c?Sd(b,a.Tc):c=!!a.pd;if(c){var d=a.pd;Td(b);b.pd=d}else c=!!a.Ac;c?(d=a.Ac,Td(b),b.Ac=d):c=null!=a.Ld;d=a.Ob;if(c)Ud(b,a.Ld);else if(c=!!a.Ob){if("/"!=d.charAt(0))if(this.Ac&&!this.Ob)d="/"+d;else{var e=b.Ob.lastIndexOf("/");-1!=e&&(d=b.Ob.substr(0,e+1)+d)}e=d;if(".."==e||"."==e)d="";else if(-1!=e.indexOf("./")||-1!=e.indexOf("/.")){for(var d=0==e.lastIndexOf("/",0),e=e.split("/"),f=[],g=0;g<e.length;){var k=e[g++];"."==k?d&&g==e.length&&
f.push(""):".."==k?((1<f.length||1==f.length&&""!=f[0])&&f.pop(),d&&g==e.length&&f.push("")):(f.push(k),d=!0)}d=f.join("/")}else d=e}c?(Td(b),b.Ob=d):c=""!==a.rc.toString();c?Vd(b,Wd(a.rc.toString())):c=!!a.fd;c&&(a=a.fd,Td(b),b.fd=a);return b};Rd.prototype.clone=function(){return new Rd(this)};function Sd(a,b,c){Td(a);a.Tc=c?Wd(b,!0):b;a.Tc&&(a.Tc=a.Tc.replace(/:$/,""))}function Ud(a,b){Td(a);if(b){b=Number(b);if(isNaN(b)||0>b)throw Error("Bad port number "+b);a.Ld=b}else a.Ld=null}
function ce(a){return a.Ob}function Vd(a,b,c){Td(a);b instanceof Xd?(a.rc=b,a.rc.ag(a.Jb)):(c||(b=Yd(b,de)),a.rc=new Xd(b,0,a.Jb))}function ee(a){Td(a);var b=Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^oa()).toString(36);Td(a);a.rc.set("zx",b);return a}function Td(a){if(a.ki)throw Error("Tried to modify a read-only Uri");}Rd.prototype.ag=function(a){this.Jb=a;this.rc&&this.rc.ag(a);return this};
function Wd(a,b){return a?b?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Yd(a,b,c){return ea(a)?(a=encodeURI(a).replace(b,fe),c&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function fe(a){a=a.charCodeAt(0);return"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Zd=/[#\/\?@]/g,ae=/[\#\?:]/g,$d=/[\#\?]/g,de=/[\#\?@]/g,be=/#/g;function Xd(a,b,c){this.Ca=this.Da=null;this.zb=a||null;this.Jb=!!c}
function ge(a){a.Da||(a.Da=new Xc,a.Ca=0,a.zb&&Cd(a.zb,function(b,c){a.add(decodeURIComponent(b.replace(/\+/g," ")),c)}))}h=Xd.prototype;h.Lg=function(){ge(this);return this.Ca};h.add=function(a,b){ge(this);this.zb=null;a=he(this,a);var c=this.Da.get(a);c||this.Da.set(a,c=[]);c.push(b);this.Ca++;return this};h.remove=function(a){ge(this);a=he(this,a);return this.Da.de(a)?(this.zb=null,this.Ca-=this.Da.get(a).length,this.Da.remove(a)):!1};h.clear=function(){this.Da=this.zb=null;this.Ca=0};
h.de=function(a){ge(this);a=he(this,a);return this.Da.de(a)};h.Ib=function(){ge(this);for(var a=this.Da.Bc(),b=this.Da.Ib(),c=[],d=0;d<b.length;d++)for(var e=a[d],f=0;f<e.length;f++)c.push(b[d]);return c};h.Bc=function(a){ge(this);var b=[];if(ea(a))this.de(a)&&(b=Ja(b,this.Da.get(he(this,a))));else{a=this.Da.Bc();for(var c=0;c<a.length;c++)b=Ja(b,a[c])}return b};h.set=function(a,b){ge(this);this.zb=null;a=he(this,a);this.de(a)&&(this.Ca-=this.Da.get(a).length);this.Da.set(a,[b]);this.Ca++;return this};
h.get=function(a,b){var c=a?this.Bc(a):[];return 0<c.length?String(c[0]):b};function ie(a,b,c){a.remove(b);0<c.length&&(a.zb=null,a.Da.set(he(a,b),Ka(c)),a.Ca+=c.length)}h.toString=function(){if(this.zb)return this.zb;if(!this.Da)return"";for(var a=[],b=this.Da.Ib(),c=0;c<b.length;c++)for(var d=b[c],e=encodeURIComponent(String(d)),d=this.Bc(d),f=0;f<d.length;f++){var g=e;""!==d[f]&&(g+="\x3d"+encodeURIComponent(String(d[f])));a.push(g)}return this.zb=a.join("\x26")};
h.clone=function(){var a=new Xd;a.zb=this.zb;this.Da&&(a.Da=this.Da.clone(),a.Ca=this.Ca);return a};function he(a,b){var c=String(b);a.Jb&&(c=c.toLowerCase());return c}h.ag=function(a){a&&!this.Jb&&(ge(this),this.zb=null,this.Da.forEach(function(a,c){var d=c.toLowerCase();c!=d&&(this.remove(c),ie(this,d,a))},this));this.Jb=a};h.extend=function(a){for(var b=0;b<arguments.length;b++)Wc(arguments[b],function(a,b){this.add(b,a)},this)};function je(a,b){null!=a&&this.append.apply(this,arguments)}h=je.prototype;h.Jc="";h.set=function(a){this.Jc=""+a};h.append=function(a,b,c){this.Jc+=a;if(null!=b)for(var d=1;d<arguments.length;d++)this.Jc+=arguments[d];return this};h.clear=function(){this.Jc=""};h.toString=function(){return this.Jc};var ke;if("undefined"===typeof le)var le=function(){throw Error("No *print-fn* fn set for evaluation environment");};var me=null;if("undefined"===typeof ne)var ne=null;function pe(){return new t(null,5,[qe,!0,re,!0,se,!1,te,!1,ue,null],null)}function u(a){return null!=a&&!1!==a}function ve(a){return null==a}function we(a){return a instanceof Array}function xe(a){return u(a)?!1:!0}function ye(a){return ea(a)}function v(a,b){return a[n(null==b?null:b)]?!0:a._?!0:!1}
function ze(a){return null==a?null:a.constructor}function x(a,b){var c=ze(b),c=u(u(c)?c.bd:c)?c.ad:n(b);return Error(["No protocol method ",a," defined for type ",c,": ",b].join(""))}function Ae(a){var b=a.ad;return u(b)?b:""+y(a)}var Be="undefined"!==typeof Symbol&&"function"===n(Symbol)?Symbol.iterator:"@@iterator";function Ce(a){for(var b=a.length,c=Array(b),d=0;;)if(d<b)c[d]=a[d],d+=1;else break;return c}
function De(a){function b(a,b){a.push(b);return a}var c=[];return Ee?Ee(b,c,a):Fe.call(null,b,c,a)}
var Ge={},He={},Ie=function Ie(b){if(b?b.da:b)return b.da(b);var c;c=Ie[n(null==b?null:b)];if(!c&&(c=Ie._,!c))throw x("ICloneable.-clone",b);return c.call(null,b)},Je={},Ke=function Ke(b){if(b?b.Z:b)return b.Z(b);var c;c=Ke[n(null==b?null:b)];if(!c&&(c=Ke._,!c))throw x("ICounted.-count",b);return c.call(null,b)},Le=function Le(b){if(b?b.pa:b)return b.pa(b);var c;c=Le[n(null==b?null:b)];if(!c&&(c=Le._,!c))throw x("IEmptyableCollection.-empty",b);return c.call(null,b)},Me={},z=function z(b,c){if(b?
b.X:b)return b.X(b,c);var d;d=z[n(null==b?null:b)];if(!d&&(d=z._,!d))throw x("ICollection.-conj",b);return d.call(null,b,c)},Ne={},A=function A(){switch(arguments.length){case 2:return A.a(arguments[0],arguments[1]);case 3:return A.j(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}};A.a=function(a,b){if(a?a.ba:a)return a.ba(a,b);var c;c=A[n(null==a?null:a)];if(!c&&(c=A._,!c))throw x("IIndexed.-nth",a);return c.call(null,a,b)};
A.j=function(a,b,c){if(a?a.ib:a)return a.ib(a,b,c);var d;d=A[n(null==a?null:a)];if(!d&&(d=A._,!d))throw x("IIndexed.-nth",a);return d.call(null,a,b,c)};A.I=3;
var Oe={},Pe=function Pe(b){if(b?b.wa:b)return b.wa(b);var c;c=Pe[n(null==b?null:b)];if(!c&&(c=Pe._,!c))throw x("ISeq.-first",b);return c.call(null,b)},Qe=function Qe(b){if(b?b.Ia:b)return b.Ia(b);var c;c=Qe[n(null==b?null:b)];if(!c&&(c=Qe._,!c))throw x("ISeq.-rest",b);return c.call(null,b)},Se={},Te={},Ue=function Ue(){switch(arguments.length){case 2:return Ue.a(arguments[0],arguments[1]);case 3:return Ue.j(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));
}};Ue.a=function(a,b){if(a?a.R:a)return a.R(a,b);var c;c=Ue[n(null==a?null:a)];if(!c&&(c=Ue._,!c))throw x("ILookup.-lookup",a);return c.call(null,a,b)};Ue.j=function(a,b,c){if(a?a.P:a)return a.P(a,b,c);var d;d=Ue[n(null==a?null:a)];if(!d&&(d=Ue._,!d))throw x("ILookup.-lookup",a);return d.call(null,a,b,c)};Ue.I=3;
var Ve={},We=function We(b,c){if(b?b.Je:b)return b.Je(b,c);var d;d=We[n(null==b?null:b)];if(!d&&(d=We._,!d))throw x("IAssociative.-contains-key?",b);return d.call(null,b,c)},Xe=function Xe(b,c,d){if(b?b.ra:b)return b.ra(b,c,d);var e;e=Xe[n(null==b?null:b)];if(!e&&(e=Xe._,!e))throw x("IAssociative.-assoc",b);return e.call(null,b,c,d)},Ye={},Ze=function Ze(b,c){if(b?b.ya:b)return b.ya(b,c);var d;d=Ze[n(null==b?null:b)];if(!d&&(d=Ze._,!d))throw x("IMap.-dissoc",b);return d.call(null,b,c)},$e={},af=function af(b){if(b?
b.Wd:b)return b.Wd(b);var c;c=af[n(null==b?null:b)];if(!c&&(c=af._,!c))throw x("IMapEntry.-key",b);return c.call(null,b)},bf=function bf(b){if(b?b.Xd:b)return b.Xd(b);var c;c=bf[n(null==b?null:b)];if(!c&&(c=bf._,!c))throw x("IMapEntry.-val",b);return c.call(null,b)},cf={},df=function df(b,c){if(b?b.Cf:b)return b.Cf(b,c);var d;d=df[n(null==b?null:b)];if(!d&&(d=df._,!d))throw x("ISet.-disjoin",b);return d.call(null,b,c)},ef=function ef(b){if(b?b.Lc:b)return b.Lc(b);var c;c=ef[n(null==b?null:b)];if(!c&&
(c=ef._,!c))throw x("IStack.-peek",b);return c.call(null,b)},ff=function ff(b){if(b?b.Mc:b)return b.Mc(b);var c;c=ff[n(null==b?null:b)];if(!c&&(c=ff._,!c))throw x("IStack.-pop",b);return c.call(null,b)},gf={},hf=function hf(b,c,d){if(b?b.$c:b)return b.$c(b,c,d);var e;e=hf[n(null==b?null:b)];if(!e&&(e=hf._,!e))throw x("IVector.-assoc-n",b);return e.call(null,b,c,d)},kf=function kf(b){if(b?b.vd:b)return b.vd(b);var c;c=kf[n(null==b?null:b)];if(!c&&(c=kf._,!c))throw x("IDeref.-deref",b);return c.call(null,
b)},mf={},nf=function nf(b){if(b?b.U:b)return b.U(b);var c;c=nf[n(null==b?null:b)];if(!c&&(c=nf._,!c))throw x("IMeta.-meta",b);return c.call(null,b)},of={},pf=function pf(b,c){if(b?b.V:b)return b.V(b,c);var d;d=pf[n(null==b?null:b)];if(!d&&(d=pf._,!d))throw x("IWithMeta.-with-meta",b);return d.call(null,b,c)},qf={},rf=function rf(){switch(arguments.length){case 2:return rf.a(arguments[0],arguments[1]);case 3:return rf.j(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),
y(arguments.length)].join(""));}};rf.a=function(a,b){if(a?a.Aa:a)return a.Aa(a,b);var c;c=rf[n(null==a?null:a)];if(!c&&(c=rf._,!c))throw x("IReduce.-reduce",a);return c.call(null,a,b)};rf.j=function(a,b,c){if(a?a.Ba:a)return a.Ba(a,b,c);var d;d=rf[n(null==a?null:a)];if(!d&&(d=rf._,!d))throw x("IReduce.-reduce",a);return d.call(null,a,b,c)};rf.I=3;
var sf=function sf(b,c,d){if(b?b.xd:b)return b.xd(b,c,d);var e;e=sf[n(null==b?null:b)];if(!e&&(e=sf._,!e))throw x("IKVReduce.-kv-reduce",b);return e.call(null,b,c,d)},tf=function tf(b,c){if(b?b.M:b)return b.M(b,c);var d;d=tf[n(null==b?null:b)];if(!d&&(d=tf._,!d))throw x("IEquiv.-equiv",b);return d.call(null,b,c)},uf=function uf(b){if(b?b.T:b)return b.T(b);var c;c=uf[n(null==b?null:b)];if(!c&&(c=uf._,!c))throw x("IHash.-hash",b);return c.call(null,b)},vf={},wf=function wf(b){if(b?b.Y:b)return b.Y(b);
var c;c=wf[n(null==b?null:b)];if(!c&&(c=wf._,!c))throw x("ISeqable.-seq",b);return c.call(null,b)},xf={},yf={},zf={},Af=function Af(b){if(b?b.yd:b)return b.yd(b);var c;c=Af[n(null==b?null:b)];if(!c&&(c=Af._,!c))throw x("IReversible.-rseq",b);return c.call(null,b)},Bf={},Cf=function Cf(b,c){if(b?b.tg:b)return b.tg(0,c);var d;d=Cf[n(null==b?null:b)];if(!d&&(d=Cf._,!d))throw x("IWriter.-write",b);return d.call(null,b,c)},Ef={},Ff=function Ff(b,c,d){if(b?b.S:b)return b.S(b,c,d);var e;e=Ff[n(null==b?null:
b)];if(!e&&(e=Ff._,!e))throw x("IPrintWithWriter.-pr-writer",b);return e.call(null,b,c,d)},Gf=function Gf(b,c,d){if(b?b.sg:b)return b.sg(0,c,d);var e;e=Gf[n(null==b?null:b)];if(!e&&(e=Gf._,!e))throw x("IWatchable.-notify-watches",b);return e.call(null,b,c,d)},Hf=function Hf(b){if(b?b.wd:b)return b.wd(b);var c;c=Hf[n(null==b?null:b)];if(!c&&(c=Hf._,!c))throw x("IEditableCollection.-as-transient",b);return c.call(null,b)},If=function If(b,c){if(b?b.Zc:b)return b.Zc(b,c);var d;d=If[n(null==b?null:b)];
if(!d&&(d=If._,!d))throw x("ITransientCollection.-conj!",b);return d.call(null,b,c)},Jf=function Jf(b){if(b?b.zd:b)return b.zd(b);var c;c=Jf[n(null==b?null:b)];if(!c&&(c=Jf._,!c))throw x("ITransientCollection.-persistent!",b);return c.call(null,b)},Kf=function Kf(b,c,d){if(b?b.ae:b)return b.ae(b,c,d);var e;e=Kf[n(null==b?null:b)];if(!e&&(e=Kf._,!e))throw x("ITransientAssociative.-assoc!",b);return e.call(null,b,c,d)},Lf=function Lf(b,c,d){if(b?b.qg:b)return b.qg(0,c,d);var e;e=Lf[n(null==b?null:b)];
if(!e&&(e=Lf._,!e))throw x("ITransientVector.-assoc-n!",b);return e.call(null,b,c,d)},Mf={},Nf=function Nf(b,c){if(b?b.wc:b)return b.wc(b,c);var d;d=Nf[n(null==b?null:b)];if(!d&&(d=Nf._,!d))throw x("IComparable.-compare",b);return d.call(null,b,c)},Of=function Of(b){if(b?b.og:b)return b.og();var c;c=Of[n(null==b?null:b)];if(!c&&(c=Of._,!c))throw x("IChunk.-drop-first",b);return c.call(null,b)},Pf=function Pf(b){if(b?b.yf:b)return b.yf(b);var c;c=Pf[n(null==b?null:b)];if(!c&&(c=Pf._,!c))throw x("IChunkedSeq.-chunked-first",
b);return c.call(null,b)},Qf=function Qf(b){if(b?b.zf:b)return b.zf(b);var c;c=Qf[n(null==b?null:b)];if(!c&&(c=Qf._,!c))throw x("IChunkedSeq.-chunked-rest",b);return c.call(null,b)},Rf=function Rf(b){if(b?b.xf:b)return b.xf(b);var c;c=Rf[n(null==b?null:b)];if(!c&&(c=Rf._,!c))throw x("IChunkedNext.-chunked-next",b);return c.call(null,b)},Sf=function Sf(b){if(b?b.Yd:b)return b.Yd(b);var c;c=Sf[n(null==b?null:b)];if(!c&&(c=Sf._,!c))throw x("INamed.-name",b);return c.call(null,b)},Tf=function Tf(b){if(b?
b.Zd:b)return b.Zd(b);var c;c=Tf[n(null==b?null:b)];if(!c&&(c=Tf._,!c))throw x("INamed.-namespace",b);return c.call(null,b)},Uf=function Uf(b,c){if(b?b.Oh:b)return b.Oh(b,c);var d;d=Uf[n(null==b?null:b)];if(!d&&(d=Uf._,!d))throw x("IReset.-reset!",b);return d.call(null,b,c)},Vf=function Vf(){switch(arguments.length){case 2:return Vf.a(arguments[0],arguments[1]);case 3:return Vf.j(arguments[0],arguments[1],arguments[2]);case 4:return Vf.N(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return Vf.W(arguments[0],
arguments[1],arguments[2],arguments[3],arguments[4]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}};Vf.a=function(a,b){if(a?a.Qh:a)return a.Qh(a,b);var c;c=Vf[n(null==a?null:a)];if(!c&&(c=Vf._,!c))throw x("ISwap.-swap!",a);return c.call(null,a,b)};Vf.j=function(a,b,c){if(a?a.Rh:a)return a.Rh(a,b,c);var d;d=Vf[n(null==a?null:a)];if(!d&&(d=Vf._,!d))throw x("ISwap.-swap!",a);return d.call(null,a,b,c)};
Vf.N=function(a,b,c,d){if(a?a.Sh:a)return a.Sh(a,b,c,d);var e;e=Vf[n(null==a?null:a)];if(!e&&(e=Vf._,!e))throw x("ISwap.-swap!",a);return e.call(null,a,b,c,d)};Vf.W=function(a,b,c,d,e){if(a?a.Th:a)return a.Th(a,b,c,d,e);var f;f=Vf[n(null==a?null:a)];if(!f&&(f=Vf._,!f))throw x("ISwap.-swap!",a);return f.call(null,a,b,c,d,e)};Vf.I=5;
var Wf=function Wf(b,c){if(b?b.rg:b)return b.rg(0,c);var d;d=Wf[n(null==b?null:b)];if(!d&&(d=Wf._,!d))throw x("IVolatile.-vreset!",b);return d.call(null,b,c)},Xf={},Yf=function Yf(b){if(b?b.Vd:b)return b.Vd(b);var c;c=Yf[n(null==b?null:b)];if(!c&&(c=Yf._,!c))throw x("IIterable.-iterator",b);return c.call(null,b)};function Zf(a){this.Oi=a;this.B=1073741824;this.O=0}Zf.prototype.tg=function(a,b){return this.Oi.append(b)};function $f(a){var b=new je;a.S(null,new Zf(b),pe());return""+y(b)}
var ag="undefined"!==typeof Math.imul&&0!==Math.imul(4294967295,5)?function(a,b){return Math.imul(a,b)}:function(a,b){var c=a&65535,d=b&65535;return c*d+((a>>>16&65535)*d+c*(b>>>16&65535)<<16>>>0)|0};function bg(a){a=ag(a|0,-862048943);return ag(a<<15|a>>>-15,461845907)}function cg(a,b){var c=(a|0)^(b|0);return ag(c<<13|c>>>-13,5)+-430675100|0}function dg(a,b){var c=(a|0)^b,c=ag(c^c>>>16,-2048144789),c=ag(c^c>>>13,-1028477387);return c^c>>>16}
function eg(a){var b;a:{b=1;for(var c=0;;)if(b<a.length){var d=b+2,c=cg(c,bg(a.charCodeAt(b-1)|a.charCodeAt(b)<<16));b=d}else{b=c;break a}}b=1===(a.length&1)?b^bg(a.charCodeAt(a.length-1)):b;return dg(b,ag(2,a.length))}var fg={},gg=0;function hg(a){255<gg&&(fg={},gg=0);var b=fg[a];if("number"!==typeof b){a:if(null!=a)if(b=a.length,0<b)for(var c=0,d=0;;)if(c<b)var e=c+1,d=ag(31,d)+a.charCodeAt(c),c=e;else{b=d;break a}else b=0;else b=0;fg[a]=b;gg+=1}return a=b}
function ig(a){a&&(a.B&4194304||a.Bf)?a=a.T(null):"number"===typeof a?a=Math.floor(a)%2147483647:!0===a?a=1:!1===a?a=0:"string"===typeof a?(a=hg(a),0!==a&&(a=bg(a),a=cg(0,a),a=dg(a,4))):a=a instanceof Date?a.valueOf():null==a?0:uf(a);return a}function jg(a,b){return a^b+2654435769+(a<<6)+(a>>2)}function kg(a){return a instanceof C}
function lg(a,b){if(a.gb===b.gb)return 0;var c=xe(a.cb);if(u(c?b.cb:c))return-1;if(u(a.cb)){if(xe(b.cb))return 1;c=Ma(a.cb,b.cb);return 0===c?Ma(a.name,b.name):c}return Ma(a.name,b.name)}function C(a,b,c,d,e){this.cb=a;this.name=b;this.gb=c;this.qd=d;this.hb=e;this.B=2154168321;this.O=4096}h=C.prototype;h.toString=function(){return this.gb};h.equiv=function(a){return this.M(null,a)};h.M=function(a,b){return b instanceof C?this.gb===b.gb:!1};
h.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return Ue.j(c,this,null);case 3:return Ue.j(c,this,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return Ue.j(c,this,null)};a.j=function(a,c,d){return Ue.j(c,this,d)};return a}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ce(b)))};h.g=function(a){return Ue.j(a,this,null)};h.a=function(a,b){return Ue.j(a,this,b)};h.U=function(){return this.hb};
h.V=function(a,b){return new C(this.cb,this.name,this.gb,this.qd,b)};h.T=function(){var a=this.qd;return null!=a?a:this.qd=a=jg(eg(this.name),hg(this.cb))};h.Yd=function(){return this.name};h.Zd=function(){return this.cb};h.S=function(a,b){return Cf(b,this.gb)};function mg(a){return a instanceof C?a:ng(null,a)}function ng(a,b){var c=null!=a?[y(a),y("/"),y(b)].join(""):b;return new C(a,b,c,null,null)}
function E(a){if(null==a)return null;if(a&&(a.B&8388608||a.Ph))return a.Y(null);if(we(a)||"string"===typeof a)return 0===a.length?null:new F(a,0);if(v(vf,a))return wf(a);throw Error([y(a),y(" is not ISeqable")].join(""));}function H(a){if(null==a)return null;if(a&&(a.B&64||a.$d))return a.wa(null);a=E(a);return null==a?null:Pe(a)}function og(a){return null!=a?a&&(a.B&64||a.$d)?a.Ia(null):(a=E(a))?Qe(a):pg:pg}function J(a){return null==a?null:a&&(a.B&128||a.Le)?a.$a(null):E(og(a))}
var qg=function qg(){switch(arguments.length){case 1:return qg.g(arguments[0]);case 2:return qg.a(arguments[0],arguments[1]);default:return qg.l(arguments[0],arguments[1],new F(Array.prototype.slice.call(arguments,2),0))}};qg.g=function(){return!0};qg.a=function(a,b){return null==a?null==b:a===b||tf(a,b)};qg.l=function(a,b,c){for(;;)if(qg.a(a,b))if(J(c))a=b,b=H(c),c=J(c);else return qg.a(b,H(c));else return!1};qg.J=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return qg.l(b,a,c)};qg.I=2;
function rg(a){this.aa=a}rg.prototype.next=function(){if(null!=this.aa){var a=H(this.aa);this.aa=J(this.aa);return{value:a,done:!1}}return{value:null,done:!0}};function sg(a){return new rg(E(a))}function tg(a,b){var c=bg(a),c=cg(0,c);return dg(c,b)}function ug(a){var b=0,c=1;for(a=E(a);;)if(null!=a)b+=1,c=ag(31,c)+ig(H(a))|0,a=J(a);else return tg(c,b)}var vg=tg(1,0);function wg(a){var b=0,c=0;for(a=E(a);;)if(null!=a)b+=1,c=c+ig(H(a))|0,a=J(a);else return tg(c,b)}var xg=tg(0,0);Je["null"]=!0;
Ke["null"]=function(){return 0};Date.prototype.M=function(a,b){return b instanceof Date&&this.valueOf()===b.valueOf()};Date.prototype.Yc=!0;Date.prototype.wc=function(a,b){if(b instanceof Date)return Ma(this.valueOf(),b.valueOf());throw Error([y("Cannot compare "),y(this),y(" to "),y(b)].join(""));};tf.number=function(a,b){return a===b};Ge["function"]=!0;mf["function"]=!0;nf["function"]=function(){return null};uf._=function(a){return ia(a)};function yg(a){return a+1}
function zg(a){this.K=a;this.B=32768;this.O=0}zg.prototype.vd=function(){return this.K};function Ag(a){return a instanceof zg}function K(a){return kf(a)}function Bg(a,b){var c=Ke(a);if(0===c)return b.C?b.C():b.call(null);for(var d=A.a(a,0),e=1;;)if(e<c){var f=A.a(a,e),d=b.a?b.a(d,f):b.call(null,d,f);if(Ag(d))return kf(d);e+=1}else return d}function Cg(a,b,c){var d=Ke(a),e=c;for(c=0;;)if(c<d){var f=A.a(a,c),e=b.a?b.a(e,f):b.call(null,e,f);if(Ag(e))return kf(e);c+=1}else return e}
function Dg(a,b){var c=a.length;if(0===a.length)return b.C?b.C():b.call(null);for(var d=a[0],e=1;;)if(e<c){var f=a[e],d=b.a?b.a(d,f):b.call(null,d,f);if(Ag(d))return kf(d);e+=1}else return d}function Eg(a,b,c){var d=a.length,e=c;for(c=0;;)if(c<d){var f=a[c],e=b.a?b.a(e,f):b.call(null,e,f);if(Ag(e))return kf(e);c+=1}else return e}function Fg(a,b,c,d){for(var e=a.length;;)if(d<e){var f=a[d];c=b.a?b.a(c,f):b.call(null,c,f);if(Ag(c))return kf(c);d+=1}else return c}
function Gg(a){return a?a.B&2||a.Dh?!0:a.B?!1:v(Je,a):v(Je,a)}function Hg(a){return a?a.B&16||a.pg?!0:a.B?!1:v(Ne,a):v(Ne,a)}function Ig(a,b){this.v=a;this.L=b}Ig.prototype.mc=function(){return this.L<this.v.length};Ig.prototype.next=function(){var a=this.v[this.L];this.L+=1;return a};function F(a,b){this.v=a;this.L=b;this.B=166199550;this.O=8192}h=F.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};
h.ba=function(a,b){var c=b+this.L;return c<this.v.length?this.v[c]:null};h.ib=function(a,b,c){a=b+this.L;return a<this.v.length?this.v[a]:c};h.Ke=!0;h.Vd=function(){return new Ig(this.v,this.L)};h.da=function(){return new F(this.v,this.L)};h.$a=function(){return this.L+1<this.v.length?new F(this.v,this.L+1):null};h.Z=function(){var a=this.v.length-this.L;return 0>a?0:a};h.yd=function(){var a=Ke(this);return 0<a?new Jg(this,a-1,null):null};h.T=function(){return ug(this)};
h.M=function(a,b){return Kg.a?Kg.a(this,b):Kg.call(null,this,b)};h.pa=function(){return pg};h.Aa=function(a,b){return Fg(this.v,b,this.v[this.L],this.L+1)};h.Ba=function(a,b,c){return Fg(this.v,b,c,this.L)};h.wa=function(){return this.v[this.L]};h.Ia=function(){return this.L+1<this.v.length?new F(this.v,this.L+1):pg};h.Y=function(){return this.L<this.v.length?this:null};h.X=function(a,b){return Lg.a?Lg.a(b,this):Lg.call(null,b,this)};F.prototype[Be]=function(){return sg(this)};
function Mg(a,b){return b<a.length?new F(a,b):null}function L(){switch(arguments.length){case 1:return Mg(arguments[0],0);case 2:return Mg(arguments[0],arguments[1]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}}function Jg(a,b,c){this.Td=a;this.L=b;this.H=c;this.B=32374990;this.O=8192}h=Jg.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};h.U=function(){return this.H};h.da=function(){return new Jg(this.Td,this.L,this.H)};
h.$a=function(){return 0<this.L?new Jg(this.Td,this.L-1,null):null};h.Z=function(){return this.L+1};h.T=function(){return ug(this)};h.M=function(a,b){return Kg.a?Kg.a(this,b):Kg.call(null,this,b)};h.pa=function(){var a=pg,b=this.H;return Ng.a?Ng.a(a,b):Ng.call(null,a,b)};h.Aa=function(a,b){return Og?Og(b,this):Pg.call(null,b,this)};h.Ba=function(a,b,c){return Qg?Qg(b,c,this):Pg.call(null,b,c,this)};h.wa=function(){return A.a(this.Td,this.L)};
h.Ia=function(){return 0<this.L?new Jg(this.Td,this.L-1,null):pg};h.Y=function(){return this};h.V=function(a,b){return new Jg(this.Td,this.L,b)};h.X=function(a,b){return Lg.a?Lg.a(b,this):Lg.call(null,b,this)};Jg.prototype[Be]=function(){return sg(this)};function Rg(a){return H(J(a))}function Sg(a){for(;;){var b=J(a);if(null!=b)a=b;else return H(a)}}tf._=function(a,b){return a===b};
var Tg=function Tg(){switch(arguments.length){case 0:return Tg.C();case 1:return Tg.g(arguments[0]);case 2:return Tg.a(arguments[0],arguments[1]);default:return Tg.l(arguments[0],arguments[1],new F(Array.prototype.slice.call(arguments,2),0))}};Tg.C=function(){return Ug};Tg.g=function(a){return a};Tg.a=function(a,b){return null!=a?z(a,b):z(pg,b)};Tg.l=function(a,b,c){for(;;)if(u(c))a=Tg.a(a,b),b=H(c),c=J(c);else return Tg.a(a,b)};Tg.J=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return Tg.l(b,a,c)};
Tg.I=2;function Vg(a){return null==a?null:Le(a)}function M(a){if(null!=a)if(a&&(a.B&2||a.Dh))a=a.Z(null);else if(we(a))a=a.length;else if("string"===typeof a)a=a.length;else if(v(Je,a))a=Ke(a);else a:{a=E(a);for(var b=0;;){if(Gg(a)){a=b+Ke(a);break a}a=J(a);b+=1}}else a=0;return a}function Wg(a,b){for(var c=null;;){if(null==a)return c;if(0===b)return E(a)?H(a):c;if(Hg(a))return A.j(a,b,c);if(E(a)){var d=J(a),e=b-1;a=d;b=e}else return c}}
function Xg(a,b){if("number"!==typeof b)throw Error("index argument to nth must be a number");if(null==a)return a;if(a&&(a.B&16||a.pg))return a.ba(null,b);if(we(a)||"string"===typeof a)return b<a.length?a[b]:null;if(v(Ne,a))return A.a(a,b);if(a?a.B&64||a.$d||(a.B?0:v(Oe,a)):v(Oe,a)){var c;a:{c=a;for(var d=b;;){if(null==c)throw Error("Index out of bounds");if(0===d){if(E(c)){c=H(c);break a}throw Error("Index out of bounds");}if(Hg(c)){c=A.a(c,d);break a}if(E(c))c=J(c),--d;else throw Error("Index out of bounds");
}}return c}throw Error([y("nth not supported on this type "),y(Ae(ze(a)))].join(""));}function N(a,b){if("number"!==typeof b)throw Error("index argument to nth must be a number.");if(null==a)return null;if(a&&(a.B&16||a.pg))return a.ib(null,b,null);if(we(a)||"string"===typeof a)return b<a.length?a[b]:null;if(v(Ne,a))return A.a(a,b);if(a?a.B&64||a.$d||(a.B?0:v(Oe,a)):v(Oe,a))return Wg(a,b);throw Error([y("nth not supported on this type "),y(Ae(ze(a)))].join(""));}
function Q(a,b){return null==a?null:a&&(a.B&256||a.Ih)?a.R(null,b):we(a)?b<a.length?a[b|0]:null:"string"===typeof a?b<a.length?a[b|0]:null:v(Te,a)?Ue.a(a,b):null}function Yg(a,b,c){return null!=a?a&&(a.B&256||a.Ih)?a.P(null,b,c):we(a)?b<a.length?a[b]:c:"string"===typeof a?b<a.length?a[b]:c:v(Te,a)?Ue.j(a,b,c):c:c}
var R=function R(){switch(arguments.length){case 3:return R.j(arguments[0],arguments[1],arguments[2]);default:return R.l(arguments[0],arguments[1],arguments[2],new F(Array.prototype.slice.call(arguments,3),0))}};R.j=function(a,b,c){return null!=a?Xe(a,b,c):Zg([b],[c])};R.l=function(a,b,c,d){for(;;)if(a=R.j(a,b,c),u(d))b=H(d),c=Rg(d),d=J(J(d));else return a};R.J=function(a){var b=H(a),c=J(a);a=H(c);var d=J(c),c=H(d),d=J(d);return R.l(b,a,c,d)};R.I=3;
var $g=function $g(){switch(arguments.length){case 1:return $g.g(arguments[0]);case 2:return $g.a(arguments[0],arguments[1]);default:return $g.l(arguments[0],arguments[1],new F(Array.prototype.slice.call(arguments,2),0))}};$g.g=function(a){return a};$g.a=function(a,b){return null==a?null:Ze(a,b)};$g.l=function(a,b,c){for(;;){if(null==a)return null;a=$g.a(a,b);if(u(c))b=H(c),c=J(c);else return a}};$g.J=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return $g.l(b,a,c)};$g.I=2;
function ah(a){var b=fa(a);return u(b)?b:a?u(u(null)?null:a.Ch)?!0:a.xc?!1:v(Ge,a):v(Ge,a)}function bh(a,b){this.D=a;this.H=b;this.B=393217;this.O=0}h=bh.prototype;h.U=function(){return this.H};h.V=function(a,b){return new bh(this.D,b)};h.Ch=!0;
h.call=function(){function a(a,b,c,d,e,f,g,k,l,m,p,r,q,w,B,D,G,I,P,O,ha,Ga){a=this.D;return S.Ud?S.Ud(a,b,c,d,e,f,g,k,l,m,p,r,q,w,B,D,G,I,P,O,ha,Ga):S.call(null,a,b,c,d,e,f,g,k,l,m,p,r,q,w,B,D,G,I,P,O,ha,Ga)}function b(a,b,c,d,e,f,g,k,l,m,p,r,q,w,B,D,G,I,P,O,ha){a=this;return a.D.Ta?a.D.Ta(b,c,d,e,f,g,k,l,m,p,r,q,w,B,D,G,I,P,O,ha):a.D.call(null,b,c,d,e,f,g,k,l,m,p,r,q,w,B,D,G,I,P,O,ha)}function c(a,b,c,d,e,f,g,k,l,m,p,r,q,w,B,D,G,I,P,O){a=this;return a.D.Sa?a.D.Sa(b,c,d,e,f,g,k,l,m,p,r,q,w,B,D,G,
I,P,O):a.D.call(null,b,c,d,e,f,g,k,l,m,p,r,q,w,B,D,G,I,P,O)}function d(a,b,c,d,e,f,g,k,l,m,p,r,q,w,B,D,G,I,P){a=this;return a.D.Ra?a.D.Ra(b,c,d,e,f,g,k,l,m,p,r,q,w,B,D,G,I,P):a.D.call(null,b,c,d,e,f,g,k,l,m,p,r,q,w,B,D,G,I,P)}function e(a,b,c,d,e,f,g,k,l,m,p,r,q,w,B,D,G,I){a=this;return a.D.Qa?a.D.Qa(b,c,d,e,f,g,k,l,m,p,r,q,w,B,D,G,I):a.D.call(null,b,c,d,e,f,g,k,l,m,p,r,q,w,B,D,G,I)}function f(a,b,c,d,e,f,g,k,l,m,p,r,q,w,B,D,G){a=this;return a.D.Pa?a.D.Pa(b,c,d,e,f,g,k,l,m,p,r,q,w,B,D,G):a.D.call(null,
b,c,d,e,f,g,k,l,m,p,r,q,w,B,D,G)}function g(a,b,c,d,e,f,g,k,l,m,p,r,q,w,B,D){a=this;return a.D.Oa?a.D.Oa(b,c,d,e,f,g,k,l,m,p,r,q,w,B,D):a.D.call(null,b,c,d,e,f,g,k,l,m,p,r,q,w,B,D)}function k(a,b,c,d,e,f,g,k,l,m,p,r,q,w,B){a=this;return a.D.Na?a.D.Na(b,c,d,e,f,g,k,l,m,p,r,q,w,B):a.D.call(null,b,c,d,e,f,g,k,l,m,p,r,q,w,B)}function l(a,b,c,d,e,f,g,k,l,m,p,r,q,w){a=this;return a.D.Ma?a.D.Ma(b,c,d,e,f,g,k,l,m,p,r,q,w):a.D.call(null,b,c,d,e,f,g,k,l,m,p,r,q,w)}function m(a,b,c,d,e,f,g,k,l,m,p,r,q){a=this;
return a.D.La?a.D.La(b,c,d,e,f,g,k,l,m,p,r,q):a.D.call(null,b,c,d,e,f,g,k,l,m,p,r,q)}function p(a,b,c,d,e,f,g,k,l,m,p,r){a=this;return a.D.Ka?a.D.Ka(b,c,d,e,f,g,k,l,m,p,r):a.D.call(null,b,c,d,e,f,g,k,l,m,p,r)}function q(a,b,c,d,e,f,g,k,l,m,p){a=this;return a.D.Ja?a.D.Ja(b,c,d,e,f,g,k,l,m,p):a.D.call(null,b,c,d,e,f,g,k,l,m,p)}function r(a,b,c,d,e,f,g,k,l,m){a=this;return a.D.Wa?a.D.Wa(b,c,d,e,f,g,k,l,m):a.D.call(null,b,c,d,e,f,g,k,l,m)}function w(a,b,c,d,e,f,g,k,l){a=this;return a.D.Va?a.D.Va(b,c,
d,e,f,g,k,l):a.D.call(null,b,c,d,e,f,g,k,l)}function B(a,b,c,d,e,f,g,k){a=this;return a.D.Ua?a.D.Ua(b,c,d,e,f,g,k):a.D.call(null,b,c,d,e,f,g,k)}function I(a,b,c,d,e,f,g){a=this;return a.D.ga?a.D.ga(b,c,d,e,f,g):a.D.call(null,b,c,d,e,f,g)}function G(a,b,c,d,e,f){a=this;return a.D.W?a.D.W(b,c,d,e,f):a.D.call(null,b,c,d,e,f)}function O(a,b,c,d,e){a=this;return a.D.N?a.D.N(b,c,d,e):a.D.call(null,b,c,d,e)}function P(a,b,c,d){a=this;return a.D.j?a.D.j(b,c,d):a.D.call(null,b,c,d)}function ha(a,b,c){a=this;
return a.D.a?a.D.a(b,c):a.D.call(null,b,c)}function Da(a,b){a=this;return a.D.g?a.D.g(b):a.D.call(null,b)}function Ga(a){a=this;return a.D.C?a.D.C():a.D.call(null)}var D=null,D=function(D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb,gc,Bb,Nb,Yb,Zb,oe,Df,Re){switch(arguments.length){case 1:return Ga.call(this,D);case 2:return Da.call(this,D,Ca);case 3:return ha.call(this,D,Ca,Fa);case 4:return P.call(this,D,Ca,Fa,Pa);case 5:return O.call(this,D,Ca,Fa,Pa,Ua);case 6:return G.call(this,D,Ca,Fa,Pa,Ua,Ya);case 7:return I.call(this,
D,Ca,Fa,Pa,Ua,Ya,db);case 8:return B.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb);case 9:return w.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb);case 10:return r.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa);case 11:return q.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za);case 12:return p.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb);case 13:return m.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb);case 14:return l.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb);case 15:return k.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,
Mb,Rb,gc);case 16:return g.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb,gc,Bb);case 17:return f.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb,gc,Bb,Nb);case 18:return e.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb,gc,Bb,Nb,Yb);case 19:return d.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb,gc,Bb,Nb,Yb,Zb);case 20:return c.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb,gc,Bb,Nb,Yb,Zb,oe);case 21:return b.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb,gc,Bb,Nb,Yb,Zb,oe,
Df);case 22:return a.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb,gc,Bb,Nb,Yb,Zb,oe,Df,Re)}throw Error("Invalid arity: "+arguments.length);};D.g=Ga;D.a=Da;D.j=ha;D.N=P;D.W=O;D.ga=G;D.Ua=I;D.Va=B;D.Wa=w;D.Ja=r;D.Ka=q;D.La=p;D.Ma=m;D.Na=l;D.Oa=k;D.Pa=g;D.Qa=f;D.Ra=e;D.Sa=d;D.Ta=c;D.Af=b;D.Ud=a;return D}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ce(b)))};h.C=function(){return this.D.C?this.D.C():this.D.call(null)};
h.g=function(a){return this.D.g?this.D.g(a):this.D.call(null,a)};h.a=function(a,b){return this.D.a?this.D.a(a,b):this.D.call(null,a,b)};h.j=function(a,b,c){return this.D.j?this.D.j(a,b,c):this.D.call(null,a,b,c)};h.N=function(a,b,c,d){return this.D.N?this.D.N(a,b,c,d):this.D.call(null,a,b,c,d)};h.W=function(a,b,c,d,e){return this.D.W?this.D.W(a,b,c,d,e):this.D.call(null,a,b,c,d,e)};h.ga=function(a,b,c,d,e,f){return this.D.ga?this.D.ga(a,b,c,d,e,f):this.D.call(null,a,b,c,d,e,f)};
h.Ua=function(a,b,c,d,e,f,g){return this.D.Ua?this.D.Ua(a,b,c,d,e,f,g):this.D.call(null,a,b,c,d,e,f,g)};h.Va=function(a,b,c,d,e,f,g,k){return this.D.Va?this.D.Va(a,b,c,d,e,f,g,k):this.D.call(null,a,b,c,d,e,f,g,k)};h.Wa=function(a,b,c,d,e,f,g,k,l){return this.D.Wa?this.D.Wa(a,b,c,d,e,f,g,k,l):this.D.call(null,a,b,c,d,e,f,g,k,l)};h.Ja=function(a,b,c,d,e,f,g,k,l,m){return this.D.Ja?this.D.Ja(a,b,c,d,e,f,g,k,l,m):this.D.call(null,a,b,c,d,e,f,g,k,l,m)};
h.Ka=function(a,b,c,d,e,f,g,k,l,m,p){return this.D.Ka?this.D.Ka(a,b,c,d,e,f,g,k,l,m,p):this.D.call(null,a,b,c,d,e,f,g,k,l,m,p)};h.La=function(a,b,c,d,e,f,g,k,l,m,p,q){return this.D.La?this.D.La(a,b,c,d,e,f,g,k,l,m,p,q):this.D.call(null,a,b,c,d,e,f,g,k,l,m,p,q)};h.Ma=function(a,b,c,d,e,f,g,k,l,m,p,q,r){return this.D.Ma?this.D.Ma(a,b,c,d,e,f,g,k,l,m,p,q,r):this.D.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r)};
h.Na=function(a,b,c,d,e,f,g,k,l,m,p,q,r,w){return this.D.Na?this.D.Na(a,b,c,d,e,f,g,k,l,m,p,q,r,w):this.D.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w)};h.Oa=function(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B){return this.D.Oa?this.D.Oa(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B):this.D.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B)};h.Pa=function(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I){return this.D.Pa?this.D.Pa(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I):this.D.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I)};
h.Qa=function(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G){return this.D.Qa?this.D.Qa(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G):this.D.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G)};h.Ra=function(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O){return this.D.Ra?this.D.Ra(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O):this.D.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O)};
h.Sa=function(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P){return this.D.Sa?this.D.Sa(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P):this.D.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P)};h.Ta=function(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha){return this.D.Ta?this.D.Ta(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha):this.D.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha)};
h.Af=function(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha,Da){var Ga=this.D;return S.Ud?S.Ud(Ga,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha,Da):S.call(null,Ga,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha,Da)};function Ng(a,b){return ah(a)&&!(a?a.B&262144||a.Uh||(a.B?0:v(of,a)):v(of,a))?new bh(a,b):null==a?null:pf(a,b)}function ch(a){var b=null!=a;return(b?a?a.B&131072||a.Lh||(a.B?0:v(mf,a)):v(mf,a):b)?nf(a):null}function dh(a){return null==a?null:ef(a)}
var eh=function eh(){switch(arguments.length){case 1:return eh.g(arguments[0]);case 2:return eh.a(arguments[0],arguments[1]);default:return eh.l(arguments[0],arguments[1],new F(Array.prototype.slice.call(arguments,2),0))}};eh.g=function(a){return a};eh.a=function(a,b){return null==a?null:df(a,b)};eh.l=function(a,b,c){for(;;){if(null==a)return null;a=eh.a(a,b);if(u(c))b=H(c),c=J(c);else return a}};eh.J=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return eh.l(b,a,c)};eh.I=2;
function fh(a){return null==a||xe(E(a))}function gh(a){return null==a?!1:a?a.B&8||a.Fl?!0:a.B?!1:v(Me,a):v(Me,a)}function hh(a){return null==a?!1:a?a.B&4096||a.Ll?!0:a.B?!1:v(cf,a):v(cf,a)}function ih(a){return a?a.B&16777216||a.Kl?!0:a.B?!1:v(xf,a):v(xf,a)}function jh(a){return a?a.B&268435456||a.Ml?!0:a.B?!1:v(Bf,a):v(Bf,a)}function kh(a){return null==a?!1:a?a.B&1024||a.Jh?!0:a.B?!1:v(Ye,a):v(Ye,a)}function lh(a){return a?a.B&16384||a.Nl?!0:a.B?!1:v(gf,a):v(gf,a)}
function mh(a){return a?a.O&512||a.El?!0:!1:!1}function nh(a){var b=[];Va(a,function(a,b){return function(a,c){return b.push(c)}}(a,b));return b}function oh(a,b,c,d,e){for(;0!==e;)c[d]=a[b],d+=1,--e,b+=1}var ph={};function qh(a){return!0===a}function rh(a){return null==a?!1:a?a.B&64||a.$d?!0:a.B?!1:v(Oe,a):v(Oe,a)}function sh(a){return u(a)?!0:!1}function th(a){var b=ah(a);return b?b:a?a.B&1||a.Hl?!0:a.B?!1:v(He,a):v(He,a)}
function uh(a){return"number"===typeof a&&xe(isNaN(a))&&Infinity!==a&&parseFloat(a)===parseInt(a,10)}function vh(a,b){return Yg(a,b,ph)===ph?!1:!0}function wh(a,b){var c;if(c=null!=a)c=a?a.B&512||a.Dl?!0:a.B?!1:v(Ve,a):v(Ve,a);return c&&vh(a,b)?new T(null,2,5,U,[b,Q(a,b)],null):null}
var xh=function xh(){switch(arguments.length){case 1:return xh.g(arguments[0]);case 2:return xh.a(arguments[0],arguments[1]);default:return xh.l(arguments[0],arguments[1],new F(Array.prototype.slice.call(arguments,2),0))}};xh.g=function(){return!0};xh.a=function(a,b){return!qg.a(a,b)};xh.l=function(a,b,c){if(qg.a(a,b))return!1;a=yh([a,b]);for(b=c;;){var d=H(b);c=J(b);if(u(b)){if(vh(a,d))return!1;a=Tg.a(a,d);b=c}else return!0}};xh.J=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return xh.l(b,a,c)};
xh.I=2;function zh(a,b){if(a===b)return 0;if(null==a)return-1;if(null==b)return 1;if("number"===typeof a){if("number"===typeof b)return Ma(a,b);throw Error([y("Cannot compare "),y(a),y(" to "),y(b)].join(""));}if(a?a.O&2048||a.Yc||(a.O?0:v(Mf,a)):v(Mf,a))return Nf(a,b);if("string"!==typeof a&&!we(a)&&!0!==a&&!1!==a||ze(a)!==ze(b))throw Error([y("Cannot compare "),y(a),y(" to "),y(b)].join(""));return Ma(a,b)}
function Ah(a,b){var c=M(a),d=M(b);if(c<d)c=-1;else if(c>d)c=1;else if(0===c)c=0;else a:for(d=0;;){var e=zh(Xg(a,d),Xg(b,d));if(0===e&&d+1<c)d+=1;else{c=e;break a}}return c}function Bh(a){return qg.a(a,zh)?zh:function(b,c){var d=a.a?a.a(b,c):a.call(null,b,c);return"number"===typeof d?d:u(d)?-1:u(a.a?a.a(c,b):a.call(null,c,b))?1:0}}function Ch(){var a=Dh(Eh);return Fh(zh,a)}function Fh(a,b){if(E(b)){var c=Gh.g?Gh.g(b):Gh.call(null,b),d=Bh(a);Na(c,d);return E(c)}return pg}
var Hh=function Hh(){switch(arguments.length){case 2:return Hh.a(arguments[0],arguments[1]);case 3:return Hh.j(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}};Hh.a=function(a,b){return Hh.j(a,zh,b)};Hh.j=function(a,b,c){return Fh(function(c,e){return Bh(b).call(null,a.g?a.g(c):a.call(null,c),a.g?a.g(e):a.call(null,e))},c)};Hh.I=3;
function Pg(){switch(arguments.length){case 2:return Og(arguments[0],arguments[1]);case 3:return Qg(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}}function Og(a,b){var c=E(b);if(c){var d=H(c),c=J(c);return Ee?Ee(a,d,c):Fe.call(null,a,d,c)}return a.C?a.C():a.call(null)}function Qg(a,b,c){for(c=E(c);;)if(c){var d=H(c);b=a.a?a.a(b,d):a.call(null,b,d);if(Ag(b))return kf(b);c=J(c)}else return b}
function Fe(){switch(arguments.length){case 2:return Ih(arguments[0],arguments[1]);case 3:return Ee(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}}function Ih(a,b){return b&&(b.B&524288||b.Nh)?b.Aa(null,a):we(b)?Dg(b,a):"string"===typeof b?Dg(b,a):v(qf,b)?rf.a(b,a):Og(a,b)}function Ee(a,b,c){return c&&(c.B&524288||c.Nh)?c.Ba(null,a,b):we(c)?Eg(c,a,b):"string"===typeof c?Eg(c,a,b):v(qf,c)?rf.j(c,a,b):Qg(a,b,c)}
function Jh(a,b,c){return null!=c?sf(c,a,b):b}function Kh(a){return a}function Lh(a,b,c,d){a=a.g?a.g(b):a.call(null,b);c=Ee(a,c,d);return a.g?a.g(c):a.call(null,c)}var Mh=function Mh(){switch(arguments.length){case 0:return Mh.C();case 1:return Mh.g(arguments[0]);case 2:return Mh.a(arguments[0],arguments[1]);default:return Mh.l(arguments[0],arguments[1],new F(Array.prototype.slice.call(arguments,2),0))}};Mh.C=function(){return 0};Mh.g=function(a){return a};Mh.a=function(a,b){return a+b};
Mh.l=function(a,b,c){return Ee(Mh,a+b,c)};Mh.J=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return Mh.l(b,a,c)};Mh.I=2;function Nh(a){return a-1}var Oh=function Oh(){switch(arguments.length){case 1:return Oh.g(arguments[0]);case 2:return Oh.a(arguments[0],arguments[1]);default:return Oh.l(arguments[0],arguments[1],new F(Array.prototype.slice.call(arguments,2),0))}};Oh.g=function(a){return a};Oh.a=function(a,b){return a>b?a:b};Oh.l=function(a,b,c){return Ee(Oh,a>b?a:b,c)};
Oh.J=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return Oh.l(b,a,c)};Oh.I=2;function Ph(a){a=(a-a%2)/2;return 0<=a?Math.floor(a):Math.ceil(a)}function Qh(a){a-=a>>1&1431655765;a=(a&858993459)+(a>>2&858993459);return 16843009*(a+(a>>4)&252645135)>>24}function Rh(a){return 0===a}function Sh(a,b){for(var c=b,d=E(a);;)if(d&&0<c)--c,d=J(d);else return d}
var y=function y(){switch(arguments.length){case 0:return y.C();case 1:return y.g(arguments[0]);default:return y.l(arguments[0],new F(Array.prototype.slice.call(arguments,1),0))}};y.C=function(){return""};y.g=function(a){return null==a?"":ua(a)};y.l=function(a,b){for(var c=new je(""+y(a)),d=b;;)if(u(d))c=c.append(""+y(H(d))),d=J(d);else return c.toString()};y.J=function(a){var b=H(a);a=J(a);return y.l(b,a)};y.I=1;function Th(a,b){return a.substring(b)}
function Kg(a,b){var c;if(ih(b))if(Gg(a)&&Gg(b)&&M(a)!==M(b))c=!1;else a:{c=E(a);for(var d=E(b);;){if(null==c){c=null==d;break a}if(null!=d&&qg.a(H(c),H(d)))c=J(c),d=J(d);else{c=!1;break a}}}else c=null;return sh(c)}function Uh(a){var b=0;for(a=E(a);;)if(a){var c=H(a),b=(b+(ig(function(){var a=c;return Vh.g?Vh.g(a):Vh.call(null,a)}())^ig(function(){var a=c;return Wh.g?Wh.g(a):Wh.call(null,a)}())))%4503599627370496;a=J(a)}else return b}
function Xh(a,b,c,d,e){this.H=a;this.first=b;this.za=c;this.count=d;this.w=e;this.B=65937646;this.O=8192}h=Xh.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};h.U=function(){return this.H};h.da=function(){return new Xh(this.H,this.first,this.za,this.count,this.w)};h.$a=function(){return 1===this.count?null:this.za};h.Z=function(){return this.count};h.Lc=function(){return this.first};h.Mc=function(){return Qe(this)};
h.T=function(){var a=this.w;return null!=a?a:this.w=a=ug(this)};h.M=function(a,b){return Kg(this,b)};h.pa=function(){return pf(pg,this.H)};h.Aa=function(a,b){return Og(b,this)};h.Ba=function(a,b,c){return Qg(b,c,this)};h.wa=function(){return this.first};h.Ia=function(){return 1===this.count?pg:this.za};h.Y=function(){return this};h.V=function(a,b){return new Xh(b,this.first,this.za,this.count,this.w)};h.X=function(a,b){return new Xh(this.H,b,this,this.count+1,null)};Xh.prototype[Be]=function(){return sg(this)};
function Yh(a){this.H=a;this.B=65937614;this.O=8192}h=Yh.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};h.U=function(){return this.H};h.da=function(){return new Yh(this.H)};h.$a=function(){return null};h.Z=function(){return 0};h.Lc=function(){return null};h.Mc=function(){throw Error("Can't pop empty list");};h.T=function(){return vg};h.M=function(a,b){return Kg(this,b)};h.pa=function(){return this};h.Aa=function(a,b){return Og(b,this)};
h.Ba=function(a,b,c){return Qg(b,c,this)};h.wa=function(){return null};h.Ia=function(){return pg};h.Y=function(){return null};h.V=function(a,b){return new Yh(b)};h.X=function(a,b){return new Xh(this.H,b,null,1,null)};var pg=new Yh(null);Yh.prototype[Be]=function(){return sg(this)};function Zh(a){return(a?a.B&134217728||a.Jl||(a.B?0:v(zf,a)):v(zf,a))?Af(a):Ee(Tg,pg,a)}var $h=function $h(){return $h.l(0<arguments.length?new F(Array.prototype.slice.call(arguments,0),0):null)};
$h.l=function(a){var b;if(a instanceof F&&0===a.L)b=a.v;else a:for(b=[];;)if(null!=a)b.push(a.wa(null)),a=a.$a(null);else break a;a=b.length;for(var c=pg;;)if(0<a){var d=a-1,c=c.X(null,b[a-1]);a=d}else return c};$h.I=0;$h.J=function(a){return $h.l(E(a))};function ai(a,b,c,d){this.H=a;this.first=b;this.za=c;this.w=d;this.B=65929452;this.O=8192}h=ai.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};h.U=function(){return this.H};
h.da=function(){return new ai(this.H,this.first,this.za,this.w)};h.$a=function(){return null==this.za?null:E(this.za)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=ug(this)};h.M=function(a,b){return Kg(this,b)};h.pa=function(){return Ng(pg,this.H)};h.Aa=function(a,b){return Og(b,this)};h.Ba=function(a,b,c){return Qg(b,c,this)};h.wa=function(){return this.first};h.Ia=function(){return null==this.za?pg:this.za};h.Y=function(){return this};
h.V=function(a,b){return new ai(b,this.first,this.za,this.w)};h.X=function(a,b){return new ai(null,b,this,this.w)};ai.prototype[Be]=function(){return sg(this)};function Lg(a,b){var c=null==b;return(c?c:b&&(b.B&64||b.$d))?new ai(null,a,b,null):new ai(null,a,E(b),null)}function bi(a,b){if(a.ja===b.ja)return 0;var c=xe(a.cb);if(u(c?b.cb:c))return-1;if(u(a.cb)){if(xe(b.cb))return 1;c=Ma(a.cb,b.cb);return 0===c?Ma(a.name,b.name):c}return Ma(a.name,b.name)}
function V(a,b,c,d){this.cb=a;this.name=b;this.ja=c;this.qd=d;this.B=2153775105;this.O=4096}h=V.prototype;h.toString=function(){return[y(":"),y(this.ja)].join("")};h.equiv=function(a){return this.M(null,a)};h.M=function(a,b){return b instanceof V?this.ja===b.ja:!1};
h.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return Q(c,this);case 3:return Yg(c,this,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return Q(c,this)};a.j=function(a,c,d){return Yg(c,this,d)};return a}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ce(b)))};h.g=function(a){return Q(a,this)};h.a=function(a,b){return Yg(a,this,b)};
h.T=function(){var a=this.qd;return null!=a?a:this.qd=a=jg(eg(this.name),hg(this.cb))+2654435769|0};h.Yd=function(){return this.name};h.Zd=function(){return this.cb};h.S=function(a,b){return Cf(b,[y(":"),y(this.ja)].join(""))};function ci(a){return a instanceof V}function W(a,b){return a===b?!0:a instanceof V&&b instanceof V?a.ja===b.ja:!1}
var di=function di(){switch(arguments.length){case 1:return di.g(arguments[0]);case 2:return di.a(arguments[0],arguments[1]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}};
di.g=function(a){if(a instanceof V)return a;if(a instanceof C){var b;if(a&&(a.O&4096||a.Mh))b=a.Zd(null);else throw Error([y("Doesn't support namespace: "),y(a)].join(""));return new V(b,ei.g?ei.g(a):ei.call(null,a),a.gb,null)}return"string"===typeof a?(b=a.split("/"),2===b.length?new V(b[0],b[1],a,null):new V(null,b[0],a,null)):null};di.a=function(a,b){return new V(a,b,[y(u(a)?[y(a),y("/")].join(""):null),y(b)].join(""),null)};di.I=2;
function fi(a,b,c,d){this.H=a;this.lc=b;this.aa=c;this.w=d;this.B=32374988;this.O=0}h=fi.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};function gi(a){null!=a.lc&&(a.aa=a.lc.C?a.lc.C():a.lc.call(null),a.lc=null);return a.aa}h.U=function(){return this.H};h.$a=function(){wf(this);return null==this.aa?null:J(this.aa)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=ug(this)};h.M=function(a,b){return Kg(this,b)};h.pa=function(){return Ng(pg,this.H)};
h.Aa=function(a,b){return Og(b,this)};h.Ba=function(a,b,c){return Qg(b,c,this)};h.wa=function(){wf(this);return null==this.aa?null:H(this.aa)};h.Ia=function(){wf(this);return null!=this.aa?og(this.aa):pg};h.Y=function(){gi(this);if(null==this.aa)return null;for(var a=this.aa;;)if(a instanceof fi)a=gi(a);else return this.aa=a,E(this.aa)};h.V=function(a,b){return new fi(b,this.lc,this.aa,this.w)};h.X=function(a,b){return Lg(b,this)};fi.prototype[Be]=function(){return sg(this)};
function hi(a,b){this.fa=a;this.end=b;this.B=2;this.O=0}hi.prototype.add=function(a){this.fa[this.end]=a;return this.end+=1};hi.prototype.vc=function(){var a=new ii(this.fa,0,this.end);this.fa=null;return a};hi.prototype.Z=function(){return this.end};function ji(a){return new hi(Array(a),0)}function ii(a,b,c){this.v=a;this.Xa=b;this.end=c;this.B=524306;this.O=0}h=ii.prototype;h.Z=function(){return this.end-this.Xa};h.ba=function(a,b){return this.v[this.Xa+b]};
h.ib=function(a,b,c){return 0<=b&&b<this.end-this.Xa?this.v[this.Xa+b]:c};h.og=function(){if(this.Xa===this.end)throw Error("-drop-first of empty chunk");return new ii(this.v,this.Xa+1,this.end)};h.Aa=function(a,b){return Fg(this.v,b,this.v[this.Xa],this.Xa+1)};h.Ba=function(a,b,c){return Fg(this.v,b,c,this.Xa)};function ki(a,b,c,d){this.vc=a;this.oc=b;this.H=c;this.w=d;this.B=31850732;this.O=1536}h=ki.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};
h.U=function(){return this.H};h.$a=function(){if(1<Ke(this.vc))return new ki(Of(this.vc),this.oc,this.H,null);var a=wf(this.oc);return null==a?null:a};h.T=function(){var a=this.w;return null!=a?a:this.w=a=ug(this)};h.M=function(a,b){return Kg(this,b)};h.pa=function(){return Ng(pg,this.H)};h.wa=function(){return A.a(this.vc,0)};h.Ia=function(){return 1<Ke(this.vc)?new ki(Of(this.vc),this.oc,this.H,null):null==this.oc?pg:this.oc};h.Y=function(){return this};h.yf=function(){return this.vc};
h.zf=function(){return null==this.oc?pg:this.oc};h.V=function(a,b){return new ki(this.vc,this.oc,b,this.w)};h.X=function(a,b){return Lg(b,this)};h.xf=function(){return null==this.oc?null:this.oc};ki.prototype[Be]=function(){return sg(this)};function li(a,b){return 0===Ke(a)?b:new ki(a,b,null,null)}function mi(a,b){a.add(b)}function ni(a){return a.vc()}function Gh(a){for(var b=[];;)if(E(a))b.push(H(a)),a=J(a);else return b}
function oi(a){if("number"===typeof a)a:{var b=Array(a);if(rh(null))for(var c=0,d=E(null);;)if(d&&c<a)b[c]=H(d),c+=1,d=J(d);else{a=b;break a}else{for(c=0;;)if(c<a)b[c]=null,c+=1;else break;a=b}}else a=De(a);return a}function pi(a,b){if(Gg(a))return M(a);for(var c=a,d=b,e=0;;)if(0<d&&E(c))c=J(c),--d,e+=1;else return e}
var qi=function qi(b){return null==b?null:null==J(b)?E(H(b)):Lg(H(b),qi(J(b)))},ri=function ri(){switch(arguments.length){case 0:return ri.C();case 1:return ri.g(arguments[0]);case 2:return ri.a(arguments[0],arguments[1]);default:return ri.l(arguments[0],arguments[1],new F(Array.prototype.slice.call(arguments,2),0))}};ri.C=function(){return new fi(null,function(){return null},null,null)};ri.g=function(a){return new fi(null,function(){return a},null,null)};
ri.a=function(a,b){return new fi(null,function(){var c=E(a);return c?mh(c)?li(Pf(c),ri.a(Qf(c),b)):Lg(H(c),ri.a(og(c),b)):b},null,null)};ri.l=function(a,b,c){return function e(a,b){return new fi(null,function(){var c=E(a);return c?mh(c)?li(Pf(c),e(Qf(c),b)):Lg(H(c),e(og(c),b)):u(b)?e(H(b),J(b)):null},null,null)}(ri.a(a,b),c)};ri.J=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return ri.l(b,a,c)};ri.I=2;function si(a,b){return Lg(a,b)}function ti(a){return Jf(a)}
var ui=function ui(){switch(arguments.length){case 0:return ui.C();case 1:return ui.g(arguments[0]);case 2:return ui.a(arguments[0],arguments[1]);default:return ui.l(arguments[0],arguments[1],new F(Array.prototype.slice.call(arguments,2),0))}};ui.C=function(){return Hf(Ug)};ui.g=function(a){return a};ui.a=function(a,b){return If(a,b)};ui.l=function(a,b,c){for(;;)if(a=If(a,b),u(c))b=H(c),c=J(c);else return a};ui.J=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return ui.l(b,a,c)};ui.I=2;
function vi(a,b,c){return Kf(a,b,c)}
function wi(a,b,c){var d=E(c);if(0===b)return a.C?a.C():a.call(null);c=Pe(d);var e=Qe(d);if(1===b)return a.g?a.g(c):a.g?a.g(c):a.call(null,c);var d=Pe(e),f=Qe(e);if(2===b)return a.a?a.a(c,d):a.a?a.a(c,d):a.call(null,c,d);var e=Pe(f),g=Qe(f);if(3===b)return a.j?a.j(c,d,e):a.j?a.j(c,d,e):a.call(null,c,d,e);var f=Pe(g),k=Qe(g);if(4===b)return a.N?a.N(c,d,e,f):a.N?a.N(c,d,e,f):a.call(null,c,d,e,f);var g=Pe(k),l=Qe(k);if(5===b)return a.W?a.W(c,d,e,f,g):a.W?a.W(c,d,e,f,g):a.call(null,c,d,e,f,g);var k=Pe(l),
m=Qe(l);if(6===b)return a.ga?a.ga(c,d,e,f,g,k):a.ga?a.ga(c,d,e,f,g,k):a.call(null,c,d,e,f,g,k);var l=Pe(m),p=Qe(m);if(7===b)return a.Ua?a.Ua(c,d,e,f,g,k,l):a.Ua?a.Ua(c,d,e,f,g,k,l):a.call(null,c,d,e,f,g,k,l);var m=Pe(p),q=Qe(p);if(8===b)return a.Va?a.Va(c,d,e,f,g,k,l,m):a.Va?a.Va(c,d,e,f,g,k,l,m):a.call(null,c,d,e,f,g,k,l,m);var p=Pe(q),r=Qe(q);if(9===b)return a.Wa?a.Wa(c,d,e,f,g,k,l,m,p):a.Wa?a.Wa(c,d,e,f,g,k,l,m,p):a.call(null,c,d,e,f,g,k,l,m,p);var q=Pe(r),w=Qe(r);if(10===b)return a.Ja?a.Ja(c,
d,e,f,g,k,l,m,p,q):a.Ja?a.Ja(c,d,e,f,g,k,l,m,p,q):a.call(null,c,d,e,f,g,k,l,m,p,q);var r=Pe(w),B=Qe(w);if(11===b)return a.Ka?a.Ka(c,d,e,f,g,k,l,m,p,q,r):a.Ka?a.Ka(c,d,e,f,g,k,l,m,p,q,r):a.call(null,c,d,e,f,g,k,l,m,p,q,r);var w=Pe(B),I=Qe(B);if(12===b)return a.La?a.La(c,d,e,f,g,k,l,m,p,q,r,w):a.La?a.La(c,d,e,f,g,k,l,m,p,q,r,w):a.call(null,c,d,e,f,g,k,l,m,p,q,r,w);var B=Pe(I),G=Qe(I);if(13===b)return a.Ma?a.Ma(c,d,e,f,g,k,l,m,p,q,r,w,B):a.Ma?a.Ma(c,d,e,f,g,k,l,m,p,q,r,w,B):a.call(null,c,d,e,f,g,k,l,
m,p,q,r,w,B);var I=Pe(G),O=Qe(G);if(14===b)return a.Na?a.Na(c,d,e,f,g,k,l,m,p,q,r,w,B,I):a.Na?a.Na(c,d,e,f,g,k,l,m,p,q,r,w,B,I):a.call(null,c,d,e,f,g,k,l,m,p,q,r,w,B,I);var G=Pe(O),P=Qe(O);if(15===b)return a.Oa?a.Oa(c,d,e,f,g,k,l,m,p,q,r,w,B,I,G):a.Oa?a.Oa(c,d,e,f,g,k,l,m,p,q,r,w,B,I,G):a.call(null,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G);var O=Pe(P),ha=Qe(P);if(16===b)return a.Pa?a.Pa(c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O):a.Pa?a.Pa(c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O):a.call(null,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O);var P=
Pe(ha),Da=Qe(ha);if(17===b)return a.Qa?a.Qa(c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P):a.Qa?a.Qa(c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P):a.call(null,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P);var ha=Pe(Da),Ga=Qe(Da);if(18===b)return a.Ra?a.Ra(c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha):a.Ra?a.Ra(c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha):a.call(null,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha);Da=Pe(Ga);Ga=Qe(Ga);if(19===b)return a.Sa?a.Sa(c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha,Da):a.Sa?a.Sa(c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha,Da):a.call(null,
c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha,Da);var D=Pe(Ga);Qe(Ga);if(20===b)return a.Ta?a.Ta(c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha,Da,D):a.Ta?a.Ta(c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha,Da,D):a.call(null,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha,Da,D);throw Error("Only up to 20 arguments supported on functions");}
var S=function S(){switch(arguments.length){case 2:return S.a(arguments[0],arguments[1]);case 3:return S.j(arguments[0],arguments[1],arguments[2]);case 4:return S.N(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return S.W(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:return S.l(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],new F(Array.prototype.slice.call(arguments,5),0))}};
S.a=function(a,b){var c=a.I;if(a.J){var d=pi(b,c+1);return d<=c?wi(a,d,b):a.J(b)}return a.apply(a,Gh(b))};S.j=function(a,b,c){b=Lg(b,c);c=a.I;if(a.J){var d=pi(b,c+1);return d<=c?wi(a,d,b):a.J(b)}return a.apply(a,Gh(b))};S.N=function(a,b,c,d){b=Lg(b,Lg(c,d));c=a.I;return a.J?(d=pi(b,c+1),d<=c?wi(a,d,b):a.J(b)):a.apply(a,Gh(b))};S.W=function(a,b,c,d,e){b=Lg(b,Lg(c,Lg(d,e)));c=a.I;return a.J?(d=pi(b,c+1),d<=c?wi(a,d,b):a.J(b)):a.apply(a,Gh(b))};
S.l=function(a,b,c,d,e,f){b=Lg(b,Lg(c,Lg(d,Lg(e,qi(f)))));c=a.I;return a.J?(d=pi(b,c+1),d<=c?wi(a,d,b):a.J(b)):a.apply(a,Gh(b))};S.J=function(a){var b=H(a),c=J(a);a=H(c);var d=J(c),c=H(d),e=J(d),d=H(e),f=J(e),e=H(f),f=J(f);return S.l(b,a,c,d,e,f)};S.I=5;var xi=function xi(){switch(arguments.length){case 1:return xi.g(arguments[0]);case 2:return xi.a(arguments[0],arguments[1]);default:return xi.l(arguments[0],arguments[1],new F(Array.prototype.slice.call(arguments,2),0))}};xi.g=function(){return!1};
xi.a=function(a,b){return!qg.a(a,b)};xi.l=function(a,b,c){return xe(S.N(qg,a,b,c))};xi.J=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return xi.l(b,a,c)};xi.I=2;function yi(a){return E(a)?a:null}
var zi=function zi(){"undefined"===typeof ke&&(ke=function(b,c){this.zi=b;this.wi=c;this.B=393216;this.O=0},ke.prototype.V=function(b,c){return new ke(this.zi,c)},ke.prototype.U=function(){return this.wi},ke.prototype.mc=function(){return!1},ke.prototype.next=function(){return Error("No such element")},ke.prototype.remove=function(){return Error("Unsupported operation")},ke.ie=function(){return new T(null,2,5,U,[new C(null,"nil-iter","nil-iter",1101030523,null),new C(null,"meta30186","meta30186",
213792163,null)],null)},ke.bd=!0,ke.ad="cljs.core/t30185",ke.Cd=function(b,c){return Cf(c,"cljs.core/t30185")});return new ke(zi,X)};function Ai(a,b){this.aa=a;this.L=b}Ai.prototype.mc=function(){return this.L<this.aa.length};Ai.prototype.next=function(){var a=this.aa.charAt(this.L);this.L+=1;return a};Ai.prototype.remove=function(){return Error("Unsupported operation")};function Bi(a,b){this.v=a;this.L=b}Bi.prototype.mc=function(){return this.L<this.v.length};
Bi.prototype.next=function(){var a=this.v[this.L];this.L+=1;return a};Bi.prototype.remove=function(){return Error("Unsupported operation")};var Ci={},Di={};function Ei(a,b){this.Sd=a;this.Vc=b}Ei.prototype.mc=function(){this.Sd===Ci?(this.Sd=Di,this.Vc=E(this.Vc)):this.Sd===this.Vc&&(this.Vc=J(this.Sd));return null!=this.Vc};Ei.prototype.next=function(){if(xe(this.mc()))throw Error("No such element");this.Sd=this.Vc;return H(this.Vc)};Ei.prototype.remove=function(){return Error("Unsupported operation")};
function Fi(a){if(null==a)return zi();if("string"===typeof a)return new Ai(a,0);if(we(a))return new Bi(a,0);var b;b=a?u(u(null)?null:a.Ke)?!0:a.xc?!1:v(Xf,a):v(Xf,a);if(u(b))return Yf(a);if(a?a.B&8388608||a.Ph||(a.B?0:v(vf,a)):v(vf,a))return new Ei(Ci,a);throw Error([y("Cannot create iterator from "),y(a)].join(""));}function Gi(a,b){this.Qd=a;this.Qg=b}
Gi.prototype.step=function(a){for(var b=this;;){if(u(function(){var c=null!=a.Qb;return c?b.Qg.mc():c}()))if(Ag(function(){var c=b.Qg.next();return b.Qd.a?b.Qd.a(a,c):b.Qd.call(null,a,c)}()))null!=a.za&&(a.za.Qb=null);else continue;break}return null==a.Qb?null:b.Qd.g?b.Qd.g(a):b.Qd.call(null,a)};
function Hi(a,b){var c=function(){function a(b,c){b.first=c;b.za=new Ii(b.Qb,null,null,null);b.Qb=null;return b.za}function b(a){(Ag(a)?kf(a):a).Qb=null;return a}var c=null,c=function(c,f){switch(arguments.length){case 1:return b.call(this,c);case 2:return a.call(this,c,f)}throw Error("Invalid arity: "+arguments.length);};c.g=b;c.a=a;return c}();return new Gi(a.g?a.g(c):a.call(null,c),b)}function Ii(a,b,c,d){this.Qb=a;this.first=b;this.za=c;this.H=d;this.B=31719628;this.O=0}h=Ii.prototype;
h.V=function(a,b){return new Ii(this.Qb,this.first,this.za,b)};h.X=function(a,b){return Lg(b,wf(this))};h.pa=function(){return pg};h.M=function(a,b){return null!=wf(this)?Kg(this,b):ih(b)&&null==E(b)};h.T=function(){return ug(this)};h.Y=function(){null!=this.Qb&&this.Qb.step(this);return null==this.za?null:this};h.wa=function(){null!=this.Qb&&wf(this);return null==this.za?null:this.first};h.Ia=function(){null!=this.Qb&&wf(this);return null==this.za?pg:this.za};
h.$a=function(){null!=this.Qb&&wf(this);return null==this.za?null:wf(this.za)};Ii.prototype[Be]=function(){return sg(this)};function Ji(a,b){for(;;){if(null==E(b))return!0;var c;c=H(b);c=a.g?a.g(c):a.call(null,c);if(u(c)){c=a;var d=J(b);a=c;b=d}else return!1}}function Ki(a,b){for(;;)if(E(b)){var c;c=H(b);c=a.g?a.g(c):a.call(null,c);if(u(c))return c;c=a;var d=J(b);a=c;b=d}else return null}
function Li(a){return function(){function b(b,c){return xe(a.a?a.a(b,c):a.call(null,b,c))}function c(b){return xe(a.g?a.g(b):a.call(null,b))}function d(){return xe(a.C?a.C():a.call(null))}var e=null,f=function(){function b(a,d,e){var f=null;if(2<arguments.length){for(var f=0,g=Array(arguments.length-2);f<g.length;)g[f]=arguments[f+2],++f;f=new F(g,0)}return c.call(this,a,d,f)}function c(b,d,e){return xe(S.N(a,b,d,e))}b.I=2;b.J=function(a){var b=H(a);a=J(a);var d=H(a);a=og(a);return c(b,d,a)};b.l=
c;return b}(),e=function(a,e,l){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,a);case 2:return b.call(this,a,e);default:var m=null;if(2<arguments.length){for(var m=0,p=Array(arguments.length-2);m<p.length;)p[m]=arguments[m+2],++m;m=new F(p,0)}return f.l(a,e,m)}throw Error("Invalid arity: "+arguments.length);};e.I=2;e.J=f.J;e.C=d;e.g=c;e.a=b;e.l=f.l;return e}()}
function Mi(a){return function(){function b(b){if(0<arguments.length)for(var d=0,e=Array(arguments.length-0);d<e.length;)e[d]=arguments[d+0],++d;return a}b.I=0;b.J=function(b){E(b);return a};b.l=function(){return a};return b}()}
var Ni=function Ni(){switch(arguments.length){case 0:return Ni.C();case 1:return Ni.g(arguments[0]);case 2:return Ni.a(arguments[0],arguments[1]);case 3:return Ni.j(arguments[0],arguments[1],arguments[2]);default:return Ni.l(arguments[0],arguments[1],arguments[2],new F(Array.prototype.slice.call(arguments,3),0))}};Ni.C=function(){return Kh};Ni.g=function(a){return a};
Ni.a=function(a,b){return function(){function c(c,d,e){c=b.j?b.j(c,d,e):b.call(null,c,d,e);return a.g?a.g(c):a.call(null,c)}function d(c,d){var e=b.a?b.a(c,d):b.call(null,c,d);return a.g?a.g(e):a.call(null,e)}function e(c){c=b.g?b.g(c):b.call(null,c);return a.g?a.g(c):a.call(null,c)}function f(){var c=b.C?b.C():b.call(null);return a.g?a.g(c):a.call(null,c)}var g=null,k=function(){function c(a,b,e,f){var g=null;if(3<arguments.length){for(var g=0,k=Array(arguments.length-3);g<k.length;)k[g]=arguments[g+
3],++g;g=new F(k,0)}return d.call(this,a,b,e,g)}function d(c,e,f,g){c=S.W(b,c,e,f,g);return a.g?a.g(c):a.call(null,c)}c.I=3;c.J=function(a){var b=H(a);a=J(a);var c=H(a);a=J(a);var e=H(a);a=og(a);return d(b,c,e,a)};c.l=d;return c}(),g=function(a,b,g,q){switch(arguments.length){case 0:return f.call(this);case 1:return e.call(this,a);case 2:return d.call(this,a,b);case 3:return c.call(this,a,b,g);default:var r=null;if(3<arguments.length){for(var r=0,w=Array(arguments.length-3);r<w.length;)w[r]=arguments[r+
3],++r;r=new F(w,0)}return k.l(a,b,g,r)}throw Error("Invalid arity: "+arguments.length);};g.I=3;g.J=k.J;g.C=f;g.g=e;g.a=d;g.j=c;g.l=k.l;return g}()};
Ni.j=function(a,b,c){return function(){function d(d,e,f){d=c.j?c.j(d,e,f):c.call(null,d,e,f);d=b.g?b.g(d):b.call(null,d);return a.g?a.g(d):a.call(null,d)}function e(d,e){var f;f=c.a?c.a(d,e):c.call(null,d,e);f=b.g?b.g(f):b.call(null,f);return a.g?a.g(f):a.call(null,f)}function f(d){d=c.g?c.g(d):c.call(null,d);d=b.g?b.g(d):b.call(null,d);return a.g?a.g(d):a.call(null,d)}function g(){var d;d=c.C?c.C():c.call(null);d=b.g?b.g(d):b.call(null,d);return a.g?a.g(d):a.call(null,d)}var k=null,l=function(){function d(a,
b,c,f){var g=null;if(3<arguments.length){for(var g=0,k=Array(arguments.length-3);g<k.length;)k[g]=arguments[g+3],++g;g=new F(k,0)}return e.call(this,a,b,c,g)}function e(d,f,g,k){d=S.W(c,d,f,g,k);d=b.g?b.g(d):b.call(null,d);return a.g?a.g(d):a.call(null,d)}d.I=3;d.J=function(a){var b=H(a);a=J(a);var c=H(a);a=J(a);var d=H(a);a=og(a);return e(b,c,d,a)};d.l=e;return d}(),k=function(a,b,c,k){switch(arguments.length){case 0:return g.call(this);case 1:return f.call(this,a);case 2:return e.call(this,a,b);
case 3:return d.call(this,a,b,c);default:var w=null;if(3<arguments.length){for(var w=0,B=Array(arguments.length-3);w<B.length;)B[w]=arguments[w+3],++w;w=new F(B,0)}return l.l(a,b,c,w)}throw Error("Invalid arity: "+arguments.length);};k.I=3;k.J=l.J;k.C=g;k.g=f;k.a=e;k.j=d;k.l=l.l;return k}()};
Ni.l=function(a,b,c,d){return function(a){return function(){function b(a){var d=null;if(0<arguments.length){for(var d=0,e=Array(arguments.length-0);d<e.length;)e[d]=arguments[d+0],++d;d=new F(e,0)}return c.call(this,d)}function c(b){b=S.a(H(a),b);for(var d=J(a);;)if(d)b=H(d).call(null,b),d=J(d);else return b}b.I=0;b.J=function(a){a=E(a);return c(a)};b.l=c;return b}()}(Zh(Lg(a,Lg(b,Lg(c,d)))))};Ni.J=function(a){var b=H(a),c=J(a);a=H(c);var d=J(c),c=H(d),d=J(d);return Ni.l(b,a,c,d)};Ni.I=3;
var Oi=function Oi(){switch(arguments.length){case 1:return Oi.g(arguments[0]);case 2:return Oi.a(arguments[0],arguments[1]);case 3:return Oi.j(arguments[0],arguments[1],arguments[2]);case 4:return Oi.N(arguments[0],arguments[1],arguments[2],arguments[3]);default:return Oi.l(arguments[0],arguments[1],arguments[2],arguments[3],new F(Array.prototype.slice.call(arguments,4),0))}};Oi.g=function(a){return a};
Oi.a=function(a,b){return function(){function c(c,d,e){return a.N?a.N(b,c,d,e):a.call(null,b,c,d,e)}function d(c,d){return a.j?a.j(b,c,d):a.call(null,b,c,d)}function e(c){return a.a?a.a(b,c):a.call(null,b,c)}function f(){return a.g?a.g(b):a.call(null,b)}var g=null,k=function(){function c(a,b,e,f){var g=null;if(3<arguments.length){for(var g=0,k=Array(arguments.length-3);g<k.length;)k[g]=arguments[g+3],++g;g=new F(k,0)}return d.call(this,a,b,e,g)}function d(c,e,f,g){return S.l(a,b,c,e,f,L([g],0))}c.I=
3;c.J=function(a){var b=H(a);a=J(a);var c=H(a);a=J(a);var e=H(a);a=og(a);return d(b,c,e,a)};c.l=d;return c}(),g=function(a,b,g,q){switch(arguments.length){case 0:return f.call(this);case 1:return e.call(this,a);case 2:return d.call(this,a,b);case 3:return c.call(this,a,b,g);default:var r=null;if(3<arguments.length){for(var r=0,w=Array(arguments.length-3);r<w.length;)w[r]=arguments[r+3],++r;r=new F(w,0)}return k.l(a,b,g,r)}throw Error("Invalid arity: "+arguments.length);};g.I=3;g.J=k.J;g.C=f;g.g=e;
g.a=d;g.j=c;g.l=k.l;return g}()};
Oi.j=function(a,b,c){return function(){function d(d,e,f){return a.W?a.W(b,c,d,e,f):a.call(null,b,c,d,e,f)}function e(d,e){return a.N?a.N(b,c,d,e):a.call(null,b,c,d,e)}function f(d){return a.j?a.j(b,c,d):a.call(null,b,c,d)}function g(){return a.a?a.a(b,c):a.call(null,b,c)}var k=null,l=function(){function d(a,b,c,f){var g=null;if(3<arguments.length){for(var g=0,k=Array(arguments.length-3);g<k.length;)k[g]=arguments[g+3],++g;g=new F(k,0)}return e.call(this,a,b,c,g)}function e(d,f,g,k){return S.l(a,b,
c,d,f,L([g,k],0))}d.I=3;d.J=function(a){var b=H(a);a=J(a);var c=H(a);a=J(a);var d=H(a);a=og(a);return e(b,c,d,a)};d.l=e;return d}(),k=function(a,b,c,k){switch(arguments.length){case 0:return g.call(this);case 1:return f.call(this,a);case 2:return e.call(this,a,b);case 3:return d.call(this,a,b,c);default:var w=null;if(3<arguments.length){for(var w=0,B=Array(arguments.length-3);w<B.length;)B[w]=arguments[w+3],++w;w=new F(B,0)}return l.l(a,b,c,w)}throw Error("Invalid arity: "+arguments.length);};k.I=
3;k.J=l.J;k.C=g;k.g=f;k.a=e;k.j=d;k.l=l.l;return k}()};
Oi.N=function(a,b,c,d){return function(){function e(e,f,g){return a.ga?a.ga(b,c,d,e,f,g):a.call(null,b,c,d,e,f,g)}function f(e,f){return a.W?a.W(b,c,d,e,f):a.call(null,b,c,d,e,f)}function g(e){return a.N?a.N(b,c,d,e):a.call(null,b,c,d,e)}function k(){return a.j?a.j(b,c,d):a.call(null,b,c,d)}var l=null,m=function(){function e(a,b,c,d){var g=null;if(3<arguments.length){for(var g=0,k=Array(arguments.length-3);g<k.length;)k[g]=arguments[g+3],++g;g=new F(k,0)}return f.call(this,a,b,c,g)}function f(e,g,
k,l){return S.l(a,b,c,d,e,L([g,k,l],0))}e.I=3;e.J=function(a){var b=H(a);a=J(a);var c=H(a);a=J(a);var d=H(a);a=og(a);return f(b,c,d,a)};e.l=f;return e}(),l=function(a,b,c,d){switch(arguments.length){case 0:return k.call(this);case 1:return g.call(this,a);case 2:return f.call(this,a,b);case 3:return e.call(this,a,b,c);default:var l=null;if(3<arguments.length){for(var l=0,I=Array(arguments.length-3);l<I.length;)I[l]=arguments[l+3],++l;l=new F(I,0)}return m.l(a,b,c,l)}throw Error("Invalid arity: "+arguments.length);
};l.I=3;l.J=m.J;l.C=k;l.g=g;l.a=f;l.j=e;l.l=m.l;return l}()};Oi.l=function(a,b,c,d,e){return function(){function f(a){var b=null;if(0<arguments.length){for(var b=0,c=Array(arguments.length-0);b<c.length;)c[b]=arguments[b+0],++b;b=new F(c,0)}return g.call(this,b)}function g(f){return S.W(a,b,c,d,ri.a(e,f))}f.I=0;f.J=function(a){a=E(a);return g(a)};f.l=g;return f}()};Oi.J=function(a){var b=H(a),c=J(a);a=H(c);var d=J(c),c=H(d),e=J(d),d=H(e),e=J(e);return Oi.l(b,a,c,d,e)};Oi.I=4;
var Pi=function Pi(){switch(arguments.length){case 1:return Pi.g(arguments[0]);case 2:return Pi.a(arguments[0],arguments[1]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}};
Pi.g=function(a){return function(b){return function(){function c(c,d){var e=a.g?a.g(d):a.call(null,d);return null==e?c:b.a?b.a(c,e):b.call(null,c,e)}function d(a){return b.g?b.g(a):b.call(null,a)}function e(){return b.C?b.C():b.call(null)}var f=null,f=function(a,b){switch(arguments.length){case 0:return e.call(this);case 1:return d.call(this,a);case 2:return c.call(this,a,b)}throw Error("Invalid arity: "+arguments.length);};f.C=e;f.g=d;f.a=c;return f}()}};
Pi.a=function(a,b){return new fi(null,function(){var c=E(b);if(c){if(mh(c)){for(var d=Pf(c),e=M(d),f=ji(e),g=0;;)if(g<e){var k=function(){var b=A.a(d,g);return a.g?a.g(b):a.call(null,b)}();null!=k&&f.add(k);g+=1}else break;return li(ni(f),Pi.a(a,Qf(c)))}e=function(){var b=H(c);return a.g?a.g(b):a.call(null,b)}();return null==e?Pi.a(a,og(c)):Lg(e,Pi.a(a,og(c)))}return null},null,null)};Pi.I=2;function Qi(a,b,c,d){this.state=a;this.H=b;this.Ui=c;this.rh=d;this.O=16386;this.B=6455296}h=Qi.prototype;
h.equiv=function(a){return this.M(null,a)};h.M=function(a,b){return this===b};h.vd=function(){return this.state};h.U=function(){return this.H};h.sg=function(a,b,c){for(var d=E(this.rh),e=null,f=0,g=0;;)if(g<f){a=e.ba(null,g);var k=N(a,0);a=N(a,1);var l=b,m=c;a.N?a.N(k,this,l,m):a.call(null,k,this,l,m);g+=1}else if(a=E(d))d=a,mh(d)?(e=Pf(d),d=Qf(d),a=e,f=M(e),e=a):(a=H(d),k=N(a,0),a=N(a,1),e=k,f=b,g=c,a.N?a.N(e,this,f,g):a.call(null,e,this,f,g),d=J(d),e=null,f=0),g=0;else return null};h.T=function(){return ia(this)};
function Ri(){switch(arguments.length){case 1:return Si(arguments[0]);default:var a=arguments[0],b=new F(Array.prototype.slice.call(arguments,1),0),c=rh(b)?S.a(Ti,b):b,b=Q(c,se),c=Q(c,Ui);return new Qi(a,b,c,null)}}function Si(a){return new Qi(a,null,null,null)}
function Vi(a,b){if(a instanceof Qi){var c=a.Ui;if(null!=c&&!u(c.g?c.g(b):c.call(null,b)))throw Error([y("Assert failed: "),y("Validator rejected reference state"),y("\n"),y(function(){var a=$h(new C(null,"validate","validate",1439230700,null),new C(null,"new-value","new-value",-1567397401,null));return Wi.g?Wi.g(a):Wi.call(null,a)}())].join(""));c=a.state;a.state=b;null!=a.rh&&Gf(a,c,b);return b}return Uf(a,b)}
var Xi=function Xi(){switch(arguments.length){case 2:return Xi.a(arguments[0],arguments[1]);case 3:return Xi.j(arguments[0],arguments[1],arguments[2]);case 4:return Xi.N(arguments[0],arguments[1],arguments[2],arguments[3]);default:return Xi.l(arguments[0],arguments[1],arguments[2],arguments[3],new F(Array.prototype.slice.call(arguments,4),0))}};Xi.a=function(a,b){var c;a instanceof Qi?(c=a.state,c=b.g?b.g(c):b.call(null,c),c=Vi(a,c)):c=Vf.a(a,b);return c};
Xi.j=function(a,b,c){if(a instanceof Qi){var d=a.state;b=b.a?b.a(d,c):b.call(null,d,c);a=Vi(a,b)}else a=Vf.j(a,b,c);return a};Xi.N=function(a,b,c,d){if(a instanceof Qi){var e=a.state;b=b.j?b.j(e,c,d):b.call(null,e,c,d);a=Vi(a,b)}else a=Vf.N(a,b,c,d);return a};Xi.l=function(a,b,c,d,e){return a instanceof Qi?Vi(a,S.W(b,a.state,c,d,e)):Vf.W(a,b,c,d,e)};Xi.J=function(a){var b=H(a),c=J(a);a=H(c);var d=J(c),c=H(d),e=J(d),d=H(e),e=J(e);return Xi.l(b,a,c,d,e)};Xi.I=4;
function Yi(a){this.state=a;this.B=32768;this.O=0}Yi.prototype.rg=function(a,b){return this.state=b};Yi.prototype.vd=function(){return this.state};
var Y=function Y(){switch(arguments.length){case 1:return Y.g(arguments[0]);case 2:return Y.a(arguments[0],arguments[1]);case 3:return Y.j(arguments[0],arguments[1],arguments[2]);case 4:return Y.N(arguments[0],arguments[1],arguments[2],arguments[3]);default:return Y.l(arguments[0],arguments[1],arguments[2],arguments[3],new F(Array.prototype.slice.call(arguments,4),0))}};
Y.g=function(a){return function(b){return function(){function c(c,d){var e=a.g?a.g(d):a.call(null,d);return b.a?b.a(c,e):b.call(null,c,e)}function d(a){return b.g?b.g(a):b.call(null,a)}function e(){return b.C?b.C():b.call(null)}var f=null,g=function(){function c(a,b,e){var f=null;if(2<arguments.length){for(var f=0,g=Array(arguments.length-2);f<g.length;)g[f]=arguments[f+2],++f;f=new F(g,0)}return d.call(this,a,b,f)}function d(c,e,f){e=S.j(a,e,f);return b.a?b.a(c,e):b.call(null,c,e)}c.I=2;c.J=function(a){var b=
H(a);a=J(a);var c=H(a);a=og(a);return d(b,c,a)};c.l=d;return c}(),f=function(a,b,f){switch(arguments.length){case 0:return e.call(this);case 1:return d.call(this,a);case 2:return c.call(this,a,b);default:var p=null;if(2<arguments.length){for(var p=0,q=Array(arguments.length-2);p<q.length;)q[p]=arguments[p+2],++p;p=new F(q,0)}return g.l(a,b,p)}throw Error("Invalid arity: "+arguments.length);};f.I=2;f.J=g.J;f.C=e;f.g=d;f.a=c;f.l=g.l;return f}()}};
Y.a=function(a,b){return new fi(null,function(){var c=E(b);if(c){if(mh(c)){for(var d=Pf(c),e=M(d),f=ji(e),g=0;;)if(g<e)mi(f,function(){var b=A.a(d,g);return a.g?a.g(b):a.call(null,b)}()),g+=1;else break;return li(ni(f),Y.a(a,Qf(c)))}return Lg(function(){var b=H(c);return a.g?a.g(b):a.call(null,b)}(),Y.a(a,og(c)))}return null},null,null)};
Y.j=function(a,b,c){return new fi(null,function(){var d=E(b),e=E(c);if(d&&e){var f=Lg,g;g=H(d);var k=H(e);g=a.a?a.a(g,k):a.call(null,g,k);d=f(g,Y.j(a,og(d),og(e)))}else d=null;return d},null,null)};Y.N=function(a,b,c,d){return new fi(null,function(){var e=E(b),f=E(c),g=E(d);if(e&&f&&g){var k=Lg,l;l=H(e);var m=H(f),p=H(g);l=a.j?a.j(l,m,p):a.call(null,l,m,p);e=k(l,Y.N(a,og(e),og(f),og(g)))}else e=null;return e},null,null)};
Y.l=function(a,b,c,d,e){var f=function k(a){return new fi(null,function(){var b=Y.a(E,a);return Ji(Kh,b)?Lg(Y.a(H,b),k(Y.a(og,b))):null},null,null)};return Y.a(function(){return function(b){return S.a(a,b)}}(f),f(Tg.l(e,d,L([c,b],0))))};Y.J=function(a){var b=H(a),c=J(a);a=H(c);var d=J(c),c=H(d),e=J(d),d=H(e),e=J(e);return Y.l(b,a,c,d,e)};Y.I=4;
function Zi(a){return function(b){return function(a){return function(){function d(d,e){var f=kf(a),g=Wf(a,kf(a)-1),f=0<f?b.a?b.a(d,e):b.call(null,d,e):d;return 0<g?f:Ag(f)?f:new zg(f)}function e(a){return b.g?b.g(a):b.call(null,a)}function f(){return b.C?b.C():b.call(null)}var g=null,g=function(a,b){switch(arguments.length){case 0:return f.call(this);case 1:return e.call(this,a);case 2:return d.call(this,a,b)}throw Error("Invalid arity: "+arguments.length);};g.C=f;g.g=e;g.a=d;return g}()}(new Yi(a))}}
function $i(a,b){return new fi(null,function(){if(0<a){var c=E(b);return c?Lg(H(c),$i(a-1,og(c))):null}return null},null,null)}function aj(a,b){return new fi(null,function(c){return function(){return c(a,b)}}(function(a,b){for(;;){var e=E(b);if(0<a&&e){var f=a-1,e=og(e);a=f;b=e}else return e}}),null,null)}
function bj(a,b){return new fi(null,function(c){return function(){return c(a,b)}}(function(a,b){for(;;){var e=E(b),f;if(f=e)f=H(e),f=a.g?a.g(f):a.call(null,f);if(u(f))f=a,e=og(e),a=f,b=e;else return e}}),null,null)}function cj(a){return new fi(null,function(){return Lg(a,cj(a))},null,null)}var dj=function dj(){switch(arguments.length){case 1:return dj.g(arguments[0]);case 2:return dj.a(arguments[0],arguments[1]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}};
dj.g=function(a){return function(b){return function(){function c(c,d){return u(a.g?a.g(d):a.call(null,d))?b.a?b.a(c,d):b.call(null,c,d):c}function d(a){return b.g?b.g(a):b.call(null,a)}function e(){return b.C?b.C():b.call(null)}var f=null,f=function(a,b){switch(arguments.length){case 0:return e.call(this);case 1:return d.call(this,a);case 2:return c.call(this,a,b)}throw Error("Invalid arity: "+arguments.length);};f.C=e;f.g=d;f.a=c;return f}()}};
dj.a=function(a,b){return new fi(null,function(){var c=E(b);if(c){if(mh(c)){for(var d=Pf(c),e=M(d),f=ji(e),g=0;;)if(g<e){var k;k=A.a(d,g);k=a.g?a.g(k):a.call(null,k);u(k)&&(k=A.a(d,g),f.add(k));g+=1}else break;return li(ni(f),dj.a(a,Qf(c)))}d=H(c);c=og(c);return u(a.g?a.g(d):a.call(null,d))?Lg(d,dj.a(a,c)):dj.a(a,c)}return null},null,null)};dj.I=2;
var ej=function ej(){switch(arguments.length){case 1:return ej.g(arguments[0]);case 2:return ej.a(arguments[0],arguments[1]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}};ej.g=function(a){return dj.g(Li(a))};ej.a=function(a,b){return dj.a(Li(a),b)};ej.I=2;function fj(a){return function c(a){return new fi(null,function(){var e;u(ih.g?ih.g(a):ih.call(null,a))?(e=L([E.g?E.g(a):E.call(null,a)],0),e=S.a(ri,S.j(Y,c,e))):e=null;return Lg(a,e)},null,null)}(a)}
function gj(a){return dj.a(function(a){return!ih(a)},og(fj(a)))}var hj=function hj(){switch(arguments.length){case 2:return hj.a(arguments[0],arguments[1]);case 3:return hj.j(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}};hj.a=function(a,b){return null!=a?a&&(a.O&4||a.Eh)?Ng(ti(Ee(If,Hf(a),b)),ch(a)):Ee(z,a,b):Ee(Tg,pg,b)};hj.j=function(a,b,c){return a&&(a.O&4||a.Eh)?Ng(ti(Lh(b,ui,Hf(a),c)),ch(a)):Lh(b,Tg,a,c)};hj.I=3;
var jj=function jj(){switch(arguments.length){case 2:return jj.a(arguments[0],arguments[1]);case 3:return jj.j(arguments[0],arguments[1],arguments[2]);case 4:return jj.N(arguments[0],arguments[1],arguments[2],arguments[3]);default:return jj.l(arguments[0],arguments[1],arguments[2],arguments[3],new F(Array.prototype.slice.call(arguments,4),0))}};jj.a=function(a,b){return ti(Ee(function(b,d){return ui.a(b,a.g?a.g(d):a.call(null,d))},Hf(Ug),b))};jj.j=function(a,b,c){return hj.a(Ug,Y.j(a,b,c))};
jj.N=function(a,b,c,d){return hj.a(Ug,Y.N(a,b,c,d))};jj.l=function(a,b,c,d,e){return hj.a(Ug,S.l(Y,a,b,c,d,L([e],0)))};jj.J=function(a){var b=H(a),c=J(a);a=H(c);var d=J(c),c=H(d),e=J(d),d=H(e),e=J(e);return jj.l(b,a,c,d,e)};jj.I=4;function kj(a,b,c){return new fi(null,function(){var d=E(c);if(d){var e=$i(a,d);return a===M(e)?Lg(e,kj(a,b,aj(b,d))):null}return null},null,null)}
var lj=function lj(){switch(arguments.length){case 3:return lj.j(arguments[0],arguments[1],arguments[2]);case 4:return lj.N(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return lj.W(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);case 6:return lj.ga(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);default:return lj.l(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],new F(Array.prototype.slice.call(arguments,
6),0))}};lj.j=function(a,b,c){var d=N(b,0);b=Sh(b,1);return u(b)?R.j(a,d,lj.j(Q(a,d),b,c)):R.j(a,d,function(){var b=Q(a,d);return c.g?c.g(b):c.call(null,b)}())};lj.N=function(a,b,c,d){var e=N(b,0);b=Sh(b,1);return u(b)?R.j(a,e,lj.N(Q(a,e),b,c,d)):R.j(a,e,function(){var b=Q(a,e);return c.a?c.a(b,d):c.call(null,b,d)}())};lj.W=function(a,b,c,d,e){var f=N(b,0);b=Sh(b,1);return u(b)?R.j(a,f,lj.W(Q(a,f),b,c,d,e)):R.j(a,f,function(){var b=Q(a,f);return c.j?c.j(b,d,e):c.call(null,b,d,e)}())};
lj.ga=function(a,b,c,d,e,f){var g=N(b,0);b=Sh(b,1);return u(b)?R.j(a,g,lj.ga(Q(a,g),b,c,d,e,f)):R.j(a,g,function(){var b=Q(a,g);return c.N?c.N(b,d,e,f):c.call(null,b,d,e,f)}())};lj.l=function(a,b,c,d,e,f,g){var k=N(b,0);b=Sh(b,1);return u(b)?R.j(a,k,S.l(lj,Q(a,k),b,c,d,L([e,f,g],0))):R.j(a,k,S.l(c,Q(a,k),d,e,f,L([g],0)))};lj.J=function(a){var b=H(a),c=J(a);a=H(c);var d=J(c),c=H(d),e=J(d),d=H(e),f=J(e),e=H(f),g=J(f),f=H(g),g=J(g);return lj.l(b,a,c,d,e,f,g)};lj.I=6;
var mj=function mj(){switch(arguments.length){case 3:return mj.j(arguments[0],arguments[1],arguments[2]);case 4:return mj.N(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return mj.W(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);case 6:return mj.ga(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);default:return mj.l(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],new F(Array.prototype.slice.call(arguments,
6),0))}};mj.j=function(a,b,c){return R.j(a,b,function(){var d=Q(a,b);return c.g?c.g(d):c.call(null,d)}())};mj.N=function(a,b,c,d){return R.j(a,b,function(){var e=Q(a,b);return c.a?c.a(e,d):c.call(null,e,d)}())};mj.W=function(a,b,c,d,e){return R.j(a,b,function(){var f=Q(a,b);return c.j?c.j(f,d,e):c.call(null,f,d,e)}())};mj.ga=function(a,b,c,d,e,f){return R.j(a,b,function(){var g=Q(a,b);return c.N?c.N(g,d,e,f):c.call(null,g,d,e,f)}())};
mj.l=function(a,b,c,d,e,f,g){return R.j(a,b,S.l(c,Q(a,b),d,e,f,L([g],0)))};mj.J=function(a){var b=H(a),c=J(a);a=H(c);var d=J(c),c=H(d),e=J(d),d=H(e),f=J(e),e=H(f),g=J(f),f=H(g),g=J(g);return mj.l(b,a,c,d,e,f,g)};mj.I=6;function nj(a,b){this.na=a;this.v=b}function oj(a){return new nj(a,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null])}function pj(a){return new nj(a.na,Ce(a.v))}
function qj(a){a=a.G;return 32>a?0:a-1>>>5<<5}function rj(a,b,c){for(;;){if(0===b)return c;var d=oj(a);d.v[0]=c;c=d;b-=5}}var tj=function tj(b,c,d,e){var f=pj(d),g=b.G-1>>>c&31;5===c?f.v[g]=e:(d=d.v[g],b=null!=d?tj(b,c-5,d,e):rj(null,c-5,e),f.v[g]=b);return f};function uj(a,b){throw Error([y("No item "),y(a),y(" in vector of length "),y(b)].join(""));}function vj(a,b){if(b>=qj(a))return a.ea;for(var c=a.root,d=a.shift;;)if(0<d)var e=d-5,c=c.v[b>>>d&31],d=e;else return c.v}
function wj(a,b){return 0<=b&&b<a.G?vj(a,b):uj(b,a.G)}var xj=function xj(b,c,d,e,f){var g=pj(d);if(0===c)g.v[e&31]=f;else{var k=e>>>c&31;b=xj(b,c-5,d.v[k],e,f);g.v[k]=b}return g},yj=function yj(b,c,d){var e=b.G-2>>>c&31;if(5<c){b=yj(b,c-5,d.v[e]);if(null==b&&0===e)return null;d=pj(d);d.v[e]=b;return d}if(0===e)return null;d=pj(d);d.v[e]=null;return d};function zj(a,b,c,d,e,f){this.L=a;this.Ee=b;this.v=c;this.xa=d;this.start=e;this.end=f}zj.prototype.mc=function(){return this.L<this.end};
zj.prototype.next=function(){32===this.L-this.Ee&&(this.v=vj(this.xa,this.L),this.Ee+=32);var a=this.v[this.L&31];this.L+=1;return a};function T(a,b,c,d,e,f){this.H=a;this.G=b;this.shift=c;this.root=d;this.ea=e;this.w=f;this.B=167668511;this.O=8196}h=T.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){return"number"===typeof b?A.j(this,b,c):c};
h.xd=function(a,b,c){a=0;for(var d=c;;)if(a<this.G){var e=vj(this,a);c=e.length;a:for(var f=0;;)if(f<c){var g=f+a,k=e[f],d=b.j?b.j(d,g,k):b.call(null,d,g,k);if(Ag(d)){e=d;break a}f+=1}else{e=d;break a}if(Ag(e))return b=e,K.g?K.g(b):K.call(null,b);a+=c;d=e}else return d};h.ba=function(a,b){return wj(this,b)[b&31]};h.ib=function(a,b,c){return 0<=b&&b<this.G?vj(this,b)[b&31]:c};
h.$c=function(a,b,c){if(0<=b&&b<this.G)return qj(this)<=b?(a=Ce(this.ea),a[b&31]=c,new T(this.H,this.G,this.shift,this.root,a,null)):new T(this.H,this.G,this.shift,xj(this,this.shift,this.root,b,c),this.ea,null);if(b===this.G)return z(this,c);throw Error([y("Index "),y(b),y(" out of bounds  [0,"),y(this.G),y("]")].join(""));};h.Ke=!0;h.Vd=function(){var a=this.G;return new zj(0,0,0<M(this)?vj(this,0):null,this,0,a)};h.U=function(){return this.H};
h.da=function(){return new T(this.H,this.G,this.shift,this.root,this.ea,this.w)};h.Z=function(){return this.G};h.Wd=function(){return A.a(this,0)};h.Xd=function(){return A.a(this,1)};h.Lc=function(){return 0<this.G?A.a(this,this.G-1):null};
h.Mc=function(){if(0===this.G)throw Error("Can't pop empty vector");if(1===this.G)return pf(Ug,this.H);if(1<this.G-qj(this))return new T(this.H,this.G-1,this.shift,this.root,this.ea.slice(0,-1),null);var a=vj(this,this.G-2),b=yj(this,this.shift,this.root),b=null==b?U:b,c=this.G-1;return 5<this.shift&&null==b.v[1]?new T(this.H,c,this.shift-5,b.v[0],a,null):new T(this.H,c,this.shift,b,a,null)};h.yd=function(){return 0<this.G?new Jg(this,this.G-1,null):null};
h.T=function(){var a=this.w;return null!=a?a:this.w=a=ug(this)};h.M=function(a,b){if(b instanceof T)if(this.G===M(b))for(var c=Yf(this),d=Yf(b);;)if(u(c.mc())){var e=c.next(),f=d.next();if(!qg.a(e,f))return!1}else return!0;else return!1;else return Kg(this,b)};h.wd=function(){var a=this;return new Aj(a.G,a.shift,function(){var b=a.root;return Bj.g?Bj.g(b):Bj.call(null,b)}(),function(){var b=a.ea;return Cj.g?Cj.g(b):Cj.call(null,b)}())};h.pa=function(){return Ng(Ug,this.H)};
h.Aa=function(a,b){return Bg(this,b)};h.Ba=function(a,b,c){a=0;for(var d=c;;)if(a<this.G){var e=vj(this,a);c=e.length;a:for(var f=0;;)if(f<c){var g=e[f],d=b.a?b.a(d,g):b.call(null,d,g);if(Ag(d)){e=d;break a}f+=1}else{e=d;break a}if(Ag(e))return b=e,K.g?K.g(b):K.call(null,b);a+=c;d=e}else return d};h.ra=function(a,b,c){if("number"===typeof b)return hf(this,b,c);throw Error("Vector's key for assoc must be a number.");};
h.Y=function(){if(0===this.G)return null;if(32>=this.G)return new F(this.ea,0);var a;a:{a=this.root;for(var b=this.shift;;)if(0<b)b-=5,a=a.v[0];else{a=a.v;break a}}return Dj?Dj(this,a,0,0):Ej.call(null,this,a,0,0)};h.V=function(a,b){return new T(b,this.G,this.shift,this.root,this.ea,this.w)};
h.X=function(a,b){if(32>this.G-qj(this)){for(var c=this.ea.length,d=Array(c+1),e=0;;)if(e<c)d[e]=this.ea[e],e+=1;else break;d[c]=b;return new T(this.H,this.G+1,this.shift,this.root,d,null)}c=(d=this.G>>>5>1<<this.shift)?this.shift+5:this.shift;d?(d=oj(null),d.v[0]=this.root,e=rj(null,this.shift,new nj(null,this.ea)),d.v[1]=e):d=tj(this,this.shift,this.root,new nj(null,this.ea));return new T(this.H,this.G+1,c,d,[b],null)};
h.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.ba(null,c);case 3:return this.ib(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.ba(null,c)};a.j=function(a,c,d){return this.ib(null,c,d)};return a}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ce(b)))};h.g=function(a){return this.ba(null,a)};h.a=function(a,b){return this.ib(null,a,b)};
var U=new nj(null,[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null]),Ug=new T(null,0,5,U,[],vg);function Fj(a,b){var c=a.length,d=b?a:Ce(a);if(32>c)return new T(null,c,5,U,d,null);for(var e=32,f=(new T(null,32,5,U,d.slice(0,32),null)).wd(null);;)if(e<c)var g=e+1,f=ui.a(f,d[e]),e=g;else return Jf(f)}T.prototype[Be]=function(){return sg(this)};
function Gj(a){return we(a)?Fj(a,!0):Jf(Ee(If,Hf(Ug),a))}var Hj=function Hj(){return Hj.l(0<arguments.length?new F(Array.prototype.slice.call(arguments,0),0):null)};Hj.l=function(a){return a instanceof F&&0===a.L?Fj(a.v,!0):Gj(a)};Hj.I=0;Hj.J=function(a){return Hj.l(E(a))};function Ij(a,b,c,d,e,f){this.Fb=a;this.node=b;this.L=c;this.Xa=d;this.H=e;this.w=f;this.B=32375020;this.O=1536}h=Ij.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};h.U=function(){return this.H};
h.$a=function(){if(this.Xa+1<this.node.length){var a;a=this.Fb;var b=this.node,c=this.L,d=this.Xa+1;a=Dj?Dj(a,b,c,d):Ej.call(null,a,b,c,d);return null==a?null:a}return Rf(this)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=ug(this)};h.M=function(a,b){return Kg(this,b)};h.pa=function(){return Ng(Ug,this.H)};h.Aa=function(a,b){var c;c=this.Fb;var d=this.L+this.Xa,e=M(this.Fb);c=Jj?Jj(c,d,e):Kj.call(null,c,d,e);return Bg(c,b)};
h.Ba=function(a,b,c){a=this.Fb;var d=this.L+this.Xa,e=M(this.Fb);a=Jj?Jj(a,d,e):Kj.call(null,a,d,e);return Cg(a,b,c)};h.wa=function(){return this.node[this.Xa]};h.Ia=function(){if(this.Xa+1<this.node.length){var a;a=this.Fb;var b=this.node,c=this.L,d=this.Xa+1;a=Dj?Dj(a,b,c,d):Ej.call(null,a,b,c,d);return null==a?pg:a}return Qf(this)};h.Y=function(){return this};h.yf=function(){var a=this.node;return new ii(a,this.Xa,a.length)};
h.zf=function(){var a=this.L+this.node.length;if(a<Ke(this.Fb)){var b=this.Fb,c=vj(this.Fb,a);return Dj?Dj(b,c,a,0):Ej.call(null,b,c,a,0)}return pg};h.V=function(a,b){var c=this.Fb,d=this.node,e=this.L,f=this.Xa;return Lj?Lj(c,d,e,f,b):Ej.call(null,c,d,e,f,b)};h.X=function(a,b){return Lg(b,this)};h.xf=function(){var a=this.L+this.node.length;if(a<Ke(this.Fb)){var b=this.Fb,c=vj(this.Fb,a);return Dj?Dj(b,c,a,0):Ej.call(null,b,c,a,0)}return null};Ij.prototype[Be]=function(){return sg(this)};
function Ej(){switch(arguments.length){case 3:var a=arguments[0],b=arguments[1],c=arguments[2];return new Ij(a,wj(a,b),b,c,null,null);case 4:return Dj(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return Lj(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}}function Dj(a,b,c,d){return new Ij(a,b,c,d,null,null)}function Lj(a,b,c,d,e){return new Ij(a,b,c,d,e,null)}
function Mj(a,b,c,d,e){this.H=a;this.xa=b;this.start=c;this.end=d;this.w=e;this.B=167666463;this.O=8192}h=Mj.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){return"number"===typeof b?A.j(this,b,c):c};h.xd=function(a,b,c){a=this.start;for(var d=0;;)if(a<this.end){var e=d,f=A.a(this.xa,a);c=b.j?b.j(c,e,f):b.call(null,c,e,f);if(Ag(c))return b=c,K.g?K.g(b):K.call(null,b);d+=1;a+=1}else return c};
h.ba=function(a,b){return 0>b||this.end<=this.start+b?uj(b,this.end-this.start):A.a(this.xa,this.start+b)};h.ib=function(a,b,c){return 0>b||this.end<=this.start+b?c:A.j(this.xa,this.start+b,c)};h.$c=function(a,b,c){var d=this.start+b;a=this.H;c=R.j(this.xa,d,c);b=this.start;var e=this.end,d=d+1,d=e>d?e:d;return Nj.W?Nj.W(a,c,b,d,null):Nj.call(null,a,c,b,d,null)};h.U=function(){return this.H};h.da=function(){return new Mj(this.H,this.xa,this.start,this.end,this.w)};h.Z=function(){return this.end-this.start};
h.Lc=function(){return A.a(this.xa,this.end-1)};h.Mc=function(){if(this.start===this.end)throw Error("Can't pop empty vector");var a=this.H,b=this.xa,c=this.start,d=this.end-1;return Nj.W?Nj.W(a,b,c,d,null):Nj.call(null,a,b,c,d,null)};h.yd=function(){return this.start!==this.end?new Jg(this,this.end-this.start-1,null):null};h.T=function(){var a=this.w;return null!=a?a:this.w=a=ug(this)};h.M=function(a,b){return Kg(this,b)};h.pa=function(){return Ng(Ug,this.H)};h.Aa=function(a,b){return Bg(this,b)};
h.Ba=function(a,b,c){return Cg(this,b,c)};h.ra=function(a,b,c){if("number"===typeof b)return hf(this,b,c);throw Error("Subvec's key for assoc must be a number.");};h.Y=function(){var a=this;return function(b){return function d(e){return e===a.end?null:Lg(A.a(a.xa,e),new fi(null,function(){return function(){return d(e+1)}}(b),null,null))}}(this)(a.start)};h.V=function(a,b){var c=this.xa,d=this.start,e=this.end,f=this.w;return Nj.W?Nj.W(b,c,d,e,f):Nj.call(null,b,c,d,e,f)};
h.X=function(a,b){var c=this.H,d=hf(this.xa,this.end,b),e=this.start,f=this.end+1;return Nj.W?Nj.W(c,d,e,f,null):Nj.call(null,c,d,e,f,null)};h.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.ba(null,c);case 3:return this.ib(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.ba(null,c)};a.j=function(a,c,d){return this.ib(null,c,d)};return a}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ce(b)))};
h.g=function(a){return this.ba(null,a)};h.a=function(a,b){return this.ib(null,a,b)};Mj.prototype[Be]=function(){return sg(this)};function Nj(a,b,c,d,e){for(;;)if(b instanceof Mj)c=b.start+c,d=b.start+d,b=b.xa;else{var f=M(b);if(0>c||0>d||c>f||d>f)throw Error("Index out of bounds");return new Mj(a,b,c,d,e)}}
function Kj(){switch(arguments.length){case 2:var a=arguments[0];return Jj(a,arguments[1],M(a));case 3:return Jj(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}}function Jj(a,b,c){return Nj(null,a,b,c,null)}function Oj(a,b){return a===b.na?b:new nj(a,Ce(b.v))}function Bj(a){return new nj({},Ce(a.v))}
function Cj(a){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];oh(a,0,b,0,a.length);return b}var Pj=function Pj(b,c,d,e){d=Oj(b.root.na,d);var f=b.G-1>>>c&31;if(5===c)b=e;else{var g=d.v[f];b=null!=g?Pj(b,c-5,g,e):rj(b.root.na,c-5,e)}d.v[f]=b;return d};function Aj(a,b,c,d){this.G=a;this.shift=b;this.root=c;this.ea=d;this.O=88;this.B=275}h=Aj.prototype;
h.Zc=function(a,b){if(this.root.na){if(32>this.G-qj(this))this.ea[this.G&31]=b;else{var c=new nj(this.root.na,this.ea),d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];d[0]=b;this.ea=d;if(this.G>>>5>1<<this.shift){var d=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null],e=this.shift+
5;d[0]=this.root;d[1]=rj(this.root.na,this.shift,c);this.root=new nj(this.root.na,d);this.shift=e}else this.root=Pj(this,this.shift,this.root,c)}this.G+=1;return this}throw Error("conj! after persistent!");};h.zd=function(){if(this.root.na){this.root.na=null;var a=this.G-qj(this),b=Array(a);oh(this.ea,0,b,0,a);return new T(null,this.G,this.shift,this.root,b,null)}throw Error("persistent! called twice");};
h.ae=function(a,b,c){if("number"===typeof b)return Lf(this,b,c);throw Error("TransientVector's key for assoc! must be a number.");};
h.qg=function(a,b,c){var d=this;if(d.root.na){if(0<=b&&b<d.G)return qj(this)<=b?d.ea[b&31]=c:(a=function(){return function f(a,k){var l=Oj(d.root.na,k);if(0===a)l.v[b&31]=c;else{var m=b>>>a&31,p=f(a-5,l.v[m]);l.v[m]=p}return l}}(this).call(null,d.shift,d.root),d.root=a),this;if(b===d.G)return If(this,c);throw Error([y("Index "),y(b),y(" out of bounds for TransientVector of length"),y(d.G)].join(""));}throw Error("assoc! after persistent!");};
h.Z=function(){if(this.root.na)return this.G;throw Error("count after persistent!");};h.ba=function(a,b){if(this.root.na)return wj(this,b)[b&31];throw Error("nth after persistent!");};h.ib=function(a,b,c){return 0<=b&&b<this.G?A.a(this,b):c};h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){return"number"===typeof b?A.j(this,b,c):c};
h.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.R(null,c);case 3:return this.P(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.R(null,c)};a.j=function(a,c,d){return this.P(null,c,d)};return a}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ce(b)))};h.g=function(a){return this.R(null,a)};h.a=function(a,b){return this.P(null,a,b)};
function Qj(a,b,c,d){this.H=a;this.nb=b;this.fc=c;this.w=d;this.B=31850572;this.O=0}h=Qj.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};h.U=function(){return this.H};h.T=function(){var a=this.w;return null!=a?a:this.w=a=ug(this)};h.M=function(a,b){return Kg(this,b)};h.pa=function(){return Ng(pg,this.H)};h.wa=function(){return H(this.nb)};
h.Ia=function(){var a=J(this.nb);return a?new Qj(this.H,a,this.fc,null):null==this.fc?Le(this):new Qj(this.H,this.fc,null,null)};h.Y=function(){return this};h.V=function(a,b){return new Qj(b,this.nb,this.fc,this.w)};h.X=function(a,b){return Lg(b,this)};Qj.prototype[Be]=function(){return sg(this)};function Rj(a,b,c,d,e){this.H=a;this.count=b;this.nb=c;this.fc=d;this.w=e;this.B=31858766;this.O=8192}h=Rj.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};
h.U=function(){return this.H};h.da=function(){return new Rj(this.H,this.count,this.nb,this.fc,this.w)};h.Z=function(){return this.count};h.Lc=function(){return H(this.nb)};h.Mc=function(){if(u(this.nb)){var a=J(this.nb);return a?new Rj(this.H,this.count-1,a,this.fc,null):new Rj(this.H,this.count-1,E(this.fc),Ug,null)}return this};h.T=function(){var a=this.w;return null!=a?a:this.w=a=ug(this)};h.M=function(a,b){return Kg(this,b)};h.pa=function(){return Ng(Sj,this.H)};h.wa=function(){return H(this.nb)};
h.Ia=function(){return og(E(this))};h.Y=function(){var a=E(this.fc),b=this.nb;return u(u(b)?b:a)?new Qj(null,this.nb,E(a),null):null};h.V=function(a,b){return new Rj(b,this.count,this.nb,this.fc,this.w)};h.X=function(a,b){var c;u(this.nb)?(c=this.fc,c=new Rj(this.H,this.count+1,this.nb,Tg.a(u(c)?c:Ug,b),null)):c=new Rj(this.H,this.count+1,Tg.a(this.nb,b),Ug,null);return c};var Sj=new Rj(null,0,null,Ug,vg);Rj.prototype[Be]=function(){return sg(this)};function Tj(){this.B=2097152;this.O=0}
Tj.prototype.equiv=function(a){return this.M(null,a)};Tj.prototype.M=function(){return!1};var Uj=new Tj;function Vj(a,b){return sh(kh(b)?M(a)===M(b)?Ji(Kh,Y.a(function(a){return qg.a(Yg(b,H(a),Uj),Rg(a))},a)):null:null)}function Wj(a){this.aa=a}Wj.prototype.next=function(){if(null!=this.aa){var a=H(this.aa),b=N(a,0),a=N(a,1);this.aa=J(this.aa);return{value:[b,a],done:!1}}return{value:null,done:!0}};function Xj(a){return new Wj(E(a))}function Yj(a){this.aa=a}
Yj.prototype.next=function(){if(null!=this.aa){var a=H(this.aa);this.aa=J(this.aa);return{value:[a,a],done:!1}}return{value:null,done:!0}};function Zj(a){return new Yj(E(a))}
function ak(a,b){var c;if(b instanceof V)a:{c=a.length;for(var d=b.ja,e=0;;){if(c<=e){c=-1;break a}var f=a[e];if(f instanceof V&&d===f.ja){c=e;break a}e+=2}}else if(c=ea(b),u(u(c)?c:"number"===typeof b))a:for(c=a.length,d=0;;){if(c<=d){c=-1;break a}if(b===a[d]){c=d;break a}d+=2}else if(b instanceof C)a:for(c=a.length,d=b.gb,e=0;;){if(c<=e){c=-1;break a}f=a[e];if(f instanceof C&&d===f.gb){c=e;break a}e+=2}else if(null==b)a:for(c=a.length,d=0;;){if(c<=d){c=-1;break a}if(null==a[d]){c=d;break a}d+=2}else a:for(c=
a.length,d=0;;){if(c<=d){c=-1;break a}if(qg.a(b,a[d])){c=d;break a}d+=2}return c}function bk(a,b,c){this.v=a;this.L=b;this.hb=c;this.B=32374990;this.O=0}h=bk.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};h.U=function(){return this.hb};h.$a=function(){return this.L<this.v.length-2?new bk(this.v,this.L+2,this.hb):null};h.Z=function(){return(this.v.length-this.L)/2};h.T=function(){return ug(this)};h.M=function(a,b){return Kg(this,b)};
h.pa=function(){return Ng(pg,this.hb)};h.Aa=function(a,b){return Og(b,this)};h.Ba=function(a,b,c){return Qg(b,c,this)};h.wa=function(){return new T(null,2,5,U,[this.v[this.L],this.v[this.L+1]],null)};h.Ia=function(){return this.L<this.v.length-2?new bk(this.v,this.L+2,this.hb):pg};h.Y=function(){return this};h.V=function(a,b){return new bk(this.v,this.L,b)};h.X=function(a,b){return Lg(b,this)};bk.prototype[Be]=function(){return sg(this)};function ck(a,b,c){this.v=a;this.L=b;this.G=c}
ck.prototype.mc=function(){return this.L<this.G};ck.prototype.next=function(){var a=new T(null,2,5,U,[this.v[this.L],this.v[this.L+1]],null);this.L+=2;return a};function t(a,b,c,d){this.H=a;this.G=b;this.v=c;this.w=d;this.B=16647951;this.O=8196}h=t.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};h.keys=function(){return sg(Dh.g?Dh.g(this):Dh.call(null,this))};h.entries=function(){return Xj(E(this))};
h.values=function(){return sg(dk.g?dk.g(this):dk.call(null,this))};h.has=function(a){return vh(this,a)};h.get=function(a,b){return this.P(null,a,b)};h.forEach=function(a){for(var b=E(this),c=null,d=0,e=0;;)if(e<d){var f=c.ba(null,e),g=N(f,0),f=N(f,1);a.a?a.a(f,g):a.call(null,f,g);e+=1}else if(b=E(b))mh(b)?(c=Pf(b),b=Qf(b),g=c,d=M(c),c=g):(c=H(b),g=N(c,0),c=f=N(c,1),a.a?a.a(c,g):a.call(null,c,g),b=J(b),c=null,d=0),e=0;else return null};h.R=function(a,b){return Ue.j(this,b,null)};
h.P=function(a,b,c){a=ak(this.v,b);return-1===a?c:this.v[a+1]};h.xd=function(a,b,c){a=this.v.length;for(var d=0;;)if(d<a){var e=this.v[d],f=this.v[d+1];c=b.j?b.j(c,e,f):b.call(null,c,e,f);if(Ag(c))return b=c,K.g?K.g(b):K.call(null,b);d+=2}else return c};h.Ke=!0;h.Vd=function(){return new ck(this.v,0,2*this.G)};h.U=function(){return this.H};h.da=function(){return new t(this.H,this.G,this.v,this.w)};h.Z=function(){return this.G};h.T=function(){var a=this.w;return null!=a?a:this.w=a=wg(this)};
h.M=function(a,b){if(b&&(b.B&1024||b.Jh)){var c=this.v.length;if(this.G===b.Z(null))for(var d=0;;)if(d<c){var e=b.P(null,this.v[d],ph);if(e!==ph)if(qg.a(this.v[d+1],e))d+=2;else return!1;else return!1}else return!0;else return!1}else return Vj(this,b)};h.wd=function(){return new ek({},this.v.length,Ce(this.v))};h.pa=function(){return pf(X,this.H)};h.Aa=function(a,b){return Og(b,this)};h.Ba=function(a,b,c){return Qg(b,c,this)};
h.ya=function(a,b){if(0<=ak(this.v,b)){var c=this.v.length,d=c-2;if(0===d)return Le(this);for(var d=Array(d),e=0,f=0;;){if(e>=c)return new t(this.H,this.G-1,d,null);qg.a(b,this.v[e])||(d[f]=this.v[e],d[f+1]=this.v[e+1],f+=2);e+=2}}else return this};
h.ra=function(a,b,c){a=ak(this.v,b);if(-1===a){if(this.G<fk){a=this.v;for(var d=a.length,e=Array(d+2),f=0;;)if(f<d)e[f]=a[f],f+=1;else break;e[d]=b;e[d+1]=c;return new t(this.H,this.G+1,e,null)}return pf(Xe(hj.a(gk,this),b,c),this.H)}if(c===this.v[a+1])return this;b=Ce(this.v);b[a+1]=c;return new t(this.H,this.G,b,null)};h.Je=function(a,b){return-1!==ak(this.v,b)};h.Y=function(){var a=this.v;return 0<=a.length-2?new bk(a,0,null):null};h.V=function(a,b){return new t(b,this.G,this.v,this.w)};
h.X=function(a,b){if(lh(b))return Xe(this,A.a(b,0),A.a(b,1));for(var c=this,d=E(b);;){if(null==d)return c;var e=H(d);if(lh(e))c=Xe(c,A.a(e,0),A.a(e,1)),d=J(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
h.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.R(null,c);case 3:return this.P(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.R(null,c)};a.j=function(a,c,d){return this.P(null,c,d)};return a}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ce(b)))};h.g=function(a){return this.R(null,a)};h.a=function(a,b){return this.P(null,a,b)};var X=new t(null,0,[],xg),fk=8;
function hk(a,b,c){a=b?a:Ce(a);if(!c){c=[];for(b=0;;)if(b<a.length){var d=a[b],e=a[b+1];-1===ak(c,d)&&(c.push(d),c.push(e));b+=2}else break;a=c}return new t(null,a.length/2,a,null)}t.prototype[Be]=function(){return sg(this)};function ek(a,b,c){this.Ed=a;this.Jd=b;this.v=c;this.B=258;this.O=56}h=ek.prototype;h.Z=function(){if(u(this.Ed))return Ph(this.Jd);throw Error("count after persistent!");};h.R=function(a,b){return Ue.j(this,b,null)};
h.P=function(a,b,c){if(u(this.Ed))return a=ak(this.v,b),-1===a?c:this.v[a+1];throw Error("lookup after persistent!");};
h.Zc=function(a,b){if(u(this.Ed)){if(b?b.B&2048||b.Kh||(b.B?0:v($e,b)):v($e,b))return Kf(this,Vh.g?Vh.g(b):Vh.call(null,b),Wh.g?Wh.g(b):Wh.call(null,b));for(var c=E(b),d=this;;){var e=H(c);if(u(e))var f=e,c=J(c),d=Kf(d,function(){var a=f;return Vh.g?Vh.g(a):Vh.call(null,a)}(),function(){var a=f;return Wh.g?Wh.g(a):Wh.call(null,a)}());else return d}}else throw Error("conj! after persistent!");};
h.zd=function(){if(u(this.Ed))return this.Ed=!1,new t(null,Ph(this.Jd),this.v,null);throw Error("persistent! called twice");};h.ae=function(a,b,c){if(u(this.Ed)){a=ak(this.v,b);if(-1===a){if(this.Jd+2<=2*fk)return this.Jd+=2,this.v.push(b),this.v.push(c),this;a=this.Jd;var d=this.v;a=ik.a?ik.a(a,d):ik.call(null,a,d);return Kf(a,b,c)}c!==this.v[a+1]&&(this.v[a+1]=c);return this}throw Error("assoc! after persistent!");};
function ik(a,b){for(var c=Hf(gk),d=0;;)if(d<a)c=Kf(c,b[d],b[d+1]),d+=2;else return c}function jk(){this.K=!1}function kk(a,b){return a===b?!0:W(a,b)?!0:qg.a(a,b)}function lk(a,b,c){a=Ce(a);a[b]=c;return a}function mk(a,b){var c=Array(a.length-2);oh(a,0,c,0,2*b);oh(a,2*(b+1),c,2*b,c.length-2*b);return c}function nk(a,b,c,d){a=a.dd(b);a.v[c]=d;return a}
function ok(a,b,c){for(var d=a.length,e=0,f=c;;)if(e<d){c=a[e];if(null!=c){var g=a[e+1];c=b.j?b.j(f,c,g):b.call(null,f,c,g)}else c=a[e+1],c=null!=c?c.kd(b,f):f;if(Ag(c))return a=c,K.g?K.g(a):K.call(null,a);e+=2;f=c}else return f}function pk(a,b,c){this.na=a;this.sa=b;this.v=c}h=pk.prototype;h.dd=function(a){if(a===this.na)return this;var b=Qh(this.sa),c=Array(0>b?4:2*(b+1));oh(this.v,0,c,0,2*b);return new pk(a,this.sa,c)};h.me=function(){var a=this.v;return qk?qk(a):rk.call(null,a)};
h.kd=function(a,b){return ok(this.v,a,b)};h.Pc=function(a,b,c,d){var e=1<<(b>>>a&31);if(0===(this.sa&e))return d;var f=Qh(this.sa&e-1),e=this.v[2*f],f=this.v[2*f+1];return null==e?f.Pc(a+5,b,c,d):kk(c,e)?f:d};
h.Xb=function(a,b,c,d,e,f){var g=1<<(c>>>b&31),k=Qh(this.sa&g-1);if(0===(this.sa&g)){var l=Qh(this.sa);if(2*l<this.v.length){a=this.dd(a);b=a.v;f.K=!0;a:for(c=2*(l-k),f=2*k+(c-1),l=2*(k+1)+(c-1);;){if(0===c)break a;b[l]=b[f];--l;--c;--f}b[2*k]=d;b[2*k+1]=e;a.sa|=g;return a}if(16<=l){k=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];k[c>>>b&31]=sk.Xb(a,b+5,c,d,e,f);for(e=d=0;;)if(32>d)0!==
(this.sa>>>d&1)&&(k[d]=null!=this.v[e]?sk.Xb(a,b+5,ig(this.v[e]),this.v[e],this.v[e+1],f):this.v[e+1],e+=2),d+=1;else break;return new tk(a,l+1,k)}b=Array(2*(l+4));oh(this.v,0,b,0,2*k);b[2*k]=d;b[2*k+1]=e;oh(this.v,2*k,b,2*(k+1),2*(l-k));f.K=!0;a=this.dd(a);a.v=b;a.sa|=g;return a}l=this.v[2*k];g=this.v[2*k+1];if(null==l)return l=g.Xb(a,b+5,c,d,e,f),l===g?this:nk(this,a,2*k+1,l);if(kk(d,l))return e===g?this:nk(this,a,2*k+1,e);f.K=!0;f=b+5;d=uk?uk(a,f,l,g,c,d,e):vk.call(null,a,f,l,g,c,d,e);e=2*k;k=
2*k+1;a=this.dd(a);a.v[e]=null;a.v[k]=d;return a};
h.Wb=function(a,b,c,d,e){var f=1<<(b>>>a&31),g=Qh(this.sa&f-1);if(0===(this.sa&f)){var k=Qh(this.sa);if(16<=k){g=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];g[b>>>a&31]=sk.Wb(a+5,b,c,d,e);for(d=c=0;;)if(32>c)0!==(this.sa>>>c&1)&&(g[c]=null!=this.v[d]?sk.Wb(a+5,ig(this.v[d]),this.v[d],this.v[d+1],e):this.v[d+1],d+=2),c+=1;else break;return new tk(null,k+1,g)}a=Array(2*(k+1));oh(this.v,
0,a,0,2*g);a[2*g]=c;a[2*g+1]=d;oh(this.v,2*g,a,2*(g+1),2*(k-g));e.K=!0;return new pk(null,this.sa|f,a)}var l=this.v[2*g],f=this.v[2*g+1];if(null==l)return k=f.Wb(a+5,b,c,d,e),k===f?this:new pk(null,this.sa,lk(this.v,2*g+1,k));if(kk(c,l))return d===f?this:new pk(null,this.sa,lk(this.v,2*g+1,d));e.K=!0;e=this.sa;k=this.v;a+=5;a=wk?wk(a,l,f,b,c,d):vk.call(null,a,l,f,b,c,d);c=2*g;g=2*g+1;d=Ce(k);d[c]=null;d[g]=a;return new pk(null,e,d)};
h.ne=function(a,b,c){var d=1<<(b>>>a&31);if(0===(this.sa&d))return this;var e=Qh(this.sa&d-1),f=this.v[2*e],g=this.v[2*e+1];return null==f?(a=g.ne(a+5,b,c),a===g?this:null!=a?new pk(null,this.sa,lk(this.v,2*e+1,a)):this.sa===d?null:new pk(null,this.sa^d,mk(this.v,e))):kk(c,f)?new pk(null,this.sa^d,mk(this.v,e)):this};var sk=new pk(null,0,[]);function tk(a,b,c){this.na=a;this.G=b;this.v=c}h=tk.prototype;h.dd=function(a){return a===this.na?this:new tk(a,this.G,Ce(this.v))};
h.me=function(){var a=this.v;return xk?xk(a):yk.call(null,a)};h.kd=function(a,b){for(var c=this.v.length,d=0,e=b;;)if(d<c){var f=this.v[d];if(null!=f&&(e=f.kd(a,e),Ag(e)))return c=e,K.g?K.g(c):K.call(null,c);d+=1}else return e};h.Pc=function(a,b,c,d){var e=this.v[b>>>a&31];return null!=e?e.Pc(a+5,b,c,d):d};h.Xb=function(a,b,c,d,e,f){var g=c>>>b&31,k=this.v[g];if(null==k)return a=nk(this,a,g,sk.Xb(a,b+5,c,d,e,f)),a.G+=1,a;b=k.Xb(a,b+5,c,d,e,f);return b===k?this:nk(this,a,g,b)};
h.Wb=function(a,b,c,d,e){var f=b>>>a&31,g=this.v[f];if(null==g)return new tk(null,this.G+1,lk(this.v,f,sk.Wb(a+5,b,c,d,e)));a=g.Wb(a+5,b,c,d,e);return a===g?this:new tk(null,this.G,lk(this.v,f,a))};
h.ne=function(a,b,c){var d=b>>>a&31,e=this.v[d];if(null!=e){a=e.ne(a+5,b,c);if(a===e)d=this;else if(null==a)if(8>=this.G)a:{e=this.v;a=e.length;b=Array(2*(this.G-1));c=0;for(var f=1,g=0;;)if(c<a)c!==d&&null!=e[c]&&(b[f]=e[c],f+=2,g|=1<<c),c+=1;else{d=new pk(null,g,b);break a}}else d=new tk(null,this.G-1,lk(this.v,d,a));else d=new tk(null,this.G,lk(this.v,d,a));return d}return this};function zk(a,b,c){b*=2;for(var d=0;;)if(d<b){if(kk(c,a[d]))return d;d+=2}else return-1}
function Ak(a,b,c,d){this.na=a;this.yc=b;this.G=c;this.v=d}h=Ak.prototype;h.dd=function(a){if(a===this.na)return this;var b=Array(2*(this.G+1));oh(this.v,0,b,0,2*this.G);return new Ak(a,this.yc,this.G,b)};h.me=function(){var a=this.v;return qk?qk(a):rk.call(null,a)};h.kd=function(a,b){return ok(this.v,a,b)};h.Pc=function(a,b,c,d){a=zk(this.v,this.G,c);return 0>a?d:kk(c,this.v[a])?this.v[a+1]:d};
h.Xb=function(a,b,c,d,e,f){if(c===this.yc){b=zk(this.v,this.G,d);if(-1===b){if(this.v.length>2*this.G)return b=2*this.G,c=2*this.G+1,a=this.dd(a),a.v[b]=d,a.v[c]=e,f.K=!0,a.G+=1,a;c=this.v.length;b=Array(c+2);oh(this.v,0,b,0,c);b[c]=d;b[c+1]=e;f.K=!0;d=this.G+1;a===this.na?(this.v=b,this.G=d,a=this):a=new Ak(this.na,this.yc,d,b);return a}return this.v[b+1]===e?this:nk(this,a,b+1,e)}return(new pk(a,1<<(this.yc>>>b&31),[null,this,null,null])).Xb(a,b,c,d,e,f)};
h.Wb=function(a,b,c,d,e){return b===this.yc?(a=zk(this.v,this.G,c),-1===a?(a=2*this.G,b=Array(a+2),oh(this.v,0,b,0,a),b[a]=c,b[a+1]=d,e.K=!0,new Ak(null,this.yc,this.G+1,b)):qg.a(this.v[a],d)?this:new Ak(null,this.yc,this.G,lk(this.v,a+1,d))):(new pk(null,1<<(this.yc>>>a&31),[null,this])).Wb(a,b,c,d,e)};h.ne=function(a,b,c){a=zk(this.v,this.G,c);return-1===a?this:1===this.G?null:new Ak(null,this.yc,this.G-1,mk(this.v,Ph(a)))};
function vk(){switch(arguments.length){case 6:return wk(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);case 7:return uk(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5],arguments[6]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}}function wk(a,b,c,d,e,f){var g=ig(b);if(g===d)return new Ak(null,g,2,[b,c,e,f]);var k=new jk;return sk.Wb(a,g,b,c,k).Wb(a,d,e,f,k)}
function uk(a,b,c,d,e,f,g){var k=ig(c);if(k===e)return new Ak(null,k,2,[c,d,f,g]);var l=new jk;return sk.Xb(a,b,k,c,d,l).Xb(a,b,e,f,g,l)}function Bk(a,b,c,d,e){this.H=a;this.Qc=b;this.L=c;this.aa=d;this.w=e;this.B=32374860;this.O=0}h=Bk.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};h.U=function(){return this.H};h.T=function(){var a=this.w;return null!=a?a:this.w=a=ug(this)};h.M=function(a,b){return Kg(this,b)};h.pa=function(){return Ng(pg,this.H)};
h.Aa=function(a,b){return Og(b,this)};h.Ba=function(a,b,c){return Qg(b,c,this)};h.wa=function(){return null==this.aa?new T(null,2,5,U,[this.Qc[this.L],this.Qc[this.L+1]],null):H(this.aa)};h.Ia=function(){if(null==this.aa){var a=this.Qc,b=this.L+2;return Ck?Ck(a,b,null):rk.call(null,a,b,null)}var a=this.Qc,b=this.L,c=J(this.aa);return Ck?Ck(a,b,c):rk.call(null,a,b,c)};h.Y=function(){return this};h.V=function(a,b){return new Bk(b,this.Qc,this.L,this.aa,this.w)};h.X=function(a,b){return Lg(b,this)};
Bk.prototype[Be]=function(){return sg(this)};function rk(){switch(arguments.length){case 1:return qk(arguments[0]);case 3:return Ck(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}}function qk(a){return Ck(a,0,null)}
function Ck(a,b,c){if(null==c)for(c=a.length;;)if(b<c){if(null!=a[b])return new Bk(null,a,b,null,null);var d=a[b+1];if(u(d)&&(d=d.me(),u(d)))return new Bk(null,a,b+2,d,null);b+=2}else return null;else return new Bk(null,a,b,c,null)}function Dk(a,b,c,d,e){this.H=a;this.Qc=b;this.L=c;this.aa=d;this.w=e;this.B=32374860;this.O=0}h=Dk.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};h.U=function(){return this.H};
h.T=function(){var a=this.w;return null!=a?a:this.w=a=ug(this)};h.M=function(a,b){return Kg(this,b)};h.pa=function(){return Ng(pg,this.H)};h.Aa=function(a,b){return Og(b,this)};h.Ba=function(a,b,c){return Qg(b,c,this)};h.wa=function(){return H(this.aa)};h.Ia=function(){var a=this.Qc,b=this.L,c=J(this.aa);return Ek?Ek(null,a,b,c):yk.call(null,null,a,b,c)};h.Y=function(){return this};h.V=function(a,b){return new Dk(b,this.Qc,this.L,this.aa,this.w)};h.X=function(a,b){return Lg(b,this)};
Dk.prototype[Be]=function(){return sg(this)};function yk(){switch(arguments.length){case 1:return xk(arguments[0]);case 4:return Ek(arguments[0],arguments[1],arguments[2],arguments[3]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}}function xk(a){return Ek(null,a,0,null)}function Ek(a,b,c,d){if(null==d)for(d=b.length;;)if(c<d){var e=b[c];if(u(e)&&(e=e.me(),u(e)))return new Dk(a,b,c+1,e,null);c+=1}else return null;else return new Dk(a,b,c,d,null)}
function Fk(a,b,c,d,e,f){this.H=a;this.G=b;this.root=c;this.bb=d;this.ob=e;this.w=f;this.B=16123663;this.O=8196}h=Fk.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};h.keys=function(){return sg(Dh.g?Dh.g(this):Dh.call(null,this))};h.entries=function(){return Xj(E(this))};h.values=function(){return sg(dk.g?dk.g(this):dk.call(null,this))};h.has=function(a){return vh(this,a)};h.get=function(a,b){return this.P(null,a,b)};
h.forEach=function(a){for(var b=E(this),c=null,d=0,e=0;;)if(e<d){var f=c.ba(null,e),g=N(f,0),f=N(f,1);a.a?a.a(f,g):a.call(null,f,g);e+=1}else if(b=E(b))mh(b)?(c=Pf(b),b=Qf(b),g=c,d=M(c),c=g):(c=H(b),g=N(c,0),c=f=N(c,1),a.a?a.a(c,g):a.call(null,c,g),b=J(b),c=null,d=0),e=0;else return null};h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){return null==b?this.bb?this.ob:c:null==this.root?c:this.root.Pc(0,ig(b),b,c)};
h.xd=function(a,b,c){this.bb&&(a=this.ob,c=b.j?b.j(c,null,a):b.call(null,c,null,a));return Ag(c)?K.g?K.g(c):K.call(null,c):null!=this.root?this.root.kd(b,c):c};h.U=function(){return this.H};h.da=function(){return new Fk(this.H,this.G,this.root,this.bb,this.ob,this.w)};h.Z=function(){return this.G};h.T=function(){var a=this.w;return null!=a?a:this.w=a=wg(this)};h.M=function(a,b){return Vj(this,b)};h.wd=function(){return new Gk({},this.root,this.G,this.bb,this.ob)};h.pa=function(){return pf(gk,this.H)};
h.ya=function(a,b){if(null==b)return this.bb?new Fk(this.H,this.G-1,this.root,!1,null,null):this;if(null==this.root)return this;var c=this.root.ne(0,ig(b),b);return c===this.root?this:new Fk(this.H,this.G-1,c,this.bb,this.ob,null)};h.ra=function(a,b,c){if(null==b)return this.bb&&c===this.ob?this:new Fk(this.H,this.bb?this.G:this.G+1,this.root,!0,c,null);a=new jk;b=(null==this.root?sk:this.root).Wb(0,ig(b),b,c,a);return b===this.root?this:new Fk(this.H,a.K?this.G+1:this.G,b,this.bb,this.ob,null)};
h.Je=function(a,b){return null==b?this.bb:null==this.root?!1:this.root.Pc(0,ig(b),b,ph)!==ph};h.Y=function(){if(0<this.G){var a=null!=this.root?this.root.me():null;return this.bb?Lg(new T(null,2,5,U,[null,this.ob],null),a):a}return null};h.V=function(a,b){return new Fk(b,this.G,this.root,this.bb,this.ob,this.w)};
h.X=function(a,b){if(lh(b))return Xe(this,A.a(b,0),A.a(b,1));for(var c=this,d=E(b);;){if(null==d)return c;var e=H(d);if(lh(e))c=Xe(c,A.a(e,0),A.a(e,1)),d=J(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
h.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.R(null,c);case 3:return this.P(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.R(null,c)};a.j=function(a,c,d){return this.P(null,c,d)};return a}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ce(b)))};h.g=function(a){return this.R(null,a)};h.a=function(a,b){return this.P(null,a,b)};var gk=new Fk(null,0,null,!1,null,xg);
function Zg(a,b){for(var c=a.length,d=0,e=Hf(gk);;)if(d<c)var f=d+1,e=e.ae(null,a[d],b[d]),d=f;else return Jf(e)}Fk.prototype[Be]=function(){return sg(this)};function Gk(a,b,c,d,e){this.na=a;this.root=b;this.count=c;this.bb=d;this.ob=e;this.B=258;this.O=56}
function Hk(a,b){if(a.na){if(b?b.B&2048||b.Kh||(b.B?0:v($e,b)):v($e,b))return Ik(a,Vh.g?Vh.g(b):Vh.call(null,b),Wh.g?Wh.g(b):Wh.call(null,b));for(var c=E(b),d=a;;){var e=H(c);if(u(e))var f=e,c=J(c),d=Ik(d,function(){var a=f;return Vh.g?Vh.g(a):Vh.call(null,a)}(),function(){var a=f;return Wh.g?Wh.g(a):Wh.call(null,a)}());else return d}}else throw Error("conj! after persistent");}
function Ik(a,b,c){if(a.na){if(null==b)a.ob!==c&&(a.ob=c),a.bb||(a.count+=1,a.bb=!0);else{var d=new jk;b=(null==a.root?sk:a.root).Xb(a.na,0,ig(b),b,c,d);b!==a.root&&(a.root=b);d.K&&(a.count+=1)}return a}throw Error("assoc! after persistent!");}h=Gk.prototype;h.Z=function(){if(this.na)return this.count;throw Error("count after persistent!");};h.R=function(a,b){return null==b?this.bb?this.ob:null:null==this.root?null:this.root.Pc(0,ig(b),b)};
h.P=function(a,b,c){return null==b?this.bb?this.ob:c:null==this.root?c:this.root.Pc(0,ig(b),b,c)};h.Zc=function(a,b){return Hk(this,b)};h.zd=function(){var a;if(this.na)this.na=null,a=new Fk(null,this.count,this.root,this.bb,this.ob,null);else throw Error("persistent! called twice");return a};h.ae=function(a,b,c){return Ik(this,b,c)};function Jk(a,b,c){for(var d=b;;)if(null!=a)b=c?a.left:a.right,d=Tg.a(d,a),a=b;else return d}
function Kk(a,b,c,d,e){this.H=a;this.stack=b;this.De=c;this.G=d;this.w=e;this.B=32374862;this.O=0}h=Kk.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};h.U=function(){return this.H};h.Z=function(){return 0>this.G?M(J(this))+1:this.G};h.T=function(){var a=this.w;return null!=a?a:this.w=a=ug(this)};h.M=function(a,b){return Kg(this,b)};h.pa=function(){return Ng(pg,this.H)};h.Aa=function(a,b){return Og(b,this)};h.Ba=function(a,b,c){return Qg(b,c,this)};
h.wa=function(){return dh(this.stack)};h.Ia=function(){var a=H(this.stack),a=Jk(this.De?a.right:a.left,J(this.stack),this.De);return null!=a?new Kk(null,a,this.De,this.G-1,null):pg};h.Y=function(){return this};h.V=function(a,b){return new Kk(b,this.stack,this.De,this.G,this.w)};h.X=function(a,b){return Lg(b,this)};Kk.prototype[Be]=function(){return sg(this)};function Lk(a,b,c){return new Kk(null,Jk(a,null,b),b,c,null)}
function Mk(a,b,c,d){return c instanceof Nk?c.left instanceof Nk?new Nk(c.key,c.K,c.left.uc(),new Ok(a,b,c.right,d,null),null):c.right instanceof Nk?new Nk(c.right.key,c.right.K,new Ok(c.key,c.K,c.left,c.right.left,null),new Ok(a,b,c.right.right,d,null),null):new Ok(a,b,c,d,null):new Ok(a,b,c,d,null)}
function Pk(a,b,c,d){return d instanceof Nk?d.right instanceof Nk?new Nk(d.key,d.K,new Ok(a,b,c,d.left,null),d.right.uc(),null):d.left instanceof Nk?new Nk(d.left.key,d.left.K,new Ok(a,b,c,d.left.left,null),new Ok(d.key,d.K,d.left.right,d.right,null),null):new Ok(a,b,c,d,null):new Ok(a,b,c,d,null)}
function Qk(a,b,c,d){if(c instanceof Nk)return new Nk(a,b,c.uc(),d,null);if(d instanceof Ok)return Pk(a,b,c,d.ue());if(d instanceof Nk&&d.left instanceof Ok)return new Nk(d.left.key,d.left.K,new Ok(a,b,c,d.left.left,null),Pk(d.key,d.K,d.left.right,d.right.ue()),null);throw Error("red-black tree invariant violation");}
var Rk=function Rk(b,c,d){d=null!=b.left?Rk(b.left,c,d):d;if(Ag(d))return K.g?K.g(d):K.call(null,d);var e=b.key,f=b.K;d=c.j?c.j(d,e,f):c.call(null,d,e,f);if(Ag(d))return K.g?K.g(d):K.call(null,d);b=null!=b.right?Rk(b.right,c,d):d;return Ag(b)?K.g?K.g(b):K.call(null,b):b};function Ok(a,b,c,d,e){this.key=a;this.K=b;this.left=c;this.right=d;this.w=e;this.B=32402207;this.O=0}h=Ok.prototype;h.gg=function(a){return a.ig(this)};h.ue=function(){return new Nk(this.key,this.K,this.left,this.right,null)};
h.uc=function(){return this};h.fg=function(a){return a.hg(this)};h.replace=function(a,b,c,d){return new Ok(a,b,c,d,null)};h.hg=function(a){return new Ok(a.key,a.K,this,a.right,null)};h.ig=function(a){return new Ok(a.key,a.K,a.left,this,null)};h.kd=function(a,b){return Rk(this,a,b)};h.R=function(a,b){return A.j(this,b,null)};h.P=function(a,b,c){return A.j(this,b,c)};h.ba=function(a,b){return 0===b?this.key:1===b?this.K:null};h.ib=function(a,b,c){return 0===b?this.key:1===b?this.K:c};
h.$c=function(a,b,c){return(new T(null,2,5,U,[this.key,this.K],null)).$c(null,b,c)};h.U=function(){return null};h.Z=function(){return 2};h.Wd=function(){return this.key};h.Xd=function(){return this.K};h.Lc=function(){return this.K};h.Mc=function(){return new T(null,1,5,U,[this.key],null)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=ug(this)};h.M=function(a,b){return Kg(this,b)};h.pa=function(){return Ug};h.Aa=function(a,b){return Bg(this,b)};h.Ba=function(a,b,c){return Cg(this,b,c)};
h.ra=function(a,b,c){return R.j(new T(null,2,5,U,[this.key,this.K],null),b,c)};h.Y=function(){return z(z(pg,this.K),this.key)};h.V=function(a,b){return Ng(new T(null,2,5,U,[this.key,this.K],null),b)};h.X=function(a,b){return new T(null,3,5,U,[this.key,this.K,b],null)};
h.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.R(null,c);case 3:return this.P(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.R(null,c)};a.j=function(a,c,d){return this.P(null,c,d)};return a}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ce(b)))};h.g=function(a){return this.R(null,a)};h.a=function(a,b){return this.P(null,a,b)};Ok.prototype[Be]=function(){return sg(this)};
function Nk(a,b,c,d,e){this.key=a;this.K=b;this.left=c;this.right=d;this.w=e;this.B=32402207;this.O=0}h=Nk.prototype;h.gg=function(a){return new Nk(this.key,this.K,this.left,a,null)};h.ue=function(){throw Error("red-black tree invariant violation");};h.uc=function(){return new Ok(this.key,this.K,this.left,this.right,null)};h.fg=function(a){return new Nk(this.key,this.K,a,this.right,null)};h.replace=function(a,b,c,d){return new Nk(a,b,c,d,null)};
h.hg=function(a){return this.left instanceof Nk?new Nk(this.key,this.K,this.left.uc(),new Ok(a.key,a.K,this.right,a.right,null),null):this.right instanceof Nk?new Nk(this.right.key,this.right.K,new Ok(this.key,this.K,this.left,this.right.left,null),new Ok(a.key,a.K,this.right.right,a.right,null),null):new Ok(a.key,a.K,this,a.right,null)};
h.ig=function(a){return this.right instanceof Nk?new Nk(this.key,this.K,new Ok(a.key,a.K,a.left,this.left,null),this.right.uc(),null):this.left instanceof Nk?new Nk(this.left.key,this.left.K,new Ok(a.key,a.K,a.left,this.left.left,null),new Ok(this.key,this.K,this.left.right,this.right,null),null):new Ok(a.key,a.K,a.left,this,null)};h.kd=function(a,b){return Rk(this,a,b)};h.R=function(a,b){return A.j(this,b,null)};h.P=function(a,b,c){return A.j(this,b,c)};
h.ba=function(a,b){return 0===b?this.key:1===b?this.K:null};h.ib=function(a,b,c){return 0===b?this.key:1===b?this.K:c};h.$c=function(a,b,c){return(new T(null,2,5,U,[this.key,this.K],null)).$c(null,b,c)};h.U=function(){return null};h.Z=function(){return 2};h.Wd=function(){return this.key};h.Xd=function(){return this.K};h.Lc=function(){return this.K};h.Mc=function(){return new T(null,1,5,U,[this.key],null)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=ug(this)};
h.M=function(a,b){return Kg(this,b)};h.pa=function(){return Ug};h.Aa=function(a,b){return Bg(this,b)};h.Ba=function(a,b,c){return Cg(this,b,c)};h.ra=function(a,b,c){return R.j(new T(null,2,5,U,[this.key,this.K],null),b,c)};h.Y=function(){return z(z(pg,this.K),this.key)};h.V=function(a,b){return Ng(new T(null,2,5,U,[this.key,this.K],null),b)};h.X=function(a,b){return new T(null,3,5,U,[this.key,this.K,b],null)};
h.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.R(null,c);case 3:return this.P(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.R(null,c)};a.j=function(a,c,d){return this.P(null,c,d)};return a}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ce(b)))};h.g=function(a){return this.R(null,a)};h.a=function(a,b){return this.P(null,a,b)};Nk.prototype[Be]=function(){return sg(this)};
var Sk=function Sk(b,c,d,e,f){if(null==c)return new Nk(d,e,null,null,null);var g;g=c.key;g=b.a?b.a(d,g):b.call(null,d,g);if(0===g)return f[0]=c,null;if(0>g)return b=Sk(b,c.left,d,e,f),null!=b?c.fg(b):null;b=Sk(b,c.right,d,e,f);return null!=b?c.gg(b):null},Tk=function Tk(b,c){if(null==b)return c;if(null==c)return b;if(b instanceof Nk){if(c instanceof Nk){var d=Tk(b.right,c.left);return d instanceof Nk?new Nk(d.key,d.K,new Nk(b.key,b.K,b.left,d.left,null),new Nk(c.key,c.K,d.right,c.right,null),null):
new Nk(b.key,b.K,b.left,new Nk(c.key,c.K,d,c.right,null),null)}return new Nk(b.key,b.K,b.left,Tk(b.right,c),null)}if(c instanceof Nk)return new Nk(c.key,c.K,Tk(b,c.left),c.right,null);d=Tk(b.right,c.left);return d instanceof Nk?new Nk(d.key,d.K,new Ok(b.key,b.K,b.left,d.left,null),new Ok(c.key,c.K,d.right,c.right,null),null):Qk(b.key,b.K,b.left,new Ok(c.key,c.K,d,c.right,null))},Uk=function Uk(b,c,d,e){if(null!=c){var f;f=c.key;f=b.a?b.a(d,f):b.call(null,d,f);if(0===f)return e[0]=c,Tk(c.left,c.right);
if(0>f)return b=Uk(b,c.left,d,e),null!=b||null!=e[0]?c.left instanceof Ok?Qk(c.key,c.K,b,c.right):new Nk(c.key,c.K,b,c.right,null):null;b=Uk(b,c.right,d,e);if(null!=b||null!=e[0])if(c.right instanceof Ok)if(e=c.key,d=c.K,c=c.left,b instanceof Nk)c=new Nk(e,d,c,b.uc(),null);else if(c instanceof Ok)c=Mk(e,d,c.ue(),b);else if(c instanceof Nk&&c.right instanceof Ok)c=new Nk(c.right.key,c.right.K,Mk(c.key,c.K,c.left.ue(),c.right.left),new Ok(e,d,c.right.right,b,null),null);else throw Error("red-black tree invariant violation");
else c=new Nk(c.key,c.K,c.left,b,null);else c=null;return c}return null},Vk=function Vk(b,c,d,e){var f=c.key,g=b.a?b.a(d,f):b.call(null,d,f);return 0===g?c.replace(f,e,c.left,c.right):0>g?c.replace(f,c.K,Vk(b,c.left,d,e),c.right):c.replace(f,c.K,c.left,Vk(b,c.right,d,e))};function Wk(a,b,c,d,e){this.yb=a;this.sc=b;this.G=c;this.H=d;this.w=e;this.B=418776847;this.O=8192}h=Wk.prototype;
h.forEach=function(a){for(var b=E(this),c=null,d=0,e=0;;)if(e<d){var f=c.ba(null,e),g=N(f,0),f=N(f,1);a.a?a.a(f,g):a.call(null,f,g);e+=1}else if(b=E(b))mh(b)?(c=Pf(b),b=Qf(b),g=c,d=M(c),c=g):(c=H(b),g=N(c,0),c=f=N(c,1),a.a?a.a(c,g):a.call(null,c,g),b=J(b),c=null,d=0),e=0;else return null};h.get=function(a,b){return this.P(null,a,b)};h.entries=function(){return Xj(E(this))};h.toString=function(){return $f(this)};h.keys=function(){return sg(Dh.g?Dh.g(this):Dh.call(null,this))};
h.values=function(){return sg(dk.g?dk.g(this):dk.call(null,this))};h.equiv=function(a){return this.M(null,a)};function Xk(a,b){for(var c=a.sc;;)if(null!=c){var d;d=c.key;d=a.yb.a?a.yb.a(b,d):a.yb.call(null,b,d);if(0===d)return c;c=0>d?c.left:c.right}else return null}h.has=function(a){return vh(this,a)};h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){a=Xk(this,b);return null!=a?a.K:c};h.xd=function(a,b,c){return null!=this.sc?Rk(this.sc,b,c):c};h.U=function(){return this.H};
h.da=function(){return new Wk(this.yb,this.sc,this.G,this.H,this.w)};h.Z=function(){return this.G};h.yd=function(){return 0<this.G?Lk(this.sc,!1,this.G):null};h.T=function(){var a=this.w;return null!=a?a:this.w=a=wg(this)};h.M=function(a,b){return Vj(this,b)};h.pa=function(){return new Wk(this.yb,null,0,this.H,0)};h.ya=function(a,b){var c=[null],d=Uk(this.yb,this.sc,b,c);return null==d?null==Xg(c,0)?this:new Wk(this.yb,null,0,this.H,null):new Wk(this.yb,d.uc(),this.G-1,this.H,null)};
h.ra=function(a,b,c){a=[null];var d=Sk(this.yb,this.sc,b,c,a);return null==d?(a=Xg(a,0),qg.a(c,a.K)?this:new Wk(this.yb,Vk(this.yb,this.sc,b,c),this.G,this.H,null)):new Wk(this.yb,d.uc(),this.G+1,this.H,null)};h.Je=function(a,b){return null!=Xk(this,b)};h.Y=function(){return 0<this.G?Lk(this.sc,!0,this.G):null};h.V=function(a,b){return new Wk(this.yb,this.sc,this.G,b,this.w)};
h.X=function(a,b){if(lh(b))return Xe(this,A.a(b,0),A.a(b,1));for(var c=this,d=E(b);;){if(null==d)return c;var e=H(d);if(lh(e))c=Xe(c,A.a(e,0),A.a(e,1)),d=J(d);else throw Error("conj on a map takes map entries or seqables of map entries");}};
h.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.R(null,c);case 3:return this.P(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.R(null,c)};a.j=function(a,c,d){return this.P(null,c,d)};return a}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ce(b)))};h.g=function(a){return this.R(null,a)};h.a=function(a,b){return this.P(null,a,b)};var Yk=new Wk(zh,null,0,null,xg);Wk.prototype[Be]=function(){return sg(this)};
var Ti=function Ti(){return Ti.l(0<arguments.length?new F(Array.prototype.slice.call(arguments,0),0):null)};Ti.l=function(a){a=E(a);for(var b=Hf(gk);;)if(a){var c=J(J(a)),b=vi(b,H(a),Rg(a));a=c}else return Jf(b)};Ti.I=0;Ti.J=function(a){return Ti.l(E(a))};var Zk=function Zk(){return Zk.l(0<arguments.length?new F(Array.prototype.slice.call(arguments,0),0):null)};Zk.l=function(a){a=a instanceof F&&0===a.L?a.v:De(a);return hk(a,!0,!1)};Zk.I=0;Zk.J=function(a){return Zk.l(E(a))};
var $k=function $k(){return $k.l(0<arguments.length?new F(Array.prototype.slice.call(arguments,0),0):null)};$k.l=function(a){a=E(a);for(var b=Yk;;)if(a){var c=J(J(a)),b=R.j(b,H(a),Rg(a));a=c}else return b};$k.I=0;$k.J=function(a){return $k.l(E(a))};function al(a,b){this.fb=a;this.hb=b;this.B=32374988;this.O=0}h=al.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};h.U=function(){return this.hb};
h.$a=function(){var a=this.fb,a=(a?a.B&128||a.Le||(a.B?0:v(Se,a)):v(Se,a))?this.fb.$a(null):J(this.fb);return null==a?null:new al(a,this.hb)};h.T=function(){return ug(this)};h.M=function(a,b){return Kg(this,b)};h.pa=function(){return Ng(pg,this.hb)};h.Aa=function(a,b){return Og(b,this)};h.Ba=function(a,b,c){return Qg(b,c,this)};h.wa=function(){return this.fb.wa(null).Wd(null)};
h.Ia=function(){var a=this.fb,a=(a?a.B&128||a.Le||(a.B?0:v(Se,a)):v(Se,a))?this.fb.$a(null):J(this.fb);return null!=a?new al(a,this.hb):pg};h.Y=function(){return this};h.V=function(a,b){return new al(this.fb,b)};h.X=function(a,b){return Lg(b,this)};al.prototype[Be]=function(){return sg(this)};function Dh(a){return(a=E(a))?new al(a,null):null}function Vh(a){return af(a)}function cl(a,b){this.fb=a;this.hb=b;this.B=32374988;this.O=0}h=cl.prototype;h.toString=function(){return $f(this)};
h.equiv=function(a){return this.M(null,a)};h.U=function(){return this.hb};h.$a=function(){var a=this.fb,a=(a?a.B&128||a.Le||(a.B?0:v(Se,a)):v(Se,a))?this.fb.$a(null):J(this.fb);return null==a?null:new cl(a,this.hb)};h.T=function(){return ug(this)};h.M=function(a,b){return Kg(this,b)};h.pa=function(){return Ng(pg,this.hb)};h.Aa=function(a,b){return Og(b,this)};h.Ba=function(a,b,c){return Qg(b,c,this)};h.wa=function(){return this.fb.wa(null).Xd(null)};
h.Ia=function(){var a=this.fb,a=(a?a.B&128||a.Le||(a.B?0:v(Se,a)):v(Se,a))?this.fb.$a(null):J(this.fb);return null!=a?new cl(a,this.hb):pg};h.Y=function(){return this};h.V=function(a,b){return new cl(this.fb,b)};h.X=function(a,b){return Lg(b,this)};cl.prototype[Be]=function(){return sg(this)};function dk(a){return(a=E(a))?new cl(a,null):null}function Wh(a){return bf(a)}var dl=function dl(){return dl.l(0<arguments.length?new F(Array.prototype.slice.call(arguments,0),0):null)};
dl.l=function(a){return u(Ki(Kh,a))?Ih(function(a,c){return Tg.a(u(a)?a:X,c)},a):null};dl.I=0;dl.J=function(a){return dl.l(E(a))};var el=function el(){return el.l(arguments[0],1<arguments.length?new F(Array.prototype.slice.call(arguments,1),0):null)};el.l=function(a,b){return u(Ki(Kh,b))?Ih(function(a){return function(b,e){return Ee(a,u(b)?b:X,E(e))}}(function(b,d){var e=H(d),f=Rg(d);return vh(b,e)?R.j(b,e,function(){var d=Q(b,e);return a.a?a.a(d,f):a.call(null,d,f)}()):R.j(b,e,f)}),b):null};
el.I=1;el.J=function(a){var b=H(a);a=J(a);return el.l(b,a)};function fl(a,b){for(var c=X,d=E(b);;)if(d)var e=H(d),f=Yg(a,e,gl),c=xi.a(f,gl)?R.j(c,e,f):c,d=J(d);else return Ng(c,ch(a))}function hl(a,b,c){this.H=a;this.Oc=b;this.w=c;this.B=15077647;this.O=8196}h=hl.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};h.keys=function(){return sg(E(this))};h.entries=function(){return Zj(E(this))};h.values=function(){return sg(E(this))};
h.has=function(a){return vh(this,a)};h.forEach=function(a){for(var b=E(this),c=null,d=0,e=0;;)if(e<d){var f=c.ba(null,e),g=N(f,0),f=N(f,1);a.a?a.a(f,g):a.call(null,f,g);e+=1}else if(b=E(b))mh(b)?(c=Pf(b),b=Qf(b),g=c,d=M(c),c=g):(c=H(b),g=N(c,0),c=f=N(c,1),a.a?a.a(c,g):a.call(null,c,g),b=J(b),c=null,d=0),e=0;else return null};h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){return We(this.Oc,b)?b:c};h.U=function(){return this.H};h.da=function(){return new hl(this.H,this.Oc,this.w)};
h.Z=function(){return Ke(this.Oc)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=wg(this)};h.M=function(a,b){return hh(b)&&M(this)===M(b)&&Ji(function(a){return function(b){return vh(a,b)}}(this),b)};h.wd=function(){return new il(Hf(this.Oc))};h.pa=function(){return Ng(jl,this.H)};h.Cf=function(a,b){return new hl(this.H,Ze(this.Oc,b),null)};h.Y=function(){return Dh(this.Oc)};h.V=function(a,b){return new hl(b,this.Oc,this.w)};h.X=function(a,b){return new hl(this.H,R.j(this.Oc,b,null),null)};
h.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.R(null,c);case 3:return this.P(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.R(null,c)};a.j=function(a,c,d){return this.P(null,c,d)};return a}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ce(b)))};h.g=function(a){return this.R(null,a)};h.a=function(a,b){return this.P(null,a,b)};var jl=new hl(null,X,xg);
function yh(a){var b=a.length;if(b<=fk)for(var c=0,d=Hf(X);;)if(c<b)var e=c+1,d=Kf(d,a[c],null),c=e;else return new hl(null,Jf(d),null);else for(c=0,d=Hf(jl);;)if(c<b)e=c+1,d=If(d,a[c]),c=e;else return Jf(d)}hl.prototype[Be]=function(){return sg(this)};function il(a){this.Gc=a;this.O=136;this.B=259}h=il.prototype;h.Zc=function(a,b){this.Gc=Kf(this.Gc,b,null);return this};h.zd=function(){return new hl(null,Jf(this.Gc),null)};h.Z=function(){return M(this.Gc)};h.R=function(a,b){return Ue.j(this,b,null)};
h.P=function(a,b,c){return Ue.j(this.Gc,b,ph)===ph?c:b};h.call=function(){function a(a,b,c){return Ue.j(this.Gc,b,ph)===ph?c:b}function b(a,b){return Ue.j(this.Gc,b,ph)===ph?null:b}var c=null,c=function(c,e,f){switch(arguments.length){case 2:return b.call(this,c,e);case 3:return a.call(this,c,e,f)}throw Error("Invalid arity: "+arguments.length);};c.a=b;c.j=a;return c}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ce(b)))};h.g=function(a){return Ue.j(this.Gc,a,ph)===ph?null:a};
h.a=function(a,b){return Ue.j(this.Gc,a,ph)===ph?b:a};function kl(a,b,c){this.H=a;this.tc=b;this.w=c;this.B=417730831;this.O=8192}h=kl.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};h.keys=function(){return sg(E(this))};h.entries=function(){return Zj(E(this))};h.values=function(){return sg(E(this))};h.has=function(a){return vh(this,a)};
h.forEach=function(a){for(var b=E(this),c=null,d=0,e=0;;)if(e<d){var f=c.ba(null,e),g=N(f,0),f=N(f,1);a.a?a.a(f,g):a.call(null,f,g);e+=1}else if(b=E(b))mh(b)?(c=Pf(b),b=Qf(b),g=c,d=M(c),c=g):(c=H(b),g=N(c,0),c=f=N(c,1),a.a?a.a(c,g):a.call(null,c,g),b=J(b),c=null,d=0),e=0;else return null};h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){a=Xk(this.tc,b);return null!=a?a.key:c};h.U=function(){return this.H};h.da=function(){return new kl(this.H,this.tc,this.w)};h.Z=function(){return M(this.tc)};
h.yd=function(){return 0<M(this.tc)?Y.a(Vh,Af(this.tc)):null};h.T=function(){var a=this.w;return null!=a?a:this.w=a=wg(this)};h.M=function(a,b){return hh(b)&&M(this)===M(b)&&Ji(function(a){return function(b){return vh(a,b)}}(this),b)};h.pa=function(){return new kl(this.H,Le(this.tc),0)};h.Cf=function(a,b){return new kl(this.H,$g.a(this.tc,b),null)};h.Y=function(){return Dh(this.tc)};h.V=function(a,b){return new kl(b,this.tc,this.w)};h.X=function(a,b){return new kl(this.H,R.j(this.tc,b,null),null)};
h.call=function(){var a=null,a=function(a,c,d){switch(arguments.length){case 2:return this.R(null,c);case 3:return this.P(null,c,d)}throw Error("Invalid arity: "+arguments.length);};a.a=function(a,c){return this.R(null,c)};a.j=function(a,c,d){return this.P(null,c,d)};return a}();h.apply=function(a,b){return this.call.apply(this,[this].concat(Ce(b)))};h.g=function(a){return this.R(null,a)};h.a=function(a,b){return this.P(null,a,b)};var ll=new kl(null,Yk,xg);kl.prototype[Be]=function(){return sg(this)};
function ml(a){a=E(a);if(null==a)return jl;if(a instanceof F&&0===a.L){a=a.v;a:for(var b=0,c=Hf(jl);;)if(b<a.length)var d=b+1,c=c.Zc(null,a[b]),b=d;else break a;return c.zd(null)}for(d=Hf(jl);;)if(null!=a)b=J(a),d=d.Zc(null,a.wa(null)),a=b;else return Jf(d)}var nl=function nl(){switch(arguments.length){case 0:return nl.C();default:return nl.l(new F(Array.prototype.slice.call(arguments,0),0))}};nl.C=function(){return jl};nl.l=function(a){return ml(a)};nl.J=function(a){return nl.l(E(a))};nl.I=0;
function ol(){return Ee(z,ll,0<arguments.length?new F(Array.prototype.slice.call(arguments,0),0):null)}function ei(a){if(a&&(a.O&4096||a.Mh))return a.Yd(null);if("string"===typeof a)return a;throw Error([y("Doesn't support name: "),y(a)].join(""));}function pl(a,b){for(var c=Hf(X),d=E(a),e=E(b);;)if(d&&e)c=vi(c,H(d),H(e)),d=J(d),e=J(e);else return Jf(c)}
var ql=function ql(){switch(arguments.length){case 2:return ql.a(arguments[0],arguments[1]);case 3:return ql.j(arguments[0],arguments[1],arguments[2]);default:return ql.l(arguments[0],arguments[1],arguments[2],new F(Array.prototype.slice.call(arguments,3),0))}};ql.a=function(a,b){return b};ql.j=function(a,b,c){return(a.g?a.g(b):a.call(null,b))>(a.g?a.g(c):a.call(null,c))?b:c};ql.l=function(a,b,c,d){return Ee(function(b,c){return ql.j(a,b,c)},ql.j(a,b,c),d)};
ql.J=function(a){var b=H(a),c=J(a);a=H(c);var d=J(c),c=H(d),d=J(d);return ql.l(b,a,c,d)};ql.I=3;function rl(a,b){return new fi(null,function(){var c=E(b);if(c){var d;d=H(c);d=a.g?a.g(d):a.call(null,d);c=u(d)?Lg(H(c),rl(a,og(c))):null}else c=null;return c},null,null)}function sl(a,b,c){this.L=a;this.end=b;this.step=c}sl.prototype.mc=function(){return 0<this.step?this.L<this.end:this.L>this.end};sl.prototype.next=function(){var a=this.L;this.L+=this.step;return a};
function tl(a,b,c,d,e){this.H=a;this.start=b;this.end=c;this.step=d;this.w=e;this.B=32375006;this.O=8192}h=tl.prototype;h.toString=function(){return $f(this)};h.equiv=function(a){return this.M(null,a)};h.ba=function(a,b){if(b<Ke(this))return this.start+b*this.step;if(this.start>this.end&&0===this.step)return this.start;throw Error("Index out of bounds");};h.ib=function(a,b,c){return b<Ke(this)?this.start+b*this.step:this.start>this.end&&0===this.step?this.start:c};h.Ke=!0;
h.Vd=function(){return new sl(this.start,this.end,this.step)};h.U=function(){return this.H};h.da=function(){return new tl(this.H,this.start,this.end,this.step,this.w)};h.$a=function(){return 0<this.step?this.start+this.step<this.end?new tl(this.H,this.start+this.step,this.end,this.step,null):null:this.start+this.step>this.end?new tl(this.H,this.start+this.step,this.end,this.step,null):null};h.Z=function(){return xe(wf(this))?0:Math.ceil((this.end-this.start)/this.step)};
h.T=function(){var a=this.w;return null!=a?a:this.w=a=ug(this)};h.M=function(a,b){return Kg(this,b)};h.pa=function(){return Ng(pg,this.H)};h.Aa=function(a,b){return Bg(this,b)};h.Ba=function(a,b,c){for(a=this.start;;)if(0<this.step?a<this.end:a>this.end){var d=a;c=b.a?b.a(c,d):b.call(null,c,d);if(Ag(c))return b=c,K.g?K.g(b):K.call(null,b);a+=this.step}else return c};h.wa=function(){return null==wf(this)?null:this.start};
h.Ia=function(){return null!=wf(this)?new tl(this.H,this.start+this.step,this.end,this.step,null):pg};h.Y=function(){return 0<this.step?this.start<this.end?this:null:this.start>this.end?this:null};h.V=function(a,b){return new tl(b,this.start,this.end,this.step,this.w)};h.X=function(a,b){return Lg(b,this)};tl.prototype[Be]=function(){return sg(this)};function ul(a){return new tl(null,0,a,1,null)}function vl(a,b){return new T(null,2,5,U,[rl(a,b),bj(a,b)],null)}
function wl(a,b){return function(){function c(c,d,e){return new T(null,2,5,U,[a.j?a.j(c,d,e):a.call(null,c,d,e),b.j?b.j(c,d,e):b.call(null,c,d,e)],null)}function d(c,d){return new T(null,2,5,U,[a.a?a.a(c,d):a.call(null,c,d),b.a?b.a(c,d):b.call(null,c,d)],null)}function e(c){return new T(null,2,5,U,[a.g?a.g(c):a.call(null,c),b.g?b.g(c):b.call(null,c)],null)}function f(){return new T(null,2,5,U,[a.C?a.C():a.call(null),b.C?b.C():b.call(null)],null)}var g=null,k=function(){function c(a,b,e,f){var g=null;
if(3<arguments.length){for(var g=0,k=Array(arguments.length-3);g<k.length;)k[g]=arguments[g+3],++g;g=new F(k,0)}return d.call(this,a,b,e,g)}function d(c,e,f,g){return new T(null,2,5,U,[S.W(a,c,e,f,g),S.W(b,c,e,f,g)],null)}c.I=3;c.J=function(a){var b=H(a);a=J(a);var c=H(a);a=J(a);var e=H(a);a=og(a);return d(b,c,e,a)};c.l=d;return c}(),g=function(a,b,g,q){switch(arguments.length){case 0:return f.call(this);case 1:return e.call(this,a);case 2:return d.call(this,a,b);case 3:return c.call(this,a,b,g);
default:var r=null;if(3<arguments.length){for(var r=0,w=Array(arguments.length-3);r<w.length;)w[r]=arguments[r+3],++r;r=new F(w,0)}return k.l(a,b,g,r)}throw Error("Invalid arity: "+arguments.length);};g.I=3;g.J=k.J;g.C=f;g.g=e;g.a=d;g.j=c;g.l=k.l;return g}()}function xl(a){a:for(var b=a;;)if(E(b))b=J(b);else break a;return a}function yl(a,b){if("string"===typeof b){var c=a.exec(b);return qg.a(H(c),b)?1===M(c)?H(c):Gj(c):null}throw new TypeError("re-matches must match against a string.");}
function zl(a,b){if("string"===typeof b){var c=a.exec(b);return null==c?null:1===M(c)?H(c):Gj(c)}throw new TypeError("re-find must match against a string.");}function Al(a){if(a instanceof RegExp)return a;var b=zl(/^\(\?([idmsux]*)\)/,a),c=N(b,0),b=N(b,1);a=Th(a,M(c));return new RegExp(a,u(b)?b:"")}
function Bl(a,b,c,d,e,f,g){var k=me;me=null==me?null:me-1;try{if(null!=me&&0>me)return Cf(a,"#");Cf(a,c);if(0===ue.g(f))E(g)&&Cf(a,function(){var a=Cl.g(f);return u(a)?a:"..."}());else{if(E(g)){var l=H(g);b.j?b.j(l,a,f):b.call(null,l,a,f)}for(var m=J(g),p=ue.g(f)-1;;)if(!m||null!=p&&0===p){E(m)&&0===p&&(Cf(a,d),Cf(a,function(){var a=Cl.g(f);return u(a)?a:"..."}()));break}else{Cf(a,d);var q=H(m);c=a;g=f;b.j?b.j(q,c,g):b.call(null,q,c,g);var r=J(m);c=p-1;m=r;p=c}}return Cf(a,e)}finally{me=k}}
function Dl(a,b){for(var c=E(b),d=null,e=0,f=0;;)if(f<e){var g=d.ba(null,f);Cf(a,g);f+=1}else if(c=E(c))d=c,mh(d)?(c=Pf(d),e=Qf(d),d=c,g=M(c),c=e,e=g):(g=H(d),Cf(a,g),c=J(d),d=null,e=0),f=0;else return null}var El={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"};function Fl(a){return[y('"'),y(a.replace(RegExp('[\\\\"\b\f\n\r\t]',"g"),function(a){return El[a]})),y('"')].join("")}
function Gl(a,b,c){if(null==a)return Cf(b,"nil");if(void 0===a)return Cf(b,"#\x3cundefined\x3e");if(u(function(){var b=Q(c,se);return u(b)?(b=a?a.B&131072||a.Lh?!0:a.B?!1:v(mf,a):v(mf,a))?ch(a):b:b}())){Cf(b,"^");var d=ch(a);Hl.j?Hl.j(d,b,c):Hl.call(null,d,b,c);Cf(b," ")}return null==a?Cf(b,"nil"):a.bd?a.Cd(a,b,c):a&&(a.B&2147483648||a.ha)?a.S(null,b,c):ze(a)===Boolean||"number"===typeof a?Cf(b,""+y(a)):null!=a&&a.constructor===Object?(Cf(b,"#js "),d=Y.a(function(b){return new T(null,2,5,U,[di.g(b),
a[b]],null)},nh(a)),Il.N?Il.N(d,Hl,b,c):Il.call(null,d,Hl,b,c)):we(a)?Bl(b,Hl,"#js ["," ","]",c,a):u(ea(a))?u(re.g(c))?Cf(b,Fl(a)):Cf(b,a):ah(a)?Dl(b,L(["#\x3c",""+y(a),"\x3e"],0)):a instanceof Date?(d=function(a,b){for(var c=""+y(a);;)if(M(c)<b)c=[y("0"),y(c)].join("");else return c},Dl(b,L(['#inst "',""+y(a.getUTCFullYear()),"-",d(a.getUTCMonth()+1,2),"-",d(a.getUTCDate(),2),"T",d(a.getUTCHours(),2),":",d(a.getUTCMinutes(),2),":",d(a.getUTCSeconds(),2),".",d(a.getUTCMilliseconds(),3),"-",'00:00"'],
0))):u(a instanceof RegExp)?Dl(b,L(['#"',a.source,'"'],0)):(a?a.B&2147483648||a.ha||(a.B?0:v(Ef,a)):v(Ef,a))?Ff(a,b,c):Dl(b,L(["#\x3c",""+y(a),"\x3e"],0))}function Hl(a,b,c){var d=Jl.g(c);return u(d)?(c=R.j(c,Kl,Gl),d.j?d.j(a,b,c):d.call(null,a,b,c)):Gl(a,b,c)}var Wi=function Wi(){return Wi.l(0<arguments.length?new F(Array.prototype.slice.call(arguments,0),0):null)};
Wi.l=function(a){var b=pe();if(fh(a))b="";else{var c=y,d=new je;a:{var e=new Zf(d);Hl(H(a),e,b);a=E(J(a));for(var f=null,g=0,k=0;;)if(k<g){var l=f.ba(null,k);Cf(e," ");Hl(l,e,b);k+=1}else if(a=E(a))f=a,mh(f)?(a=Pf(f),g=Qf(f),f=a,l=M(a),a=g,g=l):(l=H(f),Cf(e," "),Hl(l,e,b),a=J(f),f=null,g=0),k=0;else break a}b=""+c(d)}return b};Wi.I=0;Wi.J=function(a){return Wi.l(E(a))};
function Il(a,b,c,d){return Bl(c,function(a,c,d){var k=af(a);b.j?b.j(k,c,d):b.call(null,k,c,d);Cf(c," ");a=bf(a);return b.j?b.j(a,c,d):b.call(null,a,c,d)},"{",", ","}",d,E(a))}Yi.prototype.ha=!0;Yi.prototype.S=function(a,b,c){Cf(b,"#\x3cVolatile: ");Hl(this.state,b,c);return Cf(b,"\x3e")};F.prototype.ha=!0;F.prototype.S=function(a,b,c){return Bl(b,Hl,"("," ",")",c,this)};fi.prototype.ha=!0;fi.prototype.S=function(a,b,c){return Bl(b,Hl,"("," ",")",c,this)};Kk.prototype.ha=!0;
Kk.prototype.S=function(a,b,c){return Bl(b,Hl,"("," ",")",c,this)};Bk.prototype.ha=!0;Bk.prototype.S=function(a,b,c){return Bl(b,Hl,"("," ",")",c,this)};Ok.prototype.ha=!0;Ok.prototype.S=function(a,b,c){return Bl(b,Hl,"["," ","]",c,this)};bk.prototype.ha=!0;bk.prototype.S=function(a,b,c){return Bl(b,Hl,"("," ",")",c,this)};kl.prototype.ha=!0;kl.prototype.S=function(a,b,c){return Bl(b,Hl,"#{"," ","}",c,this)};Ij.prototype.ha=!0;Ij.prototype.S=function(a,b,c){return Bl(b,Hl,"("," ",")",c,this)};
ai.prototype.ha=!0;ai.prototype.S=function(a,b,c){return Bl(b,Hl,"("," ",")",c,this)};Jg.prototype.ha=!0;Jg.prototype.S=function(a,b,c){return Bl(b,Hl,"("," ",")",c,this)};Fk.prototype.ha=!0;Fk.prototype.S=function(a,b,c){return Il(this,Hl,b,c)};Dk.prototype.ha=!0;Dk.prototype.S=function(a,b,c){return Bl(b,Hl,"("," ",")",c,this)};Mj.prototype.ha=!0;Mj.prototype.S=function(a,b,c){return Bl(b,Hl,"["," ","]",c,this)};Wk.prototype.ha=!0;Wk.prototype.S=function(a,b,c){return Il(this,Hl,b,c)};
hl.prototype.ha=!0;hl.prototype.S=function(a,b,c){return Bl(b,Hl,"#{"," ","}",c,this)};ki.prototype.ha=!0;ki.prototype.S=function(a,b,c){return Bl(b,Hl,"("," ",")",c,this)};Qi.prototype.ha=!0;Qi.prototype.S=function(a,b,c){Cf(b,"#\x3cAtom: ");Hl(this.state,b,c);return Cf(b,"\x3e")};cl.prototype.ha=!0;cl.prototype.S=function(a,b,c){return Bl(b,Hl,"("," ",")",c,this)};Nk.prototype.ha=!0;Nk.prototype.S=function(a,b,c){return Bl(b,Hl,"["," ","]",c,this)};T.prototype.ha=!0;
T.prototype.S=function(a,b,c){return Bl(b,Hl,"["," ","]",c,this)};Qj.prototype.ha=!0;Qj.prototype.S=function(a,b,c){return Bl(b,Hl,"("," ",")",c,this)};Yh.prototype.ha=!0;Yh.prototype.S=function(a,b){return Cf(b,"()")};Ii.prototype.ha=!0;Ii.prototype.S=function(a,b,c){return Bl(b,Hl,"("," ",")",c,this)};Rj.prototype.ha=!0;Rj.prototype.S=function(a,b,c){return Bl(b,Hl,"#queue ["," ","]",c,E(this))};t.prototype.ha=!0;t.prototype.S=function(a,b,c){return Il(this,Hl,b,c)};tl.prototype.ha=!0;
tl.prototype.S=function(a,b,c){return Bl(b,Hl,"("," ",")",c,this)};al.prototype.ha=!0;al.prototype.S=function(a,b,c){return Bl(b,Hl,"("," ",")",c,this)};Xh.prototype.ha=!0;Xh.prototype.S=function(a,b,c){return Bl(b,Hl,"("," ",")",c,this)};C.prototype.Yc=!0;C.prototype.wc=function(a,b){if(b instanceof C)return lg(this,b);throw Error([y("Cannot compare "),y(this),y(" to "),y(b)].join(""));};V.prototype.Yc=!0;
V.prototype.wc=function(a,b){if(b instanceof V)return bi(this,b);throw Error([y("Cannot compare "),y(this),y(" to "),y(b)].join(""));};Mj.prototype.Yc=!0;Mj.prototype.wc=function(a,b){if(lh(b))return Ah(this,b);throw Error([y("Cannot compare "),y(this),y(" to "),y(b)].join(""));};T.prototype.Yc=!0;T.prototype.wc=function(a,b){if(lh(b))return Ah(this,b);throw Error([y("Cannot compare "),y(this),y(" to "),y(b)].join(""));};var Ll=null;
function Ml(){null==Ll&&(Ll=Si?Si(0):Ri.call(null,0));return mg([y("G__"),y(Xi.a(Ll,yg))].join(""))}function Nl(a,b){this.ab=a;this.value=b;this.B=32768;this.O=1}Nl.prototype.vd=function(){u(this.ab)&&(this.value=this.ab.C?this.ab.C():this.ab.call(null),this.ab=null);return this.value};function Ol(a){return function(b,c){var d=a.a?a.a(b,c):a.call(null,b,c);return Ag(d)?new zg(d):d}}
function Pl(a){return function(b){return function(){function c(a,c){return Ee(b,a,c)}function d(b){return a.g?a.g(b):a.call(null,b)}function e(){return a.C?a.C():a.call(null)}var f=null,f=function(a,b){switch(arguments.length){case 0:return e.call(this);case 1:return d.call(this,a);case 2:return c.call(this,a,b)}throw Error("Invalid arity: "+arguments.length);};f.C=e;f.g=d;f.a=c;return f}()}(Ol(a))}
var Ql={},Rl=function Rl(b){if(b?b.Hh:b)return b.Hh(b);var c;c=Rl[n(null==b?null:b)];if(!c&&(c=Rl._,!c))throw x("IEncodeJS.-clj-\x3ejs",b);return c.call(null,b)};function Sl(a){return(a?u(u(null)?null:a.Gh)||(a.xc?0:v(Ql,a)):v(Ql,a))?Rl(a):"string"===typeof a||"number"===typeof a||a instanceof V||a instanceof C?Tl.g?Tl.g(a):Tl.call(null,a):Wi.l(L([a],0))}
var Tl=function Tl(b){if(null==b)return null;if(b?u(u(null)?null:b.Gh)||(b.xc?0:v(Ql,b)):v(Ql,b))return Rl(b);if(b instanceof V)return ei(b);if(b instanceof C)return""+y(b);if(kh(b)){var c={};b=E(b);for(var d=null,e=0,f=0;;)if(f<e){var g=d.ba(null,f),k=N(g,0),g=N(g,1);c[Sl(k)]=Tl(g);f+=1}else if(b=E(b))mh(b)?(e=Pf(b),b=Qf(b),d=e,e=M(e)):(e=H(b),d=N(e,0),e=N(e,1),c[Sl(d)]=Tl(e),b=J(b),d=null,e=0),f=0;else break;return c}if(gh(b)){c=[];b=E(Y.a(Tl,b));d=null;for(f=e=0;;)if(f<e)k=d.ba(null,f),c.push(k),
f+=1;else if(b=E(b))d=b,mh(d)?(b=Pf(d),f=Qf(d),d=b,e=M(b),b=f):(b=H(d),c.push(b),b=J(d),d=null,e=0),f=0;else break;return c}return b},Ul={},Vl=function Vl(b,c){if(b?b.Fh:b)return b.Fh(b,c);var d;d=Vl[n(null==b?null:b)];if(!d&&(d=Vl._,!d))throw x("IEncodeClojure.-js-\x3eclj",b);return d.call(null,b,c)};
function Wl(a){var b=L([new t(null,1,[Xl,!1],null)],0),c=rh(b)?S.a(Ti,b):b,d=Q(c,Xl);return function(a,c,d,k){return function m(p){return(p?u(u(null)?null:p.Gl)||(p.xc?0:v(Ul,p)):v(Ul,p))?Vl(p,S.a(Zk,b)):rh(p)?xl(Y.a(m,p)):gh(p)?hj.a(Vg(p),Y.a(m,p)):we(p)?Gj(Y.a(m,p)):ze(p)===Object?hj.a(X,function(){return function(a,b,c,d){return function G(e){return new fi(null,function(a,b,c,d){return function(){for(;;){var a=E(e);if(a){if(mh(a)){var b=Pf(a),c=M(b),f=ji(c);return function(){for(var a=0;;)if(a<
c){var e=A.a(b,a),g=f,k=U,r;r=e;r=d.g?d.g(r):d.call(null,r);e=new T(null,2,5,k,[r,m(p[e])],null);g.add(e);a+=1}else return!0}()?li(ni(f),G(Qf(a))):li(ni(f),null)}var g=H(a);return Lg(new T(null,2,5,U,[function(){var a=g;return d.g?d.g(a):d.call(null,a)}(),m(p[g])],null),G(og(a)))}return null}}}(a,b,c,d),null,null)}}(a,c,d,k)(nh(p))}()):p}}(b,c,d,u(d)?di:y)(a)}
function Yl(){var a=Zl;return function(b){return function(){function c(a){var b=null;if(0<arguments.length){for(var b=0,c=Array(arguments.length-0);b<c.length;)c[b]=arguments[b+0],++b;b=new F(c,0)}return d.call(this,b)}function d(c){var d=Yg(K.g?K.g(b):K.call(null,b),c,ph);d===ph&&(d=S.a(a,c),Xi.N(b,R,c,d));return d}c.I=0;c.J=function(a){a=E(a);return d(a)};c.l=d;return c}()}(function(){var a=X;return Si?Si(a):Ri.call(null,a)}())}
function $l(a,b){return ti(Ee(function(b,d){var e=a.g?a.g(d):a.call(null,d);return vi(b,e,Tg.a(Yg(b,e,Ug),d))},Hf(X),b))}var am=null;function bm(){if(null==am){var a=new t(null,3,[cm,X,dm,X,em,X],null);am=Si?Si(a):Ri.call(null,a)}return am}
function fm(a,b,c){var d=qg.a(b,c);if(!d&&!(d=vh(em.g(a).call(null,b),c))&&(d=lh(c))&&(d=lh(b)))if(d=M(c)===M(b))for(var e=!0,f=0;;)if(e&&f!==M(c))e=fm(a,function(){var a=f;return b.g?b.g(a):b.call(null,a)}(),function(){var a=f;return c.g?c.g(a):c.call(null,a)}()),f=d=f+1;else return e;else return d;else return d}function gm(a){var b;b=bm();b=K.g?K.g(b):K.call(null,b);return yi(Q(cm.g(b),a))}
function hm(a,b,c,d){Xi.a(a,function(){return K.g?K.g(b):K.call(null,b)});Xi.a(c,function(){return K.g?K.g(d):K.call(null,d)})}var im=function im(b,c,d){var e=(K.g?K.g(d):K.call(null,d)).call(null,b),e=u(u(e)?e.g?e.g(c):e.call(null,c):e)?!0:null;if(u(e))return e;e=function(){for(var e=gm(c);;)if(0<M(e))im(b,H(e),d),e=og(e);else return null}();if(u(e))return e;e=function(){for(var e=gm(b);;)if(0<M(e))im(H(e),c,d),e=og(e);else return null}();return u(e)?e:!1};
function jm(a,b,c){c=im(a,b,c);if(u(c))a=c;else{c=fm;var d;d=bm();d=K.g?K.g(d):K.call(null,d);a=c(d,a,b)}return a}
var km=function km(b,c,d,e,f,g,k){var l=Ee(function(e,g){var k=N(g,0);N(g,1);if(fm(K.g?K.g(d):K.call(null,d),c,k)){var l;l=(l=null==e)?l:jm(k,H(e),f);l=u(l)?g:e;if(!u(jm(H(l),k,f)))throw Error([y("Multiple methods in multimethod '"),y(b),y("' match dispatch value: "),y(c),y(" -\x3e "),y(k),y(" and "),y(H(l)),y(", and neither is preferred")].join(""));return l}return e},null,K.g?K.g(e):K.call(null,e));if(u(l)){if(qg.a(K.g?K.g(k):K.call(null,k),K.g?K.g(d):K.call(null,d)))return Xi.N(g,R,c,Rg(l)),Rg(l);
hm(g,e,k,d);return km(b,c,d,e,f,g,k)}return null};function lm(a,b){throw Error([y("No method in multimethod '"),y(a),y("' for dispatch value: "),y(b)].join(""));}function mm(a,b,c,d,e,f,g,k){this.name=a;this.F=b;this.ai=c;this.Ue=d;this.qe=e;this.Ji=f;this.Ze=g;this.Fe=k;this.B=4194305;this.O=4352}h=mm.prototype;
h.call=function(){function a(a,b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I,P,O,ha,Ga){a=this;var Da=S.l(a.F,b,c,d,e,L([f,g,k,l,m,p,r,q,D,w,G,B,I,P,O,ha,Ga],0)),bl=nm(this,Da);u(bl)||lm(a.name,Da);return S.l(bl,b,c,d,e,L([f,g,k,l,m,p,r,q,D,w,G,B,I,P,O,ha,Ga],0))}function b(a,b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I,P,O,ha){a=this;var Ga=a.F.Ta?a.F.Ta(b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I,P,O,ha):a.F.call(null,b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I,P,O,ha),Da=nm(this,Ga);u(Da)||lm(a.name,Ga);return Da.Ta?Da.Ta(b,c,d,e,f,g,k,
l,m,p,r,q,D,w,G,B,I,P,O,ha):Da.call(null,b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I,P,O,ha)}function c(a,b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I,P,O){a=this;var ha=a.F.Sa?a.F.Sa(b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I,P,O):a.F.call(null,b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I,P,O),Ga=nm(this,ha);u(Ga)||lm(a.name,ha);return Ga.Sa?Ga.Sa(b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I,P,O):Ga.call(null,b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I,P,O)}function d(a,b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I,P){a=this;var O=a.F.Ra?a.F.Ra(b,c,d,e,f,g,k,l,m,p,r,q,
D,w,G,B,I,P):a.F.call(null,b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I,P),ha=nm(this,O);u(ha)||lm(a.name,O);return ha.Ra?ha.Ra(b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I,P):ha.call(null,b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I,P)}function e(a,b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I){a=this;var P=a.F.Qa?a.F.Qa(b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I):a.F.call(null,b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I),O=nm(this,P);u(O)||lm(a.name,P);return O.Qa?O.Qa(b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I):O.call(null,b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B,I)}function f(a,
b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B){a=this;var I=a.F.Pa?a.F.Pa(b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B):a.F.call(null,b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B),P=nm(this,I);u(P)||lm(a.name,I);return P.Pa?P.Pa(b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B):P.call(null,b,c,d,e,f,g,k,l,m,p,r,q,D,w,G,B)}function g(a,b,c,d,e,f,g,k,l,m,p,r,q,D,w,G){a=this;var B=a.F.Oa?a.F.Oa(b,c,d,e,f,g,k,l,m,p,r,q,D,w,G):a.F.call(null,b,c,d,e,f,g,k,l,m,p,r,q,D,w,G),I=nm(this,B);u(I)||lm(a.name,B);return I.Oa?I.Oa(b,c,d,e,f,g,k,l,m,p,r,q,D,w,G):I.call(null,
b,c,d,e,f,g,k,l,m,p,r,q,D,w,G)}function k(a,b,c,d,e,f,g,k,l,m,p,r,q,D,w){a=this;var G=a.F.Na?a.F.Na(b,c,d,e,f,g,k,l,m,p,r,q,D,w):a.F.call(null,b,c,d,e,f,g,k,l,m,p,r,q,D,w),B=nm(this,G);u(B)||lm(a.name,G);return B.Na?B.Na(b,c,d,e,f,g,k,l,m,p,r,q,D,w):B.call(null,b,c,d,e,f,g,k,l,m,p,r,q,D,w)}function l(a,b,c,d,e,f,g,k,l,m,p,r,q,D){a=this;var w=a.F.Ma?a.F.Ma(b,c,d,e,f,g,k,l,m,p,r,q,D):a.F.call(null,b,c,d,e,f,g,k,l,m,p,r,q,D),G=nm(this,w);u(G)||lm(a.name,w);return G.Ma?G.Ma(b,c,d,e,f,g,k,l,m,p,r,q,D):
G.call(null,b,c,d,e,f,g,k,l,m,p,r,q,D)}function m(a,b,c,d,e,f,g,k,l,m,p,r,q){a=this;var D=a.F.La?a.F.La(b,c,d,e,f,g,k,l,m,p,r,q):a.F.call(null,b,c,d,e,f,g,k,l,m,p,r,q),w=nm(this,D);u(w)||lm(a.name,D);return w.La?w.La(b,c,d,e,f,g,k,l,m,p,r,q):w.call(null,b,c,d,e,f,g,k,l,m,p,r,q)}function p(a,b,c,d,e,f,g,k,l,m,p,r){a=this;var q=a.F.Ka?a.F.Ka(b,c,d,e,f,g,k,l,m,p,r):a.F.call(null,b,c,d,e,f,g,k,l,m,p,r),D=nm(this,q);u(D)||lm(a.name,q);return D.Ka?D.Ka(b,c,d,e,f,g,k,l,m,p,r):D.call(null,b,c,d,e,f,g,k,l,
m,p,r)}function q(a,b,c,d,e,f,g,k,l,m,p){a=this;var r=a.F.Ja?a.F.Ja(b,c,d,e,f,g,k,l,m,p):a.F.call(null,b,c,d,e,f,g,k,l,m,p),q=nm(this,r);u(q)||lm(a.name,r);return q.Ja?q.Ja(b,c,d,e,f,g,k,l,m,p):q.call(null,b,c,d,e,f,g,k,l,m,p)}function r(a,b,c,d,e,f,g,k,l,m){a=this;var p=a.F.Wa?a.F.Wa(b,c,d,e,f,g,k,l,m):a.F.call(null,b,c,d,e,f,g,k,l,m),r=nm(this,p);u(r)||lm(a.name,p);return r.Wa?r.Wa(b,c,d,e,f,g,k,l,m):r.call(null,b,c,d,e,f,g,k,l,m)}function w(a,b,c,d,e,f,g,k,l){a=this;var m=a.F.Va?a.F.Va(b,c,d,e,
f,g,k,l):a.F.call(null,b,c,d,e,f,g,k,l),p=nm(this,m);u(p)||lm(a.name,m);return p.Va?p.Va(b,c,d,e,f,g,k,l):p.call(null,b,c,d,e,f,g,k,l)}function B(a,b,c,d,e,f,g,k){a=this;var l=a.F.Ua?a.F.Ua(b,c,d,e,f,g,k):a.F.call(null,b,c,d,e,f,g,k),m=nm(this,l);u(m)||lm(a.name,l);return m.Ua?m.Ua(b,c,d,e,f,g,k):m.call(null,b,c,d,e,f,g,k)}function I(a,b,c,d,e,f,g){a=this;var k=a.F.ga?a.F.ga(b,c,d,e,f,g):a.F.call(null,b,c,d,e,f,g),l=nm(this,k);u(l)||lm(a.name,k);return l.ga?l.ga(b,c,d,e,f,g):l.call(null,b,c,d,e,f,
g)}function G(a,b,c,d,e,f){a=this;var g=a.F.W?a.F.W(b,c,d,e,f):a.F.call(null,b,c,d,e,f),k=nm(this,g);u(k)||lm(a.name,g);return k.W?k.W(b,c,d,e,f):k.call(null,b,c,d,e,f)}function O(a,b,c,d,e){a=this;var f=a.F.N?a.F.N(b,c,d,e):a.F.call(null,b,c,d,e),g=nm(this,f);u(g)||lm(a.name,f);return g.N?g.N(b,c,d,e):g.call(null,b,c,d,e)}function P(a,b,c,d){a=this;var e=a.F.j?a.F.j(b,c,d):a.F.call(null,b,c,d),f=nm(this,e);u(f)||lm(a.name,e);return f.j?f.j(b,c,d):f.call(null,b,c,d)}function ha(a,b,c){a=this;var d=
a.F.a?a.F.a(b,c):a.F.call(null,b,c),e=nm(this,d);u(e)||lm(a.name,d);return e.a?e.a(b,c):e.call(null,b,c)}function Da(a,b){a=this;var c=a.F.g?a.F.g(b):a.F.call(null,b),d=nm(this,c);u(d)||lm(a.name,c);return d.g?d.g(b):d.call(null,b)}function Ga(a){a=this;var b=a.F.C?a.F.C():a.F.call(null),c=nm(this,b);u(c)||lm(a.name,b);return c.C?c.C():c.call(null)}var D=null,D=function(D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb,gc,Bb,Nb,Yb,Zb,oe,Df,Re){switch(arguments.length){case 1:return Ga.call(this,D);case 2:return Da.call(this,
D,Ca);case 3:return ha.call(this,D,Ca,Fa);case 4:return P.call(this,D,Ca,Fa,Pa);case 5:return O.call(this,D,Ca,Fa,Pa,Ua);case 6:return G.call(this,D,Ca,Fa,Pa,Ua,Ya);case 7:return I.call(this,D,Ca,Fa,Pa,Ua,Ya,db);case 8:return B.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb);case 9:return w.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb);case 10:return r.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa);case 11:return q.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za);case 12:return p.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb);case 13:return m.call(this,
D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb);case 14:return l.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb);case 15:return k.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb,gc);case 16:return g.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb,gc,Bb);case 17:return f.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb,gc,Bb,Nb);case 18:return e.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb,gc,Bb,Nb,Yb);case 19:return d.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb,gc,Bb,Nb,Yb,Zb);case 20:return c.call(this,
D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb,gc,Bb,Nb,Yb,Zb,oe);case 21:return b.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb,gc,Bb,Nb,Yb,Zb,oe,Df);case 22:return a.call(this,D,Ca,Fa,Pa,Ua,Ya,db,eb,jb,Qa,Za,wb,Mb,Rb,gc,Bb,Nb,Yb,Zb,oe,Df,Re)}throw Error("Invalid arity: "+arguments.length);};D.g=Ga;D.a=Da;D.j=ha;D.N=P;D.W=O;D.ga=G;D.Ua=I;D.Va=B;D.Wa=w;D.Ja=r;D.Ka=q;D.La=p;D.Ma=m;D.Na=l;D.Oa=k;D.Pa=g;D.Qa=f;D.Ra=e;D.Sa=d;D.Ta=c;D.Af=b;D.Ud=a;return D}();
h.apply=function(a,b){return this.call.apply(this,[this].concat(Ce(b)))};h.C=function(){var a=this.F.C?this.F.C():this.F.call(null),b=nm(this,a);u(b)||lm(this.name,a);return b.C?b.C():b.call(null)};h.g=function(a){var b=this.F.g?this.F.g(a):this.F.call(null,a),c=nm(this,b);u(c)||lm(this.name,b);return c.g?c.g(a):c.call(null,a)};h.a=function(a,b){var c=this.F.a?this.F.a(a,b):this.F.call(null,a,b),d=nm(this,c);u(d)||lm(this.name,c);return d.a?d.a(a,b):d.call(null,a,b)};
h.j=function(a,b,c){var d=this.F.j?this.F.j(a,b,c):this.F.call(null,a,b,c),e=nm(this,d);u(e)||lm(this.name,d);return e.j?e.j(a,b,c):e.call(null,a,b,c)};h.N=function(a,b,c,d){var e=this.F.N?this.F.N(a,b,c,d):this.F.call(null,a,b,c,d),f=nm(this,e);u(f)||lm(this.name,e);return f.N?f.N(a,b,c,d):f.call(null,a,b,c,d)};h.W=function(a,b,c,d,e){var f=this.F.W?this.F.W(a,b,c,d,e):this.F.call(null,a,b,c,d,e),g=nm(this,f);u(g)||lm(this.name,f);return g.W?g.W(a,b,c,d,e):g.call(null,a,b,c,d,e)};
h.ga=function(a,b,c,d,e,f){var g=this.F.ga?this.F.ga(a,b,c,d,e,f):this.F.call(null,a,b,c,d,e,f),k=nm(this,g);u(k)||lm(this.name,g);return k.ga?k.ga(a,b,c,d,e,f):k.call(null,a,b,c,d,e,f)};h.Ua=function(a,b,c,d,e,f,g){var k=this.F.Ua?this.F.Ua(a,b,c,d,e,f,g):this.F.call(null,a,b,c,d,e,f,g),l=nm(this,k);u(l)||lm(this.name,k);return l.Ua?l.Ua(a,b,c,d,e,f,g):l.call(null,a,b,c,d,e,f,g)};
h.Va=function(a,b,c,d,e,f,g,k){var l=this.F.Va?this.F.Va(a,b,c,d,e,f,g,k):this.F.call(null,a,b,c,d,e,f,g,k),m=nm(this,l);u(m)||lm(this.name,l);return m.Va?m.Va(a,b,c,d,e,f,g,k):m.call(null,a,b,c,d,e,f,g,k)};h.Wa=function(a,b,c,d,e,f,g,k,l){var m=this.F.Wa?this.F.Wa(a,b,c,d,e,f,g,k,l):this.F.call(null,a,b,c,d,e,f,g,k,l),p=nm(this,m);u(p)||lm(this.name,m);return p.Wa?p.Wa(a,b,c,d,e,f,g,k,l):p.call(null,a,b,c,d,e,f,g,k,l)};
h.Ja=function(a,b,c,d,e,f,g,k,l,m){var p=this.F.Ja?this.F.Ja(a,b,c,d,e,f,g,k,l,m):this.F.call(null,a,b,c,d,e,f,g,k,l,m),q=nm(this,p);u(q)||lm(this.name,p);return q.Ja?q.Ja(a,b,c,d,e,f,g,k,l,m):q.call(null,a,b,c,d,e,f,g,k,l,m)};h.Ka=function(a,b,c,d,e,f,g,k,l,m,p){var q=this.F.Ka?this.F.Ka(a,b,c,d,e,f,g,k,l,m,p):this.F.call(null,a,b,c,d,e,f,g,k,l,m,p),r=nm(this,q);u(r)||lm(this.name,q);return r.Ka?r.Ka(a,b,c,d,e,f,g,k,l,m,p):r.call(null,a,b,c,d,e,f,g,k,l,m,p)};
h.La=function(a,b,c,d,e,f,g,k,l,m,p,q){var r=this.F.La?this.F.La(a,b,c,d,e,f,g,k,l,m,p,q):this.F.call(null,a,b,c,d,e,f,g,k,l,m,p,q),w=nm(this,r);u(w)||lm(this.name,r);return w.La?w.La(a,b,c,d,e,f,g,k,l,m,p,q):w.call(null,a,b,c,d,e,f,g,k,l,m,p,q)};h.Ma=function(a,b,c,d,e,f,g,k,l,m,p,q,r){var w=this.F.Ma?this.F.Ma(a,b,c,d,e,f,g,k,l,m,p,q,r):this.F.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r),B=nm(this,w);u(B)||lm(this.name,w);return B.Ma?B.Ma(a,b,c,d,e,f,g,k,l,m,p,q,r):B.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r)};
h.Na=function(a,b,c,d,e,f,g,k,l,m,p,q,r,w){var B=this.F.Na?this.F.Na(a,b,c,d,e,f,g,k,l,m,p,q,r,w):this.F.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w),I=nm(this,B);u(I)||lm(this.name,B);return I.Na?I.Na(a,b,c,d,e,f,g,k,l,m,p,q,r,w):I.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w)};
h.Oa=function(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B){var I=this.F.Oa?this.F.Oa(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B):this.F.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B),G=nm(this,I);u(G)||lm(this.name,I);return G.Oa?G.Oa(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B):G.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B)};
h.Pa=function(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I){var G=this.F.Pa?this.F.Pa(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I):this.F.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I),O=nm(this,G);u(O)||lm(this.name,G);return O.Pa?O.Pa(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I):O.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I)};
h.Qa=function(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G){var O=this.F.Qa?this.F.Qa(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G):this.F.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G),P=nm(this,O);u(P)||lm(this.name,O);return P.Qa?P.Qa(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G):P.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G)};
h.Ra=function(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O){var P=this.F.Ra?this.F.Ra(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O):this.F.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O),ha=nm(this,P);u(ha)||lm(this.name,P);return ha.Ra?ha.Ra(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O):ha.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O)};
h.Sa=function(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P){var ha=this.F.Sa?this.F.Sa(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P):this.F.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P),Da=nm(this,ha);u(Da)||lm(this.name,ha);return Da.Sa?Da.Sa(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P):Da.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P)};
h.Ta=function(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha){var Da=this.F.Ta?this.F.Ta(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha):this.F.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha),Ga=nm(this,Da);u(Ga)||lm(this.name,Da);return Ga.Ta?Ga.Ta(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha):Ga.call(null,a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha)};
h.Af=function(a,b,c,d,e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha,Da){var Ga=S.l(this.F,a,b,c,d,L([e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha,Da],0)),D=nm(this,Ga);u(D)||lm(this.name,Ga);return S.l(D,a,b,c,d,L([e,f,g,k,l,m,p,q,r,w,B,I,G,O,P,ha,Da],0))};function om(a,b,c){Xi.N(a.qe,R,b,c);hm(a.Ze,a.qe,a.Fe,a.Ue)}
function nm(a,b){qg.a(function(){var b=a.Fe;return K.g?K.g(b):K.call(null,b)}(),function(){var b=a.Ue;return K.g?K.g(b):K.call(null,b)}())||hm(a.Ze,a.qe,a.Fe,a.Ue);var c=function(){var b=a.Ze;return K.g?K.g(b):K.call(null,b)}().call(null,b);if(u(c))return c;c=km(a.name,b,a.Ue,a.qe,a.Ji,a.Ze,a.Fe);return u(c)?c:function(){var b=a.qe;return K.g?K.g(b):K.call(null,b)}().call(null,a.ai)}h.Yd=function(){return Sf(this.name)};h.Zd=function(){return Tf(this.name)};h.T=function(){return ia(this)};
function pm(a,b){this.ic=a;this.w=b;this.B=2153775104;this.O=2048}h=pm.prototype;h.toString=function(){return this.ic};h.equiv=function(a){return this.M(null,a)};h.M=function(a,b){return b instanceof pm&&this.ic===b.ic};h.S=function(a,b){return Cf(b,[y('#uuid "'),y(this.ic),y('"')].join(""))};h.T=function(){if(null==this.w){for(var a=this.ic,b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;this.w=b}return this.w};h.wc=function(a,b){return Ma(this.ic,b.ic)};
function qm(a){return new pm(a,null)}function rm(){function a(){return Math.floor(15*Math.random()).toString(16)}var b=(8|3&Math.floor(14*Math.random())).toString(16);return qm([y(a()),y(a()),y(a()),y(a()),y(a()),y(a()),y(a()),y(a()),y("-"),y(a()),y(a()),y(a()),y(a()),y("-"),y("4"),y(a()),y(a()),y(a()),y("-"),y(b),y(a()),y(a()),y(a()),y("-"),y(a()),y(a()),y(a()),y(a()),y(a()),y(a()),y(a()),y(a()),y(a()),y(a()),y(a()),y(a())].join(""))}
function sm(a,b,c){var d=Error();this.message=a;this.data=b;this.kg=c;this.name=d.name;this.description=d.description;this.Ai=d.Ai;this.fileName=d.fileName;this.lineNumber=d.lineNumber;this.columnNumber=d.columnNumber;this.stack=d.stack;return this}sm.prototype.__proto__=Error.prototype;sm.prototype.ha=!0;
sm.prototype.S=function(a,b,c){Cf(b,"#ExceptionInfo{:message ");Hl(this.message,b,c);u(this.data)&&(Cf(b,", :data "),Hl(this.data,b,c));u(this.kg)&&(Cf(b,", :cause "),Hl(this.kg,b,c));return Cf(b,"}")};sm.prototype.toString=function(){return $f(this)};function tm(a,b){return new sm(a,b,null)};var um="undefined"!=typeof Object.keys?function(a){return Object.keys(a)}:function(a){return Xa(a)},vm="undefined"!=typeof Array.isArray?function(a){return Array.isArray(a)}:function(a){return"array"===n(a)};function wm(){return Math.round(15*Math.random()).toString(16)};var xm=1;function ym(a,b){if(null==a)return null==b;if(a===b)return!0;if("object"===typeof a){if(vm(a)){if(vm(b)&&a.length===b.length){for(var c=0;c<a.length;c++)if(!ym(a[c],b[c]))return!1;return!0}return!1}if(a.Hb)return a.Hb(b);if(null!=b&&"object"===typeof b){if(b.Hb)return b.Hb(a);var c=0,d=um(b).length,e;for(e in a)if(a.hasOwnProperty(e)&&(c++,!b.hasOwnProperty(e)||!ym(a[e],b[e])))return!1;return c===d}}return!1}function zm(a,b){return a^b+2654435769+(a<<6)+(a>>2)}var Am={},Bm=0;
function Cm(a){var b=0;if(null!=a.forEach)a.forEach(function(a,c){b=(b+(Dm(c)^Dm(a)))%4503599627370496});else for(var c=um(a),d=0;d<c.length;d++)var e=c[d],f=a[e],b=(b+(Dm(e)^Dm(f)))%4503599627370496;return b}function Em(a){var b=0;if(vm(a))for(var c=0;c<a.length;c++)b=zm(b,Dm(a[c]));else a.forEach&&a.forEach(function(a){b=zm(b,Dm(a))});return b}
function Dm(a){if(null==a)return 0;switch(typeof a){case "number":return a;case "boolean":return!0===a?1:0;case "string":var b=Am[a];if(null==b){for(var c=b=0;c<a.length;++c)b=31*b+a.charCodeAt(c),b%=4294967296;Bm++;256<=Bm&&(Am={},Bm=1);Am[a]=b}a=b;return a;case "function":return b=a.transit$hashCode$,b||(b=xm,"undefined"!=typeof Object.defineProperty?Object.defineProperty(a,"transit$hashCode$",{value:b,enumerable:!1}):a.transit$hashCode$=b,xm++),b;default:return a instanceof Date?a.valueOf():vm(a)?
Em(a):a.Tb?a.Tb():Cm(a)}};function Fm(a,b){this.va=a|0;this.ma=b|0}var Gm={};function Hm(a){if(-128<=a&&128>a){var b=Gm[a];if(b)return b}b=new Fm(a|0,0>a?-1:0);-128<=a&&128>a&&(Gm[a]=b);return b}function Im(a){return isNaN(a)||!isFinite(a)?Jm:a<=-Km?Lm:a+1>=Km?Mm:0>a?Nm(Im(-a)):new Fm(a%Om|0,a/Om|0)}function Pm(a,b){return new Fm(a,b)}
function Qm(a,b){if(0==a.length)throw Error("number format error: empty string");var c=b||10;if(2>c||36<c)throw Error("radix out of range: "+c);if("-"==a.charAt(0))return Nm(Qm(a.substring(1),c));if(0<=a.indexOf("-"))throw Error('number format error: interior "-" character: '+a);for(var d=Im(Math.pow(c,8)),e=Jm,f=0;f<a.length;f+=8){var g=Math.min(8,a.length-f),k=parseInt(a.substring(f,f+g),c);8>g?(g=Im(Math.pow(c,g)),e=e.multiply(g).add(Im(k))):(e=e.multiply(d),e=e.add(Im(k)))}return e}
var Om=4294967296,Km=Om*Om/2,Jm=Hm(0),Rm=Hm(1),Sm=Hm(-1),Mm=Pm(-1,2147483647),Lm=Pm(0,-2147483648),Tm=Hm(16777216);function Um(a){return a.ma*Om+(0<=a.va?a.va:Om+a.va)}h=Fm.prototype;
h.toString=function(a){a=a||10;if(2>a||36<a)throw Error("radix out of range: "+a);if(Vm(this))return"0";if(0>this.ma){if(this.lb(Lm)){var b=Im(a),c=Wm(this,b),b=Xm(c.multiply(b),this);return c.toString(a)+b.va.toString(a)}return"-"+Nm(this).toString(a)}for(var c=Im(Math.pow(a,6)),b=this,d="";;){var e=Wm(b,c),f=Xm(b,e.multiply(c)).va.toString(a),b=e;if(Vm(b))return f+d;for(;6>f.length;)f="0"+f;d=""+f+d}};function Vm(a){return 0==a.ma&&0==a.va}h.lb=function(a){return this.ma==a.ma&&this.va==a.va};
h.compare=function(a){if(this.lb(a))return 0;var b=0>this.ma,c=0>a.ma;return b&&!c?-1:!b&&c?1:0>Xm(this,a).ma?-1:1};function Nm(a){return a.lb(Lm)?Lm:Pm(~a.va,~a.ma).add(Rm)}h.add=function(a){var b=this.ma>>>16,c=this.ma&65535,d=this.va>>>16,e=a.ma>>>16,f=a.ma&65535,g=a.va>>>16,k;k=0+((this.va&65535)+(a.va&65535));a=0+(k>>>16);a+=d+g;d=0+(a>>>16);d+=c+f;c=0+(d>>>16);c=c+(b+e)&65535;return Pm((a&65535)<<16|k&65535,c<<16|d&65535)};function Xm(a,b){return a.add(Nm(b))}
h.multiply=function(a){if(Vm(this)||Vm(a))return Jm;if(this.lb(Lm))return 1==(a.va&1)?Lm:Jm;if(a.lb(Lm))return 1==(this.va&1)?Lm:Jm;if(0>this.ma)return 0>a.ma?Nm(this).multiply(Nm(a)):Nm(Nm(this).multiply(a));if(0>a.ma)return Nm(this.multiply(Nm(a)));if(0>this.compare(Tm)&&0>a.compare(Tm))return Im(Um(this)*Um(a));var b=this.ma>>>16,c=this.ma&65535,d=this.va>>>16,e=this.va&65535,f=a.ma>>>16,g=a.ma&65535,k=a.va>>>16;a=a.va&65535;var l,m,p,q;q=0+e*a;p=0+(q>>>16);p+=d*a;m=0+(p>>>16);p=(p&65535)+e*k;
m+=p>>>16;p&=65535;m+=c*a;l=0+(m>>>16);m=(m&65535)+d*k;l+=m>>>16;m&=65535;m+=e*g;l+=m>>>16;m&=65535;l=l+(b*a+c*k+d*g+e*f)&65535;return Pm(p<<16|q&65535,l<<16|m)};
function Wm(a,b){if(Vm(b))throw Error("division by zero");if(Vm(a))return Jm;if(a.lb(Lm)){if(b.lb(Rm)||b.lb(Sm))return Lm;if(b.lb(Lm))return Rm;var c;c=1;if(0==c)c=a;else{var d=a.ma;c=32>c?Pm(a.va>>>c|d<<32-c,d>>c):Pm(d>>c-32,0<=d?0:-1)}c=Wm(c,b).shiftLeft(1);if(c.lb(Jm))return 0>b.ma?Rm:Sm;d=Xm(a,b.multiply(c));return c.add(Wm(d,b))}if(b.lb(Lm))return Jm;if(0>a.ma)return 0>b.ma?Wm(Nm(a),Nm(b)):Nm(Wm(Nm(a),b));if(0>b.ma)return Nm(Wm(a,Nm(b)));for(var e=Jm,d=a;0<=d.compare(b);){c=Math.max(1,Math.floor(Um(d)/
Um(b)));for(var f=Math.ceil(Math.log(c)/Math.LN2),f=48>=f?1:Math.pow(2,f-48),g=Im(c),k=g.multiply(b);0>k.ma||0<k.compare(d);)c-=f,g=Im(c),k=g.multiply(b);Vm(g)&&(g=Rm);e=e.add(g);d=Xm(d,k)}return e}h.shiftLeft=function(a){a&=63;if(0==a)return this;var b=this.va;return 32>a?Pm(b<<a,this.ma<<a|b>>>32-a):Pm(0,b<<a-32)};function Ym(a,b){b&=63;if(0==b)return a;var c=a.ma;return 32>b?Pm(a.va>>>b|c<<32-b,c>>>b):32==b?Pm(c,0):Pm(c>>>b-32,0)};function Zm(a,b){this.tag=a;this.ca=b;this.oa=-1}Zm.prototype.toString=function(){return"[TaggedValue: "+this.tag+", "+this.ca+"]"};Zm.prototype.equiv=function(a){return ym(this,a)};Zm.prototype.equiv=Zm.prototype.equiv;Zm.prototype.Hb=function(a){return a instanceof Zm?this.tag===a.tag&&ym(this.ca,a.ca):!1};Zm.prototype.Tb=function(){-1===this.oa&&(this.oa=zm(Dm(this.tag),Dm(this.ca)));return this.oa};function $m(a,b){return new Zm(a,b)}var an=Qm("9007199254740992"),bn=Qm("-9007199254740992");
Fm.prototype.equiv=function(a){return ym(this,a)};Fm.prototype.equiv=Fm.prototype.equiv;Fm.prototype.Hb=function(a){return a instanceof Fm&&this.lb(a)};Fm.prototype.Tb=function(){return this.va};function cn(a){this.name=a;this.oa=-1}cn.prototype.toString=function(){return":"+this.name};cn.prototype.equiv=function(a){return ym(this,a)};cn.prototype.equiv=cn.prototype.equiv;cn.prototype.Hb=function(a){return a instanceof cn&&this.name==a.name};
cn.prototype.Tb=function(){-1===this.oa&&(this.oa=Dm(this.name));return this.oa};function dn(a){this.name=a;this.oa=-1}dn.prototype.toString=function(){return"[Symbol: "+this.name+"]"};dn.prototype.equiv=function(a){return ym(this,a)};dn.prototype.equiv=dn.prototype.equiv;dn.prototype.Hb=function(a){return a instanceof dn&&this.name==a.name};dn.prototype.Tb=function(){-1===this.oa&&(this.oa=Dm(this.name));return this.oa};
function en(a,b,c){var d="";c=c||b+1;for(var e=8*(7-b),f=Hm(255).shiftLeft(e);b<c;b++,e-=8,f=Ym(f,8)){var g=Ym(Pm(a.va&f.va,a.ma&f.ma),e).toString(16);1==g.length&&(g="0"+g);d+=g}return d}function fn(a,b){this.Qf=a;this.Wf=b;this.oa=-1}fn.prototype.toString=function(a){var b=this.Qf,c=this.Wf;a=""+(en(b,0,4)+"-");a+=en(b,4,6)+"-";a+=en(b,6,8)+"-";a+=en(c,0,2)+"-";return a+=en(c,2,8)};fn.prototype.equiv=function(a){return ym(this,a)};fn.prototype.equiv=fn.prototype.equiv;
fn.prototype.Hb=function(a){return a instanceof fn&&this.Qf.lb(a.Qf)&&this.Wf.lb(a.Wf)};fn.prototype.Tb=function(){-1===this.oa&&(this.oa=Dm(this.toString()));return this.oa};Date.prototype.Hb=function(a){return a instanceof Date?this.valueOf()===a.valueOf():!1};Date.prototype.Tb=function(){return this.valueOf()};function gn(a,b){this.entries=a;this.type=b||0;this.ka=0}
gn.prototype.next=function(){if(this.ka<this.entries.length){var a=null,a=0===this.type?this.entries[this.ka]:1===this.type?this.entries[this.ka+1]:[this.entries[this.ka],this.entries[this.ka+1]],a={value:a,done:!1};this.ka+=2;return a}return{value:null,done:!0}};gn.prototype.next=gn.prototype.next;function hn(a,b){this.map=a;this.type=b||0;this.keys=this.map.Ib();this.ka=0;this.Wc=null;this.Ic=0}
hn.prototype.next=function(){if(this.ka<this.map.size){null!=this.Wc&&this.Ic<this.Wc.length||(this.Wc=this.map.map[this.keys[this.ka]],this.Ic=0);var a=null,a=0===this.type?this.Wc[this.Ic]:1===this.type?this.Wc[this.Ic+1]:[this.Wc[this.Ic],this.Wc[this.Ic+1]],a={value:a,done:!1};this.ka++;this.Ic+=2;return a}return{value:null,done:!0}};hn.prototype.next=hn.prototype.next;
function jn(a,b){if((b instanceof kn||b instanceof ln)&&a.size===b.size){for(var c in a.map)for(var d=a.map[c],e=0;e<d.length;e+=2)if(!ym(d[e+1],b.get(d[e])))return!1;return!0}if(null!=b&&"object"===typeof b&&(c=um(b),d=c.length,a.size===d)){for(e=0;e<d;e++){var f=c[e];if(!a.has(f)||!ym(b[f],a.get(f)))return!1}return!0}return!1}function ln(a){this.qa=a;this.la=null;this.oa=-1;this.size=a.length/2;this.dg=0}ln.prototype.toString=function(){return"[TransitArrayMap]"};
function mn(a){if(a.la)throw Error("Invalid operation, already converted");if(8>a.size)return!1;a.dg++;return 32<a.dg?(a.la=nn(a.qa,!0),a.qa=[],!0):!1}ln.prototype.clear=function(){this.oa=-1;this.la?this.la.clear():this.qa=[];this.size=0};ln.prototype.clear=ln.prototype.clear;ln.prototype.keys=function(){return this.la?this.la.keys():new gn(this.qa,0)};ln.prototype.keys=ln.prototype.keys;
ln.prototype.jd=function(){if(this.la)return this.la.jd();for(var a=[],b=0,c=0;c<this.qa.length;b++,c+=2)a[b]=this.qa[c];return a};ln.prototype.keySet=ln.prototype.jd;ln.prototype.entries=function(){return this.la?this.la.entries():new gn(this.qa,2)};ln.prototype.entries=ln.prototype.entries;ln.prototype.values=function(){return this.la?this.la.values():new gn(this.qa,1)};ln.prototype.values=ln.prototype.values;
ln.prototype.forEach=function(a){if(this.la)this.la.forEach(a);else for(var b=0;b<this.qa.length;b+=2)a(this.qa[b+1],this.qa[b])};ln.prototype.forEach=ln.prototype.forEach;ln.prototype.get=function(a,b){if(this.la)return this.la.get(a);if(mn(this))return this.get(a);for(var c=0;c<this.qa.length;c+=2)if(ym(this.qa[c],a))return this.qa[c+1];return b};ln.prototype.get=ln.prototype.get;
ln.prototype.has=function(a){if(this.la)return this.la.has(a);if(mn(this))return this.has(a);for(var b=0;b<this.qa.length;b+=2)if(ym(this.qa[b],a))return!0;return!1};ln.prototype.has=ln.prototype.has;ln.prototype.set=function(a,b){this.oa=-1;if(this.la)this.la.set(a,b),this.size=this.la.size;else{for(var c=0;c<this.qa.length;c+=2)if(ym(this.qa[c],a)){this.qa[c+1]=b;return}this.qa.push(a);this.qa.push(b);this.size++;32<this.size&&(this.la=nn(this.qa,!0),this.qa=null)}};ln.prototype.set=ln.prototype.set;
ln.prototype["delete"]=function(a){this.oa=-1;if(this.la)this.la["delete"](a),this.size=this.la.size;else for(var b=0;b<this.qa.length;b+=2)if(ym(this.qa[b],a)){this.qa.splice(b,2);this.size--;break}};ln.prototype.Tb=function(){if(this.la)return this.la.Tb();-1===this.oa&&(this.oa=Cm(this));return this.oa};ln.prototype.Hb=function(a){return this.la?jn(this.la,a):jn(this,a)};function kn(a,b,c){this.map=b||{};this.rd=a||[];this.size=c||0;this.oa=-1}kn.prototype.toString=function(){return"[TransitMap]"};
kn.prototype.clear=function(){this.oa=-1;this.map={};this.rd=[];this.size=0};kn.prototype.clear=kn.prototype.clear;kn.prototype.Ib=function(){return null!=this.rd?this.rd:um(this.map)};kn.prototype["delete"]=function(a){this.oa=-1;this.rd=null;for(var b=Dm(a),c=this.map[b],d=0;d<c.length;d+=2)if(ym(a,c[d])){c.splice(d,2);0===c.length&&delete this.map[b];this.size--;break}};kn.prototype.entries=function(){return new hn(this,2)};kn.prototype.entries=kn.prototype.entries;
kn.prototype.forEach=function(a){for(var b=this.Ib(),c=0;c<b.length;c++)for(var d=this.map[b[c]],e=0;e<d.length;e+=2)a(d[e+1],d[e],this)};kn.prototype.forEach=kn.prototype.forEach;kn.prototype.get=function(a,b){var c=Dm(a),c=this.map[c];if(null!=c)for(var d=0;d<c.length;d+=2){if(ym(a,c[d]))return c[d+1]}else return b};kn.prototype.get=kn.prototype.get;kn.prototype.has=function(a){var b=Dm(a),b=this.map[b];if(null!=b)for(var c=0;c<b.length;c+=2)if(ym(a,b[c]))return!0;return!1};kn.prototype.has=kn.prototype.has;
kn.prototype.keys=function(){return new hn(this,0)};kn.prototype.keys=kn.prototype.keys;kn.prototype.jd=function(){for(var a=this.Ib(),b=[],c=0;c<a.length;c++)for(var d=this.map[a[c]],e=0;e<d.length;e+=2)b.push(d[e]);return b};kn.prototype.keySet=kn.prototype.jd;kn.prototype.set=function(a,b){this.oa=-1;var c=Dm(a),d=this.map[c];if(null==d)this.rd&&this.rd.push(c),this.map[c]=[a,b],this.size++;else{for(var c=!0,e=0;e<d.length;e+=2)if(ym(b,d[e])){c=!1;d[e]=b;break}c&&(d.push(a),d.push(b),this.size++)}};
kn.prototype.set=kn.prototype.set;kn.prototype.values=function(){return new hn(this,1)};kn.prototype.values=kn.prototype.values;kn.prototype.Tb=function(){-1===this.oa&&(this.oa=Cm(this));return this.oa};kn.prototype.Hb=function(a){return jn(this,a)};
function nn(a,b){var c=!1;a=a||[];c=!1===c?c:!0;if((!0!==b||!b)&&64>=a.length){if(c){var d=a;a=[];for(c=0;c<d.length;c+=2){for(var e=!1,f=0;f<a.length;f+=2)if(ym(a[f],d[c])){a[f+1]=d[c+1];e=!0;break}e||(a.push(d[c]),a.push(d[c+1]))}}return new ln(a)}for(var d={},e=[],g=0,c=0;c<a.length;c+=2){var f=Dm(a[c]),k=d[f];if(null==k)e.push(f),d[f]=[a[c],a[c+1]],g++;else{for(var l=!0,f=0;f<k.length;f+=2)if(ym(k[f],a[c])){k[f+1]=a[c+1];l=!1;break}l&&(k.push(a[c]),k.push(a[c+1]),g++)}}return new kn(e,d,g)}
function on(a){this.map=a;this.size=a.size}on.prototype.toString=function(){return"[TransitSet]"};on.prototype.add=function(a){this.map.set(a,a);this.size=this.map.size};on.prototype.add=on.prototype.add;on.prototype.clear=function(){this.map=new kn;this.size=0};on.prototype.clear=on.prototype.clear;on.prototype["delete"]=function(a){this.map["delete"](a);this.size=this.map.size};on.prototype.entries=function(){return this.map.entries()};on.prototype.entries=on.prototype.entries;
on.prototype.forEach=function(a){var b=this;this.map.forEach(function(c,d){a(d,b)})};on.prototype.forEach=on.prototype.forEach;on.prototype.has=function(a){return this.map.has(a)};on.prototype.has=on.prototype.has;on.prototype.keys=function(){return this.map.keys()};on.prototype.keys=on.prototype.keys;on.prototype.jd=function(){return this.map.jd()};on.prototype.keySet=on.prototype.jd;on.prototype.values=function(){return this.map.values()};on.prototype.values=on.prototype.values;
on.prototype.Hb=function(a){if(a instanceof on){if(this.size===a.size)return ym(this.map,a.map)}else return!1};on.prototype.Tb=function(){return Dm(this.map)};var pn=new V(null,"response","response",-1068424192),qn=new V(null,"description","description",-1428560544),rn=new V(null,"path","path",-188191168),sn=new V(null,"ppath","ppath",-1758182784),tn=new V(null,"event-sources","event-sources",708931713),un=new V(null,"events-channel","events-channel",1892177121),vn=new V(null,"schema","schema",-1582001791),wn=new V(null,"closed","closed",-919675359),xn=new V(null,"add-term","add-term",432850178),yn=new V(null,"definition","definition",-1198729982),zn=new V(null,
"format","format",-1306924766),An=new V("zip","branch?","zip/branch?",-998880862),Bn=new V(null,"r","r",-471384190),Cn=new V("zip","children","zip/children",-940194589),Dn=new V("release","number","release/number",244918979),En=new V(null,"ready","ready",1086465795),Fn=new V(null,"ifn","ifn",230683491),Gn=new V(null,"v","v",21465059),Hn=new V(null,"tree","tree",-196312028),In=new V(null,"eval-js","eval-js",760905924),Jn=new V(null,"kids-map","kids-map",643095940),Kn=new V(null,"api","api",-899839580),
Ln=new V(null,"original-text","original-text",744448452),Mn=new V("set","block","set/block",664701476),se=new V(null,"meta","meta",1499536964),Nn=new V("schema.core","error","schema.core/error",1991454308),te=new V(null,"dup","dup",556298533),On=new V(null,"read","read",1140058661),Pn=new V(null,"placeholder","placeholder",-104873083),Qn=new V(null,"not-initialized","not-initialized",-1937378906),Rn=new V(null,"terms","terms",-1556977978),Sn=new V(null,"on-close","on-close",-761178394),Tn=new V(null,
"on-jsload","on-jsload",-395756602),Un=new V(null,"failure","failure",720415879),Vn=new V(null,"_","_",1453416199),Ui=new V(null,"validator","validator",-1966190681),Wn=new V(null,"method","method",55703592),Xn=new V(null,"raw","raw",1604651272),Yn=new V(null,"default","default",-1987822328),Zn=new V(null,"finally-block","finally-block",832982472),$n=new V(null,"debounce","debounce",-871550296),ao=new V(null,"kspec","kspec",-1151232248),bo=new V(null,"does-not-satisfy-schema","does-not-satisfy-schema",
-1543152824),co=new V(null,"sources","sources",-321166424),eo=new V(null,"name","name",1843675177),fo=new V(null,"events","events",1792552201),go=new V(null,"output-schema","output-schema",272504137),ho=new V(null,"value","value",305978217),io=new V("card","supertypes","card/supertypes",-1177665655),jo=new V(null,"kid-indexes-map","kid-indexes-map",-1120910006),ko=new V(null,"response-format","response-format",1664465322),lo=new V(null,"status-text","status-text",-1834235478),mo=new V(null,"proto-sym",
"proto-sym",-886371734),no=new V(null,"aborted","aborted",1775972619),oo=new V(null,"input-schemas","input-schemas",-982154805),po=new V(null,"processing-request","processing-request",-264947221),qo=new V(null,"extra","extra",1612569067),ro=new V(null,"params","params",710516235),so=new V(null,"on-blur","on-blur",814300747),to=new V(null,"mult-map","mult-map",460417931),Z=new V(null,"recur","recur",-437573268),uo=new V(null,"type","type",1174270348),vo=new V(null,"request-received","request-received",
2110590540),wo=new V(null,"verbose","verbose",1694226060),xo=new V(null,"catch-block","catch-block",1175212748),yo=new V(null,"src","src",-1651076051),zo=new V(null,"topic","topic",-1960480691),Ao=new V(null,"state","state",-1988618099),Bo=new V(null,"opened","opened",-1451743091),Kl=new V(null,"fallback-impl","fallback-impl",-1501286995),Co=new V("card","image-name","card/image-name",904731149),Do=new V("release","id","release/id",1815990861),Eo=new V(null,"op","op",-1882987955),Fo=new V(null,"val-schema",
"val-schema",-2014773619),Go=new V(null,"handlers","handlers",79528781),Ho=new V("schema.core","missing","schema.core/missing",1420181325),qe=new V(null,"flush-on-newline","flush-on-newline",-151457939),Io=new V(null,"env","env",-1815813235),Jo=new V(null,"search","search",1564939822),Ko=new V(null,"get-results","get-results",-1678226770),Lo=new V(null,"parse-error","parse-error",255902478),Mo=new V(null,"print","print",1299562414),No=new V("set","name","set/name",1843756175),Oo=new V(null,"l","l",
1395893423),dm=new V(null,"descendants","descendants",1824886031),Po=new V("zip","make-node","zip/make-node",1103800591),Qo=new V(null,"ch","ch",-554717905),Ro=new V(null,"k","k",-2146297393),So=new V("card","subtypes","card/subtypes",-1465579889),To=new V("card","text","card/text",-1785680017),Uo=new V(null,"headers","headers",-835030129),em=new V(null,"ancestors","ancestors",-776045424),Vo=new V(null,"write","write",-1857649168),re=new V(null,"readably","readably",1129599760),Wo=new V(null,"output-values-mult",
"output-values-mult",1026794288),Cl=new V(null,"more-marker","more-marker",-14717935),Xo=new V(null,"optional?","optional?",1184638129),Yo=new V("release","set","release/set",1361495505),Zo=new V("release","rarity","release/rarity",-1593800047),$o=new V(null,"got-results","got-results",-787346543),ap=new V(null,"for","for",-1323786319),bp=new V(null,"write-port-channel","write-port-channel",-776952302),cp=new V(null,"event","event",301435442),dp=new V(null,"success","success",1890645906),ep=new V(null,
"remove-term","remove-term",-811436973),fp=new V(null,"schemas","schemas",575070579),gp=new V(null,"init-fn","init-fn",777257971),hp=new V(null,"status","status",-1997798413),jp=new V(null,"result","result",1415092211),kp=new V(null,"response-ready","response-ready",245208276),ue=new V(null,"print-length","print-length",1931866356),lp=new V(null,"writer","writer",-277568236),mp=new V(null,"id","id",-1388402092),np=new V(null,"class","class",-2030961996),op=new V(null,"catch-exception","catch-exception",
-1997306795),pp=new V(null,"opts","opts",155075701),qp=new V(null,"relayed-event-topic","relayed-event-topic",323853461),sp=new V("card","color","card/color",1018391861),tp=new V(null,"reader","reader",169660853),cm=new V(null,"parents","parents",-2027538891),up=new V(null,"parse","parse",-1162164619),vp=new V(null,"pred-name","pred-name",-3677451),wp=new V(null,"pnodes","pnodes",1739080565),xp=new V(null,"repl","repl",-35398667),yp=new V(null,"set-term","set-term",-1732927434),zp=new V(null,"prev",
"prev",-1597069226),Ap=new V(null,"changed?","changed?",-437828330),Bp=new V(null,"code","code",1586293142),Cp=new V(null,"continue-block","continue-block",-1852047850),Dp=new V(null,"readport","readport",-1909228810),Ep=new V(null,"mult","mult",1466794774),Fp=new V(null,"content-type","content-type",-508222634),Gp=new V(null,"stacktrace","stacktrace",-95588394),Hp=new V(null,"post","post",269697687),Ip=new V(null,"topsort","topsort",-718814409),Jp=new V("release","card","release/card",1840765751),
Kp=new V("jamesmacaulay.zelkova.signal","splice","jamesmacaulay.zelkova.signal/splice",-459359176),Lp=new V(null,"error","error",-978969032),Mp=new V(null,"inputs-by-topic","inputs-by-topic",1973950168),Np=new V(null,"exception","exception",-335277064),Op=new V(null,"console","console",1228072057),Pp=new V(null,"uri","uri",-774711847),Qp=new V(null,"tag","tag",-1290361223),Rp=new V("card","name","card/name",1845148473),Sp=new V(null,"on-error","on-error",1728533530),Tp=new V(null,"init-tree","init-tree",
662018234),Up=new V(null,"json","json",1279968570),Vp=new V(null,"timeout","timeout",-318625318),Wp=new V(null,"end","end",-268185958),Xp=new V(null,"parents-map","parents-map",-1048684902),Yp=new V(null,"on-change","on-change",-732046149),Zp=new V(null,"pull","pull",-860544805),$p=new V(null,"hierarchy","hierarchy",-1053470341),aq=new V(null,"timestamp","timestamp",579478971),bq=new V(null,"msg-xform","msg-xform",-1431252485),cq=new V(null,"on-key-down","on-key-down",-1374733765),dq=new V(null,"connection-established",
"connection-established",-1403749733),eq=new V(null,"signal","signal",-1984951589),Jl=new V(null,"alt-impl","alt-impl",670969595),fq=new V(null,"p?","p?",-1172161701),gq=new V(null,"failures","failures",-912916356),hq=new V("set","release-date","set/release-date",1577064860),iq=new V(null,"proto-pred","proto-pred",1885698716),jq=new V(null,"handler","handler",-195596612),Xl=new V(null,"keywordize-keys","keywordize-keys",1310784252),kq=new V(null,"p","p",151049309),lq=new V(null,"on-open","on-open",
-1391088163),mq=new V(null,"with-credentials","with-credentials",-1163127235),nq=new V(null,"message","message",-406056002),oq=new V(null,"deps","deps",1883360319),gl=new V("cljs.core","not-found","cljs.core/not-found",-1572889185),pq=new V("card","types","card/types",576227871),qq=new V(null,"results","results",-1134170113);function rq(a,b){if(3<a.length){if(b)return!0;var c=a.charAt(1);return"~"===a.charAt(0)?":"===c||"$"===c||"#"===c:!1}return!1}function sq(a){var b=Math.floor(a/44);a=String.fromCharCode(a%44+48);return 0===b?"^"+a:"^"+String.fromCharCode(b+48)+a}function tq(){this.Ah=this.he=this.ka=0;this.xb={}}
tq.prototype.write=function(a,b){if(rq(a,b)){4096===this.Ah?(this.clear(),this.he=0,this.xb={}):1936===this.ka&&this.clear();var c=this.xb[a];return null==c?(this.xb[a]=[sq(this.ka),this.he],this.ka++,a):c[1]!=this.he?(c[1]=this.he,c[0]=sq(this.ka),this.ka++,a):c[0]}return a};tq.prototype.clear=function(){this.ka=0;this.he++};function uq(){this.ka=0;this.xb=[]}uq.prototype.write=function(a){1936==this.ka&&(this.ka=0);this.xb[this.ka]=a;this.ka++;return a};
uq.prototype.se=function(a){return this.xb[2===a.length?a.charCodeAt(1)-48:44*(a.charCodeAt(1)-48)+(a.charCodeAt(2)-48)]};uq.prototype.clear=function(){this.ka=0};function vq(a){this.gb=a}
function wq(a){this.options=a||{};this.Ga={};for(var b in this.ee.Ga)this.Ga[b]=this.ee.Ga[b];for(b in this.options.handlers){a:{switch(b){case "_":case "s":case "?":case "i":case "d":case "b":case "'":case "array":case "map":a=!0;break a}a=!1}if(a)throw Error('Cannot override handler for ground type "'+b+'"');this.Ga[b]=this.options.handlers[b]}this.cf=null!=this.options.preferStrings?this.options.preferStrings:this.ee.cf;this.Zf=null!=this.options.preferBuffers?this.options.preferBuffers:this.ee.Zf;
this.If=this.options.defaultHandler||this.ee.If;this.Lb=this.options.mapBuilder;this.td=this.options.arrayBuilder}
wq.prototype.ee={Ga:{_:function(){return null},"?":function(a){return"t"===a},b:function(a,b){var c;if(b&&!1===b.Zf||"undefined"==typeof Buffer)if("undefined"!=typeof Uint8Array){if("undefined"!=typeof atob)c=atob(a);else{c=String(a).replace(/=+$/,"");if(1==c.length%4)throw Error("'atob' failed: The string to be decoded is not correctly encoded.");for(var d=0,e,f,g=0,k="";f=c.charAt(g++);~f&&(e=d%4?64*e+f:f,d++%4)?k+=String.fromCharCode(255&e>>(-2*d&6)):0)f="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d".indexOf(f);
c=k}d=c.length;e=new Uint8Array(d);for(f=0;f<d;f++)e[f]=c.charCodeAt(f);c=e}else c=$m("b",a);else c=new Buffer(a,"base64");return c},i:function(a){"number"===typeof a||a instanceof Fm||(a=Qm(a,10),a=0<a.compare(an)||0>a.compare(bn)?a:Um(a));return a},n:function(a){return $m("n",a)},d:function(a){return parseFloat(a)},f:function(a){return $m("f",a)},c:function(a){return a},":":function(a){return new cn(a)},$:function(a){return new dn(a)},r:function(a){return $m("r",a)},z:function(a){a:switch(a){case "-INF":a=
-Infinity;break a;case "INF":a=Infinity;break a;case "NaN":a=NaN;break a;default:throw Error("Invalid special double value "+a);}return a},"'":function(a){return a},m:function(a){a="number"===typeof a?a:parseInt(a,10);return new Date(a)},t:function(a){return new Date(a)},u:function(a){a=a.replace(/-/g,"");for(var b=null,c=null,d=c=0,e=24,f=0,f=c=0,e=24;8>f;f+=2,e-=8)c|=parseInt(a.substring(f,f+2),16)<<e;d=0;f=8;for(e=24;16>f;f+=2,e-=8)d|=parseInt(a.substring(f,f+2),16)<<e;b=Pm(d,c);c=0;f=16;for(e=
24;24>f;f+=2,e-=8)c|=parseInt(a.substring(f,f+2),16)<<e;d=0;for(e=f=24;32>f;f+=2,e-=8)d|=parseInt(a.substring(f,f+2),16)<<e;c=Pm(d,c);return new fn(b,c)},set:function(a){a=a||[];for(var b={},c=[],d=0,e=0;e<a.length;e++){var f=Dm(a[e]),g=b[f];if(null==g)c.push(f),b[f]=[a[e],a[e]],d++;else{for(var f=!0,k=0;k<g.length;k+=2)if(ym(g[k],a[e])){f=!1;break}f&&(g.push(a[e]),g.push(a[e]),d++)}}return new on(new kn(c,b,d))},list:function(a){return $m("list",a)},link:function(a){return $m("link",a)},cmap:function(a){return nn(a)}},
If:function(a,b){return $m(a,b)},cf:!0,Zf:!0};
wq.prototype.decode=function(a,b,c,d){if(null==a)return null;switch(typeof a){case "string":return rq(a,c)?(a=xq(this,a),b&&b.write(a,c),b=a):b="^"===a.charAt(0)&&" "!==a.charAt(1)?b.se(a,c):xq(this,a),b;case "object":if(vm(a))if("^ "===a[0])if(this.Lb)if(17>a.length&&this.Lb.gd){d=[];for(c=1;c<a.length;c+=2)d.push(this.decode(a[c],b,!0,!1)),d.push(this.decode(a[c+1],b,!1,!1));b=this.Lb.gd(d,a)}else{d=this.Lb.Hd(a);for(c=1;c<a.length;c+=2)d=this.Lb.add(d,this.decode(a[c],b,!0,!1),this.decode(a[c+
1],b,!1,!1),a);b=this.Lb.Re(d,a)}else{d=[];for(c=1;c<a.length;c+=2)d.push(this.decode(a[c],b,!0,!1)),d.push(this.decode(a[c+1],b,!1,!1));b=nn(d)}else b=yq(this,a,b,c,d);else{c=um(a);var e=c[0];if((d=1==c.length?this.decode(e,b,!1,!1):null)&&d instanceof vq)a=a[e],c=this.Ga[d.gb],b=null!=c?c(this.decode(a,b,!1,!0),this):$m(d.gb,this.decode(a,b,!1,!1));else if(this.Lb)if(16>c.length&&this.Lb.gd){var f=[];for(d=0;d<c.length;d++)e=c[d],f.push(this.decode(e,b,!0,!1)),f.push(this.decode(a[e],b,!1,!1));
b=this.Lb.gd(f,a)}else{f=this.Lb.Hd(a);for(d=0;d<c.length;d++)e=c[d],f=this.Lb.add(f,this.decode(e,b,!0,!1),this.decode(a[e],b,!1,!1),a);b=this.Lb.Re(f,a)}else{f=[];for(d=0;d<c.length;d++)e=c[d],f.push(this.decode(e,b,!0,!1)),f.push(this.decode(a[e],b,!1,!1));b=nn(f)}}return b}return a};wq.prototype.decode=wq.prototype.decode;
function yq(a,b,c,d,e){if(e){var f=[];for(e=0;e<b.length;e++)f.push(a.decode(b[e],c,d,!1));return f}f=c&&c.ka;if(2===b.length&&"string"===typeof b[0]&&(e=a.decode(b[0],c,!1,!1))&&e instanceof vq)return b=b[1],f=a.Ga[e.gb],null!=f?f=f(a.decode(b,c,d,!0),a):$m(e.gb,a.decode(b,c,d,!1));c&&f!=c.ka&&(c.ka=f);if(a.td){if(32>=b.length&&a.td.gd){f=[];for(e=0;e<b.length;e++)f.push(a.decode(b[e],c,d,!1));return a.td.gd(f,b)}f=a.td.Hd();for(e=0;e<b.length;e++)f=a.td.add(f,a.decode(b[e],c,d,!1),b);return a.td.Re(f,
b)}f=[];for(e=0;e<b.length;e++)f.push(a.decode(b[e],c,d,!1));return f}function xq(a,b){if("~"===b.charAt(0)){var c=b.charAt(1);if("~"===c||"^"===c||"`"===c)return b.substring(1);if("#"===c)return new vq(b.substring(2));var d=a.Ga[c];return null==d?a.If(c,b.substring(2)):d(b.substring(2),a)}return b};function zq(a){this.$h=new wq(a)}function Aq(a,b){this.Ti=a;this.options=b||{};this.xb=this.options.cache?this.options.cache:new uq}Aq.prototype.se=function(a){var b=this.xb;a=this.Ti.$h.decode(JSON.parse(a),b);this.xb.clear();return a};Aq.prototype.read=Aq.prototype.se;var Bq=0,Cq=(8|3&Math.round(14*Math.random())).toString(16),Dq="transit$guid$"+(wm()+wm()+wm()+wm()+wm()+wm()+wm()+wm()+"-"+wm()+wm()+wm()+wm()+"-4"+wm()+wm()+wm()+"-"+Cq+wm()+wm()+wm()+"-"+wm()+wm()+wm()+wm()+wm()+wm()+wm()+wm()+wm()+wm()+wm()+wm());
function Eq(a){if(null==a)return"null";if(a===String)return"string";if(a===Boolean)return"boolean";if(a===Number)return"number";if(a===Array)return"array";if(a===Object)return"map";var b=a[Dq];null==b&&("undefined"!=typeof Object.defineProperty?(b=++Bq,Object.defineProperty(a,Dq,{value:b,enumerable:!1})):a[Dq]=b=++Bq);return b}function Fq(a,b){for(var c=a.toString(),d=c.length;d<b;d++)c="0"+c;return c}function Gq(){}Gq.prototype.tag=function(){return"_"};Gq.prototype.ca=function(){return null};
Gq.prototype.ua=function(){return"null"};function Hq(){}Hq.prototype.tag=function(){return"s"};Hq.prototype.ca=function(a){return a};Hq.prototype.ua=function(a){return a};function Iq(){}Iq.prototype.tag=function(){return"i"};Iq.prototype.ca=function(a){return a};Iq.prototype.ua=function(a){return a.toString()};function Jq(){}Jq.prototype.tag=function(){return"i"};Jq.prototype.ca=function(a){return a.toString()};Jq.prototype.ua=function(a){return a.toString()};function Kq(){}Kq.prototype.tag=function(){return"?"};
Kq.prototype.ca=function(a){return a};Kq.prototype.ua=function(a){return a.toString()};function Lq(){}Lq.prototype.tag=function(){return"array"};Lq.prototype.ca=function(a){return a};Lq.prototype.ua=function(){return null};function Mq(){}Mq.prototype.tag=function(){return"map"};Mq.prototype.ca=function(a){return a};Mq.prototype.ua=function(){return null};function Nq(){}Nq.prototype.tag=function(){return"t"};
Nq.prototype.ca=function(a){return a.getUTCFullYear()+"-"+Fq(a.getUTCMonth()+1,2)+"-"+Fq(a.getUTCDate(),2)+"T"+Fq(a.getUTCHours(),2)+":"+Fq(a.getUTCMinutes(),2)+":"+Fq(a.getUTCSeconds(),2)+"."+Fq(a.getUTCMilliseconds(),3)+"Z"};Nq.prototype.ua=function(a,b){return b.ca(a)};function Oq(){}Oq.prototype.tag=function(){return"m"};Oq.prototype.ca=function(a){return a.valueOf()};Oq.prototype.ua=function(a){return a.valueOf().toString()};function Pq(){}Pq.prototype.tag=function(){return"u"};
Pq.prototype.ca=function(a){return a.toString()};Pq.prototype.ua=function(a){return a.toString()};function Qq(){}Qq.prototype.tag=function(){return":"};Qq.prototype.ca=function(a){return a.name};Qq.prototype.ua=function(a,b){return b.ca(a)};function Rq(){}Rq.prototype.tag=function(){return"$"};Rq.prototype.ca=function(a){return a.name};Rq.prototype.ua=function(a,b){return b.ca(a)};function Sq(){}Sq.prototype.tag=function(a){return a.tag};Sq.prototype.ca=function(a){return a.ca};Sq.prototype.ua=function(){return null};
function Tq(){}Tq.prototype.tag=function(){return"set"};Tq.prototype.ca=function(a){var b=[];a.forEach(function(a){b.push(a)});return $m("array",b)};Tq.prototype.ua=function(){return null};function Uq(){}Uq.prototype.tag=function(){return"map"};Uq.prototype.ca=function(a){return a};Uq.prototype.ua=function(){return null};function Vq(){}Vq.prototype.tag=function(){return"map"};Vq.prototype.ca=function(a){return a};Vq.prototype.ua=function(){return null};function Wq(){}Wq.prototype.tag=function(){return"b"};
Wq.prototype.ca=function(a){return a.toString("base64")};Wq.prototype.ua=function(){return null};function Xq(){}Xq.prototype.tag=function(){return"b"};
Xq.prototype.ca=function(a){for(var b=0,c=a.length,d="",e=null;b<c;)e=a.subarray(b,Math.min(b+32768,c)),d+=String.fromCharCode.apply(null,e),b+=32768;var f;if("undefined"!=typeof btoa)f=btoa(d);else{a=String(d);c=0;d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/\x3d";for(e="";a.charAt(c|0)||(d="\x3d",c%1);e+=d.charAt(63&f>>8-c%1*8)){b=a.charCodeAt(c+=.75);if(255<b)throw Error("'btoa' failed: The string to be encoded contains characters outside of the Latin1 range.");f=f<<8|b}f=
e}return f};Xq.prototype.ua=function(){return null};
function Yq(){this.Ga={};this.set(null,new Gq);this.set(String,new Hq);this.set(Number,new Iq);this.set(Fm,new Jq);this.set(Boolean,new Kq);this.set(Array,new Lq);this.set(Object,new Mq);this.set(Date,new Oq);this.set(fn,new Pq);this.set(cn,new Qq);this.set(dn,new Rq);this.set(Zm,new Sq);this.set(on,new Tq);this.set(ln,new Uq);this.set(kn,new Vq);"undefined"!=typeof Buffer&&this.set(Buffer,new Wq);"undefined"!=typeof Uint8Array&&this.set(Uint8Array,new Xq)}
Yq.prototype.get=function(a){var b=null,b="string"===typeof a?this.Ga[a]:this.Ga[Eq(a)];return null!=b?b:this.Ga["default"]};Yq.prototype.get=Yq.prototype.get;Yq.prototype.set=function(a,b){var c;if(c="string"===typeof a)a:{switch(a){case "null":case "string":case "boolean":case "number":case "array":case "map":c=!1;break a}c=!0}c?this.Ga[a]=b:this.Ga[Eq(a)]=b};function Zq(a){this.Fa=a||{};this.cf=null!=this.Fa.preferStrings?this.Fa.preferStrings:!0;this.ah=this.Fa.objectBuilder||null;this.Ga=new Yq;if(a=this.Fa.handlers){if(vm(a)||!a.forEach)throw Error('transit writer "handlers" option must be a map');var b=this;a.forEach(function(a,d){b.Ga.set(d,a)})}this.ke=this.Fa.handlerForForeign;this.jf=this.Fa.unpack||function(a){return a instanceof ln&&null===a.la?a.qa:!1};this.xe=this.Fa&&this.Fa.verbose||!1}
Zq.prototype.tb=function(a){var b=this.Ga.get(null==a?null:a.constructor);return null!=b?b:(a=a&&a.transitTag)?this.Ga.get(a):null};function $q(a,b,c,d,e){a=a+b+c;return e?e.write(a,d):a}function ar(a,b,c){var d=[];if(vm(b))for(var e=0;e<b.length;e++)d.push(br(a,b[e],!1,c));else b.forEach(function(b){d.push(br(a,b,!1,c))});return d}function cr(a,b){if("string"!==typeof b){var c=a.tb(b);return c&&1===c.tag(b).length}return!0}
function dr(a,b){var c=a.jf(b),d=!0;if(c){for(var e=0;e<c.length&&(d=cr(a,c[e]),d);e+=2);return d}if(b.keys&&(c=b.keys(),e=null,c.next)){for(e=c.next();!e.done;){d=cr(a,e.value);if(!d)break;e=c.next()}return d}if(b.forEach)return b.forEach(function(b,c){d=d&&cr(a,c)}),d;throw Error("Cannot walk keys of object type "+(null==b?null:b.constructor).name);}
function er(a){if(a.constructor.transit$isObject)return!0;var b=a.constructor.toString(),b=b.substr(9),b=b.substr(0,b.indexOf("(")),b="Object"==b;"undefined"!=typeof Object.defineProperty?Object.defineProperty(a.constructor,"transit$isObject",{value:b,enumerable:!1}):a.constructor.transit$isObject=b;return b}
function fr(a,b,c){if(b.constructor===Object||null!=b.forEach||a.ke&&er(b)){if(a.xe){if(null!=b.forEach)if(dr(a,b)){var d={};b.forEach(function(b,e){d[br(a,e,!0,!1)]=br(a,b,!1,c)})}else{var e=a.jf(b),f=[],g=$q("~#","cmap","",!0,c);if(e)for(var k=0;k<e.length;k+=2)f.push(br(a,e[k],!0,!1)),f.push(br(a,e[k+1],!1,c));else b.forEach(function(b,d){f.push(br(a,d,!0,!1));f.push(br(a,b,!1,c))});d={};d[g]=f}else for(d={},e=um(b),k=0;k<e.length;k++)d[br(a,e[k],!0,!1)]=br(a,b[e[k]],!1,c);return d}if(null!=b.forEach){if(dr(a,
b)){e=a.jf(b);d=["^ "];if(e)for(k=0;k<e.length;k+=2)d.push(br(a,e[k],!0,c)),d.push(br(a,e[k+1],!1,c));else b.forEach(function(b,e){d.push(br(a,e,!0,c));d.push(br(a,b,!1,c))});return d}e=a.jf(b);f=[];g=$q("~#","cmap","",!0,c);if(e)for(k=0;k<e.length;k+=2)f.push(br(a,e[k],!0,c)),f.push(br(a,e[k+1],!1,c));else b.forEach(function(b,d){f.push(br(a,d,!0,c));f.push(br(a,b,!1,c))});return[g,f]}d=["^ "];e=um(b);for(k=0;k<e.length;k++)d.push(br(a,e[k],!0,c)),d.push(br(a,b[e[k]],!1,c));return d}if(null!=a.ah)return a.ah(b,
function(b){return br(a,b,!0,c)},function(b){return br(a,b,!1,c)});k=(null==b?null:b.constructor).name;e=Error("Cannot write "+k);e.data={Xf:b,type:k};throw e;}
function br(a,b,c,d){var e=a.tb(b)||(a.ke?a.ke(b,a.Ga):null),f=e?e.tag(b):null,g=e?e.ca(b):null;if(null!=e&&null!=f)switch(f){case "_":return c?$q("~","_","",c,d):null;case "s":return 0<g.length?(a=g.charAt(0),a="~"===a||"^"===a||"`"===a?"~"+g:g):a=g,$q("","",a,c,d);case "?":return c?$q("~","?",g.toString()[0],c,d):g;case "i":return Infinity===g?$q("~","z","INF",c,d):-Infinity===g?$q("~","z","-INF",c,d):isNaN(g)?$q("~","z","NaN",c,d):c||"string"===typeof g||g instanceof Fm?$q("~","i",g.toString(),
c,d):g;case "d":return c?$q(g.Kj,"d",g,c,d):g;case "b":return $q("~","b",g,c,d);case "'":return a.xe?(b={},c=$q("~#","'","",!0,d),b[c]=br(a,g,!1,d),d=b):d=[$q("~#","'","",!0,d),br(a,g,!1,d)],d;case "array":return ar(a,g,d);case "map":return fr(a,g,d);default:a:{if(1===f.length){if("string"===typeof g){d=$q("~",f,g,c,d);break a}if(c||a.cf){(a=a.xe&&new Nq)?(f=a.tag(b),g=a.ua(b,a)):g=e.ua(b,e);if(null!==g){d=$q("~",f,g,c,d);break a}d=Error('Tag "'+f+'" cannot be encoded as string');d.data={tag:f,ca:g,
Xf:b};throw d;}}b=f;c=g;a.xe?(g={},g[$q("~#",b,"",!0,d)]=br(a,c,!1,d),d=g):d=[$q("~#",b,"",!0,d),br(a,c,!1,d)]}return d}else throw d=(null==b?null:b.constructor).name,a=Error("Cannot write "+d),a.data={Xf:b,type:d},a;}function gr(a,b){var c=a.tb(b)||(a.ke?a.ke(b,a.Ga):null);if(null!=c)return 1===c.tag(b).length?$m("'",b):b;var c=(null==b?null:b.constructor).name,d=Error("Cannot write "+c);d.data={Xf:b,type:c};throw d;}
function hr(a,b){this.Rd=a;this.options=b||{};this.xb=!1===this.options.cache?null:this.options.cache?this.options.cache:new tq}hr.prototype.pi=function(){return this.Rd};hr.prototype.marshaller=hr.prototype.pi;hr.prototype.write=function(a,b){var c=null,d=b||{},c=d.asMapKey||!1,e=this.Rd.xe?!1:this.xb;!1===d.marshalTop?c=br(this.Rd,a,c,e):(d=this.Rd,c=JSON.stringify(br(d,gr(d,a),c,e)));null!=this.xb&&this.xb.clear();return c};hr.prototype.write=hr.prototype.write;
hr.prototype.register=function(a,b){this.Rd.Ga.set(a,b)};hr.prototype.register=hr.prototype.register;function ir(a,b){if("json"===a||"json-verbose"===a||null==a){var c=new zq(b);return new Aq(c,b)}throw Error("Cannot create reader of type "+a);}function jr(a,b){if("json"===a||"json-verbose"===a||null==a){"json-verbose"===a&&(null==b&&(b={}),b.verbose=!0);var c=new Zq(b);return new hr(c,b)}c=Error('Type must be "json"');c.data={type:a};throw c;};pm.prototype.M=function(a,b){return b instanceof pm?this.ic===b.ic:b instanceof fn?this.ic===b.toString():!1};pm.prototype.Yc=!0;pm.prototype.wc=function(a,b){if(b instanceof pm||b instanceof fn)return zh(this.toString(),b.toString());throw Error([y("Cannot compare "),y(this),y(" to "),y(b)].join(""));};fn.prototype.Yc=!0;fn.prototype.wc=function(a,b){if(b instanceof pm||b instanceof fn)return zh(this.toString(),b.toString());throw Error([y("Cannot compare "),y(this),y(" to "),y(b)].join(""));};
Fm.prototype.M=function(a,b){return this.equiv(b)};fn.prototype.M=function(a,b){return b instanceof pm?tf(b,this):this.equiv(b)};Zm.prototype.M=function(a,b){return this.equiv(b)};Fm.prototype.Bf=!0;Fm.prototype.T=function(){return Dm.g?Dm.g(this):Dm.call(null,this)};fn.prototype.Bf=!0;fn.prototype.T=function(){return Dm.g?Dm.g(this):Dm.call(null,this)};Zm.prototype.Bf=!0;Zm.prototype.T=function(){return Dm.g?Dm.g(this):Dm.call(null,this)};fn.prototype.ha=!0;
fn.prototype.S=function(a,b){return Cf(b,[y('#uuid "'),y(this.toString()),y('"')].join(""))};function kr(a,b){for(var c=E(nh(b)),d=null,e=0,f=0;;)if(f<e){var g=d.ba(null,f);a[g]=b[g];f+=1}else if(c=E(c))d=c,mh(d)?(c=Pf(d),f=Qf(d),d=c,e=M(c),c=f):(c=H(d),a[c]=b[c],c=J(d),d=null,e=0),f=0;else break;return a}function lr(){}lr.prototype.Hd=function(){return Hf(X)};lr.prototype.add=function(a,b,c){return Kf(a,b,c)};lr.prototype.Re=function(a){return Jf(a)};
lr.prototype.gd=function(a){return hk.j?hk.j(a,!0,!0):hk.call(null,a,!0,!0)};function mr(){}mr.prototype.Hd=function(){return Hf(Ug)};mr.prototype.add=function(a,b){return ui.a(a,b)};mr.prototype.Re=function(a){return Jf(a)};mr.prototype.gd=function(a){return Fj.a?Fj.a(a,!0):Fj.call(null,a,!0)};
function nr(a,b){var c=ei(a),d=kr({handlers:Tl(dl.l(L([new t(null,5,["$",function(){return function(a){return mg(a)}}(c),":",function(){return function(a){return di.g(a)}}(c),"set",function(){return function(a){return hj.a(jl,a)}}(c),"list",function(){return function(a){return hj.a(pg,a.reverse())}}(c),"cmap",function(){return function(a){for(var b=0,c=Hf(X);;)if(b<a.length)var d=b+2,c=Kf(c,a[b],a[b+1]),b=d;else return Jf(c)}}(c)],null),Go.g(b)],0))),mapBuilder:new lr,arrayBuilder:new mr,prefersStrings:!1},
Tl($g.a(b,Go)));return ir.a?ir.a(c,d):ir.call(null,c,d)}function or(){}or.prototype.tag=function(){return":"};or.prototype.ca=function(a){return a.ja};or.prototype.ua=function(a){return a.ja};function pr(){}pr.prototype.tag=function(){return"$"};pr.prototype.ca=function(a){return a.gb};pr.prototype.ua=function(a){return a.gb};function qr(){}qr.prototype.tag=function(){return"list"};
qr.prototype.ca=function(a){var b=[];a=E(a);for(var c=null,d=0,e=0;;)if(e<d){var f=c.ba(null,e);b.push(f);e+=1}else if(a=E(a))c=a,mh(c)?(a=Pf(c),e=Qf(c),c=a,d=M(a),a=e):(a=H(c),b.push(a),a=J(c),c=null,d=0),e=0;else break;return $m.a?$m.a("array",b):$m.call(null,"array",b)};qr.prototype.ua=function(){return null};function rr(){}rr.prototype.tag=function(){return"map"};rr.prototype.ca=function(a){return a};rr.prototype.ua=function(){return null};function sr(){}sr.prototype.tag=function(){return"set"};
sr.prototype.ca=function(a){var b=[];a=E(a);for(var c=null,d=0,e=0;;)if(e<d){var f=c.ba(null,e);b.push(f);e+=1}else if(a=E(a))c=a,mh(c)?(a=Pf(c),e=Qf(c),c=a,d=M(a),a=e):(a=H(c),b.push(a),a=J(c),c=null,d=0),e=0;else break;return $m.a?$m.a("array",b):$m.call(null,"array",b)};sr.prototype.ua=function(){return null};function tr(){}tr.prototype.tag=function(){return"array"};
tr.prototype.ca=function(a){var b=[];a=E(a);for(var c=null,d=0,e=0;;)if(e<d){var f=c.ba(null,e);b.push(f);e+=1}else if(a=E(a))c=a,mh(c)?(a=Pf(c),e=Qf(c),c=a,d=M(a),a=e):(a=H(c),b.push(a),a=J(c),c=null,d=0),e=0;else break;return b};tr.prototype.ua=function(){return null};function ur(){}ur.prototype.tag=function(){return"u"};ur.prototype.ca=function(a){return a.ic};ur.prototype.ua=function(a){return this.ca(a)};
function vr(a,b){var c=new or,d=new pr,e=new qr,f=new rr,g=new sr,k=new tr,l=new ur,m=dl.l(L([Zg([Fk,ai,t,Bk,Rj,F,V,Yh,fi,Mj,Qj,Dk,cl,bk,T,Xh,Jg,hl,Wk,al,Ij,kl,ki,C,pm,tl,Kk],[f,e,f,e,e,e,c,e,e,k,e,e,e,e,k,e,e,g,f,e,e,g,e,d,l,e,e]),Go.g(b)],0)),p=ei(a),q=kr({objectBuilder:function(a,b,c,d,e,f,g,k,l){return function(m,p,q){return Jh(function(){return function(a,b,c){a.push(p.g?p.g(b):p.call(null,b),q.g?q.g(c):q.call(null,c));return a}}(a,b,c,d,e,f,g,k,l),["^ "],m)}}(p,c,d,e,f,g,k,l,m),handlers:function(){var a=
Ie(m);a.forEach=function(){return function(a){for(var b=E(this),c=null,d=0,e=0;;)if(e<d){var f=c.ba(null,e),g=N(f,0),f=N(f,1);a.a?a.a(f,g):a.call(null,f,g);e+=1}else if(b=E(b))mh(b)?(c=Pf(b),b=Qf(b),g=c,d=M(c),c=g):(c=H(b),g=N(c,0),c=f=N(c,1),a.a?a.a(c,g):a.call(null,c,g),b=J(b),c=null,d=0),e=0;else return null}}(a,p,c,d,e,f,g,k,l,m);return a}(),unpack:function(){return function(a){return a instanceof t?a.v:!1}}(p,c,d,e,f,g,k,l,m)},Tl($g.a(b,Go)));return jr.a?jr.a(p,q):jr.call(null,p,q)};function wr(a,b,c){if("string"===typeof b)return a.replace(new RegExp(String(b).replace(/([-()\[\]{}+?*.$\^|,:#<!\\])/g,"\\$1").replace(/\x08/g,"\\x08"),"g"),c);if(b instanceof RegExp)return a.replace(new RegExp(b.source,"g"),c);throw[y("Invalid match arg: "),y(b)].join("");}function xr(a,b){for(var c=new je,d=E(b);;)if(d)c.append(""+y(H(d))),d=J(d),null!=d&&c.append(a);else return c.toString()}
function yr(a){return 2>M(a)?a.toUpperCase():[y(a.substring(0,1).toUpperCase()),y(a.substring(1).toLowerCase())].join("")}function zr(a){a=qg.a(""+y("/"),"/(?:)/")?Tg.a(Gj(Lg("",Y.a(y,E(a)))),""):Gj((""+y(a)).split("/"));if(qg.a(0,0))a:for(;;)if(qg.a("",dh(a)))a=null==a?null:ff(a);else break a;return a}function Ar(a){return ta(a)};var Br=function Br(b){if(b?b.zg:b)return b.zg();var c;c=Br[n(null==b?null:b)];if(!c&&(c=Br._,!c))throw x("PushbackReader.read-char",b);return c.call(null,b)},Cr=function Cr(b,c){if(b?b.Ag:b)return b.Ag(0,c);var d;d=Cr[n(null==b?null:b)];if(!d&&(d=Cr._,!d))throw x("PushbackReader.unread",b);return d.call(null,b,c)};function Dr(a,b,c){this.aa=a;this.buffer=b;this.ka=c}Dr.prototype.zg=function(){return 0===this.buffer.length?(this.ka+=1,this.aa[this.ka]):this.buffer.pop()};
Dr.prototype.Ag=function(a,b){return this.buffer.push(b)};function Er(a){var b=!/[^\t\n\r ]/.test(a);return u(b)?b:","===a}function Fr(a,b){var c;!(c=!/[^0-9]/.test(b))&&(c="+"===b||"-"===b)&&(c=Br(a),Cr(a,c),c=!/[^0-9]/.test(c));return c}function Gr(a){throw Error(S.a(y,a));}function Hr(a,b){for(var c=new je(b),d=Br(a);;){var e;if(!(e=null==d||Er(d))){e=d;var f="#"!==e;e=f?(f="'"!==e)?(f=":"!==e)?Ir.g?Ir.g(e):Ir.call(null,e):f:f:f}if(e)return Cr(a,d),c.toString();c.append(d);d=Br(a)}}
function Jr(a){for(;;){var b=Br(a);if("\n"===b||"\r"===b||null==b)return a}}var Kr=Al("^([-+]?)(?:(0)|([1-9][0-9]*)|0[xX]([0-9A-Fa-f]+)|0([0-7]+)|([1-9][0-9]?)[rR]([0-9A-Za-z]+))(N)?$"),Lr=Al("^([-+]?[0-9]+)/([0-9]+)$"),Mr=Al("^([-+]?[0-9]+(\\.[0-9]*)?([eE][-+]?[0-9]+)?)(M)?$"),Nr=Al("^[:]?([^0-9/].*/)?([^0-9/][^/]*)$");function Or(a,b){var c=a.exec(b);return null!=c&&c[0]===b?1===c.length?c[0]:c:null}
function Pr(a){if(u(Or(Kr,a))){a=Or(Kr,a);var b=a[2];if(null!=(qg.a(b,"")?null:b))a=0;else{var b=u(a[3])?[a[3],10]:u(a[4])?[a[4],16]:u(a[5])?[a[5],8]:u(a[6])?[a[7],parseInt(a[6],10)]:[null,null],c=b[0];null==c?a=null:(b=parseInt(c,b[1]),a="-"===a[1]?-b:b)}}else u(Or(Lr,a))?(a=Or(Lr,a),a=parseInt(a[1],10)/parseInt(a[2],10)):a=u(Or(Mr,a))?parseFloat(a):null;return a}var Qr=Al("^[0-9A-Fa-f]{2}$"),Rr=Al("^[0-9A-Fa-f]{4}$");
function Sr(a,b,c){return u(yl(a,c))?c:Gr(L(["Unexpected unicode escape \\",b,c],0))}function Tr(a){return String.fromCharCode(parseInt(a,16))}
function Ur(a){var b=Br(a),c="t"===b?"\t":"r"===b?"\r":"n"===b?"\n":"\\"===b?"\\":'"'===b?'"':"b"===b?"\b":"f"===b?"\f":null;u(c)?b=c:"x"===b?(a=(new je(Br(a),Br(a))).toString(),b=Tr(Sr(Qr,b,a))):"u"===b?(a=(new je(Br(a),Br(a),Br(a),Br(a))).toString(),b=Tr(Sr(Rr,b,a))):b=/[^0-9]/.test(b)?Gr(L(["Unexpected unicode escape \\",b],0)):String.fromCharCode(b);return b}function Vr(a){for(var b=Br(a);;){var c;c=b;c=Er.g?Er.g(c):Er.call(null,c);if(u(c))b=Br(a);else return b}}
function Wr(a,b){for(var c=Hf(Ug);;){var d=Vr(b);u(d)||Gr(L(["EOF while reading"],0));if(a===d)return Jf(c);var e=function(){var a=d;return Ir.g?Ir.g(a):Ir.call(null,a)}();if(u(e))var f=e,e=function(){var a=d;return f.a?f.a(b,a):f.call(null,b,a)}();else Cr(b,d),e=Xr.N?Xr.N(b,!0,null,!0):Xr.call(null,b,!0,null);c=e===b?c:ui.a(c,e)}}function Yr(a,b){return Gr(L(["Reader for ",b," not implemented yet"],0))}
function Zr(a,b){var c=Br(a),d=$r.g?$r.g(c):$r.call(null,c);if(u(d))return d.a?d.a(a,b):d.call(null,a,b);d=as.a?as.a(a,c):as.call(null,a,c);return u(d)?d:Gr(L(["No dispatch macro for ",c],0))}function bs(a,b){return Gr(L(["Unmatched delimiter ",b],0))}function cs(a){return S.a($h,Wr(")",a))}function ds(a){return Wr("]",a)}
function es(a){a=Wr("}",a);var b=M(a);if(!uh(b))throw Error([y("Argument must be an integer: "),y(b)].join(""));0!==(b&1)&&Gr(L(["Map literal must contain an even number of forms"],0));return S.a(Ti,a)}function fs(a,b){for(var c=new je(b),d=Br(a);;){if(u(function(){var a=null==d;if(a||(a=Er(d)))return a;a=d;return Ir.g?Ir.g(a):Ir.call(null,a)}())){Cr(a,d);var e=c.toString(),c=Pr(e);return u(c)?c:Gr(L(["Invalid number format [",e,"]"],0))}c.append(d);d=e=Br(a)}}
function gs(a){for(var b=new je,c=Br(a);;){if(null==c)return Gr(L(["EOF while reading"],0));if("\\"===c)b.append(Ur(a));else{if('"'===c)return b.toString();b.append(c)}c=Br(a)}}
function hs(a){for(var b=new je,c=Br(a);;){if(null==c)return Gr(L(["EOF while reading"],0));if("\\"===c){b.append(c);var d=Br(a);if(null==d)return Gr(L(["EOF while reading"],0));var e=function(){var a=b;a.append(d);return a}(),f=Br(a)}else{if('"'===c)return b.toString();e=function(){var a=b;a.append(c);return a}();f=Br(a)}b=e;c=f}}
function is(a,b){var c=Hr(a,b),d=-1!=c.indexOf("/");u(u(d)?1!==c.length:d)?c=ng(c.substring(0,c.indexOf("/")),c.substring(c.indexOf("/")+1,c.length)):(d=mg(c),c="nil"===c?null:"true"===c?!0:"false"===c?!1:"/"===c?new C(null,"/","/",-1371932971,null):d);return c}
function js(a){a=Hr(a,Br(a));var b=Or(Nr,a);a=b[0];var c=b[1],b=b[2];return void 0!==c&&":/"===c.substring(c.length-2,c.length)||":"===b[b.length-1]||-1!==a.indexOf("::",1)?Gr(L(["Invalid token: ",a],0)):null!=c&&0<c.length?di.a(c.substring(0,c.indexOf("/")),b):di.g(a)}function ks(a){return function(b){return z(z(pg,Xr.N?Xr.N(b,!0,null,!0):Xr.call(null,b,!0,null)),a)}}function ls(){return function(){return Gr(L(["Unreadable form"],0))}}
function ms(a){var b;b=Xr.N?Xr.N(a,!0,null,!0):Xr.call(null,a,!0,null);b=b instanceof C?new t(null,1,[Qp,b],null):"string"===typeof b?new t(null,1,[Qp,b],null):b instanceof V?new hk([b,!0],!0,!1):b;kh(b)||Gr(L(["Metadata must be Symbol,Keyword,String or Map"],0));return((a=Xr.N?Xr.N(a,!0,null,!0):Xr.call(null,a,!0,null))?a.B&262144||a.Uh||(a.B?0:v(of,a)):v(of,a))?Ng(a,dl.l(L([ch(a),b],0))):Gr(L(["Metadata can only be applied to IWithMetas"],0))}function ns(a){return ml(Wr("}",a))}
function os(a){return Al(hs(a))}function ps(a){Xr.N?Xr.N(a,!0,null,!0):Xr.call(null,a,!0,null);return a}function Ir(a){return'"'===a?gs:":"===a?js:";"===a?Jr:"'"===a?ks(new C(null,"quote","quote",1377916282,null)):"@"===a?ks(new C(null,"deref","deref",1494944732,null)):"^"===a?ms:"`"===a?Yr:"~"===a?Yr:"("===a?cs:")"===a?bs:"["===a?ds:"]"===a?bs:"{"===a?es:"}"===a?bs:"\\"===a?Br:"#"===a?Zr:null}function $r(a){return"{"===a?ns:"\x3c"===a?ls():'"'===a?os:"!"===a?Jr:"_"===a?ps:null}
function Xr(a,b,c){for(;;){var d=Br(a);if(null==d)return u(b)?Gr(L(["EOF while reading"],0)):c;if(!Er(d))if(";"===d){var e=function(){var b=a,c=d;return Jr.a?Jr.a(b,c):Jr.call(null,b)}();a=e}else{var f=Ir(d),e=u(f)?function(){var b=a,c=d;return f.a?f.a(b,c):f.call(null,b,c)}():Fr(a,d)?fs(a,d):is(a,d);if(e!==a)return e}}}
var qs=function(a,b){return function(c,d){return Q(u(d)?b:a,c)}}(new T(null,13,5,U,[null,31,28,31,30,31,30,31,31,30,31,30,31],null),new T(null,13,5,U,[null,31,29,31,30,31,30,31,31,30,31,30,31],null)),rs=/(\d\d\d\d)(?:-(\d\d)(?:-(\d\d)(?:[T](\d\d)(?::(\d\d)(?::(\d\d)(?:[.](\d+))?)?)?)?)?)?(?:[Z]|([-+])(\d\d):(\d\d))?/;function ss(a){a=parseInt(a,10);return xe(isNaN(a))?a:null}
function ts(a,b,c,d){a<=b&&b<=c||Gr(L([[y(d),y(" Failed:  "),y(a),y("\x3c\x3d"),y(b),y("\x3c\x3d"),y(c)].join("")],0));return b}
function us(a){var b=yl(rs,a);N(b,0);var c=N(b,1),d=N(b,2),e=N(b,3),f=N(b,4),g=N(b,5),k=N(b,6),l=N(b,7),m=N(b,8),p=N(b,9),q=N(b,10);if(xe(b))return Gr(L([[y("Unrecognized date/time syntax: "),y(a)].join("")],0));var r=ss(c),w=function(){var a=ss(d);return u(a)?a:1}();a=function(){var a=ss(e);return u(a)?a:1}();var b=function(){var a=ss(f);return u(a)?a:0}(),c=function(){var a=ss(g);return u(a)?a:0}(),B=function(){var a=ss(k);return u(a)?a:0}(),I=function(){var a;a:if(qg.a(3,M(l)))a=l;else if(3<M(l))a=
l.substring(0,3);else for(a=new je(l);;)if(3>a.Jc.length)a=a.append("0");else{a=a.toString();break a}a=ss(a);return u(a)?a:0}(),m=(qg.a(m,"-")?-1:1)*(60*function(){var a=ss(p);return u(a)?a:0}()+function(){var a=ss(q);return u(a)?a:0}());return new T(null,8,5,U,[r,ts(1,w,12,"timestamp month field must be in range 1..12"),ts(1,a,function(){var a;a=0===(r%4+4)%4;u(a)&&(a=xe(0===(r%100+100)%100),a=u(a)?a:0===(r%400+400)%400);return qs.a?qs.a(w,a):qs.call(null,w,a)}(),"timestamp day field must be in range 1..last day in month"),
ts(0,b,23,"timestamp hour field must be in range 0..23"),ts(0,c,59,"timestamp minute field must be in range 0..59"),ts(0,B,qg.a(c,59)?60:59,"timestamp second field must be in range 0..60"),ts(0,I,999,"timestamp millisecond field must be in range 0..999"),m],null)}
var vs,ws=new t(null,4,["inst",function(a){var b;if("string"===typeof a)if(b=us(a),u(b)){a=N(b,0);var c=N(b,1),d=N(b,2),e=N(b,3),f=N(b,4),g=N(b,5),k=N(b,6);b=N(b,7);b=new Date(Date.UTC(a,c-1,d,e,f,g,k)-6E4*b)}else b=Gr(L([[y("Unrecognized date/time syntax: "),y(a)].join("")],0));else b=Gr(L(["Instance literal expects a string for its timestamp."],0));return b},"uuid",function(a){return"string"===typeof a?qm(a):Gr(L(["UUID literal expects a string as its representation."],0))},"queue",function(a){return lh(a)?
hj.a(Sj,a):Gr(L(["Queue literal expects a vector for its elements."],0))},"js",function(a){if(lh(a)){var b=[];a=E(a);for(var c=null,d=0,e=0;;)if(e<d){var f=c.ba(null,e);b.push(f);e+=1}else if(a=E(a))c=a,mh(c)?(a=Pf(c),e=Qf(c),c=a,d=M(a),a=e):(a=H(c),b.push(a),a=J(c),c=null,d=0),e=0;else break;return b}if(kh(a)){b={};a=E(a);c=null;for(e=d=0;;)if(e<d){var g=c.ba(null,e),f=N(g,0),g=N(g,1);b[ei(f)]=g;e+=1}else if(a=E(a))mh(a)?(d=Pf(a),a=Qf(a),c=d,d=M(d)):(d=H(a),c=N(d,0),d=N(d,1),b[ei(c)]=d,a=J(a),c=
null,d=0),e=0;else break;return b}return Gr(L([[y("JS literal expects a vector or map containing "),y("only string or unqualified keyword keys")].join("")],0))}],null);vs=Si?Si(ws):Ri.call(null,ws);var xs=Si?Si(null):Ri.call(null,null);
function as(a,b){var c=is(a,b),d=Q(K.g?K.g(vs):K.call(null,vs),""+y(c)),e=K.g?K.g(xs):K.call(null,xs);return u(d)?(c=Xr(a,!0,null),d.g?d.g(c):d.call(null,c)):u(e)?(d=Xr(a,!0,null),e.a?e.a(c,d):e.call(null,c,d)):Gr(L(["Could not find tag parser for ",""+y(c)," in ",Wi.l(L([Dh(K.g?K.g(vs):K.call(null,vs))],0))],0))};var ys=function ys(b,c,d,e,f,g,k){if(b?b.of:b)return b.of(b,c,d,e,f,g,k);var l;l=ys[n(null==b?null:b)];if(!l&&(l=ys._,!l))throw x("AjaxImpl.-js-ajax-request",b);return l.call(null,b,c,d,e,f,g,k)},zs={},As=function As(b){if(b?b.rf:b)return b.rf(b);var c;c=As[n(null==b?null:b)];if(!c&&(c=As._,!c))throw x("AjaxResponse.-status",b);return c.call(null,b)},Bs=function Bs(b){if(b?b.sf:b)return b.sf(b);var c;c=Bs[n(null==b?null:b)];if(!c&&(c=Bs._,!c))throw x("AjaxResponse.-status-text",b);return c.call(null,
b)},Cs=function Cs(b){if(b?b.pf:b)return b.pf(b);var c;c=Cs[n(null==b?null:b)];if(!c&&(c=Cs._,!c))throw x("AjaxResponse.-body",b);return c.call(null,b)},Ds=function Ds(b,c){if(b?b.qf:b)return b.qf(b,c);var d;d=Ds[n(null==b?null:b)];if(!d&&(d=Ds._,!d))throw x("AjaxResponse.-get-response-header",b);return d.call(null,b,c)},Es=function Es(b){if(b?b.tf:b)return b.tf(b);var c;c=Es[n(null==b?null:b)];if(!c&&(c=Es._,!c))throw x("AjaxResponse.-was-aborted",b);return c.call(null,b)};
"undefined"!==typeof FormData&&(FormData.prototype.Be=!0);"undefined"!==typeof ArrayBufferView&&(ArrayBufferView.prototype.Be=!0);"undefined"!==typeof Blob&&(Blob.prototype.Be=!0);"undefined"!==typeof Document&&(Document.prototype.Be=!0);h=Dd.prototype;
h.of=function(a,b,c,d,e,f,g){a=rh(g)?S.a(Ti,g):g;var k=Yg(a,Vp,0),l=Yg(a,mq,!1);Tb(this,"complete",function(){return function(a){a=a.target;return f.g?f.g(a):f.call(null,a)}}(this,"complete",this,this,g,a,k,l));this.od=Math.max(0,k);this.sh=l;this.send(b,c,d,Tl(e));return this};h.pf=function(){var a;try{a=this.ia?this.ia.responseText:""}catch(b){sd(this.Ea,"Can not get responseText: "+b.message),a=""}return a};h.rf=function(){return Pd(this)};h.sf=function(){return Qd(this)};h.qf=function(a,b){return this.getResponseHeader(b)};
h.tf=function(){return qg.a(this.Id,7)};h=XMLHttpRequest.prototype;
h.of=function(a,b,c,d,e,f,g){a=rh(g)?S.a(Ti,g):g;var k=Yg(a,Vp,0),l=Yg(a,mq,!1),m=Q(a,ko);this.timeout=k;this.withCredentials=l;this.onreadystatechange=function(a){return function(b){return qg.a(kp,(new t(null,5,[0,Qn,1,dq,2,vo,3,po,4,kp],null)).call(null,b.target.readyState))?f.g?f.g(a):f.call(null,a):null}}(this,g,a,k,l,m);this.open(c,b,!0);b=uo.g(m);u(b)&&(this.responseType=ei(b));e=E(e);b=null;for(g=c=0;;)if(g<c)k=b.ba(null,g),a=N(k,0),k=N(k,1),this.setRequestHeader(a,k),g+=1;else if(e=E(e))mh(e)?
(c=Pf(e),e=Qf(e),b=c,c=M(c)):(c=H(e),b=N(c,0),c=N(c,1),this.setRequestHeader(b,c),e=J(e),b=null,c=0),g=0;else break;this.send(u(d)?d:"");return this};h.pf=function(){return this.response};h.rf=function(){return this.status};h.sf=function(){return this.statusText};h.qf=function(a,b){return this.getResponseHeader(b)};h.tf=function(){return qg.a(0,this.readyState)};function Fs(a){return Ki(yh([a]),new T(null,6,5,U,[200,201,202,204,205,206],null))}
function Gs(a){return function(b){return a.write(b)}}function Hs(){var a=X,a=rh(a)?S.a(Ti,a):a,b=Q(a,uo),c=Q(a,lp),a=u(c)?c:vr(u(b)?b:Up,a);return new t(null,2,[Vo,Gs(a),Fp,"application/transit+json"],null)}function Is(a,b){return function(c){c=Cs(c);c=a.se(c);return u(b)?c:Wl(c)}}var Js=function Js(){switch(arguments.length){case 0:return Js.C();case 1:return Js.g(arguments[0]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}};Js.C=function(){return Js.g(X)};
Js.g=function(a){var b=rh(a)?S.a(Ti,a):a,c=Q(b,uo),d=Q(b,tp);a=Q(b,Xn);b=u(d)?d:nr(u(c)?c:Up,b);return new t(null,3,[On,Is(b,a),qn,"Transit",Fp,"application/transit+json"],null)};Js.I=1;function Ks(a){if(u(a)){var b=new Xc(Tl(a));a=Vc(b);if("undefined"==typeof a)throw Error("Keys are undefined");for(var c=new Xd(null,0,void 0),b=Uc(b),d=0;d<a.length;d++){var e=a[d],f=b[d];"array"==n(f)?ie(c,e,f):c.add(e,f)}a=c.toString()}else a=null;return a}
function Ls(a,b){return lh(b)?Ls(a,Rg(b)):kh(b)?b:b.g?b.g(a):b.call(null,a)}function Ms(a,b){var c=lh(b)?H(b):Fp.g(Ls(a,b));return u(c)?c:"*/*"}function Ns(a){return function(b){b=lh(b)?H(b):Fp.g(Ls(a,b));return u(b)?b:"*/*"}}function Os(a,b){return function(c){c=Ms(b,c);return qg.a(c,"*/*")||0<=a.indexOf(c)}}function Ps(a,b){var c=rh(b)?S.a(Ti,b):b,d=Q(c,ko),e=Ds(a,"Content-Type");return Ls(c,H(dj.a(Os(u(e)?e:"",c),d)))}function Qs(a){return function(b){return On.g(Ps(b,a)).call(null,b)}}
var Rs=function Rs(){return Rs.l(arguments[0],arguments[1],arguments[2],3<arguments.length?new F(Array.prototype.slice.call(arguments,3),0):null)};Rs.l=function(a,b,c,d){return new T(null,2,5,U,[!1,Ee(Tg,new t(null,3,[hp,a,lo,b,Un,c],null),Y.a(Gj,kj(2,2,d)))],null)};Rs.I=3;Rs.J=function(a){var b=H(a),c=J(a);a=H(c);var d=J(c),c=H(d),d=J(d);return Rs.l(b,a,c,d)};
function Ss(a,b){var c=rh(a)?S.a(Ti,a):a,d=Q(c,On);try{var e=As(b),f=Oi.a(Rs,e);if(qg.a(-1,e))return u(Es(b))?f.a?f.a("Request aborted by client.",no):f.call(null,"Request aborted by client.",no):f.a?f.a("Request timed out.",Vp):f.call(null,"Request timed out.",Vp);try{var g=d.g?d.g(b):d.call(null,b);if(u(Fs(e)))return new T(null,2,5,U,[!0,g],null);var k=Bs(b);return f.N?f.N(k,Lp,pn,g):f.call(null,k,Lp,pn,g)}catch(l){if(l instanceof Object){var f=l,d=U,m,p=rh(c)?S.a(Ti,c):c,q=Q(p,qn),r=new t(null,
3,[hp,e,Un,Lp,pn,null],null),w=[y(f.message),y("  Format should have been "),y(q)].join(""),B=R.l(r,lo,w,L([Un,up,Ln,Cs(b)],0));m=u(Fs(e))?B:R.l(r,lo,Bs(b),L([Lo,B],0));return new T(null,2,5,d,[!1,m],null)}throw l;}}catch(I){if(I instanceof Object)return f=I,Rs.l(0,f.message,Np,L([Np,f],0));throw I;}}function Ts(a){return a instanceof V?ei(a).toUpperCase():a}function Us(a,b){return function(c){c=Ss(a,c);return b.g?b.g(c):b.call(null,c)}}
function Vs(a){a=rh(a)?S.a(Ti,a):a;var b=Q(a,Wn),c=Q(a,Kn),d;d=rh(a)?S.a(Ti,a):a;var e=Q(d,ko);if(lh(e)){var e=rh(d)?S.a(Ti,d):d,f=Q(e,ko),e=lh(f)?xr(", ",Y.a(Ns(e),f)):Ms(e,f);d=new t(null,3,[On,Qs(d),zn,[y("(from "),y(e),y(")")].join(""),Fp,e],null)}else if(kh(e))d=e;else if(th(e))d=new t(null,3,[On,e,qn,"custom",Fp,"*/*"],null);else throw Error([y("unrecognized response format: "),y(e)].join(""));var b=Ts(b),g;var k=d,l=rh(a)?S.a(Ti,a):a,e=Q(l,Pp),m=Q(l,Wn);g=Q(l,zn);f=Q(l,ro);l=Q(l,Uo);k=rh(k)?
S.a(Ti,k):k;k=Q(k,Fp);l=dl.l(L([new t(null,1,["Accept",k],null),u(l)?l:X],0));if(qg.a(Ts(m),"GET"))g=U,e=u(f)?u(zl(/\?/,e))?[y(e),y("\x26"),y(Ks(f))].join(""):[y(e),y("?"),y(Ks(f))].join(""):e,g=new T(null,3,5,g,[e,null,l],null);else{m=kh(g)?g:th(g)?new t(null,2,[Vo,g,Fp,"text/plain"],null):null;m=rh(m)?S.a(Ti,m):m;k=Q(m,Vo);m=Q(m,Fp);if(null!=k)f=k.g?k.g(f):k.call(null,f);else if(k=f?u(u(null)?null:f.Be)?!0:f.xc?!1:v(zs,f):v(zs,f),!u(k?k:"string"===typeof f))throw Error([y("unrecognized request format: "),
y(g)].join(""));g=u(m)?new t(null,1,["Content-Type",[y(m),y("; charset\x3dutf-8")].join("")],null):null;g=dl.l(L([l,g],0));g=new T(null,3,5,U,[e,f,g],null)}e=N(g,0);f=N(g,1);g=N(g,2);l=rh(a)?S.a(Ti,a):a;l=Q(l,jq);if(u(l))d=Us(d,l);else throw Error("No ajax handler provided.");c=u(c)?c:new Dd;ys(c,e,b,f,g,d,a)};function Ws(a,b){var c=Array.prototype.slice.call(arguments),d=c.shift();if("undefined"==typeof d)throw Error("[goog.string.format] Template required");return d.replace(/%([0\-\ \+]*)(\d+)?(\.(\d+))?([%sfdiu])/g,function(a,b,d,k,l,m,p,q){if("%"==m)return"%";var r=c.shift();if("undefined"==typeof r)throw Error("[goog.string.format] Not enough arguments");arguments[0]=r;return Ws.zc[m].apply(null,arguments)})}Ws.zc={};
Ws.zc.s=function(a,b,c){return isNaN(c)||""==c||a.length>=c?a:a=-1<b.indexOf("-",0)?a+Array(c-a.length+1).join(" "):Array(c-a.length+1).join(" ")+a};
Ws.zc.f=function(a,b,c,d,e){d=a.toString();isNaN(e)||""==e||(d=parseFloat(a).toFixed(e));var f;f=0>a?"-":0<=b.indexOf("+")?"+":0<=b.indexOf(" ")?" ":"";0<=a&&(d=f+d);if(isNaN(c)||d.length>=c)return d;d=isNaN(e)?Math.abs(a).toString():Math.abs(a).toFixed(e);a=c-d.length-f.length;return d=0<=b.indexOf("-",0)?f+d+Array(a+1).join(" "):f+Array(a+1).join(0<=b.indexOf("0",0)?"0":" ")+d};Ws.zc.d=function(a,b,c,d,e,f,g,k){return Ws.zc.f(parseInt(a,10),b,c,d,0,f,g,k)};Ws.zc.i=Ws.zc.d;Ws.zc.u=Ws.zc.d;function Xs(a){return a}function Ys(){return Zs(arguments[0],1<arguments.length?new F(Array.prototype.slice.call(arguments,1),0):null)}function Zs(a,b){return S.j(Ws,a,b)}function $s(a){var b=typeof a;return 20>M(""+y(a))?a:mg([y("a-"),y(b)].join(""))}function at(a,b,c,d){this.ta=a;this.value=b;this.ei=c;this.fi=d;this.B=2147483648;this.O=0}at.prototype.S=function(a,b,c){return Ff(bt.g?bt.g(this):bt.call(null,this),b,c)};
function bt(a){return z(z(pg,function(){var b=a.ei;return K.g?K.g(b):K.call(null,b)}()),function(){var b=a.fi;return u(b)?b:new C(null,"not","not",1044554643,null)}())}function ct(a,b,c,d){return new at(a,b,c,d)}function dt(a,b){this.name=a;this.error=b;this.B=2147483648;this.O=0}dt.prototype.S=function(a,b,c){return Ff(et.g?et.g(this):et.call(null,this),b,c)};function et(a){return z(z(z(pg,a.name),a.error),new C(null,"named","named",1218138048,null))}
function ft(a,b,c,d){this.error=a;this.A=b;this.o=c;this.w=d;this.B=2229667594;this.O=8192}h=ft.prototype;h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "error":return this.error;default:return Yg(this.o,b,c)}};h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#schema.utils.ErrorContainer{",", ","}",c,ri.a(new T(null,1,5,U,[new T(null,2,5,U,[Lp,this.error],null)],null),this.o))};h.U=function(){return this.A};
h.da=function(){return new ft(this.error,this.A,this.o,this.w)};h.Z=function(){return 1+M(this.o)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};h.ya=function(a,b){return vh(new hl(null,new t(null,1,[Lp,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new ft(this.error,this.A,yi($g.a(this.o,b)),null)};
h.ra=function(a,b,c){return u(W.a?W.a(Lp,b):W.call(null,Lp,b))?new ft(c,this.A,this.o,null):new ft(this.error,this.A,R.j(this.o,b,c),null)};h.Y=function(){return E(ri.a(new T(null,1,5,U,[new T(null,2,5,U,[Lp,this.error],null)],null),this.o))};h.V=function(a,b){return new ft(this.error,b,this.o,this.w)};h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};
function gt(a){if(!u(a))throw Error([y("Assert failed: "),y(Wi.l(L([new C(null,"x","x",-555367584,null)],0)))].join(""));return new ft(a,null,null,null)}function ht(a){return u(a instanceof ft)?a.error:null}function it(a){return function(b,c){var d=ht(c);if(u(d))return gt(Tg.a(function(){var c=ht(b);return u(c)?c:a.g?a.g(b):a.call(null,b)}(),d));d=ht(b);return u(d)?gt(Tg.a(d,null)):Tg.a(b,c)}}function jt(a,b){a.schema$utils$schema=b}function kt(a){this.q=a}kt.prototype.Pi=function(){return this.q};
kt.prototype.kh=function(a,b){return this.q=b};var lt=new kt(!1);lt.hd=Oi.a(function mt(b){if(b?b.Pi:b)return b.q;var c;c=mt[n(null==b?null:b)];if(!c&&(c=mt._,!c))throw x("PSimpleCell.get_cell",b);return c.call(null,b)},lt);lt.Rl=Oi.a(function nt(b,c){if(b?b.kh:b)return b.kh(0,c);var d;d=nt[n(null==b?null:b)];if(!d&&(d=nt._,!d))throw x("PSimpleCell.set_cell",b);return d.call(null,b,c)},lt);var ot,pt={},Zl=function Zl(b){if(b?b.kb:b)return b.kb(b);var c;c=Zl[n(null==b?null:b)];if(!c&&(c=Zl._,!c))throw x("Schema.walker",b);return c.call(null,b)},qt=function qt(b){if(b?b.jb:b)return b.jb(b);var c;c=qt[n(null==b?null:b)];if(!c&&(c=qt._,!c))throw x("Schema.explain",b);return c.call(null,b)};function rt(){throw Error([y("Walking is unsupported outside of start-walker; "),y("all composite schemas must eagerly bind subschema-walkers "),y("outside the returned walker.")].join(""));}
function st(a,b){var c=rt;rt=a;try{return rt.g?rt.g(b):rt.call(null,b)}finally{rt=c}}function tt(a){return Ni.a(ht,st(Yl(),a))}pt["function"]=!0;
Zl["function"]=function(a){return function(b){return function(c){var d=null==c||xe(function(){var b=a===c.constructor;return b?b:c instanceof a}())?gt(ct(a,c,new Nl(function(){return function(){return z(z(z(pg,$s(c)),a),new C(null,"instance?","instance?",1075939923,null))}}(b),null),null)):null;return u(d)?d:b.g?b.g(c):b.call(null,c)}}(function(){var b=a.schema$utils$schema;return u(b)?rt.g?rt.g(b):rt.call(null,b):Kh}())};qt["function"]=function(a){var b=a.schema$utils$schema;return u(b)?qt(b):a};
function ut(a,b,c,d){this.Uc=a;this.A=b;this.o=c;this.w=d;this.B=2229667594;this.O=8192}h=ut.prototype;h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "_":return this.Uc;default:return Yg(this.o,b,c)}};h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#schema.core.AnythingSchema{",", ","}",c,ri.a(new T(null,1,5,U,[new T(null,2,5,U,[Vn,this.Uc],null)],null),this.o))};h.U=function(){return this.A};
h.da=function(){return new ut(this.Uc,this.A,this.o,this.w)};h.Z=function(){return 1+M(this.o)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};h.ya=function(a,b){return vh(new hl(null,new t(null,1,[Vn,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new ut(this.Uc,this.A,yi($g.a(this.o,b)),null)};
h.ra=function(a,b,c){return u(W.a?W.a(Vn,b):W.call(null,Vn,b))?new ut(c,this.A,this.o,null):new ut(this.Uc,this.A,R.j(this.o,b,c),null)};h.Y=function(){return E(ri.a(new T(null,1,5,U,[new T(null,2,5,U,[Vn,this.Uc],null)],null),this.o))};h.V=function(a,b){return new ut(this.Uc,b,this.o,this.w)};h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};h.qb=!0;h.kb=function(){return Kh};h.jb=function(){return new C(null,"Any","Any",1277492269,null)};var vt=new ut(null,null,null,null);
function wt(a,b,c,d){this.xa=a;this.A=b;this.o=c;this.w=d;this.B=2229667594;this.O=8192}h=wt.prototype;h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "v":return this.xa;default:return Yg(this.o,b,c)}};h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#schema.core.EqSchema{",", ","}",c,ri.a(new T(null,1,5,U,[new T(null,2,5,U,[Gn,this.xa],null)],null),this.o))};h.U=function(){return this.A};
h.da=function(){return new wt(this.xa,this.A,this.o,this.w)};h.Z=function(){return 1+M(this.o)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};h.ya=function(a,b){return vh(new hl(null,new t(null,1,[Gn,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new wt(this.xa,this.A,yi($g.a(this.o,b)),null)};
h.ra=function(a,b,c){return u(W.a?W.a(Gn,b):W.call(null,Gn,b))?new wt(c,this.A,this.o,null):new wt(this.xa,this.A,R.j(this.o,b,c),null)};h.Y=function(){return E(ri.a(new T(null,1,5,U,[new T(null,2,5,U,[Gn,this.xa],null)],null),this.o))};h.V=function(a,b){return new wt(this.xa,b,this.o,this.w)};h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};h.qb=!0;
h.kb=function(){var a=this;return function(b){return function(c){return qg.a(a.xa,c)?c:gt(ct(b,c,new Nl(function(){return function(){return z(z(z(pg,$s(c)),a.xa),new C(null,"\x3d","\x3d",-1501502141,null))}}(b),null),null))}}(this)};h.jb=function(){return z(z(pg,this.xa),new C(null,"eq","eq",1021992460,null))};function xt(a,b,c,d,e){this.pb=a;this.qc=b;this.A=c;this.o=d;this.w=e;this.B=2229667594;this.O=8192}h=xt.prototype;h.R=function(a,b){return Ue.j(this,b,null)};
h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "p?":return this.pb;case "pred-name":return this.qc;default:return Yg(this.o,b,c)}};h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#schema.core.Predicate{",", ","}",c,ri.a(new T(null,2,5,U,[new T(null,2,5,U,[fq,this.pb],null),new T(null,2,5,U,[vp,this.qc],null)],null),this.o))};h.U=function(){return this.A};h.da=function(){return new xt(this.pb,this.qc,this.A,this.o,this.w)};
h.Z=function(){return 2+M(this.o)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};h.ya=function(a,b){return vh(new hl(null,new t(null,2,[vp,null,fq,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new xt(this.pb,this.qc,this.A,yi($g.a(this.o,b)),null)};
h.ra=function(a,b,c){return u(W.a?W.a(fq,b):W.call(null,fq,b))?new xt(c,this.qc,this.A,this.o,null):u(W.a?W.a(vp,b):W.call(null,vp,b))?new xt(this.pb,c,this.A,this.o,null):new xt(this.pb,this.qc,this.A,R.j(this.o,b,c),null)};h.Y=function(){return E(ri.a(new T(null,2,5,U,[new T(null,2,5,U,[fq,this.pb],null),new T(null,2,5,U,[vp,this.qc],null)],null),this.o))};h.V=function(a,b){return new xt(this.pb,this.qc,b,this.o,this.w)};h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};
h.qb=!0;h.kb=function(){var a=this;return function(b){return function(c){var d;try{d=u(a.pb.g?a.pb.g(c):a.pb.call(null,c))?null:new C(null,"not","not",1044554643,null)}catch(e){if(e instanceof Object)d=new C(null,"throws?","throws?",789734533,null);else throw e;}return u(d)?gt(ct(b,c,new Nl(function(){return function(){return z(z(pg,$s(c)),a.qc)}}(d,d,b),null),d)):c}}(this)};
h.jb=function(){return qg.a(this.pb,uh)?new C(null,"Int","Int",-2116888740,null):qg.a(this.pb,ci)?new C(null,"Keyword","Keyword",-850065993,null):qg.a(this.pb,kg)?new C(null,"Symbol","Symbol",716452869,null):qg.a(this.pb,ye)?new C(null,"Str","Str",907970895,null):z(z(pg,this.qc),new C(null,"pred","pred",-727012372,null))};function yt(a,b){if(!th(a))throw Error(Zs("Not a function: %s",L([a],0)));return new xt(a,b,null,null,null)}
function zt(a,b,c,d){this.p=a;this.A=b;this.o=c;this.w=d;this.B=2229667594;this.O=8192}h=zt.prototype;h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "p":return this.p;default:return Yg(this.o,b,c)}};h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#schema.core.Protocol{",", ","}",c,ri.a(new T(null,1,5,U,[new T(null,2,5,U,[kq,this.p],null)],null),this.o))};h.U=function(){return this.A};
h.da=function(){return new zt(this.p,this.A,this.o,this.w)};h.Z=function(){return 1+M(this.o)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};h.ya=function(a,b){return vh(new hl(null,new t(null,1,[kq,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new zt(this.p,this.A,yi($g.a(this.o,b)),null)};
h.ra=function(a,b,c){return u(W.a?W.a(kq,b):W.call(null,kq,b))?new zt(c,this.A,this.o,null):new zt(this.p,this.A,R.j(this.o,b,c),null)};h.Y=function(){return E(ri.a(new T(null,1,5,U,[new T(null,2,5,U,[kq,this.p],null)],null),this.o))};h.V=function(a,b){return new zt(this.p,b,this.o,this.w)};h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};h.qb=!0;
h.kb=function(){return function(a){return function(b){return u(iq.g(ch(a)).call(null,b))?b:gt(ct(a,b,new Nl(function(a){return function(){return z(z(z(pg,$s(b)),mo.g(ch(a))),new C(null,"satisfies?","satisfies?",-433227199,null))}}(a),null),null))}}(this)};h.jb=function(){return z(z(pg,mo.g(ch(this))),new C(null,"protocol","protocol",-2001965651,null))};RegExp.prototype.qb=!0;
RegExp.prototype.kb=function(){return function(a){return function(b){return"string"!==typeof b?gt(ct(a,b,new Nl(function(){return function(){return z(z(pg,$s(b)),new C(null,"string?","string?",-1129175764,null))}}(a),null),null)):xe(zl(a,b))?gt(ct(a,b,new Nl(function(a){return function(){return z(z(z(pg,$s(b)),qt(a)),new C(null,"re-find","re-find",1143444147,null))}}(a),null),null)):b}}(this)};RegExp.prototype.jb=function(){return mg([y('#"'),y((""+y(this)).slice(1,-1)),y('"')].join(""))};yt(ye,ye);
var At=Boolean;yt(uh,new C(null,"integer?","integer?",1303791671,null));var Bt=yt(ci,new C(null,"keyword?","keyword?",1917797069,null));yt(kg,new C(null,"symbol?","symbol?",1820680511,null));
"undefined"===typeof ot&&(ot=function(a){this.vi=a;this.B=393216;this.O=0},h=ot.prototype,h.V=function(a,b){return new ot(b)},h.U=function(){return this.vi},h.qb=!0,h.kb=function(){return function(a){return function(b){return b instanceof RegExp?b:gt(ct(a,b,new Nl(function(){return function(){return z(z(z(pg,$s(b)),new C("js","RegExp","js/RegExp",1778210562,null)),new C(null,"instance?","instance?",1075939923,null))}}(a),null),null))}}(this)},h.jb=function(){return new C(null,"Regex","Regex",205914413,
null)},ot.ie=function(){return new T(null,1,5,U,[new C(null,"meta26769","meta26769",-1501282898,null)],null)},ot.bd=!0,ot.ad="schema.core/t26768",ot.Cd=function(a,b){return Cf(b,"schema.core/t26768")});function Ct(a,b,c,d){this.ta=a;this.A=b;this.o=c;this.w=d;this.B=2229667594;this.O=8192}h=Ct.prototype;h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "schema":return this.ta;default:return Yg(this.o,b,c)}};
h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#schema.core.Maybe{",", ","}",c,ri.a(new T(null,1,5,U,[new T(null,2,5,U,[vn,this.ta],null)],null),this.o))};h.U=function(){return this.A};h.da=function(){return new Ct(this.ta,this.A,this.o,this.w)};h.Z=function(){return 1+M(this.o)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};
h.ya=function(a,b){return vh(new hl(null,new t(null,1,[vn,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new Ct(this.ta,this.A,yi($g.a(this.o,b)),null)};h.ra=function(a,b,c){return u(W.a?W.a(vn,b):W.call(null,vn,b))?new Ct(c,this.A,this.o,null):new Ct(this.ta,this.A,R.j(this.o,b,c),null)};h.Y=function(){return E(ri.a(new T(null,1,5,U,[new T(null,2,5,U,[vn,this.ta],null)],null),this.o))};h.V=function(a,b){return new Ct(this.ta,b,this.o,this.w)};
h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};h.qb=!0;h.kb=function(){return function(a){return function(b){return null==b?null:a.g?a.g(b):a.call(null,b)}}(rt.g?rt.g(this.ta):rt.call(null,this.ta),this)};h.jb=function(){return z(z(pg,qt(this.ta)),new C(null,"maybe","maybe",1326133967,null))};function Dt(a,b,c,d){this.Za=a;this.A=b;this.o=c;this.w=d;this.B=2229667594;this.O=8192}h=Dt.prototype;h.R=function(a,b){return Ue.j(this,b,null)};
h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "schemas":return this.Za;default:return Yg(this.o,b,c)}};h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#schema.core.Either{",", ","}",c,ri.a(new T(null,1,5,U,[new T(null,2,5,U,[fp,this.Za],null)],null),this.o))};h.U=function(){return this.A};h.da=function(){return new Dt(this.Za,this.A,this.o,this.w)};h.Z=function(){return 1+M(this.o)};
h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};h.ya=function(a,b){return vh(new hl(null,new t(null,1,[fp,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new Dt(this.Za,this.A,yi($g.a(this.o,b)),null)};h.ra=function(a,b,c){return u(W.a?W.a(fp,b):W.call(null,fp,b))?new Dt(c,this.A,this.o,null):new Dt(this.Za,this.A,R.j(this.o,b,c),null)};
h.Y=function(){return E(ri.a(new T(null,1,5,U,[new T(null,2,5,U,[fp,this.Za],null)],null),this.o))};h.V=function(a,b){return new Dt(this.Za,b,this.o,this.w)};h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};h.qb=!0;
h.kb=function(){return function(a,b){return function(c){for(var d=E(a);;){if(xe(d))return gt(ct(b,c,new Nl(function(){return function(){return z(z(z(pg,new C(null,"schemas","schemas",-2079365190,null)),z(z(z(pg,$s(c)),new C(null,"%","%",-950237169,null)),new C(null,"check","check",-1428126865,null))),new C(null,"some","some",-310548046,null))}}(d,a,b),null),null));var e=H(d).call(null,c);if(xe(e instanceof ft))return e;d=J(d)}}}(jj.a(rt,this.Za),this)};
h.jb=function(){return Lg(new C(null,"either","either",-2144373018,null),Y.a(qt,this.Za))};function Et(a){return new Dt(a,null,null,null)}function Ft(a,b,c,d){this.Za=a;this.A=b;this.o=c;this.w=d;this.B=2229667594;this.O=8192}h=Ft.prototype;h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "schemas":return this.Za;default:return Yg(this.o,b,c)}};
h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#schema.core.Both{",", ","}",c,ri.a(new T(null,1,5,U,[new T(null,2,5,U,[fp,this.Za],null)],null),this.o))};h.U=function(){return this.A};h.da=function(){return new Ft(this.Za,this.A,this.o,this.w)};h.Z=function(){return 1+M(this.o)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};
h.ya=function(a,b){return vh(new hl(null,new t(null,1,[fp,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new Ft(this.Za,this.A,yi($g.a(this.o,b)),null)};h.ra=function(a,b,c){return u(W.a?W.a(fp,b):W.call(null,fp,b))?new Ft(c,this.A,this.o,null):new Ft(this.Za,this.A,R.j(this.o,b,c),null)};h.Y=function(){return E(ri.a(new T(null,1,5,U,[new T(null,2,5,U,[fp,this.Za],null)],null),this.o))};h.V=function(a,b){return new Ft(this.Za,b,this.o,this.w)};
h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};h.qb=!0;h.kb=function(){return function(a,b){return function(c){return Ee(function(){return function(a,b){return u(a instanceof ft)?a:b.g?b.g(a):b.call(null,a)}}(a,b),c,a)}}(jj.a(rt,this.Za),this)};h.jb=function(){return Lg(new C(null,"both","both",1246882687,null),Y.a(qt,this.Za))};function Gt(a){return a instanceof V||!1}function Ht(a,b,c,d){this.k=a;this.A=b;this.o=c;this.w=d;this.B=2229667594;this.O=8192}h=Ht.prototype;
h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "k":return this.k;default:return Yg(this.o,b,c)}};h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#schema.core.OptionalKey{",", ","}",c,ri.a(new T(null,1,5,U,[new T(null,2,5,U,[Ro,this.k],null)],null),this.o))};h.U=function(){return this.A};h.da=function(){return new Ht(this.k,this.A,this.o,this.w)};h.Z=function(){return 1+M(this.o)};
h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};h.ya=function(a,b){return vh(new hl(null,new t(null,1,[Ro,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new Ht(this.k,this.A,yi($g.a(this.o,b)),null)};h.ra=function(a,b,c){return u(W.a?W.a(Ro,b):W.call(null,Ro,b))?new Ht(c,this.A,this.o,null):new Ht(this.k,this.A,R.j(this.o,b,c),null)};
h.Y=function(){return E(ri.a(new T(null,1,5,U,[new T(null,2,5,U,[Ro,this.k],null)],null),this.o))};h.V=function(a,b){return new Ht(this.k,b,this.o,this.w)};h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};function It(a){return new Ht(a,null,null,null)}function Jt(a){return a instanceof Ht}function Kt(a){if(a instanceof V)return a;if(u(Jt(a)))return a.k;throw Error(Zs("Bad explicit key: %s",L([a],0)));}function Lt(a){var b=Gt(a);return u(b)?b:Jt(a)}
function Mt(a){return u(Lt(a))?a instanceof V?a:z(z(pg,Kt(a)),u(Gt(a))?new C(null,"required-key","required-key",1624616412,null):u(Jt(a))?new C(null,"optional-key","optional-key",988406145,null):null):qt(a)}function Nt(a,b,c,d,e){this.ub=a;this.jc=b;this.A=c;this.o=d;this.w=e;this.B=2229667594;this.O=8192}h=Nt.prototype;h.R=function(a,b){return Ue.j(this,b,null)};
h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "kspec":return this.ub;case "val-schema":return this.jc;default:return Yg(this.o,b,c)}};h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#schema.core.MapEntry{",", ","}",c,ri.a(new T(null,2,5,U,[new T(null,2,5,U,[ao,this.ub],null),new T(null,2,5,U,[Fo,this.jc],null)],null),this.o))};h.U=function(){return this.A};h.da=function(){return new Nt(this.ub,this.jc,this.A,this.o,this.w)};
h.Z=function(){return 2+M(this.o)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};h.ya=function(a,b){return vh(new hl(null,new t(null,2,[ao,null,Fo,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new Nt(this.ub,this.jc,this.A,yi($g.a(this.o,b)),null)};
h.ra=function(a,b,c){return u(W.a?W.a(ao,b):W.call(null,ao,b))?new Nt(c,this.jc,this.A,this.o,null):u(W.a?W.a(Fo,b):W.call(null,Fo,b))?new Nt(this.ub,c,this.A,this.o,null):new Nt(this.ub,this.jc,this.A,R.j(this.o,b,c),null)};h.Y=function(){return E(ri.a(new T(null,2,5,U,[new T(null,2,5,U,[ao,this.ub],null),new T(null,2,5,U,[Fo,this.jc],null)],null),this.o))};h.V=function(a,b){return new Nt(this.ub,this.jc,b,this.o,this.w)};h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};
h.qb=!0;
h.kb=function(){var a=rt.g?rt.g(this.jc):rt.call(null,this.jc);if(u(Lt(this.ub))){var b=Jt(this.ub),c=Kt(this.ub);return function(a,b,c,g){return function(k){if(Ho===k)return u(a)?null:gt(new T(null,2,5,U,[b,new C(null,"missing-required-key","missing-required-key",709961446,null)],null));if(qg.a(2,M(k))){var l=N(k,0),m=N(k,1);if(!qg.a(l,b))throw Error([y("Assert failed: "),y(Wi.l(L([$h(new C(null,"\x3d","\x3d",-1501502141,null),new C(null,"xk","xk",741114825,null),new C(null,"k","k",-505765866,null))],
0)))].join(""));var m=c.g?c.g(m):c.call(null,m),p=ht(m);return u(p)?gt(new T(null,2,5,U,[l,p],null)):new T(null,2,5,U,[l,m],null)}return gt(ct(g,k,new Nl(function(){return function(){return z(z(z(pg,z(z(pg,$s(k)),new C(null,"count","count",-514511684,null))),2),qg)}}(a,b,c,g),null),null))}}(b,c,a,this)}return function(a,b,c){return function(g){if(qg.a(2,M(g))){var k=function(){var b=af(g);return a.g?a.g(b):a.call(null,b)}(),l=ht(k),m=function(){var a=bf(g);return b.g?b.g(a):b.call(null,a)}(),p=ht(m);
return u(u(l)?l:p)?gt(new T(null,2,5,U,[u(l)?l:af(g),u(p)?p:new C(null,"invalid-key","invalid-key",-1461682245,null)],null)):new T(null,2,5,U,[k,m],null)}return gt(ct(c,g,new Nl(function(){return function(){return z(z(z(pg,z(z(pg,$s(g)),new C(null,"count","count",-514511684,null))),2),qg)}}(a,b,c),null),null))}}(rt.g?rt.g(this.ub):rt.call(null,this.ub),a,this)};h.jb=function(){return z(z(z(pg,qt(this.jc)),Mt(this.ub)),new C(null,"map-entry","map-entry",329617471,null))};
function Rt(a,b){return new Nt(a,b,null,null,null)}function St(a){a=ej.a(Lt,Dh(a));if(!(2>M(a)))throw Error(Zs("More than one non-optional/required key schemata: %s",L([Gj(a)],0)));return H(a)}function Tt(a,b){var c;c=a?a.B&67108864||a.Il?!0:a.B?!1:v(yf,a):v(yf,a);return u(u(c)?xe(b instanceof ft):c)?hj.a(a,b):b}
function Ut(a){var b=St(a),c=u(b)?rt.g?rt.g(S.a(Rt,wh(a,b))):rt.call(null,S.a(Rt,wh(a,b))):null,d=$g.a(a,b),e=hj.a(X,function(){return function(a,b,c){return function p(d){return new fi(null,function(){return function(){for(;;){var a=E(d);if(a){if(mh(a)){var b=Pf(a),c=M(b),e=ji(c);a:for(var f=0;;)if(f<c){var g=A.a(b,f),k=N(g,0),g=N(g,1),k=new T(null,2,5,U,[Kt(k),rt.g?rt.g(Rt(k,g)):rt.call(null,Rt(k,g))],null);e.add(k);f+=1}else{b=!0;break a}return b?li(ni(e),p(Qf(a))):li(ni(e),null)}b=H(a);e=N(b,
0);b=N(b,1);return Lg(new T(null,2,5,U,[Kt(e),rt.g?rt.g(Rt(e,b)):rt.call(null,Rt(e,b))],null),p(og(a)))}return null}}}(a,b,c),null,null)}}(b,c,d)(d)}()),f=it(Mi(X));if(!qg.a(M(d),M(e)))throw Error(Zs("Schema has multiple variants of the same explicit key: %s",L([jj.a(Mt,S.a(ri,dj.a(function(){return function(a){return 1<M(a)}}(b,c,d,e,f),dk($l(Kt,Dh(d))))))],0)));return function(b,c,d,e,f){return function(q){return kh(q)?Tt(q,function(){for(var a=jl,w=E(e),B=X;;){if(xe(w))return Ee(u(c)?function(a,
b,c,d,e,f,g,k){return function(a,b){var c=e.g?e.g(b):e.call(null,b);return k.a?k.a(a,c):k.call(null,a,c)}}(a,w,B,b,c,d,e,f):function(a,b,c,d,e,f,g,k){return function(a,b){var c=N(b,0);N(b,1);c=gt(new T(null,2,5,U,[c,new C(null,"disallowed-key","disallowed-key",-1877785633,null)],null));return k.a?k.a(a,c):k.call(null,a,c)}}(a,w,B,b,c,d,e,f),B,ej.a(function(a){return function(b){var c=N(b,0);N(b,1);return a.g?a.g(c):a.call(null,c)}}(a,w,B,b,c,d,e,f),q));var I=H(w),G=N(I,0),O=N(I,1),a=Tg.a(a,G),w=J(w),
B=I=function(){var a=B,b;b=wh(q,G);b=u(b)?b:Ho;b=O.g?O.g(b):O.call(null,b);return f.a?f.a(a,b):f.call(null,a,b)}()}}()):gt(ct(a,q,new Nl(function(){return function(){return z(z(pg,$s(q)),new C(null,"map?","map?",-1780568534,null))}}(b,c,d,e,f),null),null))}}(b,c,d,e,f)}
function Vt(a){return hj.a(X,function(){return function c(a){return new fi(null,function(){for(;;){var e=E(a);if(e){if(mh(e)){var f=Pf(e),g=M(f),k=ji(g);a:for(var l=0;;)if(l<g){var m=A.a(f,l),p=N(m,0),m=N(m,1),p=Gj(J(qt(Rt(p,m))));k.add(p);l+=1}else{f=!0;break a}return f?li(ni(k),c(Qf(e))):li(ni(k),null)}f=H(e);k=N(f,0);f=N(f,1);return Lg(Gj(J(qt(Rt(k,f)))),c(og(e)))}return null}},null,null)}(a)}())}t.prototype.qb=!0;t.prototype.kb=function(){return Ut(this)};t.prototype.jb=function(){return Vt(this)};
Fk.prototype.qb=!0;Fk.prototype.kb=function(){return Ut(this)};Fk.prototype.jb=function(){return Vt(this)};hl.prototype.qb=!0;
hl.prototype.kb=function(){if(!qg.a(M(this),1))throw Error(Ys("Set schema must have exactly one element"));return function(a,b){return function(c){var d=hh(c)?null:gt(ct(b,c,new Nl(function(){return function(){return z(z(pg,$s(c)),new C(null,"set?","set?",1636014792,null))}}(a,b),null),null));if(u(d))return d;var e=wl(ej,Pi).call(null,ht,Y.a(a,c)),d=N(e,0),e=N(e,1);return E(e)?gt(ml(e)):ml(d)}}(rt.g?rt.g(H(this)):rt.call(null,H(this)),this)};
hl.prototype.jb=function(){return ml(new T(null,1,5,U,[qt(H(this))],null))};function Wt(a,b,c,d,e,f){this.ta=a;this.vb=b;this.name=c;this.A=d;this.o=e;this.w=f;this.B=2229667594;this.O=8192}h=Wt.prototype;h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "schema":return this.ta;case "optional?":return this.vb;case "name":return this.name;default:return Yg(this.o,b,c)}};
h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#schema.core.One{",", ","}",c,ri.a(new T(null,3,5,U,[new T(null,2,5,U,[vn,this.ta],null),new T(null,2,5,U,[Xo,this.vb],null),new T(null,2,5,U,[eo,this.name],null)],null),this.o))};h.U=function(){return this.A};h.da=function(){return new Wt(this.ta,this.vb,this.name,this.A,this.o,this.w)};h.Z=function(){return 3+M(this.o)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};
h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};h.ya=function(a,b){return vh(new hl(null,new t(null,3,[vn,null,eo,null,Xo,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new Wt(this.ta,this.vb,this.name,this.A,yi($g.a(this.o,b)),null)};
h.ra=function(a,b,c){return u(W.a?W.a(vn,b):W.call(null,vn,b))?new Wt(c,this.vb,this.name,this.A,this.o,null):u(W.a?W.a(Xo,b):W.call(null,Xo,b))?new Wt(this.ta,c,this.name,this.A,this.o,null):u(W.a?W.a(eo,b):W.call(null,eo,b))?new Wt(this.ta,this.vb,c,this.A,this.o,null):new Wt(this.ta,this.vb,this.name,this.A,R.j(this.o,b,c),null)};h.Y=function(){return E(ri.a(new T(null,3,5,U,[new T(null,2,5,U,[vn,this.ta],null),new T(null,2,5,U,[Xo,this.vb],null),new T(null,2,5,U,[eo,this.name],null)],null),this.o))};
h.V=function(a,b){return new Wt(this.ta,this.vb,this.name,b,this.o,this.w)};h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};function Zt(a,b){return new Wt(a,!1,b,null,null,null)}
function $t(a){var b=vl(function(a){return a instanceof Wt&&xe(Xo.g(a))},a),c=N(b,0),d=N(b,1),e=vl(function(){return function(a){var b=a instanceof Wt;return b?Xo.g(a):b}}(b,c,d),d),f=N(e,0),g=N(e,1);if(!(1>=M(g)&&Ji(function(){return function(a){return!(a instanceof Wt)}}(b,c,d,e,f,g),g)))throw Error(Zs("Sequence schema %s does not match [one* optional* rest-schema?]",L([a],0)));return new T(null,2,5,U,[ri.a(c,f),H(g)],null)}T.prototype.qb=!0;
T.prototype.kb=function(){var a=this,b=$t(a),c=N(b,0),d=N(b,1),e=Gj(function(){return function(a,b,c,d){return function q(e){return new fi(null,function(){return function(){for(;;){var a=E(e);if(a){if(mh(a)){var b=Pf(a),c=M(b),d=ji(c);a:for(var f=0;;)if(f<c){var g=A.a(b,f),g=new T(null,2,5,U,[g,rt.g?rt.g(g.ta):rt.call(null,g.ta)],null);d.add(g);f+=1}else{b=!0;break a}return b?li(ni(d),q(Qf(a))):li(ni(d),null)}d=H(a);return Lg(new T(null,2,5,U,[d,rt.g?rt.g(d.ta):rt.call(null,d.ta)],null),q(og(a)))}return null}}}(a,
b,c,d),null,null)}}(b,c,d,a)(c)}()),f=u(d)?rt.g?rt.g(d):rt.call(null,d):null;return function(a,b,c,d,e,f,r){return function(w){var B=null==w||ih(w)?null:gt(ct(r,w,new Nl(function(){return function(){return z(z(pg,$s(w)),new C(null,"sequential?","sequential?",1102351463,null))}}(a,b,c,d,e,f,r),null),null));if(u(B))return B;for(var I=d,G=w,O=Ug;;){var P=H(I);if(u(P)){var ha=P,Da=N(ha,0),Ga=N(ha,1);if(fh(G)){if(u(Da.vb))return O;var D=O,B=gt(ct(Gj(Y.a(H,I)),null,new Nl(function(a,b,c,d,e,f,g,k,l,m,p,
r,q,D,w,B){return function(){return si(new C(null,"present?","present?",-1810613791,null),function(){return function(a,b,c,d,e,f,g,k,l,m,p,r,q,D,w,B){return function Od(G){return new fi(null,function(){return function(){for(;;){var a=E(G);if(a){if(mh(a)){var b=Pf(a),c=M(b),d=ji(c);a:for(var e=0;;)if(e<c){var f=A.a(b,e),f=N(f,0);if(xe(f.vb))d.add(f.name),e+=1;else{b=null;break a}}else{b=!0;break a}return b?li(ni(d),Od(Qf(a))):li(ni(d),null)}d=H(a);d=N(d,0);return xe(d.vb)?Lg(d.name,Od(og(a))):null}return null}}}(a,
b,c,d,e,f,g,k,l,m,p,r,q,D,w,B),null,null)}}(a,b,c,d,e,f,g,k,l,m,p,r,q,D,w,B)(a)}())}}(I,G,O,D,ha,Da,Ga,P,B,a,b,c,d,e,f,r),null),null));return f.a?f.a(D,B):f.call(null,D,B)}I=J(I);P=og(G);D=function(){var a=O,b=Da.name,c=H(G),c=Ga.g?Ga.g(c):Ga.call(null,c),d=ht(c),b=u(d)?gt(new dt(b,d)):c;return f.a?f.a(a,b):f.call(null,a,b)}();G=P;O=D}else return u(c)?Ee(f,O,Y.a(e,G)):E(G)?(D=O,B=gt(ct(null,G,new Nl(function(a,b){return function(){return z(z(pg,M(b)),new C(null,"has-extra-elts?","has-extra-elts?",
-1376562869,null))}}(I,G,O,D,P,B,a,b,c,d,e,f,r),null),null)),f.a?f.a(D,B):f.call(null,D,B)):O}}}(b,c,d,e,f,it(function(){return function(a){a=M(a);return Gj($i(a,cj(null)))}}(b,c,d,e,f,a)),a)};
T.prototype.jb=function(){var a=this,b=$t(a),c=N(b,0),d=N(b,1);return Gj(ri.a(function(){return function(a,b,c,d){return function m(p){return new fi(null,function(){return function(){for(;;){var a=E(p);if(a){if(mh(a)){var b=Pf(a),c=M(b),d=ji(c);a:for(var e=0;;)if(e<c){var f=A.a(b,e),f=z(z(z(pg,eo.g(f)),qt(vn.g(f))),u(f.vb)?new C(null,"optional","optional",-600484260,null):new C(null,"one","one",-1719427865,null));d.add(f);e+=1}else{b=!0;break a}return b?li(ni(d),m(Qf(a))):li(ni(d),null)}d=H(a);return Lg(z(z(z(pg,
eo.g(d)),qt(vn.g(d))),u(d.vb)?new C(null,"optional","optional",-600484260,null):new C(null,"one","one",-1719427865,null)),m(og(a)))}return null}}}(a,b,c,d),null,null)}}(b,c,d,a)(c)}(),u(d)?new T(null,1,5,U,[qt(d)],null):null))};function au(a){a=vl(function(a){return a instanceof Wt},a);var b=N(a,0),c=N(a,1);return ri.a(Y.a(function(){return function(a){return qt(a.ta)}}(a,b,c),b),E(c)?new T(null,2,5,U,[new C(null,"\x26","\x26",-2144855648,null),jj.a(qt,c)],null):null)}
function bu(a,b,c,d,e){this.pc=a;this.Yb=b;this.A=c;this.o=d;this.w=e;this.B=2229667594;this.O=8192}h=bu.prototype;h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "output-schema":return this.pc;case "input-schemas":return this.Yb;default:return Yg(this.o,b,c)}};
h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#schema.core.FnSchema{",", ","}",c,ri.a(new T(null,2,5,U,[new T(null,2,5,U,[go,this.pc],null),new T(null,2,5,U,[oo,this.Yb],null)],null),this.o))};h.U=function(){return this.A};h.da=function(){return new bu(this.pc,this.Yb,this.A,this.o,this.w)};h.Z=function(){return 2+M(this.o)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};
h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};h.ya=function(a,b){return vh(new hl(null,new t(null,2,[go,null,oo,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new bu(this.pc,this.Yb,this.A,yi($g.a(this.o,b)),null)};h.ra=function(a,b,c){return u(W.a?W.a(go,b):W.call(null,go,b))?new bu(c,this.Yb,this.A,this.o,null):u(W.a?W.a(oo,b):W.call(null,oo,b))?new bu(this.pc,c,this.A,this.o,null):new bu(this.pc,this.Yb,this.A,R.j(this.o,b,c),null)};
h.Y=function(){return E(ri.a(new T(null,2,5,U,[new T(null,2,5,U,[go,this.pc],null),new T(null,2,5,U,[oo,this.Yb],null)],null),this.o))};h.V=function(a,b){return new bu(this.pc,this.Yb,b,this.o,this.w)};h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};h.qb=!0;h.kb=function(){return function(a){return function(b){return th(b)?b:gt(ct(a,b,new Nl(function(){return function(){return z(z(pg,$s(b)),new C(null,"ifn?","ifn?",-2106461064,null))}}(a),null),null))}}(this)};
h.jb=function(){var a;if(1<M(this.Yb)){a=new C(null,"\x3d\x3e*","\x3d\x3e*",1909690043,null);var b=qt(this.pc),c=Y.a(au,this.Yb)}else a=new C(null,"\x3d\x3e","\x3d\x3e",-813269641,null),b=qt(this.pc),c=au(H(this.Yb));return a=Lg(a,Lg(b,c))};function cu(a){return E(a)?Sg(a)instanceof Wt?M(a):Number.MAX_VALUE:0}
function du(a,b){if(!E(b))throw Error(Ys("Function must have at least one input schema"));if(!Ji(lh,b))throw Error(Ys("Each arity must be a vector."));if(!u(S.a(xh,Y.a(cu,b))))throw Error(Ys("Arities must be distinct"));return new bu(a,Hh.a(cu,b),null,null,null)};var eu=Ng(new zt(pt,null,null,null),new t(null,2,[mo,new C("s","Schema","s/Schema",-1305723789,null),iq,function(a){return a?u(u(null)?null:a.qb)?!0:a.xc?!1:v(pt,a):v(pt,a)}],null)),fu=new hk([Et(L([new wt(Bt,null,null,null),Ht,Bt],0)),eu],!0,!1),Ju=new T(null,2,5,U,[Zt(fu,new C(null,"input","input",-2097503808,null)),Zt(eu,new C(null,"output","output",534662484,null))],null),Ku=new hk([Et(L([Ht,Bt],0)),eu],!0,!1),Lu=new hk([Bt,eu],!0,!1),Mu=new T(null,2,5,U,[Zt(Ku,new C(null,"input","input",-2097503808,
null)),Zt(Lu,new C(null,"output","output",534662484,null))],null);function Nu(a){return a instanceof t||a instanceof Fk}var Ou;Ou=new Ct(new T(null,2,5,U,[Zt(Bt,"k"),Zt(At,"optional?")],null),null,null,null);
var Pu=new T(null,1,5,U,[Zt(vt,new C(null,"k","k",-505765866,null))],null),Qu=tt(Pu),Ru=tt(Ou),Su=function(a,b,c,d,e){return function(f){var g=a.hd();if(u(g)){var k=new T(null,1,5,U,[f],null),l=d.g?d.g(k):d.call(null,k);if(u(l))throw tm(Zs("Input to %s does not match schema: %s",L([new C(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),Wi.l(L([l],0))],0)),new t(null,4,[uo,Nn,vn,c,ho,k,Lp,l],null));}a:for(;;){f=u(Lt(f))?new T(null,2,5,U,[Kt(f),Gt(f)],null):ih(f)&&!lh(f)&&qg.a(M(f),
2)&&qg.a(H(f),new C("schema.core","optional-key","schema.core/optional-key",-170069547,null))?new T(null,2,5,U,[Rg(f),!1],null):null;break a}if(u(g)&&(g=e.g?e.g(f):e.call(null,f),u(g)))throw tm(Zs("Output of %s does not match schema: %s",L([new C(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),Wi.l(L([g],0))],0)),new t(null,4,[uo,Nn,vn,b,ho,f,Lp,g],null));return f}}(lt,Ou,Pu,Qu,Ru);jt(Su,du(Ou,new T(null,1,5,U,[Pu],null)));
var Tu=new hk([Bt,At],!0,!1),Uu=new T(null,1,5,U,[Zt(vt,new C(null,"s","s",-948495851,null))],null),Vu=tt(Uu),Wu=tt(Tu);
jt(Xs(function(a,b,c,d,e){return function(f){var g=a.hd();if(u(g)){var k=new T(null,1,5,U,[f],null),l=d.g?d.g(k):d.call(null,k);if(u(l))throw tm(Zs("Input to %s does not match schema: %s",L([new C(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),Wi.l(L([l],0))],0)),new t(null,4,[uo,Nn,vn,c,ho,k,Lp,l],null));}a:for(;;){f=hj.a(X,Pi.a(Su,Dh(f)));break a}if(u(g)&&(g=e.g?e.g(f):e.call(null,f),u(g)))throw tm(Zs("Output of %s does not match schema: %s",L([new C(null,"explicit-schema-key-map",
"explicit-schema-key-map",1668953963,null),Wi.l(L([g],0))],0)),new t(null,4,[uo,Nn,vn,b,ho,f,Lp,g],null));return f}}(lt,Tu,Uu,Vu,Wu)),du(Tu,new T(null,1,5,U,[Uu],null)));var Xu=new T(null,2,5,U,[Zt(new T(null,1,5,U,[Bt],null),new C(null,"required","required",-846788763,null)),Zt(new T(null,1,5,U,[Bt],null),new C(null,"optional","optional",-600484260,null))],null),Yu=new T(null,1,5,U,[Zt(new hk([Bt,At],!0,!1),new C(null,"s","s",-948495851,null))],null),Zu=tt(Yu),$u=tt(Xu);
jt(Xs(function(a,b,c,d,e){return function(f){var g=a.hd();if(u(g)){var k=new T(null,1,5,U,[f],null),l=d.g?d.g(k):d.call(null,k);if(u(l))throw tm(Zs("Input to %s does not match schema: %s",L([new C(null,"split-schema-keys","split-schema-keys",933671594,null),Wi.l(L([l],0))],0)),new t(null,4,[uo,Nn,vn,c,ho,k,Lp,l],null));}a:for(;;){f=jj.a(Oi.a(jj,Vh),wl(dj,ej).call(null,Wh,f));break a}if(u(g)&&(g=e.g?e.g(f):e.call(null,f),u(g)))throw tm(Zs("Output of %s does not match schema: %s",L([new C(null,"split-schema-keys",
"split-schema-keys",933671594,null),Wi.l(L([g],0))],0)),new t(null,4,[uo,Nn,vn,b,ho,f,Lp,g],null));return f}}(lt,Xu,Yu,Zu,$u)),du(Xu,new T(null,1,5,U,[Yu],null)));function av(a,b,c,d){return hj.a(X,dk(Ee(function(d,f){var g=N(f,0),k=N(f,1),l=a.g?a.g(g):a.call(null,g),m=Q(d,l);if(u(m)){var p=N(m,0),m=N(m,1);return R.j(d,l,new T(null,2,5,U,[b.a?b.a(p,g):b.call(null,p,g),c.a?c.a(m,k):c.call(null,m,k)],null))}return R.j(d,l,new T(null,2,5,U,[g,k],null))},X,S.a(ri,d))))}
var bv=new T(null,2,5,U,[Zt(fu,new C(null,"i1","i1",-572470430,null)),Zt(fu,new C(null,"i2","i2",850408895,null))],null),cv=tt(bv),dv=tt(fu),ev=function(a,b,c,d,e){return function g(k,l){var m=a.hd();if(u(m)){var p=new T(null,2,5,U,[k,l],null),q=d.g?d.g(p):d.call(null,p);if(u(q))throw tm(Zs("Input to %s does not match schema: %s",L([new C(null,"union-input-schemata","union-input-schemata",-1338811970,null),Wi.l(L([q],0))],0)),new t(null,4,[uo,Nn,vn,c,ho,p,Lp,q],null));}p=function(){for(;;)return av(function(){return function(a){return u(Lt(a))?
Kt(a):qo}}(m,a,b,c,d,e),function(){return function(a,b){if(u(Gt(a)))return a;if(u(Gt(b)))return b;if(u(Jt(a))){if(!qg.a(a,b))throw Error([y("Assert failed: "),y(Wi.l(L([$h(new C(null,"\x3d","\x3d",-1501502141,null),new C(null,"k1","k1",-1701777341,null),new C(null,"k2","k2",-1225133949,null))],0)))].join(""));return a}if(qg.a(a,b))return a;throw Error(Ys("Only one extra schema allowed"));}}(m,a,b,c,d,e),function(){return function(a,b){var c=Nu(a);u(u(c)?Nu(b):c)?c=g(a,b):qg.a(a,b)?c=a:qg.a(a,vt)?
c=b:qg.a(b,vt)?c=a:(c=L([a,b],0),c=new Ft(c,null,null,null));return c}}(m,a,b,c,d,e),L([k,l],0))}();if(u(m)&&(q=e.g?e.g(p):e.call(null,p),u(q)))throw tm(Zs("Output of %s does not match schema: %s",L([new C(null,"union-input-schemata","union-input-schemata",-1338811970,null),Wi.l(L([q],0))],0)),new t(null,4,[uo,Nn,vn,b,ho,p,Lp,q],null));return p}}(lt,fu,bv,cv,dv);jt(ev,du(fu,new T(null,1,5,U,[bv],null)));
var fv=new T(null,1,5,U,[Bt],null),gv=new T(null,1,5,U,[Zt(fu,new C(null,"input-schema","input-schema",1373647181,null))],null),hv=tt(gv),iv=tt(fv);
jt(Xs(function(a,b,c,d,e){return function(f){var g=a.hd();if(u(g)){var k=new T(null,1,5,U,[f],null),l=d.g?d.g(k):d.call(null,k);if(u(l))throw tm(Zs("Input to %s does not match schema: %s",L([new C(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),Wi.l(L([l],0))],0)),new t(null,4,[uo,Nn,vn,c,ho,k,Lp,l],null));}k=function(){for(;;)return Pi.a(function(){return function(a){return u(Gt(a))?Kt(a):null}}(g,a,b,c,d,e),Dh(f))}();if(u(g)&&(l=e.g?e.g(k):e.call(null,k),u(l)))throw tm(Zs("Output of %s does not match schema: %s",
L([new C(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),Wi.l(L([l],0))],0)),new t(null,4,[uo,Nn,vn,b,ho,k,Lp,l],null));return k}}(lt,fv,gv,hv,iv)),du(fv,new T(null,1,5,U,[gv],null)));
var jv=function jv(b,c){return xe(Nu(b))?null:xe(Nu(c))?gt(ct(b,c,new Nl(function(){return z(z(pg,qt(c)),new C(null,"map?","map?",-1780568534,null))},null),null)):yi(hj.a(X,function(){return function e(b){return new fi(null,function(){for(var g=b;;)if(g=E(g)){if(mh(g)){var k=Pf(g),l=M(k),m=ji(l);return function(){for(var b=0;;)if(b<l){var e=A.a(k,b),f=N(e,0),e=N(e,1);if(u(Lt(f))){var g=Gt(f),p=Kt(f),r=vh(c,p);u(u(g)?g:r)&&(e=r?jv(e,Q(c,p)):new C(null,"missing-required-key","missing-required-key",
709961446,null),u(e)&&m.add(new T(null,2,5,U,[f,e],null)))}b+=1}else return!0}()?li(ni(m),e(Qf(g))):li(ni(m),null)}var p=H(g),q=N(p,0),p=N(p,1);if(u(Lt(q))){var r=Gt(q),w=Kt(q),B=vh(c,w);if(u(function(){var b=r;return u(b)?b:B}())&&(p=B?jv(p,Q(c,w)):new C(null,"missing-required-key","missing-required-key",709961446,null),u(p)))return Lg(new T(null,2,5,U,[q,p],null),e(og(g)))}g=og(g)}else return null},null,null)}(b)}()))};
function kv(a,b){var c=jv(a,b);if(u(c))throw tm(""+y(c),new t(null,2,[Lp,bo,gq,c],null));}var lv=new T(null,2,5,U,[Zt(Ju,new C(null,"arg0","arg0",-1024593414,null)),Zt(new T(null,2,5,U,[Zt(fu,new C(null,"input","input",-2097503808,null)),Zt(Lu,new C(null,"output","output",534662484,null))],null),new C(null,"arg1","arg1",-1702536411,null))],null),mv=tt(lv),nv=tt(vt);
jt(Xs(function(a,b,c,d,e){return function(a,g){var k=new T(null,2,5,U,[a,g],null),l=d.g?d.g(k):d.call(null,k);if(u(l))throw tm(Zs("Input to %s does not match schema: %s",L([new C(null,"compose-schemata","compose-schemata",918607729,null),Wi.l(L([l],0))],0)),new t(null,4,[uo,Nn,vn,c,ho,k,Lp,l],null));a:for(N(a,0),N(a,1),N(g,0),N(g,1);;){var l=a,k=N(l,0),l=N(l,1),m=g,p=N(m,0),m=N(m,1);kv(fl(k,Dh(m)),m);k=new T(null,2,5,U,[ev(S.j($g,k,ri.a(Dh(m),Y.a(It,Dh(m)))),p),l],null);break a}l=e.g?e.g(k):e.call(null,
k);if(u(l))throw tm(Zs("Output of %s does not match schema: %s",L([new C(null,"compose-schemata","compose-schemata",918607729,null),Wi.l(L([l],0))],0)),new t(null,4,[uo,Nn,vn,b,ho,k,Lp,l],null));return k}}(lt,vt,lv,mv,nv)),du(vt,new T(null,1,5,U,[lv],null)));function ov(a,b){return vh(a,b)?b:vh(a,It(b))?It(b):null}
var pv=new T(null,2,5,U,[Zt(fu,new C(null,"s","s",-948495851,null)),Zt(new T(null,1,5,U,[Bt],null),new C(null,"ks","ks",-754231827,null))],null),qv=tt(pv),rv=tt(vt),sv=function(a,b,c,d,e){return function(f,g){var k=a.hd();if(u(k)){var l=new T(null,2,5,U,[f,g],null),m=d.g?d.g(l):d.call(null,l);if(u(m))throw tm(Zs("Input to %s does not match schema: %s",L([new C(null,"split-schema","split-schema",1859174771,null),Wi.l(L([m],0))],0)),new t(null,4,[uo,Nn,vn,c,ho,l,Lp,m],null));}l=function(){for(;;)return function(a,
b,c,d,e,g,k){return function P(l){return new fi(null,function(a,b,c,d,e,g,k){return function(){for(;;){var m=E(l);if(m){var p=m;if(mh(p)){var r=Pf(p),q=M(r),w=ji(q);return function(){for(var l=0;;)if(l<q){var B=A.a(r,l);mi(w,hj.a(X,function(){return function(a,b,c,d,e,f,g,k,l,m,p,r,q,D){return function sj(w){return new fi(null,function(a,b,c,d,e,f,g,k){return function(){for(var a=w;;)if(a=E(a)){if(mh(a)){var c=Pf(a),d=M(c),e=ji(d);return function(){for(var a=0;;)if(a<d){var f=A.a(c,a),g=N(f,0),f=
N(f,1),l;l=Lt(g);l=u(l)?qg.a(b,vh(k,Kt(g))):l;u(l)&&e.add(new T(null,2,5,U,[g,f],null));a+=1}else return!0}()?li(ni(e),sj(Qf(a))):li(ni(e),null)}var f=H(a),g=N(f,0),f=N(f,1);if(u(function(){var a=Lt(g);return u(a)?qg.a(b,vh(k,Kt(g))):a}()))return Lg(new T(null,2,5,U,[g,f],null),sj(og(a)));a=og(a)}else return null}}(a,b,c,d,e,f,g,k,l,m,p,r,q,D),null,null)}}(l,B,r,q,w,p,m,a,b,c,d,e,g,k)(f)}()));l+=1}else return!0}()?li(ni(w),P(Qf(p))):li(ni(w),null)}var B=H(p);return Lg(hj.a(X,function(){return function(a,
b,c,d,e,f,g,k,l,m){return function Re(p){return new fi(null,function(a,b,c,d){return function(){for(var b=p;;)if(b=E(b)){if(mh(b)){var c=Pf(b),e=M(c),f=ji(e);return function(){for(var b=0;;)if(b<e){var g=A.a(c,b),k=N(g,0),g=N(g,1),l;l=Lt(k);l=u(l)?qg.a(a,vh(d,Kt(k))):l;u(l)&&f.add(new T(null,2,5,U,[k,g],null));b+=1}else return!0}()?li(ni(f),Re(Qf(b))):li(ni(f),null)}var g=H(b),k=N(g,0),g=N(g,1);if(u(function(){var b=Lt(k);return u(b)?qg.a(a,vh(d,Kt(k))):b}()))return Lg(new T(null,2,5,U,[k,g],null),
Re(og(b)));b=og(b)}else return null}}(a,b,c,d,e,f,g,k,l,m),null,null)}}(B,p,m,a,b,c,d,e,g,k)(f)}()),P(og(p)))}return null}}}(a,b,c,d,e,g,k),null,null)}}(ml(g),k,a,b,c,d,e)(new T(null,2,5,U,[!0,!1],null))}();if(u(k)&&(m=e.g?e.g(l):e.call(null,l),u(m)))throw tm(Zs("Output of %s does not match schema: %s",L([new C(null,"split-schema","split-schema",1859174771,null),Wi.l(L([m],0))],0)),new t(null,4,[uo,Nn,vn,b,ho,l,Lp,m],null));return l}}(lt,vt,pv,qv,rv);jt(sv,du(vt,new T(null,1,5,U,[pv],null)));
var tv=new T(null,2,5,U,[Zt(Mu,new C(null,"arg0","arg0",-1024593414,null)),Zt(new T(null,2,5,U,[Zt(Bt,"key"),Zt(Ju,"inner-schemas")],null),new C(null,"arg1","arg1",-1702536411,null))],null),uv=tt(tv),vv=tt(Mu);
jt(Xs(function(a,b,c,d,e){return function(f,g){var k=a.hd();if(u(k)){var l=new T(null,2,5,U,[f,g],null),m=d.g?d.g(l):d.call(null,l);if(u(m))throw tm(Zs("Input to %s does not match schema: %s",L([new C(null,"sequence-schemata","sequence-schemata",-2061205313,null),Wi.l(L([m],0))],0)),new t(null,4,[uo,Nn,vn,c,ho,l,Lp,m],null));}a:for(N(f,0),N(f,1),N(g,0),l=N(g,1),N(l,0),N(l,1);;){var m=f,l=N(m,0),m=N(m,1),p=g,q=N(p,0),p=N(p,1),r=N(p,0),p=N(p,1);if(!xe(sh(ov(l,q))))throw Error(Zs("Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",
L([q,qt(r),qt(l)],0)));if(!xe(sh(ov(r,q))))throw Error(Zs("Node outputs a key %s in its inputs %s",L([q,qt(r)],0)));if(!xe(sh(ov(m,q))))throw Error(Zs("Node outputs a duplicate key %s given inputs %s",L([q,qt(l)],0)));var w=sv(r,Dh(m)),r=N(w,0),w=N(w,1);kv(r,m);l=new T(null,2,5,U,[ev(w,l),R.j(m,q,p)],null);break a}if(u(k)&&(k=e.g?e.g(l):e.call(null,l),u(k)))throw tm(Zs("Output of %s does not match schema: %s",L([new C(null,"sequence-schemata","sequence-schemata",-2061205313,null),Wi.l(L([k],0))],
0)),new t(null,4,[uo,Nn,vn,b,ho,l,Lp,k],null));return l}}(lt,Mu,tv,uv,vv)),du(Mu,new T(null,1,5,U,[tv],null)));function wv(a,b){if(jh(b))return Jh(function(b,c,d){return R.j(b,c,a.g?a.g(d):a.call(null,d))},$k(),b);if(kh(b))return ti(Jh(function(b,c,d){return vi(b,c,a.g?a.g(d):a.call(null,d))},Hf(X),b));for(var c=function(){var a=Hf(X);return Si?Si(a):Ri.call(null,a)}(),d=E(b),e=null,f=0,g=0;;)if(g<f){var k=e.ba(null,g),l=N(k,0),m=N(k,1),p=K.g?K.g(c):K.call(null,c),k=c,l=vi(p,l,function(){var b=m;return a.g?a.g(b):a.call(null,b)}());Vi.a?Vi.a(k,l):Vi.call(null,k,l);g+=1}else if(d=E(d)){if(mh(d))f=Pf(d),d=Qf(d),
e=f,f=M(f);else{var f=H(d),e=N(f,0),q=N(f,1),g=K.g?K.g(c):K.call(null,c),f=c,e=vi(g,e,function(){var b=q;return a.g?a.g(b):a.call(null,b)}());Vi.a?Vi.a(f,e):Vi.call(null,f,e);d=J(d);e=null;f=0}g=0}else break;return ti(K.g?K.g(c):K.call(null,c))}Ni.a(Zh,Hh);var xv,yv,zv={},Av=function Av(b,c){if(b?b.Ef:b)return b.Ef(0,c);var d;d=Av[n(null==b?null:b)];if(!d&&(d=Av._,!d))throw x("ReadPort.take!",b);return d.call(null,b,c)},Bv=function Bv(b,c,d){if(b?b.Bd:b)return b.Bd(b,c,d);var e;e=Bv[n(null==b?null:b)];if(!e&&(e=Bv._,!e))throw x("WritePort.put!",b);return e.call(null,b,c,d)},Cv=function Cv(b){if(b?b.Ad:b)return b.Ad(b);var c;c=Cv[n(null==b?null:b)];if(!c&&(c=Cv._,!c))throw x("Channel.close!",b);return c.call(null,b)},Dv=function Dv(b){if(b?b.xg:b)return!0;
var c;c=Dv[n(null==b?null:b)];if(!c&&(c=Dv._,!c))throw x("Handler.active?",b);return c.call(null,b)},Ev=function Ev(b){if(b?b.yg:b)return b.ab;var c;c=Ev[n(null==b?null:b)];if(!c&&(c=Ev._,!c))throw x("Handler.commit",b);return c.call(null,b)},Fv=function Fv(b,c){if(b?b.wg:b)return b.wg(0,c);var d;d=Fv[n(null==b?null:b)];if(!d&&(d=Fv._,!d))throw x("Buffer.add!*",b);return d.call(null,b,c)},Gv=function Gv(){switch(arguments.length){case 1:return Gv.g(arguments[0]);case 2:return Gv.a(arguments[0],arguments[1]);
default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}};Gv.g=function(a){return a};Gv.a=function(a,b){if(null==b)throw Error([y("Assert failed: "),y(Wi.l(L([$h(new C(null,"not","not",1044554643,null),$h(new C(null,"nil?","nil?",1612038930,null),new C(null,"itm","itm",-713282527,null)))],0)))].join(""));return Fv(a,b)};Gv.I=2;function Hv(a,b,c,d,e){for(var f=0;;)if(f<e)c[d+f]=a[b+f],f+=1;else break}function Iv(a,b,c,d){this.head=a;this.ea=b;this.length=c;this.v=d}Iv.prototype.pop=function(){if(0===this.length)return null;var a=this.v[this.ea];this.v[this.ea]=null;this.ea=(this.ea+1)%this.v.length;--this.length;return a};Iv.prototype.unshift=function(a){this.v[this.head]=a;this.head=(this.head+1)%this.v.length;this.length+=1;return null};function Jv(a,b){a.length+1===a.v.length&&a.resize();a.unshift(b)}
Iv.prototype.resize=function(){var a=Array(2*this.v.length);return this.ea<this.head?(Hv(this.v,this.ea,a,0,this.length),this.ea=0,this.head=this.length,this.v=a):this.ea>this.head?(Hv(this.v,this.ea,a,0,this.v.length-this.ea),Hv(this.v,0,a,this.v.length-this.ea,this.head),this.ea=0,this.head=this.length,this.v=a):this.ea===this.head?(this.head=this.ea=0,this.v=a):null};
function Kv(a,b){for(var c=a.length,d=0;;)if(d<c){var e=a.pop(),f;f=e;f=b.g?b.g(f):b.call(null,f);u(f)&&a.unshift(e);d+=1}else break}function Lv(a){if(!(0<a))throw Error([y("Assert failed: "),y("Can't create a ring buffer of size 0"),y("\n"),y(Wi.l(L([$h(new C(null,"\x3e","\x3e",1085014381,null),new C(null,"n","n",-2092305744,null),0)],0)))].join(""));return new Iv(0,0,0,Array(a))}function Mv(a,b){this.fa=a;this.n=b;this.B=2;this.O=0}function Nv(a){return a.fa.length===a.n}
Mv.prototype.wg=function(a,b){Jv(this.fa,b);return this};Mv.prototype.Z=function(){return this.fa.length};var Ov=Lv(32),Pv=!1,Qv=!1;function Rv(){Pv=!0;Qv=!1;for(var a=0;;){var b=Ov.pop();if(null!=b&&(b.C?b.C():b.call(null),1024>a)){a+=1;continue}break}Pv=!1;return 0<Ov.length?Sv.C?Sv.C():Sv.call(null):null}function Sv(){var a=Qv;if(u(u(a)?Pv:a))return null;Qv=!0;return qc(Rv)}function Tv(a){Jv(Ov,a);Sv()};var Uv,Vv=function Vv(b){"undefined"===typeof Uv&&(Uv=function(b,d,e){this.zh=b;this.K=d;this.ri=e;this.B=425984;this.O=0},Uv.prototype.V=function(b,d){return new Uv(this.zh,this.K,d)},Uv.prototype.U=function(){return this.ri},Uv.prototype.vd=function(){return this.K},Uv.ie=function(){return new T(null,3,5,U,[new C(null,"box","box",-1123515375,null),new C(null,"val","val",1769233139,null),new C(null,"meta22709","meta22709",-341993698,null)],null)},Uv.bd=!0,Uv.ad="cljs.core.async.impl.channels/t22708",
Uv.Cd=function(b,d){return Cf(d,"cljs.core.async.impl.channels/t22708")});return new Uv(Vv,b,X)};function Wv(a,b){this.tb=a;this.K=b}function Xv(a){return Dv(a.tb)}var Yv=function Yv(b){if(b?b.vg:b)return b.vg();var c;c=Yv[n(null==b?null:b)];if(!c&&(c=Yv._,!c))throw x("MMC.abort",b);return c.call(null,b)};function Zv(a,b,c,d,e,f,g){this.nd=a;this.Pe=b;this.Sc=c;this.Oe=d;this.fa=e;this.closed=f;this.Gb=g}h=Zv.prototype;
h.vg=function(){for(;;){var a=this.Sc.pop();if(null!=a){var b=a.tb;Tv(function(a){return function(){return a.g?a.g(!0):a.call(null,!0)}}(b.ab,b,a.K,a,this))}break}Kv(this.Sc,Mi(!1));return Cv(this)};
h.Bd=function(a,b,c){var d=this;if(null==b)throw Error([y("Assert failed: "),y("Can't put nil in on a channel"),y("\n"),y(Wi.l(L([$h(new C(null,"not","not",1044554643,null),$h(new C(null,"nil?","nil?",1612038930,null),new C(null,"val","val",1769233139,null)))],0)))].join(""));if(a=d.closed)return Vv(!a);if(u(function(){var a=d.fa;return u(a)?xe(Nv(d.fa)):a}())){for(c=Ag(function(){var a=d.fa;return d.Gb.a?d.Gb.a(a,b):d.Gb.call(null,a,b)}());;){if(0<d.nd.length&&0<M(d.fa)){var e=d.nd.pop(),f=e.ab,
g=d.fa.fa.pop();Tv(function(a,b){return function(){return a.g?a.g(b):a.call(null,b)}}(f,g,e,c,a,this))}break}c&&Yv(this);return Vv(!0)}e=function(){for(;;){var a=d.nd.pop();if(u(a)){if(u(!0))return a}else return null}}();if(u(e))return c=Ev(e),Tv(function(a){return function(){return a.g?a.g(b):a.call(null,b)}}(c,e,a,this)),Vv(!0);64<d.Oe?(d.Oe=0,Kv(d.Sc,Xv)):d.Oe+=1;if(!(1024>d.Sc.length))throw Error([y("Assert failed: "),y([y("No more than "),y(1024),y(" pending puts are allowed on a single channel."),
y(" Consider using a windowed buffer.")].join("")),y("\n"),y(Wi.l(L([$h(new C(null,"\x3c","\x3c",993667236,null),$h(new C(null,".-length",".-length",-280799999,null),new C(null,"puts","puts",-1883877054,null)),new C("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))],0)))].join(""));Jv(d.Sc,new Wv(c,b));return null};h.Vh=!0;
h.Ef=function(a,b){var c=this;if(null!=c.fa&&0<M(c.fa)){for(var d=b.ab,e=Vv(c.fa.fa.pop());;){if(!u(Nv(c.fa))){var f=c.Sc.pop();if(null!=f){var g=f.tb,k=f.K;Tv(function(a){return function(){return a.g?a.g(!0):a.call(null,!0)}}(g.ab,g,k,f,d,e,this));Ag(function(){var a=c.fa,b=k;return c.Gb.a?c.Gb.a(a,b):c.Gb.call(null,a,b)}())&&Yv(this);continue}}break}return e}d=function(){for(;;){var a=c.Sc.pop();if(u(a)){if(Dv(a.tb))return a}else return null}}();if(u(d))return e=Ev(d.tb),Tv(function(a){return function(){return a.g?
a.g(!0):a.call(null,!0)}}(e,d,this)),Vv(d.K);if(u(c.closed))return u(c.fa)&&(d=c.fa,c.Gb.g?c.Gb.g(d):c.Gb.call(null,d)),u(u(!0)?b.ab:!0)?(d=function(){var a=c.fa;return u(a)?0<M(c.fa):a}(),d=u(d)?c.fa.fa.pop():null,Vv(d)):null;64<c.Pe?(c.Pe=0,Kv(c.nd,Dv)):c.Pe+=1;if(!(1024>c.nd.length))throw Error([y("Assert failed: "),y([y("No more than "),y(1024),y(" pending takes are allowed on a single channel.")].join("")),y("\n"),y(Wi.l(L([$h(new C(null,"\x3c","\x3c",993667236,null),$h(new C(null,".-length",
".-length",-280799999,null),new C(null,"takes","takes",298247964,null)),new C("impl","MAX-QUEUE-SIZE","impl/MAX-QUEUE-SIZE",1508600732,null))],0)))].join(""));Jv(c.nd,b);return null};
h.Ad=function(){var a=this;if(!a.closed){a.closed=!0;if(u(function(){var b=a.fa;return u(b)?0===a.Sc.length:b}())){var b=a.fa;a.Gb.g?a.Gb.g(b):a.Gb.call(null,b)}for(;b=a.nd.pop(),null!=b;){var c=b.ab,d=u(function(){var b=a.fa;return u(b)?0<M(a.fa):b}())?a.fa.fa.pop():null;Tv(function(a,b){return function(){return a.g?a.g(b):a.call(null,b)}}(c,d,b,this))}}return null};function $v(a){console.log(a);return null}function aw(a,b,c){b=(u(b)?b:$v).call(null,c);return null==b?a:Gv.a(a,b)}
function bw(a,b,c){return new Zv(Lv(32),0,Lv(32),0,a,!1,function(){return function(a){return function(){function b(e,f){try{return a.a?a.a(e,f):a.call(null,e,f)}catch(g){return aw(e,c,g)}}function f(b){try{return a.g?a.g(b):a.call(null,b)}catch(e){return aw(b,c,e)}}var g=null,g=function(a,c){switch(arguments.length){case 1:return f.call(this,a);case 2:return b.call(this,a,c)}throw Error("Invalid arity: "+arguments.length);};g.g=f;g.a=b;return g}()}(u(b)?b.g?b.g(Gv):b.call(null,Gv):Gv)}())};var cw,dw=function dw(b){"undefined"===typeof cw&&(cw=function(b,d,e){this.Nf=b;this.ab=d;this.ui=e;this.B=393216;this.O=0},cw.prototype.V=function(b,d){return new cw(this.Nf,this.ab,d)},cw.prototype.U=function(){return this.ui},cw.prototype.xg=function(){return!0},cw.prototype.yg=function(){return this.ab},cw.ie=function(){return new T(null,3,5,U,[new C(null,"fn-handler","fn-handler",648785851,null),new C(null,"f","f",43394975,null),new C(null,"meta25775","meta25775",467110891,null)],null)},cw.bd=
!0,cw.ad="cljs.core.async.impl.ioc-helpers/t25774",cw.Cd=function(b,d){return Cf(d,"cljs.core.async.impl.ioc-helpers/t25774")});return new cw(dw,b,X)};function ew(a){try{return a[0].call(null,a)}catch(b){throw b instanceof Object&&a[6].Ad(null),b;}}function fw(a,b,c){c=c.Ef(0,dw(function(c){a[2]=c;a[1]=b;return ew(a)}));return u(c)?(a[2]=K.g?K.g(c):K.call(null,c),a[1]=b,Z):null}
function gw(a,b,c,d){c=c.Bd(null,d,dw(function(c){a[2]=c;a[1]=b;return ew(a)}));return u(c)?(a[2]=K.g?K.g(c):K.call(null,c),a[1]=b,Z):null}function hw(a,b){var c=a[6];null!=b&&c.Bd(null,b,dw(function(){return function(){return null}}(c)));c.Ad(null);return c}function iw(a,b,c,d,e,f,g,k){this.Rb=a;this.Sb=b;this.Vb=c;this.Ub=d;this.ec=e;this.A=f;this.o=g;this.w=k;this.B=2229667594;this.O=8192}h=iw.prototype;h.R=function(a,b){return Ue.j(this,b,null)};
h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "catch-block":return this.Rb;case "catch-exception":return this.Sb;case "finally-block":return this.Vb;case "continue-block":return this.Ub;case "prev":return this.ec;default:return Yg(this.o,b,c)}};
h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#cljs.core.async.impl.ioc-helpers.ExceptionFrame{",", ","}",c,ri.a(new T(null,5,5,U,[new T(null,2,5,U,[xo,this.Rb],null),new T(null,2,5,U,[op,this.Sb],null),new T(null,2,5,U,[Zn,this.Vb],null),new T(null,2,5,U,[Cp,this.Ub],null),new T(null,2,5,U,[zp,this.ec],null)],null),this.o))};h.U=function(){return this.A};h.da=function(){return new iw(this.Rb,this.Sb,this.Vb,this.Ub,this.ec,this.A,this.o,this.w)};
h.Z=function(){return 5+M(this.o)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};h.ya=function(a,b){return vh(new hl(null,new t(null,5,[Zn,null,xo,null,op,null,zp,null,Cp,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new iw(this.Rb,this.Sb,this.Vb,this.Ub,this.ec,this.A,yi($g.a(this.o,b)),null)};
h.ra=function(a,b,c){return u(W.a?W.a(xo,b):W.call(null,xo,b))?new iw(c,this.Sb,this.Vb,this.Ub,this.ec,this.A,this.o,null):u(W.a?W.a(op,b):W.call(null,op,b))?new iw(this.Rb,c,this.Vb,this.Ub,this.ec,this.A,this.o,null):u(W.a?W.a(Zn,b):W.call(null,Zn,b))?new iw(this.Rb,this.Sb,c,this.Ub,this.ec,this.A,this.o,null):u(W.a?W.a(Cp,b):W.call(null,Cp,b))?new iw(this.Rb,this.Sb,this.Vb,c,this.ec,this.A,this.o,null):u(W.a?W.a(zp,b):W.call(null,zp,b))?new iw(this.Rb,this.Sb,this.Vb,this.Ub,c,this.A,this.o,
null):new iw(this.Rb,this.Sb,this.Vb,this.Ub,this.ec,this.A,R.j(this.o,b,c),null)};h.Y=function(){return E(ri.a(new T(null,5,5,U,[new T(null,2,5,U,[xo,this.Rb],null),new T(null,2,5,U,[op,this.Sb],null),new T(null,2,5,U,[Zn,this.Vb],null),new T(null,2,5,U,[Cp,this.Ub],null),new T(null,2,5,U,[zp,this.ec],null)],null),this.o))};h.V=function(a,b){return new iw(this.Rb,this.Sb,this.Vb,this.Ub,this.ec,b,this.o,this.w)};h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};
function jw(a){for(;;){var b=a[4],c=xo.g(b),d=op.g(b),e=a[5];if(u(function(){var a=e;return u(a)?xe(b):a}()))throw e;if(u(function(){var a=e;return u(a)?(a=c,u(a)?e instanceof d:a):a}())){a[1]=c;a[2]=e;a[5]=null;a[4]=R.l(b,xo,null,L([op,null],0));break}if(u(function(){var a=e;return u(a)?xe(c)&&xe(Zn.g(b)):a}()))a[4]=zp.g(b);else{if(u(function(){var a=e;return u(a)?(a=xe(c))?Zn.g(b):a:a}())){a[1]=Zn.g(b);a[4]=R.j(b,Zn,null);break}if(u(function(){var a=xe(e);return a?Zn.g(b):a}())){a[1]=Zn.g(b);a[4]=
R.j(b,Zn,null);break}if(xe(e)&&xe(Zn.g(b))){a[1]=Cp.g(b);a[4]=zp.g(b);break}throw Error("No matching clause");}}};for(var kw=Array(1),lw=0;;)if(lw<kw.length)kw[lw]=null,lw+=1;else break;var mw=function mw(b){"undefined"===typeof xv&&(xv=function(b,d,e){this.Nf=b;this.ab=d;this.si=e;this.B=393216;this.O=0},xv.prototype.V=function(b,d){return new xv(this.Nf,this.ab,d)},xv.prototype.U=function(){return this.si},xv.prototype.xg=function(){return!0},xv.prototype.yg=function(){return this.ab},xv.ie=function(){return new T(null,3,5,U,[new C(null,"fn-handler","fn-handler",648785851,null),new C(null,"f","f",43394975,null),new C(null,"meta23068","meta23068",1450301921,null)],null)},xv.bd=
!0,xv.ad="cljs.core.async/t23067",xv.Cd=function(b,d){return Cf(d,"cljs.core.async/t23067")});return new xv(mw,b,X)},nw=function nw(){switch(arguments.length){case 0:return nw.C();case 1:return nw.g(arguments[0]);case 2:return nw.a(arguments[0],arguments[1]);case 3:return nw.j(arguments[0],arguments[1],arguments[2]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}};nw.C=function(){return nw.g(null)};nw.g=function(a){return nw.j(a,null,null)};
nw.a=function(a,b){return nw.j(a,b,null)};nw.j=function(a,b,c){a=qg.a(a,0)?null:a;if(u(b)&&!u(a))throw Error([y("Assert failed: "),y("buffer must be supplied when transducer is"),y("\n"),y(Wi.l(L([new C(null,"buf-or-n","buf-or-n",-1646815050,null)],0)))].join(""));a="number"===typeof a?new Mv(Lv(a),a):a;return bw(a,b,c)};nw.I=3;
function ow(a,b){var c=Av(a,mw(b));if(u(c)){var d=K.g?K.g(c):K.call(null,c);u(!0)?b.g?b.g(d):b.call(null,d):Tv(function(a){return function(){return b.g?b.g(a):b.call(null,a)}}(d,c))}return null}
var pw=mw(function(){return null}),qw=function qw(){switch(arguments.length){case 2:return qw.a(arguments[0],arguments[1]);case 3:return qw.j(arguments[0],arguments[1],arguments[2]);case 4:return qw.N(arguments[0],arguments[1],arguments[2],arguments[3]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}};qw.a=function(a,b){var c=Bv(a,b,pw);return u(c)?K.g?K.g(c):K.call(null,c):!0};qw.j=function(a,b,c){return qw.N(a,b,c,!0)};
qw.N=function(a,b,c,d){a=Bv(a,b,mw(c));return u(a)?(b=K.g?K.g(a):K.call(null,a),u(d)?c.g?c.g(b):c.call(null,b):Tv(function(a){return function(){return c.g?c.g(a):c.call(null,a)}}(b,a,a)),b):!0};qw.I=4;function rw(a,b){return sw(a,b)}
function sw(a,b){var c=nw.g(1);Tv(function(c){return function(){var e=function(){return function(a){return function(){function b(c){for(;;){var d;a:try{for(;;){var e=a(c);if(!W(e,Z)){d=e;break a}}}catch(f){if(f instanceof Object)c[5]=f,jw(c),d=Z;else throw f;}if(!W(d,Z))return d}}function c(){var a=[null,null,null,null,null,null,null,null];a[0]=d;a[1]=1;return a}var d=null,d=function(a){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,a)}throw Error("Invalid arity: "+
arguments.length);};d.C=c;d.g=b;return d}()}(function(){return function(c){var d=c[1];return 7===d?(d=c,d[2]=c[2],d[1]=3,Z):1===d?(c[2]=null,c[1]=2,Z):4===d?(d=c[7],d=c[2],c[7]=d,c[1]=u(null==d)?5:6,Z):13===d?(c[2]=null,c[1]=14,Z):6===d?(d=c[7],gw(c,11,b,d)):3===d?(d=c[2],hw(c,d)):12===d?(c[2]=null,c[1]=2,Z):2===d?fw(c,4,a):11===d?(d=c[2],c[1]=u(d)?12:13,Z):9===d?(c[2]=null,c[1]=10,Z):5===d?(c[1]=u(!0)?8:9,Z):14===d||10===d?(d=c[2],c[2]=d,c[1]=7,Z):8===d?(d=Cv(b),c[2]=d,c[1]=10,Z):null}}(c),c)}(),
f=function(){var a=e.C?e.C():e.call(null);a[6]=c;return a}();return ew(f)}}(c));return b}
var tw={},uw=function uw(b,c,d){if(b?b.Df:b)return b.Df(b,c,d);var e;e=uw[n(null==b?null:b)];if(!e&&(e=uw._,!e))throw x("Mult.tap*",b);return e.call(null,b,c,d)},vw=function vw(b,c){if(b?b.be:b)return b.be(b,c);var d;d=vw[n(null==b?null:b)];if(!d&&(d=vw._,!d))throw x("Mult.untap*",b);return d.call(null,b,c)},ww=function ww(b){var c=function(){var b=X;return Si?Si(b):Ri.call(null,b)}(),d=function(){"undefined"===typeof yv&&(yv=function(b,c,d,e){this.yi=b;this.ch=c;this.Gf=d;this.ti=e;this.B=393216;
this.O=0},yv.prototype.V=function(){return function(b,c){return new yv(this.yi,this.ch,this.Gf,c)}}(c),yv.prototype.U=function(){return function(){return this.ti}}(c),yv.prototype.ug=!0,yv.prototype.Df=function(){return function(b,c,d){Xi.N(this.Gf,R,c,d);return null}}(c),yv.prototype.be=function(){return function(b,c){Xi.j(this.Gf,$g,c);return null}}(c),yv.ie=function(){return function(){return new T(null,4,5,U,[new C(null,"mult","mult",-1187640995,null),new C(null,"ch","ch",1085813622,null),new C(null,
"cs","cs",-117024463,null),new C(null,"meta24102","meta24102",2102349561,null)],null)}}(c),yv.bd=!0,yv.ad="cljs.core.async/t24101",yv.Cd=function(){return function(b,c){return Cf(c,"cljs.core.async/t24101")}}(c));return new yv(ww,b,c,X)}(),e=nw.g(1),f=Si?Si(null):Ri.call(null,null),g=function(b,c,d,e){return function(){return 0===Xi.a(e,Nh)?qw.a(d,!0):null}}(c,d,e,f),k=nw.g(1);Tv(function(c,d,e,f,g,k){return function(){var B=function(){return function(b){return function(){function c(d){for(;;){var e;
a:try{for(;;){var f=b(d);if(!W(f,Z)){e=f;break a}}}catch(g){if(g instanceof Object)d[5]=g,jw(d),e=Z;else throw g;}if(!W(e,Z))return e}}function d(){var b=[null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];b[0]=e;b[1]=1;return b}var e=null,e=function(b){switch(arguments.length){case 0:return d.call(this);case 1:return c.call(this,b)}throw Error("Invalid arity: "+arguments.length);};e.C=d;
e.g=c;return e}()}(function(c,d,e,f,g,k){return function(c){var l=c[1];if(7===l){var m=c,p=m;p[2]=c[2];p[1]=3;return Z}if(20===l){var r=c[7],q=H(r),w=N(q,0),B=N(q,1);c[8]=w;m=c;m[1]=u(B)?22:23;return Z}if(27===l){var G=c[9],I=c[10],Qa=c[11],Za=c[12],wb=A.a(Za,Qa),Mb=qw.j(wb,I,k);c[9]=wb;m=c;m[1]=u(Mb)?30:31;return Z}if(1===l){var Rb=m=c;Rb[2]=null;Rb[1]=2;return Z}if(24===l){var r=c[7],gc=c[2],Bb=J(r),Nb=null,Yb=0,Zb=0;c[13]=Zb;c[14]=gc;c[15]=Yb;c[16]=Nb;c[17]=Bb;var oe=m=c;oe[2]=null;oe[1]=8;return Z}if(39===
l){var Df=m=c;Df[2]=null;Df[1]=41;return Z}if(4===l){var I=c[10],Re=c[2],Ow=null==Re;c[10]=Re;m=c;m[1]=u(Ow)?5:6;return Z}if(15===l){var Zb=c[13],Yb=c[15],Nb=c[16],Bb=c[17],bl=c[2],zy=Bb,Ay=Nb,By=Yb;c[13]=Zb+1;c[15]=By;c[16]=Ay;c[17]=zy;c[18]=bl;var sj=m=c;sj[2]=null;sj[1]=8;return Z}if(21===l){var Cy=c[2],Ot=m=c;Ot[2]=Cy;Ot[1]=18;return Z}if(31===l){var G=c[9],Dy=k(null),Ey=e.be(null,G);c[19]=Dy;var Xt=m=c;Xt[2]=Ey;Xt[1]=32;return Z}if(32===l){var Od=c[20],Qa=c[11],jf=c[21],Za=c[12],Fy=c[2],Gy=Za,
Hy=jf,Iy=Qa+1;c[20]=Od;c[11]=Iy;c[21]=Hy;c[12]=Gy;c[22]=Fy;var Pt=m=c;Pt[2]=null;Pt[1]=25;return Z}if(40===l){var Qt=c[23],$y=k(null),az=e.be(null,Qt);c[24]=$y;var Yt=m=c;Yt[2]=az;Yt[1]=41;return Z}if(33===l){var lf=c[25],Zy=mh(lf),m=c;m[1]=Zy?36:37;return Z}if(13===l){var ip=c[26],lz=Cv(ip),gu=m=c;gu[2]=lz;gu[1]=15;return Z}if(22===l){var w=c[8],mz=Cv(w),hu=m=c;hu[2]=mz;hu[1]=24;return Z}if(36===l){var lf=c[25],iu=Pf(lf),nz=Qf(lf),oz=M(iu),Od=nz,Za=iu,jf=oz,Qa=0;c[20]=Od;c[11]=Qa;c[21]=jf;c[12]=
Za;var ju=m=c;ju[2]=null;ju[1]=25;return Z}if(41===l){var lf=c[25],pz=c[2],Od=J(lf),Za=null,Qa=jf=0;c[20]=Od;c[27]=pz;c[11]=Qa;c[21]=jf;c[12]=Za;var ku=m=c;ku[2]=null;ku[1]=25;return Z}if(43===l){var lu=m=c;lu[2]=null;lu[1]=44;return Z}if(29===l){var qz=c[2],mu=m=c;mu[2]=qz;mu[1]=26;return Z}if(44===l){c[28]=c[2];var nu=m=c;nu[2]=null;nu[1]=2;return Z}if(6===l){var ou=c[29],rz=K.g?K.g(d):K.call(null,d),rp=Dh(rz),pu=M(rp),sz=Vi.a?Vi.a(g,pu):Vi.call(null,g,pu),Od=E(rp),Za=null,Qa=jf=0;c[20]=Od;c[30]=
sz;c[11]=Qa;c[21]=jf;c[12]=Za;c[29]=rp;var qu=m=c;qu[2]=null;qu[1]=25;return Z}if(28===l){var Od=c[20],lf=c[25],ru=E(Od);c[25]=ru;m=c;m[1]=ru?33:34;return Z}if(25===l){var Qa=c[11],jf=c[21],tz=Qa<jf,m=c;m[1]=u(tz)?27:28;return Z}if(34===l){var su=m=c;su[2]=null;su[1]=35;return Z}if(17===l){var tu=m=c;tu[2]=null;tu[1]=18;return Z}if(3===l){var uz=c[2],m=c;return hw(m,uz)}if(12===l){var vz=c[2],uu=m=c;uu[2]=vz;uu[1]=9;return Z}if(2===l)return m=c,fw(m,4,b);if(23===l){var vu=m=c;vu[2]=null;vu[1]=24;
return Z}if(35===l){var wz=c[2],wu=m=c;wu[2]=wz;wu[1]=29;return Z}if(19===l){var r=c[7],xu=Pf(r),xz=Qf(r),yz=M(xu),Bb=xz,Nb=xu,Yb=yz,Zb=0;c[13]=Zb;c[15]=Yb;c[16]=Nb;c[17]=Bb;var yu=m=c;yu[2]=null;yu[1]=8;return Z}if(11===l){var r=c[7],Bb=c[17],zu=E(Bb);c[7]=zu;m=c;m[1]=zu?16:17;return Z}if(9===l){var zz=c[2],Au=m=c;Au[2]=zz;Au[1]=7;return Z}if(5===l){var Az=K.g?K.g(d):K.call(null,d),Bb=E(Az),Nb=null,Zb=Yb=0;c[13]=Zb;c[15]=Yb;c[16]=Nb;c[17]=Bb;var Bu=m=c;Bu[2]=null;Bu[1]=8;return Z}if(14===l){var Cu=
m=c;Cu[2]=null;Cu[1]=15;return Z}if(45===l){var Bz=c[2],Du=m=c;Du[2]=Bz;Du[1]=44;return Z}if(26===l){var ou=c[29],Cz=c[2],Dz=E(ou);c[31]=Cz;m=c;m[1]=Dz?42:43;return Z}if(16===l){var r=c[7],Ez=mh(r),m=c;m[1]=Ez?19:20;return Z}if(38===l){var Fz=c[2],Eu=m=c;Eu[2]=Fz;Eu[1]=35;return Z}if(30===l){var Fu=m=c;Fu[2]=null;Fu[1]=32;return Z}if(10===l){var Zb=c[13],Nb=c[16],Gu=A.a(Nb,Zb),ip=N(Gu,0),Gz=N(Gu,1);c[26]=ip;m=c;m[1]=u(Gz)?13:14;return Z}if(18===l){var Hz=c[2],Hu=m=c;Hu[2]=Hz;Hu[1]=12;return Z}if(42===
l)return m=c,fw(m,45,f);if(37===l){var I=c[10],lf=c[25],Qt=c[23],Iu=H(lf),Iz=qw.j(Iu,I,k);c[23]=Iu;m=c;m[1]=u(Iz)?39:40;return Z}if(8===l){var Zb=c[13],Yb=c[15],Jz=Zb<Yb,m=c;m[1]=u(Jz)?10:11;return Z}return null}}(c,d,e,f,g,k),c,d,e,f,g,k)}(),I=function(){var b=B.C?B.C():B.call(null);b[6]=c;return b}();return ew(I)}}(k,c,d,e,f,g));return d};function xw(a,b){uw(a,b,!0);return b}
function yw(a){a=Gj(a);var b=nw.g(null),c=M(a),d=oi(c),e=nw.g(1),f=Si?Si(null):Ri.call(null,null),g=jj.a(function(a,b,c,d,e,f){return function(g){return function(a,b,c,d,e,f){return function(a){d[g]=a;return 0===Xi.a(f,Nh)?qw.a(e,d.slice(0)):null}}(a,b,c,d,e,f)}}(a,b,c,d,e,f),ul(c)),k=nw.g(1);Tv(function(a,b,c,d,e,f,g,k){return function(){var G=function(){return function(a){return function(){function b(c){for(;;){var d;a:try{for(;;){var e=a(c);if(!W(e,Z)){d=e;break a}}}catch(f){if(f instanceof Object)c[5]=
f,jw(c),d=Z;else throw f;}if(!W(d,Z))return d}}function c(){var a=[null,null,null,null,null,null,null,null,null,null,null,null,null,null];a[0]=d;a[1]=1;return a}var d=null,d=function(a){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,a)}throw Error("Invalid arity: "+arguments.length);};d.C=c;d.g=b;return d}()}(function(a,b,c,d,e,f,g,k){return function(a){var e=a[1];if(7===e)return a[2]=null,a[1]=8,Z;if(1===e)return a[2]=null,a[1]=2,Z;if(4===e){var l=a[7],e=l<d;a[1]=u(e)?
6:7;return Z}if(15===e)return e=a[2],a[2]=e,a[1]=3,Z;if(13===e)return e=Cv(c),a[2]=e,a[1]=15,Z;if(6===e)return a[2]=null,a[1]=11,Z;if(3===e)return e=a[2],hw(a,e);if(12===e){var e=a[8],e=a[2],m=Ki(ve,e);a[8]=e;a[1]=u(m)?13:14;return Z}return 2===e?(e=Vi.a?Vi.a(g,d):Vi.call(null,g,d),l=0,a[7]=l,a[9]=e,a[2]=null,a[1]=4,Z):11===e?(l=a[7],a[4]=new iw(10,Object,null,9,a[4],null,null,null),e=function(){var a=l;return b.g?b.g(a):b.call(null,a)}(),m=function(){var a=l;return k.g?k.g(a):k.call(null,a)}(),e=
ow(e,m),a[2]=e,jw(a),Z):9===e?(l=a[7],a[10]=a[2],a[7]=l+1,a[2]=null,a[1]=4,Z):5===e?(a[11]=a[2],fw(a,12,f)):14===e?(e=a[8],e=S.a(Hj,e),gw(a,16,c,e)):16===e?(a[12]=a[2],a[2]=null,a[1]=2,Z):10===e?(m=a[2],e=Xi.a(g,Nh),a[13]=m,a[2]=e,jw(a),Z):8===e?(e=a[2],a[2]=e,a[1]=5,Z):null}}(a,b,c,d,e,f,g,k),a,b,c,d,e,f,g,k)}(),O=function(){var b=G.C?G.C():G.call(null);b[6]=a;return b}();return ew(O)}}(k,a,b,c,d,e,f,g));return b};var zw=function zw(b,c){if(b?b.Nb:b)return b.Nb(b,c);var d;d=zw[n(null==b?null:b)];if(!d&&(d=zw._,!d))throw x("Functor.mapf*",b);return d.call(null,b,c)};fi.prototype.Nb=function(a,b){return Y.a(b,this)};kl.prototype.Nb=function(a,b){return hj.a(ol(),Zh(Y.a(b,this)))};Fk.prototype.Nb=function(a,b){return hj.a(gk,Y.a(function(){return function(a){var d=N(a,0);a=N(a,1);return new T(null,2,5,U,[d,b.g?b.g(a):b.call(null,a)],null)}}(this),this))};
Wk.prototype.Nb=function(a,b){return hj.a($k(),Y.a(function(){return function(a){var d=N(a,0);a=N(a,1);return new T(null,2,5,U,[d,b.g?b.g(a):b.call(null,a)],null)}}(this),this))};hl.prototype.Nb=function(a,b){return hj.a(jl,Y.a(b,this))};T.prototype.Nb=function(a,b){return jj.a(b,this)};zw["function"]=function(a,b){return Ni.a(b,a)};V.prototype.Nb=function(a,b){return Ni.a(b,this)};
t.prototype.Nb=function(a,b){return hj.a(gk,Y.a(function(){return function(a){var d=N(a,0);a=N(a,1);return new T(null,2,5,U,[d,b.g?b.g(a):b.call(null,a)],null)}}(this),this))};Xh.prototype.Nb=function(a,b){return S.a($h,Y.a(b,this))};function Aw(a,b){return zw(b,a)};function Bw(a){this.value=a}Bw.prototype.toString=function(){return""+y(this.value)};function Cw(a){return new Bw(a)}var Dw=function Dw(b,c){if(b?b.cc:b)return b.cc(b,c);var d;d=Dw[n(null==b?null:b)];if(!d&&(d=Dw._,!d))throw x("Applicative.return*",b);return d.call(null,b,c)},Ew=function Ew(b,c){if(b?b.bc:b)return b.bc(b,c);var d;d=Ew[n(null==b?null:b)];if(!d&&(d=Ew._,!d))throw x("Applicative.ap*",b);return d.call(null,b,c)};
function Fw(a,b){var c=new T(null,2,5,U,[qg.a(ze(a),Bw),qg.a(ze(b),Bw)],null);return qg.a(new T(null,2,5,U,[!0,!1],null),c)?new T(null,2,5,U,[Dw(b,a.value),b],null):qg.a(new T(null,2,5,U,[!1,!0],null),c)?new T(null,2,5,U,[a,Dw(a,b.value)],null):new T(null,2,5,U,[a,b],null)}Bw.prototype.Nb=function(a,b){var c;c=this.value;c=b.g?b.g(c):b.call(null,c);return Cw.g?Cw.g(c):Cw.call(null,c)};fi.prototype.cc=function(a,b){return new fi(null,function(){return function(){return z(pg,b)}}(this),null,null)};
fi.prototype.bc=function(a,b){return function(a){return function e(f){return new fi(null,function(a){return function(){for(var c=f;;){var l=E(c);if(l){var m=l,p=H(m);if(l=E(function(a,b,c,e,f){return function O(g){return new fi(null,function(a,b){return function(){for(;;){var a=E(g);if(a){if(mh(a)){var c=Pf(a),e=M(c),f=ji(e);return function(){for(var a=0;;)if(a<e){var g=A.a(c,a),k=f,g=b.g?b.g(g):b.call(null,g);k.add(g);a+=1}else return!0}()?li(ni(f),O(Qf(a))):li(ni(f),null)}var k=H(a);return Lg(function(){var a=
k;return b.g?b.g(a):b.call(null,a)}(),O(og(a)))}return null}}}(a,b,c,e,f),null,null)}}(c,p,m,l,a)(b)))return ri.a(l,e(og(c)));c=og(c)}else return null}}}(a),null,null)}}(this)(this)};Fk.prototype.cc=function(a,b){return S.a(Ti,b)};
Fk.prototype.bc=function(a,b){var c=this;return hj.a(gk,function(){return function(a){return function f(c){return new fi(null,function(){return function(){for(;;){var a=E(c);if(a){if(mh(a)){var d=Pf(a),m=M(d),p=ji(m);return function(){for(var a=0;;)if(a<m){var c=A.a(d,a),f=N(c,0),g=N(c,1),c=p,k=U,r=f,f=f.g?f.g(b):f.call(null,b),f=g.g?g.g(f):g.call(null,f);c.add(new T(null,2,5,k,[r,f],null));a+=1}else return!0}()?li(ni(p),f(Qf(a))):li(ni(p),null)}var q=H(a),r=N(q,0),w=N(q,1);return Lg(new T(null,2,
5,U,[r,function(){var a=r.g?r.g(b):r.call(null,b);return w.g?w.g(a):w.call(null,a)}()],null),f(og(a)))}return null}}}(a),null,null)}}(c)(c)}())};Wk.prototype.cc=function(a,b){return S.a($k,b)};
Wk.prototype.bc=function(a,b){var c=this;return hj.a($k(),function(){return function(a){return function f(c){return new fi(null,function(){return function(){for(;;){var a=E(c);if(a){if(mh(a)){var d=Pf(a),m=M(d),p=ji(m);return function(){for(var a=0;;)if(a<m){var c=A.a(d,a),f=N(c,0),g=N(c,1),c=p,k=U,r=f,f=f.g?f.g(b):f.call(null,b),f=g.g?g.g(f):g.call(null,f);c.add(new T(null,2,5,k,[r,f],null));a+=1}else return!0}()?li(ni(p),f(Qf(a))):li(ni(p),null)}var q=H(a),r=N(q,0),w=N(q,1);return Lg(new T(null,
2,5,U,[r,function(){var a=r.g?r.g(b):r.call(null,b);return w.g?w.g(a):w.call(null,a)}()],null),f(og(a)))}return null}}}(a),null,null)}}(c)(c)}())};hl.prototype.cc=function(a,b){return yh([b])};
hl.prototype.bc=function(a,b){var c=this;return S.a(nl,function(){return function(a){return function f(c){return new fi(null,function(a){return function(){for(var d=c;;){var m=E(d);if(m){var p=m,q=H(p);if(m=E(function(a,b,c,d,f){return function P(g){return new fi(null,function(a,b){return function(){for(;;){var a=E(g);if(a){if(mh(a)){var c=Pf(a),d=M(c),f=ji(d);return function(){for(var a=0;;)if(a<d){var g=A.a(c,a),k=f,g=b.g?b.g(g):b.call(null,g);k.add(g);a+=1}else return!0}()?li(ni(f),P(Qf(a))):li(ni(f),
null)}var k=H(a);return Lg(function(){var a=k;return b.g?b.g(a):b.call(null,a)}(),P(og(a)))}return null}}}(a,b,c,d,f),null,null)}}(d,q,p,m,a)(b)))return ri.a(m,f(og(d)));d=og(d)}else return null}}}(a),null,null)}}(c)(c)}())};T.prototype.cc=function(a,b){return new T(null,1,5,U,[b],null)};
T.prototype.bc=function(a,b){var c=this;return Gj(function(){return function(a){return function f(c){return new fi(null,function(a){return function(){for(var d=c;;){var m=E(d);if(m){var p=m,q=H(p);if(m=E(function(a,b,c,d,f){return function P(g){return new fi(null,function(a,b){return function(){for(;;){var a=E(g);if(a){if(mh(a)){var c=Pf(a),d=M(c),f=ji(d);return function(){for(var a=0;;)if(a<d){var g=A.a(c,a),k=f,g=b.g?b.g(g):b.call(null,g);k.add(g);a+=1}else return!0}()?li(ni(f),P(Qf(a))):li(ni(f),
null)}var k=H(a);return Lg(function(){var a=k;return b.g?b.g(a):b.call(null,a)}(),P(og(a)))}return null}}}(a,b,c,d,f),null,null)}}(d,q,p,m,a)(b)))return ri.a(m,f(og(d)));d=og(d)}else return null}}}(a),null,null)}}(c)(c)}())};Dw["function"]=function(a,b){return Mi(b)};Ew["function"]=function(a,b){return function(c){return(a.g?a.g(c):a.call(null,c)).call(null,b.g?b.g(c):b.call(null,c))}};V.prototype.cc=function(a,b){return Mi(b)};
V.prototype.bc=function(a,b){return function(a){return function(d){return(a.g?a.g(d):a.call(null,d)).call(null,b.g?b.g(d):b.call(null,d))}}(this)};t.prototype.cc=function(a,b){return S.a(Ti,b)};
t.prototype.bc=function(a,b){var c=this;return hj.a(gk,function(){return function(a){return function f(c){return new fi(null,function(){return function(){for(;;){var a=E(c);if(a){if(mh(a)){var d=Pf(a),m=M(d),p=ji(m);return function(){for(var a=0;;)if(a<m){var c=A.a(d,a),f=N(c,0),g=N(c,1),c=p,k=U,r=f,f=f.g?f.g(b):f.call(null,b),f=g.g?g.g(f):g.call(null,f);c.add(new T(null,2,5,k,[r,f],null));a+=1}else return!0}()?li(ni(p),f(Qf(a))):li(ni(p),null)}var q=H(a),r=N(q,0),w=N(q,1);return Lg(new T(null,2,
5,U,[r,function(){var a=r.g?r.g(b):r.call(null,b);return w.g?w.g(a):w.call(null,a)}()],null),f(og(a)))}return null}}}(a),null,null)}}(c)(c)}())};Bw.prototype.cc=function(a,b){return Cw.g?Cw.g(b):Cw.call(null,b)};Bw.prototype.bc=function(a,b){var c=this.value.call(null,b.value);return Cw.g?Cw.g(c):Cw.call(null,c)};Xh.prototype.cc=function(a,b){return z(pg,b)};
Xh.prototype.bc=function(a,b){var c=this;return S.a($h,function(){return function(a){return function f(c){return new fi(null,function(a){return function(){for(var d=c;;){var m=E(d);if(m){var p=m,q=H(p);if(m=E(function(a,b,c,d,f){return function P(g){return new fi(null,function(a,b){return function(){for(;;){var a=E(g);if(a){if(mh(a)){var c=Pf(a),d=M(c),f=ji(d);return function(){for(var a=0;;)if(a<d){var g=A.a(c,a),k=f,g=b.g?b.g(g):b.call(null,g);k.add(g);a+=1}else return!0}()?li(ni(f),P(Qf(a))):li(ni(f),
null)}var k=H(a);return Lg(function(){var a=k;return b.g?b.g(a):b.call(null,a)}(),P(og(a)))}return null}}}(a,b,c,d,f),null,null)}}(d,q,p,m,a)(b)))return ri.a(m,f(og(d)));d=og(d)}else return null}}}(a),null,null)}}(c)(c)}())};var Gw=function Gw(){return Gw.l(arguments[0],1<arguments.length?new F(Array.prototype.slice.call(arguments,1),0):null)};
Gw.l=function(a,b){return S.j(function(){function a(b,c){return S.a(Ew,Fw(b,c))}var b=null,e=function(){function a(b,d,e){var f=null;if(2<arguments.length){for(var f=0,q=Array(arguments.length-2);f<q.length;)q[f]=arguments[f+2],++f;f=new F(q,0)}return c.call(this,b,d,f)}function c(a,e,f){return Ee(b,a,Lg(e,f))}a.I=2;a.J=function(a){var b=H(a);a=J(a);var d=H(a);a=og(a);return c(b,d,a)};a.l=c;return a}(),b=function(b,d,k){switch(arguments.length){case 2:return a.call(this,b,d);default:var l=null;if(2<
arguments.length){for(var l=0,m=Array(arguments.length-2);l<m.length;)m[l]=arguments[l+2],++l;l=new F(m,0)}return e.l(b,d,l)}throw Error("Invalid arity: "+arguments.length);};b.I=2;b.J=e.J;b.a=a;b.l=e.l;return b}(),Aw(Oi.a(function(a,b){return S.a(Oi,$i(a,cj(Oi))).call(null,b)},M(b)),a),b)};Gw.I=1;Gw.J=function(a){var b=H(a);a=J(a);return Gw.l(b,a)};var Hw=function Hw(b){if(b?b.Rc:b)return b.Rc(b);var c;c=Hw[n(null==b?null:b)];if(!c&&(c=Hw._,!c))throw x("Monad.join*",b);return c.call(null,b)};Bw.prototype.Rc=function(){return this.value};Xh.prototype.Rc=function(){return S.a($h,S.a(ri,this))};T.prototype.Rc=function(){return Gj(S.a(ri,this))};fi.prototype.Rc=function(){return S.a(ri,this)};hl.prototype.Rc=function(){return S.a(nl,S.a(ri,this))};Hw["function"]=function(a){return function(b){return(a.g?a.g(b):a.call(null,b)).call(null,b)}};
V.prototype.Rc=function(){return function(a){return function(b){return(a.g?a.g(b):a.call(null,b)).call(null,b)}}(this)};var Iw=function Iw(){switch(arguments.length){case 2:return Iw.a(arguments[0],arguments[1]);default:return Iw.l(arguments[0],arguments[1],new F(Array.prototype.slice.call(arguments,2),0))}};Iw.a=function(a,b){return Hw(Aw(Ni.j(Rg,Oi.a(Fw,a),b),a))};Iw.l=function(a,b,c){return Ee(Iw,a,Lg(b,c))};Iw.J=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return Iw.l(b,a,c)};Iw.I=2;var Jw=function Jw(b,c,d){if(b?b.Cc:b)return b.Cc(b,c,d);var e;e=Jw[n(null==b?null:b)];if(!e&&(e=Jw._,!e))throw x("Foldable.fold*",b);return e.call(null,b,c,d)};Xh.prototype.Cc=function(a,b,c){return Ee(b,c,this)};T.prototype.Cc=function(a,b,c){return Ee(b,c,this)};fi.prototype.Cc=function(a,b,c){return Ee(b,c,this)};Fk.prototype.Cc=function(a,b,c){return Ee(function(){return function(a,c){N(c,0);var f=N(c,1);return b.a?b.a(a,f):b.call(null,a,f)}}(this),c,this)};
t.prototype.Cc=function(a,b,c){return Ee(function(){return function(a,c){N(c,0);var f=N(c,1);return b.a?b.a(a,f):b.call(null,a,f)}}(this),c,this)};Wk.prototype.Cc=function(a,b,c){return Ee(function(){return function(a,c){N(c,0);var f=N(c,1);return b.a?b.a(a,f):b.call(null,a,f)}}(this),c,this)};hl.prototype.Cc=function(a,b,c){return Ee(b,c,this)};kl.prototype.Cc=function(a,b,c){return Ee(b,c,this)};function Kw(a,b,c){return Jw(c,a,b)};Xh.prototype.Dc=function(){var a=this;return Aw(Zh,Kw(function(){return function(a,c){return Gw.l(Cw.g?Cw.g(Tg):Cw.call(null,Tg),L([a,c],0))}}(a),function(){var b=Vg(a);return Cw.g?Cw.g(b):Cw.call(null,b)}(),a))};T.prototype.Dc=function(){var a=this;return Kw(function(){return function(a,c){return Gw.l(Cw.g?Cw.g(Tg):Cw.call(null,Tg),L([a,c],0))}}(a),function(){var b=Vg(a);return Cw.g?Cw.g(b):Cw.call(null,b)}(),a)};
fi.prototype.Dc=function(){var a=this;return Aw(Ni.a(function(a){return function(c){return new fi(null,function(){return function(){return c}}(a),null,null)}}(a),Zh),Kw(function(){return function(a,c){return Gw.l(Cw.g?Cw.g(Tg):Cw.call(null,Tg),L([a,c],0))}}(a),function(){var b=Vg(a);return Cw.g?Cw.g(b):Cw.call(null,b)}(),a))};
Fk.prototype.Dc=function(){var a=this;return Ee(function(){return function(a,c){var d=N(c,0),e=N(c,1);return Gw.l(Cw.g?Cw.g(Tg):Cw.call(null,Tg),L([a,Aw(Oi.a(Hj,d),e)],0))}}(a),function(){var b=Vg(a);return Cw.g?Cw.g(b):Cw.call(null,b)}(),a)};t.prototype.Dc=function(){var a=this;return Ee(function(){return function(a,c){var d=N(c,0),e=N(c,1);return Gw.l(Cw.g?Cw.g(Tg):Cw.call(null,Tg),L([a,Aw(Oi.a(Hj,d),e)],0))}}(a),function(){var b=Vg(a);return Cw.g?Cw.g(b):Cw.call(null,b)}(),a)};
Wk.prototype.Dc=function(){var a=this;return Ee(function(){return function(a,c){var d=N(c,0),e=N(c,1);return Gw.l(Cw.g?Cw.g(Tg):Cw.call(null,Tg),L([a,Aw(Oi.a(Hj,d),e)],0))}}(a),function(){var b=Vg(a);return Cw.g?Cw.g(b):Cw.call(null,b)}(),a)};hl.prototype.Dc=function(){var a=this;return Kw(function(){return function(a,c){return Gw.l(Cw.g?Cw.g(Tg):Cw.call(null,Tg),L([a,c],0))}}(a),function(){var b=Vg(a);return Cw.g?Cw.g(b):Cw.call(null,b)}(),a)};
kl.prototype.Dc=function(){var a=this;return Kw(function(){return function(a,c){return Gw.l(Cw.g?Cw.g(Tg):Cw.call(null,Tg),L([a,c],0))}}(a),function(){var b=Vg(a);return Cw.g?Cw.g(b):Cw.call(null,b)}(),a)};function Lw(a,b,c){return S.j(Gw,Aw(Oi.a(Oi,a),b),c)}var Nw=function Mw(b){if(b?b.Dc:b)return b.Dc(b);var c;c=Mw[n(null==b?null:b)];if(!c&&(c=Mw._,!c))throw x("Traversable.traverse*",b);return c.call(null,b)};function Pw(a){return Ee(function(a,c){return Lw(function(a,b){return b},a,L([c],0))},Cw.g?Cw.g(null):Cw.call(null,null),a)};function Qw(a){return a.g?a.g(0):a.call(null,0)}function Rw(a){return An.g(ch(a)).call(null,Qw(a))}function Sw(a){var b=N(a,0),c=N(a,1),d=rh(c)?S.a(Ti,c):c,e=Q(d,Oo),c=Q(d,sn),f=Q(d,wp),g=Q(d,Bn),d=Q(d,Ap);return u(f)?(f=dh(f),u(d)?(d=U,b=ri.a(e,Lg(b,g)),b=Po.g(ch(a)).call(null,f,b),c=new T(null,2,5,d,[b,u(c)?R.j(c,Ap,!0):c],null)):c=new T(null,2,5,U,[f,c],null),Ng(c,ch(a))):null}
function Tw(a){var b=N(a,0),c=N(a,1),c=rh(c)?S.a(Ti,c):c,d=Q(c,Oo),e=Q(c,Bn),f=N(e,0),g=Sh(e,1);return u(u(c)?e:c)?Ng(new T(null,2,5,U,[f,R.l(c,Oo,Tg.a(d,b),L([Bn,g],0))],null),ch(a)):null}
function Uw(a){if(qg.a(Wp,a.g?a.g(1):a.call(null,1)))return a;var b;b=Rw(a);if(u(b))if(u(Rw(a))){b=N(a,0);var c=N(a,1),d;if(u(Rw(a)))d=Cn.g(ch(a)).call(null,Qw(a));else throw"called children on a leaf node";var e=N(d,0),f=Sh(d,1);b=u(d)?Ng(new T(null,2,5,U,[e,new t(null,4,[Oo,Ug,wp,u(c)?Tg.a(wp.g(c),b):new T(null,1,5,U,[b],null),sn,c,Bn,f],null)],null),ch(a)):null}else b=null;if(u(b))return b;b=Tw(a);if(u(b))return b;for(;;)if(u(Sw(a))){b=Tw(Sw(a));if(u(b))return b;a=Sw(a)}else return new T(null,
2,5,U,[Qw(a),Wp],null)};function Vw(a,b){var c=S.j(ql,a,b);return Lg(c,ej.a(function(a){return function(b){return a===b}}(c),b))}var Ww=function Ww(){switch(arguments.length){case 0:return Ww.C();case 1:return Ww.g(arguments[0]);case 2:return Ww.a(arguments[0],arguments[1]);default:return Ww.l(arguments[0],arguments[1],new F(Array.prototype.slice.call(arguments,2),0))}};Ww.C=function(){return jl};Ww.g=function(a){return a};Ww.a=function(a,b){return M(a)<M(b)?Ee(Tg,b,a):Ee(Tg,a,b)};
Ww.l=function(a,b,c){a=Vw(M,Tg.l(c,b,L([a],0)));return Ee(hj,H(a),og(a))};Ww.J=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return Ww.l(b,a,c)};Ww.I=2;var Xw=function Xw(){switch(arguments.length){case 1:return Xw.g(arguments[0]);case 2:return Xw.a(arguments[0],arguments[1]);default:return Xw.l(arguments[0],arguments[1],new F(Array.prototype.slice.call(arguments,2),0))}};Xw.g=function(a){return a};
Xw.a=function(a,b){for(;;)if(M(b)<M(a)){var c=a;a=b;b=c}else return Ee(function(a,b){return function(a,c){return vh(b,c)?a:eh.a(a,c)}}(a,b),a,a)};Xw.l=function(a,b,c){a=Vw(function(a){return-M(a)},Tg.l(c,b,L([a],0)));return Ee(Xw,H(a),og(a))};Xw.J=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return Xw.l(b,a,c)};Xw.I=2;
var Yw=function Yw(){switch(arguments.length){case 1:return Yw.g(arguments[0]);case 2:return Yw.a(arguments[0],arguments[1]);default:return Yw.l(arguments[0],arguments[1],new F(Array.prototype.slice.call(arguments,2),0))}};Yw.g=function(a){return a};Yw.a=function(a,b){return M(a)<M(b)?Ee(function(a,d){return vh(b,d)?eh.a(a,d):a},a,a):Ee(eh,a,b)};Yw.l=function(a,b,c){return Ee(Yw,a,Tg.a(c,b))};Yw.J=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return Yw.l(b,a,c)};Yw.I=2;function Zw(a,b){return Yw.a(a,yh([b]))}function $w(a){if(fh(a))throw Error([y("Assert failed: "),y(Wi.l(L([$h(new C(null,"not","not",1044554643,null),$h(new C(null,"empty?","empty?",76408555,null),new C(null,"s","s",-948495851,null)))],0)))].join(""));var b=H(a);return new T(null,2,5,U,[b,Zw(a,b)],null)}function ax(a){var b=ml(Dh(a));a=S.a(Ww,dk(a));return Yw.a(b,a)}function bx(a){var b=S.a(Ww,dk(a));return Ee(function(){return function(a,b){return u(Q(a,b))?a:R.j(a,b,jl)}}(b),a,b)}
function cx(a){return dx(bx(a),Ug,ax(a))}function dx(a,b,c){for(;;){if(fh(c))return Ji(fh,dk(a))?b:null;var d=$w(c),e=N(d,0),f=N(d,1),g=function(){var b=e;return a.g?a.g(b):a.call(null,b)}();c=d=Ee(function(a,b,c,d,e){return function(a,b){return lj.N(a,new T(null,1,5,U,[e],null),Zw,b)}}(a,b,c,d,e,f,g),a,g);b=Tg.a(b,e);f=Ww.a(f,Xw.a(ax(d),g));a=c;c=f}};var ex=function ex(b){if(b?b.Sf:b)return b.value;var c;c=ex[n(null==b?null:b)];if(!c&&(c=ex._,!c))throw x("BoxedValueProtocol.value",b);return c.call(null,b)},fx=function fx(b){if(b?b.mi:b)return b.gc;var c;c=fx[n(null==b?null:b)];if(!c&&(c=fx._,!c))throw x("EventProtocol.topic",b);return c.call(null,b)},gx=function gx(b){if(b?b.li:b)return b.timestamp;var c;c=gx[n(null==b?null:b)];if(!c&&(c=gx._,!c))throw x("EventProtocol.timestamp",b);return c.call(null,b)},hx=function hx(b,c){if(b?b.Rg:b)return b.Rg(0,
c);var d;d=hx[n(null==b?null:b)];if(!d&&(d=hx._,!d))throw x("EventProtocol.record-timestamp",b);return d.call(null,b,c)},ix=function ix(b){if(b?b.Tf:b)return b.Tf(b);var c;c=ix[n(null==b?null:b)];if(!c&&(c=ix._,!c))throw x("MessageProtocol.fresh?",b);return c.call(null,b)};function jx(a,b,c,d,e,f){this.gc=a;this.value=b;this.timestamp=c;this.A=d;this.o=e;this.w=f;this.B=2229667594;this.O=8192}h=jx.prototype;h.mi=function(){return this.gc};h.li=function(){return this.timestamp};
h.Rg=function(a,b){return R.j(this,aq,b)};h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "topic":return this.gc;case "value":return this.value;case "timestamp":return this.timestamp;default:return Yg(this.o,b,c)}};
h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#jamesmacaulay.zelkova.impl.signal.Event{",", ","}",c,ri.a(new T(null,3,5,U,[new T(null,2,5,U,[zo,this.gc],null),new T(null,2,5,U,[ho,this.value],null),new T(null,2,5,U,[aq,this.timestamp],null)],null),this.o))};h.U=function(){return this.A};h.da=function(){return new jx(this.gc,this.value,this.timestamp,this.A,this.o,this.w)};h.Z=function(){return 3+M(this.o)};
h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};h.Sf=function(){return this.value};h.ya=function(a,b){return vh(new hl(null,new t(null,3,[ho,null,zo,null,aq,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new jx(this.gc,this.value,this.timestamp,this.A,yi($g.a(this.o,b)),null)};
h.ra=function(a,b,c){return u(W.a?W.a(zo,b):W.call(null,zo,b))?new jx(c,this.value,this.timestamp,this.A,this.o,null):u(W.a?W.a(ho,b):W.call(null,ho,b))?new jx(this.gc,c,this.timestamp,this.A,this.o,null):u(W.a?W.a(aq,b):W.call(null,aq,b))?new jx(this.gc,this.value,c,this.A,this.o,null):new jx(this.gc,this.value,this.timestamp,this.A,R.j(this.o,b,c),null)};
h.Y=function(){return E(ri.a(new T(null,3,5,U,[new T(null,2,5,U,[zo,this.gc],null),new T(null,2,5,U,[ho,this.value],null),new T(null,2,5,U,[aq,this.timestamp],null)],null),this.o))};h.V=function(a,b){return new jx(this.gc,this.value,this.timestamp,b,this.o,this.w)};h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};function kx(a,b){return new jx(a,b,null,null,null,null)}function lx(a,b,c,d){this.value=a;this.A=b;this.o=c;this.w=d;this.B=2229667594;this.O=8192}h=lx.prototype;
h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "value":return this.value;default:return Yg(this.o,b,c)}};h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#jamesmacaulay.zelkova.impl.signal.Fresh{",", ","}",c,ri.a(new T(null,1,5,U,[new T(null,2,5,U,[ho,this.value],null)],null),this.o))};h.U=function(){return this.A};h.da=function(){return new lx(this.value,this.A,this.o,this.w)};
h.Z=function(){return 1+M(this.o)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};h.Sf=function(){return this.value};h.Tf=function(){return!0};h.ya=function(a,b){return vh(new hl(null,new t(null,1,[ho,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new lx(this.value,this.A,yi($g.a(this.o,b)),null)};
h.ra=function(a,b,c){return u(W.a?W.a(ho,b):W.call(null,ho,b))?new lx(c,this.A,this.o,null):new lx(this.value,this.A,R.j(this.o,b,c),null)};h.Y=function(){return E(ri.a(new T(null,1,5,U,[new T(null,2,5,U,[ho,this.value],null)],null),this.o))};h.V=function(a,b){return new lx(this.value,b,this.o,this.w)};h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};function mx(a,b,c,d){this.value=a;this.A=b;this.o=c;this.w=d;this.B=2229667594;this.O=8192}h=mx.prototype;
h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "value":return this.value;default:return Yg(this.o,b,c)}};h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#jamesmacaulay.zelkova.impl.signal.Cached{",", ","}",c,ri.a(new T(null,1,5,U,[new T(null,2,5,U,[ho,this.value],null)],null),this.o))};h.U=function(){return this.A};h.da=function(){return new mx(this.value,this.A,this.o,this.w)};
h.Z=function(){return 1+M(this.o)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};h.Sf=function(){return this.value};h.Tf=function(){return!1};h.ya=function(a,b){return vh(new hl(null,new t(null,1,[ho,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new mx(this.value,this.A,yi($g.a(this.o,b)),null)};
h.ra=function(a,b,c){return u(W.a?W.a(ho,b):W.call(null,ho,b))?new mx(c,this.A,this.o,null):new mx(this.value,this.A,R.j(this.o,b,c),null)};h.Y=function(){return E(ri.a(new T(null,1,5,U,[new T(null,2,5,U,[ho,this.value],null)],null),this.o))};h.V=function(a,b){return new mx(this.value,b,this.o,this.w)};h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};function nx(a){return new lx(a,null,null,null)}function ox(a){return new mx(a,null,null,null)}
var px=Ni.j(Pl,dj.g(ix),Y.g(ex)),qx={},rx=function rx(b){if(b?b.Ug:b)return b.Ug();var c;c=rx[n(null==b?null:b)];if(!c&&(c=rx._,!c))throw x("SignalProtocol.signal-deps",b);return c.call(null,b)},sx=function sx(b){if(b?b.Vg:b)return b.Vg();var c;c=sx[n(null==b?null:b)];if(!c&&(c=sx._,!c))throw x("SignalProtocol.topsort",b);return c.call(null,b)};function tx(a){return a?u(u(null)?null:a.ni)?!0:a.xc?!1:v(qx,a):v(qx,a)}
function ux(a){return Ee(function(a,c){var d=qp.g(c);return u(d)?R.j(a,d,Tg.a(Yg(a,d,Ug),c)):a},X,a)}function vx(a,b){var c=function(a){return function(b){return hj.j(ol(),Y.g(a),b)}}(pl(b,ul(Number.MAX_VALUE)));return pl(Dh(a),Y.a(c,dk(a)))}function wx(a,b,c,d,e,f,g,k){this.dc=a;this.ac=b;this.hc=c;this.$b=d;this.Zb=e;this.A=f;this.o=g;this.w=k;this.B=2229667594;this.O=8192}h=wx.prototype;h.R=function(a,b){return Ue.j(this,b,null)};
h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "parents-map":return this.dc;case "kids-map":return this.ac;case "topsort":return this.hc;case "kid-indexes-map":return this.$b;case "inputs-by-topic":return this.Zb;default:return Yg(this.o,b,c)}};
h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata{",", ","}",c,ri.a(new T(null,5,5,U,[new T(null,2,5,U,[Xp,this.dc],null),new T(null,2,5,U,[Jn,this.ac],null),new T(null,2,5,U,[Ip,this.hc],null),new T(null,2,5,U,[jo,this.$b],null),new T(null,2,5,U,[Mp,this.Zb],null)],null),this.o))};h.U=function(){return this.A};
h.da=function(){return new wx(this.dc,this.ac,this.hc,this.$b,this.Zb,this.A,this.o,this.w)};h.Z=function(){return 5+M(this.o)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};
h.ya=function(a,b){return vh(new hl(null,new t(null,5,[Jn,null,jo,null,Ip,null,Mp,null,Xp,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new wx(this.dc,this.ac,this.hc,this.$b,this.Zb,this.A,yi($g.a(this.o,b)),null)};
h.ra=function(a,b,c){return u(W.a?W.a(Xp,b):W.call(null,Xp,b))?new wx(c,this.ac,this.hc,this.$b,this.Zb,this.A,this.o,null):u(W.a?W.a(Jn,b):W.call(null,Jn,b))?new wx(this.dc,c,this.hc,this.$b,this.Zb,this.A,this.o,null):u(W.a?W.a(Ip,b):W.call(null,Ip,b))?new wx(this.dc,this.ac,c,this.$b,this.Zb,this.A,this.o,null):u(W.a?W.a(jo,b):W.call(null,jo,b))?new wx(this.dc,this.ac,this.hc,c,this.Zb,this.A,this.o,null):u(W.a?W.a(Mp,b):W.call(null,Mp,b))?new wx(this.dc,this.ac,this.hc,this.$b,c,this.A,this.o,
null):new wx(this.dc,this.ac,this.hc,this.$b,this.Zb,this.A,R.j(this.o,b,c),null)};h.Y=function(){return E(ri.a(new T(null,5,5,U,[new T(null,2,5,U,[Xp,this.dc],null),new T(null,2,5,U,[Jn,this.ac],null),new T(null,2,5,U,[Ip,this.hc],null),new T(null,2,5,U,[jo,this.$b],null),new T(null,2,5,U,[Mp,this.Zb],null)],null),this.o))};h.V=function(a,b){return new wx(this.dc,this.ac,this.hc,this.$b,this.Zb,b,this.o,this.w)};h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};
function xx(a,b,c,d,e){return new wx(a,b,c,d,e,null,null,null)}
function yx(a){var b=new Nl(function(){var b;a:{b=X;var c=new hk([a,jl],!0,!1),d;d=Ni.a(E,rx);for(d=Ng(new T(null,2,5,U,[a,null],null),new t(null,3,[An,Mi(!0),Cn,d,Po,null],null));;){var e;e=d;e=qg.a(Wp,e.g?e.g(1):e.call(null,1));if(u(e)){b=new t(null,2,[Xp,b,Jn,c],null);break a}if(vh(b,Qw(d)))b:if(e=Tw(d),u(e))d=e;else for(;;)if(u(Sw(d))){e=Tw(Sw(d));if(u(e)){d=e;break b}d=Sw(d)}else{d=new T(null,2,5,U,[Qw(d),Wp],null);break b}else{e=Qw(d);var f=rx(e);d=Uw(d);b=R.j(b,e,f);c=el.l(Ww,L([c,pl(f,cj(yh([e])))],
0))}}}return b},null),c=new Nl(function(a){return function(){return Xp.g(K.g?K.g(a):K.call(null,a))}}(b),null),d=new Nl(function(a){return function(){return Jn.g(K.g?K.g(a):K.call(null,a))}}(b,c),null),e=new Nl(function(a,b){return function(){var a=K.g?K.g(b):K.call(null,b);return hj.a(Ug,Zh(cx(a)))}}(b,c,d),null),f=new Nl(function(a,b,c,d){return function(){return ux(K.g?K.g(d):K.call(null,d))}}(b,c,d,e),null);return Ng(a,xx(c,d,e,new Nl(function(a,b,c,d){return function(){return vx(K.g?K.g(c):K.call(null,
c),K.g?K.g(d):K.call(null,d))}}(b,c,d,e,f),null),f))}function zx(){return Ax(arguments[0],arguments[1],2<arguments.length?new F(Array.prototype.slice.call(arguments,2),0):null)}
function Ax(a,b,c){if(null==b)throw Error([y("Assert failed: "),y("This signal is not a valid write-port, use the `jamesmacaulay.zelkova.signal/write-port` constructor if you want to treat this signal like a channel."),y("\n"),y(Wi.l(L([$h(new C(null,"not","not",1044554643,null),$h(new C(null,"nil?","nil?",1612038930,null),new C(null,"ch","ch",1085813622,null)))],0)))].join(""));return S.j(a,b,c)}
function Bx(a,b,c,d,e,f,g,k,l,m){this.Bb=a;this.wb=b;this.Eb=c;this.Cb=d;this.sb=e;this.Ab=f;this.rb=g;this.A=k;this.o=l;this.w=m;this.B=2229667594;this.O=8192}h=Bx.prototype;h.R=function(a,b){return Ue.j(this,b,null)};
h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "init-fn":return this.Bb;case "sources":return this.wb;case "relayed-event-topic":return this.Eb;case "msg-xform":return this.Cb;case "deps":return this.sb;case "event-sources":return this.Ab;case "write-port-channel":return this.rb;default:return Yg(this.o,b,c)}};h.Ad=function(){return zx(Cv,this.rb)};
h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#jamesmacaulay.zelkova.impl.signal.SignalDefinition{",", ","}",c,ri.a(new T(null,7,5,U,[new T(null,2,5,U,[gp,this.Bb],null),new T(null,2,5,U,[co,this.wb],null),new T(null,2,5,U,[qp,this.Eb],null),new T(null,2,5,U,[bq,this.Cb],null),new T(null,2,5,U,[oq,this.sb],null),new T(null,2,5,U,[tn,this.Ab],null),new T(null,2,5,U,[bp,this.rb],null)],null),this.o))};h.U=function(){return this.A};
h.da=function(){return new Bx(this.Bb,this.wb,this.Eb,this.Cb,this.sb,this.Ab,this.rb,this.A,this.o,this.w)};h.Z=function(){return 7+M(this.o)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};h.ni=!0;h.Ug=function(){var a=this;return hj.j(jl,dj.g(tx),function(){var b=a.sb;return u(b)?b:a.wb}())};h.Vg=function(){var a=Ip.g(ch(this));return K.g?K.g(a):K.call(null,a)};
h.Bd=function(a,b,c){return Ax(Bv,this.rb,L([b,c],0))};h.ya=function(a,b){return vh(new hl(null,new t(null,7,[tn,null,co,null,bp,null,gp,null,qp,null,bq,null,oq,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new Bx(this.Bb,this.wb,this.Eb,this.Cb,this.sb,this.Ab,this.rb,this.A,yi($g.a(this.o,b)),null)};
h.ra=function(a,b,c){return u(W.a?W.a(gp,b):W.call(null,gp,b))?new Bx(c,this.wb,this.Eb,this.Cb,this.sb,this.Ab,this.rb,this.A,this.o,null):u(W.a?W.a(co,b):W.call(null,co,b))?new Bx(this.Bb,c,this.Eb,this.Cb,this.sb,this.Ab,this.rb,this.A,this.o,null):u(W.a?W.a(qp,b):W.call(null,qp,b))?new Bx(this.Bb,this.wb,c,this.Cb,this.sb,this.Ab,this.rb,this.A,this.o,null):u(W.a?W.a(bq,b):W.call(null,bq,b))?new Bx(this.Bb,this.wb,this.Eb,c,this.sb,this.Ab,this.rb,this.A,this.o,null):u(W.a?W.a(oq,b):W.call(null,
oq,b))?new Bx(this.Bb,this.wb,this.Eb,this.Cb,c,this.Ab,this.rb,this.A,this.o,null):u(W.a?W.a(tn,b):W.call(null,tn,b))?new Bx(this.Bb,this.wb,this.Eb,this.Cb,this.sb,c,this.rb,this.A,this.o,null):u(W.a?W.a(bp,b):W.call(null,bp,b))?new Bx(this.Bb,this.wb,this.Eb,this.Cb,this.sb,this.Ab,c,this.A,this.o,null):new Bx(this.Bb,this.wb,this.Eb,this.Cb,this.sb,this.Ab,this.rb,this.A,R.j(this.o,b,c),null)};
h.Y=function(){return E(ri.a(new T(null,7,5,U,[new T(null,2,5,U,[gp,this.Bb],null),new T(null,2,5,U,[co,this.wb],null),new T(null,2,5,U,[qp,this.Eb],null),new T(null,2,5,U,[bq,this.Cb],null),new T(null,2,5,U,[oq,this.sb],null),new T(null,2,5,U,[tn,this.Ab],null),new T(null,2,5,U,[bp,this.rb],null)],null),this.o))};h.V=function(a,b){return new Bx(this.Bb,this.wb,this.Eb,this.Cb,this.sb,this.Ab,this.rb,b,this.o,this.w)};h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};
function Cx(a){var b=qp.g(a);return u(b)?R.l(a,co,new T(null,1,5,U,[fo],null),L([bq,Ni.a(Y.g(function(a){return function(b){var e=N(b,0);N(b,1);N(b,2);return qg.a(a,fx(e))?nx(ex(e)):null}}(b,b)),ej.g(ve))],0)):a}function Dx(a){a=Cx(a);a=new Bx(gp.g(a),co.g(a),qp.g(a),bq.g(a),oq.g(a),tn.g(a),bp.g(a),null,$g.l(a,gp,L([co,qp,bq,oq,tn,bp],0)),null);return yx(a)}
function Ex(a){if(1>=M(a))return a;var b=function(a){return function(b){return hj.j(Ug,Ni.a(Pl,Zi(a)),new T(null,2,5,U,[b,cj(ox(ex(Sg(b))))],null))}}(Ih(Oh,Y.a(M,a)));return Y.a(b,a)}function Fx(a){return S.j(Y,Hj,a)}
function Gx(a){return function(a){return function(c,d){var e=Fx(Ex(d)),e=Ee(function(a,b){return function(a,c){var d=N(c,0),e=Sh(c,1),f=ex(dh(a)),e=Gj(e),d=b(new T(null,3,5,U,[d,f,e],null));return hj.a(a,d)}}(e,a),new T(null,1,5,U,[new mx(c,null,null,null)],null),e);return qg.a(1,M(e))?e:Jj(e,1,M(e))}}(function(b){return new Ii(Hi(a,Fi(new T(null,1,5,U,[b],null))),null,null,null)})}function Hx(a,b){var c=Q(a,b);return xw(c,nw.C())}
function Ix(a,b,c,d){b=Gx(b);var e=nw.g(1);Tv(function(b,e){return function(){var k=function(){return function(a){return function(){function b(c){for(;;){var d;a:try{for(;;){var e=a(c);if(!W(e,Z)){d=e;break a}}}catch(f){if(f instanceof Object)c[5]=f,jw(c),d=Z;else throw f;}if(!W(d,Z))return d}}function c(){var a=[null,null,null,null,null,null,null,null,null,null,null];a[0]=d;a[1]=1;return a}var d=null,d=function(a){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,a)}throw Error("Invalid arity: "+
arguments.length);};d.C=c;d.g=b;return d}()}(function(b,e){return function(b){var f=b[1];if(1===f)return f=a,b[7]=f,b[2]=null,b[1]=2,Z;if(2===f)return fw(b,4,c);if(3===f)return f=b[2],hw(b,f);if(4===f){var g=b[8],f=b[2];b[8]=f;b[1]=u(null==f)?5:6;return Z}if(5===f)return f=Cv(d),b[2]=f,b[1]=7,Z;if(6===f){var g=b[8],f=b[7],k=b[9],f=e.a?e.a(f,g):e.call(null,f,g);b[9]=f;return gw(b,8,d,f)}return 7===f?(f=b[2],b[2]=f,b[1]=3,Z):8===f?(k=b[9],g=b[2],f=Sg(k),f=ex(f),b[10]=g,b[7]=f,b[2]=null,b[1]=2,Z):null}}(b,
e),b,e)}(),l=function(){var a=k.C?k.C():k.call(null);a[6]=b;return a}();return ew(l)}}(e,b))}function Jx(a,b,c,d){var e=rh(b)?S.a(Ti,b):b;b=Q(e,gp);var f=Q(e,co),e=Q(e,bq);a=hj.j(new T(null,1,5,U,[Hx(a,fo)],null),Y.g(Oi.a(Hx,a)),f);a=yw(a);f=nw.C();Ix(b.a?b.a(c,d):b.call(null,c,d),e,a,f);return ww(f)}function Kx(a,b,c,d){return Ee(function(a,b){return R.j(a,b,Jx(a,b,c,d))},new t(null,1,[fo,b],null),a)}function Lx(a){return hj.j(X,Y.g(tn),a)}
var Mx=function Mx(b,c){if(b?b.Tg:b)return b.Tg(0,c);var d;d=Mx[n(null==b?null:b)];if(!d&&(d=Mx._,!d))throw x("LiveChannelGraphProtocol.signal-mult",b);return d.call(null,b,c)},Nx=function Nx(b){if(b?b.Sg:b)return b.Sg();var c;c=Nx[n(null==b?null:b)];if(!c&&(c=Nx._,!c))throw x("LiveChannelGraphProtocol.connect-to-world",b);return c.call(null,b)};function Ox(a,b,c,d,e,f,g,k){this.definition=a;this.mb=b;this.Mb=c;this.Db=d;this.Fa=e;this.A=f;this.o=g;this.w=k;this.B=2229667594;this.O=8192}h=Ox.prototype;
h.R=function(a,b){return Ue.j(this,b,null)};h.P=function(a,b,c){switch(b instanceof V?b.ja:null){case "definition":return this.definition;case "events-channel":return this.mb;case "mult-map":return this.Mb;case "output-values-mult":return this.Db;case "opts":return this.Fa;default:return Yg(this.o,b,c)}};h.Ad=function(){return Cv(this.mb)};
h.S=function(a,b,c){return Bl(b,function(){return function(a){return Bl(b,Hl,""," ","",c,a)}}(this),"#jamesmacaulay.zelkova.impl.signal.LiveChannelGraph{",", ","}",c,ri.a(new T(null,5,5,U,[new T(null,2,5,U,[yn,this.definition],null),new T(null,2,5,U,[un,this.mb],null),new T(null,2,5,U,[to,this.Mb],null),new T(null,2,5,U,[Wo,this.Db],null),new T(null,2,5,U,[pp,this.Fa],null)],null),this.o))};h.U=function(){return this.A};
h.da=function(){return new Ox(this.definition,this.mb,this.Mb,this.Db,this.Fa,this.A,this.o,this.w)};h.Z=function(){return 5+M(this.o)};h.T=function(){var a=this.w;return null!=a?a:this.w=a=Uh(this)};h.M=function(a,b){var c;c=u(b)?(c=this.constructor===b.constructor)?Vj(this,b):c:b;return u(c)?!0:!1};h.Tg=function(a,b){return Q(this.Mb,b)};
h.Sg=function(){for(var a=this,b=this,c=Lx(sx(a.definition)),c=E(dk(c)),d=null,e=0,f=0;;)if(f<e){var g=d.ba(null,f);rw(function(){var c=a.Fa;return g.a?g.a(b,c):g.call(null,b,c)}(),a.mb);f+=1}else if(c=E(c)){d=c;if(mh(d))c=Pf(d),f=Qf(d),d=c,e=M(c),c=f;else{var k=H(d);rw(function(){var c=a.Fa;return k.a?k.a(b,c):k.call(null,b,c)}(),a.mb);c=J(d);d=null;e=0}f=0}else break;return b};h.Bd=function(a,b,c){return Bv(this.mb,b,c)};
h.ya=function(a,b){return vh(new hl(null,new t(null,5,[un,null,yn,null,to,null,Wo,null,pp,null],null),null),b)?$g.a(Ng(hj.a(X,this),this.A),b):new Ox(this.definition,this.mb,this.Mb,this.Db,this.Fa,this.A,yi($g.a(this.o,b)),null)};
h.ra=function(a,b,c){return u(W.a?W.a(yn,b):W.call(null,yn,b))?new Ox(c,this.mb,this.Mb,this.Db,this.Fa,this.A,this.o,null):u(W.a?W.a(un,b):W.call(null,un,b))?new Ox(this.definition,c,this.Mb,this.Db,this.Fa,this.A,this.o,null):u(W.a?W.a(to,b):W.call(null,to,b))?new Ox(this.definition,this.mb,c,this.Db,this.Fa,this.A,this.o,null):u(W.a?W.a(Wo,b):W.call(null,Wo,b))?new Ox(this.definition,this.mb,this.Mb,c,this.Fa,this.A,this.o,null):u(W.a?W.a(pp,b):W.call(null,pp,b))?new Ox(this.definition,this.mb,
this.Mb,this.Db,c,this.A,this.o,null):new Ox(this.definition,this.mb,this.Mb,this.Db,this.Fa,this.A,R.j(this.o,b,c),null)};h.Y=function(){return E(ri.a(new T(null,5,5,U,[new T(null,2,5,U,[yn,this.definition],null),new T(null,2,5,U,[un,this.mb],null),new T(null,2,5,U,[to,this.Mb],null),new T(null,2,5,U,[Wo,this.Db],null),new T(null,2,5,U,[pp,this.Fa],null)],null),this.o))};h.V=function(a,b){return new Ox(this.definition,this.mb,this.Mb,this.Db,this.Fa,b,this.o,this.w)};h.ug=!0;
h.Df=function(a,b,c){return uw(this.Db,b,c)};h.be=function(a,b){return vw(this.Db,b)};h.X=function(a,b){return lh(b)?Xe(this,A.a(b,0),A.a(b,1)):Ee(z,this,b)};var Px=function Px(b,c){if(b?b.Uf:b)return b.Uf(b,c);var d;d=Px[n(null==b?null:b)];if(!d&&(d=Px._,!d))throw x("SignalLike.spawn*",b);return d.call(null,b,c)},Qx=Y.g(Ni.a(Oi.a(Y,function(a){return null==gx(a)?hx(a,(new Date).valueOf()):a}),function(a){return ih(a)?a:null==a?Ug:new T(null,1,5,U,[a],null)}));
Ox.prototype.Uf=function(a,b){return Px(eq.g(this),b)};Bx.prototype.Uf=function(a,b){var c=nw.a(1,Qx),d=ww(c),d=Kx(sx(this),d,this,b),e=ww(xw(Q(d,this),nw.a(1,px)));return Nx(new Ox(this,c,d,e,b,null,null,null))};
if("undefined"===typeof Rx)var Rx=function(){var a=function(){var a=X;return Si?Si(a):Ri.call(null,a)}(),b=function(){var a=X;return Si?Si(a):Ri.call(null,a)}(),c=function(){var a=X;return Si?Si(a):Ri.call(null,a)}(),d=function(){var a=X;return Si?Si(a):Ri.call(null,a)}(),e=Yg(X,$p,bm());return new mm(ng("jamesmacaulay.zelkova.impl.signal","value-source-\x3eevents-fn"),function(){return function(a){return(a?u(u(null)?null:a.ug)||(a.xc?0:v(tw,a)):v(tw,a))?Ep:(a?u(u(null)?null:a.Vh)||(a.xc?0:v(zv,a)):
v(zv,a))?Dp:th(a)?Fn:null}}(a,b,c,d,e),Yn,e,a,b,c,d)}();om(Rx,Fn,function(a,b){return function(c,d){var e=a.a?a.a(c,d):a.call(null,c,d);return rw(e,nw.a(1,Y.g(Oi.a(kx,b))))}});om(Rx,Ep,function(a,b){function c(){return xw(a,nw.C())}return Rx.a?Rx.a(c,b):Rx.call(null,c,b)});om(Rx,Dp,function(a,b){var c=ww(a);return Rx.a?Rx.a(c,b):Rx.call(null,c,b)});function Sx(){var a=di.g(Ml()),b=nw.C();return Dx(new t(null,4,[gp,Mi(null),qp,a,tn,new hk([a,Rx.a?Rx.a(b,a):Rx.call(null,b,a)],!0,!1),bp,b],null))}
function Tx(a){return function(){function b(b){return a.g?a.g(b):a.call(null,b)}function c(){return a.C?a.C():a.call(null)}var d=null,d=function(a,d){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,a);case 2:return Ag(a)?a:new zg(a)}throw Error("Invalid arity: "+arguments.length);};d.C=c;d.g=b;d.a=function(a){return Ag(a)?a:new zg(a)};return d}()}function Ux(a){return Dx(new t(null,3,[gp,Mi(a),co,new T(null,1,5,U,[fo],null),bq,Tx],null))}
function Vx(a,b){if(fh(b))return Ux(a.C?a.C():a.call(null));var c=Gj(b),d=Ni.j(Y.g(function(){return function(a){N(a,0);N(a,1);return N(a,2)}}(c)),dj.g(function(){return function(a){return Ki(ix,a)}}(c)),Y.g(function(){return function(b){return nx(S.a(a,Y.a(ex,b)))}}(c)));return Dx(new t(null,3,[gp,function(b,c){return function(d,k){return S.a(a,Y.a(function(){return function(a){return gp.g(a).call(null,d,k)}}(b,c),b))}}(c,d),co,c,bq,d],null))}function Wx(a,b){return Vx(a,b)}
function Xx(a,b,c){return Dx(new t(null,3,[gp,Mi(b),co,new T(null,1,5,U,[c],null),bq,Ni.a(dj.g(function(a){N(a,0);N(a,1);a=N(a,2);a=N(a,0);return ix(a)}),Y.g(function(b){N(b,0);var c=N(b,1);b=N(b,2);b=N(b,0);b=ex(b);c=a.a?a.a(b,c):a.call(null,b,c);return nx(c)}))],null))}function Yx(a,b,c){return Xx(function(b,c){return a.a?a.a(c,b):a.call(null,c,b)},b,c)}
function Zx(a,b,c){var d=new T(null,4,5,U,[Kp,b,a,c],null);return Dx(new t(null,4,[gp,b,oq,new T(null,1,5,U,[c],null),qp,d,tn,new hk([d,function(b){return function(d){d=xw(Mx(d,c),nw.a(1,px));var g=nw.a(1,Y.g(Oi.a(kx,b)));a.a?a.a(d,g):a.call(null,d,g);return g}}(d)],!0,!1)],null))}function $x(a){return Dx(new t(null,3,[gp,gp.g(H(a)),co,a,bq,Ni.a(Y.g(function(a){N(a,0);N(a,1);a=N(a,2);return H(dj.a(ix,a))}),ej.g(ve))],null))}
function ay(a,b){return Dx(new t(null,3,[gp,gp.g(b),co,new T(null,2,5,U,[a,b],null),bq,Ni.a(Y.g(function(a){N(a,0);N(a,1);var b=N(a,2);a=N(b,0);b=N(b,1);return u(ix(a))?nx(ex(b)):null}),ej.g(ve))],null))}function by(){return Ni.a(Y.g(function(a){N(a,0);N(a,1);a=N(a,2);a=N(a,0);var b;b=ix(a);u(b)&&(b=ex(a),b=xe.g?xe.g(b):xe.call(null,b));return u(b)?nx(ex(a)):null}),ej.g(ve))}
function cy(a){return Dx(new t(null,3,[gp,function(){return function(a){return function(c,d){var e=a.a?a.a(c,d):a.call(null,c,d);return u(xe.g?xe.g(e):xe.call(null,e))?e:!1}}(gp.g(a))}(),co,new T(null,1,5,U,[a],null),bq,by()],null))}function dy(){var a=1<arguments.length?new F(Array.prototype.slice.call(arguments,1),0):null;return xw(Px(arguments[0],null),S.a(nw,a))};function ey(a,b){return Zx(function(b,d){var e=nw.g(1E3+a),f=function(a){return function(){var b=Oi.a(qw,d);return ow(a,b)}}(e),g=nw.g(1);Tv(function(e,f,g){return function(){var p=function(){return function(a){return function(){function b(c){for(;;){var d;a:try{for(;;){var e=a(c);if(!W(e,Z)){d=e;break a}}}catch(f){if(f instanceof Object)c[5]=f,jw(c),d=Z;else throw f;}if(!W(d,Z))return d}}function c(){var a=[null,null,null,null,null,null,null,null,null,null];a[0]=d;a[1]=1;return a}var d=null,d=function(a){switch(arguments.length){case 0:return c.call(this);
case 1:return b.call(this,a)}throw Error("Invalid arity: "+arguments.length);};d.C=c;d.g=b;return d}()}(function(e,f,g){return function(e){var k=e[1];if(1===k)return e[2]=null,e[1]=2,Z;if(2===k)return fw(e,4,b);if(3===k)return k=e[2],hw(e,k);if(4===k)return k=e[7],k=e[2],e[7]=k,e[1]=u(null==k)?5:6,Z;if(5===k)return k=Cv(d),e[2]=k,e[1]=7,Z;if(6===k)return k=e[7],gw(e,8,f,k);if(7===k)return k=e[2],e[2]=k,e[1]=3,Z;if(8===k){var k=e[2],l=setTimeout(g,a);e[8]=l;e[9]=k;e[2]=null;e[1]=2;return Z}return null}}(e,
f,g),e,f,g)}(),q=function(){var a=p.C?p.C():p.call(null);a[6]=e;return a}();return ew(q)}}(g,e,f));return g},gp.g(b),b)}function fy(a,b){var c;c=Wx(Mi(1),L([b],0));var d=Wx(Mi(-1),L([ey(a,b)],0));c=L([c,d],0);c=$x(c);c=Xx(Mh,0,c);c=Wx(Li(Rh),L([c],0));c=cy(c);return ay(c,b)};var gy=virtualDom.create,hy=virtualDom.diff,iy=virtualDom.patch,jy=function jy(b,c){return H(c)instanceof V?jy(Tg.a(b,Gj($i(2,c))),aj(2,c)):new T(null,2,5,U,[b,gj(c)],null)},ky=Oi.a(function(a,b){if(kh(b))return ti(Jh(function(b,c,d){return vi(b,a.g?a.g(c):a.call(null,c),d)},Hf(X),b));for(var c=function(){var a=Hf(X);return Si?Si(a):Ri.call(null,a)}(),d=E(b),e=null,f=0,g=0;;)if(g<f){var k=e.ba(null,g),l=N(k,0),m=N(k,1),p=K.g?K.g(c):K.call(null,c),k=c,m=vi(p,function(){var b=l;return a.g?a.g(b):a.call(null,
b)}(),m);Vi.a?Vi.a(k,m):Vi.call(null,k,m);g+=1}else if(d=E(d)){if(mh(d))f=Pf(d),d=Qf(d),e=f,f=M(f);else{var e=H(d),q=N(e,0),f=N(e,1),g=K.g?K.g(c):K.call(null,c),e=c,f=vi(g,function(){var b=q;return a.g?a.g(b):a.call(null,b)}(),f);Vi.a?Vi.a(e,f):Vi.call(null,e,f);d=J(d);e=null;f=0}g=0}else break;return ti(K.g?K.g(c):K.call(null,c))},function(a){var b;b=new t(null,2,[np,"className",ap,"htmlFor"],null);b=a.g?a.g(b):a.call(null,b);return u(b)?b:wr(ei(a),"-","")});
function ly(a){return function(){function b(a){var b=null;if(0<arguments.length){for(var b=0,f=Array(arguments.length-0);b<f.length;)f[b]=arguments[b+0],++b;b=new F(f,0)}return c.call(this,b)}function c(b){var c=jy(X,b);b=N(c,0);c=N(c,1);return virtualDom.h(a,Tl(ky.g?ky.g(b):ky.call(null,b)),Tl(c))}b.I=0;b.J=function(a){a=E(a);return c(a)};b.l=c;return b}()}var my=function my(){return my.l(0<arguments.length?new F(Array.prototype.slice.call(arguments,0),0):null)};
my.l=function(a){return function(b){return S.a(a,b)}}(ly("img"));my.I=0;my.J=function(a){return my.l(E(a))};var ny=function ny(){return ny.l(0<arguments.length?new F(Array.prototype.slice.call(arguments,0),0):null)};ny.l=function(a){return function(b){return S.a(a,b)}}(ly("input"));ny.I=0;ny.J=function(a){return ny.l(E(a))};var oy=function oy(){return oy.l(0<arguments.length?new F(Array.prototype.slice.call(arguments,0),0):null)};oy.l=function(a){return function(b){return S.a(a,b)}}(ly("label"));
oy.I=0;oy.J=function(a){return oy.l(E(a))};var py=function py(){return py.l(0<arguments.length?new F(Array.prototype.slice.call(arguments,0),0):null)};py.l=function(a){return function(b){return S.a(a,b)}}(ly("li"));py.I=0;py.J=function(a){return py.l(E(a))};var qy=function qy(){return qy.l(0<arguments.length?new F(Array.prototype.slice.call(arguments,0),0):null)};qy.l=function(a){return function(b){return S.a(a,b)}}(ly("option"));qy.I=0;qy.J=function(a){return qy.l(E(a))};
var ry=function ry(){return ry.l(0<arguments.length?new F(Array.prototype.slice.call(arguments,0),0):null)};ry.l=function(a){return function(b){return S.a(a,b)}}(ly("select"));ry.I=0;ry.J=function(a){return ry.l(E(a))};var sy=function sy(){return sy.l(0<arguments.length?new F(Array.prototype.slice.call(arguments,0),0):null)};sy.l=function(a){return function(b){return S.a(a,b)}}(ly("ul"));sy.I=0;sy.J=function(a){return sy.l(E(a))};function ty(a){this.ci=a}function uy(a){return new ty(a)}function vy(){switch(arguments.length){case 1:return wy(arguments[0],X);case 2:return wy(arguments[0],arguments[1]);default:return wy(arguments[0],S.N(Ti,arguments[1],arguments[2],new F(Array.prototype.slice.call(arguments,3),0)))}}function wy(a,b){var c=Fw(a,uy.g?uy.g(null):uy.call(null,null));return N(c,0).ci(b)}
ty.prototype.Nb=function(a,b){var c=function(a){return function(c){return mj.j(wy(a,c),jp,b)}}(this);return uy.g?uy.g(c):uy.call(null,c)};ty.prototype.cc=function(a,b){var c=function(){return function(a){return R.j(a,jp,b)}}(this);return uy.g?uy.g(c):uy.call(null,c)};ty.prototype.bc=function(a,b){var c=function(a){return function(c){c=wy(a,c);var f=rh(c)?S.a(Ti,c):c;c=Q(f,jp);f=wy(b,f);return mj.j(f,jp,c)}}(this);return uy.g?uy.g(c):uy.call(null,c)};
ty.prototype.Rc=function(){var a=function(a){return function(c){c=wy(a,c);c=rh(c)?S.a(Ti,c):c;var d=Q(c,jp);return wy(d,c)}}(this);return uy.g?uy.g(a):uy.call(null,a)};var xy=function(){function a(a){return R.j(a,jp,Io.g(a))}return uy.g?uy.g(a):uy.call(null,a)}();(function(){function a(a){return R.j(a,jp,Ao.g(a))}return uy.g?uy.g(a):uy.call(null,a)})();function yy(a,b){function c(c){var e=S.j(a,Ao.g(c),b);return R.l(c,Ao,e,L([jp,e],0))}return uy.g?uy.g(c):uy.call(null,c)}
var Jy=function Jy(){return Jy.l(arguments[0],arguments[1],2<arguments.length?new F(Array.prototype.slice.call(arguments,2),0):null)};Jy.l=function(a,b,c){function d(d){var f=R.j(d,Io,S.j(b,Io.g(d),c));return dl.l(L([d,fl(wy(a,f),new T(null,2,5,U,[jp,Ao],null))],0))}return uy.g?uy.g(d):uy.call(null,d)};Jy.I=2;Jy.J=function(a){var b=H(a),c=J(a);a=H(c);c=J(c);return Jy.l(b,a,c)};var Ky=function Ky(b,c){var d=H(c);if(u(d)){if(lh(d)){var e=N(d,0),f=N(d,1);return Ky(H(dj.a(function(b,c,d){return function(b){return qg.a(d,Q(b,c))}}(d,e,f,d,d),b)),og(c))}return Ky(Q(b,d),og(c))}return b},Ly=function Ly(b,c,d){var e=H(c);if(u(e)){if(lh(e)){var f=N(e,0),g=N(e,1);return jj.a(function(b,e,f){return function(b){return qg.a(f,Q(b,e))?Ly(b,og(c),d):b}}(e,f,g,e,e),b)}return R.j(b,e,Ly(Q(b,e),og(c),d))}return d.g?d.g(b):d.call(null,b)},My=function(){var a=function(){return function(a){var c=
rh(a)?S.a(Ti,a):a;a=Q(c,Ao);c=Q(c,rn);a=Ky(a,c);a=Cw.g?Cw.g(a):Cw.call(null,a);return Pw(L([a],0))}}(xy);return Iw.a?Iw.a(xy,a):Iw.call(null,xy,a)}(),Ny=function(){var a=function(a){return function(c){var d=rh(c)?S.a(Ti,c):c,e=Q(d,Qo),f=Q(d,rn);return Pw(L([function(){var g=function(a,b,c,d,e){return function(){function f(a,b){var c=null;if(1<arguments.length){for(var c=0,d=Array(arguments.length-1);c<d.length;)d[c]=arguments[c+1],++c;c=new F(d,0)}return g.call(this,a,c)}function g(f,r){var w=nw.g(1);
Tv(function(a,b,c,d,e,g){return function(){var k=function(){return function(a){return function(){function b(c){for(;;){var d;a:try{for(;;){var e=a(c);if(!W(e,Z)){d=e;break a}}}catch(f){if(f instanceof Object)c[5]=f,jw(c),d=Z;else throw f;}if(!W(d,Z))return d}}function c(){var a=[null,null,null,null,null,null,null];a[0]=d;a[1]=1;return a}var d=null,d=function(a){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,a)}throw Error("Invalid arity: "+arguments.length);};d.C=c;
d.g=b;return d}()}(function(a,b,c,d,e){return function(a){var b=a[1];return 1===b?(b=S.N(Hj,f,e,r),gw(a,2,d,b)):2===b?(b=a[2],hw(a,b)):null}}(a,b,c,d,e,g),a,b,c,d,e,g)}(),l=function(){var b=k.C?k.C():k.call(null);b[6]=a;return b}();return ew(l)}}(w,a,b,c,d,e));return w}f.I=1;f.J=function(a){var b=H(a);a=og(a);return g(b,a)};f.l=g;return f}()}(c,d,e,f,a);return Cw.g?Cw.g(g):Cw.call(null,g)}()],0))}}(xy);return Iw.a?Iw.a(xy,a):Iw.call(null,xy,a)}();
function Oy(a,b){var c=function(){return function(c){c=rh(c)?S.a(Ti,c):c;c=Q(c,rn);return Pw(L([yy(mj,L([a,Tg,new T(null,2,5,U,[c,b],null)],0))],0))}}(xy);return Iw.a?Iw.a(xy,c):Iw.call(null,xy,c)}
function Py(a){return Oy(Ko,function(){function b(a,b){var f=null;if(1<arguments.length){for(var f=0,g=Array(arguments.length-1);f<g.length;)g[f]=arguments[f+1],++f;f=new F(g,0)}return c.call(this,a,f)}function c(b,c){S.j(a,b,c);return b}b.I=1;b.J=function(a){var b=H(a);a=og(a);return c(b,a)};b.l=c;return b}())}
function Qy(a,b){var c=function(c){return function(e){return Pw(L([function(){var f=Oi.l(Jy,b,mj,rn,L([Tg],0));if(ih(e)){var g=function(){return function(b,c){return function p(d){return new fi(null,function(b){return function(){for(;;){var c=E(d);if(c){if(mh(c)){var e=Pf(c),f=M(e),g=ji(f);return function(){for(var c=0;;)if(c<f){var d=A.a(e,c),k=g,d=new T(null,2,5,U,[a,Q(d,a)],null),d=b.g?b.g(d):b.call(null,d);k.add(d);c+=1}else return!0}()?li(ni(g),p(Qf(c))):li(ni(g),null)}var k=H(c);return Lg(function(){var c=
new T(null,2,5,U,[a,Q(k,a)],null);return b.g?b.g(c):b.call(null,c)}(),p(og(c)))}return null}}}(b,c),null,null)}}(f,c)(e)}();return Nw.g?Nw.g(g):Nw.call(null,g)}return f.g?f.g(a):f.call(null,a)}()],0))}}(My);return Iw.a?Iw.a(My,c):Iw.call(null,My,c)}function Ry(a,b){return Ji(qh,Y.j(qg,a,b))}
function Sy(a,b,c){var d=rh(b)?S.a(Ti,b):b,e=Q(d,Go),f=Q(d,Ao),g=N(c,0),k=N(c,1),l=Sh(c,2);b=Ee(function(a,b,c,d,e,f,g,k){return function(l,P){var ha=N(P,0),Da=N(P,1);return Ly(l,ha,function(a,b,c,d,e,f,g,k,l,m,p){return function(a){return S.j(c,a,p)}}(P,ha,Da,a,b,c,d,e,f,g,k))}}(b,d,e,f,c,g,k,l),f,Zh(dj.a(Ni.a(Oi.a(Ry,k),H),g.g?g.g(e):g.call(null,e))));return R.j(a.g?a.g(b):a.call(null,b),Ao,b)}
function Ty(a,b){return Yx(function(a,b){N(a,0);var e=N(a,1);return new T(null,2,5,U,[e,b],null)},new T(null,2,5,U,[a,a],null),b)}
function Uy(a){a=dy(a);var b=Sx(),c=nw.g(1);Tv(function(a,b,c){return function(){var g=function(){return function(a){return function(){function b(c){for(;;){var d;a:try{for(;;){var e=a(c);if(!W(e,Z)){d=e;break a}}}catch(f){if(f instanceof Object)c[5]=f,jw(c),d=Z;else throw f;}if(!W(d,Z))return d}}function c(){var a=[null,null,null,null,null,null,null,null,null];a[0]=d;a[1]=1;return a}var d=null,d=function(a){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,a)}throw Error("Invalid arity: "+
arguments.length);};d.C=c;d.g=b;return d}()}(function(a,b,c){return function(a){var d=a[1];return 1===d?(a[2]=null,a[1]=2,Z):2===d?fw(a,4,b):3===d?(d=a[2],hw(a,d)):4===d?(d=a[7],d=a[2],a[7]=d,a[1]=u(d)?5:6,Z):5===d?(d=a[7],gw(a,8,c,d)):6===d?(d=Cv(c),a[2]=d,a[1]=7,Z):7===d?(a[8]=a[2],a[2]=null,a[1]=2,Z):8===d?(d=a[2],a[2]=d,a[1]=7,Z):null}}(a,b,c),a,b,c)}(),k=function(){var b=g.C?g.C():g.call(null);b[6]=a;return b}();return ew(k)}}(c,a,b));return Wx(Kh,L([b],0))}
function Vy(a,b){return function(c){c=vy(a,Io,R.j(b,Ao,c));var d=rh(c)?S.a(Ti,c):c;c=Q(d,jp);d=Q(d,Ao);return new t(null,2,[Hn,c,Go,d],null)}}
function Wy(a){var b=Xy,c=Sx(),d=Vy(b,new t(null,2,[Qo,c,rn,Ug],null)),e=d.g?d.g(a):d.call(null,a),f=rh(e)?S.a(Ti,e):e,g=Q(f,Go),b=Q(f,Hn);a=Uy(Wx(function(){return function(a){return fl(a,new T(null,2,5,U,[Ao,Hn],null))}}(c,d,e,f,g,b),L([Yx(Oi.a(Sy,d),new t(null,2,[Ao,a,Go,g],null),c)],0)));return new t(null,4,[cp,Wx(Kh,L([c],0)),Ao,Wx(Ao,L([a],0)),Hn,Wx(Hn,L([a],0)),Tp,b],null)}
function Yy(a,b){var c=rh(a)?S.a(Ti,a):a,d=Q(c,Hn),e=Q(c,Tp);bz(b);var f=function(){var a=b.appendChild(gy.g?gy.g(e):gy.call(null,e));return Si?Si(a):Ri.call(null,a)}(),g=dy(Wx(Oi.a(S,hy),L([Ty(e,d)],0))),k=nw.g(1);Tv(function(a,b,c,d,e,f,g,k){return function(){var G=function(){return function(a){return function(){function b(c){for(;;){var d;a:try{for(;;){var e=a(c);if(!W(e,Z)){d=e;break a}}}catch(f){if(f instanceof Object)c[5]=f,jw(c),d=Z;else throw f;}if(!W(d,Z))return d}}function c(){var a=[null,
null,null,null,null,null,null,null,null];a[0]=d;a[1]=1;return a}var d=null,d=function(a){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,a)}throw Error("Invalid arity: "+arguments.length);};d.C=c;d.g=b;return d}()}(function(a,b,c){return function(a){var d=a[1];if(1===d)return a[2]=null,a[1]=2,Z;if(2===d){var e=K.g?K.g(b):K.call(null,b);a[7]=e;return fw(a,4,c)}return 3===d?(d=a[2],hw(a,d)):4===d?(e=a[7],d=a[2],d=iy.a?iy.a(e,d):iy.call(null,e,d),d=Vi.a?Vi.a(b,d):Vi.call(null,
b,d),a[8]=d,a[2]=null,a[1]=2,Z):null}}(a,b,c,d,e,f,g,k),a,b,c,d,e,f,g,k)}(),O=function(){var b=G.C?G.C():G.call(null);b[6]=a;return b}();return ew(O)}}(k,f,g,a,c,c,d,e));return c}
function cz(a){var b=L([$n,1E3],0),c=rh(b)?S.a(Ti,b):b,d=Yg(c,$n,0),e=Yg(c,rn,Ug),f=dy(fy(d,Ao.g(a))),g=nw.g(1);Tv(function(a,b,c,d,e,f){return function(){var g=function(){return function(a){return function(){function b(c){for(;;){var d;a:try{for(;;){var e=a(c);if(!W(e,Z)){d=e;break a}}}catch(f){if(f instanceof Object)c[5]=f,jw(c),d=Z;else throw f;}if(!W(d,Z))return d}}function c(){var a=[null,null,null,null,null,null,null,null,null];a[0]=d;a[1]=1;return a}var d=null,d=function(a){switch(arguments.length){case 0:return c.call(this);
case 1:return b.call(this,a)}throw Error("Invalid arity: "+arguments.length);};d.C=c;d.g=b;return d}()}(function(a,b,c,d,e,f){return function(a){var c=a[1];if(1===c)return a[2]=null,a[1]=2,Z;if(2===c)return c=vr(Up,null),a[7]=c,fw(a,4,b);if(3===c)return c=a[2],hw(a,c);if(4===c){var c=a[7],d=Ky(a[2],f),c=c.write(d),c=localStorage.setItem("app-state",c);a[8]=c;a[2]=null;a[1]=2;return Z}return null}}(a,b,c,d,e,f),a,b,c,d,e,f)}(),B=function(){var b=g.C?g.C():g.call(null);b[6]=a;return b}();return ew(B)}}(g,
f,b,c,d,e));return a};var Eh=Zg([Mn,io,No,So,To,Zo,sp,Rp,pq],[new t(null,1,[Pn,"Theros"],null),new t(null,1,[Pn,"Legendary"],null),new t(null,1,[Pn,"Journey into Nyx"],null),new t(null,1,[Pn,"Ajani"],null),new t(null,1,[Pn,"gain 100 life"],null),new t(null,1,[Pn,"m | r"],null),new t(null,1,[Pn,"W G"],null),new t(null,1,[Pn,"Ajani"],null),new t(null,1,[Pn,"Planeswalker"],null)]);
function dz(){var a=Ug,b=nw.C(),c=nw.g(1);Tv(function(b,c){return function(){var f=function(){return function(a){return function(){function b(c){for(;;){var d;a:try{for(;;){var e=a(c);if(!W(e,Z)){d=e;break a}}}catch(f){if(f instanceof Object)c[5]=f,jw(c),d=Z;else throw f;}if(!W(d,Z))return d}}function c(){var a=[null,null,null,null,null,null,null];a[0]=d;a[1]=1;return a}var d=null,d=function(a){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,a)}throw Error("Invalid arity: "+
arguments.length);};d.C=c;d.g=b;return d}()}(function(b,c){return function(b){var d=b[1];return 1===d?gw(b,2,c,a):2===d?(d=b[2],hw(b,d)):null}}(b,c),b,c)}(),g=function(){var a=f.C?f.C():f.call(null);a[6]=b;return a}();return ew(g)}}(c,b));return b}
function ez(a){var b=nw.C();Vs(new t(null,6,[Pp,[y("http://pupa-szczyp.rhcloud.com"),y("/api/search")].join(""),Wn,Hp,zn,Hs(),ko,Js.C(),ro,a,jq,function(a){return function(b){var e=nw.g(1);Tv(function(a,c){return function(){var e=function(){return function(a){return function(){function b(c){for(;;){var d;a:try{for(;;){var e=a(c);if(!W(e,Z)){d=e;break a}}}catch(f){if(f instanceof Object)c[5]=f,jw(c),d=Z;else throw f;}if(!W(d,Z))return d}}function c(){var a=[null,null,null,null,null,null,null];a[0]=
d;a[1]=1;return a}var d=null,d=function(a){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,a)}throw Error("Invalid arity: "+arguments.length);};d.C=c;d.g=b;return d}()}(function(a,c){return function(a){var e=a[1];return 1===e?(e=Rg(b),e=Gj(e),gw(a,2,c,e)):2===e?(e=a[2],hw(a,e)):null}}(a,c),a,c)}(),l=function(){var b=e.C?e.C():e.call(null);b[6]=a;return b}();return ew(l)}}(e,a));return e}}(b)],null));return b}
var fz=function(){var a=function(a){return function(c){var d=N(c,0),e=N(c,1);c=function(a,b,c,d,e){return function(p){return Pw(L([Oy(yp,function(a,b,c){return function(a,b){return new T(null,2,5,U,[c,b],null)}}(a,b,c,d,e)),function(){var q=function(){var q=Th(""+y(c),1),w=xr(" ",Y.a(yr,zr(q))),B=Pn.g(c.g?c.g(Eh):c.call(null,Eh));return py.l(L([np,"term",oy.l(L([ap,q,w],0)),ny.l(L([eo,q,Pn,B,ho,d,Yp,function(){return function(a){a=a.target.value;return p.a?p.a(yp,a):p.call(null,yp,a)}}(q,w,B,a,b,
c,d,e),cq,function(a,b,c,d,e,f){return function(a){switch(a.which){case 13:return a=a.target.value,p.a?p.a(yp,a):p.call(null,yp,a),p.g?p.g(Ko):p.call(null,Ko);case 8:return fh(a.target.value)?p.a?p.a(ep,f):p.call(null,ep,f):null;default:return null}}}(q,w,B,a,b,c,d,e)],0))],0))}();return Cw.g?Cw.g(q):Cw.call(null,q)}()],0))}}(Ny,c,d,e,a);return Iw.a?Iw.a(Ny,c):Iw.call(null,Ny,c)}}(My);return Iw.a?Iw.a(My,a):Iw.call(null,My,a)}(),gz=function(){var a=function(a){return function(c){var d=Qy(0,fz),e=
function(a,b){return function(d){return Pw(L([Oy(xn,function(a,b){return function(c,d){return fh(dj.a(function(){return function(a){return qg.a(H(a),d)}}(a,b),c))?Tg.a(c,new T(null,2,5,U,[d,""],null)):c}}(a,b)),Oy(ep,function(a,b){return function(c,d){return Gj(dj.a(function(){return function(a){return xi.a(H(a),d)}}(a,b),c))}}(a,b)),function(){var e=function(){return sy.l(L([np,"terms",py.l(L([np,"term",oy.l(L([ap,"term","Terms"],0)),ry.l(L([mp,"term",so,function(a){return function(b){var d=b.target.value;
xi.a(d,a)&&(d=di.g(d),c.a?c.a(xn,d):c.call(null,xn,d));return b.target.value=a}}("Add term...",a,b),qy.l(L(["Add term..."],0)),function(){return function(a,b,c){return function w(d){return new fi(null,function(){return function(){for(;;){var a=E(d);if(a){if(mh(a)){var b=Pf(a),c=M(b),e=ji(c);a:for(var f=0;;)if(f<c){var g=A.a(b,f),g=Th(""+y(g),1),g=qy.l(L([ho,g,yr(wr(g,"/"," "))],0));e.add(g);f+=1}else{b=!0;break a}return b?li(ni(e),w(Qf(a))):li(ni(e),null)}e=H(a);e=Th(""+y(e),1);return Lg(qy.l(L([ho,
e,yr(wr(e,"/"," "))],0)),w(og(a)))}return null}}}(a,b,c),null,null)}}("Add term...",a,b)(Ch())}()],0))],0)),d],0))}();return Cw.g?Cw.g(e):Cw.call(null,e)}()],0))}}(d,a);return Iw.a?Iw.a(d,e):Iw.call(null,d,e)}}(Ny);return Iw.a?Iw.a(Ny,a):Iw.call(null,Ny,a)}(),hz=[y("https://e7dccf9a2c0af1489d4839b7d993a1ef31d5970a.googledrive.com/"),y("host/0ByuC3kzSJZocfngtVkxVaXhoNndjWnIxX3VNT2YyOURiYjVoSkpmc3NYTTJSSUJWWEo0VEk")].join("");
function iz(a){var b=rh(a)?S.a(Ti,a):a;a=Q(b,Jp);b=Q(b,Yo);return[y(hz),y("/"),y(No.g(b)),y("/"),y(Co.g(a)),y(".jpg")].join("")}var jz=function(){var a=function(a){return function(c){return Pw(L([function(){var d=sy.l(L([np,"results",Y.a(function(){return function(a){return py.l(L([np,"result",my.l(L([yo,iz(a)],0))],0))}}(a),c)],0));return Cw.g?Cw.g(d):Cw.call(null,d)}()],0))}}(My);return Iw.a?Iw.a(My,a):Iw.call(null,My,a)}();function kz(){return new t(null,3,[mp,rm(),Rn,Ug,qq,Ug],null)}
function Kz(a){return Y.a(Ni.a(H,function(a){return Zh(Hh.a(function(a){return hq.g(Yo.g(a))},Rg(a)))}),$l(function(a){return Rp.g(Jp.g(a))},a))}function Lz(a){return S.a(ri,Y.a(function(a){return Hh.a(function(a){a=zl(/[0-9]+/,Dn.g(a));return parseInt(a)},Rg(a))},Hh.a(function(a){return hq.g(H(a))},$l(Yo,a))))}
var Mz=function(){var a=Qy(Rn,gz),b=function(a){return function(b){var e=Qy(qq,jz),f=function(a,c){return function(e){var f=function(a,c,f){return function(g){return Pw(L([Py(function(a,b,c){return function(d){var e=rh(d)?S.a(Ti,d):d,f=Q(e,Rn),k=nw.g(1);Tv(function(a,b,c,d,e,f,k){return function(){var l=function(){return function(a){return function(){function b(c){for(;;){var d;a:try{for(;;){var e=a(c);if(!W(e,Z)){d=e;break a}}}catch(f){if(f instanceof Object)c[5]=f,jw(c),d=Z;else throw f;}if(!W(d,
Z))return d}}function c(){var a=[null,null,null,null,null,null,null];a[0]=d;a[1]=1;return a}var d=null,d=function(a){switch(arguments.length){case 0:return c.call(this);case 1:return b.call(this,a)}throw Error("Invalid arity: "+arguments.length);};d.C=c;d.g=b;return d}()}(function(a,b,c,d){return function(a){var b=a[1];return 1===b?(b=hj.a(gk,d),b=R.j(new t(null,1,[Zp,new T(null,4,5,U,[Dn,Do,new t(null,1,[Jp,new T(null,2,5,U,[Rp,Co],null)],null),new t(null,1,[Yo,new T(null,2,5,U,[No,hq],null)],null)],
null)],null),Jo,wv(Ar,hj.a(X,ej.a(Ni.a(fh,Wh),b)))),b=fh(Jo.g(b))?dz():ez(b),fw(a,2,b)):2===b?(b=Gj(a[2]),b=g.a?g.a($o,b):g.call(null,$o,b),hw(a,b)):null}}(a,b,c,d,e,f,k),a,b,c,d,e,f,k)}(),m=function(){var b=l.C?l.C():l.call(null);b[6]=a;return b}();return ew(m)}}(k,d,e,f,a,b,c));return k}}(a,c,f)),Oy($o,function(){return function(a,b){return R.j(a,qq,Lz(Kz(b)))}}(a,c,f)),function(){var a=py.l(L([np,"search",b,e],0));return Cw.g?Cw.g(a):Cw.call(null,a)}()],0))}}(Ny,a,c);return Iw.a?Iw.a(Ny,f):Iw.call(null,
Ny,f)}}(e,a);return Iw.a?Iw.a(e,f):Iw.call(null,e,f)}}(a);return Iw.a?Iw.a(a,b):Iw.call(null,a,b)}(),Xy=function(){var a=Qy(mp,Mz),b=function(a){return function(b){return Pw(L([function(){var b=function(a){return function(b){return Tg.a(Gj(dj.a(Ni.a(Oi.a(xi,new t(null,2,[Rn,Ug,qq,Ug],null)),function(){return function(a){return fl(a,new T(null,2,5,U,[Rn,qq],null))}}(a)),b)),kz())}}(a);return Pw(L([Oy(ep,b),Oy($o,b)],0))}(),function(){var a=sy.l(L([np,"searches",b],0));return Cw.g?Cw.g(a):Cw.call(null,
a)}()],0))}}(a);return Iw.a?Iw.a(a,b):Iw.call(null,a,b)}();function Nz(){var a=document.getElementById("app"),b;b=nr(Up,null);var c=localStorage.getItem("app-state");b=b.se(c);b=u(b)?b:new T(null,1,5,U,[kz()],null);return cz(Yy(Wy(b),a))}document.addEventListener("DOMContentLoaded",Nz);/*
 Portions of this code are from MochiKit, received by
 The Closure Authors under the MIT license. All other code is Copyright
 2005-2009 The Closure Authors. All Rights Reserved.
*/
function Oz(a,b){this.Fc=[];this.bh=a;this.Hg=b||null;this.je=this.ed=!1;this.Ec=void 0;this.bg=this.yh=this.uf=!1;this.hf=0;this.Ya=null;this.vf=0}h=Oz.prototype;h.cancel=function(a){if(this.ed)this.Ec instanceof Oz&&this.Ec.cancel();else{if(this.Ya){var b=this.Ya;delete this.Ya;a?b.cancel(a):(b.vf--,0>=b.vf&&b.cancel())}this.bh?this.bh.call(this.Hg,this):this.bg=!0;this.ed||this.Fd(new Pz)}};h.Fg=function(a,b){this.uf=!1;Qz(this,a,b)};function Qz(a,b,c){a.ed=!0;a.Ec=c;a.je=!b;Rz(a)}
function Sz(a){if(a.ed){if(!a.bg)throw new Tz;a.bg=!1}}h.He=function(a){Sz(this);Qz(this,!0,a)};h.Fd=function(a){Sz(this);Qz(this,!1,a)};function Uz(a,b){return Vz(a,b,null,void 0)}function Vz(a,b,c,d){a.Fc.push([b,c,d]);a.ed&&Rz(a);return a}h.then=function(a,b,c){var d,e,f=new zc(function(a,b){d=a;e=b});Vz(this,d,function(a){a instanceof Pz?f.cancel():e(a)});return f.then(a,b,c)};jc(Oz);function Wz(a){return Ea(a.Fc,function(a){return fa(a[1])})}
function Rz(a){if(a.hf&&a.ed&&Wz(a)){var b=a.hf,c=Xz[b];c&&(ba.clearTimeout(c.Ve),delete Xz[b]);a.hf=0}a.Ya&&(a.Ya.vf--,delete a.Ya);for(var b=a.Ec,d=c=!1;a.Fc.length&&!a.uf;){var e=a.Fc.shift(),f=e[0],g=e[1],e=e[2];if(f=a.je?g:f)try{var k=f.call(e||a.Hg,b);void 0!==k&&(a.je=a.je&&(k==b||k instanceof Error),a.Ec=b=k);if(kc(b)||"function"===typeof ba.Promise&&b instanceof ba.Promise)d=!0,a.uf=!0}catch(l){b=l,a.je=!0,Wz(a)||(c=!0)}}a.Ec=b;d&&(k=na(a.Fg,a,!0),d=na(a.Fg,a,!1),b instanceof Oz?(Vz(b,k,
d),b.yh=!0):b.then(k,d));c&&(b=new Yz(b),Xz[b.Ve]=b,a.hf=b.Ve)}function Tz(){qa.call(this)}pa(Tz,qa);Tz.prototype.message="Deferred has already fired";Tz.prototype.name="AlreadyCalledError";function Pz(){qa.call(this)}pa(Pz,qa);Pz.prototype.message="Deferred was canceled";Pz.prototype.name="CanceledError";function Yz(a){this.Ve=ba.setTimeout(na(this.Ri,this),0);this.Qe=a}Yz.prototype.Ri=function(){delete Xz[this.Ve];throw this.Qe;};var Xz={};var Zz=!lb&&!kb||kb&&kb&&(hb()||9<=ub)||lb&&rb("1.9.1");kb&&rb("9");function $z(a,b){Va(b,function(b,d){"style"==d?a.style.cssText=b:"class"==d?a.className=b:"for"==d?a.htmlFor=b:d in aA?a.setAttribute(aA[d],b):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,b):a[d]=b})}var aA={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function bA(a,b,c){function d(c){c&&b.appendChild(ea(c)?a.createTextNode(c):c)}for(var e=1;e<c.length;e++){var f=c[e];!da(f)||ga(f)&&0<f.nodeType?d(f):Aa(cA(f)?Ka(f):f,d)}}function bz(a){for(var b;b=a.firstChild;)a.removeChild(b)}function dA(a){return a&&a.parentNode?a.parentNode.removeChild(a):null}function cA(a){if(a&&"number"==typeof a.length){if(ga(a))return"function"==typeof a.item||"string"==typeof a.item;if(fa(a))return"function"==typeof a.item}return!1}
function eA(a){this.Kf=a||ba.document||document}h=eA.prototype;h.createElement=function(a){return this.Kf.createElement(a)};h.createTextNode=function(a){return this.Kf.createTextNode(String(a))};h.Nc=function(){var a=this.Kf;return a.parentWindow||a.defaultView};h.appendChild=function(a,b){a.appendChild(b)};h.append=function(a,b){bA(9==a.nodeType?a:a.ownerDocument||a.document,a,arguments)};h.canHaveChildren=function(a){if(1!=a.nodeType)return!1;switch(a.tagName){case "APPLET":case "AREA":case "BASE":case "BR":case "COL":case "COMMAND":case "EMBED":case "FRAME":case "HR":case "IMG":case "INPUT":case "IFRAME":case "ISINDEX":case "KEYGEN":case "LINK":case "NOFRAMES":case "NOSCRIPT":case "META":case "OBJECT":case "PARAM":case "SCRIPT":case "SOURCE":case "STYLE":case "TRACK":case "WBR":return!1}return!0};
h.removeNode=dA;h.Kg=function(a){return Zz&&void 0!=a.children?a.children:Ba(a.childNodes,function(a){return 1==a.nodeType})};h.contains=function(a,b){if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||Boolean(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a};function fA(a){var b={},c=b.document||document,d=document.createElement("SCRIPT"),e={lh:d,we:void 0},f=new Oz(gA,e),g=null,k=null!=b.timeout?b.timeout:5E3;0<k&&(g=window.setTimeout(function(){hA(d,!0);f.Fd(new iA(jA,"Timeout reached for loading script "+a))},k),e.we=g);d.onload=d.onreadystatechange=function(){d.readyState&&"loaded"!=d.readyState&&"complete"!=d.readyState||(hA(d,b.Cl||!1,g),f.He(null))};d.onerror=function(){hA(d,!0,g);f.Fd(new iA(kA,"Error while loading script "+a))};$z(d,{type:"text/javascript",
charset:"UTF-8",src:a});lA(c).appendChild(d);return f}function lA(a){var b=a.getElementsByTagName("HEAD");return b&&0!=b.length?b[0]:a.documentElement}function gA(){if(this&&this.lh){var a=this.lh;a&&"SCRIPT"==a.tagName&&hA(a,!0,this.we)}}function hA(a,b,c){null!=c&&ba.clearTimeout(c);a.onload=ca;a.onerror=ca;a.onreadystatechange=ca;b&&window.setTimeout(function(){dA(a)},0)}var kA=0,jA=1;function iA(a,b){var c="Jsloader error (code #"+a+")";b&&(c+=": "+b);qa.call(this,c);this.code=a}pa(iA,qa);function mA(a,b,c,d,e,f){Oz.call(this,e,f);this.Vf=a;this.Jf=[];this.Jg=!!b;this.gi=!!c;this.Yh=!!d;for(b=this.$g=0;b<a.length;b++)Vz(a[b],na(this.Mg,this,b,!0),na(this.Mg,this,b,!1));0!=a.length||this.Jg||this.He(this.Jf)}pa(mA,Oz);mA.prototype.Mg=function(a,b,c){this.$g++;this.Jf[a]=[b,c];this.ed||(this.Jg&&b?this.He([a,c]):this.gi&&!b?this.Fd(c):this.$g==this.Vf.length&&this.He(this.Jf));this.Yh&&!b&&(c=null);return c};mA.prototype.Fd=function(a){mA.cg.Fd.call(this,a);for(a=0;a<this.Vf.length;a++)this.Vf[a].cancel()};
function nA(a){return Uz(new mA(a,!1,!0),function(a){for(var c=[],d=0;d<a.length;d++)c[d]=a[d][1];return c})};var oA=new Rd(window.location.href);function pA(a,b){return qg.a(b,Th(a,M(a)-M(b)))}function qA(a,b){if(u(a)){var c=new Rd(a),d=ce(oA.resolve(c));return u(yi(dj.a(function(a,b){return function(a){return pA(a,b)}}(c,d),b)))?c:null}return null}
function rA(a,b){var c=rh(b)?S.a(Ti,b):b,d=Yg(c,Tn,Kh),e=dj.a(function(){return function(a){return pA(a,".js")}}(b,c,d),a);E(e)&&(Vz(function(){var a=Tl(Y.a(function(){return function(a){a=a instanceof Rd?a.clone():new Rd(a,void 0);a=ee(a);return fA(a)}}(e,b,c,d),e));return nA(a)}(),function(a,b,c,d){return function(){function a(c){if(0<arguments.length)for(var d=0,e=Array(arguments.length-0);d<e.length;)e[d]=arguments[d+0],++d;return b.call(this)}function b(){return d.C?d.C():d.call(null)}a.I=0;
a.J=function(a){E(a);return b()};a.l=b;return a}()}(e,b,c,d),function(){return function(a){return console.error("Load failed:",a.message)}}(e,b,c,d)),u(window.jQuery)&&jQuery(document).Sl("page-load"))};var sA={1:"NativeMessagingTransport",2:"FrameElementMethodTransport",3:"IframeRelayTransport",4:"IframePollingTransport",5:"FlashTransport",6:"NixTransport",7:"DirectTransport"},tA={gj:"cn",$i:"at",dl:"rat",Pk:"pu",Sj:"ifrid",xl:"tp",dk:"lru",Ok:"pru",th:"lpu",vh:"ppu",Nk:"ph",Gk:"osh",il:"role",Ek:"nativeProtocolVersion",uj:"directSyncMode"},pd=nd("goog.net.xpc");function uA(a){yb.call(this);a||(a=ra||(ra=new eA));this.bi=a}pa(uA,yb);uA.prototype.oh=0;uA.prototype.Nc=function(){return this.bi.Nc()};uA.prototype.getName=function(){return sA[String(this.oh)]||""};function vA(a,b){uA.call(this,b);this.Ha=a;this.ve=this.Ha.hi()[tA.vh];this.Mi=this.Ha.hi()[tA.th];this.ef=[]}var wA,xA;pa(vA,uA);h=vA.prototype;h.Ii=5;h.oh=4;h.Fc=0;h.Od=!1;h.Xe=!1;h.hh=null;function yA(a){return"googlexpc_"+a.Ha.name+"_msg"}function zA(a){return"googlexpc_"+a.Ha.name+"_ack"}function AA(a){try{if(!a.fe&&a.Ha.ji())return a.Ha.Ol().frames||{}}catch(b){sd(pd,"error retrieving peer frames")}return{}}function BA(a,b){return AA(a)[b]}
h.connect=function(){if(!this.fe&&this.Ha.ji()){sd(pd,"transport connect called");if(!this.Xe){sd(pd,"initializing...");var a=yA(this);this.$e=CA(this,a);this.Yg=this.Nc().frames[a];a=zA(this);this.ze=CA(this,a);this.eg=this.Nc().frames[a];this.Xe=!0}if(DA(this,yA(this))&&DA(this,zA(this)))sd(pd,"foreign frames present"),new EA(this,BA(this,yA(this)),na(this.Li,this)),new EA(this,BA(this,zA(this)),na(this.Ki,this)),this.ng();else{od("foreign frames not (yet) present");if(1==this.Ha.ii()){if(!(this.hh||
0<this.Ii--)){od("Inner peer reconnect triggered.");for(var b=10,a="";0<b--;)a+="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789".charAt(Math.floor(62*Math.random()));this.Ha.Tl(a);od("switching channels: "+this.Ha.name);FA(this);this.Xe=!1;this.hh=CA(this,"googlexpc_reconnect_"+this.Ha.name)}}else if(0==this.Ha.ii()){od("outerPeerReconnect called");for(var a=AA(this),c=a.length,d=0;d<c;d++){try{a[d]&&a[d].name&&(b=a[d].name)}catch(e){}if(b){var f=b.split("_");if(3==f.length&&"googlexpc"==
f[0]&&"reconnect"==f[1]){this.Ha.name=f[2];FA(this);this.Xe=!1;break}}}}this.Nc().setTimeout(na(this.connect,this),100)}}};function CA(a,b){od("constructing sender frame: "+b);var c=document.createElement("IFRAME"),d=c.style;d.position="absolute";d.top="-10px";d.left="10px";d.width="1px";d.height="1px";c.id=c.name=b;c.src=a.ve+"#INITIAL";a.Nc().document.body.appendChild(c);return c}
function FA(a){od("deconstructSenderFrames called");a.$e&&(a.$e.parentNode.removeChild(a.$e),a.$e=null,a.Yg=null);a.ze&&(a.ze.parentNode.removeChild(a.ze),a.ze=null,a.eg=null)}function DA(a,b){od("checking for receive frame: "+b);try{var c=BA(a,b);if(!c||0!=c.location.href.indexOf(a.Mi))return!1}catch(d){return!1}return!0}
h.ng=function(){var a=AA(this);a[zA(this)]&&a[yA(this)]?(this.Xg=new GA(this.ve,this.Yg),this.Ae=new GA(this.ve,this.eg),sd(pd,"local frames ready"),this.Nc().setTimeout(na(function(){this.Xg.send("SETUP");this.Od=!0;sd(pd,"SETUP sent")},this),100)):(this.mg||(this.mg=na(this.ng,this)),this.Nc().setTimeout(this.mg,100),sd(pd,"local frames not (yet) present"))};
function HA(a){if(a.$f&&a.gh){if(a.Ha.Pl(),a.Dd){sd(pd,"delivering queued messages ("+a.Dd.length+")");for(var b=0,c;b<a.Dd.length;b++)c=a.Dd[b],a.Ha.Vi(c.Qi,c.Hi);delete a.Dd}}else od("checking if connected: ack sent:"+a.$f+", ack rcvd: "+a.gh)}
h.Li=function(a){od("msg received: "+a);if("SETUP"==a)this.Ae&&(this.Ae.send("SETUP_ACK"),od("SETUP_ACK sent"),this.$f=!0,HA(this));else if(this.Ha.Pg()||this.$f){var b=a.indexOf("|"),c=a.substring(0,b);a=a.substring(b+1);b=c.indexOf(",");if(-1==b){var d;this.Ae.send("ACK:"+c);IA(this,a)}else d=c.substring(0,b),this.Ae.send("ACK:"+d),c=c.substring(b+1).split("/"),b=parseInt(c[0],10),c=parseInt(c[1],10),1==b&&(this.Yf=[]),this.Yf.push(a),b==c&&(IA(this,this.Yf.join("")),delete this.Yf)}else qd("received msg, but channel is not connected")};
h.Ki=function(a){od("ack received: "+a);"SETUP_ACK"==a?(this.Od=!1,this.gh=!0,HA(this)):this.Ha.Pg()?this.Od?parseInt(a.split(":")[1],10)==this.Fc?(this.Od=!1,JA(this)):qd("got ack with wrong sequence"):qd("got unexpected ack"):qd("received ack, but channel not connected")};function JA(a){if(!a.Od&&a.ef.length){var b=a.ef.shift();++a.Fc;a.Xg.send(a.Fc+b);od("msg sent: "+a.Fc+b);a.Od=!0}}
function IA(a,b){var c=b.indexOf(":"),d=b.substr(0,c),c=b.substring(c+1);a.Ha.Pg()?a.Ha.Vi(d,c):((a.Dd||(a.Dd=[])).push({Qi:d,Hi:c}),od("queued delivery"))}h.ye=3800;h.send=function(a,b){var c=a+":"+b;if(!kb||b.length<=this.ye)this.ef.push("|"+c);else for(var d=b.length,e=Math.ceil(d/this.ye),f=0,g=1;f<d;)this.ef.push(","+g+"/"+e+"|"+c.substr(f,this.ye)),g++,f+=this.ye;JA(this)};
var KA=[],LA=na(function(){var a,b=!1;try{for(var c=0;a=KA[c];c++){var d;if(!(d=b)){var e=a,f=e.fh.location.href;if(f!=e.Gg){e.Gg=f;var g=f.split("#")[1];g&&(g=g.substr(1),e.Bh(decodeURIComponent(g)));d=!0}else d=!1}b=d}}catch(k){if(rd(pd,"receive_() failed: "+k),a.Si.Ha.Ql(),!KA.length)return}a=oa();b&&(wA=a);xA=window.setTimeout(LA,1E3>a-wA?10:100)},vA);function MA(){sd(pd,"starting receive-timer");wA=oa();xA&&window.clearTimeout(xA);xA=window.setTimeout(LA,10)}
function GA(a,b){this.ve=a;this.mh=b;this.Hf=0}GA.prototype.send=function(a){this.Hf=++this.Hf%2;a=this.ve+"#"+this.Hf+encodeURIComponent(a);try{mb?this.mh.location.href=a:this.mh.location.replace(a)}catch(b){pd&&pd.log(ed,"sending failed",b)}MA()};function EA(a,b,c){this.Si=a;this.fh=b;this.Bh=c;this.Gg=this.fh.location.href.split("#")[0]+"#INITIAL";KA.push(this);MA()};function NA(a,b){fc.call(this);this.xh=void 0!==a?a:!0;this.Pf=b||OA;this.af=this.Pf(this.te)}pa(NA,fc);h=NA.prototype;h.kc=null;h.Hc=null;h.Md=void 0;h.Ff=!1;h.te=0;h.md=null;h.Ea=nd("goog.net.WebSocket");var PA={CLOSED:"a",ERROR:"b",uh:"c",Ik:"d"};function OA(a){return Math.min(1E3*Math.pow(2,a),6E4)}h=NA.prototype;
h.open=function(a,b){null!=this.md&&ba.clearTimeout(this.md);this.md=null;this.Hc=a;(this.Md=b)?(rd(this.Ea,"Opening the WebSocket on "+this.Hc+" with protocol "+this.Md),this.kc=new WebSocket(this.Hc,this.Md)):(rd(this.Ea,"Opening the WebSocket on "+this.Hc),this.kc=new WebSocket(this.Hc));this.kc.onopen=na(this.Fi,this);this.kc.onclose=na(this.Bi,this);this.kc.onmessage=na(this.Ei,this);this.kc.onerror=na(this.Di,this)};
h.close=function(){null!=this.md&&ba.clearTimeout(this.md);this.md=null;this.kc&&(rd(this.Ea,"Closing the WebSocket."),this.Ff=!0,this.kc.close(),this.kc=null)};h.send=function(a){this.kc.send(a)};h.Fi=function(){rd(this.Ea,"WebSocket opened on "+this.Hc);this.dispatchEvent("d");this.te=0;this.af=this.Pf(this.te)};
h.Bi=function(a){rd(this.Ea,"The WebSocket on "+this.Hc+" closed.");this.dispatchEvent("a");this.kc=null;if(this.Ff)rd(this.Ea,"The WebSocket closed normally."),this.Hc=null,this.Md=void 0;else{var b=this.Ea;b&&b.log(ed,"The WebSocket disconnected unexpectedly: "+a.data,void 0);this.xh&&(rd(this.Ea,"Seconds until next reconnect attempt: "+Math.floor(this.af/1E3)),this.md=Tc(na(this.open,this,this.Hc,this.Md),this.af,this),this.te++,this.af=this.Pf(this.te))}this.Ff=!1};h.Ei=function(a){this.dispatchEvent(new QA(a.data))};
h.Di=function(a){a=a.data;var b=this.Ea;b&&b.log(ed,"An error occurred: "+a,void 0);this.dispatchEvent(new RA(a))};function QA(a){Ab.call(this,"c");this.message=a}pa(QA,Ab);function RA(a){Ab.call(this,"b");this.data=a}pa(RA,Ab);var SA=function SA(b){if(b?b.cd:b)return b.cd(b);var c;c=SA[n(null==b?null:b)];if(!c&&(c=SA._,!c))throw x("IEventType.event-types",b);return c.call(null,b)};fc.prototype.cd=function(){return hj.a(X,Y.a(function(){return function(a){var b=N(a,0);a=N(a,1);return new T(null,2,5,U,[di.g(b.toLowerCase()),a],null)}}(this),dl.l(L([Wl(Db)],0))))};
"undefined"!==typeof Element&&(Element.prototype.cd=function(){return hj.a(X,Y.a(function(){return function(a){var b=N(a,0);a=N(a,1);return new T(null,2,5,U,[di.g(b.toLowerCase()),a],null)}}(this),dl.l(L([Wl(Db)],0))))});function TA(a,b,c){b=Yg(SA(a),b,b);Tb(a,b,c,!1)};hj.a(X,Y.a(function(a){var b=N(a,0);a=N(a,1);return new T(null,2,5,U,[di.g(b.toLowerCase()),a],null)},dl.l(L([Wl(ic)],0))));var UA=function UA(){switch(arguments.length){case 1:return UA.g(arguments[0]);case 2:return UA.a(arguments[0],arguments[1]);case 3:return UA.j(arguments[0],arguments[1],arguments[2]);case 4:return UA.N(arguments[0],arguments[1],arguments[2],arguments[3]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}};
UA.g=function(a){if(a?a.Wh:a)return a.Wh(a);var b;b=UA[n(null==a?null:a)];if(!b&&(b=UA._,!b))throw x("IConnection.connect",a);return b.call(null,a)};UA.a=function(a,b){if(a?a.Me:a)return a.Me(a,b);var c;c=UA[n(null==a?null:a)];if(!c&&(c=UA._,!c))throw x("IConnection.connect",a);return c.call(null,a,b)};UA.j=function(a,b,c){if(a?a.Ne:a)return a.Ne(a,b,c);var d;d=UA[n(null==a?null:a)];if(!d&&(d=UA._,!d))throw x("IConnection.connect",a);return d.call(null,a,b,c)};
UA.N=function(a,b,c,d){if(a?a.Xh:a)return a.Xh(a,b,c,d);var e;e=UA[n(null==a?null:a)];if(!e&&(e=UA._,!e))throw x("IConnection.connect",a);return e.call(null,a,b,c,d)};UA.I=4;
var VA=function VA(){switch(arguments.length){case 2:return VA.a(arguments[0],arguments[1]);case 3:return VA.j(arguments[0],arguments[1],arguments[2]);case 4:return VA.N(arguments[0],arguments[1],arguments[2],arguments[3]);case 5:return VA.W(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4]);case 6:return VA.ga(arguments[0],arguments[1],arguments[2],arguments[3],arguments[4],arguments[5]);default:throw Error([y("Invalid arity: "),y(arguments.length)].join(""));}};
VA.a=function(a,b){if(a?a.ce:a)return a.ce(a,b);var c;c=VA[n(null==a?null:a)];if(!c&&(c=VA._,!c))throw x("IConnection.transmit",a);return c.call(null,a,b)};VA.j=function(a,b,c){if(a?a.Bg:a)return a.Bg(0,b,c);var d;d=VA[n(null==a?null:a)];if(!d&&(d=VA._,!d))throw x("IConnection.transmit",a);return d.call(null,a,b,c)};VA.N=function(a,b,c,d){if(a?a.Cg:a)return a.Cg(0,b,c,d);var e;e=VA[n(null==a?null:a)];if(!e&&(e=VA._,!e))throw x("IConnection.transmit",a);return e.call(null,a,b,c,d)};
VA.W=function(a,b,c,d,e){if(a?a.Dg:a)return a.Dg(0,b,c,d,e);var f;f=VA[n(null==a?null:a)];if(!f&&(f=VA._,!f))throw x("IConnection.transmit",a);return f.call(null,a,b,c,d,e)};VA.ga=function(a,b,c,d,e,f){if(a?a.Eg:a)return a.Eg(0,b,c,d,e,f);var g;g=VA[n(null==a?null:a)];if(!g&&(g=VA._,!g))throw x("IConnection.transmit",a);return g.call(null,a,b,c,d,e,f)};VA.I=6;h=Dd.prototype;h.ce=function(a,b){return VA.ga(this,b,"GET",null,null,1E4)};h.Bg=function(a,b,c){return VA.ga(this,b,c,null,null,1E4)};
h.Cg=function(a,b,c,d){return VA.ga(this,b,c,d,null,1E4)};h.Dg=function(a,b,c,d,e){return VA.ga(this,b,c,d,e,1E4)};h.Eg=function(a,b,c,d,e,f){this.od=Math.max(0,f);return this.send(b,c,d,e)};h.cd=function(){return hj.a(X,Y.a(function(){return function(a){var b=N(a,0);a=N(a,1);return new T(null,2,5,U,[di.g(b.toLowerCase()),a],null)}}(this),dl.l(L([Wl(ic)],0))))};hj.a(X,Y.a(function(a){var b=N(a,0);a=N(a,1);return new T(null,2,5,U,[di.g(b.toLowerCase()),a],null)},Wl(tA)));
NA.prototype.Me=function(a,b){return UA.j(this,b,null)};NA.prototype.Ne=function(a,b,c){return this.open(b,c)};NA.prototype.ce=function(a,b){return this.send(b)};NA.prototype.cd=function(){return hj.a(X,Y.a(function(){return function(a){var b=N(a,0);a=N(a,1);return new T(null,2,5,U,[di.g(b.toLowerCase()),a],null)}}(this),dl.l(L([Wl(PA)],0))))};NA.prototype.Me=function(a,b){return UA.j(this,b,null)};NA.prototype.Ne=function(a,b,c){return this.open(b,c)};NA.prototype.ce=function(a,b){return this.send(b)};NA.prototype.cd=function(){return hj.a(X,Y.a(function(){return function(a){var b=N(a,0);a=N(a,1);return new T(null,2,5,U,[di.g(b.toLowerCase()),a],null)}}(this),dl.l(L([Wl(PA)],0))))};var WA=Si?Si(null):Ri.call(null,null);function XA(){ba.ij=function(a){return u((void 0)())?fA(a):null}}
function YA(a){var b=N(a,0),c=new NA(null,null);XA();Vi.a?Vi.a(WA,c):Vi.call(null,WA,c);TA(c,Bo,function(a){return function(){VA.a(a,Wi.l(L([window.location.protocol],0)));return console.info("Reload websocket connected.")}}(c,a,b));TA(c,nq,function(a,b,c){return function(a){a=Xr(new Dr(a.message,[],-1),!1,null);if(lh(a)){console.groupCollapsed("Reload");for(var b=E(a),d=null,e=0,p=0;;)if(p<e){var q=d.ba(null,p);console.log(q);p+=1}else if(b=E(b))d=b,mh(d)?(b=Pf(d),p=Qf(d),d=b,e=M(b),b=p):(b=H(d),
console.log(b),b=J(d),d=null,e=0),p=0;else break;console.groupEnd();rA(a,c);b=oA.Ob;b=u(pA(b,"/"))?[y(b),y("index.html")].join(""):b;u(qA(b,a))&&window.location.reload();a:for(b=document.styleSheets,d=E(ul(b.length)),e=null,q=p=0;;)if(q<p){var r=e.ba(null,q),r=b[r];if(u(r)){var w=qA(r.href,a);u(w)&&(r.ownerNode.href=ee(w).toString())}q+=1}else if(d=E(d))mh(d)?(p=Pf(d),d=Qf(d),e=p,p=M(p)):(r=H(d),e=b[r],u(e)&&(p=qA(e.href,a),u(p)&&(e.ownerNode.href=ee(p).toString())),d=J(d),e=null,p=0),q=0;else break a;
a:for(b=document.images,d=E(ul(b.length)),e=null,q=p=0;;)if(q<p)r=e.ba(null,q),r=b[r],u(r)&&(w=qA(r.src,a),u(w)&&(r.src=ee(w).toString())),q+=1;else if(d=E(d))mh(d)?(p=Pf(d),d=Qf(d),e=p,p=M(p)):(r=H(d),e=b[r],u(e)&&(p=qA(e.src,a),u(p)&&(e.src=ee(p).toString())),d=J(d),e=null,p=0),q=0;else break a}else a=null;return a}}(c,a,b));TA(c,wn,function(){return function(){Vi.a?Vi.a(WA,null):Vi.call(null,WA,null);return console.info("Reload websocket connection closed.")}}(c,a,b));TA(c,Lp,function(){return function(a){return console.error("Reload websocket error:",
a)}}(c,a,b));UA.a(c,"ws://localhost:47197")};u(null!=(K.g?K.g(WA):K.call(null,WA)))||YA(L([new t(null,1,[Tn,function(){return Nz()}],null)],0));!Ta("Android")||gb()||Ta("Firefox")||cb();gb();Si||Ri.call(null,null);Si||Ri.call(null,0);NA.prototype.Me=function(a,b){return UA.j(this,b,null)};NA.prototype.Ne=function(a,b,c){return this.open(b,c)};NA.prototype.ce=function(a,b){return this.send(b)};NA.prototype.cd=function(){return hj.a(X,Y.a(function(){return function(a){var b=N(a,0);a=N(a,1);return new T(null,2,5,U,[di.g(b.toLowerCase()),a],null)}}(this),dl.l(L([Wl(PA)],0))))};var ZA=Si?Si(null):Ri.call(null,null);if("undefined"===typeof $A)var $A=function(){var a=function(){var a=X;return Si?Si(a):Ri.call(null,a)}(),b=function(){var a=X;return Si?Si(a):Ri.call(null,a)}(),c=function(){var a=X;return Si?Si(a):Ri.call(null,a)}(),d=function(){var a=X;return Si?Si(a):Ri.call(null,a)}(),e=Yg(X,$p,bm());return new mm(ng("weasel.repl","process-message"),Eo,Yn,e,a,b,c,d)}();om($A,Lp,function(a){return console.error([y("Websocket REPL error "),y(uo.g(a))].join(""))});
om($A,In,function(a){var b=Bp.g(a);return new t(null,2,[Eo,jp,ho,function(){try{return new t(null,2,[hp,dp,ho,""+y(eval(b))],null)}catch(a){if(a instanceof Error){var d=a;return new t(null,3,[hp,Np,ho,Wi.l(L([d],0)),Gp,u(d.hasOwnProperty("stack"))?d.stack:"No stacktrace available."],null)}d=a;return new t(null,3,[hp,Np,ho,Wi.l(L([d],0)),Gp,"No stacktrace available."],null)}}()],null)});var aB=function aB(){return aB.l(0<arguments.length?new F(Array.prototype.slice.call(arguments,0),0):null)};
aB.l=function(a){var b=K.g?K.g(ZA):K.call(null,ZA);return u(b)?VA.a(K.g?K.g(ZA):K.call(null,ZA),new t(null,2,[Eo,Mo,ho,S.a(Wi,a)],null)):null};aB.I=0;aB.J=function(a){return aB.l(E(a))};var bB=function bB(){return bB.l(0<arguments.length?new F(Array.prototype.slice.call(arguments,0),0):null)};bB.l=function(a){return console.log.apply(console,De(a))};bB.I=0;bB.J=function(a){return bB.l(E(a))};
var cB=new hk([xp,aB,Op,bB,new hl(null,new t(null,2,[xp,null,Op,null],null),null),function(){function a(a){var d=null;if(0<arguments.length){for(var d=0,e=Array(arguments.length-0);d<e.length;)e[d]=arguments[d+0],++d;d=new F(e,0)}return b.call(this,d)}function b(a){S.a(bB,a);return S.a(aB,a)}a.I=0;a.J=function(a){a=E(a);return b(a)};a.l=b;return a}()],!0,!1);function dB(){eB(arguments[0],1<arguments.length?new F(Array.prototype.slice.call(arguments,1),0):null)}
function eB(a,b){var c=rh(b)?S.a(Ti,b):b,d=Yg(c,wo,!0),e=Q(c,lq),f=Q(c,Sp),g=Q(c,Sn),k=Yg(c,Mo,xp),l=new NA(null,null);Xi.a(ZA,Mi(l));TA(l,Bo,function(a,b,c,d,e,f,g,k){return function(){le=ah(k)?k:Q(cB,k);VA.a(a,Wi.l(L([new t(null,1,[Eo,En],null)],0)));u(d)&&console.info("Opened Websocket REPL connection");return ah(e)?e.C?e.C():e.call(null):null}}(l,b,c,d,e,f,g,k));TA(l,nq,function(a){return function(b){b=Xr(new Dr(b.message,[],-1),!1,null);b=rh(b)?S.a(Ti,b):b;Q(b,Eo);b=Wi.l(L([$A.g?$A.g(b):$A.call(null,
b)],0));return VA.a(a,b)}}(l,b,c,d,e,f,g,k));TA(l,wn,function(a,b,c,d,e,f,g){return function(){Vi.a?Vi.a(ZA,null):Vi.call(null,ZA,null);u(d)&&console.info("Closed Websocket REPL connection");return ah(g)?g.C?g.C():g.call(null):null}}(l,b,c,d,e,f,g,k));TA(l,Lp,function(a,b,c,d,e,f){return function(a){u(d)&&console.error("WebSocket error",a);return ah(f)?f.g?f.g(a):f.call(null,a):null}}(l,b,c,d,e,f,g,k));UA.a(l,a)};u(u(null)?xe(null!=(K.g?K.g(ZA):K.call(null,ZA))):null)&&dB(null);
//# sourceMappingURL=main.js.map