// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('ossicone.functor');
goog.require('cljs.core');

ossicone.functor.Functor = (function (){var obj20746 = {};
return obj20746;
})();

ossicone.functor.mapf_STAR_ = (function ossicone$functor$mapf_STAR_(this$,f){
if((function (){var and__4198__auto__ = this$;
if(and__4198__auto__){
return this$.ossicone$functor$Functor$mapf_STAR_$arity$2;
} else {
return and__4198__auto__;
}
})()){
return this$.ossicone$functor$Functor$mapf_STAR_$arity$2(this$,f);
} else {
var x__4846__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4210__auto__ = (ossicone.functor.mapf_STAR_[(function (){var G__20750 = x__4846__auto__;
return goog.typeOf(G__20750);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (ossicone.functor.mapf_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Functor.mapf*",this$);
}
}
})().call(null,this$,f);
}
});

cljs.core.LazySeq.prototype.ossicone$functor$Functor$ = true;

cljs.core.LazySeq.prototype.ossicone$functor$Functor$mapf_STAR_$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,this$__$1);
});

cljs.core.PersistentTreeSet.prototype.ossicone$functor$Functor$ = true;

cljs.core.PersistentTreeSet.prototype.ossicone$functor$Functor$mapf_STAR_$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_set(),cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,this$__$1)));
});

cljs.core.PersistentHashMap.prototype.ossicone$functor$Functor$ = true;

cljs.core.PersistentHashMap.prototype.ossicone$functor$Functor$mapf_STAR_$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__20751){
var vec__20752 = p__20751;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20752,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20752,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__20753 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20753) : f.call(null,G__20753));
})()], null);
});})(this$__$1))
,this$__$1));
});

cljs.core.PersistentTreeMap.prototype.ossicone$functor$Functor$ = true;

cljs.core.PersistentTreeMap.prototype.ossicone$functor$Functor$mapf_STAR_$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__20754){
var vec__20755 = p__20754;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20755,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20755,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__20756 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20756) : f.call(null,G__20756));
})()], null);
});})(this$__$1))
,this$__$1));
});

cljs.core.PersistentHashSet.prototype.ossicone$functor$Functor$ = true;

cljs.core.PersistentHashSet.prototype.ossicone$functor$Functor$mapf_STAR_$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,this$__$1));
});

cljs.core.PersistentVector.prototype.ossicone$functor$Functor$ = true;

cljs.core.PersistentVector.prototype.ossicone$functor$Functor$mapf_STAR_$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(f,this$__$1);
});

(ossicone.functor.Functor["function"] = true);

(ossicone.functor.mapf_STAR_["function"] = (function (this$,f){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,this$);
}));

cljs.core.Keyword.prototype.ossicone$functor$Functor$ = true;

cljs.core.Keyword.prototype.ossicone$functor$Functor$mapf_STAR_$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(f,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.ossicone$functor$Functor$ = true;

cljs.core.PersistentArrayMap.prototype.ossicone$functor$Functor$mapf_STAR_$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (this$__$1){
return (function (p__20757){
var vec__20758 = p__20757;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20758,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20758,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__20759 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20759) : f.call(null,G__20759));
})()], null);
});})(this$__$1))
,this$__$1));
});

cljs.core.List.prototype.ossicone$functor$Functor$ = true;

cljs.core.List.prototype.ossicone$functor$Functor$mapf_STAR_$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,this$__$1));
});
ossicone.functor.mapf = (function ossicone$functor$mapf(f,a){
return ossicone.functor.mapf_STAR_(a,f);
});
