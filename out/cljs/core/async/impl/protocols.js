// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async.impl.protocols');
goog.require('cljs.core');
cljs.core.async.impl.protocols.MAX_QUEUE_SIZE = (1024);

cljs.core.async.impl.protocols.ReadPort = (function (){var obj21620 = {};
return obj21620;
})();

/**
 * derefable val if taken, nil if take was enqueued
 */
cljs.core.async.impl.protocols.take_BANG_ = (function cljs$core$async$impl$protocols$take_BANG_(port,fn1_handler){
if((function (){var and__4198__auto__ = port;
if(and__4198__auto__){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2;
} else {
return and__4198__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2(port,fn1_handler);
} else {
var x__4846__auto__ = (((port == null))?null:port);
return (function (){var or__4210__auto__ = (cljs.core.async.impl.protocols.take_BANG_[(function (){var G__21624 = x__4846__auto__;
return goog.typeOf(G__21624);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.impl.protocols.take_BANG_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("ReadPort.take!",port);
}
}
})().call(null,port,fn1_handler);
}
});


cljs.core.async.impl.protocols.WritePort = (function (){var obj21626 = {};
return obj21626;
})();

/**
 * derefable boolean (false if already closed) if handled, nil if put was enqueued.
 * Must throw on nil val.
 */
cljs.core.async.impl.protocols.put_BANG_ = (function cljs$core$async$impl$protocols$put_BANG_(port,val,fn1_handler){
if((function (){var and__4198__auto__ = port;
if(and__4198__auto__){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3;
} else {
return and__4198__auto__;
}
})()){
return port.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3(port,val,fn1_handler);
} else {
var x__4846__auto__ = (((port == null))?null:port);
return (function (){var or__4210__auto__ = (cljs.core.async.impl.protocols.put_BANG_[(function (){var G__21630 = x__4846__auto__;
return goog.typeOf(G__21630);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.impl.protocols.put_BANG_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("WritePort.put!",port);
}
}
})().call(null,port,val,fn1_handler);
}
});


cljs.core.async.impl.protocols.Channel = (function (){var obj21632 = {};
return obj21632;
})();

cljs.core.async.impl.protocols.close_BANG_ = (function cljs$core$async$impl$protocols$close_BANG_(chan){
if((function (){var and__4198__auto__ = chan;
if(and__4198__auto__){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1;
} else {
return and__4198__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1(chan);
} else {
var x__4846__auto__ = (((chan == null))?null:chan);
return (function (){var or__4210__auto__ = (cljs.core.async.impl.protocols.close_BANG_[(function (){var G__21636 = x__4846__auto__;
return goog.typeOf(G__21636);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.impl.protocols.close_BANG_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Channel.close!",chan);
}
}
})().call(null,chan);
}
});

cljs.core.async.impl.protocols.closed_QMARK_ = (function cljs$core$async$impl$protocols$closed_QMARK_(chan){
if((function (){var and__4198__auto__ = chan;
if(and__4198__auto__){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1;
} else {
return and__4198__auto__;
}
})()){
return chan.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1(chan);
} else {
var x__4846__auto__ = (((chan == null))?null:chan);
return (function (){var or__4210__auto__ = (cljs.core.async.impl.protocols.closed_QMARK_[(function (){var G__21640 = x__4846__auto__;
return goog.typeOf(G__21640);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.impl.protocols.closed_QMARK_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Channel.closed?",chan);
}
}
})().call(null,chan);
}
});


cljs.core.async.impl.protocols.Handler = (function (){var obj21642 = {};
return obj21642;
})();

/**
 * returns true if has callback. Must work w/o lock
 */
cljs.core.async.impl.protocols.active_QMARK_ = (function cljs$core$async$impl$protocols$active_QMARK_(h){
if((function (){var and__4198__auto__ = h;
if(and__4198__auto__){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1;
} else {
return and__4198__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(h);
} else {
var x__4846__auto__ = (((h == null))?null:h);
return (function (){var or__4210__auto__ = (cljs.core.async.impl.protocols.active_QMARK_[(function (){var G__21646 = x__4846__auto__;
return goog.typeOf(G__21646);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.impl.protocols.active_QMARK_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Handler.active?",h);
}
}
})().call(null,h);
}
});

/**
 * commit to fulfilling its end of the transfer, returns cb. Must be called within lock
 */
cljs.core.async.impl.protocols.commit = (function cljs$core$async$impl$protocols$commit(h){
if((function (){var and__4198__auto__ = h;
if(and__4198__auto__){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1;
} else {
return and__4198__auto__;
}
})()){
return h.cljs$core$async$impl$protocols$Handler$commit$arity$1(h);
} else {
var x__4846__auto__ = (((h == null))?null:h);
return (function (){var or__4210__auto__ = (cljs.core.async.impl.protocols.commit[(function (){var G__21650 = x__4846__auto__;
return goog.typeOf(G__21650);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.impl.protocols.commit["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Handler.commit",h);
}
}
})().call(null,h);
}
});


cljs.core.async.impl.protocols.Buffer = (function (){var obj21652 = {};
return obj21652;
})();

cljs.core.async.impl.protocols.full_QMARK_ = (function cljs$core$async$impl$protocols$full_QMARK_(b){
if((function (){var and__4198__auto__ = b;
if(and__4198__auto__){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1;
} else {
return and__4198__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$full_QMARK_$arity$1(b);
} else {
var x__4846__auto__ = (((b == null))?null:b);
return (function (){var or__4210__auto__ = (cljs.core.async.impl.protocols.full_QMARK_[(function (){var G__21656 = x__4846__auto__;
return goog.typeOf(G__21656);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.impl.protocols.full_QMARK_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.full?",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.remove_BANG_ = (function cljs$core$async$impl$protocols$remove_BANG_(b){
if((function (){var and__4198__auto__ = b;
if(and__4198__auto__){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1;
} else {
return and__4198__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$remove_BANG_$arity$1(b);
} else {
var x__4846__auto__ = (((b == null))?null:b);
return (function (){var or__4210__auto__ = (cljs.core.async.impl.protocols.remove_BANG_[(function (){var G__21660 = x__4846__auto__;
return goog.typeOf(G__21660);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.impl.protocols.remove_BANG_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.remove!",b);
}
}
})().call(null,b);
}
});

cljs.core.async.impl.protocols.add_BANG__STAR_ = (function cljs$core$async$impl$protocols$add_BANG__STAR_(b,itm){
if((function (){var and__4198__auto__ = b;
if(and__4198__auto__){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2;
} else {
return and__4198__auto__;
}
})()){
return b.cljs$core$async$impl$protocols$Buffer$add_BANG__STAR_$arity$2(b,itm);
} else {
var x__4846__auto__ = (((b == null))?null:b);
return (function (){var or__4210__auto__ = (cljs.core.async.impl.protocols.add_BANG__STAR_[(function (){var G__21664 = x__4846__auto__;
return goog.typeOf(G__21664);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.impl.protocols.add_BANG__STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Buffer.add!*",b);
}
}
})().call(null,b,itm);
}
});

cljs.core.async.impl.protocols.add_BANG_ = (function cljs$core$async$impl$protocols$add_BANG_(){
var G__21666 = arguments.length;
switch (G__21666) {
case 1:
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (b){
return b;
});

cljs.core.async.impl.protocols.add_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (b,itm){
if(!((itm == null))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"nil?","nil?",1612038930,null),new cljs.core.Symbol(null,"itm","itm",-713282527,null)))], 0)))].join('')));
}

return cljs.core.async.impl.protocols.add_BANG__STAR_(b,itm);
});

cljs.core.async.impl.protocols.add_BANG_.cljs$lang$maxFixedArity = 2;

cljs.core.async.impl.protocols.UnblockingBuffer = (function (){var obj21669 = {};
return obj21669;
})();

