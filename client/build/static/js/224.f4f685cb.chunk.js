"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[224],{8709:function(e,n,t){t.d(n,{w:function(){return u},z:function(){return s}});var a=t(4165),r=t(5861),o=t(9396),u=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(n){var t,r,u,s;return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.mode,r=n.user,e.next=3,o.b.post("http://localhost:4001/api/auth/".concat(t),r);case 3:return u=e.sent,s=u.data,e.abrupt("return",s);case 6:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),s=function(){var e=(0,r.Z)((0,a.Z)().mark((function e(){return(0,a.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.b.post("http://localhost:4001/api/auth/signout");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},1394:function(e,n,t){t.d(n,{$:function(){return o},Q:function(){return l}});var a=t(8573),r=t(184),o=function(e){var n=e.auth,t=e.isAuthPending,o=e.mode;return(0,r.jsx)(a.zx,{extraStyles:"w-[120px] mx-auto h-10",theme:"basicDark",onClick:n,disabled:t,spinner:t,caption:"signin"===o?"Sign In":"Sign up"})},u=t(3713),s=t(8556),i=t(7689),c=t(8709),l=function(){var e=function(){var e=(0,u.NL)(),n=(0,i.s0)();return{signout:(0,s.D)({mutationFn:c.z,onSuccess:function(){localStorage.removeItem("user"),e.setQueryData(["user"],null),n("/")}}).mutate}}().signout;return(0,r.jsx)(a.zx,{onClick:e,caption:"Logout",theme:"danger",extraaStyles:"w-[150px] h-10 mx-auto"})}},1224:function(e,n,t){t.r(n),t.d(n,{default:function(){return w}});var a=t(2877),r=t(1087),o=t(8590),u=t(9725),s=t(9439),i=t(2791),c=t(7689),l=t(3713),p=t(8556),f=t(8709),d=t(8599),m=t(9085),h=function(){var e={mode:(0,c.TH)().pathname.split("/auth/")[1]}.mode,n=(0,i.useState)({firstName:"",lastName:"",email:"",password:""}),t=(0,s.Z)(n,2),a=t[0],r=t[1],o=(0,c.s0)(),u=(0,l.NL)(),h=(0,p.D)({mutationFn:function(){return(0,f.w)({mode:e,user:a})},onSuccess:function(e){(0,d.M)(e),u.setQueryData(["user"],e),o("/")},onError:function(e){e.response.data.message&&m.Am.error(e.response.data.message),e.response.data.errors&&e.response.data.errors.map((function(e){return m.Am.error(e.msg)}))}}),g=h.mutate,x=h.isPending;return{user:a,setUser:r,auth:g,isAuthPending:x,mode:e}},g=t(2569),x=t(2739),v=t(1394),b=t(184),w=function(){var e=h(),n=e.user,t=e.setUser,s=e.auth,i=e.isAuthPending,c=e.mode,l=function(e){return"signup"===e?{heading:"Create account",alternativePagePath:"signin",goToAlternativePageLabel:"Already have an account?"}:"signin"===e?{heading:"Login",alternativePagePath:"signup",goToAlternativePageLabel:"Don't have an account yet?"}:void 0}(c),p=l.heading,f=l.alternativePagePath,d=l.goToAlternativePageLabel;return(0,b.jsx)("section",{className:"mx-auto my-[60px] flex flex-col gap-10 text-center",children:(0,b.jsxs)(x.W2,{extraStyles:"flex flex-col items-center gap-10 text-center w-full",children:[(0,b.jsx)("p",{className:"max-md:text-3xl text-5xl font-semibold text-[#1e2242]",children:p}),(0,b.jsx)("div",{className:"flex flex-col w-[80%] max-w-[500px] mx-auto gap-6",children:a.pb.map((function(e){return"signin"!==c||e.showAtSignin?(0,b.jsx)("input",{onKeyDown:function(e){return(0,u.$)(e,{selectedKey:"Enter",callback:s})},"aria-label":e.caption,className:"p-3 border-b-[2px] border-[#ff8156] focus:outline-none",value:n[(0,g._)(e.caption)],type:e.type,name:(0,g._)(e.caption),placeholder:e.caption,onChange:function(e){return(0,o.C)(e,t)}},e.caption):null}))}),(0,b.jsx)(v.$,{auth:s,isAuthPending:i,mode:c}),(0,b.jsx)(r.rU,{className:"capitalize","aria-label":"Go to ".concat(f," Page"),to:"/auth/".concat(f),children:(0,b.jsx)("p",{className:"underline underline-offset-2",children:d})})]})})}},8599:function(e,n,t){t.d(n,{M:function(){return a}});var a=function(e){return localStorage.setItem("user",JSON.stringify(e))}}}]);
//# sourceMappingURL=224.f4f685cb.chunk.js.map