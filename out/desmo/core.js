// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('desmo.core');
goog.require('cljs.core');
goog.require('ossicone.core');
goog.require('jamesmacaulay.zelkova.signal');
goog.require('plumbing.core');
goog.require('desmo.dom');
goog.require('jamesmacaulay.zelkova.time');
goog.require('cljs.core.async');
goog.require('cognitect.transit');
goog.require('ossicone.effect');
desmo.core.get_in_path = (function desmo$core$get_in_path(s,p){
var temp__4423__auto__ = cljs.core.first(p);
if(cljs.core.truth_(temp__4423__auto__)){
var k = temp__4423__auto__;
if(cljs.core.vector_QMARK_(k)){
var vec__20256 = k;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20256,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20256,(1),null);
return desmo$core$get_in_path(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (vec__20256,k__$1,v,k,temp__4423__auto__){
return (function (p1__20250_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__20250_SHARP_,k__$1));
});})(vec__20256,k__$1,v,k,temp__4423__auto__))
,s)),cljs.core.rest(p));
} else {
return desmo$core$get_in_path(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,k),cljs.core.rest(p));
}
} else {
return s;
}
});
desmo.core.update_in_path = (function desmo$core$update_in_path(s,p,f){
var temp__4423__auto__ = cljs.core.first(p);
if(cljs.core.truth_(temp__4423__auto__)){
var k = temp__4423__auto__;
if(cljs.core.vector_QMARK_(k)){
var vec__20266 = k;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20266,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20266,(1),null);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(((function (vec__20266,k__$1,v,k,temp__4423__auto__){
return (function (p1__20257_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__20257_SHARP_,k__$1))){
return desmo$core$update_in_path(p1__20257_SHARP_,cljs.core.rest(p),f);
} else {
return p1__20257_SHARP_;
}
});})(vec__20266,k__$1,v,k,temp__4423__auto__))
,s);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,k,desmo$core$update_in_path(cljs.core.get.cljs$core$IFn$_invoke$arity$2(s,k),cljs.core.rest(p),f));
}
} else {
var G__20267 = s;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20267) : f.call(null,G__20267));
}
});
desmo.core.state = (function (){var G__20268 = ossicone.effect.env;
var G__20269 = ((function (G__20268){
return (function (p__20270){
var map__20271 = p__20270;
var map__20271__$1 = ((cljs.core.seq_QMARK_(map__20271))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20271):map__20271);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20271__$1,cljs.core.constant$keyword$state);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20271__$1,cljs.core.constant$keyword$path);
return ossicone.core.mdo.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__20272 = desmo.core.get_in_path(state,path);
return (ossicone.core.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.core.return$.cljs$core$IFn$_invoke$arity$1(G__20272) : ossicone.core.return$.call(null,G__20272));
})()], 0));
});})(G__20268))
;
return (ossicone.core.bind.cljs$core$IFn$_invoke$arity$2 ? ossicone.core.bind.cljs$core$IFn$_invoke$arity$2(G__20268,G__20269) : ossicone.core.bind.call(null,G__20268,G__20269));
})();
desmo.core.with_ch = (function (){var G__20273 = ossicone.effect.env;
var G__20274 = ((function (G__20273){
return (function (p__20275){
var map__20276 = p__20275;
var map__20276__$1 = ((cljs.core.seq_QMARK_(map__20276))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20276):map__20276);
var ch = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20276__$1,cljs.core.constant$keyword$ch);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20276__$1,cljs.core.constant$keyword$path);
return ossicone.core.mdo.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__20277 = ((function (map__20276,map__20276__$1,ch,path,G__20273){
return (function() { 
var G__20291__delegate = function (tag,values){
var c__15159__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto__,map__20276,map__20276__$1,ch,path,G__20273){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto__,map__20276,map__20276__$1,ch,path,G__20273){
return (function (state_20282){
var state_val_20283 = (state_20282[(1)]);
if((state_val_20283 === (1))){
var inst_20278 = cljs.core.apply.cljs$core$IFn$_invoke$arity$4(cljs.core.vector,tag,path,values);
var state_20282__$1 = state_20282;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20282__$1,(2),ch,inst_20278);
} else {
if((state_val_20283 === (2))){
var inst_20280 = (state_20282[(2)]);
var state_20282__$1 = state_20282;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20282__$1,inst_20280);
} else {
return null;
}
}
});})(c__15159__auto__,map__20276,map__20276__$1,ch,path,G__20273))
;
return ((function (switch__15081__auto__,c__15159__auto__,map__20276,map__20276__$1,ch,path,G__20273){
return (function() {
var desmo$core$state_machine__15082__auto__ = null;
var desmo$core$state_machine__15082__auto____0 = (function (){
var statearr_20287 = [null,null,null,null,null,null,null];
(statearr_20287[(0)] = desmo$core$state_machine__15082__auto__);

(statearr_20287[(1)] = (1));

return statearr_20287;
});
var desmo$core$state_machine__15082__auto____1 = (function (state_20282){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_20282);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e20288){if((e20288 instanceof Object)){
var ex__15085__auto__ = e20288;
var statearr_20289_20292 = state_20282;
(statearr_20289_20292[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20282);

return cljs.core.constant$keyword$recur;
} else {
throw e20288;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__20293 = state_20282;
state_20282 = G__20293;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
desmo$core$state_machine__15082__auto__ = function(state_20282){
switch(arguments.length){
case 0:
return desmo$core$state_machine__15082__auto____0.call(this);
case 1:
return desmo$core$state_machine__15082__auto____1.call(this,state_20282);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
desmo$core$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = desmo$core$state_machine__15082__auto____0;
desmo$core$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = desmo$core$state_machine__15082__auto____1;
return desmo$core$state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto__,map__20276,map__20276__$1,ch,path,G__20273))
})();
var state__15161__auto__ = (function (){var statearr_20290 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_20290[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto__);

return statearr_20290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto__,map__20276,map__20276__$1,ch,path,G__20273))
);

return c__15159__auto__;
};
var G__20291 = function (tag,var_args){
var values = null;
if (arguments.length > 1) {
var G__20294__i = 0, G__20294__a = new Array(arguments.length -  1);
while (G__20294__i < G__20294__a.length) {G__20294__a[G__20294__i] = arguments[G__20294__i + 1]; ++G__20294__i;}
  values = new cljs.core.IndexedSeq(G__20294__a,0);
} 
return G__20291__delegate.call(this,tag,values);};
G__20291.cljs$lang$maxFixedArity = 1;
G__20291.cljs$lang$applyTo = (function (arglist__20295){
var tag = cljs.core.first(arglist__20295);
var values = cljs.core.rest(arglist__20295);
return G__20291__delegate(tag,values);
});
G__20291.cljs$core$IFn$_invoke$arity$variadic = G__20291__delegate;
return G__20291;
})()
;})(map__20276,map__20276__$1,ch,path,G__20273))
;
return (ossicone.core.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.core.return$.cljs$core$IFn$_invoke$arity$1(G__20277) : ossicone.core.return$.call(null,G__20277));
})()], 0));
});})(G__20273))
;
return (ossicone.core.bind.cljs$core$IFn$_invoke$arity$2 ? ossicone.core.bind.cljs$core$IFn$_invoke$arity$2(G__20273,G__20274) : ossicone.core.bind.call(null,G__20273,G__20274));
})();
desmo.core.on = (function desmo$core$on(tag,f){
var G__20300 = ossicone.effect.env;
var G__20301 = ((function (G__20300){
return (function (p__20302){
var map__20303 = p__20302;
var map__20303__$1 = ((cljs.core.seq_QMARK_(map__20303))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20303):map__20303);
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20303__$1,cljs.core.constant$keyword$path);
return ossicone.core.mdo.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([ossicone.effect.modify.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update,cljs.core.array_seq([tag,cljs.core.conj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,f], null)], 0))], 0));
});})(G__20300))
;
return (ossicone.core.bind.cljs$core$IFn$_invoke$arity$2 ? ossicone.core.bind.cljs$core$IFn$_invoke$arity$2(G__20300,G__20301) : ossicone.core.bind.call(null,G__20300,G__20301));
});
desmo.core.on_BANG_ = (function desmo$core$on_BANG_(tag,f_BANG_){
return desmo.core.on(tag,(function() { 
var G__20304__delegate = function (s,args){
cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f_BANG_,s,args);

return s;
};
var G__20304 = function (s,var_args){
var args = null;
if (arguments.length > 1) {
var G__20305__i = 0, G__20305__a = new Array(arguments.length -  1);
while (G__20305__i < G__20305__a.length) {G__20305__a[G__20305__i] = arguments[G__20305__i + 1]; ++G__20305__i;}
  args = new cljs.core.IndexedSeq(G__20305__a,0);
} 
return G__20304__delegate.call(this,s,args);};
G__20304.cljs$lang$maxFixedArity = 1;
G__20304.cljs$lang$applyTo = (function (arglist__20306){
var s = cljs.core.first(arglist__20306);
var args = cljs.core.rest(arglist__20306);
return G__20304__delegate(s,args);
});
G__20304.cljs$core$IFn$_invoke$arity$variadic = G__20304__delegate;
return G__20304;
})()
);
});
desmo.core.connect = (function desmo$core$connect(path,component){
var G__20321 = desmo.core.state;
var G__20322 = ((function (G__20321){
return (function (s){
return ossicone.core.mdo.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var f = cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(ossicone.effect.local,component,cljs.core.update,cljs.core.constant$keyword$path,cljs.core.array_seq([cljs.core.conj], 0));
if(cljs.core.sequential_QMARK_(s)){
var G__20323 = (function (){var iter__4964__auto__ = ((function (f,G__20321){
return (function desmo$core$connect_$_iter__20324(s__20325){
return (new cljs.core.LazySeq(null,((function (f,G__20321){
return (function (){
var s__20325__$1 = s__20325;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__20325__$1);
if(temp__4425__auto__){
var s__20325__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__20325__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__20325__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__20327 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__20326 = (0);
while(true){
if((i__20326 < size__4963__auto__)){
var c = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__20326);
cljs.core.chunk_append(b__20327,(function (){var G__20332 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,cljs.core.get.cljs$core$IFn$_invoke$arity$2(c,path)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20332) : f.call(null,G__20332));
})());

var G__20335 = (i__20326 + (1));
i__20326 = G__20335;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__20327),desmo$core$connect_$_iter__20324(cljs.core.chunk_rest(s__20325__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__20327),null);
}
} else {
var c = cljs.core.first(s__20325__$2);
return cljs.core.cons((function (){var G__20333 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [path,cljs.core.get.cljs$core$IFn$_invoke$arity$2(c,path)], null);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20333) : f.call(null,G__20333));
})(),desmo$core$connect_$_iter__20324(cljs.core.rest(s__20325__$2)));
}
} else {
return null;
}
break;
}
});})(f,G__20321))
,null,null));
});})(f,G__20321))
;
return iter__4964__auto__(s);
})();
return (ossicone.core.traverse.cljs$core$IFn$_invoke$arity$1 ? ossicone.core.traverse.cljs$core$IFn$_invoke$arity$1(G__20323) : ossicone.core.traverse.call(null,G__20323));
} else {
var G__20334 = path;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20334) : f.call(null,G__20334));
}
})()], 0));
});})(G__20321))
;
return (ossicone.core.bind.cljs$core$IFn$_invoke$arity$2 ? ossicone.core.bind.cljs$core$IFn$_invoke$arity$2(G__20321,G__20322) : ossicone.core.bind.call(null,G__20321,G__20322));
});
desmo.core.subseq_QMARK_ = (function desmo$core$subseq_QMARK_(a,b){
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core._EQ_,a,b));
});
desmo.core.step = (function desmo$core$step(run,p__20337,p__20338){
var map__20345 = p__20337;
var map__20345__$1 = ((cljs.core.seq_QMARK_(map__20345))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20345):map__20345);
var handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20345__$1,cljs.core.constant$keyword$handlers);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20345__$1,cljs.core.constant$keyword$state);
var vec__20346 = p__20338;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20346,(0),null);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20346,(1),null);
var args = cljs.core.nthnext(vec__20346,(2));
var new_state = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (map__20345,map__20345__$1,handlers,state,vec__20346,tag,path,args){
return (function (s,p__20347){
var vec__20348 = p__20347;
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20348,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20348,(1),null);
return desmo.core.update_in_path(s,p,((function (vec__20348,p,f,map__20345,map__20345__$1,handlers,state,vec__20346,tag,path,args){
return (function (p1__20336_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__20336_SHARP_,args);
});})(vec__20348,p,f,map__20345,map__20345__$1,handlers,state,vec__20346,tag,path,args))
);
});})(map__20345,map__20345__$1,handlers,state,vec__20346,tag,path,args))
,state,cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(desmo.core.subseq_QMARK_,path),cljs.core.first),(function (){var G__20349 = handlers;
return (tag.cljs$core$IFn$_invoke$arity$1 ? tag.cljs$core$IFn$_invoke$arity$1(G__20349) : tag.call(null,G__20349));
})())));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__20350 = new_state;
return (run.cljs$core$IFn$_invoke$arity$1 ? run.cljs$core$IFn$_invoke$arity$1(G__20350) : run.call(null,G__20350));
})(),cljs.core.constant$keyword$state,new_state);
});
desmo.core.log = (function desmo$core$log(){
var G__20352 = arguments.length;
switch (G__20352) {
case 1:
return desmo.core.log.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return desmo.core.log.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

desmo.core.log.cljs$core$IFn$_invoke$arity$1 = (function (s){
return desmo.core.log.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,s);
});

desmo.core.log.cljs$core$IFn$_invoke$arity$2 = (function (f,s){
return jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic((function (v){
console.log([cljs.core.str((function (){var G__20353 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__20353) : f.call(null,G__20353));
})())].join(''));

return v;
}),cljs.core.array_seq([s], 0));
});

desmo.core.log.cljs$lang$maxFixedArity = 2;
desmo.core.sliding_pair = (function desmo$core$sliding_pair(init,sig){
return jamesmacaulay.zelkova.signal.reductions.cljs$core$IFn$_invoke$arity$3((function (p__20357,new$){
var vec__20358 = p__20357;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20358,(0),null);
var old = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__20358,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old,new$], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [init,init], null),sig);
});
desmo.core.to_read_port = (function desmo$core$to_read_port(sig){
var from = jamesmacaulay.zelkova.signal.to_chan(sig);
var to = jamesmacaulay.zelkova.signal.write_port.cljs$core$IFn$_invoke$arity$1(null);
var c__15159__auto___20421 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___20421,from,to){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___20421,from,to){
return (function (state_20404){
var state_val_20405 = (state_20404[(1)]);
if((state_val_20405 === (1))){
var state_20404__$1 = state_20404;
var statearr_20406_20422 = state_20404__$1;
(statearr_20406_20422[(2)] = null);

(statearr_20406_20422[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20405 === (2))){
var state_20404__$1 = state_20404;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20404__$1,(4),from);
} else {
if((state_val_20405 === (3))){
var inst_20402 = (state_20404[(2)]);
var state_20404__$1 = state_20404;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20404__$1,inst_20402);
} else {
if((state_val_20405 === (4))){
var inst_20392 = (state_20404[(7)]);
var inst_20392__$1 = (state_20404[(2)]);
var state_20404__$1 = (function (){var statearr_20407 = state_20404;
(statearr_20407[(7)] = inst_20392__$1);

return statearr_20407;
})();
if(cljs.core.truth_(inst_20392__$1)){
var statearr_20408_20423 = state_20404__$1;
(statearr_20408_20423[(1)] = (5));

} else {
var statearr_20409_20424 = state_20404__$1;
(statearr_20409_20424[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_20405 === (5))){
var inst_20392 = (state_20404[(7)]);
var state_20404__$1 = state_20404;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_20404__$1,(8),to,inst_20392);
} else {
if((state_val_20405 === (6))){
var inst_20397 = cljs.core.async.close_BANG_(to);
var state_20404__$1 = state_20404;
var statearr_20410_20425 = state_20404__$1;
(statearr_20410_20425[(2)] = inst_20397);

(statearr_20410_20425[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20405 === (7))){
var inst_20399 = (state_20404[(2)]);
var state_20404__$1 = (function (){var statearr_20411 = state_20404;
(statearr_20411[(8)] = inst_20399);

return statearr_20411;
})();
var statearr_20412_20426 = state_20404__$1;
(statearr_20412_20426[(2)] = null);

(statearr_20412_20426[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20405 === (8))){
var inst_20395 = (state_20404[(2)]);
var state_20404__$1 = state_20404;
var statearr_20413_20427 = state_20404__$1;
(statearr_20413_20427[(2)] = inst_20395);

(statearr_20413_20427[(1)] = (7));


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
});})(c__15159__auto___20421,from,to))
;
return ((function (switch__15081__auto__,c__15159__auto___20421,from,to){
return (function() {
var desmo$core$to_read_port_$_state_machine__15082__auto__ = null;
var desmo$core$to_read_port_$_state_machine__15082__auto____0 = (function (){
var statearr_20417 = [null,null,null,null,null,null,null,null,null];
(statearr_20417[(0)] = desmo$core$to_read_port_$_state_machine__15082__auto__);

(statearr_20417[(1)] = (1));

return statearr_20417;
});
var desmo$core$to_read_port_$_state_machine__15082__auto____1 = (function (state_20404){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_20404);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e20418){if((e20418 instanceof Object)){
var ex__15085__auto__ = e20418;
var statearr_20419_20428 = state_20404;
(statearr_20419_20428[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20404);

return cljs.core.constant$keyword$recur;
} else {
throw e20418;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__20429 = state_20404;
state_20404 = G__20429;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
desmo$core$to_read_port_$_state_machine__15082__auto__ = function(state_20404){
switch(arguments.length){
case 0:
return desmo$core$to_read_port_$_state_machine__15082__auto____0.call(this);
case 1:
return desmo$core$to_read_port_$_state_machine__15082__auto____1.call(this,state_20404);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
desmo$core$to_read_port_$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = desmo$core$to_read_port_$_state_machine__15082__auto____0;
desmo$core$to_read_port_$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = desmo$core$to_read_port_$_state_machine__15082__auto____1;
return desmo$core$to_read_port_$_state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___20421,from,to))
})();
var state__15161__auto__ = (function (){var statearr_20420 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_20420[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___20421);

return statearr_20420;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___20421,from,to))
);


return jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([to], 0));
});
desmo.core.animate = (function desmo$core$animate(f){
return window.requestAnimationFrame(f);
});
desmo.core.make_runner = (function desmo$core$make_runner(component,env){
return (function (s){
var map__20431 = ossicone.effect.run(component,cljs.core.constant$keyword$env,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(env,cljs.core.constant$keyword$state,s));
var map__20431__$1 = ((cljs.core.seq_QMARK_(map__20431))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20431):map__20431);
var result = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20431__$1,cljs.core.constant$keyword$result);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20431__$1,cljs.core.constant$keyword$state);
return new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$tree,result,cljs.core.constant$keyword$handlers,state], null);
});
});
desmo.core.run_app = (function desmo$core$run_app(component,state){
var events = jamesmacaulay.zelkova.signal.write_port.cljs$core$IFn$_invoke$arity$1(null);
var run = desmo.core.make_runner(component,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$ch,events,cljs.core.constant$keyword$path,cljs.core.PersistentVector.EMPTY], null));
var map__20434 = (function (){var G__20435 = state;
return (run.cljs$core$IFn$_invoke$arity$1 ? run.cljs$core$IFn$_invoke$arity$1(G__20435) : run.call(null,G__20435));
})();
var map__20434__$1 = ((cljs.core.seq_QMARK_(map__20434))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20434):map__20434);
var handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20434__$1,cljs.core.constant$keyword$handlers);
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20434__$1,cljs.core.constant$keyword$tree);
var steps = desmo.core.to_read_port(jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic(((function (events,run,map__20434,map__20434__$1,handlers,tree){
return (function (x__13449__auto__){
return cljs.core.select_keys(x__13449__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$state,cljs.core.constant$keyword$tree], null));
});})(events,run,map__20434,map__20434__$1,handlers,tree))
,cljs.core.array_seq([jamesmacaulay.zelkova.signal.reductions.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(desmo.core.step,run),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$state,state,cljs.core.constant$keyword$handlers,handlers], null),events)], 0)));
return new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$event,jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.array_seq([events], 0)),cljs.core.constant$keyword$state,jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$state,cljs.core.array_seq([steps], 0)),cljs.core.constant$keyword$tree,jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.constant$keyword$tree,cljs.core.array_seq([steps], 0)),cljs.core.constant$keyword$init_DASH_tree,tree], null);
});
desmo.core.render_app = (function desmo$core$render_app(p__20436,root){
var map__20468 = p__20436;
var map__20468__$1 = ((cljs.core.seq_QMARK_(map__20468))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20468):map__20468);
var m = map__20468__$1;
var tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20468__$1,cljs.core.constant$keyword$tree);
var init_tree = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__20468__$1,cljs.core.constant$keyword$init_DASH_tree);
goog.dom.removeChildren(root);

var node_20499 = (function (){var G__20469 = root.appendChild((function (){var G__20470 = init_tree;
return (desmo.dom.tree.cljs$core$IFn$_invoke$arity$1 ? desmo.dom.tree.cljs$core$IFn$_invoke$arity$1(G__20470) : desmo.dom.tree.call(null,G__20470));
})());
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__20469) : cljs.core.atom.call(null,G__20469));
})();
var patches_20500 = jamesmacaulay.zelkova.signal.to_chan(jamesmacaulay.zelkova.signal.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.apply,desmo.dom.diff),cljs.core.array_seq([desmo.core.sliding_pair(init_tree,tree)], 0)));
var c__15159__auto___20501 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___20501,node_20499,patches_20500,map__20468,map__20468__$1,m,tree,init_tree){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___20501,node_20499,patches_20500,map__20468,map__20468__$1,m,tree,init_tree){
return (function (state_20481){
var state_val_20482 = (state_20481[(1)]);
if((state_val_20482 === (1))){
var state_20481__$1 = state_20481;
var statearr_20483_20502 = state_20481__$1;
(statearr_20483_20502[(2)] = null);

(statearr_20483_20502[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20482 === (2))){
var inst_20472 = (function (){var G__20484 = node_20499;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__20484) : cljs.core.deref.call(null,G__20484));
})();
var state_20481__$1 = (function (){var statearr_20485 = state_20481;
(statearr_20485[(7)] = inst_20472);

return statearr_20485;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20481__$1,(4),patches_20500);
} else {
if((state_val_20482 === (3))){
var inst_20479 = (state_20481[(2)]);
var state_20481__$1 = state_20481;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20481__$1,inst_20479);
} else {
if((state_val_20482 === (4))){
var inst_20472 = (state_20481[(7)]);
var inst_20474 = (state_20481[(2)]);
var inst_20475 = (function (){var G__20486 = inst_20472;
var G__20487 = inst_20474;
return (desmo.dom.patch.cljs$core$IFn$_invoke$arity$2 ? desmo.dom.patch.cljs$core$IFn$_invoke$arity$2(G__20486,G__20487) : desmo.dom.patch.call(null,G__20486,G__20487));
})();
var inst_20476 = (function (){var G__20488 = node_20499;
var G__20489 = inst_20475;
return (cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__20488,G__20489) : cljs.core.reset_BANG_.call(null,G__20488,G__20489));
})();
var state_20481__$1 = (function (){var statearr_20490 = state_20481;
(statearr_20490[(8)] = inst_20476);

return statearr_20490;
})();
var statearr_20491_20503 = state_20481__$1;
(statearr_20491_20503[(2)] = null);

(statearr_20491_20503[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
});})(c__15159__auto___20501,node_20499,patches_20500,map__20468,map__20468__$1,m,tree,init_tree))
;
return ((function (switch__15081__auto__,c__15159__auto___20501,node_20499,patches_20500,map__20468,map__20468__$1,m,tree,init_tree){
return (function() {
var desmo$core$render_app_$_state_machine__15082__auto__ = null;
var desmo$core$render_app_$_state_machine__15082__auto____0 = (function (){
var statearr_20495 = [null,null,null,null,null,null,null,null,null];
(statearr_20495[(0)] = desmo$core$render_app_$_state_machine__15082__auto__);

(statearr_20495[(1)] = (1));

return statearr_20495;
});
var desmo$core$render_app_$_state_machine__15082__auto____1 = (function (state_20481){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_20481);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e20496){if((e20496 instanceof Object)){
var ex__15085__auto__ = e20496;
var statearr_20497_20504 = state_20481;
(statearr_20497_20504[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20481);

return cljs.core.constant$keyword$recur;
} else {
throw e20496;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__20505 = state_20481;
state_20481 = G__20505;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
desmo$core$render_app_$_state_machine__15082__auto__ = function(state_20481){
switch(arguments.length){
case 0:
return desmo$core$render_app_$_state_machine__15082__auto____0.call(this);
case 1:
return desmo$core$render_app_$_state_machine__15082__auto____1.call(this,state_20481);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
desmo$core$render_app_$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = desmo$core$render_app_$_state_machine__15082__auto____0;
desmo$core$render_app_$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = desmo$core$render_app_$_state_machine__15082__auto____1;
return desmo$core$render_app_$_state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___20501,node_20499,patches_20500,map__20468,map__20468__$1,m,tree,init_tree))
})();
var state__15161__auto__ = (function (){var statearr_20498 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_20498[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___20501);

return statearr_20498;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___20501,node_20499,patches_20500,map__20468,map__20468__$1,m,tree,init_tree))
);


return m;
});
desmo.core.log_app = (function desmo$core$log_app(m){
jamesmacaulay.zelkova.signal.spawn.cljs$core$IFn$_invoke$arity$1(desmo.core.log.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.val,cljs.core.first),jamesmacaulay.zelkova.signal.indexed_updates(cljs.core.select_keys(m,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$event,cljs.core.constant$keyword$state], null)))));

return m;
});
desmo.core.save_app = (function desmo$core$save_app(){
var argseq__5250__auto__ = ((((2) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0))):null);
return desmo.core.save_app.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5250__auto__);
});

desmo.core.save_app.cljs$core$IFn$_invoke$arity$variadic = (function (m,store_key,p__20509){
var map__20510 = p__20509;
var map__20510__$1 = ((cljs.core.seq_QMARK_(map__20510))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__20510):map__20510);
var debounce = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20510__$1,cljs.core.constant$keyword$debounce,(0));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__20510__$1,cljs.core.constant$keyword$path,cljs.core.PersistentVector.EMPTY);
var ch_20535 = jamesmacaulay.zelkova.signal.to_chan(jamesmacaulay.zelkova.time.debounce(debounce,cljs.core.constant$keyword$state.cljs$core$IFn$_invoke$arity$1(m)));
var c__15159__auto___20536 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___20536,ch_20535,map__20510,map__20510__$1,debounce,path){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___20536,ch_20535,map__20510,map__20510__$1,debounce,path){
return (function (state_20522){
var state_val_20523 = (state_20522[(1)]);
if((state_val_20523 === (1))){
var state_20522__$1 = state_20522;
var statearr_20524_20537 = state_20522__$1;
(statearr_20524_20537[(2)] = null);

(statearr_20524_20537[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_20523 === (2))){
var inst_20512 = cognitect.transit.writer.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$json);
var state_20522__$1 = (function (){var statearr_20525 = state_20522;
(statearr_20525[(7)] = inst_20512);

return statearr_20525;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_20522__$1,(4),ch_20535);
} else {
if((state_val_20523 === (3))){
var inst_20520 = (state_20522[(2)]);
var state_20522__$1 = state_20522;
return cljs.core.async.impl.ioc_helpers.return_chan(state_20522__$1,inst_20520);
} else {
if((state_val_20523 === (4))){
var inst_20512 = (state_20522[(7)]);
var inst_20514 = (state_20522[(2)]);
var inst_20515 = desmo.core.get_in_path(inst_20514,path);
var inst_20516 = cognitect.transit.write(inst_20512,inst_20515);
var inst_20517 = localStorage.setItem(store_key,inst_20516);
var state_20522__$1 = (function (){var statearr_20526 = state_20522;
(statearr_20526[(8)] = inst_20517);

return statearr_20526;
})();
var statearr_20527_20538 = state_20522__$1;
(statearr_20527_20538[(2)] = null);

(statearr_20527_20538[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
return null;
}
}
}
}
});})(c__15159__auto___20536,ch_20535,map__20510,map__20510__$1,debounce,path))
;
return ((function (switch__15081__auto__,c__15159__auto___20536,ch_20535,map__20510,map__20510__$1,debounce,path){
return (function() {
var desmo$core$state_machine__15082__auto__ = null;
var desmo$core$state_machine__15082__auto____0 = (function (){
var statearr_20531 = [null,null,null,null,null,null,null,null,null];
(statearr_20531[(0)] = desmo$core$state_machine__15082__auto__);

(statearr_20531[(1)] = (1));

return statearr_20531;
});
var desmo$core$state_machine__15082__auto____1 = (function (state_20522){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_20522);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e20532){if((e20532 instanceof Object)){
var ex__15085__auto__ = e20532;
var statearr_20533_20539 = state_20522;
(statearr_20533_20539[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_20522);

return cljs.core.constant$keyword$recur;
} else {
throw e20532;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__20540 = state_20522;
state_20522 = G__20540;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
desmo$core$state_machine__15082__auto__ = function(state_20522){
switch(arguments.length){
case 0:
return desmo$core$state_machine__15082__auto____0.call(this);
case 1:
return desmo$core$state_machine__15082__auto____1.call(this,state_20522);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
desmo$core$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = desmo$core$state_machine__15082__auto____0;
desmo$core$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = desmo$core$state_machine__15082__auto____1;
return desmo$core$state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___20536,ch_20535,map__20510,map__20510__$1,debounce,path))
})();
var state__15161__auto__ = (function (){var statearr_20534 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_20534[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___20536);

return statearr_20534;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___20536,ch_20535,map__20510,map__20510__$1,debounce,path))
);


return m;
});

desmo.core.save_app.cljs$lang$maxFixedArity = (2);

desmo.core.save_app.cljs$lang$applyTo = (function (seq20506){
var G__20507 = cljs.core.first(seq20506);
var seq20506__$1 = cljs.core.next(seq20506);
var G__20508 = cljs.core.first(seq20506__$1);
var seq20506__$2 = cljs.core.next(seq20506__$1);
return desmo.core.save_app.cljs$core$IFn$_invoke$arity$variadic(G__20507,G__20508,seq20506__$2);
});
desmo.core.load_app = (function desmo$core$load_app(store_key){
return cognitect.transit.read(cognitect.transit.reader.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$json),localStorage.getItem(store_key));
});
