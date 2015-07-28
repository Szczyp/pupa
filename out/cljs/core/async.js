// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(f){
if(typeof cljs.core.async.t22172 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22172 = (function (fn_handler,f,meta22173){
this.fn_handler = fn_handler;
this.f = f;
this.meta22173 = meta22173;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t22172.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22174,meta22173__$1){
var self__ = this;
var _22174__$1 = this;
return (new cljs.core.async.t22172(self__.fn_handler,self__.f,meta22173__$1));
});

cljs.core.async.t22172.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22174){
var self__ = this;
var _22174__$1 = this;
return self__.meta22173;
});

cljs.core.async.t22172.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22172.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t22172.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t22172.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"fn-handler","fn-handler",648785851,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"meta22173","meta22173",279228458,null)], null);
});

cljs.core.async.t22172.cljs$lang$type = true;

cljs.core.async.t22172.cljs$lang$ctorStr = "cljs.core.async/t22172";

cljs.core.async.t22172.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"cljs.core.async/t22172");
});

cljs.core.async.__GT_t22172 = (function cljs$core$async$fn_handler_$___GT_t22172(fn_handler__$1,f__$1,meta22173){
return (new cljs.core.async.t22172(fn_handler__$1,f__$1,meta22173));
});

}

return (new cljs.core.async.t22172(cljs$core$async$fn_handler,f,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 * val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 * buffered, but oldest elements in buffer will be dropped (not
 * transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full.
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
var G__22176 = buff;
if(G__22176){
var bit__4884__auto__ = null;
if(cljs.core.truth_((function (){var or__4210__auto__ = bit__4884__auto__;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return G__22176.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})())){
return true;
} else {
if((!G__22176.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22176);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,G__22176);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 * (filter p) etc or a composition thereof), and an optional exception handler.
 * If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 * transducer is supplied a buffer must be specified. ex-handler must be a
 * fn of one argument - if an exception occurs during transformation it will be called
 * with the thrown value as an argument, and any non-nil return value will be placed
 * in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(){
var G__22178 = arguments.length;
switch (G__22178) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("buffer must be supplied when transducer is"),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"buf-or-n","buf-or-n",-1646815050,null)], 0)))].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;
/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 * return nil if closed. Will park if nothing is available.
 * Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(){
var G__22181 = arguments.length;
switch (G__22181) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(ret)){
var val_22186 = (function (){var G__22182 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22182) : cljs.core.deref.call(null,G__22182));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__22183_22187 = val_22186;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22183_22187) : fn1.call(null,G__22183_22187));
} else {
cljs.core.async.impl.dispatch.run(((function (val_22186,ret){
return (function (){
var G__22184 = val_22186;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22184) : fn1.call(null,G__22184));
});})(val_22186,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;
cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 * inside a (go ...) block. Will park if no buffer space is available.
 * Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(){
var G__22189 = arguments.length;
switch (G__22189) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__4423__auto__)){
var ret = temp__4423__auto__;
var G__22190 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22190) : cljs.core.deref.call(null,G__22190));
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__4423__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler(fn1));
if(cljs.core.truth_(temp__4423__auto__)){
var retb = temp__4423__auto__;
var ret = (function (){var G__22191 = retb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22191) : cljs.core.deref.call(null,G__22191));
})();
if(cljs.core.truth_(on_caller_QMARK_)){
var G__22192_22195 = ret;
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22192_22195) : fn1.call(null,G__22192_22195));
} else {
cljs.core.async.impl.dispatch.run(((function (ret,retb,temp__4423__auto__){
return (function (){
var G__22193 = ret;
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(G__22193) : fn1.call(null,G__22193));
});})(ret,retb,temp__4423__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;
cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__5095__auto___22196 = n;
var x_22197 = (0);
while(true){
if((x_22197 < n__5095__auto___22196)){
(a[x_22197] = (0));

var G__22198 = (x_22197 + (1));
x_22197 = G__22198;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,n)){
return a;
} else {
var j = cljs.core.rand_int(i);
(a[i] = (a[j]));

(a[j] = i);

var G__22199 = (i + (1));
i = G__22199;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = (function (){var G__22207 = true;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__22207) : cljs.core.atom.call(null,G__22207));
})();
if(typeof cljs.core.async.t22208 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22208 = (function (alt_flag,flag,meta22209){
this.alt_flag = alt_flag;
this.flag = flag;
this.meta22209 = meta22209;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t22208.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_22210,meta22209__$1){
var self__ = this;
var _22210__$1 = this;
return (new cljs.core.async.t22208(self__.alt_flag,self__.flag,meta22209__$1));
});})(flag))
;

cljs.core.async.t22208.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_22210){
var self__ = this;
var _22210__$1 = this;
return self__.meta22209;
});})(flag))
;

cljs.core.async.t22208.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22208.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22211 = self__.flag;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22211) : cljs.core.deref.call(null,G__22211));
});})(flag))
;

cljs.core.async.t22208.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__22212_22214 = self__.flag;
var G__22213_22215 = null;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__22212_22214,G__22213_22215) : cljs.core.reset_BANG_.call(null,G__22212_22214,G__22213_22215));

return true;
});})(flag))
;

cljs.core.async.t22208.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-flag","alt-flag",-1794972754,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta22209","meta22209",-226923024,null)], null);
});})(flag))
;

cljs.core.async.t22208.cljs$lang$type = true;

cljs.core.async.t22208.cljs$lang$ctorStr = "cljs.core.async/t22208";

cljs.core.async.t22208.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"cljs.core.async/t22208");
});})(flag))
;

cljs.core.async.__GT_t22208 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t22208(alt_flag__$1,flag__$1,meta22209){
return (new cljs.core.async.t22208(alt_flag__$1,flag__$1,meta22209));
});})(flag))
;

}

return (new cljs.core.async.t22208(cljs$core$async$alt_flag,flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t22219 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t22219 = (function (alt_handler,flag,cb,meta22220){
this.alt_handler = alt_handler;
this.flag = flag;
this.cb = cb;
this.meta22220 = meta22220;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t22219.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_22221,meta22220__$1){
var self__ = this;
var _22221__$1 = this;
return (new cljs.core.async.t22219(self__.alt_handler,self__.flag,self__.cb,meta22220__$1));
});

cljs.core.async.t22219.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_22221){
var self__ = this;
var _22221__$1 = this;
return self__.meta22220;
});

cljs.core.async.t22219.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t22219.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
});

cljs.core.async.t22219.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
});

cljs.core.async.t22219.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"alt-handler","alt-handler",963786170,null),new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta22220","meta22220",-530111522,null)], null);
});

cljs.core.async.t22219.cljs$lang$type = true;

cljs.core.async.t22219.cljs$lang$ctorStr = "cljs.core.async/t22219";

cljs.core.async.t22219.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"cljs.core.async/t22219");
});

cljs.core.async.__GT_t22219 = (function cljs$core$async$alt_handler_$___GT_t22219(alt_handler__$1,flag__$1,cb__$1,meta22220){
return (new cljs.core.async.t22219(alt_handler__$1,flag__$1,cb__$1,meta22220));
});

}

return (new cljs.core.async.t22219(cljs$core$async$alt_handler,flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = cljs.core.constant$keyword$priority.cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(function (){var G__22229 = (0);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22229) : port.call(null,G__22229));
})():null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (function (){var G__22230 = (1);
return (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1(G__22230) : port.call(null,G__22230));
})();
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22222_SHARP_){
var G__22231 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22222_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22231) : fret.call(null,G__22231));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__22223_SHARP_){
var G__22232 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__22223_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__22232) : fret.call(null,G__22232));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__22233 = vbox;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__22233) : cljs.core.deref.call(null,G__22233));
})(),(function (){var or__4210__auto__ = wport;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return port;
}
})()], null));
} else {
var G__22234 = (i + (1));
i = G__22234;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4210__auto__ = ret;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,cljs.core.constant$keyword$default)){
var temp__4425__auto__ = (function (){var and__4198__auto__ = cljs.core.async.impl.protocols.active_QMARK_(flag);
if(cljs.core.truth_(and__4198__auto__)){
return cljs.core.async.impl.protocols.commit(flag);
} else {
return and__4198__auto__;
}
})();
if(cljs.core.truth_(temp__4425__auto__)){
var got = temp__4425__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$default.cljs$core$IFn$_invoke$arity$1(opts),cljs.core.constant$keyword$default], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 * [channel-to-put-to val-to-put], in any combination. Takes will be
 * made as if by <!, and puts will be made as if by >!. Unless
 * the :priority option is true, if more than one port operation is
 * ready a non-deterministic choice will be made. If no operation is
 * ready and a :default value is supplied, [default-val :default] will
 * be returned, otherwise alts! will park until the first operation to
 * become ready completes. Returns [val port] of the completed
 * operation, where val is the value taken for takes, and a
 * boolean (true unless already closed, as per put!) for puts.
 * 
 * opts are passed as :key val ... Supported options:
 * 
 * :default val - the value to use if none of the operations are immediately ready
 * :priority true - (default nil) when true, the operations will be tried in order.
 * 
 * Note: there is no guarantee that the port exps or val exprs will be
 * used, nor in what order should they be, so they should not be
 * depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__22237){
var map__22238 = p__22237;
var map__22238__$1 = ((cljs.core.seq_QMARK_(map__22238))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__22238):map__22238);
var opts = map__22238__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq22235){
var G__22236 = cljs.core.first(seq22235);
var seq22235__$1 = cljs.core.next(seq22235);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__22236,seq22235__$1);
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(){
var G__22240 = arguments.length;
switch (G__22240) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__15159__auto___22289 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___22289){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___22289){
return (function (state_22264){
var state_val_22265 = (state_22264[(1)]);
if((state_val_22265 === (7))){
var inst_22260 = (state_22264[(2)]);
var state_22264__$1 = state_22264;
var statearr_22266_22290 = state_22264__$1;
(statearr_22266_22290[(2)] = inst_22260);

(statearr_22266_22290[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22265 === (1))){
var state_22264__$1 = state_22264;
var statearr_22267_22291 = state_22264__$1;
(statearr_22267_22291[(2)] = null);

(statearr_22267_22291[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22265 === (4))){
var inst_22243 = (state_22264[(7)]);
var inst_22243__$1 = (state_22264[(2)]);
var inst_22244 = (inst_22243__$1 == null);
var state_22264__$1 = (function (){var statearr_22268 = state_22264;
(statearr_22268[(7)] = inst_22243__$1);

return statearr_22268;
})();
if(cljs.core.truth_(inst_22244)){
var statearr_22269_22292 = state_22264__$1;
(statearr_22269_22292[(1)] = (5));

} else {
var statearr_22270_22293 = state_22264__$1;
(statearr_22270_22293[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22265 === (13))){
var state_22264__$1 = state_22264;
var statearr_22271_22294 = state_22264__$1;
(statearr_22271_22294[(2)] = null);

(statearr_22271_22294[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22265 === (6))){
var inst_22243 = (state_22264[(7)]);
var state_22264__$1 = state_22264;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22264__$1,(11),to,inst_22243);
} else {
if((state_val_22265 === (3))){
var inst_22262 = (state_22264[(2)]);
var state_22264__$1 = state_22264;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22264__$1,inst_22262);
} else {
if((state_val_22265 === (12))){
var state_22264__$1 = state_22264;
var statearr_22272_22295 = state_22264__$1;
(statearr_22272_22295[(2)] = null);

(statearr_22272_22295[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22265 === (2))){
var state_22264__$1 = state_22264;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22264__$1,(4),from);
} else {
if((state_val_22265 === (11))){
var inst_22253 = (state_22264[(2)]);
var state_22264__$1 = state_22264;
if(cljs.core.truth_(inst_22253)){
var statearr_22273_22296 = state_22264__$1;
(statearr_22273_22296[(1)] = (12));

} else {
var statearr_22274_22297 = state_22264__$1;
(statearr_22274_22297[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22265 === (9))){
var state_22264__$1 = state_22264;
var statearr_22275_22298 = state_22264__$1;
(statearr_22275_22298[(2)] = null);

(statearr_22275_22298[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22265 === (5))){
var state_22264__$1 = state_22264;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22276_22299 = state_22264__$1;
(statearr_22276_22299[(1)] = (8));

} else {
var statearr_22277_22300 = state_22264__$1;
(statearr_22277_22300[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22265 === (14))){
var inst_22258 = (state_22264[(2)]);
var state_22264__$1 = state_22264;
var statearr_22278_22301 = state_22264__$1;
(statearr_22278_22301[(2)] = inst_22258);

(statearr_22278_22301[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22265 === (10))){
var inst_22250 = (state_22264[(2)]);
var state_22264__$1 = state_22264;
var statearr_22279_22302 = state_22264__$1;
(statearr_22279_22302[(2)] = inst_22250);

(statearr_22279_22302[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22265 === (8))){
var inst_22247 = cljs.core.async.close_BANG_(to);
var state_22264__$1 = state_22264;
var statearr_22280_22303 = state_22264__$1;
(statearr_22280_22303[(2)] = inst_22247);

(statearr_22280_22303[(1)] = (10));


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
}
}
}
}
}
}
});})(c__15159__auto___22289))
;
return ((function (switch__15081__auto__,c__15159__auto___22289){
return (function() {
var cljs$core$async$state_machine__15082__auto__ = null;
var cljs$core$async$state_machine__15082__auto____0 = (function (){
var statearr_22284 = [null,null,null,null,null,null,null,null];
(statearr_22284[(0)] = cljs$core$async$state_machine__15082__auto__);

(statearr_22284[(1)] = (1));

return statearr_22284;
});
var cljs$core$async$state_machine__15082__auto____1 = (function (state_22264){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_22264);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e22285){if((e22285 instanceof Object)){
var ex__15085__auto__ = e22285;
var statearr_22286_22304 = state_22264;
(statearr_22286_22304[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22264);

return cljs.core.constant$keyword$recur;
} else {
throw e22285;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__22305 = state_22264;
state_22264 = G__22305;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$state_machine__15082__auto__ = function(state_22264){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15082__auto____1.call(this,state_22264);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15082__auto____0;
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15082__auto____1;
return cljs$core$async$state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___22289))
})();
var state__15161__auto__ = (function (){var statearr_22287 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_22287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___22289);

return statearr_22287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___22289))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;
cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"pos?","pos?",-244377722,null),new cljs.core.Symbol(null,"n","n",-2092305744,null))], 0)))].join('')));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = ((function (jobs,results){
return (function (p__22491){
var vec__22492 = p__22491;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22492,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22492,(1),null);
var job = vec__22492;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__15159__auto___22676 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___22676,res,vec__22492,v,p,job,jobs,results){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___22676,res,vec__22492,v,p,job,jobs,results){
return (function (state_22497){
var state_val_22498 = (state_22497[(1)]);
if((state_val_22498 === (1))){
var state_22497__$1 = state_22497;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22497__$1,(2),res,v);
} else {
if((state_val_22498 === (2))){
var inst_22494 = (state_22497[(2)]);
var inst_22495 = cljs.core.async.close_BANG_(res);
var state_22497__$1 = (function (){var statearr_22499 = state_22497;
(statearr_22499[(7)] = inst_22494);

return statearr_22499;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_22497__$1,inst_22495);
} else {
return null;
}
}
});})(c__15159__auto___22676,res,vec__22492,v,p,job,jobs,results))
;
return ((function (switch__15081__auto__,c__15159__auto___22676,res,vec__22492,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____0 = (function (){
var statearr_22503 = [null,null,null,null,null,null,null,null];
(statearr_22503[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__);

(statearr_22503[(1)] = (1));

return statearr_22503;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____1 = (function (state_22497){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_22497);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e22504){if((e22504 instanceof Object)){
var ex__15085__auto__ = e22504;
var statearr_22505_22677 = state_22497;
(statearr_22505_22677[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22497);

return cljs.core.constant$keyword$recur;
} else {
throw e22504;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__22678 = state_22497;
state_22497 = G__22678;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__ = function(state_22497){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____1.call(this,state_22497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___22676,res,vec__22492,v,p,job,jobs,results))
})();
var state__15161__auto__ = (function (){var statearr_22506 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_22506[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___22676);

return statearr_22506;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___22676,res,vec__22492,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__22507){
var vec__22508 = p__22507;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22508,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22508,(1),null);
var job = vec__22508;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var G__22509_22679 = v;
var G__22510_22680 = res;
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(G__22509_22679,G__22510_22680) : xf.call(null,G__22509_22679,G__22510_22680));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});})(jobs,results,process))
;
var n__5095__auto___22681 = n;
var __22682 = (0);
while(true){
if((__22682 < n__5095__auto___22681)){
var G__22511_22683 = (((type instanceof cljs.core.Keyword))?type.fqn:null);
switch (G__22511_22683) {
case "compute":
var c__15159__auto___22685 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22682,c__15159__auto___22685,G__22511_22683,n__5095__auto___22681,jobs,results,process,async){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (__22682,c__15159__auto___22685,G__22511_22683,n__5095__auto___22681,jobs,results,process,async){
return (function (state_22524){
var state_val_22525 = (state_22524[(1)]);
if((state_val_22525 === (1))){
var state_22524__$1 = state_22524;
var statearr_22526_22686 = state_22524__$1;
(statearr_22526_22686[(2)] = null);

(statearr_22526_22686[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22525 === (2))){
var state_22524__$1 = state_22524;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22524__$1,(4),jobs);
} else {
if((state_val_22525 === (3))){
var inst_22522 = (state_22524[(2)]);
var state_22524__$1 = state_22524;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22524__$1,inst_22522);
} else {
if((state_val_22525 === (4))){
var inst_22514 = (state_22524[(2)]);
var inst_22515 = process(inst_22514);
var state_22524__$1 = state_22524;
if(cljs.core.truth_(inst_22515)){
var statearr_22527_22687 = state_22524__$1;
(statearr_22527_22687[(1)] = (5));

} else {
var statearr_22528_22688 = state_22524__$1;
(statearr_22528_22688[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22525 === (5))){
var state_22524__$1 = state_22524;
var statearr_22529_22689 = state_22524__$1;
(statearr_22529_22689[(2)] = null);

(statearr_22529_22689[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22525 === (6))){
var state_22524__$1 = state_22524;
var statearr_22530_22690 = state_22524__$1;
(statearr_22530_22690[(2)] = null);

(statearr_22530_22690[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22525 === (7))){
var inst_22520 = (state_22524[(2)]);
var state_22524__$1 = state_22524;
var statearr_22531_22691 = state_22524__$1;
(statearr_22531_22691[(2)] = inst_22520);

(statearr_22531_22691[(1)] = (3));


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
});})(__22682,c__15159__auto___22685,G__22511_22683,n__5095__auto___22681,jobs,results,process,async))
;
return ((function (__22682,switch__15081__auto__,c__15159__auto___22685,G__22511_22683,n__5095__auto___22681,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____0 = (function (){
var statearr_22535 = [null,null,null,null,null,null,null];
(statearr_22535[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__);

(statearr_22535[(1)] = (1));

return statearr_22535;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____1 = (function (state_22524){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_22524);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e22536){if((e22536 instanceof Object)){
var ex__15085__auto__ = e22536;
var statearr_22537_22692 = state_22524;
(statearr_22537_22692[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22524);

return cljs.core.constant$keyword$recur;
} else {
throw e22536;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__22693 = state_22524;
state_22524 = G__22693;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__ = function(state_22524){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____1.call(this,state_22524);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__;
})()
;})(__22682,switch__15081__auto__,c__15159__auto___22685,G__22511_22683,n__5095__auto___22681,jobs,results,process,async))
})();
var state__15161__auto__ = (function (){var statearr_22538 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_22538[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___22685);

return statearr_22538;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(__22682,c__15159__auto___22685,G__22511_22683,n__5095__auto___22681,jobs,results,process,async))
);


break;
case "async":
var c__15159__auto___22694 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__22682,c__15159__auto___22694,G__22511_22683,n__5095__auto___22681,jobs,results,process,async){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (__22682,c__15159__auto___22694,G__22511_22683,n__5095__auto___22681,jobs,results,process,async){
return (function (state_22551){
var state_val_22552 = (state_22551[(1)]);
if((state_val_22552 === (1))){
var state_22551__$1 = state_22551;
var statearr_22553_22695 = state_22551__$1;
(statearr_22553_22695[(2)] = null);

(statearr_22553_22695[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22552 === (2))){
var state_22551__$1 = state_22551;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22551__$1,(4),jobs);
} else {
if((state_val_22552 === (3))){
var inst_22549 = (state_22551[(2)]);
var state_22551__$1 = state_22551;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22551__$1,inst_22549);
} else {
if((state_val_22552 === (4))){
var inst_22541 = (state_22551[(2)]);
var inst_22542 = async(inst_22541);
var state_22551__$1 = state_22551;
if(cljs.core.truth_(inst_22542)){
var statearr_22554_22696 = state_22551__$1;
(statearr_22554_22696[(1)] = (5));

} else {
var statearr_22555_22697 = state_22551__$1;
(statearr_22555_22697[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22552 === (5))){
var state_22551__$1 = state_22551;
var statearr_22556_22698 = state_22551__$1;
(statearr_22556_22698[(2)] = null);

(statearr_22556_22698[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22552 === (6))){
var state_22551__$1 = state_22551;
var statearr_22557_22699 = state_22551__$1;
(statearr_22557_22699[(2)] = null);

(statearr_22557_22699[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22552 === (7))){
var inst_22547 = (state_22551[(2)]);
var state_22551__$1 = state_22551;
var statearr_22558_22700 = state_22551__$1;
(statearr_22558_22700[(2)] = inst_22547);

(statearr_22558_22700[(1)] = (3));


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
});})(__22682,c__15159__auto___22694,G__22511_22683,n__5095__auto___22681,jobs,results,process,async))
;
return ((function (__22682,switch__15081__auto__,c__15159__auto___22694,G__22511_22683,n__5095__auto___22681,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____0 = (function (){
var statearr_22562 = [null,null,null,null,null,null,null];
(statearr_22562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__);

(statearr_22562[(1)] = (1));

return statearr_22562;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____1 = (function (state_22551){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_22551);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e22563){if((e22563 instanceof Object)){
var ex__15085__auto__ = e22563;
var statearr_22564_22701 = state_22551;
(statearr_22564_22701[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22551);

return cljs.core.constant$keyword$recur;
} else {
throw e22563;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__22702 = state_22551;
state_22551 = G__22702;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__ = function(state_22551){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____1.call(this,state_22551);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__;
})()
;})(__22682,switch__15081__auto__,c__15159__auto___22694,G__22511_22683,n__5095__auto___22681,jobs,results,process,async))
})();
var state__15161__auto__ = (function (){var statearr_22565 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_22565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___22694);

return statearr_22565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(__22682,c__15159__auto___22694,G__22511_22683,n__5095__auto___22681,jobs,results,process,async))
);


break;
default:
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(type)].join('')));

}

var G__22703 = (__22682 + (1));
__22682 = G__22703;
continue;
} else {
}
break;
}

var c__15159__auto___22704 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___22704,jobs,results,process,async){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___22704,jobs,results,process,async){
return (function (state_22587){
var state_val_22588 = (state_22587[(1)]);
if((state_val_22588 === (1))){
var state_22587__$1 = state_22587;
var statearr_22589_22705 = state_22587__$1;
(statearr_22589_22705[(2)] = null);

(statearr_22589_22705[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22588 === (2))){
var state_22587__$1 = state_22587;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22587__$1,(4),from);
} else {
if((state_val_22588 === (3))){
var inst_22585 = (state_22587[(2)]);
var state_22587__$1 = state_22587;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22587__$1,inst_22585);
} else {
if((state_val_22588 === (4))){
var inst_22568 = (state_22587[(7)]);
var inst_22568__$1 = (state_22587[(2)]);
var inst_22569 = (inst_22568__$1 == null);
var state_22587__$1 = (function (){var statearr_22590 = state_22587;
(statearr_22590[(7)] = inst_22568__$1);

return statearr_22590;
})();
if(cljs.core.truth_(inst_22569)){
var statearr_22591_22706 = state_22587__$1;
(statearr_22591_22706[(1)] = (5));

} else {
var statearr_22592_22707 = state_22587__$1;
(statearr_22592_22707[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22588 === (5))){
var inst_22571 = cljs.core.async.close_BANG_(jobs);
var state_22587__$1 = state_22587;
var statearr_22593_22708 = state_22587__$1;
(statearr_22593_22708[(2)] = inst_22571);

(statearr_22593_22708[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22588 === (6))){
var inst_22568 = (state_22587[(7)]);
var inst_22573 = (state_22587[(8)]);
var inst_22573__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_22574 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_22575 = [inst_22568,inst_22573__$1];
var inst_22576 = (new cljs.core.PersistentVector(null,2,(5),inst_22574,inst_22575,null));
var state_22587__$1 = (function (){var statearr_22594 = state_22587;
(statearr_22594[(8)] = inst_22573__$1);

return statearr_22594;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22587__$1,(8),jobs,inst_22576);
} else {
if((state_val_22588 === (7))){
var inst_22583 = (state_22587[(2)]);
var state_22587__$1 = state_22587;
var statearr_22595_22709 = state_22587__$1;
(statearr_22595_22709[(2)] = inst_22583);

(statearr_22595_22709[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22588 === (8))){
var inst_22573 = (state_22587[(8)]);
var inst_22578 = (state_22587[(2)]);
var state_22587__$1 = (function (){var statearr_22596 = state_22587;
(statearr_22596[(9)] = inst_22578);

return statearr_22596;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22587__$1,(9),results,inst_22573);
} else {
if((state_val_22588 === (9))){
var inst_22580 = (state_22587[(2)]);
var state_22587__$1 = (function (){var statearr_22597 = state_22587;
(statearr_22597[(10)] = inst_22580);

return statearr_22597;
})();
var statearr_22598_22710 = state_22587__$1;
(statearr_22598_22710[(2)] = null);

(statearr_22598_22710[(1)] = (2));


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
}
});})(c__15159__auto___22704,jobs,results,process,async))
;
return ((function (switch__15081__auto__,c__15159__auto___22704,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____0 = (function (){
var statearr_22602 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_22602[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__);

(statearr_22602[(1)] = (1));

return statearr_22602;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____1 = (function (state_22587){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_22587);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e22603){if((e22603 instanceof Object)){
var ex__15085__auto__ = e22603;
var statearr_22604_22711 = state_22587;
(statearr_22604_22711[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22587);

return cljs.core.constant$keyword$recur;
} else {
throw e22603;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__22712 = state_22587;
state_22587 = G__22712;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__ = function(state_22587){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____1.call(this,state_22587);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___22704,jobs,results,process,async))
})();
var state__15161__auto__ = (function (){var statearr_22605 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_22605[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___22704);

return statearr_22605;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___22704,jobs,results,process,async))
);


var c__15159__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto__,jobs,results,process,async){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto__,jobs,results,process,async){
return (function (state_22643){
var state_val_22644 = (state_22643[(1)]);
if((state_val_22644 === (7))){
var inst_22639 = (state_22643[(2)]);
var state_22643__$1 = state_22643;
var statearr_22645_22713 = state_22643__$1;
(statearr_22645_22713[(2)] = inst_22639);

(statearr_22645_22713[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22644 === (20))){
var state_22643__$1 = state_22643;
var statearr_22646_22714 = state_22643__$1;
(statearr_22646_22714[(2)] = null);

(statearr_22646_22714[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22644 === (1))){
var state_22643__$1 = state_22643;
var statearr_22647_22715 = state_22643__$1;
(statearr_22647_22715[(2)] = null);

(statearr_22647_22715[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22644 === (4))){
var inst_22608 = (state_22643[(7)]);
var inst_22608__$1 = (state_22643[(2)]);
var inst_22609 = (inst_22608__$1 == null);
var state_22643__$1 = (function (){var statearr_22648 = state_22643;
(statearr_22648[(7)] = inst_22608__$1);

return statearr_22648;
})();
if(cljs.core.truth_(inst_22609)){
var statearr_22649_22716 = state_22643__$1;
(statearr_22649_22716[(1)] = (5));

} else {
var statearr_22650_22717 = state_22643__$1;
(statearr_22650_22717[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22644 === (15))){
var inst_22621 = (state_22643[(8)]);
var state_22643__$1 = state_22643;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22643__$1,(18),to,inst_22621);
} else {
if((state_val_22644 === (21))){
var inst_22634 = (state_22643[(2)]);
var state_22643__$1 = state_22643;
var statearr_22651_22718 = state_22643__$1;
(statearr_22651_22718[(2)] = inst_22634);

(statearr_22651_22718[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22644 === (13))){
var inst_22636 = (state_22643[(2)]);
var state_22643__$1 = (function (){var statearr_22652 = state_22643;
(statearr_22652[(9)] = inst_22636);

return statearr_22652;
})();
var statearr_22653_22719 = state_22643__$1;
(statearr_22653_22719[(2)] = null);

(statearr_22653_22719[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22644 === (6))){
var inst_22608 = (state_22643[(7)]);
var state_22643__$1 = state_22643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22643__$1,(11),inst_22608);
} else {
if((state_val_22644 === (17))){
var inst_22629 = (state_22643[(2)]);
var state_22643__$1 = state_22643;
if(cljs.core.truth_(inst_22629)){
var statearr_22654_22720 = state_22643__$1;
(statearr_22654_22720[(1)] = (19));

} else {
var statearr_22655_22721 = state_22643__$1;
(statearr_22655_22721[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22644 === (3))){
var inst_22641 = (state_22643[(2)]);
var state_22643__$1 = state_22643;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22643__$1,inst_22641);
} else {
if((state_val_22644 === (12))){
var inst_22618 = (state_22643[(10)]);
var state_22643__$1 = state_22643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22643__$1,(14),inst_22618);
} else {
if((state_val_22644 === (2))){
var state_22643__$1 = state_22643;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22643__$1,(4),results);
} else {
if((state_val_22644 === (19))){
var state_22643__$1 = state_22643;
var statearr_22656_22722 = state_22643__$1;
(statearr_22656_22722[(2)] = null);

(statearr_22656_22722[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22644 === (11))){
var inst_22618 = (state_22643[(2)]);
var state_22643__$1 = (function (){var statearr_22657 = state_22643;
(statearr_22657[(10)] = inst_22618);

return statearr_22657;
})();
var statearr_22658_22723 = state_22643__$1;
(statearr_22658_22723[(2)] = null);

(statearr_22658_22723[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22644 === (9))){
var state_22643__$1 = state_22643;
var statearr_22659_22724 = state_22643__$1;
(statearr_22659_22724[(2)] = null);

(statearr_22659_22724[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22644 === (5))){
var state_22643__$1 = state_22643;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22660_22725 = state_22643__$1;
(statearr_22660_22725[(1)] = (8));

} else {
var statearr_22661_22726 = state_22643__$1;
(statearr_22661_22726[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22644 === (14))){
var inst_22623 = (state_22643[(11)]);
var inst_22621 = (state_22643[(8)]);
var inst_22621__$1 = (state_22643[(2)]);
var inst_22622 = (inst_22621__$1 == null);
var inst_22623__$1 = cljs.core.not(inst_22622);
var state_22643__$1 = (function (){var statearr_22662 = state_22643;
(statearr_22662[(11)] = inst_22623__$1);

(statearr_22662[(8)] = inst_22621__$1);

return statearr_22662;
})();
if(inst_22623__$1){
var statearr_22663_22727 = state_22643__$1;
(statearr_22663_22727[(1)] = (15));

} else {
var statearr_22664_22728 = state_22643__$1;
(statearr_22664_22728[(1)] = (16));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22644 === (16))){
var inst_22623 = (state_22643[(11)]);
var state_22643__$1 = state_22643;
var statearr_22665_22729 = state_22643__$1;
(statearr_22665_22729[(2)] = inst_22623);

(statearr_22665_22729[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22644 === (10))){
var inst_22615 = (state_22643[(2)]);
var state_22643__$1 = state_22643;
var statearr_22666_22730 = state_22643__$1;
(statearr_22666_22730[(2)] = inst_22615);

(statearr_22666_22730[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22644 === (18))){
var inst_22626 = (state_22643[(2)]);
var state_22643__$1 = state_22643;
var statearr_22667_22731 = state_22643__$1;
(statearr_22667_22731[(2)] = inst_22626);

(statearr_22667_22731[(1)] = (17));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22644 === (8))){
var inst_22612 = cljs.core.async.close_BANG_(to);
var state_22643__$1 = state_22643;
var statearr_22668_22732 = state_22643__$1;
(statearr_22668_22732[(2)] = inst_22612);

(statearr_22668_22732[(1)] = (10));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15159__auto__,jobs,results,process,async))
;
return ((function (switch__15081__auto__,c__15159__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____0 = (function (){
var statearr_22672 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_22672[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__);

(statearr_22672[(1)] = (1));

return statearr_22672;
});
var cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____1 = (function (state_22643){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_22643);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e22673){if((e22673 instanceof Object)){
var ex__15085__auto__ = e22673;
var statearr_22674_22733 = state_22643;
(statearr_22674_22733[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22643);

return cljs.core.constant$keyword$recur;
} else {
throw e22673;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__22734 = state_22643;
state_22643 = G__22734;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__ = function(state_22643){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____1.call(this,state_22643);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__15082__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto__,jobs,results,process,async))
})();
var state__15161__auto__ = (function (){var statearr_22675 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_22675[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto__);

return statearr_22675;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto__,jobs,results,process,async))
);

return c__15159__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the async function af, with parallelism n. af
 * must be a function of two arguments, the first an input value and
 * the second a channel on which to place the result(s). af must close!
 * the channel before returning.  The presumption is that af will
 * return immediately, having launched some asynchronous operation
 * whose completion/callback will manipulate the result channel. Outputs
 * will be returned in order relative to  the inputs. By default, the to
 * channel will be closed when the from channel closes, but can be
 * determined by the close?  parameter. Will stop consuming the from
 * channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(){
var G__22736 = arguments.length;
switch (G__22736) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,cljs.core.constant$keyword$async);
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;
/**
 * Takes elements from the from channel and supplies them to the to
 * channel, subject to the transducer xf, with parallelism n. Because
 * it is parallel, the transducer will be applied independently to each
 * element, not across elements, and may produce zero or more outputs
 * per input.  Outputs will be returned in order relative to the
 * inputs. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes.
 * 
 * Note this is supplied for API compatibility with the Clojure version.
 * Values of N > 1 will not result in actual concurrency in a
 * single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(){
var G__22739 = arguments.length;
switch (G__22739) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,cljs.core.constant$keyword$compute);
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;
/**
 * Takes a predicate and a source channel and returns a vector of two
 * channels, the first of which will contain the values for which the
 * predicate returned true, the second those for which it returned
 * false.
 * 
 * The out channels will be unbuffered by default, or two buf-or-ns can
 * be supplied. The channels will close after the source channel has
 * closed.
 */
cljs.core.async.split = (function cljs$core$async$split(){
var G__22742 = arguments.length;
switch (G__22742) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__15159__auto___22795 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___22795,tc,fc){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___22795,tc,fc){
return (function (state_22768){
var state_val_22769 = (state_22768[(1)]);
if((state_val_22769 === (7))){
var inst_22764 = (state_22768[(2)]);
var state_22768__$1 = state_22768;
var statearr_22770_22796 = state_22768__$1;
(statearr_22770_22796[(2)] = inst_22764);

(statearr_22770_22796[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22769 === (1))){
var state_22768__$1 = state_22768;
var statearr_22771_22797 = state_22768__$1;
(statearr_22771_22797[(2)] = null);

(statearr_22771_22797[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22769 === (4))){
var inst_22745 = (state_22768[(7)]);
var inst_22745__$1 = (state_22768[(2)]);
var inst_22746 = (inst_22745__$1 == null);
var state_22768__$1 = (function (){var statearr_22772 = state_22768;
(statearr_22772[(7)] = inst_22745__$1);

return statearr_22772;
})();
if(cljs.core.truth_(inst_22746)){
var statearr_22773_22798 = state_22768__$1;
(statearr_22773_22798[(1)] = (5));

} else {
var statearr_22774_22799 = state_22768__$1;
(statearr_22774_22799[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22769 === (13))){
var state_22768__$1 = state_22768;
var statearr_22775_22800 = state_22768__$1;
(statearr_22775_22800[(2)] = null);

(statearr_22775_22800[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22769 === (6))){
var inst_22745 = (state_22768[(7)]);
var inst_22751 = (function (){var G__22776 = inst_22745;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__22776) : p.call(null,G__22776));
})();
var state_22768__$1 = state_22768;
if(cljs.core.truth_(inst_22751)){
var statearr_22777_22801 = state_22768__$1;
(statearr_22777_22801[(1)] = (9));

} else {
var statearr_22778_22802 = state_22768__$1;
(statearr_22778_22802[(1)] = (10));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22769 === (3))){
var inst_22766 = (state_22768[(2)]);
var state_22768__$1 = state_22768;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22768__$1,inst_22766);
} else {
if((state_val_22769 === (12))){
var state_22768__$1 = state_22768;
var statearr_22779_22803 = state_22768__$1;
(statearr_22779_22803[(2)] = null);

(statearr_22779_22803[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22769 === (2))){
var state_22768__$1 = state_22768;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22768__$1,(4),ch);
} else {
if((state_val_22769 === (11))){
var inst_22745 = (state_22768[(7)]);
var inst_22755 = (state_22768[(2)]);
var state_22768__$1 = state_22768;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22768__$1,(8),inst_22755,inst_22745);
} else {
if((state_val_22769 === (9))){
var state_22768__$1 = state_22768;
var statearr_22780_22804 = state_22768__$1;
(statearr_22780_22804[(2)] = tc);

(statearr_22780_22804[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22769 === (5))){
var inst_22748 = cljs.core.async.close_BANG_(tc);
var inst_22749 = cljs.core.async.close_BANG_(fc);
var state_22768__$1 = (function (){var statearr_22781 = state_22768;
(statearr_22781[(8)] = inst_22748);

return statearr_22781;
})();
var statearr_22782_22805 = state_22768__$1;
(statearr_22782_22805[(2)] = inst_22749);

(statearr_22782_22805[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22769 === (14))){
var inst_22762 = (state_22768[(2)]);
var state_22768__$1 = state_22768;
var statearr_22783_22806 = state_22768__$1;
(statearr_22783_22806[(2)] = inst_22762);

(statearr_22783_22806[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22769 === (10))){
var state_22768__$1 = state_22768;
var statearr_22784_22807 = state_22768__$1;
(statearr_22784_22807[(2)] = fc);

(statearr_22784_22807[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22769 === (8))){
var inst_22757 = (state_22768[(2)]);
var state_22768__$1 = state_22768;
if(cljs.core.truth_(inst_22757)){
var statearr_22785_22808 = state_22768__$1;
(statearr_22785_22808[(1)] = (12));

} else {
var statearr_22786_22809 = state_22768__$1;
(statearr_22786_22809[(1)] = (13));

}

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
}
}
}
}
}
}
});})(c__15159__auto___22795,tc,fc))
;
return ((function (switch__15081__auto__,c__15159__auto___22795,tc,fc){
return (function() {
var cljs$core$async$state_machine__15082__auto__ = null;
var cljs$core$async$state_machine__15082__auto____0 = (function (){
var statearr_22790 = [null,null,null,null,null,null,null,null,null];
(statearr_22790[(0)] = cljs$core$async$state_machine__15082__auto__);

(statearr_22790[(1)] = (1));

return statearr_22790;
});
var cljs$core$async$state_machine__15082__auto____1 = (function (state_22768){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_22768);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e22791){if((e22791 instanceof Object)){
var ex__15085__auto__ = e22791;
var statearr_22792_22810 = state_22768;
(statearr_22792_22810[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22768);

return cljs.core.constant$keyword$recur;
} else {
throw e22791;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__22811 = state_22768;
state_22768 = G__22811;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$state_machine__15082__auto__ = function(state_22768){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15082__auto____1.call(this,state_22768);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15082__auto____0;
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15082__auto____1;
return cljs$core$async$state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___22795,tc,fc))
})();
var state__15161__auto__ = (function (){var statearr_22793 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_22793[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___22795);

return statearr_22793;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___22795,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;
/**
 * f should be a function of 2 arguments. Returns a channel containing
 * the single result of applying f to init and the first item from the
 * channel, then applying f to that result and the 2nd item, etc. If
 * the channel closes without yielding items, returns init and f is not
 * called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__15159__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto__){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto__){
return (function (state_22860){
var state_val_22861 = (state_22860[(1)]);
if((state_val_22861 === (1))){
var inst_22846 = init;
var state_22860__$1 = (function (){var statearr_22862 = state_22860;
(statearr_22862[(7)] = inst_22846);

return statearr_22862;
})();
var statearr_22863_22880 = state_22860__$1;
(statearr_22863_22880[(2)] = null);

(statearr_22863_22880[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22861 === (2))){
var state_22860__$1 = state_22860;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_22860__$1,(4),ch);
} else {
if((state_val_22861 === (3))){
var inst_22858 = (state_22860[(2)]);
var state_22860__$1 = state_22860;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22860__$1,inst_22858);
} else {
if((state_val_22861 === (4))){
var inst_22849 = (state_22860[(8)]);
var inst_22849__$1 = (state_22860[(2)]);
var inst_22850 = (inst_22849__$1 == null);
var state_22860__$1 = (function (){var statearr_22864 = state_22860;
(statearr_22864[(8)] = inst_22849__$1);

return statearr_22864;
})();
if(cljs.core.truth_(inst_22850)){
var statearr_22865_22881 = state_22860__$1;
(statearr_22865_22881[(1)] = (5));

} else {
var statearr_22866_22882 = state_22860__$1;
(statearr_22866_22882[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22861 === (5))){
var inst_22846 = (state_22860[(7)]);
var state_22860__$1 = state_22860;
var statearr_22867_22883 = state_22860__$1;
(statearr_22867_22883[(2)] = inst_22846);

(statearr_22867_22883[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22861 === (6))){
var inst_22846 = (state_22860[(7)]);
var inst_22849 = (state_22860[(8)]);
var inst_22853 = (function (){var G__22868 = inst_22846;
var G__22869 = inst_22849;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22868,G__22869) : f.call(null,G__22868,G__22869));
})();
var inst_22846__$1 = inst_22853;
var state_22860__$1 = (function (){var statearr_22870 = state_22860;
(statearr_22870[(7)] = inst_22846__$1);

return statearr_22870;
})();
var statearr_22871_22884 = state_22860__$1;
(statearr_22871_22884[(2)] = null);

(statearr_22871_22884[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22861 === (7))){
var inst_22856 = (state_22860[(2)]);
var state_22860__$1 = state_22860;
var statearr_22872_22885 = state_22860__$1;
(statearr_22872_22885[(2)] = inst_22856);

(statearr_22872_22885[(1)] = (3));


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
});})(c__15159__auto__))
;
return ((function (switch__15081__auto__,c__15159__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__15082__auto__ = null;
var cljs$core$async$reduce_$_state_machine__15082__auto____0 = (function (){
var statearr_22876 = [null,null,null,null,null,null,null,null,null];
(statearr_22876[(0)] = cljs$core$async$reduce_$_state_machine__15082__auto__);

(statearr_22876[(1)] = (1));

return statearr_22876;
});
var cljs$core$async$reduce_$_state_machine__15082__auto____1 = (function (state_22860){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_22860);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e22877){if((e22877 instanceof Object)){
var ex__15085__auto__ = e22877;
var statearr_22878_22886 = state_22860;
(statearr_22878_22886[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22860);

return cljs.core.constant$keyword$recur;
} else {
throw e22877;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__22887 = state_22860;
state_22860 = G__22887;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__15082__auto__ = function(state_22860){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__15082__auto____1.call(this,state_22860);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__15082__auto____0;
cljs$core$async$reduce_$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__15082__auto____1;
return cljs$core$async$reduce_$_state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto__))
})();
var state__15161__auto__ = (function (){var statearr_22879 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_22879[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto__);

return statearr_22879;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto__))
);

return c__15159__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 * By default the channel will be closed after the items are copied,
 * but can be determined by the close? parameter.
 * 
 * Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(){
var G__22889 = arguments.length;
switch (G__22889) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__15159__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto__){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto__){
return (function (state_22914){
var state_val_22915 = (state_22914[(1)]);
if((state_val_22915 === (7))){
var inst_22896 = (state_22914[(2)]);
var state_22914__$1 = state_22914;
var statearr_22916_22940 = state_22914__$1;
(statearr_22916_22940[(2)] = inst_22896);

(statearr_22916_22940[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22915 === (1))){
var inst_22890 = cljs.core.seq(coll);
var inst_22891 = inst_22890;
var state_22914__$1 = (function (){var statearr_22917 = state_22914;
(statearr_22917[(7)] = inst_22891);

return statearr_22917;
})();
var statearr_22918_22941 = state_22914__$1;
(statearr_22918_22941[(2)] = null);

(statearr_22918_22941[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22915 === (4))){
var inst_22891 = (state_22914[(7)]);
var inst_22894 = cljs.core.first(inst_22891);
var state_22914__$1 = state_22914;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_22914__$1,(7),ch,inst_22894);
} else {
if((state_val_22915 === (13))){
var inst_22908 = (state_22914[(2)]);
var state_22914__$1 = state_22914;
var statearr_22919_22942 = state_22914__$1;
(statearr_22919_22942[(2)] = inst_22908);

(statearr_22919_22942[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22915 === (6))){
var inst_22899 = (state_22914[(2)]);
var state_22914__$1 = state_22914;
if(cljs.core.truth_(inst_22899)){
var statearr_22920_22943 = state_22914__$1;
(statearr_22920_22943[(1)] = (8));

} else {
var statearr_22921_22944 = state_22914__$1;
(statearr_22921_22944[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22915 === (3))){
var inst_22912 = (state_22914[(2)]);
var state_22914__$1 = state_22914;
return cljs.core.async.impl.ioc_helpers.return_chan(state_22914__$1,inst_22912);
} else {
if((state_val_22915 === (12))){
var state_22914__$1 = state_22914;
var statearr_22922_22945 = state_22914__$1;
(statearr_22922_22945[(2)] = null);

(statearr_22922_22945[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22915 === (2))){
var inst_22891 = (state_22914[(7)]);
var state_22914__$1 = state_22914;
if(cljs.core.truth_(inst_22891)){
var statearr_22923_22946 = state_22914__$1;
(statearr_22923_22946[(1)] = (4));

} else {
var statearr_22924_22947 = state_22914__$1;
(statearr_22924_22947[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22915 === (11))){
var inst_22905 = cljs.core.async.close_BANG_(ch);
var state_22914__$1 = state_22914;
var statearr_22925_22948 = state_22914__$1;
(statearr_22925_22948[(2)] = inst_22905);

(statearr_22925_22948[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22915 === (9))){
var state_22914__$1 = state_22914;
if(cljs.core.truth_(close_QMARK_)){
var statearr_22926_22949 = state_22914__$1;
(statearr_22926_22949[(1)] = (11));

} else {
var statearr_22927_22950 = state_22914__$1;
(statearr_22927_22950[(1)] = (12));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_22915 === (5))){
var inst_22891 = (state_22914[(7)]);
var state_22914__$1 = state_22914;
var statearr_22928_22951 = state_22914__$1;
(statearr_22928_22951[(2)] = inst_22891);

(statearr_22928_22951[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22915 === (10))){
var inst_22910 = (state_22914[(2)]);
var state_22914__$1 = state_22914;
var statearr_22929_22952 = state_22914__$1;
(statearr_22929_22952[(2)] = inst_22910);

(statearr_22929_22952[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_22915 === (8))){
var inst_22891 = (state_22914[(7)]);
var inst_22901 = cljs.core.next(inst_22891);
var inst_22891__$1 = inst_22901;
var state_22914__$1 = (function (){var statearr_22930 = state_22914;
(statearr_22930[(7)] = inst_22891__$1);

return statearr_22930;
})();
var statearr_22931_22953 = state_22914__$1;
(statearr_22931_22953[(2)] = null);

(statearr_22931_22953[(1)] = (2));


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
}
}
}
}
}
});})(c__15159__auto__))
;
return ((function (switch__15081__auto__,c__15159__auto__){
return (function() {
var cljs$core$async$state_machine__15082__auto__ = null;
var cljs$core$async$state_machine__15082__auto____0 = (function (){
var statearr_22935 = [null,null,null,null,null,null,null,null];
(statearr_22935[(0)] = cljs$core$async$state_machine__15082__auto__);

(statearr_22935[(1)] = (1));

return statearr_22935;
});
var cljs$core$async$state_machine__15082__auto____1 = (function (state_22914){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_22914);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e22936){if((e22936 instanceof Object)){
var ex__15085__auto__ = e22936;
var statearr_22937_22954 = state_22914;
(statearr_22937_22954[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_22914);

return cljs.core.constant$keyword$recur;
} else {
throw e22936;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__22955 = state_22914;
state_22914 = G__22955;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$state_machine__15082__auto__ = function(state_22914){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15082__auto____1.call(this,state_22914);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15082__auto____0;
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15082__auto____1;
return cljs$core$async$state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto__))
})();
var state__15161__auto__ = (function (){var statearr_22938 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_22938[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto__);

return statearr_22938;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto__))
);

return c__15159__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;
/**
 * Creates and returns a channel which contains the contents of coll,
 * closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

cljs.core.async.Mux = (function (){var obj22957 = {};
return obj22957;
})();

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((function (){var and__4198__auto__ = _;
if(and__4198__auto__){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else {
return and__4198__auto__;
}
})()){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4846__auto__ = (((_ == null))?null:_);
return (function (){var or__4210__auto__ = (cljs.core.async.muxch_STAR_[(function (){var G__22961 = x__4846__auto__;
return goog.typeOf(G__22961);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
})().call(null,_);
}
});


cljs.core.async.Mult = (function (){var obj22963 = {};
return obj22963;
})();

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((function (){var and__4198__auto__ = m;
if(and__4198__auto__){
return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else {
return and__4198__auto__;
}
})()){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4846__auto__ = (((m == null))?null:m);
return (function (){var or__4210__auto__ = (cljs.core.async.tap_STAR_[(function (){var G__22967 = x__4846__auto__;
return goog.typeOf(G__22967);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((function (){var and__4198__auto__ = m;
if(and__4198__auto__){
return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else {
return and__4198__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4846__auto__ = (((m == null))?null:m);
return (function (){var or__4210__auto__ = (cljs.core.async.untap_STAR_[(function (){var G__22971 = x__4846__auto__;
return goog.typeOf(G__22971);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((function (){var and__4198__auto__ = m;
if(and__4198__auto__){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else {
return and__4198__auto__;
}
})()){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4846__auto__ = (((m == null))?null:m);
return (function (){var or__4210__auto__ = (cljs.core.async.untap_all_STAR_[(function (){var G__22975 = x__4846__auto__;
return goog.typeOf(G__22975);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
})().call(null,m);
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 * containing copies of the channel can be created with 'tap', and
 * detached with 'untap'.
 * 
 * Each item is distributed to all taps in parallel and synchronously,
 * i.e. each tap must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow taps from holding up the mult.
 * 
 * Items received when there are no taps get dropped.
 * 
 * If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = (function (){var G__23205 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23205) : cljs.core.atom.call(null,G__23205));
})();
var m = (function (){
if(typeof cljs.core.async.t23206 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23206 = (function (mult,ch,cs,meta23207){
this.mult = mult;
this.ch = ch;
this.cs = cs;
this.meta23207 = meta23207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t23206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_23208,meta23207__$1){
var self__ = this;
var _23208__$1 = this;
return (new cljs.core.async.t23206(self__.mult,self__.ch,self__.cs,meta23207__$1));
});})(cs))
;

cljs.core.async.t23206.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_23208){
var self__ = this;
var _23208__$1 = this;
return self__.meta23207;
});})(cs))
;

cljs.core.async.t23206.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23206.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t23206.prototype.cljs$core$async$Mult$ = true;

cljs.core.async.t23206.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t23206.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t23206.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23209_23434 = self__.cs;
var G__23210_23435 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23209_23434,G__23210_23435) : cljs.core.reset_BANG_.call(null,G__23209_23434,G__23210_23435));

return null;
});})(cs))
;

cljs.core.async.t23206.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"mult","mult",-1187640995,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta23207","meta23207",-1007875179,null)], null);
});})(cs))
;

cljs.core.async.t23206.cljs$lang$type = true;

cljs.core.async.t23206.cljs$lang$ctorStr = "cljs.core.async/t23206";

cljs.core.async.t23206.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"cljs.core.async/t23206");
});})(cs))
;

cljs.core.async.__GT_t23206 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t23206(mult__$1,ch__$1,cs__$1,meta23207){
return (new cljs.core.async.t23206(mult__$1,ch__$1,cs__$1,meta23207));
});})(cs))
;

}

return (new cljs.core.async.t23206(cljs$core$async$mult,ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__23211 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23211) : cljs.core.atom.call(null,G__23211));
})();
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__15159__auto___23436 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___23436,cs,m,dchan,dctr,done){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___23436,cs,m,dchan,dctr,done){
return (function (state_23342){
var state_val_23343 = (state_23342[(1)]);
if((state_val_23343 === (7))){
var inst_23338 = (state_23342[(2)]);
var state_23342__$1 = state_23342;
var statearr_23344_23437 = state_23342__$1;
(statearr_23344_23437[(2)] = inst_23338);

(statearr_23344_23437[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (20))){
var inst_23243 = (state_23342[(7)]);
var inst_23253 = cljs.core.first(inst_23243);
var inst_23254 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23253,(0),null);
var inst_23255 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23253,(1),null);
var state_23342__$1 = (function (){var statearr_23345 = state_23342;
(statearr_23345[(8)] = inst_23254);

return statearr_23345;
})();
if(cljs.core.truth_(inst_23255)){
var statearr_23346_23438 = state_23342__$1;
(statearr_23346_23438[(1)] = (22));

} else {
var statearr_23347_23439 = state_23342__$1;
(statearr_23347_23439[(1)] = (23));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (27))){
var inst_23285 = (state_23342[(9)]);
var inst_23290 = (state_23342[(10)]);
var inst_23283 = (state_23342[(11)]);
var inst_23214 = (state_23342[(12)]);
var inst_23290__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23283,inst_23285);
var inst_23291 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23290__$1,inst_23214,done);
var state_23342__$1 = (function (){var statearr_23348 = state_23342;
(statearr_23348[(10)] = inst_23290__$1);

return statearr_23348;
})();
if(cljs.core.truth_(inst_23291)){
var statearr_23349_23440 = state_23342__$1;
(statearr_23349_23440[(1)] = (30));

} else {
var statearr_23350_23441 = state_23342__$1;
(statearr_23350_23441[(1)] = (31));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (1))){
var state_23342__$1 = state_23342;
var statearr_23351_23442 = state_23342__$1;
(statearr_23351_23442[(2)] = null);

(statearr_23351_23442[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (24))){
var inst_23243 = (state_23342[(7)]);
var inst_23260 = (state_23342[(2)]);
var inst_23261 = cljs.core.next(inst_23243);
var inst_23223 = inst_23261;
var inst_23224 = null;
var inst_23225 = (0);
var inst_23226 = (0);
var state_23342__$1 = (function (){var statearr_23352 = state_23342;
(statearr_23352[(13)] = inst_23224);

(statearr_23352[(14)] = inst_23226);

(statearr_23352[(15)] = inst_23225);

(statearr_23352[(16)] = inst_23223);

(statearr_23352[(17)] = inst_23260);

return statearr_23352;
})();
var statearr_23353_23443 = state_23342__$1;
(statearr_23353_23443[(2)] = null);

(statearr_23353_23443[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (39))){
var state_23342__$1 = state_23342;
var statearr_23357_23444 = state_23342__$1;
(statearr_23357_23444[(2)] = null);

(statearr_23357_23444[(1)] = (41));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (4))){
var inst_23214 = (state_23342[(12)]);
var inst_23214__$1 = (state_23342[(2)]);
var inst_23215 = (inst_23214__$1 == null);
var state_23342__$1 = (function (){var statearr_23358 = state_23342;
(statearr_23358[(12)] = inst_23214__$1);

return statearr_23358;
})();
if(cljs.core.truth_(inst_23215)){
var statearr_23359_23445 = state_23342__$1;
(statearr_23359_23445[(1)] = (5));

} else {
var statearr_23360_23446 = state_23342__$1;
(statearr_23360_23446[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (15))){
var inst_23224 = (state_23342[(13)]);
var inst_23226 = (state_23342[(14)]);
var inst_23225 = (state_23342[(15)]);
var inst_23223 = (state_23342[(16)]);
var inst_23239 = (state_23342[(2)]);
var inst_23240 = (inst_23226 + (1));
var tmp23354 = inst_23224;
var tmp23355 = inst_23225;
var tmp23356 = inst_23223;
var inst_23223__$1 = tmp23356;
var inst_23224__$1 = tmp23354;
var inst_23225__$1 = tmp23355;
var inst_23226__$1 = inst_23240;
var state_23342__$1 = (function (){var statearr_23361 = state_23342;
(statearr_23361[(13)] = inst_23224__$1);

(statearr_23361[(14)] = inst_23226__$1);

(statearr_23361[(15)] = inst_23225__$1);

(statearr_23361[(16)] = inst_23223__$1);

(statearr_23361[(18)] = inst_23239);

return statearr_23361;
})();
var statearr_23362_23447 = state_23342__$1;
(statearr_23362_23447[(2)] = null);

(statearr_23362_23447[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (21))){
var inst_23264 = (state_23342[(2)]);
var state_23342__$1 = state_23342;
var statearr_23366_23448 = state_23342__$1;
(statearr_23366_23448[(2)] = inst_23264);

(statearr_23366_23448[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (31))){
var inst_23290 = (state_23342[(10)]);
var inst_23294 = done(null);
var inst_23295 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23290);
var state_23342__$1 = (function (){var statearr_23367 = state_23342;
(statearr_23367[(19)] = inst_23294);

return statearr_23367;
})();
var statearr_23368_23449 = state_23342__$1;
(statearr_23368_23449[(2)] = inst_23295);

(statearr_23368_23449[(1)] = (32));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (32))){
var inst_23285 = (state_23342[(9)]);
var inst_23282 = (state_23342[(20)]);
var inst_23284 = (state_23342[(21)]);
var inst_23283 = (state_23342[(11)]);
var inst_23297 = (state_23342[(2)]);
var inst_23298 = (inst_23285 + (1));
var tmp23363 = inst_23282;
var tmp23364 = inst_23284;
var tmp23365 = inst_23283;
var inst_23282__$1 = tmp23363;
var inst_23283__$1 = tmp23365;
var inst_23284__$1 = tmp23364;
var inst_23285__$1 = inst_23298;
var state_23342__$1 = (function (){var statearr_23369 = state_23342;
(statearr_23369[(9)] = inst_23285__$1);

(statearr_23369[(20)] = inst_23282__$1);

(statearr_23369[(22)] = inst_23297);

(statearr_23369[(21)] = inst_23284__$1);

(statearr_23369[(11)] = inst_23283__$1);

return statearr_23369;
})();
var statearr_23370_23450 = state_23342__$1;
(statearr_23370_23450[(2)] = null);

(statearr_23370_23450[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (40))){
var inst_23310 = (state_23342[(23)]);
var inst_23314 = done(null);
var inst_23315 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_23310);
var state_23342__$1 = (function (){var statearr_23371 = state_23342;
(statearr_23371[(24)] = inst_23314);

return statearr_23371;
})();
var statearr_23372_23451 = state_23342__$1;
(statearr_23372_23451[(2)] = inst_23315);

(statearr_23372_23451[(1)] = (41));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (33))){
var inst_23301 = (state_23342[(25)]);
var inst_23303 = cljs.core.chunked_seq_QMARK_(inst_23301);
var state_23342__$1 = state_23342;
if(inst_23303){
var statearr_23373_23452 = state_23342__$1;
(statearr_23373_23452[(1)] = (36));

} else {
var statearr_23374_23453 = state_23342__$1;
(statearr_23374_23453[(1)] = (37));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (13))){
var inst_23233 = (state_23342[(26)]);
var inst_23236 = cljs.core.async.close_BANG_(inst_23233);
var state_23342__$1 = state_23342;
var statearr_23375_23454 = state_23342__$1;
(statearr_23375_23454[(2)] = inst_23236);

(statearr_23375_23454[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (22))){
var inst_23254 = (state_23342[(8)]);
var inst_23257 = cljs.core.async.close_BANG_(inst_23254);
var state_23342__$1 = state_23342;
var statearr_23376_23455 = state_23342__$1;
(statearr_23376_23455[(2)] = inst_23257);

(statearr_23376_23455[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (36))){
var inst_23301 = (state_23342[(25)]);
var inst_23305 = cljs.core.chunk_first(inst_23301);
var inst_23306 = cljs.core.chunk_rest(inst_23301);
var inst_23307 = cljs.core.count(inst_23305);
var inst_23282 = inst_23306;
var inst_23283 = inst_23305;
var inst_23284 = inst_23307;
var inst_23285 = (0);
var state_23342__$1 = (function (){var statearr_23377 = state_23342;
(statearr_23377[(9)] = inst_23285);

(statearr_23377[(20)] = inst_23282);

(statearr_23377[(21)] = inst_23284);

(statearr_23377[(11)] = inst_23283);

return statearr_23377;
})();
var statearr_23378_23456 = state_23342__$1;
(statearr_23378_23456[(2)] = null);

(statearr_23378_23456[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (41))){
var inst_23301 = (state_23342[(25)]);
var inst_23317 = (state_23342[(2)]);
var inst_23318 = cljs.core.next(inst_23301);
var inst_23282 = inst_23318;
var inst_23283 = null;
var inst_23284 = (0);
var inst_23285 = (0);
var state_23342__$1 = (function (){var statearr_23379 = state_23342;
(statearr_23379[(9)] = inst_23285);

(statearr_23379[(20)] = inst_23282);

(statearr_23379[(21)] = inst_23284);

(statearr_23379[(27)] = inst_23317);

(statearr_23379[(11)] = inst_23283);

return statearr_23379;
})();
var statearr_23380_23457 = state_23342__$1;
(statearr_23380_23457[(2)] = null);

(statearr_23380_23457[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (43))){
var state_23342__$1 = state_23342;
var statearr_23381_23458 = state_23342__$1;
(statearr_23381_23458[(2)] = null);

(statearr_23381_23458[(1)] = (44));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (29))){
var inst_23326 = (state_23342[(2)]);
var state_23342__$1 = state_23342;
var statearr_23382_23459 = state_23342__$1;
(statearr_23382_23459[(2)] = inst_23326);

(statearr_23382_23459[(1)] = (26));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (44))){
var inst_23335 = (state_23342[(2)]);
var state_23342__$1 = (function (){var statearr_23383 = state_23342;
(statearr_23383[(28)] = inst_23335);

return statearr_23383;
})();
var statearr_23384_23460 = state_23342__$1;
(statearr_23384_23460[(2)] = null);

(statearr_23384_23460[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (6))){
var inst_23274 = (state_23342[(29)]);
var inst_23273 = (function (){var G__23385 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23385) : cljs.core.deref.call(null,G__23385));
})();
var inst_23274__$1 = cljs.core.keys(inst_23273);
var inst_23275 = cljs.core.count(inst_23274__$1);
var inst_23276 = (function (){var G__23386 = dctr;
var G__23387 = inst_23275;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23386,G__23387) : cljs.core.reset_BANG_.call(null,G__23386,G__23387));
})();
var inst_23281 = cljs.core.seq(inst_23274__$1);
var inst_23282 = inst_23281;
var inst_23283 = null;
var inst_23284 = (0);
var inst_23285 = (0);
var state_23342__$1 = (function (){var statearr_23388 = state_23342;
(statearr_23388[(9)] = inst_23285);

(statearr_23388[(20)] = inst_23282);

(statearr_23388[(29)] = inst_23274__$1);

(statearr_23388[(21)] = inst_23284);

(statearr_23388[(30)] = inst_23276);

(statearr_23388[(11)] = inst_23283);

return statearr_23388;
})();
var statearr_23389_23461 = state_23342__$1;
(statearr_23389_23461[(2)] = null);

(statearr_23389_23461[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (28))){
var inst_23282 = (state_23342[(20)]);
var inst_23301 = (state_23342[(25)]);
var inst_23301__$1 = cljs.core.seq(inst_23282);
var state_23342__$1 = (function (){var statearr_23390 = state_23342;
(statearr_23390[(25)] = inst_23301__$1);

return statearr_23390;
})();
if(inst_23301__$1){
var statearr_23391_23462 = state_23342__$1;
(statearr_23391_23462[(1)] = (33));

} else {
var statearr_23392_23463 = state_23342__$1;
(statearr_23392_23463[(1)] = (34));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (25))){
var inst_23285 = (state_23342[(9)]);
var inst_23284 = (state_23342[(21)]);
var inst_23287 = (inst_23285 < inst_23284);
var inst_23288 = inst_23287;
var state_23342__$1 = state_23342;
if(cljs.core.truth_(inst_23288)){
var statearr_23393_23464 = state_23342__$1;
(statearr_23393_23464[(1)] = (27));

} else {
var statearr_23394_23465 = state_23342__$1;
(statearr_23394_23465[(1)] = (28));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (34))){
var state_23342__$1 = state_23342;
var statearr_23395_23466 = state_23342__$1;
(statearr_23395_23466[(2)] = null);

(statearr_23395_23466[(1)] = (35));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (17))){
var state_23342__$1 = state_23342;
var statearr_23396_23467 = state_23342__$1;
(statearr_23396_23467[(2)] = null);

(statearr_23396_23467[(1)] = (18));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (3))){
var inst_23340 = (state_23342[(2)]);
var state_23342__$1 = state_23342;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23342__$1,inst_23340);
} else {
if((state_val_23343 === (12))){
var inst_23269 = (state_23342[(2)]);
var state_23342__$1 = state_23342;
var statearr_23397_23468 = state_23342__$1;
(statearr_23397_23468[(2)] = inst_23269);

(statearr_23397_23468[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (2))){
var state_23342__$1 = state_23342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23342__$1,(4),ch);
} else {
if((state_val_23343 === (23))){
var state_23342__$1 = state_23342;
var statearr_23398_23469 = state_23342__$1;
(statearr_23398_23469[(2)] = null);

(statearr_23398_23469[(1)] = (24));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (35))){
var inst_23324 = (state_23342[(2)]);
var state_23342__$1 = state_23342;
var statearr_23399_23470 = state_23342__$1;
(statearr_23399_23470[(2)] = inst_23324);

(statearr_23399_23470[(1)] = (29));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (19))){
var inst_23243 = (state_23342[(7)]);
var inst_23247 = cljs.core.chunk_first(inst_23243);
var inst_23248 = cljs.core.chunk_rest(inst_23243);
var inst_23249 = cljs.core.count(inst_23247);
var inst_23223 = inst_23248;
var inst_23224 = inst_23247;
var inst_23225 = inst_23249;
var inst_23226 = (0);
var state_23342__$1 = (function (){var statearr_23400 = state_23342;
(statearr_23400[(13)] = inst_23224);

(statearr_23400[(14)] = inst_23226);

(statearr_23400[(15)] = inst_23225);

(statearr_23400[(16)] = inst_23223);

return statearr_23400;
})();
var statearr_23401_23471 = state_23342__$1;
(statearr_23401_23471[(2)] = null);

(statearr_23401_23471[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (11))){
var inst_23223 = (state_23342[(16)]);
var inst_23243 = (state_23342[(7)]);
var inst_23243__$1 = cljs.core.seq(inst_23223);
var state_23342__$1 = (function (){var statearr_23402 = state_23342;
(statearr_23402[(7)] = inst_23243__$1);

return statearr_23402;
})();
if(inst_23243__$1){
var statearr_23403_23472 = state_23342__$1;
(statearr_23403_23472[(1)] = (16));

} else {
var statearr_23404_23473 = state_23342__$1;
(statearr_23404_23473[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (9))){
var inst_23271 = (state_23342[(2)]);
var state_23342__$1 = state_23342;
var statearr_23405_23474 = state_23342__$1;
(statearr_23405_23474[(2)] = inst_23271);

(statearr_23405_23474[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (5))){
var inst_23221 = (function (){var G__23406 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23406) : cljs.core.deref.call(null,G__23406));
})();
var inst_23222 = cljs.core.seq(inst_23221);
var inst_23223 = inst_23222;
var inst_23224 = null;
var inst_23225 = (0);
var inst_23226 = (0);
var state_23342__$1 = (function (){var statearr_23407 = state_23342;
(statearr_23407[(13)] = inst_23224);

(statearr_23407[(14)] = inst_23226);

(statearr_23407[(15)] = inst_23225);

(statearr_23407[(16)] = inst_23223);

return statearr_23407;
})();
var statearr_23408_23475 = state_23342__$1;
(statearr_23408_23475[(2)] = null);

(statearr_23408_23475[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (14))){
var state_23342__$1 = state_23342;
var statearr_23409_23476 = state_23342__$1;
(statearr_23409_23476[(2)] = null);

(statearr_23409_23476[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (45))){
var inst_23332 = (state_23342[(2)]);
var state_23342__$1 = state_23342;
var statearr_23410_23477 = state_23342__$1;
(statearr_23410_23477[(2)] = inst_23332);

(statearr_23410_23477[(1)] = (44));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (26))){
var inst_23274 = (state_23342[(29)]);
var inst_23328 = (state_23342[(2)]);
var inst_23329 = cljs.core.seq(inst_23274);
var state_23342__$1 = (function (){var statearr_23411 = state_23342;
(statearr_23411[(31)] = inst_23328);

return statearr_23411;
})();
if(inst_23329){
var statearr_23412_23478 = state_23342__$1;
(statearr_23412_23478[(1)] = (42));

} else {
var statearr_23413_23479 = state_23342__$1;
(statearr_23413_23479[(1)] = (43));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (16))){
var inst_23243 = (state_23342[(7)]);
var inst_23245 = cljs.core.chunked_seq_QMARK_(inst_23243);
var state_23342__$1 = state_23342;
if(inst_23245){
var statearr_23414_23480 = state_23342__$1;
(statearr_23414_23480[(1)] = (19));

} else {
var statearr_23415_23481 = state_23342__$1;
(statearr_23415_23481[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (38))){
var inst_23321 = (state_23342[(2)]);
var state_23342__$1 = state_23342;
var statearr_23416_23482 = state_23342__$1;
(statearr_23416_23482[(2)] = inst_23321);

(statearr_23416_23482[(1)] = (35));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (30))){
var state_23342__$1 = state_23342;
var statearr_23417_23483 = state_23342__$1;
(statearr_23417_23483[(2)] = null);

(statearr_23417_23483[(1)] = (32));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (10))){
var inst_23224 = (state_23342[(13)]);
var inst_23226 = (state_23342[(14)]);
var inst_23232 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23224,inst_23226);
var inst_23233 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23232,(0),null);
var inst_23234 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23232,(1),null);
var state_23342__$1 = (function (){var statearr_23418 = state_23342;
(statearr_23418[(26)] = inst_23233);

return statearr_23418;
})();
if(cljs.core.truth_(inst_23234)){
var statearr_23419_23484 = state_23342__$1;
(statearr_23419_23484[(1)] = (13));

} else {
var statearr_23420_23485 = state_23342__$1;
(statearr_23420_23485[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (18))){
var inst_23267 = (state_23342[(2)]);
var state_23342__$1 = state_23342;
var statearr_23421_23486 = state_23342__$1;
(statearr_23421_23486[(2)] = inst_23267);

(statearr_23421_23486[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (42))){
var state_23342__$1 = state_23342;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23342__$1,(45),dchan);
} else {
if((state_val_23343 === (37))){
var inst_23310 = (state_23342[(23)]);
var inst_23301 = (state_23342[(25)]);
var inst_23214 = (state_23342[(12)]);
var inst_23310__$1 = cljs.core.first(inst_23301);
var inst_23311 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_23310__$1,inst_23214,done);
var state_23342__$1 = (function (){var statearr_23422 = state_23342;
(statearr_23422[(23)] = inst_23310__$1);

return statearr_23422;
})();
if(cljs.core.truth_(inst_23311)){
var statearr_23423_23487 = state_23342__$1;
(statearr_23423_23487[(1)] = (39));

} else {
var statearr_23424_23488 = state_23342__$1;
(statearr_23424_23488[(1)] = (40));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23343 === (8))){
var inst_23226 = (state_23342[(14)]);
var inst_23225 = (state_23342[(15)]);
var inst_23228 = (inst_23226 < inst_23225);
var inst_23229 = inst_23228;
var state_23342__$1 = state_23342;
if(cljs.core.truth_(inst_23229)){
var statearr_23425_23489 = state_23342__$1;
(statearr_23425_23489[(1)] = (10));

} else {
var statearr_23426_23490 = state_23342__$1;
(statearr_23426_23490[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15159__auto___23436,cs,m,dchan,dctr,done))
;
return ((function (switch__15081__auto__,c__15159__auto___23436,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__15082__auto__ = null;
var cljs$core$async$mult_$_state_machine__15082__auto____0 = (function (){
var statearr_23430 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23430[(0)] = cljs$core$async$mult_$_state_machine__15082__auto__);

(statearr_23430[(1)] = (1));

return statearr_23430;
});
var cljs$core$async$mult_$_state_machine__15082__auto____1 = (function (state_23342){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_23342);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e23431){if((e23431 instanceof Object)){
var ex__15085__auto__ = e23431;
var statearr_23432_23491 = state_23342;
(statearr_23432_23491[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23342);

return cljs.core.constant$keyword$recur;
} else {
throw e23431;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__23492 = state_23342;
state_23342 = G__23492;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__15082__auto__ = function(state_23342){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__15082__auto____1.call(this,state_23342);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__15082__auto____0;
cljs$core$async$mult_$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__15082__auto____1;
return cljs$core$async$mult_$_state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___23436,cs,m,dchan,dctr,done))
})();
var state__15161__auto__ = (function (){var statearr_23433 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_23433[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___23436);

return statearr_23433;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___23436,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(){
var G__23494 = arguments.length;
switch (G__23494) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;
/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

cljs.core.async.Mix = (function (){var obj23497 = {};
return obj23497;
})();

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((function (){var and__4198__auto__ = m;
if(and__4198__auto__){
return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else {
return and__4198__auto__;
}
})()){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4846__auto__ = (((m == null))?null:m);
return (function (){var or__4210__auto__ = (cljs.core.async.admix_STAR_[(function (){var G__23501 = x__4846__auto__;
return goog.typeOf(G__23501);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((function (){var and__4198__auto__ = m;
if(and__4198__auto__){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else {
return and__4198__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4846__auto__ = (((m == null))?null:m);
return (function (){var or__4210__auto__ = (cljs.core.async.unmix_STAR_[(function (){var G__23505 = x__4846__auto__;
return goog.typeOf(G__23505);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((function (){var and__4198__auto__ = m;
if(and__4198__auto__){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else {
return and__4198__auto__;
}
})()){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4846__auto__ = (((m == null))?null:m);
return (function (){var or__4210__auto__ = (cljs.core.async.unmix_all_STAR_[(function (){var G__23509 = x__4846__auto__;
return goog.typeOf(G__23509);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((function (){var and__4198__auto__ = m;
if(and__4198__auto__){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else {
return and__4198__auto__;
}
})()){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4846__auto__ = (((m == null))?null:m);
return (function (){var or__4210__auto__ = (cljs.core.async.toggle_STAR_[(function (){var G__23513 = x__4846__auto__;
return goog.typeOf(G__23513);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((function (){var and__4198__auto__ = m;
if(and__4198__auto__){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else {
return and__4198__auto__;
}
})()){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4846__auto__ = (((m == null))?null:m);
return (function (){var or__4210__auto__ = (cljs.core.async.solo_mode_STAR_[(function (){var G__23517 = x__4846__auto__;
return goog.typeOf(G__23517);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(){
var argseq__5250__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5250__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__23522){
var map__23523 = p__23522;
var map__23523__$1 = ((cljs.core.seq_QMARK_(map__23523))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__23523):map__23523);
var opts = map__23523__$1;
var statearr_23524_23528 = state;
(statearr_23524_23528[cljs.core.async.impl.ioc_helpers.STATE_IDX] = cont_block);


var temp__4425__auto__ = cljs.core.async.do_alts(((function (map__23523,map__23523__$1,opts){
return (function (val){
var statearr_23525_23529 = state;
(statearr_23525_23529[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
});})(map__23523,map__23523__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__4425__auto__)){
var cb = temp__4425__auto__;
var statearr_23526_23530 = state;
(statearr_23526_23530[cljs.core.async.impl.ioc_helpers.VALUE_IDX] = (function (){var G__23527 = cb;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23527) : cljs.core.deref.call(null,G__23527));
})());


return cljs.core.constant$keyword$recur;
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq23518){
var G__23519 = cljs.core.first(seq23518);
var seq23518__$1 = cljs.core.next(seq23518);
var G__23520 = cljs.core.first(seq23518__$1);
var seq23518__$2 = cljs.core.next(seq23518__$1);
var G__23521 = cljs.core.first(seq23518__$2);
var seq23518__$3 = cljs.core.next(seq23518__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__23519,G__23520,G__23521,seq23518__$3);
});
/**
 * Creates and returns a mix of one or more input channels which will
 * be put on the supplied out channel. Input sources can be added to
 * the mix with 'admix', and removed with 'unmix'. A mix supports
 * soloing, muting and pausing multiple inputs atomically using
 * 'toggle', and can solo using either muting or pausing as determined
 * by 'solo-mode'.
 * 
 * Each channel can have zero or more boolean modes set via 'toggle':
 * 
 * :solo - when true, only this (ond other soloed) channel(s) will appear
 * in the mix output channel. :mute and :pause states of soloed
 * channels are ignored. If solo-mode is :mute, non-soloed
 * channels are muted, if :pause, non-soloed channels are
 * paused.
 * 
 * :mute - muted channels will have their contents consumed but not included in the mix
 * :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = (function (){var G__23664 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23664) : cljs.core.atom.call(null,G__23664));
})();
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$pause,null,cljs.core.constant$keyword$mute,null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,cljs.core.constant$keyword$solo);
var solo_mode = (function (){var G__23665 = cljs.core.constant$keyword$mute;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23665) : cljs.core.atom.call(null,G__23665));
})();
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv(((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_((function (){var G__23666 = v;
return (attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(G__23666) : attr.call(null,G__23666));
})())){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = (function (){var G__23667 = cs;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23667) : cljs.core.deref.call(null,G__23667));
})();
var mode = (function (){var G__23668 = solo_mode;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23668) : cljs.core.deref.call(null,G__23668));
})();
var solos = pick(cljs.core.constant$keyword$solo,chs);
var pauses = pick(cljs.core.constant$keyword$pause,chs);
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$solos,solos,cljs.core.constant$keyword$mutes,pick(cljs.core.constant$keyword$mute,chs),cljs.core.constant$keyword$reads,cljs.core.conj.cljs$core$IFn$_invoke$arity$2((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,cljs.core.constant$keyword$pause)) && (!(cljs.core.empty_QMARK_(solos))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t23669 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23669 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta23670){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta23670 = meta23670;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t23669.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23671,meta23670__$1){
var self__ = this;
var _23671__$1 = this;
return (new cljs.core.async.t23669(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta23670__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23669.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_23671){
var self__ = this;
var _23671__$1 = this;
return self__.meta23670;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23669.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23669.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23669.prototype.cljs$core$async$Mix$ = true;

cljs.core.async.t23669.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23669.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23669.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23672_23797 = self__.cs;
var G__23673_23798 = cljs.core.PersistentArrayMap.EMPTY;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23672_23797,G__23673_23798) : cljs.core.reset_BANG_.call(null,G__23672_23797,G__23673_23798));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23669.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23669.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__23674 = mode;
return (self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(G__23674) : self__.solo_modes.call(null,G__23674));
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("mode must be one of: "),cljs.core.str(self__.solo_modes)].join('')),cljs.core.str("\n"),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null))], 0)))].join('')));
}

var G__23675_23799 = self__.solo_mode;
var G__23676_23800 = mode;
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23675_23799,G__23676_23800) : cljs.core.reset_BANG_.call(null,G__23675_23799,G__23676_23800));

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23669.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"mix","mix",2121373763,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta23670","meta23670",-471345168,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t23669.cljs$lang$type = true;

cljs.core.async.t23669.cljs$lang$ctorStr = "cljs.core.async/t23669";

cljs.core.async.t23669.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"cljs.core.async/t23669");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t23669 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t23669(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23670){
return (new cljs.core.async.t23669(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta23670));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t23669(change,cljs$core$async$mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15159__auto___23801 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___23801,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___23801,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_23748){
var state_val_23749 = (state_23748[(1)]);
if((state_val_23749 === (7))){
var inst_23690 = (state_23748[(7)]);
var inst_23695 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23690);
var state_23748__$1 = state_23748;
var statearr_23750_23802 = state_23748__$1;
(statearr_23750_23802[(2)] = inst_23695);

(statearr_23750_23802[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (20))){
var inst_23705 = (state_23748[(8)]);
var state_23748__$1 = state_23748;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23748__$1,(23),out,inst_23705);
} else {
if((state_val_23749 === (1))){
var inst_23680 = (state_23748[(9)]);
var inst_23680__$1 = calc_state();
var inst_23681 = cljs.core.seq_QMARK_(inst_23680__$1);
var state_23748__$1 = (function (){var statearr_23751 = state_23748;
(statearr_23751[(9)] = inst_23680__$1);

return statearr_23751;
})();
if(inst_23681){
var statearr_23752_23803 = state_23748__$1;
(statearr_23752_23803[(1)] = (2));

} else {
var statearr_23753_23804 = state_23748__$1;
(statearr_23753_23804[(1)] = (3));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (24))){
var inst_23698 = (state_23748[(10)]);
var inst_23690 = inst_23698;
var state_23748__$1 = (function (){var statearr_23754 = state_23748;
(statearr_23754[(7)] = inst_23690);

return statearr_23754;
})();
var statearr_23755_23805 = state_23748__$1;
(statearr_23755_23805[(2)] = null);

(statearr_23755_23805[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (4))){
var inst_23680 = (state_23748[(9)]);
var inst_23686 = (state_23748[(2)]);
var inst_23687 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23686,cljs.core.constant$keyword$solos);
var inst_23688 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23686,cljs.core.constant$keyword$mutes);
var inst_23689 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23686,cljs.core.constant$keyword$reads);
var inst_23690 = inst_23680;
var state_23748__$1 = (function (){var statearr_23756 = state_23748;
(statearr_23756[(11)] = inst_23687);

(statearr_23756[(12)] = inst_23688);

(statearr_23756[(7)] = inst_23690);

(statearr_23756[(13)] = inst_23689);

return statearr_23756;
})();
var statearr_23757_23806 = state_23748__$1;
(statearr_23757_23806[(2)] = null);

(statearr_23757_23806[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (15))){
var state_23748__$1 = state_23748;
var statearr_23758_23807 = state_23748__$1;
(statearr_23758_23807[(2)] = null);

(statearr_23758_23807[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (21))){
var inst_23698 = (state_23748[(10)]);
var inst_23690 = inst_23698;
var state_23748__$1 = (function (){var statearr_23759 = state_23748;
(statearr_23759[(7)] = inst_23690);

return statearr_23759;
})();
var statearr_23760_23808 = state_23748__$1;
(statearr_23760_23808[(2)] = null);

(statearr_23760_23808[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (13))){
var inst_23744 = (state_23748[(2)]);
var state_23748__$1 = state_23748;
var statearr_23761_23809 = state_23748__$1;
(statearr_23761_23809[(2)] = inst_23744);

(statearr_23761_23809[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (22))){
var inst_23742 = (state_23748[(2)]);
var state_23748__$1 = state_23748;
var statearr_23762_23810 = state_23748__$1;
(statearr_23762_23810[(2)] = inst_23742);

(statearr_23762_23810[(1)] = (13));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (6))){
var inst_23746 = (state_23748[(2)]);
var state_23748__$1 = state_23748;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23748__$1,inst_23746);
} else {
if((state_val_23749 === (25))){
var state_23748__$1 = state_23748;
var statearr_23763_23811 = state_23748__$1;
(statearr_23763_23811[(2)] = null);

(statearr_23763_23811[(1)] = (26));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (17))){
var inst_23721 = (state_23748[(14)]);
var state_23748__$1 = state_23748;
var statearr_23764_23812 = state_23748__$1;
(statearr_23764_23812[(2)] = inst_23721);

(statearr_23764_23812[(1)] = (19));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (3))){
var inst_23680 = (state_23748[(9)]);
var state_23748__$1 = state_23748;
var statearr_23765_23813 = state_23748__$1;
(statearr_23765_23813[(2)] = inst_23680);

(statearr_23765_23813[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (12))){
var inst_23721 = (state_23748[(14)]);
var inst_23706 = (state_23748[(15)]);
var inst_23699 = (state_23748[(16)]);
var inst_23721__$1 = (function (){var G__23766 = inst_23706;
return (inst_23699.cljs$core$IFn$_invoke$arity$1 ? inst_23699.cljs$core$IFn$_invoke$arity$1(G__23766) : inst_23699.call(null,G__23766));
})();
var state_23748__$1 = (function (){var statearr_23767 = state_23748;
(statearr_23767[(14)] = inst_23721__$1);

return statearr_23767;
})();
if(cljs.core.truth_(inst_23721__$1)){
var statearr_23768_23814 = state_23748__$1;
(statearr_23768_23814[(1)] = (17));

} else {
var statearr_23769_23815 = state_23748__$1;
(statearr_23769_23815[(1)] = (18));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (2))){
var inst_23680 = (state_23748[(9)]);
var inst_23683 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_23680);
var state_23748__$1 = state_23748;
var statearr_23770_23816 = state_23748__$1;
(statearr_23770_23816[(2)] = inst_23683);

(statearr_23770_23816[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (23))){
var inst_23733 = (state_23748[(2)]);
var state_23748__$1 = state_23748;
if(cljs.core.truth_(inst_23733)){
var statearr_23771_23817 = state_23748__$1;
(statearr_23771_23817[(1)] = (24));

} else {
var statearr_23772_23818 = state_23748__$1;
(statearr_23772_23818[(1)] = (25));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (19))){
var inst_23730 = (state_23748[(2)]);
var state_23748__$1 = state_23748;
if(cljs.core.truth_(inst_23730)){
var statearr_23773_23819 = state_23748__$1;
(statearr_23773_23819[(1)] = (20));

} else {
var statearr_23774_23820 = state_23748__$1;
(statearr_23774_23820[(1)] = (21));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (11))){
var inst_23705 = (state_23748[(8)]);
var inst_23711 = (inst_23705 == null);
var state_23748__$1 = state_23748;
if(cljs.core.truth_(inst_23711)){
var statearr_23775_23821 = state_23748__$1;
(statearr_23775_23821[(1)] = (14));

} else {
var statearr_23776_23822 = state_23748__$1;
(statearr_23776_23822[(1)] = (15));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (9))){
var inst_23698 = (state_23748[(10)]);
var inst_23698__$1 = (state_23748[(2)]);
var inst_23699 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23698__$1,cljs.core.constant$keyword$solos);
var inst_23700 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23698__$1,cljs.core.constant$keyword$mutes);
var inst_23701 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23698__$1,cljs.core.constant$keyword$reads);
var state_23748__$1 = (function (){var statearr_23777 = state_23748;
(statearr_23777[(17)] = inst_23700);

(statearr_23777[(16)] = inst_23699);

(statearr_23777[(10)] = inst_23698__$1);

return statearr_23777;
})();
return cljs.core.async.ioc_alts_BANG_(state_23748__$1,(10),inst_23701);
} else {
if((state_val_23749 === (5))){
var inst_23690 = (state_23748[(7)]);
var inst_23693 = cljs.core.seq_QMARK_(inst_23690);
var state_23748__$1 = state_23748;
if(inst_23693){
var statearr_23778_23823 = state_23748__$1;
(statearr_23778_23823[(1)] = (7));

} else {
var statearr_23779_23824 = state_23748__$1;
(statearr_23779_23824[(1)] = (8));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (14))){
var inst_23706 = (state_23748[(15)]);
var inst_23713 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_23706);
var state_23748__$1 = state_23748;
var statearr_23780_23825 = state_23748__$1;
(statearr_23780_23825[(2)] = inst_23713);

(statearr_23780_23825[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (26))){
var inst_23738 = (state_23748[(2)]);
var state_23748__$1 = state_23748;
var statearr_23781_23826 = state_23748__$1;
(statearr_23781_23826[(2)] = inst_23738);

(statearr_23781_23826[(1)] = (22));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (16))){
var inst_23716 = (state_23748[(2)]);
var inst_23717 = calc_state();
var inst_23690 = inst_23717;
var state_23748__$1 = (function (){var statearr_23782 = state_23748;
(statearr_23782[(18)] = inst_23716);

(statearr_23782[(7)] = inst_23690);

return statearr_23782;
})();
var statearr_23783_23827 = state_23748__$1;
(statearr_23783_23827[(2)] = null);

(statearr_23783_23827[(1)] = (5));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (10))){
var inst_23705 = (state_23748[(8)]);
var inst_23706 = (state_23748[(15)]);
var inst_23704 = (state_23748[(2)]);
var inst_23705__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23704,(0),null);
var inst_23706__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_23704,(1),null);
var inst_23707 = (inst_23705__$1 == null);
var inst_23708 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_23706__$1,change);
var inst_23709 = (inst_23707) || (inst_23708);
var state_23748__$1 = (function (){var statearr_23784 = state_23748;
(statearr_23784[(8)] = inst_23705__$1);

(statearr_23784[(15)] = inst_23706__$1);

return statearr_23784;
})();
if(cljs.core.truth_(inst_23709)){
var statearr_23785_23828 = state_23748__$1;
(statearr_23785_23828[(1)] = (11));

} else {
var statearr_23786_23829 = state_23748__$1;
(statearr_23786_23829[(1)] = (12));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (18))){
var inst_23700 = (state_23748[(17)]);
var inst_23706 = (state_23748[(15)]);
var inst_23699 = (state_23748[(16)]);
var inst_23725 = cljs.core.empty_QMARK_(inst_23699);
var inst_23726 = (function (){var G__23787 = inst_23706;
return (inst_23700.cljs$core$IFn$_invoke$arity$1 ? inst_23700.cljs$core$IFn$_invoke$arity$1(G__23787) : inst_23700.call(null,G__23787));
})();
var inst_23727 = cljs.core.not(inst_23726);
var inst_23728 = (inst_23725) && (inst_23727);
var state_23748__$1 = state_23748;
var statearr_23788_23830 = state_23748__$1;
(statearr_23788_23830[(2)] = inst_23728);

(statearr_23788_23830[(1)] = (19));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23749 === (8))){
var inst_23690 = (state_23748[(7)]);
var state_23748__$1 = state_23748;
var statearr_23789_23831 = state_23748__$1;
(statearr_23789_23831[(2)] = inst_23690);

(statearr_23789_23831[(1)] = (9));


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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15159__auto___23801,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__15081__auto__,c__15159__auto___23801,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__15082__auto__ = null;
var cljs$core$async$mix_$_state_machine__15082__auto____0 = (function (){
var statearr_23793 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23793[(0)] = cljs$core$async$mix_$_state_machine__15082__auto__);

(statearr_23793[(1)] = (1));

return statearr_23793;
});
var cljs$core$async$mix_$_state_machine__15082__auto____1 = (function (state_23748){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_23748);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e23794){if((e23794 instanceof Object)){
var ex__15085__auto__ = e23794;
var statearr_23795_23832 = state_23748;
(statearr_23795_23832[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23748);

return cljs.core.constant$keyword$recur;
} else {
throw e23794;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__23833 = state_23748;
state_23748 = G__23833;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__15082__auto__ = function(state_23748){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__15082__auto____1.call(this,state_23748);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__15082__auto____0;
cljs$core$async$mix_$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__15082__auto____1;
return cljs$core$async$mix_$_state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___23801,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__15161__auto__ = (function (){var statearr_23796 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_23796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___23801);

return statearr_23796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___23801,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 * state map is a map of channels -> channel-state-map. A
 * channel-state-map is a map of attrs -> boolean, where attr is one or
 * more of :mute, :pause or :solo. Any states supplied are merged with
 * the current state.
 * 
 * Note that channels can be added to a mix via toggle, which can be
 * used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

cljs.core.async.Pub = (function (){var obj23835 = {};
return obj23835;
})();

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((function (){var and__4198__auto__ = p;
if(and__4198__auto__){
return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else {
return and__4198__auto__;
}
})()){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4846__auto__ = (((p == null))?null:p);
return (function (){var or__4210__auto__ = (cljs.core.async.sub_STAR_[(function (){var G__23839 = x__4846__auto__;
return goog.typeOf(G__23839);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((function (){var and__4198__auto__ = p;
if(and__4198__auto__){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else {
return and__4198__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4846__auto__ = (((p == null))?null:p);
return (function (){var or__4210__auto__ = (cljs.core.async.unsub_STAR_[(function (){var G__23843 = x__4846__auto__;
return goog.typeOf(G__23843);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(){
var G__23845 = arguments.length;
switch (G__23845) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((function (){var and__4198__auto__ = p;
if(and__4198__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else {
return and__4198__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4846__auto__ = (((p == null))?null:p);
return (function (){var or__4210__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__23847 = x__4846__auto__;
return goog.typeOf(G__23847);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((function (){var and__4198__auto__ = p;
if(and__4198__auto__){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else {
return and__4198__auto__;
}
})()){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4846__auto__ = (((p == null))?null:p);
return (function (){var or__4210__auto__ = (cljs.core.async.unsub_all_STAR_[(function (){var G__23849 = x__4846__auto__;
return goog.typeOf(G__23849);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;

/**
 * Creates and returns a pub(lication) of the supplied channel,
 * partitioned into topics by the topic-fn. topic-fn will be applied to
 * each value on the channel and the result will determine the 'topic'
 * on which that value will be put. Channels can be subscribed to
 * receive copies of topics using 'sub', and unsubscribed using
 * 'unsub'. Each topic will be handled by an internal mult on a
 * dedicated channel. By default these internal channels are
 * unbuffered, but a buf-fn can be supplied which, given a topic,
 * creates a buffer with desired properties.
 * 
 * Each item is distributed to all subs in parallel and synchronously,
 * i.e. each sub must accept before the next item is distributed. Use
 * buffering/windowing to prevent slow subs from holding up the pub.
 * 
 * Items received when there are no matching subs get dropped.
 * 
 * Note that if buf-fns are used then each topic is handled
 * asynchronously, i.e. if a channel is subscribed to more than one
 * topic it should not expect them to be interleaved identically with
 * the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(){
var G__23853 = arguments.length;
switch (G__23853) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = (function (){var G__23854 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__23854) : cljs.core.atom.call(null,G__23854));
})();
var ensure_mult = ((function (mults){
return (function (topic){
var or__4210__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__23856 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23856) : cljs.core.deref.call(null,G__23856));
})(),topic);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,((function (or__4210__auto__,mults){
return (function (p1__23851_SHARP_){
if(cljs.core.truth_((function (){var G__23857 = topic;
return (p1__23851_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__23851_SHARP_.cljs$core$IFn$_invoke$arity$1(G__23857) : p1__23851_SHARP_.call(null,G__23857));
})())){
return p1__23851_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__23851_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((function (){var G__23858 = topic;
return (buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(G__23858) : buf_fn.call(null,G__23858));
})())));
}
});})(or__4210__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t23859 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t23859 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta23860){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta23860 = meta23860;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t23859.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_23861,meta23860__$1){
var self__ = this;
var _23861__$1 = this;
return (new cljs.core.async.t23859(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta23860__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t23859.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_23861){
var self__ = this;
var _23861__$1 = this;
return self__.meta23860;
});})(mults,ensure_mult))
;

cljs.core.async.t23859.prototype.cljs$core$async$Mux$ = true;

cljs.core.async.t23859.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t23859.prototype.cljs$core$async$Pub$ = true;

cljs.core.async.t23859.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (function (){var G__23862 = topic;
return (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(G__23862) : self__.ensure_mult.call(null,G__23862));
})();
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t23859.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__4425__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2((function (){var G__23863 = self__.mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23863) : cljs.core.deref.call(null,G__23863));
})(),topic);
if(cljs.core.truth_(temp__4425__auto__)){
var m = temp__4425__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t23859.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
var G__23864 = self__.mults;
var G__23865 = cljs.core.PersistentArrayMap.EMPTY;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__23864,G__23865) : cljs.core.reset_BANG_.call(null,G__23864,G__23865));
});})(mults,ensure_mult))
;

cljs.core.async.t23859.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t23859.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta23860","meta23860",-1139524430,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t23859.cljs$lang$type = true;

cljs.core.async.t23859.cljs$lang$ctorStr = "cljs.core.async/t23859";

cljs.core.async.t23859.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"cljs.core.async/t23859");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t23859 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t23859(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23860){
return (new cljs.core.async.t23859(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta23860));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t23859(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__15159__auto___23989 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___23989,mults,ensure_mult,p){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___23989,mults,ensure_mult,p){
return (function (state_23937){
var state_val_23938 = (state_23937[(1)]);
if((state_val_23938 === (7))){
var inst_23933 = (state_23937[(2)]);
var state_23937__$1 = state_23937;
var statearr_23939_23990 = state_23937__$1;
(statearr_23939_23990[(2)] = inst_23933);

(statearr_23939_23990[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (20))){
var state_23937__$1 = state_23937;
var statearr_23940_23991 = state_23937__$1;
(statearr_23940_23991[(2)] = null);

(statearr_23940_23991[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (1))){
var state_23937__$1 = state_23937;
var statearr_23941_23992 = state_23937__$1;
(statearr_23941_23992[(2)] = null);

(statearr_23941_23992[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (24))){
var inst_23916 = (state_23937[(7)]);
var inst_23925 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_23916);
var state_23937__$1 = state_23937;
var statearr_23942_23993 = state_23937__$1;
(statearr_23942_23993[(2)] = inst_23925);

(statearr_23942_23993[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (4))){
var inst_23868 = (state_23937[(8)]);
var inst_23868__$1 = (state_23937[(2)]);
var inst_23869 = (inst_23868__$1 == null);
var state_23937__$1 = (function (){var statearr_23943 = state_23937;
(statearr_23943[(8)] = inst_23868__$1);

return statearr_23943;
})();
if(cljs.core.truth_(inst_23869)){
var statearr_23944_23994 = state_23937__$1;
(statearr_23944_23994[(1)] = (5));

} else {
var statearr_23945_23995 = state_23937__$1;
(statearr_23945_23995[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (15))){
var inst_23910 = (state_23937[(2)]);
var state_23937__$1 = state_23937;
var statearr_23946_23996 = state_23937__$1;
(statearr_23946_23996[(2)] = inst_23910);

(statearr_23946_23996[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (21))){
var inst_23930 = (state_23937[(2)]);
var state_23937__$1 = (function (){var statearr_23947 = state_23937;
(statearr_23947[(9)] = inst_23930);

return statearr_23947;
})();
var statearr_23948_23997 = state_23937__$1;
(statearr_23948_23997[(2)] = null);

(statearr_23948_23997[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (13))){
var inst_23892 = (state_23937[(10)]);
var inst_23894 = cljs.core.chunked_seq_QMARK_(inst_23892);
var state_23937__$1 = state_23937;
if(inst_23894){
var statearr_23949_23998 = state_23937__$1;
(statearr_23949_23998[(1)] = (16));

} else {
var statearr_23950_23999 = state_23937__$1;
(statearr_23950_23999[(1)] = (17));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (22))){
var inst_23922 = (state_23937[(2)]);
var state_23937__$1 = state_23937;
if(cljs.core.truth_(inst_23922)){
var statearr_23951_24000 = state_23937__$1;
(statearr_23951_24000[(1)] = (23));

} else {
var statearr_23952_24001 = state_23937__$1;
(statearr_23952_24001[(1)] = (24));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (6))){
var inst_23868 = (state_23937[(8)]);
var inst_23916 = (state_23937[(7)]);
var inst_23918 = (state_23937[(11)]);
var inst_23916__$1 = (function (){var G__23953 = inst_23868;
return (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(G__23953) : topic_fn.call(null,G__23953));
})();
var inst_23917 = (function (){var G__23954 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23954) : cljs.core.deref.call(null,G__23954));
})();
var inst_23918__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_23917,inst_23916__$1);
var state_23937__$1 = (function (){var statearr_23955 = state_23937;
(statearr_23955[(7)] = inst_23916__$1);

(statearr_23955[(11)] = inst_23918__$1);

return statearr_23955;
})();
if(cljs.core.truth_(inst_23918__$1)){
var statearr_23956_24002 = state_23937__$1;
(statearr_23956_24002[(1)] = (19));

} else {
var statearr_23957_24003 = state_23937__$1;
(statearr_23957_24003[(1)] = (20));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (25))){
var inst_23927 = (state_23937[(2)]);
var state_23937__$1 = state_23937;
var statearr_23958_24004 = state_23937__$1;
(statearr_23958_24004[(2)] = inst_23927);

(statearr_23958_24004[(1)] = (21));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (17))){
var inst_23892 = (state_23937[(10)]);
var inst_23901 = cljs.core.first(inst_23892);
var inst_23902 = cljs.core.async.muxch_STAR_(inst_23901);
var inst_23903 = cljs.core.async.close_BANG_(inst_23902);
var inst_23904 = cljs.core.next(inst_23892);
var inst_23878 = inst_23904;
var inst_23879 = null;
var inst_23880 = (0);
var inst_23881 = (0);
var state_23937__$1 = (function (){var statearr_23959 = state_23937;
(statearr_23959[(12)] = inst_23903);

(statearr_23959[(13)] = inst_23879);

(statearr_23959[(14)] = inst_23878);

(statearr_23959[(15)] = inst_23880);

(statearr_23959[(16)] = inst_23881);

return statearr_23959;
})();
var statearr_23960_24005 = state_23937__$1;
(statearr_23960_24005[(2)] = null);

(statearr_23960_24005[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (3))){
var inst_23935 = (state_23937[(2)]);
var state_23937__$1 = state_23937;
return cljs.core.async.impl.ioc_helpers.return_chan(state_23937__$1,inst_23935);
} else {
if((state_val_23938 === (12))){
var inst_23912 = (state_23937[(2)]);
var state_23937__$1 = state_23937;
var statearr_23961_24006 = state_23937__$1;
(statearr_23961_24006[(2)] = inst_23912);

(statearr_23961_24006[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (2))){
var state_23937__$1 = state_23937;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_23937__$1,(4),ch);
} else {
if((state_val_23938 === (23))){
var state_23937__$1 = state_23937;
var statearr_23962_24007 = state_23937__$1;
(statearr_23962_24007[(2)] = null);

(statearr_23962_24007[(1)] = (25));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (19))){
var inst_23868 = (state_23937[(8)]);
var inst_23918 = (state_23937[(11)]);
var inst_23920 = cljs.core.async.muxch_STAR_(inst_23918);
var state_23937__$1 = state_23937;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_23937__$1,(22),inst_23920,inst_23868);
} else {
if((state_val_23938 === (11))){
var inst_23878 = (state_23937[(14)]);
var inst_23892 = (state_23937[(10)]);
var inst_23892__$1 = cljs.core.seq(inst_23878);
var state_23937__$1 = (function (){var statearr_23963 = state_23937;
(statearr_23963[(10)] = inst_23892__$1);

return statearr_23963;
})();
if(inst_23892__$1){
var statearr_23964_24008 = state_23937__$1;
(statearr_23964_24008[(1)] = (13));

} else {
var statearr_23965_24009 = state_23937__$1;
(statearr_23965_24009[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (9))){
var inst_23914 = (state_23937[(2)]);
var state_23937__$1 = state_23937;
var statearr_23966_24010 = state_23937__$1;
(statearr_23966_24010[(2)] = inst_23914);

(statearr_23966_24010[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (5))){
var inst_23875 = (function (){var G__23967 = mults;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__23967) : cljs.core.deref.call(null,G__23967));
})();
var inst_23876 = cljs.core.vals(inst_23875);
var inst_23877 = cljs.core.seq(inst_23876);
var inst_23878 = inst_23877;
var inst_23879 = null;
var inst_23880 = (0);
var inst_23881 = (0);
var state_23937__$1 = (function (){var statearr_23968 = state_23937;
(statearr_23968[(13)] = inst_23879);

(statearr_23968[(14)] = inst_23878);

(statearr_23968[(15)] = inst_23880);

(statearr_23968[(16)] = inst_23881);

return statearr_23968;
})();
var statearr_23969_24011 = state_23937__$1;
(statearr_23969_24011[(2)] = null);

(statearr_23969_24011[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (14))){
var state_23937__$1 = state_23937;
var statearr_23973_24012 = state_23937__$1;
(statearr_23973_24012[(2)] = null);

(statearr_23973_24012[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (16))){
var inst_23892 = (state_23937[(10)]);
var inst_23896 = cljs.core.chunk_first(inst_23892);
var inst_23897 = cljs.core.chunk_rest(inst_23892);
var inst_23898 = cljs.core.count(inst_23896);
var inst_23878 = inst_23897;
var inst_23879 = inst_23896;
var inst_23880 = inst_23898;
var inst_23881 = (0);
var state_23937__$1 = (function (){var statearr_23974 = state_23937;
(statearr_23974[(13)] = inst_23879);

(statearr_23974[(14)] = inst_23878);

(statearr_23974[(15)] = inst_23880);

(statearr_23974[(16)] = inst_23881);

return statearr_23974;
})();
var statearr_23975_24013 = state_23937__$1;
(statearr_23975_24013[(2)] = null);

(statearr_23975_24013[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (10))){
var inst_23879 = (state_23937[(13)]);
var inst_23878 = (state_23937[(14)]);
var inst_23880 = (state_23937[(15)]);
var inst_23881 = (state_23937[(16)]);
var inst_23886 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_23879,inst_23881);
var inst_23887 = cljs.core.async.muxch_STAR_(inst_23886);
var inst_23888 = cljs.core.async.close_BANG_(inst_23887);
var inst_23889 = (inst_23881 + (1));
var tmp23970 = inst_23879;
var tmp23971 = inst_23878;
var tmp23972 = inst_23880;
var inst_23878__$1 = tmp23971;
var inst_23879__$1 = tmp23970;
var inst_23880__$1 = tmp23972;
var inst_23881__$1 = inst_23889;
var state_23937__$1 = (function (){var statearr_23976 = state_23937;
(statearr_23976[(13)] = inst_23879__$1);

(statearr_23976[(17)] = inst_23888);

(statearr_23976[(14)] = inst_23878__$1);

(statearr_23976[(15)] = inst_23880__$1);

(statearr_23976[(16)] = inst_23881__$1);

return statearr_23976;
})();
var statearr_23977_24014 = state_23937__$1;
(statearr_23977_24014[(2)] = null);

(statearr_23977_24014[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (18))){
var inst_23907 = (state_23937[(2)]);
var state_23937__$1 = state_23937;
var statearr_23978_24015 = state_23937__$1;
(statearr_23978_24015[(2)] = inst_23907);

(statearr_23978_24015[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_23938 === (8))){
var inst_23880 = (state_23937[(15)]);
var inst_23881 = (state_23937[(16)]);
var inst_23883 = (inst_23881 < inst_23880);
var inst_23884 = inst_23883;
var state_23937__$1 = state_23937;
if(cljs.core.truth_(inst_23884)){
var statearr_23979_24016 = state_23937__$1;
(statearr_23979_24016[(1)] = (10));

} else {
var statearr_23980_24017 = state_23937__$1;
(statearr_23980_24017[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15159__auto___23989,mults,ensure_mult,p))
;
return ((function (switch__15081__auto__,c__15159__auto___23989,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__15082__auto__ = null;
var cljs$core$async$state_machine__15082__auto____0 = (function (){
var statearr_23984 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_23984[(0)] = cljs$core$async$state_machine__15082__auto__);

(statearr_23984[(1)] = (1));

return statearr_23984;
});
var cljs$core$async$state_machine__15082__auto____1 = (function (state_23937){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_23937);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e23985){if((e23985 instanceof Object)){
var ex__15085__auto__ = e23985;
var statearr_23986_24018 = state_23937;
(statearr_23986_24018[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_23937);

return cljs.core.constant$keyword$recur;
} else {
throw e23985;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__24019 = state_23937;
state_23937 = G__24019;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$state_machine__15082__auto__ = function(state_23937){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15082__auto____1.call(this,state_23937);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15082__auto____0;
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15082__auto____1;
return cljs$core$async$state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___23989,mults,ensure_mult,p))
})();
var state__15161__auto__ = (function (){var statearr_23987 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_23987[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___23989);

return statearr_23987;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___23989,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;
/**
 * Subscribes a channel to a topic of a pub.
 * 
 * By default the channel will be closed when the source closes,
 * but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(){
var G__24021 = arguments.length;
switch (G__24021) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;
/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(){
var G__24024 = arguments.length;
switch (G__24024) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;
/**
 * Takes a function and a collection of source channels, and returns a
 * channel which contains the values produced by applying f to the set
 * of first items taken from each source channel, followed by applying
 * f to the set of second items from each channel, until any one of the
 * channels is closed, at which point the output channel will be
 * closed. The returned channel will be unbuffered by default, or a
 * buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(){
var G__24027 = arguments.length;
switch (G__24027) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = (function (){var G__24028 = null;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24028) : cljs.core.atom.call(null,G__24028));
})();
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__15159__auto___24102 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___24102,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___24102,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_24067){
var state_val_24068 = (state_24067[(1)]);
if((state_val_24068 === (7))){
var state_24067__$1 = state_24067;
var statearr_24069_24103 = state_24067__$1;
(statearr_24069_24103[(2)] = null);

(statearr_24069_24103[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24068 === (1))){
var state_24067__$1 = state_24067;
var statearr_24070_24104 = state_24067__$1;
(statearr_24070_24104[(2)] = null);

(statearr_24070_24104[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24068 === (4))){
var inst_24031 = (state_24067[(7)]);
var inst_24033 = (inst_24031 < cnt);
var state_24067__$1 = state_24067;
if(cljs.core.truth_(inst_24033)){
var statearr_24071_24105 = state_24067__$1;
(statearr_24071_24105[(1)] = (6));

} else {
var statearr_24072_24106 = state_24067__$1;
(statearr_24072_24106[(1)] = (7));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24068 === (15))){
var inst_24063 = (state_24067[(2)]);
var state_24067__$1 = state_24067;
var statearr_24073_24107 = state_24067__$1;
(statearr_24073_24107[(2)] = inst_24063);

(statearr_24073_24107[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24068 === (13))){
var inst_24056 = cljs.core.async.close_BANG_(out);
var state_24067__$1 = state_24067;
var statearr_24074_24108 = state_24067__$1;
(statearr_24074_24108[(2)] = inst_24056);

(statearr_24074_24108[(1)] = (15));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24068 === (6))){
var state_24067__$1 = state_24067;
var statearr_24075_24109 = state_24067__$1;
(statearr_24075_24109[(2)] = null);

(statearr_24075_24109[(1)] = (11));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24068 === (3))){
var inst_24065 = (state_24067[(2)]);
var state_24067__$1 = state_24067;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24067__$1,inst_24065);
} else {
if((state_val_24068 === (12))){
var inst_24053 = (state_24067[(8)]);
var inst_24053__$1 = (state_24067[(2)]);
var inst_24054 = cljs.core.some(cljs.core.nil_QMARK_,inst_24053__$1);
var state_24067__$1 = (function (){var statearr_24076 = state_24067;
(statearr_24076[(8)] = inst_24053__$1);

return statearr_24076;
})();
if(cljs.core.truth_(inst_24054)){
var statearr_24077_24110 = state_24067__$1;
(statearr_24077_24110[(1)] = (13));

} else {
var statearr_24078_24111 = state_24067__$1;
(statearr_24078_24111[(1)] = (14));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24068 === (2))){
var inst_24030 = (function (){var G__24079 = dctr;
var G__24080 = cnt;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24079,G__24080) : cljs.core.reset_BANG_.call(null,G__24079,G__24080));
})();
var inst_24031 = (0);
var state_24067__$1 = (function (){var statearr_24081 = state_24067;
(statearr_24081[(7)] = inst_24031);

(statearr_24081[(9)] = inst_24030);

return statearr_24081;
})();
var statearr_24082_24112 = state_24067__$1;
(statearr_24082_24112[(2)] = null);

(statearr_24082_24112[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24068 === (11))){
var inst_24031 = (state_24067[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_24067,(10),Object,null,(9));
var inst_24040 = (function (){var G__24083 = inst_24031;
return (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(G__24083) : chs__$1.call(null,G__24083));
})();
var inst_24041 = (function (){var G__24084 = inst_24031;
return (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(G__24084) : done.call(null,G__24084));
})();
var inst_24042 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_24040,inst_24041);
var state_24067__$1 = state_24067;
var statearr_24085_24113 = state_24067__$1;
(statearr_24085_24113[(2)] = inst_24042);


cljs.core.async.impl.ioc_helpers.process_exception(state_24067__$1);

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24068 === (9))){
var inst_24031 = (state_24067[(7)]);
var inst_24044 = (state_24067[(2)]);
var inst_24045 = (inst_24031 + (1));
var inst_24031__$1 = inst_24045;
var state_24067__$1 = (function (){var statearr_24086 = state_24067;
(statearr_24086[(7)] = inst_24031__$1);

(statearr_24086[(10)] = inst_24044);

return statearr_24086;
})();
var statearr_24087_24114 = state_24067__$1;
(statearr_24087_24114[(2)] = null);

(statearr_24087_24114[(1)] = (4));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24068 === (5))){
var inst_24051 = (state_24067[(2)]);
var state_24067__$1 = (function (){var statearr_24088 = state_24067;
(statearr_24088[(11)] = inst_24051);

return statearr_24088;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24067__$1,(12),dchan);
} else {
if((state_val_24068 === (14))){
var inst_24053 = (state_24067[(8)]);
var inst_24058 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_24053);
var state_24067__$1 = state_24067;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24067__$1,(16),out,inst_24058);
} else {
if((state_val_24068 === (16))){
var inst_24060 = (state_24067[(2)]);
var state_24067__$1 = (function (){var statearr_24089 = state_24067;
(statearr_24089[(12)] = inst_24060);

return statearr_24089;
})();
var statearr_24090_24115 = state_24067__$1;
(statearr_24090_24115[(2)] = null);

(statearr_24090_24115[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24068 === (10))){
var inst_24035 = (state_24067[(2)]);
var inst_24036 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_24067__$1 = (function (){var statearr_24091 = state_24067;
(statearr_24091[(13)] = inst_24035);

return statearr_24091;
})();
var statearr_24092_24116 = state_24067__$1;
(statearr_24092_24116[(2)] = inst_24036);


cljs.core.async.impl.ioc_helpers.process_exception(state_24067__$1);

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24068 === (8))){
var inst_24049 = (state_24067[(2)]);
var state_24067__$1 = state_24067;
var statearr_24093_24117 = state_24067__$1;
(statearr_24093_24117[(2)] = inst_24049);

(statearr_24093_24117[(1)] = (5));


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
}
}
}
}
}
}
}
}
});})(c__15159__auto___24102,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__15081__auto__,c__15159__auto___24102,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__15082__auto__ = null;
var cljs$core$async$state_machine__15082__auto____0 = (function (){
var statearr_24097 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24097[(0)] = cljs$core$async$state_machine__15082__auto__);

(statearr_24097[(1)] = (1));

return statearr_24097;
});
var cljs$core$async$state_machine__15082__auto____1 = (function (state_24067){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_24067);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e24098){if((e24098 instanceof Object)){
var ex__15085__auto__ = e24098;
var statearr_24099_24118 = state_24067;
(statearr_24099_24118[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24067);

return cljs.core.constant$keyword$recur;
} else {
throw e24098;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__24119 = state_24067;
state_24067 = G__24119;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$state_machine__15082__auto__ = function(state_24067){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15082__auto____1.call(this,state_24067);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15082__auto____0;
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15082__auto____1;
return cljs$core$async$state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___24102,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__15161__auto__ = (function (){var statearr_24100 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_24100[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___24102);

return statearr_24100;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___24102,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;
/**
 * Takes a collection of source channels and returns a channel which
 * contains all values taken from them. The returned channel will be
 * unbuffered by default, or a buf-or-n can be supplied. The channel
 * will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(){
var G__24122 = arguments.length;
switch (G__24122) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15159__auto___24177 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___24177,out){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___24177,out){
return (function (state_24152){
var state_val_24153 = (state_24152[(1)]);
if((state_val_24153 === (7))){
var inst_24131 = (state_24152[(7)]);
var inst_24132 = (state_24152[(8)]);
var inst_24131__$1 = (state_24152[(2)]);
var inst_24132__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24131__$1,(0),null);
var inst_24133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_24131__$1,(1),null);
var inst_24134 = (inst_24132__$1 == null);
var state_24152__$1 = (function (){var statearr_24154 = state_24152;
(statearr_24154[(9)] = inst_24133);

(statearr_24154[(7)] = inst_24131__$1);

(statearr_24154[(8)] = inst_24132__$1);

return statearr_24154;
})();
if(cljs.core.truth_(inst_24134)){
var statearr_24155_24178 = state_24152__$1;
(statearr_24155_24178[(1)] = (8));

} else {
var statearr_24156_24179 = state_24152__$1;
(statearr_24156_24179[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24153 === (1))){
var inst_24123 = cljs.core.vec(chs);
var inst_24124 = inst_24123;
var state_24152__$1 = (function (){var statearr_24157 = state_24152;
(statearr_24157[(10)] = inst_24124);

return statearr_24157;
})();
var statearr_24158_24180 = state_24152__$1;
(statearr_24158_24180[(2)] = null);

(statearr_24158_24180[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24153 === (4))){
var inst_24124 = (state_24152[(10)]);
var state_24152__$1 = state_24152;
return cljs.core.async.ioc_alts_BANG_(state_24152__$1,(7),inst_24124);
} else {
if((state_val_24153 === (6))){
var inst_24148 = (state_24152[(2)]);
var state_24152__$1 = state_24152;
var statearr_24159_24181 = state_24152__$1;
(statearr_24159_24181[(2)] = inst_24148);

(statearr_24159_24181[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24153 === (3))){
var inst_24150 = (state_24152[(2)]);
var state_24152__$1 = state_24152;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24152__$1,inst_24150);
} else {
if((state_val_24153 === (2))){
var inst_24124 = (state_24152[(10)]);
var inst_24126 = cljs.core.count(inst_24124);
var inst_24127 = (inst_24126 > (0));
var state_24152__$1 = state_24152;
if(cljs.core.truth_(inst_24127)){
var statearr_24161_24182 = state_24152__$1;
(statearr_24161_24182[(1)] = (4));

} else {
var statearr_24162_24183 = state_24152__$1;
(statearr_24162_24183[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24153 === (11))){
var inst_24124 = (state_24152[(10)]);
var inst_24141 = (state_24152[(2)]);
var tmp24160 = inst_24124;
var inst_24124__$1 = tmp24160;
var state_24152__$1 = (function (){var statearr_24163 = state_24152;
(statearr_24163[(10)] = inst_24124__$1);

(statearr_24163[(11)] = inst_24141);

return statearr_24163;
})();
var statearr_24164_24184 = state_24152__$1;
(statearr_24164_24184[(2)] = null);

(statearr_24164_24184[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24153 === (9))){
var inst_24132 = (state_24152[(8)]);
var state_24152__$1 = state_24152;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24152__$1,(11),out,inst_24132);
} else {
if((state_val_24153 === (5))){
var inst_24146 = cljs.core.async.close_BANG_(out);
var state_24152__$1 = state_24152;
var statearr_24165_24185 = state_24152__$1;
(statearr_24165_24185[(2)] = inst_24146);

(statearr_24165_24185[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24153 === (10))){
var inst_24144 = (state_24152[(2)]);
var state_24152__$1 = state_24152;
var statearr_24166_24186 = state_24152__$1;
(statearr_24166_24186[(2)] = inst_24144);

(statearr_24166_24186[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24153 === (8))){
var inst_24133 = (state_24152[(9)]);
var inst_24124 = (state_24152[(10)]);
var inst_24131 = (state_24152[(7)]);
var inst_24132 = (state_24152[(8)]);
var inst_24136 = (function (){var cs = inst_24124;
var vec__24129 = inst_24131;
var v = inst_24132;
var c = inst_24133;
return ((function (cs,vec__24129,v,c,inst_24133,inst_24124,inst_24131,inst_24132,state_val_24153,c__15159__auto___24177,out){
return (function (p1__24120_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__24120_SHARP_);
});
;})(cs,vec__24129,v,c,inst_24133,inst_24124,inst_24131,inst_24132,state_val_24153,c__15159__auto___24177,out))
})();
var inst_24137 = cljs.core.filterv(inst_24136,inst_24124);
var inst_24124__$1 = inst_24137;
var state_24152__$1 = (function (){var statearr_24167 = state_24152;
(statearr_24167[(10)] = inst_24124__$1);

return statearr_24167;
})();
var statearr_24168_24187 = state_24152__$1;
(statearr_24168_24187[(2)] = null);

(statearr_24168_24187[(1)] = (2));


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
}
}
}
});})(c__15159__auto___24177,out))
;
return ((function (switch__15081__auto__,c__15159__auto___24177,out){
return (function() {
var cljs$core$async$state_machine__15082__auto__ = null;
var cljs$core$async$state_machine__15082__auto____0 = (function (){
var statearr_24172 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24172[(0)] = cljs$core$async$state_machine__15082__auto__);

(statearr_24172[(1)] = (1));

return statearr_24172;
});
var cljs$core$async$state_machine__15082__auto____1 = (function (state_24152){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_24152);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e24173){if((e24173 instanceof Object)){
var ex__15085__auto__ = e24173;
var statearr_24174_24188 = state_24152;
(statearr_24174_24188[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24152);

return cljs.core.constant$keyword$recur;
} else {
throw e24173;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__24189 = state_24152;
state_24152 = G__24189;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$state_machine__15082__auto__ = function(state_24152){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15082__auto____1.call(this,state_24152);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15082__auto____0;
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15082__auto____1;
return cljs$core$async$state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___24177,out))
})();
var state__15161__auto__ = (function (){var statearr_24175 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_24175[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___24177);

return statearr_24175;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___24177,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;
/**
 * Returns a channel containing the single (collection) result of the
 * items taken from the channel conjoined to the supplied
 * collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 * The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(){
var G__24191 = arguments.length;
switch (G__24191) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15159__auto___24239 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___24239,out){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___24239,out){
return (function (state_24215){
var state_val_24216 = (state_24215[(1)]);
if((state_val_24216 === (7))){
var inst_24197 = (state_24215[(7)]);
var inst_24197__$1 = (state_24215[(2)]);
var inst_24198 = (inst_24197__$1 == null);
var inst_24199 = cljs.core.not(inst_24198);
var state_24215__$1 = (function (){var statearr_24217 = state_24215;
(statearr_24217[(7)] = inst_24197__$1);

return statearr_24217;
})();
if(inst_24199){
var statearr_24218_24240 = state_24215__$1;
(statearr_24218_24240[(1)] = (8));

} else {
var statearr_24219_24241 = state_24215__$1;
(statearr_24219_24241[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24216 === (1))){
var inst_24192 = (0);
var state_24215__$1 = (function (){var statearr_24220 = state_24215;
(statearr_24220[(8)] = inst_24192);

return statearr_24220;
})();
var statearr_24221_24242 = state_24215__$1;
(statearr_24221_24242[(2)] = null);

(statearr_24221_24242[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24216 === (4))){
var state_24215__$1 = state_24215;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24215__$1,(7),ch);
} else {
if((state_val_24216 === (6))){
var inst_24210 = (state_24215[(2)]);
var state_24215__$1 = state_24215;
var statearr_24222_24243 = state_24215__$1;
(statearr_24222_24243[(2)] = inst_24210);

(statearr_24222_24243[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24216 === (3))){
var inst_24212 = (state_24215[(2)]);
var inst_24213 = cljs.core.async.close_BANG_(out);
var state_24215__$1 = (function (){var statearr_24223 = state_24215;
(statearr_24223[(9)] = inst_24212);

return statearr_24223;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24215__$1,inst_24213);
} else {
if((state_val_24216 === (2))){
var inst_24192 = (state_24215[(8)]);
var inst_24194 = (inst_24192 < n);
var state_24215__$1 = state_24215;
if(cljs.core.truth_(inst_24194)){
var statearr_24224_24244 = state_24215__$1;
(statearr_24224_24244[(1)] = (4));

} else {
var statearr_24225_24245 = state_24215__$1;
(statearr_24225_24245[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24216 === (11))){
var inst_24192 = (state_24215[(8)]);
var inst_24202 = (state_24215[(2)]);
var inst_24203 = (inst_24192 + (1));
var inst_24192__$1 = inst_24203;
var state_24215__$1 = (function (){var statearr_24226 = state_24215;
(statearr_24226[(10)] = inst_24202);

(statearr_24226[(8)] = inst_24192__$1);

return statearr_24226;
})();
var statearr_24227_24246 = state_24215__$1;
(statearr_24227_24246[(2)] = null);

(statearr_24227_24246[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24216 === (9))){
var state_24215__$1 = state_24215;
var statearr_24228_24247 = state_24215__$1;
(statearr_24228_24247[(2)] = null);

(statearr_24228_24247[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24216 === (5))){
var state_24215__$1 = state_24215;
var statearr_24229_24248 = state_24215__$1;
(statearr_24229_24248[(2)] = null);

(statearr_24229_24248[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24216 === (10))){
var inst_24207 = (state_24215[(2)]);
var state_24215__$1 = state_24215;
var statearr_24230_24249 = state_24215__$1;
(statearr_24230_24249[(2)] = inst_24207);

(statearr_24230_24249[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24216 === (8))){
var inst_24197 = (state_24215[(7)]);
var state_24215__$1 = state_24215;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24215__$1,(11),out,inst_24197);
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
}
}
}
});})(c__15159__auto___24239,out))
;
return ((function (switch__15081__auto__,c__15159__auto___24239,out){
return (function() {
var cljs$core$async$state_machine__15082__auto__ = null;
var cljs$core$async$state_machine__15082__auto____0 = (function (){
var statearr_24234 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24234[(0)] = cljs$core$async$state_machine__15082__auto__);

(statearr_24234[(1)] = (1));

return statearr_24234;
});
var cljs$core$async$state_machine__15082__auto____1 = (function (state_24215){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_24215);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e24235){if((e24235 instanceof Object)){
var ex__15085__auto__ = e24235;
var statearr_24236_24250 = state_24215;
(statearr_24236_24250[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24215);

return cljs.core.constant$keyword$recur;
} else {
throw e24235;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__24251 = state_24215;
state_24215 = G__24251;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$state_machine__15082__auto__ = function(state_24215){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15082__auto____1.call(this,state_24215);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15082__auto____0;
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15082__auto____1;
return cljs$core$async$state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___24239,out))
})();
var state__15161__auto__ = (function (){var statearr_24237 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_24237[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___24239);

return statearr_24237;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___24239,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t24264 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24264 = (function (map_LT_,f,ch,meta24265){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24265 = meta24265;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24264.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24266,meta24265__$1){
var self__ = this;
var _24266__$1 = this;
return (new cljs.core.async.t24264(self__.map_LT_,self__.f,self__.ch,meta24265__$1));
});

cljs.core.async.t24264.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24266){
var self__ = this;
var _24266__$1 = this;
return self__.meta24265;
});

cljs.core.async.t24264.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24264.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t24264.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t24264.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24264.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if(typeof cljs.core.async.t24267 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24267 = (function (map_LT_,f,ch,meta24265,_,fn1,meta24268){
this.map_LT_ = map_LT_;
this.f = f;
this.ch = ch;
this.meta24265 = meta24265;
this._ = _;
this.fn1 = fn1;
this.meta24268 = meta24268;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24267.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_24269,meta24268__$1){
var self__ = this;
var _24269__$1 = this;
return (new cljs.core.async.t24267(self__.map_LT_,self__.f,self__.ch,self__.meta24265,self__._,self__.fn1,meta24268__$1));
});})(___$1))
;

cljs.core.async.t24267.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_24269){
var self__ = this;
var _24269__$1 = this;
return self__.meta24268;
});})(___$1))
;

cljs.core.async.t24267.prototype.cljs$core$async$impl$protocols$Handler$ = true;

cljs.core.async.t24267.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
});})(___$1))
;

cljs.core.async.t24267.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__24252_SHARP_){
var G__24270 = (((p1__24252_SHARP_ == null))?null:(function (){var G__24271 = p1__24252_SHARP_;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24271) : self__.f.call(null,G__24271));
})());
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__24270) : f1.call(null,G__24270));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t24267.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24265","meta24265",-1183652233,null),new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta24268","meta24268",154856821,null)], null);
});})(___$1))
;

cljs.core.async.t24267.cljs$lang$type = true;

cljs.core.async.t24267.cljs$lang$ctorStr = "cljs.core.async/t24267";

cljs.core.async.t24267.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"cljs.core.async/t24267");
});})(___$1))
;

cljs.core.async.__GT_t24267 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t24267(map_LT___$1,f__$1,ch__$1,meta24265__$1,___$2,fn1__$1,meta24268){
return (new cljs.core.async.t24267(map_LT___$1,f__$1,ch__$1,meta24265__$1,___$2,fn1__$1,meta24268));
});})(___$1))
;

}

return (new cljs.core.async.t24267(self__.map_LT_,self__.f,self__.ch,self__.meta24265,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4198__auto__ = ret;
if(cljs.core.truth_(and__4198__auto__)){
return !(((function (){var G__24272 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24272) : cljs.core.deref.call(null,G__24272));
})() == null));
} else {
return and__4198__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__24273 = (function (){var G__24274 = ret;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24274) : cljs.core.deref.call(null,G__24274));
})();
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24273) : self__.f.call(null,G__24273));
})());
} else {
return ret;
}
});

cljs.core.async.t24264.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24264.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
});

cljs.core.async.t24264.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map<","map<",-1235808357,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24265","meta24265",-1183652233,null)], null);
});

cljs.core.async.t24264.cljs$lang$type = true;

cljs.core.async.t24264.cljs$lang$ctorStr = "cljs.core.async/t24264";

cljs.core.async.t24264.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"cljs.core.async/t24264");
});

cljs.core.async.__GT_t24264 = (function cljs$core$async$map_LT__$___GT_t24264(map_LT___$1,f__$1,ch__$1,meta24265){
return (new cljs.core.async.t24264(map_LT___$1,f__$1,ch__$1,meta24265));
});

}

return (new cljs.core.async.t24264(cljs$core$async$map_LT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t24279 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24279 = (function (map_GT_,f,ch,meta24280){
this.map_GT_ = map_GT_;
this.f = f;
this.ch = ch;
this.meta24280 = meta24280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24281,meta24280__$1){
var self__ = this;
var _24281__$1 = this;
return (new cljs.core.async.t24279(self__.map_GT_,self__.f,self__.ch,meta24280__$1));
});

cljs.core.async.t24279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24281){
var self__ = this;
var _24281__$1 = this;
return self__.meta24280;
});

cljs.core.async.t24279.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24279.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t24279.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24279.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t24279.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24279.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(function (){var G__24282 = val;
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__24282) : self__.f.call(null,G__24282));
})(),fn1);
});

cljs.core.async.t24279.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"map>","map>",1676369295,null),new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24280","meta24280",-28979687,null)], null);
});

cljs.core.async.t24279.cljs$lang$type = true;

cljs.core.async.t24279.cljs$lang$ctorStr = "cljs.core.async/t24279";

cljs.core.async.t24279.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"cljs.core.async/t24279");
});

cljs.core.async.__GT_t24279 = (function cljs$core$async$map_GT__$___GT_t24279(map_GT___$1,f__$1,ch__$1,meta24280){
return (new cljs.core.async.t24279(map_GT___$1,f__$1,ch__$1,meta24280));
});

}

return (new cljs.core.async.t24279(cljs$core$async$map_GT_,f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t24287 !== 'undefined'){
} else {

/**
* @constructor
*/
cljs.core.async.t24287 = (function (filter_GT_,p,ch,meta24288){
this.filter_GT_ = filter_GT_;
this.p = p;
this.ch = ch;
this.meta24288 = meta24288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.core.async.t24287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_24289,meta24288__$1){
var self__ = this;
var _24289__$1 = this;
return (new cljs.core.async.t24287(self__.filter_GT_,self__.p,self__.ch,meta24288__$1));
});

cljs.core.async.t24287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_24289){
var self__ = this;
var _24289__$1 = this;
return self__.meta24288;
});

cljs.core.async.t24287.prototype.cljs$core$async$impl$protocols$Channel$ = true;

cljs.core.async.t24287.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
});

cljs.core.async.t24287.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
});

cljs.core.async.t24287.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

cljs.core.async.t24287.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
});

cljs.core.async.t24287.prototype.cljs$core$async$impl$protocols$WritePort$ = true;

cljs.core.async.t24287.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var G__24290 = val;
return (self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(G__24290) : self__.p.call(null,G__24290));
})())){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
});

cljs.core.async.t24287.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"filter>","filter>",-37644455,null),new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta24288","meta24288",-377472329,null)], null);
});

cljs.core.async.t24287.cljs$lang$type = true;

cljs.core.async.t24287.cljs$lang$ctorStr = "cljs.core.async/t24287";

cljs.core.async.t24287.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"cljs.core.async/t24287");
});

cljs.core.async.__GT_t24287 = (function cljs$core$async$filter_GT__$___GT_t24287(filter_GT___$1,p__$1,ch__$1,meta24288){
return (new cljs.core.async.t24287(filter_GT___$1,p__$1,ch__$1,meta24288));
});

}

return (new cljs.core.async.t24287(cljs$core$async$filter_GT_,p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(){
var G__24292 = arguments.length;
switch (G__24292) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15159__auto___24336 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___24336,out){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___24336,out){
return (function (state_24313){
var state_val_24314 = (state_24313[(1)]);
if((state_val_24314 === (7))){
var inst_24309 = (state_24313[(2)]);
var state_24313__$1 = state_24313;
var statearr_24315_24337 = state_24313__$1;
(statearr_24315_24337[(2)] = inst_24309);

(statearr_24315_24337[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24314 === (1))){
var state_24313__$1 = state_24313;
var statearr_24316_24338 = state_24313__$1;
(statearr_24316_24338[(2)] = null);

(statearr_24316_24338[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24314 === (4))){
var inst_24295 = (state_24313[(7)]);
var inst_24295__$1 = (state_24313[(2)]);
var inst_24296 = (inst_24295__$1 == null);
var state_24313__$1 = (function (){var statearr_24317 = state_24313;
(statearr_24317[(7)] = inst_24295__$1);

return statearr_24317;
})();
if(cljs.core.truth_(inst_24296)){
var statearr_24318_24339 = state_24313__$1;
(statearr_24318_24339[(1)] = (5));

} else {
var statearr_24319_24340 = state_24313__$1;
(statearr_24319_24340[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24314 === (6))){
var inst_24295 = (state_24313[(7)]);
var inst_24300 = (function (){var G__24320 = inst_24295;
return (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(G__24320) : p.call(null,G__24320));
})();
var state_24313__$1 = state_24313;
if(cljs.core.truth_(inst_24300)){
var statearr_24321_24341 = state_24313__$1;
(statearr_24321_24341[(1)] = (8));

} else {
var statearr_24322_24342 = state_24313__$1;
(statearr_24322_24342[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24314 === (3))){
var inst_24311 = (state_24313[(2)]);
var state_24313__$1 = state_24313;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24313__$1,inst_24311);
} else {
if((state_val_24314 === (2))){
var state_24313__$1 = state_24313;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24313__$1,(4),ch);
} else {
if((state_val_24314 === (11))){
var inst_24303 = (state_24313[(2)]);
var state_24313__$1 = state_24313;
var statearr_24323_24343 = state_24313__$1;
(statearr_24323_24343[(2)] = inst_24303);

(statearr_24323_24343[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24314 === (9))){
var state_24313__$1 = state_24313;
var statearr_24324_24344 = state_24313__$1;
(statearr_24324_24344[(2)] = null);

(statearr_24324_24344[(1)] = (10));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24314 === (5))){
var inst_24298 = cljs.core.async.close_BANG_(out);
var state_24313__$1 = state_24313;
var statearr_24325_24345 = state_24313__$1;
(statearr_24325_24345[(2)] = inst_24298);

(statearr_24325_24345[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24314 === (10))){
var inst_24306 = (state_24313[(2)]);
var state_24313__$1 = (function (){var statearr_24326 = state_24313;
(statearr_24326[(8)] = inst_24306);

return statearr_24326;
})();
var statearr_24327_24346 = state_24313__$1;
(statearr_24327_24346[(2)] = null);

(statearr_24327_24346[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24314 === (8))){
var inst_24295 = (state_24313[(7)]);
var state_24313__$1 = state_24313;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24313__$1,(11),out,inst_24295);
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
}
}
}
});})(c__15159__auto___24336,out))
;
return ((function (switch__15081__auto__,c__15159__auto___24336,out){
return (function() {
var cljs$core$async$state_machine__15082__auto__ = null;
var cljs$core$async$state_machine__15082__auto____0 = (function (){
var statearr_24331 = [null,null,null,null,null,null,null,null,null];
(statearr_24331[(0)] = cljs$core$async$state_machine__15082__auto__);

(statearr_24331[(1)] = (1));

return statearr_24331;
});
var cljs$core$async$state_machine__15082__auto____1 = (function (state_24313){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_24313);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e24332){if((e24332 instanceof Object)){
var ex__15085__auto__ = e24332;
var statearr_24333_24347 = state_24313;
(statearr_24333_24347[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24313);

return cljs.core.constant$keyword$recur;
} else {
throw e24332;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__24348 = state_24313;
state_24313 = G__24348;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$state_machine__15082__auto__ = function(state_24313){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15082__auto____1.call(this,state_24313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15082__auto____0;
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15082__auto____1;
return cljs$core$async$state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___24336,out))
})();
var state__15161__auto__ = (function (){var statearr_24334 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_24334[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___24336);

return statearr_24334;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___24336,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(){
var G__24350 = arguments.length;
switch (G__24350) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;
cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__15159__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto__){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto__){
return (function (state_24518){
var state_val_24519 = (state_24518[(1)]);
if((state_val_24519 === (7))){
var inst_24514 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24520_24562 = state_24518__$1;
(statearr_24520_24562[(2)] = inst_24514);

(statearr_24520_24562[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24519 === (20))){
var inst_24484 = (state_24518[(7)]);
var inst_24495 = (state_24518[(2)]);
var inst_24496 = cljs.core.next(inst_24484);
var inst_24470 = inst_24496;
var inst_24471 = null;
var inst_24472 = (0);
var inst_24473 = (0);
var state_24518__$1 = (function (){var statearr_24521 = state_24518;
(statearr_24521[(8)] = inst_24470);

(statearr_24521[(9)] = inst_24472);

(statearr_24521[(10)] = inst_24495);

(statearr_24521[(11)] = inst_24471);

(statearr_24521[(12)] = inst_24473);

return statearr_24521;
})();
var statearr_24522_24563 = state_24518__$1;
(statearr_24522_24563[(2)] = null);

(statearr_24522_24563[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24519 === (1))){
var state_24518__$1 = state_24518;
var statearr_24523_24564 = state_24518__$1;
(statearr_24523_24564[(2)] = null);

(statearr_24523_24564[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24519 === (4))){
var inst_24459 = (state_24518[(13)]);
var inst_24459__$1 = (state_24518[(2)]);
var inst_24460 = (inst_24459__$1 == null);
var state_24518__$1 = (function (){var statearr_24524 = state_24518;
(statearr_24524[(13)] = inst_24459__$1);

return statearr_24524;
})();
if(cljs.core.truth_(inst_24460)){
var statearr_24525_24565 = state_24518__$1;
(statearr_24525_24565[(1)] = (5));

} else {
var statearr_24526_24566 = state_24518__$1;
(statearr_24526_24566[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24519 === (15))){
var state_24518__$1 = state_24518;
var statearr_24530_24567 = state_24518__$1;
(statearr_24530_24567[(2)] = null);

(statearr_24530_24567[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24519 === (21))){
var state_24518__$1 = state_24518;
var statearr_24531_24568 = state_24518__$1;
(statearr_24531_24568[(2)] = null);

(statearr_24531_24568[(1)] = (23));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24519 === (13))){
var inst_24470 = (state_24518[(8)]);
var inst_24472 = (state_24518[(9)]);
var inst_24471 = (state_24518[(11)]);
var inst_24473 = (state_24518[(12)]);
var inst_24480 = (state_24518[(2)]);
var inst_24481 = (inst_24473 + (1));
var tmp24527 = inst_24470;
var tmp24528 = inst_24472;
var tmp24529 = inst_24471;
var inst_24470__$1 = tmp24527;
var inst_24471__$1 = tmp24529;
var inst_24472__$1 = tmp24528;
var inst_24473__$1 = inst_24481;
var state_24518__$1 = (function (){var statearr_24532 = state_24518;
(statearr_24532[(8)] = inst_24470__$1);

(statearr_24532[(9)] = inst_24472__$1);

(statearr_24532[(14)] = inst_24480);

(statearr_24532[(11)] = inst_24471__$1);

(statearr_24532[(12)] = inst_24473__$1);

return statearr_24532;
})();
var statearr_24533_24569 = state_24518__$1;
(statearr_24533_24569[(2)] = null);

(statearr_24533_24569[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24519 === (22))){
var state_24518__$1 = state_24518;
var statearr_24534_24570 = state_24518__$1;
(statearr_24534_24570[(2)] = null);

(statearr_24534_24570[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24519 === (6))){
var inst_24459 = (state_24518[(13)]);
var inst_24468 = (function (){var G__24535 = inst_24459;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24535) : f.call(null,G__24535));
})();
var inst_24469 = cljs.core.seq(inst_24468);
var inst_24470 = inst_24469;
var inst_24471 = null;
var inst_24472 = (0);
var inst_24473 = (0);
var state_24518__$1 = (function (){var statearr_24536 = state_24518;
(statearr_24536[(8)] = inst_24470);

(statearr_24536[(9)] = inst_24472);

(statearr_24536[(11)] = inst_24471);

(statearr_24536[(12)] = inst_24473);

return statearr_24536;
})();
var statearr_24537_24571 = state_24518__$1;
(statearr_24537_24571[(2)] = null);

(statearr_24537_24571[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24519 === (17))){
var inst_24484 = (state_24518[(7)]);
var inst_24488 = cljs.core.chunk_first(inst_24484);
var inst_24489 = cljs.core.chunk_rest(inst_24484);
var inst_24490 = cljs.core.count(inst_24488);
var inst_24470 = inst_24489;
var inst_24471 = inst_24488;
var inst_24472 = inst_24490;
var inst_24473 = (0);
var state_24518__$1 = (function (){var statearr_24538 = state_24518;
(statearr_24538[(8)] = inst_24470);

(statearr_24538[(9)] = inst_24472);

(statearr_24538[(11)] = inst_24471);

(statearr_24538[(12)] = inst_24473);

return statearr_24538;
})();
var statearr_24539_24572 = state_24518__$1;
(statearr_24539_24572[(2)] = null);

(statearr_24539_24572[(1)] = (8));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24519 === (3))){
var inst_24516 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24518__$1,inst_24516);
} else {
if((state_val_24519 === (12))){
var inst_24504 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24540_24573 = state_24518__$1;
(statearr_24540_24573[(2)] = inst_24504);

(statearr_24540_24573[(1)] = (9));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24519 === (2))){
var state_24518__$1 = state_24518;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24518__$1,(4),in$);
} else {
if((state_val_24519 === (23))){
var inst_24512 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24541_24574 = state_24518__$1;
(statearr_24541_24574[(2)] = inst_24512);

(statearr_24541_24574[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24519 === (19))){
var inst_24499 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24542_24575 = state_24518__$1;
(statearr_24542_24575[(2)] = inst_24499);

(statearr_24542_24575[(1)] = (16));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24519 === (11))){
var inst_24484 = (state_24518[(7)]);
var inst_24470 = (state_24518[(8)]);
var inst_24484__$1 = cljs.core.seq(inst_24470);
var state_24518__$1 = (function (){var statearr_24543 = state_24518;
(statearr_24543[(7)] = inst_24484__$1);

return statearr_24543;
})();
if(inst_24484__$1){
var statearr_24544_24576 = state_24518__$1;
(statearr_24544_24576[(1)] = (14));

} else {
var statearr_24545_24577 = state_24518__$1;
(statearr_24545_24577[(1)] = (15));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24519 === (9))){
var inst_24506 = (state_24518[(2)]);
var inst_24507 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_24518__$1 = (function (){var statearr_24546 = state_24518;
(statearr_24546[(15)] = inst_24506);

return statearr_24546;
})();
if(cljs.core.truth_(inst_24507)){
var statearr_24547_24578 = state_24518__$1;
(statearr_24547_24578[(1)] = (21));

} else {
var statearr_24548_24579 = state_24518__$1;
(statearr_24548_24579[(1)] = (22));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24519 === (5))){
var inst_24462 = cljs.core.async.close_BANG_(out);
var state_24518__$1 = state_24518;
var statearr_24549_24580 = state_24518__$1;
(statearr_24549_24580[(2)] = inst_24462);

(statearr_24549_24580[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24519 === (14))){
var inst_24484 = (state_24518[(7)]);
var inst_24486 = cljs.core.chunked_seq_QMARK_(inst_24484);
var state_24518__$1 = state_24518;
if(inst_24486){
var statearr_24550_24581 = state_24518__$1;
(statearr_24550_24581[(1)] = (17));

} else {
var statearr_24551_24582 = state_24518__$1;
(statearr_24551_24582[(1)] = (18));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24519 === (16))){
var inst_24502 = (state_24518[(2)]);
var state_24518__$1 = state_24518;
var statearr_24552_24583 = state_24518__$1;
(statearr_24552_24583[(2)] = inst_24502);

(statearr_24552_24583[(1)] = (12));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24519 === (10))){
var inst_24471 = (state_24518[(11)]);
var inst_24473 = (state_24518[(12)]);
var inst_24478 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_24471,inst_24473);
var state_24518__$1 = state_24518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24518__$1,(13),out,inst_24478);
} else {
if((state_val_24519 === (18))){
var inst_24484 = (state_24518[(7)]);
var inst_24493 = cljs.core.first(inst_24484);
var state_24518__$1 = state_24518;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24518__$1,(20),out,inst_24493);
} else {
if((state_val_24519 === (8))){
var inst_24472 = (state_24518[(9)]);
var inst_24473 = (state_24518[(12)]);
var inst_24475 = (inst_24473 < inst_24472);
var inst_24476 = inst_24475;
var state_24518__$1 = state_24518;
if(cljs.core.truth_(inst_24476)){
var statearr_24553_24584 = state_24518__$1;
(statearr_24553_24584[(1)] = (10));

} else {
var statearr_24554_24585 = state_24518__$1;
(statearr_24554_24585[(1)] = (11));

}

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
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__15159__auto__))
;
return ((function (switch__15081__auto__,c__15159__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__15082__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__15082__auto____0 = (function (){
var statearr_24558 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24558[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__15082__auto__);

(statearr_24558[(1)] = (1));

return statearr_24558;
});
var cljs$core$async$mapcat_STAR__$_state_machine__15082__auto____1 = (function (state_24518){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_24518);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e24559){if((e24559 instanceof Object)){
var ex__15085__auto__ = e24559;
var statearr_24560_24586 = state_24518;
(statearr_24560_24586[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24518);

return cljs.core.constant$keyword$recur;
} else {
throw e24559;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__24587 = state_24518;
state_24518 = G__24587;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__15082__auto__ = function(state_24518){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__15082__auto____1.call(this,state_24518);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__15082__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__15082__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto__))
})();
var state__15161__auto__ = (function (){var statearr_24561 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_24561[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto__);

return statearr_24561;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto__))
);

return c__15159__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(){
var G__24589 = arguments.length;
switch (G__24589) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(){
var G__24592 = arguments.length;
switch (G__24592) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(){
var G__24595 = arguments.length;
switch (G__24595) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15159__auto___24645 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___24645,out){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___24645,out){
return (function (state_24619){
var state_val_24620 = (state_24619[(1)]);
if((state_val_24620 === (7))){
var inst_24614 = (state_24619[(2)]);
var state_24619__$1 = state_24619;
var statearr_24621_24646 = state_24619__$1;
(statearr_24621_24646[(2)] = inst_24614);

(statearr_24621_24646[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24620 === (1))){
var inst_24596 = null;
var state_24619__$1 = (function (){var statearr_24622 = state_24619;
(statearr_24622[(7)] = inst_24596);

return statearr_24622;
})();
var statearr_24623_24647 = state_24619__$1;
(statearr_24623_24647[(2)] = null);

(statearr_24623_24647[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24620 === (4))){
var inst_24599 = (state_24619[(8)]);
var inst_24599__$1 = (state_24619[(2)]);
var inst_24600 = (inst_24599__$1 == null);
var inst_24601 = cljs.core.not(inst_24600);
var state_24619__$1 = (function (){var statearr_24624 = state_24619;
(statearr_24624[(8)] = inst_24599__$1);

return statearr_24624;
})();
if(inst_24601){
var statearr_24625_24648 = state_24619__$1;
(statearr_24625_24648[(1)] = (5));

} else {
var statearr_24626_24649 = state_24619__$1;
(statearr_24626_24649[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24620 === (6))){
var state_24619__$1 = state_24619;
var statearr_24627_24650 = state_24619__$1;
(statearr_24627_24650[(2)] = null);

(statearr_24627_24650[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24620 === (3))){
var inst_24616 = (state_24619[(2)]);
var inst_24617 = cljs.core.async.close_BANG_(out);
var state_24619__$1 = (function (){var statearr_24628 = state_24619;
(statearr_24628[(9)] = inst_24616);

return statearr_24628;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_24619__$1,inst_24617);
} else {
if((state_val_24620 === (2))){
var state_24619__$1 = state_24619;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24619__$1,(4),ch);
} else {
if((state_val_24620 === (11))){
var inst_24599 = (state_24619[(8)]);
var inst_24608 = (state_24619[(2)]);
var inst_24596 = inst_24599;
var state_24619__$1 = (function (){var statearr_24629 = state_24619;
(statearr_24629[(7)] = inst_24596);

(statearr_24629[(10)] = inst_24608);

return statearr_24629;
})();
var statearr_24630_24651 = state_24619__$1;
(statearr_24630_24651[(2)] = null);

(statearr_24630_24651[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24620 === (9))){
var inst_24599 = (state_24619[(8)]);
var state_24619__$1 = state_24619;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24619__$1,(11),out,inst_24599);
} else {
if((state_val_24620 === (5))){
var inst_24596 = (state_24619[(7)]);
var inst_24599 = (state_24619[(8)]);
var inst_24603 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24599,inst_24596);
var state_24619__$1 = state_24619;
if(inst_24603){
var statearr_24632_24652 = state_24619__$1;
(statearr_24632_24652[(1)] = (8));

} else {
var statearr_24633_24653 = state_24619__$1;
(statearr_24633_24653[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24620 === (10))){
var inst_24611 = (state_24619[(2)]);
var state_24619__$1 = state_24619;
var statearr_24634_24654 = state_24619__$1;
(statearr_24634_24654[(2)] = inst_24611);

(statearr_24634_24654[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24620 === (8))){
var inst_24596 = (state_24619[(7)]);
var tmp24631 = inst_24596;
var inst_24596__$1 = tmp24631;
var state_24619__$1 = (function (){var statearr_24635 = state_24619;
(statearr_24635[(7)] = inst_24596__$1);

return statearr_24635;
})();
var statearr_24636_24655 = state_24619__$1;
(statearr_24636_24655[(2)] = null);

(statearr_24636_24655[(1)] = (2));


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
}
}
}
});})(c__15159__auto___24645,out))
;
return ((function (switch__15081__auto__,c__15159__auto___24645,out){
return (function() {
var cljs$core$async$state_machine__15082__auto__ = null;
var cljs$core$async$state_machine__15082__auto____0 = (function (){
var statearr_24640 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_24640[(0)] = cljs$core$async$state_machine__15082__auto__);

(statearr_24640[(1)] = (1));

return statearr_24640;
});
var cljs$core$async$state_machine__15082__auto____1 = (function (state_24619){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_24619);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e24641){if((e24641 instanceof Object)){
var ex__15085__auto__ = e24641;
var statearr_24642_24656 = state_24619;
(statearr_24642_24656[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24619);

return cljs.core.constant$keyword$recur;
} else {
throw e24641;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__24657 = state_24619;
state_24619 = G__24657;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$state_machine__15082__auto__ = function(state_24619){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15082__auto____1.call(this,state_24619);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15082__auto____0;
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15082__auto____1;
return cljs$core$async$state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___24645,out))
})();
var state__15161__auto__ = (function (){var statearr_24643 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_24643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___24645);

return statearr_24643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___24645,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(){
var G__24659 = arguments.length;
switch (G__24659) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15159__auto___24728 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___24728,out){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___24728,out){
return (function (state_24697){
var state_val_24698 = (state_24697[(1)]);
if((state_val_24698 === (7))){
var inst_24693 = (state_24697[(2)]);
var state_24697__$1 = state_24697;
var statearr_24699_24729 = state_24697__$1;
(statearr_24699_24729[(2)] = inst_24693);

(statearr_24699_24729[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24698 === (1))){
var inst_24660 = (new Array(n));
var inst_24661 = inst_24660;
var inst_24662 = (0);
var state_24697__$1 = (function (){var statearr_24700 = state_24697;
(statearr_24700[(7)] = inst_24662);

(statearr_24700[(8)] = inst_24661);

return statearr_24700;
})();
var statearr_24701_24730 = state_24697__$1;
(statearr_24701_24730[(2)] = null);

(statearr_24701_24730[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24698 === (4))){
var inst_24665 = (state_24697[(9)]);
var inst_24665__$1 = (state_24697[(2)]);
var inst_24666 = (inst_24665__$1 == null);
var inst_24667 = cljs.core.not(inst_24666);
var state_24697__$1 = (function (){var statearr_24702 = state_24697;
(statearr_24702[(9)] = inst_24665__$1);

return statearr_24702;
})();
if(inst_24667){
var statearr_24703_24731 = state_24697__$1;
(statearr_24703_24731[(1)] = (5));

} else {
var statearr_24704_24732 = state_24697__$1;
(statearr_24704_24732[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24698 === (15))){
var inst_24687 = (state_24697[(2)]);
var state_24697__$1 = state_24697;
var statearr_24705_24733 = state_24697__$1;
(statearr_24705_24733[(2)] = inst_24687);

(statearr_24705_24733[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24698 === (13))){
var state_24697__$1 = state_24697;
var statearr_24706_24734 = state_24697__$1;
(statearr_24706_24734[(2)] = null);

(statearr_24706_24734[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24698 === (6))){
var inst_24662 = (state_24697[(7)]);
var inst_24683 = (inst_24662 > (0));
var state_24697__$1 = state_24697;
if(cljs.core.truth_(inst_24683)){
var statearr_24707_24735 = state_24697__$1;
(statearr_24707_24735[(1)] = (12));

} else {
var statearr_24708_24736 = state_24697__$1;
(statearr_24708_24736[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24698 === (3))){
var inst_24695 = (state_24697[(2)]);
var state_24697__$1 = state_24697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24697__$1,inst_24695);
} else {
if((state_val_24698 === (12))){
var inst_24661 = (state_24697[(8)]);
var inst_24685 = cljs.core.vec(inst_24661);
var state_24697__$1 = state_24697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24697__$1,(15),out,inst_24685);
} else {
if((state_val_24698 === (2))){
var state_24697__$1 = state_24697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24697__$1,(4),ch);
} else {
if((state_val_24698 === (11))){
var inst_24677 = (state_24697[(2)]);
var inst_24678 = (new Array(n));
var inst_24661 = inst_24678;
var inst_24662 = (0);
var state_24697__$1 = (function (){var statearr_24709 = state_24697;
(statearr_24709[(10)] = inst_24677);

(statearr_24709[(7)] = inst_24662);

(statearr_24709[(8)] = inst_24661);

return statearr_24709;
})();
var statearr_24710_24737 = state_24697__$1;
(statearr_24710_24737[(2)] = null);

(statearr_24710_24737[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24698 === (9))){
var inst_24661 = (state_24697[(8)]);
var inst_24675 = cljs.core.vec(inst_24661);
var state_24697__$1 = state_24697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24697__$1,(11),out,inst_24675);
} else {
if((state_val_24698 === (5))){
var inst_24670 = (state_24697[(11)]);
var inst_24662 = (state_24697[(7)]);
var inst_24661 = (state_24697[(8)]);
var inst_24665 = (state_24697[(9)]);
var inst_24669 = (inst_24661[inst_24662] = inst_24665);
var inst_24670__$1 = (inst_24662 + (1));
var inst_24671 = (inst_24670__$1 < n);
var state_24697__$1 = (function (){var statearr_24711 = state_24697;
(statearr_24711[(11)] = inst_24670__$1);

(statearr_24711[(12)] = inst_24669);

return statearr_24711;
})();
if(cljs.core.truth_(inst_24671)){
var statearr_24712_24738 = state_24697__$1;
(statearr_24712_24738[(1)] = (8));

} else {
var statearr_24713_24739 = state_24697__$1;
(statearr_24713_24739[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24698 === (14))){
var inst_24690 = (state_24697[(2)]);
var inst_24691 = cljs.core.async.close_BANG_(out);
var state_24697__$1 = (function (){var statearr_24715 = state_24697;
(statearr_24715[(13)] = inst_24690);

return statearr_24715;
})();
var statearr_24716_24740 = state_24697__$1;
(statearr_24716_24740[(2)] = inst_24691);

(statearr_24716_24740[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24698 === (10))){
var inst_24681 = (state_24697[(2)]);
var state_24697__$1 = state_24697;
var statearr_24717_24741 = state_24697__$1;
(statearr_24717_24741[(2)] = inst_24681);

(statearr_24717_24741[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24698 === (8))){
var inst_24670 = (state_24697[(11)]);
var inst_24661 = (state_24697[(8)]);
var tmp24714 = inst_24661;
var inst_24661__$1 = tmp24714;
var inst_24662 = inst_24670;
var state_24697__$1 = (function (){var statearr_24718 = state_24697;
(statearr_24718[(7)] = inst_24662);

(statearr_24718[(8)] = inst_24661__$1);

return statearr_24718;
})();
var statearr_24719_24742 = state_24697__$1;
(statearr_24719_24742[(2)] = null);

(statearr_24719_24742[(1)] = (2));


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
}
}
}
}
}
}
}
});})(c__15159__auto___24728,out))
;
return ((function (switch__15081__auto__,c__15159__auto___24728,out){
return (function() {
var cljs$core$async$state_machine__15082__auto__ = null;
var cljs$core$async$state_machine__15082__auto____0 = (function (){
var statearr_24723 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24723[(0)] = cljs$core$async$state_machine__15082__auto__);

(statearr_24723[(1)] = (1));

return statearr_24723;
});
var cljs$core$async$state_machine__15082__auto____1 = (function (state_24697){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_24697);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e24724){if((e24724 instanceof Object)){
var ex__15085__auto__ = e24724;
var statearr_24725_24743 = state_24697;
(statearr_24725_24743[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24697);

return cljs.core.constant$keyword$recur;
} else {
throw e24724;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__24744 = state_24697;
state_24697 = G__24744;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$state_machine__15082__auto__ = function(state_24697){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15082__auto____1.call(this,state_24697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15082__auto____0;
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15082__auto____1;
return cljs$core$async$state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___24728,out))
})();
var state__15161__auto__ = (function (){var statearr_24726 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_24726[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___24728);

return statearr_24726;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___24728,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(){
var G__24746 = arguments.length;
switch (G__24746) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__15159__auto___24820 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___24820,out){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___24820,out){
return (function (state_24788){
var state_val_24789 = (state_24788[(1)]);
if((state_val_24789 === (7))){
var inst_24784 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24790_24821 = state_24788__$1;
(statearr_24790_24821[(2)] = inst_24784);

(statearr_24790_24821[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24789 === (1))){
var inst_24747 = [];
var inst_24748 = inst_24747;
var inst_24749 = cljs.core.constant$keyword$cljs$core$async_SLASH_nothing;
var state_24788__$1 = (function (){var statearr_24791 = state_24788;
(statearr_24791[(7)] = inst_24748);

(statearr_24791[(8)] = inst_24749);

return statearr_24791;
})();
var statearr_24792_24822 = state_24788__$1;
(statearr_24792_24822[(2)] = null);

(statearr_24792_24822[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24789 === (4))){
var inst_24752 = (state_24788[(9)]);
var inst_24752__$1 = (state_24788[(2)]);
var inst_24753 = (inst_24752__$1 == null);
var inst_24754 = cljs.core.not(inst_24753);
var state_24788__$1 = (function (){var statearr_24793 = state_24788;
(statearr_24793[(9)] = inst_24752__$1);

return statearr_24793;
})();
if(inst_24754){
var statearr_24794_24823 = state_24788__$1;
(statearr_24794_24823[(1)] = (5));

} else {
var statearr_24795_24824 = state_24788__$1;
(statearr_24795_24824[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24789 === (15))){
var inst_24778 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24796_24825 = state_24788__$1;
(statearr_24796_24825[(2)] = inst_24778);

(statearr_24796_24825[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24789 === (13))){
var state_24788__$1 = state_24788;
var statearr_24797_24826 = state_24788__$1;
(statearr_24797_24826[(2)] = null);

(statearr_24797_24826[(1)] = (14));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24789 === (6))){
var inst_24748 = (state_24788[(7)]);
var inst_24773 = inst_24748.length;
var inst_24774 = (inst_24773 > (0));
var state_24788__$1 = state_24788;
if(cljs.core.truth_(inst_24774)){
var statearr_24798_24827 = state_24788__$1;
(statearr_24798_24827[(1)] = (12));

} else {
var statearr_24799_24828 = state_24788__$1;
(statearr_24799_24828[(1)] = (13));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24789 === (3))){
var inst_24786 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.return_chan(state_24788__$1,inst_24786);
} else {
if((state_val_24789 === (12))){
var inst_24748 = (state_24788[(7)]);
var inst_24776 = cljs.core.vec(inst_24748);
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24788__$1,(15),out,inst_24776);
} else {
if((state_val_24789 === (2))){
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_24788__$1,(4),ch);
} else {
if((state_val_24789 === (11))){
var inst_24756 = (state_24788[(10)]);
var inst_24752 = (state_24788[(9)]);
var inst_24766 = (state_24788[(2)]);
var inst_24767 = [];
var inst_24768 = inst_24767.push(inst_24752);
var inst_24748 = inst_24767;
var inst_24749 = inst_24756;
var state_24788__$1 = (function (){var statearr_24800 = state_24788;
(statearr_24800[(11)] = inst_24768);

(statearr_24800[(7)] = inst_24748);

(statearr_24800[(12)] = inst_24766);

(statearr_24800[(8)] = inst_24749);

return statearr_24800;
})();
var statearr_24801_24829 = state_24788__$1;
(statearr_24801_24829[(2)] = null);

(statearr_24801_24829[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24789 === (9))){
var inst_24748 = (state_24788[(7)]);
var inst_24764 = cljs.core.vec(inst_24748);
var state_24788__$1 = state_24788;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_24788__$1,(11),out,inst_24764);
} else {
if((state_val_24789 === (5))){
var inst_24756 = (state_24788[(10)]);
var inst_24752 = (state_24788[(9)]);
var inst_24749 = (state_24788[(8)]);
var inst_24756__$1 = (function (){var G__24802 = inst_24752;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24802) : f.call(null,G__24802));
})();
var inst_24757 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_24756__$1,inst_24749);
var inst_24758 = cljs.core.keyword_identical_QMARK_(inst_24749,cljs.core.constant$keyword$cljs$core$async_SLASH_nothing);
var inst_24759 = (inst_24757) || (inst_24758);
var state_24788__$1 = (function (){var statearr_24803 = state_24788;
(statearr_24803[(10)] = inst_24756__$1);

return statearr_24803;
})();
if(cljs.core.truth_(inst_24759)){
var statearr_24804_24830 = state_24788__$1;
(statearr_24804_24830[(1)] = (8));

} else {
var statearr_24805_24831 = state_24788__$1;
(statearr_24805_24831[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_24789 === (14))){
var inst_24781 = (state_24788[(2)]);
var inst_24782 = cljs.core.async.close_BANG_(out);
var state_24788__$1 = (function (){var statearr_24807 = state_24788;
(statearr_24807[(13)] = inst_24781);

return statearr_24807;
})();
var statearr_24808_24832 = state_24788__$1;
(statearr_24808_24832[(2)] = inst_24782);

(statearr_24808_24832[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24789 === (10))){
var inst_24771 = (state_24788[(2)]);
var state_24788__$1 = state_24788;
var statearr_24809_24833 = state_24788__$1;
(statearr_24809_24833[(2)] = inst_24771);

(statearr_24809_24833[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_24789 === (8))){
var inst_24756 = (state_24788[(10)]);
var inst_24748 = (state_24788[(7)]);
var inst_24752 = (state_24788[(9)]);
var inst_24761 = inst_24748.push(inst_24752);
var tmp24806 = inst_24748;
var inst_24748__$1 = tmp24806;
var inst_24749 = inst_24756;
var state_24788__$1 = (function (){var statearr_24810 = state_24788;
(statearr_24810[(7)] = inst_24748__$1);

(statearr_24810[(8)] = inst_24749);

(statearr_24810[(14)] = inst_24761);

return statearr_24810;
})();
var statearr_24811_24834 = state_24788__$1;
(statearr_24811_24834[(2)] = null);

(statearr_24811_24834[(1)] = (2));


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
}
}
}
}
}
}
}
});})(c__15159__auto___24820,out))
;
return ((function (switch__15081__auto__,c__15159__auto___24820,out){
return (function() {
var cljs$core$async$state_machine__15082__auto__ = null;
var cljs$core$async$state_machine__15082__auto____0 = (function (){
var statearr_24815 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_24815[(0)] = cljs$core$async$state_machine__15082__auto__);

(statearr_24815[(1)] = (1));

return statearr_24815;
});
var cljs$core$async$state_machine__15082__auto____1 = (function (state_24788){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_24788);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e24816){if((e24816 instanceof Object)){
var ex__15085__auto__ = e24816;
var statearr_24817_24835 = state_24788;
(statearr_24817_24835[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_24788);

return cljs.core.constant$keyword$recur;
} else {
throw e24816;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__24836 = state_24788;
state_24788 = G__24836;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
cljs$core$async$state_machine__15082__auto__ = function(state_24788){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__15082__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__15082__auto____1.call(this,state_24788);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__15082__auto____0;
cljs$core$async$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__15082__auto____1;
return cljs$core$async$state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___24820,out))
})();
var state__15161__auto__ = (function (){var statearr_24818 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_24818[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___24820);

return statearr_24818;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___24820,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;
