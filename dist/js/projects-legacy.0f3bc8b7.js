(self["webpackChunkvuejs_tailwindcss_portfolio"]=self["webpackChunkvuejs_tailwindcss_portfolio"]||[]).push([[176],{4964:function(e,t,r){var i=r(5112),n=i("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,"/./"[e](t)}catch(i){}}return!1}},7045:function(e,t,r){var i=r(6339),n=r(3070);e.exports=function(e,t,r){return r.get&&i(r.get,t,{getter:!0}),r.set&&i(r.set,t,{setter:!0}),n.f(e,t,r)}},9587:function(e,t,r){var i=r(614),n=r(111),o=r(7674);e.exports=function(e,t,r){var a,s;return o&&i(a=t.constructor)&&a!==r&&n(s=a.prototype)&&s!==r.prototype&&o(e,s),e}},7850:function(e,t,r){var i=r(111),n=r(4326),o=r(5112),a=o("match");e.exports=function(e){var t;return i(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==n(e))}},3929:function(e,t,r){var i=r(7854),n=r(7850),o=i.TypeError;e.exports=function(e){if(n(e))throw o("The method doesn't accept regular expressions");return e}},2626:function(e,t,r){var i=r(3070).f;e.exports=function(e,t,r){r in e||i(e,r,{configurable:!0,get:function(){return t[r]},set:function(e){t[r]=e}})}},4706:function(e,t,r){var i=r(6916),n=r(2597),o=r(7976),a=r(7066),s=RegExp.prototype;e.exports=function(e){var t=e.flags;return void 0!==t||"flags"in s||n(e,"flags")||!o(s,e)?t:i(a,e)}},7327:function(e,t,r){"use strict";var i=r(2109),n=r(2092).filter,o=r(1194),a=o("filter");i({target:"Array",proto:!0,forced:!a},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},6699:function(e,t,r){"use strict";var i=r(2109),n=r(1318).includes,o=r(7293),a=r(1223),s=o((function(){return!Array(1).includes()}));i({target:"Array",proto:!0,forced:s},{includes:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),a("includes")},9600:function(e,t,r){"use strict";var i=r(2109),n=r(1702),o=r(8361),a=r(5656),s=r(9341),l=n([].join),c=o!=Object,u=s("join",",");i({target:"Array",proto:!0,forced:c||!u},{join:function(e){return l(a(this),void 0===e?",":e)}})},4603:function(e,t,r){var i=r(9781),n=r(7854),o=r(1702),a=r(4705),s=r(9587),l=r(8880),c=r(8006).f,u=r(7976),d=r(7850),p=r(1340),m=r(4706),g=r(2999),f=r(2626),h=r(8052),x=r(7293),v=r(2597),b=r(9909).enforce,y=r(6340),w=r(5112),k=r(9441),j=r(7168),_=w("match"),P=n.RegExp,D=P.prototype,I=n.SyntaxError,S=o(D.exec),C=o("".charAt),U=o("".replace),H=o("".indexOf),q=o("".slice),E=/^\?<[^\s\d!#%&*+<=>@^][^\s!#%&*+<=>@^]*>/,z=/a/g,M=/a/g,A=new P(z)!==z,T=g.MISSED_STICKY,R=g.UNSUPPORTED_Y,L=i&&(!A||T||k||j||x((function(){return M[_]=!1,P(z)!=z||P(M)==M||"/a/i"!=P(z,"i")}))),W=function(e){for(var t,r=e.length,i=0,n="",o=!1;i<=r;i++)t=C(e,i),"\\"!==t?o||"."!==t?("["===t?o=!0:"]"===t&&(o=!1),n+=t):n+="[\\s\\S]":n+=t+C(e,++i);return n},G=function(e){for(var t,r=e.length,i=0,n="",o=[],a={},s=!1,l=!1,c=0,u="";i<=r;i++){if(t=C(e,i),"\\"===t)t+=C(e,++i);else if("]"===t)s=!1;else if(!s)switch(!0){case"["===t:s=!0;break;case"("===t:S(E,q(e,i+1))&&(i+=2,l=!0),n+=t,c++;continue;case">"===t&&l:if(""===u||v(a,u))throw new I("Invalid capture group name");a[u]=!0,o[o.length]=[u,c],l=!1,u="";continue}l?u+=t:n+=t}return[n,o]};if(a("RegExp",L)){for(var K=function(e,t){var r,i,n,o,a,c,g=u(D,this),f=d(e),h=void 0===t,x=[],v=e;if(!g&&f&&h&&e.constructor===K)return e;if((f||u(D,e))&&(e=e.source,h&&(t=m(v))),e=void 0===e?"":p(e),t=void 0===t?"":p(t),v=e,k&&"dotAll"in z&&(i=!!t&&H(t,"s")>-1,i&&(t=U(t,/s/g,""))),r=t,T&&"sticky"in z&&(n=!!t&&H(t,"y")>-1,n&&R&&(t=U(t,/y/g,""))),j&&(o=G(e),e=o[0],x=o[1]),a=s(P(e,t),g?this:D,K),(i||n||x.length)&&(c=b(a),i&&(c.dotAll=!0,c.raw=K(W(e),r)),n&&(c.sticky=!0),x.length&&(c.groups=x)),e!==v)try{l(a,"source",""===v?"(?:)":v)}catch(y){}return a},F=c(P),Y=0;F.length>Y;)f(K,P,F[Y++]);D.constructor=K,K.prototype=D,h(n,"RegExp",K,{constructor:!0})}y("RegExp")},8450:function(e,t,r){var i=r(7854),n=r(9781),o=r(9441),a=r(4326),s=r(7045),l=r(9909).get,c=RegExp.prototype,u=i.TypeError;n&&o&&s(c,"dotAll",{configurable:!0,get:function(){if(this!==c){if("RegExp"===a(this))return!!l(this).dotAll;throw u("Incompatible receiver, RegExp required")}}})},8386:function(e,t,r){var i=r(7854),n=r(9781),o=r(2999).MISSED_STICKY,a=r(4326),s=r(7045),l=r(9909).get,c=RegExp.prototype,u=i.TypeError;n&&o&&s(c,"sticky",{configurable:!0,get:function(){if(this!==c){if("RegExp"===a(this))return!!l(this).sticky;throw u("Incompatible receiver, RegExp required")}}})},9714:function(e,t,r){"use strict";var i=r(6530).PROPER,n=r(8052),o=r(9670),a=r(1340),s=r(7293),l=r(4706),c="toString",u=RegExp.prototype,d=u[c],p=s((function(){return"/a/b"!=d.call({source:"a",flags:"b"})})),m=i&&d.name!=c;(p||m)&&n(RegExp.prototype,c,(function(){var e=o(this),t=a(e.source),r=a(l(e));return"/"+t+"/"+r}),{unsafe:!0})},2023:function(e,t,r){"use strict";var i=r(2109),n=r(1702),o=r(3929),a=r(4488),s=r(1340),l=r(4964),c=n("".indexOf);i({target:"String",proto:!0,forced:!l("includes")},{includes:function(e){return!!~c(s(a(this)),s(o(e)),arguments.length>1?arguments[1]:void 0)}})},4723:function(e,t,r){"use strict";var i=r(6916),n=r(7007),o=r(9670),a=r(7466),s=r(1340),l=r(4488),c=r(8173),u=r(1530),d=r(7651);n("match",(function(e,t,r){return[function(t){var r=l(this),n=void 0==t?void 0:c(t,e);return n?i(n,t,r):new RegExp(t)[e](s(r))},function(e){var i=o(this),n=s(e),l=r(t,i,n);if(l.done)return l.value;if(!i.global)return d(i,n);var c=i.unicode;i.lastIndex=0;var p,m=[],g=0;while(null!==(p=d(i,n))){var f=s(p[0]);m[g]=f,""===f&&(i.lastIndex=u(n,a(i.lastIndex),c)),g++}return 0===g?null:m}]}))},4622:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return w}});var i=r(6252),n={class:"flex justify-center"};function o(e,t,r,o,a,s){var l=(0,i.up)("ContactDetails");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(l,{contacts:e.contacts},null,8,["contacts"])])}r(4916),r(5306);var a=r(8508),s=r.n(a),l=(r(8309),r(3577)),c={class:""},u={class:"text-center max-w-xl px-6 py-12"},d=(0,i._)("h1",{class:"font-general-medium text-4xl text-primary-dark dark:text-primary-light mt-12 mb-12"}," Ways To Contact Me ",-1),p={class:"font-general-regular"},m=["data-feather"];function g(e,t,r,n,o,a){return(0,i.wg)(),(0,i.iD)("div",c,[(0,i._)("div",u,[d,(0,i._)("ul",p,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.contacts,(function(e){return(0,i.wg)(),(0,i.iD)("li",{class:"flex",key:e.id},[(0,i._)("i",{"data-feather":e.icon,class:"w-5 text-gray-500 dark:text-gray-400 mr-4"},null,8,m),(0,i._)("a",{href:"#",class:(0,l.C_)(["text-lg mb-4 text-ternary-dark dark:text-ternary-light","mail"===e.icon||"phone"===e.icon?"hover:underline cursor-pointer":""]),"aria-label":"Website and Phone"},(0,l.zw)(e.name),3)])})),128))])])])}var f={props:["contacts"]},h=r(3744);const x=(0,h.Z)(f,[["render",g]]);var v=x,b={components:{ContactDetails:v},data:function(){return{contacts:[{id:1,name:"afnnun1070@gmail.com",icon:"mail"},{id:2,name:"098-304-4317",icon:"phone"}]}},mounted:function(){s().replace()},updated:function(){s().replace()},methods:{}};const y=(0,h.Z)(b,[["render",o]]);var w=y},6453:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return z}});var i=r(6252),n={class:"container mx-auto"};function o(e,t,r,o,a,s){var l=(0,i.up)("ProjectsGrid");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(l)])}var a=r(3577),s=function(e){return(0,i.dD)("data-v-a0abfa9e"),e=e(),(0,i.Cn)(),e},l={class:"pt-10 sm:pt-14"},c={class:"text-center"},u={class:"font-general-semibold text-2xl sm:text-5xl font-semibold mb-2 text-ternary-dark dark:text-ternary-light"},d={class:"mt-10 sm:mt-10"},p={class:"flex justify-center items-center invisible md:visible xl:visible"},m=s((function(){return(0,i._)("h3",{class:"text-2xl xl:text-4xl font-bold mx-2 xl:mx-4"},"/",-1)})),g={class:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10 lg:gap-1"};function f(e,t,r,n,o,s){var f=(0,i.up)("ProjectSingle");return(0,i.wg)(),(0,i.iD)("section",l,[(0,i._)("div",c,[(0,i._)("p",u,(0,a.zw)(e.projectsHeading),1)]),(0,i._)("div",d,[(0,i._)("div",p,[(0,i._)("a",{href:"#",class:(0,a.C_)(["font-general-medium block text-left text-xl font-bold text-primary-dark hover:text-rose-700 mb-2 hover-underline-animation",{"text-3xl text-rose-700":e.isCheckUxUi}]),onClick:t[0]||(t[0]=function(){return s.toggleUxUi&&s.toggleUxUi.apply(s,arguments)})},"UX/UI",2),m,(0,i._)("a",{href:"#",class:(0,a.C_)(["font-general-medium block text-left text-xl font-bold text-primary-dark hover:text-rose-700 mb-2 hover-underline-animation",{"text-3xl text-rose-700":e.isCheckGraphic}]),onClick:t[1]||(t[1]=function(){return s.toggleGraphic&&s.toggleGraphic.apply(s,arguments)})},"Graphic Design ",2)])]),(0,i._)("div",g,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(s.filteredProjects,(function(e){return(0,i.wg)(),(0,i.j4)(f,{key:e.id,project:e},null,8,["project"])})),128))])])}r(7327),r(1539),r(7042),r(6699),r(2023),r(4603),r(8450),r(4916),r(8386),r(9714),r(4723),r(5306);var h=r(8508),x=r.n(h),v=["src","alt"],b={class:"text-center px-4 py-6"},y={class:"font-general-semibold text-xl text-ternary-dark dark:text-ternary-light font-semibold mb-2"},w={class:"font-general-medium text-lg text-ternary-dark dark:text-ternary-light"};function k(e,t,r,n,o,s){var l=(0,i.up)("router-link");return(0,i.wg)(),(0,i.j4)(l,{to:"/projects/single-project",class:"rounded-xl shadow-lg hover:shadow-xl cursor-pointer mb-10 sm:mb-0 bg-secondary-light","aria-label":"Single Project"},{default:(0,i.w5)((function(){return[(0,i._)("div",null,[(0,i._)("img",{src:r.project.img,alt:r.project.title,class:"rounded-t-xl border-none"},null,8,v)]),(0,i._)("div",b,[(0,i._)("p",y,(0,a.zw)(r.project.title),1),(0,i._)("span",w,(0,a.zw)(r.project.category),1)])]})),_:1})}var j={props:["project"]},_=r(3744);const P=(0,_.Z)(j,[["render",k]]);var D=P,I={uxui:[{id:1,title:"Google Health Platform",category:"Web Application",img:r(7294)},{id:2,title:"Phoenix Digital Agency",category:"Mobile Application",img:r(8687)},{id:3,title:"Project Management UI",category:"UI/UX Design",img:r(2035)}],graphic:[{id:1,title:"Google Health Platform",category:"Web Application",img:r(7294)},{id:2,title:"Phoenix Digital Agency",category:"Mobile Application",img:r(8687)}]},S=I,C={components:{ProjectSingle:D},data:function(){return{projects:S,projectsHeading:"Projects Portfolio",selectedCategory:"",searchProject:"",isCheckUxUi:!0,isCheckGraphic:!1,active:4}},computed:{filteredProjects:function(){return this.selectedCategory?this.filterProjectsByCategory():this.searchProject?this.filterProjectsBySearch():this.isCheckUxUi?this.projects.uxui:this.projects.graphic}},methods:{filterProjectsByCategory:function(){var e=this;return this.projects.uxui.filter((function(t){var r=t.category.charAt(0).toUpperCase()+t.category.slice(1);return console.log(r),r.includes(e.selectedCategory)}))},toggleUxUi:function(){this.isCheckUxUi=!0,this.isCheckGraphic=!1},toggleGraphic:function(){this.isCheckGraphic=!0,this.isCheckUxUi=!1},filterProjectsBySearch:function(){var e=new RegExp(this.searchProject,"i");return this.projects.filter((function(t){return t.title.match(e)}))}},mounted:function(){x().replace()}};const U=(0,_.Z)(C,[["render",f],["__scopeId","data-v-a0abfa9e"]]);var H=U,q={name:"Projects",components:{ProjectsGrid:H}};const E=(0,_.Z)(q,[["render",o]]);var z=E},7188:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return oe}});var i=r(6252),n={class:"container mx-auto mt-10 sm:mt-20"};function o(e,t,r,o,a,s){var l=(0,i.up)("ProjectHeader"),c=(0,i.up)("ProjectGallery"),u=(0,i.up)("ProjectInfo"),d=(0,i.up)("ProjectRelatedProjects");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(l,{singleProjectHeader:e.singleProjectHeader},null,8,["singleProjectHeader"]),(0,i.Wm)(c,{projectImages:e.projectImages},null,8,["projectImages"]),(0,i.Wm)(u,{projectInfo:e.projectInfo},null,8,["projectInfo"]),(0,i.Wm)(d,{relatedProject:e.relatedProject},null,8,["relatedProject"])])}r(4916),r(5306);var a=r(8508),s=r.n(a),l=r(3577),c={class:"font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7"},u={class:"flex"},d={class:"flex items-center mr-10"},p=(0,i._)("i",{"data-feather":"clock",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),m={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"},g={class:"flex items-center"},f=(0,i._)("i",{"data-feather":"tag",class:"w-4 h-4 text-ternary-dark dark:text-ternary-light"},null,-1),h={class:"font-general-medium ml-2 leading-none text-primary-dark dark:text-primary-light"};function x(e,t,r,n,o,a){return(0,i.wg)(),(0,i.iD)("div",null,[(0,i._)("p",c,(0,l.zw)(r.singleProjectHeader.singleProjectTitle),1),(0,i._)("div",u,[(0,i._)("div",d,[p,(0,i._)("span",m,(0,l.zw)(r.singleProjectHeader.singleProjectDate),1)]),(0,i._)("div",g,[f,(0,i._)("span",h,(0,l.zw)(r.singleProjectHeader.singleProjectTag),1)])])])}var v={props:["singleProjectHeader"]},b=r(3744);const y=(0,b.Z)(v,[["render",x]]);var w=y,k={class:"grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12"},j=["src"];function _(e,t,r,n,o,a){return(0,i.wg)(),(0,i.iD)("div",k,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.projectImages,(function(e){return(0,i.wg)(),(0,i.iD)("div",{class:"mb-10 sm:mb-0",key:e.id},[(0,i._)("img",{src:e.img,class:"rounded-xl cursor-pointer shadow-lg sm:shadow-none",alt:"{{ projectImage.title }}"},null,8,j)])})),128))])}var P={props:["projectImages"]};const D=(0,b.Z)(P,[["render",_]]);var I=D,S=(r(9600),{class:"block sm:flex gap-0 sm:gap-10 mt-14"}),C={class:"w-full sm:w-1/3 text-left"},U={class:"mb-7"},H={class:"font-general-medium text-2xl text-secondary-dark dark:text-secondary-light mb-2"},q={class:"leading-loose"},E={class:"mb-7"},z={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},M={class:"font-general-regular text-primary-dark dark:text-ternary-light"},A={class:"mb-7"},T={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},R={class:"font-general-regular text-primary-dark dark:text-ternary-light"},L={class:"font-general-medium text-2xl text-ternary-dark dark:text-ternary-light mb-2"},W={class:"flex items-center gap-3 mt-5"},G=["href"],K=["data-feather"],F={class:"w-full sm:w-2/3 text-left mt-10 sm:mt-0"},Y={class:"font-general-medium text-primary-dark dark:text-primary-light text-2xl font-bold mb-7"};function Z(e,t,r,n,o,a){return(0,i.wg)(),(0,i.iD)("div",S,[(0,i._)("div",C,[(0,i._)("div",U,[(0,i._)("p",H,(0,l.zw)(r.projectInfo.clientHeading),1),(0,i._)("ul",q,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.projectInfo.companyInfos,(function(e){return(0,i.wg)(),(0,i.iD)("li",{key:e,class:"font-general-regular text-ternary-dark dark:text-ternary-light"},[(0,i._)("span",null,(0,l.zw)(e.title)+": ",1),(0,i._)("a",{href:"#",class:(0,l.C_)("Website"==e.title||"Phone"==e.title?"hover:underline cursor-pointer":""),"aria-label":"Project Website and Phone"},(0,l.zw)(e.details),3)])})),128))])]),(0,i._)("div",E,[(0,i._)("p",z,(0,l.zw)(r.projectInfo.objectivesHeading),1),(0,i._)("p",M,(0,l.zw)(r.projectInfo.objectivesDetails),1)]),(0,i._)("div",A,[(0,i._)("p",T,(0,l.zw)(r.projectInfo.technologies[0].title),1),(0,i._)("p",R,(0,l.zw)(r.projectInfo.technologies[0].techs.join(", ")),1)]),(0,i._)("div",null,[(0,i._)("p",L,(0,l.zw)(r.projectInfo.socialSharingsHeading),1),(0,i._)("div",W,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.projectInfo.socialSharings,(function(e){return(0,i.wg)(),(0,i.iD)("a",{key:e.id,href:e.url,target:"__blank","aria-label":"Share Project",class:"bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"},[(0,i._)("i",{"data-feather":e.icon,class:"w-4 lg:w-5 h-4 lg:h-5"},null,8,K)],8,G)})),128))])])]),(0,i._)("div",F,[(0,i._)("p",Y,(0,l.zw)(r.projectInfo.projectDetailsHeading),1),((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.projectInfo.projectDetails,(function(e){return(0,i.wg)(),(0,i.iD)("p",{key:e.id,class:"font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"},(0,l.zw)(e.details),1)})),128))])])}var B={props:["projectInfo"],mounted:function(){s().replace()},updated:function(){s().replace()}};const O=(0,b.Z)(B,[["render",Z]]);var V=O,N={class:"mt-10 pt-10 sm:pt-14 sm:mt-20 border-t-2 border-primary-light dark:border-secondary-dark"},J={class:"font-general-regular text-primary-dark dark:text-primary-light text-3xl font-bold mb-10 sm:mb-14 text-left"},X={class:"grid grid-cols-1 sm:grid-cols-4 gap-10"},Q=["src","alt"];function $(e,t,r,n,o,a){return(0,i.wg)(),(0,i.iD)("div",N,[(0,i._)("p",J,(0,l.zw)(r.relatedProject.relatedProjectsHeading),1),(0,i._)("div",X,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(r.relatedProject.relatedProjects,(function(e){return(0,i.wg)(),(0,i.iD)("div",{key:e.id},[(0,i._)("img",{src:e.img,class:"rounded-xl cursor-pointer",alt:e.title},null,8,Q)])})),128))])])}var ee={props:["relatedProject"]};const te=(0,b.Z)(ee,[["render",$]]);var re=te,ie={name:"Projects",components:{ProjectHeader:w,ProjectGallery:I,ProjectInfo:V,ProjectRelatedProjects:re},data:function(){return{singleProjectHeader:{singleProjectTitle:"Project Management UI",singleProjectDate:"Jul 26, 2021",singleProjectTag:"UI / Frontend"},projectImages:[{id:1,title:"Kabul Project Management UI",img:r(2035)},{id:2,title:"Kabul Project Management UI",img:r(7294)},{id:3,title:"Kabul Project Management UI",img:r(8687)}],projectInfo:{clientHeading:"About Client",companyInfos:[{id:1,title:"Name",details:"Company Ltd"},{id:2,title:"Services",details:"UI Design & Frontend Development"},{id:3,title:"Website",details:"https://company.com"},{id:4,title:"Phone",details:"555 8888 888"}],objectivesHeading:"Objective",objectivesDetails:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, natus! Quibusdam enim quod in esse, mollitia molestias incidunt quas ipsa accusamus veniam.",technologies:[{title:"Tools & Technologies",techs:["HTML","CSS","JavaScript","Vue.js","TailwindCSS","AdobeXD"]}],projectDetailsHeading:"Challenge",projectDetails:[{id:1,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."},{id:2,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"},{id:3,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?"},{id:4,details:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Incidunt totam dolorum, ducimus obcaecati, voluptas facilis molestias nobis ut quam natus similique inventore excepturi optio ipsa deleniti fugit illo. Unde, amet! Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum illo necessitatibus perspiciatis! Aperiam perferendis labore temporibus, eos culpa corporis recusandae quas, fuga voluptatibus nesciunt odit libero tenetur neque consequatur ea."}],socialSharingsHeading:"Share This",socialSharings:[{id:1,name:"Twitter",icon:"twitter",url:"https://twitter.com/realstoman"},{id:2,name:"Instagram",icon:"instagram",url:"https://instagram.com/realstoman"},{id:3,name:"Facebook",icon:"facebook",url:"https://facebook.com/"},{id:4,name:"LinkedIn",icon:"linkedin",url:"https://linkedin.com/"},{id:5,name:"Youtube",icon:"youtube",url:"https://www.youtube.com/c/StomanStudio"}]},relatedProject:{relatedProjectsHeading:"Related Projects",relatedProjects:[{id:1,title:"Mobile UI",img:r(2725)},{id:2,title:"Web Application",img:r(4600)},{id:3,title:"UI Design",img:r(7034)},{id:4,title:"Kabul Mobile App UI",img:r(8687)}]}}},mounted:function(){s().replace()},updated:function(){s().replace()},methods:{}};const ne=(0,b.Z)(ie,[["render",o]]);var oe=ne},316:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return ve}});var i=r(6252),n={class:"container mx-auto"};function o(e,t,r,o,a,s){var l=(0,i.up)("AppSkill");return(0,i.wg)(),(0,i.iD)("div",n,[(0,i.Wm)(l,{class:"mb-5 sm:mb-8"})])}var a=r(3577),s=r(9963),l=function(e){return(0,i.dD)("data-v-5423f029"),e=e(),(0,i.Cn)(),e},c={class:"flex flex-col sm:justify-between sm:flex-row sm:my-20"},u={class:"w-full mt-8 md:mt-1 md:w-2/5"},d=l((function(){return(0,i._)("h1",{class:"font-general-semibold text-3xl xl:text-6xl md:text-left text-ternary-dark mb-2"}," Skills & Experiences ",-1)})),p=l((function(){return(0,i._)("p",{class:"font-general-semibold mt-2 text-xl sm:text-2xl xl:text-2xl text-center sm:text-left leading-none mb-5 mt-8 md:mt-32"}," Software Skills ",-1)})),m={class:"grid grid-cols-3 gap-4 mx-10 md:grid-cols-3 md:gap-4 md:mx-1"},g={class:"flex flex-col items-center justify-center relative mb-3"},f=["src"],h={class:"sm:font-general-semibold md:font-general-medium inline-block rounded-full bg-rose-600 px-3 py-1 mt-5 bg-rose-80 text-center text-white"},x={class:"w-full md:w-3/5 text-right float-right"},v={class:"sm:ml-28"},b=l((function(){return(0,i._)("p",{class:"font-general-semibold mt-2 text-xl sm:text-2xl xl:text-2xl text-center sm:text-left leading-none mb-5 mt-10 xl:mt-1"}," Experiences ",-1)})),y={class:"mt-12 ml-6"},w={class:"relative border-l border-gray-200"},k={class:"mb-10 ml-6 text-left"},j=(0,i.uE)('<span class="absolute flex items-center justify-center w-6 h-6 bg-rose-100 rounded-full -left-3 ring-8 ring-white" data-v-5423f029><svg aria-hidden="true" class="w-3 h-3 text-rose-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-5423f029><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" data-v-5423f029></path></svg></span><h3 class="flex items-center md: mb-1 text-lg font-semibold text-gray-900" data-v-5423f029> Graphic designer at Menxon Enterprises (Thailand) Co.,Ltd. <span class="bg-blue-100 text-blue-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ml-3" data-v-5423f029> Latest </span></h3><time class="block mb-2 text-sm font-normal leading-none text-gray-400" data-v-5423f029>2019 - Current</time>',3),_={class:"w-fit text-gray-500 list-disc list-inside dark:text-gray-400"},P=l((function(){return(0,i._)("li",null," Take the needs of customers to design skate shoes, roller blade on the pattern. ",-1)})),D=l((function(){return(0,i._)("li",null," Technical make 3D layers on skate shoes. ",-1)})),I=l((function(){return(0,i._)("li",null," Make a screen block to make an example. ",-1)})),S=l((function(){return(0,i._)("li",null," Prepare molds to make samples. ",-1)})),C=l((function(){return(0,i._)("li",null," Contact and talk to the supplier about the color. ",-1)})),U=l((function(){return(0,i._)("li",null," Request a quotation from the supplier to negotiate the price before send to manager sign approval for start first lot product. ",-1)})),H=l((function(){return(0,i._)("li",null," Follow up on the color and mold from the supplier that it comes in on the day. ",-1)})),q=l((function(){return(0,i._)("li",null," Do documents detailing the mold, model, price, control the cost from supplies formula. ",-1)})),E=l((function(){return(0,i._)("li",null," Do document detailing block screen, model, number of blocks, color. ",-1)})),z=l((function(){return(0,i._)("li",null," Keep an eye on the work at the workshop, screen work and work shots. ",-1)})),M=l((function(){return(0,i._)("li",null," Make model stickers, size stickers, label, manual. ",-1)})),A=l((function(){return(0,i._)("li",null," Confirmation documents for other departments (model stickers, size stickers, label, manual). ",-1)})),T=l((function(){return(0,i._)("li",null," Digital printing. ",-1)})),R=[S,C,U,H,q,E,z,M,A,T],L={key:0},W=["data-feather"],G={key:1},K=["data-feather"],F={class:"mb-10 ml-6 text-left"},Y=(0,i.uE)('<span class="absolute flex items-center justify-center w-6 h-6 bg-rose-100 rounded-full -left-3 ring-8 ring-white" data-v-5423f029><svg aria-hidden="true" class="w-3 h-3 text-rose-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" data-v-5423f029><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd" data-v-5423f029></path></svg></span><h3 class="text-left mb-1 text-lg font-semibold text-gray-900" data-v-5423f029> Graphic designer at Joy sport Co., LTD. </h3><time class="text-left block mb-2 text-sm font-normal leading-none text-gray-400" data-v-5423f029> 2017 - 2019 </time>',3),Z={class:"w-fit text-gray-500 list-disc list-inside dark:text-gray-400"},B=l((function(){return(0,i._)("li",null," Take the needs of customers to design skate shoes, roller blade on the pattern. ",-1)})),O=l((function(){return(0,i._)("li",null," Technical make 3D layers on skate shoes. ",-1)})),V=l((function(){return(0,i._)("li",null," Make a screen block to make an example. ",-1)})),N={key:0},J=l((function(){return(0,i._)("li",null," Design of printed materials such as brochures, posters, logo, banners, catalog, etc. ",-1)})),X=l((function(){return(0,i._)("li",null," Product photography by DSLR Cameras. ",-1)})),Q=l((function(){return(0,i._)("li",null," Editor video clip by shotcut. ",-1)})),$=l((function(){return(0,i._)("li",null," Retouch and die cut. ",-1)})),ee=l((function(){return(0,i._)("li",null," Design of product feature packages. ",-1)})),te=l((function(){return(0,i._)("li",null," Manual preparation of the products. ",-1)})),re=l((function(){return(0,i._)("li",null," leader of the 5S group. ",-1)})),ie=l((function(){return(0,i._)("li",null," Document control ISO, KPI. ",-1)})),ne=[J,X,Q,$,ee,te,re,ie],oe={key:0},ae=["data-feather"],se={key:1},le=["data-feather"];function ce(e,t,r,n,o,l){return(0,i.wg)(),(0,i.iD)("section",c,[(0,i._)("div",u,[d,p,(0,i._)("div",m,[((0,i.wg)(!0),(0,i.iD)(i.HY,null,(0,i.Ko)(e.skills,(function(e){return(0,i.wg)(),(0,i.iD)("div",{key:e.id},[(0,i._)("div",g,[(0,i._)("img",{class:"w-3/5 md:w-2/3 xl:w-1/3 mt-5",src:e.icon},null,8,f),(0,i._)("h3",h,(0,a.zw)(e.status),1)])])})),128))])]),(0,i._)("div",x,[(0,i._)("div",v,[b,(0,i._)("div",y,[(0,i._)("ol",w,[(0,i._)("li",k,[j,(0,i._)("ul",_,[P,D,I,(0,i.Wm)(s.uT,{name:"slide-fade"},{default:(0,i.w5)((function(){return[(0,i.wy)((0,i._)("div",null,R,512),[[s.F8,e.showFisrt]])]})),_:1})]),e.showFisrt?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",L,[(0,i._)("a",{class:"inline-flex items-center px-4 py-2 text-sm font-general-semibold text-gray-500 bg-white border border-rose-200 rounded-lg hover:bg-rose-100 hover:text-rose-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-rose-700 mt-5","data-te-collapse-init":"","data-te-ripple-init":"","data-te-ripple-color":"light",role:"button","aria-expanded":"false","aria-controls":"collapseExample",onClick:t[0]||(t[0]=function(){return l.showMore&&l.showMore.apply(l,arguments)})},[(0,i._)("i",{"data-feather":e.iconDown,class:"w-5 text-gray-500 dark:text-gray-400 mr-1"},null,8,W),(0,i.Uk)((0,a.zw)(this.more),1)])])),e.showFisrt?((0,i.wg)(),(0,i.iD)("div",G,[(0,i._)("a",{class:"inline-flex items-center px-4 py-2 text-sm font-general-semibold text-gray-500 bg-white border border-rose-200 rounded-lg hover:bg-rose-100 hover:text-rose-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-rose-700 mt-5","data-te-collapse-init":"","data-te-ripple-init":"","data-te-ripple-color":"light",role:"button","aria-expanded":"false","aria-controls":"collapseExample",onClick:t[1]||(t[1]=function(){return l.showMore&&l.showMore.apply(l,arguments)})},[(0,i._)("i",{"data-feather":e.iconUp,class:"w-5 text-gray-500 dark:text-gray-400 mr-1"},null,8,K),(0,i.Uk)((0,a.zw)(this.less),1)])])):(0,i.kq)("",!0)]),(0,i._)("li",F,[Y,(0,i._)("ul",Z,[B,O,V,(0,i.Wm)(s.uT,{name:"slide-fade"},{default:(0,i.w5)((function(){return[e.showSecond?((0,i.wg)(),(0,i.iD)("div",N,ne)):(0,i.kq)("",!0)]})),_:1})]),e.showSecond?(0,i.kq)("",!0):((0,i.wg)(),(0,i.iD)("div",oe,[(0,i._)("a",{class:"inline-flex items-center px-4 py-2 text-sm font-general-semibold text-gray-500 bg-white border border-rose-200 rounded-lg hover:bg-rose-100 hover:text-rose-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-rose-700 mt-5","data-te-collapse-init":"","data-te-ripple-init":"","data-te-ripple-color":"light",role:"button","aria-expanded":"false","aria-controls":"collapseExample",onClick:t[2]||(t[2]=function(){return l.showMore2&&l.showMore2.apply(l,arguments)})},[(0,i._)("i",{"data-feather":e.iconDown,class:"w-5 text-gray-500 dark:text-gray-400 mr-1"},null,8,ae),(0,i.Uk)((0,a.zw)(this.more),1)])])),e.showSecond?((0,i.wg)(),(0,i.iD)("div",se,[(0,i._)("a",{class:"inline-flex items-center px-4 py-2 text-sm font-general-semibold text-gray-500 bg-white border border-rose-200 rounded-lg hover:bg-rose-100 hover:text-rose-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-rose-700 mt-5","data-te-collapse-init":"","data-te-ripple-init":"","data-te-ripple-color":"light",role:"button","aria-expanded":"false","aria-controls":"collapseExample",onClick:t[3]||(t[3]=function(){return l.showMore2&&l.showMore2.apply(l,arguments)})},[(0,i._)("i",{"data-feather":e.iconUp,class:"w-5 text-gray-500 dark:text-gray-400 mr-1"},null,8,le),(0,i.Uk)((0,a.zw)(this.less),1)])])):(0,i.kq)("",!0)])])])])])])}r(4916),r(5306);var ue=r(8508),de=r.n(ue),pe={name:"Home",data:function(){return{theme:"",showFisrt:!1,showSecond:!1,more:"More",iconDown:"chevrons-down",less:"Less",iconUp:"chevrons-up",skills:[{id:1,icon:"https://cdn-icons-png.flaticon.com/512/5968/5968472.png",status:"Advance"},{id:2,icon:"https://cdn-icons-png.flaticon.com/512/5968/5968520.png",status:"Advance"},{id:3,icon:"https://cdn-icons-png.flaticon.com/512/5968/5968705.png",status:"Meduim"},{id:4,icon:"https://cdn-icons-png.flaticon.com/512/5968/5968559.png",status:"Beginner"},{id:5,icon:"https://cdn-icons-png.flaticon.com/512/5968/5968525.png",status:"Beginner"},{id:6,icon:"https://cdn-icons-png.flaticon.com/512/5968/5968428.png",status:"Beginner"}]}},created:function(){this.theme=localStorage.getItem("theme")||"light"},mounted:function(){de().replace(),this.theme=localStorage.getItem("theme")||"light"},updated:function(){de().replace()},methods:{showMore:function(){this.showFisrt=!this.showFisrt,!0===this.showSecond&&(this.showSecond=!this.showSecond)},showMore2:function(){this.showSecond=!this.showSecond,!0===this.showFisrt&&(this.showFisrt=!this.showFisrt)}}},me=r(3744);const ge=(0,me.Z)(pe,[["render",ce],["__scopeId","data-v-5423f029"]]);var fe=ge,he={name:"Home",components:{AppSkill:fe}};const xe=(0,me.Z)(he,[["render",o]]);var ve=xe},2725:function(e,t,r){"use strict";e.exports=r.p+"img/mobile-project-1.8b4f9e2f.jpg"},8687:function(e,t,r){"use strict";e.exports=r.p+"img/mobile-project-2.9bd76372.jpg"},2035:function(e,t,r){"use strict";e.exports=r.p+"img/ui-project-1.96e7f21e.jpg"},7034:function(e,t,r){"use strict";e.exports=r.p+"img/ui-project-2.afd87ce7.jpg"},4600:function(e,t,r){"use strict";e.exports=r.p+"img/web-project-1.d1debdf5.jpg"},7294:function(e,t,r){"use strict";e.exports=r.p+"img/web-project-2.ecd6c182.jpg"}}]);
//# sourceMappingURL=projects-legacy.0f3bc8b7.js.map