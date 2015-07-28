// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('plumbing.fnk.schema');
goog.require('cljs.core');
goog.require('schema.core');
goog.require('schema.utils');
plumbing.fnk.schema.Schema = cljs.core.with_meta(schema.core.__GT_Protocol(schema.core.Schema),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$proto_DASH_sym,new cljs.core.Symbol("s","Schema","s/Schema",-1305723789,null),cljs.core.constant$keyword$proto_DASH_pred,(function (p1__11558__11559__auto__){
var G__25409 = p1__11558__11559__auto__;
if(G__25409){
var bit__4884__auto__ = null;
if(cljs.core.truth_((function (){var or__4210__auto__ = bit__4884__auto__;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return G__25409.schema$core$Schema$;
}
})())){
return true;
} else {
if((!G__25409.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__25409);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(schema.core.Schema,G__25409);
}
})], null));
plumbing.fnk.schema.InputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.eq(schema.core.Keyword),schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.OutputSchema = plumbing.fnk.schema.Schema;
plumbing.fnk.schema.IOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.OutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
plumbing.fnk.schema.GraphInputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.either.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([schema.core.OptionalKey,schema.core.Keyword], 0)),plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.MapOutputSchema = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,plumbing.fnk.schema.Schema], true, false);
plumbing.fnk.schema.GraphIOSchemata = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphInputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null);
/**
 * Like (assert (distinct? things)) but with a more helpful error message.
 */
plumbing.fnk.schema.assert_distinct = (function plumbing$fnk$schema$assert_distinct(things){
var repeated_things = cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__25410_SHARP_){
return (cljs.core.val(p1__25410_SHARP_) > (1));
}),cljs.core.frequencies(things)));
if(cljs.core.empty_QMARK_(repeated_things)){
return null;
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Got repeated items (expected distinct): %s",cljs.core.array_seq([repeated_things], 0))));
}
});
/**
 * Like (get m k), but throws if k is not present in m.
 */
plumbing.fnk.schema.safe_get = (function plumbing$fnk$schema$safe_get(m,k,key_path){
if(cljs.core.map_QMARK_(m)){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Expected a map at key-path %s, got type %s",cljs.core.array_seq([key_path,schema.utils.type_of(m)], 0))));
}

var vec__25412 = cljs.core.find(m,k);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25412,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25412,(1),null);
var p = vec__25412;
if(cljs.core.truth_(p)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.keys(m)], 0)),new cljs.core.PersistentArrayMap(null, 3, [cljs.core.constant$keyword$error,cljs.core.constant$keyword$missing_DASH_key,cljs.core.constant$keyword$key,k,cljs.core.constant$keyword$map,m], null));
}

return v;
});
plumbing.fnk.schema.non_map_union = (function plumbing$fnk$schema$non_map_union(s1,s2){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,s2)){
return s1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s1,schema.core.Any)){
return s2;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(s2,schema.core.Any)){
return s1;
} else {
return schema.core.both.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([s1,s2], 0));

}
}
}
});
/**
 * Return a difference of schmas s1 and s2, where one is not a map.
 * Punt for now, assuming s2 always satisfies s1.
 */
plumbing.fnk.schema.non_map_diff = (function plumbing$fnk$schema$non_map_diff(s1,s2){
return null;
});
plumbing.fnk.schema.map_schema_QMARK_ = (function plumbing$fnk$schema$map_schema_QMARK_(m){
return ((m instanceof cljs.core.PersistentArrayMap)) || ((m instanceof cljs.core.PersistentHashMap));
});
var ufv___25422 = schema.utils.use_fn_validation;
var output_schema25413_25423 = schema.core.maybe(schema.core.pair(schema.core.Keyword,"k",schema.core.Bool,"optional?"));
var input_schema25414_25424 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"k","k",-505765866,null))], null);
var input_checker25415_25425 = schema.core.checker(input_schema25414_25424);
var output_checker25416_25426 = schema.core.checker(output_schema25413_25423);
/**
 * Inputs: [k]
 * Returns: (s/maybe (s/pair s/Keyword "k" s/Bool "optional?"))
 * 
 * Given a possibly-unevaluated schema map key form, unpack an explicit keyword
 * and optional? flag, or return nil for a non-explicit key
 */
plumbing.fnk.schema.unwrap_schema_form_key = ((function (ufv___25422,output_schema25413_25423,input_schema25414_25424,input_checker25415_25425,output_checker25416_25426){
return (function plumbing$fnk$schema$unwrap_schema_form_key(G__25417){
var validate__11150__auto__ = ufv___25422.get_cell();
if(cljs.core.truth_(validate__11150__auto__)){
var args__11151__auto___25427 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25417], null);
var temp__4425__auto___25428 = (function (){var G__25420 = args__11151__auto___25427;
return (input_checker25415_25425.cljs$core$IFn$_invoke$arity$1 ? input_checker25415_25425.cljs$core$IFn$_invoke$arity$1(G__25420) : input_checker25415_25425.call(null,G__25420));
})();
if(cljs.core.truth_(temp__4425__auto___25428)){
var error__11152__auto___25429 = temp__4425__auto___25428;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__11152__auto___25429], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,input_schema25414_25424,cljs.core.constant$keyword$value,args__11151__auto___25427,cljs.core.constant$keyword$error,error__11152__auto___25429], null));
} else {
}
} else {
}

var o__11153__auto__ = (function (){var k = G__25417;
while(true){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.explicit_schema_key(k),schema.core.required_key_QMARK_(k)], null);
} else {
if((cljs.core.sequential_QMARK_(k)) && (!(cljs.core.vector_QMARK_(k))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(k),(2))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(k),new cljs.core.Symbol("schema.core","optional-key","schema.core/optional-key",-170069547,null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.second(k),false], null);
} else {
return null;
}
}
break;
}
})();
if(cljs.core.truth_(validate__11150__auto__)){
var temp__4425__auto___25430 = (function (){var G__25421 = o__11153__auto__;
return (output_checker25416_25426.cljs$core$IFn$_invoke$arity$1 ? output_checker25416_25426.cljs$core$IFn$_invoke$arity$1(G__25421) : output_checker25416_25426.call(null,G__25421));
})();
if(cljs.core.truth_(temp__4425__auto___25430)){
var error__11152__auto___25431 = temp__4425__auto___25430;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"unwrap-schema-form-key","unwrap-schema-form-key",-300088791,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__11152__auto___25431], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,output_schema25413_25423,cljs.core.constant$keyword$value,o__11153__auto__,cljs.core.constant$keyword$error,error__11152__auto___25431], null));
} else {
}
} else {
}

return o__11153__auto__;
});})(ufv___25422,output_schema25413_25423,input_schema25414_25424,input_checker25415_25425,output_checker25416_25426))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.unwrap_schema_form_key),schema.core.make_fn_schema(output_schema25413_25423,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25414_25424], null)));
var ufv___25441 = schema.utils.use_fn_validation;
var output_schema25432_25442 = new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false);
var input_schema25433_25443 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Any,new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker25434_25444 = schema.core.checker(input_schema25433_25443);
var output_checker25435_25445 = schema.core.checker(output_schema25432_25442);
/**
 * Inputs: [s]
 * Returns: {s/Keyword s/Bool}
 * 
 * Given a possibly-unevaluated map schema, return a map from bare keyword to true
 * (for required) or false (for optional)
 */
plumbing.fnk.schema.explicit_schema_key_map = ((function (ufv___25441,output_schema25432_25442,input_schema25433_25443,input_checker25434_25444,output_checker25435_25445){
return (function plumbing$fnk$schema$explicit_schema_key_map(G__25436){
var validate__11150__auto__ = ufv___25441.get_cell();
if(cljs.core.truth_(validate__11150__auto__)){
var args__11151__auto___25446 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25436], null);
var temp__4425__auto___25447 = (function (){var G__25439 = args__11151__auto___25446;
return (input_checker25434_25444.cljs$core$IFn$_invoke$arity$1 ? input_checker25434_25444.cljs$core$IFn$_invoke$arity$1(G__25439) : input_checker25434_25444.call(null,G__25439));
})();
if(cljs.core.truth_(temp__4425__auto___25447)){
var error__11152__auto___25448 = temp__4425__auto___25447;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__11152__auto___25448], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,input_schema25433_25443,cljs.core.constant$keyword$value,args__11151__auto___25446,cljs.core.constant$keyword$error,error__11152__auto___25448], null));
} else {
}
} else {
}

var o__11153__auto__ = (function (){var s = G__25436;
while(true){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(plumbing.fnk.schema.unwrap_schema_form_key,cljs.core.keys(s)));
break;
}
})();
if(cljs.core.truth_(validate__11150__auto__)){
var temp__4425__auto___25449 = (function (){var G__25440 = o__11153__auto__;
return (output_checker25435_25445.cljs$core$IFn$_invoke$arity$1 ? output_checker25435_25445.cljs$core$IFn$_invoke$arity$1(G__25440) : output_checker25435_25445.call(null,G__25440));
})();
if(cljs.core.truth_(temp__4425__auto___25449)){
var error__11152__auto___25450 = temp__4425__auto___25449;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"explicit-schema-key-map","explicit-schema-key-map",1668953963,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__11152__auto___25450], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,output_schema25432_25442,cljs.core.constant$keyword$value,o__11153__auto__,cljs.core.constant$keyword$error,error__11152__auto___25450], null));
} else {
}
} else {
}

return o__11153__auto__;
});})(ufv___25441,output_schema25432_25442,input_schema25433_25443,input_checker25434_25444,output_checker25435_25445))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.explicit_schema_key_map),schema.core.make_fn_schema(output_schema25432_25442,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25433_25443], null)));
var ufv___25460 = schema.utils.use_fn_validation;
var output_schema25451_25461 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"required","required",-846788763,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"optional","optional",-600484260,null))], null);
var input_schema25452_25462 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(new cljs.core.PersistentArrayMap.fromArray([schema.core.Keyword,schema.core.Bool], true, false),new cljs.core.Symbol(null,"s","s",-948495851,null))], null);
var input_checker25453_25463 = schema.core.checker(input_schema25452_25462);
var output_checker25454_25464 = schema.core.checker(output_schema25451_25461);
/**
 * Inputs: [s :- {s/Keyword s/Bool}]
 * Returns: [(s/one [s/Keyword] (quote required)) (s/one [s/Keyword] (quote optional))]
 * 
 * Given output of explicit-schema-key-map, split into seq [req opt].
 */
plumbing.fnk.schema.split_schema_keys = ((function (ufv___25460,output_schema25451_25461,input_schema25452_25462,input_checker25453_25463,output_checker25454_25464){
return (function plumbing$fnk$schema$split_schema_keys(G__25455){
var validate__11150__auto__ = ufv___25460.get_cell();
if(cljs.core.truth_(validate__11150__auto__)){
var args__11151__auto___25465 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25455], null);
var temp__4425__auto___25466 = (function (){var G__25458 = args__11151__auto___25465;
return (input_checker25453_25463.cljs$core$IFn$_invoke$arity$1 ? input_checker25453_25463.cljs$core$IFn$_invoke$arity$1(G__25458) : input_checker25453_25463.call(null,G__25458));
})();
if(cljs.core.truth_(temp__4425__auto___25466)){
var error__11152__auto___25467 = temp__4425__auto___25466;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__11152__auto___25467], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,input_schema25452_25462,cljs.core.constant$keyword$value,args__11151__auto___25465,cljs.core.constant$keyword$error,error__11152__auto___25467], null));
} else {
}
} else {
}

var o__11153__auto__ = (function (){var s = G__25455;
while(true){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,cljs.core.key),cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(cljs.core.filter,cljs.core.remove).call(null,cljs.core.val,s));
break;
}
})();
if(cljs.core.truth_(validate__11150__auto__)){
var temp__4425__auto___25468 = (function (){var G__25459 = o__11153__auto__;
return (output_checker25454_25464.cljs$core$IFn$_invoke$arity$1 ? output_checker25454_25464.cljs$core$IFn$_invoke$arity$1(G__25459) : output_checker25454_25464.call(null,G__25459));
})();
if(cljs.core.truth_(temp__4425__auto___25468)){
var error__11152__auto___25469 = temp__4425__auto___25468;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema-keys","split-schema-keys",933671594,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__11152__auto___25469], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,output_schema25451_25461,cljs.core.constant$keyword$value,o__11153__auto__,cljs.core.constant$keyword$error,error__11152__auto___25469], null));
} else {
}
} else {
}

return o__11153__auto__;
});})(ufv___25460,output_schema25451_25461,input_schema25452_25462,input_checker25453_25463,output_checker25454_25464))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema_keys),schema.core.make_fn_schema(output_schema25451_25461,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25452_25462], null)));
/**
 * Like merge-with, but also projects keys to a smaller space and merges them similar to the
 * values.
 */
plumbing.fnk.schema.merge_on_with = (function plumbing$fnk$schema$merge_on_with(){
var argseq__5250__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5250__auto__);
});

plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic = (function (key_project,key_combine,val_combine,maps){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.vals(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,p__25474){
var vec__25475 = p__25474;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25475,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25475,(1),null);
var pk = (function (){var G__25476 = k;
return (key_project.cljs$core$IFn$_invoke$arity$1 ? key_project.cljs$core$IFn$_invoke$arity$1(G__25476) : key_project.call(null,G__25476));
})();
var temp__4423__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,pk);
if(cljs.core.truth_(temp__4423__auto__)){
var vec__25477 = temp__4423__auto__;
var ok = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25477,(0),null);
var ov = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25477,(1),null);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__25478 = ok;
var G__25479 = k;
return (key_combine.cljs$core$IFn$_invoke$arity$2 ? key_combine.cljs$core$IFn$_invoke$arity$2(G__25478,G__25479) : key_combine.call(null,G__25478,G__25479));
})(),(function (){var G__25480 = ov;
var G__25481 = v;
return (val_combine.cljs$core$IFn$_invoke$arity$2 ? val_combine.cljs$core$IFn$_invoke$arity$2(G__25480,G__25481) : val_combine.call(null,G__25480,G__25481));
})()], null));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,pk,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));
}
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,maps))));
});

plumbing.fnk.schema.merge_on_with.cljs$lang$maxFixedArity = (3);

plumbing.fnk.schema.merge_on_with.cljs$lang$applyTo = (function (seq25470){
var G__25471 = cljs.core.first(seq25470);
var seq25470__$1 = cljs.core.next(seq25470);
var G__25472 = cljs.core.first(seq25470__$1);
var seq25470__$2 = cljs.core.next(seq25470__$1);
var G__25473 = cljs.core.first(seq25470__$2);
var seq25470__$3 = cljs.core.next(seq25470__$2);
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(G__25471,G__25472,G__25473,seq25470__$3);
});
var ufv___25495 = schema.utils.use_fn_validation;
var output_schema25483_25496 = plumbing.fnk.schema.InputSchema;
var input_schema25484_25497 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i1","i1",-572470430,null)),schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"i2","i2",850408895,null))], null);
var input_checker25485_25498 = schema.core.checker(input_schema25484_25497);
var output_checker25486_25499 = schema.core.checker(output_schema25483_25496);
/**
 * Inputs: [i1 :- InputSchema i2 :- InputSchema]
 * Returns: InputSchema
 * 
 * Returns a minimal input schema schema that entails satisfaction of both s1 and s2
 */
plumbing.fnk.schema.union_input_schemata = ((function (ufv___25495,output_schema25483_25496,input_schema25484_25497,input_checker25485_25498,output_checker25486_25499){
return (function plumbing$fnk$schema$union_input_schemata(G__25487,G__25488){
var validate__11150__auto__ = ufv___25495.get_cell();
if(cljs.core.truth_(validate__11150__auto__)){
var args__11151__auto___25500 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25487,G__25488], null);
var temp__4425__auto___25501 = (function (){var G__25493 = args__11151__auto___25500;
return (input_checker25485_25498.cljs$core$IFn$_invoke$arity$1 ? input_checker25485_25498.cljs$core$IFn$_invoke$arity$1(G__25493) : input_checker25485_25498.call(null,G__25493));
})();
if(cljs.core.truth_(temp__4425__auto___25501)){
var error__11152__auto___25502 = temp__4425__auto___25501;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__11152__auto___25502], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,input_schema25484_25497,cljs.core.constant$keyword$value,args__11151__auto___25500,cljs.core.constant$keyword$error,error__11152__auto___25502], null));
} else {
}
} else {
}

var o__11153__auto__ = (function (){var i1 = G__25487;
var i2 = G__25488;
while(true){
return plumbing.fnk.schema.merge_on_with.cljs$core$IFn$_invoke$arity$variadic(((function (validate__11150__auto__,ufv___25495,output_schema25483_25496,input_schema25484_25497,input_checker25485_25498,output_checker25486_25499){
return (function (p1__25482_SHARP_){
if(cljs.core.truth_(schema.core.specific_key_QMARK_(p1__25482_SHARP_))){
return schema.core.explicit_schema_key(p1__25482_SHARP_);
} else {
return cljs.core.constant$keyword$extra;
}
});})(validate__11150__auto__,ufv___25495,output_schema25483_25496,input_schema25484_25497,input_checker25485_25498,output_checker25486_25499))
,((function (validate__11150__auto__,ufv___25495,output_schema25483_25496,input_schema25484_25497,input_checker25485_25498,output_checker25486_25499){
return (function (k1,k2){
if(cljs.core.truth_(schema.core.required_key_QMARK_(k1))){
return k1;
} else {
if(cljs.core.truth_(schema.core.required_key_QMARK_(k2))){
return k2;
} else {
if(cljs.core.truth_(schema.core.optional_key_QMARK_(k1))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),new cljs.core.Symbol(null,"k1","k1",-1701777341,null),new cljs.core.Symbol(null,"k2","k2",-1225133949,null))], 0)))].join('')));
}

return k1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k1,k2)){
return k1;
} else {
throw (new Error(schema.utils.format_STAR_("Only one extra schema allowed")));


}
}
}
}
});})(validate__11150__auto__,ufv___25495,output_schema25483_25496,input_schema25484_25497,input_checker25485_25498,output_checker25486_25499))
,((function (validate__11150__auto__,ufv___25495,output_schema25483_25496,input_schema25484_25497,input_checker25485_25498,output_checker25486_25499){
return (function (s1,s2){
if(cljs.core.truth_((function (){var and__4198__auto__ = plumbing.fnk.schema.map_schema_QMARK_(s1);
if(cljs.core.truth_(and__4198__auto__)){
return plumbing.fnk.schema.map_schema_QMARK_(s2);
} else {
return and__4198__auto__;
}
})())){
return plumbing$fnk$schema$union_input_schemata(s1,s2);
} else {
return plumbing.fnk.schema.non_map_union(s1,s2);
}
});})(validate__11150__auto__,ufv___25495,output_schema25483_25496,input_schema25484_25497,input_checker25485_25498,output_checker25486_25499))
,cljs.core.array_seq([i1,i2], 0));
break;
}
})();
if(cljs.core.truth_(validate__11150__auto__)){
var temp__4425__auto___25503 = (function (){var G__25494 = o__11153__auto__;
return (output_checker25486_25499.cljs$core$IFn$_invoke$arity$1 ? output_checker25486_25499.cljs$core$IFn$_invoke$arity$1(G__25494) : output_checker25486_25499.call(null,G__25494));
})();
if(cljs.core.truth_(temp__4425__auto___25503)){
var error__11152__auto___25504 = temp__4425__auto___25503;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"union-input-schemata","union-input-schemata",-1338811970,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__11152__auto___25504], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,output_schema25483_25496,cljs.core.constant$keyword$value,o__11153__auto__,cljs.core.constant$keyword$error,error__11152__auto___25504], null));
} else {
}
} else {
}

return o__11153__auto__;
});})(ufv___25495,output_schema25483_25496,input_schema25484_25497,input_checker25485_25498,output_checker25486_25499))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.union_input_schemata),schema.core.make_fn_schema(output_schema25483_25496,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25484_25497], null)));
var ufv___25514 = schema.utils.use_fn_validation;
var output_schema25505_25515 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null);
var input_schema25506_25516 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input-schema","input-schema",1373647181,null))], null);
var input_checker25507_25517 = schema.core.checker(input_schema25506_25516);
var output_checker25508_25518 = schema.core.checker(output_schema25505_25515);
/**
 * Inputs: [input-schema :- InputSchema]
 * Returns: [s/Keyword]
 * 
 * Which top-level keys are required (i.e., non-false) by this input schema.
 */
plumbing.fnk.schema.required_toplevel_keys = ((function (ufv___25514,output_schema25505_25515,input_schema25506_25516,input_checker25507_25517,output_checker25508_25518){
return (function plumbing$fnk$schema$required_toplevel_keys(G__25509){
var validate__11150__auto__ = ufv___25514.get_cell();
if(cljs.core.truth_(validate__11150__auto__)){
var args__11151__auto___25519 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25509], null);
var temp__4425__auto___25520 = (function (){var G__25512 = args__11151__auto___25519;
return (input_checker25507_25517.cljs$core$IFn$_invoke$arity$1 ? input_checker25507_25517.cljs$core$IFn$_invoke$arity$1(G__25512) : input_checker25507_25517.call(null,G__25512));
})();
if(cljs.core.truth_(temp__4425__auto___25520)){
var error__11152__auto___25521 = temp__4425__auto___25520;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__11152__auto___25521], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,input_schema25506_25516,cljs.core.constant$keyword$value,args__11151__auto___25519,cljs.core.constant$keyword$error,error__11152__auto___25521], null));
} else {
}
} else {
}

var o__11153__auto__ = (function (){var input_schema = G__25509;
while(true){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2(((function (validate__11150__auto__,ufv___25514,output_schema25505_25515,input_schema25506_25516,input_checker25507_25517,output_checker25508_25518){
return (function (k){
if(cljs.core.truth_(schema.core.required_key_QMARK_(k))){
return schema.core.explicit_schema_key(k);
} else {
return null;
}
});})(validate__11150__auto__,ufv___25514,output_schema25505_25515,input_schema25506_25516,input_checker25507_25517,output_checker25508_25518))
,cljs.core.keys(input_schema));
break;
}
})();
if(cljs.core.truth_(validate__11150__auto__)){
var temp__4425__auto___25522 = (function (){var G__25513 = o__11153__auto__;
return (output_checker25508_25518.cljs$core$IFn$_invoke$arity$1 ? output_checker25508_25518.cljs$core$IFn$_invoke$arity$1(G__25513) : output_checker25508_25518.call(null,G__25513));
})();
if(cljs.core.truth_(temp__4425__auto___25522)){
var error__11152__auto___25523 = temp__4425__auto___25522;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"required-toplevel-keys","required-toplevel-keys",1052167617,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__11152__auto___25523], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,output_schema25505_25515,cljs.core.constant$keyword$value,o__11153__auto__,cljs.core.constant$keyword$error,error__11152__auto___25523], null));
} else {
}
} else {
}

return o__11153__auto__;
});})(ufv___25514,output_schema25505_25515,input_schema25506_25516,input_checker25507_25517,output_checker25508_25518))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.required_toplevel_keys),schema.core.make_fn_schema(output_schema25505_25515,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25506_25516], null)));
/**
 * Guess an output schema for an expr.  Currently just looks for literal map structure and
 * all keyword keys.
 */
plumbing.fnk.schema.guess_expr_output_schema = (function plumbing$fnk$schema$guess_expr_output_schema(expr){
if((cljs.core.map_QMARK_(expr)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,cljs.core.keys(expr)))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4964__auto__ = (function plumbing$fnk$schema$guess_expr_output_schema_$_iter__25538(s__25539){
return (new cljs.core.LazySeq(null,(function (){
var s__25539__$1 = s__25539;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__25539__$1);
if(temp__4425__auto__){
var s__25539__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25539__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__25539__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__25541 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__25540 = (0);
while(true){
if((i__25540 < size__4963__auto__)){
var vec__25546 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__25540);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25546,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25546,(1),null);
cljs.core.chunk_append(b__25541,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema(v)], null));

var G__25548 = (i__25540 + (1));
i__25540 = G__25548;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25541),plumbing$fnk$schema$guess_expr_output_schema_$_iter__25538(cljs.core.chunk_rest(s__25539__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25541),null);
}
} else {
var vec__25547 = cljs.core.first(s__25539__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25547,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25547,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,plumbing$fnk$schema$guess_expr_output_schema(v)], null),plumbing$fnk$schema$guess_expr_output_schema_$_iter__25538(cljs.core.rest(s__25539__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4964__auto__(expr);
})());
} else {
return new cljs.core.Symbol("schema.core","Any","schema.core/Any",-1891898271,null);
}
});
/**
 * Subtract output-schema from input-schema, returning nil if it's possible that an object
 * satisfying the output-schema satisfies the input-schema, or otherwise a description
 * of the part(s) of input-schema not met by output-schema.  Strict about the map structure
 * of output-schema matching input-schema, but loose about everything else (only looks at
 * required keys of output-schema.
 */
plumbing.fnk.schema.schema_diff = (function plumbing$fnk$schema$schema_diff(input_schema,output_schema){
if(cljs.core.not(plumbing.fnk.schema.map_schema_QMARK_(input_schema))){
return plumbing.fnk.schema.non_map_diff(input_schema,output_schema);
} else {
if(cljs.core.not(plumbing.fnk.schema.map_schema_QMARK_(output_schema))){
return schema.utils.error(schema.utils.make_ValidationError(input_schema,output_schema,(new cljs.core.Delay((function (){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,schema.core.explain(output_schema)),new cljs.core.Symbol(null,"map?","map?",-1780568534,null));
}),null)),null));
} else {
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4964__auto__ = (function plumbing$fnk$schema$schema_diff_$_iter__25567(s__25568){
return (new cljs.core.LazySeq(null,(function (){
var s__25568__$1 = s__25568;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__25568__$1);
if(temp__4425__auto__){
var s__25568__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25568__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__25568__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__25570 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__25569 = (0);
while(true){
if((i__25569 < size__4963__auto__)){
var vec__25575 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__25569);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25575,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25575,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if(cljs.core.truth_((function (){var or__4210__auto__ = required_QMARK_;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
cljs.core.chunk_append(b__25570,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null));

var G__25577 = (i__25569 + (1));
i__25569 = G__25577;
continue;
} else {
var G__25578 = (i__25569 + (1));
i__25569 = G__25578;
continue;
}
} else {
var G__25579 = (i__25569 + (1));
i__25569 = G__25579;
continue;
}
} else {
var G__25580 = (i__25569 + (1));
i__25569 = G__25580;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25570),plumbing$fnk$schema$schema_diff_$_iter__25567(cljs.core.chunk_rest(s__25568__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25570),null);
}
} else {
var vec__25576 = cljs.core.first(s__25568__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25576,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25576,(1),null);
if(cljs.core.truth_(schema.core.specific_key_QMARK_(k))){
var required_QMARK_ = schema.core.required_key_QMARK_(k);
var raw_k = schema.core.explicit_schema_key(k);
var present_QMARK_ = cljs.core.contains_QMARK_(output_schema,raw_k);
if(cljs.core.truth_((function (){var or__4210__auto__ = required_QMARK_;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return present_QMARK_;
}
})())){
var fail = ((!(present_QMARK_))?new cljs.core.Symbol(null,"missing-required-key","missing-required-key",709961446,null):plumbing$fnk$schema$schema_diff(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(output_schema,raw_k)));
if(cljs.core.truth_(fail)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,fail], null),plumbing$fnk$schema$schema_diff_$_iter__25567(cljs.core.rest(s__25568__$2)));
} else {
var G__25581 = cljs.core.rest(s__25568__$2);
s__25568__$1 = G__25581;
continue;
}
} else {
var G__25582 = cljs.core.rest(s__25568__$2);
s__25568__$1 = G__25582;
continue;
}
} else {
var G__25583 = cljs.core.rest(s__25568__$2);
s__25568__$1 = G__25583;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4964__auto__(input_schema);
})()));

}
}
});
plumbing.fnk.schema.assert_satisfies_schema = (function plumbing$fnk$schema$assert_satisfies_schema(input_schema,output_schema){
var fails = plumbing.fnk.schema.schema_diff(input_schema,output_schema);
if(cljs.core.truth_(fails)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2([cljs.core.str(fails)].join(''),new cljs.core.PersistentArrayMap(null, 2, [cljs.core.constant$keyword$error,cljs.core.constant$keyword$does_DASH_not_DASH_satisfy_DASH_schema,cljs.core.constant$keyword$failures,fails], null));
} else {
return null;
}
});
var ufv___25610 = schema.utils.use_fn_validation;
var output_schema25584_25611 = schema.core.Any;
var input_schema25585_25612 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.IOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"input","input",-2097503808,null)),schema.core.one(plumbing.fnk.schema.MapOutputSchema,new cljs.core.Symbol(null,"output","output",534662484,null))], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker25586_25613 = schema.core.checker(input_schema25585_25612);
var output_checker25587_25614 = schema.core.checker(output_schema25584_25611);
/**
 * Inputs: [[i2 o2] :- IOSchemata [i1 o1] :- [(s/one InputSchema (quote input)) (s/one MapOutputSchema (quote output))]]
 * 
 * Given pairs of input and output schemata for fnks f1 and f2,
 * return a pair of input and output schemata for #(f2 (merge % (f1 %))).
 * f1's output schema must not contain any optional keys.
 */
plumbing.fnk.schema.compose_schemata = ((function (ufv___25610,output_schema25584_25611,input_schema25585_25612,input_checker25586_25613,output_checker25587_25614){
return (function plumbing$fnk$schema$compose_schemata(G__25588,G__25589){
var validate__11150__auto__ = true;
if(validate__11150__auto__){
var args__11151__auto___25615 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25588,G__25589], null);
var temp__4425__auto___25616 = (function (){var G__25600 = args__11151__auto___25615;
return (input_checker25586_25613.cljs$core$IFn$_invoke$arity$1 ? input_checker25586_25613.cljs$core$IFn$_invoke$arity$1(G__25600) : input_checker25586_25613.call(null,G__25600));
})();
if(cljs.core.truth_(temp__4425__auto___25616)){
var error__11152__auto___25617 = temp__4425__auto___25616;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__11152__auto___25617], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,input_schema25585_25612,cljs.core.constant$keyword$value,args__11151__auto___25615,cljs.core.constant$keyword$error,error__11152__auto___25617], null));
} else {
}
} else {
}

var o__11153__auto__ = (function (){var G__25603 = G__25588;
var vec__25605 = G__25603;
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25605,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25605,(1),null);
var G__25604 = G__25589;
var vec__25606 = G__25604;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25606,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25606,(1),null);
var G__25603__$1 = G__25603;
var G__25604__$1 = G__25604;
while(true){
var vec__25607 = G__25603__$1;
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25607,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25607,(1),null);
var vec__25608 = G__25604__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25608,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25608,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(cljs.core.select_keys(i2__$1,cljs.core.keys(o1__$1)),o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,i2__$1,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.keys(o1__$1),cljs.core.map.cljs$core$IFn$_invoke$arity$2(schema.core.optional_key,cljs.core.keys(o1__$1)))),i1__$1),o2__$1], null);
break;
}
})();
if(validate__11150__auto__){
var temp__4425__auto___25618 = (function (){var G__25609 = o__11153__auto__;
return (output_checker25587_25614.cljs$core$IFn$_invoke$arity$1 ? output_checker25587_25614.cljs$core$IFn$_invoke$arity$1(G__25609) : output_checker25587_25614.call(null,G__25609));
})();
if(cljs.core.truth_(temp__4425__auto___25618)){
var error__11152__auto___25619 = temp__4425__auto___25618;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"compose-schemata","compose-schemata",918607729,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__11152__auto___25619], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,output_schema25584_25611,cljs.core.constant$keyword$value,o__11153__auto__,cljs.core.constant$keyword$error,error__11152__auto___25619], null));
} else {
}
} else {
}

return o__11153__auto__;
});})(ufv___25610,output_schema25584_25611,input_schema25585_25612,input_checker25586_25613,output_checker25587_25614))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.compose_schemata),schema.core.make_fn_schema(output_schema25584_25611,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25585_25612], null)));
plumbing.fnk.schema.schema_key = (function plumbing$fnk$schema$schema_key(m,k){
if(cljs.core.contains_QMARK_(m,k)){
return k;
} else {
if(cljs.core.contains_QMARK_(m,schema.core.optional_key(k))){
return schema.core.optional_key(k);
} else {
return null;

}
}
});
plumbing.fnk.schema.possibly_contains_QMARK_ = (function plumbing$fnk$schema$possibly_contains_QMARK_(m,k){
return cljs.core.boolean$(plumbing.fnk.schema.schema_key(m,k));
});
var ufv___25722 = schema.utils.use_fn_validation;
var output_schema25620_25723 = schema.core.Any;
var input_schema25621_25724 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.InputSchema,new cljs.core.Symbol(null,"s","s",-948495851,null)),schema.core.one(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.Keyword], null),new cljs.core.Symbol(null,"ks","ks",-754231827,null))], null);
var input_checker25622_25725 = schema.core.checker(input_schema25621_25724);
var output_checker25623_25726 = schema.core.checker(output_schema25620_25723);
/**
 * Inputs: [s :- InputSchema ks :- [s/Keyword]]
 * 
 * Return a pair [ks-part non-ks-part], with any extra schema removed.
 */
plumbing.fnk.schema.split_schema = ((function (ufv___25722,output_schema25620_25723,input_schema25621_25724,input_checker25622_25725,output_checker25623_25726){
return (function plumbing$fnk$schema$split_schema(G__25624,G__25625){
var validate__11150__auto__ = ufv___25722.get_cell();
if(cljs.core.truth_(validate__11150__auto__)){
var args__11151__auto___25727 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25624,G__25625], null);
var temp__4425__auto___25728 = (function (){var G__25674 = args__11151__auto___25727;
return (input_checker25622_25725.cljs$core$IFn$_invoke$arity$1 ? input_checker25622_25725.cljs$core$IFn$_invoke$arity$1(G__25674) : input_checker25622_25725.call(null,G__25674));
})();
if(cljs.core.truth_(temp__4425__auto___25728)){
var error__11152__auto___25729 = temp__4425__auto___25728;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__11152__auto___25729], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,input_schema25621_25724,cljs.core.constant$keyword$value,args__11151__auto___25727,cljs.core.constant$keyword$error,error__11152__auto___25729], null));
} else {
}
} else {
}

var o__11153__auto__ = (function (){var s = G__25624;
var ks = G__25625;
while(true){
var ks__$1 = cljs.core.set(ks);
var iter__4964__auto__ = ((function (ks__$1,validate__11150__auto__,ufv___25722,output_schema25620_25723,input_schema25621_25724,input_checker25622_25725,output_checker25623_25726){
return (function plumbing$fnk$schema$split_schema_$_iter__25675(s__25676){
return (new cljs.core.LazySeq(null,((function (ks__$1,validate__11150__auto__,ufv___25722,output_schema25620_25723,input_schema25621_25724,input_checker25622_25725,output_checker25623_25726){
return (function (){
var s__25676__$1 = s__25676;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__25676__$1);
if(temp__4425__auto__){
var s__25676__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25676__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__25676__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__25678 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__25677 = (0);
while(true){
if((i__25677 < size__4963__auto__)){
var in_QMARK_ = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__25677);
cljs.core.chunk_append(b__25678,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4964__auto__ = ((function (i__25677,in_QMARK_,c__4962__auto__,size__4963__auto__,b__25678,s__25676__$2,temp__4425__auto__,ks__$1,validate__11150__auto__,ufv___25722,output_schema25620_25723,input_schema25621_25724,input_checker25622_25725,output_checker25623_25726){
return (function plumbing$fnk$schema$split_schema_$_iter__25675_$_iter__25701(s__25702){
return (new cljs.core.LazySeq(null,((function (i__25677,in_QMARK_,c__4962__auto__,size__4963__auto__,b__25678,s__25676__$2,temp__4425__auto__,ks__$1,validate__11150__auto__,ufv___25722,output_schema25620_25723,input_schema25621_25724,input_checker25622_25725,output_checker25623_25726){
return (function (){
var s__25702__$1 = s__25702;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__25702__$1);
if(temp__4425__auto____$1){
var s__25702__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25702__$2)){
var c__4962__auto____$1 = cljs.core.chunk_first(s__25702__$2);
var size__4963__auto____$1 = cljs.core.count(c__4962__auto____$1);
var b__25704 = cljs.core.chunk_buffer(size__4963__auto____$1);
if((function (){var i__25703 = (0);
while(true){
if((i__25703 < size__4963__auto____$1)){
var vec__25709 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto____$1,i__25703);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25709,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25709,(1),null);
if(cljs.core.truth_((function (){var and__4198__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__4198__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__4198__auto__;
}
})())){
cljs.core.chunk_append(b__25704,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__25730 = (i__25703 + (1));
i__25703 = G__25730;
continue;
} else {
var G__25731 = (i__25703 + (1));
i__25703 = G__25731;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25704),plumbing$fnk$schema$split_schema_$_iter__25675_$_iter__25701(cljs.core.chunk_rest(s__25702__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25704),null);
}
} else {
var vec__25710 = cljs.core.first(s__25702__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25710,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25710,(1),null);
if(cljs.core.truth_((function (){var and__4198__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__4198__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__4198__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__25675_$_iter__25701(cljs.core.rest(s__25702__$2)));
} else {
var G__25732 = cljs.core.rest(s__25702__$2);
s__25702__$1 = G__25732;
continue;
}
}
} else {
return null;
}
break;
}
});})(i__25677,in_QMARK_,c__4962__auto__,size__4963__auto__,b__25678,s__25676__$2,temp__4425__auto__,ks__$1,validate__11150__auto__,ufv___25722,output_schema25620_25723,input_schema25621_25724,input_checker25622_25725,output_checker25623_25726))
,null,null));
});})(i__25677,in_QMARK_,c__4962__auto__,size__4963__auto__,b__25678,s__25676__$2,temp__4425__auto__,ks__$1,validate__11150__auto__,ufv___25722,output_schema25620_25723,input_schema25621_25724,input_checker25622_25725,output_checker25623_25726))
;
return iter__4964__auto__(s);
})()));

var G__25733 = (i__25677 + (1));
i__25677 = G__25733;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25678),plumbing$fnk$schema$split_schema_$_iter__25675(cljs.core.chunk_rest(s__25676__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25678),null);
}
} else {
var in_QMARK_ = cljs.core.first(s__25676__$2);
return cljs.core.cons(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__4964__auto__ = ((function (in_QMARK_,s__25676__$2,temp__4425__auto__,ks__$1,validate__11150__auto__,ufv___25722,output_schema25620_25723,input_schema25621_25724,input_checker25622_25725,output_checker25623_25726){
return (function plumbing$fnk$schema$split_schema_$_iter__25675_$_iter__25711(s__25712){
return (new cljs.core.LazySeq(null,((function (in_QMARK_,s__25676__$2,temp__4425__auto__,ks__$1,validate__11150__auto__,ufv___25722,output_schema25620_25723,input_schema25621_25724,input_checker25622_25725,output_checker25623_25726){
return (function (){
var s__25712__$1 = s__25712;
while(true){
var temp__4425__auto____$1 = cljs.core.seq(s__25712__$1);
if(temp__4425__auto____$1){
var s__25712__$2 = temp__4425__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__25712__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__25712__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__25714 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__25713 = (0);
while(true){
if((i__25713 < size__4963__auto__)){
var vec__25719 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__25713);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25719,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25719,(1),null);
if(cljs.core.truth_((function (){var and__4198__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__4198__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__4198__auto__;
}
})())){
cljs.core.chunk_append(b__25714,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__25734 = (i__25713 + (1));
i__25713 = G__25734;
continue;
} else {
var G__25735 = (i__25713 + (1));
i__25713 = G__25735;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25714),plumbing$fnk$schema$split_schema_$_iter__25675_$_iter__25711(cljs.core.chunk_rest(s__25712__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25714),null);
}
} else {
var vec__25720 = cljs.core.first(s__25712__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25720,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25720,(1),null);
if(cljs.core.truth_((function (){var and__4198__auto__ = schema.core.specific_key_QMARK_(k);
if(cljs.core.truth_(and__4198__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(in_QMARK_,cljs.core.contains_QMARK_(ks__$1,schema.core.explicit_schema_key(k)));
} else {
return and__4198__auto__;
}
})())){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$fnk$schema$split_schema_$_iter__25675_$_iter__25711(cljs.core.rest(s__25712__$2)));
} else {
var G__25736 = cljs.core.rest(s__25712__$2);
s__25712__$1 = G__25736;
continue;
}
}
} else {
return null;
}
break;
}
});})(in_QMARK_,s__25676__$2,temp__4425__auto__,ks__$1,validate__11150__auto__,ufv___25722,output_schema25620_25723,input_schema25621_25724,input_checker25622_25725,output_checker25623_25726))
,null,null));
});})(in_QMARK_,s__25676__$2,temp__4425__auto__,ks__$1,validate__11150__auto__,ufv___25722,output_schema25620_25723,input_schema25621_25724,input_checker25622_25725,output_checker25623_25726))
;
return iter__4964__auto__(s);
})()),plumbing$fnk$schema$split_schema_$_iter__25675(cljs.core.rest(s__25676__$2)));
}
} else {
return null;
}
break;
}
});})(ks__$1,validate__11150__auto__,ufv___25722,output_schema25620_25723,input_schema25621_25724,input_checker25622_25725,output_checker25623_25726))
,null,null));
});})(ks__$1,validate__11150__auto__,ufv___25722,output_schema25620_25723,input_schema25621_25724,input_checker25622_25725,output_checker25623_25726))
;
return iter__4964__auto__(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [true,false], null));
break;
}
})();
if(cljs.core.truth_(validate__11150__auto__)){
var temp__4425__auto___25737 = (function (){var G__25721 = o__11153__auto__;
return (output_checker25623_25726.cljs$core$IFn$_invoke$arity$1 ? output_checker25623_25726.cljs$core$IFn$_invoke$arity$1(G__25721) : output_checker25623_25726.call(null,G__25721));
})();
if(cljs.core.truth_(temp__4425__auto___25737)){
var error__11152__auto___25738 = temp__4425__auto___25737;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"split-schema","split-schema",1859174771,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__11152__auto___25738], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,output_schema25620_25723,cljs.core.constant$keyword$value,o__11153__auto__,cljs.core.constant$keyword$error,error__11152__auto___25738], null));
} else {
}
} else {
}

return o__11153__auto__;
});})(ufv___25722,output_schema25620_25723,input_schema25621_25724,input_checker25622_25725,output_checker25623_25726))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.split_schema),schema.core.make_fn_schema(output_schema25620_25723,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25621_25724], null)));
var ufv___25773 = schema.utils.use_fn_validation;
var output_schema25739_25774 = plumbing.fnk.schema.GraphIOSchemata;
var input_schema25740_25775 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(plumbing.fnk.schema.GraphIOSchemata,new cljs.core.Symbol(null,"arg0","arg0",-1024593414,null)),schema.core.one(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [schema.core.one(schema.core.Keyword,"key"),schema.core.one(plumbing.fnk.schema.IOSchemata,"inner-schemas")], null),new cljs.core.Symbol(null,"arg1","arg1",-1702536411,null))], null);
var input_checker25741_25776 = schema.core.checker(input_schema25740_25775);
var output_checker25742_25777 = schema.core.checker(output_schema25739_25774);
/**
 * Inputs: [[i1 o1] :- GraphIOSchemata [k [i2 o2]] :- [(s/one s/Keyword "key") (s/one IOSchemata "inner-schemas")]]
 * Returns: GraphIOSchemata
 * 
 * Given pairs of input and output schemata for fnks f1 and f2, and a keyword k,
 * return a pair of input and output schemata for #(let [v1 (f1 %)] (assoc v1 k (f2 (merge-disjoint % v1))))
 */
plumbing.fnk.schema.sequence_schemata = ((function (ufv___25773,output_schema25739_25774,input_schema25740_25775,input_checker25741_25776,output_checker25742_25777){
return (function plumbing$fnk$schema$sequence_schemata(G__25743,G__25744){
var validate__11150__auto__ = ufv___25773.get_cell();
if(cljs.core.truth_(validate__11150__auto__)){
var args__11151__auto___25778 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [G__25743,G__25744], null);
var temp__4425__auto___25779 = (function (){var G__25759 = args__11151__auto___25778;
return (input_checker25741_25776.cljs$core$IFn$_invoke$arity$1 ? input_checker25741_25776.cljs$core$IFn$_invoke$arity$1(G__25759) : input_checker25741_25776.call(null,G__25759));
})();
if(cljs.core.truth_(temp__4425__auto___25779)){
var error__11152__auto___25780 = temp__4425__auto___25779;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Input to %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__11152__auto___25780], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,input_schema25740_25775,cljs.core.constant$keyword$value,args__11151__auto___25778,cljs.core.constant$keyword$error,error__11152__auto___25780], null));
} else {
}
} else {
}

var o__11153__auto__ = (function (){var G__25763 = G__25743;
var vec__25765 = G__25763;
var i1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25765,(0),null);
var o1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25765,(1),null);
var G__25764 = G__25744;
var vec__25766 = G__25764;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25766,(0),null);
var vec__25767 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25766,(1),null);
var i2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25767,(0),null);
var o2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25767,(1),null);
var G__25763__$1 = G__25763;
var G__25764__$1 = G__25764;
while(true){
var vec__25768 = G__25763__$1;
var i1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25768,(0),null);
var o1__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25768,(1),null);
var vec__25769 = G__25764__$1;
var k__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25769,(0),null);
var vec__25770 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25769,(1),null);
var i2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25770,(0),null);
var o2__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25770,(1),null);
if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(i1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Duplicate key output (possibly due to a misordered graph) %s for input %s from input %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1),schema.core.explain(i1__$1)], 0))));
}

if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(i2__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a key %s in its inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i2__$1)], 0))));
}

if(cljs.core.not(plumbing.fnk.schema.possibly_contains_QMARK_(o1__$1,k__$1))){
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Node outputs a duplicate key %s given inputs %s",cljs.core.array_seq([k__$1,schema.core.explain(i1__$1)], 0))));
}

var vec__25771 = plumbing.fnk.schema.split_schema(i2__$1,cljs.core.keys(o1__$1));
var used = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25771,(0),null);
var unused = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25771,(1),null);
plumbing.fnk.schema.assert_satisfies_schema(used,o1__$1);

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [plumbing.fnk.schema.union_input_schemata(unused,i1__$1),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(o1__$1,k__$1,o2__$1)], null);
break;
}
})();
if(cljs.core.truth_(validate__11150__auto__)){
var temp__4425__auto___25781 = (function (){var G__25772 = o__11153__auto__;
return (output_checker25742_25777.cljs$core$IFn$_invoke$arity$1 ? output_checker25742_25777.cljs$core$IFn$_invoke$arity$1(G__25772) : output_checker25742_25777.call(null,G__25772));
})();
if(cljs.core.truth_(temp__4425__auto___25781)){
var error__11152__auto___25782 = temp__4425__auto___25781;
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Output of %s does not match schema: %s",cljs.core.array_seq([new cljs.core.Symbol(null,"sequence-schemata","sequence-schemata",-2061205313,null),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([error__11152__auto___25782], 0))], 0)),new cljs.core.PersistentArrayMap(null, 4, [cljs.core.constant$keyword$type,cljs.core.constant$keyword$schema$core_SLASH_error,cljs.core.constant$keyword$schema,output_schema25739_25774,cljs.core.constant$keyword$value,o__11153__auto__,cljs.core.constant$keyword$error,error__11152__auto___25782], null));
} else {
}
} else {
}

return o__11153__auto__;
});})(ufv___25773,output_schema25739_25774,input_schema25740_25775,input_checker25741_25776,output_checker25742_25777))
;

schema.utils.declare_class_schema_BANG_(schema.utils.fn_schema_bearer(plumbing.fnk.schema.sequence_schemata),schema.core.make_fn_schema(output_schema25739_25774,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [input_schema25740_25775], null)));
