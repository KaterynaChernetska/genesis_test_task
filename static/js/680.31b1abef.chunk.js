(self.webpackChunkgenesis_test_task=self.webpackChunkgenesis_test_task||[]).push([[680],{3219:function(e,t,s){"use strict";s.d(t,{n:function(){return a}});var n=s(2791),r=s(5175),i=(s(3540),s(184)),a=function(e){var t=n.useRef(null),s=n.useRef(null),a=e.options,c=e.onReady;return n.useEffect((function(){if(s.current){var e=s.current;e.autoplay(a.autoplay),e.src(a.sources)}else{var n=document.createElement("video-js");n.classList.add("vjs-big-play-centered"),t.current.appendChild(n);var i=s.current=(0,r.Z)(n,a,(function(){c&&c(i)}))}}),[a,t,c]),n.useEffect((function(){var e=s.current;return function(){e&&!e.isDisposed()&&(e.dispose(),s.current=null)}}),[s]),(0,i.jsx)("div",{"data-vjs-player":!0,children:(0,i.jsx)("div",{ref:t})})}},2476:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return g}});var n=s(4165),r=s(5861),i=s(9439),a=s(2791),c=s(1087),o=s(3219),u={listItem:"CourseListItem_listItem__cY-X-",videoContainer:"CourseListItem_videoContainer__QNlSN",courseTitle:"CourseListItem_courseTitle__EwLjw",info:"CourseListItem_info__ekc8n",skillsTitle:"CourseListItem_skillsTitle__iwLZi",tagsList:"CourseListItem_tagsList__citoG"},l=s(3728),p=s(9126),d=s(184),f=function(e){var t=e.courseInfo,s=t.id,n=t.tags,r=t.title,f=t.lessonsCount,v=t.rating,h=t.meta,m=h.skills,x=h.courseVideoPreview,j=t.previewImageLink,g=(0,a.useState)(!1),_=(0,i.Z)(g,2),C=_[0],k=_[1],Z={controls:!1,responsive:!0,fluid:!0,autoplay:!0,muted:!0,sources:[{src:null===x||void 0===x?void 0:x.link,type:"application/x-mpegURL"}],techOrder:["html5"]};return(0,d.jsx)("li",{className:u.listItem,children:(0,d.jsxs)(c.rU,{to:"course/".concat(s),children:[(0,d.jsx)("div",{className:u.videoContainer,onMouseEnter:function(e){k(!0)},onMouseLeave:function(e){k(!1)},children:C?(0,d.jsx)(o.n,{options:Z}):(0,d.jsx)("img",{src:j+"/cover.webp",alt:r})}),(0,d.jsxs)("div",{className:u.textContainer,children:[(0,d.jsx)("h2",{className:u.courseTitle,children:r}),(0,d.jsxs)("div",{className:u.info,children:[(0,d.jsxs)("p",{children:["Lessons: ",f]}),(0,d.jsxs)("p",{children:["Rating: ",v," "]})]}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("ul",{className:u.skillsList,children:[(0,d.jsx)("h3",{className:u.skillsTitle,children:"Skills:"}),null===m||void 0===m?void 0:m.map((function(e){return(0,d.jsxs)("li",{className:u.skillsItem,children:[(0,d.jsx)(l.sez,{})," ",e]},e)}))]}),(0,d.jsxs)("ul",{className:u.tagsList,children:[(0,d.jsx)("h3",{className:u.skillsTitle,children:"Tags:"}),null===n||void 0===n?void 0:n.map((function(e){return(0,d.jsxs)("li",{children:[(0,d.jsx)(p.nvr,{}),e]},e)}))]})]})]})]})})},v=s(1831),h=function(e){for(var t=e.perPage,s=e.totalCourses,n=e.paginate,r=[],i=1;i<=Math.ceil(s/t);i++)r.push(i);return(0,d.jsx)("nav",{children:(0,d.jsx)("ul",{className:"pagination",children:r.map((function(e){return(0,d.jsx)("li",{className:"page-item",children:(0,d.jsx)("a",{onClick:function(){return n(e)},href:"!#",className:"page-link",children:e})},e)}))})})},m=s(4390),x={title:"CoursesList_title__dV53g",list:"CoursesList_list__8+dRt",container:"CoursesList_container__fkQEr"},j=function(){var e,t=localStorage.getItem("PageNumber")?localStorage.getItem("PageNumber"):1,s=(0,a.useState)([]),c=(0,i.Z)(s,2),o=c[0],u=c[1],p=(0,a.useState)(null),j=(0,i.Z)(p,2),g=j[0],_=j[1],C=(0,a.useState)(!1),k=(0,i.Z)(C,2),Z=k[0],w=k[1],N=(0,a.useState)(10),L=(0,i.Z)(N,1)[0],y=(0,a.useState)(t),I=(0,i.Z)(y,2),b=I[0],S=I[1];(0,a.useEffect)((function(){var e=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,w(!0),e.next=4,(0,m.V)();case 4:t=e.sent,s=t.courses,u(s),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),_(e.t0.message);case 12:return e.prev=12,w(!1),e.finish(12);case 15:case"end":return e.stop()}}),e,null,[[0,9,12,15]])})));return function(){return e.apply(this,arguments)}}();e()}),[b,L]);return(0,d.jsxs)("div",{className:x.container,children:[(0,d.jsxs)("h1",{className:x.title,children:["Available courses ",(0,d.jsx)(l.zsC,{})]}),Z&&(0,d.jsx)(v.a,{}),null!==g&&(0,d.jsxs)("p",{children:["Oops, some error occured... Message: ",g]}),(0,d.jsx)("ul",{className:x.list,children:null===(e=function(){var e=b*L,t=e-L;return o.slice(t,e)}())||void 0===e?void 0:e.map((function(e){return(0,d.jsx)(f,{courseInfo:e},e.id)}))}),(0,d.jsx)("div",{className:x.paginationContainer,children:(0,d.jsx)(h,{perPage:L,totalCourses:o.length,paginate:function(e){S(e),localStorage.setItem("PageNumber",e)}})})]})},g=function(){return(0,d.jsx)("div",{children:(0,d.jsx)(j,{})})}},4390:function(e,t,s){"use strict";s.d(t,{V:function(){return c},Y:function(){return o}});var n=s(4165),r=s(5861),i=s(1243);i.Z.defaults.baseURL="".concat("https://api.wisey.app/api/v1");var a=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i.Z.get("/auth/anonymous?platform=subscriptions",{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}});case 3:t=e.sent,s=t.data.token,i.Z.defaults.headers.common.Authorization="Bearer ".concat(s),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}var s}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),c=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(){var t,s;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a();case 3:return e.next=5,i.Z.get("/core/preview-courses",{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}});case 5:return t=e.sent,s=t.data,e.abrupt("return",s);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)((0,n.Z)().mark((function e(t){var s,r;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,a();case 3:return e.next=5,i.Z.get("/core/preview-courses/".concat(t),{headers:{"Access-Control-Allow-Origin":"*","Content-Type":"application/json"}});case 5:return s=e.sent,r=s.data,e.abrupt("return",r);case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(t){return e.apply(this,arguments)}}()},5893:function(){}}]);
//# sourceMappingURL=680.31b1abef.chunk.js.map