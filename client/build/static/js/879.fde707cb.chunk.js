"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[879],{6879:function(e,n,t){t.r(n),t.d(n,{default:function(){return C}});var i=t(1413),a=t(7689),o=t(1087),r=t(8590),l=t(9439),c=t(2791),s=t(8436),d=t(3713),u=t(8556),p=t(5565),f=t(4820),x=t(194),m=t(2739),v=t(1511),g=t(184),C=function(){var e=function(e){var n=e.productCollectionId,t=(0,a.s0)(),o=(0,d.NL)(),r=(0,c.useState)({imageUrl:"",caption:"",captionColor:"#aabbcc",content:""}),f=(0,l.Z)(r,2),x=f[0],m=f[1],v=(0,c.useState)("add"),g=(0,l.Z)(v,2),C=g[0],h=g[1],j=(0,s.K)({instanceType:"productCollections",instanceId:n}).groupTypeInstance;(0,c.useEffect)((function(){var e;null!==j&&void 0!==j&&null!==(e=j.banner)&&void 0!==e&&e.caption&&(m(null===j||void 0===j?void 0:j.banner),h("update"))}),[j]);var B=(0,u.D)({mutationFn:function(){return(0,p.Z4)({productCollectionId:n,banner:x})},onSuccess:function(){return t("/admin/productCollections")}}),b=B.mutate,y=B.isPending,P=(0,u.D)({mutationFn:function(){return(0,p.ps)({productCollectionId:n,updatedBanner:x})},onSuccess:function(){o.invalidateQueries({queryKey:["productCollections"]}),t("/admin/productCollections")}}),N=P.mutate,w=P.isPending,I=(0,u.D)({mutationFn:function(){return(0,p.Kk)({productCollectionId:n})},onSuccess:function(){o.invalidateQueries({queryKey:["productCollections"]}),t("/admin/productCollections")}}),U=I.mutate,D=I.isPending;return{banner:x,setBanner:m,mode:C,setBannerImage:function(e){m((function(n){return(0,i.Z)((0,i.Z)({},n),{},{imageUrl:e})}))},createBanner:b,isCreateBannerPending:y,deleteBanner:U,isDeleteBannerPending:D,updateBanner:N,isUpdateBannerPending:w}}({productCollectionId:(0,a.UO)().productCollectionId}),n=e.mode,t=e.banner,C=e.setBanner,h=e.setBannerImage,j=e.createBanner,B=e.isCreateBannerPending,b=e.deleteBanner,y=e.isDeleteBannerPending,P=e.updateBanner,N=e.isUpdateBannerPending;return(0,g.jsx)("section",{children:(0,g.jsx)(m.W2,{children:(0,g.jsx)("div",{className:"fixed inset-0 z-50 flex items-center justify-center",children:(0,g.jsxs)("div",{className:"relative flex flex-col gap-10 w-[100%] h-screen bg-white rounded-lg shadow-lg overflow-y-auto p-8",children:[(0,g.jsxs)("div",{className:"flex items-center justify-between",children:[(0,g.jsxs)("h3",{className:"text-3xl font-semibold capitalize",children:[n," Banner for Collection"]}),(0,g.jsx)(o.rU,{to:"/admin/productCollections",children:(0,g.jsx)(v.DX,{width:"25",height:"25"})})]}),(0,g.jsxs)("div",{className:"flex flex-col gap-10",children:[(0,g.jsxs)("div",{className:"flex flex-col items-start gap-7 md:flex-row",children:[(0,g.jsx)(f.Ur,{setValue:h,imageUrl:null===t||void 0===t?void 0:t.imageUrl}),(0,g.jsxs)("div",{className:"flex flex-col items-center justify-center gap-5 w-[100%]",children:[(0,g.jsx)("input",{"aria-label":"Caption",onChange:function(e){return(0,r.C)(e,C)},value:null===t||void 0===t?void 0:t.caption,name:"caption",type:"text",placeholder:"Caption",className:"w-[100%] p-2 rounded-md border-2 font-bold",style:{color:null===t||void 0===t?void 0:t.captionColor}}),(0,g.jsx)(x.SV,{color:null===t||void 0===t?void 0:t.captionColor,setColor:function(e){return C((function(n){return(0,i.Z)((0,i.Z)({},n),{},{captionColor:e.hex})}))}})]})]}),(0,g.jsx)("textarea",{value:null===t||void 0===t?void 0:t.content,onChange:function(e){return(0,r.C)(e,C)},type:"text",name:"content",placeholder:"Content",className:"border-2 rounded-md resize-none text-lg h-[170px] p-4 text-gray-600"})]}),(0,g.jsx)("div",{className:"space-x-5",children:"update"===n?(0,g.jsxs)("div",{className:"flex gap-3",children:[(0,g.jsx)(x.AP,{updateBanner:P,isUpdateBannerPending:N}),(0,g.jsx)(x.mj,{deleteBanner:b,isDeleteBannerPending:y})]}):(0,g.jsx)(x.fE,{isCreateBannerPending:B,createBanner:j})})]})})})})}}}]);
//# sourceMappingURL=879.fde707cb.chunk.js.map