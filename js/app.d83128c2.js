(function(t){function e(e){for(var s,o,r=e[0],c=e[1],l=e[2],d=0,m=[];d<r.length;d++)o=r[d],Object.prototype.hasOwnProperty.call(n,o)&&n[o]&&m.push(n[o][0]),n[o]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);u&&u(e);while(m.length)m.shift()();return a.push.apply(a,l||[]),i()}function i(){for(var t,e=0;e<a.length;e++){for(var i=a[e],s=!0,r=1;r<i.length;r++){var c=i[r];0!==n[c]&&(s=!1)}s&&(a.splice(e--,1),t=o(o.s=i[0]))}return t}var s={},n={app:0},a=[];function o(e){if(s[e])return s[e].exports;var i=s[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=s,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)o.d(i,s,function(e){return t[e]}.bind(null,s));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/resume/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;a.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"034f":function(t,e,i){"use strict";var s=i("64a9"),n=i.n(s);n.a},"036d":function(t,e,i){"use strict";var s=i("cb85"),n=i.n(s);n.a},"2b3c":function(t,e,i){},"56d7":function(t,e,i){"use strict";i.r(e);i("744f"),i("6c7b"),i("7514"),i("20d6"),i("1c4c"),i("6762"),i("cadf"),i("e804"),i("55dd"),i("d04f"),i("c8ce"),i("217b"),i("7f7f"),i("f400"),i("7f25"),i("536b"),i("d9ab"),i("f9ab"),i("32d7"),i("25c9"),i("9f3c"),i("042e"),i("c7c6"),i("f4ff"),i("049f"),i("7872"),i("a69f"),i("0b21"),i("6c1a"),i("c7c62"),i("84b4"),i("c5f6"),i("2e37"),i("fca0"),i("7cdf"),i("ee1d"),i("b1b1"),i("87f3"),i("9278"),i("5df2"),i("04ff"),i("f751"),i("4504"),i("fee7"),i("ffc1"),i("0d6d"),i("9986"),i("8e6e"),i("25db"),i("e4f7"),i("b9a1"),i("64d5"),i("9aea"),i("db97"),i("66c8"),i("57f0"),i("165b"),i("456d"),i("cf6a"),i("fd24"),i("8615"),i("551c"),i("097d"),i("df1b"),i("2397"),i("88ca"),i("ba16"),i("d185"),i("ebde"),i("2d34"),i("f6b3"),i("2251"),i("c698"),i("a19f"),i("9253"),i("9275"),i("3b2b"),i("3846"),i("4917"),i("a481"),i("28a5"),i("386d"),i("6b54"),i("4f7f"),i("8a81"),i("ac4d"),i("8449"),i("9c86"),i("fa83"),i("48c0"),i("a032"),i("aef6"),i("d263"),i("6c37"),i("9ec8"),i("5695"),i("2fdb"),i("d0b0"),i("5df3"),i("b54a"),i("f576"),i("ed50"),i("788d"),i("14b9"),i("f386"),i("f559"),i("1448"),i("673e"),i("242a"),i("c66f"),i("b05c"),i("34ef"),i("6aa2"),i("15ac"),i("af56"),i("b6e4"),i("9c29"),i("63d9"),i("4dda"),i("10ad"),i("c02b"),i("4795"),i("130f"),i("ac6a"),i("96cf");var s=i("2b0e"),n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{dark:""}},[i("v-navigation-drawer",{staticClass:"navigation-drawer-gradint",attrs:{color:"primary",app:""}},[i("v-row",{staticClass:"pt-5",attrs:{justify:"center","no-gutters":""}},[i("v-avatar",{staticClass:"my-4",attrs:{size:"96"}},[i("img",{attrs:{src:"img/alfredo.jpg",alt:"Alfredo"}})]),i("v-row",{staticClass:"my-4",attrs:{justify:"center"}},[i("span",{staticClass:"title white--text"},[t._v("Alfredo Baquedano")]),i("br"),i("span",{staticClass:"subtitle white--text"},[t._v("Full-stack Developer")])])],1),i("v-list",{staticClass:"pr-6",attrs:{shaped:"",dark:"",dense:""}},[i("v-list-item-group",{attrs:{mandatory:"",value:t.selectedSection,"active-class":"active-nav"}},t._l(t.sections,(function(e){return i("v-list-item",{key:e.id,staticClass:"my-3 py-1",attrs:{value:e.id},on:{click:function(i){return t.navToSection(e.id)}}},[i("v-list-item-icon",[i("v-icon",{domProps:{textContent:t._s(e.icon)}})],1),i("v-list-item-content",[i("v-list-item-title",{domProps:{textContent:t._s(e.text)}})],1)],1)})),1)],1)],1),i("v-content",[i("About",{directives:[{name:"intersect",rawName:"v-intersect",value:{handler:t.onIntersect,options:{threshold:[0,.25,.5,.75,1]}},expression:"{ handler: onIntersect, options: { threshold: [0, 0.25, 0.5, 0.75, 1] }}"}],attrs:{id:"about-section"},on:{contact:function(e){return t.navToSection("contact-section")}}}),i("Experience",{directives:[{name:"intersect",rawName:"v-intersect",value:{handler:t.onIntersect,options:{threshold:[0,.25,.5,.75,1]}},expression:"{ handler: onIntersect, options: { threshold: [0, 0.25, 0.5, 0.75, 1] }}"}],staticClass:"pa-10",attrs:{id:"experience-section"}}),i("Education",{directives:[{name:"intersect",rawName:"v-intersect",value:{handler:t.onIntersect,options:{threshold:[0,.25,.5,.75,1]}},expression:"{ handler: onIntersect, options: { threshold: [0, 0.25, 0.5, 0.75, 1] }}"}],staticClass:"pa-10",attrs:{id:"education-section"}}),i("Projects",{directives:[{name:"intersect",rawName:"v-intersect",value:{handler:t.onIntersect,options:{threshold:[0,.25,.5,.75,1]}},expression:"{ handler: onIntersect, options: { threshold: [0, 0.25, 0.5, 0.75, 1] }}"}],staticClass:"pa-10",attrs:{id:"projects-section"}}),i("References",{directives:[{name:"intersect",rawName:"v-intersect",value:{handler:t.onIntersect,options:{threshold:[0,.25,.5,.75,1]}},expression:"{ handler: onIntersect, options: { threshold: [0, 0.25, 0.5, 0.75, 1] }}"}],staticClass:"pa-10",attrs:{id:"references-section"}}),i("Contact",{directives:[{name:"intersect",rawName:"v-intersect",value:{handler:t.onIntersect,options:{threshold:[0,.25,.5,.75,1]}},expression:"{ handler: onIntersect, options: { threshold: [0, 0.25, 0.5, 0.75, 1] }}"}],staticClass:"pa-10",attrs:{id:"contact-section"}})],1)],1)},a=[],o=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-row",{attrs:{justify:"center"}},[i("h1",{staticClass:"display-1 mb-12"},[t._v("Projects")])]),i("v-row",{staticClass:"px-12",attrs:{"no-gutters":""}},[i("v-carousel",{attrs:{cycle:"",height:"600","hide-delimiter-background":"","show-arrows-on-hover":""}},t._l(5,(function(t){return i("v-carousel-item",{key:t},[i("v-row",[i("v-col"),i("v-col",[i("v-img")],1)],1)],1)})),1)],1)],1)},r=[],c=i("2877"),l={},u=Object(c["a"])(l,o,r,!1,null,null,null),d=u.exports,m=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{position:"relative",height:"100vh"}},[i("div",{staticStyle:{height:"100vh","background-color":"gray"}},[i("v-img",{staticClass:"background-image",attrs:{src:"img/background3.jpg",gradient:"to bottom, rgba(100,115,201,.33), rgba(25,32,72,.6)"}})],1),i("v-row",{staticStyle:{position:"absolute",bottom:"100px"},attrs:{"no-gutters":"",justify:"center",align:"center"}},[i("v-col",{attrs:{cols:"7"}},[i("v-row",{attrs:{"no-gutters":"",align:"center"}},[i("v-col",[i("v-card",{staticStyle:{"text-align":"right"},attrs:{dark:"",color:"transparent",elevation:"0"}},[i("v-card-text",{staticStyle:{"font-size":"3rem"}},[i("span",{style:"color: "+this.$vuetify.theme.themes.light.primary},[t._v("ALFREDO")]),t._v("BAQUEDANO")]),i("v-card-text",[t._v("\n                            "+t._s(t.profileInfo)+"\n                        ")])],1)],1),i("v-divider",{attrs:{dark:"",vertical:""}}),i("v-col",{staticClass:"pa-0",attrs:{cols:"5"}},[i("v-card",{staticStyle:{"align-self":"center"},attrs:{dark:"",color:"transparent",elevation:"0"}},[i("v-card-text",{staticClass:"pa-0"},[i("v-list",{attrs:{dense:"",color:"transparent"}},[i("v-list-item",[i("v-list-item-avatar",[i("v-icon",[t._v("mdi-email")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("\n                                        Email\n                                    ")]),i("v-list-item-subtitle",[t._v("\n                                        "+t._s(t.contactInfo.email)+"\n                                    ")])],1)],1),i("v-list-item",[i("v-list-item-avatar",[i("v-icon",[t._v("mdi-phone")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("\n                                        Phone\n                                    ")]),i("v-list-item-subtitle",[t._v("\n                                        "+t._s(t.contactInfo.phone)+"\n                                    ")])],1)],1),i("v-list-item",[i("v-list-item-avatar",[i("v-icon",[t._v("mdi-calendar")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("\n                                        Date of birth\n                                    ")]),i("v-list-item-subtitle",[t._v("\n                                        "+t._s(t.contactInfo.dateOfBirth)+"\n                                    ")])],1)],1),i("v-list-item",[i("v-list-item-avatar",[i("v-icon",[t._v("mdi-map-marker")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("\n                                        Address\n                                    ")]),i("v-list-item-subtitle",[t._v("\n                                        "+t._s(t.contactInfo.address)+"\n                                    ")])],1)],1),i("v-list-item",[i("v-card-actions",[i("v-btn",{staticClass:"primary--text",staticStyle:{"align-self":"center"},attrs:{rounded:"",color:"white"},on:{click:function(e){return t.$emit("contact")}}},[t._v("CONTACT")])],1)],1)],1)],1)],1)],1)],1)],1)],1)],1)},v=[],p=i("2f62"),f={computed:Object(p["b"])({contactInfo:function(t){return t.person.contactInfo},profileInfo:function(t){return t.person.profileInfo}})},g=f,h=(i("e76e"),Object(c["a"])(g,m,v,!1,null,null,null)),b=h.exports,y=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{width:"100%"}},[i("v-row",{attrs:{justify:"center"}},[i("h1",{staticClass:"display-1 mb-12"},[t._v("Skills & Education")])]),i("v-row",{staticClass:"px-12",attrs:{"no-gutters":"",justify:"space-around"}},[i("v-col",{staticClass:"pa-12"},t._l(t.educations,(function(e,s){return i("v-alert",{key:s,attrs:{border:"left","colored-border":"",color:"primary",elevation:"2",icon:e.type,"data-aos":"fade-right","data-aos-delay":100*s,"data-aos-anchor":"#education-section",prominent:""}},[i("p",{staticClass:"subtitle-2"},[t._v(t._s(e.name))]),i("p",{staticClass:"caption"},[t._v(t._s(e.description))])])})),1),i("v-divider",{attrs:{inset:"",vertical:""}}),i("v-col",{staticClass:"pa-12"},[i("v-row",{attrs:{"no-gutters":"",justify:"space-around"}},t._l(t.skills,(function(e,s){return i("v-col",{key:e.name,staticClass:"pa-3",attrs:{cols:"6","data-aos":"fade-left","data-aos-delay":100*s,"data-aos-anchor":"#education-section"}},[i("h3",{staticClass:"subtitle"},[t._v(t._s(e.name))]),i("v-row",{staticClass:"pb-5",attrs:{justify:"start"}},t._l(e.knowledges,(function(e){return i("v-col",{key:e.name,staticClass:"pa-5",attrs:{cols:"auto"}},[i("v-progress-circular",{attrs:{rotate:360,size:80,width:5,value:e.value,color:"primary"}},[i("span",{staticClass:"caption skill-chart-text"},[t._v(t._s(e.name))])])],1)})),1)],1)})),1)],1)],1)],1)},w=[],C={computed:Object(p["b"])({skills:function(t){return t.person.skills},educations:function(t){return t.person.education}})},x=C,E=(i("036d"),Object(c["a"])(x,y,w,!1,null,null,null)),I=E.exports,A=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-row",{attrs:{justify:"center"}},[i("h1",{staticClass:"display-1 mb-12"},[t._v("Experience")])]),i("v-row",{attrs:{justify:"center"}},[i("v-col",{staticClass:"pa-5",attrs:{cols:"9"}},[i("v-timeline",t._l(t.experiences,(function(e,s){return i("v-timeline-item",{key:s,attrs:{"data-aos":s%2===0?"fade-left":"fade-right","data-aos-delay":150*s,"data-aos-anchor":"#experience-section",color:e.company.color,small:""},scopedSlots:t._u([{key:"icon",fn:function(){return[i("v-avatar",[i("img",{attrs:{src:e.company.logo}})])]},proxy:!0},{key:"opposite",fn:function(){return[i("span",{class:"headline font-weight-bold primary--text"},[t._v("\n              "+t._s(e.year)+"\n            ")])]},proxy:!0}],null,!0)},[i("v-card",{staticClass:"py-4"},[i("v-card-title",{class:"headline font-weight-light mb-4 primary--text"},[t._v("\n              "+t._s(e.position)+"\n            ")]),i("v-card-text",[t._v("\n              "+t._s(e.description)+"\n            ")])],1)],1)})),1)],1)],1)],1)},j=[],L={computed:Object(p["b"])({experiences:function(t){return t.person.experiences}})},k=L,O=(i("bfba"),Object(c["a"])(k,A,j,!1,null,null,null)),S=O.exports,N=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticStyle:{"overflow-x":"auto"}},[i("v-row",{attrs:{justify:"center"}},[i("h1",{staticClass:"display-1 mb-12"},[t._v("References")])]),i("v-row",{staticClass:"px-12",attrs:{"no-gutters":""}},[i("v-slide-group",{attrs:{multiple:"","show-arrows":""}},t._l(t.references,(function(e,s){return i("v-slide-item",{key:s,staticClass:"mx-10 my-1",attrs:{"data-aos":"fade-left","data-aos-delay":100*s,"data-aos-anchor":"#references-section"}},[i("v-card",{staticClass:"pa-4",attrs:{width:"500"}},[i("v-card-text",{staticClass:"font-italic font-weight-light"},[i("v-icon",{attrs:{"x-large":"",color:"primary"}},[t._v("mdi-format-quote-close")]),i("br"),t._v("\n                    "+t._s(e.text)+"\n                ")],1),i("v-card-text",{staticClass:"font-italic font-weight-bold text-right",attrs:{color:"primary"}},[t._v("\n                    "+t._s(e.author.firstName)+" "+t._s(e.author.lastName)+"\n                    "),i("v-avatar",[i("img",{attrs:{src:e.author.image}})])],1)],1)],1)})),1)],1)],1)},T=[],J={computed:Object(p["b"])({references:function(t){return t.person.references}})},M=J,B=Object(c["a"])(M,N,T,!1,null,null,null),P=B.exports,Q=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("v-row",{attrs:{justify:"center"}},[i("h1",{staticClass:"display-1 mb-12"},[t._v("Contact")])]),i("v-row",{staticClass:"px-12 pb-12",attrs:{"no-gutters":"",justify:"center"}},[i("v-col",{staticClass:"px-12",attrs:{cols:"7","data-aos":"fade-right","data-aos-delay":"100","data-aos-anchor":"#contact-section"}},[i("v-card",{staticClass:"pa-5"},[i("v-card-title",[t._v("\n                    Message me\n                ")]),i("v-card-text",[i("v-text-field",{attrs:{label:"Name",dense:"",outlined:""}}),i("v-text-field",{attrs:{label:"Email",dense:"",outlined:""}}),i("v-text-field",{attrs:{label:"Company",dense:"",outlined:""}}),i("v-text-field",{attrs:{label:"Subject",dense:"",outlined:""}}),i("v-textarea",{attrs:{label:"Message",dense:"",outlined:""}})],1),i("v-card-actions",[i("v-btn",{attrs:{rounded:"",color:"primary"}},[t._v("send message")])],1)],1)],1),i("v-col",{staticClass:"px-12",attrs:{cols:"5"}},[i("v-card",{attrs:{"data-aos":"fade-left","data-aos-delay":"100","data-aos-anchor":"#contact-section"}},[i("v-card-title",[t._v("\n                Contact info\n            ")]),i("v-card-text",[i("v-list",{attrs:{dense:"",color:"transparent"}},[i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{attrs:{color:"primary"}},[t._v("mdi-email")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("\n                            Email\n                        ")]),i("v-list-item-subtitle",[t._v("\n                            "+t._s(t.contactInfo.email)+"\n                        ")])],1)],1),i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{attrs:{color:"primary"}},[t._v("mdi-phone")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("\n                            Phone\n                        ")]),i("v-list-item-subtitle",[t._v("\n                            "+t._s(t.contactInfo.phone)+"\n                        ")])],1)],1),i("v-list-item",[i("v-list-item-avatar",[i("v-icon",{attrs:{color:"primary"}},[t._v("mdi-map-marker")])],1),i("v-list-item-content",[i("v-list-item-title",[t._v("\n                            Address\n                        ")]),i("v-list-item-subtitle",[t._v("\n                            "+t._s(t.contactInfo.address)+"\n                        ")])],1)],1)],1)],1)],1)],1)],1)],1)},Y=[],D={computed:Object(p["b"])({contactInfo:function(t){return t.person.contactInfo}})},G=D,q=Object(c["a"])(G,Q,Y,!1,null,null,null),F=q.exports;function R(t){return H(t)||z(t)||K()}function K(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function z(t){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t))return Array.from(t)}function H(t){if(Array.isArray(t)){for(var e=0,i=new Array(t.length);e<t.length;e++)i[e]=t[e];return i}}var U={name:"App",components:{Projects:d,About:b,Education:I,Experience:S,References:P,Contact:F},data:function(){return{selectedSection:void 0,sections:[{id:"about-section",text:"About",icon:"mdi-account",intersectRatio:0},{id:"experience-section",text:"Experience",icon:"mdi-briefcase",intersectRatio:0},{id:"education-section",text:"Skills & Education",icon:"mdi-school",intersectRatio:0},{id:"projects-section",text:"Projects",icon:"mdi-file-document-box-multiple",intersectRatio:0},{id:"references-section",text:"References",icon:"mdi-format-quote-close",intersectRatio:0},{id:"contact-section",text:"Contact",icon:"mdi-email",intersectRatio:0}],navActions:[],navActionsFinished:[]}},computed:{disableIntersection:function(){return this.navActions.length!==this.navActionsFinished.length}},methods:{onIntersect:function(t,e,i){var s=this;if(t.forEach((function(t){s.sections.find((function(e){return e.id===t.target.id})).intersectRatio=t.intersectionRatio})),!this.disableIntersection){var n=R(this.sections).sort((function(t,e){return e.intersectRatio-t.intersectRatio}));this.selectedSection=n[0].id}},navToSection:function(t){var e=this;this.navActions.push(this.$vuetify.goTo("#".concat(t)).then((function(){e.navActionsFinished.push(!0)})))}}},V=U,W=(i("034f"),Object(c["a"])(V,n,a,!1,null,null,null)),X=W.exports;s["default"].use(p["a"]);var Z=new p["a"].Store({state:{person:{contactInfo:{image:"assets/alfredo.jpg",firstName:"Alfredo",lastName:"Baquedano",email:"alfredo.baquedano.c@gmal.com",phone:"+569 8443 3012",address:"Manuel Bayón 3273, Talcahuano, Chile",dateOfBirth:"05/06/1993",linkedin:void 0,github:void 0,facebook:void 0},profileInfo:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse eu mi dapibus, varius purus vitae, dapibus nunc. Curabitur pellentesque varius ante interdum pellentesque. Aenean pretium sollicitudin augue quis gravida. Nunc a varius dolor. Duis at enim ante. Mauris id facilisis nisi. Maecenas sed bibendum sapien. In imperdiet ipsum magna, nec tincidunt tellus pulvinar et. Fusce sit amet porta elit, eget commodo massa. Duis viverra non mi in blandit. Nulla mollis dignissim sem ut sodales. Morbi faucibus leo massa.",experiences:[{year:"2018 - Now",company:{color:"red",logo:"https://yt3.ggpht.com/a-/AAuE7mCc1I1yr1XXHoVmMR9z4Fx7Q_Ykr9I9YX1XiA=s900-mo-c-c0xffffffff-rj-k-no",name:"Sicom Electronics"},position:"Full-stack Developer",description:"Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."},{year:"2018",company:{color:"blue",logo:"http://www.uestatales.cl/cue/sites/default/files/universidades/biobio.jpg?1254970361",name:"Universidad del Bío-Bío"},position:"Teacher",description:"Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."},{year:"2017 - 2018",company:{color:"green",logo:"data:image/png;base64,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",name:"SmartGrows"},position:"Full-stack Developer",description:"Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."},{year:"2016",company:{color:"cyan",logo:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRHZy8Cyqn_SBVYOMOaxSdDmCjEt7aCNgFIS3nMLYPVPW-ESDbibg",name:"CIMUBB"},position:"Intern",description:"Lorem ipsum dolor sit amet, no nam oblique veritus. Commune scaevola imperdiet nec ut, sed euismod convenire principes at. Est et nobis iisque percipit, an vim zril disputando voluptatibus, vix an salutandi sententiae."}],skills:[{name:"FrontEnd Web",knowledges:[{name:"Vue.js",value:88},{name:"React",value:75}]},{name:"FrontEnd Mobile",knowledges:[{name:"React\nNative",value:57},{name:"Java",value:60}]},{name:"BackEnd",knowledges:[{name:"Lumen",value:64},{name:"Express",value:30}]},{name:"SGBD",knowledges:[{name:"MySQL",value:64},{name:"MongoDB",value:34}]},{name:"Other Programming Languages",knowledges:[{name:"Java",value:65},{name:"Python",value:23}]},{name:"Other Skills",knowledges:[{name:"Git",value:78},{name:"Security",value:43}]}],projects:[],education:[{name:"Lorem ipsum",type:"mdi-school",date:"",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem scelerisque nibh congue consectetur ut eget elit. Curabitur facilisis justo et facilisis ultrices"},{name:"Lorem ipsum",type:"mdi-school",date:"",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem scelerisque nibh congue consectetur ut eget elit. Curabitur facilisis justo et facilisis ultrices"},{name:"Lorem ipsum",type:"mdi-certificate",date:"",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem scelerisque nibh congue consectetur ut eget elit. Curabitur facilisis justo et facilisis ultrices"},{name:"Lorem ipsum",type:"mdi-certificate",date:"",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem scelerisque nibh congue consectetur ut eget elit. Curabitur facilisis justo et facilisis ultrices"}],references:[{author:{firstName:"Lorem",lastName:"ipsum",position:"",image:"img/alfredo.jpg"},text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem scelerisque nibh congue consectetur ut eget elit. Curabitur facilisis justo et facilisis ultrices"},{author:{firstName:"Lorem",lastName:"ipsum",position:"",image:"img/alfredo.jpg"},text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem scelerisque nibh congue consectetur ut eget elit. Curabitur facilisis justo et facilisis ultrices"},{author:{firstName:"Lorem",lastName:"ipsum",position:"",image:"img/alfredo.jpg"},text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem scelerisque nibh congue consectetur ut eget elit. Curabitur facilisis justo et facilisis ultrices"},{author:{firstName:"Lorem",lastName:"ipsum",position:"",image:"img/alfredo.jpg"},text:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent id lorem scelerisque nibh congue consectetur ut eget elit. Curabitur facilisis justo et facilisis ultrices"}]}}}),_=i("9483");Object(_["a"])("".concat("/resume/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var $=i("ce5b"),tt=i.n($),et=(i("bf40"),i("2e15")),it=i.n(et);i("5363");s["default"].use(tt.a);var st=new tt.a({theme:{dark:!1,options:{customProperties:!0},themes:{light:{primary:"#073e94",secondary:"#424242",accent:"#2E8B57",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"},dark:{primary:"#3CB371",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FFC107"}}},lang:{locales:{es:it.a},current:"es"},icons:{iconfont:"mdi"}}),nt=(i("d5e8"),i("f5af")),at=i.n(nt);i("e829");s["default"].config.productionTip=!1,new s["default"]({created:function(){at.a.init()},store:Z,vuetify:st,render:function(t){return t(X)}}).$mount("#app")},"64a9":function(t,e,i){},bfba:function(t,e,i){"use strict";var s=i("e3b2"),n=i.n(s);n.a},cb85:function(t,e,i){},e3b2:function(t,e,i){},e76e:function(t,e,i){"use strict";var s=i("2b3c"),n=i.n(s);n.a}});
//# sourceMappingURL=app.d83128c2.js.map