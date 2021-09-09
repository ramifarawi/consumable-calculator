(this["webpackJsonpconsumable-calculator"]=this["webpackJsonpconsumable-calculator"]||[]).push([[0],{16:function(e,t,l){},17:function(e,t,l){},19:function(e,t,l){"use strict";l.r(t);var i=l(1),r=l.n(i),n=l(8),c=l.n(n),u=(l(16),l(6)),a=l(4),d=l(3),o=l(11),s=(l(17),l(9)),j=l(0),m=function(e){var t=e.contact,l=e.handleEditClick,i=e.handleDeleteClick;return Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:t.liquid_name}),Object(j.jsx)("td",{children:t.vol_per_multiplier}),Object(j.jsx)("td",{children:t.multiplier}),Object(j.jsx)("td",{children:t.single_or_multi}),Object(j.jsxs)("td",{children:[Object(j.jsx)("button",{type:"button",onClick:function(e){return l(e,t)},children:"Edit"}),Object(j.jsx)("button",{type:"button",onClick:function(){return i(t.id)},children:"Delete"})]})]})},b=function(e){var t=e.editFormData,l=e.handleEditFormChange,i=e.handleCancelClick;return console.log("in editable row"),Object(j.jsxs)("tr",{children:[Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",required:"required",placeholder:"Liquid name",name:"liquid_name",value:t.liquid_name,onChange:l})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"number",required:"required",placeholder:"Vol Per Multiplier",name:"vol_per_multiplier",value:t.vol_per_multiplier,onChange:l})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",required:"required",placeholder:"Multiplier",name:"multiplier",value:t.multiplier,onChange:l})}),Object(j.jsx)("td",{children:Object(j.jsx)("input",{type:"text",required:"required",placeholder:"`Single` or `Multi`",name:"single_or_multi",value:t.single_or_multi,onChange:l})}),Object(j.jsxs)("td",{children:[Object(j.jsx)("button",{type:"submit",children:"Save"}),Object(j.jsx)("button",{type:"button",onClick:i,children:"Cancel"})]})]})};l(10);var p=function(e){var t=e.vol_per_multiplier*e.multiplier/1e3,l=(e.single_or_multi,(t>.5?t:1e3*t)+(t>.5?"mL":"ul")),i="(",r=")";if("Multi"==e.single_or_multi){if(t>4&&t<185){var n=Math.ceil(t/14);return t>50?[" Nest 12 Well Reservoir ("+n+" wells"+"), or Nest 1 Well Reservior ",l]:[" Nest 12 Well Reservoir ("+n+" wells"+r,l]}if(t>=50)return[Math.ceil(t/185)+" Nest 1 Well Reservoirs",l];if(t<=4)return["Well plate",l]}if("Single"==e.single_or_multi){var c=" Nest 12 Well Reservoir("+Math.ceil(t/14)+" wells"+r,u=", Falcon 50mL tubes ("+Math.ceil(t/45)+" tubes "+r,a=", or 15mL tubes ("+Math.ceil(t/13)+" tubes"+r;return t>10&&t<185?t>50?[c+", Nest 1 Well Reservior"+u+a,l]:[c+u+a,l]:t<=10?[i+Math.ceil(t/1.2)+r+" 1.5mL tubes"+(", or ("+Math.ceil(t/1.7)+") 2mL tubes"),l]:[i+Math.ceil(t/185)+r+" Nest 1 Well Reservior(s)",l]}},h=function(){var e=Object(i.useState)(s),t=Object(d.a)(e,2),l=t[0],n=t[1],c=Object(i.useState)({liquid_name:"",vol_per_multiplier:"",multiplier:"",single_or_multi:""}),h=Object(d.a)(c,2),_=h[0],O=h[1],x=Object(i.useState)({liquid_name:"",vol_per_multiplier:"",multiplier:"",single_or_multi:""}),v=Object(d.a)(x,2),g=v[0],f=v[1],q=Object(i.useState)(null),C=Object(d.a)(q,2),M=C[0],y=C[1],S={};l.forEach((function(e){Object(a.a)(Object(a.a)({},e),{},{vol_per_multiplier:Number(e.vol_per_multiplier),multiplier:Number(e.multiplier)});S[e.liquid_name]=p(e)})),console.log(S);var N=function(e){e.preventDefault();var t=e.target.getAttribute("name"),l=e.target.value,i=Object(a.a)({},_);i[t]=l,O(i)},k=function(e){e.preventDefault();var t=e.target.getAttribute("name"),l=e.target.value,i=Object(a.a)({},g);i[t]=l,f(i)},D=function(e,t){e.preventDefault(),y(t.id);var l={liquid_name:t.liquid_name,vol_per_multiplier:t.vol_per_multiplier,multiplier:t.multiplier,single_or_multi:t.single_or_multi};f(l)},L=function(){y(null)},W=function(e){var t=Object(u.a)(l),i=l.findIndex((function(t){return t.id===e}));t.splice(i,1),n(t)};return Object(j.jsxs)("div",{className:"app-container",children:[Object(j.jsx)("form",{onSubmit:function(e){e.preventDefault();var t={id:M,liquid_name:g.liquid_name,vol_per_multiplier:g.vol_per_multiplier,multiplier:g.multiplier,single_or_multi:g.single_or_multi},i=Object(u.a)(l);i[l.findIndex((function(e){return e.id===M}))]=t,n(i),y(null)},children:Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Liquid Name"}),Object(j.jsx)("th",{children:"Volume per Multiplier (ul)"}),Object(j.jsx)("th",{children:"Multiplier (# samples, # washes, etc.)"}),Object(j.jsx)("th",{children:"Single or Multi-Channel"})]})}),Object(j.jsx)("tbody",{children:l.map((function(e){return Object(j.jsx)(i.Fragment,{children:M===e.id?Object(j.jsx)(b,{editFormData:g,handleEditFormChange:k,handleCancelClick:L}):Object(j.jsx)(m,{contact:e,handleEditClick:D,handleDeleteClick:W})})}))})]})}),Object(j.jsx)("h2",{children:"Add a Liquid"}),Object(j.jsxs)("form",{onSubmit:function(e){e.preventDefault();var t={id:Object(o.a)(),liquid_name:_.liquid_name,vol_per_multiplier:_.vol_per_multiplier,multiplier:_.multiplier,single_or_multi:_.single_or_multi},i=[].concat(Object(u.a)(l),[t]);n(i)},children:[Object(j.jsx)("input",{type:"text",name:"liquid_name",required:"required",placeholder:"Liquid",onChange:N}),Object(j.jsx)("input",{type:"text",name:"vol_per_multiplier",required:"required",placeholder:"Vol Per Multiplier (ul)",onChange:N}),Object(j.jsx)("input",{type:"text",name:"multiplier",required:"required",placeholder:"Multiplier",onChange:N}),Object(j.jsx)("input",{type:"text",name:"single_or_multi",required:"required",placeholder:"`Single` or `Multi`",onChange:N}),Object(j.jsx)("button",{type:"submit",children:"Add"})]}),Object.entries(S).map((function(e){var t=e[0],l=e[1];return Object(j.jsx)("h3",{children:Object(j.jsx)("form",{children:Object(j.jsxs)("table",{children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:t}),Object(j.jsx)("th",{children:"Recommended Labware"}),Object(j.jsx)("th",{children:"Total Volume"})]})}),Object(j.jsx)("tbody",{children:Object(j.jsx)("tr",{children:Object(j.jsxs)(r.a.Fragment,{children:[Object(j.jsx)("td",{}),Object(j.jsx)("td",{children:l[0]}),Object(j.jsx)("td",{children:l[1]})]})})})]})})})})),";"]})};c.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(h,{})}),document.getElementById("root"))},9:function(e){e.exports=JSON.parse('[{"id":1,"liquid_name":"Ethanol","vol_per_multiplier":"5","multiplier":"96","single_or_multi":"Single"},{"id":2,"liquid_name":"Water (control)","vol_per_multiplier":"50","multiplier":"96","single_or_multi":"Multi"}]')}},[[19,1,2]]]);
//# sourceMappingURL=main.b8799c37.chunk.js.map