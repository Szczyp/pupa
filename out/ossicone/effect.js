// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('ossicone.effect');
goog.require('cljs.core');
goog.require('ossicone.functor');
goog.require('ossicone.applicative');
goog.require('ossicone.monad');

/**
* @constructor
*/
ossicone.effect.Effect = (function (effect_fn){
this.effect_fn = effect_fn;
})

ossicone.effect.Effect.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"effect-fn","effect-fn",2075947126,null)], null);
});

ossicone.effect.Effect.cljs$lang$type = true;

ossicone.effect.Effect.cljs$lang$ctorStr = "ossicone.effect/Effect";

ossicone.effect.Effect.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"ossicone.effect/Effect");
});

ossicone.effect.__GT_Effect = (function ossicone$effect$__GT_Effect(effect_fn){
return (new ossicone.effect.Effect(effect_fn));
});

ossicone.effect.effect = ossicone.effect.__GT_Effect;
ossicone.effect.run = (function ossicone$effect$run(){
var G__20548 = arguments.length;
switch (G__20548) {
case 1:
return ossicone.effect.run.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return ossicone.effect.run.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5261__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0)));
return ossicone.effect.run.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5261__auto__);

}
});

ossicone.effect.run.cljs$core$IFn$_invoke$arity$1 = (function (m){
return ossicone.effect.run.cljs$core$IFn$_invoke$arity$2(m,cljs.core.PersistentArrayMap.EMPTY);
});

ossicone.effect.run.cljs$core$IFn$_invoke$arity$2 = (function (m,s){
var vec__20549 = ossicone.applicative.coerce_return(m,(function (){var G__20550 = null;
return (ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1 ? ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1(G__20550) : ossicone.effect.effect.call(null,G__20550));
})());
var m__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20549,(0),null);
return m__$1.effect_fn(s);
});

ossicone.effect.run.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,v,kvs){
return ossicone.effect.run.cljs$core$IFn$_invoke$arity$2(m,cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.hash_map,k,v,kvs));
});

ossicone.effect.run.cljs$lang$applyTo = (function (seq20543){
var G__20544 = cljs.core.first(seq20543);
var seq20543__$1 = cljs.core.next(seq20543);
var G__20545 = cljs.core.first(seq20543__$1);
var seq20543__$2 = cljs.core.next(seq20543__$1);
var G__20546 = cljs.core.first(seq20543__$2);
var seq20543__$3 = cljs.core.next(seq20543__$2);
return ossicone.effect.run.cljs$core$IFn$_invoke$arity$variadic(G__20544,G__20545,G__20546,seq20543__$3);
});

ossicone.effect.run.cljs$lang$maxFixedArity = (3);
ossicone.effect.Effect.prototype.ossicone$functor$Functor$ = true;

ossicone.effect.Effect.prototype.ossicone$functor$Functor$mapf_STAR_$arity$2 = (function (this$,f){
var this$__$1 = this;
var G__20552 = ((function (this$__$1){
return (function (s){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(ossicone.effect.run.cljs$core$IFn$_invoke$arity$2(this$__$1,s),cljs.core.constant$keyword$result,f);
});})(this$__$1))
;
return (ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1 ? ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1(G__20552) : ossicone.effect.effect.call(null,G__20552));
});

ossicone.effect.Effect.prototype.ossicone$applicative$Applicative$ = true;

ossicone.effect.Effect.prototype.ossicone$applicative$Applicative$return_STAR_$arity$2 = (function (this$,a){
var this$__$1 = this;
var G__20553 = ((function (this$__$1){
return (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,cljs.core.constant$keyword$result,a);
});})(this$__$1))
;
return (ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1 ? ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1(G__20553) : ossicone.effect.effect.call(null,G__20553));
});

ossicone.effect.Effect.prototype.ossicone$applicative$Applicative$ap_STAR_$arity$2 = (function (this$,a){
var this$__$1 = this;
var G__20554 = ((function (this$__$1){
return (function (s){
var map__20555 = ossicone.effect.run.cljs$core$IFn$_invoke$arity$2(this$__$1,s);
var map__20555__$1 = ((cljs.core.seq_QMARK_(map__20555))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20555):map__20555);
var s__$1 = map__20555__$1;
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20555__$1,cljs.core.constant$keyword$result);
var s__$2 = ossicone.effect.run.cljs$core$IFn$_invoke$arity$2(a,s__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(s__$2,cljs.core.constant$keyword$result,f);
});})(this$__$1))
;
return (ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1 ? ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1(G__20554) : ossicone.effect.effect.call(null,G__20554));
});

ossicone.effect.Effect.prototype.ossicone$monad$Monad$ = true;

ossicone.effect.Effect.prototype.ossicone$monad$Monad$join_STAR_$arity$1 = (function (this$){
var this$__$1 = this;
var G__20556 = ((function (this$__$1){
return (function (s){
var map__20557 = ossicone.effect.run.cljs$core$IFn$_invoke$arity$2(this$__$1,s);
var map__20557__$1 = ((cljs.core.seq_QMARK_(map__20557))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20557):map__20557);
var s__$1 = map__20557__$1;
var m = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20557__$1,cljs.core.constant$keyword$result);
return ossicone.effect.run.cljs$core$IFn$_invoke$arity$2(m,s__$1);
});})(this$__$1))
;
return (ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1 ? ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1(G__20556) : ossicone.effect.effect.call(null,G__20556));
});
ossicone.effect.env = (function (){var G__20558 = (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,cljs.core.constant$keyword$result,cljs.core.constant$keyword$env.cljs$core$IFn$_invoke$arity$1(s));
});
return (ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1 ? ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1(G__20558) : ossicone.effect.effect.call(null,G__20558));
})();
ossicone.effect.state = (function (){var G__20559 = (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,cljs.core.constant$keyword$result,cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1(s));
});
return (ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1 ? ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1(G__20559) : ossicone.effect.effect.call(null,G__20559));
})();
ossicone.effect.put = (function ossicone$effect$put(ns){
var G__20561 = (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,cljs.core.constant$keyword$state,ns,cljs.core.array_seq([cljs.core.constant$keyword$result,ns], 0));
});
return (ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1 ? ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1(G__20561) : ossicone.effect.effect.call(null,G__20561));
});
ossicone.effect.modify = (function ossicone$effect$modify(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ossicone.effect.modify.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

ossicone.effect.modify.cljs$core$IFn$_invoke$arity$variadic = (function (f,args){
var G__20564 = (function (s){
var ns = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1(s),args);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(s,cljs.core.constant$keyword$state,ns,cljs.core.array_seq([cljs.core.constant$keyword$result,ns], 0));
});
return (ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1 ? ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1(G__20564) : ossicone.effect.effect.call(null,G__20564));
});

ossicone.effect.modify.cljs$lang$maxFixedArity = (1);

ossicone.effect.modify.cljs$lang$applyTo = (function (seq20562){
var G__20563 = cljs.core.first(seq20562);
var seq20562__$1 = cljs.core.next(seq20562);
return ossicone.effect.modify.cljs$core$IFn$_invoke$arity$variadic(G__20563,seq20562__$1);
});
ossicone.effect.log = (function ossicone$effect$log(m){
var G__20566 = (function (s){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(s,cljs.core.constant$keyword$log,cljs.core.conj,m),cljs.core.constant$keyword$result,null);
});
return (ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1 ? ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1(G__20566) : ossicone.effect.effect.call(null,G__20566));
});
ossicone.effect.local = (function ossicone$effect$local(){
var argseq__5250__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return ossicone.effect.local.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5250__auto__);
});

ossicone.effect.local.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,args){
var G__20570 = (function (s){
var ns = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,cljs.core.constant$keyword$env,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,cljs.core.constant$keyword$env.cljs$core$IFn$_invoke$arity$1(s),args));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s,cljs.core.select_keys(ossicone.effect.run.cljs$core$IFn$_invoke$arity$2(m,ns),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$result,cljs.core.constant$keyword$state], null))], 0));
});
return (ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1 ? ossicone.effect.effect.cljs$core$IFn$_invoke$arity$1(G__20570) : ossicone.effect.effect.call(null,G__20570));
});

ossicone.effect.local.cljs$lang$maxFixedArity = (2);

ossicone.effect.local.cljs$lang$applyTo = (function (seq20567){
var G__20568 = cljs.core.first(seq20567);
var seq20567__$1 = cljs.core.next(seq20567);
var G__20569 = cljs.core.first(seq20567__$1);
var seq20567__$2 = cljs.core.next(seq20567__$1);
return ossicone.effect.local.cljs$core$IFn$_invoke$arity$variadic(G__20568,G__20569,seq20567__$2);
});
