// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('desmo.dom');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('plumbing.core');
desmo.dom.tree = virtualDom.create;
desmo.dom.diff = virtualDom.diff;
desmo.dom.patch = virtualDom.patch;
desmo.dom.collect_args = (function desmo$dom$collect_args(attrs,args){
if((cljs.core.first(args) instanceof cljs.core.Keyword)){
return desmo$dom$collect_args(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2((2),args))),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((2),args));
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [attrs,cljs.core.flatten(args)], null);
}
});
desmo.dom.fix_keys = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(plumbing.core.map_keys,(function (k){
var temp__4423__auto__ = (function (){var G__20004 = new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$class,"className",cljs.core.constant$keyword$for,"htmlFor"], null);
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__20004) : k.call(null,G__20004));
})();
if(cljs.core.truth_(temp__4423__auto__)){
var nk = temp__4423__auto__;
return nk;
} else {
return clojure.string.replace(cljs.core.name(k),"-","");
}
}));
desmo.dom.constructor = (function desmo$dom$constructor(type){
return (function() { 
var G__20009__delegate = function (args){
var vec__20007 = desmo.dom.collect_args(cljs.core.PersistentArrayMap.EMPTY,args);
var attrs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20007,(0),null);
var children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20007,(1),null);
return virtualDom.h(type,cljs.core.clj__GT_js((function (){var G__20008 = attrs;
return (desmo.dom.fix_keys.cljs$core$IFn$_invoke$arity$1 ? desmo.dom.fix_keys.cljs$core$IFn$_invoke$arity$1(G__20008) : desmo.dom.fix_keys.call(null,G__20008));
})()),cljs.core.clj__GT_js(children));
};
var G__20009 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__20010__i = 0, G__20010__a = new Array(arguments.length -  0);
while (G__20010__i < G__20010__a.length) {G__20010__a[G__20010__i] = arguments[G__20010__i + 0]; ++G__20010__i;}
  args = new cljs.core.IndexedSeq(G__20010__a,0);
} 
return G__20009__delegate.call(this,args);};
G__20009.cljs$lang$maxFixedArity = 0;
G__20009.cljs$lang$applyTo = (function (arglist__20011){
var args = cljs.core.seq(arglist__20011);
return G__20009__delegate(args);
});
G__20009.cljs$core$IFn$_invoke$arity$variadic = G__20009__delegate;
return G__20009;
})()
;
});
var ctor__19262__auto___20130 = desmo.dom.constructor("a");
desmo.dom.a = ((function (ctor__19262__auto___20130){
return (function desmo$dom$a(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.a.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20130))
;

desmo.dom.a.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20130){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20130,args__19263__auto__);
});})(ctor__19262__auto___20130))
;

desmo.dom.a.cljs$lang$maxFixedArity = (0);

desmo.dom.a.cljs$lang$applyTo = ((function (ctor__19262__auto___20130){
return (function (seq20012){
return desmo.dom.a.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20012));
});})(ctor__19262__auto___20130))
;

var ctor__19262__auto___20131 = desmo.dom.constructor("abbr");
desmo.dom.abbr = ((function (ctor__19262__auto___20131){
return (function desmo$dom$abbr(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20131))
;

desmo.dom.abbr.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20131){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20131,args__19263__auto__);
});})(ctor__19262__auto___20131))
;

desmo.dom.abbr.cljs$lang$maxFixedArity = (0);

desmo.dom.abbr.cljs$lang$applyTo = ((function (ctor__19262__auto___20131){
return (function (seq20013){
return desmo.dom.abbr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20013));
});})(ctor__19262__auto___20131))
;

var ctor__19262__auto___20132 = desmo.dom.constructor("address");
desmo.dom.address = ((function (ctor__19262__auto___20132){
return (function desmo$dom$address(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.address.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20132))
;

desmo.dom.address.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20132){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20132,args__19263__auto__);
});})(ctor__19262__auto___20132))
;

desmo.dom.address.cljs$lang$maxFixedArity = (0);

desmo.dom.address.cljs$lang$applyTo = ((function (ctor__19262__auto___20132){
return (function (seq20014){
return desmo.dom.address.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20014));
});})(ctor__19262__auto___20132))
;

var ctor__19262__auto___20133 = desmo.dom.constructor("area");
desmo.dom.area = ((function (ctor__19262__auto___20133){
return (function desmo$dom$area(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.area.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20133))
;

desmo.dom.area.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20133){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20133,args__19263__auto__);
});})(ctor__19262__auto___20133))
;

desmo.dom.area.cljs$lang$maxFixedArity = (0);

desmo.dom.area.cljs$lang$applyTo = ((function (ctor__19262__auto___20133){
return (function (seq20015){
return desmo.dom.area.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20015));
});})(ctor__19262__auto___20133))
;

var ctor__19262__auto___20134 = desmo.dom.constructor("article");
desmo.dom.article = ((function (ctor__19262__auto___20134){
return (function desmo$dom$article(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.article.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20134))
;

desmo.dom.article.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20134){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20134,args__19263__auto__);
});})(ctor__19262__auto___20134))
;

desmo.dom.article.cljs$lang$maxFixedArity = (0);

desmo.dom.article.cljs$lang$applyTo = ((function (ctor__19262__auto___20134){
return (function (seq20016){
return desmo.dom.article.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20016));
});})(ctor__19262__auto___20134))
;

var ctor__19262__auto___20135 = desmo.dom.constructor("aside");
desmo.dom.aside = ((function (ctor__19262__auto___20135){
return (function desmo$dom$aside(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.aside.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20135))
;

desmo.dom.aside.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20135){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20135,args__19263__auto__);
});})(ctor__19262__auto___20135))
;

desmo.dom.aside.cljs$lang$maxFixedArity = (0);

desmo.dom.aside.cljs$lang$applyTo = ((function (ctor__19262__auto___20135){
return (function (seq20017){
return desmo.dom.aside.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20017));
});})(ctor__19262__auto___20135))
;

var ctor__19262__auto___20136 = desmo.dom.constructor("audio");
desmo.dom.audio = ((function (ctor__19262__auto___20136){
return (function desmo$dom$audio(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.audio.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20136))
;

desmo.dom.audio.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20136){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20136,args__19263__auto__);
});})(ctor__19262__auto___20136))
;

desmo.dom.audio.cljs$lang$maxFixedArity = (0);

desmo.dom.audio.cljs$lang$applyTo = ((function (ctor__19262__auto___20136){
return (function (seq20018){
return desmo.dom.audio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20018));
});})(ctor__19262__auto___20136))
;

var ctor__19262__auto___20137 = desmo.dom.constructor("b");
desmo.dom.b = ((function (ctor__19262__auto___20137){
return (function desmo$dom$b(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.b.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20137))
;

desmo.dom.b.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20137){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20137,args__19263__auto__);
});})(ctor__19262__auto___20137))
;

desmo.dom.b.cljs$lang$maxFixedArity = (0);

desmo.dom.b.cljs$lang$applyTo = ((function (ctor__19262__auto___20137){
return (function (seq20019){
return desmo.dom.b.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20019));
});})(ctor__19262__auto___20137))
;

var ctor__19262__auto___20138 = desmo.dom.constructor("base");
desmo.dom.base = ((function (ctor__19262__auto___20138){
return (function desmo$dom$base(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.base.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20138))
;

desmo.dom.base.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20138){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20138,args__19263__auto__);
});})(ctor__19262__auto___20138))
;

desmo.dom.base.cljs$lang$maxFixedArity = (0);

desmo.dom.base.cljs$lang$applyTo = ((function (ctor__19262__auto___20138){
return (function (seq20020){
return desmo.dom.base.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20020));
});})(ctor__19262__auto___20138))
;

var ctor__19262__auto___20139 = desmo.dom.constructor("bdi");
desmo.dom.bdi = ((function (ctor__19262__auto___20139){
return (function desmo$dom$bdi(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20139))
;

desmo.dom.bdi.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20139){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20139,args__19263__auto__);
});})(ctor__19262__auto___20139))
;

desmo.dom.bdi.cljs$lang$maxFixedArity = (0);

desmo.dom.bdi.cljs$lang$applyTo = ((function (ctor__19262__auto___20139){
return (function (seq20021){
return desmo.dom.bdi.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20021));
});})(ctor__19262__auto___20139))
;

var ctor__19262__auto___20140 = desmo.dom.constructor("bdo");
desmo.dom.bdo = ((function (ctor__19262__auto___20140){
return (function desmo$dom$bdo(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20140))
;

desmo.dom.bdo.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20140){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20140,args__19263__auto__);
});})(ctor__19262__auto___20140))
;

desmo.dom.bdo.cljs$lang$maxFixedArity = (0);

desmo.dom.bdo.cljs$lang$applyTo = ((function (ctor__19262__auto___20140){
return (function (seq20022){
return desmo.dom.bdo.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20022));
});})(ctor__19262__auto___20140))
;

var ctor__19262__auto___20141 = desmo.dom.constructor("big");
desmo.dom.big = ((function (ctor__19262__auto___20141){
return (function desmo$dom$big(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.big.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20141))
;

desmo.dom.big.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20141){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20141,args__19263__auto__);
});})(ctor__19262__auto___20141))
;

desmo.dom.big.cljs$lang$maxFixedArity = (0);

desmo.dom.big.cljs$lang$applyTo = ((function (ctor__19262__auto___20141){
return (function (seq20023){
return desmo.dom.big.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20023));
});})(ctor__19262__auto___20141))
;

var ctor__19262__auto___20142 = desmo.dom.constructor("blockquote");
desmo.dom.blockquote = ((function (ctor__19262__auto___20142){
return (function desmo$dom$blockquote(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20142))
;

desmo.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20142){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20142,args__19263__auto__);
});})(ctor__19262__auto___20142))
;

desmo.dom.blockquote.cljs$lang$maxFixedArity = (0);

desmo.dom.blockquote.cljs$lang$applyTo = ((function (ctor__19262__auto___20142){
return (function (seq20024){
return desmo.dom.blockquote.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20024));
});})(ctor__19262__auto___20142))
;

var ctor__19262__auto___20143 = desmo.dom.constructor("body");
desmo.dom.body = ((function (ctor__19262__auto___20143){
return (function desmo$dom$body(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.body.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20143))
;

desmo.dom.body.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20143){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20143,args__19263__auto__);
});})(ctor__19262__auto___20143))
;

desmo.dom.body.cljs$lang$maxFixedArity = (0);

desmo.dom.body.cljs$lang$applyTo = ((function (ctor__19262__auto___20143){
return (function (seq20025){
return desmo.dom.body.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20025));
});})(ctor__19262__auto___20143))
;

var ctor__19262__auto___20144 = desmo.dom.constructor("br");
desmo.dom.br = ((function (ctor__19262__auto___20144){
return (function desmo$dom$br(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.br.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20144))
;

desmo.dom.br.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20144){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20144,args__19263__auto__);
});})(ctor__19262__auto___20144))
;

desmo.dom.br.cljs$lang$maxFixedArity = (0);

desmo.dom.br.cljs$lang$applyTo = ((function (ctor__19262__auto___20144){
return (function (seq20026){
return desmo.dom.br.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20026));
});})(ctor__19262__auto___20144))
;

var ctor__19262__auto___20145 = desmo.dom.constructor("button");
desmo.dom.button = ((function (ctor__19262__auto___20145){
return (function desmo$dom$button(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.button.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20145))
;

desmo.dom.button.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20145){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20145,args__19263__auto__);
});})(ctor__19262__auto___20145))
;

desmo.dom.button.cljs$lang$maxFixedArity = (0);

desmo.dom.button.cljs$lang$applyTo = ((function (ctor__19262__auto___20145){
return (function (seq20027){
return desmo.dom.button.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20027));
});})(ctor__19262__auto___20145))
;

var ctor__19262__auto___20146 = desmo.dom.constructor("canvas");
desmo.dom.canvas = ((function (ctor__19262__auto___20146){
return (function desmo$dom$canvas(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20146))
;

desmo.dom.canvas.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20146){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20146,args__19263__auto__);
});})(ctor__19262__auto___20146))
;

desmo.dom.canvas.cljs$lang$maxFixedArity = (0);

desmo.dom.canvas.cljs$lang$applyTo = ((function (ctor__19262__auto___20146){
return (function (seq20028){
return desmo.dom.canvas.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20028));
});})(ctor__19262__auto___20146))
;

var ctor__19262__auto___20147 = desmo.dom.constructor("caption");
desmo.dom.caption = ((function (ctor__19262__auto___20147){
return (function desmo$dom$caption(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.caption.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20147))
;

desmo.dom.caption.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20147){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20147,args__19263__auto__);
});})(ctor__19262__auto___20147))
;

desmo.dom.caption.cljs$lang$maxFixedArity = (0);

desmo.dom.caption.cljs$lang$applyTo = ((function (ctor__19262__auto___20147){
return (function (seq20029){
return desmo.dom.caption.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20029));
});})(ctor__19262__auto___20147))
;

var ctor__19262__auto___20148 = desmo.dom.constructor("cite");
desmo.dom.cite = ((function (ctor__19262__auto___20148){
return (function desmo$dom$cite(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.cite.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20148))
;

desmo.dom.cite.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20148){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20148,args__19263__auto__);
});})(ctor__19262__auto___20148))
;

desmo.dom.cite.cljs$lang$maxFixedArity = (0);

desmo.dom.cite.cljs$lang$applyTo = ((function (ctor__19262__auto___20148){
return (function (seq20030){
return desmo.dom.cite.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20030));
});})(ctor__19262__auto___20148))
;

var ctor__19262__auto___20149 = desmo.dom.constructor("code");
desmo.dom.code = ((function (ctor__19262__auto___20149){
return (function desmo$dom$code(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.code.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20149))
;

desmo.dom.code.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20149){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20149,args__19263__auto__);
});})(ctor__19262__auto___20149))
;

desmo.dom.code.cljs$lang$maxFixedArity = (0);

desmo.dom.code.cljs$lang$applyTo = ((function (ctor__19262__auto___20149){
return (function (seq20031){
return desmo.dom.code.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20031));
});})(ctor__19262__auto___20149))
;

var ctor__19262__auto___20150 = desmo.dom.constructor("col");
desmo.dom.col = ((function (ctor__19262__auto___20150){
return (function desmo$dom$col(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.col.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20150))
;

desmo.dom.col.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20150){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20150,args__19263__auto__);
});})(ctor__19262__auto___20150))
;

desmo.dom.col.cljs$lang$maxFixedArity = (0);

desmo.dom.col.cljs$lang$applyTo = ((function (ctor__19262__auto___20150){
return (function (seq20032){
return desmo.dom.col.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20032));
});})(ctor__19262__auto___20150))
;

var ctor__19262__auto___20151 = desmo.dom.constructor("colgroup");
desmo.dom.colgroup = ((function (ctor__19262__auto___20151){
return (function desmo$dom$colgroup(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20151))
;

desmo.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20151){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20151,args__19263__auto__);
});})(ctor__19262__auto___20151))
;

desmo.dom.colgroup.cljs$lang$maxFixedArity = (0);

desmo.dom.colgroup.cljs$lang$applyTo = ((function (ctor__19262__auto___20151){
return (function (seq20033){
return desmo.dom.colgroup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20033));
});})(ctor__19262__auto___20151))
;

var ctor__19262__auto___20152 = desmo.dom.constructor("data");
desmo.dom.data = ((function (ctor__19262__auto___20152){
return (function desmo$dom$data(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.data.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20152))
;

desmo.dom.data.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20152){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20152,args__19263__auto__);
});})(ctor__19262__auto___20152))
;

desmo.dom.data.cljs$lang$maxFixedArity = (0);

desmo.dom.data.cljs$lang$applyTo = ((function (ctor__19262__auto___20152){
return (function (seq20034){
return desmo.dom.data.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20034));
});})(ctor__19262__auto___20152))
;

var ctor__19262__auto___20153 = desmo.dom.constructor("datalist");
desmo.dom.datalist = ((function (ctor__19262__auto___20153){
return (function desmo$dom$datalist(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20153))
;

desmo.dom.datalist.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20153){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20153,args__19263__auto__);
});})(ctor__19262__auto___20153))
;

desmo.dom.datalist.cljs$lang$maxFixedArity = (0);

desmo.dom.datalist.cljs$lang$applyTo = ((function (ctor__19262__auto___20153){
return (function (seq20035){
return desmo.dom.datalist.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20035));
});})(ctor__19262__auto___20153))
;

var ctor__19262__auto___20154 = desmo.dom.constructor("dd");
desmo.dom.dd = ((function (ctor__19262__auto___20154){
return (function desmo$dom$dd(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.dd.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20154))
;

desmo.dom.dd.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20154){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20154,args__19263__auto__);
});})(ctor__19262__auto___20154))
;

desmo.dom.dd.cljs$lang$maxFixedArity = (0);

desmo.dom.dd.cljs$lang$applyTo = ((function (ctor__19262__auto___20154){
return (function (seq20036){
return desmo.dom.dd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20036));
});})(ctor__19262__auto___20154))
;

var ctor__19262__auto___20155 = desmo.dom.constructor("del");
desmo.dom.del = ((function (ctor__19262__auto___20155){
return (function desmo$dom$del(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.del.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20155))
;

desmo.dom.del.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20155){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20155,args__19263__auto__);
});})(ctor__19262__auto___20155))
;

desmo.dom.del.cljs$lang$maxFixedArity = (0);

desmo.dom.del.cljs$lang$applyTo = ((function (ctor__19262__auto___20155){
return (function (seq20037){
return desmo.dom.del.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20037));
});})(ctor__19262__auto___20155))
;

var ctor__19262__auto___20156 = desmo.dom.constructor("details");
desmo.dom.details = ((function (ctor__19262__auto___20156){
return (function desmo$dom$details(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.details.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20156))
;

desmo.dom.details.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20156){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20156,args__19263__auto__);
});})(ctor__19262__auto___20156))
;

desmo.dom.details.cljs$lang$maxFixedArity = (0);

desmo.dom.details.cljs$lang$applyTo = ((function (ctor__19262__auto___20156){
return (function (seq20038){
return desmo.dom.details.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20038));
});})(ctor__19262__auto___20156))
;

var ctor__19262__auto___20157 = desmo.dom.constructor("dfn");
desmo.dom.dfn = ((function (ctor__19262__auto___20157){
return (function desmo$dom$dfn(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20157))
;

desmo.dom.dfn.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20157){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20157,args__19263__auto__);
});})(ctor__19262__auto___20157))
;

desmo.dom.dfn.cljs$lang$maxFixedArity = (0);

desmo.dom.dfn.cljs$lang$applyTo = ((function (ctor__19262__auto___20157){
return (function (seq20039){
return desmo.dom.dfn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20039));
});})(ctor__19262__auto___20157))
;

var ctor__19262__auto___20158 = desmo.dom.constructor("div");
desmo.dom.div = ((function (ctor__19262__auto___20158){
return (function desmo$dom$div(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.div.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20158))
;

desmo.dom.div.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20158){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20158,args__19263__auto__);
});})(ctor__19262__auto___20158))
;

desmo.dom.div.cljs$lang$maxFixedArity = (0);

desmo.dom.div.cljs$lang$applyTo = ((function (ctor__19262__auto___20158){
return (function (seq20040){
return desmo.dom.div.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20040));
});})(ctor__19262__auto___20158))
;

var ctor__19262__auto___20159 = desmo.dom.constructor("dl");
desmo.dom.dl = ((function (ctor__19262__auto___20159){
return (function desmo$dom$dl(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.dl.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20159))
;

desmo.dom.dl.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20159){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20159,args__19263__auto__);
});})(ctor__19262__auto___20159))
;

desmo.dom.dl.cljs$lang$maxFixedArity = (0);

desmo.dom.dl.cljs$lang$applyTo = ((function (ctor__19262__auto___20159){
return (function (seq20041){
return desmo.dom.dl.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20041));
});})(ctor__19262__auto___20159))
;

var ctor__19262__auto___20160 = desmo.dom.constructor("dt");
desmo.dom.dt = ((function (ctor__19262__auto___20160){
return (function desmo$dom$dt(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.dt.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20160))
;

desmo.dom.dt.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20160){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20160,args__19263__auto__);
});})(ctor__19262__auto___20160))
;

desmo.dom.dt.cljs$lang$maxFixedArity = (0);

desmo.dom.dt.cljs$lang$applyTo = ((function (ctor__19262__auto___20160){
return (function (seq20042){
return desmo.dom.dt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20042));
});})(ctor__19262__auto___20160))
;

var ctor__19262__auto___20161 = desmo.dom.constructor("em");
desmo.dom.em = ((function (ctor__19262__auto___20161){
return (function desmo$dom$em(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.em.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20161))
;

desmo.dom.em.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20161){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20161,args__19263__auto__);
});})(ctor__19262__auto___20161))
;

desmo.dom.em.cljs$lang$maxFixedArity = (0);

desmo.dom.em.cljs$lang$applyTo = ((function (ctor__19262__auto___20161){
return (function (seq20043){
return desmo.dom.em.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20043));
});})(ctor__19262__auto___20161))
;

var ctor__19262__auto___20162 = desmo.dom.constructor("embed");
desmo.dom.embed = ((function (ctor__19262__auto___20162){
return (function desmo$dom$embed(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.embed.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20162))
;

desmo.dom.embed.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20162){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20162,args__19263__auto__);
});})(ctor__19262__auto___20162))
;

desmo.dom.embed.cljs$lang$maxFixedArity = (0);

desmo.dom.embed.cljs$lang$applyTo = ((function (ctor__19262__auto___20162){
return (function (seq20045){
return desmo.dom.embed.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20045));
});})(ctor__19262__auto___20162))
;

var ctor__19262__auto___20163 = desmo.dom.constructor("fieldset");
desmo.dom.fieldset = ((function (ctor__19262__auto___20163){
return (function desmo$dom$fieldset(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20163))
;

desmo.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20163){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20163,args__19263__auto__);
});})(ctor__19262__auto___20163))
;

desmo.dom.fieldset.cljs$lang$maxFixedArity = (0);

desmo.dom.fieldset.cljs$lang$applyTo = ((function (ctor__19262__auto___20163){
return (function (seq20046){
return desmo.dom.fieldset.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20046));
});})(ctor__19262__auto___20163))
;

var ctor__19262__auto___20164 = desmo.dom.constructor("figcaption");
desmo.dom.figcaption = ((function (ctor__19262__auto___20164){
return (function desmo$dom$figcaption(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20164))
;

desmo.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20164){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20164,args__19263__auto__);
});})(ctor__19262__auto___20164))
;

desmo.dom.figcaption.cljs$lang$maxFixedArity = (0);

desmo.dom.figcaption.cljs$lang$applyTo = ((function (ctor__19262__auto___20164){
return (function (seq20047){
return desmo.dom.figcaption.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20047));
});})(ctor__19262__auto___20164))
;

var ctor__19262__auto___20165 = desmo.dom.constructor("figure");
desmo.dom.figure = ((function (ctor__19262__auto___20165){
return (function desmo$dom$figure(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.figure.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20165))
;

desmo.dom.figure.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20165){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20165,args__19263__auto__);
});})(ctor__19262__auto___20165))
;

desmo.dom.figure.cljs$lang$maxFixedArity = (0);

desmo.dom.figure.cljs$lang$applyTo = ((function (ctor__19262__auto___20165){
return (function (seq20048){
return desmo.dom.figure.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20048));
});})(ctor__19262__auto___20165))
;

var ctor__19262__auto___20166 = desmo.dom.constructor("footer");
desmo.dom.footer = ((function (ctor__19262__auto___20166){
return (function desmo$dom$footer(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.footer.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20166))
;

desmo.dom.footer.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20166){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20166,args__19263__auto__);
});})(ctor__19262__auto___20166))
;

desmo.dom.footer.cljs$lang$maxFixedArity = (0);

desmo.dom.footer.cljs$lang$applyTo = ((function (ctor__19262__auto___20166){
return (function (seq20049){
return desmo.dom.footer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20049));
});})(ctor__19262__auto___20166))
;

var ctor__19262__auto___20167 = desmo.dom.constructor("form");
desmo.dom.form = ((function (ctor__19262__auto___20167){
return (function desmo$dom$form(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.form.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20167))
;

desmo.dom.form.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20167){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20167,args__19263__auto__);
});})(ctor__19262__auto___20167))
;

desmo.dom.form.cljs$lang$maxFixedArity = (0);

desmo.dom.form.cljs$lang$applyTo = ((function (ctor__19262__auto___20167){
return (function (seq20050){
return desmo.dom.form.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20050));
});})(ctor__19262__auto___20167))
;

var ctor__19262__auto___20168 = desmo.dom.constructor("h1");
desmo.dom.h1 = ((function (ctor__19262__auto___20168){
return (function desmo$dom$h1(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.h1.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20168))
;

desmo.dom.h1.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20168){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20168,args__19263__auto__);
});})(ctor__19262__auto___20168))
;

desmo.dom.h1.cljs$lang$maxFixedArity = (0);

desmo.dom.h1.cljs$lang$applyTo = ((function (ctor__19262__auto___20168){
return (function (seq20051){
return desmo.dom.h1.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20051));
});})(ctor__19262__auto___20168))
;

var ctor__19262__auto___20169 = desmo.dom.constructor("h2");
desmo.dom.h2 = ((function (ctor__19262__auto___20169){
return (function desmo$dom$h2(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.h2.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20169))
;

desmo.dom.h2.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20169){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20169,args__19263__auto__);
});})(ctor__19262__auto___20169))
;

desmo.dom.h2.cljs$lang$maxFixedArity = (0);

desmo.dom.h2.cljs$lang$applyTo = ((function (ctor__19262__auto___20169){
return (function (seq20052){
return desmo.dom.h2.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20052));
});})(ctor__19262__auto___20169))
;

var ctor__19262__auto___20170 = desmo.dom.constructor("h3");
desmo.dom.h3 = ((function (ctor__19262__auto___20170){
return (function desmo$dom$h3(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.h3.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20170))
;

desmo.dom.h3.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20170){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20170,args__19263__auto__);
});})(ctor__19262__auto___20170))
;

desmo.dom.h3.cljs$lang$maxFixedArity = (0);

desmo.dom.h3.cljs$lang$applyTo = ((function (ctor__19262__auto___20170){
return (function (seq20053){
return desmo.dom.h3.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20053));
});})(ctor__19262__auto___20170))
;

var ctor__19262__auto___20171 = desmo.dom.constructor("h4");
desmo.dom.h4 = ((function (ctor__19262__auto___20171){
return (function desmo$dom$h4(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.h4.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20171))
;

desmo.dom.h4.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20171){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20171,args__19263__auto__);
});})(ctor__19262__auto___20171))
;

desmo.dom.h4.cljs$lang$maxFixedArity = (0);

desmo.dom.h4.cljs$lang$applyTo = ((function (ctor__19262__auto___20171){
return (function (seq20054){
return desmo.dom.h4.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20054));
});})(ctor__19262__auto___20171))
;

var ctor__19262__auto___20172 = desmo.dom.constructor("h5");
desmo.dom.h5 = ((function (ctor__19262__auto___20172){
return (function desmo$dom$h5(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.h5.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20172))
;

desmo.dom.h5.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20172){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20172,args__19263__auto__);
});})(ctor__19262__auto___20172))
;

desmo.dom.h5.cljs$lang$maxFixedArity = (0);

desmo.dom.h5.cljs$lang$applyTo = ((function (ctor__19262__auto___20172){
return (function (seq20055){
return desmo.dom.h5.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20055));
});})(ctor__19262__auto___20172))
;

var ctor__19262__auto___20173 = desmo.dom.constructor("h6");
desmo.dom.h6 = ((function (ctor__19262__auto___20173){
return (function desmo$dom$h6(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.h6.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20173))
;

desmo.dom.h6.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20173){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20173,args__19263__auto__);
});})(ctor__19262__auto___20173))
;

desmo.dom.h6.cljs$lang$maxFixedArity = (0);

desmo.dom.h6.cljs$lang$applyTo = ((function (ctor__19262__auto___20173){
return (function (seq20056){
return desmo.dom.h6.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20056));
});})(ctor__19262__auto___20173))
;

var ctor__19262__auto___20174 = desmo.dom.constructor("head");
desmo.dom.head = ((function (ctor__19262__auto___20174){
return (function desmo$dom$head(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.head.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20174))
;

desmo.dom.head.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20174){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20174,args__19263__auto__);
});})(ctor__19262__auto___20174))
;

desmo.dom.head.cljs$lang$maxFixedArity = (0);

desmo.dom.head.cljs$lang$applyTo = ((function (ctor__19262__auto___20174){
return (function (seq20057){
return desmo.dom.head.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20057));
});})(ctor__19262__auto___20174))
;

var ctor__19262__auto___20175 = desmo.dom.constructor("header");
desmo.dom.header = ((function (ctor__19262__auto___20175){
return (function desmo$dom$header(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.header.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20175))
;

desmo.dom.header.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20175){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20175,args__19263__auto__);
});})(ctor__19262__auto___20175))
;

desmo.dom.header.cljs$lang$maxFixedArity = (0);

desmo.dom.header.cljs$lang$applyTo = ((function (ctor__19262__auto___20175){
return (function (seq20058){
return desmo.dom.header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20058));
});})(ctor__19262__auto___20175))
;

var ctor__19262__auto___20176 = desmo.dom.constructor("hr");
desmo.dom.hr = ((function (ctor__19262__auto___20176){
return (function desmo$dom$hr(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.hr.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20176))
;

desmo.dom.hr.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20176){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20176,args__19263__auto__);
});})(ctor__19262__auto___20176))
;

desmo.dom.hr.cljs$lang$maxFixedArity = (0);

desmo.dom.hr.cljs$lang$applyTo = ((function (ctor__19262__auto___20176){
return (function (seq20059){
return desmo.dom.hr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20059));
});})(ctor__19262__auto___20176))
;

var ctor__19262__auto___20177 = desmo.dom.constructor("html");
desmo.dom.html = ((function (ctor__19262__auto___20177){
return (function desmo$dom$html(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.html.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20177))
;

desmo.dom.html.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20177){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20177,args__19263__auto__);
});})(ctor__19262__auto___20177))
;

desmo.dom.html.cljs$lang$maxFixedArity = (0);

desmo.dom.html.cljs$lang$applyTo = ((function (ctor__19262__auto___20177){
return (function (seq20060){
return desmo.dom.html.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20060));
});})(ctor__19262__auto___20177))
;

var ctor__19262__auto___20178 = desmo.dom.constructor("i");
desmo.dom.i = ((function (ctor__19262__auto___20178){
return (function desmo$dom$i(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.i.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20178))
;

desmo.dom.i.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20178){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20178,args__19263__auto__);
});})(ctor__19262__auto___20178))
;

desmo.dom.i.cljs$lang$maxFixedArity = (0);

desmo.dom.i.cljs$lang$applyTo = ((function (ctor__19262__auto___20178){
return (function (seq20061){
return desmo.dom.i.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20061));
});})(ctor__19262__auto___20178))
;

var ctor__19262__auto___20179 = desmo.dom.constructor("iframe");
desmo.dom.iframe = ((function (ctor__19262__auto___20179){
return (function desmo$dom$iframe(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20179))
;

desmo.dom.iframe.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20179){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20179,args__19263__auto__);
});})(ctor__19262__auto___20179))
;

desmo.dom.iframe.cljs$lang$maxFixedArity = (0);

desmo.dom.iframe.cljs$lang$applyTo = ((function (ctor__19262__auto___20179){
return (function (seq20062){
return desmo.dom.iframe.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20062));
});})(ctor__19262__auto___20179))
;

var ctor__19262__auto___20180 = desmo.dom.constructor("img");
desmo.dom.img = ((function (ctor__19262__auto___20180){
return (function desmo$dom$img(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.img.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20180))
;

desmo.dom.img.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20180){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20180,args__19263__auto__);
});})(ctor__19262__auto___20180))
;

desmo.dom.img.cljs$lang$maxFixedArity = (0);

desmo.dom.img.cljs$lang$applyTo = ((function (ctor__19262__auto___20180){
return (function (seq20063){
return desmo.dom.img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20063));
});})(ctor__19262__auto___20180))
;

var ctor__19262__auto___20181 = desmo.dom.constructor("input");
desmo.dom.input = ((function (ctor__19262__auto___20181){
return (function desmo$dom$input(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.input.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20181))
;

desmo.dom.input.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20181){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20181,args__19263__auto__);
});})(ctor__19262__auto___20181))
;

desmo.dom.input.cljs$lang$maxFixedArity = (0);

desmo.dom.input.cljs$lang$applyTo = ((function (ctor__19262__auto___20181){
return (function (seq20064){
return desmo.dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20064));
});})(ctor__19262__auto___20181))
;

var ctor__19262__auto___20182 = desmo.dom.constructor("ins");
desmo.dom.ins = ((function (ctor__19262__auto___20182){
return (function desmo$dom$ins(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.ins.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20182))
;

desmo.dom.ins.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20182){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20182,args__19263__auto__);
});})(ctor__19262__auto___20182))
;

desmo.dom.ins.cljs$lang$maxFixedArity = (0);

desmo.dom.ins.cljs$lang$applyTo = ((function (ctor__19262__auto___20182){
return (function (seq20065){
return desmo.dom.ins.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20065));
});})(ctor__19262__auto___20182))
;

var ctor__19262__auto___20183 = desmo.dom.constructor("kbd");
desmo.dom.kbd = ((function (ctor__19262__auto___20183){
return (function desmo$dom$kbd(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20183))
;

desmo.dom.kbd.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20183){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20183,args__19263__auto__);
});})(ctor__19262__auto___20183))
;

desmo.dom.kbd.cljs$lang$maxFixedArity = (0);

desmo.dom.kbd.cljs$lang$applyTo = ((function (ctor__19262__auto___20183){
return (function (seq20066){
return desmo.dom.kbd.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20066));
});})(ctor__19262__auto___20183))
;

var ctor__19262__auto___20184 = desmo.dom.constructor("keygen");
desmo.dom.keygen = ((function (ctor__19262__auto___20184){
return (function desmo$dom$keygen(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20184))
;

desmo.dom.keygen.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20184){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20184,args__19263__auto__);
});})(ctor__19262__auto___20184))
;

desmo.dom.keygen.cljs$lang$maxFixedArity = (0);

desmo.dom.keygen.cljs$lang$applyTo = ((function (ctor__19262__auto___20184){
return (function (seq20067){
return desmo.dom.keygen.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20067));
});})(ctor__19262__auto___20184))
;

var ctor__19262__auto___20185 = desmo.dom.constructor("label");
desmo.dom.label = ((function (ctor__19262__auto___20185){
return (function desmo$dom$label(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.label.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20185))
;

desmo.dom.label.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20185){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20185,args__19263__auto__);
});})(ctor__19262__auto___20185))
;

desmo.dom.label.cljs$lang$maxFixedArity = (0);

desmo.dom.label.cljs$lang$applyTo = ((function (ctor__19262__auto___20185){
return (function (seq20068){
return desmo.dom.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20068));
});})(ctor__19262__auto___20185))
;

var ctor__19262__auto___20186 = desmo.dom.constructor("legend");
desmo.dom.legend = ((function (ctor__19262__auto___20186){
return (function desmo$dom$legend(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.legend.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20186))
;

desmo.dom.legend.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20186){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20186,args__19263__auto__);
});})(ctor__19262__auto___20186))
;

desmo.dom.legend.cljs$lang$maxFixedArity = (0);

desmo.dom.legend.cljs$lang$applyTo = ((function (ctor__19262__auto___20186){
return (function (seq20069){
return desmo.dom.legend.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20069));
});})(ctor__19262__auto___20186))
;

var ctor__19262__auto___20187 = desmo.dom.constructor("li");
desmo.dom.li = ((function (ctor__19262__auto___20187){
return (function desmo$dom$li(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.li.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20187))
;

desmo.dom.li.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20187){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20187,args__19263__auto__);
});})(ctor__19262__auto___20187))
;

desmo.dom.li.cljs$lang$maxFixedArity = (0);

desmo.dom.li.cljs$lang$applyTo = ((function (ctor__19262__auto___20187){
return (function (seq20070){
return desmo.dom.li.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20070));
});})(ctor__19262__auto___20187))
;

var ctor__19262__auto___20188 = desmo.dom.constructor("link");
desmo.dom.link = ((function (ctor__19262__auto___20188){
return (function desmo$dom$link(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.link.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20188))
;

desmo.dom.link.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20188){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20188,args__19263__auto__);
});})(ctor__19262__auto___20188))
;

desmo.dom.link.cljs$lang$maxFixedArity = (0);

desmo.dom.link.cljs$lang$applyTo = ((function (ctor__19262__auto___20188){
return (function (seq20071){
return desmo.dom.link.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20071));
});})(ctor__19262__auto___20188))
;

var ctor__19262__auto___20189 = desmo.dom.constructor("main");
desmo.dom.main = ((function (ctor__19262__auto___20189){
return (function desmo$dom$main(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.main.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20189))
;

desmo.dom.main.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20189){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20189,args__19263__auto__);
});})(ctor__19262__auto___20189))
;

desmo.dom.main.cljs$lang$maxFixedArity = (0);

desmo.dom.main.cljs$lang$applyTo = ((function (ctor__19262__auto___20189){
return (function (seq20072){
return desmo.dom.main.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20072));
});})(ctor__19262__auto___20189))
;

var ctor__19262__auto___20190 = desmo.dom.constructor("map");
desmo.dom.map = ((function (ctor__19262__auto___20190){
return (function desmo$dom$map(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.map.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20190))
;

desmo.dom.map.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20190){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20190,args__19263__auto__);
});})(ctor__19262__auto___20190))
;

desmo.dom.map.cljs$lang$maxFixedArity = (0);

desmo.dom.map.cljs$lang$applyTo = ((function (ctor__19262__auto___20190){
return (function (seq20073){
return desmo.dom.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20073));
});})(ctor__19262__auto___20190))
;

var ctor__19262__auto___20191 = desmo.dom.constructor("mark");
desmo.dom.mark = ((function (ctor__19262__auto___20191){
return (function desmo$dom$mark(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.mark.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20191))
;

desmo.dom.mark.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20191){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20191,args__19263__auto__);
});})(ctor__19262__auto___20191))
;

desmo.dom.mark.cljs$lang$maxFixedArity = (0);

desmo.dom.mark.cljs$lang$applyTo = ((function (ctor__19262__auto___20191){
return (function (seq20074){
return desmo.dom.mark.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20074));
});})(ctor__19262__auto___20191))
;

var ctor__19262__auto___20192 = desmo.dom.constructor("menu");
desmo.dom.menu = ((function (ctor__19262__auto___20192){
return (function desmo$dom$menu(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.menu.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20192))
;

desmo.dom.menu.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20192){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20192,args__19263__auto__);
});})(ctor__19262__auto___20192))
;

desmo.dom.menu.cljs$lang$maxFixedArity = (0);

desmo.dom.menu.cljs$lang$applyTo = ((function (ctor__19262__auto___20192){
return (function (seq20075){
return desmo.dom.menu.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20075));
});})(ctor__19262__auto___20192))
;

var ctor__19262__auto___20193 = desmo.dom.constructor("menuitem");
desmo.dom.menuitem = ((function (ctor__19262__auto___20193){
return (function desmo$dom$menuitem(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20193))
;

desmo.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20193){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20193,args__19263__auto__);
});})(ctor__19262__auto___20193))
;

desmo.dom.menuitem.cljs$lang$maxFixedArity = (0);

desmo.dom.menuitem.cljs$lang$applyTo = ((function (ctor__19262__auto___20193){
return (function (seq20076){
return desmo.dom.menuitem.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20076));
});})(ctor__19262__auto___20193))
;

var ctor__19262__auto___20194 = desmo.dom.constructor("meta");
desmo.dom.meta = ((function (ctor__19262__auto___20194){
return (function desmo$dom$meta(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.meta.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20194))
;

desmo.dom.meta.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20194){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20194,args__19263__auto__);
});})(ctor__19262__auto___20194))
;

desmo.dom.meta.cljs$lang$maxFixedArity = (0);

desmo.dom.meta.cljs$lang$applyTo = ((function (ctor__19262__auto___20194){
return (function (seq20077){
return desmo.dom.meta.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20077));
});})(ctor__19262__auto___20194))
;

var ctor__19262__auto___20195 = desmo.dom.constructor("meter");
desmo.dom.meter = ((function (ctor__19262__auto___20195){
return (function desmo$dom$meter(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.meter.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20195))
;

desmo.dom.meter.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20195){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20195,args__19263__auto__);
});})(ctor__19262__auto___20195))
;

desmo.dom.meter.cljs$lang$maxFixedArity = (0);

desmo.dom.meter.cljs$lang$applyTo = ((function (ctor__19262__auto___20195){
return (function (seq20078){
return desmo.dom.meter.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20078));
});})(ctor__19262__auto___20195))
;

var ctor__19262__auto___20196 = desmo.dom.constructor("nav");
desmo.dom.nav = ((function (ctor__19262__auto___20196){
return (function desmo$dom$nav(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.nav.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20196))
;

desmo.dom.nav.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20196){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20196,args__19263__auto__);
});})(ctor__19262__auto___20196))
;

desmo.dom.nav.cljs$lang$maxFixedArity = (0);

desmo.dom.nav.cljs$lang$applyTo = ((function (ctor__19262__auto___20196){
return (function (seq20079){
return desmo.dom.nav.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20079));
});})(ctor__19262__auto___20196))
;

var ctor__19262__auto___20197 = desmo.dom.constructor("noscript");
desmo.dom.noscript = ((function (ctor__19262__auto___20197){
return (function desmo$dom$noscript(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20197))
;

desmo.dom.noscript.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20197){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20197,args__19263__auto__);
});})(ctor__19262__auto___20197))
;

desmo.dom.noscript.cljs$lang$maxFixedArity = (0);

desmo.dom.noscript.cljs$lang$applyTo = ((function (ctor__19262__auto___20197){
return (function (seq20080){
return desmo.dom.noscript.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20080));
});})(ctor__19262__auto___20197))
;

var ctor__19262__auto___20198 = desmo.dom.constructor("object");
desmo.dom.object = ((function (ctor__19262__auto___20198){
return (function desmo$dom$object(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.object.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20198))
;

desmo.dom.object.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20198){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20198,args__19263__auto__);
});})(ctor__19262__auto___20198))
;

desmo.dom.object.cljs$lang$maxFixedArity = (0);

desmo.dom.object.cljs$lang$applyTo = ((function (ctor__19262__auto___20198){
return (function (seq20081){
return desmo.dom.object.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20081));
});})(ctor__19262__auto___20198))
;

var ctor__19262__auto___20199 = desmo.dom.constructor("ol");
desmo.dom.ol = ((function (ctor__19262__auto___20199){
return (function desmo$dom$ol(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.ol.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20199))
;

desmo.dom.ol.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20199){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20199,args__19263__auto__);
});})(ctor__19262__auto___20199))
;

desmo.dom.ol.cljs$lang$maxFixedArity = (0);

desmo.dom.ol.cljs$lang$applyTo = ((function (ctor__19262__auto___20199){
return (function (seq20082){
return desmo.dom.ol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20082));
});})(ctor__19262__auto___20199))
;

var ctor__19262__auto___20200 = desmo.dom.constructor("optgroup");
desmo.dom.optgroup = ((function (ctor__19262__auto___20200){
return (function desmo$dom$optgroup(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20200))
;

desmo.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20200){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20200,args__19263__auto__);
});})(ctor__19262__auto___20200))
;

desmo.dom.optgroup.cljs$lang$maxFixedArity = (0);

desmo.dom.optgroup.cljs$lang$applyTo = ((function (ctor__19262__auto___20200){
return (function (seq20083){
return desmo.dom.optgroup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20083));
});})(ctor__19262__auto___20200))
;

var ctor__19262__auto___20201 = desmo.dom.constructor("option");
desmo.dom.option = ((function (ctor__19262__auto___20201){
return (function desmo$dom$option(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.option.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20201))
;

desmo.dom.option.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20201){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20201,args__19263__auto__);
});})(ctor__19262__auto___20201))
;

desmo.dom.option.cljs$lang$maxFixedArity = (0);

desmo.dom.option.cljs$lang$applyTo = ((function (ctor__19262__auto___20201){
return (function (seq20084){
return desmo.dom.option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20084));
});})(ctor__19262__auto___20201))
;

var ctor__19262__auto___20202 = desmo.dom.constructor("output");
desmo.dom.output = ((function (ctor__19262__auto___20202){
return (function desmo$dom$output(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.output.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20202))
;

desmo.dom.output.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20202){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20202,args__19263__auto__);
});})(ctor__19262__auto___20202))
;

desmo.dom.output.cljs$lang$maxFixedArity = (0);

desmo.dom.output.cljs$lang$applyTo = ((function (ctor__19262__auto___20202){
return (function (seq20085){
return desmo.dom.output.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20085));
});})(ctor__19262__auto___20202))
;

var ctor__19262__auto___20203 = desmo.dom.constructor("p");
desmo.dom.p = ((function (ctor__19262__auto___20203){
return (function desmo$dom$p(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.p.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20203))
;

desmo.dom.p.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20203){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20203,args__19263__auto__);
});})(ctor__19262__auto___20203))
;

desmo.dom.p.cljs$lang$maxFixedArity = (0);

desmo.dom.p.cljs$lang$applyTo = ((function (ctor__19262__auto___20203){
return (function (seq20086){
return desmo.dom.p.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20086));
});})(ctor__19262__auto___20203))
;

var ctor__19262__auto___20204 = desmo.dom.constructor("param");
desmo.dom.param = ((function (ctor__19262__auto___20204){
return (function desmo$dom$param(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.param.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20204))
;

desmo.dom.param.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20204){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20204,args__19263__auto__);
});})(ctor__19262__auto___20204))
;

desmo.dom.param.cljs$lang$maxFixedArity = (0);

desmo.dom.param.cljs$lang$applyTo = ((function (ctor__19262__auto___20204){
return (function (seq20087){
return desmo.dom.param.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20087));
});})(ctor__19262__auto___20204))
;

var ctor__19262__auto___20205 = desmo.dom.constructor("pre");
desmo.dom.pre = ((function (ctor__19262__auto___20205){
return (function desmo$dom$pre(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.pre.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20205))
;

desmo.dom.pre.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20205){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20205,args__19263__auto__);
});})(ctor__19262__auto___20205))
;

desmo.dom.pre.cljs$lang$maxFixedArity = (0);

desmo.dom.pre.cljs$lang$applyTo = ((function (ctor__19262__auto___20205){
return (function (seq20088){
return desmo.dom.pre.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20088));
});})(ctor__19262__auto___20205))
;

var ctor__19262__auto___20206 = desmo.dom.constructor("progress");
desmo.dom.progress = ((function (ctor__19262__auto___20206){
return (function desmo$dom$progress(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20206))
;

desmo.dom.progress.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20206){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20206,args__19263__auto__);
});})(ctor__19262__auto___20206))
;

desmo.dom.progress.cljs$lang$maxFixedArity = (0);

desmo.dom.progress.cljs$lang$applyTo = ((function (ctor__19262__auto___20206){
return (function (seq20089){
return desmo.dom.progress.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20089));
});})(ctor__19262__auto___20206))
;

var ctor__19262__auto___20207 = desmo.dom.constructor("q");
desmo.dom.q = ((function (ctor__19262__auto___20207){
return (function desmo$dom$q(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.q.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20207))
;

desmo.dom.q.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20207){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20207,args__19263__auto__);
});})(ctor__19262__auto___20207))
;

desmo.dom.q.cljs$lang$maxFixedArity = (0);

desmo.dom.q.cljs$lang$applyTo = ((function (ctor__19262__auto___20207){
return (function (seq20090){
return desmo.dom.q.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20090));
});})(ctor__19262__auto___20207))
;

var ctor__19262__auto___20208 = desmo.dom.constructor("rp");
desmo.dom.rp = ((function (ctor__19262__auto___20208){
return (function desmo$dom$rp(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.rp.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20208))
;

desmo.dom.rp.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20208){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20208,args__19263__auto__);
});})(ctor__19262__auto___20208))
;

desmo.dom.rp.cljs$lang$maxFixedArity = (0);

desmo.dom.rp.cljs$lang$applyTo = ((function (ctor__19262__auto___20208){
return (function (seq20091){
return desmo.dom.rp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20091));
});})(ctor__19262__auto___20208))
;

var ctor__19262__auto___20209 = desmo.dom.constructor("rt");
desmo.dom.rt = ((function (ctor__19262__auto___20209){
return (function desmo$dom$rt(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.rt.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20209))
;

desmo.dom.rt.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20209){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20209,args__19263__auto__);
});})(ctor__19262__auto___20209))
;

desmo.dom.rt.cljs$lang$maxFixedArity = (0);

desmo.dom.rt.cljs$lang$applyTo = ((function (ctor__19262__auto___20209){
return (function (seq20092){
return desmo.dom.rt.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20092));
});})(ctor__19262__auto___20209))
;

var ctor__19262__auto___20210 = desmo.dom.constructor("ruby");
desmo.dom.ruby = ((function (ctor__19262__auto___20210){
return (function desmo$dom$ruby(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20210))
;

desmo.dom.ruby.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20210){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20210,args__19263__auto__);
});})(ctor__19262__auto___20210))
;

desmo.dom.ruby.cljs$lang$maxFixedArity = (0);

desmo.dom.ruby.cljs$lang$applyTo = ((function (ctor__19262__auto___20210){
return (function (seq20093){
return desmo.dom.ruby.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20093));
});})(ctor__19262__auto___20210))
;

var ctor__19262__auto___20211 = desmo.dom.constructor("s");
desmo.dom.s = ((function (ctor__19262__auto___20211){
return (function desmo$dom$s(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.s.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20211))
;

desmo.dom.s.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20211){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20211,args__19263__auto__);
});})(ctor__19262__auto___20211))
;

desmo.dom.s.cljs$lang$maxFixedArity = (0);

desmo.dom.s.cljs$lang$applyTo = ((function (ctor__19262__auto___20211){
return (function (seq20094){
return desmo.dom.s.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20094));
});})(ctor__19262__auto___20211))
;

var ctor__19262__auto___20212 = desmo.dom.constructor("samp");
desmo.dom.samp = ((function (ctor__19262__auto___20212){
return (function desmo$dom$samp(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.samp.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20212))
;

desmo.dom.samp.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20212){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20212,args__19263__auto__);
});})(ctor__19262__auto___20212))
;

desmo.dom.samp.cljs$lang$maxFixedArity = (0);

desmo.dom.samp.cljs$lang$applyTo = ((function (ctor__19262__auto___20212){
return (function (seq20095){
return desmo.dom.samp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20095));
});})(ctor__19262__auto___20212))
;

var ctor__19262__auto___20213 = desmo.dom.constructor("script");
desmo.dom.script = ((function (ctor__19262__auto___20213){
return (function desmo$dom$script(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.script.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20213))
;

desmo.dom.script.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20213){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20213,args__19263__auto__);
});})(ctor__19262__auto___20213))
;

desmo.dom.script.cljs$lang$maxFixedArity = (0);

desmo.dom.script.cljs$lang$applyTo = ((function (ctor__19262__auto___20213){
return (function (seq20096){
return desmo.dom.script.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20096));
});})(ctor__19262__auto___20213))
;

var ctor__19262__auto___20214 = desmo.dom.constructor("section");
desmo.dom.section = ((function (ctor__19262__auto___20214){
return (function desmo$dom$section(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.section.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20214))
;

desmo.dom.section.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20214){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20214,args__19263__auto__);
});})(ctor__19262__auto___20214))
;

desmo.dom.section.cljs$lang$maxFixedArity = (0);

desmo.dom.section.cljs$lang$applyTo = ((function (ctor__19262__auto___20214){
return (function (seq20097){
return desmo.dom.section.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20097));
});})(ctor__19262__auto___20214))
;

var ctor__19262__auto___20215 = desmo.dom.constructor("select");
desmo.dom.select = ((function (ctor__19262__auto___20215){
return (function desmo$dom$select(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.select.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20215))
;

desmo.dom.select.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20215){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20215,args__19263__auto__);
});})(ctor__19262__auto___20215))
;

desmo.dom.select.cljs$lang$maxFixedArity = (0);

desmo.dom.select.cljs$lang$applyTo = ((function (ctor__19262__auto___20215){
return (function (seq20098){
return desmo.dom.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20098));
});})(ctor__19262__auto___20215))
;

var ctor__19262__auto___20216 = desmo.dom.constructor("small");
desmo.dom.small = ((function (ctor__19262__auto___20216){
return (function desmo$dom$small(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.small.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20216))
;

desmo.dom.small.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20216){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20216,args__19263__auto__);
});})(ctor__19262__auto___20216))
;

desmo.dom.small.cljs$lang$maxFixedArity = (0);

desmo.dom.small.cljs$lang$applyTo = ((function (ctor__19262__auto___20216){
return (function (seq20099){
return desmo.dom.small.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20099));
});})(ctor__19262__auto___20216))
;

var ctor__19262__auto___20217 = desmo.dom.constructor("source");
desmo.dom.source = ((function (ctor__19262__auto___20217){
return (function desmo$dom$source(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.source.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20217))
;

desmo.dom.source.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20217){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20217,args__19263__auto__);
});})(ctor__19262__auto___20217))
;

desmo.dom.source.cljs$lang$maxFixedArity = (0);

desmo.dom.source.cljs$lang$applyTo = ((function (ctor__19262__auto___20217){
return (function (seq20100){
return desmo.dom.source.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20100));
});})(ctor__19262__auto___20217))
;

var ctor__19262__auto___20218 = desmo.dom.constructor("span");
desmo.dom.span = ((function (ctor__19262__auto___20218){
return (function desmo$dom$span(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.span.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20218))
;

desmo.dom.span.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20218){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20218,args__19263__auto__);
});})(ctor__19262__auto___20218))
;

desmo.dom.span.cljs$lang$maxFixedArity = (0);

desmo.dom.span.cljs$lang$applyTo = ((function (ctor__19262__auto___20218){
return (function (seq20101){
return desmo.dom.span.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20101));
});})(ctor__19262__auto___20218))
;

var ctor__19262__auto___20219 = desmo.dom.constructor("strong");
desmo.dom.strong = ((function (ctor__19262__auto___20219){
return (function desmo$dom$strong(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.strong.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20219))
;

desmo.dom.strong.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20219){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20219,args__19263__auto__);
});})(ctor__19262__auto___20219))
;

desmo.dom.strong.cljs$lang$maxFixedArity = (0);

desmo.dom.strong.cljs$lang$applyTo = ((function (ctor__19262__auto___20219){
return (function (seq20102){
return desmo.dom.strong.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20102));
});})(ctor__19262__auto___20219))
;

var ctor__19262__auto___20220 = desmo.dom.constructor("style");
desmo.dom.style = ((function (ctor__19262__auto___20220){
return (function desmo$dom$style(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.style.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20220))
;

desmo.dom.style.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20220){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20220,args__19263__auto__);
});})(ctor__19262__auto___20220))
;

desmo.dom.style.cljs$lang$maxFixedArity = (0);

desmo.dom.style.cljs$lang$applyTo = ((function (ctor__19262__auto___20220){
return (function (seq20103){
return desmo.dom.style.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20103));
});})(ctor__19262__auto___20220))
;

var ctor__19262__auto___20221 = desmo.dom.constructor("sub");
desmo.dom.sub = ((function (ctor__19262__auto___20221){
return (function desmo$dom$sub(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.sub.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20221))
;

desmo.dom.sub.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20221){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20221,args__19263__auto__);
});})(ctor__19262__auto___20221))
;

desmo.dom.sub.cljs$lang$maxFixedArity = (0);

desmo.dom.sub.cljs$lang$applyTo = ((function (ctor__19262__auto___20221){
return (function (seq20104){
return desmo.dom.sub.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20104));
});})(ctor__19262__auto___20221))
;

var ctor__19262__auto___20222 = desmo.dom.constructor("summary");
desmo.dom.summary = ((function (ctor__19262__auto___20222){
return (function desmo$dom$summary(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.summary.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20222))
;

desmo.dom.summary.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20222){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20222,args__19263__auto__);
});})(ctor__19262__auto___20222))
;

desmo.dom.summary.cljs$lang$maxFixedArity = (0);

desmo.dom.summary.cljs$lang$applyTo = ((function (ctor__19262__auto___20222){
return (function (seq20105){
return desmo.dom.summary.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20105));
});})(ctor__19262__auto___20222))
;

var ctor__19262__auto___20223 = desmo.dom.constructor("sup");
desmo.dom.sup = ((function (ctor__19262__auto___20223){
return (function desmo$dom$sup(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.sup.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20223))
;

desmo.dom.sup.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20223){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20223,args__19263__auto__);
});})(ctor__19262__auto___20223))
;

desmo.dom.sup.cljs$lang$maxFixedArity = (0);

desmo.dom.sup.cljs$lang$applyTo = ((function (ctor__19262__auto___20223){
return (function (seq20106){
return desmo.dom.sup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20106));
});})(ctor__19262__auto___20223))
;

var ctor__19262__auto___20224 = desmo.dom.constructor("table");
desmo.dom.table = ((function (ctor__19262__auto___20224){
return (function desmo$dom$table(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.table.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20224))
;

desmo.dom.table.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20224){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20224,args__19263__auto__);
});})(ctor__19262__auto___20224))
;

desmo.dom.table.cljs$lang$maxFixedArity = (0);

desmo.dom.table.cljs$lang$applyTo = ((function (ctor__19262__auto___20224){
return (function (seq20107){
return desmo.dom.table.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20107));
});})(ctor__19262__auto___20224))
;

var ctor__19262__auto___20225 = desmo.dom.constructor("tbody");
desmo.dom.tbody = ((function (ctor__19262__auto___20225){
return (function desmo$dom$tbody(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20225))
;

desmo.dom.tbody.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20225){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20225,args__19263__auto__);
});})(ctor__19262__auto___20225))
;

desmo.dom.tbody.cljs$lang$maxFixedArity = (0);

desmo.dom.tbody.cljs$lang$applyTo = ((function (ctor__19262__auto___20225){
return (function (seq20108){
return desmo.dom.tbody.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20108));
});})(ctor__19262__auto___20225))
;

var ctor__19262__auto___20226 = desmo.dom.constructor("td");
desmo.dom.td = ((function (ctor__19262__auto___20226){
return (function desmo$dom$td(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.td.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20226))
;

desmo.dom.td.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20226){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20226,args__19263__auto__);
});})(ctor__19262__auto___20226))
;

desmo.dom.td.cljs$lang$maxFixedArity = (0);

desmo.dom.td.cljs$lang$applyTo = ((function (ctor__19262__auto___20226){
return (function (seq20109){
return desmo.dom.td.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20109));
});})(ctor__19262__auto___20226))
;

var ctor__19262__auto___20227 = desmo.dom.constructor("textarea");
desmo.dom.textarea = ((function (ctor__19262__auto___20227){
return (function desmo$dom$textarea(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20227))
;

desmo.dom.textarea.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20227){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20227,args__19263__auto__);
});})(ctor__19262__auto___20227))
;

desmo.dom.textarea.cljs$lang$maxFixedArity = (0);

desmo.dom.textarea.cljs$lang$applyTo = ((function (ctor__19262__auto___20227){
return (function (seq20110){
return desmo.dom.textarea.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20110));
});})(ctor__19262__auto___20227))
;

var ctor__19262__auto___20228 = desmo.dom.constructor("tfoot");
desmo.dom.tfoot = ((function (ctor__19262__auto___20228){
return (function desmo$dom$tfoot(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20228))
;

desmo.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20228){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20228,args__19263__auto__);
});})(ctor__19262__auto___20228))
;

desmo.dom.tfoot.cljs$lang$maxFixedArity = (0);

desmo.dom.tfoot.cljs$lang$applyTo = ((function (ctor__19262__auto___20228){
return (function (seq20111){
return desmo.dom.tfoot.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20111));
});})(ctor__19262__auto___20228))
;

var ctor__19262__auto___20229 = desmo.dom.constructor("th");
desmo.dom.th = ((function (ctor__19262__auto___20229){
return (function desmo$dom$th(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.th.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20229))
;

desmo.dom.th.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20229){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20229,args__19263__auto__);
});})(ctor__19262__auto___20229))
;

desmo.dom.th.cljs$lang$maxFixedArity = (0);

desmo.dom.th.cljs$lang$applyTo = ((function (ctor__19262__auto___20229){
return (function (seq20112){
return desmo.dom.th.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20112));
});})(ctor__19262__auto___20229))
;

var ctor__19262__auto___20230 = desmo.dom.constructor("thead");
desmo.dom.thead = ((function (ctor__19262__auto___20230){
return (function desmo$dom$thead(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.thead.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20230))
;

desmo.dom.thead.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20230){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20230,args__19263__auto__);
});})(ctor__19262__auto___20230))
;

desmo.dom.thead.cljs$lang$maxFixedArity = (0);

desmo.dom.thead.cljs$lang$applyTo = ((function (ctor__19262__auto___20230){
return (function (seq20113){
return desmo.dom.thead.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20113));
});})(ctor__19262__auto___20230))
;

var ctor__19262__auto___20231 = desmo.dom.constructor("time");
desmo.dom.time = ((function (ctor__19262__auto___20231){
return (function desmo$dom$time(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.time.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20231))
;

desmo.dom.time.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20231){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20231,args__19263__auto__);
});})(ctor__19262__auto___20231))
;

desmo.dom.time.cljs$lang$maxFixedArity = (0);

desmo.dom.time.cljs$lang$applyTo = ((function (ctor__19262__auto___20231){
return (function (seq20114){
return desmo.dom.time.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20114));
});})(ctor__19262__auto___20231))
;

var ctor__19262__auto___20232 = desmo.dom.constructor("title");
desmo.dom.title = ((function (ctor__19262__auto___20232){
return (function desmo$dom$title(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.title.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20232))
;

desmo.dom.title.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20232){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20232,args__19263__auto__);
});})(ctor__19262__auto___20232))
;

desmo.dom.title.cljs$lang$maxFixedArity = (0);

desmo.dom.title.cljs$lang$applyTo = ((function (ctor__19262__auto___20232){
return (function (seq20115){
return desmo.dom.title.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20115));
});})(ctor__19262__auto___20232))
;

var ctor__19262__auto___20233 = desmo.dom.constructor("tr");
desmo.dom.tr = ((function (ctor__19262__auto___20233){
return (function desmo$dom$tr(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.tr.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20233))
;

desmo.dom.tr.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20233){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20233,args__19263__auto__);
});})(ctor__19262__auto___20233))
;

desmo.dom.tr.cljs$lang$maxFixedArity = (0);

desmo.dom.tr.cljs$lang$applyTo = ((function (ctor__19262__auto___20233){
return (function (seq20116){
return desmo.dom.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20116));
});})(ctor__19262__auto___20233))
;

var ctor__19262__auto___20234 = desmo.dom.constructor("track");
desmo.dom.track = ((function (ctor__19262__auto___20234){
return (function desmo$dom$track(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.track.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20234))
;

desmo.dom.track.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20234){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20234,args__19263__auto__);
});})(ctor__19262__auto___20234))
;

desmo.dom.track.cljs$lang$maxFixedArity = (0);

desmo.dom.track.cljs$lang$applyTo = ((function (ctor__19262__auto___20234){
return (function (seq20117){
return desmo.dom.track.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20117));
});})(ctor__19262__auto___20234))
;

var ctor__19262__auto___20235 = desmo.dom.constructor("u");
desmo.dom.u = ((function (ctor__19262__auto___20235){
return (function desmo$dom$u(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.u.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20235))
;

desmo.dom.u.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20235){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20235,args__19263__auto__);
});})(ctor__19262__auto___20235))
;

desmo.dom.u.cljs$lang$maxFixedArity = (0);

desmo.dom.u.cljs$lang$applyTo = ((function (ctor__19262__auto___20235){
return (function (seq20118){
return desmo.dom.u.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20118));
});})(ctor__19262__auto___20235))
;

var ctor__19262__auto___20236 = desmo.dom.constructor("ul");
desmo.dom.ul = ((function (ctor__19262__auto___20236){
return (function desmo$dom$ul(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.ul.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20236))
;

desmo.dom.ul.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20236){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20236,args__19263__auto__);
});})(ctor__19262__auto___20236))
;

desmo.dom.ul.cljs$lang$maxFixedArity = (0);

desmo.dom.ul.cljs$lang$applyTo = ((function (ctor__19262__auto___20236){
return (function (seq20119){
return desmo.dom.ul.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20119));
});})(ctor__19262__auto___20236))
;

var ctor__19262__auto___20237 = desmo.dom.constructor("var");
desmo.dom.var$ = ((function (ctor__19262__auto___20237){
return (function desmo$dom$var(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.var$.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20237))
;

desmo.dom.var$.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20237){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20237,args__19263__auto__);
});})(ctor__19262__auto___20237))
;

desmo.dom.var$.cljs$lang$maxFixedArity = (0);

desmo.dom.var$.cljs$lang$applyTo = ((function (ctor__19262__auto___20237){
return (function (seq20120){
return desmo.dom.var$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20120));
});})(ctor__19262__auto___20237))
;

var ctor__19262__auto___20238 = desmo.dom.constructor("video");
desmo.dom.video = ((function (ctor__19262__auto___20238){
return (function desmo$dom$video(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.video.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20238))
;

desmo.dom.video.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20238){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20238,args__19263__auto__);
});})(ctor__19262__auto___20238))
;

desmo.dom.video.cljs$lang$maxFixedArity = (0);

desmo.dom.video.cljs$lang$applyTo = ((function (ctor__19262__auto___20238){
return (function (seq20121){
return desmo.dom.video.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20121));
});})(ctor__19262__auto___20238))
;

var ctor__19262__auto___20239 = desmo.dom.constructor("wbr");
desmo.dom.wbr = ((function (ctor__19262__auto___20239){
return (function desmo$dom$wbr(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20239))
;

desmo.dom.wbr.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20239){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20239,args__19263__auto__);
});})(ctor__19262__auto___20239))
;

desmo.dom.wbr.cljs$lang$maxFixedArity = (0);

desmo.dom.wbr.cljs$lang$applyTo = ((function (ctor__19262__auto___20239){
return (function (seq20122){
return desmo.dom.wbr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20122));
});})(ctor__19262__auto___20239))
;

var ctor__19262__auto___20240 = desmo.dom.constructor("circle");
desmo.dom.circle = ((function (ctor__19262__auto___20240){
return (function desmo$dom$circle(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.circle.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20240))
;

desmo.dom.circle.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20240){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20240,args__19263__auto__);
});})(ctor__19262__auto___20240))
;

desmo.dom.circle.cljs$lang$maxFixedArity = (0);

desmo.dom.circle.cljs$lang$applyTo = ((function (ctor__19262__auto___20240){
return (function (seq20123){
return desmo.dom.circle.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20123));
});})(ctor__19262__auto___20240))
;

var ctor__19262__auto___20241 = desmo.dom.constructor("g");
desmo.dom.g = ((function (ctor__19262__auto___20241){
return (function desmo$dom$g(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.g.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20241))
;

desmo.dom.g.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20241){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20241,args__19263__auto__);
});})(ctor__19262__auto___20241))
;

desmo.dom.g.cljs$lang$maxFixedArity = (0);

desmo.dom.g.cljs$lang$applyTo = ((function (ctor__19262__auto___20241){
return (function (seq20124){
return desmo.dom.g.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20124));
});})(ctor__19262__auto___20241))
;

var ctor__19262__auto___20242 = desmo.dom.constructor("line");
desmo.dom.line = ((function (ctor__19262__auto___20242){
return (function desmo$dom$line(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.line.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20242))
;

desmo.dom.line.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20242){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20242,args__19263__auto__);
});})(ctor__19262__auto___20242))
;

desmo.dom.line.cljs$lang$maxFixedArity = (0);

desmo.dom.line.cljs$lang$applyTo = ((function (ctor__19262__auto___20242){
return (function (seq20125){
return desmo.dom.line.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20125));
});})(ctor__19262__auto___20242))
;

var ctor__19262__auto___20243 = desmo.dom.constructor("path");
desmo.dom.path = ((function (ctor__19262__auto___20243){
return (function desmo$dom$path(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.path.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20243))
;

desmo.dom.path.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20243){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20243,args__19263__auto__);
});})(ctor__19262__auto___20243))
;

desmo.dom.path.cljs$lang$maxFixedArity = (0);

desmo.dom.path.cljs$lang$applyTo = ((function (ctor__19262__auto___20243){
return (function (seq20126){
return desmo.dom.path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20126));
});})(ctor__19262__auto___20243))
;

var ctor__19262__auto___20244 = desmo.dom.constructor("polygon");
desmo.dom.polygon = ((function (ctor__19262__auto___20244){
return (function desmo$dom$polygon(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20244))
;

desmo.dom.polygon.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20244){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20244,args__19263__auto__);
});})(ctor__19262__auto___20244))
;

desmo.dom.polygon.cljs$lang$maxFixedArity = (0);

desmo.dom.polygon.cljs$lang$applyTo = ((function (ctor__19262__auto___20244){
return (function (seq20127){
return desmo.dom.polygon.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20127));
});})(ctor__19262__auto___20244))
;

var ctor__19262__auto___20245 = desmo.dom.constructor("polyline");
desmo.dom.polyline = ((function (ctor__19262__auto___20245){
return (function desmo$dom$polyline(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20245))
;

desmo.dom.polyline.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20245){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20245,args__19263__auto__);
});})(ctor__19262__auto___20245))
;

desmo.dom.polyline.cljs$lang$maxFixedArity = (0);

desmo.dom.polyline.cljs$lang$applyTo = ((function (ctor__19262__auto___20245){
return (function (seq20128){
return desmo.dom.polyline.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20128));
});})(ctor__19262__auto___20245))
;

var ctor__19262__auto___20246 = desmo.dom.constructor("rect");
desmo.dom.rect = ((function (ctor__19262__auto___20246){
return (function desmo$dom$rect(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.rect.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20246))
;

desmo.dom.rect.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20246){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20246,args__19263__auto__);
});})(ctor__19262__auto___20246))
;

desmo.dom.rect.cljs$lang$maxFixedArity = (0);

desmo.dom.rect.cljs$lang$applyTo = ((function (ctor__19262__auto___20246){
return (function (seq20129){
return desmo.dom.rect.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20129));
});})(ctor__19262__auto___20246))
;

var ctor__19262__auto___20247 = desmo.dom.constructor("svg");
desmo.dom.svg = ((function (ctor__19262__auto___20247){
return (function desmo$dom$svg(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return desmo.dom.svg.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});})(ctor__19262__auto___20247))
;

desmo.dom.svg.cljs$core$IFn$_invoke$arity$variadic = ((function (ctor__19262__auto___20247){
return (function (args__19263__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ctor__19262__auto___20247,args__19263__auto__);
});})(ctor__19262__auto___20247))
;

desmo.dom.svg.cljs$lang$maxFixedArity = (0);

desmo.dom.svg.cljs$lang$applyTo = ((function (ctor__19262__auto___20247){
return (function (seq20044){
return desmo.dom.svg.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq20044));
});})(ctor__19262__auto___20247))
;
