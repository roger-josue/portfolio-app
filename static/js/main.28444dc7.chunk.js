(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[0],{38:function(e,t,r){},52:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r(2),c=r(17),a=r.n(c),i=(r(38),r(4)),o=r.n(i),l=r(32),u=r(7),j=r(11),b=r(10),f=r(8),d=function(){var e=Object(s.useState)("hero"),t=Object(f.a)(e,2),r=t[0],c=t[1],a=Object(s.useState)(!1),i=Object(f.a)(a,2),o=i[0],l=i[1],u=Object(s.useRef)(null);Object(s.useEffect)((function(){return window.addEventListener("resize",(function(){window.innerWidth>=768?u.current.style="visibility: visible;":(l(!1),u.current.style="visibility: hidden;")})),function(){window.removeEventListener("resize",window)}}),[]);var j=function(e){c(e)};return Object(n.jsxs)("nav",{children:[Object(n.jsxs)("div",{id:"menu-toggle",children:[Object(n.jsx)("input",{id:"menu-check",type:"checkbox",checked:o,onChange:function(e){l((function(e){return!e})),u.current.style=o?"animation: menu-out 400ms ease-in-out forwards":"animation: menu-in 400ms ease-in-out forwards"}}),Object(n.jsx)("span",{id:"toggler"})]}),Object(n.jsxs)("ul",{id:"menu",ref:u,children:[Object(n.jsx)("li",{children:Object(n.jsx)(b.Link,{className:"hero"===r?"active":"",onClick:function(){return j("hero")},to:"hero",children:"Home"})}),Object(n.jsx)("li",{children:Object(n.jsx)(b.Link,{className:"about"===r?"active":"",onClick:function(){return j("about")},to:"about-section",children:"About"})}),Object(n.jsx)("li",{children:Object(n.jsx)(b.Link,{className:"projects"===r?"active":"",onClick:function(){return j("projects")},to:"projects-section",children:"Projects"})}),Object(n.jsx)("li",{children:Object(n.jsx)(b.Link,{className:"contact"===r?"active":"",onClick:function(){return j("contact")},to:"contact-section",children:"Contact"})})]})]})},m=function(){var e=Object(j.a)({threshold:.5,triggerOnce:!0}),t=e.ref,r=e.inView,c=Object(s.useRef)(null);Object(s.useEffect)((function(){r&&(a(),c.current.style="animation: gradient-in 6s 0s 3 alternate forwards")}),[r]);var a=function(){var e=Object(u.a)(o.a.mark((function e(){var t,r,n;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:"Hello, I\u2019m Josue Vargas. I\u2019m a front-end developer",t=Object(l.a)("Hello, I\u2019m Josue Vargas. I\u2019m a front-end developer"),e.prev=2,t.s();case 4:if((r=t.n()).done){e.next=11;break}return n=r.value,e.next=8,new Promise((function(e){setTimeout((function(){e()}),100)}));case 8:c.current.innerHTML+=n;case 9:e.next=4;break;case 11:e.next=16;break;case 13:e.prev=13,e.t0=e.catch(2),t.e(e.t0);case 16:return e.prev=16,t.f(),e.finish(16);case 19:case"end":return e.stop()}}),e,null,[[2,13,16,19]])})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("header",{children:[Object(n.jsx)(d,{}),Object(n.jsx)("div",{id:"hero",ref:t,children:r&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("h1",{ref:c,children:" "}),Object(n.jsxs)("button",{id:"to-work",onClick:function(){b.scroller.scrollTo("projects-section")},children:["View my work ",Object(n.jsx)("i",{className:"fas fa-arrow-right"})," "]})]})})]})},p=r.p+"static/media/profile.62722e2d.jpg",h=r(18);r(53);h.a.initializeApp({apiKey:"AIzaSyDB-EwR54HfXX0oH-MI9NY66NwG3Yb967U",authDomain:"portfolio-app-b4a43.firebaseapp.com",projectId:"portfolio-app-b4a43",storageBucket:"portfolio-app-b4a43.appspot.com",messagingSenderId:"1041422471271",appId:"1:1041422471271:web:c8554053df671be5bf84c2"});var O=h.a.firestore(),x=function(){var e=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,O.collection("messages").add(t);case 3:return r=e.sent,e.abrupt("return",{id:r.id,res:"Your message has been sent successfully"});case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[],e.next=4,O.collection("skills").get();case 4:return e.sent.forEach((function(e){t.push({name:e.data().name,level:e.data().level,id:e.id})})),e.abrupt("return",t);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=[],e.next=4,O.collection("projects").get();case 4:return e.sent.forEach((function(e){t.push({name:e.data().name,url:e.data().url,repository_url:e.data().repository_url,thumbnail:e.data().thumbnail,poster:e.data().poster,desc:e.data().desc,id:e.id})})),e.abrupt("return",t);case 9:throw e.prev=9,e.t0=e.catch(0),e.t0;case 12:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(){return e.apply(this,arguments)}}(),w=function(e){var t=e.skill,r=e.level,c=Object(s.useRef)(null),a=Object(s.useRef)(null);return Object(s.useEffect)((function(){setTimeout((function(){c.current.style="flex-basis: ".concat(70*r/100,"%"),a.current.style="animation: fade-in 600ms 500ms ease-in-out forwards"}),300)}),[r]),Object(n.jsxs)("div",{className:"skill-bar",children:[Object(n.jsx)("div",{className:"skill-bar-header",children:Object(n.jsx)("span",{children:t})}),Object(n.jsx)("div",{className:"skill-bar-level",ref:c,children:Object(n.jsxs)("span",{ref:a,children:[r,"%"]})})]})},y=function(){var e=Object(s.useState)([]),t=Object(f.a)(e,2),r=t[0],c=t[1],a=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,v();case 3:t=e.sent,c(t),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(s.useEffect)((function(){a()}),[]),Object(n.jsxs)("article",{className:"about-col skills",children:[Object(n.jsx)("h2",{children:"Skills"}),r.map((function(e){return Object(n.jsx)(w,{skill:e.name,level:e.level},e.id)}))]})},k=function(){var e=Object(j.a)({threshold:.5,triggerOnce:!0}),t=e.ref,r=e.inView;return Object(n.jsxs)("section",{id:"about-section",ref:t,children:[Object(n.jsx)("h1",{className:"section-title",children:"About"}),r&&Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("article",{className:"about-col profile",children:[Object(n.jsx)("h2",{children:"Who am I?"}),Object(n.jsx)("figure",{children:Object(n.jsx)("img",{src:p,alt:"profile"})}),Object(n.jsxs)("p",{children:["Creative Systems Engineer and Software developer based in Costa Rica, with a passion for building responsive websites and pixel-perfect UI\u2019s, proficient and self-sufficient in JavaScript, HTML, CSS, SASS, React, Git, GitHub, among other tools. Currently, becoming a full-stack engineer and sharpening my front-end skills. I\u2019m always open to learn new technologies and seize new opportunities. ",Object(n.jsx)("br",{})]}),Object(n.jsx)("div",{className:"shakeText",children:Object(n.jsx)(b.Link,{className:"link",to:"contact-section",children:"Let's talk!"})})]}),Object(n.jsx)(y,{})]})]})},N=function(e){var t=e.setShowModal,r=e.name,c=e.url,a=e.repository_url,i=e.poster,o=e.desc,l=Object(s.useRef)(null);Object(s.useEffect)((function(){l.current.style="animation: fade-in 400ms ease-in-out forwards"}),[]);return Object(n.jsx)("div",{className:"dialog",style:{opacity:0},ref:l,children:Object(n.jsxs)("div",{className:"modal",children:[Object(n.jsx)("button",{className:"modal-close",onClick:function(){l.current.style="animation: fade-out 400ms ease-out forwards",setTimeout((function(){t(!1)}),200)},children:Object(n.jsx)("i",{className:"fas fa-times"})}),Object(n.jsx)("h2",{className:"modal-title",children:r}),Object(n.jsx)("div",{className:"modal-body-content",children:Object(n.jsx)("p",{children:o})}),Object(n.jsxs)("div",{className:"modal-visit-pages",children:[Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:c,children:[" View project demo",Object(n.jsx)("i",{className:"fas fa-external-link-alt"})," "]}),Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:a,children:[" View source code",Object(n.jsx)("i",{className:"fab fa-github"})," "]})]}),Object(n.jsx)("figure",{className:"modal-body-img",children:Object(n.jsx)("img",{src:i,alt:""})})]})})},S=function(e){var t=e.name,r=e.url,c=e.repository_url,a=e.thumbnail,i=e.poster,o=e.desc,l=Object(s.useState)(!1),u=Object(f.a)(l,2),j=u[0],b=u[1];return Object(s.useEffect)((function(){j?document.body.classList.add("stop-scrolling"):document.body.classList.remove("stop-scrolling")}),[j]),Object(n.jsxs)("div",{className:"project-card",children:[Object(n.jsxs)("figure",{children:[Object(n.jsx)("img",{src:a,alt:""}),Object(n.jsxs)("figcaption",{children:[Object(n.jsx)("h3",{className:"project-title",children:t}),Object(n.jsxs)("p",{children:[o.slice(0,100),"..."]}),Object(n.jsxs)("button",{onClick:function(){return b(!0)},children:["Read more ",Object(n.jsx)("i",{className:"fas fa-info-circle"})]})]})]}),j&&Object(n.jsx)(N,{setShowModal:b,name:t,url:r,repository_url:c,poster:i,desc:o})]})},E=function(){var e=Object(j.a)({threshold:.5,triggerOnce:!0}),t=e.ref,r=e.inView,c=Object(s.useState)([]),a=Object(f.a)(c,2),i=a[0],l=a[1];Object(s.useEffect)((function(){b()}),[]);var b=function(){var e=Object(u.a)(o.a.mark((function e(){var t;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g();case 2:t=e.sent,l(t);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.jsxs)("section",{id:"projects-section",ref:t,children:[Object(n.jsx)("h1",{className:"section-title",children:"Projects"}),r&&Object(n.jsx)("section",{id:"project-grid",children:i.map((function(e){return Object(n.jsx)(S,{name:e.name,url:e.url,repository_url:e.repository_url,thumbnail:e.thumbnail,poster:e.poster,desc:e.desc},e.id)}))})]})},I=r(19),_=r(27),C=r(28),R=r.n(C),A="user_UQwpAFBf5qcAIAGDxTGuK";Object(C.init)(A);var L=function(){var e=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,R.a.sendForm("service_owoqtjg","contact_form",t.target,A);case 3:return r=e.sent,e.abrupt("return",r);case 7:throw e.prev=7,e.t0=e.catch(0),e.t0;case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),z=function(e){var t=e.alert,r=e.setAlert,c=t.show,a=t.type,i=t.message,o=Object(s.useRef)(null),l=Object(s.useRef)(null);return Object(s.useEffect)((function(){c&&(o.current.style="animation: popup-alert 400ms ease-in-out forwards",l.current.style="animation: popup-alert 200ms 600ms ease-in-out forwards",setTimeout((function(){l.current.style="animation: popout-alert 100ms ease-in-out forwards",o.current.style="animation: popout-alert 400ms 200ms ease-in-out forwards",setTimeout((function(){r({show:!1,type:"",message:""})}),500)}),4e3))})),Object(n.jsx)("div",{className:"dialog",ref:o,children:Object(n.jsxs)("div",{className:"alert ".concat(a&&a),children:[Object(n.jsx)("div",{className:"alert-header"}),Object(n.jsx)("span",{style:{color:"#434343"},children:i}),Object(n.jsx)("i",{className:"".concat("success"===a?"fas fa-check-circle":"fas fa-exclamation-circle"),ref:l})]})})},V=/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,T=function(){var e=Object(j.a)({threshold:.5,triggerOnce:!0}),t=e.ref,r=e.inView,c=Object(s.useState)({name:"",email:"",message:""}),a=Object(f.a)(c,2),i=a[0],l=a[1],b=Object(s.useState)(!1),d=Object(f.a)(b,2),m=d[0],p=d[1],h=Object(s.useState)({show:!1,type:"",message:""}),O=Object(f.a)(h,2),v=O[0],g=O[1],w=v.show,y=i.name,k=i.email,N=i.message,S=Object(s.useRef)(null),E=Object(s.useRef)(null),C=Object(s.useRef)(null),R="border: 1px solid rgba(255,0,0,0.60) !important;",A=Object(s.useRef)(null);Object(s.useEffect)((function(){r&&(A.current.style="animation: popup-alert 400ms 600ms ease-out forwards")}),[r]),Object(s.useEffect)((function(){k&&(V.test(k)?S.current.style="border: 1px solid grey !important;":S.current.style=R)}),[k]),Object(s.useEffect)((function(){y&&(y.length<2?E.current.style=R:E.current.style="border: 1px solid grey !important;")}),[y]),Object(s.useEffect)((function(){N&&(N.length<2?C.current.style=R:C.current.style="border: 1px solid grey !important;")}),[N]),Object(s.useEffect)((function(){w?document.body.classList.add("stop-scrolling"):document.body.classList.remove("stop-scrolling")}),[w]);var T=function(){var e=Object(u.a)(o.a.mark((function e(t){var r;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x(i);case 3:if(!(r=e.sent)){e.next=7;break}return e.next=7,L(t);case 7:g({show:!0,type:"success",message:r.res}),p(!1),l({name:"",email:"",message:""}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(0),p(!1),g({show:!0,type:"danger",message:"There has been an error, your message could not be sent"});case 16:case"end":return e.stop()}}),e,null,[[0,12]])})));return function(t){return e.apply(this,arguments)}}(),H=function(e){var t=e.target;l(Object(_.a)(Object(_.a)({},i),{},Object(I.a)({},t.name,t.value)))};return Object(n.jsxs)("section",{id:"contact-section",ref:t,children:[Object(n.jsx)("h1",{className:"section-title",children:"Contact"}),r&&Object(n.jsxs)("div",{id:"contact",children:[Object(n.jsx)("h3",{ref:A,children:"Leave me a message!"}),Object(n.jsxs)("form",{onSubmit:function(e){return e.preventDefault(),y.length<2?(E.current.style=R,void E.current.focus()):V.test(k)?N.length<2?(C.current.style=R,void C.current.focus()):(p(!0),void T(e)):(S.current.style=R,void S.current.focus())},children:[Object(n.jsx)("input",{name:"name",ref:E,type:"text",placeholder:"Name",value:y,onChange:H}),Object(n.jsx)("input",{name:"email",ref:S,type:"email",placeholder:"Email",value:k,onChange:H}),Object(n.jsx)("textarea",{name:"message",ref:C,placeholder:"Your message",cols:"24",rows:"12",value:N,onChange:H}),Object(n.jsx)("button",{name:"send",type:"submit",style:{fontSize:"1.125rem",padding:"0.50em"},disabled:m,children:m?Object(n.jsx)("i",{className:"fas fa-spinner fa-spin"}):"SUBMIT"})]})]}),w&&Object(n.jsx)(z,{alert:v,setAlert:g})]})},H=function(){return Object(n.jsxs)("footer",{children:[Object(n.jsx)("nav",{children:Object(n.jsxs)("ul",{id:"social-menu",children:[Object(n.jsx)("li",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://www.linkedin.com/in/josue-vargas-zu%C3%B1iga-260681190/",children:[" ",Object(n.jsx)("i",{className:"fab fa-linkedin-in"})," "]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://www.facebook.com/josue.vargaszuniga.1",children:[" ",Object(n.jsx)("i",{className:"fab fa-facebook-f"})," "]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://www.instagram.com/josue_vargas_z/?fbclid=IwAR0lLIQm0XJeuuA_iPIY48iknvczGQVHmNSKC1OoVIoYDR5WIBgSKI8DwGw",children:[" ",Object(n.jsx)("i",{className:"fab fa-instagram"})," "]})}),Object(n.jsx)("li",{children:Object(n.jsxs)("a",{target:"_blank",rel:"noreferrer",href:"https://github.com/JosueVargasZ",children:[" ",Object(n.jsx)("i",{className:"fab fa-github"})," "]})})]})}),Object(n.jsxs)(b.Link,{to:"hero",id:"arrow-home",children:[" ",Object(n.jsx)("i",{className:"fas fa-chevron-up"})," "]}),Object(n.jsxs)("h4",{children:[Object(n.jsx)("small",{children:"JOSUE VARGAS \xa9"})," ",(new Date).getFullYear()]})]})},G=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(m,{}),Object(n.jsxs)("main",{children:[Object(n.jsx)(k,{}),Object(n.jsx)(E,{}),Object(n.jsx)(T,{})]}),Object(n.jsx)(H,{})]})};a.a.render(Object(n.jsx)(G,{}),document.getElementById("root"))}},[[52,1,2]]]);
//# sourceMappingURL=main.28444dc7.chunk.js.map