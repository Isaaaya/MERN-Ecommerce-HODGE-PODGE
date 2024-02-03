"use strict";(self.webpackChunkclient=self.webpackChunkclient||[]).push([[112],{7157:function(e,t,n){n.d(t,{Vb:function(){return h},bU:function(){return g},V7:function(){return I}});var i=n(1413),a=n(7689),d=n(3713),o=n(8556),s=n(9644),l=n(483),r=n(2791),c=n(5052),u=n(9085),p=n(7530),v=n(184),h=function(e){var t=e.totalItems,n=e.totalPrice,h=function(e){var t,n=e.order,p=(0,l.p)().user,v=(0,r.useContext)(c.n).emptyCart,h=(0,a.s0)(),f=(0,d.NL)(),x=(0,i.Z)((0,i.Z)({},n),{},{products:null===n||void 0===n||null===(t=n.products)||void 0===t?void 0:t.filter((function(e){return null===e||void 0===e?void 0:e.product}))}),g=(0,o.D)({mutationFn:function(){return(0,s.VK)({instanceType:"orders",data:x})},onSuccess:function(){h("/checkout/success"),null!==p&&void 0!==p&&p.email?f.invalidateQueries({queryKey:["cart"]}):v()},onError:function(e){return e.response.data.errors.map((function(e){return u.Am.error(e.msg)}))}});return{createOrder:g.mutate,isCreateOrderPending:g.isPending}}({order:e.order}),f=h.createOrder,x=h.isCreateOrderPending;return(0,v.jsxs)("article",{className:"min-h-[350px] bg-gray-100/[0.5] rounded-md border p-10 space-y-2 order-1",children:[(0,v.jsxs)("div",{className:"pb-5 space-y-4 border-b-2",children:[(0,v.jsx)(p.zx,{disabled:x,onClick:f,spinner:x,caption:"Order",extraStyles:"w-full h-10",theme:"basicDark"}),(0,v.jsxs)("p",{className:"text-gray-600",children:["By confirming your order, you agree to our company"," ",(0,v.jsx)("span",{className:"text-black",children:"Privacy policy"})," and"," ",(0,v.jsx)("span",{className:"text-black",children:"Conditions of use"}),"."]})]}),(0,v.jsx)("p",{className:"text-lg",children:"Order Summary"}),(0,v.jsxs)("div",{className:"grid grid-cols-2 pb-5 border-b-2 even:text-end [&>*:nth-child(even)]:text-end",children:[(0,v.jsxs)("p",{children:["Items (",t||0,")"]}),(0,v.jsxs)("p",{children:["$",n||0]}),(0,v.jsx)("p",{children:"Shipping and handling"}),(0,v.jsx)("p",{children:"$5.50"})]}),(0,v.jsxs)("div",{className:"grid grid-cols-2 [&>*:nth-child(even)]:text-end",children:[(0,v.jsx)("p",{children:"Order Total:"}),(0,v.jsxs)("p",{children:["$",(n||0)+5.5]})]})]})},f=n(4164),x=n(7363),g=function(e){var t,n=e.showOrderDetails,i=e.order;(0,x.t)({condition:n});var a,d=(a=null===i||void 0===i?void 0:i.createdAt,new Date(a).toLocaleDateString("en-US"));return n?(0,f.createPortal)((0,v.jsx)("div",{className:"fixed top-0 w-full h-full bg-black/[0.2] flex items-center justify-center",children:(0,v.jsxs)("article",{onClick:function(e){return e.stopPropagation()},className:"fixed top-1/2 bottom-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 self-center bg-white border-2 min-w-[85%] h-fit p-8 z-50 rounded-lg [&_div]:text-center space-y-12 text-center ".concat(!n&&"hidden"),children:[(0,v.jsxs)("div",{className:"space-y-3",children:[(0,v.jsxs)("h1",{className:"text-lg font-bold",children:["Order #",null===i||void 0===i?void 0:i._id]}),(0,v.jsxs)("p",{className:"text-start",children:["Order created: ",d]})]}),(0,v.jsxs)("div",{children:[(0,v.jsxs)("div",{className:"grid grid-cols-3 font-bold ",children:[(0,v.jsx)("p",{className:"col-span-2",children:"Product"}),(0,v.jsx)("p",{children:"Quantity"})]}),(0,v.jsx)("div",{className:"min-h-fit max-h-[400px] overflow-y-auto",children:null===i||void 0===i||null===(t=i.products)||void 0===t?void 0:t.map((function(e){return(0,v.jsxs)("div",{className:"grid grid-cols-3",children:[(0,v.jsx)("p",{className:"col-span-2",children:null===e||void 0===e?void 0:e.product}),(0,v.jsx)("p",{children:null===e||void 0===e?void 0:e.quantity})]},null===e||void 0===e?void 0:e.product)}))})]}),(0,v.jsxs)("div",{className:"[&_p]:text-start space-y-2",children:[(0,v.jsxs)("p",{children:["Total Items: ",null===i||void 0===i?void 0:i.totalItems]}),(0,v.jsxs)("p",{children:["Total Price: $",null===i||void 0===i?void 0:i.totalPrice]})]})]})}),document.getElementById("modal")):null},m=n(1511),j=n(6894),I=function(e){var t=e.setShowOrderDetails,n=(0,r.useRef)(null);return(0,j.O)(n,(function(){return t(!1)})),(0,v.jsx)("button",{ref:n,onClick:function(){return t((function(e){return!e}))},children:(0,v.jsx)(m.tE,{width:"25",height:"25"})})}},2112:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}});var i=n(2791),a=n(7689),d=n(9439),o=n(8103),s=n(9365),l=function(){switch((0,a.UO)().instanceType){case"productCollections":return{advancedUpdate:!1,actionOptions:["startUpdatingModeButton","handleBannerLink","deleteInstanceButton"],fields:["_id","title"],fieldsTitles:["ID","Title"],hasCreateInstanceForm:!0,searchBy:"Title or ID",parentGroup:null};case"categories":return{advancedUpdate:!1,actionOptions:["startUpdatingModeButton","deleteInstanceButton"],fields:["_id","title","productCollection.title"],fieldsTitles:["ID","Title","Collection"],hasCreateInstanceForm:!0,searchBy:"Title or ID",parentGroup:"productCollections"};case"subcategories":return{advancedUpdate:!1,actionOptions:["startUpdatingModeButton","deleteInstanceButton"],fields:["_id","title","productCollection.title","category.title"],fieldsTitles:["ID","Title","Collection","Category"],hasCreateInstanceForm:!0,searchBy:"Title or ID",parentGroup:"categories"};case"products":return{advancedUpdate:!0,actionOptions:["startUpdatingModeButton","deleteInstanceButton"],fields:["_id","title","productCollection.title","category.title","subcategory.title"],fieldsTitles:["ID","Title","Collection","Category","Subcategory"],hasCreateInstanceForm:!1,searchBy:"Title or ID",parentGroup:null};case"orders":return{advancedUpdate:!1,actionOptions:["viewOrderInfoButton"],fields:["_id","userEmail","totalItems","totalPrice"],fieldsTitles:["ID","Purchaser","Items","Price"],hasCreateInstanceForm:!1,searchBy:"ID or Purchaser Email",parentGroup:null};default:return null}},r=n(9694),c=n(6632),u=n(1511),p=n(184),v=function(e){var t=e.instances,n=l().fieldsTitles;return(0,p.jsxs)("table",{className:"p-4 w-[100%] [&_th]:p-4 [&_td]:p-4 md:[&_th]:text-center md:[&_td]:text-center max-md:[&_td]:grid max-md:[&_td]:grid-cols-2",children:[(0,p.jsx)("thead",{className:"py-10 max-md:hidden",children:(0,p.jsxs)("tr",{children:[null===n||void 0===n?void 0:n.map((function(e){return(0,p.jsx)("th",{children:e},e)})),(0,p.jsx)("th",{children:"Actions"})]})}),(0,p.jsx)("tbody",{children:null===t||void 0===t?void 0:t.map((function(e){return(0,p.jsx)(h,{instance:e},null===e||void 0===e?void 0:e._id)}))})]})},h=function(e){var t=e.instance,n=(0,i.useState)(null),a=(0,d.Z)(n,2),o=a[0],s=a[1],r=(0,i.useState)(!1),c=(0,d.Z)(r,2),u=c[0],v=c[1],h=l(),x=h.fields,g=h.fieldsTitles,m=h.advancedUpdate,j=h.actionOptions,I="border-[0.5px] md:border-none max-md:before:mr-10 break-words".split(" ");return(0,p.jsxs)("tr",{className:"odd:bg-gray-200/[0.3] border-b-2 ".concat(I.map((function(e){return"[&_td]:".concat(e)}))),children:[x.map((function(e,n){return(0,p.jsx)("td",{"data-cell":g[n],className:"max-md:before:content-[attr(data-cell)] before:capitalize before:font-bold md:max-w-[120px] [&_*]:w-[200px] [&_*]:md:w-[110px] [&_*]:rounded-md overflow-x-auto",children:(0,p.jsx)(f,{instance:t,field:g[n],isUpdatingMode:u,content:(i=t,a=e,a.split(".").reduce((function(e,t){return e[t]}),i)),setUpdatedInstance:s,selectedCollectionId:null===o||void 0===o?void 0:o.productCollection})},e);var i,a})),(0,p.jsx)("td",{"data-cell":"actions",className:"max-md:before:content-[attr(data-cell)] before:capitalize before:font-bold md:w-[120px]",children:(0,p.jsx)(_,{actionOptions:j,isUpdatingMode:u,setIsUpdatingMode:v,advancedUpdate:m,instance:t,updatedInstance:o})})]},null===t||void 0===t?void 0:t._id)},f=function(e){var t=e.isUpdatingMode,n=e.content,i=e.field,a=e.setUpdatedInstance,d=e.selectedCollectionId,o=e.instance,s=n;return"Title"===i&&(s=(0,p.jsx)(C,{content:n,setUpdatedInstance:a})),"Collection"===i&&(s=(0,p.jsx)(m,{instance:o,isUpdatingMode:t,field:i,setUpdatedInstance:a})),"Category"===i&&(s=(0,p.jsx)(y,{instance:o,setUpdatedInstance:a,selectedCollectionId:d,isUpdatingMode:t,field:i})),t?s:n},x=function(e){var t=e.instanceId,n=e.advancedUpdate,i=e.setIsUpdatingMode,d=(0,a.s0)();return(0,p.jsx)("button",{onClick:function(){n?d("/admin/".concat(t,"/update")):i(!0)},children:(0,p.jsx)(u.vd,{width:"25",height:"25"})})},g=n(1413),m=function(e){var t,n,a,d=e.isUpdatingMode,s=e.field,l=e.setUpdatedInstance,r=e.instance,c=(0,o.P)({configData:{instanceType:"productCollections"},enabled:d&&"Collection"===s}).instancesData;return(0,i.useEffect)((function(){var e;null!==r&&void 0!==r&&null!==(e=r.productCollection)&&void 0!==e&&e._id&&l((function(e){var t;return(0,g.Z)((0,g.Z)({},e),{},{productCollection:null===r||void 0===r||null===(t=r.productCollection)||void 0===t?void 0:t._id})}))}),[null===r||void 0===r||null===(t=r.productCollection)||void 0===t?void 0:t._id,l]),(0,p.jsx)("select",{"aria-label":"Collections",defaultValue:(null===r||void 0===r||null===(n=r.productCollection)||void 0===n?void 0:n._id)||"",onChange:function(e){return l((function(t){return(0,g.Z)((0,g.Z)({},t),{},{productCollection:e.target.value})}))},children:null===c||void 0===c||null===(a=c.productCollections)||void 0===a?void 0:a.map((function(e){return(0,p.jsx)("option",{value:null===e||void 0===e?void 0:e._id,children:null===e||void 0===e?void 0:e.title},null===e||void 0===e?void 0:e._id)}))})},j=n(4893),I=n(5565),y=function(e){var t,n,a=e.setUpdatedInstance,d=e.selectedCollectionId,o=e.isUpdatingMode,s=e.field,l=e.instance,r=function(e){var t=e.selectedCollectionId,n=e.isUpdatingMode,i=e.field;return{collectionCategories:(0,j.a)({queryKey:["collectionCategories",t],queryFn:function(){return(0,I.AB)({productCollectionId:t})},enabled:n&&(null===t||void 0===t?void 0:t.length)>0&&"Category"===i&&"Select"!==t}).data}}({selectedCollectionId:d,isUpdatingMode:o,field:s}),c=r.collectionCategories;if((0,i.useEffect)((function(){var e;null!==l&&void 0!==l&&null!==(e=l.category)&&void 0!==e&&e._id&&a((function(e){var t;return(0,g.Z)((0,g.Z)({},e),{},{category:null===l||void 0===l||null===(t=l.category)||void 0===t?void 0:t._id})}))}),[null===l||void 0===l||null===(t=l.category)||void 0===t?void 0:t._id,a]),c)return(0,p.jsx)("select",{"aria-label":"Categories",defaultValue:null===l||void 0===l||null===(n=l.category)||void 0===n?void 0:n._id,onChange:function(e){return a((function(t){return(0,g.Z)((0,g.Z)({},t),{},{category:e.target.value})}))},children:null===c||void 0===c?void 0:c.map((function(e){return(0,p.jsx)("option",{value:null===e||void 0===e?void 0:e._id,children:null===e||void 0===e?void 0:e.title},null===e||void 0===e?void 0:e._id)}))})},C=function(e){var t=e.content,n=e.setUpdatedInstance,a=(0,i.useState)(t),o=(0,d.Z)(a,2),s=o[0],l=o[1];return(0,p.jsx)("input",{"aria-label":"Cell Content",value:s,onChange:function(e){l(e.target.value),n((function(t){return(0,g.Z)((0,g.Z)({},t),{},{title:e.target.value})}))},placeholder:"content"})},b=n(3202),U=n(3586),D=n(7157),_=function(e){var t=e.isUpdatingMode,n=e.setIsUpdatingMode,a=e.advancedUpdate,o=e.instance,s=e.updatedInstance,l=e.actionOptions,r=function(e){var t=e.instanceId,n=e.setIsUpdatingMode,a=e.advancedUpdate,o=(0,i.useState)(!1),s=(0,d.Z)(o,2),l=s[0],r=s[1];return{actionButtons:{startUpdatingModeButton:(0,p.jsx)(x,{instanceId:t,advancedUpdate:a,setIsUpdatingMode:n}),deleteInstanceButton:(0,p.jsx)(b.Y6,{instanceId:t}),handleBannerLink:(0,p.jsx)(U.UN,{instanceId:t}),viewOrderInfoButton:(0,p.jsx)(D.V7,{setShowOrderDetails:r})},showOrderDetails:l}}({instanceId:null===o||void 0===o?void 0:o._id,setIsUpdatingMode:n,advancedUpdate:a}),c=r.actionButtons,u=r.showOrderDetails;return(0,p.jsxs)("div",{className:"[&_div]:flex [&_div]:items-center [&_div]:gap-2 [&_div]:md:justify-center",children:[!t&&(0,p.jsx)("div",{children:null===l||void 0===l?void 0:l.map((function(e){return(0,p.jsx)("div",{children:c[e]},e)}))}),t&&(0,p.jsxs)("div",{children:[(0,p.jsx)(b.bQ,{instanceId:null===o||void 0===o?void 0:o._id,updatedInstance:s,setIsUpdatingMode:n}),(0,p.jsx)(b.oi,{setIsUpdatingMode:n})]}),(0,p.jsx)(D.bU,{showOrderDetails:u,order:o})]})},N=n(7530),T=n(1011),w=n(2739),O=n(6199),P=function(){var e,t=function(){var e,t=(0,a.UO)().instanceType,n=(0,i.useState)(""),u=(0,d.Z)(n,2),p=u[0],v=u[1],h=(0,c.q)({search:p}),f=h.page,x=h.setPage,g=(0,s.N)({value:p,delay:450}),m=l();(0,r.Z)();var j=(0,o.P)({configData:{instanceType:t,page:f,search:g,limit:10}}),I=j.instancesData;return{instancesData:I,instanceType:t,isInstancesPlaceholderData:j.isInstancesPlaceholderData,stillRetrievingData:j.stillRetrievingData,instanceGroupData:m,parentInstancesData:(0,o.P)({configData:{instanceType:null===m||void 0===m?void 0:m.parentGroup},enabled:!(null===m||void 0===m||!m.parentGroup)}).instancesData,instancesAreFound:I&&(null===(e=I[t])||void 0===e?void 0:e.length)>0,page:f,setPage:x,search:p,setSearch:v}}(),n=t.instancesData,h=t.instanceType,f=t.isInstancesPlaceholderData,x=t.stillRetrievingData,g=t.instanceGroupData,m=t.parentInstancesData,j=t.instancesAreFound,I=t.page,y=t.setPage,C=t.search,U=t.setSearch;return x||n?(0,p.jsx)(i.Suspense,{fallback:(0,p.jsx)("div",{className:"flex items-center justify-center h-screen",children:(0,p.jsx)(u.$j,{width:"25",height:"25"})}),children:(0,p.jsx)("section",{className:"min-h-fit",children:(0,p.jsxs)(w.W2,{extraStyles:"space-y-10 pb-10 h-full",children:[(0,p.jsx)(N.E1,{search:C,setSearch:U,searchBy:null===g||void 0===g?void 0:g.searchBy}),(null===g||void 0===g?void 0:g.hasCreateInstanceForm)&&(0,p.jsx)(b.Mq,{instanceType:h,selectInstances:m&&m[null===g||void 0===g?void 0:g.parentGroup]}),x&&!j&&(0,p.jsx)(O.p2,{rowsCount:10,colsCount:(null===g||void 0===g||null===(e=g.fieldsTitles)||void 0===e?void 0:e.length)+1}),j&&(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(v,{instances:n[h]}),(0,p.jsx)(T.Z,{page:I,setPage:y,isPlaceholderData:f,totalPages:null===n||void 0===n?void 0:n.totalPages})]}),!x&&!j&&(0,p.jsx)("div",{className:"flex justify-center items-center min-h-[200px]",children:"Unfortunately, no instances found."})]})})}):(0,p.jsx)(a.Fg,{to:"/"})}}}]);
//# sourceMappingURL=112.f16de76b.chunk.js.map