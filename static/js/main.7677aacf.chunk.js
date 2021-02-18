(this.webpackJsonpacc=this.webpackJsonpacc||[]).push([[0],{48:function(e,t,c){},49:function(e,t,c){},78:function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),i=c(37),j=c.n(i),r=(c(48),c(49),c(50),c(14)),o=c(6),a=c(8),l=c(43),b=c(84),h=function(e,t){switch(t.type){case"ADD_VEHICLE":return[].concat(Object(l.a)(e),[{id:Object(b.a)(),service:t.vehicle.service,timeStarted:t.vehicle.timeStarted,timeFinished:t.vehicle.timeFinished,totalTime:t.vehicle.totalTime}]);case"REMOVE_VEHICLE":return e.filter((function(e){return e.id!==t.id}));default:return e}},d=c(0),O=Object(n.createContext)(),x=function(e){var t=Object(n.useReducer)(h,[],(function(){var e=localStorage.getItem("vehicles");return e?JSON.parse(e):[]})),c=Object(a.a)(t,2),s=c[0],i=c[1];return Object(n.useEffect)((function(){localStorage.setItem("vehicles",JSON.stringify(s))}),[s]),Object(d.jsx)(O.Provider,{value:{vehicles:s,dispatch:i},children:e.children})},p=c(80),u=c(85),m=function(){return Object(d.jsx)("div",{className:"home-container",children:Object(d.jsxs)(p.a,{vertical:!0,children:[Object(d.jsx)(r.b,{to:"/oilchange",children:Object(d.jsx)(u.a,{className:"home-buttons",children:"New Oil Change"})}),Object(d.jsx)(r.b,{to:"/tires",children:Object(d.jsx)(u.a,{className:"home-buttons",children:"New Tires"})}),Object(d.jsx)(r.b,{to:"/battery",children:Object(d.jsx)(u.a,{className:"home-buttons",children:"New Battery"})}),Object(d.jsx)(r.b,{to:"/vehiclelist",children:Object(d.jsx)(u.a,{className:"home-buttons",children:"Vehicle List"})}),Object(d.jsx)(r.b,{to:"/VINDecoder",children:Object(d.jsx)(u.a,{className:"home-buttons",children:"VIN Decoder"})})]})})},v=c(9),f=c.n(v),C=c(83),y=c(40),S=function(){var e=Object(o.e)(),t=Object(n.useContext)(O).dispatch,c=Object(n.useState)("Oil Change"),s=Object(a.a)(c,1)[0],i=Object(n.useState)(Date()),j=Object(a.a)(i,2),r=j[0],l=j[1];Object(n.useEffect)((function(){l(Date())}),[]);return Object(d.jsx)("div",{className:"service-container",children:Object(d.jsxs)(C.a,{children:[Object(d.jsx)(C.a.Row,{children:Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",type:"number",placeholder:"Mileage"})})}),Object(d.jsxs)(C.a.Row,{children:[Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",type:"number",placeholder:"Front PSI"})}),Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",type:"number",placeholder:"Rear PSI"})})]}),Object(d.jsx)(C.a.Row,{children:Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsxs)(C.a.Control,{size:"sm",as:"select",children:[Object(d.jsx)("option",{children:"Pre-service"}),Object(d.jsx)("option",{children:"NO OIL"}),Object(d.jsx)("option",{children:"1 QT LOW"}),Object(d.jsx)("option",{children:"1/2 QT LOW"}),Object(d.jsx)("option",{children:"FULL"}),Object(d.jsx)("option",{children:"OVER"})]})})}),Object(d.jsxs)(C.a.Row,{children:[Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsxs)(C.a.Control,{size:"sm",as:"select",children:[Object(d.jsx)("option",{children:"Year"}),Object(d.jsx)("option",{children:"2021"}),Object(d.jsx)("option",{children:"2020"}),Object(d.jsx)("option",{children:"2019"}),Object(d.jsx)("option",{children:"2018"}),Object(d.jsx)("option",{children:"2017"}),Object(d.jsx)("option",{children:"2016"}),Object(d.jsx)("option",{children:"2015"}),Object(d.jsx)("option",{children:"2014"}),Object(d.jsx)("option",{children:"2013"}),Object(d.jsx)("option",{children:"2012"}),Object(d.jsx)("option",{children:"2011"}),Object(d.jsx)("option",{children:"2010"}),Object(d.jsx)("option",{children:"2009"}),Object(d.jsx)("option",{children:"2008"}),Object(d.jsx)("option",{children:"2007"}),Object(d.jsx)("option",{children:"2006"}),Object(d.jsx)("option",{children:"2005"}),Object(d.jsx)("option",{children:"2004"}),Object(d.jsx)("option",{children:"2003"}),Object(d.jsx)("option",{children:"2002"}),Object(d.jsx)("option",{children:"2001"}),Object(d.jsx)("option",{children:"2000"}),Object(d.jsx)("option",{children:"1999"}),Object(d.jsx)("option",{children:"1998"}),Object(d.jsx)("option",{children:"1997"}),Object(d.jsx)("option",{children:"1996"}),Object(d.jsx)("option",{children:"1995"}),Object(d.jsx)("option",{children:"1994"}),Object(d.jsx)("option",{children:"1993"}),Object(d.jsx)("option",{children:"1992"}),Object(d.jsx)("option",{children:"1991"}),Object(d.jsx)("option",{children:"1990"}),Object(d.jsx)("option",{children:"1989"}),Object(d.jsx)("option",{children:"1988"}),Object(d.jsx)("option",{children:"1987"}),Object(d.jsx)("option",{children:"1986"}),Object(d.jsx)("option",{children:"1985"})]})}),Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",type:"number",placeholder:"Engine Size"})})]}),Object(d.jsxs)(C.a.Row,{children:[Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsxs)(C.a.Control,{size:"sm",as:"select",children:[Object(d.jsx)("option",{children:"Oil Viscosity"}),Object(d.jsx)("option",{children:"0W-20"}),Object(d.jsx)("option",{children:"5W-20"}),Object(d.jsx)("option",{children:"5W-30"}),Object(d.jsx)("option",{children:"10W-30"}),Object(d.jsx)("option",{children:"15W-40"})]})}),Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",type:"number",placeholder:"Oil Capacity"})})]}),Object(d.jsx)(C.a.Row,{children:Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",as:"textarea",placeholder:"Comments",style:{textTransform:"uppercase"},rows:8})})}),Object(d.jsx)(u.a,{size:"sm",variant:"primary",type:"submit",onClick:function(c){c.preventDefault();var n=Date(),i=f.a.utc(f()(n).diff(f()(r))).format("HH:mm:ss");t({type:"ADD_VEHICLE",vehicle:{service:s,timeStarted:r,timeFinished:n,totalTime:i}}),e.push("/")},children:"Submit"})]})})},z=function(){var e=Object(o.e)(),t=Object(n.useContext)(O).dispatch,c=Object(n.useState)("Tires"),s=Object(a.a)(c,1)[0],i=Object(n.useState)(Date()),j=Object(a.a)(i,2),r=j[0],l=j[1];Object(n.useEffect)((function(){l(Date())}),[]);return Object(d.jsx)("div",{className:"service-container",children:Object(d.jsxs)(C.a,{children:[Object(d.jsx)(C.a.Row,{children:Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",type:"number",placeholder:"Mileage"})})}),Object(d.jsxs)(C.a.Row,{children:[Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",type:"number",placeholder:"Front PSI"})}),Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",type:"number",placeholder:"Rear PSI"})})]}),Object(d.jsx)(C.a.Row,{children:Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",type:"number",placeholder:"Tire Size"})})}),Object(d.jsx)(C.a.Row,{children:Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",as:"textarea",placeholder:"DOT",style:{textTransform:"uppercase"},rows:4})})}),Object(d.jsx)(C.a.Row,{children:Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",as:"textarea",placeholder:"Comments",style:{textTransform:"uppercase"},rows:8})})}),Object(d.jsx)(u.a,{size:"sm",variant:"primary",type:"submit",onClick:function(c){c.preventDefault();var n=Date(),i=f.a.utc(f()(n).diff(f()(r))).format("HH:mm:ss");t({type:"ADD_VEHICLE",vehicle:{service:s,timeStarted:r,timeFinished:n,totalTime:i}}),e.push("/")},children:"Submit"})]})})},g=function(){var e=Object(o.e)(),t=Object(n.useContext)(O).dispatch,c=Object(n.useState)("Battery"),s=Object(a.a)(c,1)[0],i=Object(n.useState)(Date()),j=Object(a.a)(i,2),r=j[0],l=j[1];Object(n.useEffect)((function(){l(Date())}),[]);return Object(d.jsx)("div",{className:"service-container",children:Object(d.jsxs)(C.a,{children:[Object(d.jsx)(C.a.Row,{children:Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",type:"number",placeholder:"Mileage"})})}),Object(d.jsxs)(C.a.Row,{children:[Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",type:"number",placeholder:"Front PSI"})}),Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",type:"number",placeholder:"Rear PSI"})})]}),Object(d.jsxs)(C.a.Row,{children:[Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsxs)(C.a.Control,{size:"sm",as:"select",children:[Object(d.jsx)("option",{children:"Year"}),Object(d.jsx)("option",{children:"2021"}),Object(d.jsx)("option",{children:"2020"}),Object(d.jsx)("option",{children:"2019"}),Object(d.jsx)("option",{children:"2018"}),Object(d.jsx)("option",{children:"2017"}),Object(d.jsx)("option",{children:"2016"}),Object(d.jsx)("option",{children:"2015"}),Object(d.jsx)("option",{children:"2014"}),Object(d.jsx)("option",{children:"2013"}),Object(d.jsx)("option",{children:"2012"}),Object(d.jsx)("option",{children:"2011"}),Object(d.jsx)("option",{children:"2010"}),Object(d.jsx)("option",{children:"2009"}),Object(d.jsx)("option",{children:"2008"}),Object(d.jsx)("option",{children:"2007"}),Object(d.jsx)("option",{children:"2006"}),Object(d.jsx)("option",{children:"2005"}),Object(d.jsx)("option",{children:"2004"}),Object(d.jsx)("option",{children:"2003"}),Object(d.jsx)("option",{children:"2002"}),Object(d.jsx)("option",{children:"2001"}),Object(d.jsx)("option",{children:"2000"}),Object(d.jsx)("option",{children:"1999"}),Object(d.jsx)("option",{children:"1998"}),Object(d.jsx)("option",{children:"1997"}),Object(d.jsx)("option",{children:"1996"}),Object(d.jsx)("option",{children:"1995"}),Object(d.jsx)("option",{children:"1994"}),Object(d.jsx)("option",{children:"1993"}),Object(d.jsx)("option",{children:"1992"}),Object(d.jsx)("option",{children:"1991"}),Object(d.jsx)("option",{children:"1990"}),Object(d.jsx)("option",{children:"1989"}),Object(d.jsx)("option",{children:"1988"}),Object(d.jsx)("option",{children:"1987"}),Object(d.jsx)("option",{children:"1986"}),Object(d.jsx)("option",{children:"1985"})]})}),Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",type:"number",placeholder:"Engine Size"})})]}),Object(d.jsx)(C.a.Row,{children:Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",type:"number",placeholder:"UPC"})})}),Object(d.jsx)(C.a.Row,{children:Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",type:"text",placeholder:"Serial Number",style:{textTransform:"uppercase"}})})}),Object(d.jsx)(C.a.Row,{children:Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsx)(C.a.Control,{size:"sm",as:"textarea",placeholder:"Comments",style:{textTransform:"uppercase"},rows:8})})}),Object(d.jsx)(u.a,{size:"sm",variant:"primary",type:"submit",onClick:function(c){c.preventDefault();var n=Date(),i=f.a.utc(f()(n).diff(f()(r))).format("HH:mm:ss");t({type:"ADD_VEHICLE",vehicle:{service:s,timeStarted:r,timeFinished:n,totalTime:i}}),e.push("/")},children:"Submit"})]})})},w=c(81),R=function(e){var t=e.vehicle,c=Object(n.useContext)(O).dispatch;return Object(d.jsx)("div",{className:"services-table",children:Object(d.jsxs)(w.a,{size:"sm",striped:!0,bordered:!0,children:[Object(d.jsx)("thead",{}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Service"}),Object(d.jsx)("td",{children:t.service})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Time Started"}),Object(d.jsx)("td",{children:f()(t.timeStarted).format("h:mm:ss A")})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Time Finished"}),Object(d.jsx)("td",{children:f()(t.timeFinished).format("h:mm:ss A")})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Total Time"}),Object(d.jsx)("td",{children:t.totalTime})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Actions"}),Object(d.jsx)("td",{children:Object(d.jsx)(u.a,{variant:"danger",size:"sm",onClick:function(){return c({type:"REMOVE_VEHICLE",id:t.id})},children:"Delete"})})]})]})]})})},D=function(){var e=Object(n.useContext)(O).vehicles;return e.length?Object(d.jsx)("div",{children:Object(d.jsx)("ul",{children:e.map((function(e){return Object(d.jsx)(R,{vehicle:e},e.id)}))})}):Object(d.jsx)("div",{className:"empty",children:"No vehicles"})},E=c(26),N=c.n(E),T=c(41),G=c(42),I=c.n(G),V=c(82),F=c(39),L=function(){var e=Object(n.useState)(""),t=Object(a.a)(e,2),c=t[0],s=t[1],i=Object(n.useState)([]),j=Object(a.a)(i,2),r=j[0],o=j[1],l=Object(n.useState)(!1),b=Object(a.a)(l,2),h=b[0],O=b[1],x=function(){var e=Object(T.a)(N.a.mark((function e(){var t;return N.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,I.a.get("https://vpic.nhtsa.dot.gov/api//vehicles/DecodeVin/".concat(c,"?format=json"));case 3:t=e.sent,o(t.data),O(!0),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}(),p=function(e){e.preventDefault(),x(),s(""),console.log(c)};return Object(d.jsxs)("div",{className:"service-container",children:[Object(d.jsx)(C.a,{children:Object(d.jsx)(C.a.Row,{children:Object(d.jsx)(C.a.Group,{as:y.a,children:Object(d.jsxs)(V.a,{children:[Object(d.jsx)(F.a,{size:"sm",placeholder:"VIN Number",value:c,style:{textTransform:"uppercase"},onChange:function(e){return s(e.target.value)},required:!0}),Object(d.jsx)(V.a.Append,{children:Object(d.jsx)(u.a,{size:"sm",onClick:p,children:"Submit"})})]})})})}),h&&Object(d.jsxs)(w.a,{size:"sm",bordered:!0,striped:!0,children:[Object(d.jsx)("thead",{children:Object(d.jsx)("tr",{children:Object(d.jsx)("th",{colSpan:"2",style:{textAlign:"center",textTransform:"uppercase"},children:r.SearchCriteria})})}),Object(d.jsxs)("tbody",{children:[Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Year"}),Object(d.jsx)("td",{children:r.Results[9].Value})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Make"}),Object(d.jsx)("td",{children:r.Results[6].Value})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Model"}),Object(d.jsx)("td",{children:r.Results[8].Value})]}),Object(d.jsxs)("tr",{children:[Object(d.jsx)("th",{children:"Engine Size"}),Object(d.jsx)("td",{children:r.Results[73].Value})]})]})]})]})},H=function(){return Object(d.jsx)(x,{children:Object(d.jsxs)(r.a,{children:[Object(d.jsx)(o.a,{path:"/acc-gh-pages",component:m}),Object(d.jsx)(o.a,{path:"/oilchange",component:S}),Object(d.jsx)(o.a,{path:"/tires",component:z}),Object(d.jsx)(o.a,{path:"/battery",component:g}),Object(d.jsx)(o.a,{path:"/vehiclelist",component:D}),Object(d.jsx)(o.a,{path:"/VINDecoder",component:L})]})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,86)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,j=t.getTTFB;c(e),n(e),s(e),i(e),j(e)}))};j.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(H,{})}),document.getElementById("root")),P()}},[[78,1,2]]]);
//# sourceMappingURL=main.7677aacf.chunk.js.map