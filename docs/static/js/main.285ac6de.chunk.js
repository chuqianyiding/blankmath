(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{122:function(e,t,a){e.exports=a.p+"static/media/bee-705412.469e9fca.svg"},127:function(e,t,a){e.exports=a(307)},129:function(e,t,a){e.exports=a(306)},139:function(e,t,a){},140:function(e,t,a){},143:function(e,t,a){},20:function(e){e.exports={PDFGeneratorEndpoint:"https://api.blankmath.com/"}},22:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return n});var r="horizontal",n="vertical"},3:function(e,t,a){"use strict";a.d(t,"s",function(){return r}),a.d(t,"h",function(){return n}),a.d(t,"q",function(){return o}),a.d(t,"f",function(){return i}),a.d(t,"p",function(){return l}),a.d(t,"e",function(){return c}),a.d(t,"r",function(){return u}),a.d(t,"g",function(){return m}),a.d(t,"k",function(){return s}),a.d(t,"m",function(){return d}),a.d(t,"a",function(){return b}),a.d(t,"B",function(){return p}),a.d(t,"x",function(){return f}),a.d(t,"l",function(){return h}),a.d(t,"b",function(){return E}),a.d(t,"C",function(){return v}),a.d(t,"y",function(){return N}),a.d(t,"v",function(){return g}),a.d(t,"o",function(){return y}),a.d(t,"c",function(){return D}),a.d(t,"D",function(){return V}),a.d(t,"z",function(){return C}),a.d(t,"w",function(){return k}),a.d(t,"d",function(){return T}),a.d(t,"E",function(){return _}),a.d(t,"A",function(){return O}),a.d(t,"t",function(){return P}),a.d(t,"i",function(){return I}),a.d(t,"n",function(){return M}),a.d(t,"u",function(){return A}),a.d(t,"j",function(){return w});var r="UPDATE_PROBLEM_NUMBER_GL",n="UPDATE_NUMBER_OF_DIGITS_GL",o="UPDATE_PROBLEM_NUMBER_ADDTHREE",i="UPDATE_NUMBER_OF_DIGITS_ADDTHREE",l="UPDATE_PROBLEM_NUMBER_ADDMINUSTHREE",c="UPDATE_NUMBER_OF_DIGITS_ADDMINUSTHREE",u="UPDATE_PROBLEM_NUMBER_ADDTHREE_MN",m="UPDATE_NUMBER_OF_DIGITS_ADDTHREE_MN",s="UPDATE_PROBLEM_ADDITION",d="UPDATE_PROBLEM_DIRECTION_ADDITION",b="UPDATE_FROM_VALUE_ADDITION",p="UPDATE_TO_VALUE_ADDITION",f="UPDATE_RESTRICTION_ADDITION",h="UPDATE_PROBLEM_ADDITION_MN",E="UPDATE_FROM_VALUE_ADDITION_MN",v="UPDATE_TO_VALUE_ADDITION_MN",N="UPDATE_RESTRICTION_ADDITION_MN",g="UPDATE_PROBLEM_SUBTRACTION",y="UPDATE_PROBLEM_DIRECTION_SUBTRACTION",D="UPDATE_FROM_VALUE_SUBTRACTION",V="UPDATE_TO_VALUE_SUBTRACTION",C="UPDATE_RESTRICTION_SUBTRACTION",k="UPDATE_PROBLEM_SUBTRACTION_MN",T="UPDATE_FROM_VALUE_SUBTRACTION_MN",_="UPDATE_TO_VALUE_SUBTRACTION_MN",O="UPDATE_RESTRICTION_SUBTRACTION_MN",P="UPDATE_PROBLEM_NUMBER_MULTIPLICATION",I="UPDATE_NUMBER_OF_DIGITS_MULTIPLICATION",M="UPDATE_PROBLEM_DIRECTION_MULTIPLICATION",A="UPDATE_PROBLEM_NUMBER_MULTIPLICATION_MN",w="UPDATE_NUMBER_OF_DIGITS_MULTIPLICATION_MN"},304:function(e,t,a){},305:function(e,t,a){},306:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(29),i=a.n(o),l=a(18),c=a(310),u=(a(138),a(139),a(312)),m=a(309),s=a(311),d=a(313),b=a(36),p=a(37),f=a(40),h=a(38),E=a(41),v=(a(140),a(122)),N=a.n(v),g=[{cardKey:"additionCard",sign:["plus"],title:"Addition",subtitle:["12 + 9 = ?","2 + 8 = ?"],link:"/addition"},{cardKey:"mnAdditionCard",sign:["plus"],title:"Missing Number",subtitle:["7 + ? = 15","? + 3 = 12"],link:"/additionmn"},{cardKey:"tnpAdditionCard",sign:["plus"],title:"Three Number",subtitle:["7 + 8 + 12 = ?","2 + 3 + 4 = ?"],link:"add_three_numbers"},{cardKey:"minusCard",sign:["minus"],title:"Minus",subtitle:["12 - 9 = ?","8 - 2 = ?"],link:"/minus"},{cardKey:"mnMinusCard",sign:["minus"],title:"Missing Number",subtitle:["7 - ? = 5","? - 3 = 12"],link:"/minusmn"},{cardKey:"tnpAdditionMinusCard",sign:["plus","minus"],title:"Three Number",subtitle:["17 - 8 + 7 = ?","8 + 3 - 4 = ?"],link:"/add_minus_three_numbers"},{cardKey:"mnThreeNumberAdditionCard",sign:["plus"],title:"Missing Number",subtitle:["7 + ? + 8 = 20","2 + 3 + ? = 15"],link:"add_three_numbers_mn"},{cardKey:"timesCard",sign:["times"],title:"Multiplication",subtitle:["8 * 9 = ?","2 * 3 = ?"],link:"/multiplication"},{cardKey:"mnTimesCard",sign:["times"],title:"Missing Number",subtitle:["8 * ? = 72","2 * ? = 6"],link:"/multiplicationmn"},{cardKey:"comparisionCard",sign:["greaterThan","lessThan"],title:"Comparision",subtitle:["7 > 8 or 7 < 8 ?","12 > 2 or 12 < 2 ?"],link:"/greater_than_less_than"},{cardKey:"divisionCard",sign:["divide"],title:"Division",subtitle:["8 / 2 = ?","12 / 4 = ?"]},{cardKey:"mnDivisionCard",sign:["divide"],title:"Missing Number",subtitle:["8 / ? = 2","12 / ? = 3"]}],y=a(123),D=a(42),V=(a(143),function(e){switch(e){case"plus":return D.e;case"minus":return D.d;case"times":return D.f;case"divide":return D.a;case"greaterThan":return D.b;case"lessThan":return D.c;default:return D.e}}),C=function(e){var t=e.cardKey,a=e.sign,r=e.title,o=e.subtitle,i=e.onClick;return n.a.createElement("div",{className:"bm-card"},n.a.createElement("div",{className:"bm-sign-area position-absolute d-flex justify-content-center align-items-center"},a.map(function(e,a){return n.a.createElement(y.a,{className:"mr-3",key:"".concat(t,"_sign_").concat(a),icon:V(e),size:"2x"})})),n.a.createElement("div",{className:"bm-des-area position-absolute d-flex justify-content-center align-items-center"},n.a.createElement("div",{className:"flex-column"},n.a.createElement("div",{className:"bm-des-title d-flex justify-content-center"},r),o.map(function(e,a){return n.a.createElement("div",{key:"".concat(t,"_subtitle_").concat(a),className:"d-flex justify-content-center"},e)}))),n.a.createElement("div",{className:"bm-but-area position-absolute d-flex justify-content-center align-items-center"},n.a.createElement("button",{className:"bm-card-btn",onClick:i},"Generate")))},k=Object(s.a)(function(e){return n.a.createElement(C,Object.assign({},e,{onClick:function(){var t=e.link;e.history.push(t)}}))}),T=function(e){function t(){return Object(b.a)(this,t),Object(f.a)(this,Object(h.a)(t).apply(this,arguments))}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"position-relative bm-bee-container"},n.a.createElement("img",{src:N.a,alt:"bee"})),n.a.createElement("div",{className:"bm-bullet-container"},n.a.createElement("ul",null,n.a.createElement("div",{className:"d-md-none d-lg-block"},n.a.createElement("li",{className:"bm-text-24"},"Printable in PDF format")),n.a.createElement("div",{className:"d-none d-md-block d-lg-none"},n.a.createElement("li",{className:"bm-text-24"},"Printable")),n.a.createElement("li",{className:"bm-text-24"},"100% free"),n.a.createElement("li",{className:"bm-text-24"},"Open source"))),n.a.createElement("div",{className:"mt-5 row row-cols-1 row-cols-sm-2 row-cols-md-3"},g.map(function(e){return n.a.createElement("div",{key:e.cardKey,className:"col d-flex justify-content-center bm-card-container"},n.a.createElement(k,{key:e.cardKey,sign:e.sign,title:e.title,subtitle:e.subtitle,link:e.link}))})))}}]),t}(n.a.Component),_=a(53),O=a.n(_),P=a(52),I=a.n(P),M=a(26),A=a.n(M),w=a(30),F=a.n(w),j=a(24),x=a.n(j),R=[{value:"10",label:"10 problems",key:"problem_10"},{value:"20",label:"20 problems",key:"problem_20"},{value:"30",label:"30 problems",key:"problem_30"},{value:"50",label:"50 problems",key:"problem_50"}],U=function(e){var t=e.problemValue,a=e.onProblemNumberChange;return n.a.createElement(F.a,{component:"fieldset",className:"sub-form-control"},n.a.createElement(x.a,{component:"legend"},"Number of Problems"),n.a.createElement(I.a,{row:!0,"aria-label":"number of problems",name:"number of problems",value:t,onChange:a},R.map(function(e){return n.a.createElement(A.a,{key:e.key,value:e.value,control:n.a.createElement(O.a,{color:"primary"}),label:e.label,className:"sub-form-control-label"})})))},B=a(3),L=[{value:"1d",label:"1 digit",key:"digit_1"},{value:"2d",label:"2 digit",key:"digit_2"},{value:"3d",label:"3 digit",key:"digit_3"},{value:"l20",label:"number less than 20",key:"digit_l20"}],S=function(e){var t=e.digitValue,a=e.onDigitChange;return n.a.createElement("div",{className:"mt-4"},n.a.createElement(F.a,{component:"fieldset",className:"sub-form-control"},n.a.createElement(x.a,{component:"legend"},"Number of Digits"),n.a.createElement(I.a,{row:!0,"aria-label":"number of digits",name:"number of digits",value:t,onChange:a},L.map(function(e){return n.a.createElement(A.a,{key:e.key,value:e.value,control:n.a.createElement(O.a,{color:"primary"}),label:e.label,className:"sub-form-control-label"})}))))},G=a(21),K=a.n(G),q=function(e,t){var a=[],r=10;switch(e){case"1d":r=10;break;case"2d":r=100;break;case"3d":r=1e3;break;case"l20":r=20}for(var n=new Set,o=0;o<t;){var i=Math.floor(Math.random()*r),l=Math.floor(Math.random()*r),c="".concat(i,",").concat(l);n.has(c)||(n.add(c),a.push("".concat(i,"o").concat(l)),o++)}return a},H=a(19),z=a.n(H),J=a(20),W=function(e){function t(){var e,a;Object(b.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).handleProblemNumberChange=function(e){a.props.updateProblemNumber(e.target.value)},a.handleDigitValueChange=function(e){a.props.updateNumberOfDigits(e.target.value)},a.handleClickCreate=function(e){var t=q(a.props.digitValue,parseInt(a.props.problemValue,10));z.a.post(J.PDFGeneratorEndpoint,{equations:t}).then(function(e){window.location.href=e.data})},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.problemValue,a=e.digitValue;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"mt-5"},n.a.createElement(U,{problemValue:t,onProblemNumberChange:this.handleProblemNumberChange})),n.a.createElement("div",{className:"mt-4"},n.a.createElement(S,{digitValue:a,onDigitChange:this.handleDigitValueChange})),n.a.createElement("div",{className:"mt-4"}," ",n.a.createElement(K.a,{variant:"contained",color:"primary",onClick:this.handleClickCreate},"Create")))}}]),t}(n.a.Component),$={updateProblemNumber:function(e){return{type:B.s,payload:e}},updateNumberOfDigits:function(e){return{type:B.h,payload:e}}},Q=Object(l.b)(function(e){return{problemValue:e.greaterThanLessThanData.problemNumber,digitValue:e.greaterThanLessThanData.digitNumber}},$)(W),X=function(e,t){return Math.floor(Math.random()*(t-e+1)+e)},Y=function(e,t){for(var a=[];a.length<t&&e.length>0;){var r=Math.floor(Math.random()*e.length);a.push(e.splice(r,1))}return a},Z=function(e,t){return e.map(function(e){return"".concat(e[0][0]).concat(t).concat(e[0][1],"=").concat(e[0][2])})},ee=function(e,t){return e.map(function(e){return"".concat(e[0]).concat(t).concat(e[1]).concat(t).concat(e[2],"=").concat(e[3])})},te=function(e,t){var a=function(e,t){var a=[],r=10;switch(e){case"1d":r=10;break;case"2d":r=100;break;case"3d":r=1e3;break;case"l20":r=10}for(var n=new Set,o=0;o<t;){var i=X(1,r-1),l=X(1,r-1),c=X(1,r-1);if(!("l20"===e&&i+l+c>20)){var u="".concat(i,",").concat(l,",").concat(c);if(!n.has(u)){var m=[i,l,c,"x"];n.add(u),a.push(m),o++}}}return a}(e,t);return ee(a,"+")},ae=function(e){function t(){var e,a;Object(b.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).handleProblemNumberChange=function(e){a.props.updateProblemNumber(e.target.value)},a.handleDigitValueChange=function(e){a.props.updateNumberOfDigits(e.target.value)},a.handleClickCreate=function(e){var t=te(a.props.digitValue,parseInt(a.props.problemValue,10));z.a.post(J.PDFGeneratorEndpoint,{equations:t,template:"3num"}).then(function(e){window.location.href=e.data})},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.problemValue,a=e.digitValue;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"mt-5"},n.a.createElement(U,{problemValue:t,onProblemNumberChange:this.handleProblemNumberChange})),n.a.createElement("div",{className:"mt-4"},n.a.createElement(S,{digitValue:a,onDigitChange:this.handleDigitValueChange})),n.a.createElement("div",{className:"mt-4"}," ",n.a.createElement(K.a,{variant:"contained",color:"primary",onClick:this.handleClickCreate},"Create")))}}]),t}(n.a.Component),re={updateProblemNumber:function(e){return{type:B.q,payload:e}},updateNumberOfDigits:function(e){return{type:B.f,payload:e}}},ne=Object(l.b)(function(e){return{problemValue:e.addThreeNumbersData.problemNumber,digitValue:e.addThreeNumbersData.digitNumber}},re)(ae),oe=function(e,t){return function(e,t){var a=[],r=10;switch(e){case"1d":r=10;break;case"2d":r=100;break;case"3d":r=1e3;break;case"l20":r=10}for(var n=new Set,o=0;o<t;){var i=X(1,r-1),l=X(1,r-1),c=X(1,r-1),u=X(0,1);if(!(0===u&&i+l-c<0)&&(1!==u||!(i-l+c<0||i-l<0))){if("l20"===e)if(0===u){if(i+l-c>20)continue}else if(i-l+c>20)continue;var m="";m=0===u?"".concat(i,"+").concat(l,"-").concat(c,"=x"):"".concat(i,"-").concat(l,"+").concat(c,"=x"),n.has(m)||(n.add(m),a.push(m),o++)}}return a}(e,t)},ie=function(e){function t(){var e,a;Object(b.a)(this,t);for(var r=arguments.length,n=new Array(r),o=0;o<r;o++)n[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(n)))).handleProblemNumberChange=function(e){a.props.updateProblemNumber(e.target.value)},a.handleDigitValueChange=function(e){a.props.updateNumberOfDigits(e.target.value)},a.handleClickCreate=function(e){var t=oe(a.props.digitValue,parseInt(a.props.problemValue,10));z.a.post(J.PDFGeneratorEndpoint,{equations:t,template:"3num"}).then(function(e){window.location.href=e.data})},a}return Object(E.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){var e=this.props,t=e.problemValue,a=e.digitValue;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"mt-5"},n.a.createElement(U,{problemValue:t,onProblemNumberChange:this.handleProblemNumberChange})),n.a.createElement("div",{className:"mt-4"},n.a.createElement(S,{digitValue:a,onDigitChange:this.handleDigitValueChange})),n.a.createElement("div",{className:"mt-4"}," ",n.a.createElement(K.a,{variant:"contained",color:"primary",onClick:this.handleClickCreate},"Create")))}}]),t}(n.a.Component),le={updateProblemNumber:function(e){return{type:B.p,payload:e}},updateNumberOfDigits:function(e){return{type:B.e,payload:e}}},ce=Object(l.b)(function(e){return{problemValue:e.addMinusThreeNumbersData.problemNumber,digitValue:e.addMinusThreeNumbersData.digitNumber}},le)(ie),ue=function(e,t){return function(e,t){var a=[],r=10;switch(e){case"1d":r=10;break;case"2d":r=100;break;case"3d":r=1e3;break;case"l20":r=20}for(var n=new Set,o=0;o<t;){var i=X(1,r-1),l=X(1,r-1),c="".concat(i,",").concat(l);if(!n.has(c)){var u=[i,l,"x"];n.add(c),a.push(u),o++}}return a}(e,t).map(function(e){return"".concat(e[0],"*").concat(e[1],"=").concat(e[2])})},me=a(22),se=[{value:me.a,label:me.a,key:"direction_".concat(me.a)},{value:me.b,label:me.b,key:"direction_".concat(me.b)}],de=function(e){var t=e.problemDirection,a=e.onDirectionchange;return n.a.createElement(F.a,{component:"fieldset",className:"sub-form-control"},n.a.createElement(x.a,{component:"legend"},"Direction of Problems"),n.a.createElement(I.a,{row:!0,"aria-label":"direction of problems",name:"direction of problems",value:t,onChange:a},se.map(function(e){return n.a.createElement(A.a,{key:e.key,value:e.value,control:n.a.createElement(O.a,{color:"primary"}),label:e.label,className:"sub-form-control-label"})})))},be={updateProblemNumber:function(e){return{type:B.t,payload:e}},updateNumberOfDigits:function(e){return{type:B.i,payload:e}},updateProblemDirection:function(e){return{type:B.n,payload:e}}},pe=Object(l.b)(function(e){return{problemValue:e.multiplicationData.problemNumber,problemDirection:e.multiplicationData.problemDirection,digitValue:e.multiplicationData.digitNumber}},be)(function(e){var t=e.problemValue,a=e.problemDirection,r=e.digitValue,o=e.updateProblemNumber,i=e.updateProblemDirection,l=e.updateNumberOfDigits;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"mt-5"},n.a.createElement(U,{problemValue:t,onProblemNumberChange:function(e){o(e.target.value)}})),n.a.createElement("div",{className:"mt-4"},n.a.createElement(S,{digitValue:r,onDigitChange:function(e){l(e.target.value)}})),n.a.createElement("div",{className:"mt-4"},n.a.createElement(de,{problemDirection:a,onDirectionchange:function(e){i(e.target.value)}})),n.a.createElement("div",{className:"mt-4"}," ",n.a.createElement(K.a,{variant:"contained",color:"primary",onClick:function(e){var n=ue(r,parseInt(t,10));z.a.post(J.PDFGeneratorEndpoint,{equations:n,template:a}).then(function(e){window.location.href=e.data})}},"Create")))}),fe=function(e,t){return function(e,t){var a=[],r=10;switch(e){case"1d":r=10;break;case"2d":r=100;break;case"3d":r=1e3;break;case"l20":r=20}for(var n=new Set,o=0;o<t;){var i=X(1,r-1),l=X(1,r-1),c="",u=[];switch(X(0,2)){case 0:c="x,".concat(l,",").concat(i*l),u=["x",i,i*l];break;case 1:c="".concat(i,",x,").concat(i*l),u=[i,"x",i*l];break;case 2:c="".concat(i,",").concat(l,",x"),u=[i,l,"x"]}n.has(c)||(n.add(c),a.push(u),o++)}return a}(e,t).map(function(e){return"".concat(e[0],"*").concat(e[1],"=").concat(e[2])})},he={updateProblemNumber:function(e){return{type:B.u,payload:e}},updateNumberOfDigits:function(e){return{type:B.j,payload:e}}},Ee=Object(l.b)(function(e){return{problemValue:e.multiplicationMNData.problemNumber,problemDirection:e.multiplicationMNData.problemDirection,digitValue:e.multiplicationMNData.digitNumber}},he)(function(e){var t=e.problemValue,a=e.problemDirection,r=e.digitValue,o=e.updateProblemNumber,i=e.updateNumberOfDigits;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"mt-5"},n.a.createElement(U,{problemValue:t,onProblemNumberChange:function(e){o(e.target.value)}})),n.a.createElement("div",{className:"mt-4"},n.a.createElement(S,{digitValue:r,onDigitChange:function(e){i(e.target.value)}})),n.a.createElement("div",{className:"mt-4"}," ",n.a.createElement(K.a,{variant:"contained",color:"primary",onClick:function(e){var n=fe(r,parseInt(t,10));z.a.post(J.PDFGeneratorEndpoint,{equations:n,template:a}).then(function(e){window.location.href=e.data})}},"Create")))}),ve=a(81),Ne=a.n(ve),ge=function(e){var t=e.lower,a=e.upper,r=e.onFromChange,o=e.onToChange,i=e.fromValue,l=e.toValue,c=e.isFromValueError,u=e.isToValueError,m="".concat(t," <= number <= ").concat(a);return n.a.createElement("div",{className:"mt-5"},n.a.createElement(F.a,{component:"fieldset",className:"sub-form-control"},n.a.createElement(x.a,{component:"legend"},"Range of number"),n.a.createElement("div",{className:"pt-3 d-flex flex-row"},n.a.createElement("div",{className:"mr-3"},n.a.createElement(Ne.a,{id:"outlined-number",label:"From",type:"number",error:c,InputLabelProps:{shrink:!0},variant:"outlined",helperText:c?"invalid entry":m,onChange:r,value:i})),n.a.createElement("div",null,n.a.createElement(Ne.a,{id:"outlined-number",label:"To",type:"number",error:u,InputLabelProps:{shrink:!0},variant:"outlined",helperText:u?"invalid entry":m,onChange:o,value:l})))))};ge.defaultProps={lower:0,upper:1e3,onFromChange:function(){},onToChange:function(){},fromValue:"0",toValue:"20",isFromValueError:!1,isToValueError:!1};var ye=ge,De=a(8),Ve=a(31),Ce=a.n(Ve),ke=a(39),Te=a.n(ke),_e=function(e){return e.additionData},Oe=function(e){var t=_e(e),a=t.isFromValueError,r=t.isToValueError;return a||r},Pe={updateProblemNumber:function(e){return{type:B.k,payload:e}},updateProblemDirection:function(e){return{type:B.m,payload:e}},updateFromValue:function(e){return{type:B.a,payload:e}},updateToValue:function(e){return{type:B.B,payload:e}},updateRestrictions:function(e,t){return{type:B.x,payload:{checkboxName:e,value:t}}}},Ie=Object(l.b)(function(e){return{problemValue:e.additionData.problemNumber,problemDirection:e.additionData.problemDirection,fromValue:e.additionData.fromValue,toValue:e.additionData.toValue,isFromValueError:e.additionData.isFromValueError,isToValueError:e.additionData.isToValueError,restrictionsCheckedArr:e.additionData.restrictionsChecked,disableCreateBtn:Oe(e)}},Pe)(function(e){var t=e.fromValue,a=e.toValue,r=e.updateFromValue,o=e.updateToValue,i=e.isFromValueError,l=e.isToValueError,c=e.problemValue,u=e.problemDirection,m=e.updateProblemNumber,s=e.updateProblemDirection,d=e.updateRestrictions,b=e.disableCreateBtn,p=e.restrictionsCheckedArr,f=[{key:"addend_10",label:"Smaller addend less than 10"}];return n.a.createElement(n.a.Fragment,null,n.a.createElement(ye,{lower:De.a,upper:De.b,fromValue:t,toValue:a,onFromChange:function(e){r(e.target.value)},onToChange:function(e){o(e.target.value)},isFromValueError:i,isToValueError:l}),n.a.createElement("div",{className:"mt-5"},n.a.createElement(U,{problemValue:c,onProblemNumberChange:function(e){m(e.target.value)}})),n.a.createElement("div",{className:"mt-4"},n.a.createElement(de,{problemDirection:u,onDirectionchange:function(e){s(e.target.value)}})),n.a.createElement("div",{className:"mt-4"},n.a.createElement(x.a,{component:"legend"},"Restrictions"),n.a.createElement(Ce.a,null,f.map(function(e){return n.a.createElement(A.a,{key:e.key,control:n.a.createElement(Te.a,{checked:p.includes(e.key),onChange:(t=e.key,function(e){d(t,e.target.checked)}),color:"primary"}),label:e.label});var t}))),n.a.createElement("div",{className:"mt-4"}," ",n.a.createElement(K.a,{variant:"contained",color:"primary",disabled:b,onClick:function(){var e=function(e,t,a,r){var n=function(e,t){return t.includes("addend_10")&&(e=e.filter(function(e){return e[0]<=e[1]?e[0]<10:e[1]<10})),e}(function(e,t){for(var a=[],r=0;r<=t;r++)for(var n=0;n<=t;n++)if(r+n>=e&&r+n<=t){var o=[r,n,"x"];a.push(o)}return a}(e,t),r),o=Y(n,a);return Z(o,"+")}(parseInt(t,10),parseInt(a,10),parseInt(c,10),p);z.a.post(J.PDFGeneratorEndpoint,{equations:e,template:u}).then(function(e){window.location.href=e.data})}},"Create")))}),Me=function(e){return e.additionMNData},Ae=function(e){var t=Me(e),a=t.isFromValueError,r=t.isToValueError;return a||r},we={updateProblemNumber:function(e){return{type:B.l,payload:e}},updateFromValue:function(e){return{type:B.b,payload:e}},updateToValue:function(e){return{type:B.C,payload:e}},updateRestrictions:function(e,t){return{type:B.y,payload:{checkboxName:e,value:t}}}},Fe=Object(l.b)(function(e){return{problemValue:e.additionMNData.problemNumber,problemDirection:e.additionMNData.problemDirection,fromValue:e.additionMNData.fromValue,toValue:e.additionMNData.toValue,isFromValueError:e.additionMNData.isFromValueError,isToValueError:e.additionMNData.isToValueError,restrictionsCheckedArr:e.additionMNData.restrictionsChecked,disableCreateBtn:Ae(e)}},we)(function(e){var t=e.fromValue,a=e.toValue,r=e.updateFromValue,o=e.updateToValue,i=e.isFromValueError,l=e.isToValueError,c=e.problemValue,u=e.problemDirection,m=e.updateProblemNumber,s=e.updateRestrictions,d=e.disableCreateBtn,b=e.restrictionsCheckedArr,p=[{key:"subtrahend_10",label:"Subtrahend less than 10"}];return n.a.createElement(n.a.Fragment,null,n.a.createElement(ye,{lower:De.a,upper:De.b,fromValue:t,toValue:a,onFromChange:function(e){r(e.target.value)},onToChange:function(e){o(e.target.value)},isFromValueError:i,isToValueError:l}),n.a.createElement("div",{className:"mt-5"},n.a.createElement(U,{problemValue:c,onProblemNumberChange:function(e){m(e.target.value)}})),n.a.createElement("div",{className:"mt-4"},n.a.createElement(x.a,{component:"legend"},"Restrictions"),n.a.createElement(Ce.a,null,p.map(function(e){return n.a.createElement(A.a,{key:e.key,control:n.a.createElement(Te.a,{checked:b.includes(e.key),onChange:(t=e.key,function(e){s(t,e.target.checked)}),color:"primary"}),label:e.label});var t}))),n.a.createElement("div",{className:"mt-4"}," ",n.a.createElement(K.a,{variant:"contained",color:"primary",disabled:d,onClick:function(){var e=function(e,t,a,r){var n=function(e,t){return t.includes("subtrahend_10")&&(e=e.filter(function(e){return"x"===e[2]?e[0]<10||e[1]<10:"x"===e[0]?e[1]<10:e[0]<10})),e}(function(e,t){for(var a=[],r=0;r<=t;r++)for(var n=0;n<=t;n++)r<=n&&n-r>=e&&(a.push([r,"x",n]),a.push(["x",r,n])),r+n>=e&&r+n<=t&&a.push([r,n,"x"]);return a}(e,t),r),o=Y(n,a);return Z(o,"+")}(parseInt(t,10),parseInt(a,10),parseInt(c,10),b);z.a.post(J.PDFGeneratorEndpoint,{equations:e,template:u}).then(function(e){window.location.href=e.data})}},"Create")))}),je=function(e){return e.subtractionData},xe=function(e){var t=je(e),a=t.isFromValueError,r=t.isToValueError;return a||r},Re={updateProblemNumber:function(e){return{type:B.v,payload:e}},updateProblemDirection:function(e){return{type:B.o,payload:e}},updateFromValue:function(e){return{type:B.c,payload:e}},updateToValue:function(e){return{type:B.D,payload:e}},updateRestrictions:function(e,t){return{type:B.z,payload:{checkboxName:e,value:t}}}},Ue=Object(l.b)(function(e){return{problemValue:e.subtractionData.problemNumber,problemDirection:e.subtractionData.problemDirection,fromValue:e.subtractionData.fromValue,toValue:e.subtractionData.toValue,isFromValueError:e.subtractionData.isFromValueError,isToValueError:e.subtractionData.isToValueError,restrictionsCheckedArr:e.subtractionData.restrictionsChecked,disableCreateBtn:xe(e)}},Re)(function(e){var t=e.fromValue,a=e.toValue,r=e.updateFromValue,o=e.updateToValue,i=e.isFromValueError,l=e.isToValueError,c=e.problemValue,u=e.problemDirection,m=e.updateProblemNumber,s=e.updateProblemDirection,d=e.updateRestrictions,b=e.disableCreateBtn,p=e.restrictionsCheckedArr,f=[{key:"subtrahend_10",label:"Subtrahend less than 10"}];return n.a.createElement(n.a.Fragment,null,n.a.createElement(ye,{lower:De.a,upper:De.b,fromValue:t,toValue:a,onFromChange:function(e){r(e.target.value)},onToChange:function(e){o(e.target.value)},isFromValueError:i,isToValueError:l}),n.a.createElement("div",{className:"mt-5"},n.a.createElement(U,{problemValue:c,onProblemNumberChange:function(e){m(e.target.value)}})),n.a.createElement("div",{className:"mt-4"},n.a.createElement(de,{problemDirection:u,onDirectionchange:function(e){s(e.target.value)}})),n.a.createElement("div",{className:"mt-4"},n.a.createElement(x.a,{component:"legend"},"Restrictions"),n.a.createElement(Ce.a,null,f.map(function(e){return n.a.createElement(A.a,{key:e.key,control:n.a.createElement(Te.a,{checked:p.includes(e.key),onChange:(t=e.key,function(e){d(t,e.target.checked)}),color:"primary"}),label:e.label});var t}))),n.a.createElement("div",{className:"mt-4"}," ",n.a.createElement(K.a,{variant:"contained",color:"primary",disabled:b,onClick:function(){var e=function(e,t,a,r){var n=function(e,t){return t.includes("subtrahend_10")&&(e=e.filter(function(e){return e[1]<10})),e}(function(e,t){for(var a=[],r=0;r<=t;r++)for(var n=0;n<=t;n++)if(r-n>=e){var o=[r,n,"x"];a.push(o)}return a}(e,t),r),o=Y(n,a);return Z(o,"-")}(parseInt(t,10),parseInt(a,10),parseInt(c,10),p);z.a.post(J.PDFGeneratorEndpoint,{equations:e,template:u}).then(function(e){window.location.href=e.data})}},"Create")))}),Be=function(e){return e.subtractionMNData},Le=function(e){var t=Be(e),a=t.isFromValueError,r=t.isToValueError;return a||r},Se={updateProblemNumber:function(e){return{type:B.w,payload:e}},updateFromValue:function(e){return{type:B.d,payload:e}},updateToValue:function(e){return{type:B.E,payload:e}},updateRestrictions:function(e,t){return{type:B.A,payload:{checkboxName:e,value:t}}}},Ge=Object(l.b)(function(e){return{problemValue:e.subtractionMNData.problemNumber,problemDirection:e.subtractionMNData.problemDirection,fromValue:e.subtractionMNData.fromValue,toValue:e.subtractionMNData.toValue,isFromValueError:e.subtractionMNData.isFromValueError,isToValueError:e.subtractionMNData.isToValueError,restrictionsCheckedArr:e.subtractionMNData.restrictionsChecked,disableCreateBtn:Le(e)}},Se)(function(e){var t=e.fromValue,a=e.toValue,r=e.updateFromValue,o=e.updateToValue,i=e.isFromValueError,l=e.isToValueError,c=e.problemValue,u=e.problemDirection,m=e.updateProblemNumber,s=e.updateRestrictions,d=e.disableCreateBtn,b=e.restrictionsCheckedArr,p=[{key:"subtrahend_10",label:"Subtrahend less than 10"}];return n.a.createElement(n.a.Fragment,null,n.a.createElement(ye,{lower:De.a,upper:De.b,fromValue:t,toValue:a,onFromChange:function(e){r(e.target.value)},onToChange:function(e){o(e.target.value)},isFromValueError:i,isToValueError:l}),n.a.createElement("div",{className:"mt-5"},n.a.createElement(U,{problemValue:c,onProblemNumberChange:function(e){m(e.target.value)}})),n.a.createElement("div",{className:"mt-4"},n.a.createElement(x.a,{component:"legend"},"Restrictions"),n.a.createElement(Ce.a,null,p.map(function(e){return n.a.createElement(A.a,{key:e.key,control:n.a.createElement(Te.a,{checked:b.includes(e.key),onChange:(t=e.key,function(e){s(t,e.target.checked)}),color:"primary"}),label:e.label});var t}))),n.a.createElement("div",{className:"mt-4"}," ",n.a.createElement(K.a,{variant:"contained",color:"primary",disabled:d,onClick:function(){var e=function(e,t,a,r){var n=function(e,t){return t.includes("subtrahend_10")&&(e=e.filter(function(e){return"x"===e[0]||("x"===e[1]?e[2]<10:e[1]<10)})),e}(function(e,t){for(var a=[],r=0;r<=t;r++)for(var n=0;n<=t;n++)r>=n&&r-n>=e&&(a.push([r,n,"x"]),a.push([r,"x",n])),r+n>=e&&r+n<=20&&a.push(["x",r,n]);return a}(e,t),r),o=Y(n,a);return Z(o,"-")}(parseInt(t,10),parseInt(a,10),parseInt(c,10),b);z.a.post(J.PDFGeneratorEndpoint,{equations:e,template:u}).then(function(e){window.location.href=e.data})}},"Create")))}),Ke=(a(304),function(e){var t=e.onClickLogo;return n.a.createElement("div",{className:"bm-header d-flex flex-md-row flex-column mb-3"},n.a.createElement("div",{className:"bm-header-title",onClick:t},"Blankmath"),n.a.createElement("div",{className:"bm-header-subtitle ml-md-3 mt-2 align-self-md-center"},"Unlimited FREE math worksheets"))}),qe=function(e,t){var a=function(e,t){var a=[],r=10;switch(e){case"1d":r=27;break;case"2d":r=100;break;case"3d":r=1e3;break;case"l20":r=20}for(var n=new Set,o=0;o<t;){var i=X(1,r-1),l=X(1,r-1),c=X(1,r-1),u=X(0,3),m="",s=[];switch(u){case 0:case 1:case 2:var d=!0;if(i+l<c){switch(e){case"1d":case"l20":(i>=10||l>=10)&&(d=!1);break;case"2d":(i>=100||l>=100)&&(d=!1);break;case"3d":(i>=1e3||l>=1e3)&&(d=!1)}if(d)switch(u){case 0:m="x,".concat(i,",").concat(l,",").concat(c),s=["x",i,l,c];break;case 1:m="".concat(i,",x,").concat(l,",").concat(c),s=[i,"x",l,c];break;case 2:m="".concat(i,",").concat(l,",x,").concat(c),s=[i,l,"x",c]}}break;case 3:switch(d=!0,e){case"1d":(i>=10||l>=10||c>=10)&&(d=!1);break;case"2d":(i>=100||l>=100||c>=100)&&(d=!1);break;case"3d":(i>=1e3||l>=1e3||c>=1e3)&&(d=!1);break;case"l20":(i>=10||l>=10||c>=10||i+l+c>20)&&(d=!1)}d&&(m="".concat(i,",").concat(l,",").concat(c,",x"),s=[i,l,c,"x"])}m&&!n.has(m)&&(n.add(m),a.push(s),o++)}return a}(e,t);return ee(a,"+")},He={updateProblemNumber:function(e){return{type:B.r,payload:e}},updateNumberOfDigits:function(e){return{type:B.g,payload:e}}},ze=Object(l.b)(function(e){return{problemValue:e.addThreeNumbersMNData.problemNumber,digitValue:e.addThreeNumbersMNData.digitNumber}},He)(function(e){var t=e.problemValue,a=e.digitValue,r=e.updateProblemNumber,o=e.updateNumberOfDigits;return n.a.createElement(n.a.Fragment,null,n.a.createElement("div",{className:"mt-5"},n.a.createElement(U,{problemValue:t,onProblemNumberChange:function(e){r(e.target.value)}})),n.a.createElement("div",{className:"mt-4"},n.a.createElement(S,{digitValue:a,onDigitChange:function(e){o(e.target.value)}})),n.a.createElement("div",{className:"mt-4"}," ",n.a.createElement(K.a,{variant:"contained",color:"primary",onClick:function(e){var r=qe(a,parseInt(t,10));z.a.post(J.PDFGeneratorEndpoint,{equations:r,template:"3num"}).then(function(e){window.location.href=e.data})}},"Create")))}),Je=(a(305),Object(s.a)(function(e){var t=e.history;return n.a.createElement(d.a,null,n.a.createElement(Ke,{onClickLogo:function(){t.push("/")}}),n.a.createElement(u.a,null,n.a.createElement(m.a,{exact:!0,path:"/",component:T}),n.a.createElement(m.a,{exact:!0,path:"/greater_than_less_than",component:Q}),n.a.createElement(m.a,{path:"/add_three_numbers",component:ne}),n.a.createElement(m.a,{path:"/add_minus_three_numbers",component:ce}),n.a.createElement(m.a,{path:"/add_three_numbers_mn",component:ze}),n.a.createElement(m.a,{exact:!0,path:"/multiplication",component:pe}),n.a.createElement(m.a,{exact:!0,path:"/multiplicationmn",component:Ee}),n.a.createElement(m.a,{exact:!0,path:"/addition",component:Ie}),n.a.createElement(m.a,{exact:!0,path:"/additionmn",component:Fe}),n.a.createElement(m.a,{exact:!0,path:"/minus",component:Ue}),n.a.createElement(m.a,{exact:!0,path:"/minusmn",component:Ge})))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var We=a(127),$e=a.n(We)()();i.a.render(n.a.createElement(l.a,{store:$e},n.a.createElement(c.a,null,n.a.createElement(Je,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},307:function(e,t,a){"use strict";a.r(t);var r=a(44),n=a(128),o=a(6),i=a(3),l={problemNumber:"10",digitNumber:"l20"},c=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:l,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.s:return Object(o.a)({},e,{problemNumber:t.payload});case i.h:return Object(o.a)({},e,{digitNumber:t.payload});default:return e}},u={problemNumber:"20",digitNumber:"1d"},m=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.q:return Object(o.a)({},e,{problemNumber:t.payload});case i.f:return Object(o.a)({},e,{digitNumber:t.payload});default:return e}},s={problemNumber:"20",digitNumber:"1d"},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:s,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.p:return Object(o.a)({},e,{problemNumber:t.payload});case i.e:return Object(o.a)({},e,{digitNumber:t.payload});default:return e}},b={problemNumber:"20",digitNumber:"1d"},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.r:return Object(o.a)({},e,{problemNumber:t.payload});case i.g:return Object(o.a)({},e,{digitNumber:t.payload});default:return e}},f=a(22),h={problemNumber:"20",digitNumber:"1d",problemDirection:f.b},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:h,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.t:return Object(o.a)({},e,{problemNumber:t.payload});case i.n:return Object(o.a)({},e,{problemDirection:t.payload});case i.i:return Object(o.a)({},e,{digitNumber:t.payload});default:return e}},v={problemNumber:"20",digitNumber:"1d",problemDirection:f.a},N=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:v,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.u:return Object(o.a)({},e,{problemNumber:t.payload});case i.j:return Object(o.a)({},e,{digitNumber:t.payload});default:return e}},g=a(8),y={problemNumber:"20",problemDirection:f.b,fromValue:"0",toValue:"20",isFromValueError:!1,isToValueError:!1,restrictionsChecked:[]},D=function(e,t){if(!t)return!0;var a=parseInt(t,10);return a<g.a||a>g.b||t>=e.toValue},V=function(e,t){if(!t)return!0;var a=parseInt(t,10);return a<g.a||a>g.b||a<=e.fromValue},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.k:return Object(o.a)({},e,{problemNumber:t.payload});case i.m:return Object(o.a)({},e,{problemDirection:t.payload});case i.a:return Object(o.a)({},e,{fromValue:t.payload,isFromValueError:D(e,t.payload)});case i.B:return Object(o.a)({},e,{toValue:t.payload,isToValueError:V(e,t.payload)});case i.x:return function(e,t,a){var r=Object(o.a)({},e);return a?(r.restrictionsChecked=r.restrictionsChecked.slice(),r.restrictionsChecked.push(t)):r.restrictionsChecked=r.restrictionsChecked.filter(function(e){return t!==e}),r}(e,t.payload.checkboxName,t.payload.value);default:return e}},k={problemNumber:"20",problemDirection:f.a,fromValue:"0",toValue:"20",isFromValueError:!1,isToValueError:!1,restrictionsChecked:[]},T=function(e,t){if(!t)return!0;var a=parseInt(t,10);return a<g.a||a>g.b||t>=e.toValue},_=function(e,t){if(!t)return!0;var a=parseInt(t,10);return a<g.a||a>g.b||a<=e.fromValue},O=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.l:return Object(o.a)({},e,{problemNumber:t.payload});case i.b:return Object(o.a)({},e,{fromValue:t.payload,isFromValueError:T(e,t.payload)});case i.C:return Object(o.a)({},e,{toValue:t.payload,isToValueError:_(e,t.payload)});case i.y:return function(e,t,a){var r=Object(o.a)({},e);return a?(r.restrictionsChecked=r.restrictionsChecked.slice(),r.restrictionsChecked.push(t)):r.restrictionsChecked=r.restrictionsChecked.filter(function(e){return t!==e}),r}(e,t.payload.checkboxName,t.payload.value);default:return e}},P={problemNumber:"20",problemDirection:f.b,fromValue:"0",toValue:"20",isFromValueError:!1,isToValueError:!1,restrictionsChecked:[]},I=function(e,t){if(!t)return!0;var a=parseInt(t,10);return a<g.a||a>g.b||t>=e.toValue},M=function(e,t){if(!t)return!0;var a=parseInt(t,10);return a<g.a||a>g.b||a<=e.fromValue},A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.v:return Object(o.a)({},e,{problemNumber:t.payload});case i.o:return Object(o.a)({},e,{problemDirection:t.payload});case i.c:return Object(o.a)({},e,{fromValue:t.payload,isFromValueError:I(e,t.payload)});case i.D:return Object(o.a)({},e,{toValue:t.payload,isToValueError:M(e,t.payload)});case i.z:return function(e,t,a){var r=Object(o.a)({},e);return a?(r.restrictionsChecked=r.restrictionsChecked.slice(),r.restrictionsChecked.push(t)):r.restrictionsChecked=r.restrictionsChecked.filter(function(e){return t!==e}),r}(e,t.payload.checkboxName,t.payload.value);default:return e}},w={problemNumber:"20",problemDirection:f.a,fromValue:"0",toValue:"20",isFromValueError:!1,isToValueError:!1,restrictionsChecked:[]},F=function(e,t){if(!t)return!0;var a=parseInt(t,10);return a<g.a||a>g.b||t>=e.toValue},j=function(e,t){if(!t)return!0;var a=parseInt(t,10);return a<g.a||a>g.b||a<=e.fromValue},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:w,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case i.w:return Object(o.a)({},e,{problemNumber:t.payload});case i.d:return Object(o.a)({},e,{fromValue:t.payload,isFromValueError:F(e,t.payload)});case i.E:return Object(o.a)({},e,{toValue:t.payload,isToValueError:j(e,t.payload)});case i.A:return function(e,t,a){var r=Object(o.a)({},e);return a?(r.restrictionsChecked=r.restrictionsChecked.slice(),r.restrictionsChecked.push(t)):r.restrictionsChecked=r.restrictionsChecked.filter(function(e){return t!==e}),r}(e,t.payload.checkboxName,t.payload.value);default:return e}},R=Object(r.c)({greaterThanLessThanData:c,addThreeNumbersData:m,addMinusThreeNumbersData:d,addThreeNumbersMNData:p,multiplicationData:E,multiplicationMNData:N,additionData:C,additionMNData:O,subtractionData:A,subtractionMNData:x});t.default=function(e){return Object(r.d)(R,e,Object(r.a)(n.a))}},8:function(e,t,a){"use strict";a.d(t,"a",function(){return r}),a.d(t,"b",function(){return n});var r=0,n=1e3}},[[129,1,2]]]);
//# sourceMappingURL=main.285ac6de.chunk.js.map