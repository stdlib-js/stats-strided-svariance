"use strict";var n=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(a){throw (r=0, a)}};};var s=n(function(k,u){
var f=require('@stdlib/stats-strided-svariancepn/dist').ndarray;function x(e,r,a,i,y){return f(e,r,a,i,y)}u.exports=x
});var c=n(function(w,v){
var j=require('@stdlib/strided-base-stride2offset/dist'),m=s();function l(e,r,a,i){return m(e,r,a,i,j(e,i))}v.exports=l
});var d=n(function(z,o){
var R=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),q=c(),_=s();R(q,"ndarray",_);o.exports=q
});var E=require("path").join,O=require('@stdlib/utils-try-require/dist'),b=require('@stdlib/assert-is-error/dist'),g=d(),t,p=O(E(__dirname,"./native.js"));b(p)?t=g:t=p;module.exports=t;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
