(function(t){function e(e){for(var a,n,r=e[0],l=e[1],c=e[2],u=0,m=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&m.push(i[n][0]),i[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(m.length)m.shift()();return o.push.apply(o,c||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],a=!0,n=1;n<s.length;n++){var l=s[n];0!==i[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=s[0]))}return t}var a={},i={app:0},o=[];function n(t){return r.p+"js/"+({about:"about"}[t]||t)+"."+{about:"8bf37788"}[t]+".js"}function r(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(t){var e=[],s=i[t];if(0!==s)if(s)e.push(s[2]);else{var a=new Promise((function(e,a){s=i[t]=[e,a]}));e.push(s[2]=a);var o,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=n(t);var c=new Error;o=function(e){l.onerror=l.onload=null,clearTimeout(u);var s=i[t];if(0!==s){if(s){var a=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;c.message="Loading chunk "+t+" failed.\n("+a+": "+o+")",c.name="ChunkLoadError",c.type=a,c.request=o,s[1](c)}i[t]=void 0}};var u=setTimeout((function(){o({type:"timeout",target:l})}),12e4);l.onerror=l.onload=o,document.head.appendChild(l)}return Promise.all(e)},r.m=t,r.c=a,r.d=function(t,e,s){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(s,a,function(e){return t[e]}.bind(null,a));return s},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/room-reserved/",r.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],c=l.push.bind(l);l.push=e,l=l.slice();for(var u=0;u<l.length;u++)e(l[u]);var d=c;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"175b":function(t,e,s){"use strict";var a=s("ab11"),i=s.n(a);i.a},2955:function(t,e,s){"use strict";var a=s("7d55"),i=s.n(a);i.a},"35db":function(t,e,s){"use strict";var a=s("a085"),i=s.n(a);i.a},"44f7":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);var a=s("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("router-view")],1)},o=[],n=(s("5c0b"),s("2877")),r={},l=Object(n["a"])(r,i,o,!1,null,null,null),c=l.exports,u=s("8c4f"),d=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main-container"},[s("div",{staticClass:"logo"},[s("Logo")],1),s("div",[s("Carousel")],1),s("div",{staticClass:"rooms"},[s("RoomStyles")],1)])},m=[],v=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hello"},[s("h1",[t._v(t._s(t.msg))]),t._m(0),s("h3",[t._v("Installed CLI Plugins")]),t._m(1),s("h3",[t._v("Essential Links")]),t._m(2),s("h3",[t._v("Ecosystem")]),t._m(3)])},h=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("p",[t._v(" For a guide and recipes on how to configure / customize this project,"),s("br"),t._v(" check out the "),s("a",{attrs:{href:"https://cli.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-cli documentation")]),t._v(". ")])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-router",target:"_blank",rel:"noopener"}},[t._v("router")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-vuex",target:"_blank",rel:"noopener"}},[t._v("vuex")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Core Docs")])]),s("li",[s("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Forum")])]),s("li",[s("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("Community Chat")])]),s("li",[s("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank",rel:"noopener"}},[t._v("Twitter")])]),s("li",[s("a",{attrs:{href:"https://news.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("News")])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",[s("li",[s("a",{attrs:{href:"https://router.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-router")])]),s("li",[s("a",{attrs:{href:"https://vuex.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vuex")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/vue-devtools#vue-devtools",target:"_blank",rel:"noopener"}},[t._v("vue-devtools")])]),s("li",[s("a",{attrs:{href:"https://vue-loader.vuejs.org",target:"_blank",rel:"noopener"}},[t._v("vue-loader")])]),s("li",[s("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank",rel:"noopener"}},[t._v("awesome-vue")])])])}],p={name:"HelloWorld",props:{msg:String}},g=p,f=(s("2955"),Object(n["a"])(g,v,h,!1,null,"8dc4f3b4",null)),b=(f.exports,function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"rooms-wrapper"},[s("div",{staticClass:"rooms-container"},t._l(t.getRoomsStyles,(function(e,a){return s("div",{key:a,staticClass:"room-container",on:{click:function(s){return t.toRoomDetails(e)}}},[s("div",{staticClass:"img-container1",style:{backgroundImage:"url("+e.imageUrl+")"}}),s("p",[t._v(t._s(t.getRoomsStyles[a].name))]),s("div",{staticClass:"room-context"},[s("span",{staticClass:"price"},[t._v("NT."+t._s(t.getRoomsStyles[a].normalDayPrice))]),s("span",[t._v("平日")]),s("span",{staticClass:"normal-days"},[t._v("NT."+t._s(t.getRoomsStyles[a].holidayPrice)+"假日")])])])})),0)])])}),_=[],D=s("bc3a"),y=s.n(D),C=s("2f62"),w={data(){return{chooseCard:0}},created(){},computed:{...Object(C["b"])(["getRoomsStyles"])},methods:{toRoomDetails(t){console.log(t.id),this.$router.push({path:"/2",query:{cardId:t.id}})}}},k=w,R=(s("175b"),Object(n["a"])(k,b,_,!1,null,"7c232b07",null)),S=R.exports,x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"banner"},[s("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:3e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.getRoomsStyles,(function(t,e){return s("b-carousel-slide",{key:e,staticClass:"h-100",attrs:{"img-src":t.imageUrl}})})),1)],1)},P=[],A={data(){return{slide:0,sliding:null}},methods:{onSlideStart(t){this.sliding=!0},onSlideEnd(t){this.sliding=!1}},created(){},computed:{...Object(C["b"])(["getRoomsStyles"])}},O=A,T=(s("ec89"),Object(n["a"])(O,x,P,!1,null,"2a7246ea",null)),j=T.exports,I=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"wrapper"},[t._m(0),s("div",{staticClass:"logo-context"},[s("div",{staticClass:"left-container"},[s("font-awesome-icon",{staticClass:"left-icon",attrs:{icon:["fab","instagram"]}}),s("font-awesome-icon",{staticClass:"left-icon",attrs:{icon:["fab","facebook-square"]}})],1),s("div",{staticClass:"right-container"},[s("div",[s("font-awesome-icon",{staticClass:"link",attrs:{icon:"phone-square-alt"}}),s("span",[t._v("02-17264937")])],1),s("div",[s("font-awesome-icon",{staticClass:"link",attrs:{icon:"envelope"}}),s("span",[t._v("whitespace@whitespace.com.tw")])],1),s("div",[s("font-awesome-icon",{staticClass:"link",attrs:{icon:"home"}}),s("span",[t._v("台北市羅斯福路十段30號")])],1)])])])},E=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"logo-container"},[s("div",{staticClass:"logo-shadowTop"}),s("div",{staticClass:"logo-shadowLeft"}),t._v("white space ")])])}],$={},B=$,F=(s("35db"),Object(n["a"])(B,I,E,!1,null,"7325cb34",null)),U=F.exports,M={state:{roomsStyles:[],roomDetails:[],booking:[],statusOfPost:""}},W={getRoomsStyles({state:t}){return t.roomsStyles},getRoomDetails({state:t}){return t.roomDetails},getBooking({state:t}){return t.booking},getStatusOfPost({state:t}){return console.log("state",t.statusOfPost),t.statusOfPost}},N={setRoomsStyleAPI({state:t},e){t.roomsStyles=e.data.items},setRoomDetails({state:t},e){t.roomDetails=e.data.room},setBooking({state:t},e){t.booking=e.data.booking},postSuccess({state:t},e){t.statusOfPost="success"},postFail({state:t}){t.statusOfPost="failure"}},q={async getRoomsStyleAPI({commit:t}){const e=await y.a.get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",{headers:{Authorization:"Bearer IOdf0UIIYuWAaUqB84OcRb0NJYEBDWYUFygTLF2N8MV1WD5J6GK4HDHnGwUL"}});t("setRoomsStyleAPI",e)},async getAllRoomDetails({commit:t},e){const s=await y.a.get("https://challenge.thef2e.com/api/thef2e2019/stage6/room/"+e,{headers:{Authorization:"Bearer IOdf0UIIYuWAaUqB84OcRb0NJYEBDWYUFygTLF2N8MV1WD5J6GK4HDHnGwUL"}});t("setRoomDetails",s),t("setBooking",s)},async postBooking({commit:t},{roomId:e,name:s,tel:a,booking:i}){try{const o=await y.a.post("https://challenge.thef2e.com/api/thef2e2019/stage6/room/"+e,{name:s,tel:a,date:i},{headers:{Authorization:"Bearer IOdf0UIIYuWAaUqB84OcRb0NJYEBDWYUFygTLF2N8MV1WD5J6GK4HDHnGwUL"}});t("postSuccess",o),console.log("bannan"),console.log(o.data)}catch(o){t("postFail",o),console.log("orange")}}};a["default"].use(C["a"]);const H=new C["a"].Store({state:M,getters:W,mutations:N,actions:q});var L=H,Y={name:"Home",components:{RoomStyles:S,Carousel:j,Logo:U},created(){},mounted(){}},G=Y,J=(s("ad12"),Object(n["a"])(G,d,m,!1,null,"65d238fa",null)),V=J.exports,z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"main"},[s("Brand"),s("div",{staticClass:"banner-container",class:{reservedToggle:t.isShowReservation}},[t.isShowCarousel?s("RoomCarousel",{attrs:{imgUrl:t.getRoomDetails[0].imageUrl||[]}}):t._e(),s("div",{staticClass:"banner-left",class:{bannerDark:t.isShowCarousel},style:{backgroundImage:"url("+t.getRoomDetails[0].imageUrl[0]+")"},on:{click:function(e){t.isShowCarousel=!t.isShowCarousel}}}),s("div",{class:{bannerDark:t.isShowCarousel}},[s("div",{staticClass:"banner-right",style:{backgroundImage:"url("+t.getRoomDetails[0].imageUrl[1]+")"},on:{click:function(e){t.isShowCarousel=!t.isShowCarousel}}}),s("div",{staticClass:"banner-right",style:{backgroundImage:"url("+t.getRoomDetails[0].imageUrl[2]+")"},on:{click:function(e){t.isShowCarousel=!t.isShowCarousel}}})])],1),s("div",{staticClass:"msg-container",class:{reservedToggle:t.isShowReservation}},[s("div",{staticClass:"msg-left"},[s("div",{staticClass:"context-left"},[s("h1",[t._v(t._s(t.getRoomDetails[0].name))]),s("div",{staticClass:"roomType"},[s("p",[t._v("房客人數限制： "+t._s(t.getRoomDetails[0].descriptionShort.GuestMin)+"~"+t._s(t.getRoomDetails[0].descriptionShort.GuestMax)+" 人")]),s("p",[t._v("床型："+t._s(t.getRoomDetails[0].descriptionShort.Bed[0]))]),s("p",[t._v("衛浴數量："+t._s(t.getRoomDetails[0].descriptionShort["Private-Bath"])+" 間")]),s("p",[t._v("房間大小： "+t._s(t.getRoomDetails[0].descriptionShort.Footage)+" 平方公尺")])]),s("p",{staticClass:"roomDescript"},[t._v(t._s(t.getRoomDetails[0].description))]),s("span",[t._v("\\\\\\")]),s("div",{staticClass:"time-container"},[s("div",[s("p",[t._v("check in")]),s("span",{staticClass:"time"},[t._v(t._s(t.getRoomDetails[0].checkInAndOut.checkInEarly)+" — "+t._s(t.getRoomDetails[0].checkInAndOut.checkInLate))])]),s("div",{staticClass:"checkoutWrapper"},[s("p",[t._v("check out")]),s("span",{staticClass:"time"},[t._v(t._s(t.getRoomDetails[0].checkInAndOut.checkOut))])])]),s("div",{staticClass:"prompt"},[s("div",{staticClass:"icons"},[s("div",{staticClass:"iconsWrapper"},[s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities["Wi-Fi"]}},[s("font-awesome-icon",{attrs:{icon:"wifi"}})],1),s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities.Breakfast}},[s("font-awesome-icon",{attrs:{icon:"utensils"}})],1),s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities["Mini-Bar"]}},[s("font-awesome-icon",{attrs:{icon:"glass-martini-alt"}})],1),s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities["Room-Service"]}},[s("font-awesome-icon",{attrs:{icon:"bell"}})],1)]),s("div",[s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities["Wi-Fi"]}},[s("span",{staticClass:"icon-text"},[t._v("wifi")])]),s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities.Breakfast}},[s("span",{staticClass:"icon-text"},[t._v("早餐")])]),s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities["Mini-Bar"]}},[s("span",{staticClass:"icon-text"},[t._v("Mini Bar")])]),s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities["Room-Service"]}},[s("span",{staticClass:"icon-text"},[t._v("Room service")])])])]),s("div",{staticClass:"icons"},[s("div",{staticClass:"iconsWrapper"},[s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities.Television}},[s("font-awesome-icon",{attrs:{icon:"tty"}})],1),s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities["Air-Conditioner"]}},[s("font-awesome-icon",{attrs:{icon:"fan"}})],1),s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities.Refrigerator}},[s("font-awesome-icon",{attrs:{icon:"dice-six"}})],1),s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities.Sofa}},[s("font-awesome-icon",{attrs:{icon:"couch"}})],1)]),s("div",[s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities.Television}},[s("span",{staticClass:"icon-text"},[t._v("電話")])]),s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities["Air-Conditioner"]}},[s("span",{staticClass:"icon-text"},[t._v("空調")])]),s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities.Refrigerator}},[s("span",{staticClass:"icon-text"},[t._v("冰箱")])]),s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities.Sofa}},[s("span",{staticClass:"icon-text"},[t._v("沙發")])])])]),s("div",{staticClass:"icons"},[s("div",{staticClass:"iconsWrapper"},[s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities["Great-View"]}},[s("font-awesome-icon",{attrs:{icon:"mountain"}})],1),s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities["Smoke-Free"]}},[s("font-awesome-icon",{attrs:{icon:"smoking-ban"}})],1),s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities["Child-Friendly"]}},[s("font-awesome-icon",{attrs:{icon:"baby"}})],1),s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities["Pet-Friendly"]}},[s("font-awesome-icon",{attrs:{icon:"dog"}})],1)]),s("div",[s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities["Great-View"]}},[s("span",{staticClass:"icon-text"},[t._v("漂亮的視野")])]),s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities["Smoke-Free"]}},[s("span",{staticClass:"icon-text"},[t._v("禁止吸煙")])]),s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities["Child-Friendly"]}},[s("span",{staticClass:"icon-text"},[t._v("適合兒童")])]),s("div",{class:{iconActive:!!t.getRoomDetails[0].amenities["Pet-Friendly"]}},[s("span",{staticClass:"icon-text"},[t._v("寵物攜帶")])])])])])]),s("div",{staticClass:"context-right"})]),s("div",{staticClass:"msg-middle"},[s("p",[t._v("NT."+t._s(t.getRoomDetails[0].normalDayPrice))]),s("p",[t._v("平日(一~四)")]),s("p",[t._v("NT."+t._s(t.getRoomDetails[0].holidayPrice))]),s("p",[t._v("假日(五~日)")])]),s("div",{staticClass:"msg-right"},[s("ShowDate",{attrs:{commentIds:t.getBooking}}),s("div",{staticClass:"btn-shadow"}),s("button",{staticClass:"reservation",on:{click:function(e){t.isShowReservation=!t.isShowReservation}}},[t._v("預約時段")])],1)]),t.isShowReservation?s("ReserveTable",{attrs:{roomId:this.$route.query.cardId,normalDayPrice:t.getRoomDetails[0].normalDayPrice,holidayPrice:t.getRoomDetails[0].holidayPrice,commentIds:t.getBooking},on:{isShowResult:t.isShowResult,cancleStatus:t.changeReservation}}):t._e(),t.ShowResults?s("ReserveResult"):t._e()],1)},K=[],Q=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"banner"},[s("b-carousel",{staticStyle:{"text-shadow":"1px 1px 2px #333"},attrs:{id:"carousel-1",interval:3e3,controls:"",indicators:"",background:"#ababab","img-width":"1024","img-height":"480"},on:{"sliding-start":t.onSlideStart,"sliding-end":t.onSlideEnd},model:{value:t.slide,callback:function(e){t.slide=e},expression:"slide"}},t._l(t.imgUrl,(function(t,e){return s("b-carousel-slide",{key:e,staticClass:"h-100",attrs:{"img-src":t}})})),1)],1)},X=[],Z={props:{imgUrl:Array},data(){return{slide:0,sliding:null}},methods:{onSlideStart(t){this.sliding=!0},onSlideEnd(t){this.sliding=!1}},created(){y.a.get("https://challenge.thef2e.com/api/thef2e2019/stage6/rooms",{headers:{Authorization:"Bearer IOdf0UIIYuWAaUqB84OcRb0NJYEBDWYUFygTLF2N8MV1WD5J6GK4HDHnGwUL"}}).then(t=>this.roomsStyles=t.data.items)}},tt=Z,et=(s("f35c"),Object(n["a"])(tt,Q,X,!1,null,"39af6964",null)),st=et.exports,at=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Datepicker",{attrs:{inline:!0,format:t.dateFormat,highlighted:t.highlight,"disabled-dates":t.disabledDates}})],1)},it=[],ot=s("fa33"),nt={components:{Datepicker:ot["a"]},props:{commentIds:{type:Array,required:!0}},data(){return{dateFormat:"yyyy-MM-dd",test1:"",test2:"",highlight:{dates:[],includeDisabled:!0},disabledDates:{dates:[]}}},created(){this.commentIds.map((t,e)=>{this.highlight.dates.push(new Date(t.date)),this.disabledDates.dates.push(new Date(t.date))})}},rt=nt,lt=Object(n["a"])(rt,at,it,!1,null,"4dacdb4e",null),ct=lt.exports,ut=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.isShowResult?s("div",[s("form",[s("h1",[t._v("預約時段")]),s("div",{staticClass:"form-container"},[t._m(0),s("div",{staticClass:"input-container"},[s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputTable.name,expression:"inputTable.name"}],attrs:{type:"text",placeholder:"中/英文名",required:"",onkeypress:"if (event.keyCode == 13) {return false;}"},domProps:{value:t.inputTable.name},on:{input:function(e){e.target.composing||t.$set(t.inputTable,"name",e.target.value)}}}),s("input",{directives:[{name:"model",rawName:"v-model",value:t.inputTable.tel,expression:"inputTable.tel"}],attrs:{type:"tel",placeholder:"09xx",required:"",pattern:"^09\\d{8}$",title:"請輸入手機號碼(10位數)",onkeypress:"if (event.keyCode == 13) {return false;}"},domProps:{value:t.inputTable.tel},on:{input:function(e){e.target.composing||t.$set(t.inputTable,"tel",e.target.value)}}}),s("div",{staticClass:"date-range"},[s("Datepicker",{attrs:{name:"startDate",format:"yyyy-MM-dd",placeholder:"入住日期",highlighted:t.highlight,"disabled-dates":t.disabledDates,onkeypress:"if (event.keyCode == 13) {return false;}"},on:{input:t.countPrice},model:{value:t.startDate,callback:function(e){t.startDate=e},expression:"startDate"}}),s("span",[t._v("~")]),s("Datepicker",{attrs:{name:"endDate",format:"yyyy-MM-dd",placeholder:"退房日期",highlighted:t.highlight,"disabled-dates":t.disabledDates,onkeypress:"if (event.keyCode == 13) {return false;}"},on:{input:t.countPrice},model:{value:t.endDate,callback:function(e){t.endDate=e},expression:"endDate"}})],1)])]),s("div",{staticClass:"total-night"},[t._m(1),s("div",[s("p",[t._v(t._s(t.inputTable.normalDays)+"夜")]),s("p",[t._v(t._s(t.inputTable.weekDays)+"夜")])])]),s("div",{staticClass:"total-cost"},[s("span",[t._v("=")]),s("span",[t._v("NT."+t._s(t.inputTable.totalPrice))])]),s("div",{staticClass:"button-container"},[s("button",{staticClass:"cancle",on:{click:function(e){return e.preventDefault(),t.emit2singleRoom(e)}}},[t._v("取消")]),s("button",{staticClass:"confirm",on:{click:function(e){return e.preventDefault(),t.postTable(e)}}},[t._v("確定預約")])])])]):t._e()},dt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",[t._v("姓名")]),s("p",[t._v("電話")]),s("p",[t._v("預約起訖")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("p",[t._v("平日時段")]),s("p",[t._v("假日時段")])])}],mt={components:{Datepicker:ot["a"]},props:{roomId:{type:String,required:!0},commentIds:{type:Array,required:!0},normalDayPrice:{type:Number,required:!0},holidayPrice:{type:Number,required:!0}},data(){return{cancleStatus:!1,inputTable:{name:"",tel:"",totalPrice:0,normalDays:0,weekDays:0},isShowResult:!0,startDate:"",endDate:"",dateFormat:"yyyy-MM-dd",booking:[],highlight:{dates:[],includeDisabled:!0},disabledDates:{dates:[]}}},created(){this.refreshDatePicker()},computed:{},methods:{refreshDatePicker(){this.highlight.dates.length=0,this.disabledDates.dates.length=0,this.commentIds.map((t,e)=>{this.highlight.dates.push(new Date(t.date)),this.disabledDates.dates.push(new Date(t.date))}),console.log("happy new yaer")},countPrice(){this.booking.length=0;let t=0,e=0,s=0,a=new Date(this.startDate),i=new Date(this.endDate);while(a<i){let s=a.getDay();5===s||6===s||0===s?e+=1:t+=1,a.setDate(a.getDate()+1),this.booking.push(this.formatDate(a))}s=t*this.normalDayPrice+e*this.holidayPrice,console.log(typeof this.startDate),console.log(this.endDate,i),console.table(this.booking),console.log(`平日=>${t}晚`),console.log(`假日=>${e}晚`),console.log("總價格=>"+s),this.inputTable.normalDays=t,this.inputTable.weekDays=e,this.inputTable.totalPrice=s},formatDate(t){let e=t.getFullYear(),s=t.getMonth()+1,a=t.getDate()-1;return s=s<10?"0"+s:s,a=a<10?"0"+a:a,console.log(e+"-"+s+"-"+a),e+"-"+s+"-"+a},postTable(){L.dispatch("postBooking",{roomId:this.roomId,name:this.inputTable.name,tel:this.inputTable.tel,booking:this.booking}),this.isShowResult=!1,this.$emit("isShowResult",this.isShowResult)},emit2singleRoom(){this.cancleStatus=!this.cancleStatus,this.$emit("cancleStatus",this.cancleStatus),L.dispatch("getRoomsStyleAPI"),this.refreshDatePicker()}}},vt=mt,ht=(s("d5f1"),Object(n["a"])(vt,ut,dt,!1,null,"c4e5e7de",null)),pt=ht.exports,gt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",["success"===t.getStatusOfPost?s("div",[s("div",{staticClass:"resultContainer"},[s("h1",[t._v("預約成功")]),s("div",{staticClass:"tickContainer"},[s("font-awesome-icon",{staticClass:"tick",attrs:{icon:"check-circle"}})],1),s("div",{staticClass:"btnContainer"},[s("button",{on:{click:function(e){return e.preventDefault(),t.reload(e)}}},[t._v("回頁面")])])])]):t._e(),"failure"===t.getStatusOfPost?s("div",[s("div",{staticClass:"resultContainer"},[s("h1",[t._v("預約失敗")]),s("p",[t._v("預約時間以被人預定")]),s("div",{staticClass:"btnContainer"},[s("button",{on:{click:function(e){return e.preventDefault(),t.reload(e)}}},[t._v("返回")])])])]):t._e()])},ft=[],bt={data(){return{cancleStatus:!1}},computed:{...Object(C["b"])(["getStatusOfPost"])},methods:{reload(){this.$router.go(0)},toHome(){this.$router.push({name:"Home"})}}},_t=bt,Dt=(s("8120"),Object(n["a"])(_t,gt,ft,!1,null,"3ef8eb24",null)),yt=Dt.exports,Ct=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"shadowTop"}),s("div",{staticClass:"shadowLeft"}),s("div",{staticClass:"brandContainer",on:{click:t.toHomePage}},[s("p",[t._v("WhiteSpace")])])])},wt=[],kt={methods:{toHomePage(){this.$router.push({name:"Home"})}}},Rt=kt,St=(s("584f"),Object(n["a"])(Rt,Ct,wt,!1,null,"745fb589",null)),xt=St.exports,Pt=s("fb24"),At=s.n(Pt),Ot={components:{VueHotelDatepicker:At.a,RoomCarousel:st,Datepicker:ot["a"],ShowDate:ct,ReserveTable:pt,ReserveResult:yt,Brand:xt},data(){return{isShowCarousel:!1,isShowReservation:!1,ShowResults:!1}},computed:{...Object(C["b"])(["getRoomDetails","getBooking"])},methods:{changeReservation(t){this.isShowReservation=!t},isShowResult(t){this.ShowResults=!t,console.log(t)}}},Tt=Ot,jt=(s("f7de"),Object(n["a"])(Tt,z,K,!1,null,"1679a052",null)),It=jt.exports;a["default"].use(u["a"]);const Et=[{path:"/",name:"Home",component:V,beforeEnter:(t,e,s)=>{"RoomDetails"===e.name||L.dispatch("getRoomsStyleAPI"),s()}},{path:"/2",name:"RoomDetails",component:It,beforeEnter:(t,e,s)=>{L.dispatch("getAllRoomDetails",t.query.cardId),s()}},{path:"/about",name:"About",component:function(){return s.e("about").then(s.bind(null,"f820"))}}],$t=new u["a"]({routes:Et});var Bt=$t,Ft=s("5f5b"),Ut=s("b1e0"),Mt=(s("f9e3"),s("2dd8"),s("ecee")),Wt=s("c074"),Nt=s("f2d1"),qt=s("ad3d");Mt["c"].add(Nt["b"],Nt["a"],Wt["l"],Wt["g"],Wt["j"],Wt["p"],Wt["o"],Wt["i"],Wt["b"],Wt["n"],Wt["h"],Wt["e"],Wt["d"],Wt["k"],Wt["m"],Wt["a"],Wt["f"],Wt["c"]),a["default"].component("font-awesome-icon",qt["a"]),a["default"].use(Ft["a"]),a["default"].use(Ut["a"]),a["default"].config.productionTip=!1,new a["default"]({router:Bt,store:L,render:t=>t(c)}).$mount("#app")},"584f":function(t,e,s){"use strict";var a=s("44f7"),i=s.n(a);i.a},"5c0b":function(t,e,s){"use strict";var a=s("9c0c"),i=s.n(a);i.a},"7d55":function(t,e,s){},8120:function(t,e,s){"use strict";var a=s("cdd5"),i=s.n(a);i.a},"8e6c":function(t,e,s){},"9c0c":function(t,e,s){},a085:function(t,e,s){},a6cd:function(t,e,s){},ab11:function(t,e,s){},ad12:function(t,e,s){"use strict";var a=s("a6cd"),i=s.n(a);i.a},b475:function(t,e,s){},b849:function(t,e,s){},cdd5:function(t,e,s){},d5f1:function(t,e,s){"use strict";var a=s("b849"),i=s.n(a);i.a},ec89:function(t,e,s){"use strict";var a=s("b475"),i=s.n(a);i.a},f055:function(t,e,s){},f35c:function(t,e,s){"use strict";var a=s("f055"),i=s.n(a);i.a},f7de:function(t,e,s){"use strict";var a=s("8e6c"),i=s.n(a);i.a}});
//# sourceMappingURL=app.98453ac1.js.map