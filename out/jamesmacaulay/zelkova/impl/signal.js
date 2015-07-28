// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('jamesmacaulay.zelkova.impl.signal');
goog.require('cljs.core');
goog.require('clojure.zip');
goog.require('alandipert.kahn');
goog.require('cljs.core.async');
goog.require('jamesmacaulay.async_tools.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('clojure.set');
goog.require('jamesmacaulay.zelkova.impl.time');

jamesmacaulay.zelkova.impl.signal.BoxedValueProtocol = (function (){var obj21222 = {};
return obj21222;
})();

jamesmacaulay.zelkova.impl.signal.value = (function jamesmacaulay$zelkova$impl$signal$value(boxed){
if((function (){var and__4198__auto__ = boxed;
if(and__4198__auto__){
return boxed.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$value$arity$1;
} else {
return and__4198__auto__;
}
})()){
return boxed.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$value$arity$1(boxed);
} else {
var x__4846__auto__ = (((boxed == null))?null:boxed);
return (function (){var or__4210__auto__ = (jamesmacaulay.zelkova.impl.signal.value[(function (){var G__21226 = x__4846__auto__;
return goog.typeOf(G__21226);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (jamesmacaulay.zelkova.impl.signal.value["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("BoxedValueProtocol.value",boxed);
}
}
})().call(null,boxed);
}
});


/**
 * Events come in from "the outside world" and get transformed into Messages by input signal nodes
 */
jamesmacaulay.zelkova.impl.signal.EventProtocol = (function (){var obj21228 = {};
return obj21228;
})();

jamesmacaulay.zelkova.impl.signal.topic = (function jamesmacaulay$zelkova$impl$signal$topic(event){
if((function (){var and__4198__auto__ = event;
if(and__4198__auto__){
return event.jamesmacaulay$zelkova$impl$signal$EventProtocol$topic$arity$1;
} else {
return and__4198__auto__;
}
})()){
return event.jamesmacaulay$zelkova$impl$signal$EventProtocol$topic$arity$1(event);
} else {
var x__4846__auto__ = (((event == null))?null:event);
return (function (){var or__4210__auto__ = (jamesmacaulay.zelkova.impl.signal.topic[(function (){var G__21232 = x__4846__auto__;
return goog.typeOf(G__21232);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (jamesmacaulay.zelkova.impl.signal.topic["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("EventProtocol.topic",event);
}
}
})().call(null,event);
}
});

jamesmacaulay.zelkova.impl.signal.timestamp = (function jamesmacaulay$zelkova$impl$signal$timestamp(event){
if((function (){var and__4198__auto__ = event;
if(and__4198__auto__){
return event.jamesmacaulay$zelkova$impl$signal$EventProtocol$timestamp$arity$1;
} else {
return and__4198__auto__;
}
})()){
return event.jamesmacaulay$zelkova$impl$signal$EventProtocol$timestamp$arity$1(event);
} else {
var x__4846__auto__ = (((event == null))?null:event);
return (function (){var or__4210__auto__ = (jamesmacaulay.zelkova.impl.signal.timestamp[(function (){var G__21236 = x__4846__auto__;
return goog.typeOf(G__21236);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (jamesmacaulay.zelkova.impl.signal.timestamp["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("EventProtocol.timestamp",event);
}
}
})().call(null,event);
}
});

jamesmacaulay.zelkova.impl.signal.record_timestamp = (function jamesmacaulay$zelkova$impl$signal$record_timestamp(event,timestamp){
if((function (){var and__4198__auto__ = event;
if(and__4198__auto__){
return event.jamesmacaulay$zelkova$impl$signal$EventProtocol$record_timestamp$arity$2;
} else {
return and__4198__auto__;
}
})()){
return event.jamesmacaulay$zelkova$impl$signal$EventProtocol$record_timestamp$arity$2(event,timestamp);
} else {
var x__4846__auto__ = (((event == null))?null:event);
return (function (){var or__4210__auto__ = (jamesmacaulay.zelkova.impl.signal.record_timestamp[(function (){var G__21240 = x__4846__auto__;
return goog.typeOf(G__21240);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (jamesmacaulay.zelkova.impl.signal.record_timestamp["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("EventProtocol.record-timestamp",event);
}
}
})().call(null,event,timestamp);
}
});


/**
 * Messages are propagated through the signal graph, and can either be "fresh" or "cached".
 */
jamesmacaulay.zelkova.impl.signal.MessageProtocol = (function (){var obj21242 = {};
return obj21242;
})();

/**
 * returns `true` if the message represents a fresh value, `false` otherwise
 */
jamesmacaulay.zelkova.impl.signal.fresh_QMARK_ = (function jamesmacaulay$zelkova$impl$signal$fresh_QMARK_(msg){
if((function (){var and__4198__auto__ = msg;
if(and__4198__auto__){
return msg.jamesmacaulay$zelkova$impl$signal$MessageProtocol$fresh_QMARK_$arity$1;
} else {
return and__4198__auto__;
}
})()){
return msg.jamesmacaulay$zelkova$impl$signal$MessageProtocol$fresh_QMARK_$arity$1(msg);
} else {
var x__4846__auto__ = (((msg == null))?null:msg);
return (function (){var or__4210__auto__ = (jamesmacaulay.zelkova.impl.signal.fresh_QMARK_[(function (){var G__21246 = x__4846__auto__;
return goog.typeOf(G__21246);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (jamesmacaulay.zelkova.impl.signal.fresh_QMARK_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("MessageProtocol.fresh?",msg);
}
}
})().call(null,msg);
}
});


/**
* @constructor
* @param {*} topic
* @param {*} value
* @param {*} timestamp
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
jamesmacaulay.zelkova.impl.signal.Event = (function (topic,value,timestamp,__meta,__extmap,__hash){
this.topic = topic;
this.value = value;
this.timestamp = timestamp;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jamesmacaulay.zelkova.impl.signal.Event.prototype.jamesmacaulay$zelkova$impl$signal$EventProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.Event.prototype.jamesmacaulay$zelkova$impl$signal$EventProtocol$topic$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.topic;
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.jamesmacaulay$zelkova$impl$signal$EventProtocol$timestamp$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.timestamp;
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.jamesmacaulay$zelkova$impl$signal$EventProtocol$record_timestamp$arity$2 = (function (e,t){
var self__ = this;
var e__$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(e__$1,cljs.core.constant$keyword$timestamp,t);
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4805__auto__,k__4806__auto__){
var self__ = this;
var this__4805__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4805__auto____$1,k__4806__auto__,null);
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4807__auto__,k21248,else__4808__auto__){
var self__ = this;
var this__4807__auto____$1 = this;
var G__21250 = (((k21248 instanceof cljs.core.Keyword))?k21248.fqn:null);
switch (G__21250) {
case "topic":
return self__.topic;

break;
case "value":
return self__.value;

break;
case "timestamp":
return self__.timestamp;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21248,else__4808__auto__);

}
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4819__auto__,writer__4820__auto__,opts__4821__auto__){
var self__ = this;
var this__4819__auto____$1 = this;
var pr_pair__4822__auto__ = ((function (this__4819__auto____$1){
return (function (keyval__4823__auto__){
return cljs.core.pr_sequential_writer(writer__4820__auto__,cljs.core.pr_writer,""," ","",opts__4821__auto__,keyval__4823__auto__);
});})(this__4819__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4820__auto__,pr_pair__4822__auto__,"#jamesmacaulay.zelkova.impl.signal.Event{",", ","}",opts__4821__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$topic,self__.topic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$value,self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$timestamp,self__.timestamp],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4803__auto__){
var self__ = this;
var this__4803__auto____$1 = this;
return self__.__meta;
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4799__auto__){
var self__ = this;
var this__4799__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.Event(self__.topic,self__.value,self__.timestamp,self__.__meta,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4809__auto__){
var self__ = this;
var this__4809__auto____$1 = this;
return (3 + cljs.core.count(self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4800__auto__){
var self__ = this;
var this__4800__auto____$1 = this;
var h__4626__auto__ = self__.__hash;
if(!((h__4626__auto__ == null))){
return h__4626__auto__;
} else {
var h__4626__auto____$1 = cljs.core.hash_imap(this__4800__auto____$1);
self__.__hash = h__4626__auto____$1;

return h__4626__auto____$1;
}
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4801__auto__,other__4802__auto__){
var self__ = this;
var this__4801__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4198__auto__ = other__4802__auto__;
if(cljs.core.truth_(and__4198__auto__)){
var and__4198__auto____$1 = (this__4801__auto____$1.constructor === other__4802__auto__.constructor);
if(and__4198__auto____$1){
return cljs.core.equiv_map(this__4801__auto____$1,other__4802__auto__);
} else {
return and__4198__auto____$1;
}
} else {
return and__4198__auto__;
}
})())){
return true;
} else {
return false;
}
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.Event.prototype.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4814__auto__,k__4815__auto__){
var self__ = this;
var this__4814__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$value,null,cljs.core.constant$keyword$topic,null,cljs.core.constant$keyword$timestamp,null], null), null),k__4815__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4814__auto____$1),self__.__meta),k__4815__auto__);
} else {
return (new jamesmacaulay.zelkova.impl.signal.Event(self__.topic,self__.value,self__.timestamp,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4815__auto__)),null));
}
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4812__auto__,k__4813__auto__,G__21247){
var self__ = this;
var this__4812__auto____$1 = this;
var pred__21251 = cljs.core.keyword_identical_QMARK_;
var expr__21252 = k__4813__auto__;
if(cljs.core.truth_((function (){var G__21254 = cljs.core.constant$keyword$topic;
var G__21255 = expr__21252;
return (pred__21251.cljs$core$IFn$_invoke$arity$2 ? pred__21251.cljs$core$IFn$_invoke$arity$2(G__21254,G__21255) : pred__21251.call(null,G__21254,G__21255));
})())){
return (new jamesmacaulay.zelkova.impl.signal.Event(G__21247,self__.value,self__.timestamp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21256 = cljs.core.constant$keyword$value;
var G__21257 = expr__21252;
return (pred__21251.cljs$core$IFn$_invoke$arity$2 ? pred__21251.cljs$core$IFn$_invoke$arity$2(G__21256,G__21257) : pred__21251.call(null,G__21256,G__21257));
})())){
return (new jamesmacaulay.zelkova.impl.signal.Event(self__.topic,G__21247,self__.timestamp,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21258 = cljs.core.constant$keyword$timestamp;
var G__21259 = expr__21252;
return (pred__21251.cljs$core$IFn$_invoke$arity$2 ? pred__21251.cljs$core$IFn$_invoke$arity$2(G__21258,G__21259) : pred__21251.call(null,G__21258,G__21259));
})())){
return (new jamesmacaulay.zelkova.impl.signal.Event(self__.topic,self__.value,G__21247,self__.__meta,self__.__extmap,null));
} else {
return (new jamesmacaulay.zelkova.impl.signal.Event(self__.topic,self__.value,self__.timestamp,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4813__auto__,G__21247),null));
}
}
}
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4817__auto__){
var self__ = this;
var this__4817__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$topic,self__.topic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$value,self__.value],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$timestamp,self__.timestamp],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4804__auto__,G__21247){
var self__ = this;
var this__4804__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.Event(self__.topic,self__.value,self__.timestamp,G__21247,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.Event.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4810__auto__,entry__4811__auto__){
var self__ = this;
var this__4810__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4811__auto__)){
return cljs.core._assoc(this__4810__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4811__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4811__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4810__auto____$1,entry__4811__auto__);
}
});

jamesmacaulay.zelkova.impl.signal.Event.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"topic","topic",-319949164,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"timestamp","timestamp",-2074956798,null)], null);
});

jamesmacaulay.zelkova.impl.signal.Event.cljs$lang$type = true;

jamesmacaulay.zelkova.impl.signal.Event.cljs$lang$ctorPrSeq = (function (this__4839__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"jamesmacaulay.zelkova.impl.signal/Event");
});

jamesmacaulay.zelkova.impl.signal.Event.cljs$lang$ctorPrWriter = (function (this__4839__auto__,writer__4840__auto__){
return cljs.core._write(writer__4840__auto__,"jamesmacaulay.zelkova.impl.signal/Event");
});

jamesmacaulay.zelkova.impl.signal.__GT_Event = (function jamesmacaulay$zelkova$impl$signal$__GT_Event(topic,value,timestamp){
return (new jamesmacaulay.zelkova.impl.signal.Event(topic,value,timestamp,null,null,null));
});

jamesmacaulay.zelkova.impl.signal.map__GT_Event = (function jamesmacaulay$zelkova$impl$signal$map__GT_Event(G__21249){
return (new jamesmacaulay.zelkova.impl.signal.Event(cljs.core.constant$keyword$topic.cljs$core$IFn$_invoke$arity$1(G__21249),cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(G__21249),cljs.core.constant$keyword$timestamp.cljs$core$IFn$_invoke$arity$1(G__21249),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21249,cljs.core.constant$keyword$topic,cljs.core.array_seq([cljs.core.constant$keyword$value,cljs.core.constant$keyword$timestamp], 0)),null));
});

jamesmacaulay.zelkova.impl.signal.make_event = (function jamesmacaulay$zelkova$impl$signal$make_event(topic,value){
return jamesmacaulay.zelkova.impl.signal.__GT_Event(topic,value,null);
});

/**
* @constructor
* @param {*} value
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
jamesmacaulay.zelkova.impl.signal.Fresh = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4805__auto__,k__4806__auto__){
var self__ = this;
var this__4805__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4805__auto____$1,k__4806__auto__,null);
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4807__auto__,k21262,else__4808__auto__){
var self__ = this;
var this__4807__auto____$1 = this;
var G__21264 = (((k21262 instanceof cljs.core.Keyword))?k21262.fqn:null);
switch (G__21264) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21262,else__4808__auto__);

}
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4819__auto__,writer__4820__auto__,opts__4821__auto__){
var self__ = this;
var this__4819__auto____$1 = this;
var pr_pair__4822__auto__ = ((function (this__4819__auto____$1){
return (function (keyval__4823__auto__){
return cljs.core.pr_sequential_writer(writer__4820__auto__,cljs.core.pr_writer,""," ","",opts__4821__auto__,keyval__4823__auto__);
});})(this__4819__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4820__auto__,pr_pair__4822__auto__,"#jamesmacaulay.zelkova.impl.signal.Fresh{",", ","}",opts__4821__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$value,self__.value],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4803__auto__){
var self__ = this;
var this__4803__auto____$1 = this;
return self__.__meta;
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4799__auto__){
var self__ = this;
var this__4799__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.Fresh(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4809__auto__){
var self__ = this;
var this__4809__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4800__auto__){
var self__ = this;
var this__4800__auto____$1 = this;
var h__4626__auto__ = self__.__hash;
if(!((h__4626__auto__ == null))){
return h__4626__auto__;
} else {
var h__4626__auto____$1 = cljs.core.hash_imap(this__4800__auto____$1);
self__.__hash = h__4626__auto____$1;

return h__4626__auto____$1;
}
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4801__auto__,other__4802__auto__){
var self__ = this;
var this__4801__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4198__auto__ = other__4802__auto__;
if(cljs.core.truth_(and__4198__auto__)){
var and__4198__auto____$1 = (this__4801__auto____$1.constructor === other__4802__auto__.constructor);
if(and__4198__auto____$1){
return cljs.core.equiv_map(this__4801__auto____$1,other__4802__auto__);
} else {
return and__4198__auto____$1;
}
} else {
return and__4198__auto__;
}
})())){
return true;
} else {
return false;
}
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.jamesmacaulay$zelkova$impl$signal$MessageProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.jamesmacaulay$zelkova$impl$signal$MessageProtocol$fresh_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4814__auto__,k__4815__auto__){
var self__ = this;
var this__4814__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,null], null), null),k__4815__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4814__auto____$1),self__.__meta),k__4815__auto__);
} else {
return (new jamesmacaulay.zelkova.impl.signal.Fresh(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4815__auto__)),null));
}
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4812__auto__,k__4813__auto__,G__21261){
var self__ = this;
var this__4812__auto____$1 = this;
var pred__21265 = cljs.core.keyword_identical_QMARK_;
var expr__21266 = k__4813__auto__;
if(cljs.core.truth_((function (){var G__21268 = cljs.core.constant$keyword$value;
var G__21269 = expr__21266;
return (pred__21265.cljs$core$IFn$_invoke$arity$2 ? pred__21265.cljs$core$IFn$_invoke$arity$2(G__21268,G__21269) : pred__21265.call(null,G__21268,G__21269));
})())){
return (new jamesmacaulay.zelkova.impl.signal.Fresh(G__21261,self__.__meta,self__.__extmap,null));
} else {
return (new jamesmacaulay.zelkova.impl.signal.Fresh(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4813__auto__,G__21261),null));
}
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4817__auto__){
var self__ = this;
var this__4817__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$value,self__.value],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4804__auto__,G__21261){
var self__ = this;
var this__4804__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.Fresh(self__.value,G__21261,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.Fresh.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4810__auto__,entry__4811__auto__){
var self__ = this;
var this__4810__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4811__auto__)){
return cljs.core._assoc(this__4810__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4811__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4811__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4810__auto____$1,entry__4811__auto__);
}
});

jamesmacaulay.zelkova.impl.signal.Fresh.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

jamesmacaulay.zelkova.impl.signal.Fresh.cljs$lang$type = true;

jamesmacaulay.zelkova.impl.signal.Fresh.cljs$lang$ctorPrSeq = (function (this__4839__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"jamesmacaulay.zelkova.impl.signal/Fresh");
});

jamesmacaulay.zelkova.impl.signal.Fresh.cljs$lang$ctorPrWriter = (function (this__4839__auto__,writer__4840__auto__){
return cljs.core._write(writer__4840__auto__,"jamesmacaulay.zelkova.impl.signal/Fresh");
});

jamesmacaulay.zelkova.impl.signal.__GT_Fresh = (function jamesmacaulay$zelkova$impl$signal$__GT_Fresh(value){
return (new jamesmacaulay.zelkova.impl.signal.Fresh(value,null,null,null));
});

jamesmacaulay.zelkova.impl.signal.map__GT_Fresh = (function jamesmacaulay$zelkova$impl$signal$map__GT_Fresh(G__21263){
return (new jamesmacaulay.zelkova.impl.signal.Fresh(cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(G__21263),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21263,cljs.core.constant$keyword$value),null));
});


/**
* @constructor
* @param {*} value
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
jamesmacaulay.zelkova.impl.signal.Cached = (function (value,__meta,__extmap,__hash){
this.value = value;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4805__auto__,k__4806__auto__){
var self__ = this;
var this__4805__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4805__auto____$1,k__4806__auto__,null);
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4807__auto__,k21272,else__4808__auto__){
var self__ = this;
var this__4807__auto____$1 = this;
var G__21274 = (((k21272 instanceof cljs.core.Keyword))?k21272.fqn:null);
switch (G__21274) {
case "value":
return self__.value;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21272,else__4808__auto__);

}
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4819__auto__,writer__4820__auto__,opts__4821__auto__){
var self__ = this;
var this__4819__auto____$1 = this;
var pr_pair__4822__auto__ = ((function (this__4819__auto____$1){
return (function (keyval__4823__auto__){
return cljs.core.pr_sequential_writer(writer__4820__auto__,cljs.core.pr_writer,""," ","",opts__4821__auto__,keyval__4823__auto__);
});})(this__4819__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4820__auto__,pr_pair__4822__auto__,"#jamesmacaulay.zelkova.impl.signal.Cached{",", ","}",opts__4821__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$value,self__.value],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4803__auto__){
var self__ = this;
var this__4803__auto____$1 = this;
return self__.__meta;
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4799__auto__){
var self__ = this;
var this__4799__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.Cached(self__.value,self__.__meta,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4809__auto__){
var self__ = this;
var this__4809__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4800__auto__){
var self__ = this;
var this__4800__auto____$1 = this;
var h__4626__auto__ = self__.__hash;
if(!((h__4626__auto__ == null))){
return h__4626__auto__;
} else {
var h__4626__auto____$1 = cljs.core.hash_imap(this__4800__auto____$1);
self__.__hash = h__4626__auto____$1;

return h__4626__auto____$1;
}
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4801__auto__,other__4802__auto__){
var self__ = this;
var this__4801__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4198__auto__ = other__4802__auto__;
if(cljs.core.truth_(and__4198__auto__)){
var and__4198__auto____$1 = (this__4801__auto____$1.constructor === other__4802__auto__.constructor);
if(and__4198__auto____$1){
return cljs.core.equiv_map(this__4801__auto____$1,other__4802__auto__);
} else {
return and__4198__auto____$1;
}
} else {
return and__4198__auto__;
}
})())){
return true;
} else {
return false;
}
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.Cached.prototype.jamesmacaulay$zelkova$impl$signal$BoxedValueProtocol$value$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.value;
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.jamesmacaulay$zelkova$impl$signal$MessageProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.Cached.prototype.jamesmacaulay$zelkova$impl$signal$MessageProtocol$fresh_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return false;
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4814__auto__,k__4815__auto__){
var self__ = this;
var this__4814__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$value,null], null), null),k__4815__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4814__auto____$1),self__.__meta),k__4815__auto__);
} else {
return (new jamesmacaulay.zelkova.impl.signal.Cached(self__.value,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4815__auto__)),null));
}
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4812__auto__,k__4813__auto__,G__21271){
var self__ = this;
var this__4812__auto____$1 = this;
var pred__21275 = cljs.core.keyword_identical_QMARK_;
var expr__21276 = k__4813__auto__;
if(cljs.core.truth_((function (){var G__21278 = cljs.core.constant$keyword$value;
var G__21279 = expr__21276;
return (pred__21275.cljs$core$IFn$_invoke$arity$2 ? pred__21275.cljs$core$IFn$_invoke$arity$2(G__21278,G__21279) : pred__21275.call(null,G__21278,G__21279));
})())){
return (new jamesmacaulay.zelkova.impl.signal.Cached(G__21271,self__.__meta,self__.__extmap,null));
} else {
return (new jamesmacaulay.zelkova.impl.signal.Cached(self__.value,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4813__auto__,G__21271),null));
}
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4817__auto__){
var self__ = this;
var this__4817__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$value,self__.value],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4804__auto__,G__21271){
var self__ = this;
var this__4804__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.Cached(self__.value,G__21271,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.Cached.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4810__auto__,entry__4811__auto__){
var self__ = this;
var this__4810__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4811__auto__)){
return cljs.core._assoc(this__4810__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4811__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4811__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4810__auto____$1,entry__4811__auto__);
}
});

jamesmacaulay.zelkova.impl.signal.Cached.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"value","value",1946509744,null)], null);
});

jamesmacaulay.zelkova.impl.signal.Cached.cljs$lang$type = true;

jamesmacaulay.zelkova.impl.signal.Cached.cljs$lang$ctorPrSeq = (function (this__4839__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"jamesmacaulay.zelkova.impl.signal/Cached");
});

jamesmacaulay.zelkova.impl.signal.Cached.cljs$lang$ctorPrWriter = (function (this__4839__auto__,writer__4840__auto__){
return cljs.core._write(writer__4840__auto__,"jamesmacaulay.zelkova.impl.signal/Cached");
});

jamesmacaulay.zelkova.impl.signal.__GT_Cached = (function jamesmacaulay$zelkova$impl$signal$__GT_Cached(value){
return (new jamesmacaulay.zelkova.impl.signal.Cached(value,null,null,null));
});

jamesmacaulay.zelkova.impl.signal.map__GT_Cached = (function jamesmacaulay$zelkova$impl$signal$map__GT_Cached(G__21273){
return (new jamesmacaulay.zelkova.impl.signal.Cached(cljs.core.constant$keyword$value.cljs$core$IFn$_invoke$arity$1(G__21273),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__21273,cljs.core.constant$keyword$value),null));
});

jamesmacaulay.zelkova.impl.signal.fresh = (function jamesmacaulay$zelkova$impl$signal$fresh(value){
return jamesmacaulay.zelkova.impl.signal.__GT_Fresh(value);
});
jamesmacaulay.zelkova.impl.signal.cached = (function jamesmacaulay$zelkova$impl$signal$cached(value){
return jamesmacaulay.zelkova.impl.signal.__GT_Cached(value);
});
/**
 * A transducer which takes in batches of signal graph messages and pipes out fresh values.
 */
jamesmacaulay.zelkova.impl.signal.fresh_values = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.cat,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(jamesmacaulay.zelkova.impl.signal.fresh_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(jamesmacaulay.zelkova.impl.signal.value));

jamesmacaulay.zelkova.impl.signal.SignalProtocol = (function (){var obj21282 = {};
return obj21282;
})();

jamesmacaulay.zelkova.impl.signal.input_QMARK_ = (function jamesmacaulay$zelkova$impl$signal$input_QMARK_(s){
if((function (){var and__4198__auto__ = s;
if(and__4198__auto__){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$input_QMARK_$arity$1;
} else {
return and__4198__auto__;
}
})()){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$input_QMARK_$arity$1(s);
} else {
var x__4846__auto__ = (((s == null))?null:s);
return (function (){var or__4210__auto__ = (jamesmacaulay.zelkova.impl.signal.input_QMARK_[(function (){var G__21286 = x__4846__auto__;
return goog.typeOf(G__21286);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (jamesmacaulay.zelkova.impl.signal.input_QMARK_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("SignalProtocol.input?",s);
}
}
})().call(null,s);
}
});

/**
 * returns the set of "parent" signals on which this signal depends
 */
jamesmacaulay.zelkova.impl.signal.signal_deps = (function jamesmacaulay$zelkova$impl$signal$signal_deps(s){
if((function (){var and__4198__auto__ = s;
if(and__4198__auto__){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$signal_deps$arity$1;
} else {
return and__4198__auto__;
}
})()){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$signal_deps$arity$1(s);
} else {
var x__4846__auto__ = (((s == null))?null:s);
return (function (){var or__4210__auto__ = (jamesmacaulay.zelkova.impl.signal.signal_deps[(function (){var G__21290 = x__4846__auto__;
return goog.typeOf(G__21290);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (jamesmacaulay.zelkova.impl.signal.signal_deps["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("SignalProtocol.signal-deps",s);
}
}
})().call(null,s);
}
});

jamesmacaulay.zelkova.impl.signal.parents_map = (function jamesmacaulay$zelkova$impl$signal$parents_map(s){
if((function (){var and__4198__auto__ = s;
if(and__4198__auto__){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$parents_map$arity$1;
} else {
return and__4198__auto__;
}
})()){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$parents_map$arity$1(s);
} else {
var x__4846__auto__ = (((s == null))?null:s);
return (function (){var or__4210__auto__ = (jamesmacaulay.zelkova.impl.signal.parents_map[(function (){var G__21294 = x__4846__auto__;
return goog.typeOf(G__21294);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (jamesmacaulay.zelkova.impl.signal.parents_map["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("SignalProtocol.parents-map",s);
}
}
})().call(null,s);
}
});

jamesmacaulay.zelkova.impl.signal.kids_map = (function jamesmacaulay$zelkova$impl$signal$kids_map(s){
if((function (){var and__4198__auto__ = s;
if(and__4198__auto__){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$kids_map$arity$1;
} else {
return and__4198__auto__;
}
})()){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$kids_map$arity$1(s);
} else {
var x__4846__auto__ = (((s == null))?null:s);
return (function (){var or__4210__auto__ = (jamesmacaulay.zelkova.impl.signal.kids_map[(function (){var G__21298 = x__4846__auto__;
return goog.typeOf(G__21298);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (jamesmacaulay.zelkova.impl.signal.kids_map["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("SignalProtocol.kids-map",s);
}
}
})().call(null,s);
}
});

jamesmacaulay.zelkova.impl.signal.topsort = (function jamesmacaulay$zelkova$impl$signal$topsort(s){
if((function (){var and__4198__auto__ = s;
if(and__4198__auto__){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$topsort$arity$1;
} else {
return and__4198__auto__;
}
})()){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$topsort$arity$1(s);
} else {
var x__4846__auto__ = (((s == null))?null:s);
return (function (){var or__4210__auto__ = (jamesmacaulay.zelkova.impl.signal.topsort[(function (){var G__21302 = x__4846__auto__;
return goog.typeOf(G__21302);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (jamesmacaulay.zelkova.impl.signal.topsort["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("SignalProtocol.topsort",s);
}
}
})().call(null,s);
}
});

jamesmacaulay.zelkova.impl.signal.inputs_by_topic = (function jamesmacaulay$zelkova$impl$signal$inputs_by_topic(s){
if((function (){var and__4198__auto__ = s;
if(and__4198__auto__){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$inputs_by_topic$arity$1;
} else {
return and__4198__auto__;
}
})()){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$inputs_by_topic$arity$1(s);
} else {
var x__4846__auto__ = (((s == null))?null:s);
return (function (){var or__4210__auto__ = (jamesmacaulay.zelkova.impl.signal.inputs_by_topic[(function (){var G__21306 = x__4846__auto__;
return goog.typeOf(G__21306);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (jamesmacaulay.zelkova.impl.signal.inputs_by_topic["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("SignalProtocol.inputs-by-topic",s);
}
}
})().call(null,s);
}
});

jamesmacaulay.zelkova.impl.signal.kid_indexes_map = (function jamesmacaulay$zelkova$impl$signal$kid_indexes_map(s){
if((function (){var and__4198__auto__ = s;
if(and__4198__auto__){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$kid_indexes_map$arity$1;
} else {
return and__4198__auto__;
}
})()){
return s.jamesmacaulay$zelkova$impl$signal$SignalProtocol$kid_indexes_map$arity$1(s);
} else {
var x__4846__auto__ = (((s == null))?null:s);
return (function (){var or__4210__auto__ = (jamesmacaulay.zelkova.impl.signal.kid_indexes_map[(function (){var G__21310 = x__4846__auto__;
return goog.typeOf(G__21310);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (jamesmacaulay.zelkova.impl.signal.kid_indexes_map["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("SignalProtocol.kid-indexes-map",s);
}
}
})().call(null,s);
}
});

/**
 * returns `true` if the argument satisfies `SignalProtocol`, `false` otherwise
 */
jamesmacaulay.zelkova.impl.signal.signal_QMARK_ = (function jamesmacaulay$zelkova$impl$signal$signal_QMARK_(x){
var G__21312 = x;
if(G__21312){
var bit__4884__auto__ = null;
if(cljs.core.truth_((function (){var or__4210__auto__ = bit__4884__auto__;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return G__21312.jamesmacaulay$zelkova$impl$signal$SignalProtocol$;
}
})())){
return true;
} else {
if((!G__21312.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(jamesmacaulay.zelkova.impl.signal.SignalProtocol,G__21312);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(jamesmacaulay.zelkova.impl.signal.SignalProtocol,G__21312);
}
});
/**
 * Takes a signal and returns a zipper which can be used to traverse the signal graph.
 */
jamesmacaulay.zelkova.impl.signal.node_graph_zipper = (function jamesmacaulay$zelkova$impl$signal$node_graph_zipper(output_node){
return clojure.zip.zipper(cljs.core.constantly(true),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,jamesmacaulay.zelkova.impl.signal.signal_deps),null,output_node);
});
/**
 * Returns a new zipper location that skips the whole subtree at `loc`.
 */
jamesmacaulay.zelkova.impl.signal.skip_subtree = (function jamesmacaulay$zelkova$impl$signal$skip_subtree(loc){
var or__4210__auto__ = clojure.zip.right(loc);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
var p = loc;
while(true){
if(cljs.core.truth_(clojure.zip.up(p))){
var or__4210__auto____$1 = clojure.zip.right(clojure.zip.up(p));
if(cljs.core.truth_(or__4210__auto____$1)){
return or__4210__auto____$1;
} else {
var G__21313 = clojure.zip.up(p);
p = G__21313;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [clojure.zip.node(p),cljs.core.constant$keyword$end], null);
}
break;
}
}
});
/**
 * Takes a signal and returns a map of two maps:
 * :parents-map is a map of signals to their parents,
 * :kids-map is a map of signals to their children.
 */
jamesmacaulay.zelkova.impl.signal.calculate_dependency_maps = (function jamesmacaulay$zelkova$impl$signal$calculate_dependency_maps(signal){
var parents_map = cljs.core.PersistentArrayMap.EMPTY;
var kids_map = new cljs.core.PersistentArrayMap.fromArray([signal,cljs.core.PersistentHashSet.EMPTY], true, false);
var loc = jamesmacaulay.zelkova.impl.signal.node_graph_zipper(signal);
while(true){
if(cljs.core.truth_(clojure.zip.end_QMARK_(loc))){
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$parents_DASH_map,parents_map,cljs.core.constant$keyword$kids_DASH_map,kids_map], null);
} else {
if(cljs.core.contains_QMARK_(parents_map,clojure.zip.node(loc))){
var G__21314 = parents_map;
var G__21315 = kids_map;
var G__21316 = jamesmacaulay.zelkova.impl.signal.skip_subtree(loc);
parents_map = G__21314;
kids_map = G__21315;
loc = G__21316;
continue;
} else {
var this_sig = clojure.zip.node(loc);
var parents = jamesmacaulay.zelkova.impl.signal.signal_deps(this_sig);
var next_sig = clojure.zip.next(loc);
var G__21317 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parents_map,this_sig,parents);
var G__21318 = cljs.core.merge_with.cljs$core$IFn$_invoke$arity$variadic(clojure.set.union,cljs.core.array_seq([kids_map,cljs.core.zipmap(parents,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.fromArray([this_sig], true)))], 0));
var G__21319 = next_sig;
parents_map = G__21317;
kids_map = G__21318;
loc = G__21319;
continue;

}
}
break;
}
});
jamesmacaulay.zelkova.impl.signal.parents_map__GT_topsort = (function jamesmacaulay$zelkova$impl$signal$parents_map__GT_topsort(pm){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.reverse(alandipert.kahn.kahn_sort.cljs$core$IFn$_invoke$arity$1(pm)));
});
jamesmacaulay.zelkova.impl.signal.topsort__GT_topic_map = (function jamesmacaulay$zelkova$impl$signal$topsort__GT_topic_map(sorted_sigs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,sig){
var temp__4423__auto__ = cljs.core.constant$keyword$relayed_DASH_event_DASH_topic.cljs$core$IFn$_invoke$arity$1(sig);
if(cljs.core.truth_(temp__4423__auto__)){
var topic = temp__4423__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,topic,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(m,topic,cljs.core.PersistentVector.EMPTY),sig));
} else {
return m;
}
}),cljs.core.PersistentArrayMap.EMPTY,sorted_sigs);
});
jamesmacaulay.zelkova.impl.signal.build_kid_indexes_map = (function jamesmacaulay$zelkova$impl$signal$build_kid_indexes_map(kids_map,sorted_sigs){
var signal__GT_index = cljs.core.zipmap(sorted_sigs,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var signals__GT_sorted_index_set = ((function (signal__GT_index){
return (function (p1__21320_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.sorted_set(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(signal__GT_index),p1__21320_SHARP_);
});})(signal__GT_index))
;
return cljs.core.zipmap(cljs.core.keys(kids_map),cljs.core.map.cljs$core$IFn$_invoke$arity$2(signals__GT_sorted_index_set,cljs.core.vals(kids_map)));
});

/**
* @constructor
* @param {*} parents_map
* @param {*} kids_map
* @param {*} topsort
* @param {*} kid_indexes_map
* @param {*} inputs_by_topic
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata = (function (parents_map,kids_map,topsort,kid_indexes_map,inputs_by_topic,__meta,__extmap,__hash){
this.parents_map = parents_map;
this.kids_map = kids_map;
this.topsort = topsort;
this.kid_indexes_map = kid_indexes_map;
this.inputs_by_topic = inputs_by_topic;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4805__auto__,k__4806__auto__){
var self__ = this;
var this__4805__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4805__auto____$1,k__4806__auto__,null);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4807__auto__,k21322,else__4808__auto__){
var self__ = this;
var this__4807__auto____$1 = this;
var G__21324 = (((k21322 instanceof cljs.core.Keyword))?k21322.fqn:null);
switch (G__21324) {
case "parents-map":
return self__.parents_map;

break;
case "kids-map":
return self__.kids_map;

break;
case "topsort":
return self__.topsort;

break;
case "kid-indexes-map":
return self__.kid_indexes_map;

break;
case "inputs-by-topic":
return self__.inputs_by_topic;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21322,else__4808__auto__);

}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4819__auto__,writer__4820__auto__,opts__4821__auto__){
var self__ = this;
var this__4819__auto____$1 = this;
var pr_pair__4822__auto__ = ((function (this__4819__auto____$1){
return (function (keyval__4823__auto__){
return cljs.core.pr_sequential_writer(writer__4820__auto__,cljs.core.pr_writer,""," ","",opts__4821__auto__,keyval__4823__auto__);
});})(this__4819__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4820__auto__,pr_pair__4822__auto__,"#jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata{",", ","}",opts__4821__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$parents_DASH_map,self__.parents_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$kids_DASH_map,self__.kids_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$topsort,self__.topsort],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$kid_DASH_indexes_DASH_map,self__.kid_indexes_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$inputs_DASH_by_DASH_topic,self__.inputs_by_topic],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4803__auto__){
var self__ = this;
var this__4803__auto____$1 = this;
return self__.__meta;
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4799__auto__){
var self__ = this;
var this__4799__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,self__.topsort,self__.kid_indexes_map,self__.inputs_by_topic,self__.__meta,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4809__auto__){
var self__ = this;
var this__4809__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4800__auto__){
var self__ = this;
var this__4800__auto____$1 = this;
var h__4626__auto__ = self__.__hash;
if(!((h__4626__auto__ == null))){
return h__4626__auto__;
} else {
var h__4626__auto____$1 = cljs.core.hash_imap(this__4800__auto____$1);
self__.__hash = h__4626__auto____$1;

return h__4626__auto____$1;
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4801__auto__,other__4802__auto__){
var self__ = this;
var this__4801__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4198__auto__ = other__4802__auto__;
if(cljs.core.truth_(and__4198__auto__)){
var and__4198__auto____$1 = (this__4801__auto____$1.constructor === other__4802__auto__.constructor);
if(and__4198__auto____$1){
return cljs.core.equiv_map(this__4801__auto____$1,other__4802__auto__);
} else {
return and__4198__auto____$1;
}
} else {
return and__4198__auto__;
}
})())){
return true;
} else {
return false;
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4814__auto__,k__4815__auto__){
var self__ = this;
var this__4814__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$kids_DASH_map,null,cljs.core.constant$keyword$kid_DASH_indexes_DASH_map,null,cljs.core.constant$keyword$topsort,null,cljs.core.constant$keyword$inputs_DASH_by_DASH_topic,null,cljs.core.constant$keyword$parents_DASH_map,null], null), null),k__4815__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4814__auto____$1),self__.__meta),k__4815__auto__);
} else {
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,self__.topsort,self__.kid_indexes_map,self__.inputs_by_topic,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4815__auto__)),null));
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4812__auto__,k__4813__auto__,G__21321){
var self__ = this;
var this__4812__auto____$1 = this;
var pred__21325 = cljs.core.keyword_identical_QMARK_;
var expr__21326 = k__4813__auto__;
if(cljs.core.truth_((function (){var G__21328 = cljs.core.constant$keyword$parents_DASH_map;
var G__21329 = expr__21326;
return (pred__21325.cljs$core$IFn$_invoke$arity$2 ? pred__21325.cljs$core$IFn$_invoke$arity$2(G__21328,G__21329) : pred__21325.call(null,G__21328,G__21329));
})())){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(G__21321,self__.kids_map,self__.topsort,self__.kid_indexes_map,self__.inputs_by_topic,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21330 = cljs.core.constant$keyword$kids_DASH_map;
var G__21331 = expr__21326;
return (pred__21325.cljs$core$IFn$_invoke$arity$2 ? pred__21325.cljs$core$IFn$_invoke$arity$2(G__21330,G__21331) : pred__21325.call(null,G__21330,G__21331));
})())){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,G__21321,self__.topsort,self__.kid_indexes_map,self__.inputs_by_topic,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21332 = cljs.core.constant$keyword$topsort;
var G__21333 = expr__21326;
return (pred__21325.cljs$core$IFn$_invoke$arity$2 ? pred__21325.cljs$core$IFn$_invoke$arity$2(G__21332,G__21333) : pred__21325.call(null,G__21332,G__21333));
})())){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,G__21321,self__.kid_indexes_map,self__.inputs_by_topic,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21334 = cljs.core.constant$keyword$kid_DASH_indexes_DASH_map;
var G__21335 = expr__21326;
return (pred__21325.cljs$core$IFn$_invoke$arity$2 ? pred__21325.cljs$core$IFn$_invoke$arity$2(G__21334,G__21335) : pred__21325.call(null,G__21334,G__21335));
})())){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,self__.topsort,G__21321,self__.inputs_by_topic,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21336 = cljs.core.constant$keyword$inputs_DASH_by_DASH_topic;
var G__21337 = expr__21326;
return (pred__21325.cljs$core$IFn$_invoke$arity$2 ? pred__21325.cljs$core$IFn$_invoke$arity$2(G__21336,G__21337) : pred__21325.call(null,G__21336,G__21337));
})())){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,self__.topsort,self__.kid_indexes_map,G__21321,self__.__meta,self__.__extmap,null));
} else {
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,self__.topsort,self__.kid_indexes_map,self__.inputs_by_topic,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4813__auto__,G__21321),null));
}
}
}
}
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4817__auto__){
var self__ = this;
var this__4817__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$parents_DASH_map,self__.parents_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$kids_DASH_map,self__.kids_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$topsort,self__.topsort],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$kid_DASH_indexes_DASH_map,self__.kid_indexes_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$inputs_DASH_by_DASH_topic,self__.inputs_by_topic],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4804__auto__,G__21321){
var self__ = this;
var this__4804__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(self__.parents_map,self__.kids_map,self__.topsort,self__.kid_indexes_map,self__.inputs_by_topic,G__21321,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4810__auto__,entry__4811__auto__){
var self__ = this;
var this__4810__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4811__auto__)){
return cljs.core._assoc(this__4810__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4811__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4811__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4810__auto____$1,entry__4811__auto__);
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"parents-map","parents-map",591846625,null),new cljs.core.Symbol(null,"kids-map","kids-map",-2011339829,null),new cljs.core.Symbol(null,"topsort","topsort",921717118,null),new cljs.core.Symbol(null,"kid-indexes-map","kid-indexes-map",519621521,null),new cljs.core.Symbol(null,"inputs-by-topic","inputs-by-topic",-680485601,null)], null);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.cljs$lang$type = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.cljs$lang$ctorPrSeq = (function (this__4839__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"jamesmacaulay.zelkova.impl.signal/SignalDefinitionMetadata");
});

jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata.cljs$lang$ctorPrWriter = (function (this__4839__auto__,writer__4840__auto__){
return cljs.core._write(writer__4840__auto__,"jamesmacaulay.zelkova.impl.signal/SignalDefinitionMetadata");
});

jamesmacaulay.zelkova.impl.signal.__GT_SignalDefinitionMetadata = (function jamesmacaulay$zelkova$impl$signal$__GT_SignalDefinitionMetadata(parents_map,kids_map,topsort,kid_indexes_map,inputs_by_topic){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(parents_map,kids_map,topsort,kid_indexes_map,inputs_by_topic,null,null,null));
});

jamesmacaulay.zelkova.impl.signal.map__GT_SignalDefinitionMetadata = (function jamesmacaulay$zelkova$impl$signal$map__GT_SignalDefinitionMetadata(G__21323){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinitionMetadata(cljs.core.constant$keyword$parents_DASH_map.cljs$core$IFn$_invoke$arity$1(G__21323),cljs.core.constant$keyword$kids_DASH_map.cljs$core$IFn$_invoke$arity$1(G__21323),cljs.core.constant$keyword$topsort.cljs$core$IFn$_invoke$arity$1(G__21323),cljs.core.constant$keyword$kid_DASH_indexes_DASH_map.cljs$core$IFn$_invoke$arity$1(G__21323),cljs.core.constant$keyword$inputs_DASH_by_DASH_topic.cljs$core$IFn$_invoke$arity$1(G__21323),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21323,cljs.core.constant$keyword$parents_DASH_map,cljs.core.array_seq([cljs.core.constant$keyword$kids_DASH_map,cljs.core.constant$keyword$topsort,cljs.core.constant$keyword$kid_DASH_indexes_DASH_map,cljs.core.constant$keyword$inputs_DASH_by_DASH_topic], 0)),null));
});

jamesmacaulay.zelkova.impl.signal.attach_delayed_metadata = (function jamesmacaulay$zelkova$impl$signal$attach_delayed_metadata(sig){
var delayed_dep_maps = (new cljs.core.Delay((function (){
return jamesmacaulay.zelkova.impl.signal.calculate_dependency_maps(sig);
}),null));
var delayed_parents_map = (new cljs.core.Delay(((function (delayed_dep_maps){
return (function (){
return cljs.core.constant$keyword$parents_DASH_map.cljs$core$IFn$_invoke$arity$1((function (){var G__21345 = delayed_dep_maps;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21345) : cljs.core.deref.call(null,G__21345));
})());
});})(delayed_dep_maps))
,null));
var delayed_kids_map = (new cljs.core.Delay(((function (delayed_dep_maps,delayed_parents_map){
return (function (){
return cljs.core.constant$keyword$kids_DASH_map.cljs$core$IFn$_invoke$arity$1((function (){var G__21346 = delayed_dep_maps;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21346) : cljs.core.deref.call(null,G__21346));
})());
});})(delayed_dep_maps,delayed_parents_map))
,null));
var delayed_topsort = (new cljs.core.Delay(((function (delayed_dep_maps,delayed_parents_map,delayed_kids_map){
return (function (){
return jamesmacaulay.zelkova.impl.signal.parents_map__GT_topsort((function (){var G__21347 = delayed_parents_map;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21347) : cljs.core.deref.call(null,G__21347));
})());
});})(delayed_dep_maps,delayed_parents_map,delayed_kids_map))
,null));
var delayed_topic_map = (new cljs.core.Delay(((function (delayed_dep_maps,delayed_parents_map,delayed_kids_map,delayed_topsort){
return (function (){
return jamesmacaulay.zelkova.impl.signal.topsort__GT_topic_map((function (){var G__21348 = delayed_topsort;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21348) : cljs.core.deref.call(null,G__21348));
})());
});})(delayed_dep_maps,delayed_parents_map,delayed_kids_map,delayed_topsort))
,null));
var delayed_kid_indexes_map = (new cljs.core.Delay(((function (delayed_dep_maps,delayed_parents_map,delayed_kids_map,delayed_topsort,delayed_topic_map){
return (function (){
return jamesmacaulay.zelkova.impl.signal.build_kid_indexes_map((function (){var G__21349 = delayed_kids_map;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21349) : cljs.core.deref.call(null,G__21349));
})(),(function (){var G__21350 = delayed_topsort;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21350) : cljs.core.deref.call(null,G__21350));
})());
});})(delayed_dep_maps,delayed_parents_map,delayed_kids_map,delayed_topsort,delayed_topic_map))
,null));
return cljs.core.with_meta(sig,jamesmacaulay.zelkova.impl.signal.__GT_SignalDefinitionMetadata(delayed_parents_map,delayed_kids_map,delayed_topsort,delayed_kid_indexes_map,delayed_topic_map));
});
jamesmacaulay.zelkova.impl.signal.delegate_to_channel = (function jamesmacaulay$zelkova$impl$signal$delegate_to_channel(){
var argseq__5250__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return jamesmacaulay.zelkova.impl.signal.delegate_to_channel.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5250__auto__);
});

jamesmacaulay.zelkova.impl.signal.delegate_to_channel.cljs$core$IFn$_invoke$arity$variadic = (function (f,ch,args){
if(!((ch == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("This signal is not a valid write-port, use the `jamesmacaulay.zelkova.signal/write-port` constructor if you want to treat this signal like a channel."),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null)))], 0)))].join('')));
}

return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,ch,args);
});

jamesmacaulay.zelkova.impl.signal.delegate_to_channel.cljs$lang$maxFixedArity = (2);

jamesmacaulay.zelkova.impl.signal.delegate_to_channel.cljs$lang$applyTo = (function (seq21351){
var G__21352 = cljs.core.first(seq21351);
var seq21351__$1 = cljs.core.next(seq21351);
var G__21353 = cljs.core.first(seq21351__$1);
var seq21351__$2 = cljs.core.next(seq21351__$1);
return jamesmacaulay.zelkova.impl.signal.delegate_to_channel.cljs$core$IFn$_invoke$arity$variadic(G__21352,G__21353,seq21351__$2);
});

/**
* @constructor
* @param {*} init_fn
* @param {*} sources
* @param {*} relayed_event_topic
* @param {*} msg_xform
* @param {*} deps
* @param {*} event_sources
* @param {*} write_port_channel
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
jamesmacaulay.zelkova.impl.signal.SignalDefinition = (function (init_fn,sources,relayed_event_topic,msg_xform,deps,event_sources,write_port_channel,__meta,__extmap,__hash){
this.init_fn = init_fn;
this.sources = sources;
this.relayed_event_topic = relayed_event_topic;
this.msg_xform = msg_xform;
this.deps = deps;
this.event_sources = event_sources;
this.write_port_channel = write_port_channel;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4805__auto__,k__4806__auto__){
var self__ = this;
var this__4805__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4805__auto____$1,k__4806__auto__,null);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4807__auto__,k21355,else__4808__auto__){
var self__ = this;
var this__4807__auto____$1 = this;
var G__21357 = (((k21355 instanceof cljs.core.Keyword))?k21355.fqn:null);
switch (G__21357) {
case "init-fn":
return self__.init_fn;

break;
case "sources":
return self__.sources;

break;
case "relayed-event-topic":
return self__.relayed_event_topic;

break;
case "msg-xform":
return self__.msg_xform;

break;
case "deps":
return self__.deps;

break;
case "event-sources":
return self__.event_sources;

break;
case "write-port-channel":
return self__.write_port_channel;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21355,else__4808__auto__);

}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$async$impl$protocols$Channel$ = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return jamesmacaulay.zelkova.impl.signal.delegate_to_channel(cljs.core.async.impl.protocols.close_BANG_,self__.write_port_channel);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return jamesmacaulay.zelkova.impl.signal.delegate_to_channel(cljs.core.async.impl.protocols.closed_QMARK_,self__.write_port_channel);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4819__auto__,writer__4820__auto__,opts__4821__auto__){
var self__ = this;
var this__4819__auto____$1 = this;
var pr_pair__4822__auto__ = ((function (this__4819__auto____$1){
return (function (keyval__4823__auto__){
return cljs.core.pr_sequential_writer(writer__4820__auto__,cljs.core.pr_writer,""," ","",opts__4821__auto__,keyval__4823__auto__);
});})(this__4819__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4820__auto__,pr_pair__4822__auto__,"#jamesmacaulay.zelkova.impl.signal.SignalDefinition{",", ","}",opts__4821__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$init_DASH_fn,self__.init_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$sources,self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$relayed_DASH_event_DASH_topic,self__.relayed_event_topic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$msg_DASH_xform,self__.msg_xform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$deps,self__.deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$event_DASH_sources,self__.event_sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$write_DASH_port_DASH_channel,self__.write_port_channel],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4803__auto__){
var self__ = this;
var this__4803__auto____$1 = this;
return self__.__meta;
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4799__auto__){
var self__ = this;
var this__4799__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4809__auto__){
var self__ = this;
var this__4809__auto____$1 = this;
return (7 + cljs.core.count(self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4800__auto__){
var self__ = this;
var this__4800__auto____$1 = this;
var h__4626__auto__ = self__.__hash;
if(!((h__4626__auto__ == null))){
return h__4626__auto__;
} else {
var h__4626__auto____$1 = cljs.core.hash_imap(this__4800__auto____$1);
self__.__hash = h__4626__auto____$1;

return h__4626__auto____$1;
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4801__auto__,other__4802__auto__){
var self__ = this;
var this__4801__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4198__auto__ = other__4802__auto__;
if(cljs.core.truth_(and__4198__auto__)){
var and__4198__auto____$1 = (this__4801__auto____$1.constructor === other__4802__auto__.constructor);
if(and__4198__auto____$1){
return cljs.core.equiv_map(this__4801__auto____$1,other__4802__auto__);
} else {
return and__4198__auto____$1;
}
} else {
return and__4198__auto__;
}
})())){
return true;
} else {
return false;
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$input_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.some(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$events,null], null), null),self__.sources);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$signal_deps$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(jamesmacaulay.zelkova.impl.signal.signal_QMARK_),(function (){var or__4210__auto__ = self__.deps;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return self__.sources;
}
})());
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$parents_map$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
var G__21358 = cljs.core.constant$keyword$parents_DASH_map.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(s__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21358) : cljs.core.deref.call(null,G__21358));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$kids_map$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
var G__21359 = cljs.core.constant$keyword$kids_DASH_map.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(s__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21359) : cljs.core.deref.call(null,G__21359));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$topsort$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
var G__21360 = cljs.core.constant$keyword$topsort.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(s__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21360) : cljs.core.deref.call(null,G__21360));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$inputs_by_topic$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
var G__21361 = cljs.core.constant$keyword$inputs_DASH_by_DASH_topic.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(s__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21361) : cljs.core.deref.call(null,G__21361));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalProtocol$kid_indexes_map$arity$1 = (function (s){
var self__ = this;
var s__$1 = this;
var G__21362 = cljs.core.constant$keyword$kid_DASH_indexes_DASH_map.cljs$core$IFn$_invoke$arity$1(cljs.core.meta(s__$1));
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__21362) : cljs.core.deref.call(null,G__21362));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1_handler){
var self__ = this;
var ___$1 = this;
return jamesmacaulay.zelkova.impl.signal.delegate_to_channel.cljs$core$IFn$_invoke$arity$variadic(cljs.core.async.impl.protocols.put_BANG_,self__.write_port_channel,cljs.core.array_seq([val,fn1_handler], 0));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4814__auto__,k__4815__auto__){
var self__ = this;
var this__4814__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [cljs.core.constant$keyword$event_DASH_sources,null,cljs.core.constant$keyword$sources,null,cljs.core.constant$keyword$write_DASH_port_DASH_channel,null,cljs.core.constant$keyword$init_DASH_fn,null,cljs.core.constant$keyword$relayed_DASH_event_DASH_topic,null,cljs.core.constant$keyword$msg_DASH_xform,null,cljs.core.constant$keyword$deps,null], null), null),k__4815__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4814__auto____$1),self__.__meta),k__4815__auto__);
} else {
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4815__auto__)),null));
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4812__auto__,k__4813__auto__,G__21354){
var self__ = this;
var this__4812__auto____$1 = this;
var pred__21363 = cljs.core.keyword_identical_QMARK_;
var expr__21364 = k__4813__auto__;
if(cljs.core.truth_((function (){var G__21366 = cljs.core.constant$keyword$init_DASH_fn;
var G__21367 = expr__21364;
return (pred__21363.cljs$core$IFn$_invoke$arity$2 ? pred__21363.cljs$core$IFn$_invoke$arity$2(G__21366,G__21367) : pred__21363.call(null,G__21366,G__21367));
})())){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(G__21354,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21368 = cljs.core.constant$keyword$sources;
var G__21369 = expr__21364;
return (pred__21363.cljs$core$IFn$_invoke$arity$2 ? pred__21363.cljs$core$IFn$_invoke$arity$2(G__21368,G__21369) : pred__21363.call(null,G__21368,G__21369));
})())){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,G__21354,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21370 = cljs.core.constant$keyword$relayed_DASH_event_DASH_topic;
var G__21371 = expr__21364;
return (pred__21363.cljs$core$IFn$_invoke$arity$2 ? pred__21363.cljs$core$IFn$_invoke$arity$2(G__21370,G__21371) : pred__21363.call(null,G__21370,G__21371));
})())){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,G__21354,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21372 = cljs.core.constant$keyword$msg_DASH_xform;
var G__21373 = expr__21364;
return (pred__21363.cljs$core$IFn$_invoke$arity$2 ? pred__21363.cljs$core$IFn$_invoke$arity$2(G__21372,G__21373) : pred__21363.call(null,G__21372,G__21373));
})())){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,G__21354,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21374 = cljs.core.constant$keyword$deps;
var G__21375 = expr__21364;
return (pred__21363.cljs$core$IFn$_invoke$arity$2 ? pred__21363.cljs$core$IFn$_invoke$arity$2(G__21374,G__21375) : pred__21363.call(null,G__21374,G__21375));
})())){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,G__21354,self__.event_sources,self__.write_port_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21376 = cljs.core.constant$keyword$event_DASH_sources;
var G__21377 = expr__21364;
return (pred__21363.cljs$core$IFn$_invoke$arity$2 ? pred__21363.cljs$core$IFn$_invoke$arity$2(G__21376,G__21377) : pred__21363.call(null,G__21376,G__21377));
})())){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,G__21354,self__.write_port_channel,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21378 = cljs.core.constant$keyword$write_DASH_port_DASH_channel;
var G__21379 = expr__21364;
return (pred__21363.cljs$core$IFn$_invoke$arity$2 ? pred__21363.cljs$core$IFn$_invoke$arity$2(G__21378,G__21379) : pred__21363.call(null,G__21378,G__21379));
})())){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,G__21354,self__.__meta,self__.__extmap,null));
} else {
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4813__auto__,G__21354),null));
}
}
}
}
}
}
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4817__auto__){
var self__ = this;
var this__4817__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$init_DASH_fn,self__.init_fn],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$sources,self__.sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$relayed_DASH_event_DASH_topic,self__.relayed_event_topic],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$msg_DASH_xform,self__.msg_xform],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$deps,self__.deps],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$event_DASH_sources,self__.event_sources],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$write_DASH_port_DASH_channel,self__.write_port_channel],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4804__auto__,G__21354){
var self__ = this;
var this__4804__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(self__.init_fn,self__.sources,self__.relayed_event_topic,self__.msg_xform,self__.deps,self__.event_sources,self__.write_port_channel,G__21354,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4810__auto__,entry__4811__auto__){
var self__ = this;
var this__4810__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4811__auto__)){
return cljs.core._assoc(this__4810__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4811__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4811__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4810__auto____$1,entry__4811__auto__);
}
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"init-fn","init-fn",-1877177798,null),new cljs.core.Symbol(null,"sources","sources",1319365103,null),new cljs.core.Symbol(null,"relayed-event-topic","relayed-event-topic",1964384988,null),new cljs.core.Symbol(null,"msg-xform","msg-xform",209279042,null),new cljs.core.Symbol(null,"deps","deps",-771075450,null),new cljs.core.Symbol(null,"event-sources","event-sources",-1945504056,null),new cljs.core.Symbol(null,"write-port-channel","write-port-channel",863579225,null)], null);
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.cljs$lang$type = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinition.cljs$lang$ctorPrSeq = (function (this__4839__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"jamesmacaulay.zelkova.impl.signal/SignalDefinition");
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.cljs$lang$ctorPrWriter = (function (this__4839__auto__,writer__4840__auto__){
return cljs.core._write(writer__4840__auto__,"jamesmacaulay.zelkova.impl.signal/SignalDefinition");
});

jamesmacaulay.zelkova.impl.signal.__GT_SignalDefinition = (function jamesmacaulay$zelkova$impl$signal$__GT_SignalDefinition(init_fn,sources,relayed_event_topic,msg_xform,deps,event_sources,write_port_channel){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(init_fn,sources,relayed_event_topic,msg_xform,deps,event_sources,write_port_channel,null,null,null));
});

jamesmacaulay.zelkova.impl.signal.map__GT_SignalDefinition = (function jamesmacaulay$zelkova$impl$signal$map__GT_SignalDefinition(G__21356){
return (new jamesmacaulay.zelkova.impl.signal.SignalDefinition(cljs.core.constant$keyword$init_DASH_fn.cljs$core$IFn$_invoke$arity$1(G__21356),cljs.core.constant$keyword$sources.cljs$core$IFn$_invoke$arity$1(G__21356),cljs.core.constant$keyword$relayed_DASH_event_DASH_topic.cljs$core$IFn$_invoke$arity$1(G__21356),cljs.core.constant$keyword$msg_DASH_xform.cljs$core$IFn$_invoke$arity$1(G__21356),cljs.core.constant$keyword$deps.cljs$core$IFn$_invoke$arity$1(G__21356),cljs.core.constant$keyword$event_DASH_sources.cljs$core$IFn$_invoke$arity$1(G__21356),cljs.core.constant$keyword$write_DASH_port_DASH_channel.cljs$core$IFn$_invoke$arity$1(G__21356),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21356,cljs.core.constant$keyword$init_DASH_fn,cljs.core.array_seq([cljs.core.constant$keyword$sources,cljs.core.constant$keyword$relayed_DASH_event_DASH_topic,cljs.core.constant$keyword$msg_DASH_xform,cljs.core.constant$keyword$deps,cljs.core.constant$keyword$event_DASH_sources,cljs.core.constant$keyword$write_DASH_port_DASH_channel], 0)),null));
});

/**
 * Takes a topic, and returns an input signal which relays matching events as messages to its children
 */
jamesmacaulay.zelkova.impl.signal.setup_event_relay = (function jamesmacaulay$zelkova$impl$signal$setup_event_relay(opts){
var temp__4423__auto__ = cljs.core.constant$keyword$relayed_DASH_event_DASH_topic.cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(temp__4423__auto__)){
var relayed_topic = temp__4423__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(opts,cljs.core.constant$keyword$sources,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$events], null),cljs.core.array_seq([cljs.core.constant$keyword$msg_DASH_xform,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (relayed_topic,temp__4423__auto__){
return (function (p__21383){
var vec__21384 = p__21383;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21384,(0),null);
var _prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21384,(1),null);
var _msgs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21384,(2),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(relayed_topic,jamesmacaulay.zelkova.impl.signal.topic(event))){
return jamesmacaulay.zelkova.impl.signal.fresh(jamesmacaulay.zelkova.impl.signal.value(event));
} else {
return null;
}
});})(relayed_topic,temp__4423__auto__))
),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_))], 0));
} else {
return opts;
}
});
/**
 * Takes a map of opts and returns a signal.
 */
jamesmacaulay.zelkova.impl.signal.make_signal = (function jamesmacaulay$zelkova$impl$signal$make_signal(opts){
return jamesmacaulay.zelkova.impl.signal.attach_delayed_metadata(jamesmacaulay.zelkova.impl.signal.map__GT_SignalDefinition(jamesmacaulay.zelkova.impl.signal.setup_event_relay(opts)));
});
/**
 * Wraps `x` in a vector, if necessary, returning an empty vector if `x` is `nil`.
 */
jamesmacaulay.zelkova.impl.signal.ensure_sequential = (function jamesmacaulay$zelkova$impl$signal$ensure_sequential(x){
if(cljs.core.sequential_QMARK_(x)){
return x;
} else {
if((x == null)){
return cljs.core.PersistentVector.EMPTY;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);

}
}
});
/**
 * Takes a collection of message batches, presumably from some corresponding collection
 * of signals. Pads each batch, when necessary, with cached versions of the last message
 * in the batch, such that the returned batches are all the same size.
 */
jamesmacaulay.zelkova.impl.signal.pad = (function jamesmacaulay$zelkova$impl$signal$pad(msg_batches){
if(((1) >= cljs.core.count(msg_batches))){
return msg_batches;
} else {
var max_count = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.count,msg_batches));
var pad__$1 = ((function (max_count){
return (function (msgs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.cat,cljs.core.take.cljs$core$IFn$_invoke$arity$1(max_count)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [msgs,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(jamesmacaulay.zelkova.impl.signal.cached(jamesmacaulay.zelkova.impl.signal.value(cljs.core.last(msgs))))], null));
});})(max_count))
;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(pad__$1,msg_batches);
}
});
/**
 * Takes a collection of message batches and returns a sequence of vectors of corresponding
 * messages from each batch.
 */
jamesmacaulay.zelkova.impl.signal.transpose = (function jamesmacaulay$zelkova$impl$signal$transpose(msg_batches){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,msg_batches);
});
/**
 * Takes a signal's `msg-fn` and wraps it to provide various behaviours:
 * * return values are turned into sequences with `ensure-sequential`
 * * message batches from each signal are padded and transposed, and `msg-fn` is called
 * once for each vector of messages in the resulting series, as if each were the result
 * of a separate event.
 * * when `msg-fn` returns `nil` or an empty sequence, the previous value is returned as a
 * cached value.
 */
jamesmacaulay.zelkova.impl.signal.wrap_msg_xform = (function jamesmacaulay$zelkova$impl$signal$wrap_msg_xform(msg_xform){
var msg_fn = (function (args){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(msg_xform,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [args], null));
});
return ((function (msg_fn){
return (function (prev,event_and_msg_batches){
var input_series = jamesmacaulay.zelkova.impl.signal.transpose(jamesmacaulay.zelkova.impl.signal.pad(event_and_msg_batches));
var output_series = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (input_series,msg_fn){
return (function (acc,p__21387){
var vec__21388 = p__21387;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21388,(0),null);
var msgs = cljs.core.nthnext(vec__21388,(1));
var prev__$1 = jamesmacaulay.zelkova.impl.signal.value(cljs.core.peek(acc));
var msgs__$1 = cljs.core.vec(msgs);
var new_msgs = msg_fn(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [event,prev__$1,msgs__$1], null));
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,new_msgs);
});})(input_series,msg_fn))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jamesmacaulay.zelkova.impl.signal.cached(prev)], null),input_series);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(output_series))){
return output_series;
} else {
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(output_series,(1));
}
});
;})(msg_fn))
});
jamesmacaulay.zelkova.impl.signal.tap_signal = (function jamesmacaulay$zelkova$impl$signal$tap_signal(mult_map,source){
var mult = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mult_map,source);
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(mult,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
});
jamesmacaulay.zelkova.impl.signal.tap_signals = (function jamesmacaulay$zelkova$impl$signal$tap_signals(mult_map,sources){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [jamesmacaulay.zelkova.impl.signal.tap_signal(mult_map,cljs.core.constant$keyword$events)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(jamesmacaulay.zelkova.impl.signal.tap_signal,mult_map)),sources));
});
jamesmacaulay.zelkova.impl.signal.spawn_message_loop_BANG_ = (function jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG_(init,msg_xform,c_in,c_out){
var wrapped_msg_fn = jamesmacaulay.zelkova.impl.signal.wrap_msg_xform(msg_xform);
var c__15159__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto__,wrapped_msg_fn){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto__,wrapped_msg_fn){
return (function (state_21448){
var state_val_21449 = (state_21448[(1)]);
if((state_val_21449 === (1))){
var inst_21429 = init;
var state_21448__$1 = (function (){var statearr_21450 = state_21448;
(statearr_21450[(7)] = inst_21429);

return statearr_21450;
})();
var statearr_21451_21469 = state_21448__$1;
(statearr_21451_21469[(2)] = null);

(statearr_21451_21469[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21449 === (2))){
var state_21448__$1 = state_21448;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21448__$1,(4),c_in);
} else {
if((state_val_21449 === (3))){
var inst_21446 = (state_21448[(2)]);
var state_21448__$1 = state_21448;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21448__$1,inst_21446);
} else {
if((state_val_21449 === (4))){
var inst_21432 = (state_21448[(8)]);
var inst_21432__$1 = (state_21448[(2)]);
var inst_21433 = (inst_21432__$1 == null);
var state_21448__$1 = (function (){var statearr_21452 = state_21448;
(statearr_21452[(8)] = inst_21432__$1);

return statearr_21452;
})();
if(cljs.core.truth_(inst_21433)){
var statearr_21453_21470 = state_21448__$1;
(statearr_21453_21470[(1)] = (5));

} else {
var statearr_21454_21471 = state_21448__$1;
(statearr_21454_21471[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21449 === (5))){
var inst_21435 = cljs.core.async.close_BANG_(c_out);
var state_21448__$1 = state_21448;
var statearr_21455_21472 = state_21448__$1;
(statearr_21455_21472[(2)] = inst_21435);

(statearr_21455_21472[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21449 === (6))){
var inst_21437 = (state_21448[(9)]);
var inst_21432 = (state_21448[(8)]);
var inst_21429 = (state_21448[(7)]);
var inst_21437__$1 = (function (){var G__21456 = inst_21429;
var G__21457 = inst_21432;
return (wrapped_msg_fn.cljs$core$IFn$_invoke$arity$2 ? wrapped_msg_fn.cljs$core$IFn$_invoke$arity$2(G__21456,G__21457) : wrapped_msg_fn.call(null,G__21456,G__21457));
})();
var state_21448__$1 = (function (){var statearr_21458 = state_21448;
(statearr_21458[(9)] = inst_21437__$1);

return statearr_21458;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21448__$1,(8),c_out,inst_21437__$1);
} else {
if((state_val_21449 === (7))){
var inst_21444 = (state_21448[(2)]);
var state_21448__$1 = state_21448;
var statearr_21459_21473 = state_21448__$1;
(statearr_21459_21473[(2)] = inst_21444);

(statearr_21459_21473[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21449 === (8))){
var inst_21437 = (state_21448[(9)]);
var inst_21439 = (state_21448[(2)]);
var inst_21440 = cljs.core.last(inst_21437);
var inst_21441 = jamesmacaulay.zelkova.impl.signal.value(inst_21440);
var inst_21429 = inst_21441;
var state_21448__$1 = (function (){var statearr_21460 = state_21448;
(statearr_21460[(10)] = inst_21439);

(statearr_21460[(7)] = inst_21429);

return statearr_21460;
})();
var statearr_21461_21474 = state_21448__$1;
(statearr_21461_21474[(2)] = null);

(statearr_21461_21474[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__15159__auto__,wrapped_msg_fn))
;
return ((function (switch__15081__auto__,c__15159__auto__,wrapped_msg_fn){
return (function() {
var jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__15082__auto__ = null;
var jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__15082__auto____0 = (function (){
var statearr_21465 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21465[(0)] = jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__15082__auto__);

(statearr_21465[(1)] = (1));

return statearr_21465;
});
var jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__15082__auto____1 = (function (state_21448){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_21448);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e21466){if((e21466 instanceof Object)){
var ex__15085__auto__ = e21466;
var statearr_21467_21475 = state_21448;
(statearr_21467_21475[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21448);

return cljs.core.constant$keyword$recur;
} else {
throw e21466;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__21476 = state_21448;
state_21448 = G__21476;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__15082__auto__ = function(state_21448){
switch(arguments.length){
case 0:
return jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__15082__auto____0.call(this);
case 1:
return jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__15082__auto____1.call(this,state_21448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__15082__auto____0;
jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__15082__auto____1;
return jamesmacaulay$zelkova$impl$signal$spawn_message_loop_BANG__$_state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto__,wrapped_msg_fn))
})();
var state__15161__auto__ = (function (){var statearr_21468 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_21468[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto__);

return statearr_21468;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto__,wrapped_msg_fn))
);

return c__15159__auto__;
});
jamesmacaulay.zelkova.impl.signal.build_message_mult = (function jamesmacaulay$zelkova$impl$signal$build_message_mult(mult_map,p__21477,live_graph,opts){
var map__21481 = p__21477;
var map__21481__$1 = ((cljs.core.seq_QMARK_(map__21481))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__21481):map__21481);
var init_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21481__$1,cljs.core.constant$keyword$init_DASH_fn);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21481__$1,cljs.core.constant$keyword$sources);
var msg_xform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__21481__$1,cljs.core.constant$keyword$msg_DASH_xform);
var c_in = jamesmacaulay.zelkova.impl.signal.tap_signals(mult_map,sources);
var c_out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
jamesmacaulay.zelkova.impl.signal.spawn_message_loop_BANG_((function (){var G__21482 = live_graph;
var G__21483 = opts;
return (init_fn.cljs$core$IFn$_invoke$arity$2 ? init_fn.cljs$core$IFn$_invoke$arity$2(G__21482,G__21483) : init_fn.call(null,G__21482,G__21483));
})(),msg_xform,c_in,c_out);

return cljs.core.async.mult(c_out);
});
jamesmacaulay.zelkova.impl.signal.build_message_mult_map = (function jamesmacaulay$zelkova$impl$signal$build_message_mult_map(sorted_signals,events_mult,live_graph,opts){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (mult_map,signal){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mult_map,signal,jamesmacaulay.zelkova.impl.signal.build_message_mult(mult_map,signal,live_graph,opts));
}),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$events,events_mult], null),sorted_signals);
});
jamesmacaulay.zelkova.impl.signal.gather_event_sources = (function jamesmacaulay$zelkova$impl$signal$gather_event_sources(sorted_signals){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$event_DASH_sources),sorted_signals);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraphProtocol = (function (){var obj21485 = {};
return obj21485;
})();

jamesmacaulay.zelkova.impl.signal.signal_mult = (function jamesmacaulay$zelkova$impl$signal$signal_mult(g,sig){
if((function (){var and__4198__auto__ = g;
if(and__4198__auto__){
return g.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$signal_mult$arity$2;
} else {
return and__4198__auto__;
}
})()){
return g.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$signal_mult$arity$2(g,sig);
} else {
var x__4846__auto__ = (((g == null))?null:g);
return (function (){var or__4210__auto__ = (jamesmacaulay.zelkova.impl.signal.signal_mult[(function (){var G__21489 = x__4846__auto__;
return goog.typeOf(G__21489);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (jamesmacaulay.zelkova.impl.signal.signal_mult["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("LiveChannelGraphProtocol.signal-mult",g);
}
}
})().call(null,g,sig);
}
});

jamesmacaulay.zelkova.impl.signal.connect_to_world = (function jamesmacaulay$zelkova$impl$signal$connect_to_world(g){
if((function (){var and__4198__auto__ = g;
if(and__4198__auto__){
return g.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$connect_to_world$arity$1;
} else {
return and__4198__auto__;
}
})()){
return g.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$connect_to_world$arity$1(g);
} else {
var x__4846__auto__ = (((g == null))?null:g);
return (function (){var or__4210__auto__ = (jamesmacaulay.zelkova.impl.signal.connect_to_world[(function (){var G__21493 = x__4846__auto__;
return goog.typeOf(G__21493);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (jamesmacaulay.zelkova.impl.signal.connect_to_world["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("LiveChannelGraphProtocol.connect-to-world",g);
}
}
})().call(null,g);
}
});

jamesmacaulay.zelkova.impl.signal.init = (function jamesmacaulay$zelkova$impl$signal$init(g){
if((function (){var and__4198__auto__ = g;
if(and__4198__auto__){
return g.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$init$arity$1;
} else {
return and__4198__auto__;
}
})()){
return g.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$init$arity$1(g);
} else {
var x__4846__auto__ = (((g == null))?null:g);
return (function (){var or__4210__auto__ = (jamesmacaulay.zelkova.impl.signal.init[(function (){var G__21497 = x__4846__auto__;
return goog.typeOf(G__21497);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (jamesmacaulay.zelkova.impl.signal.init["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("LiveChannelGraphProtocol.init",g);
}
}
})().call(null,g);
}
});


/**
* @constructor
* @param {*} definition
* @param {*} events_channel
* @param {*} mult_map
* @param {*} output_values_mult
* @param {*} opts
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
jamesmacaulay.zelkova.impl.signal.LiveChannelGraph = (function (definition,events_channel,mult_map,output_values_mult,opts,__meta,__extmap,__hash){
this.definition = definition;
this.events_channel = events_channel;
this.mult_map = mult_map;
this.output_values_mult = output_values_mult;
this.opts = opts;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4805__auto__,k__4806__auto__){
var self__ = this;
var this__4805__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4805__auto____$1,k__4806__auto__,null);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4807__auto__,k21499,else__4808__auto__){
var self__ = this;
var this__4807__auto____$1 = this;
var G__21501 = (((k21499 instanceof cljs.core.Keyword))?k21499.fqn:null);
switch (G__21501) {
case "definition":
return self__.definition;

break;
case "events-channel":
return self__.events_channel;

break;
case "mult-map":
return self__.mult_map;

break;
case "output-values-mult":
return self__.output_values_mult;

break;
case "opts":
return self__.opts;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k21499,else__4808__auto__);

}
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$Channel$ = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.events_channel);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.events_channel);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4819__auto__,writer__4820__auto__,opts__4821__auto__){
var self__ = this;
var this__4819__auto____$1 = this;
var pr_pair__4822__auto__ = ((function (this__4819__auto____$1){
return (function (keyval__4823__auto__){
return cljs.core.pr_sequential_writer(writer__4820__auto__,cljs.core.pr_writer,""," ","",opts__4821__auto__,keyval__4823__auto__);
});})(this__4819__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4820__auto__,pr_pair__4822__auto__,"#jamesmacaulay.zelkova.impl.signal.LiveChannelGraph{",", ","}",opts__4821__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$definition,self__.definition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$events_DASH_channel,self__.events_channel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$mult_DASH_map,self__.mult_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$output_DASH_values_DASH_mult,self__.output_values_mult],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$opts,self__.opts],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4803__auto__){
var self__ = this;
var this__4803__auto____$1 = this;
return self__.__meta;
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4799__auto__){
var self__ = this;
var this__4799__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,self__.mult_map,self__.output_values_mult,self__.opts,self__.__meta,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4809__auto__){
var self__ = this;
var this__4809__auto____$1 = this;
return (5 + cljs.core.count(self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4800__auto__){
var self__ = this;
var this__4800__auto____$1 = this;
var h__4626__auto__ = self__.__hash;
if(!((h__4626__auto__ == null))){
return h__4626__auto__;
} else {
var h__4626__auto____$1 = cljs.core.hash_imap(this__4800__auto____$1);
self__.__hash = h__4626__auto____$1;

return h__4626__auto____$1;
}
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4801__auto__,other__4802__auto__){
var self__ = this;
var this__4801__auto____$1 = this;
if(cljs.core.truth_((function (){var and__4198__auto__ = other__4802__auto__;
if(cljs.core.truth_(and__4198__auto__)){
var and__4198__auto____$1 = (this__4801__auto____$1.constructor === other__4802__auto__.constructor);
if(and__4198__auto____$1){
return cljs.core.equiv_map(this__4801__auto____$1,other__4802__auto__);
} else {
return and__4198__auto____$1;
}
} else {
return and__4198__auto__;
}
})())){
return true;
} else {
return false;
}
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$ = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$signal_mult$arity$2 = (function (_,sig){
var self__ = this;
var ___$1 = this;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.mult_map,sig);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$connect_to_world$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
var world_21524 = jamesmacaulay.zelkova.impl.signal.gather_event_sources(jamesmacaulay.zelkova.impl.signal.topsort(self__.definition));
var seq__21502_21525 = cljs.core.seq(cljs.core.vals(world_21524));
var chunk__21503_21526 = null;
var count__21504_21527 = (0);
var i__21505_21528 = (0);
while(true){
if((i__21505_21528 < count__21504_21527)){
var channel_fn_21529 = chunk__21503_21526.cljs$core$IIndexed$_nth$arity$2(null,i__21505_21528);
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((function (){var G__21506 = g__$1;
var G__21507 = self__.opts;
return (channel_fn_21529.cljs$core$IFn$_invoke$arity$2 ? channel_fn_21529.cljs$core$IFn$_invoke$arity$2(G__21506,G__21507) : channel_fn_21529.call(null,G__21506,G__21507));
})(),self__.events_channel);

var G__21530 = seq__21502_21525;
var G__21531 = chunk__21503_21526;
var G__21532 = count__21504_21527;
var G__21533 = (i__21505_21528 + (1));
seq__21502_21525 = G__21530;
chunk__21503_21526 = G__21531;
count__21504_21527 = G__21532;
i__21505_21528 = G__21533;
continue;
} else {
var temp__4425__auto___21534 = cljs.core.seq(seq__21502_21525);
if(temp__4425__auto___21534){
var seq__21502_21535__$1 = temp__4425__auto___21534;
if(cljs.core.chunked_seq_QMARK_(seq__21502_21535__$1)){
var c__4995__auto___21536 = cljs.core.chunk_first(seq__21502_21535__$1);
var G__21537 = cljs.core.chunk_rest(seq__21502_21535__$1);
var G__21538 = c__4995__auto___21536;
var G__21539 = cljs.core.count(c__4995__auto___21536);
var G__21540 = (0);
seq__21502_21525 = G__21537;
chunk__21503_21526 = G__21538;
count__21504_21527 = G__21539;
i__21505_21528 = G__21540;
continue;
} else {
var channel_fn_21541 = cljs.core.first(seq__21502_21535__$1);
cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((function (){var G__21508 = g__$1;
var G__21509 = self__.opts;
return (channel_fn_21541.cljs$core$IFn$_invoke$arity$2 ? channel_fn_21541.cljs$core$IFn$_invoke$arity$2(G__21508,G__21509) : channel_fn_21541.call(null,G__21508,G__21509));
})(),self__.events_channel);

var G__21542 = cljs.core.next(seq__21502_21535__$1);
var G__21543 = null;
var G__21544 = (0);
var G__21545 = (0);
seq__21502_21525 = G__21542;
chunk__21503_21526 = G__21543;
count__21504_21527 = G__21544;
i__21505_21528 = G__21545;
continue;
}
} else {
}
}
break;
}

return g__$1;
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$LiveChannelGraphProtocol$init$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.constant$keyword$init_DASH_fn.cljs$core$IFn$_invoke$arity$1(self__.definition).call(null,g__$1,self__.opts);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.events_channel,val,fn1);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4814__auto__,k__4815__auto__){
var self__ = this;
var this__4814__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [cljs.core.constant$keyword$events_DASH_channel,null,cljs.core.constant$keyword$definition,null,cljs.core.constant$keyword$mult_DASH_map,null,cljs.core.constant$keyword$output_DASH_values_DASH_mult,null,cljs.core.constant$keyword$opts,null], null), null),k__4815__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4814__auto____$1),self__.__meta),k__4815__auto__);
} else {
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,self__.mult_map,self__.output_values_mult,self__.opts,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4815__auto__)),null));
}
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4812__auto__,k__4813__auto__,G__21498){
var self__ = this;
var this__4812__auto____$1 = this;
var pred__21510 = cljs.core.keyword_identical_QMARK_;
var expr__21511 = k__4813__auto__;
if(cljs.core.truth_((function (){var G__21513 = cljs.core.constant$keyword$definition;
var G__21514 = expr__21511;
return (pred__21510.cljs$core$IFn$_invoke$arity$2 ? pred__21510.cljs$core$IFn$_invoke$arity$2(G__21513,G__21514) : pred__21510.call(null,G__21513,G__21514));
})())){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(G__21498,self__.events_channel,self__.mult_map,self__.output_values_mult,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21515 = cljs.core.constant$keyword$events_DASH_channel;
var G__21516 = expr__21511;
return (pred__21510.cljs$core$IFn$_invoke$arity$2 ? pred__21510.cljs$core$IFn$_invoke$arity$2(G__21515,G__21516) : pred__21510.call(null,G__21515,G__21516));
})())){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,G__21498,self__.mult_map,self__.output_values_mult,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21517 = cljs.core.constant$keyword$mult_DASH_map;
var G__21518 = expr__21511;
return (pred__21510.cljs$core$IFn$_invoke$arity$2 ? pred__21510.cljs$core$IFn$_invoke$arity$2(G__21517,G__21518) : pred__21510.call(null,G__21517,G__21518));
})())){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,G__21498,self__.output_values_mult,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21519 = cljs.core.constant$keyword$output_DASH_values_DASH_mult;
var G__21520 = expr__21511;
return (pred__21510.cljs$core$IFn$_invoke$arity$2 ? pred__21510.cljs$core$IFn$_invoke$arity$2(G__21519,G__21520) : pred__21510.call(null,G__21519,G__21520));
})())){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,self__.mult_map,G__21498,self__.opts,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__21521 = cljs.core.constant$keyword$opts;
var G__21522 = expr__21511;
return (pred__21510.cljs$core$IFn$_invoke$arity$2 ? pred__21510.cljs$core$IFn$_invoke$arity$2(G__21521,G__21522) : pred__21510.call(null,G__21521,G__21522));
})())){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,self__.mult_map,self__.output_values_mult,G__21498,self__.__meta,self__.__extmap,null));
} else {
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,self__.mult_map,self__.output_values_mult,self__.opts,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4813__auto__,G__21498),null));
}
}
}
}
}
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4817__auto__){
var self__ = this;
var this__4817__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$definition,self__.definition],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$events_DASH_channel,self__.events_channel],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$mult_DASH_map,self__.mult_map],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$output_DASH_values_DASH_mult,self__.output_values_mult],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$opts,self__.opts],null))], null),self__.__extmap));
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4804__auto__,G__21498){
var self__ = this;
var this__4804__auto____$1 = this;
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(self__.definition,self__.events_channel,self__.mult_map,self__.output_values_mult,self__.opts,G__21498,self__.__extmap,self__.__hash));
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$Mult$ = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (g,ch,close_QMARK_){
var self__ = this;
var g__$1 = this;
return cljs.core.async.tap_STAR_(self__.output_values_mult,ch,close_QMARK_);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (g,ch){
var self__ = this;
var g__$1 = this;
return cljs.core.async.untap_STAR_(self__.output_values_mult,ch);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (g){
var self__ = this;
var g__$1 = this;
return cljs.core.async.untap_all_STAR_(self__.output_values_mult);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4810__auto__,entry__4811__auto__){
var self__ = this;
var this__4810__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4811__auto__)){
return cljs.core._assoc(this__4810__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4811__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4811__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4810__auto____$1,entry__4811__auto__);
}
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"definition","definition",441801545,null),new cljs.core.Symbol(null,"events-channel","events-channel",-762258648,null),new cljs.core.Symbol(null,"mult-map","mult-map",2100949458,null),new cljs.core.Symbol(null,"output-values-mult","output-values-mult",-1627641481,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null)], null);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.cljs$lang$type = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.cljs$lang$ctorPrSeq = (function (this__4839__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"jamesmacaulay.zelkova.impl.signal/LiveChannelGraph");
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.cljs$lang$ctorPrWriter = (function (this__4839__auto__,writer__4840__auto__){
return cljs.core._write(writer__4840__auto__,"jamesmacaulay.zelkova.impl.signal/LiveChannelGraph");
});

jamesmacaulay.zelkova.impl.signal.__GT_LiveChannelGraph = (function jamesmacaulay$zelkova$impl$signal$__GT_LiveChannelGraph(definition,events_channel,mult_map,output_values_mult,opts){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(definition,events_channel,mult_map,output_values_mult,opts,null,null,null));
});

jamesmacaulay.zelkova.impl.signal.map__GT_LiveChannelGraph = (function jamesmacaulay$zelkova$impl$signal$map__GT_LiveChannelGraph(G__21500){
return (new jamesmacaulay.zelkova.impl.signal.LiveChannelGraph(cljs.core.constant$keyword$definition.cljs$core$IFn$_invoke$arity$1(G__21500),cljs.core.constant$keyword$events_DASH_channel.cljs$core$IFn$_invoke$arity$1(G__21500),cljs.core.constant$keyword$mult_DASH_map.cljs$core$IFn$_invoke$arity$1(G__21500),cljs.core.constant$keyword$output_DASH_values_DASH_mult.cljs$core$IFn$_invoke$arity$1(G__21500),cljs.core.constant$keyword$opts.cljs$core$IFn$_invoke$arity$1(G__21500),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__21500,cljs.core.constant$keyword$definition,cljs.core.array_seq([cljs.core.constant$keyword$events_DASH_channel,cljs.core.constant$keyword$mult_DASH_map,cljs.core.constant$keyword$output_DASH_values_DASH_mult,cljs.core.constant$keyword$opts], 0)),null));
});


jamesmacaulay.zelkova.impl.signal.SignalLike = (function (){var obj21547 = {};
return obj21547;
})();

jamesmacaulay.zelkova.impl.signal.spawn_STAR_ = (function jamesmacaulay$zelkova$impl$signal$spawn_STAR_(x,opts){
if((function (){var and__4198__auto__ = x;
if(and__4198__auto__){
return x.jamesmacaulay$zelkova$impl$signal$SignalLike$spawn_STAR_$arity$2;
} else {
return and__4198__auto__;
}
})()){
return x.jamesmacaulay$zelkova$impl$signal$SignalLike$spawn_STAR_$arity$2(x,opts);
} else {
var x__4846__auto__ = (((x == null))?null:x);
return (function (){var or__4210__auto__ = (jamesmacaulay.zelkova.impl.signal.spawn_STAR_[(function (){var G__21551 = x__4846__auto__;
return goog.typeOf(G__21551);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (jamesmacaulay.zelkova.impl.signal.spawn_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("SignalLike.spawn*",x);
}
}
})().call(null,x,opts);
}
});

jamesmacaulay.zelkova.impl.signal.pipe_to_atom_STAR_ = (function jamesmacaulay$zelkova$impl$signal$pipe_to_atom_STAR_(x,a,ks){
if((function (){var and__4198__auto__ = x;
if(and__4198__auto__){
return x.jamesmacaulay$zelkova$impl$signal$SignalLike$pipe_to_atom_STAR_$arity$3;
} else {
return and__4198__auto__;
}
})()){
return x.jamesmacaulay$zelkova$impl$signal$SignalLike$pipe_to_atom_STAR_$arity$3(x,a,ks);
} else {
var x__4846__auto__ = (((x == null))?null:x);
return (function (){var or__4210__auto__ = (jamesmacaulay.zelkova.impl.signal.pipe_to_atom_STAR_[(function (){var G__21555 = x__4846__auto__;
return goog.typeOf(G__21555);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (jamesmacaulay.zelkova.impl.signal.pipe_to_atom_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("SignalLike.pipe-to-atom*",x);
}
}
})().call(null,x,a,ks);
}
});

jamesmacaulay.zelkova.impl.signal.events_xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,(function (event){
if((jamesmacaulay.zelkova.impl.signal.timestamp(event) == null)){
return jamesmacaulay.zelkova.impl.signal.record_timestamp(event,jamesmacaulay.zelkova.impl.time.now());
} else {
return event;
}
})),jamesmacaulay.zelkova.impl.signal.ensure_sequential));
jamesmacaulay.zelkova.impl.signal.build_output_values_mult = (function jamesmacaulay$zelkova$impl$signal$build_output_values_mult(mult_map,output_sig){
return cljs.core.async.mult(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(mult_map,output_sig),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),jamesmacaulay.zelkova.impl.signal.fresh_values)));
});
jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$SignalLike$ = true;

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$SignalLike$spawn_STAR_$arity$2 = (function (g,opts){
var g__$1 = this;
return jamesmacaulay.zelkova.impl.signal.spawn_STAR_(cljs.core.constant$keyword$signal.cljs$core$IFn$_invoke$arity$1(g__$1),opts);
});

jamesmacaulay.zelkova.impl.signal.LiveChannelGraph.prototype.jamesmacaulay$zelkova$impl$signal$SignalLike$pipe_to_atom_STAR_$arity$3 = (function (g,atm,ks){
var g__$1 = this;
jamesmacaulay.async_tools.core.do_effects(((cljs.core.seq(ks))?cljs.core.partial.cljs$core$IFn$_invoke$arity$4(cljs.core.swap_BANG_,atm,cljs.core.assoc_in,ks):cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.reset_BANG_,atm)),cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(g__$1,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()));

return atm;
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalLike$ = true;

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalLike$spawn_STAR_$arity$2 = (function (s,opts){
var s__$1 = this;
var events_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),jamesmacaulay.zelkova.impl.signal.events_xform);
var events_mult = cljs.core.async.mult(events_channel);
var mult_map = jamesmacaulay.zelkova.impl.signal.build_message_mult_map(jamesmacaulay.zelkova.impl.signal.topsort(s__$1),events_mult,s__$1,opts);
var output_values_mult = jamesmacaulay.zelkova.impl.signal.build_output_values_mult(mult_map,s__$1);
return jamesmacaulay.zelkova.impl.signal.connect_to_world(jamesmacaulay.zelkova.impl.signal.__GT_LiveChannelGraph(s__$1,events_channel,mult_map,output_values_mult,opts));
});

jamesmacaulay.zelkova.impl.signal.SignalDefinition.prototype.jamesmacaulay$zelkova$impl$signal$SignalLike$pipe_to_atom_STAR_$arity$3 = (function (s,atm,ks){
var s__$1 = this;
return jamesmacaulay.zelkova.impl.signal.pipe_to_atom_STAR_(jamesmacaulay.zelkova.impl.signal.spawn_STAR_(s__$1,null),atm,ks);
});
if(typeof jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn !== 'undefined'){
} else {
/**
 * Takes some asynchronous `source` of values, plus an event `topic`, and returns
 * an event-source function. `source` may be one of the following:
 * 
 * * a function taking a live graph and an options map, and returns a channel of values
 * * a channel of values
 * * a mult of some such value channel
 * 
 * The returned event-source function has the same signature as the functions that can
 * be supplied for the `source` argument, but the values are wrapped as Events.
 */
jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn = (function (){var method_table__5105__auto__ = (function (){var G__21556 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21556) : cljs.core.atom.call(null,G__21556));
})();
var prefer_table__5106__auto__ = (function (){var G__21557 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21557) : cljs.core.atom.call(null,G__21557));
})();
var method_cache__5107__auto__ = (function (){var G__21558 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21558) : cljs.core.atom.call(null,G__21558));
})();
var cached_hierarchy__5108__auto__ = (function (){var G__21559 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__21559) : cljs.core.atom.call(null,G__21559));
})();
var hierarchy__5109__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.constant$keyword$hierarchy,cljs.core.get_global_hierarchy());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("jamesmacaulay.zelkova.impl.signal","value-source->events-fn"),((function (method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__){
return (function (source,topic){
if((function (){var G__21560 = source;
if(G__21560){
var bit__4884__auto__ = null;
if(cljs.core.truth_((function (){var or__4210__auto__ = bit__4884__auto__;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return G__21560.cljs$core$async$Mult$;
}
})())){
return true;
} else {
if((!G__21560.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.Mult,G__21560);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.Mult,G__21560);
}
})()){
return cljs.core.constant$keyword$mult;
} else {
if((function (){var G__21561 = source;
if(G__21561){
var bit__4884__auto__ = null;
if(cljs.core.truth_((function (){var or__4210__auto__ = bit__4884__auto__;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return G__21561.cljs$core$async$impl$protocols$ReadPort$;
}
})())){
return true;
} else {
if((!G__21561.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,G__21561);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,G__21561);
}
})()){
return cljs.core.constant$keyword$readport;
} else {
if(cljs.core.ifn_QMARK_(source)){
return cljs.core.constant$keyword$ifn;
} else {
return null;
}
}
}
});})(method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__,hierarchy__5109__auto__))
,cljs.core.constant$keyword$default,hierarchy__5109__auto__,method_table__5105__auto__,prefer_table__5106__auto__,method_cache__5107__auto__,cached_hierarchy__5108__auto__));
})();
}
jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$ifn,(function (src_fn,topic){
return (function (graph,opts){
var ch = (function (){var G__21562 = graph;
var G__21563 = opts;
return (src_fn.cljs$core$IFn$_invoke$arity$2 ? src_fn.cljs$core$IFn$_invoke$arity$2(G__21562,G__21563) : src_fn.call(null,G__21562,G__21563));
})();
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2(ch,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(jamesmacaulay.zelkova.impl.signal.make_event,topic))));
});
}));
jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$mult,(function (src_mult,topic){
var G__21564 = (function (_,___$1){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(src_mult,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0());
});
var G__21565 = topic;
return (jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.cljs$core$IFn$_invoke$arity$2 ? jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.cljs$core$IFn$_invoke$arity$2(G__21564,G__21565) : jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.call(null,G__21564,G__21565));
}));
jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.cljs$core$IMultiFn$_add_method$arity$3(null,cljs.core.constant$keyword$readport,(function (src_chan,topic){
var G__21566 = cljs.core.async.mult(src_chan);
var G__21567 = topic;
return (jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.cljs$core$IFn$_invoke$arity$2 ? jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.cljs$core$IFn$_invoke$arity$2(G__21566,G__21567) : jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.call(null,G__21566,G__21567));
}));
