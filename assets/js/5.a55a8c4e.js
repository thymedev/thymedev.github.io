(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{372:function(e,t){e.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},373:function(e,t,r){var n=r(5),i=r(34),a=r(19),o=r(372),u=n("".replace),s="["+o+"]",f=RegExp("^"+s+s+"*"),c=RegExp(s+s+"*$"),l=function(e){return function(t){var r=a(i(t));return 1&e&&(r=u(r,f,"")),2&e&&(r=u(r,c,"")),r}};e.exports={start:l(1),end:l(2),trim:l(3)}},443:function(e,t,r){"use strict";var n=r(12),i=r(0),a=r(5),o=r(126),u=r(16),s=r(11),f=r(209),c=r(35),l=r(69),p=r(211),h=r(4),N=r(68).f,b=r(37).f,I=r(14).f,g=r(444),m=r(373).trim,E=i.Number,d=E.prototype,v=i.TypeError,_=a("".slice),w=a("".charCodeAt),y=function(e){var t=p(e,"number");return"bigint"==typeof t?t:T(t)},T=function(e){var t,r,n,i,a,o,u,s,f=p(e,"number");if(l(f))throw v("Cannot convert a Symbol value to a number");if("string"==typeof f&&f.length>2)if(f=m(f),43===(t=w(f,0))||45===t){if(88===(r=w(f,2))||120===r)return NaN}else if(48===t){switch(w(f,1)){case 66:case 98:n=2,i=49;break;case 79:case 111:n=8,i=55;break;default:return+f}for(o=(a=_(f,2)).length,u=0;u<o;u++)if((s=w(a,u))<48||s>i)return NaN;return parseInt(a,n)}return+f};if(o("Number",!E(" 0o1")||!E("0b1")||E("+0x1"))){for(var x,A=function(e){var t=arguments.length<1?0:E(y(e)),r=this;return c(d,r)&&h((function(){g(r)}))?f(Object(t),r,A):t},S=n?N(E):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,isFinite,isInteger,isNaN,isSafeInteger,parseFloat,parseInt,fromString,range".split(","),F=0;S.length>F;F++)s(E,x=S[F])&&!s(A,x)&&I(A,x,b(E,x));A.prototype=d,d.constructor=A,u(i,"Number",A)}},444:function(e,t,r){var n=r(5);e.exports=n(1..valueOf)},463:function(e,t,r){"use strict";r.r(t);r(443);var n={name:"VueFrame",props:{to:{type:String,required:!0},height:{type:Number,required:!1,default:400},newTab:{type:Boolean,required:!1,default:!0}}},i=r(66),a=Object(i.a)(n,(function(){var e=this.$createElement,t=this._self._c||e;return t("iframe",{staticClass:"w-full border-0 rounded-md",style:"height:"+this.height+"px",attrs:{src:this.to}},[t("a",{attrs:{href:this.to,target:this.newTab?"_blank":"",rel:"noopener"}},[this._v("Open in new tab: "+this._s(this.to))])])}),[],!1,null,null,null);t.default=a.exports}}]);