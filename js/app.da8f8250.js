(function(t){function e(e){for(var i,l,c=e[0],r=e[1],o=e[2],v=0,f=[];v<c.length;v++)l=c[v],a[l]&&f.push(a[l][0]),a[l]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);u&&u(e);while(f.length)f.shift()();return n.push.apply(n,o||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],i=!0,c=1;c<s.length;c++){var r=s[c];0!==a[r]&&(i=!1)}i&&(n.splice(e--,1),t=l(l.s=s[0]))}return t}var i={},a={app:0},n=[];function l(e){if(i[e])return i[e].exports;var s=i[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,l),s.l=!0,s.exports}l.m=t,l.c=i,l.d=function(t,e,s){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(l.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(s,i,function(e){return t[e]}.bind(null,i));return s},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var o=0;o<c.length;o++)e(c[o]);var u=r;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("1d50")},"06cc":function(t,e,s){"use strict";var i=s("4d2b"),a=s.n(i);a.a},"1d50":function(t,e,s){"use strict";s.r(e);s("fef8"),s("76e3"),s("1de2");var i=s("e832"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("Nav"),s("Home"),s("Footer")],1)},n=[],l=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},c=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"navbar"},[s("div",{staticClass:"container"},[s("div",{staticClass:"navbar-brand"},[s("a",{staticClass:"navbar-item"},[s("div",{},[s("b",[t._v("BRANDNAME")])])]),s("span",{staticClass:"navbar-burger burger",attrs:{"data-target":"navbarMenuHeroC"}},[s("span"),s("span"),s("span")])]),s("div",{staticClass:"navbar-menu",attrs:{id:"navbarMenuHeroC"}},[s("div",{staticClass:"navbar-end"},[s("a",{staticClass:"navbar-item"},[t._v("\n          Services\n        ")]),s("a",{staticClass:"navbar-item"},[t._v("\n          Why us\n        ")]),s("span",{staticClass:"navbar-item"},[s("a",{staticClass:"button is-info"},[s("span",[t._v("For Service Partner")])])])])])])])}],r={methods:{nextStep:function(t){this.$router.push("/service_funnel2/"+t)}}},o=r,u=(s("42f0"),s("a6c2")),v=Object(u["a"])(o,l,c,!1,null,"d3b599b0",null);v.options.__file="Nav.vue";var f=v.exports,d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"content has-text-centered"},[s("p",[t._v("\n      Footer\n    ")])])])}],h={methods:{nextStep:function(t){this.$router.push("/service_funnel2/"+t)}}},C=h,_=(s("06cc"),Object(u["a"])(C,d,p,!1,null,"2a61168e",null));_.options.__file="Footer.vue";var m=_.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("section",{staticClass:"hero has-bg-img is-fullheight"},[s("div",{staticClass:"hero-body "},[s("router-view")],1)]),t._m(0),s("br"),t._m(1),s("br"),t._m(2)])},g=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container "},[s("br"),s("section",[s("div",{staticClass:"tile is-ancestor has-text-centered"},[s("div",{staticClass:"tile"},[s("div",{staticClass:"tile is-parent is-vertical"},[s("article",{staticClass:"tile is-child notification is-light"},[s("p",{staticClass:"title"},[t._v("Vertical...")]),s("p",{staticClass:"subtitle"},[t._v("Top")])]),s("article",{staticClass:"tile is-child notification is-light"},[s("p",{staticClass:"title"},[t._v("...tiles")]),s("p",{staticClass:"subtitle"},[t._v("Bottom tile")])])]),s("div",{staticClass:"tile is-parent is-vertical"},[s("article",{staticClass:"tile is-child notification is-light"},[s("p",{staticClass:"title"},[t._v("Vertical...")]),s("p",{staticClass:"subtitle"},[t._v("Top tile")])]),s("article",{staticClass:"tile is-child notification is-light"},[s("p",{staticClass:"title"},[t._v("...tiles")]),s("p",{staticClass:"subtitle"},[t._v("Bottom tile")])])]),s("div",{staticClass:"tile is-parent is-vertical"},[s("article",{staticClass:"tile is-child notification is-light"},[s("p",{staticClass:"title"},[t._v("Vertical...")]),s("p",{staticClass:"subtitle"},[t._v("Top tile")])]),s("article",{staticClass:"tile is-child notification is-light"},[s("p",{staticClass:"title"},[t._v("...tiles")]),s("p",{staticClass:"subtitle"},[t._v("Bottom tile")])])])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("nav",{staticClass:"level"},[s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Tweets")]),s("p",{staticClass:"title"},[t._v("3,456")])])]),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Following")]),s("p",{staticClass:"title"},[t._v("123")])])]),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Followers")]),s("p",{staticClass:"title"},[t._v("456K")])])]),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Likes")]),s("p",{staticClass:"title"},[t._v("789")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("section",[s("div",{staticClass:"columns is-multiline"},[s("div",{staticClass:"column is-four-fifths"},[s("article",{staticClass:"media"},[s("figure",{staticClass:"media-left"},[s("p",{staticClass:"image is-256x256"},[s("img",{attrs:{src:"https://bulma.io/images/placeholders/256x256.png"}})])]),s("div",{staticClass:"media-content has-text-left"},[s("p",{staticClass:"title"},[t._v("\n                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”\n              ")]),s("p",{staticClass:"subtitle"},[t._v("\n                Jeff Atwood\n              ")])])])]),s("div",{staticClass:"column is-four-fifths is-offset-one-fifth"},[s("article",{staticClass:"media"},[s("div",{staticClass:"media-content has-text-right"},[s("p",{staticClass:"title"},[t._v("\n                “There are two hard things in computer science: cache invalidation, naming things, and off-by-one errors.”\n              ")]),s("p",{staticClass:"subtitle"},[t._v("\n                Jeff Atwood\n              ")])]),s("figure",{staticClass:"media-left"},[s("p",{staticClass:"image is-256x256"},[s("img",{attrs:{src:"https://bulma.io/images/placeholders/256x256.png"}})])])])])])])])}],x={name:"app",components:{}},w=x,y=(s("9800"),Object(u["a"])(w,b,g,!1,null,null,null));y.options.__file="Home.vue";var $=y.exports,O={name:"app",components:{Nav:f,Footer:m,Home:$}},j=O,E=(s("e5cd"),Object(u["a"])(j,a,n,!1,null,null,null));E.options.__file="App.vue";var S=E.exports,F=s("e301"),T=s.n(F),M=s("4af9"),k=(s("098a"),s("d871"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container has-text-centered"},[s("h1",{staticClass:"title has-text-white"},[t._v("\n    You can save Money with us, find out:\n  ")]),s("h2",{staticClass:"subtitle has-text-white"},[t._v("\n    How large is your Company?\n  ")]),s("div",{staticClass:"columns is-centered "},[s("div",{staticClass:"column is-2"},[s("router-link",{attrs:{to:"/service_funnel2/1"}},[s("a",{staticClass:"button is-info is-inverted is-fullwidth"},[t._v("1-50")])])],1),s("div",{staticClass:"column is-2"},[s("router-link",{attrs:{to:"/service_funnel2/50"}},[s("a",{staticClass:"button is-info is-inverted is-fullwidth"},[t._v("50-200")])])],1),s("div",{staticClass:"column is-2"},[s("a",{staticClass:"button is-info is-inverted is-fullwidth",on:{click:function(e){t.nextStep(300)}}},[t._v("200+")])])])])}),P=[],H={methods:{nextStep:function(t){this.$router.push("/service_funnel2/"+t)}}},A=H,N=(s("ba73"),Object(u["a"])(A,k,P,!1,null,"72669f4e",null));N.options.__file="ServiceFunnel.vue";var B=N.exports,J=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},V=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container has-text-centered"},[s("h1",{staticClass:"title has-text-white"},[t._v("\n      We will contact you\n    ")]),s("div",{staticClass:"columns is-centered "},[s("div",{staticClass:"column is-4"},[s("div",{staticClass:"field is-grouped"},[s("p",{staticClass:"control is-expanded "},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"Email"}})]),s("p",{staticClass:"control"},[s("a",{staticClass:"button is-info"},[t._v("\n              Submit\n            ")])])])])])])}],W={watch:{$route:function(t){}}},D=W,K=(s("dc45"),Object(u["a"])(D,J,V,!1,null,"7ee3203e",null));K.options.__file="ServiceFunnel2.vue";var L=K.exports;i["default"].use(T.a),i["default"].use(M["a"]);var R=[{path:"/",component:B},{path:"/service_funnel2/:company",component:L}],Y=new M["a"]({routes:R,mode:"history"});i["default"].config.productionTip=!1,new i["default"]({render:function(t){return t(S)},router:Y}).$mount("#app")},"42f0":function(t,e,s){"use strict";var i=s("db51"),a=s.n(i);a.a},"4d2b":function(t,e,s){},"65b0":function(t,e,s){},"6d03":function(t,e,s){},9800:function(t,e,s){"use strict";var i=s("ca7b"),a=s.n(i);a.a},ba73:function(t,e,s){"use strict";var i=s("6d03"),a=s.n(i);a.a},be33:function(t,e,s){},ca7b:function(t,e,s){},db51:function(t,e,s){},dc45:function(t,e,s){"use strict";var i=s("65b0"),a=s.n(i);a.a},e5cd:function(t,e,s){"use strict";var i=s("be33"),a=s.n(i);a.a}});
//# sourceMappingURL=app.da8f8250.js.map