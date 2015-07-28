// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('alandipert.kahn');
goog.require('cljs.core');
goog.require('clojure.set');
/**
 * Returns set s with x removed.
 */
alandipert.kahn.without = (function alandipert$kahn$without(s,x){
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(s,cljs.core.PersistentHashSet.fromArray([x], true));
});
/**
 * Returns the pair [element, s'] where s' is set s with element removed.
 */
alandipert.kahn.take_1 = (function alandipert$kahn$take_1(s){
if(!(cljs.core.empty_QMARK_(s))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([cljs.core.list(new cljs.core.Symbol(null,"not","not",1044554643,null),cljs.core.list(new cljs.core.Symbol(null,"empty?","empty?",76408555,null),new cljs.core.Symbol(null,"s","s",-948495851,null)))], 0)))].join('')));
}

var item = cljs.core.first(s);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [item,alandipert.kahn.without(s,item)], null);
});
/**
 * Returns the set of nodes in graph g for which there are no incoming
 * edges, where g is a map of nodes to sets of nodes.
 */
alandipert.kahn.no_incoming = (function alandipert$kahn$no_incoming(g){
var nodes = cljs.core.set(cljs.core.keys(g));
var have_incoming = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.vals(g));
return clojure.set.difference.cljs$core$IFn$_invoke$arity$2(nodes,have_incoming);
});
/**
 * Returns g with empty outgoing edges added for nodes with incoming
 * edges only.  Example: {:a #{:b}} => {:a #{:b}, :b #{}}
 */
alandipert.kahn.normalize = (function alandipert$kahn$normalize(g){
var have_incoming = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.vals(g));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (have_incoming){
return (function (p1__21879_SHARP_,p2__21880_SHARP_){
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__21879_SHARP_,p2__21880_SHARP_))){
return p1__21879_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__21879_SHARP_,p2__21880_SHARP_,cljs.core.PersistentHashSet.EMPTY);
}
});})(have_incoming))
,g,have_incoming);
});
/**
 * Proposes a topological sort for directed graph g using Kahn's
 * algorithm, where g is a map of nodes to sets of nodes. If g is
 * cyclic, returns nil.
 */
alandipert.kahn.kahn_sort = (function alandipert$kahn$kahn_sort(){
var G__21884 = arguments.length;
switch (G__21884) {
case 1:
return alandipert.kahn.kahn_sort.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return alandipert.kahn.kahn_sort.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

alandipert.kahn.kahn_sort.cljs$core$IFn$_invoke$arity$1 = (function (g){
return alandipert.kahn.kahn_sort.cljs$core$IFn$_invoke$arity$3(alandipert.kahn.normalize(g),cljs.core.PersistentVector.EMPTY,alandipert.kahn.no_incoming(g));
});

alandipert.kahn.kahn_sort.cljs$core$IFn$_invoke$arity$3 = (function (g,l,s){
while(true){
if(cljs.core.empty_QMARK_(s)){
if(cljs.core.every_QMARK_(cljs.core.empty_QMARK_,cljs.core.vals(g))){
return l;
} else {
return null;
}
} else {
var vec__21885 = alandipert.kahn.take_1(s);
var n = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21885,(0),null);
var s_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__21885,(1),null);
var m = (function (){var G__21886 = n;
return (g.cljs$core$IFn$_invoke$arity$1 ? g.cljs$core$IFn$_invoke$arity$1(G__21886) : g.call(null,G__21886));
})();
var g_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (g,l,s,vec__21885,n,s_SINGLEQUOTE_,m){
return (function (p1__21881_SHARP_,p2__21882_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(p1__21881_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [n], null),alandipert.kahn.without,p2__21882_SHARP_);
});})(g,l,s,vec__21885,n,s_SINGLEQUOTE_,m))
,g,m);
var G__21888 = g_SINGLEQUOTE_;
var G__21889 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(l,n);
var G__21890 = clojure.set.union.cljs$core$IFn$_invoke$arity$2(s_SINGLEQUOTE_,clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(alandipert.kahn.no_incoming(g_SINGLEQUOTE_),m));
g = G__21888;
l = G__21889;
s = G__21890;
continue;
}
break;
}
});

alandipert.kahn.kahn_sort.cljs$lang$maxFixedArity = 3;
