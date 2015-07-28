// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('ossicone.traversable');
goog.require('cljs.core');
goog.require('ossicone.functor');
goog.require('ossicone.applicative');
goog.require('ossicone.foldable');

ossicone.traversable.Traversable = (function (){var obj22139 = {};
return obj22139;
})();

ossicone.traversable.traverse_STAR_ = (function ossicone$traversable$traverse_STAR_(this$){
if((function (){var and__4198__auto__ = this$;
if(and__4198__auto__){
return this$.ossicone$traversable$Traversable$traverse_STAR_$arity$1;
} else {
return and__4198__auto__;
}
})()){
return this$.ossicone$traversable$Traversable$traverse_STAR_$arity$1(this$);
} else {
var x__4846__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4210__auto__ = (ossicone.traversable.traverse_STAR_[(function (){var G__22143 = x__4846__auto__;
return goog.typeOf(G__22143);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (ossicone.traversable.traverse_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Traversable.traverse*",this$);
}
}
})().call(null,this$);
}
});

cljs.core.List.prototype.ossicone$traversable$Traversable$ = true;

cljs.core.List.prototype.ossicone$traversable$Traversable$traverse_STAR_$arity$1 = (function (this$){
var this$__$1 = this;
return ossicone.functor.mapf(cljs.core.reverse,ossicone.foldable.fold(((function (this$__$1){
return (function (s,a){
return ossicone.applicative.ap.cljs$core$IFn$_invoke$arity$variadic((function (){var G__22145 = cljs.core.conj;
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__22145) : ossicone.applicative.return$.call(null,G__22145));
})(),cljs.core.array_seq([s,a], 0));
});})(this$__$1))
,(function (){var G__22146 = cljs.core.empty(this$__$1);
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__22146) : ossicone.applicative.return$.call(null,G__22146));
})(),this$__$1));
});

cljs.core.PersistentVector.prototype.ossicone$traversable$Traversable$ = true;

cljs.core.PersistentVector.prototype.ossicone$traversable$Traversable$traverse_STAR_$arity$1 = (function (this$){
var this$__$1 = this;
return ossicone.foldable.fold(((function (this$__$1){
return (function (s,a){
return ossicone.applicative.ap.cljs$core$IFn$_invoke$arity$variadic((function (){var G__22147 = cljs.core.conj;
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__22147) : ossicone.applicative.return$.call(null,G__22147));
})(),cljs.core.array_seq([s,a], 0));
});})(this$__$1))
,(function (){var G__22148 = cljs.core.empty(this$__$1);
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__22148) : ossicone.applicative.return$.call(null,G__22148));
})(),this$__$1);
});

cljs.core.LazySeq.prototype.ossicone$traversable$Traversable$ = true;

cljs.core.LazySeq.prototype.ossicone$traversable$Traversable$traverse_STAR_$arity$1 = (function (this$){
var this$__$1 = this;
return ossicone.functor.mapf(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p1__22144_SHARP_){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
return p1__22144_SHARP_;
});})(this$__$1))
,null,null));
});})(this$__$1))
,cljs.core.reverse),ossicone.foldable.fold(((function (this$__$1){
return (function (s,a){
return ossicone.applicative.ap.cljs$core$IFn$_invoke$arity$variadic((function (){var G__22149 = cljs.core.conj;
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__22149) : ossicone.applicative.return$.call(null,G__22149));
})(),cljs.core.array_seq([s,a], 0));
});})(this$__$1))
,(function (){var G__22150 = cljs.core.empty(this$__$1);
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__22150) : ossicone.applicative.return$.call(null,G__22150));
})(),this$__$1));
});

cljs.core.PersistentHashMap.prototype.ossicone$traversable$Traversable$ = true;

cljs.core.PersistentHashMap.prototype.ossicone$traversable$Traversable$traverse_STAR_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (s,p__22151){
var vec__22152 = p__22151;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22152,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22152,(1),null);
return ossicone.applicative.ap.cljs$core$IFn$_invoke$arity$variadic((function (){var G__22153 = cljs.core.conj;
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__22153) : ossicone.applicative.return$.call(null,G__22153));
})(),cljs.core.array_seq([s,ossicone.functor.mapf(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,k),v)], 0));
});})(this$__$1))
,(function (){var G__22154 = cljs.core.empty(this$__$1);
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__22154) : ossicone.applicative.return$.call(null,G__22154));
})(),this$__$1);
});

cljs.core.PersistentArrayMap.prototype.ossicone$traversable$Traversable$ = true;

cljs.core.PersistentArrayMap.prototype.ossicone$traversable$Traversable$traverse_STAR_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (s,p__22155){
var vec__22156 = p__22155;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22156,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22156,(1),null);
return ossicone.applicative.ap.cljs$core$IFn$_invoke$arity$variadic((function (){var G__22157 = cljs.core.conj;
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__22157) : ossicone.applicative.return$.call(null,G__22157));
})(),cljs.core.array_seq([s,ossicone.functor.mapf(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,k),v)], 0));
});})(this$__$1))
,(function (){var G__22158 = cljs.core.empty(this$__$1);
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__22158) : ossicone.applicative.return$.call(null,G__22158));
})(),this$__$1);
});

cljs.core.PersistentTreeMap.prototype.ossicone$traversable$Traversable$ = true;

cljs.core.PersistentTreeMap.prototype.ossicone$traversable$Traversable$traverse_STAR_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (s,p__22159){
var vec__22160 = p__22159;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22160,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22160,(1),null);
return ossicone.applicative.ap.cljs$core$IFn$_invoke$arity$variadic((function (){var G__22161 = cljs.core.conj;
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__22161) : ossicone.applicative.return$.call(null,G__22161));
})(),cljs.core.array_seq([s,ossicone.functor.mapf(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,k),v)], 0));
});})(this$__$1))
,(function (){var G__22162 = cljs.core.empty(this$__$1);
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__22162) : ossicone.applicative.return$.call(null,G__22162));
})(),this$__$1);
});

cljs.core.PersistentHashSet.prototype.ossicone$traversable$Traversable$ = true;

cljs.core.PersistentHashSet.prototype.ossicone$traversable$Traversable$traverse_STAR_$arity$1 = (function (this$){
var this$__$1 = this;
return ossicone.foldable.fold(((function (this$__$1){
return (function (s,a){
return ossicone.applicative.ap.cljs$core$IFn$_invoke$arity$variadic((function (){var G__22163 = cljs.core.conj;
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__22163) : ossicone.applicative.return$.call(null,G__22163));
})(),cljs.core.array_seq([s,a], 0));
});})(this$__$1))
,(function (){var G__22164 = cljs.core.empty(this$__$1);
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__22164) : ossicone.applicative.return$.call(null,G__22164));
})(),this$__$1);
});

cljs.core.PersistentTreeSet.prototype.ossicone$traversable$Traversable$ = true;

cljs.core.PersistentTreeSet.prototype.ossicone$traversable$Traversable$traverse_STAR_$arity$1 = (function (this$){
var this$__$1 = this;
return ossicone.foldable.fold(((function (this$__$1){
return (function (s,a){
return ossicone.applicative.ap.cljs$core$IFn$_invoke$arity$variadic((function (){var G__22165 = cljs.core.conj;
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__22165) : ossicone.applicative.return$.call(null,G__22165));
})(),cljs.core.array_seq([s,a], 0));
});})(this$__$1))
,(function (){var G__22166 = cljs.core.empty(this$__$1);
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__22166) : ossicone.applicative.return$.call(null,G__22166));
})(),this$__$1);
});
ossicone.traversable.traverse = ossicone.traversable.traverse_STAR_;
