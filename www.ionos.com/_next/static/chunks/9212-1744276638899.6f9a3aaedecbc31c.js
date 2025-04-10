"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[9212],{23012:(t,e,l)=>{l.d(e,{S:()=>s});var n=l(74848);l(96540);var i=l(88292),o=l(40334),a=l(97904);let s=t=>{let{as:e="h6",size:l="heading5",className:s,defaultClasses:d=["tw-font-sans-bold tw-block tw-text-base tw-mb-4"],...r}=t;return(0,n.jsx)(i.x,{as:e,allowedElements:["label"],unwrapDisallowed:!0,className:(0,a.xW)(o.d[l],s),defaultClasses:d,...r})}},42312:(t,e,l)=>{l.d(e,{Y:()=>x});var n=l(74848),i=l(46942),o=l.n(i),a=l(99618),s=l(72716);let d=t=>{let{selectedLanguage:e}=(0,s.o)();"es_us"===e&&(t="es_ES");let l="";switch(t){case"en_US":case"en_CA":l="Add to cart";break;case"en_UK":l="Add to basket";break;case"de_DE":case"de_AT":l="Ausw\xe4hlen";break;case"es_ES":case"mx_MX":l="Seleccionar";break;case"fr_FR":l="Continuer";break;case"it_IT":l="Continua"}return[l]};var r=l(96540),w=l(15772),c=l(31330),u=l(25478);let v=t=>{let{showLoading:e}=t;return(0,n.jsxs)("div",{className:o()("tw-ml-5 tw-inline-block",{"tw-hidden":!e}),children:[(0,n.jsx)(m,{delay:"0s"}),(0,n.jsx)(m,{delay:".3s"}),(0,n.jsx)(m,{delay:".5s"})]})},m=t=>{let{delay:e}=t;return(0,n.jsx)("span",{style:{animationDelay:e},className:o()("tw-ml-3 tw-inline-block tw-h-5 tw-w-5 tw-animate-circle-loader tw-rounded-3xl tw-bg-white md:tw-ml-5 md:tw-h-10 md:tw-w-10")})},x=t=>{let{link:e=null,buttonText:l=null,className:i=null,productVariance:s="",additioanQueryParams:m="",linkVisible:x=!0,orderLink:f=null,orderLinkNewCheckout:j=null,priceColorColumn:y="",componentType:k="",articleAvailable:N=!0,isDomainArticle:S=!1,cmsIdentifier:C="",priceTemplate:_="",isInsideHFeatureTable:B=!1,children:L,extraBasketData:I={},additionalUrlPath:A="",triggerAddToBasket:E=null,price:T=null,setOffCanvasBasket:R=null,useOrderabilityCheck:M,tooltip:D,hostingServiceKey:P=null,data:U=null,headlines:F=null,highlight:H=null,dropdownDetails:K=null,tableStyle:O=null,isActive:W=!0}=t,z=["grey","white"],[Y]=d((0,w.BH)()),$=p(e,f,j,C,m),V=(0,c.l_)($),[G,J]=(0,r.useState)(!1),[Q,X]=(0,r.useState)(!1),q=async t=>{let l=t.currentTarget.dataset.article;if(R){t.preventDefault(),R(l);return}if(!j.path.startsWith("/server-configuration")||"new"!==(0,u.u)()||null!=E){if(N||e||S){J(!0),h(P);let e=await b(t,s,I,A);window.location.href=e,J(!1)}else t.preventDefault()}},Z=null==_?void 0:_.includes("saving-badge"),tt=(0,r.useRef)(null);return null!=tt.current&&!0===W&&!Q&&k&&P&&(g(tt.current,k,P),X(!0)),(0,n.jsxs)("div",{className:o()("tw-flex tw-flex-col tw-justify-end ".concat(i),{"tw-h-[13rem]":"VerticalFeatureTable"===k,"tw-w-[240px] tw-flex-auto tw-justify-center lg:tw-w-full":"columns"!==k,"[&>div>div]:tw-min-h-[154px] [&>div>div]:tw-justify-end":!Z&&"mini"===O}),"data-cy":"featuretable",ref:tt,children:[""!=_&&(0,n.jsx)("div",{className:o()("",{"tw-text-black":z.includes(y),"tw-h-full":"VerticalFeatureTable"===k}),dangerouslySetInnerHTML:{__html:_}}),x&&(0,n.jsxs)(a.N,{as:B&&!N?"div":"a","aria-label":l||"Add",className:o()("tw-mt-16 tw-w-full tw-cursor-pointer",{"!tw-pointer-events-none !tw-border-disabled !tw-bg-disabled !tw-text-white":!N&&!e&&!S&&!B,"tw-flex !tw-cursor-default tw-justify-center !tw-border-disabled !tw-bg-disabled !tw-text-white hover:!tw-border-disabled hover:!tw-bg-disabled":B&&!N,"tw-flex tw-justify-center":G}),"data-article":C,"data-linkid":"ct.btn.order.".concat(C),"data-available":N,"data-testid":"checkout-button-".concat(C),onClick:q,button:!0,primary:!0,context:z.includes(y)?y:"dark",linkType:"cta",href:S&&C?"".concat("string"!=typeof e&&(null==e?void 0:e.href)):$+V,children:[!B&&(0,n.jsx)("span",{children:l||Y}),B&&!D&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:o()({"tw-mt-1":!N}),children:l}),L]}),B&&D&&(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("span",{className:o()({"tw-mt-[1px]":!N}),children:l||Y}),L]}),(0,n.jsx)(v,{showLoading:G})]})]},"price-template".concat(C))},h=t=>{null!=t&&t.forEach(t=>{var e,l,n,i,o;null===(o=window)||void 0===o||null===(i=o.ionos)||void 0===i||null===(n=i.datalayer)||void 0===n||null===(l=n.events)||void 0===l||null===(e=l.ecommerce)||void 0===e||e.addToCart(t)})},g=(t,e,l)=>{let n=new IntersectionObserver(i=>{i.forEach(i=>{if(i.isIntersecting){var o,a,s,d,r;null===(r=window)||void 0===r||null===(d=r.ionos)||void 0===d||null===(s=d.datalayer)||void 0===s||null===(a=s.events)||void 0===a||null===(o=a.ecommerce)||void 0===o||o.viewItem(e,l),n.unobserve(t)}})});n.observe(t)},b=async function(t,e){let l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";if("new"===(0,u.u)()){t.preventDefault(),t.stopPropagation();let o=t.currentTarget.dataset.article;if(void 0===o||!t.currentTarget.href)return t.currentTarget.href;{var i;let a=null===(i=t.currentTarget)||void 0===i?void 0:i.href;return await (0,c.YG)(o,!1,e,n,{},l),a}}},p=(t,e,l,n,i)=>{let o;let a="/tariffselect?__sendingdata=1&cart.action=add-bundle&cart.bundle=".concat(n,"-bundle").concat(i),s=(()=>{var e;return null!==(e=null!=(o=l&&"/domainshop/search"===l.path&&l.url?l.url.replace("https://my.ionos.","https://www.ionos."):null==l?void 0:l.url)?o:null==t?void 0:t.href)&&void 0!==e?e:a})()+i;if(!s)throw Error("No order link found for new checkout flow");return s}},89212:(t,e,l)=>{l.r(e),l.d(e,{ProductAdvisor:()=>B});var n=l(74848),i=l(37531),o=l(96540),a=l(10306),s=l(23012),d=l(13313),r=l(97904),w=l(32261),c=l(88906),u=l(51220);let v=t=>{let{handleBackButtonClick:e}=t;return(0,n.jsx)("button",{onClick:e,style:{display:"block"},children:(0,n.jsx)("span",{children:(0,n.jsx)("svg",{className:"tw-mb-2 tw-w-32 tw-text-ionos-sky-700",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M10 19l-7-7m0 0l7-7m-7 7h18"})})})})},m=t=>{let{handleRefreshButtonClick:e}=t;return(0,n.jsx)("button",{onClick:e,children:(0,n.jsx)("span",{children:(0,n.jsx)("svg",{className:"tw-mb-2 tw-w-32 tw-text-ionos-sky-700",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:(0,n.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"})})})})};var x=l(62193),h=l.n(x),g=l(60664);let b=t=>{var e,l,i;let{firstLevelItem:o,index:a,handle:s}=t;return(0,n.jsxs)("button",{onClick:()=>{s(o.nextStep)},className:(0,r.xW)("tw-shadow-lg-gray-200 tw-flex tw-flex-row tw-items-center tw-gap-24 tw-rounded-3xl tw-border-3 tw-border-white tw-bg-white tw-px-16 tw-py-32 hover:tw-border-ionos-blue-400 md:tw-flex-col md:tw-justify-center md:tw-gap-32 lg:tw-min-h-200 lg:tw-flex-col lg:tw-justify-center lg:tw-gap-32  flex-grow",{"tw-pointer-events-none tw-cursor-not-allowed tw-opacity-50":h()(o.nextStep)}),children:[(0,n.jsx)(g._,{src:null==o?void 0:null===(e=o.media)||void 0===e?void 0:e.src,alt:null==o?void 0:null===(l=o.media)||void 0===l?void 0:l.alt,className:"tw-max-h-50 tw-rounded-40"}),(0,n.jsx)("p",{children:null===(i=o.label)||void 0===i?void 0:i.value},a)]},a)},p=t=>{let{steps:e=[],handle:l,handleBackButtonClick:i,backgroundImg:o,AnimationKey:x,handleRefreshButtonClick:h}=t,g=(0,w.dv)("lg");return(0,n.jsx)(c.N,{exitBeforeEnter:!0,initial:!0,children:(0,n.jsx)(u.P.div,{initial:{x:1500,opacity:0},animate:{x:0,opacity:1},transition:{duration:.5},children:e.map((t,e)=>{var w,c,u,x,p,f,j,y,k,N,S,C;return(0,n.jsx)("div",{className:"tw-mx-auto tw-my-40 tw-mb-[4.9rem] tw-h-1/2 tw-max-w-4xl tw-px-24 tw-py-48 tw-text-center tw-text-ionos-blue-900 tw-shadow-xl lg:tw-h-[36rem] lg:tw-w-[84rem] lg:tw-px-28 lg:tw-py-32",style:{backgroundImage:'url("'.concat(o,'")'),backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:"35px",height:""},children:(0,n.jsxs)("div",{className:"tw-space-between tw-mb-[2.7rem] tw-flex tw-flex-col tw-font-overpass-regular",children:[(0,n.jsxs)("div",{className:"tw-flex",children:[(0,n.jsx)("div",{children:(0,n.jsx)(v,{handleBackButtonClick:i})}),(0,n.jsx)("div",{className:"tw-flex-grow"}),(0,n.jsx)("div",{children:(0,n.jsx)(m,{handleRefreshButtonClick:h})})]}),(0,d.dM)(null===(w=t.content)||void 0===w?void 0:w.headline)&&(0,n.jsx)(a.$,{className:"tw-mb-10 tw-flex tw-justify-center tw-text-2xl tw-font-bold md:tw-text-xl",children:null===(u=t.content)||void 0===u?void 0:null===(c=u.headline)||void 0===c?void 0:c.value}),(0,d.dM)(null===(x=t.content)||void 0===x?void 0:x.subheadline)&&(0,n.jsx)(s.S,{className:"tw-sans-regular tw-mb-10 tw-flex tw-justify-center tw-font-overpass-semibold tw-text-lg tw-font-normal tw-leading-22 tw-text-cool-grey-700 md:tw-text-xl lg:tw-mb-32",children:null===(f=t.content)||void 0===f?void 0:null===(p=f.subheadline)||void 0===p?void 0:p.value}),(0,n.jsx)("div",{className:(0,r.xW)("tw-grid md:tw-grid-rows-1 lg:tw-grid-rows-1 tw-grid-rows-".concat(null===(j=t.content)||void 0===j?void 0:j.items.length," tw-grid-cols-").concat(null===(y=t.content)||void 0===y?void 0:y.items.length," md:tw-grid-cols-").concat(null===(k=t.content)||void 0===k?void 0:k.items.length," lg:tw-grid-cols-").concat(null===(N=t.content)||void 0===N?void 0:N.items.length," tw-mt-44 tw-gap-16 lg:tw-gap-20"),{"tw-flex tw-flex-col":!g}),children:null===(C=t.content)||void 0===C?void 0:null===(S=C.items)||void 0===S?void 0:S.map((t,e)=>(0,n.jsx)(b,{firstLevelItem:t,index:e,handle:l},"stepElement".concat(e)))})]})},"stepElement".concat(e))})},x)},x)};var f=l(18532),j=l(31330),y=l(99618),k=l(42312);let N=t=>{var e,l,i,a,s,d,r,w,c,u,v,m,x,h,g,b,p,f,j,N;let{price:S,finalSteps:C}=t,[_,B]=(0,o.useState)(""),[L,I]=(0,o.useState)(""),A=(null==S?void 0:S.customizable)||!1;return(0,o.useEffect)(()=>{var t,e;let l=window.sessionStorage.getItem("cart.article"),n=window.sessionStorage.getItem("datacenterId");(null===(e=UNOUNO)||void 0===e?void 0:null===(t=e.params)||void 0===t?void 0:t.slug)&&(I("&pageName=".concat(UNOUNO.params.slug)),n&&B((l?"&datacenter="+n:"")+(A?"&external":"")))},[A]),(0,n.jsxs)("div",{className:"tw-ml-auto tw-mt-24 tw-flex tw-min-w-1/3 tw-flex-col tw-space-y-20 tw-self-end lg:tw-mt-0",children:[S&&(0,n.jsx)("div",{className:"tw-flex tw-flex-col tw-items-center tw-space-y-10 tw-rounded-3xl tw-bg-black tw-bg-opacity-20 tw-p-12 tw-py-40 tw-font-overpass-regular",children:(0,n.jsx)("div",{className:"tw-flex tw-items-end tw-space-x-6",children:(0,n.jsx)("span",{className:"tw-text-sm tw-font-bold",children:S&&(0,n.jsx)("span",{dangerouslySetInnerHTML:{__html:S[0].priceHtmlTemplate}})})})}),(0,n.jsx)(k.Y,{tooltip:null==S?void 0:S.tooltip,price:S,additioanQueryParams:_+L,articleAvailable:null==S?void 0:S.available,isDomainArticle:!1,cmsIdentifier:null==C?void 0:null===(e=C.items[0])||void 0===e?void 0:e.article,orderLink:Array.isArray(null==C?void 0:null===(l=C.items[0])||void 0===l?void 0:l.articles)?null==C?void 0:null===(a=C.items[0])||void 0===a?void 0:null===(i=a.articles[0])||void 0===i?void 0:i.orderLink:null==C?void 0:null===(d=C.items[0])||void 0===d?void 0:null===(s=d.articles)||void 0===s?void 0:s.orderLink,orderLinkNewCheckout:Array.isArray(null==C?void 0:null===(r=C.items[0])||void 0===r?void 0:r.articles)?null==C?void 0:null===(c=C.items[0])||void 0===c?void 0:null===(w=c.articles[0])||void 0===w?void 0:w.orderLinkNewCheckout:null==C?void 0:null===(v=C.items[0])||void 0===v?void 0:null===(u=v.articles)||void 0===u?void 0:u.orderLinkNewCheckout,hostingServiceKey:Array.isArray(null==C?void 0:null===(m=C.items[0])||void 0===m?void 0:m.articles)?null==C?void 0:null===(h=C.items[0])||void 0===h?void 0:null===(x=h.articles[0])||void 0===x?void 0:x.hostingServiceKey:null==C?void 0:null===(b=C.items[0])||void 0===b?void 0:null===(g=b.articles)||void 0===g?void 0:g.hostingServiceKey,componentType:"product-advisor",className:"",priceTemplate:""}),(0,n.jsx)(y.N,{...null==C?void 0:C.items[0].secondaryLink,context:"dark",href:null==C?void 0:null===(f=C.items[0])||void 0===f?void 0:null===(p=f.secondaryLink)||void 0===p?void 0:p.url,children:(0,n.jsx)("span",{className:"tw-text-base",children:null==C?void 0:null===(N=C.items[0])||void 0===N?void 0:null===(j=N.secondaryLink)||void 0===j?void 0:j.title})})]})};var S=l(62269);let C=t=>{let{steps:e=[],handleBackButtonClick:l,handleRefreshButtonClick:i,backgroundImg:r}=t,[w,c]=(0,o.useState)(null);return(0,o.useEffect)(()=>{(async()=>await (0,j.K3)((0,j.JA)(e,w,"articleId",[],!1),"FULL_DISCLOSURE_CROSS_PRICE"))().then(t=>{c(t)})},[e]),(0,n.jsxs)("div",{className:"tw-mx-auto tw-my-40 tw-mb-[4.9rem] tw-h-1/2 tw-max-w-4xl tw-px-24 tw-py-48 tw-text-center tw-text-ionos-blue-900 tw-shadow-xl lg:tw-h-[42rem] lg:tw-w-[84rem] lg:tw-px-28 lg:tw-py-32",style:{backgroundImage:'url("'.concat(r,'")'),backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:"35px"},children:[(0,n.jsxs)("div",{className:"tw-flex",children:[(0,n.jsx)("div",{children:(0,n.jsx)(v,{handleBackButtonClick:l})}),(0,n.jsx)("div",{className:"tw-flex-grow"}),(0,n.jsx)("div",{children:(0,n.jsx)(m,{handleRefreshButtonClick:i})})]}),e.map(t=>{var e,l,i,o,r,c,u,v,m,x,h,g,b,p,j,y,k;let C=null,_=null===(e=t.content)||void 0===e?void 0:e.content,B=t.content;return C=_||B,(0,n.jsxs)("div",{className:"tw-flex tw-flex-col tw-font-overpass-regular",children:[(0,d.dM)(null==C?void 0:C.headline)&&(0,n.jsx)(a.$,{className:"tw-flex tw-justify-center tw-text-2xl tw-font-bold md:tw-text-xl",children:null==C?void 0:null===(l=C.headline)||void 0===l?void 0:l.value}),(0,d.dM)(null==C?void 0:C.subheadline)&&(0,n.jsx)(s.S,{className:"tw-sans-regular tw-mb-10 tw-flex tw-justify-center tw-text-left tw-font-overpass-semibold tw-text-lg tw-font-normal tw-leading-22 tw-text-cool-grey-700 md:tw-text-xl lg:tw-mb-32",children:null==C?void 0:null===(i=C.subheadline)||void 0===i?void 0:i.value}),C.items&&(0,n.jsxs)("div",{className:"tw-relative tw-mb-20 tw-rounded-md tw-bg-gradient-to-r tw-from-ionos-blue-700 tw-to-ionos-blue-600 tw-px-32 tw-py-32 tw-text-white md:tw-flex md:tw-px-44 lg:tw-mx-40 lg:tw-flex lg:tw-px-44",children:[(0,n.jsx)("span",{className:"tw-absolute tw--top-12 tw-left-16 tw-rounded-full tw-bg-yellow-300 tw-px-14 tw-pt-1 tw-font-sans-bold tw-text-sm tw-text-ionos-blue-900",children:null===(o=C.badge)||void 0===o?void 0:o.value}),(0,n.jsxs)("div",{className:"tw-mr-20 tw-max-w-md tw-text-center md:tw-text-left",children:[(0,d._B)(null==C?void 0:null===(r=C.items[0])||void 0===r?void 0:r.preline)&&(0,n.jsx)(s.S,{className:"tw-text-left tw-font-overpass-semibold tw-text-lg md:tw-text-xl",children:null==C?void 0:null===(u=C.items[0])||void 0===u?void 0:null===(c=u.preline)||void 0===c?void 0:c.value}),(0,d.dM)(null==C?void 0:null===(v=C.items[0])||void 0===v?void 0:v.headline)&&(0,n.jsx)(a.$,{className:"tw-text-left tw-font-overpass-semibold tw-text-xl md:tw-text-lg",children:null==C?void 0:null===(x=C.items[0])||void 0===x?void 0:null===(m=x.headline)||void 0===m?void 0:m.value}),null==C?void 0:null===(p=C.items)||void 0===p?void 0:null===(b=p[0])||void 0===b?void 0:null===(g=b.bulletPoints)||void 0===g?void 0:null===(h=g.value)||void 0===h?void 0:h.map((t,e)=>{let l=t.startsWith("/")?t.substring(1):t.trim();return l&&(0,n.jsx)("ul",{className:"tw-pt-10",style:{listStyleType:"none",paddingLeft:"0"},children:(0,n.jsxs)("li",{className:"tw-mb-10 tw-flex tw-items-center",children:[(0,n.jsx)("img",{src:S.K5,alt:"",className:"tw-mr-10 tw-flex before:tw-absolute before:tw-left-0 before:tw-top-0 before:tw-h-42 before:tw-w-24 before:tw-bg-checkmark"}),l]})},e)}),(0,d._B)(null==C?void 0:null===(j=C.items[0])||void 0===j?void 0:j.text)&&(0,n.jsx)(f.E,{className:"tw-pb-10 tw-pt-10 tw-text-left tw-font-overpass-semibold tw-text-base",children:null==C?void 0:null===(k=C.items[0])||void 0===k?void 0:null===(y=k.text)||void 0===y?void 0:y.value})]}),(0,n.jsx)(N,{price:w,finalSteps:C})]})]})})]})},_=t=>{let{headline:e,subheadline:l,classNameH:i,classNameS:o}=t;return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("p",{className:i,children:e}),(0,n.jsx)("p",{className:o,children:l})]})},B=(0,o.memo)((0,i.n)(t=>{let e,{headline:l,subheadline:i,steps:a=[],image:s,startButtonLabel:d,StepImage:r}=t,[w,v]=(0,o.useState)("home"),[m,x]=(0,o.useState)([]),[h,g]=(0,o.useState)([]),b=1+99*Math.random(),f=t=>{var e,l;(null===(e=t[0])||void 0===e?void 0:e.type)==="product_advisor_tariff_result"||"price_wrapper"===t[0].type&&(null===(l=t[0])||void 0===l?void 0:l.type)!=void 0?(v("end"),x(t)):(v("step"),x(t),g([...h,t]))},j=()=>{h.length?"end"===w?(v("step"),x(h[h.length-1])):"step"===w&&(v("step"),g(t=>t.slice(0,-1)),h[h.length-2]?x(h[h.length-2]):v("home")):v("home")},y=()=>{v("home")};return e="home"===w?(0,n.jsx)("div",{className:"tw-mx-auto tw-my-40 tw-h-1/2 tw-max-w-4xl tw-px-24 tw-py-48 tw-text-center tw-text-ionos-blue-900 lg:tw-mb-72 lg:tw-h-[36rem] lg:tw-w-[84rem] lg:tw-px-28 lg:tw-py-32",style:{backgroundImage:'url("'.concat(null==s?void 0:s.src,'")'),backgroundRepeat:"no-repeat",backgroundSize:"cover",borderRadius:"35px"},children:(0,n.jsx)("div",{className:"tw-px-12 lg:tw-my-40 lg:tw-p-96",children:(0,n.jsxs)("div",{className:"tw-inline-block lg:tw-mt-48",children:[(0,n.jsx)(_,{headline:null==l?void 0:l.value,subheadline:null==i?void 0:i.value,classNameH:"tw-text-lg md:tw-text-xl tw-font-bold tw-font-overpass-regular tw-mb-24 tw-text-white",classNameS:"tw-text-base md:tw-text-lg tw-mb-28 tw-font-overpass-regular tw-text-white"}),(0,n.jsx)("button",{onClick:()=>f(a),className:"tw-w-auto tw-rounded-full tw-border-3 tw-border-white tw-bg-white tw-px-28 tw-py-8 tw-font-sans-bold tw-text-base tw-leading-8 tw-text-ionos-blue-900 tw-outline-none hover:tw-border-ionos-blue-100 hover:tw-bg-blue-100 focus:tw-outline-none active:tw-bg-white md:tw-text-lg lg:tw-w-240",children:null==d?void 0:d.value})]})})}):"step"===w?(0,n.jsx)(p,{handleBackButtonClick:j,handleRefreshButtonClick:y,steps:m,backgroundImg:null==r?void 0:r.src,handle:f,AnimationKey:"next-step-".concat(b)}):(0,n.jsx)(C,{handleBackButtonClick:j,handleRefreshButtonClick:y,backgroundImg:null==r?void 0:r.src,steps:m}),(0,n.jsx)(c.N,{initial:!0,children:(0,n.jsx)(u.P.div,{initial:{x:1500,opacity:0},animate:{x:0,opacity:1},transition:{duration:.5},children:e},"".concat(w,"-").concat(m.length))})},{handlePreComponentContainerContents:!1,contextColor:{dark:"tw-w-full tw-bg-ionos-blue-900 tw-text-white",blue:"tw-w-full tw-bg-ionos-blue-600 tw-text-white",darkBlue:"tw-w-full tw-bg-ionos-blue-700 tw-text-white",midnightBlue:"tw-w-full tw-bg-ionos-blue-800 tw-text-white",midnightBlackBlue:"tw-w-full tw-bg-ionos-blue-900 tw-text-white",grey:"tw-w-full tw-bg-cool-grey-100 tw-text-cool-grey-700",white:"tw-w-full tw-bg-white tw-text-cool-grey-700"}}))}}]);