// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('clojure.zip');
goog.require('cljs.core');
/**
 * Creates a new zipper structure.
 * 
 * branch? is a fn that, given a node, returns true if can have
 * children, even if it currently doesn't.
 * 
 * children is a fn that, given a branch node, returns a seq of its
 * children.
 * 
 * make-node is a fn that, given an existing node and a seq of
 * children, returns a new branch node with the supplied children.
 * root is the root node.
 */
clojure.zip.zipper = (function clojure$zip$zipper(branch_QMARK_,children,make_node,root){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,null], null),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$zip_SLASH_branch_QMARK_,branch_QMARK_,cljs.core.constant$keyword$zip_SLASH_children,children,cljs.core.constant$keyword$zip_SLASH_make_DASH_node,make_node], null));
});
/**
 * Returns a zipper for nested sequences, given a root sequence
 */
clojure.zip.seq_zip = (function clojure$zip$seq_zip(root){
return clojure.zip.zipper(cljs.core.seq_QMARK_,cljs.core.identity,(function (node,children){
return cljs.core.with_meta(children,cljs.core.meta(node));
}),root);
});
/**
 * Returns a zipper for nested vectors, given a root vector
 */
clojure.zip.vector_zip = (function clojure$zip$vector_zip(root){
return clojure.zip.zipper(cljs.core.vector_QMARK_,cljs.core.seq,(function (node,children){
return cljs.core.with_meta(cljs.core.vec(children),cljs.core.meta(node));
}),root);
});
/**
 * Returns a zipper for xml elements (as from xml/parse),
 * given a root element
 */
clojure.zip.xml_zip = (function clojure$zip$xml_zip(root){
return clojure.zip.zipper(cljs.core.complement(cljs.core.string_QMARK_),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,cljs.core.constant$keyword$content),(function (node,children){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,cljs.core.constant$keyword$content,(function (){var and__4198__auto__ = children;
if(cljs.core.truth_(and__4198__auto__)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,children);
} else {
return and__4198__auto__;
}
})());
}),root);
});
/**
 * Returns the node at loc
 */
clojure.zip.node = (function clojure$zip$node(loc){
var G__21894 = (0);
return (loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(G__21894) : loc.call(null,G__21894));
});
/**
 * Returns true if the node at loc is a branch
 */
clojure.zip.branch_QMARK_ = (function clojure$zip$branch_QMARK_(loc){
return cljs.core.constant$keyword$zip_SLASH_branch_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc)).call(null,clojure.zip.node(loc));
});
/**
 * Returns a seq of the children of node at loc, which must be a branch
 */
clojure.zip.children = (function clojure$zip$children(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc))){
return cljs.core.constant$keyword$zip_SLASH_children.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc)).call(null,clojure.zip.node(loc));
} else {
throw "called children on a leaf node";
}
});
/**
 * Returns a new branch node, given an existing node and new
 * children. The loc is only used to supply the constructor.
 */
clojure.zip.make_node = (function clojure$zip$make_node(loc,node,children){
return cljs.core.constant$keyword$zip_SLASH_make_DASH_node.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(loc)).call(null,node,children);
});
/**
 * Returns a seq of nodes leading to this loc
 */
clojure.zip.path = (function clojure$zip$path(loc){
return cljs.core.constant$keyword$pnodes.cljs$core$IFn$_invoke$arity$1((function (){var G__21896 = (1);
return (loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(G__21896) : loc.call(null,G__21896));
})());
});
/**
 * Returns a seq of the left siblings of this loc
 */
clojure.zip.lefts = (function clojure$zip$lefts(loc){
return cljs.core.seq(cljs.core.constant$keyword$l.cljs$core$IFn$_invoke$arity$1((function (){var G__21898 = (1);
return (loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(G__21898) : loc.call(null,G__21898));
})()));
});
/**
 * Returns a seq of the right siblings of this loc
 */
clojure.zip.rights = (function clojure$zip$rights(loc){
return cljs.core.constant$keyword$r.cljs$core$IFn$_invoke$arity$1((function (){var G__21900 = (1);
return (loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(G__21900) : loc.call(null,G__21900));
})());
});
/**
 * Returns the loc of the leftmost child of the node at this loc, or
 * nil if no children
 */
clojure.zip.down = (function clojure$zip$down(loc){
if(cljs.core.truth_(clojure.zip.branch_QMARK_(loc))){
var vec__21903 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21903,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21903,(1),null);
var vec__21904 = clojure.zip.children(loc);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21904,(0),null);
var cnext = cljs.core.nthnext(vec__21904,(1));
var cs = vec__21904;
if(cljs.core.truth_(cs)){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [c,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$l,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$pnodes,(cljs.core.truth_(path)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$pnodes.cljs$core$IFn$_invoke$arity$1(path),node):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null)),cljs.core.constant$keyword$ppath,path,cljs.core.constant$keyword$r,cnext], null)], null),cljs.core.meta(loc));
} else {
return null;
}
} else {
return null;
}
});
/**
 * Returns the loc of the parent of the node at this loc, or nil if at
 * the top
 */
clojure.zip.up = (function clojure$zip$up(loc){
var vec__21907 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21907,(0),null);
var map__21908 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21907,(1),null);
var map__21908__$1 = ((cljs.core.seq_QMARK_(map__21908))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21908):map__21908);
var path = map__21908__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21908__$1,cljs.core.constant$keyword$l);
var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21908__$1,cljs.core.constant$keyword$ppath);
var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21908__$1,cljs.core.constant$keyword$pnodes);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21908__$1,cljs.core.constant$keyword$r);
var changed_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21908__$1,cljs.core.constant$keyword$changed_QMARK_);
if(cljs.core.truth_(pnodes)){
var pnode = cljs.core.peek(pnodes);
return cljs.core.with_meta((cljs.core.truth_(changed_QMARK_)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node(loc,pnode,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(l,cljs.core.cons(node,r))),(function (){var and__4198__auto__ = ppath;
if(cljs.core.truth_(and__4198__auto__)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,cljs.core.constant$keyword$changed_QMARK_,true);
} else {
return and__4198__auto__;
}
})()], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pnode,ppath], null)),cljs.core.meta(loc));
} else {
return null;
}
});
/**
 * zips all the way up and returns the root node, reflecting any
 * changes.
 */
clojure.zip.root = (function clojure$zip$root(loc){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$end,(function (){var G__21910 = (1);
return (loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(G__21910) : loc.call(null,G__21910));
})())){
return clojure.zip.node(loc);
} else {
var p = clojure.zip.up(loc);
if(cljs.core.truth_(p)){
var G__21911 = p;
loc = G__21911;
continue;
} else {
return clojure.zip.node(loc);
}
}
break;
}
});
/**
 * Returns the loc of the right sibling of the node at this loc, or nil
 */
clojure.zip.right = (function clojure$zip$right(loc){
var vec__21915 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21915,(0),null);
var map__21916 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21915,(1),null);
var map__21916__$1 = ((cljs.core.seq_QMARK_(map__21916))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21916):map__21916);
var path = map__21916__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21916__$1,cljs.core.constant$keyword$l);
var vec__21917 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21916__$1,cljs.core.constant$keyword$r);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21917,(0),null);
var rnext = cljs.core.nthnext(vec__21917,(1));
var rs = vec__21917;
if(cljs.core.truth_((function (){var and__4198__auto__ = path;
if(cljs.core.truth_(and__4198__auto__)){
return rs;
} else {
return and__4198__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$l,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,node),cljs.core.array_seq([cljs.core.constant$keyword$r,rnext], 0))], null),cljs.core.meta(loc));
} else {
return null;
}
});
/**
 * Returns the loc of the rightmost sibling of the node at this loc, or self
 */
clojure.zip.rightmost = (function clojure$zip$rightmost(loc){
var vec__21920 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21920,(0),null);
var map__21921 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21920,(1),null);
var map__21921__$1 = ((cljs.core.seq_QMARK_(map__21921))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21921):map__21921);
var path = map__21921__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21921__$1,cljs.core.constant$keyword$l);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21921__$1,cljs.core.constant$keyword$r);
if(cljs.core.truth_((function (){var and__4198__auto__ = path;
if(cljs.core.truth_(and__4198__auto__)){
return r;
} else {
return and__4198__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.last(r),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$l,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.conj,l,node,cljs.core.butlast(r)),cljs.core.array_seq([cljs.core.constant$keyword$r,null], 0))], null),cljs.core.meta(loc));
} else {
return loc;
}
});
/**
 * Returns the loc of the left sibling of the node at this loc, or nil
 */
clojure.zip.left = (function clojure$zip$left(loc){
var vec__21924 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21924,(0),null);
var map__21925 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21924,(1),null);
var map__21925__$1 = ((cljs.core.seq_QMARK_(map__21925))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21925):map__21925);
var path = map__21925__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21925__$1,cljs.core.constant$keyword$l);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21925__$1,cljs.core.constant$keyword$r);
if(cljs.core.truth_((function (){var and__4198__auto__ = path;
if(cljs.core.truth_(and__4198__auto__)){
return cljs.core.seq(l);
} else {
return and__4198__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$l,cljs.core.pop(l),cljs.core.array_seq([cljs.core.constant$keyword$r,cljs.core.cons(node,r)], 0))], null),cljs.core.meta(loc));
} else {
return null;
}
});
/**
 * Returns the loc of the leftmost sibling of the node at this loc, or self
 */
clojure.zip.leftmost = (function clojure$zip$leftmost(loc){
var vec__21928 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21928,(0),null);
var map__21929 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21928,(1),null);
var map__21929__$1 = ((cljs.core.seq_QMARK_(map__21929))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21929):map__21929);
var path = map__21929__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21929__$1,cljs.core.constant$keyword$l);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21929__$1,cljs.core.constant$keyword$r);
if(cljs.core.truth_((function (){var and__4198__auto__ = path;
if(cljs.core.truth_(and__4198__auto__)){
return cljs.core.seq(l);
} else {
return and__4198__auto__;
}
})())){
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$l,cljs.core.PersistentVector.EMPTY,cljs.core.array_seq([cljs.core.constant$keyword$r,cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.rest(l),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [node], null),cljs.core.array_seq([r], 0))], 0))], null),cljs.core.meta(loc));
} else {
return loc;
}
});
/**
 * Inserts the item as the left sibling of the node at this loc,
 * without moving
 */
clojure.zip.insert_left = (function clojure$zip$insert_left(loc,item){
var vec__21932 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21932,(0),null);
var map__21933 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21932,(1),null);
var map__21933__$1 = ((cljs.core.seq_QMARK_(map__21933))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21933):map__21933);
var path = map__21933__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21933__$1,cljs.core.constant$keyword$l);
if((path == null)){
throw "Insert at top";
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$l,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,item),cljs.core.array_seq([cljs.core.constant$keyword$changed_QMARK_,true], 0))], null),cljs.core.meta(loc));
}
});
/**
 * Inserts the item as the right sibling of the node at this loc,
 * without moving
 */
clojure.zip.insert_right = (function clojure$zip$insert_right(loc,item){
var vec__21936 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21936,(0),null);
var map__21937 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21936,(1),null);
var map__21937__$1 = ((cljs.core.seq_QMARK_(map__21937))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21937):map__21937);
var path = map__21937__$1;
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21937__$1,cljs.core.constant$keyword$r);
if((path == null)){
throw "Insert at top";
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$r,cljs.core.cons(item,r),cljs.core.array_seq([cljs.core.constant$keyword$changed_QMARK_,true], 0))], null),cljs.core.meta(loc));
}
});
/**
 * Replaces the node at this loc, without moving
 */
clojure.zip.replace = (function clojure$zip$replace(loc,node){
var vec__21939 = loc;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21939,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21939,(1),null);
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(path,cljs.core.constant$keyword$changed_QMARK_,true)], null),cljs.core.meta(loc));
});
/**
 * Replaces the node at this loc with the value of (f node args)
 */
clojure.zip.edit = (function clojure$zip$edit(){
var argseq__5250__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5250__auto__);
});

clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic = (function (loc,f,args){
return clojure.zip.replace(loc,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,clojure.zip.node(loc),args));
});

clojure.zip.edit.cljs$lang$maxFixedArity = (2);

clojure.zip.edit.cljs$lang$applyTo = (function (seq21940){
var G__21941 = cljs.core.first(seq21940);
var seq21940__$1 = cljs.core.next(seq21940);
var G__21942 = cljs.core.first(seq21940__$1);
var seq21940__$2 = cljs.core.next(seq21940__$1);
return clojure.zip.edit.cljs$core$IFn$_invoke$arity$variadic(G__21941,G__21942,seq21940__$2);
});
/**
 * Inserts the item as the leftmost child of the node at this loc,
 * without moving
 */
clojure.zip.insert_child = (function clojure$zip$insert_child(loc,item){
return clojure.zip.replace(loc,clojure.zip.make_node(loc,clojure.zip.node(loc),cljs.core.cons(item,clojure.zip.children(loc))));
});
/**
 * Inserts the item as the rightmost child of the node at this loc,
 * without moving
 */
clojure.zip.append_child = (function clojure$zip$append_child(loc,item){
return clojure.zip.replace(loc,clojure.zip.make_node(loc,clojure.zip.node(loc),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(clojure.zip.children(loc),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [item], null))));
});
/**
 * Moves to the next loc in the hierarchy, depth-first. When reaching
 * the end, returns a distinguished loc detectable via end?. If already
 * at the end, stays there.
 */
clojure.zip.next = (function clojure$zip$next(loc){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$end,(function (){var G__21944 = (1);
return (loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(G__21944) : loc.call(null,G__21944));
})())){
return loc;
} else {
var or__4210__auto__ = (function (){var and__4198__auto__ = clojure.zip.branch_QMARK_(loc);
if(cljs.core.truth_(and__4198__auto__)){
return clojure.zip.down(loc);
} else {
return and__4198__auto__;
}
})();
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = clojure.zip.right(loc);
if(cljs.core.truth_(or__4210__auto____$1)){
return or__4210__auto____$1;
} else {
var p = loc;
while(true){
if(cljs.core.truth_(clojure.zip.up(p))){
var or__4210__auto____$2 = clojure.zip.right(clojure.zip.up(p));
if(cljs.core.truth_(or__4210__auto____$2)){
return or__4210__auto____$2;
} else {
var G__21945 = clojure.zip.up(p);
p = G__21945;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node(p),cljs.core.constant$keyword$end], null);
}
break;
}
}
}
}
});
/**
 * Moves to the previous loc in the hierarchy, depth-first. If already
 * at the root, returns nil.
 */
clojure.zip.prev = (function clojure$zip$prev(loc){
var temp__4423__auto__ = clojure.zip.left(loc);
if(cljs.core.truth_(temp__4423__auto__)){
var lloc = temp__4423__auto__;
var loc__$1 = lloc;
while(true){
var temp__4423__auto____$1 = (function (){var and__4198__auto__ = clojure.zip.branch_QMARK_(loc__$1);
if(cljs.core.truth_(and__4198__auto__)){
return clojure.zip.down(loc__$1);
} else {
return and__4198__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto____$1)){
var child = temp__4423__auto____$1;
var G__21946 = clojure.zip.rightmost(child);
loc__$1 = G__21946;
continue;
} else {
return loc__$1;
}
break;
}
} else {
return clojure.zip.up(loc);
}
});
/**
 * Returns true if loc represents the end of a depth-first walk
 */
clojure.zip.end_QMARK_ = (function clojure$zip$end_QMARK_(loc){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.constant$keyword$end,(function (){var G__21948 = (1);
return (loc.cljs$core$IFn$_invoke$arity$1 ? loc.cljs$core$IFn$_invoke$arity$1(G__21948) : loc.call(null,G__21948));
})());
});
/**
 * Removes the node at loc, returning the loc that would have preceded
 * it in a depth-first walk.
 */
clojure.zip.remove = (function clojure$zip$remove(loc){
var vec__21951 = loc;
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21951,(0),null);
var map__21952 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21951,(1),null);
var map__21952__$1 = ((cljs.core.seq_QMARK_(map__21952))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21952):map__21952);
var path = map__21952__$1;
var l = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21952__$1,cljs.core.constant$keyword$l);
var ppath = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21952__$1,cljs.core.constant$keyword$ppath);
var pnodes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21952__$1,cljs.core.constant$keyword$pnodes);
var rs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21952__$1,cljs.core.constant$keyword$r);
if((path == null)){
throw "Remove at top";
} else {
if((cljs.core.count(l) > (0))){
var loc__$1 = cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.peek(l),cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.constant$keyword$l,cljs.core.pop(l),cljs.core.array_seq([cljs.core.constant$keyword$changed_QMARK_,true], 0))], null),cljs.core.meta(loc));
while(true){
var temp__4423__auto__ = (function (){var and__4198__auto__ = clojure.zip.branch_QMARK_(loc__$1);
if(cljs.core.truth_(and__4198__auto__)){
return clojure.zip.down(loc__$1);
} else {
return and__4198__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var child = temp__4423__auto__;
var G__21953 = clojure.zip.rightmost(child);
loc__$1 = G__21953;
continue;
} else {
return loc__$1;
}
break;
}
} else {
return cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.make_node(loc,cljs.core.peek(pnodes),rs),(function (){var and__4198__auto__ = ppath;
if(cljs.core.truth_(and__4198__auto__)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ppath,cljs.core.constant$keyword$changed_QMARK_,true);
} else {
return and__4198__auto__;
}
})()], null),cljs.core.meta(loc));
}
}
});
