var W=Object.defineProperty;var l=(e,r)=>W(e,"name",{value:r,configurable:!0});import{g as Y}from"./iframe.96ccea65.js";function G(e,r){for(var t=0;t<r.length;t++){const n=r[t];if(typeof n!="string"&&!Array.isArray(n)){for(const o in n)if(o!=="default"&&!(o in e)){const u=Object.getOwnPropertyDescriptor(n,o);u&&Object.defineProperty(e,o,u.get?u:{enumerable:!0,get:()=>n[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}l(G,"_mergeNamespaces");var j={exports:{}},f={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var $=Object.getOwnPropertySymbols,K=Object.prototype.hasOwnProperty,Q=Object.prototype.propertyIsEnumerable;function X(e){if(e==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}l(X,"toObject");function Z(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de",Object.getOwnPropertyNames(e)[0]==="5")return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;var n=Object.getOwnPropertyNames(r).map(function(u){return r[u]});if(n.join("")!=="0123456789")return!1;var o={};return"abcdefghijklmnopqrst".split("").forEach(function(u){o[u]=u}),Object.keys(Object.assign({},o)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}l(Z,"shouldUseNative");var ee=Z()?Object.assign:function(e,r){for(var t,n=X(e),o,u=1;u<arguments.length;u++){t=Object(arguments[u]);for(var i in t)K.call(t,i)&&(n[i]=t[i]);if($){o=$(t);for(var s=0;s<o.length;s++)Q.call(t,o[s])&&(n[o[s]]=t[o[s]])}}return n};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var b=ee,v=60103,A=60106;f.Fragment=60107;f.StrictMode=60108;f.Profiler=60114;var F=60109,I=60110,N=60112;f.Suspense=60113;var U=60115,q=60116;if(typeof Symbol=="function"&&Symbol.for){var p=Symbol.for;v=p("react.element"),A=p("react.portal"),f.Fragment=p("react.fragment"),f.StrictMode=p("react.strict_mode"),f.Profiler=p("react.profiler"),F=p("react.provider"),I=p("react.context"),N=p("react.forward_ref"),f.Suspense=p("react.suspense"),U=p("react.memo"),q=p("react.lazy")}var w=typeof Symbol=="function"&&Symbol.iterator;function re(e){return e===null||typeof e!="object"?null:(e=w&&e[w]||e["@@iterator"],typeof e=="function"?e:null)}l(re,"y");function _(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}l(_,"z");var D={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},L={};function d(e,r,t){this.props=e,this.context=r,this.refs=L,this.updater=t||D}l(d,"C");d.prototype.isReactComponent={};d.prototype.setState=function(e,r){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error(_(85));this.updater.enqueueSetState(this,e,r,"setState")};d.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function T(){}l(T,"D");T.prototype=d.prototype;function E(e,r,t){this.props=e,this.context=r,this.refs=L,this.updater=t||D}l(E,"E");var R=E.prototype=new T;R.constructor=E;b(R,d.prototype);R.isPureReactComponent=!0;var x={current:null},M=Object.prototype.hasOwnProperty,B={key:!0,ref:!0,__self:!0,__source:!0};function z(e,r,t){var n,o={},u=null,i=null;if(r!=null)for(n in r.ref!==void 0&&(i=r.ref),r.key!==void 0&&(u=""+r.key),r)M.call(r,n)&&!B.hasOwnProperty(n)&&(o[n]=r[n]);var s=arguments.length-2;if(s===1)o.children=t;else if(1<s){for(var c=Array(s),a=0;a<s;a++)c[a]=arguments[a+2];o.children=c}if(e&&e.defaultProps)for(n in s=e.defaultProps,s)o[n]===void 0&&(o[n]=s[n]);return{$$typeof:v,type:e,key:u,ref:i,props:o,_owner:x.current}}l(z,"J");function te(e,r){return{$$typeof:v,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}l(te,"K");function k(e){return typeof e=="object"&&e!==null&&e.$$typeof===v}l(k,"L");function ne(e){var r={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(t){return r[t]})}l(ne,"escape");var P=/\/+/g;function S(e,r){return typeof e=="object"&&e!==null&&e.key!=null?ne(""+e.key):r.toString(36)}l(S,"N");function g(e,r,t,n,o){var u=typeof e;(u==="undefined"||u==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(u){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case v:case A:i=!0}}if(i)return i=e,o=o(i),e=n===""?"."+S(i,0):n,Array.isArray(o)?(t="",e!=null&&(t=e.replace(P,"$&/")+"/"),g(o,r,t,"",function(a){return a})):o!=null&&(k(o)&&(o=te(o,t+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+e)),r.push(o)),1;if(i=0,n=n===""?".":n+":",Array.isArray(e))for(var s=0;s<e.length;s++){u=e[s];var c=n+S(u,s);i+=g(u,r,t,c,o)}else if(c=re(e),typeof c=="function")for(e=c.call(e),s=0;!(u=e.next()).done;)u=u.value,c=n+S(u,s++),i+=g(u,r,t,c,o);else if(u==="object")throw r=""+e,Error(_(31,r==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":r));return i}l(g,"O");function h(e,r,t){if(e==null)return e;var n=[],o=0;return g(e,n,"","",function(u){return r.call(t,u,o++)}),n}l(h,"P");function oe(e){if(e._status===-1){var r=e._result;r=r(),e._status=0,e._result=r,r.then(function(t){e._status===0&&(t=t.default,e._status=1,e._result=t)},function(t){e._status===0&&(e._status=2,e._result=t)})}if(e._status===1)return e._result;throw e._result}l(oe,"Q");var V={current:null};function y(){var e=V.current;if(e===null)throw Error(_(321));return e}l(y,"S");var ue={ReactCurrentDispatcher:V,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:b};f.Children={map:h,forEach:function(e,r,t){h(e,function(){r.apply(this,arguments)},t)},count:function(e){var r=0;return h(e,function(){r++}),r},toArray:function(e){return h(e,function(r){return r})||[]},only:function(e){if(!k(e))throw Error(_(143));return e}};f.Component=d;f.PureComponent=E;f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ue;f.cloneElement=function(e,r,t){if(e==null)throw Error(_(267,e));var n=b({},e.props),o=e.key,u=e.ref,i=e._owner;if(r!=null){if(r.ref!==void 0&&(u=r.ref,i=x.current),r.key!==void 0&&(o=""+r.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(c in r)M.call(r,c)&&!B.hasOwnProperty(c)&&(n[c]=r[c]===void 0&&s!==void 0?s[c]:r[c])}var c=arguments.length-2;if(c===1)n.children=t;else if(1<c){s=Array(c);for(var a=0;a<c;a++)s[a]=arguments[a+2];n.children=s}return{$$typeof:v,type:e.type,key:o,ref:u,props:n,_owner:i}};f.createContext=function(e,r){return r===void 0&&(r=null),e={$$typeof:I,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null},e.Provider={$$typeof:F,_context:e},e.Consumer=e};f.createElement=z;f.createFactory=function(e){var r=z.bind(null,e);return r.type=e,r};f.createRef=function(){return{current:null}};f.forwardRef=function(e){return{$$typeof:N,render:e}};f.isValidElement=k;f.lazy=function(e){return{$$typeof:q,_payload:{_status:-1,_result:e},_init:oe}};f.memo=function(e,r){return{$$typeof:U,type:e,compare:r===void 0?null:r}};f.useCallback=function(e,r){return y().useCallback(e,r)};f.useContext=function(e,r){return y().useContext(e,r)};f.useDebugValue=function(){};f.useEffect=function(e,r){return y().useEffect(e,r)};f.useImperativeHandle=function(e,r,t){return y().useImperativeHandle(e,r,t)};f.useLayoutEffect=function(e,r){return y().useLayoutEffect(e,r)};f.useMemo=function(e,r){return y().useMemo(e,r)};f.useReducer=function(e,r,t){return y().useReducer(e,r,t)};f.useRef=function(e){return y().useRef(e)};f.useState=function(e){return y().useState(e)};f.version="17.0.2";(function(e){e.exports=f})(j);const fe=Y(j.exports),ye=G({__proto__:null,default:fe},[j.exports]);var O={exports:{}},m={};/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ie=j.exports,H=60103;m.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var C=Symbol.for;H=C("react.element"),m.Fragment=C("react.fragment")}var se=ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,ce=Object.prototype.hasOwnProperty,le={key:!0,ref:!0,__self:!0,__source:!0};function J(e,r,t){var n,o={},u=null,i=null;t!==void 0&&(u=""+t),r.key!==void 0&&(u=""+r.key),r.ref!==void 0&&(i=r.ref);for(n in r)ce.call(r,n)&&!le.hasOwnProperty(n)&&(o[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps,r)o[n]===void 0&&(o[n]=r[n]);return{$$typeof:H,type:e,key:u,ref:i,props:o,_owner:se.current}}l(J,"q");m.jsx=J;m.jsxs=J;(function(e){e.exports=m})(O);const ve=O.exports.Fragment,de=O.exports.jsx,_e=O.exports.jsxs;export{ve as F,fe as R,ye as a,_e as b,de as j,ee as o,j as r};
//# sourceMappingURL=jsx-runtime.d55edad6.js.map
