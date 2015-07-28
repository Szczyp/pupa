// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('jamesmacaulay.zelkova.signal');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
goog.require('jamesmacaulay.zelkova.impl.signal');
/**
 * Returns an input signal with initial value `init`. The signal propagates values
 * from events which match some `topic`. An asynchronous `value-source` may be provided,
 * which will be used as the default value source for the given event `topic`. `value-source`
 * may take the following forms:
 * 
 * * a function taking a live graph and an options map, and returns a channel of values
 * * a channel of values
 * * a mult of some such value channel
 */
jamesmacaulay.zelkova.signal.input = (function jamesmacaulay$zelkova$signal$input(){
var G__21957 = arguments.length;
switch (G__21957) {
case 1:
return jamesmacaulay.zelkova.signal.input.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jamesmacaulay.zelkova.signal.input.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jamesmacaulay.zelkova.signal.input.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.input.cljs$core$IFn$_invoke$arity$1 = (function (init){
return jamesmacaulay.zelkova.signal.input.cljs$core$IFn$_invoke$arity$2(init,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()));
});

jamesmacaulay.zelkova.signal.input.cljs$core$IFn$_invoke$arity$2 = (function (init,topic){
return jamesmacaulay.zelkova.impl.signal.make_signal(new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$init_DASH_fn,cljs.core.constantly(init),cljs.core.constant$keyword$relayed_DASH_event_DASH_topic,topic], null));
});

jamesmacaulay.zelkova.signal.input.cljs$core$IFn$_invoke$arity$3 = (function (init,topic,value_source){
return jamesmacaulay.zelkova.impl.signal.make_signal(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$init_DASH_fn,cljs.core.constantly(init),cljs.core.constant$keyword$relayed_DASH_event_DASH_topic,topic,cljs.core.constant$keyword$event_DASH_sources,new cljs.core.PersistentArrayMap.fromArray([topic,(function (){var G__21958 = value_source;
var G__21959 = topic;
return (jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.cljs$core$IFn$_invoke$arity$2 ? jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.cljs$core$IFn$_invoke$arity$2(G__21958,G__21959) : jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.call(null,G__21958,G__21959));
})()], true, false)], null));
});

jamesmacaulay.zelkova.signal.input.cljs$lang$maxFixedArity = 3;
/**
 * Takes an `init` value and an optional `topic`, and returns an input signal
 * which satisfies core.async's `WritePort` protocol. This allows you to put
 * values onto the signal as if it were a channel. If the `write-port` is being
 * used in multiple live graphs, each value put onto the `write-port` is
 * sent to all graphs.
 */
jamesmacaulay.zelkova.signal.write_port = (function jamesmacaulay$zelkova$signal$write_port(){
var G__21962 = arguments.length;
switch (G__21962) {
case 1:
return jamesmacaulay.zelkova.signal.write_port.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jamesmacaulay.zelkova.signal.write_port.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.write_port.cljs$core$IFn$_invoke$arity$1 = (function (init){
return jamesmacaulay.zelkova.signal.write_port.cljs$core$IFn$_invoke$arity$2(init,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cljs.core.gensym.cljs$core$IFn$_invoke$arity$0()));
});

jamesmacaulay.zelkova.signal.write_port.cljs$core$IFn$_invoke$arity$2 = (function (init,topic){
var write_port_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
return jamesmacaulay.zelkova.impl.signal.make_signal(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$init_DASH_fn,cljs.core.constantly(init),cljs.core.constant$keyword$relayed_DASH_event_DASH_topic,topic,cljs.core.constant$keyword$event_DASH_sources,new cljs.core.PersistentArrayMap.fromArray([topic,(function (){var G__21963 = write_port_channel;
var G__21964 = topic;
return (jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.cljs$core$IFn$_invoke$arity$2 ? jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.cljs$core$IFn$_invoke$arity$2(G__21963,G__21964) : jamesmacaulay.zelkova.impl.signal.value_source__GT_events_fn.call(null,G__21963,G__21964));
})()], true, false),cljs.core.constant$keyword$write_DASH_port_DASH_channel,write_port_channel], null));
});

jamesmacaulay.zelkova.signal.write_port.cljs$lang$maxFixedArity = 2;
jamesmacaulay.zelkova.signal.take_nothing = (function jamesmacaulay$zelkova$signal$take_nothing(rf){
return (function() {
var G__21968 = null;
var G__21968__0 = (function (){
return (rf.cljs$core$IFn$_invoke$arity$0 ? rf.cljs$core$IFn$_invoke$arity$0() : rf.call(null));
});
var G__21968__1 = (function (result){
var G__21967 = result;
return (rf.cljs$core$IFn$_invoke$arity$1 ? rf.cljs$core$IFn$_invoke$arity$1(G__21967) : rf.call(null,G__21967));
});
var G__21968__2 = (function (result,_input){
return cljs.core.ensure_reduced(result);
});
G__21968 = function(result,_input){
switch(arguments.length){
case 0:
return G__21968__0.call(this);
case 1:
return G__21968__1.call(this,result);
case 2:
return G__21968__2.call(this,result,_input);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
G__21968.cljs$core$IFn$_invoke$arity$0 = G__21968__0;
G__21968.cljs$core$IFn$_invoke$arity$1 = G__21968__1;
G__21968.cljs$core$IFn$_invoke$arity$2 = G__21968__2;
return G__21968;
})()
});
/**
 * Returns a constant signal of the given value.
 */
jamesmacaulay.zelkova.signal.constant = (function jamesmacaulay$zelkova$signal$constant(x){
return jamesmacaulay.zelkova.impl.signal.make_signal(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$init_DASH_fn,cljs.core.constantly(x),cljs.core.constant$keyword$sources,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$events], null),cljs.core.constant$keyword$msg_DASH_xform,jamesmacaulay.zelkova.signal.take_nothing], null));
});
/**
 * Takes a stateless transducer `xform`, a fallback value `base`, and a signal
 * `sig`. Returns a new signal which pipes values from `sig` through `xform`.
 * Because transducers may filter out values, you must provide a `base` which will
 * be used as the derived signal's initial value if the initial value of `sig` ends
 * up being filtered. If multiple values are emitted from the transduction of the
 * initial value of `sig`, then the initial value of the new signal will be the
 * _last_ of those emitted. Stateful transducers will give unexpected results and
 * are not supported.
 */
jamesmacaulay.zelkova.signal.pipeline = (function jamesmacaulay$zelkova$signal$pipeline(xform,base,sig){
var parent_init_fn = cljs.core.constant$keyword$init_DASH_fn.cljs$core$IFn$_invoke$arity$1(sig);
var init_fn = ((function (parent_init_fn){
return (function (live_graph,opts){
var vals = cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(xform,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__21974 = live_graph;
var G__21975 = opts;
return (parent_init_fn.cljs$core$IFn$_invoke$arity$2 ? parent_init_fn.cljs$core$IFn$_invoke$arity$2(G__21974,G__21975) : parent_init_fn.call(null,G__21974,G__21975));
})()], null));
if(cljs.core.seq(vals)){
return cljs.core.last(vals);
} else {
return base;
}
});})(parent_init_fn))
;
var msg_xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (parent_init_fn,init_fn){
return (function (p__21976){
var vec__21977 = p__21976;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21977,(0),null);
var _prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21977,(1),null);
var vec__21978 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21977,(2),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21978,(0),null);
return msg;
});})(parent_init_fn,init_fn))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(jamesmacaulay.zelkova.impl.signal.fresh_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(jamesmacaulay.zelkova.impl.signal.value),cljs.core.array_seq([xform,cljs.core.map.cljs$core$IFn$_invoke$arity$1(jamesmacaulay.zelkova.impl.signal.fresh)], 0));
return jamesmacaulay.zelkova.impl.signal.make_signal(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$init_DASH_fn,init_fn,cljs.core.constant$keyword$sources,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),cljs.core.constant$keyword$msg_DASH_xform,msg_xform], null));
});
/**
 * Takes a mapping function `f` and a sequence of signal `sources`, and returns a
 * signal of values obtained by applying `f` to the values from the source signals.
 */
jamesmacaulay.zelkova.signal.mapseq = (function jamesmacaulay$zelkova$signal$mapseq(f,sources){
if(cljs.core.empty_QMARK_(sources)){
return jamesmacaulay.zelkova.signal.constant((function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})());
} else {
var sources__$1 = cljs.core.vec(sources);
var msg_xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (sources__$1){
return (function (p__21981){
var vec__21982 = p__21981;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21982,(0),null);
var _prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21982,(1),null);
var msgs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21982,(2),null);
return msgs;
});})(sources__$1))
),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (sources__$1){
return (function (msgs){
return cljs.core.some(jamesmacaulay.zelkova.impl.signal.fresh_QMARK_,msgs);
});})(sources__$1))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (sources__$1){
return (function (msgs){
return jamesmacaulay.zelkova.impl.signal.fresh(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(jamesmacaulay.zelkova.impl.signal.value,msgs)));
});})(sources__$1))
));
return jamesmacaulay.zelkova.impl.signal.make_signal(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$init_DASH_fn,((function (sources__$1,msg_xform){
return (function (live_graph,opts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (sources__$1,msg_xform){
return (function (sig){
return cljs.core.constant$keyword$init_DASH_fn.cljs$core$IFn$_invoke$arity$1(sig).call(null,live_graph,opts);
});})(sources__$1,msg_xform))
,sources__$1));
});})(sources__$1,msg_xform))
,cljs.core.constant$keyword$sources,sources__$1,cljs.core.constant$keyword$msg_DASH_xform,msg_xform], null));
}
});
/**
 * Takes a mapping function `f` and any number of signal `sources`, and returns a
 * signal of values obtained by applying `f` to the values from the source signals.
 */
jamesmacaulay.zelkova.signal.map = (function jamesmacaulay$zelkova$signal$map(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic = (function (f,sources){
return jamesmacaulay.zelkova.signal.mapseq(f,sources);
});

jamesmacaulay.zelkova.signal.map.cljs$lang$maxFixedArity = (1);

jamesmacaulay.zelkova.signal.map.cljs$lang$applyTo = (function (seq21983){
var G__21984 = cljs.core.first(seq21983);
var seq21983__$1 = cljs.core.next(seq21983);
return jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic(G__21984,seq21983__$1);
});
/**
 * Takes a map whose values are signals, to be used as a template. Returns a new
 * signal whose values are maps of the same form as `signal-map`, but with the current
 * value of each signal in place of the signal itself.
 */
jamesmacaulay.zelkova.signal.template = (function jamesmacaulay$zelkova$signal$template(signal_map){
var ks = cljs.core.keys(signal_map);
return jamesmacaulay.zelkova.signal.mapseq(((function (ks){
return (function() { 
var G__21985__delegate = function (values){
return cljs.core.zipmap(ks,values);
};
var G__21985 = function (var_args){
var values = null;
if (arguments.length > 0) {
var G__21986__i = 0, G__21986__a = new Array(arguments.length -  0);
while (G__21986__i < G__21986__a.length) {G__21986__a[G__21986__i] = arguments[G__21986__i + 0]; ++G__21986__i;}
  values = new cljs.core.IndexedSeq(G__21986__a,0);
} 
return G__21985__delegate.call(this,values);};
G__21985.cljs$lang$maxFixedArity = 0;
G__21985.cljs$lang$applyTo = (function (arglist__21987){
var values = cljs.core.seq(arglist__21987);
return G__21985__delegate(values);
});
G__21985.cljs$core$IFn$_invoke$arity$variadic = G__21985__delegate;
return G__21985;
})()
;})(ks))
,cljs.core.vals(signal_map));
});
/**
 * Takes a map whose values are signals, to be used as a template. Returns a new
 * signal whose values are maps that include an entry for every signal in
 * `signal-map` with a fresh value. For example, assuming that `signal-map` is:
 * 
 * {:a sig-a
 * :b sig-b
 * :c sig-c}
 * 
 * Then when `sig-a` has a fresh value of "foo", `sig-b`'s value is cached, and
 * `sig-c` has a fresh value of "bar", then the `indexed-updates` signal would
 * emit `{:a "foo" :c "bar"}. When none of the signals have fresh values, no
 * value is emitted from the `indexed-updates` signal. This means that this signal
 * never emits an empty map.
 */
jamesmacaulay.zelkova.signal.indexed_updates = (function jamesmacaulay$zelkova$signal$indexed_updates(signal_map){
var ks = cljs.core.keys(signal_map);
var vs = cljs.core.vals(signal_map);
var init_fn = ((function (ks,vs){
return (function (live_graph,opts){
return cljs.core.zipmap(ks,cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (ks,vs){
return (function (s){
return cljs.core.constant$keyword$init_DASH_fn.cljs$core$IFn$_invoke$arity$1(s).call(null,live_graph,opts);
});})(ks,vs))
,vs));
});})(ks,vs))
;
var kv_xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (ks,vs,init_fn){
return (function (p__21994){
var vec__21995 = p__21994;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21995,(0),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21995,(1),null);
return jamesmacaulay.zelkova.impl.signal.fresh_QMARK_(msg);
});})(ks,vs,init_fn))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (ks,vs,init_fn){
return (function (p__21996){
var vec__21997 = p__21996;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21997,(0),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21997,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,jamesmacaulay.zelkova.impl.signal.value(msg)], null);
});})(ks,vs,init_fn))
));
var msg_xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (ks,vs,init_fn,kv_xform){
return (function (p__21998){
var vec__21999 = p__21998;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21999,(0),null);
var _prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21999,(1),null);
var msgs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21999,(2),null);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,kv_xform,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,ks,msgs));
});})(ks,vs,init_fn,kv_xform))
),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.empty_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(jamesmacaulay.zelkova.impl.signal.fresh));
return jamesmacaulay.zelkova.impl.signal.make_signal(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$init_DASH_fn,init_fn,cljs.core.constant$keyword$sources,vs,cljs.core.constant$keyword$msg_DASH_xform,msg_xform], null));
});
/**
 * Create a past-dependent signal ("fold into the past"). The values of a `foldp`
 * signal are obtained by calling `f` with two arguments: the current value of the
 * `source` signal, and the previous value of the new `foldp` signal (acting as the
 * "accumulator"). `init` provides the initial value of the new signal, and
 * therefore acts as the seed accumulator.
 */
jamesmacaulay.zelkova.signal.foldp = (function jamesmacaulay$zelkova$signal$foldp(f,base,source){
return jamesmacaulay.zelkova.impl.signal.make_signal(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$init_DASH_fn,cljs.core.constantly(base),cljs.core.constant$keyword$sources,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.constant$keyword$msg_DASH_xform,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__22008){
var vec__22009 = p__22008;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22009,(0),null);
var _prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22009,(1),null);
var vec__22010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22009,(2),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22010,(0),null);
return jamesmacaulay.zelkova.impl.signal.fresh_QMARK_(msg);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__22011){
var vec__22012 = p__22011;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22012,(0),null);
var prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22012,(1),null);
var vec__22013 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22012,(2),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22013,(0),null);
return jamesmacaulay.zelkova.impl.signal.fresh((function (){var G__22014 = jamesmacaulay.zelkova.impl.signal.value(msg);
var G__22015 = prev;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22014,G__22015) : f.call(null,G__22014,G__22015));
})());
})))], null));
});
/**
 * Returns a signal which relays values of `sig`, but drops repeated equal values.
 */
jamesmacaulay.zelkova.signal.drop_repeats = (function jamesmacaulay$zelkova$signal$drop_repeats(sig){
return jamesmacaulay.zelkova.impl.signal.make_signal(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$init_DASH_fn,cljs.core.constant$keyword$init_DASH_fn.cljs$core$IFn$_invoke$arity$1(sig),cljs.core.constant$keyword$sources,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),cljs.core.constant$keyword$msg_DASH_xform,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__22022){
var vec__22023 = p__22022;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22023,(0),null);
var prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22023,(1),null);
var vec__22024 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22023,(2),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22024,(0),null);
var and__4198__auto__ = jamesmacaulay.zelkova.impl.signal.fresh_QMARK_(msg);
if(cljs.core.truth_(and__4198__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev,jamesmacaulay.zelkova.impl.signal.value(msg));
} else {
return and__4198__auto__;
}
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__22025){
var vec__22026 = p__22025;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22026,(0),null);
var _prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22026,(1),null);
var vec__22027 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22026,(2),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22027,(0),null);
return msg;
})))], null));
});
/**
 * Create a past-dependent signal like `foldp`, with two differences:
 * * calls `f` with the arguments reversed to align with Clojure: the first
 * argument is the accumulator, the second is the current value of `source`.
 * * if `init` is omitted, the initial value of the new signal will be obtained by
 * calling `f` with no arguments.
 */
jamesmacaulay.zelkova.signal.reductions = (function jamesmacaulay$zelkova$signal$reductions(){
var G__22029 = arguments.length;
switch (G__22029) {
case 2:
return jamesmacaulay.zelkova.signal.reductions.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jamesmacaulay.zelkova.signal.reductions.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.reductions.cljs$core$IFn$_invoke$arity$2 = (function (f,source){
return jamesmacaulay.zelkova.signal.reductions.cljs$core$IFn$_invoke$arity$3(f,(function (){return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
})(),source);
});

jamesmacaulay.zelkova.signal.reductions.cljs$core$IFn$_invoke$arity$3 = (function (f,init,source){
return jamesmacaulay.zelkova.signal.foldp((function (val,prev){
var G__22030 = prev;
var G__22031 = val;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__22030,G__22031) : f.call(null,G__22030,G__22031));
}),init,source);
});

jamesmacaulay.zelkova.signal.reductions.cljs$lang$maxFixedArity = 3;
/**
 * Takes an initial value and a map whose keys are signals and whose values are
 * reducing functions. Returns a past-dependent signal like `reductions`, except
 * each signal has its own reducing function to use when that signal updates. If
 * more than one source signal updates from the same input event, then each
 * applicable reducing function is called to transform the state value in the
 * same order as they are defined in `signal-handlers-map`.
 */
jamesmacaulay.zelkova.signal.select_step = (function jamesmacaulay$zelkova$signal$select_step(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return jamesmacaulay.zelkova.signal.select_step.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

jamesmacaulay.zelkova.signal.select_step.cljs$core$IFn$_invoke$arity$variadic = (function (init,signals_and_handlers){
var vec__22035 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.conj),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY], null),cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),signals_and_handlers));
var signals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22035,(0),null);
var handlers = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22035,(1),null);
var signal__GT_handler = cljs.core.zipmap(signals,handlers);
var updates_signal = jamesmacaulay.zelkova.signal.indexed_updates(cljs.core.zipmap(signals,signals));
var f = ((function (vec__22035,signals,handlers,signal__GT_handler,updates_signal){
return (function (prev,updates_by_signal){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (vec__22035,signals,handlers,signal__GT_handler,updates_signal){
return (function (acc,p__22036){
var vec__22037 = p__22036;
var sig = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22037,(0),null);
var val = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22037,(1),null);
return (function (){var G__22038 = sig;
return (signal__GT_handler.cljs$core$IFn$_invoke$arity$1 ? signal__GT_handler.cljs$core$IFn$_invoke$arity$1(G__22038) : signal__GT_handler.call(null,G__22038));
})().call(null,acc,val);
});})(vec__22035,signals,handlers,signal__GT_handler,updates_signal))
,prev,updates_by_signal);
});})(vec__22035,signals,handlers,signal__GT_handler,updates_signal))
;
return jamesmacaulay.zelkova.signal.reductions.cljs$core$IFn$_invoke$arity$3(f,init,updates_signal);
});

jamesmacaulay.zelkova.signal.select_step.cljs$lang$maxFixedArity = (1);

jamesmacaulay.zelkova.signal.select_step.cljs$lang$applyTo = (function (seq22033){
var G__22034 = cljs.core.first(seq22033);
var seq22033__$1 = cljs.core.next(seq22033);
return jamesmacaulay.zelkova.signal.select_step.cljs$core$IFn$_invoke$arity$variadic(G__22034,seq22033__$1);
});
/**
 * Returns an "asynchronous" version of `source`, splitting off a new subgraph which
 * does not maintain consistent event ordering relative to the main graph. In exchange,
 * signals which depend on an `async` signal don't have to wait for the `source` to finish
 * computing new values. This function is mainly useful in multithreaded environments when
 * you don't want a slow computation to block the whole graph.
 */
jamesmacaulay.zelkova.signal.async = (function jamesmacaulay$zelkova$signal$async(source){
var topic = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$jamesmacaulay$zelkova$signal_SLASH_async,source], null);
var msgs__GT_events = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.cat,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(jamesmacaulay.zelkova.impl.signal.fresh_QMARK_),cljs.core.map.cljs$core$IFn$_invoke$arity$1(((function (topic){
return (function (msg){
return jamesmacaulay.zelkova.impl.signal.make_event(topic,jamesmacaulay.zelkova.impl.signal.value(msg));
});})(topic))
));
var events_channel_fn = ((function (topic,msgs__GT_events){
return (function (live_graph,_){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(jamesmacaulay.zelkova.impl.signal.signal_mult(live_graph,source),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),msgs__GT_events));
});})(topic,msgs__GT_events))
;
return jamesmacaulay.zelkova.impl.signal.make_signal(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$init_DASH_fn,cljs.core.constant$keyword$init_DASH_fn.cljs$core$IFn$_invoke$arity$1(source),cljs.core.constant$keyword$deps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.constant$keyword$relayed_DASH_event_DASH_topic,topic,cljs.core.constant$keyword$event_DASH_sources,new cljs.core.PersistentArrayMap.fromArray([topic,events_channel_fn], true, false)], null));
});
/**
 * Splice into the signal graph on the level of core.async channels. Takes a
 * `setup!` function which is called when the `source` signal gets wired up into
 * a live graph. The `setup!` function is passed two arguments: a `from` channel
 * and a `to` channel, in that order. The function is expected to be a consumer
 * of the `from` channel and a producer on the `to` channel, and should close the
 * `to` channel when the `from` channel is closed. There are no requirements for
 * how many values should be put on the `to` channel or when they should be sent.
 * `splice` returns a signal with an initial returned from `init-fn`. `init-fn`
 * takes two functions, a `live-graph` and an `opts` map. If no `init-fn` is
 * provided, then the initial value of `source` is used. The returned signal
 * asynchronously produces whichever values are put on the `to` channel in the
 * `setup!` function.
 */
jamesmacaulay.zelkova.signal.splice = (function jamesmacaulay$zelkova$signal$splice(){
var G__22040 = arguments.length;
switch (G__22040) {
case 2:
return jamesmacaulay.zelkova.signal.splice.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jamesmacaulay.zelkova.signal.splice.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.splice.cljs$core$IFn$_invoke$arity$2 = (function (setup_BANG_,source){
return jamesmacaulay.zelkova.signal.splice.cljs$core$IFn$_invoke$arity$3(setup_BANG_,cljs.core.constant$keyword$init_DASH_fn.cljs$core$IFn$_invoke$arity$1(source),source);
});

jamesmacaulay.zelkova.signal.splice.cljs$core$IFn$_invoke$arity$3 = (function (setup_BANG_,init_fn,source){
var topic = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$jamesmacaulay$zelkova$signal_SLASH_splice,init_fn,setup_BANG_,source], null);
var events_channel_fn = ((function (topic){
return (function (live_graph,_){
var from = cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(jamesmacaulay.zelkova.impl.signal.signal_mult(live_graph,source),cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),jamesmacaulay.zelkova.impl.signal.fresh_values));
var to = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((1),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(jamesmacaulay.zelkova.impl.signal.make_event,topic)));
var G__22041_22044 = from;
var G__22042_22045 = to;
(setup_BANG_.cljs$core$IFn$_invoke$arity$2 ? setup_BANG_.cljs$core$IFn$_invoke$arity$2(G__22041_22044,G__22042_22045) : setup_BANG_.call(null,G__22041_22044,G__22042_22045));

return to;
});})(topic))
;
return jamesmacaulay.zelkova.impl.signal.make_signal(new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$init_DASH_fn,init_fn,cljs.core.constant$keyword$deps,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [source], null),cljs.core.constant$keyword$relayed_DASH_event_DASH_topic,topic,cljs.core.constant$keyword$event_DASH_sources,new cljs.core.PersistentArrayMap.fromArray([topic,events_channel_fn], true, false)], null));
});

jamesmacaulay.zelkova.signal.splice.cljs$lang$maxFixedArity = 3;
/**
 * Takes a sequence of signals `sigs`, and returns a new signal which relays fresh
 * values from all of the source signals. When more than one source has fresh values
 * at the same time, the first (leftmost) signal in `sigs` will take precedence and
 * the other values will be discarded. The initial value of the returned signal is
 * equal to the initial value of the first source signal.
 */
jamesmacaulay.zelkova.signal.mergeseq = (function jamesmacaulay$zelkova$signal$mergeseq(sigs){
return jamesmacaulay.zelkova.impl.signal.make_signal(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$init_DASH_fn,cljs.core.constant$keyword$init_DASH_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.first(sigs)),cljs.core.constant$keyword$sources,sigs,cljs.core.constant$keyword$msg_DASH_xform,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__22048){
var vec__22049 = p__22048;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22049,(0),null);
var _prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22049,(1),null);
var msgs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22049,(2),null);
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(jamesmacaulay.zelkova.impl.signal.fresh_QMARK_,msgs));
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_))], null));
});
/**
 * Takes any number of source signals `sigs`, and returns a new signal which relays
 * fresh values from all of the source signals. When more than one source has fresh values
 * at the same time, the first (leftmost) signal will take precedence and the other values
 * will be discarded. The initial value of the returned signal is equal to the initial
 * value of the first source signal.
 */
jamesmacaulay.zelkova.signal.merge = (function jamesmacaulay$zelkova$signal$merge(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return jamesmacaulay.zelkova.signal.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});

jamesmacaulay.zelkova.signal.merge.cljs$core$IFn$_invoke$arity$variadic = (function (sigs){
return jamesmacaulay.zelkova.signal.mergeseq(sigs);
});

jamesmacaulay.zelkova.signal.merge.cljs$lang$maxFixedArity = (0);

jamesmacaulay.zelkova.signal.merge.cljs$lang$applyTo = (function (seq22050){
return jamesmacaulay.zelkova.signal.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq22050));
});
/**
 * Combines a sequence of signals into a signal of vectors. Equivalent to
 * `(signal/map vector sig1, sig2, ...)`
 */
jamesmacaulay.zelkova.signal.combine = (function jamesmacaulay$zelkova$signal$combine(sigs){
return jamesmacaulay.zelkova.signal.mapseq(cljs.core.vector,sigs);
});
/**
 * Sample the current value of `value-sig` every time `sampler-sig` updates with a
 * fresh value. For example, `(sample-on mouse/clicks mouse/position)` returns a signal
 * of click positions.
 */
jamesmacaulay.zelkova.signal.sample_on = (function jamesmacaulay$zelkova$signal$sample_on(sampler_sig,value_sig){
return jamesmacaulay.zelkova.impl.signal.make_signal(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$init_DASH_fn,cljs.core.constant$keyword$init_DASH_fn.cljs$core$IFn$_invoke$arity$1(value_sig),cljs.core.constant$keyword$sources,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [sampler_sig,value_sig], null),cljs.core.constant$keyword$msg_DASH_xform,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__22054){
var vec__22055 = p__22054;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22055,(0),null);
var _prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22055,(1),null);
var vec__22056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22055,(2),null);
var sampler_msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22056,(0),null);
var value_msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22056,(1),null);
if(cljs.core.truth_(jamesmacaulay.zelkova.impl.signal.fresh_QMARK_(sampler_msg))){
return jamesmacaulay.zelkova.impl.signal.fresh(jamesmacaulay.zelkova.impl.signal.value(value_msg));
} else {
return null;
}
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_))], null));
});
/**
 * Returns a signal whose values are the number of fresh values emitted so far from
 * `sig`. Repeated equal values will be counted so long as they are fresh, so if you
 * don't want to count repeats then you need to `(count (drop-repeats sig))` instead.
 */
jamesmacaulay.zelkova.signal.count = (function jamesmacaulay$zelkova$signal$count(sig){
return jamesmacaulay.zelkova.signal.foldp((function (p1__22058_SHARP_,p2__22057_SHARP_){
return (p2__22057_SHARP_ + (1));
}),(0),sig);
});
/**
 * Like `count`, but only increments the counter if the fresh value emitted from `sig`
 * satisfies the predicate funtion `pred`. For example, `(count-if odd? numbers)` returns
 * a signal of how many times the `numbers` signal emitted an odd number.
 */
jamesmacaulay.zelkova.signal.count_if = (function jamesmacaulay$zelkova$signal$count_if(pred,sig){
return jamesmacaulay.zelkova.signal.foldp((function (v,c){
if(cljs.core.truth_((function (){var G__22060 = v;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__22060) : pred.call(null,G__22060));
})())){
return (c + (1));
} else {
return c;
}
}),(0),sig);
});
jamesmacaulay.zelkova.signal.keep_if_msg_xform = (function jamesmacaulay$zelkova$signal$keep_if_msg_xform(pred){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__22065){
var vec__22066 = p__22065;
var _event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22066,(0),null);
var _prev = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22066,(1),null);
var vec__22067 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22066,(2),null);
var msg = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__22067,(0),null);
if(cljs.core.truth_((function (){var and__4198__auto__ = jamesmacaulay.zelkova.impl.signal.fresh_QMARK_(msg);
if(cljs.core.truth_(and__4198__auto__)){
var G__22068 = jamesmacaulay.zelkova.impl.signal.value(msg);
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__22068) : pred.call(null,G__22068));
} else {
return and__4198__auto__;
}
})())){
return jamesmacaulay.zelkova.impl.signal.fresh(jamesmacaulay.zelkova.impl.signal.value(msg));
} else {
return null;
}
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_));
});
/**
 * Returns a signal which relays values from `sig`, but discards any which don't match
 * the given predicate function `pred`. If a `base` value is provided, it will be the
 * initial value of the returned signal if the initial value of `sig` does not match the
 * predicate. If no `base` is provided then the returned signal will always have the
 * same initial value as `sig`, even if it does not match the predicate.
 */
jamesmacaulay.zelkova.signal.keep_if = (function jamesmacaulay$zelkova$signal$keep_if(){
var G__22070 = arguments.length;
switch (G__22070) {
case 2:
return jamesmacaulay.zelkova.signal.keep_if.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jamesmacaulay.zelkova.signal.keep_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.keep_if.cljs$core$IFn$_invoke$arity$2 = (function (pred,sig){
return jamesmacaulay.zelkova.impl.signal.make_signal(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$init_DASH_fn,cljs.core.constant$keyword$init_DASH_fn.cljs$core$IFn$_invoke$arity$1(sig),cljs.core.constant$keyword$sources,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),cljs.core.constant$keyword$msg_DASH_xform,jamesmacaulay.zelkova.signal.keep_if_msg_xform(pred)], null));
});

jamesmacaulay.zelkova.signal.keep_if.cljs$core$IFn$_invoke$arity$3 = (function (pred,base,sig){
return jamesmacaulay.zelkova.impl.signal.make_signal(new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$init_DASH_fn,(function (){var init_fn = cljs.core.constant$keyword$init_DASH_fn.cljs$core$IFn$_invoke$arity$1(sig);
return ((function (init_fn){
return (function (live_graph,opts){
var init = (function (){var G__22071 = live_graph;
var G__22072 = opts;
return (init_fn.cljs$core$IFn$_invoke$arity$2 ? init_fn.cljs$core$IFn$_invoke$arity$2(G__22071,G__22072) : init_fn.call(null,G__22071,G__22072));
})();
if(cljs.core.truth_((function (){var G__22073 = init;
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(G__22073) : pred.call(null,G__22073));
})())){
return init;
} else {
return base;
}
});
;})(init_fn))
})(),cljs.core.constant$keyword$sources,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [sig], null),cljs.core.constant$keyword$msg_DASH_xform,jamesmacaulay.zelkova.signal.keep_if_msg_xform(pred)], null));
});

jamesmacaulay.zelkova.signal.keep_if.cljs$lang$maxFixedArity = 3;
/**
 * Like `keep-if`, but drops values which match the predicate.
 */
jamesmacaulay.zelkova.signal.drop_if = (function jamesmacaulay$zelkova$signal$drop_if(){
var G__22076 = arguments.length;
switch (G__22076) {
case 2:
return jamesmacaulay.zelkova.signal.drop_if.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jamesmacaulay.zelkova.signal.drop_if.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.drop_if.cljs$core$IFn$_invoke$arity$2 = (function (pred,sig){
return jamesmacaulay.zelkova.signal.keep_if.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(pred),sig);
});

jamesmacaulay.zelkova.signal.drop_if.cljs$core$IFn$_invoke$arity$3 = (function (pred,base,sig){
return jamesmacaulay.zelkova.signal.keep_if.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(pred),base,sig);
});

jamesmacaulay.zelkova.signal.drop_if.cljs$lang$maxFixedArity = 3;
/**
 * Returns a new signal which relays values from `value-sig`, but only when the current
 * value of `switch-sig` is truthy.
 */
jamesmacaulay.zelkova.signal.keep_when = (function jamesmacaulay$zelkova$signal$keep_when(){
var G__22079 = arguments.length;
switch (G__22079) {
case 2:
return jamesmacaulay.zelkova.signal.keep_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jamesmacaulay.zelkova.signal.keep_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.keep_when.cljs$core$IFn$_invoke$arity$2 = (function (switch_sig,value_sig){
return jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.second,cljs.core.array_seq([jamesmacaulay.zelkova.signal.keep_if.cljs$core$IFn$_invoke$arity$2(cljs.core.first,jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([jamesmacaulay.zelkova.signal.sample_on(value_sig,switch_sig),value_sig], 0)))], 0));
});

jamesmacaulay.zelkova.signal.keep_when.cljs$core$IFn$_invoke$arity$3 = (function (switch_sig,base,value_sig){
return jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.second,cljs.core.array_seq([jamesmacaulay.zelkova.signal.keep_if.cljs$core$IFn$_invoke$arity$3(cljs.core.first,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [false,base], null),jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.vector,cljs.core.array_seq([jamesmacaulay.zelkova.signal.sample_on(value_sig,switch_sig),value_sig], 0)))], 0));
});

jamesmacaulay.zelkova.signal.keep_when.cljs$lang$maxFixedArity = 3;
/**
 * Like `keep-when`, but only relays values when `switch-sig` is falsy.
 */
jamesmacaulay.zelkova.signal.drop_when = (function jamesmacaulay$zelkova$signal$drop_when(){
var G__22082 = arguments.length;
switch (G__22082) {
case 2:
return jamesmacaulay.zelkova.signal.drop_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jamesmacaulay.zelkova.signal.drop_when.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.drop_when.cljs$core$IFn$_invoke$arity$2 = (function (switch_sig,value_sig){
return jamesmacaulay.zelkova.signal.keep_when.cljs$core$IFn$_invoke$arity$2(jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.not,cljs.core.array_seq([switch_sig], 0)),value_sig);
});

jamesmacaulay.zelkova.signal.drop_when.cljs$core$IFn$_invoke$arity$3 = (function (switch_sig,base,value_sig){
return jamesmacaulay.zelkova.signal.keep_when.cljs$core$IFn$_invoke$arity$3(jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.not,cljs.core.array_seq([switch_sig], 0)),base,value_sig);
});

jamesmacaulay.zelkova.signal.drop_when.cljs$lang$maxFixedArity = 3;
/**
 * Returns a transformation of `value-sig` whose entire graph of signal
 * dependencies—aside from input nodes—is skipped unless `switch-sig`'s state
 * is truthy. This is accomplished by walking `value-sig`'s graph and wrapping
 * its input signals with `keep-when`. The intial value of a signal returned
 * from `activate-when` is always equal to the initial value of `value-sig`.
 */
jamesmacaulay.zelkova.signal.activate_when = (function jamesmacaulay$zelkova$signal$activate_when(switch_sig,value_sig){
var sorted_signals = jamesmacaulay.zelkova.impl.signal.topsort(value_sig);
var reducer = ((function (sorted_signals){
return (function (m,sig){
var sig_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(sig,cljs.core.constant$keyword$sources,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,m)),cljs.core.constant$keyword$deps,((function (sorted_signals){
return (function (p1__22084_SHARP_){
if((p1__22084_SHARP_ == null)){
return p1__22084_SHARP_;
} else {
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(m,p1__22084_SHARP_);
}
});})(sorted_signals))
);
var sig_SINGLEQUOTE__SINGLEQUOTE_ = (cljs.core.truth_(jamesmacaulay.zelkova.impl.signal.input_QMARK_(sig_SINGLEQUOTE_))?jamesmacaulay.zelkova.signal.keep_when.cljs$core$IFn$_invoke$arity$2(switch_sig,sig_SINGLEQUOTE_):sig_SINGLEQUOTE_);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,sig,sig_SINGLEQUOTE__SINGLEQUOTE_);
});})(sorted_signals))
;
var signal_mapping = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reducer,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$events,cljs.core.constant$keyword$events], null),sorted_signals);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(signal_mapping,value_sig);
});
/**
 * A little convenience helper which logs signal values with `pr` before propagating them unchanged.
 */
jamesmacaulay.zelkova.signal.log = (function jamesmacaulay$zelkova$signal$log(sig){
return jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic((function (x){
cljs.core.pr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));

return x;
}),cljs.core.array_seq([sig], 0));
});
/**
 * Take an inert signal and produce a live, running graph.
 */
jamesmacaulay.zelkova.signal.spawn = (function jamesmacaulay$zelkova$signal$spawn(){
var G__22086 = arguments.length;
switch (G__22086) {
case 1:
return jamesmacaulay.zelkova.signal.spawn.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jamesmacaulay.zelkova.signal.spawn.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.spawn.cljs$core$IFn$_invoke$arity$1 = (function (s){
return jamesmacaulay.zelkova.impl.signal.spawn_STAR_(s,null);
});

jamesmacaulay.zelkova.signal.spawn.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
return jamesmacaulay.zelkova.impl.signal.spawn_STAR_(s,opts);
});

jamesmacaulay.zelkova.signal.spawn.cljs$lang$maxFixedArity = 2;
/**
 * Pipes fresh values from a live graph into an atom. If `x` is a signal, it is `spawn`ed
 * as a live graph first. If no atom is provided, then a new atom is created which takes its
 * initial value from that of the given signal or graph. If an existing atom is provided along
 * with a sequence of keys `ks`, then fresh values will be inserted into the atom's value using
 * `swap!` with `assoc-in`. If `ks` is not present, then the whole atom value is replaced with
 * `reset!`.
 */
jamesmacaulay.zelkova.signal.pipe_to_atom = (function jamesmacaulay$zelkova$signal$pipe_to_atom(){
var G__22089 = arguments.length;
switch (G__22089) {
case 1:
return jamesmacaulay.zelkova.signal.pipe_to_atom.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return jamesmacaulay.zelkova.signal.pipe_to_atom.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return jamesmacaulay.zelkova.signal.pipe_to_atom.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

jamesmacaulay.zelkova.signal.pipe_to_atom.cljs$core$IFn$_invoke$arity$1 = (function (x){
var live_graph = jamesmacaulay.zelkova.signal.spawn.cljs$core$IFn$_invoke$arity$1(x);
return jamesmacaulay.zelkova.signal.pipe_to_atom.cljs$core$IFn$_invoke$arity$2(live_graph,(function (){var G__22090 = jamesmacaulay.zelkova.impl.signal.init(live_graph);
var G__22091 = cljs.core.constant$keyword$meta;
var G__22092 = new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$jamesmacaulay$zelkova$signal_SLASH_source,live_graph], null);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$3 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$3(G__22090,G__22091,G__22092) : cljs.core.atom.call(null,G__22090,G__22091,G__22092));
})());
});

jamesmacaulay.zelkova.signal.pipe_to_atom.cljs$core$IFn$_invoke$arity$2 = (function (x,atm){
return jamesmacaulay.zelkova.impl.signal.pipe_to_atom_STAR_(x,atm,null);
});

jamesmacaulay.zelkova.signal.pipe_to_atom.cljs$core$IFn$_invoke$arity$3 = (function (x,atm,ks){
return jamesmacaulay.zelkova.impl.signal.pipe_to_atom_STAR_(x,atm,ks);
});

jamesmacaulay.zelkova.signal.pipe_to_atom.cljs$lang$maxFixedArity = 3;
/**
 * Takes a signal `s` and returns a channel of fresh values, passing any extra `args` to
 * the `chan` constructor.
 */
jamesmacaulay.zelkova.signal.to_chan = (function jamesmacaulay$zelkova$signal$to_chan(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return jamesmacaulay.zelkova.signal.to_chan.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

jamesmacaulay.zelkova.signal.to_chan.cljs$core$IFn$_invoke$arity$variadic = (function (s,args){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(jamesmacaulay.zelkova.signal.spawn.cljs$core$IFn$_invoke$arity$1(s),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.async.chan,args));
});

jamesmacaulay.zelkova.signal.to_chan.cljs$lang$maxFixedArity = (1);

jamesmacaulay.zelkova.signal.to_chan.cljs$lang$applyTo = (function (seq22094){
var G__22095 = cljs.core.first(seq22094);
var seq22094__$1 = cljs.core.next(seq22094);
return jamesmacaulay.zelkova.signal.to_chan.cljs$core$IFn$_invoke$arity$variadic(G__22095,seq22094__$1);
});
