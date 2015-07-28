// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('schema.utils');
goog.require('cljs.core');
goog.require('goog.string.format');
goog.require('goog.string');
/**
 * Like assoc but only assocs when value is truthy.  Copied from plumbing.core so that
 * schema need not depend on plumbing.
 */
schema.utils.assoc_when = (function schema$utils$assoc_when(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
if(cljs.core.even_QMARK_(cljs.core.count(kvs))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"even?","even?",-1827825394,null),cljs.core.list(new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"kvs","kvs",-1695980277,null)))], 0)))].join('')));
}

return cljs.core.into.cljs$core$IFn$_invoke$arity$2((function (){var or__4210__auto__ = m;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})(),(function (){var iter__4964__auto__ = (function schema$utils$iter__25362(s__25363){
return (new cljs.core.LazySeq(null,(function (){
var s__25363__$1 = s__25363;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__25363__$1);
if(temp__4425__auto__){
var s__25363__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25363__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__25363__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__25365 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__25364 = (0);
while(true){
if((i__25364 < size__4963__auto__)){
var vec__25370 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__25364);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25370,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25370,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__25365,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__25372 = (i__25364 + (1));
i__25364 = G__25372;
continue;
} else {
var G__25373 = (i__25364 + (1));
i__25364 = G__25373;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25365),schema$utils$iter__25362(cljs.core.chunk_rest(s__25363__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25365),null);
}
} else {
var vec__25371 = cljs.core.first(s__25363__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25371,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25371,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),schema$utils$iter__25362(cljs.core.rest(s__25363__$2)));
} else {
var G__25374 = cljs.core.rest(s__25363__$2);
s__25363__$1 = G__25374;
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
return iter__4964__auto__(cljs.core.partition.cljs$core$IFn$_invoke$arity$2((2),kvs));
})());
});

schema.utils.assoc_when.cljs$lang$maxFixedArity = (1);

schema.utils.assoc_when.cljs$lang$applyTo = (function (seq25360){
var G__25361 = cljs.core.first(seq25360);
var seq25360__$1 = cljs.core.next(seq25360);
return schema.utils.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__25361,seq25360__$1);
});
schema.utils.type_of = (function schema$utils$type_of(x){
return typeof x;
});
/**
 * What class can we associate the fn schema with? In Clojure use the class of the fn; in
 * cljs just use the fn itself.
 */
schema.utils.fn_schema_bearer = (function schema$utils$fn_schema_bearer(f){
return f;
});
schema.utils.format_STAR_ = (function schema$utils$format_STAR_(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
});

schema.utils.format_STAR_.cljs$lang$maxFixedArity = (1);

schema.utils.format_STAR_.cljs$lang$applyTo = (function (seq25375){
var G__25376 = cljs.core.first(seq25375);
var seq25375__$1 = cljs.core.next(seq25375);
return schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic(G__25376,seq25375__$1);
});
/**
 * Provide a descriptive short name for a value.
 */
schema.utils.value_name = (function schema$utils$value_name(value){
var t = schema.utils.type_of(value);
if((cljs.core.count([cljs.core.str(value)].join('')) < (20))){
return value;
} else {
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1([cljs.core.str("a-"),cljs.core.str(t)].join(''));
}
});
/**
 * Identity version of memoize, because many schemas are records, and records
 * don't cache their hash codes (at least in Clojure 1.5.1).
 * Not thread safe, and doesn't cache falsey values.
 */
schema.utils.memoize_id = (function schema$utils$memoize_id(f){
return cljs.core.memoize(f);
});
schema.utils.record_QMARK_ = (function schema$utils$record_QMARK_(x){
var G__25378 = x;
if(G__25378){
var bit__4884__auto__ = (G__25378.cljs$lang$protocol_mask$partition0$ & (67108864));
if((bit__4884__auto__) || (G__25378.cljs$core$IRecord$)){
return true;
} else {
if((!G__25378.cljs$lang$protocol_mask$partition0$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__25378);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.IRecord,G__25378);
}
});

/**
* @constructor
*/
schema.utils.ValidationError = (function (schema,value,expectation_delay,fail_explanation){
this.schema = schema;
this.value = value;
this.expectation_delay = expectation_delay;
this.fail_explanation = fail_explanation;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.utils.ValidationError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((function (){var G__25379 = this$__$1;
return (schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.validation_error_explain.cljs$core$IFn$_invoke$arity$1(G__25379) : schema.utils.validation_error_explain.call(null,G__25379));
})(),writer,opts);
});

schema.utils.ValidationError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"schema","schema",58529736,null),new cljs.core.Symbol(null,"value","value",1946509744,null),new cljs.core.Symbol(null,"expectation-delay","expectation-delay",-1886214669,null),new cljs.core.Symbol(null,"fail-explanation","fail-explanation",530278923,null)], null);
});

schema.utils.ValidationError.cljs$lang$type = true;

schema.utils.ValidationError.cljs$lang$ctorStr = "schema.utils/ValidationError";

schema.utils.ValidationError.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"schema.utils/ValidationError");
});

schema.utils.__GT_ValidationError = (function schema$utils$__GT_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

schema.utils.validation_error_explain = (function schema$utils$validation_error_explain(err){
return cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,(function (){var G__25381 = err.expectation_delay;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25381) : cljs.core.deref.call(null,G__25381));
})()),(function (){var or__4210__auto__ = err.fail_explanation;
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
return new cljs.core.Symbol(null,"not","not",1044554643,null);
}
})());
});
/**
 * for cljs sake (easier than normalizing imports in macros.clj)
 */
schema.utils.make_ValidationError = (function schema$utils$make_ValidationError(schema__$1,value,expectation_delay,fail_explanation){
return (new schema.utils.ValidationError(schema__$1,value,expectation_delay,fail_explanation));
});

/**
* @constructor
*/
schema.utils.NamedError = (function (name,error){
this.name = name;
this.error = error;
this.cljs$lang$protocol_mask$partition0$ = 2147483648;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
schema.utils.NamedError.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this$,writer,opts){
var self__ = this;
var this$__$1 = this;
return cljs.core._pr_writer((function (){var G__25382 = this$__$1;
return (schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1 ? schema.utils.named_error_explain.cljs$core$IFn$_invoke$arity$1(G__25382) : schema.utils.named_error_explain.call(null,G__25382));
})(),writer,opts);
});

schema.utils.NamedError.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"name","name",-810760592,null),new cljs.core.Symbol(null,"error","error",661562495,null)], null);
});

schema.utils.NamedError.cljs$lang$type = true;

schema.utils.NamedError.cljs$lang$ctorStr = "schema.utils/NamedError";

schema.utils.NamedError.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"schema.utils/NamedError");
});

schema.utils.__GT_NamedError = (function schema$utils$__GT_NamedError(name,error){
return (new schema.utils.NamedError(name,error));
});

schema.utils.named_error_explain = (function schema$utils$named_error_explain(err){
return cljs.core._conj(cljs.core._conj(cljs.core._conj(cljs.core.List.EMPTY,err.name),err.error),new cljs.core.Symbol(null,"named","named",1218138048,null));
});

/**
* @constructor
* @param {*} error
* @param {*} __meta
* @param {*} __extmap
* @param {*} __hash
* @param {*=} __meta 
* @param {*=} __extmap
* @param {number|null} __hash
*/
schema.utils.ErrorContainer = (function (error,__meta,__extmap,__hash){
this.error = error;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2229667594;
this.cljs$lang$protocol_mask$partition1$ = 8192;
})
schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4805__auto__,k__4806__auto__){
var self__ = this;
var this__4805__auto____$1 = this;
return cljs.core._lookup.cljs$core$IFn$_invoke$arity$3(this__4805__auto____$1,k__4806__auto__,null);
});

schema.utils.ErrorContainer.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4807__auto__,k25384,else__4808__auto__){
var self__ = this;
var this__4807__auto____$1 = this;
var G__25386 = (((k25384 instanceof cljs.core.Keyword))?k25384.fqn:null);
switch (G__25386) {
case "error":
return self__.error;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k25384,else__4808__auto__);

}
});

schema.utils.ErrorContainer.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4819__auto__,writer__4820__auto__,opts__4821__auto__){
var self__ = this;
var this__4819__auto____$1 = this;
var pr_pair__4822__auto__ = ((function (this__4819__auto____$1){
return (function (keyval__4823__auto__){
return cljs.core.pr_sequential_writer(writer__4820__auto__,cljs.core.pr_writer,""," ","",opts__4821__auto__,keyval__4823__auto__);
});})(this__4819__auto____$1))
;
return cljs.core.pr_sequential_writer(writer__4820__auto__,pr_pair__4822__auto__,"#schema.utils.ErrorContainer{",", ","}",opts__4821__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$error,self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4803__auto__){
var self__ = this;
var this__4803__auto____$1 = this;
return self__.__meta;
});

schema.utils.ErrorContainer.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4799__auto__){
var self__ = this;
var this__4799__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4809__auto__){
var self__ = this;
var this__4809__auto____$1 = this;
return (1 + cljs.core.count(self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4800__auto__){
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

schema.utils.ErrorContainer.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this__4801__auto__,other__4802__auto__){
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

schema.utils.ErrorContainer.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4814__auto__,k__4815__auto__){
var self__ = this;
var this__4814__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [cljs.core.constant$keyword$error,null], null), null),k__4815__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4814__auto____$1),self__.__meta),k__4815__auto__);
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4815__auto__)),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4812__auto__,k__4813__auto__,G__25383){
var self__ = this;
var this__4812__auto____$1 = this;
var pred__25387 = cljs.core.keyword_identical_QMARK_;
var expr__25388 = k__4813__auto__;
if(cljs.core.truth_((function (){var G__25390 = cljs.core.constant$keyword$error;
var G__25391 = expr__25388;
return (pred__25387.cljs$core$IFn$_invoke$arity$2 ? pred__25387.cljs$core$IFn$_invoke$arity$2(G__25390,G__25391) : pred__25387.call(null,G__25390,G__25391));
})())){
return (new schema.utils.ErrorContainer(G__25383,self__.__meta,self__.__extmap,null));
} else {
return (new schema.utils.ErrorContainer(self__.error,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4813__auto__,G__25383),null));
}
});

schema.utils.ErrorContainer.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4817__auto__){
var self__ = this;
var this__4817__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[cljs.core.constant$keyword$error,self__.error],null))], null),self__.__extmap));
});

schema.utils.ErrorContainer.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4804__auto__,G__25383){
var self__ = this;
var this__4804__auto____$1 = this;
return (new schema.utils.ErrorContainer(self__.error,G__25383,self__.__extmap,self__.__hash));
});

schema.utils.ErrorContainer.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4810__auto__,entry__4811__auto__){
var self__ = this;
var this__4810__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4811__auto__)){
return cljs.core._assoc(this__4810__auto____$1,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4811__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4811__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4810__auto____$1,entry__4811__auto__);
}
});

schema.utils.ErrorContainer.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"error","error",661562495,null)], null);
});

schema.utils.ErrorContainer.cljs$lang$type = true;

schema.utils.ErrorContainer.cljs$lang$ctorPrSeq = (function (this__4839__auto__){
return cljs.core._conj(cljs.core.List.EMPTY,"schema.utils/ErrorContainer");
});

schema.utils.ErrorContainer.cljs$lang$ctorPrWriter = (function (this__4839__auto__,writer__4840__auto__){
return cljs.core._write(writer__4840__auto__,"schema.utils/ErrorContainer");
});

schema.utils.__GT_ErrorContainer = (function schema$utils$__GT_ErrorContainer(error){
return (new schema.utils.ErrorContainer(error,null,null,null));
});

schema.utils.map__GT_ErrorContainer = (function schema$utils$map__GT_ErrorContainer(G__25385){
return (new schema.utils.ErrorContainer(cljs.core.constant$keyword$error.cljs$core$IFn$_invoke$arity$1(G__25385),null,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__25385,cljs.core.constant$keyword$error),null));
});

/**
 * Distinguish a value (must be non-nil) as an error.
 */
schema.utils.error = (function schema$utils$error(x){
if(cljs.core.truth_(x)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([new cljs.core.Symbol(null,"x","x",-555367584,null)], 0)))].join('')));
}

return schema.utils.__GT_ErrorContainer(x);
});
schema.utils.error_QMARK_ = (function schema$utils$error_QMARK_(x){
return (x instanceof schema.utils.ErrorContainer);
});
schema.utils.error_val = (function schema$utils$error_val(x){
if(cljs.core.truth_(schema.utils.error_QMARK_(x))){
return x.error;
} else {
return null;
}
});
/**
 * If maybe-error is an error, wrap the inner value in a NamedError; otherwise, return as-is
 */
schema.utils.wrap_error_name = (function schema$utils$wrap_error_name(name,maybe_error){
var temp__4423__auto__ = schema.utils.error_val(maybe_error);
if(cljs.core.truth_(temp__4423__auto__)){
var e = temp__4423__auto__;
return schema.utils.error((new schema.utils.NamedError(name,e)));
} else {
return maybe_error;
}
});
/**
 * Build up a result by conjing values, producing an error if at least one
 * sub-value returns an error.
 */
schema.utils.result_builder = (function schema$utils$result_builder(lift_to_error){
return (function schema$utils$result_builder_$_conjer(m,e){
var temp__4423__auto__ = schema.utils.error_val(e);
if(cljs.core.truth_(temp__4423__auto__)){
var err = temp__4423__auto__;
return schema.utils.error(cljs.core.conj.cljs$core$IFn$_invoke$arity$2((function (){var or__4210__auto__ = schema.utils.error_val(m);
if(cljs.core.truth_(or__4210__auto__)){
return or__4210__auto__;
} else {
var G__25396 = m;
return (lift_to_error.cljs$core$IFn$_invoke$arity$1 ? lift_to_error.cljs$core$IFn$_invoke$arity$1(G__25396) : lift_to_error.call(null,G__25396));
}
})(),err));
} else {
var temp__4423__auto____$1 = schema.utils.error_val(m);
if(cljs.core.truth_(temp__4423__auto____$1)){
var merr = temp__4423__auto____$1;
return schema.utils.error(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(merr,null));
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(m,e);
}
}
});
});
schema.utils.declare_class_schema_BANG_ = (function schema$utils$declare_class_schema_BANG_(klass,schema__$1){
return (klass["schema$utils$schema"] = schema__$1);
});

schema.utils.class_schema = (function schema$utils$class_schema(klass){
return (klass["schema$utils$schema"]);
});

schema.utils.PSimpleCell = (function (){var obj25398 = {};
return obj25398;
})();

schema.utils.get_cell = (function schema$utils$get_cell(this$){
if((function (){var and__4198__auto__ = this$;
if(and__4198__auto__){
return this$.schema$utils$PSimpleCell$get_cell$arity$1;
} else {
return and__4198__auto__;
}
})()){
return this$.schema$utils$PSimpleCell$get_cell$arity$1(this$);
} else {
var x__4846__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4210__auto__ = (schema.utils.get_cell[(function (){var G__25402 = x__4846__auto__;
return goog.typeOf(G__25402);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (schema.utils.get_cell["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("PSimpleCell.get_cell",this$);
}
}
})().call(null,this$);
}
});

schema.utils.set_cell = (function schema$utils$set_cell(this$,x){
if((function (){var and__4198__auto__ = this$;
if(and__4198__auto__){
return this$.schema$utils$PSimpleCell$set_cell$arity$2;
} else {
return and__4198__auto__;
}
})()){
return this$.schema$utils$PSimpleCell$set_cell$arity$2(this$,x);
} else {
var x__4846__auto__ = (((this$ == null))?null:this$);
return (function (){var or__4210__auto__ = (schema.utils.set_cell[(function (){var G__25406 = x__4846__auto__;
return goog.typeOf(G__25406);
})()]);
if(or__4210__auto__){
return or__4210__auto__;
} else {
var or__4210__auto____$1 = (schema.utils.set_cell["_"]);
if(or__4210__auto____$1){
return or__4210__auto____$1;
} else {
throw cljs.core.missing_protocol("PSimpleCell.set_cell",this$);
}
}
})().call(null,this$,x);
}
});


/**
* @constructor
*/
schema.utils.SimpleVCell = (function (q){
this.q = q;
})
schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$ = true;

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$get_cell$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.q;
});

schema.utils.SimpleVCell.prototype.schema$utils$PSimpleCell$set_cell$arity$2 = (function (this$,x){
var self__ = this;
var this$__$1 = this;
return self__.q = x;
});

schema.utils.SimpleVCell.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"q","q",-1965434072,null)], null);
});

schema.utils.SimpleVCell.cljs$lang$type = true;

schema.utils.SimpleVCell.cljs$lang$ctorStr = "schema.utils/SimpleVCell";

schema.utils.SimpleVCell.cljs$lang$ctorPrWriter = (function (this__4789__auto__,writer__4790__auto__,opt__4791__auto__){
return cljs.core._write(writer__4790__auto__,"schema.utils/SimpleVCell");
});

schema.utils.__GT_SimpleVCell = (function schema$utils$__GT_SimpleVCell(q){
return (new schema.utils.SimpleVCell(q));
});

/**
 * Turn on run-time function validation for functions compiled when
 * s/compile-fn-validation was true -- has no effect for functions compiled
 * when it is false.
 */
schema.utils.use_fn_validation = (new schema.utils.SimpleVCell(false));
schema.utils.use_fn_validation.get_cell = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema.utils.get_cell,schema.utils.use_fn_validation);

schema.utils.use_fn_validation.set_cell = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(schema.utils.set_cell,schema.utils.use_fn_validation);
