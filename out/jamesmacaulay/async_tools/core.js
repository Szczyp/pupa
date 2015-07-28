// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('jamesmacaulay.async_tools.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
jamesmacaulay.async_tools.core.concat = (function jamesmacaulay$async_tools$core$concat(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return jamesmacaulay.async_tools.core.concat.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});

jamesmacaulay.async_tools.core.concat.cljs$core$IFn$_invoke$arity$variadic = (function (chs){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var c__15159__auto___21722 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___21722,out){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___21722,out){
return (function (state_21697){
var state_val_21698 = (state_21697[(1)]);
if((state_val_21698 === (7))){
var inst_21681 = (state_21697[(7)]);
var inst_21681__$1 = (state_21697[(2)]);
var inst_21682 = (inst_21681__$1 == null);
var state_21697__$1 = (function (){var statearr_21699 = state_21697;
(statearr_21699[(7)] = inst_21681__$1);

return statearr_21699;
})();
if(cljs.core.truth_(inst_21682)){
var statearr_21700_21723 = state_21697__$1;
(statearr_21700_21723[(1)] = (8));

} else {
var statearr_21701_21724 = state_21697__$1;
(statearr_21701_21724[(1)] = (9));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21698 === (1))){
var inst_21673 = chs;
var state_21697__$1 = (function (){var statearr_21702 = state_21697;
(statearr_21702[(8)] = inst_21673);

return statearr_21702;
})();
var statearr_21703_21725 = state_21697__$1;
(statearr_21703_21725[(2)] = null);

(statearr_21703_21725[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21698 === (4))){
var inst_21678 = cljs.core.async.close_BANG_(out);
var state_21697__$1 = state_21697;
var statearr_21704_21726 = state_21697__$1;
(statearr_21704_21726[(2)] = inst_21678);

(statearr_21704_21726[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21698 === (6))){
var inst_21693 = (state_21697[(2)]);
var state_21697__$1 = state_21697;
var statearr_21705_21727 = state_21697__$1;
(statearr_21705_21727[(2)] = inst_21693);

(statearr_21705_21727[(1)] = (3));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21698 === (3))){
var inst_21695 = (state_21697[(2)]);
var state_21697__$1 = state_21697;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21697__$1,inst_21695);
} else {
if((state_val_21698 === (2))){
var inst_21675 = (state_21697[(9)]);
var inst_21673 = (state_21697[(8)]);
var inst_21675__$1 = cljs.core.first(inst_21673);
var inst_21676 = (inst_21675__$1 == null);
var state_21697__$1 = (function (){var statearr_21707 = state_21697;
(statearr_21707[(9)] = inst_21675__$1);

return statearr_21707;
})();
if(cljs.core.truth_(inst_21676)){
var statearr_21708_21728 = state_21697__$1;
(statearr_21708_21728[(1)] = (4));

} else {
var statearr_21709_21729 = state_21697__$1;
(statearr_21709_21729[(1)] = (5));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21698 === (11))){
var inst_21673 = (state_21697[(8)]);
var inst_21688 = (state_21697[(2)]);
var tmp21706 = inst_21673;
var inst_21673__$1 = tmp21706;
var state_21697__$1 = (function (){var statearr_21710 = state_21697;
(statearr_21710[(10)] = inst_21688);

(statearr_21710[(8)] = inst_21673__$1);

return statearr_21710;
})();
var statearr_21711_21730 = state_21697__$1;
(statearr_21711_21730[(2)] = null);

(statearr_21711_21730[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21698 === (9))){
var inst_21681 = (state_21697[(7)]);
var state_21697__$1 = state_21697;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_21697__$1,(11),out,inst_21681);
} else {
if((state_val_21698 === (5))){
var inst_21675 = (state_21697[(9)]);
var state_21697__$1 = state_21697;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21697__$1,(7),inst_21675);
} else {
if((state_val_21698 === (10))){
var inst_21691 = (state_21697[(2)]);
var state_21697__$1 = state_21697;
var statearr_21712_21731 = state_21697__$1;
(statearr_21712_21731[(2)] = inst_21691);

(statearr_21712_21731[(1)] = (6));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21698 === (8))){
var inst_21673 = (state_21697[(8)]);
var inst_21684 = cljs.core.next(inst_21673);
var inst_21673__$1 = inst_21684;
var state_21697__$1 = (function (){var statearr_21713 = state_21697;
(statearr_21713[(8)] = inst_21673__$1);

return statearr_21713;
})();
var statearr_21714_21732 = state_21697__$1;
(statearr_21714_21732[(2)] = null);

(statearr_21714_21732[(1)] = (2));


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
});})(c__15159__auto___21722,out))
;
return ((function (switch__15081__auto__,c__15159__auto___21722,out){
return (function() {
var jamesmacaulay$async_tools$core$state_machine__15082__auto__ = null;
var jamesmacaulay$async_tools$core$state_machine__15082__auto____0 = (function (){
var statearr_21718 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_21718[(0)] = jamesmacaulay$async_tools$core$state_machine__15082__auto__);

(statearr_21718[(1)] = (1));

return statearr_21718;
});
var jamesmacaulay$async_tools$core$state_machine__15082__auto____1 = (function (state_21697){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_21697);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e21719){if((e21719 instanceof Object)){
var ex__15085__auto__ = e21719;
var statearr_21720_21733 = state_21697;
(statearr_21720_21733[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21697);

return cljs.core.constant$keyword$recur;
} else {
throw e21719;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__21734 = state_21697;
state_21697 = G__21734;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
jamesmacaulay$async_tools$core$state_machine__15082__auto__ = function(state_21697){
switch(arguments.length){
case 0:
return jamesmacaulay$async_tools$core$state_machine__15082__auto____0.call(this);
case 1:
return jamesmacaulay$async_tools$core$state_machine__15082__auto____1.call(this,state_21697);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jamesmacaulay$async_tools$core$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = jamesmacaulay$async_tools$core$state_machine__15082__auto____0;
jamesmacaulay$async_tools$core$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = jamesmacaulay$async_tools$core$state_machine__15082__auto____1;
return jamesmacaulay$async_tools$core$state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___21722,out))
})();
var state__15161__auto__ = (function (){var statearr_21721 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_21721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___21722);

return statearr_21721;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___21722,out))
);


return out;
});

jamesmacaulay.async_tools.core.concat.cljs$lang$maxFixedArity = (0);

jamesmacaulay.async_tools.core.concat.cljs$lang$applyTo = (function (seq21672){
return jamesmacaulay.async_tools.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq21672));
});
jamesmacaulay.async_tools.core.do_effects = (function jamesmacaulay$async_tools$core$do_effects(f_BANG_,ch){
var c__15159__auto___21797 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___21797){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___21797){
return (function (state_21779){
var state_val_21780 = (state_21779[(1)]);
if((state_val_21780 === (1))){
var state_21779__$1 = state_21779;
var statearr_21781_21798 = state_21779__$1;
(statearr_21781_21798[(2)] = null);

(statearr_21781_21798[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21780 === (2))){
var state_21779__$1 = state_21779;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_21779__$1,(4),ch);
} else {
if((state_val_21780 === (3))){
var inst_21777 = (state_21779[(2)]);
var state_21779__$1 = state_21779;
return cljs.core.async.impl.ioc_helpers.return_chan(state_21779__$1,inst_21777);
} else {
if((state_val_21780 === (4))){
var inst_21768 = (state_21779[(7)]);
var inst_21768__$1 = (state_21779[(2)]);
var inst_21769 = (inst_21768__$1 == null);
var state_21779__$1 = (function (){var statearr_21782 = state_21779;
(statearr_21782[(7)] = inst_21768__$1);

return statearr_21782;
})();
if(cljs.core.truth_(inst_21769)){
var statearr_21783_21799 = state_21779__$1;
(statearr_21783_21799[(1)] = (5));

} else {
var statearr_21784_21800 = state_21779__$1;
(statearr_21784_21800[(1)] = (6));

}

return cljs.core.constant$keyword$recur;
} else {
if((state_val_21780 === (5))){
var state_21779__$1 = state_21779;
var statearr_21785_21801 = state_21779__$1;
(statearr_21785_21801[(2)] = null);

(statearr_21785_21801[(1)] = (7));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21780 === (6))){
var inst_21768 = (state_21779[(7)]);
var inst_21772 = (function (){var G__21786 = inst_21768;
return (f_BANG_.cljs$core$IFn$_invoke$arity$1 ? f_BANG_.cljs$core$IFn$_invoke$arity$1(G__21786) : f_BANG_.call(null,G__21786));
})();
var state_21779__$1 = (function (){var statearr_21787 = state_21779;
(statearr_21787[(8)] = inst_21772);

return statearr_21787;
})();
var statearr_21788_21802 = state_21779__$1;
(statearr_21788_21802[(2)] = null);

(statearr_21788_21802[(1)] = (2));


return cljs.core.constant$keyword$recur;
} else {
if((state_val_21780 === (7))){
var inst_21775 = (state_21779[(2)]);
var state_21779__$1 = state_21779;
var statearr_21789_21803 = state_21779__$1;
(statearr_21789_21803[(2)] = inst_21775);

(statearr_21789_21803[(1)] = (3));


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
});})(c__15159__auto___21797))
;
return ((function (switch__15081__auto__,c__15159__auto___21797){
return (function() {
var jamesmacaulay$async_tools$core$do_effects_$_state_machine__15082__auto__ = null;
var jamesmacaulay$async_tools$core$do_effects_$_state_machine__15082__auto____0 = (function (){
var statearr_21793 = [null,null,null,null,null,null,null,null,null];
(statearr_21793[(0)] = jamesmacaulay$async_tools$core$do_effects_$_state_machine__15082__auto__);

(statearr_21793[(1)] = (1));

return statearr_21793;
});
var jamesmacaulay$async_tools$core$do_effects_$_state_machine__15082__auto____1 = (function (state_21779){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_21779);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e21794){if((e21794 instanceof Object)){
var ex__15085__auto__ = e21794;
var statearr_21795_21804 = state_21779;
(statearr_21795_21804[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_21779);

return cljs.core.constant$keyword$recur;
} else {
throw e21794;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__21805 = state_21779;
state_21779 = G__21805;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
jamesmacaulay$async_tools$core$do_effects_$_state_machine__15082__auto__ = function(state_21779){
switch(arguments.length){
case 0:
return jamesmacaulay$async_tools$core$do_effects_$_state_machine__15082__auto____0.call(this);
case 1:
return jamesmacaulay$async_tools$core$do_effects_$_state_machine__15082__auto____1.call(this,state_21779);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
jamesmacaulay$async_tools$core$do_effects_$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = jamesmacaulay$async_tools$core$do_effects_$_state_machine__15082__auto____0;
jamesmacaulay$async_tools$core$do_effects_$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = jamesmacaulay$async_tools$core$do_effects_$_state_machine__15082__auto____1;
return jamesmacaulay$async_tools$core$do_effects_$_state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___21797))
})();
var state__15161__auto__ = (function (){var statearr_21796 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_21796[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___21797);

return statearr_21796;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___21797))
);


return ch;
});
jamesmacaulay.async_tools.core.log_mult = (function jamesmacaulay$async_tools$core$log_mult(mult){
return jamesmacaulay.async_tools.core.do_effects(cljs.core.println,cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2(mult,cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0()));
});
jamesmacaulay.async_tools.core.log_channel = (function jamesmacaulay$async_tools$core$log_channel(ch){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((function (x){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([x], 0));

return x;
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ch], null));
});

/**
* @constructor
*/
jamesmacaulay.async_tools.core.ConstantReadPort = (function (boxed_value){
this.boxed_value = boxed_value;
})
jamesmacaulay.async_tools.core.ConstantReadPort.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;

jamesmacaulay.async_tools.core.ConstantReadPort.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,___$1){
var self__ = this;
var ___$2 = this;
return self__.boxed_value;
});

jamesmacaulay.async_tools.core.ConstantReadPort.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"boxed-value","boxed-value",551476930,null)], null);
});

jamesmacaulay.async_tools.core.ConstantReadPort.cljs$lang$type = true;

jamesmacaulay.async_tools.core.ConstantReadPort.cljs$lang$ctorStr = "jamesmacaulay.async-tools.core/ConstantReadPort";

jamesmacaulay.async_tools.core.ConstantReadPort.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"jamesmacaulay.async-tools.core/ConstantReadPort");
});

jamesmacaulay.async_tools.core.__GT_ConstantReadPort = (function jamesmacaulay$async_tools$core$__GT_ConstantReadPort(boxed_value){
return (new jamesmacaulay.async_tools.core.ConstantReadPort(boxed_value));
});

jamesmacaulay.async_tools.core.constant = (function jamesmacaulay$async_tools$core$constant(x){
return (new jamesmacaulay.async_tools.core.ConstantReadPort(cljs.core.async.impl.channels.box(x)));
});
jamesmacaulay.async_tools.core.readport_QMARK_ = (function jamesmacaulay$async_tools$core$readport_QMARK_(x){
var G__21807 = x;
if(G__21807){
var bit__4884__auto__ = null;
if(cljs.core.truth_((function (){var or__4210__auto__ = bit__4884__auto__;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return G__21807.cljs$core$async$impl$protocols$ReadPort$;
}
})())){
return true;
} else {
if((!G__21807.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,G__21807);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.ReadPort,G__21807);
}
});
jamesmacaulay.async_tools.core.cast_as_readport = (function jamesmacaulay$async_tools$core$cast_as_readport(x){
if(cljs.core.truth_(jamesmacaulay.async_tools.core.readport_QMARK_(x))){
return x;
} else {
return jamesmacaulay.async_tools.core.constant(x);
}
});
