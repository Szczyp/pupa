// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('ossicone.core');
goog.require('cljs.core');
goog.require('ossicone.traversable');
goog.require('ossicone.monad');
goog.require('ossicone.applicative');
goog.require('ossicone.functor');
goog.require('ossicone.foldable');
ossicone.core.return$ = ossicone.applicative.return$;
ossicone.core.mapf = (function ossicone$core$mapf(){
var G__22102 = arguments.length;
switch (G__22102) {
case 2:
return ossicone.core.mapf.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5261__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return ossicone.core.mapf.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5261__auto__);

}
});

ossicone.core.mapf.cljs$core$IFn$_invoke$arity$2 = (function (f,a){
return ossicone.functor.mapf(f,a);
});

ossicone.core.mapf.cljs$core$IFn$_invoke$arity$variadic = (function (f,a,as){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(ossicone.applicative.ap,ossicone.functor.mapf(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.partial,f),a),as);
});

ossicone.core.mapf.cljs$lang$applyTo = (function (seq22098){
var G__22099 = cljs.core.first(seq22098);
var seq22098__$1 = cljs.core.next(seq22098);
var G__22100 = cljs.core.first(seq22098__$1);
var seq22098__$2 = cljs.core.next(seq22098__$1);
return ossicone.core.mapf.cljs$core$IFn$_invoke$arity$variadic(G__22099,G__22100,seq22098__$2);
});

ossicone.core.mapf.cljs$lang$maxFixedArity = (2);
ossicone.core.ap = ossicone.applicative.ap;
ossicone.core.bind = ossicone.monad.bind;
ossicone.core.fold = ossicone.foldable.fold;
ossicone.core.traverse = ossicone.traversable.traverse;
ossicone.core.compm = (function ossicone$core$compm(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ossicone.core.compm.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

ossicone.core.compm.cljs$core$IFn$_invoke$arity$variadic = (function (f,fs){
var vec__22106 = cljs.core.reverse(cljs.core.cons(f,fs));
var f__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22106,(0),null);
var fs__$1 = cljs.core.nthnext(vec__22106,(1));
return ((function (vec__22106,f__$1,fs__$1){
return (function (a){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(ossicone.core.bind,(function (){var G__22107 = a;
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__22107) : f__$1.call(null,G__22107));
})(),fs__$1);
});
;})(vec__22106,f__$1,fs__$1))
});

ossicone.core.compm.cljs$lang$maxFixedArity = (1);

ossicone.core.compm.cljs$lang$applyTo = (function (seq22104){
var G__22105 = cljs.core.first(seq22104);
var seq22104__$1 = cljs.core.next(seq22104);
return ossicone.core.compm.cljs$core$IFn$_invoke$arity$variadic(G__22105,seq22104__$1);
});
ossicone.core.mdo = (function ossicone$core$mdo(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return ossicone.core.mdo.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});

ossicone.core.mdo.cljs$core$IFn$_invoke$arity$variadic = (function (ms){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__22108_SHARP_,p2__22109_SHARP_){
return ossicone.core.mapf.cljs$core$IFn$_invoke$arity$variadic((function (_,a){
return a;
}),p1__22108_SHARP_,cljs.core.array_seq([p2__22109_SHARP_], 0));
}),(function (){var G__22111 = null;
return (ossicone.core.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.core.return$.cljs$core$IFn$_invoke$arity$1(G__22111) : ossicone.core.return$.call(null,G__22111));
})(),ms);
});

ossicone.core.mdo.cljs$lang$maxFixedArity = (0);

ossicone.core.mdo.cljs$lang$applyTo = (function (seq22110){
return ossicone.core.mdo.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22110));
});
