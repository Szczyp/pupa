// Compiled by ClojureScript 0.0-3308 {:static-fns true, :optimize-constants true}
goog.provide('plumbing.core');
goog.require('cljs.core');
goog.require('schema.utils');
goog.require('plumbing.fnk.schema');
/**
 * A sentinel value representing missing portions of the input data.
 */
plumbing.core._PLUS_none_PLUS_ = cljs.core.constant$keyword$plumbing$core_SLASH_missing;
/**
 * Updates the value in map m at k with the function f.
 * 
 * Like update-in, but for updating a single top-level key.
 * Any additional args will be passed to f after the value.
 * 
 * WARNING As of Clojure 1.7 this function exists in clojure.core and
 * will not be exported by this namespace.
 */
plumbing.core.update = (function plumbing$core$update(){
var G__24941 = arguments.length;
switch (G__24941) {
case 3:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return plumbing.core.update.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
var argseq__5261__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(5)),(0)));
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5261__auto__);

}
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$3 = (function (m,k,f){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__24942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24942) : f.call(null,G__24942));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$4 = (function (m,k,f,x1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__24943 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__24944 = x1;
return (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(G__24943,G__24944) : f.call(null,G__24943,G__24944));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$5 = (function (m,k,f,x1,x2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,(function (){var G__24945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k);
var G__24946 = x1;
var G__24947 = x2;
return (f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(G__24945,G__24946,G__24947) : f.call(null,G__24945,G__24946,G__24947));
})());
});

plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic = (function (m,k,f,x1,x2,xs){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),x1,x2,xs));
});

plumbing.core.update.cljs$lang$applyTo = (function (seq24934){
var G__24935 = cljs.core.first(seq24934);
var seq24934__$1 = cljs.core.next(seq24934);
var G__24936 = cljs.core.first(seq24934__$1);
var seq24934__$2 = cljs.core.next(seq24934__$1);
var G__24937 = cljs.core.first(seq24934__$2);
var seq24934__$3 = cljs.core.next(seq24934__$2);
var G__24938 = cljs.core.first(seq24934__$3);
var seq24934__$4 = cljs.core.next(seq24934__$3);
var G__24939 = cljs.core.first(seq24934__$4);
var seq24934__$5 = cljs.core.next(seq24934__$4);
return plumbing.core.update.cljs$core$IFn$_invoke$arity$variadic(G__24935,G__24936,G__24937,G__24938,G__24939,seq24934__$5);
});

plumbing.core.update.cljs$lang$maxFixedArity = (5);
/**
 * Build map k -> (f v) for [k v] in map, preserving the initial type
 */
plumbing.core.map_vals = (function plumbing$core$map_vals(f,m){
if(cljs.core.sorted_QMARK_(m)){
return cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__24968 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24968) : f.call(null,G__24968));
})());
}),cljs.core.sorted_map(),m);
} else {
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,k,(function (){var G__24969 = v;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24969) : f.call(null,G__24969));
})());
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__13270__auto__ = (function (){var G__24971 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__24971) : cljs.core.atom.call(null,G__24971));
})();
var seq__24972_24987 = cljs.core.seq(m);
var chunk__24973_24988 = null;
var count__24974_24989 = (0);
var i__24975_24990 = (0);
while(true){
if((i__24975_24990 < count__24974_24989)){
var vec__24976_24991 = chunk__24973_24988.cljs$core$IIndexed$_nth$arity$2(null,i__24975_24990);
var k_24992 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24976_24991,(0),null);
var v_24993 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24976_24991,(1),null);
var m24970_24994 = (function (){var G__24977 = m_atom__13270__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24977) : cljs.core.deref.call(null,G__24977));
})();
var G__24978_24995 = m_atom__13270__auto__;
var G__24979_24996 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m24970_24994,k_24992,(function (){var G__24980 = v_24993;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24980) : f.call(null,G__24980));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24978_24995,G__24979_24996) : cljs.core.reset_BANG_.call(null,G__24978_24995,G__24979_24996));

var G__24997 = seq__24972_24987;
var G__24998 = chunk__24973_24988;
var G__24999 = count__24974_24989;
var G__25000 = (i__24975_24990 + (1));
seq__24972_24987 = G__24997;
chunk__24973_24988 = G__24998;
count__24974_24989 = G__24999;
i__24975_24990 = G__25000;
continue;
} else {
var temp__4425__auto___25001 = cljs.core.seq(seq__24972_24987);
if(temp__4425__auto___25001){
var seq__24972_25002__$1 = temp__4425__auto___25001;
if(cljs.core.chunked_seq_QMARK_(seq__24972_25002__$1)){
var c__4995__auto___25003 = cljs.core.chunk_first(seq__24972_25002__$1);
var G__25004 = cljs.core.chunk_rest(seq__24972_25002__$1);
var G__25005 = c__4995__auto___25003;
var G__25006 = cljs.core.count(c__4995__auto___25003);
var G__25007 = (0);
seq__24972_24987 = G__25004;
chunk__24973_24988 = G__25005;
count__24974_24989 = G__25006;
i__24975_24990 = G__25007;
continue;
} else {
var vec__24981_25008 = cljs.core.first(seq__24972_25002__$1);
var k_25009 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24981_25008,(0),null);
var v_25010 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__24981_25008,(1),null);
var m24970_25011 = (function (){var G__24982 = m_atom__13270__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24982) : cljs.core.deref.call(null,G__24982));
})();
var G__24983_25012 = m_atom__13270__auto__;
var G__24984_25013 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m24970_25011,k_25009,(function (){var G__24985 = v_25010;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__24985) : f.call(null,G__24985));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__24983_25012,G__24984_25013) : cljs.core.reset_BANG_.call(null,G__24983_25012,G__24984_25013));

var G__25014 = cljs.core.next(seq__24972_25002__$1);
var G__25015 = null;
var G__25016 = (0);
var G__25017 = (0);
seq__24972_24987 = G__25014;
chunk__24973_24988 = G__25015;
count__24974_24989 = G__25016;
i__24975_24990 = G__25017;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__24986 = m_atom__13270__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__24986) : cljs.core.deref.call(null,G__24986));
})());

}
}
});
/**
 * Build map (f k) -> v for [k v] in map m
 */
plumbing.core.map_keys = (function plumbing$core$map_keys(f,m){
if(cljs.core.map_QMARK_(m)){
return cljs.core.persistent_BANG_(cljs.core.reduce_kv((function (out_m,k,v){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(out_m,(function (){var G__25036 = k;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25036) : f.call(null,G__25036));
})(),v);
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),m));
} else {
var m_atom__13270__auto__ = (function (){var G__25038 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25038) : cljs.core.atom.call(null,G__25038));
})();
var seq__25039_25054 = cljs.core.seq(m);
var chunk__25040_25055 = null;
var count__25041_25056 = (0);
var i__25042_25057 = (0);
while(true){
if((i__25042_25057 < count__25041_25056)){
var vec__25043_25058 = chunk__25040_25055.cljs$core$IIndexed$_nth$arity$2(null,i__25042_25057);
var k_25059 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25043_25058,(0),null);
var v_25060 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25043_25058,(1),null);
var m25037_25061 = (function (){var G__25044 = m_atom__13270__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25044) : cljs.core.deref.call(null,G__25044));
})();
var G__25045_25062 = m_atom__13270__auto__;
var G__25046_25063 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m25037_25061,(function (){var G__25047 = k_25059;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25047) : f.call(null,G__25047));
})(),v_25060);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25045_25062,G__25046_25063) : cljs.core.reset_BANG_.call(null,G__25045_25062,G__25046_25063));

var G__25064 = seq__25039_25054;
var G__25065 = chunk__25040_25055;
var G__25066 = count__25041_25056;
var G__25067 = (i__25042_25057 + (1));
seq__25039_25054 = G__25064;
chunk__25040_25055 = G__25065;
count__25041_25056 = G__25066;
i__25042_25057 = G__25067;
continue;
} else {
var temp__4425__auto___25068 = cljs.core.seq(seq__25039_25054);
if(temp__4425__auto___25068){
var seq__25039_25069__$1 = temp__4425__auto___25068;
if(cljs.core.chunked_seq_QMARK_(seq__25039_25069__$1)){
var c__4995__auto___25070 = cljs.core.chunk_first(seq__25039_25069__$1);
var G__25071 = cljs.core.chunk_rest(seq__25039_25069__$1);
var G__25072 = c__4995__auto___25070;
var G__25073 = cljs.core.count(c__4995__auto___25070);
var G__25074 = (0);
seq__25039_25054 = G__25071;
chunk__25040_25055 = G__25072;
count__25041_25056 = G__25073;
i__25042_25057 = G__25074;
continue;
} else {
var vec__25048_25075 = cljs.core.first(seq__25039_25069__$1);
var k_25076 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25048_25075,(0),null);
var v_25077 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25048_25075,(1),null);
var m25037_25078 = (function (){var G__25049 = m_atom__13270__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25049) : cljs.core.deref.call(null,G__25049));
})();
var G__25050_25079 = m_atom__13270__auto__;
var G__25051_25080 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m25037_25078,(function (){var G__25052 = k_25076;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25052) : f.call(null,G__25052));
})(),v_25077);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25050_25079,G__25051_25080) : cljs.core.reset_BANG_.call(null,G__25050_25079,G__25051_25080));

var G__25081 = cljs.core.next(seq__25039_25069__$1);
var G__25082 = null;
var G__25083 = (0);
var G__25084 = (0);
seq__25039_25054 = G__25081;
chunk__25040_25055 = G__25082;
count__25041_25056 = G__25083;
i__25042_25057 = G__25084;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__25053 = m_atom__13270__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25053) : cljs.core.deref.call(null,G__25053));
})());
}
});
/**
 * Build map k -> (f k) for keys in ks
 */
plumbing.core.map_from_keys = (function plumbing$core$map_from_keys(f,ks){
var m_atom__13270__auto__ = (function (){var G__25101 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25101) : cljs.core.atom.call(null,G__25101));
})();
var seq__25102_25115 = cljs.core.seq(ks);
var chunk__25103_25116 = null;
var count__25104_25117 = (0);
var i__25105_25118 = (0);
while(true){
if((i__25105_25118 < count__25104_25117)){
var k_25119 = chunk__25103_25116.cljs$core$IIndexed$_nth$arity$2(null,i__25105_25118);
var m25100_25120 = (function (){var G__25106 = m_atom__13270__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25106) : cljs.core.deref.call(null,G__25106));
})();
var G__25107_25121 = m_atom__13270__auto__;
var G__25108_25122 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m25100_25120,k_25119,(function (){var G__25109 = k_25119;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25109) : f.call(null,G__25109));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25107_25121,G__25108_25122) : cljs.core.reset_BANG_.call(null,G__25107_25121,G__25108_25122));

var G__25123 = seq__25102_25115;
var G__25124 = chunk__25103_25116;
var G__25125 = count__25104_25117;
var G__25126 = (i__25105_25118 + (1));
seq__25102_25115 = G__25123;
chunk__25103_25116 = G__25124;
count__25104_25117 = G__25125;
i__25105_25118 = G__25126;
continue;
} else {
var temp__4425__auto___25127 = cljs.core.seq(seq__25102_25115);
if(temp__4425__auto___25127){
var seq__25102_25128__$1 = temp__4425__auto___25127;
if(cljs.core.chunked_seq_QMARK_(seq__25102_25128__$1)){
var c__4995__auto___25129 = cljs.core.chunk_first(seq__25102_25128__$1);
var G__25130 = cljs.core.chunk_rest(seq__25102_25128__$1);
var G__25131 = c__4995__auto___25129;
var G__25132 = cljs.core.count(c__4995__auto___25129);
var G__25133 = (0);
seq__25102_25115 = G__25130;
chunk__25103_25116 = G__25131;
count__25104_25117 = G__25132;
i__25105_25118 = G__25133;
continue;
} else {
var k_25134 = cljs.core.first(seq__25102_25128__$1);
var m25100_25135 = (function (){var G__25110 = m_atom__13270__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25110) : cljs.core.deref.call(null,G__25110));
})();
var G__25111_25136 = m_atom__13270__auto__;
var G__25112_25137 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m25100_25135,k_25134,(function (){var G__25113 = k_25134;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25113) : f.call(null,G__25113));
})());
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25111_25136,G__25112_25137) : cljs.core.reset_BANG_.call(null,G__25111_25136,G__25112_25137));

var G__25138 = cljs.core.next(seq__25102_25128__$1);
var G__25139 = null;
var G__25140 = (0);
var G__25141 = (0);
seq__25102_25115 = G__25138;
chunk__25103_25116 = G__25139;
count__25104_25117 = G__25140;
i__25105_25118 = G__25141;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__25114 = m_atom__13270__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25114) : cljs.core.deref.call(null,G__25114));
})());
});
/**
 * Build map (f v) -> v for vals in vs
 */
plumbing.core.map_from_vals = (function plumbing$core$map_from_vals(f,vs){
var m_atom__13270__auto__ = (function (){var G__25158 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25158) : cljs.core.atom.call(null,G__25158));
})();
var seq__25159_25172 = cljs.core.seq(vs);
var chunk__25160_25173 = null;
var count__25161_25174 = (0);
var i__25162_25175 = (0);
while(true){
if((i__25162_25175 < count__25161_25174)){
var v_25176 = chunk__25160_25173.cljs$core$IIndexed$_nth$arity$2(null,i__25162_25175);
var m25157_25177 = (function (){var G__25163 = m_atom__13270__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25163) : cljs.core.deref.call(null,G__25163));
})();
var G__25164_25178 = m_atom__13270__auto__;
var G__25165_25179 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m25157_25177,(function (){var G__25166 = v_25176;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25166) : f.call(null,G__25166));
})(),v_25176);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25164_25178,G__25165_25179) : cljs.core.reset_BANG_.call(null,G__25164_25178,G__25165_25179));

var G__25180 = seq__25159_25172;
var G__25181 = chunk__25160_25173;
var G__25182 = count__25161_25174;
var G__25183 = (i__25162_25175 + (1));
seq__25159_25172 = G__25180;
chunk__25160_25173 = G__25181;
count__25161_25174 = G__25182;
i__25162_25175 = G__25183;
continue;
} else {
var temp__4425__auto___25184 = cljs.core.seq(seq__25159_25172);
if(temp__4425__auto___25184){
var seq__25159_25185__$1 = temp__4425__auto___25184;
if(cljs.core.chunked_seq_QMARK_(seq__25159_25185__$1)){
var c__4995__auto___25186 = cljs.core.chunk_first(seq__25159_25185__$1);
var G__25187 = cljs.core.chunk_rest(seq__25159_25185__$1);
var G__25188 = c__4995__auto___25186;
var G__25189 = cljs.core.count(c__4995__auto___25186);
var G__25190 = (0);
seq__25159_25172 = G__25187;
chunk__25160_25173 = G__25188;
count__25161_25174 = G__25189;
i__25162_25175 = G__25190;
continue;
} else {
var v_25191 = cljs.core.first(seq__25159_25185__$1);
var m25157_25192 = (function (){var G__25167 = m_atom__13270__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25167) : cljs.core.deref.call(null,G__25167));
})();
var G__25168_25193 = m_atom__13270__auto__;
var G__25169_25194 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m25157_25192,(function (){var G__25170 = v_25191;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25170) : f.call(null,G__25170));
})(),v_25191);
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25168_25193,G__25169_25194) : cljs.core.reset_BANG_.call(null,G__25168_25193,G__25169_25194));

var G__25195 = cljs.core.next(seq__25159_25185__$1);
var G__25196 = null;
var G__25197 = (0);
var G__25198 = (0);
seq__25159_25172 = G__25195;
chunk__25160_25173 = G__25196;
count__25161_25174 = G__25197;
i__25162_25175 = G__25198;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__25171 = m_atom__13270__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25171) : cljs.core.deref.call(null,G__25171));
})());
});
/**
 * Dissociate this keyseq from m, removing any empty maps created as a result
 * (including at the top-level).
 */
plumbing.core.dissoc_in = (function plumbing$core$dissoc_in(m,p__25199){
var vec__25203 = p__25199;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25203,(0),null);
var ks = cljs.core.nthnext(vec__25203,(1));
if(cljs.core.truth_(m)){
var temp__4423__auto__ = (function (){var and__4198__auto__ = ks;
if(cljs.core.truth_(and__4198__auto__)){
return plumbing$core$dissoc_in(cljs.core.get.cljs$core$IFn$_invoke$arity$2(m,k),ks);
} else {
return and__4198__auto__;
}
})();
if(cljs.core.truth_(temp__4423__auto__)){
var res = temp__4423__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(m,k,res);
} else {
var res = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(m,k);
if(cljs.core.empty_QMARK_(res)){
return null;
} else {
return res;
}
}
} else {
return null;
}
});
/**
 * Recursively convert maps in m (including itself)
 * to have keyword keys instead of string
 */
plumbing.core.keywordize_map = (function plumbing$core$keywordize_map(x){
if(cljs.core.map_QMARK_(x)){
var m_atom__13270__auto__ = (function (){var G__25222 = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25222) : cljs.core.atom.call(null,G__25222));
})();
var seq__25223_25236 = cljs.core.seq(x);
var chunk__25224_25237 = null;
var count__25225_25238 = (0);
var i__25226_25239 = (0);
while(true){
if((i__25226_25239 < count__25225_25238)){
var vec__25227_25240 = chunk__25224_25237.cljs$core$IIndexed$_nth$arity$2(null,i__25226_25239);
var k_25241 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25227_25240,(0),null);
var v_25242 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25227_25240,(1),null);
var m25221_25243 = (function (){var G__25228 = m_atom__13270__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25228) : cljs.core.deref.call(null,G__25228));
})();
var G__25229_25244 = m_atom__13270__auto__;
var G__25230_25245 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m25221_25243,((typeof k_25241 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_25241):k_25241),plumbing$core$keywordize_map(v_25242));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25229_25244,G__25230_25245) : cljs.core.reset_BANG_.call(null,G__25229_25244,G__25230_25245));

var G__25246 = seq__25223_25236;
var G__25247 = chunk__25224_25237;
var G__25248 = count__25225_25238;
var G__25249 = (i__25226_25239 + (1));
seq__25223_25236 = G__25246;
chunk__25224_25237 = G__25247;
count__25225_25238 = G__25248;
i__25226_25239 = G__25249;
continue;
} else {
var temp__4425__auto___25250 = cljs.core.seq(seq__25223_25236);
if(temp__4425__auto___25250){
var seq__25223_25251__$1 = temp__4425__auto___25250;
if(cljs.core.chunked_seq_QMARK_(seq__25223_25251__$1)){
var c__4995__auto___25252 = cljs.core.chunk_first(seq__25223_25251__$1);
var G__25253 = cljs.core.chunk_rest(seq__25223_25251__$1);
var G__25254 = c__4995__auto___25252;
var G__25255 = cljs.core.count(c__4995__auto___25252);
var G__25256 = (0);
seq__25223_25236 = G__25253;
chunk__25224_25237 = G__25254;
count__25225_25238 = G__25255;
i__25226_25239 = G__25256;
continue;
} else {
var vec__25231_25257 = cljs.core.first(seq__25223_25251__$1);
var k_25258 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25231_25257,(0),null);
var v_25259 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25231_25257,(1),null);
var m25221_25260 = (function (){var G__25232 = m_atom__13270__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25232) : cljs.core.deref.call(null,G__25232));
})();
var G__25233_25261 = m_atom__13270__auto__;
var G__25234_25262 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(m25221_25260,((typeof k_25258 === 'string')?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k_25258):k_25258),plumbing$core$keywordize_map(v_25259));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(G__25233_25261,G__25234_25262) : cljs.core.reset_BANG_.call(null,G__25233_25261,G__25234_25262));

var G__25263 = cljs.core.next(seq__25223_25251__$1);
var G__25264 = null;
var G__25265 = (0);
var G__25266 = (0);
seq__25223_25236 = G__25263;
chunk__25224_25237 = G__25264;
count__25225_25238 = G__25265;
i__25226_25239 = G__25266;
continue;
}
} else {
}
}
break;
}

return cljs.core.persistent_BANG_((function (){var G__25235 = m_atom__13270__auto__;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25235) : cljs.core.deref.call(null,G__25235));
})());
} else {
if(cljs.core.seq_QMARK_(x)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(plumbing$core$keywordize_map,x);
} else {
if(cljs.core.vector_QMARK_(x)){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(plumbing$core$keywordize_map,x);
} else {
return x;

}
}
}
});
/**
 * Like get but throw an exception if not found
 */
plumbing.core.safe_get = (function plumbing$core$safe_get(m,k){
var temp__4423__auto__ = cljs.core.find(m,k);
if(cljs.core.truth_(temp__4423__auto__)){
var pair__13346__auto__ = temp__4423__auto__;
return cljs.core.val(pair__13346__auto__);
} else {
throw (new Error(schema.utils.format_STAR_.cljs$core$IFn$_invoke$arity$variadic("Key %s not found in %s",cljs.core.array_seq([k,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.key,m)], 0))));

}
});
/**
 * Like get-in but throws exception if not found
 */
plumbing.core.safe_get_in = (function plumbing$core$safe_get_in(m,ks){
while(true){
if(cljs.core.seq(ks)){
var G__25267 = plumbing.core.safe_get(m,cljs.core.first(ks));
var G__25268 = cljs.core.next(ks);
m = G__25267;
ks = G__25268;
continue;
} else {
return m;
}
break;
}
});
/**
 * Like assoc but only assocs when value is truthy
 */
plumbing.core.assoc_when = (function plumbing$core$assoc_when(){
var argseq__5250__auto__ = ((((1) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(1)),(0))):null);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5250__auto__);
});

plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,kvs){
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
})(),(function (){var iter__4964__auto__ = (function plumbing$core$iter__25271(s__25272){
return (new cljs.core.LazySeq(null,(function (){
var s__25272__$1 = s__25272;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__25272__$1);
if(temp__4425__auto__){
var s__25272__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25272__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__25272__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__25274 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__25273 = (0);
while(true){
if((i__25273 < size__4963__auto__)){
var vec__25279 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__25273);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25279,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25279,(1),null);
if(cljs.core.truth_(v)){
cljs.core.chunk_append(b__25274,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null));

var G__25281 = (i__25273 + (1));
i__25273 = G__25281;
continue;
} else {
var G__25282 = (i__25273 + (1));
i__25273 = G__25282;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25274),plumbing$core$iter__25271(cljs.core.chunk_rest(s__25272__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25274),null);
}
} else {
var vec__25280 = cljs.core.first(s__25272__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25280,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25280,(1),null);
if(cljs.core.truth_(v)){
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,v], null),plumbing$core$iter__25271(cljs.core.rest(s__25272__$2)));
} else {
var G__25283 = cljs.core.rest(s__25272__$2);
s__25272__$1 = G__25283;
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

plumbing.core.assoc_when.cljs$lang$maxFixedArity = (1);

plumbing.core.assoc_when.cljs$lang$applyTo = (function (seq25269){
var G__25270 = cljs.core.first(seq25269);
var seq25269__$1 = cljs.core.next(seq25269);
return plumbing.core.assoc_when.cljs$core$IFn$_invoke$arity$variadic(G__25270,seq25269__$1);
});
/**
 * Like update-in but returns m unchanged if key-seq is not present.
 */
plumbing.core.update_in_when = (function plumbing$core$update_in_when(){
var argseq__5250__auto__ = ((((3) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(3)),(0))):null);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5250__auto__);
});

plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic = (function (m,key_seq,f,args){
var found = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(m,key_seq,plumbing.core._PLUS_none_PLUS_);
if(!((plumbing.core._PLUS_none_PLUS_ === found))){
return cljs.core.assoc_in(m,key_seq,cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,found,args));
} else {
return m;
}
});

plumbing.core.update_in_when.cljs$lang$maxFixedArity = (3);

plumbing.core.update_in_when.cljs$lang$applyTo = (function (seq25284){
var G__25285 = cljs.core.first(seq25284);
var seq25284__$1 = cljs.core.next(seq25284);
var G__25286 = cljs.core.first(seq25284__$1);
var seq25284__$2 = cljs.core.next(seq25284__$1);
var G__25287 = cljs.core.first(seq25284__$2);
var seq25284__$3 = cljs.core.next(seq25284__$2);
return plumbing.core.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__25285,G__25286,G__25287,seq25284__$3);
});
/**
 * Like group-by, but accepts a map-fn that is applied to values before
 * collected.
 */
plumbing.core.grouped_map = (function plumbing$core$grouped_map(key_fn,map_fn,coll){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret,x){
var k = (function (){var G__25290 = x;
return (key_fn.cljs$core$IFn$_invoke$arity$1 ? key_fn.cljs$core$IFn$_invoke$arity$1(G__25290) : key_fn.call(null,G__25290));
})();
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(ret,k,cljs.core.PersistentVector.EMPTY),(function (){var G__25291 = x;
return (map_fn.cljs$core$IFn$_invoke$arity$1 ? map_fn.cljs$core$IFn$_invoke$arity$1(G__25291) : map_fn.call(null,G__25291));
})()));
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),coll));
});
/**
 * Like (apply concat s) but lazier (and shorter)
 */
plumbing.core.aconcat = (function plumbing$core$aconcat(s){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((new cljs.core.LazySeq(null,(function (){
return cljs.core.first(s);
}),null,null)),(new cljs.core.LazySeq(null,(function (){
var temp__4425__auto__ = cljs.core.next(s);
if(temp__4425__auto__){
var n = temp__4425__auto__;
return plumbing$core$aconcat(n);
} else {
return null;
}
}),null,null)));
});
/**
 * Takes a seqable and returns a lazy sequence that
 * is maximally lazy and doesn't realize elements due to either
 * chunking or apply.
 * 
 * Useful when you don't want chunking, for instance,
 * (first awesome-website? (map slurp +a-bunch-of-urls+))
 * may slurp up to 31 unneed webpages, wherease
 * (first awesome-website? (map slurp (unchunk +a-bunch-of-urls+)))
 * is guaranteed to stop slurping after the first awesome website.
 * 
 * Taken from http://stackoverflow.com/questions/3407876/how-do-i-avoid-clojures-chunking-behavior-for-lazy-seqs-that-i-want-to-short-ci
 */
plumbing.core.unchunk = (function plumbing$core$unchunk(s){
if(cljs.core.seq(s)){
return cljs.core.cons(cljs.core.first(s),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$unchunk(cljs.core.rest(s));
}),null,null)));
} else {
return null;
}
});
/**
 * Return sum of (f x) for each x in xs
 */
plumbing.core.sum = (function plumbing$core$sum(){
var G__25295 = arguments.length;
switch (G__25295) {
case 2:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return plumbing.core.sum.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(arguments.length)].join('')));

}
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$2 = (function (f,xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(f,xs));
});

plumbing.core.sum.cljs$core$IFn$_invoke$arity$1 = (function (xs){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core._PLUS_,xs);
});

plumbing.core.sum.cljs$lang$maxFixedArity = 2;
/**
 * returns (first xs) when xs has only 1 element
 */
plumbing.core.singleton = (function plumbing$core$singleton(xs){
var temp__4425__auto__ = cljs.core.seq(xs);
if(temp__4425__auto__){
var xs__$1 = temp__4425__auto__;
if(cljs.core.next(xs__$1)){
return null;
} else {
return cljs.core.first(xs__$1);
}
} else {
return null;
}
});
/**
 * Returns [idx x] for x in seqable s
 */
plumbing.core.indexed = (function plumbing$core$indexed(s){
return cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,s);
});
/**
 * Returns indices idx of sequence s where (f (nth s idx))
 */
plumbing.core.positions = (function plumbing$core$positions(f,s){
return cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (i,x){
if(cljs.core.truth_((function (){var G__25298 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25298) : f.call(null,G__25298));
})())){
return i;
} else {
return null;
}
}),s);
});
/**
 * Returns elements of xs which return unique
 * values according to f. If multiple elements of xs return the same
 * value under f, the first is returned
 */
plumbing.core.distinct_by = (function plumbing$core$distinct_by(f,xs){
var s = (function (){var G__25314 = cljs.core.PersistentHashSet.EMPTY;
return (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(G__25314) : cljs.core.atom.call(null,G__25314));
})();
var iter__4964__auto__ = ((function (s){
return (function plumbing$core$distinct_by_$_iter__25315(s__25316){
return (new cljs.core.LazySeq(null,((function (s){
return (function (){
var s__25316__$1 = s__25316;
while(true){
var temp__4425__auto__ = cljs.core.seq(s__25316__$1);
if(temp__4425__auto__){
var s__25316__$2 = temp__4425__auto__;
if(cljs.core.chunked_seq_QMARK_(s__25316__$2)){
var c__4962__auto__ = cljs.core.chunk_first(s__25316__$2);
var size__4963__auto__ = cljs.core.count(c__4962__auto__);
var b__25318 = cljs.core.chunk_buffer(size__4963__auto__);
if((function (){var i__25317 = (0);
while(true){
if((i__25317 < size__4963__auto__)){
var x = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4962__auto__,i__25317);
var id = (function (){var G__25325 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25325) : f.call(null,G__25325));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__25326 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25326) : cljs.core.deref.call(null,G__25326));
})(),id))){
cljs.core.chunk_append(b__25318,(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
);

var G__25329 = (i__25317 + (1));
i__25317 = G__25329;
continue;
} else {
var G__25330 = (i__25317 + (1));
i__25317 = G__25330;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__25318),plumbing$core$distinct_by_$_iter__25315(cljs.core.chunk_rest(s__25316__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__25318),null);
}
} else {
var x = cljs.core.first(s__25316__$2);
var id = (function (){var G__25327 = x;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25327) : f.call(null,G__25327));
})();
if(!(cljs.core.contains_QMARK_((function (){var G__25328 = s;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25328) : cljs.core.deref.call(null,G__25328));
})(),id))){
return cljs.core.cons((function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(s,cljs.core.conj,id);

return x;
})()
,plumbing$core$distinct_by_$_iter__25315(cljs.core.rest(s__25316__$2)));
} else {
var G__25331 = cljs.core.rest(s__25316__$2);
s__25316__$1 = G__25331;
continue;
}
}
} else {
return null;
}
break;
}
});})(s))
,null,null));
});})(s))
;
return iter__4964__auto__(xs);
});
/**
 * Analogy: partition:partition-all :: interleave:interleave-all
 */
plumbing.core.interleave_all = (function plumbing$core$interleave_all(){
var argseq__5250__auto__ = ((((0) < arguments.length))?(new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(0)),(0))):null);
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(argseq__5250__auto__);
});

plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic = (function (colls){
return (new cljs.core.LazySeq(null,(function (){
return (function plumbing$core$helper(seqs){
if(cljs.core.seq(seqs)){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,seqs),(new cljs.core.LazySeq(null,(function (){
return plumbing$core$helper(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.next,seqs));
}),null,null)));
} else {
return null;
}
}).call(null,cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,colls));
}),null,null));
});

plumbing.core.interleave_all.cljs$lang$maxFixedArity = (0);

plumbing.core.interleave_all.cljs$lang$applyTo = (function (seq25332){
return plumbing.core.interleave_all.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25332));
});
/**
 * Returns # of elements of xs where pred holds
 */
plumbing.core.count_when = (function plumbing$core$count_when(pred,xs){
return cljs.core.count(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(pred,xs));
});
/**
 * Like conj but ignores non-truthy values
 */
plumbing.core.conj_when = (function plumbing$core$conj_when(){
var G__25338 = arguments.length;
switch (G__25338) {
case 2:
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5261__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5261__auto__);

}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2 = (function (coll,x){
if(cljs.core.truth_(x)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,x);
} else {
return coll;
}
});

plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic = (function (coll,x,xs){
while(true){
if(cljs.core.truth_(xs)){
var G__25340 = plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
var G__25341 = cljs.core.first(xs);
var G__25342 = cljs.core.next(xs);
coll = G__25340;
x = G__25341;
xs = G__25342;
continue;
} else {
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$2(coll,x);
}
break;
}
});

plumbing.core.conj_when.cljs$lang$applyTo = (function (seq25334){
var G__25335 = cljs.core.first(seq25334);
var seq25334__$1 = cljs.core.next(seq25334);
var G__25336 = cljs.core.first(seq25334__$1);
var seq25334__$2 = cljs.core.next(seq25334__$1);
return plumbing.core.conj_when.cljs$core$IFn$_invoke$arity$variadic(G__25335,G__25336,seq25334__$2);
});

plumbing.core.conj_when.cljs$lang$maxFixedArity = (2);
/**
 * Like cons but does nothing if x is non-truthy.
 */
plumbing.core.cons_when = (function plumbing$core$cons_when(x,s){
if(cljs.core.truth_(x)){
return cljs.core.cons(x,s);
} else {
return s;
}
});
/**
 * Like sort-by, but prefers higher values rather than lower ones.
 */
plumbing.core.rsort_by = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.reverse,cljs.core.sort_by);
/**
 * Like swap! but returns a pair [old-val new-val]
 */
plumbing.core.swap_pair_BANG_ = (function plumbing$core$swap_pair_BANG_(){
var G__25348 = arguments.length;
switch (G__25348) {
case 2:
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5261__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5261__auto__);

}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,f){
while(true){
var old_val = (function (){var G__25349 = a;
return (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(G__25349) : cljs.core.deref.call(null,G__25349));
})();
var new_val = (function (){var G__25350 = old_val;
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__25350) : f.call(null,G__25350));
})();
if(cljs.core.truth_(cljs.core.compare_and_set_BANG_(a,old_val,new_val))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [old_val,new_val], null);
} else {
continue;
}
break;
}
});

plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (a,f,args){
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,(function (p1__25343_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,p1__25343_SHARP_,args);
}));
});

plumbing.core.swap_pair_BANG_.cljs$lang$applyTo = (function (seq25344){
var G__25345 = cljs.core.first(seq25344);
var seq25344__$1 = cljs.core.next(seq25344);
var G__25346 = cljs.core.first(seq25344__$1);
var seq25344__$2 = cljs.core.next(seq25344__$1);
return plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__25345,G__25346,seq25344__$2);
});

plumbing.core.swap_pair_BANG_.cljs$lang$maxFixedArity = (2);
/**
 * Like reset! but returns old-val
 */
plumbing.core.get_and_set_BANG_ = (function plumbing$core$get_and_set_BANG_(a,new_val){
return cljs.core.first(plumbing.core.swap_pair_BANG_.cljs$core$IFn$_invoke$arity$2(a,cljs.core.constantly(new_val)));
});
plumbing.core.millis = (function plumbing$core$millis(){
return (new Date()).getTime();
});
/**
 * Like apply, but applies a map to a function with positional map
 * arguments. Can take optional initial args just like apply.
 */
plumbing.core.mapply = (function plumbing$core$mapply(){
var G__25356 = arguments.length;
switch (G__25356) {
case 2:
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var argseq__5261__auto__ = (new cljs.core.IndexedSeq(Array.prototype.slice.call(arguments,(2)),(0)));
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5261__auto__);

}
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$2 = (function (f,m){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,m));
});

plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic = (function (f,arg,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(f,arg,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.butlast(args),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.last(args))));
});

plumbing.core.mapply.cljs$lang$applyTo = (function (seq25352){
var G__25353 = cljs.core.first(seq25352);
var seq25352__$1 = cljs.core.next(seq25352);
var G__25354 = cljs.core.first(seq25352__$1);
var seq25352__$2 = cljs.core.next(seq25352__$1);
return plumbing.core.mapply.cljs$core$IFn$_invoke$arity$variadic(G__25353,G__25354,seq25352__$2);
});

plumbing.core.mapply.cljs$lang$maxFixedArity = (2);
