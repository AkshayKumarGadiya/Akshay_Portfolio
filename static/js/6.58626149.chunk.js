(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[6,9,10],{88:function(e,a,t){"use strict";t.r(a);t(0),t(89);var s=t(1);a.default=function(e){var a=e.title;return Object(s.jsx)("div",{className:"header",children:a})}},90:function(e,a,t){"use strict";t.r(a);var s=t(8),l=t(0),r=t.n(l),c=t(1);a.default=function(){var e=r.a.useState("Send"),a=Object(s.a)(e,2),t=a[0],l=a[1];return Object(c.jsx)("div",{className:"mt-12",children:Object(c.jsxs)("form",{onSubmit:function(e){e.preventDefault(),l("Submitting...");var a=e.target.elements,t=a.name,s=a.emails,r=a.message,c=t.value;s.value,r.value;alert("Thank you for contacting me."+c),l("Thank You")},children:[Object(c.jsxs)("div",{className:"mb-3",children:[Object(c.jsx)("label",{htmlFor:"name",className:"form-label",children:"Name"}),Object(c.jsx)("input",{name:"name",type:"text",className:"form-control",placeholder:"Enter your name",required:!0})]}),Object(c.jsxs)("div",{className:"mb-3",children:[Object(c.jsx)("label",{className:"form-label",htmlFor:"emails",children:"Email"}),Object(c.jsx)("input",{className:"form-control",type:"email",id:"emails",placeholder:"Enter your email address",required:!0})]}),Object(c.jsxs)("div",{className:"mb-3",children:[Object(c.jsx)("label",{className:"form-label",htmlFor:"message",children:"Message"}),Object(c.jsx)("textarea",{className:"form-control",id:"message",placeholder:"Message",required:!0})]}),Object(c.jsx)("button",{className:"btn btn-danger",type:"submit",children:t})]})})}},93:function(e,a,t){"use strict";t.r(a);t(0);var s=t(88),l=t(90),r=t(1);a.default=function(e){var a=e.header;return Object(r.jsxs)(r.Fragment,{children:[Object(r.jsx)(s.default,{title:a}),Object(r.jsx)(l.default,{})]})}}}]);
//# sourceMappingURL=6.58626149.chunk.js.map