(this["webpackJsonpproj2-1"]=this["webpackJsonpproj2-1"]||[]).push([[0],{61:function(e,t,c){},73:function(e,t,c){"use strict";c.r(t);var r=c(0),n=c.n(r),a=c(33),s=c.n(a),i=(c(61),c(62),c(10)),j=c(18),o=c.n(j),l=c(24),d=c(88),b=c(87),u=c(83),h=c(77),O=c(51),x=(c(74),c(65),O.a.initializeApp({apiKey:"AIzaSyAfivuyI6D39Sx_G-ymLRyRKseAtIhW5tA",authDomain:"footstrap-c2385.firebaseapp.com",projectId:"footstrap-c2385",storageBucket:"footstrap-c2385.appspot.com",messagingSenderId:"434444199259",appId:"1:434444199259:web:55706f3598bad2950c667e"})),p=x.auth(),f=x,m=c(2),v=n.a.createContext();function g(){return Object(r.useContext)(v)}function w(e){var t=e.children,c=Object(r.useState)(),n=Object(i.a)(c,2),a=n[0],s=n[1],j=Object(r.useState)(!0),o=Object(i.a)(j,2),l=o[0],d=o[1];Object(r.useEffect)((function(){return p.onAuthStateChanged((function(e){s(e),d(!1)}))}),[]);var b={currentUser:a,login:function(e,t){return p.signInWithEmailAndPassword(e,t)},signup:function(e,t){return p.createUserWithEmailAndPassword(e,t)},logout:function(){return p.signOut()},resetPassword:function(e){return p.sendPasswordResetEmail(e)},updateEmail:function(e){return a.updateEmail(e)},updatePassword:function(e){return a.updatePassword(e)}};return Object(m.jsx)(v.Provider,{value:b,children:!l&&t})}var y=c(12),C=c(11),S=c(21),N=f.firestore();function k(){return(k=Object(l.a)(o.a.mark((function e(t,c,r){var n,a,s,i;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=Object(S.a)(Object(S.a)({},c),{},{Color:c.Color,Name:c.Name,Attempts:c.Attempts}),e.next=3,N.collection("Users").doc(t.uid).get();case 3:a=e.sent,s=a.data(),(i=s.attemptedRoutes).push(n),console.log(i),N.collection("Users").doc(t.uid).update({attemptedRoutes:i}).then((function(e){r("Succesfully added into database")})).catch((function(e){r("no yo")}));case 9:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function P(e,t){N.collection("Users").doc(e.uid).set("").then((function(e){t({type:"success",msg:"Route Added"})})).catch((function(e){t({type:"danger",msg:"Route not Added"})}))}function A(){var e=Object(r.useRef)(),t=Object(r.useRef)(),c=g().login,n=Object(r.useState)(""),a=Object(i.a)(n,2),s=a[0],j=a[1],O=Object(r.useState)(!1),x=Object(i.a)(O,2),p=x[0],f=x[1],v=Object(y.g)(),w=g().currentUser;function S(){return(S=Object(l.a)(o.a.mark((function r(n){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n.preventDefault(),r.prev=1,j(""),f(!0),r.next=6,c(e.current.value,t.current.value);case 6:v.push("/home"),P(w,alert),r.next=13;break;case 10:r.prev=10,r.t0=r.catch(1),j("Failed to log in");case 13:f(!1);case 14:case"end":return r.stop()}}),r,null,[[1,10]])})))).apply(this,arguments)}return Object(m.jsxs)("div",{children:[Object(m.jsxs)(d.a,{children:[Object(m.jsxs)(d.a.Body,{children:[Object(m.jsx)("h2",{className:"text-center mb-4",children:"Log In"}),s&&Object(m.jsxs)(b.a,{variant:"danger",children:[" ",s," "]})]}),Object(m.jsxs)(u.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(m.jsxs)(u.a.Group,{id:"email",children:[Object(m.jsx)(u.a.Label,{children:"Email"}),Object(m.jsx)(u.a.Control,{type:"email",ref:e,required:!0})]}),Object(m.jsxs)(u.a.Group,{id:"password",children:[Object(m.jsx)(u.a.Label,{children:"Password"}),Object(m.jsx)(u.a.Control,{type:"password",ref:t,required:!0})]}),Object(m.jsx)(h.a,{disabled:p,className:"w-100",type:"submit",children:"Log In"})]}),Object(m.jsx)("div",{className:"w-100 text-center mt-3",children:Object(m.jsx)(C.b,{to:"/forgot-password",children:"Forgot Password?"})})]}),Object(m.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(m.jsx)(C.b,{to:"/signup",children:"Sign Up"})]})]})}function R(){var e=Object(r.useState)(""),t=Object(i.a)(e,2),c=t[0],n=t[1],a=g(),s=a.currentUser,j=a.logout,u=Object(y.g)();function O(){return(O=Object(l.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(""),e.prev=1,e.next=4,j();case 4:u.pushState("/login"),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n("Failed to log out");case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))).apply(this,arguments)}return Object(m.jsxs)("div",{children:[Object(m.jsx)(d.a,{children:Object(m.jsxs)(d.a.Body,{children:[Object(m.jsx)("h2",{className:"text-center mb-4",children:"Choose what you like babe."}),c&&Object(m.jsxs)(b.a,{variant:"danger",children:[" ",c," "]}),Object(m.jsx)("strong",{children:"Email:"})," ",s.email,Object(m.jsx)(C.b,{to:"/update-profile",className:"btn btn-primary w-100 mt-3",children:"Update Profile"})]})}),Object(m.jsx)("div",{className:"w-100 text-center mt-2",children:Object(m.jsx)(h.a,{variant:"link",onClick:function(){return O.apply(this,arguments)},children:"Log Out"})})]})}function L(){var e=Object(r.useRef)(),t=Object(r.useRef)(),c=Object(r.useRef)(),n=g().signup,a=Object(r.useState)(""),s=Object(i.a)(a,2),j=s[0],O=s[1],x=Object(r.useState)(!1),p=Object(i.a)(x,2),f=p[0],v=p[1],w=Object(y.g)();function S(){return(S=Object(l.a)(o.a.mark((function r(a){return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:if(a.preventDefault(),t.current.value===c.current.value){r.next=3;break}return r.abrupt("return",O("Passwords do not match"));case 3:return r.prev=3,O(""),v(!0),r.next=8,n(e.current.value,t.current.value);case 8:w.push("/"),r.next=14;break;case 11:r.prev=11,r.t0=r.catch(3),O("Failed to create an account");case 14:v(!1);case 15:case"end":return r.stop()}}),r,null,[[3,11]])})))).apply(this,arguments)}return Object(m.jsxs)("div",{children:[Object(m.jsxs)(d.a,{children:[Object(m.jsxs)(d.a.Body,{children:[Object(m.jsx)("h2",{className:"text-center mb-4",children:"Sign Up"}),j&&Object(m.jsxs)(b.a,{variant:"danger",children:[" ",j," "]})]}),Object(m.jsxs)(u.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(m.jsxs)(u.a.Group,{id:"email",children:[Object(m.jsx)(u.a.Label,{children:"Email"}),Object(m.jsx)(u.a.Control,{type:"email",ref:e,required:!0})]}),Object(m.jsxs)(u.a.Group,{id:"password",children:[Object(m.jsx)(u.a.Label,{children:"Password"}),Object(m.jsx)(u.a.Control,{type:"password",ref:t,required:!0})]}),Object(m.jsxs)(u.a.Group,{id:"password-confirm",children:[Object(m.jsx)(u.a.Label,{children:"Password Confirmation"}),Object(m.jsx)(u.a.Control,{type:"password",ref:c,required:!0})]}),Object(m.jsx)(h.a,{disabled:f,className:"w-100",type:"submit",children:"Sign Up"})]})]}),Object(m.jsxs)("div",{className:"w-100 text-center mt-2",children:["Already have an account? ",Object(m.jsx)(C.b,{to:"/login",children:"Log in"})]})]})}function U(){var e=Object(r.useRef)(),t=g().resetPassword,c=Object(r.useState)(""),n=Object(i.a)(c,2),a=n[0],s=n[1],j=Object(r.useState)(!1),O=Object(i.a)(j,2),x=O[0],p=O[1],f=Object(r.useState)(""),v=Object(i.a)(f,2),w=v[0],y=v[1];function S(){return(S=Object(l.a)(o.a.mark((function c(r){return o.a.wrap((function(c){for(;;)switch(c.prev=c.next){case 0:return r.preventDefault(),c.prev=1,y(""),s(""),p(!0),c.next=7,t(e.current.value);case 7:y("Check your inbox for further instructions"),c.next=13;break;case 10:c.prev=10,c.t0=c.catch(1),s("Failed to reset password");case 13:p(!1);case 14:case"end":return c.stop()}}),c,null,[[1,10]])})))).apply(this,arguments)}return Object(m.jsxs)("div",{children:[Object(m.jsxs)(d.a,{children:[Object(m.jsxs)(d.a.Body,{children:[Object(m.jsx)("h2",{className:"text-center mb-4",children:"Password Reset"}),a&&Object(m.jsxs)(b.a,{variant:"danger",children:[" ",a," "]}),w&&Object(m.jsxs)(b.a,{variant:"success",children:[" ",w," "]})]}),Object(m.jsxs)(u.a,{onSubmit:function(e){return S.apply(this,arguments)},children:[Object(m.jsxs)(u.a.Group,{id:"email",children:[Object(m.jsx)(u.a.Label,{children:"Email"}),Object(m.jsx)(u.a.Control,{type:"email",ref:e,required:!0})]}),Object(m.jsx)(h.a,{disabled:x,className:"w-100",type:"submit",children:"Reset Password"})]}),Object(m.jsx)("div",{className:"w-100 text-center mt-3",children:Object(m.jsx)(C.b,{to:"/login",children:"Login"})})]}),Object(m.jsxs)("div",{className:"w-100 text-center mt-2",children:["Need an account? ",Object(m.jsx)(C.b,{to:"/signup",children:"Sign Up"})]})]})}function E(){return Object(m.jsxs)("div",{children:[Object(m.jsx)("div",{children:Object(m.jsx)(C.c,{className:"nav-link",to:"/logout",children:"Update Profile or log out here"})}),"This will be profile view. Now how do I affect the routes after they have selected them from home?"]})}var F=c(56),G=["component"];function B(e){var t=e.component,c=Object(F.a)(e,G),r=g().currentUser;return Object(m.jsx)(y.b,Object(S.a)(Object(S.a)({},c),{},{render:function(e){return r?Object(m.jsx)(t,Object(S.a)({},e)):Object(m.jsx)(y.a,{to:"/login"})}}))}function I(){var e=Object(r.useRef)(),t=Object(r.useRef)(),c=Object(r.useRef)(),n=g(),a=n.currentUser,s=n.updatePassword,j=n.updateEmail,o=Object(r.useState)(""),l=Object(i.a)(o,2),O=l[0],x=l[1],p=Object(r.useState)(!1),f=Object(i.a)(p,2),v=f[0],w=f[1],S=Object(y.g)();return Object(m.jsxs)("div",{children:[Object(m.jsxs)(d.a,{children:[Object(m.jsxs)(d.a.Body,{children:[Object(m.jsx)("h2",{className:"text-center mb-4",children:"Update Profile"}),O&&Object(m.jsxs)(b.a,{variant:"danger",children:[" ",O," "]})]}),Object(m.jsxs)(u.a,{onSubmit:function(r){if(r.preventDefault(),t.current.value!==c.current.value)return x("Passwords do not match");var n=[];w(!0),x(""),e.current!==a.email&&n.push(j(e.current.value)),t.current.value&&n.push(s(t.current.value)),Promise.all(n).then((function(){S.push("/")})).catch((function(){x("failed to update account")})).finally((function(){w(!1)}))},children:[Object(m.jsxs)(u.a.Group,{id:"email",children:[Object(m.jsx)(u.a.Label,{children:"Email"}),Object(m.jsx)(u.a.Control,{type:"email",ref:e,required:!0,defaultValue:a.email})]}),Object(m.jsxs)(u.a.Group,{id:"password",children:[Object(m.jsx)(u.a.Label,{children:"Password"}),Object(m.jsx)(u.a.Control,{type:"password",ref:t,placeholder:"Leave blank to keep the same"})]}),Object(m.jsxs)(u.a.Group,{id:"password-confirm",children:[Object(m.jsx)(u.a.Label,{children:"Password Confirmation"}),Object(m.jsx)(u.a.Control,{type:"password",ref:c,placeholder:"Leave blank to keep the same"})]}),Object(m.jsx)(h.a,{disabled:v,className:"w-100",type:"submit",children:"Update"})]})]}),Object(m.jsx)("div",{className:"w-100 text-center mt-2",children:Object(m.jsx)(C.b,{to:"/",children:"Cancel"})})]})}var K=c(82),T=c(85),D=c(84);var q=function(){return Object(m.jsxs)(T.a,{bg:"dark",variant:"dark",expand:"lg",children:[Object(m.jsx)(T.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(m.jsx)(T.a.Collapse,{id:"basic-navbar-nav",className:"flex-grow-0",children:Object(m.jsxs)(D.a,{children:[Object(m.jsx)(C.c,{to:"/home",className:"nav-link",children:"Home"}),Object(m.jsx)(C.c,{to:"/routes",className:"nav-link",children:"Routes"})]})}),Object(m.jsx)(T.a.Brand,{href:"/home",className:"mx-auto",children:"Ro\xf9te de la Ro\xf9te"}),Object(m.jsxs)(D.a,{children:[Object(m.jsx)(C.c,{to:"/account",className:"nav-link",children:"Account"}),Object(m.jsx)(C.c,{to:"/profile",className:"nav-link",children:"Profile"})]})]})},H=c(81),W=c(55),z=c(78),J=c(79),M=c(80);function V(e){e.key;var t=e.route,c=e.setFave,n=e.fave,a=(e.storage,Object(r.useState)("")),s=Object(i.a)(a,2),j=s[0],o=s[1],l=Object(r.useState)(!1),d=Object(i.a)(l,2),b=d[0],u=d[1],O=Object(r.useState)({}),x=Object(i.a)(O,2),p=x[0],f=x[1],v=g().currentUser;return Object(m.jsxs)("tr",{children:[Object(m.jsxs)("td",{children:[t.Name,Object(m.jsx)("i",{className:"btn",onClick:function(){return function(e){var t=Object(W.a)(n),r=t.indexOf(e);u(!b),r>-1?t.splice(r,1):t.push(e),c(t)}(t)},children:b?Object(m.jsx)(z.a,{}):Object(m.jsx)(J.a,{})})]}),Object(m.jsx)("td",{children:t.Color}),Object(m.jsx)("td",{children:t.Grade}),Object(m.jsx)("td",{children:t.Setter}),Object(m.jsxs)("td",{children:[j," Attempts | Change this code to be reactive to firebase edit"]}),Object(m.jsxs)("td",{children:[Object(m.jsx)("input",{type:"number",min:"0",max:"101",placeholder:"edit",onChange:function(e){o("");var c=Object(S.a)({},t);e.target.value<100?o(e.target.value):alert("Don't lie"),f((function(t){return Object(S.a)(Object(S.a)(Object(S.a)({},t),c),{},{Attempts:e.target.value})}))}}),Object(m.jsx)(h.a,{className:"m-2",onClick:function(){return function(e,t,c){return k.apply(this,arguments)}(v,p,alert)},children:Object(m.jsx)(M.a,{})})]})]})}function _(e){var t=e.routesProps,c=e.setFave,r=e.fave,n=[];return Object(m.jsxs)(H.a,{striped:!0,bordered:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"Color"}),Object(m.jsx)("th",{children:"Grade (Pie)"}),Object(m.jsx)("th",{children:"Setter"}),Object(m.jsx)("th",{children:"Attempts"}),Object(m.jsx)("th",{children:"Edit here"})]})}),Object(m.jsx)("tbody",{children:t.map((function(e){return Object(m.jsx)(V,{route:e,fave:r,setFave:c,storage:n},e.id)}))})]})}var Q=c(86);function X(){return Object(m.jsxs)("div",{children:["This is the Home page.",Object(m.jsx)("br",{}),"This page will show the multiple gyms that are available in the app.",Object(m.jsx)("br",{}),"For now, this page will render only below info.",Object(m.jsx)("hr",{}),Object(m.jsx)("div",{children:"Please Choose Gym to view routes."}),Object(m.jsx)("div",{}),Object(m.jsxs)(Q.a,{defaultActiveKey:"0",children:[Object(m.jsxs)(d.a,{children:[Object(m.jsx)(Q.a.Toggle,{as:d.a.Header,eventKey:"0",children:"Climb Central"}),Object(m.jsx)(Q.a.Collapse,{eventKey:"0",children:Object(m.jsxs)(d.a.Body,{children:[Object(m.jsx)(C.c,{to:"/routes",children:"Climb Central Funan"}),Object(m.jsx)("br",{}),Object(m.jsx)(C.c,{to:"/#",children:"Climb Central Sports Hub"}),Object(m.jsx)("br",{}),Object(m.jsx)(C.c,{to:"/#",children:"Climb Central Novena"})]})})]}),Object(m.jsxs)(d.a,{children:[Object(m.jsx)(Q.a.Toggle,{as:d.a.Header,eventKey:"1",children:"Another gym"}),Object(m.jsx)(Q.a.Collapse,{eventKey:"1",children:Object(m.jsx)(d.a.Body,{children:"Location of gym (contains rotes)"})})]})]})]})}function Y(e){var t=e.attempt;return Object(m.jsxs)("tr",{children:[Object(m.jsx)("td",{children:t.Name}),Object(m.jsx)("td",{children:t.Grade}),Object(m.jsx)("td",{children:t.Attempts}),Object(m.jsx)("td",{children:t.Color})]})}function Z(){var e,t=Object(r.useState)([]),c=Object(i.a)(t,2),n=c[0],a=c[1];g().currentUser;return Object(r.useEffect)((function(){var e;e=a,N.collection("Users").onSnapshot((function(t){var c=[];return t.forEach((function(e){c.push(e.data())})),e(c)}))}),[]),Object(m.jsxs)(H.a,{striped:!0,bordered:!0,children:[Object(m.jsx)("thead",{children:Object(m.jsxs)("tr",{children:[Object(m.jsx)("th",{children:"Name"}),Object(m.jsx)("th",{children:"Attempts"}),Object(m.jsx)("th",{children:"Grade (Pie)"}),Object(m.jsx)("th",{children:"Color"})]})}),Object(m.jsx)("tbody",{children:null===(e=n[0])||void 0===e?void 0:e.attemptedRoutes.map((function(e){return Object(m.jsx)(Y,{attempt:e},e.id)}))})]})}function $(){return Object(m.jsxs)("div",{children:["This will be the account view.",Object(m.jsx)(Q.a,{defaultActiveKey:"0",children:Object(m.jsxs)(d.a,{children:[Object(m.jsx)(Q.a.Toggle,{as:d.a.Header,eventKey:"1",children:"Attempted Route(s)"}),Object(m.jsx)(Q.a.Collapse,{eventKey:"1",children:Object(m.jsx)(d.a.Body,{children:Object(m.jsx)(Z,{})})})]})})]})}var ee=function(){var e=Object(r.useState)([]),t=Object(i.a)(e,2),c=t[0],n=t[1],a=Object(r.useState)([]),s=Object(i.a)(a,2),j=s[0],o=s[1];return Object(r.useEffect)((function(){var e;e=n,console.log("hi there"),N.collection("LeadWallFunan").onSnapshot((function(t){var c=[];t.forEach((function(e){c.push(e.data())})),e(c)}))}),[]),Object(m.jsxs)(C.a,{children:[Object(m.jsx)(q,{}),Object(m.jsx)(w,{children:Object(m.jsxs)(y.d,{children:[Object(m.jsx)(y.b,{path:"/home",children:Object(m.jsx)(X,{})}),Object(m.jsx)(y.b,{path:"/routes",children:Object(m.jsx)(_,{fave:j,setFave:o,routesProps:c})}),Object(m.jsx)(B,{path:"/account",component:$,fave:j}),Object(m.jsx)(B,{path:"/profile",component:E}),Object(m.jsx)(K.a,{className:"d-flex align-items-center justify-content-center",style:{minHeight:"100vh"},children:Object(m.jsxs)("div",{className:"w-100",style:{maxWidth:"400px"},children:[Object(m.jsx)(B,{path:"/logout",exact:!0,component:R}),Object(m.jsx)(B,{path:"/update-profile",component:I}),Object(m.jsx)(y.b,{path:"/signup",component:L}),Object(m.jsx)(y.b,{path:"/login",component:A}),Object(m.jsx)(y.b,{path:"/forgot-password",component:U})]})})]})})]})},te=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,89)).then((function(t){var c=t.getCLS,r=t.getFID,n=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),r(e),n(e),a(e),s(e)}))};s.a.render(Object(m.jsx)(n.a.StrictMode,{children:Object(m.jsx)(ee,{})}),document.getElementById("root")),te()}},[[73,1,2]]]);
//# sourceMappingURL=main.3725e253.chunk.js.map