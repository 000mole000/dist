(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15b3a3ca"],{"1a33":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"list"},[this.films.prev_page_url?r("router-link",{attrs:{to:{name:"List",params:{page:Number(t.$route.params.page)-1},type:t.$route.params.type}}},[t._v("<")]):t._e(),t._l(t.films.data,(function(t,e){return r("film-preview",{key:e,attrs:{film:t}})})),this.films.next_page_url?r("router-link",{attrs:{to:{name:"List",params:{page:Number(t.$route.params.page)+1},type:t.$route.params.type}}},[t._v(">")]):t._e()],2)},n=[],s=(r("a9e3"),r("5530")),i=r("27e7"),p=r("2f62"),o={name:"Home",computed:Object(s["a"])({},Object(p["c"])(["films"])),methods:Object(s["a"])(Object(s["a"])({},Object(p["b"])(["getFilms","getNext"])),{},{prev:function(){this.films.prev_page_url&&this.$router.push({name:"List",params:{page:this.$route.params.page-1,type:this.$route.params.type}})},next:function(){this.films.next_page_url&&this.$router.push({name:"List",params:{page:Number(this.$route.params.page)+1,type:this.$route.params.type}})}}),mounted:function(){this.getNext({page:this.$route.params.page,type:this.$route.params.type})},watch:{$route:function(t,e){this.getNext({page:this.$route.params.page,type:this.$route.params.type})}},components:{FilmPreview:i["a"]}},u=o,c=(r("ebb3"),r("2877")),f=Object(c["a"])(u,a,n,!1,null,null,null);e["default"]=f.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,r){var a=r("1d80"),n=r("5899"),s="["+n+"]",i=RegExp("^"+s+s+"*"),p=RegExp(s+s+"*$"),o=function(t){return function(e){var r=String(a(e));return 1&t&&(r=r.replace(i,"")),2&t&&(r=r.replace(p,"")),r}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,e,r){var a=r("861d"),n=r("d2bb");t.exports=function(t,e,r){var s,i;return n&&"function"==typeof(s=e.constructor)&&s!==r&&a(i=s.prototype)&&i!==r.prototype&&n(t,i),t}},7547:function(t,e,r){},a9e3:function(t,e,r){"use strict";var a=r("83ab"),n=r("da84"),s=r("94ca"),i=r("6eeb"),p=r("5135"),o=r("c6b6"),u=r("7156"),c=r("c04e"),f=r("d039"),m=r("7c73"),l=r("241c").f,g=r("06cf").f,h=r("9bf2").f,b=r("58a8").trim,N="Number",_=n[N],v=_.prototype,d=o(m(v))==N,y=function(t){var e,r,a,n,s,i,p,o,u=c(t,!1);if("string"==typeof u&&u.length>2)if(u=b(u),e=u.charCodeAt(0),43===e||45===e){if(r=u.charCodeAt(2),88===r||120===r)return NaN}else if(48===e){switch(u.charCodeAt(1)){case 66:case 98:a=2,n=49;break;case 79:case 111:a=8,n=55;break;default:return+u}for(s=u.slice(2),i=s.length,p=0;p<i;p++)if(o=s.charCodeAt(p),o<48||o>n)return NaN;return parseInt(s,a)}return+u};if(s(N,!_(" 0o1")||!_("0b1")||_("+0x1"))){for(var I,$=function(t){var e=arguments.length<1?0:t,r=this;return r instanceof $&&(d?f((function(){v.valueOf.call(r)})):o(r)!=N)?u(new _(y(e)),r,$):y(e)},E=a?l(_):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),x=0;E.length>x;x++)p(_,I=E[x])&&!p($,I)&&h($,I,g(_,I));$.prototype=v,v.constructor=$,i(n,N,$)}},ebb3:function(t,e,r){"use strict";r("7547")}}]);
//# sourceMappingURL=chunk-15b3a3ca.097da221.js.map