(function(t){function e(e){for(var i,s,o=e[0],c=e[1],l=e[2],p=0,d=[];p<o.length;p++)s=o[p],Object.prototype.hasOwnProperty.call(a,s)&&a[s]&&d.push(a[s][0]),a[s]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(d.length)d.shift()();return n.push.apply(n,l||[]),r()}function r(){for(var t,e=0;e<n.length;e++){for(var r=n[e],i=!0,o=1;o<r.length;o++){var c=r[o];0!==a[c]&&(i=!1)}i&&(n.splice(e--,1),t=s(s.s=r[0]))}return t}var i={},a={app:0},n=[];function s(e){if(i[e])return i[e].exports;var r=i[e]={i:e,l:!1,exports:{}};return t[e].call(r.exports,r,r.exports,s),r.l=!0,r.exports}s.m=t,s.c=i,s.d=function(t,e,r){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(s.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)s.d(r,i,function(e){return t[e]}.bind(null,i));return r},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;n.push([0,"chunk-vendors"]),r()})({0:function(t,e,r){t.exports=r("56d7")},"51c1":function(t,e,r){t.exports=r.p+"img/pizza.c883b91e.jpeg"},"56d7":function(t,e,r){"use strict";r.r(e);r("cadf"),r("551c"),r("f751"),r("097d");var i=r("2b0e"),a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-app",{attrs:{id:"app",light:""}},[r("navigation"),r("v-main",[r("error"),r("v-card",{staticClass:"ma-2",attrs:{elevation:"2",outlined:"",shaped:""}},[r("v-img",{attrs:{src:t.src}},[r("router-view")],1)],1)],1)],1)},n=[],s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return t.msg?r("div",{staticClass:"alert alert-danger alert-dismissible"},[t._v(" "+t._s(t.msg)+" "),t._m(0)]):t._e()},o=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"alert","aria-label":"Close"}},[r("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])}],c={name:"Error",computed:{msg:function(){return this.$auth.error}}},l=c,u=r("2877"),p=Object(u["a"])(l,s,o,!1,null,null,null),d=p.exports,h=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-app-bar",{attrs:{app:"","clipped-left":"",light:"",src:t.appbarimg,"shrink-on-scroll":"",prominent:"","fade-img-on-scroll":""}},[r("v-app-bar-title",{staticClass:"float-left"},[r("div",{staticClass:"logo"}),t._v(" Pizza-42 ")])],1),r("v-navigation-drawer",{attrs:{app:"",floating:"",clipped:!0,light:"","mini-variant":!1}},[r("v-system-bar"),t.$auth.isAuthenticated?r("v-list",[r("v-list-item",{attrs:{link:""}},[r("v-list-item-avatar",[r("v-img",{attrs:{src:t.$auth.user.picture}})],1),r("v-list-item-content",[r("v-list-item-title",{staticClass:"text-h6"},[t._v(" "+t._s(t.$auth.user.name)+" ")]),r("v-list-item-subtitle",[t._v(" "+t._s(t.$auth.user.email)+" ")])],1),r("v-list-item-action",[r("v-icon",[t._v(t._s(t.icons.mdiMenuDown))])],1)],1)],1):t._e(),r("v-divider"),r("v-list",{attrs:{dense:"",nav:""}},[r("v-list-item",{attrs:{to:"/"}},[r("v-list-item-icon",[r("v-icon",[t._v(t._s(t.icons.mdiSilverware))])],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Menu")])],1)],1),t.$auth.isAuthenticated?r("v-list-item",{attrs:{to:"/profile"}},[r("v-list-item-icon",[r("v-icon",[t._v(t._s(t.icons.mdiAccount))])],1),r("v-list-item-content",[r("v-list-item-title",[t._v("Profile")])],1)],1):t._e(),r("v-list-item",{on:{click:function(e){t.$auth.isAuthenticated?t.logout():t.login()}}},[r("v-list-item-icon",[r("v-icon",[t._v(t._s(t.$auth.isAuthenticated?t.icons.mdiLogoutVariant:t.icons.mdiLoginVariant))])],1),r("v-list-item-content",[r("v-list-item-title",[t._v(t._s(t.$auth.isAuthenticated?"Log out":"Login"))])],1)],1)],1)],1)],1)},v=[],m=r("94ed"),f={data:function(){return{appbarimg:r("51c1"),logo:r("7e3c"),icons:{mdiAccount:m["a"],mdiMenuDown:m["e"],mdiSilverware:m["f"],mdiLogoutVariant:m["d"],mdiLoginVariant:m["c"],mdiAccountCircle:m["b"]}}},methods:{login:function(){this.$auth.loginWithRedirect({scope:"openid profile email read:orders create:orders"})},logout:function(){this.$auth.logout({returnTo:"http://localhost:3000"}),this.$router.push({path:"/"})}}},g=f,b=r("6544"),w=r.n(b),_=r("40dc"),k=r("bb78"),x=r("ce7e"),y=r("132d"),C=r("adda"),O=r("8860"),z=r("da13"),V=r("1800"),S=r("8270"),j=r("5d23"),$=r("34c3"),P=r("f774"),A=r("afd9"),T=Object(u["a"])(g,h,v,!1,null,null,null),I=T.exports;w()(T,{VAppBar:_["a"],VAppBarTitle:k["a"],VDivider:x["a"],VIcon:y["a"],VImg:C["a"],VList:O["a"],VListItem:z["a"],VListItemAction:V["a"],VListItemAvatar:S["a"],VListItemContent:j["a"],VListItemIcon:$["a"],VListItemSubtitle:j["b"],VListItemTitle:j["c"],VNavigationDrawer:P["a"],VSystemBar:A["a"]});var R={metaInfo:{titleTemplate:"Pizza42- %s"},data:function(){return{src:r("cbcd")}},components:{Error:d,Navigation:I}},L=R,D=r("7496"),E=r("b0af"),M=r("f6c4"),U=Object(u["a"])(L,a,n,!1,null,null,null),J=U.exports;w()(U,{VApp:D["a"],VCard:E["a"],VImg:C["a"],VMain:M["a"]});var N=r("bc3a"),W=r.n(N),B={install:function(){i["a"].prototype.$http=W.a}},F=r("8c4f"),G=r("58ca"),H=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("v-row",[r("v-col",{attrs:{cols:"5"}},[r("v-card",{staticClass:"ma-3 pa-3",attrs:{elevation:"2",outlined:"",shaped:""}},[r("v-card-title",[t._v("Menu")]),r("v-list",{attrs:{subheader:"",dense:""}},[r("v-subheader",[t._v("Sizes")]),t._l(t.menu,(function(e){return r("v-list-item",{key:e.size},[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.size)}})],1),r("v-list-item-icon",[r("v-chip",{attrs:{color:"green",outlined:"",pill:""}},[t._v(" $"+t._s(e.price.toLocaleString("en-US",{minimumFractionDigits:2}))+" ")])],1)],1)})),r("v-subheader",[t._v("Toppings")]),t._l(t.toppings,(function(e){return r("v-list-item",{key:e.name},[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(e.name)}})],1),r("v-list-item-icon",[r("v-chip",{attrs:{color:"red lighten-2",outlined:"",pill:""}},[t._v(" "+t._s(e.price)+" ")])],1)],1)}))],2)],1)],1),r("v-col",{attrs:{cols:"5"}},[t.$auth.isAuthenticated?r("v-card",{staticClass:"ma-3 pa-3",attrs:{elevation:"2",outlined:"",shaped:""}},[t.$auth.isAuthenticated?r("v-card-title",[t._v(" Welcome "+t._s(t.$auth.user.name)+" ! ")]):t._e(),r("v-divider"),t.pizza?r("v-list",{attrs:{subheader:"",dense:""}},[r("v-subheader",[t._v("Your Order:")]),r("v-list-item",[r("v-list-item-content",[r("v-list-item-title",{domProps:{textContent:t._s(t.pizza.item)}})],1),r("v-list-item-icon",[r("v-chip",{attrs:{color:"green",outlined:"",pill:""}},[t._v(" "+t._s(t.pizza.price.toLocaleString("en-US",{minimumFractionDigits:2}))+" ")])],1)],1)],1):t._e(),r("v-divider"),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{outlined:"",color:"green"},on:{click:function(e){return t.placeOrder()}}},[t._v(" Select Pizza ")])],1)],1):t._e()],1)],1),r("order-form",{ref:"orderform",on:{"submit-pizza-order":t.updatePizza}}),r("v-snackbar",{attrs:{timeout:1e3,color:"secondary",outlined:"",absolute:"",centered:"",elevation:"5",vertical:"",center:""},scopedSlots:t._u([{key:"action",fn:function(e){var i=e.attrs;return[r("v-btn",t._b({attrs:{text:""},on:{click:function(e){t.snackbar.show=!1}}},"v-btn",i,!1),[t._v(" Close ")])]}}]),model:{value:t.snackbar.show,callback:function(e){t.$set(t.snackbar,"show",e)},expression:"snackbar.show"}},[r("h3",[t._v(t._s(t.snackbar.title))]),r("p",[t._v(t._s(t.snackbar.text))])])],1)},q=[],X=(r("96cf"),r("3b8d")),Y=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",{attrs:{justify:"center"}},[r("v-dialog",{attrs:{persistent:"","max-width":"500px"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[r("v-card",[r("v-card-title",[r("span",{staticClass:"text-h5"},[t._v("Please place your Order")])]),r("v-card-text",[r("p",[t._v("Select your size")]),r("v-radio-group",{attrs:{row:""},model:{value:t.size.value,callback:function(e){t.$set(t.size,"value",e)},expression:"size.value"}},t._l(t.size.options,(function(e){return r("v-radio",{key:e.size,attrs:{color:t.color,label:e.size,value:e.size}})})),1),r("p",[t._v(" Choose your toppings! ")]),t._l(t.toppings.options,(function(e){return r("v-checkbox",{key:e,attrs:{label:e,color:t.color,value:e},model:{value:t.toppings.selected,callback:function(e){t.$set(t.toppings,"selected",e)},expression:"toppings.selected"}})}))],2),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"purple lighten-1",outlined:""},on:{click:function(e){t.dialog=!1}}},[t._v(" Cancel ")]),r("v-btn",{attrs:{color:"purple lighten-1",outlined:""},on:{click:function(e){return t.submit()}}},[t._v(" Submit ")])],1)],1)],1)],1)},K=[],Q=(r("7514"),{name:"OrderForm",data:function(){return{dialog:!1,color:"blue",size:{value:"Single Slice",options:[{size:"Single Slice",price:1},{size:"Small",price:3},{size:"Medium",price:5},{size:"Large",price:8},{size:"X-Large",price:10}]},toppings:{selected:[],options:["Tandoori","Pepperoni","Chilli","Mozeralla","Salami","Corn","Jalapino","Olive"]}}},computed:{orderDetail:function(){var t=this,e=0,r=this.size.options.find((function(e){return e.size===t.size.value}));e+=r.price,e+=this.toppings.selected.length;var i={size:this.size.value,toppings:this.toppings.selected,price:e};return i}},methods:{show:function(){this.dialog=!0},hide:function(){this.dialog=!1},submit:function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(){var e,r,i,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,this.postOrder();case 3:e=t.sent,r="Success: the server responded with '".concat(e.status,": ").concat(e.statusText,"'"),console.warn(r,e.data),i={item:"".concat(this.size.value," ").concat(this.toppings.selected.length>0?"+ "+this.toppings.selected.join(", "):""),price:"$".concat(this.orderDetail.price.toLocaleString("en-US",{minimumFractionDigits:2}))},this.$emit("submit-pizza-order",i),t.next=14;break;case 10:t.prev=10,t.t0=t["catch"](0),a="Error: the server responded with '".concat(t.t0.response.status,": ").concat(t.t0.response.statusText,"'"),console.error(a,t.t0);case 14:return t.prev=14,this.dialog=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[0,10,14,17]])})));function e(){return t.apply(this,arguments)}return e}(),postOrder:function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(){var e,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return e=t.sent,r={method:"POST",url:"https://order-pizza-api.herokuapp.com/api/orders",headers:{Authorization:"Bearer ".concat(e),"Content-Type":"application/json",Accept:"application/json"},data:this.orderDetail},t.next=6,this.$http.request(r);case 6:return t.abrupt("return",t.sent);case 7:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}()}}),Z=Q,tt=r("8336"),et=r("99d9"),rt=r("ac7c"),it=r("169a"),at=r("67b6"),nt=r("43a6"),st=r("0fd9"),ot=r("2fa4"),ct=Object(u["a"])(Z,Y,K,!1,null,null,null),lt=ct.exports;w()(ct,{VBtn:tt["a"],VCard:E["a"],VCardActions:et["a"],VCardText:et["b"],VCardTitle:et["c"],VCheckbox:rt["a"],VDialog:it["a"],VRadio:at["a"],VRadioGroup:nt["a"],VRow:st["a"],VSpacer:ot["a"]});var ut={name:"home",metaInfo:{title:"Home"},components:{OrderForm:lt},data:function(){return{pizza:null,menu:[{size:"Single Slice",price:1},{size:"Small",price:3},{size:"Medium",price:5},{size:"Large",price:8},{size:"X-Large",price:10}],toppings:[{name:"pepperoni",price:"+ £1.00"},{name:"sausage",price:"+ £1.00"},{name:"mushrooms",price:"+ £1.00"},{name:"extra cheese",price:"+ £1.00"},{name:"ham",price:"+ £1.00"},{name:"brocolli",price:"+ £1.00"},{name:"feta cheese",price:"+ £1.00"},{name:"pinapple",price:"+ £1.00"}],orders:[],snackbar:{show:!1,title:"Snackbar Title",text:"Test"}}},methods:{placeOrder:function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:this.$auth.isAuthenticated?this.$auth.user.email_verified?(this.snackbar.show=!1,this.$refs.orderform.show()):(this.snackbar.title="Email Address Not Verified",this.snackbar.text="The account for ".concat(this.$auth.user.email," received an email from the identity provider but the address has not yet been verified. Please follow the instructions in that email to verify the email address."),this.snackbar.show=!0):(this.snackbar.title="User Not Logged In",this.snackbar.text="Please Login before placing an order.",this.snackbar.show=!0);case 1:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),updatePizza:function(t){this.pizza=t}}},pt=ut,dt=r("cc20"),ht=r("62ad"),vt=r("2db4"),mt=r("e0c7"),ft=Object(u["a"])(pt,H,q,!1,null,null,null),gt=ft.exports;w()(ft,{VBtn:tt["a"],VCard:E["a"],VCardActions:et["a"],VCardTitle:et["c"],VChip:dt["a"],VCol:ht["a"],VDivider:x["a"],VList:O["a"],VListItem:z["a"],VListItemContent:j["a"],VListItemIcon:$["a"],VListItemTitle:j["c"],VRow:st["a"],VSnackbar:vt["a"],VSpacer:ot["a"],VSubheader:mt["a"]});var bt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-row",[r("v-col",{attrs:{cols:"5"}},[r("v-card",{staticClass:"ma-3 pa-3",attrs:{elevation:"2",outlined:"",shaped:""}},[r("v-row",[r("v-col",{attrs:{cols:"3"}},[r("v-avatar",{attrs:{color:"primary",size:"56"}},[r("img",{attrs:{src:t.$auth.user.picture,alt:"User's profile picture"}})])],1),r("v-col",{attrs:{cols:"9"}},[r("v-card-title",[t._v(" "+t._s(t.$auth.user.name)+" ")]),r("v-card-text",[t._v(" "+t._s(t.$auth.user.email)+" ")])],1)],1),r("v-card-title",[t._v("Order History")]),r("v-divider"),r("v-data-table",{staticClass:"elevation-1",attrs:{headers:t.headers,items:t.orders,"items-per-page":5}}),r("v-divider"),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{color:"blue darken-1",outlined:""},on:{click:function(e){t.showJSON=!t.showJSON}}},[t._v(" "+t._s(t.showJSON?"Hide JSON":"Show JSON")+" ")])],1)],1)],1),t.showJSON?r("v-col",{attrs:{cols:"7"}},[r("v-card",{staticClass:"ma-3 pa-3",attrs:{elevation:"2",outlined:"",shaped:""}},[r("v-card-title",[t._v("Identity Token")]),r("highlightjs",{staticClass:"rounded w-100",attrs:{autodetect:"",code:JSON.stringify(t.$auth.user,null,2)}})],1)],1):t._e()],1)},wt=[],_t={name:"Profile",metaInfo:{title:"Profile"},data:function(){return{showJSON:!1,headers:[{text:"Timestamp",align:"start",sortable:!0,value:"date"},{text:"Item",value:"item"},{text:"",value:"price"}],orders:[]}},beforeMount:function(){var t=this.$auth.user["https://pizza4242.herokuapp.com"].orders||[];this.orders=t.map((function(t){var e=new Date(t.timestamp);return{date:"".concat(e.getMonth()+1,"/").concat(e.getDate(),"/").concat(e.getFullYear()),item:"".concat(t.size," ").concat(t.toppings.length>0?"+ "+t.toppings.join(", "):""),price:"$".concat(t.price.toLocaleString("en-US",{minimumFractionDigits:2}))}}))}},kt=_t,xt=r("8212"),yt=r("8fea"),Ct=Object(u["a"])(kt,bt,wt,!1,null,null,null),Ot=Ct.exports;w()(Ct,{VAvatar:xt["a"],VBtn:tt["a"],VCard:E["a"],VCardActions:et["a"],VCardText:et["b"],VCardTitle:et["c"],VCol:ht["a"],VDataTable:yt["a"],VDivider:x["a"],VRow:st["a"],VSpacer:ot["a"]});var zt=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{staticClass:"mb-5"},[r("h1",[t._v("External API")]),r("p",[t._v(" Call an external API by clicking the button below. This will call the external API using an access token, and the API will validate it using the API's audience value. ")]),r("button",{staticClass:"btn btn-primary mt-5",on:{click:t.callApi}},[t._v("Call API")])]),r("div",{staticClass:"result-block-container"},[r("div",{class:["result-block",t.executed?"show":""]},[r("h6",{staticClass:"muted"},[t._v("Result")]),r("highlightjs",{attrs:{autodetect:"",code:JSON.stringify(t.apiMessage,null,2)}})],1)])])},Vt=[],St={name:"Api",data:function(){return{apiMessage:null,executed:!1}},methods:{callApi:function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(){var e,r,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,this.$auth.getTokenSilently();case 2:return e=t.sent,t.prev=3,t.next=6,this.$http.get("/api/external",{headers:{Authorization:"Bearer ".concat(e)}});case 6:r=t.sent,i=r.data,this.apiMessage=i,this.executed=!0,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](3),this.apiMessage="Error: the server responded with '".concat(t.t0.response.status,": ").concat(t.t0.response.statusText,"'");case 15:case"end":return t.stop()}}),t,this,[[3,12]])})));function e(){return t.apply(this,arguments)}return e}()}},jt=St,$t=Object(u["a"])(jt,zt,Vt,!1,null,null,null),Pt=$t.exports,At=(r("8e6e"),r("ac6a"),r("456d"),r("386d"),r("6762"),r("2fdb"),r("bd86")),Tt=r("a8db"),It=r("9767"),Rt=["onRedirectCallback","redirectUri"];function Lt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function Dt(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?Lt(Object(r),!0).forEach((function(e){Object(At["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Lt(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var Et,Mt=function(){return window.history.replaceState({},document.title,window.location.pathname)},Ut=function(){return Et},Jt=function(t){var e=t.onRedirectCallback,r=void 0===e?Mt:e,a=t.redirectUri,n=void 0===a?window.location.origin:a,s=Object(Tt["a"])(t,Rt);return Et||(Et=new i["a"]({data:function(){return{loading:!0,isAuthenticated:!1,user:{},auth0Client:null,popupOpen:!1,error:null}},methods:{loginWithPopup:function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(e,r){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.popupOpen=!0,t.prev=1,t.next=4,this.auth0Client.loginWithPopup(e,r);case 4:return t.next=6,this.auth0Client.getUser();case 6:return this.user=t.sent,t.next=9,this.auth0Client.isAuthenticated();case 9:this.isAuthenticated=t.sent,this.error=null,t.next=17;break;case 13:t.prev=13,t.t0=t["catch"](1),console.error(t.t0),this.error=t.t0;case 17:return t.prev=17,this.popupOpen=!1,t.finish(17);case 20:case"end":return t.stop()}}),t,this,[[1,13,17,20]])})));function e(e,r){return t.apply(this,arguments)}return e}(),handleRedirectCallback:function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this.loading=!0,t.prev=1,t.next=4,this.auth0Client.handleRedirectCallback();case 4:return t.next=6,this.auth0Client.getUser();case 6:this.user=t.sent,this.isAuthenticated=!0,this.error=null,t.next=14;break;case 11:t.prev=11,t.t0=t["catch"](1),this.error=t.t0;case 14:return t.prev=14,this.loading=!1,t.finish(14);case 17:case"end":return t.stop()}}),t,this,[[1,11,14,17]])})));function e(){return t.apply(this,arguments)}return e}(),loginWithRedirect:function(t){return this.auth0Client.loginWithRedirect(t)},getIdTokenClaims:function(t){return this.auth0Client.getIdTokenClaims(t)},getTokenSilently:function(t){return this.auth0Client.getTokenSilently(t)},getTokenWithPopup:function(t){return this.auth0Client.getTokenWithPopup(t)},logout:function(t){return this.auth0Client.logout(t)}},created:function(){var t=Object(X["a"])(regeneratorRuntime.mark((function t(){var e,i;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,Object(It["a"])(Dt(Dt({},s),{},{client_id:s.clientId,redirect_uri:n}));case 2:if(this.auth0Client=t.sent,t.prev=3,!window.location.search.includes("code=")||!window.location.search.includes("state=")){t.next=11;break}return t.next=7,this.auth0Client.handleRedirectCallback();case 7:e=t.sent,i=e.appState,this.error=null,r(i);case 11:t.next=16;break;case 13:t.prev=13,t.t0=t["catch"](3),this.error=t.t0;case 16:return t.prev=16,t.next=19,this.auth0Client.isAuthenticated();case 19:return this.isAuthenticated=t.sent,t.next=22,this.auth0Client.getUser();case 22:return this.user=t.sent,this.loading=!1,t.finish(16);case 25:case"end":return t.stop()}}),t,this,[[3,13,16,25]])})));function e(){return t.apply(this,arguments)}return e}()}),Et)},Nt={install:function(t,e){t.prototype.$auth=Jt(e)}},Wt=function(t,e,r){var i=Ut(),a=function(){if(i.isAuthenticated)return r();i.loginWithRedirect({appState:{targetUrl:t.fullPath}})};if(!i.loading)return a();i.$watch("loading",(function(t){if(!1===t)return a()}))};i["a"].use(G["a"]),i["a"].use(F["a"]);var Bt=new F["a"]({mode:"history",base:"/",routes:[{path:"/",name:"home",component:gt},{path:"/profile",name:"profile",component:Ot,beforeEnter:Wt},{path:"/external-api",component:Pt,beforeEnter:Wt}]}),Ft=Bt,Gt=r("1020"),Ht=r.n(Gt),qt=(r("2c43"),r("f309")),Xt=r("fcf4");i["a"].use(qt["a"]);var Yt=new qt["a"]({theme:{dark:!1,themes:{dark:{background:Xt["a"].grey.darken5,surface:Xt["a"].grey.darken3,primary:Xt["a"].blue.lighten3,secondary:Xt["a"].blueGrey.darken2,info:Xt["a"].blueGrey.lighten3,accent:Xt["a"].cyan.accent4,success:Xt["a"].green.darken1,warning:Xt["a"].yellow.lighten4,error:Xt["a"].red.lighten4},light:{background:Xt["a"].grey.lighten5,surface:Xt["a"].grey.lighten4}}},icons:{iconfont:"mdiSvg"}});i["a"].config.productionTip=!1,i["a"].use(Nt,{domain:"6546.eu.auth0.com",clientId:"IcnDTWslOJ6KgfvGSbZ5dUQeW4TcJzIq",audience:"https://6546.eu.auth0.com/api/",onRedirectCallback:function(t){Ft.push(t&&t.targetUrl?t.targetUrl:window.location.pathname)}}),i["a"].use(G["a"]),i["a"].use(Ht.a.vuePlugin),i["a"].use(B),new i["a"]({router:Ft,vuetify:Yt,render:function(t){return t(J)}}).$mount("#app")},"7e3c":function(t,e,r){t.exports=r.p+"img/Pizza42.f980dd5b.jpeg"},cbcd:function(t,e,r){t.exports=r.p+"img/Pizza-Background.85d1d15a.jpg"}});
//# sourceMappingURL=app.1d42cec7.js.map