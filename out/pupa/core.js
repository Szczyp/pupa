// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('pupa.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('ajax.core');
goog.require('plumbing.core');
goog.require('desmo.core');
goog.require('desmo.dom');
pupa.core.search_keys = cljs.core.PersistentHashMap.fromArrays([cljs.core.constant$keyword$set_SLASH_block,cljs.core.constant$keyword$card_SLASH_supertypes,cljs.core.constant$keyword$set_SLASH_name,cljs.core.constant$keyword$card_SLASH_subtypes,cljs.core.constant$keyword$card_SLASH_text,cljs.core.constant$keyword$release_SLASH_rarity,cljs.core.constant$keyword$card_SLASH_color,cljs.core.constant$keyword$card_SLASH_name,cljs.core.constant$keyword$card_SLASH_types],[new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$placeholder,"Theros"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$placeholder,"Legendary"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$placeholder,"Journey into Nyx"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$placeholder,"Ajani"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$placeholder,"gain 100 life"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$placeholder,"m | r"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$placeholder,"W G"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$placeholder,"Ajani"], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$placeholder,"Planeswalker"], null)]);
pupa.core.js_val = (function pupa$core$js_val(x__13449__auto__){
return x__13449__auto__.target.value;
});
pupa.core.chan = (function pupa$core$chan(){
var G__19827 = arguments.length;
switch (G__19827) {
case 0:
return pupa.core.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return pupa.core.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

pupa.core.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
});

pupa.core.chan.cljs$core$IFn$_invoke$arity$1 = (function (v){
var ch = pupa.core.chan.cljs$core$IFn$_invoke$arity$0();
var c__15159__auto___19841 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto___19841,ch){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto___19841,ch){
return (function (state_19831){
var state_val_19832 = (state_19831[(1)]);
if((state_val_19832 === (1))){
var state_19831__$1 = state_19831;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19831__$1,(2),ch,v);
} else {
if((state_val_19832 === (2))){
var inst_19829 = (state_19831[(2)]);
var state_19831__$1 = state_19831;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19831__$1,inst_19829);
} else {
return null;
}
}
});})(c__15159__auto___19841,ch))
;
return ((function (switch__15081__auto__,c__15159__auto___19841,ch){
return (function() {
var pupa$core$state_machine__15082__auto__ = null;
var pupa$core$state_machine__15082__auto____0 = (function (){
var statearr_19836 = [null,null,null,null,null,null,null];
(statearr_19836[(0)] = pupa$core$state_machine__15082__auto__);

(statearr_19836[(1)] = (1));

return statearr_19836;
});
var pupa$core$state_machine__15082__auto____1 = (function (state_19831){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_19831);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e19837){if((e19837 instanceof Object)){
var ex__15085__auto__ = e19837;
var statearr_19838_19842 = state_19831;
(statearr_19838_19842[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19831);

return cljs.core.constant$keyword$recur;
} else {
throw e19837;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__19843 = state_19831;
state_19831 = G__19843;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
pupa$core$state_machine__15082__auto__ = function(state_19831){
switch(arguments.length){
case 0:
return pupa$core$state_machine__15082__auto____0.call(this);
case 1:
return pupa$core$state_machine__15082__auto____1.call(this,state_19831);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pupa$core$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = pupa$core$state_machine__15082__auto____0;
pupa$core$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = pupa$core$state_machine__15082__auto____1;
return pupa$core$state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto___19841,ch))
})();
var state__15161__auto__ = (function (){var statearr_19839 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_19839[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto___19841);

return statearr_19839;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto___19841,ch))
);


return ch;
});

pupa.core.chan.cljs$lang$maxFixedArity = 1;
pupa.core.api_url = "http://pupa-szczyp.rhcloud.com";
pupa.core.post_BANG_ = (function pupa$core$post_BANG_(path,params){
var ch = pupa.core.chan.cljs$core$IFn$_invoke$arity$0();
ajax.core.ajax_request(new cljs.core.PersistentArrayMap(null, 6, [cljs.core.constant$keyword$uri,[cljs.core.str(pupa.core.api_url),cljs.core.str(path)].join(''),cljs.core.constant$keyword$method,cljs.core.constant$keyword$post,cljs.core.constant$keyword$format,ajax.core.transit_request_format.cljs$core$IFn$_invoke$arity$0(),cljs.core.constant$keyword$response_DASH_format,ajax.core.transit_response_format.cljs$core$IFn$_invoke$arity$0(),cljs.core.constant$keyword$params,params,cljs.core.constant$keyword$handler,((function (ch){
return (function (p1__19844_SHARP_){
var c__15159__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto__,ch){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto__,ch){
return (function (state_19864){
var state_val_19865 = (state_19864[(1)]);
if((state_val_19865 === (1))){
var inst_19859 = cljs.core.second(p1__19844_SHARP_);
var inst_19860 = cljs.core.vec(inst_19859);
var state_19864__$1 = state_19864;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_19864__$1,(2),ch,inst_19860);
} else {
if((state_val_19865 === (2))){
var inst_19862 = (state_19864[(2)]);
var state_19864__$1 = state_19864;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19864__$1,inst_19862);
} else {
return null;
}
}
});})(c__15159__auto__,ch))
;
return ((function (switch__15081__auto__,c__15159__auto__,ch){
return (function() {
var pupa$core$post_BANG__$_state_machine__15082__auto__ = null;
var pupa$core$post_BANG__$_state_machine__15082__auto____0 = (function (){
var statearr_19869 = [null,null,null,null,null,null,null];
(statearr_19869[(0)] = pupa$core$post_BANG__$_state_machine__15082__auto__);

(statearr_19869[(1)] = (1));

return statearr_19869;
});
var pupa$core$post_BANG__$_state_machine__15082__auto____1 = (function (state_19864){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_19864);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e19870){if((e19870 instanceof Object)){
var ex__15085__auto__ = e19870;
var statearr_19871_19873 = state_19864;
(statearr_19871_19873[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19864);

return cljs.core.constant$keyword$recur;
} else {
throw e19870;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__19874 = state_19864;
state_19864 = G__19874;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
pupa$core$post_BANG__$_state_machine__15082__auto__ = function(state_19864){
switch(arguments.length){
case 0:
return pupa$core$post_BANG__$_state_machine__15082__auto____0.call(this);
case 1:
return pupa$core$post_BANG__$_state_machine__15082__auto____1.call(this,state_19864);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pupa$core$post_BANG__$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = pupa$core$post_BANG__$_state_machine__15082__auto____0;
pupa$core$post_BANG__$_state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = pupa$core$post_BANG__$_state_machine__15082__auto____1;
return pupa$core$post_BANG__$_state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto__,ch))
})();
var state__15161__auto__ = (function (){var statearr_19872 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_19872[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto__);

return statearr_19872;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto__,ch))
);

return c__15159__auto__;
});})(ch))
], null));

return ch;
});
pupa.core.term = (function (){var G__19877 = desmo.core.state;
var G__19878 = ((function (G__19877){
return (function (p__19879){
var vec__19880 = p__19879;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19880,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19880,(1),null);
var G__19881 = desmo.core.with_ch;
var G__19882 = ((function (G__19881,vec__19880,k,v,G__19877){
return (function (send_BANG_){
return ossicone.core.mdo.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([desmo.core.on(cljs.core.constant$keyword$set_DASH_term,((function (G__19881,vec__19880,k,v,G__19877){
return (function (_,v__$1){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v__$1], null);
});})(G__19881,vec__19880,k,v,G__19877))
),(function (){var G__19883 = (function (){var id = cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str(k)].join(''),(1));
var l = clojure.string.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(clojure.string.capitalize,clojure.string.split.cljs$core$IFn$_invoke$arity$2(id,"/")));
var placeholder = cljs.core.constant$keyword$placeholder.cljs$core$IFn$_invoke$arity$1((function (){var G__19884 = pupa.core.search_keys;
return (k.cljs$core$IFn$_invoke$arity$1 ? k.cljs$core$IFn$_invoke$arity$1(G__19884) : k.call(null,G__19884));
})());
return desmo.dom.li.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$class,"term",desmo.dom.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$for,id,l], 0)),desmo.dom.input.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$name,id,cljs.core.constant$keyword$placeholder,placeholder,cljs.core.constant$keyword$value,v,cljs.core.constant$keyword$on_DASH_change,((function (id,l,placeholder,G__19881,vec__19880,k,v,G__19877){
return (function (p1__19875_SHARP_){
var G__19885 = cljs.core.constant$keyword$set_DASH_term;
var G__19886 = pupa.core.js_val(p1__19875_SHARP_);
return (send_BANG_.cljs$core$IFn$_invoke$arity$2 ? send_BANG_.cljs$core$IFn$_invoke$arity$2(G__19885,G__19886) : send_BANG_.call(null,G__19885,G__19886));
});})(id,l,placeholder,G__19881,vec__19880,k,v,G__19877))
,cljs.core.constant$keyword$on_DASH_key_DASH_down,((function (id,l,placeholder,G__19881,vec__19880,k,v,G__19877){
return (function (p1__19876_SHARP_){
var G__19887 = p1__19876_SHARP_.which;
switch (G__19887) {
case (13):
var G__19888_19894 = cljs.core.constant$keyword$set_DASH_term;
var G__19889_19895 = pupa.core.js_val(p1__19876_SHARP_);
(send_BANG_.cljs$core$IFn$_invoke$arity$2 ? send_BANG_.cljs$core$IFn$_invoke$arity$2(G__19888_19894,G__19889_19895) : send_BANG_.call(null,G__19888_19894,G__19889_19895));

var G__19890 = cljs.core.constant$keyword$get_DASH_results;
return (send_BANG_.cljs$core$IFn$_invoke$arity$1 ? send_BANG_.cljs$core$IFn$_invoke$arity$1(G__19890) : send_BANG_.call(null,G__19890));

break;
case (8):
if(cljs.core.empty_QMARK_(pupa.core.js_val(p1__19876_SHARP_))){
var G__19891 = cljs.core.constant$keyword$remove_DASH_term;
var G__19892 = k;
return (send_BANG_.cljs$core$IFn$_invoke$arity$2 ? send_BANG_.cljs$core$IFn$_invoke$arity$2(G__19891,G__19892) : send_BANG_.call(null,G__19891,G__19892));
} else {
return null;
}

break;
default:
return null;

}
});})(id,l,placeholder,G__19881,vec__19880,k,v,G__19877))
], 0))], 0));
})();
return (ossicone.core.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.core.return$.cljs$core$IFn$_invoke$arity$1(G__19883) : ossicone.core.return$.call(null,G__19883));
})()], 0));
});})(G__19881,vec__19880,k,v,G__19877))
;
return (ossicone.core.bind.cljs$core$IFn$_invoke$arity$2 ? ossicone.core.bind.cljs$core$IFn$_invoke$arity$2(G__19881,G__19882) : ossicone.core.bind.call(null,G__19881,G__19882));
});})(G__19877))
;
return (ossicone.core.bind.cljs$core$IFn$_invoke$arity$2 ? ossicone.core.bind.cljs$core$IFn$_invoke$arity$2(G__19877,G__19878) : ossicone.core.bind.call(null,G__19877,G__19878));
})();
pupa.core.terms = (function (){var G__19897 = desmo.core.with_ch;
var G__19898 = ((function (G__19897){
return (function (send_BANG_){
var G__19899 = desmo.core.connect((0),pupa.core.term);
var G__19900 = ((function (G__19899,G__19897){
return (function (terms){
return ossicone.core.mdo.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([desmo.core.on(cljs.core.constant$keyword$add_DASH_term,((function (G__19899,G__19897){
return (function (ts,k){
if(cljs.core.empty_QMARK_(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__19899,G__19897){
return (function (x__13449__auto__){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x__13449__auto__),k);
});})(G__19899,G__19897))
,ts))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,""], null));
} else {
return ts;
}
});})(G__19899,G__19897))
),desmo.core.on(cljs.core.constant$keyword$remove_DASH_term,((function (G__19899,G__19897){
return (function (ts,k){
return cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(((function (G__19899,G__19897){
return (function (x__13449__auto__){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(x__13449__auto__),k);
});})(G__19899,G__19897))
,ts));
});})(G__19899,G__19897))
),(function (){var G__19901 = (function (){var default_value = "Add term...";
return desmo.dom.ul.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$class,"terms",desmo.dom.li.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$class,"term",desmo.dom.label.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$for,"term","Terms"], 0)),desmo.dom.select.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$id,"term",cljs.core.constant$keyword$on_DASH_blur,((function (default_value,G__19899,G__19897){
return (function (p1__19896_SHARP_){
var selected_value = pupa.core.js_val(p1__19896_SHARP_);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_value,default_value)){
var G__19902_19910 = cljs.core.constant$keyword$add_DASH_term;
var G__19903_19911 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(selected_value);
(send_BANG_.cljs$core$IFn$_invoke$arity$2 ? send_BANG_.cljs$core$IFn$_invoke$arity$2(G__19902_19910,G__19903_19911) : send_BANG_.call(null,G__19902_19910,G__19903_19911));
} else {
}

return p1__19896_SHARP_.target.value = default_value;
});})(default_value,G__19899,G__19897))
,desmo.dom.option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([default_value], 0)),(function (){var iter__4964__auto__ = ((function (default_value,G__19899,G__19897){
return (function pupa$core$iter__19904(s__19905){
return (new cljs.core.LazySeq(null,((function (default_value,G__19899,G__19897){
return (function (){
var s__19905__$1 = s__19905;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__19905__$1);
if(temp__4425__auto__){
var s__19905__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__19905__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__19905__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__19907 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__19906 = (0);
while(true){
if((i__19906 < size__4963__auto__)){
var k = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__19906);
var s = cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str(k)].join(''),(1));
cljs.core.chunk_append(b__19907,desmo.dom.option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$value,s,clojure.string.capitalize(clojure.string.replace(s,"/"," "))], 0)));

var G__19912 = (i__19906 + (1));
i__19906 = G__19912;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__19907),pupa$core$iter__19904(cljs.core.chunk_rest(s__19905__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__19907),null);
}
} else {
var k = cljs.core.first(s__19905__$2);
var s = cljs.core.subs.cljs$core$IFn$_invoke$arity$2([cljs.core.str(k)].join(''),(1));
return cljs.core.cons(desmo.dom.option.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$value,s,clojure.string.capitalize(clojure.string.replace(s,"/"," "))], 0)),pupa$core$iter__19904(cljs.core.rest(s__19905__$2)));
}
} else {
return null;
}
break;
}
});})(default_value,G__19899,G__19897))
,null,null));
});})(default_value,G__19899,G__19897))
;
return iter__4964__auto__(cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.keys(pupa.core.search_keys)));
})()], 0))], 0)),terms], 0));
})();
return (ossicone.core.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.core.return$.cljs$core$IFn$_invoke$arity$1(G__19901) : ossicone.core.return$.call(null,G__19901));
})()], 0));
});})(G__19899,G__19897))
;
return (ossicone.core.bind.cljs$core$IFn$_invoke$arity$2 ? ossicone.core.bind.cljs$core$IFn$_invoke$arity$2(G__19899,G__19900) : ossicone.core.bind.call(null,G__19899,G__19900));
});})(G__19897))
;
return (ossicone.core.bind.cljs$core$IFn$_invoke$arity$2 ? ossicone.core.bind.cljs$core$IFn$_invoke$arity$2(G__19897,G__19898) : ossicone.core.bind.call(null,G__19897,G__19898));
})();
pupa.core.scans_root = [cljs.core.str("https://e7dccf9a2c0af1489d4839b7d993a1ef31d5970a.googledrive.com/"),cljs.core.str("host/0ByuC3kzSJZocfngtVkxVaXhoNndjWnIxX3VNT2YyOURiYjVoSkpmc3NYTTJSSUJWWEo0VEk")].join('');
pupa.core.image_path = (function pupa$core$image_path(p__19913){
var map__19915 = p__19913;
var map__19915__$1 = ((cljs.core.seq_QMARK_(map__19915))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19915):map__19915);
var card = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19915__$1,cljs.core.constant$keyword$release_SLASH_card);
var set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19915__$1,cljs.core.constant$keyword$release_SLASH_set);
return [cljs.core.str(pupa.core.scans_root),cljs.core.str("/"),cljs.core.str(cljs.core.constant$keyword$set_SLASH_name.cljs$core$IFn$_invoke$arity$1(set)),cljs.core.str("/"),cljs.core.str(cljs.core.constant$keyword$card_SLASH_image_DASH_name.cljs$core$IFn$_invoke$arity$1(card)),cljs.core.str(".jpg")].join('');
});
pupa.core.results = (function (){var G__19917 = desmo.core.state;
var G__19918 = ((function (G__19917){
return (function (cs){
return ossicone.core.mdo.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var G__19919 = desmo.dom.ul.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$class,"results",cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (G__19917){
return (function (p1__19916_SHARP_){
return desmo.dom.li.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$class,"result",desmo.dom.img.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$src,pupa.core.image_path(p1__19916_SHARP_)], 0))], 0));
});})(G__19917))
,cs)], 0));
return (ossicone.core.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.core.return$.cljs$core$IFn$_invoke$arity$1(G__19919) : ossicone.core.return$.call(null,G__19919));
})()], 0));
});})(G__19917))
;
return (ossicone.core.bind.cljs$core$IFn$_invoke$arity$2 ? ossicone.core.bind.cljs$core$IFn$_invoke$arity$2(G__19917,G__19918) : ossicone.core.bind.call(null,G__19917,G__19918));
})();
pupa.core.empty_search = (function pupa$core$empty_search(){
return new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$id,cljs.core.random_uuid(),cljs.core.constant$keyword$terms,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$results,cljs.core.PersistentVector.EMPTY], null);
});
pupa.core.filter_old_releases = (function pupa$core$filter_old_releases(x__13455__auto__){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,(function (x__13455__auto____$1){
return cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (x__13449__auto__){
return cljs.core.constant$keyword$set_SLASH_release_DASH_date.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$release_SLASH_set.cljs$core$IFn$_invoke$arity$1(x__13449__auto__));
}),cljs.core.second(x__13455__auto____$1)));
})),cljs.core.group_by((function (x__13449__auto__){
return cljs.core.constant$keyword$card_SLASH_name.cljs$core$IFn$_invoke$arity$1(cljs.core.constant$keyword$release_SLASH_card.cljs$core$IFn$_invoke$arity$1(x__13449__auto__));
}),x__13455__auto__));
});
pupa.core.sort_by_set_and_number = (function pupa$core$sort_by_set_and_number(x__13455__auto__){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x__13455__auto____$1){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (x__13455__auto____$2){
var G__19921 = cljs.core.re_find(/[0-9]+/,cljs.core.constant$keyword$release_SLASH_number.cljs$core$IFn$_invoke$arity$1(x__13455__auto____$2));
return parseInt(G__19921);
}),cljs.core.second(x__13455__auto____$1));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (x__13449__auto__){
return cljs.core.constant$keyword$set_SLASH_release_DASH_date.cljs$core$IFn$_invoke$arity$1(cljs.core.first(x__13449__auto__));
}),cljs.core.group_by(cljs.core.constant$keyword$release_SLASH_set,x__13455__auto__))));
});
pupa.core.search_BANG_ = (function pupa$core$search_BANG_(terms){
var params = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$pull,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$release_SLASH_number,cljs.core.constant$keyword$release_SLASH_id,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$release_SLASH_card,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$card_SLASH_name,cljs.core.constant$keyword$card_SLASH_image_DASH_name], null)], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$release_SLASH_set,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$set_SLASH_name,cljs.core.constant$keyword$set_SLASH_release_DASH_date], null)], null)], null)], null),cljs.core.constant$keyword$search,plumbing.core.map_vals(clojure.string.trim,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.val),terms))));
if(cljs.core.empty_QMARK_(cljs.core.constant$keyword$search.cljs$core$IFn$_invoke$arity$1(params))){
return pupa.core.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
} else {
return pupa.core.post_BANG_("/api/search",params);
}
});
pupa.core.search = (function (){var G__19922 = desmo.core.connect(cljs.core.constant$keyword$terms,pupa.core.terms);
var G__19923 = ((function (G__19922){
return (function (terms){
var G__19924 = desmo.core.connect(cljs.core.constant$keyword$results,pupa.core.results);
var G__19925 = ((function (G__19924,G__19922){
return (function (results){
var G__19926 = desmo.core.with_ch;
var G__19927 = ((function (G__19926,G__19924,G__19922){
return (function (send_BANG_){
return ossicone.core.mdo.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([desmo.core.on_BANG_(cljs.core.constant$keyword$get_DASH_results,((function (G__19926,G__19924,G__19922){
return (function (p__19928){
var map__19929 = p__19928;
var map__19929__$1 = ((cljs.core.seq_QMARK_(map__19929))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19929):map__19929);
var terms__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19929__$1,cljs.core.constant$keyword$terms);
var c__15159__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__15159__auto__,map__19929,map__19929__$1,terms__$1,G__19926,G__19924,G__19922){
return (function (){
var f__15160__auto__ = (function (){var switch__15081__auto__ = ((function (c__15159__auto__,map__19929,map__19929__$1,terms__$1,G__19926,G__19924,G__19922){
return (function (state_19938){
var state_val_19939 = (state_19938[(1)]);
if((state_val_19939 === (1))){
var inst_19930 = cljs.core.PersistentHashMap.EMPTY;
var inst_19931 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(inst_19930,terms__$1);
var inst_19932 = pupa.core.search_BANG_(inst_19931);
var state_19938__$1 = state_19938;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19938__$1,(2),inst_19932);
} else {
if((state_val_19939 === (2))){
var inst_19934 = (state_19938[(2)]);
var inst_19935 = cljs.core.vec(inst_19934);
var inst_19936 = (function (){var G__19940 = cljs.core.constant$keyword$got_DASH_results;
var G__19941 = inst_19935;
return (send_BANG_.cljs$core$IFn$_invoke$arity$2 ? send_BANG_.cljs$core$IFn$_invoke$arity$2(G__19940,G__19941) : send_BANG_.call(null,G__19940,G__19941));
})();
var state_19938__$1 = state_19938;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19938__$1,inst_19936);
} else {
return null;
}
}
});})(c__15159__auto__,map__19929,map__19929__$1,terms__$1,G__19926,G__19924,G__19922))
;
return ((function (switch__15081__auto__,c__15159__auto__,map__19929,map__19929__$1,terms__$1,G__19926,G__19924,G__19922){
return (function() {
var pupa$core$state_machine__15082__auto__ = null;
var pupa$core$state_machine__15082__auto____0 = (function (){
var statearr_19945 = [null,null,null,null,null,null,null];
(statearr_19945[(0)] = pupa$core$state_machine__15082__auto__);

(statearr_19945[(1)] = (1));

return statearr_19945;
});
var pupa$core$state_machine__15082__auto____1 = (function (state_19938){
while(true){
var ret_value__15083__auto__ = (function (){try{while(true){
var result__15084__auto__ = switch__15081__auto__(state_19938);
if(cljs.core.keyword_identical_QMARK_(result__15084__auto__,cljs.core.constant$keyword$recur)){
continue;
} else {
return result__15084__auto__;
}
break;
}
}catch (e19946){if((e19946 instanceof Object)){
var ex__15085__auto__ = e19946;
var statearr_19947_19950 = state_19938;
(statearr_19947_19950[(5)] = ex__15085__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_19938);

return cljs.core.constant$keyword$recur;
} else {
throw e19946;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__15083__auto__,cljs.core.constant$keyword$recur)){
var G__19951 = state_19938;
state_19938 = G__19951;
continue;
} else {
return ret_value__15083__auto__;
}
break;
}
});
pupa$core$state_machine__15082__auto__ = function(state_19938){
switch(arguments.length){
case 0:
return pupa$core$state_machine__15082__auto____0.call(this);
case 1:
return pupa$core$state_machine__15082__auto____1.call(this,state_19938);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pupa$core$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$0 = pupa$core$state_machine__15082__auto____0;
pupa$core$state_machine__15082__auto__.cljs$core$IFn$_invoke$arity$1 = pupa$core$state_machine__15082__auto____1;
return pupa$core$state_machine__15082__auto__;
})()
;})(switch__15081__auto__,c__15159__auto__,map__19929,map__19929__$1,terms__$1,G__19926,G__19924,G__19922))
})();
var state__15161__auto__ = (function (){var statearr_19948 = (function (){return (f__15160__auto__.cljs$core$IFn$_invoke$arity$0 ? f__15160__auto__.cljs$core$IFn$_invoke$arity$0() : f__15160__auto__.call(null));
})();
(statearr_19948[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__15159__auto__);

return statearr_19948;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__15161__auto__);
});})(c__15159__auto__,map__19929,map__19929__$1,terms__$1,G__19926,G__19924,G__19922))
);

return c__15159__auto__;
});})(G__19926,G__19924,G__19922))
),desmo.core.on(cljs.core.constant$keyword$got_DASH_results,((function (G__19926,G__19924,G__19922){
return (function (s,rs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(s,cljs.core.constant$keyword$results,pupa.core.sort_by_set_and_number(pupa.core.filter_old_releases(rs)));
});})(G__19926,G__19924,G__19922))
),(function (){var G__19949 = desmo.dom.li.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$class,"search",terms,results], 0));
return (ossicone.core.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.core.return$.cljs$core$IFn$_invoke$arity$1(G__19949) : ossicone.core.return$.call(null,G__19949));
})()], 0));
});})(G__19926,G__19924,G__19922))
;
return (ossicone.core.bind.cljs$core$IFn$_invoke$arity$2 ? ossicone.core.bind.cljs$core$IFn$_invoke$arity$2(G__19926,G__19927) : ossicone.core.bind.call(null,G__19926,G__19927));
});})(G__19924,G__19922))
;
return (ossicone.core.bind.cljs$core$IFn$_invoke$arity$2 ? ossicone.core.bind.cljs$core$IFn$_invoke$arity$2(G__19924,G__19925) : ossicone.core.bind.call(null,G__19924,G__19925));
});})(G__19922))
;
return (ossicone.core.bind.cljs$core$IFn$_invoke$arity$2 ? ossicone.core.bind.cljs$core$IFn$_invoke$arity$2(G__19922,G__19923) : ossicone.core.bind.call(null,G__19922,G__19923));
})();
pupa.core.searches = (function (){var G__19953 = desmo.core.connect(cljs.core.constant$keyword$id,pupa.core.search);
var G__19954 = ((function (G__19953){
return (function (searches){
return ossicone.core.mdo.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([(function (){var maintain_searches = ((function (G__19953){
return (function (x__13455__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.not_EQ_,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$terms,cljs.core.PersistentVector.EMPTY,cljs.core.constant$keyword$results,cljs.core.PersistentVector.EMPTY], null)),((function (G__19953){
return (function (p1__19952_SHARP_){
return cljs.core.select_keys(p1__19952_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.constant$keyword$terms,cljs.core.constant$keyword$results], null));
});})(G__19953))
),x__13455__auto__)),pupa.core.empty_search());
});})(G__19953))
;
return ossicone.core.mdo.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([desmo.core.on(cljs.core.constant$keyword$remove_DASH_term,maintain_searches),desmo.core.on(cljs.core.constant$keyword$got_DASH_results,maintain_searches)], 0));
})(),(function (){var G__19955 = desmo.dom.ul.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.constant$keyword$class,"searches",searches], 0));
return (ossicone.core.return$.cljs$core$IFn$_invoke$arity$1 ? ossicone.core.return$.cljs$core$IFn$_invoke$arity$1(G__19955) : ossicone.core.return$.call(null,G__19955));
})()], 0));
});})(G__19953))
;
return (ossicone.core.bind.cljs$core$IFn$_invoke$arity$2 ? ossicone.core.bind.cljs$core$IFn$_invoke$arity$2(G__19953,G__19954) : ossicone.core.bind.call(null,G__19953,G__19954));
})();
pupa.core.main = (function pupa$core$main(){
var app = pupa.core.searches;
var store_key = "app-state";
var root = document.getElementById("app");
var state = (function (){var or__4210__auto__ = desmo.core.load_app(store_key);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [pupa.core.empty_search()], null);
}
})();
return desmo.core.save_app.cljs$core$IFn$_invoke$arity$variadic(desmo.core.render_app(desmo.core.run_app(app,state),root),store_key,cljs.core.array_seq([cljs.core.constant$keyword$debounce,(1000)], 0));
});
document.addEventListener("DOMContentLoaded",pupa.core.main);
