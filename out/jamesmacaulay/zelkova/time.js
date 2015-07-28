// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('jamesmacaulay.zelkova.time');
goog.require('cljs.core');
goog.require('jamesmacaulay.zelkova.impl.time');
goog.require('jamesmacaulay.zelkova.signal');
goog.require('jamesmacaulay.zelkova.impl.signal');
goog.require('cljs.core.async');
jamesmacaulay.zelkova.time.millisecond = (1);
jamesmacaulay.zelkova.time.second = (1000);
jamesmacaulay.zelkova.time.minute = ((60) * jamesmacaulay.zelkova.time.second);
jamesmacaulay.zelkova.time.hour = ((60) * jamesmacaulay.zelkova.time.minute);
jamesmacaulay.zelkova.time.in_milliseconds = (function jamesmacaulay$zelkova$time$in_milliseconds(ms){
return ms;
});
jamesmacaulay.zelkova.time.in_seconds = (function jamesmacaulay$zelkova$time$in_seconds(ms){
return (ms / jamesmacaulay.zelkova.time.second);
});
jamesmacaulay.zelkova.time.in_minutes = (function jamesmacaulay$zelkova$time$in_minutes(ms){
return (ms / jamesmacaulay.zelkova.time.minute);
});
jamesmacaulay.zelkova.time.in_hours = (function jamesmacaulay$zelkova$time$in_hours(ms){
return (ms / jamesmacaulay.zelkova.time.hour);
});
jamesmacaulay.zelkova.time.fps_channel_fn = (function jamesmacaulay$zelkova$time$fps_channel_fn(n){
return (function (graph,opts){
var ms_per_frame = ((1000) / n);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__15159__auto___21055 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___21055,ms_per_frame,out){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___21055,ms_per_frame,out){
return (function (state_21041){
var state_val_21042 = (state_21041[(1)]);
if((state_val_21042 === (1))){
var inst_21022 = jamesmacaulay.zelkova.impl.time.now();
var inst_21023 = inst_21022;
var inst_21024 = (0);
var state_21041__$1 = (function (){var statearr_21043 = state_21041;
(statearr_21043[(7)] = inst_21024);

(statearr_21043[(8)] = inst_21023);

return statearr_21043;
})();
var statearr_21044_21056 = state_21041__$1;
(statearr_21044_21056[(2)] = null);

(statearr_21044_21056[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21042 === (2))){
var inst_21024 = (state_21041[(7)]);
var inst_21026 = (ms_per_frame - inst_21024);
var inst_21027 = cljs.core.async.timeout(inst_21026);
var state_21041__$1 = state_21041;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21041__$1,(4),inst_21027);
} else {
if((state_val_21042 === (3))){
var inst_21039 = (state_21041[(2)]);
var state_21041__$1 = state_21041;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21041__$1,inst_21039);
} else {
if((state_val_21042 === (4))){
var inst_21030 = (state_21041[(9)]);
var inst_21023 = (state_21041[(8)]);
var inst_21029 = (state_21041[(2)]);
var inst_21030__$1 = jamesmacaulay.zelkova.impl.time.now();
var inst_21031 = (inst_21030__$1 - inst_21023);
var state_21041__$1 = (function (){var statearr_21045 = state_21041;
(statearr_21045[(9)] = inst_21030__$1);

(statearr_21045[(10)] = inst_21029);

return statearr_21045;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21041__$1,(5),out,inst_21031);
} else {
if((state_val_21042 === (5))){
var inst_21030 = (state_21041[(9)]);
var inst_21024 = (state_21041[(7)]);
var inst_21023 = (state_21041[(8)]);
var inst_21033 = (state_21041[(2)]);
var inst_21034 = (inst_21030 - inst_21023);
var inst_21035 = (inst_21034 - ms_per_frame);
var inst_21036 = (inst_21024 + inst_21035);
var inst_21023__$1 = inst_21030;
var inst_21024__$1 = inst_21036;
var state_21041__$1 = (function (){var statearr_21046 = state_21041;
(statearr_21046[(11)] = inst_21033);

(statearr_21046[(7)] = inst_21024__$1);

(statearr_21046[(8)] = inst_21023__$1);

return statearr_21046;
})();
var statearr_21047_21057 = state_21041__$1;
(statearr_21047_21057[(2)] = null);

(statearr_21047_21057[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
});})(c__15159__auto___21055,ms_per_frame,out))
;
return ((function (switch__15081__auto__,c__15159__auto___21055,ms_per_frame,out){
return (function() {
var jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__15082__auto__ = null;
var jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__15082__auto____0 = (function (){
var statearr_21051 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21051[(0)] = jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__15082__auto__);

(statearr_21051[(1)] = (1));

return statearr_21051;
});
var jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__15082__auto____1 = (function (state_21041){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_21041);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e21052){if((e21052 instanceof Object)){
var ex__15085__auto__ = e21052;
var statearr_21053_21058 = state_21041;
(statearr_21053_21058[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21041);

return cljs.core.constant$keyword$recur;
} else {
throw e21052;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__21059 = state_21041;
state_21041 = G__21059;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__15082__auto__ = function(state_21041){
switch(arguments.length){
case 0:
return jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__15082__auto____0.call(this);
case 1:
return jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__15082__auto____1.call(this,state_21041);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__15082__auto____0;
jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__15082__auto____1;
return jamesmacaulay$zelkova$time$fps_channel_fn_$_state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___21055,ms_per_frame,out))
})();
var state__15161__auto__ = (function (){var statearr_21054 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_21054[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___21055);

return statearr_21054;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___21055,ms_per_frame,out))
);


return out;
});
});
/**
 * Takes desired number of frames per second (fps). The resulting signal gives
 * a sequence of time deltas as quickly as possible until it reaches the desired
 * FPS. A time delta is the time between the last frame and the current frame.
 */
jamesmacaulay.zelkova.time.fps = (function jamesmacaulay$zelkova$time$fps(n){
return jamesmacaulay.zelkova.signal.input.cljs$core$IFn$_invoke$arity$3((0),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$jamesmacaulay$zelkova$time_SLASH_fps,n], null),jamesmacaulay.zelkova.time.fps_channel_fn(n));
});
jamesmacaulay.zelkova.time.every_channel_fn = (function jamesmacaulay$zelkova$time$every_channel_fn(ms){
return (function (graph,opts){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__15159__auto___21124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___21124,out){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___21124,out){
return (function (state_21110){
var state_val_21111 = (state_21110[(1)]);
if((state_val_21111 === (1))){
var inst_21092 = jamesmacaulay.zelkova.impl.time.now();
var inst_21093 = inst_21092;
var inst_21094 = (0);
var state_21110__$1 = (function (){var statearr_21112 = state_21110;
(statearr_21112[(7)] = inst_21094);

(statearr_21112[(8)] = inst_21093);

return statearr_21112;
})();
var statearr_21113_21125 = state_21110__$1;
(statearr_21113_21125[(2)] = null);

(statearr_21113_21125[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21111 === (2))){
var inst_21094 = (state_21110[(7)]);
var inst_21096 = (ms - inst_21094);
var inst_21097 = cljs.core.async.timeout(inst_21096);
var state_21110__$1 = state_21110;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21110__$1,(4),inst_21097);
} else {
if((state_val_21111 === (3))){
var inst_21108 = (state_21110[(2)]);
var state_21110__$1 = state_21110;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21110__$1,inst_21108);
} else {
if((state_val_21111 === (4))){
var inst_21100 = (state_21110[(9)]);
var inst_21099 = (state_21110[(2)]);
var inst_21100__$1 = jamesmacaulay.zelkova.impl.time.now();
var state_21110__$1 = (function (){var statearr_21114 = state_21110;
(statearr_21114[(10)] = inst_21099);

(statearr_21114[(9)] = inst_21100__$1);

return statearr_21114;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21110__$1,(5),out,inst_21100__$1);
} else {
if((state_val_21111 === (5))){
var inst_21094 = (state_21110[(7)]);
var inst_21100 = (state_21110[(9)]);
var inst_21093 = (state_21110[(8)]);
var inst_21102 = (state_21110[(2)]);
var inst_21103 = (inst_21100 - inst_21093);
var inst_21104 = (inst_21103 - ms);
var inst_21105 = (inst_21094 + inst_21104);
var inst_21093__$1 = inst_21100;
var inst_21094__$1 = inst_21105;
var state_21110__$1 = (function (){var statearr_21115 = state_21110;
(statearr_21115[(11)] = inst_21102);

(statearr_21115[(7)] = inst_21094__$1);

(statearr_21115[(8)] = inst_21093__$1);

return statearr_21115;
})();
var statearr_21116_21126 = state_21110__$1;
(statearr_21116_21126[(2)] = null);

(statearr_21116_21126[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
}
});})(c__15159__auto___21124,out))
;
return ((function (switch__15081__auto__,c__15159__auto___21124,out){
return (function() {
var jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__15082__auto__ = null;
var jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__15082__auto____0 = (function (){
var statearr_21120 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_21120[(0)] = jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__15082__auto__);

(statearr_21120[(1)] = (1));

return statearr_21120;
});
var jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__15082__auto____1 = (function (state_21110){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_21110);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e21121){if((e21121 instanceof Object)){
var ex__15085__auto__ = e21121;
var statearr_21122_21127 = state_21110;
(statearr_21122_21127[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21110);

return cljs.core.constant$keyword$recur;
} else {
throw e21121;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__21128 = state_21110;
state_21110 = G__21128;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__15082__auto__ = function(state_21110){
switch(arguments.length){
case 0:
return jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__15082__auto____0.call(this);
case 1:
return jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__15082__auto____1.call(this,state_21110);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__15082__auto____0;
jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__15082__auto____1;
return jamesmacaulay$zelkova$time$every_channel_fn_$_state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___21124,out))
})();
var state__15161__auto__ = (function (){var statearr_21123 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_21123[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___21124);

return statearr_21123;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___21124,out))
);


return out;
});
});
/**
 * Takes a time interval `ms`. The resulting signal is the current time, updated
 * every `ms` milliseconds.
 */
jamesmacaulay.zelkova.time.every = (function jamesmacaulay$zelkova$time$every(ms){
return jamesmacaulay.zelkova.signal.input.cljs$core$IFn$_invoke$arity$3(jamesmacaulay.zelkova.impl.time.now(),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$jamesmacaulay$zelkova$time_SLASH_every,ms], null),jamesmacaulay.zelkova.time.every_channel_fn(ms));
});
/**
 * Add a timestamp to any signal. Returns a signal of `[timestamp value]`
 * vectors. Timestamps are tied to the origin events of a signal value, so
 * `(timestamp mouse/x)` and `(timestamp mouse/y)` will always have the same
 * timestamp because they rely on the same underlying event (`mouse/position`).
 */
jamesmacaulay.zelkova.time.timestamp = (function jamesmacaulay$zelkova$time$timestamp(sig){
var sig_init = cljs.core.constant$keyword$init_DASH_fn.cljs$core$IFn$_invoke$arity$1(sig);
return jamesmacaulay.zelkova.impl.signal.make_signal(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$init_DASH_fn,((function (sig_init){
return (function (live_graph,opts){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jamesmacaulay.zelkova.impl.time.now(),(function (){var G__21134 = live_graph;
var G__21135 = opts;
return (sig_init.cljs$core$IFn$_invoke$arity$2 ? sig_init.cljs$core$IFn$_invoke$arity$2(G__21134,G__21135) : sig_init.call(null,G__21134,G__21135));
})()], null);
});})(sig_init))
,cljs.core.constant$keyword$sources,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),cljs.core.constant$keyword$msg_DASH_xform,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (sig_init){
return (function (p__21136){
var vec__21137 = p__21136;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21137,(0),null);
var _prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21137,(1),null);
var vec__21138 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21137,(2),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21138,(0),null);
if(cljs.core.truth_(jamesmacaulay.zelkova.impl.signal.fresh_QMARK_(msg))){
return jamesmacaulay.zelkova.impl.signal.fresh(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [jamesmacaulay.zelkova.impl.signal.timestamp(event),jamesmacaulay.zelkova.impl.signal.value(msg)], null));
} else {
return null;
}
});})(sig_init))
),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_))], null));
});
/**
 * Delay a signal by `ms` milliseconds.
 */
jamesmacaulay.zelkova.time.delay = (function jamesmacaulay$zelkova$time$delay(ms,sig){
return jamesmacaulay.zelkova.signal.splice.cljs$core$IFn$_invoke$arity$3((function (from,to){
var waiting = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(((1000) + ms));
var fire_BANG_ = ((function (waiting){
return (function (){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(waiting,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.async.put_BANG_,to));
});})(waiting))
;
var c__15159__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto__,waiting,fire_BANG_){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto__,waiting,fire_BANG_){
return (function (state_21190){
var state_val_21191 = (state_21190[(1)]);
if((state_val_21191 === (1))){
var state_21190__$1 = state_21190;
var statearr_21192_21209 = state_21190__$1;
(statearr_21192_21209[(2)] = null);

(statearr_21192_21209[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21191 === (2))){
var state_21190__$1 = state_21190;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21190__$1,(4),from);
} else {
if((state_val_21191 === (3))){
var inst_21188 = (state_21190[(2)]);
var state_21190__$1 = state_21190;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21190__$1,inst_21188);
} else {
if((state_val_21191 === (4))){
var inst_21176 = (state_21190[(7)]);
var inst_21176__$1 = (state_21190[(2)]);
var inst_21177 = (inst_21176__$1 == null);
var state_21190__$1 = (function (){var statearr_21193 = state_21190;
(statearr_21193[(7)] = inst_21176__$1);

return statearr_21193;
})();
if(cljs.core.truth_(inst_21177)){
var statearr_21194_21210 = state_21190__$1;
(statearr_21194_21210[(1)] = (5));

} else {
var statearr_21195_21211 = state_21190__$1;
(statearr_21195_21211[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21191 === (5))){
var inst_21179 = cljs.core.async.close_BANG_(to);
var state_21190__$1 = state_21190;
var statearr_21196_21212 = state_21190__$1;
(statearr_21196_21212[(2)] = inst_21179);

(statearr_21196_21212[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21191 === (6))){
var inst_21176 = (state_21190[(7)]);
var state_21190__$1 = state_21190;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21190__$1,(8),waiting,inst_21176);
} else {
if((state_val_21191 === (7))){
var inst_21186 = (state_21190[(2)]);
var state_21190__$1 = state_21190;
var statearr_21197_21213 = state_21190__$1;
(statearr_21197_21213[(2)] = inst_21186);

(statearr_21197_21213[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21191 === (8))){
var inst_21182 = (state_21190[(2)]);
var inst_21183 = (function (){var G__21198 = fire_BANG_;
var G__21199 = ms;
return setTimeout(G__21198,G__21199);
})();
var state_21190__$1 = (function (){var statearr_21200 = state_21190;
(statearr_21200[(8)] = inst_21182);

(statearr_21200[(9)] = inst_21183);

return statearr_21200;
})();
var statearr_21201_21214 = state_21190__$1;
(statearr_21201_21214[(2)] = null);

(statearr_21201_21214[(1)] = (2));


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
});})(c__15159__auto__,waiting,fire_BANG_))
;
return ((function (switch__15081__auto__,c__15159__auto__,waiting,fire_BANG_){
return (function() {
var jamesmacaulay$zelkova$time$delay_$_state_machine__15082__auto__ = null;
var jamesmacaulay$zelkova$time$delay_$_state_machine__15082__auto____0 = (function (){
var statearr_21205 = [null,null,null,null,null,null,null,null,null,null];
(statearr_21205[(0)] = jamesmacaulay$zelkova$time$delay_$_state_machine__15082__auto__);

(statearr_21205[(1)] = (1));

return statearr_21205;
});
var jamesmacaulay$zelkova$time$delay_$_state_machine__15082__auto____1 = (function (state_21190){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_21190);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e21206){if((e21206 instanceof Object)){
var ex__15085__auto__ = e21206;
var statearr_21207_21215 = state_21190;
(statearr_21207_21215[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21190);

return cljs.core.constant$keyword$recur;
} else {
throw e21206;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__21216 = state_21190;
state_21190 = G__21216;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
jamesmacaulay$zelkova$time$delay_$_state_machine__15082__auto__ = function(state_21190){
switch(arguments.length){
case 0:
return jamesmacaulay$zelkova$time$delay_$_state_machine__15082__auto____0.call(this);
case 1:
return jamesmacaulay$zelkova$time$delay_$_state_machine__15082__auto____1.call(this,state_21190);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jamesmacaulay$zelkova$time$delay_$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = jamesmacaulay$zelkova$time$delay_$_state_machine__15082__auto____0;
jamesmacaulay$zelkova$time$delay_$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = jamesmacaulay$zelkova$time$delay_$_state_machine__15082__auto____1;
return jamesmacaulay$zelkova$time$delay_$_state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto__,waiting,fire_BANG_))
})();
var state__15161__auto__ = (function (){var statearr_21208 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_21208[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto__);

return statearr_21208;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto__,waiting,fire_BANG_))
);

return c__15159__auto__;
}),cljs.core.constant$keyword$init_DASH_fn.cljs$core$IFn$_invoke$arity$1(sig),sig);
});
/**
 * Returns a signal of boolean values: true when `sig` has updated in the past
 * `ms` milliseconds, false otherwise.
 */
jamesmacaulay.zelkova.time.since = (function jamesmacaulay$zelkova$time$since(ms,sig){
var start = jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constantly((1)),cljs.core.array_seq([sig], 0));
var stop = jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constantly((-1)),cljs.core.array_seq([jamesmacaulay.zelkova.time.delay(ms,sig)], 0));
var delaydiff = jamesmacaulay.zelkova.signal.foldp(cljs.core._PLUS_,(0),jamesmacaulay.zelkova.signal.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([start,stop], 0)));
return jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.complement(cljs.core.zero_QMARK_),cljs.core.array_seq([delaydiff], 0));
});
/**
 * Returns a signal which relays the latest value from `sig` only after `ms`
 * milliseconds have passed since `sig` last updated. Useful when you want to
 * wait until a user stops typing before doing something with the text, for
 * example.
 */
jamesmacaulay.zelkova.time.debounce = (function jamesmacaulay$zelkova$time$debounce(ms,sig){
var timeouts = jamesmacaulay.zelkova.signal.keep_if.cljs$core$IFn$_invoke$arity$3(cljs.core.not,false,jamesmacaulay.zelkova.time.since(ms,sig));
return jamesmacaulay.zelkova.signal.sample_on(timeouts,sig);
});
