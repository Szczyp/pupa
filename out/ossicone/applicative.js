// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('ossicone.applicative');
goog.require('cljs.core');
goog.require('ossicone.functor');

/**
* @constructor
*/
ossicone.applicative.Return = (function (value){
this.value = value;
})
ossicone.applicative.Return.prototype.toString = (function (){
var self__ = this;
var this$ = this;
return [cljs.core.str(self__.value)].join('');
});

ossicone.applicative.Return.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

ossicone.applicative.Return.cljs$lang$type = true;

ossicone.applicative.Return.cljs$lang$ctorStr = "ossicone.applicative/Return";

ossicone.applicative.Return.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"ossicone.applicative/Return");
});

ossicone.applicative.__GT_Return = (function ossicone$applicative$__GT_Return(value){
return (new ossicone.applicative.Return(value));
});


ossicone.applicative.Applicative = (function (){var obj20574 = {};
return obj20574;
})();

ossicone.applicative.return_STAR_ = (function ossicone$applicative$return_STAR_(this$,a){
if((function (){var and__4198__auto__ = this$;
if(and__4198__auto__){
return this$.ossicone$applicative$Applicative$return_STAR_$arity$2;
} else {
return and__4198__auto__;
}
})()){
return this$.ossicone$applicative$Applicative$return_STAR_$arity$2(this$,a);
} else {
var x__4846__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4210__auto__ = (ossicone.applicative.return_STAR_[(function (){var G__20578 = x__4846__auto__;
return goog.typeOf(G__20578);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (ossicone.applicative.return_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Applicative.return*",this$);
}
}
})().call(null,this$,a);
}
});

ossicone.applicative.ap_STAR_ = (function ossicone$applicative$ap_STAR_(this$,that){
if((function (){var and__4198__auto__ = this$;
if(and__4198__auto__){
return this$.ossicone$applicative$Applicative$ap_STAR_$arity$2;
} else {
return and__4198__auto__;
}
})()){
return this$.ossicone$applicative$Applicative$ap_STAR_$arity$2(this$,that);
} else {
var x__4846__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4210__auto__ = (ossicone.applicative.ap_STAR_[(function (){var G__20582 = x__4846__auto__;
return goog.typeOf(G__20582);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (ossicone.applicative.ap_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Applicative.ap*",this$);
}
}
})().call(null,this$,that);
}
});

ossicone.applicative.return_QMARK_ = (function ossicone$applicative$return_QMARK_(a){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(a),ossicone.applicative.Return);
});
ossicone.applicative.return$ = ossicone.applicative.__GT_Return;
ossicone.applicative.value = (function ossicone$applicative$value(r){
return r.value;
});
ossicone.applicative.coerce_return = (function ossicone$applicative$coerce_return(a,b){
var G__20584 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ossicone.applicative.return_QMARK_(a),ossicone.applicative.return_QMARK_(b)], null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null),G__20584)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [ossicone.applicative.return_STAR_(b,ossicone.applicative.value(a)),b], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,true], null),G__20584)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,ossicone.applicative.return_STAR_(a,ossicone.applicative.value(b))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [a,b], null);

}
}
});
ossicone.applicative.Return.prototype.ossicone$functor$Functor$ = true;

ossicone.applicative.Return.prototype.ossicone$functor$Functor$mapf_STAR_$arity$2 = (function (this$,f){
var this$__$1 = this;
var G__20585 = (function (){var G__20586 = ossicone.applicative.value(this$__$1);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20586) : f.call(null,G__20586));
})();
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__20585) : ossicone.applicative.return$.call(null,G__20585));
});
cljs.core.LazySeq.prototype.ossicone$applicative$Applicative$ = true;

cljs.core.LazySeq.prototype.ossicone$applicative$Applicative$return_STAR_$arity$2 = (function (this$,a){
var this$__$1 = this;
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
return cljs.core._conj(cljs.core.List.EMPTY,a);
});})(this$__$1))
,null,null));
});

cljs.core.LazySeq.prototype.ossicone$applicative$Applicative$ap_STAR_$arity$2 = (function (this$,that){
var this$__$1 = this;
var iter__4964__auto__ = ((function (this$__$1){
return (function ossicone$applicative$iter__20589(s__20590){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__20590__$1 = s__20590;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20590__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var f = cljs.core.first(xs__4977__auto__);
var iterys__4960__auto__ = ((function (s__20590__$1,f,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function ossicone$applicative$iter__20589_$_iter__20591(s__20592){
return (new cljs.core.LazySeq(null,((function (s__20590__$1,f,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__20592__$1 = s__20592;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__20592__$1);
if(temp__4425__auto____$1){
var s__20592__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20592__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__20592__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__20594 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__20593 = (0);
while(true){
if((i__20593 < size__4963__auto__)){
var a = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__20593);
cljs.core.chunk_append(b__20594,(function (){var G__20606 = a;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20606) : f.call(null,G__20606));
})());

var G__20725 = (i__20593 + (1));
i__20593 = G__20725;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20594),ossicone$applicative$iter__20589_$_iter__20591(cljs.core.chunk_rest(s__20592__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20594),null);
}
} else {
var a = cljs.core.first(s__20592__$2);
return cljs.core.cons((function (){var G__20607 = a;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20607) : f.call(null,G__20607));
})(),ossicone$applicative$iter__20589_$_iter__20591(cljs.core.rest(s__20592__$2)));
}
} else {
return null;
}
break;
}
});})(s__20590__$1,f,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__20590__$1,f,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__4961__auto__ = cljs.core.seq(iterys__4960__auto__(that));
if(fs__4961__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4961__auto__,ossicone$applicative$iter__20589(cljs.core.rest(s__20590__$1)));
} else {
var G__20726 = cljs.core.rest(s__20590__$1);
s__20590__$1 = G__20726;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4964__auto__(this$__$1);
});

cljs.core.PersistentHashMap.prototype.ossicone$applicative$Applicative$ = true;

cljs.core.PersistentHashMap.prototype.ossicone$applicative$Applicative$return_STAR_$arity$2 = (function (this$,a){
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,a);
});

cljs.core.PersistentHashMap.prototype.ossicone$applicative$Applicative$ap_STAR_$arity$2 = (function (this$,that){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,(function (){var iter__4964__auto__ = ((function (this$__$1){
return (function ossicone$applicative$iter__20608(s__20609){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__20609__$1 = s__20609;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20609__$1);
if(temp__4425__auto__){
var s__20609__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20609__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__20609__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__20611 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__20610 = (0);
while(true){
if((i__20610 < size__4963__auto__)){
var vec__20620 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__20610);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20620,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20620,(1),null);
cljs.core.chunk_append(b__20611,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__20621 = (function (){var G__20622 = that;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__20622) : k.call(null,G__20622));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20621) : f.call(null,G__20621));
})()], null));

var G__20727 = (i__20610 + (1));
i__20610 = G__20727;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20611),ossicone$applicative$iter__20608(cljs.core.chunk_rest(s__20609__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20611),null);
}
} else {
var vec__20623 = cljs.core.first(s__20609__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20623,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20623,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__20624 = (function (){var G__20625 = that;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__20625) : k.call(null,G__20625));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20624) : f.call(null,G__20624));
})()], null),ossicone$applicative$iter__20608(cljs.core.rest(s__20609__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4964__auto__(this$__$1);
})());
});

cljs.core.PersistentTreeMap.prototype.ossicone$applicative$Applicative$ = true;

cljs.core.PersistentTreeMap.prototype.ossicone$applicative$Applicative$return_STAR_$arity$2 = (function (this$,a){
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map,a);
});

cljs.core.PersistentTreeMap.prototype.ossicone$applicative$Applicative$ap_STAR_$arity$2 = (function (this$,that){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),(function (){var iter__4964__auto__ = ((function (this$__$1){
return (function ossicone$applicative$iter__20626(s__20627){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__20627__$1 = s__20627;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20627__$1);
if(temp__4425__auto__){
var s__20627__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20627__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__20627__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__20629 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__20628 = (0);
while(true){
if((i__20628 < size__4963__auto__)){
var vec__20638 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__20628);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20638,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20638,(1),null);
cljs.core.chunk_append(b__20629,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__20639 = (function (){var G__20640 = that;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__20640) : k.call(null,G__20640));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20639) : f.call(null,G__20639));
})()], null));

var G__20728 = (i__20628 + (1));
i__20628 = G__20728;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20629),ossicone$applicative$iter__20626(cljs.core.chunk_rest(s__20627__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20629),null);
}
} else {
var vec__20641 = cljs.core.first(s__20627__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20641,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20641,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__20642 = (function (){var G__20643 = that;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__20643) : k.call(null,G__20643));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20642) : f.call(null,G__20642));
})()], null),ossicone$applicative$iter__20626(cljs.core.rest(s__20627__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4964__auto__(this$__$1);
})());
});

cljs.core.PersistentHashSet.prototype.ossicone$applicative$Applicative$ = true;

cljs.core.PersistentHashSet.prototype.ossicone$applicative$Applicative$return_STAR_$arity$2 = (function (this$,a){
var this$__$1 = this;
return cljs.core.PersistentHashSet.fromArray([a],true);
});

cljs.core.PersistentHashSet.prototype.ossicone$applicative$Applicative$ap_STAR_$arity$2 = (function (this$,that){
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_set,(function (){var iter__4964__auto__ = ((function (this$__$1){
return (function ossicone$applicative$iter__20644(s__20645){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__20645__$1 = s__20645;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20645__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var f = cljs.core.first(xs__4977__auto__);
var iterys__4960__auto__ = ((function (s__20645__$1,f,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function ossicone$applicative$iter__20644_$_iter__20646(s__20647){
return (new cljs.core.LazySeq(null,((function (s__20645__$1,f,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__20647__$1 = s__20647;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__20647__$1);
if(temp__4425__auto____$1){
var s__20647__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20647__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__20647__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__20649 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__20648 = (0);
while(true){
if((i__20648 < size__4963__auto__)){
var a = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__20648);
cljs.core.chunk_append(b__20649,(function (){var G__20661 = a;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20661) : f.call(null,G__20661));
})());

var G__20729 = (i__20648 + (1));
i__20648 = G__20729;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20649),ossicone$applicative$iter__20644_$_iter__20646(cljs.core.chunk_rest(s__20647__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20649),null);
}
} else {
var a = cljs.core.first(s__20647__$2);
return cljs.core.cons((function (){var G__20662 = a;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20662) : f.call(null,G__20662));
})(),ossicone$applicative$iter__20644_$_iter__20646(cljs.core.rest(s__20647__$2)));
}
} else {
return null;
}
break;
}
});})(s__20645__$1,f,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__20645__$1,f,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__4961__auto__ = cljs.core.seq(iterys__4960__auto__(that));
if(fs__4961__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4961__auto__,ossicone$applicative$iter__20644(cljs.core.rest(s__20645__$1)));
} else {
var G__20730 = cljs.core.rest(s__20645__$1);
s__20645__$1 = G__20730;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4964__auto__(this$__$1);
})());
});

cljs.core.PersistentVector.prototype.ossicone$applicative$Applicative$ = true;

cljs.core.PersistentVector.prototype.ossicone$applicative$Applicative$return_STAR_$arity$2 = (function (this$,a){
var this$__$1 = this;
return (new cljs.core.PersistentVector(null,1,(5),cljs.core.PersistentVector.EMPTY_NODE,[a],null));
});

cljs.core.PersistentVector.prototype.ossicone$applicative$Applicative$ap_STAR_$arity$2 = (function (this$,that){
var this$__$1 = this;
return cljs.core.vec((function (){var iter__4964__auto__ = ((function (this$__$1){
return (function ossicone$applicative$iter__20663(s__20664){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__20664__$1 = s__20664;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20664__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var f = cljs.core.first(xs__4977__auto__);
var iterys__4960__auto__ = ((function (s__20664__$1,f,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function ossicone$applicative$iter__20663_$_iter__20665(s__20666){
return (new cljs.core.LazySeq(null,((function (s__20664__$1,f,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__20666__$1 = s__20666;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__20666__$1);
if(temp__4425__auto____$1){
var s__20666__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20666__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__20666__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__20668 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__20667 = (0);
while(true){
if((i__20667 < size__4963__auto__)){
var a = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__20667);
cljs.core.chunk_append(b__20668,(function (){var G__20680 = a;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20680) : f.call(null,G__20680));
})());

var G__20731 = (i__20667 + (1));
i__20667 = G__20731;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20668),ossicone$applicative$iter__20663_$_iter__20665(cljs.core.chunk_rest(s__20666__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20668),null);
}
} else {
var a = cljs.core.first(s__20666__$2);
return cljs.core.cons((function (){var G__20681 = a;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20681) : f.call(null,G__20681));
})(),ossicone$applicative$iter__20663_$_iter__20665(cljs.core.rest(s__20666__$2)));
}
} else {
return null;
}
break;
}
});})(s__20664__$1,f,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__20664__$1,f,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__4961__auto__ = cljs.core.seq(iterys__4960__auto__(that));
if(fs__4961__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4961__auto__,ossicone$applicative$iter__20663(cljs.core.rest(s__20664__$1)));
} else {
var G__20732 = cljs.core.rest(s__20664__$1);
s__20664__$1 = G__20732;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4964__auto__(this$__$1);
})());
});

(ossicone.applicative.Applicative["function"] = true);

(ossicone.applicative.return_STAR_["function"] = (function (this$,f){
return cljs.core.constantly(f);
}));

(ossicone.applicative.ap_STAR_["function"] = (function (this$,that){
return (function (p1__20587_SHARP_){
return (function (){var G__20682 = p1__20587_SHARP_;
return (this$.cljs$core$IFn$_invoke$arity$1 ? this$.cljs$core$IFn$_invoke$arity$1(G__20682) : this$.call(null,G__20682));
})().call(null,(function (){var G__20683 = p1__20587_SHARP_;
return (that.cljs$core$IFn$_invoke$arity$1 ? that.cljs$core$IFn$_invoke$arity$1(G__20683) : that.call(null,G__20683));
})());
});
}));

cljs.core.Keyword.prototype.ossicone$applicative$Applicative$ = true;

cljs.core.Keyword.prototype.ossicone$applicative$Applicative$return_STAR_$arity$2 = (function (this$,f){
var this$__$1 = this;
return cljs.core.constantly(f);
});

cljs.core.Keyword.prototype.ossicone$applicative$Applicative$ap_STAR_$arity$2 = (function (this$,that){
var this$__$1 = this;
return ((function (this$__$1){
return (function (p1__20588_SHARP_){
return (function (){var G__20684 = p1__20588_SHARP_;
return (this$__$1.cljs$core$IFn$_invoke$arity$1 ? this$__$1.cljs$core$IFn$_invoke$arity$1(G__20684) : this$__$1.call(null,G__20684));
})().call(null,(function (){var G__20685 = p1__20588_SHARP_;
return (that.cljs$core$IFn$_invoke$arity$1 ? that.cljs$core$IFn$_invoke$arity$1(G__20685) : that.call(null,G__20685));
})());
});
;})(this$__$1))
});

cljs.core.PersistentArrayMap.prototype.ossicone$applicative$Applicative$ = true;

cljs.core.PersistentArrayMap.prototype.ossicone$applicative$Applicative$return_STAR_$arity$2 = (function (this$,a){
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,a);
});

cljs.core.PersistentArrayMap.prototype.ossicone$applicative$Applicative$ap_STAR_$arity$2 = (function (this$,that){
var this$__$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashMap.EMPTY,(function (){var iter__4964__auto__ = ((function (this$__$1){
return (function ossicone$applicative$iter__20686(s__20687){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__20687__$1 = s__20687;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20687__$1);
if(temp__4425__auto__){
var s__20687__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20687__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__20687__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__20689 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__20688 = (0);
while(true){
if((i__20688 < size__4963__auto__)){
var vec__20698 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__20688);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20698,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20698,(1),null);
cljs.core.chunk_append(b__20689,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__20699 = (function (){var G__20700 = that;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__20700) : k.call(null,G__20700));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20699) : f.call(null,G__20699));
})()], null));

var G__20733 = (i__20688 + (1));
i__20688 = G__20733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20689),ossicone$applicative$iter__20686(cljs.core.chunk_rest(s__20687__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20689),null);
}
} else {
var vec__20701 = cljs.core.first(s__20687__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20701,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20701,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){var G__20702 = (function (){var G__20703 = that;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__20703) : k.call(null,G__20703));
})();
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20702) : f.call(null,G__20702));
})()], null),ossicone$applicative$iter__20686(cljs.core.rest(s__20687__$2)));
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4964__auto__(this$__$1);
})());
});

ossicone.applicative.Return.prototype.ossicone$applicative$Applicative$ = true;

ossicone.applicative.Return.prototype.ossicone$applicative$Applicative$return_STAR_$arity$2 = (function (this$,a){
var this$__$1 = this;
var G__20704 = a;
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__20704) : ossicone.applicative.return$.call(null,G__20704));
});

ossicone.applicative.Return.prototype.ossicone$applicative$Applicative$ap_STAR_$arity$2 = (function (this$,a){
var this$__$1 = this;
var G__20705 = ossicone.applicative.value(this$__$1).call(null,ossicone.applicative.value(a));
return (ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.applicative.return$.cljs$core$IFn$_invoke$arity$1(G__20705) : ossicone.applicative.return$.call(null,G__20705));
});

cljs.core.List.prototype.ossicone$applicative$Applicative$ = true;

cljs.core.List.prototype.ossicone$applicative$Applicative$return_STAR_$arity$2 = (function (this$,a){
var this$__$1 = this;
return cljs.core._conj(cljs.core.List.EMPTY,a);
});

cljs.core.List.prototype.ossicone$applicative$Applicative$ap_STAR_$arity$2 = (function (this$,that){
var this$__$1 = this;
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.list,(function (){var iter__4964__auto__ = ((function (this$__$1){
return (function ossicone$applicative$iter__20706(s__20707){
return (new cljs.core.LazySeq(null,((function (this$__$1){
return (function (){
var s__20707__$1 = s__20707;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20707__$1);
if(temp__4425__auto__){
var xs__4977__auto__ = temp__4425__auto__;
var f = cljs.core.first(xs__4977__auto__);
var iterys__4960__auto__ = ((function (s__20707__$1,f,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function ossicone$applicative$iter__20706_$_iter__20708(s__20709){
return (new cljs.core.LazySeq(null,((function (s__20707__$1,f,xs__4977__auto__,temp__4425__auto__,this$__$1){
return (function (){
var s__20709__$1 = s__20709;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__20709__$1);
if(temp__4425__auto____$1){
var s__20709__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__20709__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__20709__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__20711 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__20710 = (0);
while(true){
if((i__20710 < size__4963__auto__)){
var a = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__20710);
cljs.core.chunk_append(b__20711,(function (){var G__20723 = a;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20723) : f.call(null,G__20723));
})());

var G__20734 = (i__20710 + (1));
i__20710 = G__20734;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20711),ossicone$applicative$iter__20706_$_iter__20708(cljs.core.chunk_rest(s__20709__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20711),null);
}
} else {
var a = cljs.core.first(s__20709__$2);
return cljs.core.cons((function (){var G__20724 = a;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20724) : f.call(null,G__20724));
})(),ossicone$applicative$iter__20706_$_iter__20708(cljs.core.rest(s__20709__$2)));
}
} else {
return null;
}
break;
}
});})(s__20707__$1,f,xs__4977__auto__,temp__4425__auto__,this$__$1))
,null,null));
});})(s__20707__$1,f,xs__4977__auto__,temp__4425__auto__,this$__$1))
;
var fs__4961__auto__ = cljs.core.seq(iterys__4960__auto__(that));
if(fs__4961__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4961__auto__,ossicone$applicative$iter__20706(cljs.core.rest(s__20707__$1)));
} else {
var G__20735 = cljs.core.rest(s__20707__$1);
s__20707__$1 = G__20735;
continue;
}
} else {
return null;
}
break;
}
});})(this$__$1))
,null,null));
});})(this$__$1))
;
return iter__4964__auto__(this$__$1);
})());
});
ossicone.applicative.ap = (function ossicone$applicative$ap(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return ossicone.applicative.ap.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

ossicone.applicative.ap.cljs$core$IFn$_invoke$arity$variadic = (function (f,as){
var ap = (function() {
var ossicone$applicative$ap = null;
var ossicone$applicative$ap__2 = (function (f__$1,a){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(ossicone.applicative.ap_STAR_,ossicone.applicative.coerce_return(f__$1,a));
});
var ossicone$applicative$ap__3 = (function() { 
var G__20738__delegate = function (f__$1,a,as__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(ossicone$applicative$ap,f__$1,cljs.core.cons(a,as__$1));
};
var G__20738 = function (f__$1,a,var_args){
var as__$1 = null;
if (arguments.length > 2) {
var G__20739__i = 0, G__20739__a = new Array(arguments.length -  2);
while (G__20739__i < G__20739__a.length) {G__20739__a[G__20739__i] = arguments[G__20739__i + 2]; ++G__20739__i;}
  as__$1 = new cljs.core.IndexedSeq(G__20739__a,0);
} 
return G__20738__delegate.call(this,f__$1,a,as__$1);};
G__20738.cljs$lang$maxFixedArity = 2;
G__20738.cljs$lang$applyTo = (function (arglist__20740){
var f__$1 = cljs.core.first(arglist__20740);
arglist__20740 = cljs.core.next(arglist__20740);
var a = cljs.core.first(arglist__20740);
var as__$1 = cljs.core.rest(arglist__20740);
return G__20738__delegate(f__$1,a,as__$1);
});
G__20738.cljs$core$IFn$_invoke$arity$variadic = G__20738__delegate;
return G__20738;
})()
;
ossicone$applicative$ap = function(f__$1,a,var_args){
var as__$1 = var_args;
switch(arguments.length){
case 2:
return ossicone$applicative$ap__2.call(this,f__$1,a);
default:
var G__20741 = null;
if (arguments.length > 2) {
var G__20742__i = 0, G__20742__a = new Array(arguments.length -  2);
while (G__20742__i < G__20742__a.length) {G__20742__a[G__20742__i] = arguments[G__20742__i + 2]; ++G__20742__i;}
G__20741 = new cljs.core.IndexedSeq(G__20742__a,0);
}
return ossicone$applicative$ap__3.cljs$core$IFn$_invoke$arity$variadic(f__$1,a, G__20741);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
ossicone$applicative$ap.cljs$lang$maxFixedArity = 2;
ossicone$applicative$ap.cljs$lang$applyTo = ossicone$applicative$ap__3.cljs$lang$applyTo;
ossicone$applicative$ap.cljs$core$IFn$_invoke$arity$2 = ossicone$applicative$ap__2;
ossicone$applicative$ap.cljs$core$IFn$_invoke$arity$variadic = ossicone$applicative$ap__3.cljs$core$IFn$_invoke$arity$variadic;
return ossicone$applicative$ap;
})()
;
var curry = (function ossicone$applicative$curry(n,f__$1){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial,cljs.core.replicate(n,cljs.core.partial)).call(null,f__$1);
});
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(ap,ossicone.functor.mapf(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(curry,cljs.core.count(as)),f),as);
});

ossicone.applicative.ap.cljs$lang$maxFixedArity = (1);

ossicone.applicative.ap.cljs$lang$applyTo = (function (seq20736){
var G__20737 = cljs.core.first(seq20736);
var seq20736__$1 = cljs.core.next(seq20736);
return ossicone.applicative.ap.cljs$core$IFn$_invoke$arity$variadic(G__20737,seq20736__$1);
});
