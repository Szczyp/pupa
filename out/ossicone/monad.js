// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('ossicone.monad');
goog.require('cljs.core');
goog.require('ossicone.functor');
goog.require('ossicone.applicative');

ossicone.monad.Monad = (function (){var obj20763 = {};
return obj20763;
})();

ossicone.monad.join_STAR_ = (function ossicone$monad$join_STAR_(this$){
if((function (){var and__4198__auto__ = this$;
if(and__4198__auto__){
return this$.ossicone$monad$Monad$join_STAR_$arity$1;
} else {
return and__4198__auto__;
}
})()){
return this$.ossicone$monad$Monad$join_STAR_$arity$1(this$);
} else {
var x__4846__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4210__auto__ = (ossicone.monad.join_STAR_[(function (){var G__20767 = x__4846__auto__;
return goog.typeOf(G__20767);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (ossicone.monad.join_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Monad.join*",this$);
}
}
})().call(null,this$);
}
});

ossicone.applicative.Return.prototype.ossicone$monad$Monad$ = true;

ossicone.applicative.Return.prototype.ossicone$monad$Monad$join_STAR_$arity$1 = (function (this$){
var this$__$1 = this;
return ossicone.applicative.value(this$__$1);
});

cljs.core.List.prototype.ossicone$monad$Monad$ = true;

cljs.core.List.prototype.ossicone$monad$Monad$join_STAR_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,this$__$1));
});

cljs.core.PersistentVector.prototype.ossicone$monad$Monad$ = true;

cljs.core.PersistentVector.prototype.ossicone$monad$Monad$join_STAR_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,this$__$1));
});

cljs.core.LazySeq.prototype.ossicone$monad$Monad$ = true;

cljs.core.LazySeq.prototype.ossicone$monad$Monad$join_STAR_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,this$__$1);
});

cljs.core.PersistentHashSet.prototype.ossicone$monad$Monad$ = true;

cljs.core.PersistentHashSet.prototype.ossicone$monad$Monad$join_STAR_$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,this$__$1));
});

(ossicone.monad.Monad["function"] = true);

(ossicone.monad.join_STAR_["function"] = (function (this$){
return (function (p1__20768_SHARP_){
return (function (){var G__20770 = p1__20768_SHARP_;
return (this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(G__20770) : this$.call(null,G__20770));
})().call(null,p1__20768_SHARP_);
});
}));

cljs.core.Keyword.prototype.ossicone$monad$Monad$ = true;

cljs.core.Keyword.prototype.ossicone$monad$Monad$join_STAR_$arity$1 = (function (this$){
var this$__$1 = this;
return ((function (this$__$1){
return (function (p1__20769_SHARP_){
return (function (){var G__20771 = p1__20769_SHARP_;
return (this$__$1.cljs$core$IFn$_invoke$arity$1 ? this$__$1.cljs$core$IFn$_invoke$arity$1(G__20771) : this$__$1.call(null,G__20771));
})().call(null,p1__20769_SHARP_);
});
;})(this$__$1))
});
ossicone.monad.bind = (function ossicone$monad$bind(){
var G__20776 = arguments.length;
switch (G__20776) {
case 2:
return ossicone.monad.bind.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5261__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return ossicone.monad.bind.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5261__auto__);

}
});

ossicone.monad.bind.cljs$core$IFn$_invoke$arity$2 = (function (m,f){
return ossicone.monad.join_STAR_(ossicone.functor.mapf(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.second,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(ossicone.applicative.coerce_return,m),f),m));
});

ossicone.monad.bind.cljs$core$IFn$_invoke$arity$variadic = (function (m,f,fs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(ossicone.monad.bind,m,cljs.core.cons(f,fs));
});

ossicone.monad.bind.cljs$lang$applyTo = (function (seq20772){
var G__20773 = cljs.core.first(seq20772);
var seq20772__$1 = cljs.core.next(seq20772);
var G__20774 = cljs.core.first(seq20772__$1);
var seq20772__$2 = cljs.core.next(seq20772__$1);
return ossicone.monad.bind.cljs$core$IFn$_invoke$arity$variadic(G__20773,G__20774,seq20772__$2);
});

ossicone.monad.bind.cljs$lang$maxFixedArity = (2);
