parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"gOio":[function(require,module,exports) {
"use strict";function n(n,r){var e;if("undefined"==typeof Symbol||null==n[Symbol.iterator]){if(Array.isArray(n)||(e=t(n))||r&&n&&"number"==typeof n.length){e&&(n=e);var o=0,u=function(){};return{s:u,n:function(){return o>=n.length?{done:!0}:{done:!1,value:n[o++]}},e:function(n){throw n},f:u}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,a=!1;return{s:function(){e=n[Symbol.iterator]()},n:function(){var n=e.next();return c=n.done,n},e:function(n){a=!0,i=n},f:function(){try{c||null==e.return||e.return()}finally{if(a)throw i}}}}function t(n,t){if(n){if("string"==typeof n)return r(n,t);var e=Object.prototype.toString.call(n).slice(8,-1);return"Object"===e&&n.constructor&&(e=n.constructor.name),"Map"===e||"Set"===e?Array.from(n):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?r(n,t):void 0}}function r(n,t){(null==t||t>n.length)&&(t=n.length);for(var r=0,e=new Array(t);r<t;r++)e[r]=n[r];return e}function e(n,t){for(var r=0;r<t.length;r++){var e=t[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(n,e.key,e)}}function o(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}function u(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function i(n){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(n){return typeof n}:function(n){return n&&"function"==typeof Symbol&&n.constructor===Symbol&&n!==Symbol.prototype?"symbol":typeof n})(n)}function c(n){return null!=n&&"object"===i(n)&&Symbol.iterator in n}function a(n){return Array.isArray(n)||ArrayBuffer.isView(n)}function f(n){return"function"==typeof n.Compare}function s(n){return"function"==typeof n.CompareTo}function l(n){return"function"==typeof n.Equals}function p(n){return"function"==typeof n.GetHashCode}function h(n){return null!=n&&"function"==typeof n.Dispose}function y(n,t){return Object.getPrototypeOf(n).constructor===Object.getPrototypeOf(t).constructor}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isIterable=c,exports.isArrayLike=a,exports.isDisposable=h,exports.sameConstructor=y,exports.comparerFromEqualityComparer=g,exports.assertEqual=v,exports.assertNotEqual=m,exports.lazyFromValue=x,exports.padWithZeros=w,exports.padLeftAndRightWithZeros=O,exports.dateOffset=C,exports.int16ToString=j,exports.int32ToString=S,exports.stringHash=E,exports.numberHash=k,exports.combineHashCodes=M,exports.physicalHash=T,exports.identityHash=D,exports.structuralHash=H,exports.hashSafe=q,exports.equalArraysWith=P,exports.equalArrays=V,exports.equalsSafe=R,exports.equals=U,exports.compareDates=G,exports.comparePrimitives=_,exports.compareArraysWith=W,exports.compareArrays=z,exports.compareSafe=B,exports.compare=F,exports.min=N,exports.max=Z,exports.createAtom=$,exports.createObj=J,exports.createObjDebug=K,exports.jsOptions=Q,exports.round=X,exports.sign=Y,exports.randomNext=nn,exports.randomBytes=tn,exports.unescapeDataString=rn,exports.escapeDataString=en,exports.escapeUriString=on,exports.count=un,exports.clear=cn,exports.uncurry=fn,exports.curry=sn,exports.partialApply=ln,exports.mapCurriedArgs=pn,exports.ObjectRef=exports.Lazy=exports.Comparer=void 0;var d=function n(t){u(this,n),this.Compare=t||F};function g(n){return f(n)?new d(n.Compare):new d(function(t,r){var e=n.GetHashCode(t),o=n.GetHashCode(r);return e===o?n.Equals(t,r)?0:-1:e<o?-1:1})}function v(n,t,r){if(!U(n,t))throw Object.assign(new Error(r||"Expected: ".concat(t," - Actual: ").concat(n)),{actual:n,expected:t})}function m(n,t,r){if(U(n,t))throw Object.assign(new Error(r||"Expected: ".concat(t," - Actual: ").concat(n)),{actual:n,expected:t})}exports.Comparer=d;var b=function(){function n(t){u(this,n),this.factory=t,this.isValueCreated=!1}return o(n,[{key:"Value",get:function(){return this.isValueCreated||(this.createdValue=this.factory(),this.isValueCreated=!0),this.createdValue}},{key:"IsValueCreated",get:function(){return this.isValueCreated}}]),n}();function x(n){return new b(function(){return n})}function w(n,t){for(var r=n.toString(10);r.length<t;)r="0"+r;return r}function O(n,t,r){for(var e=n.toString(10);e.length<t;)e="0"+e;for(;e.length<r;)e+="0";return e}function C(n){var t=n;return"number"==typeof t.offset?t.offset:1===n.kind?0:-6e4*n.getTimezoneOffset()}function j(n,t){return(n=n<0&&null!=t&&10!==t?65535+n+1:n).toString(t)}function S(n,t){return(n=n<0&&null!=t&&10!==t?4294967295+n+1:n).toString(t)}exports.Lazy=b;var A=function(){var n=function(){function n(){u(this,n)}return o(n,null,[{key:"id",value:function(t){return n.idMap.has(t)||n.idMap.set(t,++n.count),n.idMap.get(t)}}]),n}();return n.idMap=new WeakMap,n.count=0,n}();function E(n){for(var t=0,r=5381,e=n.length;t<e;)r=33*r^n.charCodeAt(t++);return r}function k(n){return 2654435761*n|0}function M(n){return 0===n.length?0:n.reduce(function(n,t){return(n<<5)+n^t})}function T(n){if(null==n)return 0;switch(i(n)){case"boolean":return n?1:0;case"number":return k(n);case"string":return E(n);default:return k(A.id(n))}}function D(n){return null==n?0:p(n)?n.GetHashCode():T(n)}function H(n){if(null==n)return 0;switch(i(n)){case"boolean":return n?1:0;case"number":return k(n);case"string":return E(n);default:if(p(n))return n.GetHashCode();if(a(n)){for(var t=n.length,r=new Array(t),e=0;e<t;e++)r[e]=H(n[e]);return M(r)}return n instanceof Date?n.getTime():Object.getPrototypeOf(n).constructor===Object?M(Object.values(self).map(function(n){return H(n)})):E(String(n))}}function q(n){var t;return null!==(t=null==n?void 0:n.GetHashCode())&&void 0!==t?t:0}function P(n,t,r){if(null==n)return null==t;if(null==t)return!1;if(n.length!==t.length)return!1;for(var e=0;e<n.length;e++)if(!r(n[e],t[e]))return!1;return!0}function V(n,t){return P(n,t,U)}function I(n,t){var r=Object.keys(n),e=Object.keys(t);if(r.length!==e.length)return!1;r.sort(),e.sort();for(var o=0;o<r.length;o++)if(r[o]!==e[o]||!U(n[r[o]],t[e[o]]))return!1;return!0}function R(n,t){var r;return null!==(r=null==n?void 0:n.Equals(t))&&void 0!==r?r:null==t}function U(n,t){return n===t||(null==n?null==t:null!=t&&("object"===i(n)&&(l(n)?n.Equals(t):a(n)?a(t)&&V(n,t):n instanceof Date?t instanceof Date&&0===G(n,t):Object.getPrototypeOf(n).constructor===Object&&I(n,t))))}function G(n,t){var r,e;return"offset"in n&&"offset"in t?(r=n.getTime(),e=t.getTime()):(r=n.getTime()+C(n),e=t.getTime()+C(t)),r===e?0:r<e?-1:1}function _(n,t){return n===t?0:n<t?-1:1}function W(n,t,r){if(null==n)return null==t?0:1;if(null==t)return-1;if(n.length!==t.length)return n.length<t.length?-1:1;for(var e=0,o=0;e<n.length;e++)if(0!==(o=r(n[e],t[e])))return o;return 0}function z(n,t){return W(n,t,F)}function L(n,t){var r=Object.keys(n),e=Object.keys(t);if(r.length!==e.length)return r.length<e.length?-1:1;r.sort(),e.sort();for(var o=0,u=0;o<r.length;o++){var i=r[o];if(i!==e[o])return i<e[o]?-1:1;if(0!==(u=F(n[i],t[i])))return u}return 0}function B(n,t){var r;return null!==(r=null==n?void 0:n.CompareTo(t))&&void 0!==r?r:null==t?0:-1}function F(n,t){return n===t?0:null==n?null==t?0:-1:null==t?1:"object"!==i(n)?n<t?-1:1:s(n)?n.CompareTo(t):a(n)?a(t)?z(n,t):-1:n instanceof Date?t instanceof Date?G(n,t):-1:Object.getPrototypeOf(n).constructor===Object?L(n,t):-1}function N(n,t,r){return n(t,r)<0?t:r}function Z(n,t,r){return n(t,r)>0?t:r}function $(n){var t=n;return function(n,r){return r?void(t=n):t}}function J(t){var r,e={},o=n(t);try{for(o.s();!(r=o.n()).done;){var u=r.value;e[u[0]]=u[1]}}catch(i){o.e(i)}finally{o.f()}return e}function K(t){var r,e={},o=n(t);try{for(o.s();!(r=o.n()).done;){var u=r.value;u[0]in e&&console.error(new Error("Property ".concat(u[0]," is duplicated"))),e[u[0]]=u[1]}}catch(i){o.e(i)}finally{o.f()}return e}function Q(n){var t={};return n(t),t}function X(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,r=Math.pow(10,t),e=+(t?n*r:n).toFixed(8),o=Math.floor(e),u=e-o,i=u>.5-1e-8&&u<.5+1e-8?o%2==0?o:o+1:Math.round(e);return t?i/r:i}function Y(n){return n>0?1:n<0?-1:0}function nn(n,t){return Math.floor(Math.random()*(t-n))+n}function tn(n){if(null==n)throw new Error("Buffer cannot be null");for(var t=0;t<n.length;t+=6)for(var r=Math.floor(281474976710656*Math.random()),e=Math.floor(r/16777216),o=0;o<6&&t+o<n.length;o++)3===o&&(r=e),n[t+o]=255&r,r>>>=8}function rn(n){return decodeURIComponent(n.replace(/\+/g,"%20"))}function en(n){return encodeURIComponent(n).replace(/!/g,"%21").replace(/'/g,"%27").replace(/\(/g,"%28").replace(/\)/g,"%29").replace(/\*/g,"%2A")}function on(n){return encodeURI(n)}function un(t){if(a(t))return t.length;var r,e=0,o=n(t);try{for(o.s();!(r=o.n()).done;){r.value;e++}}catch(u){o.e(u)}finally{o.f()}return e}function cn(n){a(n)?n.splice(0):n.clear()}exports.ObjectRef=A;var an="__CURRIED__";function fn(n,t){if(null!=t){if(t.length>1)return t;var r;switch(n){case 2:r=function(n,r){return t(n)(r)};break;case 3:r=function(n,r,e){return t(n)(r)(e)};break;case 4:r=function(n,r,e,o){return t(n)(r)(e)(o)};break;case 5:r=function(n,r,e,o,u){return t(n)(r)(e)(o)(u)};break;case 6:r=function(n,r,e,o,u,i){return t(n)(r)(e)(o)(u)(i)};break;case 7:r=function(n,r,e,o,u,i,c){return t(n)(r)(e)(o)(u)(i)(c)};break;case 8:r=function(n,r,e,o,u,i,c,a){return t(n)(r)(e)(o)(u)(i)(c)(a)};break;default:throw new Error("Uncurrying to more than 8-arity is not supported: "+n)}return r[an]=t,r}}function sn(n,t){if(null!=t){if(an in t)return t[an];switch(n){case 2:return function(n){return function(r){return t(n,r)}};case 3:return function(n){return function(r){return function(e){return t(n,r,e)}}};case 4:return function(n){return function(r){return function(e){return function(o){return t(n,r,e,o)}}}};case 5:return function(n){return function(r){return function(e){return function(o){return function(u){return t(n,r,e,o,u)}}}}};case 6:return function(n){return function(r){return function(e){return function(o){return function(u){return function(i){return t(n,r,e,o,u,i)}}}}}};case 7:return function(n){return function(r){return function(e){return function(o){return function(u){return function(i){return function(c){return t(n,r,e,o,u,i,c)}}}}}}};case 8:return function(n){return function(r){return function(e){return function(o){return function(u){return function(i){return function(c){return function(a){return t(n,r,e,o,u,i,c,a)}}}}}}}};default:throw new Error("Currying to more than 8-arity is not supported: "+n)}}}function ln(n,t,r){if(null!=t){if(an in t){t=t[an];for(var e=0;e<r.length;e++)t=t(r[e]);return t}switch(n){case 1:return function(n){return t.apply(void 0,r.concat([n]))};case 2:return function(n){return function(e){return t.apply(void 0,r.concat([n,e]))}};case 3:return function(n){return function(e){return function(o){return t.apply(void 0,r.concat([n,e,o]))}}};case 4:return function(n){return function(e){return function(o){return function(u){return t.apply(void 0,r.concat([n,e,o,u]))}}}};case 5:return function(n){return function(e){return function(o){return function(u){return function(i){return t.apply(void 0,r.concat([n,e,o,u,i]))}}}}};case 6:return function(n){return function(e){return function(o){return function(u){return function(i){return function(c){return t.apply(void 0,r.concat([n,e,o,u,i,c]))}}}}}};case 7:return function(n){return function(e){return function(o){return function(u){return function(i){return function(c){return function(a){return t.apply(void 0,r.concat([n,e,o,u,i,c,a]))}}}}}}};case 8:return function(n){return function(e){return function(o){return function(u){return function(i){return function(c){return function(a){return function(f){return t.apply(void 0,r.concat([n,e,o,u,i,c,a,f]))}}}}}}}};default:throw new Error("Partially applying to more than 8-arity is not supported: "+n)}}}function pn(n,t){return function(r){return function n(t,r,e,o){var u=e[o];if(0!==u){var i=u[0],c=u[1];i>1&&(r=sn(i,r)),c>1&&(r=fn(c,r))}var a=t(r);return o+1===e.length?a:function(t){return n(a,t,e,o+1)}}(n,r,t,0)}}
},{}],"si8P":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.myButton=exports.window$=void 0;var e=require("./.fable/fable-library.3.0.0-nagareyama-rc-002/Util.js"),t=window;exports.window$=t;var r=(0,e.createAtom)(function(){var e;return(e=t.document,function(t){return e.getElementById(t)})("buy-btn")}());exports.myButton=r,r().textContent="changed!";
},{"./.fable/fable-library.3.0.0-nagareyama-rc-002/Util.js":"gOio"}]},{},["si8P"], null)
//# sourceMappingURL=/Fragment.fs.js.map