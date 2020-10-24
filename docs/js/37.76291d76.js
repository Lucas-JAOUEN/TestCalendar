(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[37],{4935:function(a,e,t){"use strict";t.r(e);var l=function(){var a=this,e=a.$createElement,t=a._self._c||e;return t("div",{staticStyle:{"max-width":"800px",width:"100%"}},[t("div",{staticClass:"full-width"},[t("q-select",{staticClass:"col-12",attrs:{outlined:"",dense:"","emit-value":"","map-options":"",label:"Change locale",options:a.locales},model:{value:a.locale,callback:function(e){a.locale=e},expression:"locale"}})],1),t("q-separator"),t("q-calendar",{staticStyle:{height:"400px"},attrs:{view:"week-agenda",locale:a.locale},scopedSlots:a._u([{key:"day-body",fn:function(e){var l=e.timestamp;return[a._l(a.getAgenda(l),(function(e){return[t("div",{key:l.date+e.time,staticClass:"justify-start q-ma-sm shadow-5 bg-grey-6",attrs:{label:e.time}},[e.avatar?t("div",{staticClass:"row justify-center",staticStyle:{"margin-top":"30px",width:"100%"}},[t("q-avatar",{staticStyle:{"margin-top":"-25px","margin-bottom":"10px","font-size":"60px","max-height":"50px"}},[t("img",{staticStyle:{border:"#9e9e9e solid 5px"},attrs:{src:e.avatar}})])],1):a._e(),t("div",{staticClass:"col-12 q-px-sm"},[t("strong",[a._v(a._s(e.time))])]),e.desc?t("div",{staticClass:"col-12 q-px-sm",staticStyle:{"font-size":"10px"}},[a._v("\n            "+a._s(e.desc)+"\n          ")]):a._e()])]}))]}}]),model:{value:a.selectedDate,callback:function(e){a.selectedDate=e},expression:"selectedDate"}})],1)},s=[],i=(t("4160"),t("b0c0"),t("159b"),t("ded3")),v=t.n(i),r={data:function(){return{selectedDate:"",locale:"en-us",locales:[{value:"ar",label:"العربية"},{value:"bg",label:"български език"},{value:"ca",label:"Català"},{value:"cs",label:"Čeština"},{value:"da",label:"Dansk"},{value:"de",label:"Deutsch"},{value:"en-gb",label:"English (UK)"},{value:"en-us",label:"English (US)"},{value:"eo",label:"Esperanto"},{value:"es",label:"Español"},{value:"fa-ir",label:"فارسی"},{value:"fi",label:"Suomi"},{value:"fr",label:"Français"},{value:"gn",label:"Avañe'ẽ"},{value:"he",label:"עברית"},{value:"hr",label:"Hrvatski jezik"},{value:"hu",label:"Magyar"},{value:"id",label:"Bahasa Indonesia"},{value:"it",label:"Italiano"},{value:"ja",label:"日本語 (にほんご)"},{value:"km",label:"ខ្មែរ"},{value:"ko-kr",label:"한국어"},{value:"lu",label:"Kiluba"},{value:"lv",label:"Latviešu valoda"},{value:"ml",label:"മലയാളം"},{value:"ms",label:"Bahasa Melayu"},{value:"nb-no",label:"Norsk"},{value:"nl",label:"Nederlands"},{value:"pl",label:"Polski"},{value:"pt-br",label:"Português (BR)"},{value:"pt",label:"Português"},{value:"ro",label:"Română"},{value:"ru",label:"русский"},{value:"sk",label:"Slovenčina"},{value:"sl",label:"Slovenski Jezik"},{value:"sr",label:"српски језик"},{value:"sv",label:"Svenska"},{value:"ta",label:"தமிழ்"},{value:"th",label:"ไทย"},{value:"tr",label:"Türkçe"},{value:"uk",label:"Українська"},{value:"vi",label:"Tiếng Việt"},{value:"zh-hans",label:"中文(简体)"},{value:"zh-hant",label:"中文(繁體)"}],agenda:{1:[{time:"08:00",avatar:"https://cdn.quasar.dev/img/boy-avatar.png",desc:"Meeting with CEO"},{time:"08:30",avatar:"https://cdn.quasar.dev/img/avatar.png",desc:"Meeting with HR"},{time:"10:00",avatar:"https://cdn.quasar.dev/img/avatar1.jpg",desc:"Meeting with Karen"}],2:[{time:"11:30",avatar:"https://cdn.quasar.dev/img/avatar2.jpg",desc:"Meeting with Alisha"},{time:"17:00",avatar:"https://cdn.quasar.dev/img/avatar3.jpg",desc:"Meeting with Sarah"}],3:[{time:"08:00",desc:"Stand-up SCRUM",avatar:"https://cdn.quasar.dev/img/material.png"},{time:"09:00",avatar:"https://cdn.quasar.dev/img/boy-avatar.png"},{time:"10:00",desc:"Sprint planning",avatar:"https://cdn.quasar.dev/img/material.png"},{time:"13:00",avatar:"https://cdn.quasar.dev/img/avatar1.jpg"}],4:[{time:"09:00",avatar:"https://cdn.quasar.dev/img/avatar3.jpg"},{time:"10:00",avatar:"https://cdn.quasar.dev/img/avatar2.jpg"},{time:"13:00",avatar:"https://cdn.quasar.dev/img/material.png"}],5:[{time:"08:00",avatar:"https://cdn.quasar.dev/img/boy-avatar.png"},{time:"09:00",avatar:"https://cdn.quasar.dev/img/avatar2.jpg"},{time:"09:30",avatar:"https://cdn.quasar.dev/img/avatar4.jpg"},{time:"10:00",avatar:"https://cdn.quasar.dev/img/avatar5.jpg"},{time:"11:30",avatar:"https://cdn.quasar.dev/img/material.png"},{time:"13:00",avatar:"https://cdn.quasar.dev/img/avatar6.jpg"},{time:"13:30",avatar:"https://cdn.quasar.dev/img/avatar3.jpg"},{time:"14:00",avatar:"https://cdn.quasar.dev/img/linux-avatar.png"},{time:"14:30",avatar:"https://cdn.quasar.dev/img/avatar.png"},{time:"15:00",avatar:"https://cdn.quasar.dev/img/boy-avatar.png"},{time:"15:30",avatar:"https://cdn.quasar.dev/img/avatar2.jpg"},{time:"16:00",avatar:"https://cdn.quasar.dev/img/avatar6.jpg"}]}}},computed:{themesList:function(){var a=[];return this.themes.forEach((function(e){a.push({label:e.name,value:v()({},e)})})),a}},methods:{getAgenda:function(a){return this.agenda[parseInt(a.weekday,10)]}}},n=r,u=t("2877"),d=t("ddd8"),c=t("eb85"),p=t("cb32"),m=t("eebe"),g=t.n(m),o=Object(u["a"])(n,l,s,!1,null,null,null);e["default"]=o.exports;g()(o,"components",{QSelect:d["a"],QSeparator:c["a"],QAvatar:p["a"]})}}]);