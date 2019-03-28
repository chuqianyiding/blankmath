(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{104:function(e,t,n){},15:function(e,t,n){"use strict";n.d(t,"a",function(){return r}),n.d(t,"b",function(){return a});var r="horizontal",a="vertical"},217:function(e,t,n){},225:function(e,t,n){},227:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(41),c=n.n(o),l=n(33),u=n(230),i=(n(104),n(30)),s=n(31),m=n(34),d=n(32),b=n(35),h=n(231),p=n(232),f=n(233),C=n(36),k=n.n(C),E=n(46),v=n.n(E),y=n(18),N=n.n(y),_=n(45),g=n.n(_),A=n(25),D=n.n(A),S=n(3),O=n(26),P=n.n(O),j=n(43),U=n.n(j),x=n(53),M=n.n(x),w=Array.from(new Array(21),function(e,t){return t}),T=function(e){var t=e.title,n=e.prefix,r=e.data,o=e.onCheckboxChange,c=e.onSelectAll,l=e.onSelect0_9,u=e.onClear;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"mt-4"},a.a.createElement(D.a,{component:"legend"},t),a.a.createElement(U.a,{row:!0},w.map(function(e){return a.a.createElement(N.a,{key:"".concat(n).concat(e),control:a.a.createElement(M.a,{checked:r.includes(e),onChange:o(e),color:"primary"}),label:e})}))),a.a.createElement("div",{className:"mt-2"},a.a.createElement(P.a,{variant:"outlined",color:"primary",onClick:c},"Select All"),a.a.createElement(P.a,{variant:"outlined",color:"primary",className:"ml-4",onClick:l},"0 - 9"),a.a.createElement(P.a,{variant:"outlined",color:"primary",className:"ml-4",onClick:u},"Clear")))},R=n(54),B=function(e,t){for(var n=[];n.length<t&&e.length>0;){var r=Math.floor(Math.random()*e.length);n.push(e.splice(r,1))}return n},I=function(e){return e.map(function(e){return"".concat(e[0][0],"-").concat(e[0][1],"=").concat(e[0][2])})},L=function(e,t,n){var r=function(e,t){for(var n=[],r=0;r<e.length;r++)for(var a=0;a<t.length;a++)if(e[r]>t[a]){var o=[e[r],t[a],"x"];n.push(o)}return n}(e,t),a=B(r,n);return I(a)},F=n(55),V=n.n(F),H=n(15),G=(n(217),function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).problems=[{value:"10",label:"10 problems",key:"problem_10"},{value:"20",label:"20 problems",key:"problem_20"},{value:"30",label:"30 problems",key:"problem_30"},{value:"50",label:"50 problems",key:"problem_50"}],n.arr20=Array.from(new Array(21),function(e,t){return t}),n.handleProblemNumberChange=function(e){n.props.updateProblemNumber(e.target.value)},n.handleProblemDirectionChange=function(e){n.props.updateProblemDirection(e.target.value)},n.handleMinuendCheckboxChange=function(e){return function(t){n.props.updateMinuend(e,t.target.checked)}},n.handleSubtrahendCheckboxChange=function(e){return function(t){n.props.updateSubtrahend(e,t.target.checked)}},n.handleClickCreate=function(){var e=L(n.props.minuendCheckedArr,n.props.subtrahendCheckedArr,parseInt(n.props.problemValue,10));V.a.post(R.PDFGeneratorEndpoint,{equations:e,template:n.props.problemDirection}).then(function(e){window.location.href=e.data})},n}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.problemValue,n=e.problemDirection;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"mt-4"},a.a.createElement("h3",null," Subtraction -- Numbers up to 20")),a.a.createElement("div",{className:"mt-4"},a.a.createElement(g.a,{component:"fieldset",className:"sub-form-control"},a.a.createElement(D.a,{component:"legend"},"Number of Problems"),a.a.createElement(v.a,{"aria-label":"number of problems",name:"number of problems",value:t,onChange:this.handleProblemNumberChange},this.problems.map(function(e){return a.a.createElement(N.a,{key:e.key,value:e.value,control:a.a.createElement(k.a,{color:"primary"}),label:e.label,labelPlacement:"start",className:"sub-form-control-label"})})))),a.a.createElement("div",{className:"mt-4"},a.a.createElement(g.a,{component:"fieldset",className:"sub-form-control"},a.a.createElement(D.a,{component:"legend"},"Write the problems"),a.a.createElement(v.a,{"aria-label":"direction of problems",name:"direction of problems",value:n,onChange:this.handleProblemDirectionChange},a.a.createElement(N.a,{key:H.a,value:H.a,control:a.a.createElement(k.a,{color:"primary"}),label:H.a,labelPlacement:"start",className:"sub-form-control-label"}),a.a.createElement(N.a,{key:H.b,value:H.b,control:a.a.createElement(k.a,{color:"primary"}),label:H.b,labelPlacement:"start",className:"sub-form-control-label"})))),a.a.createElement(T,{title:"Minuend",prefix:"minuendChecked_",data:this.props.minuendCheckedArr,onCheckboxChange:this.handleMinuendCheckboxChange,onSelectAll:this.props.handleMinuendSelectAll,onSelect0_9:this.props.handleMinuend0_9,onClear:this.props.handleMinuendClear}),a.a.createElement(T,{title:"Subtrahend",prefix:"subtrahendChecked_",data:this.props.subtrahendCheckedArr,onCheckboxChange:this.handleSubtrahendCheckboxChange,onSelectAll:this.props.handleSubtrahendSelectAll,onSelect0_9:this.props.handleSubtrahend0_9,onClear:this.props.handleSubtrahendClear}),a.a.createElement("div",{className:"mt-4"}," ",a.a.createElement(P.a,{variant:"contained",color:"primary",onClick:this.handleClickCreate,disabled:this.props.disableCreateBtn},"Create")))}}]),t}(a.a.Component)),W={updateProblemNumber:function(e){return{type:S.f,payload:e}},updateProblemDirection:function(e){return{type:S.e,payload:e}},updateMinuend:function(e,t){return{type:S.c,payload:{checkboxName:e,value:t}}},handleMinuendSelectAll:function(){return{type:S.d}},handleMinuend0_9:function(){return{type:S.a}},handleMinuendClear:function(){return{type:S.b}},updateSubtrahend:function(e,t){return{type:S.k,payload:{checkboxName:e,value:t}}},handleSubtrahendSelectAll:function(){return{type:S.l}},handleSubtrahend0_9:function(){return{type:S.i}},handleSubtrahendClear:function(){return{type:S.j}}},q=Object(l.b)(function(e){return{problemValue:e.subtractionUpto20Data.problemNumber,problemDirection:e.subtractionUpto20Data.problemDirection,minuendCheckedArr:e.subtractionUpto20Data.minuendChecked,subtrahendCheckedArr:e.subtractionUpto20Data.subtrahendChecked,disableCreateBtn:(t=e.subtractionUpto20Data.minuendChecked,n=e.subtractionUpto20Data.subtrahendChecked,!(t.length>0&&n.length>0))};var t,n},W)(G),J="subtrahend_10",z=function(e,t){var n=function(e,t){return t.includes(J)&&(e=e.filter(function(e){return"x"===e[0]||("x"===e[1]?e[2]<10:e[1]<10)})),e}(function(){for(var e=[],t=0;t<=20;t++)for(var n=0;n<=20;n++)t>=n&&(e.push([t,n,"x"]),e.push([t,"x",n])),t+n<=20&&e.push(["x",t,n]);return e}(),t),r=B(n,e);return I(r)},$=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(m.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(a)))).problems=[{value:"10",label:"10 problems",key:"problem_10"},{value:"20",label:"20 problems",key:"problem_20"},{value:"30",label:"30 problems",key:"problem_30"},{value:"50",label:"50 problems",key:"problem_50"}],n.restrictions=[{key:J,label:"Subtrahend less than 10"}],n.handleProblemNumberChange=function(e){n.props.updateProblemNumber(e.target.value)},n.handleRestrictionsCheckboxChange=function(e){return function(t){n.props.updateRestrictions(e,t.target.checked)}},n.handleClickCreate=function(){var e=z(parseInt(n.props.problemValue,10),n.props.restrictionsCheckedArr);V.a.post(R.PDFGeneratorEndpoint,{equations:e,template:H.a}).then(function(e){window.location.href=e.data})},n}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.problemValue,r=t.restrictionsCheckedArr;return a.a.createElement(a.a.Fragment,null,a.a.createElement("div",{className:"mt-4"},a.a.createElement("h3",null," Substraction -- Missing Number -- Numbers up to 20")),a.a.createElement("div",{className:"mt-4"},a.a.createElement(g.a,{component:"fieldset",className:"sub-form-control"},a.a.createElement(D.a,{component:"legend"},"Number of Problems"),a.a.createElement(v.a,{"aria-label":"number of problems",name:"number of problems",value:n,onChange:this.handleProblemNumberChange},this.problems.map(function(e){return a.a.createElement(N.a,{key:e.key,value:e.value,control:a.a.createElement(k.a,{color:"primary"}),label:e.label,labelPlacement:"start",className:"sub-form-control-label"})})))),a.a.createElement("div",{className:"mt-4"},a.a.createElement(D.a,{component:"legend"},"Restrictions"),a.a.createElement(U.a,null,this.restrictions.map(function(t){return a.a.createElement(N.a,{key:t.key,control:a.a.createElement(M.a,{checked:r.includes(t.key),onChange:e.handleRestrictionsCheckboxChange(t.key),color:"primary"}),label:t.label})}))),a.a.createElement("div",{className:"mt-4"}," ",a.a.createElement(P.a,{variant:"contained",color:"primary",onClick:this.handleClickCreate},"Create")))}}]),t}(a.a.Component),K={updateProblemNumber:function(e){return{type:S.g,payload:e}},updateRestrictions:function(e,t){return{type:S.h,payload:{checkboxName:e,value:t}}}},Q=Object(l.b)(function(e){return{problemValue:e.subtractionMNUpto20Data.problemNumber,restrictionsCheckedArr:e.subtractionMNUpto20Data.restrictionsChecked}},K)($),X=(n(225),function(e){function t(){return Object(i.a)(this,t),Object(m.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(b.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return a.a.createElement(f.a,null,a.a.createElement(h.a,null,a.a.createElement(p.a,{path:"/add_upto20"}),a.a.createElement(p.a,{exact:!0,path:"/subtract_upto20",component:q}),a.a.createElement(p.a,{exact:!0,path:"/subtract_mn_upto20",component:Q})))}}]),t}(r.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Y=n(92),Z=n.n(Y)()();c.a.render(a.a.createElement(l.a,{store:Z},a.a.createElement(u.a,null,a.a.createElement(X,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},228:function(e,t,n){"use strict";n.r(t);var r=n(27),a=n(93),o=n(11),c=n(3),l={problemNumber:"10",problemDirection:n(15).b,minuendChecked:[0,1,2,3,4,5,6,7,8,9],subtrahendChecked:[0,1,2,3,4,5,6,7,8,9]};var u=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.f:return Object(o.a)({},e,{problemNumber:t.payload});case c.e:return Object(o.a)({},e,{problemDirection:t.payload});case c.c:return function(e,t,n){var r=Object(o.a)({},e);return n?(r.minuendChecked=r.minuendChecked.slice(),r.minuendChecked.push(t)):r.minuendChecked=r.minuendChecked.filter(function(e){return t!==e}),r}(e,t.payload.checkboxName,t.payload.value);case c.d:return function(e){var t=Object(o.a)({},e),n=Array.from(new Array(21),function(e,t){return t});return t.minuendChecked=n,t}(e);case c.a:return function(e){var t=Object(o.a)({},e),n=Array.from(new Array(10),function(e,t){return t});return t.minuendChecked=n,t}(e);case c.b:return function(e){var t=Object(o.a)({},e);return t.minuendChecked=[],t}(e);case c.k:return function(e,t,n){var r=Object(o.a)({},e);return n?(r.subtrahendChecked=r.subtrahendChecked.slice(),r.subtrahendChecked.push(t)):r.subtrahendChecked=r.subtrahendChecked.filter(function(e){return t!==e}),r}(e,t.payload.checkboxName,t.payload.value);case c.l:return function(e){var t=Object(o.a)({},e),n=Array.from(new Array(21),function(e,t){return t});return t.subtrahendChecked=n,t}(e);case c.i:return function(e){var t=Object(o.a)({},e),n=Array.from(new Array(10),function(e,t){return t});return t.subtrahendChecked=n,t}(e);case c.j:return function(e){var t=Object(o.a)({},e);return t.subtrahendChecked=[],t}(e);default:return e}},i={problemNumber:"10",restrictionsChecked:[]};var s=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:i,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case c.g:return Object(o.a)({},e,{problemNumber:t.payload});case c.h:return function(e,t,n){var r=Object(o.a)({},e);return n?(r.restrictionsChecked=r.restrictionsChecked.slice(),r.restrictionsChecked.push(t)):r.restrictionsChecked=r.restrictionsChecked.filter(function(e){return t!==e}),r}(e,t.payload.checkboxName,t.payload.value);default:return e}},m=Object(r.c)({subtractionUpto20Data:u,subtractionMNUpto20Data:s});t.default=function(e){return Object(r.d)(m,e,Object(r.a)(a.a))}},3:function(e,t,n){"use strict";n.d(t,"f",function(){return r}),n.d(t,"e",function(){return a}),n.d(t,"c",function(){return o}),n.d(t,"d",function(){return c}),n.d(t,"a",function(){return l}),n.d(t,"b",function(){return u}),n.d(t,"k",function(){return i}),n.d(t,"l",function(){return s}),n.d(t,"i",function(){return m}),n.d(t,"j",function(){return d}),n.d(t,"g",function(){return b}),n.d(t,"h",function(){return h});var r="UPDATE_PROBLEM_NUMBER_S20",a="UPDATE_PROBLEM_DIRECTION_S20",o="UPDATE_MINUEND_S20",c="UPDATE_MINUEND_SELECT_ALL_S20",l="UPDATE_MINUEND_0_9_S20",u="UPDATE_MINUEND_CLEAR_S20",i="UPDATE_SUBTRAHEND_S20",s="UPDATE_SUBTRAHEND_SELECT_ALL_S20",m="UPDATE_SUBTRAHEND_0_9_S20",d="UPDATE_SUBTRAHEND_CLEAR_S20",b="UPDATE_PROBLEM_NUMBER_SMN20",h="UPDATE_RESTRICTION_SMN20"},54:function(e){e.exports={PDFGeneratorEndpoint:"https://api.blankmath.com/"}},92:function(e,t,n){e.exports=n(228)},95:function(e,t,n){e.exports=n(227)}},[[95,1,2]]]);
//# sourceMappingURL=main.7ac8f4a5.chunk.js.map