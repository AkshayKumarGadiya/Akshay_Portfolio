(this["webpackJsonpportfolio-app"]=this["webpackJsonpportfolio-app"]||[]).push([[12],{102:function(e,n,t){},141:function(e,n,t){var o={"./About":[92,0,3],"./About.jsx":[92,0,3],"./Contact":[93,6],"./Contact.jsx":[93,6],"./Education":[94,11,4],"./Education.jsx":[94,11,4],"./Experience":[95,0,1,5],"./Experience.jsx":[95,0,1,5],"./FallbackSpinner":[29],"./FallbackSpinner.jsx":[29],"./Header":[88,9],"./Header.jsx":[88,9],"./Home":[47],"./Home.jsx":[47],"./NavBar":[43],"./NavBar.jsx":[43],"./Projects":[96,0,2],"./Projects.jsx":[96,0,2],"./Skills":[97,0,7],"./Skills.jsx":[97,0,7],"./Social":[48],"./Social.jsx":[48],"./ThemeToggler":[44],"./ThemeToggler.jsx":[44],"./projects/ContactForm":[90,10],"./projects/ContactForm.jsx":[90,10],"./projects/ProjectCard":[91,0,8],"./projects/ProjectCard.jsx":[91,0,8]};function r(e){if(!t.o(o,e))return Promise.resolve().then((function(){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}));var n=o[e],r=n[0];return Promise.all(n.slice(1).map(t.e)).then((function(){return t(r)}))}r.keys=function(){return Object.keys(o)},r.id=141,e.exports=r},142:function(e,n,t){"use strict";t.r(n);var o=t(0),r=t.n(o),c=t(18),i=t.n(c),a=(t(102),t(89),t(103),t(32)),l=t(16),s=t(76),u=t(50),d=t(8),j=t(10),f=t(29),h=t(43),b=t(47),v=t(24),m=t(1),x=function(){return Object(m.jsx)("h5",{style:{textAlign:"center"},children:"Copyright \xa9 2023. All Rights Reserved."})};var g,p=function(){var e=Object(o.useState)(null),n=Object(d.a)(e,2),c=n[0],i=n[1];return Object(o.useEffect)((function(){fetch(v.a.routes,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return i(e)})).catch((function(e){return e}))}),[]),Object(m.jsxs)("div",{className:"MainApp",children:[Object(m.jsx)(h.default,{}),Object(m.jsxs)("main",{className:"main",children:[Object(m.jsx)(j.c,{children:Object(m.jsxs)(o.Suspense,{fallback:Object(m.jsx)(f.default,{}),children:[Object(m.jsx)(j.a,{exact:!0,path:"/",component:b.default}),c&&c.sections.map((function(e){var n=r.a.lazy((function(){return t(141)("./"+e.component)}));return Object(m.jsx)(j.a,{path:e.path,component:function(){return Object(m.jsx)(n,{header:e.headerTitle})}},e.headerTitle)}))]})}),Object(m.jsx)(x,{})]})]})},O=t(34),k=Object(l.c)(g||(g=Object(O.a)(["\n   body {\n     background: ",";\n     color: ",";\n     transition: all 0.50s linear; \n  }\n"])),(function(e){return e.theme.background}),(function(e){return e.theme.color})),C={background:"#fff",color:"#121212",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"white",cardForeColor:"black",titleColor:"white"},timelineLineColor:"#ccc",cardBackground:"#fff",cardFooterBackground:"#f7f7f7",cardBorderColor:"#00000020",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"light",bsSecondaryVariant:"dark",socialIconBgColor:"#121212"},y={background:"#121212",color:"#eee",accentColor:"#3D84C6",chronoTheme:{cardBgColor:"#1B1B1B",cardForeColor:"#eee",titleColor:"black"},timelineLineColor:"#444",cardBackground:"#060606",cardFooterBackground:"#181818",cardBorderColor:"#ffffff20",navbarTheme:{linkColor:"#dedede",linkHoverColor:"#fefefe",linkActiveColor:"#fefefe"},bsPrimaryVariant:"dark",bsSecondaryVariant:"light",socialIconBgColor:"#fefefe"};var S=function(){window.matchMedia=null;var e=Object(s.a)(!0);return Object(m.jsx)(u.a.Provider,{value:{darkMode:e},children:Object(m.jsxs)(l.b,{theme:e.value?y:C,children:[Object(m.jsx)(k,{}),Object(m.jsx)("div",{className:"App",children:Object(m.jsx)(a.a,{children:Object(m.jsx)(p,{})})})]})})},T=function(e){e&&e instanceof Function&&t.e(15).then(t.bind(null,170)).then((function(n){var t=n.getCLS,o=n.getFID,r=n.getFCP,c=n.getLCP,i=n.getTTFB;t(e),o(e),r(e),c(e),i(e)}))};i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(S,{})}),document.getElementById("root")),T()},24:function(e,n,t){"use strict";n.a={navbar:"profile/navbar.json",routes:"profile/routes.json",home:"profile/home.json",social:"profile/social.json",about:"profile/about.json",skills:"profile/skills.json",education:"profile/education.json",experiences:"profile/experiences.json",projects:"profile/projects.json"}},29:function(e,n,t){"use strict";t.r(n);t(0);var o=t(143),r=t(1),c={spinnerContainerStyle:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"}};n.default=function(){return Object(r.jsx)("div",{style:c.spinnerContainerStyle,children:Object(r.jsx)(o.a,{animation:"grow"})})}},43:function(e,n,t){"use strict";t.r(n);var o,r,c=t(8),i=t(34),a=t(36),l=t(86),s=t(87),u=t(0),d=t(10),j=t(32),f=t(16),h=t(24),b=t(44),v=t(1),m={logoStyle:{width:50,height:40}},x=f.d.a(o||(o=Object(i.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor})),g=Object(f.d)(j.b)(r||(r=Object(i.a)(["\n  color: ",";\n  &:hover {\n    color: ",";\n  }\n  &::after {\n    background-color: ",";\n  }\n  &.navbar__link--active {\n    color: ",";\n  }\n"])),(function(e){return e.theme.navbarTheme.linkColor}),(function(e){return e.theme.navbarTheme.linkHoverColor}),(function(e){return e.theme.accentColor}),(function(e){return e.theme.navbarTheme.linkActiveColor})),p=Object(d.f)((function(){var e,n,t,o,r,i,d=Object(u.useContext)(f.a),j=Object(u.useState)(null),p=Object(c.a)(j,2),O=p[0],k=p[1],C=Object(u.useState)(!1),y=Object(c.a)(C,2),S=y[0],T=y[1];return Object(u.useEffect)((function(){fetch(h.a.navbar,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return k(e)})).catch((function(e){return e}))}),[]),Object(v.jsx)(a.a,{fixed:"top",expand:"md",bg:"dark",variant:"dark",className:"navbar-custom",expanded:S,children:Object(v.jsxs)(l.a,{children:[(null===O||void 0===O?void 0:O.logo)&&Object(v.jsx)(a.a.Brand,{href:"/",children:Object(v.jsx)("img",{src:null===O||void 0===O||null===(e=O.logo)||void 0===e?void 0:e.source,className:"d-inline-block align-top",alt:"main logo",style:null!==O&&void 0!==O&&null!==(n=O.logo)&&void 0!==n&&n.height&&null!==O&&void 0!==O&&null!==(t=O.logo)&&void 0!==t&&t.width?{height:null===O||void 0===O||null===(o=O.logo)||void 0===o?void 0:o.height,width:null===O||void 0===O||null===(r=O.logo)||void 0===r?void 0:r.width}:m.logoStyle})}),Object(v.jsx)(a.a.Brand,{href:"/",children:"Akshaykumar Gadhiya"}),Object(v.jsx)(a.a.Toggle,{"aria-controls":"responsive-navbar-nav",onClick:function(){return T(!S)}}),Object(v.jsxs)(a.a.Collapse,{id:"responsive-navbar-nav",children:[Object(v.jsx)(s.a,{className:"me-auto"}),Object(v.jsx)(s.a,{children:O&&(null===(i=O.sections)||void 0===i?void 0:i.map((function(e,n){return"link"===(null===e||void 0===e?void 0:e.type)?Object(v.jsx)(x,{href:e.href,target:"_blank",rel:"noopener noreferrer",onClick:function(){return T(!1)},className:"navbar__link",theme:d,children:e.title},e.title):Object(v.jsx)(g,{onClick:function(){return T(!1)},exact:0===n,activeClassName:"navbar__link--active",className:"navbar__link",to:e.href,theme:d,children:e.title},e.title)})))}),Object(v.jsx)(b.default,{onClick:function(){return T(!1)}})]})]})})}));n.default=p},44:function(e,n,t){"use strict";t.r(n);t(0);var o=t(78),r=t.n(o),c=t(50),i=t(1);function a(e){var n=e.onClick;return Object(i.jsx)(i.Fragment,{children:Object(i.jsx)(c.a.Consumer,{children:function(e){return Object(i.jsx)("div",{style:{marginBottom:8},children:Object(i.jsx)(r.a,{onChange:function(){return e.darkMode.toggle(),void n()},checked:e.darkMode.value,size:50})})}})})}a.defaultProps={onClick:function(){}},n.default=a},47:function(e,n,t){"use strict";t.r(n);var o=t(8),r=t(0),c=t(83),i=t.n(c),a=t(63),l=t.n(a),s=t(16),u=t(86),d=t(144),j=t(24),f=t(48),h=t(29),b=t(1),v={nameStyle:{fontSize:"5em"},inlineChild:{display:"inline-block"},mainContainer:{height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},badgeStyle:{paddingLeft:10,paddingRight:10,paddingTop:5,paddingBottom:5,margin:5},cardStyle:{borderRadius:10},cardTitleStyle:{fontSize:24,fontWeight:700},cardTextStyle:{textAlign:"left"},linkStyle:{textDecoration:"none",padding:10},buttonStyle:{margin:5},textDescripton:{margin:10},showMoreStyle:{margin:20}};n.default=function(){var e=Object(r.useContext)(s.a),n=Object(r.useState)(null),t=Object(o.a)(n,2),c=t[0],a=t[1];return Object(r.useEffect)((function(){fetch(j.a.home,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return a(e)})).catch((function(e){return e}))}),[]),c?Object(b.jsx)(l.a,{children:Object(b.jsx)("div",{style:v.mainContainer,children:Object(b.jsxs)(u.a,{children:[Object(b.jsxs)("div",{style:{flexDirection:"row"},children:[Object(b.jsx)("h2",{children:null===c||void 0===c?void 0:c.discription}),Object(b.jsx)(i.a,{options:{loop:!0,autoStart:!0,strings:null===c||void 0===c?void 0:c.roles}})]}),Object(b.jsx)(d.a,{style:v.showMoreStyle,variant:e.bsSecondaryVariant,onClick:function(e){e.preventDefault(),window.location.href="/"},children:"Download Resume"}),Object(b.jsx)(f.default,{})]})})}):Object(b.jsx)(h.default,{})}},48:function(e,n,t){"use strict";t.r(n);var o=t(8),r=t(0),c=t(84),i=t(16),a=t(24),l=t(1),s={iconStyle:{marginLeft:10,marginRight:10,marginBottom:10}};n.default=function(){var e=Object(r.useContext)(i.a),n=Object(r.useState)(null),t=Object(o.a)(n,2),u=t[0],d=t[1];return Object(r.useEffect)((function(){fetch(a.a.social,{method:"GET"}).then((function(e){return e.json()})).then((function(e){return d(e)})).catch((function(e){return e}))}),[]),Object(l.jsx)("div",{className:"social",children:u?u.social.map((function(n){return Object(l.jsx)(c.SocialIcon,{style:s.iconStyle,url:n.href,network:n.network,bgColor:e.socialIconBgColor,target:"_blank",rel:"noopener"},n.network)})):null})}},50:function(e,n,t){"use strict";var o=t(0),r=t.n(o).a.createContext();n.a=r},89:function(e,n,t){}},[[142,13,14]]]);
//# sourceMappingURL=main.1e1d0dcf.chunk.js.map