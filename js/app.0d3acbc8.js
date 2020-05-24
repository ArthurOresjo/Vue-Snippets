(function(t){function e(e){for(var r,i,o=e[0],c=e[1],p=e[2],u=0,d=[];u<o.length;u++)i=o[u],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&d.push(a[i][0]),a[i]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,p||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],r=!0,o=1;o<n.length;o++){var c=n[o];0!==a[c]&&(r=!1)}r&&(s.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},s=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var p=0;p<o.length;p++)e(o[p]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),a=n.n(r);a.a},"26de":function(t,e,n){"use strict";var r=n("457b"),a=n.n(r);a.a},"457b":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex"},[n("div",[n("addSnippet")],1),n("div",[n("deleteSnippet")],1),n("div",[n("latestSnippet")],1)])},s=[],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"main-content"},[n("h1",[t._v("Uppload snippets!")]),n("div",{staticClass:"form-center"},[n("div",{staticClass:"form-area"},[n("p",[t._v("Enter snippet:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text"},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),n("p",[t._v("Enter code:")]),n("textarea",{directives:[{name:"model",rawName:"v-model",value:t.content,expression:"content"}],attrs:{cols:"20",rows:"10"},domProps:{value:t.content},on:{input:function(e){e.target.composing||(t.content=e.target.value)}}}),n("button",{on:{click:t.uploadSnippet}},[t._v("Add snippet")]),t.success?n("h3",[t._v("Snippet added!")]):t._e()])])])},o=[],c=(n("96cf"),n("1da1")),p="https://www.forverkliga.se/JavaScript/api/api-snippets.php",l={data:function(){return{title:"",content:"",success:!1}},methods:{uploadSnippet:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.post(p,{add:"",title:t.title,content:t.content});case 3:n=e.sent,t.title="",t.content="","success"==n.data.status&&(t.success=!0),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log("Something went wrong",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},u=l,d=(n("f0bc"),n("2877")),v=Object(d["a"])(u,i,o,!1,null,"026ae22d",null),f=v.exports,m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("See latest snippets")]),n("div",{staticClass:"latest-btn-container"},[n("button",{staticClass:"show-latest-button",on:{click:t.getLatestSnippet}},[t._v("Get latest snippets!")])]),t.model?n("div",t._l(t.model,(function(e){return n("div",{key:e.id,staticClass:"latest-container"},[n("div",{staticClass:"latest-body"},[n("p",{staticClass:"latest-title"},[t._v("Title: "+t._s(e.title))]),n("p",[t._v("Snippet: "+t._s(e.content))]),n("p",{staticClass:"item-id"},[t._v("ID: "+t._s(e.id))])])])})),0):t._e()])},h=[],g="https://www.forverkliga.se/JavaScript/api/api-snippets.php",b={data:function(){return{model:null}},methods:{getLatestSnippet:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.get(g,{params:{latest:""}});case 3:n=e.sent,t.model=n.data,console.log(n.data),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log("Something went wrong",e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}}},w=b,_=(n("84a8"),Object(d["a"])(w,m,h,!1,null,"00a540f9",null)),x=_.exports,S=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Delete snippets")]),n("div",{staticClass:"deleter"},[n("div",{staticClass:"form-group"},[n("label",[t._v("Enter id:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:t.snippetId,expression:"snippetId"}],attrs:{type:"text"},domProps:{value:t.snippetId},on:{input:function(e){e.target.composing||(t.snippetId=e.target.value)}}}),n("button",{on:{click:t.deleteSnippet}},[t._v("Delete snippet")])])]),n("h3",{directives:[{name:"show",rawName:"v-show",value:t.success,expression:"success"}]},[t._v("Snippet deleted!")])])},y=[],O="https://www.forverkliga.se/JavaScript/api/api-snippets.php",j={data:function(){return{snippetId:"",success:!1}},methods:{deleteSnippet:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$http.post(O,{delete:"",id:t.snippetId});case 3:n=e.sent,t.snippetId="","success"==n.data.status&&(t.success=!0),console.log(n.data),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log("Something went wrong",e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}}},k=j,C=(n("26de"),Object(d["a"])(k,S,y,!1,null,"c8ec9058",null)),P=C.exports,I={name:"App",components:{addSnippet:f,latestSnippet:x,deleteSnippet:P}},$=I,E=(n("034f"),Object(d["a"])($,a,s,!1,null,null,null)),R=E.exports,J=n("bc3a"),M=n.n(J),N=n("a7fe"),T=n.n(N);r["a"].config.productionTip=!1,r["a"].use(T.a,M.a),new r["a"]({render:function(t){return t(R)}}).$mount("#app")},"84a8":function(t,e,n){"use strict";var r=n("c6c2"),a=n.n(r);a.a},"85ec":function(t,e,n){},bc46:function(t,e,n){},c6c2:function(t,e,n){},f0bc:function(t,e,n){"use strict";var r=n("bc46"),a=n.n(r);a.a}});
//# sourceMappingURL=app.0d3acbc8.js.map