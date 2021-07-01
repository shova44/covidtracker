(this.webpackJsonpcovidt=this.webpackJsonpcovidt||[]).push([[0],{202:function(t,e,a){"use strict";a.r(e);var o=a(0),n=a(68),c=a.n(n),r=a(4),s=(a(76),a(71)),i=a(1),l=function(t){return Object(i.jsx)("div",{style:{width:"600px",height:"600px",margin:"50px auto"},children:Object(i.jsx)(s.a,{data:{labels:t.label.map((function(t){return t.substr(0,10)})),datasets:[{label:"Corona Virus Across Country",fill:!0,lineTension:.1,backgroundColor:"rgba(75,192,192,0.4)",borderColor:"rgba(75,192,192,1)",borderCapStyle:"butt",borderDash:[],borderDashOffset:0,borderJoinSyle:"miter",pointBorderColor:"rgba(75,192,192,1)",pointBackgroundColor:"#fff",pointBorderWidth:1,pointHoverRadius:5,pointHoverBackgroundColor:"rgba(75,192,192,1)",pointHoverBorderColor:"rgba(220,220,220,2)",poiintHoverBorderWidth:2,pointRadius:1,pointHitRadius:10,data:t.yAxis}]}})})},d=function(t){return Object(i.jsx)("div",{className:"card",children:t.children})},j=a(23),u=function(t){var e=t.totalConfirmed,a=t.totalRecovered,o=t.totalDeaths,n=t.country;return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{children:[Object(i.jsx)("h1",{style:{textTransform:"capitalize"},children:""===n?"World wide Corona Update":n}),Object(i.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[Object(i.jsxs)(d,{children:[Object(i.jsx)("span",{style:{color:"tomato",fontWeight:"bold"},children:"Total Confirmed "}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{children:Object(i.jsx)(j.a,{value:e,displayType:"text",thousandSeparator:!0})})]}),Object(i.jsxs)(d,{children:[Object(i.jsx)("span",{style:{color:"green",fontWeight:"bold"},children:"Total Recovered"}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{children:Object(i.jsx)(j.a,{value:a,displayType:"text",thousandSeparator:!0})})]}),Object(i.jsxs)(d,{children:[Object(i.jsx)("span",{style:{color:"darkred",fontWeight:"bold"},children:"Total Deaths"}),Object(i.jsx)("br",{}),Object(i.jsx)("span",{children:Object(i.jsx)(j.a,{value:o,displayType:"text",thousandSeparator:!0})})]})]})]})})},b=a(39),h=a.n(b);var p=function(){var t=Object(o.useState)(0),e=Object(r.a)(t,2),a=e[0],n=e[1],c=Object(o.useState)(0),s=Object(r.a)(c,2),d=s[0],j=s[1],b=Object(o.useState)(0),p=Object(r.a)(b,2),O=p[0],x=p[1],f=Object(o.useState)(!1),v=Object(r.a)(f,2),g=v[0],y=v[1],m=Object(o.useState)({}),C=Object(r.a)(m,2),D=C[0],S=C[1],T=Object(o.useState)(7),R=Object(r.a)(T,2),w=R[0],B=R[1],k=Object(o.useState)(""),W=Object(r.a)(k,2),H=W[0],A=W[1],G=Object(o.useState)([]),J=Object(r.a)(G,2),L=J[0],E=J[1],F=Object(o.useState)([]),N=Object(r.a)(F,2),Z=N[0],z=N[1];Object(o.useEffect)((function(){y(!0),h.a.get("https://api.covid19api.com/summary").then((function(t){y(!1),200===t.status&&(n(t.data.Global.TotalConfirmed),j(t.data.Global.TotalRecovered),x(t.data.Global.TotalDeaths),S(t.data)),console.log(t)})).catch((function(t){console.log(t)}))}),[]);var I=function(t){var e=new Date(t),a=e.getFullYear(),o="0".concat(e.getMonth()+1).slice(-2),n=e.getDate();return"".concat(a,"-").concat(o,"-").concat(n)},M=function(t,e,a){h.a.get("https://api.covid19api.com/country/".concat(t,"/status/confirmed?from=").concat(e,"T00:00:00Z&to=").concat(a,"T00:00:00Z")).then((function(e){console.log(e);var a=e.data.map((function(t){return t.Cases})),o=e.data.map((function(t){return t.Date})),c=D.Countries.find((function(e){return e.Slug===t}));n(c.TotalConfirmed),j(c.TotalRecovered),x(c.TotalDeaths),E(a),z(o)})).catch((function(t){console.log(t)}))};return g?Object(i.jsx)("p",{children:"Fetching data from api..............."}):Object(i.jsxs)("div",{className:"App",children:[Object(i.jsx)(u,{totalConfirmed:a,totalRecovered:d,totalDeaths:O,country:H}),Object(i.jsxs)("div",{children:[Object(i.jsxs)("select",{value:H,onChange:function(t){A(t.target.value);var e=new Date,a=I(e),o=I(e.setDate(e.getDate()-w));M(t.target.value,o,a)},children:[Object(i.jsx)("option",{value:"",children:"Select Coounty"}),D.Countries&&D.Countries.map((function(t){return Object(i.jsx)("option",{value:t.Slug,children:t.Country},t.Slug)}))]}),Object(i.jsxs)("select",{value:w,onChange:function(t){B(t.target.value);var e=new Date,a=I(e),o=I(e.setDate(e.getDate()-t.target.value));M(H,o,a)},children:[Object(i.jsx)("option",{value:"7 ",children:"Last 7 Days Data"}),Object(i.jsx)("option",{value:"30",children:"Last 30 Days Data"}),Object(i.jsx)("option",{value:"90",children:"Last 90 Days Data"})]})]}),Object(i.jsx)(l,{yAxis:L,label:Z})]})};c.a.render(Object(i.jsx)(p,{}),document.getElementById("root"))},76:function(t,e,a){}},[[202,1,2]]]);
//# sourceMappingURL=main.073244cf.chunk.js.map