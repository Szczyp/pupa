// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('ossicone.foldable');
goog.require('cljs.core');

ossicone.foldable.Foldable = (function (){var obj22119 = {};
return obj22119;
})();

ossicone.foldable.fold_STAR_ = (function ossicone$foldable$fold_STAR_(this$,f,z){
if((function (){var and__4198__auto__ = this$;
if(and__4198__auto__){
return this$.ossicone$foldable$Foldable$fold_STAR_$arity$3;
} else {
return and__4198__auto__;
}
})()){
return this$.ossicone$foldable$Foldable$fold_STAR_$arity$3(this$,f,z);
} else {
var x__4846__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4210__auto__ = (ossicone.foldable.fold_STAR_[(function (){var G__22123 = x__4846__auto__;
return goog.typeOf(G__22123);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (ossicone.foldable.fold_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Foldable.fold*",this$);
}
}
})().call(null,this$,f,z);
}
});

cljs.core.List.prototype.ossicone$foldable$Foldable$ = true;

cljs.core.List.prototype.ossicone$foldable$Foldable$fold_STAR_$arity$3 = (function (this$,f,z){
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,z,this$__$1);
});

cljs.core.PersistentVector.prototype.ossicone$foldable$Foldable$ = true;

cljs.core.PersistentVector.prototype.ossicone$foldable$Foldable$fold_STAR_$arity$3 = (function (this$,f,z){
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,z,this$__$1);
});

cljs.core.LazySeq.prototype.ossicone$foldable$Foldable$ = true;

cljs.core.LazySeq.prototype.ossicone$foldable$Foldable$fold_STAR_$arity$3 = (function (this$,f,z){
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,z,this$__$1);
});

cljs.core.PersistentHashMap.prototype.ossicone$foldable$Foldable$ = true;

cljs.core.PersistentHashMap.prototype.ossicone$foldable$Foldable$fold_STAR_$arity$3 = (function (this$,f,z){
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (a,p__22124){
var vec__22125 = p__22124;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22125,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22125,(1),null);
var G__22126 = a;
var G__22127 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22126,G__22127) : f.call(null,G__22126,G__22127));
});})(this$__$1))
,z,this$__$1);
});

cljs.core.PersistentArrayMap.prototype.ossicone$foldable$Foldable$ = true;

cljs.core.PersistentArrayMap.prototype.ossicone$foldable$Foldable$fold_STAR_$arity$3 = (function (this$,f,z){
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (a,p__22128){
var vec__22129 = p__22128;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22129,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22129,(1),null);
var G__22130 = a;
var G__22131 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22130,G__22131) : f.call(null,G__22130,G__22131));
});})(this$__$1))
,z,this$__$1);
});

cljs.core.PersistentTreeMap.prototype.ossicone$foldable$Foldable$ = true;

cljs.core.PersistentTreeMap.prototype.ossicone$foldable$Foldable$fold_STAR_$arity$3 = (function (this$,f,z){
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (this$__$1){
return (function (a,p__22132){
var vec__22133 = p__22132;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22133,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22133,(1),null);
var G__22134 = a;
var G__22135 = v;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22134,G__22135) : f.call(null,G__22134,G__22135));
});})(this$__$1))
,z,this$__$1);
});

cljs.core.PersistentHashSet.prototype.ossicone$foldable$Foldable$ = true;

cljs.core.PersistentHashSet.prototype.ossicone$foldable$Foldable$fold_STAR_$arity$3 = (function (this$,f,z){
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,z,this$__$1);
});

cljs.core.PersistentTreeSet.prototype.ossicone$foldable$Foldable$ = true;

cljs.core.PersistentTreeSet.prototype.ossicone$foldable$Foldable$fold_STAR_$arity$3 = (function (this$,f,z){
var this$__$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(f,z,this$__$1);
});
ossicone.foldable.fold = (function ossicone$foldable$fold(f,z,s){
return ossicone.foldable.fold_STAR_(s,f,z);
});
