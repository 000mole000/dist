(function(e){function t(t){for(var r,a,c=t[0],s=t[1],u=t[2],l=0,m=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&m.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);p&&p(t);while(m.length)m.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-15b3a3ca":"becfa421","chunk-2d22d746":"0fe68ce9","chunk-2d8da78f":"d22e6f9d","chunk-c6171b30":"ec37e20c"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-15b3a3ca":1,"chunk-2d8da78f":1,"chunk-c6171b30":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-15b3a3ca":"b32f5615","chunk-2d22d746":"31d6cfe0","chunk-2d8da78f":"b32f5615","chunk-c6171b30":"9decb3c3"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return t()}var m=document.getElementsByTagName("style");for(c=0;c<m.length;c++){u=m[c],l=u.getAttribute("data-href");if(l===r||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],p.parentNode.removeChild(p),n(i)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,s.nc&&l.setAttribute("nonce",s.nc),l.src=c(e);var m=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;m.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",m.name="ChunkLoadError",m.type=r,m.request=a,n[1](m)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/",s.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var m=0;m<u.length;m++)t(u[m]);var p=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"27e7":function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"preview"},[n("div",{staticClass:"preview_wrapper",style:{backgroundImage:"url("+(e.moreFilm.Poster||"https://linnea.com.ar/wp-content/uploads/2018/09/404PosterNotFoundReverse.jpg")+")"}},["movie"===e.film.content_type?n("div",{staticClass:"preview_q"},[e._v(e._s(e.film.media[0].max_quality))]):e._e()]),n("router-link",{staticClass:"preview_title",attrs:{to:{name:"Film",params:{id:e.film.kinopoisk_id||e.film.kp_id}}}},[e._v(" "+e._s(e.film.ru_title||e.film.title)+" | "+e._s(e.film.orig_title)+" ")])],1)},a=[],o=(n("d3b7"),n("96cf"),n("1da1")),i={props:{film:Object},data:function(){return{img:"",moreFilm:{}}},mounted:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("film",e.film.imdb_id),t.next=3,fetch("https://www.omdbapi.com/?apikey=d36d7f24&i=".concat(e.film.imdb_id));case 3:return n=t.sent,t.next=6,n.json();case 6:e.moreFilm=t.sent;case 7:case"end":return t.stop()}}),t)})))()},watch:{film:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log("film",e.film.imdb_id),t.next=3,fetch("https://www.omdbapi.com/?apikey=d36d7f24&i=".concat(e.film.imdb_id));case 3:return n=t.sent,t.next=6,n.json();case 6:e.moreFilm=t.sent;case 7:case"end":return t.stop()}}),t)})))()}}},c=i,s=(n("2940"),n("2877")),u=Object(s["a"])(c,r,a,!1,null,null,null);t["a"]=u.exports},2940:function(e,t,n){"use strict";n("4131")},4131:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("div",{attrs:{id:"nav"}},[n("router-link",{attrs:{to:"/"}},[e._v("Главная")]),e._v(" | "),n("router-link",{attrs:{to:{name:"List",params:{type:"movies",page:1}}}},[e._v("Фильмы")]),e._v(" | "),n("router-link",{attrs:{to:{name:"List",params:{type:"tv-series",page:1}}}},[e._v("Сериалы")]),e._v(" | "),n("router-link",{attrs:{to:"/about"}},[e._v("О нас")])],1),n("input",{directives:[{name:"model",rawName:"v-model",value:e.search_w,expression:"search_w"}],attrs:{type:"text"},domProps:{value:e.search_w},on:{input:function(t){t.target.composing||(e.search_w=t.target.value)}}}),n("button",{on:{click:e.searchC}},[e._v("Найти")]),n("router-view")],1)},o=[],i={data:function(){return{search_w:""}},methods:{searchC:function(){this.search_w&&(console.log("ssss",search_w),this.$router.push({name:"Search",params:{title:this.search_w,page:1}}))}}},c=i,s=(n("5c0b"),n("2877")),u=Object(s["a"])(c,a,o,!1,null,null,null),l=u.exports,m=(n("d3b7"),n("8c4f")),p=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"home list"},e._l(e.films.data,(function(e,t){return n("film-preview",{key:t,attrs:{film:e}})})),1)},f=[],d=n("5530"),h=n("27e7"),v=n("2f62"),g={name:"Home",computed:Object(d["a"])({},Object(v["c"])(["films"])),methods:Object(d["a"])({},Object(v["b"])(["getFilms"])),mounted:function(){this.getFilms("movies")},components:{FilmPreview:h["a"]}},b=g,w=Object(s["a"])(b,p,f,!1,null,null,null),_=w.exports;r["a"].use(m["a"]);var k=[{path:"/",name:"Home",component:_},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}},{path:"/film/:id",name:"Film",component:function(){return n.e("chunk-c6171b30").then(n.bind(null,"4344"))}},{path:"/list/:type/:page",name:"List",component:function(){return n.e("chunk-15b3a3ca").then(n.bind(null,"1a33"))}},{path:"/search/:title/:page",name:"Search",component:function(){return n.e("chunk-2d8da78f").then(n.bind(null,"2d3b"))}}],y=new m["a"]({mode:"history",routes:k}),j=y,x=(n("99af"),n("96cf"),n("1da1")),O={state:{films:[],film:{}},getters:{films:function(e){return e.films},film:function(e){return e.film}},mutations:{setFilms:function(e,t){e.films=t},setFilm:function(e,t){e.film=t}},actions:{getFilms:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,fetch("https://videocdn.tv/api/".concat(t,"?api_token=CMteVkivIq7oQPOpZtrpGIB7esvY2juc"));case 3:return a=n.sent,n.next=6,a.json();case 6:o=n.sent,console.log(o),r("setFilms",o);case 9:case"end":return n.stop()}}),n)})))()},getNext:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,fetch("https://videocdn.tv/api/".concat(t.type,"?api_token=CMteVkivIq7oQPOpZtrpGIB7esvY2juc&page=").concat(t.page));case 3:return a=n.sent,console.log("r",a),n.next=7,a.json();case 7:o=n.sent,console.log("json",o),r("setFilms",o);case 10:case"end":return n.stop()}}),n)})))()},getFilm:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,fetch("https://videocdn.tv/api/short?api_token=CMteVkivIq7oQPOpZtrpGIB7esvY2juc&kinopoisk_id=".concat(t));case 3:return a=n.sent,n.next=6,a.json();case 6:o=n.sent,console.log("film",o),r("setFilm",o);case 9:case"end":return n.stop()}}),n)})))()},searchF:function(e,t){return Object(x["a"])(regeneratorRuntime.mark((function n(){var r,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return r=e.commit,n.next=3,fetch("https://videocdn.tv/api/short?api_token=CMteVkivIq7oQPOpZtrpGIB7esvY2juc&title=".concat(t.title,"&page=").concat(t.page));case 3:return a=n.sent,n.next=6,a.json();case 6:o=n.sent,console.log("film",o),r("setFilms",o);case 9:case"end":return n.stop()}}),n)})))()}}};r["a"].use(v["a"]);var F=new v["a"].Store({state:{},mutations:{},actions:{},modules:{search:O}});r["a"].config.productionTip=!1,new r["a"]({router:j,store:F,render:function(e){return e(l)}}).$mount("#app")},"5c0b":function(e,t,n){"use strict";n("9c0c")},"9c0c":function(e,t,n){}});
//# sourceMappingURL=app.55710431.js.map