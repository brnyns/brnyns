"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3682],{11060:(e,t,l)=>{l.d(t,{Td:()=>i});var r=l(74848),d=l(62269),n=l(97904),o=l(88292),a=l(60664);let i=e=>{var t;let{className:l,border:i,align:s,...w}=e;return(0,r.jsx)(o.x,{as:"td",unwrapDisallowed:!0,components:{checkmark:()=>(0,r.jsx)("div",{className:(0,n.xW)("tw-flex tw-justify-center",{"tw-justify-start":"left"===s}),children:(0,r.jsx)(a._,{src:d.xb,role:"presentation",alt:"",height:28,width:28})}),cross:()=>(0,r.jsx)("div",{className:(0,n.xW)("tw-flex tw-justify-center",{"tw-justify-start":"left"===s}),children:(0,r.jsx)(a._,{src:d.Ww,role:"presentation",alt:"",height:28,width:28})})},align:s,className:(0,n.xW)("tw-whitespace-normal tw-px-5 tw-py-16 tw-align-top tw-break-word md:tw-break-keep md:tw-p-16",{"tw-border-cool-grey-1000":i,"tw-text-left":"left"===s,"tw-text-center":"center"===s,"!tw-py-24":null===(t=String(null==w?void 0:w.children))||void 0===t?void 0:t.includes("cta2:")},l),...w})}},80029:(e,t,l)=>{l.d(t,{X:()=>a});var r=l(74848),d=l(97904),n=l(88292),o=l(11060);let a=e=>{let{className:t,align:l,...o}=e;return(0,r.jsx)(n.x,{as:"table",applyMarkdown:!1,align:l,className:(0,d.xW)("tw-w-full tw-table-fixed tw-border-grey-200",t),...o})};a.Tr=e=>{let{className:t,border:l,...o}=e;return(0,r.jsx)(n.x,{as:"tr",applyMarkdown:!1,className:(0,d.xW)({"tw-border-b-1 tw-border-t-1 tw-border-grey-200 tw-text-base":l},t),...o})},a.Th=e=>{let{className:t,align:l,...o}=e;return(0,r.jsx)(n.x,{as:"th",unwrapDisallowed:!0,disallowedElements:["p"],className:(0,d.xW)("tw-text-16 tw-font-overpass tw-bg-ionos-blue-600 tw-px-5 tw-py-16 tw-align-top tw-font-semibold tw-leading-5 tw-text-white md:tw-p-16 md:tw-break-word",t,{"md:tw-text-left":"left"===l,"md:tw-text-center":"center"===l||""===l||void 0===l}),...o})},a.Td=o.Td,a.Tbody=e=>{let{className:t,...l}=e;return(0,r.jsx)(n.x,{as:"tbody",applyMarkdown:!1,className:(0,d.xW)("tw-border-cool-grey-1000",t),...l})},a.Thead=e=>{let{className:t,...l}=e;return(0,r.jsx)(n.x,{as:"thead",applyMarkdown:!1,className:(0,d.xW)("tw-border-cool-grey-1000",t),...l})},a.Tfoot=e=>{let{...t}=e;return(0,r.jsx)(n.x,{as:"tfoot",applyMarkdown:!1,...t})}},36425:(e,t,l)=>{l.d(t,{X:()=>m});var r=l(74848),d=l(10306),n=l(80029),o=l(13313),a=l(36345),i=l(56449),s=l.n(i),w=l(62193),c=l.n(w),u=l(69843),x=l.n(u),h=l(42312),b=l(96540);let m=e=>{let{className:t,thead:l,style:i,tbody:w,textAlignment:u,colorScheme:m,tableAlignment:v,headline:p,subheadline:g,colorSchemeChildren:j,accordion:y}=e,[f,k]=(0,b.useState)(null),N=[];null==w||w.forEach(e=>{var t,r,d,n,o;return N.push({head:null===(t=e.cells[0])||void 0===t?void 0:t.value,rowKey:null==l?void 0:null===(d=l[0])||void 0===d?void 0:null===(r=d.cells)||void 0===r?void 0:r.map(e=>e.value),rowValue:null===(n=e.cells)||void 0===n?void 0:n.map((e,t)=>0!==t?e.value:""),rowLink:null===(o=e.cells)||void 0===o?void 0:o.map((e,t)=>0!==t?e.link:void 0)})});let T=e=>"left"===u||"left"===v?"left":"center"===u||"center"===v?"center":"left",X=(e,t)=>{var l,d,n,o;return x()(t)?e:(0,r.jsx)(h.Y,{link:"",buttonText:null==t?void 0:t.title,priceTemplate:"",className:"",articleAvailable:!0,isDomainArticle:!1,cmsIdentifier:void 0!==(null==t?void 0:null===(l=t.article)||void 0===l?void 0:l.articleId)?t.article.articleId:"",orderLink:null==t?void 0:null===(d=t.article)||void 0===d?void 0:d.orderLink,orderLinkNewCheckout:null==t?void 0:null===(n=t.article)||void 0===n?void 0:n.orderLinkNewCheckout,price:null==t?void 0:null===(o=t.article)||void 0===o?void 0:o.price})},W=(0,r.jsx)(r.Fragment,{children:N.map(e=>{var t,l;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.X.Thead,{className:(0,a.x)({"":"dotted"===i}),children:(0,r.jsx)(n.X.Tr,{children:(0,r.jsx)(n.X.Th,{align:"",colSpan:2,className:(0,a.x)("tw-rounded-l-lg tw-rounded-r-lg",{"tw-bg-ionos-blue-800":"dark"===m,"tw-text-left":"left"===u||"left"===v,"tw-text-center":"Center"===u||"center"===v}),children:e.head})})}),(0,r.jsx)(n.X.Tbody,{children:void 0!=e.rowKey?(0,r.jsx)(r.Fragment,{children:null===(t=e.rowKey)||void 0===t?void 0:t.map((t,l,d)=>""!=t?(0,r.jsx)(n.X.Tr,{border:!0,className:(0,a.x)("tw-mb-5",{"tw-border-0":l+1==(null==d?void 0:d.length),"tw-border-opacity-20":"dark"===m}),children:""!=e.rowValue[l]?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.X.Td,{children:t}),(0,r.jsx)(n.X.Td,{children:X(e.rowValue[l],e.rowLink[l])})]}):(0,r.jsx)(n.X.Td,{colSpan:2,children:t})},"rowKey-tr-".concat(l,"-").concat(d)):"")}):(0,r.jsx)(r.Fragment,{children:null===(l=e.rowValue)||void 0===l?void 0:l.map((e,t,l)=>""!=e?(0,r.jsx)(n.X.Tr,{border:!0,className:(0,a.x)("tw-mb-5",{"tw-border-0":t+1==(null==l?void 0:l.length)}),children:(0,r.jsx)(n.X.Td,{colSpan:2,children:e})},"rowValue-tr-".concat(t,"-").concat(l)):"")})})]})})});return(0,r.jsxs)(r.Fragment,{children:[(0,o.dM)(p)&&(0,r.jsx)(d.$,{size:"heading-3xl",as:(null==p?void 0:p.tag)||"span",className:"tw-font-overpass-semibold",children:p.value}),(0,o.dM)(g)&&(0,r.jsx)(d.$,{size:"heading-xl",className:"tw-mt-12 tw-font-overpass-semibold",children:g.value}),(0,r.jsx)("div",{className:"tw-mb-48 tw-mt-20 tw-hidden tw-rounded-lg tw-border-1 tw-border-grey-200 tw-bg-white tw-text-ionos-blue-800 lg:tw-block",children:(0,r.jsxs)(n.X,{className:(0,a.x)(t,"tw-overflow-hidden",{"":"dotted"===i,"tw-border-opacity-60":"dark"===m}),children:[s()(l)&&!c()(l)&&(0,r.jsx)(n.X.Thead,{className:(0,a.x)({"":"dotted"===i}),children:l.map(e=>{let{id:t,cells:l}=e;return(0,r.jsx)(n.X.Tr,{children:l.map((e,t)=>{let{colSpan:d=0,value:o,id:i}=e;return(0,r.jsx)(n.X.Th,{colSpan:d>0?d:void 0,className:(0,a.x)("tw-relative",{"tw-border-r-0":t+1===(null==l?void 0:l.length),"tw-rounded-tl-lg":0===t,"tw-rounded-tr-lg":t===(null==l?void 0:l.length)-1,"tw-border-opacity-20 tw-bg-ionos-blue-800":"dark"===m}),align:T(t),children:o},i)})},t)})},"thead"),s()(w)&&!c()(w)&&(0,r.jsx)(n.X.Tbody,{children:w.map((e,t)=>{let{id:l,cells:d}=e,o=t===w.length-1;return(0,r.jsx)(n.X.Tr,{border:"dotted"!==i,className:(0,a.x)({"tw-border-t-0":0===t,"tw-border-b-0":t+1===w.length,"tw-border-opacity-20":"dark"===m,"tw-bg-ionos-blue-800 tw-text-ionos-blue-100":"dark"===j,"tw-bg-blue-50":f===t,"tw-bg-ionos-blue-1000":f===t&&"dark"===j}),onMouseEnter:()=>y?k(t):null,onMouseLeave:()=>y?k(null):null,children:d.map((e,t)=>{let{colSpan:l=0,value:i,id:s,link:w}=e;return(0,r.jsx)(n.X.Td,{className:(0,a.x)("",{"tw-border-opacity-20":"dark"===m,"tw-text-left":0===t&&!u||"left"===v||"left"===u||""===v||""===u,"tw-text-center":"center"===v||"center"===u,"tw-rounded-bl-lg":o&&0===t,"tw-rounded-br-lg":o&&t===d.length-1}),colSpan:l>0?l:void 0,border:!!t,applyMarkdown:x()(w),children:X(i,w)},s)})},l)})},"tbody")]})}),(0,r.jsx)("div",{className:"tw-container tw-mb-12 tw-block tw-rounded-lg tw-border-1 tw-border-cool-grey-200 tw-border-opacity-60 tw-p-12 lg:tw-hidden lg:tw-p-24",children:(0,r.jsx)(n.X,{className:(0,a.x)(t,{" ":"dotted"===i}),children:W})})]})}},53682:(e,t,l)=>{l.r(t),l.d(t,{MultiTable:()=>m});var r=l(74848),d=l(99618),n=l(39661),o=l(37531),a=l(13313),i=l(36345),s=l(62193),w=l.n(s),c=l(96540),u=l(99096),x=l(36425),h=l(97904);let b=e=>{let{table:t,textAlignment:l,context:d,index:n,tableAlignment:o,colorSchemeChildren:a}=e;return(0,r.jsx)("div",{className:"tw-my-20",children:(0,r.jsx)("div",{className:(0,h.xW)("tw-justify-center md:tw-flex-nowrap"),children:t&&(0,r.jsx)(x.X,{colorSchemeChildren:a,tableLayout:null==t?void 0:t.tableLayout,style:null==t?void 0:t.style,className:(0,h.xW)({"":n}),thead:t.thead,tbody:t.tbody,headline:null==t?void 0:t.headline,subheadline:null==t?void 0:t.subheadline,colorScheme:d,tableAlignment:o,textAlignment:l},"tables".concat(n))})})},m=(0,c.memo)((0,o.n)(e=>{let{items:t,footnote:l,link:o,textAlignment:a,context:s,colorSchemeChildren:w}=e;return(0,r.jsxs)("div",{className:"tw-mt-20",children:[null==t?void 0:t.map((e,t)=>{let{table:l}=e;return(0,r.jsx)(r.Fragment,{children:(0,r.jsx)("div",{children:null==l?void 0:l.map(e=>(0,r.jsx)(r.Fragment,{children:(null==e?void 0:e.tableLayout)==="comparing"?(0,r.jsx)(u.Z,{table:e,context:s,colorSchemeChildren:w,textAlignment:a}):(0,r.jsx)("div",{className:(0,i.x)("tw-w-full md:tw-w-auto",{"tw-mt-32 md:tw-mt-0":!!t}),children:(0,r.jsx)(b,{colorSchemeChildren:w,table:e,context:s,index:t,textAlignment:a})},"TableContainer".concat(t))}))})})}),l&&(0,r.jsx)("div",{className:(0,i.x)("tw-container tw-mb-24 !tw-pl-0"),children:(0,r.jsx)(n.o,{components:{a:e=>{let{href:t,children:l,button:n,primary:o}=e;return(0,r.jsx)(d.N,{className:(0,i.x)("",{"tw-text-white":"dark"===s}),button:n,primary:o,href:t,target:t.startsWith("http")?"_blank":void 0,children:l})}},children:l.value})}),(0,r.jsx)(d.N,{context:s,...o,children:null==o?void 0:o.title})]})},{considerGapProperties:!0,fullWidth:!0,contextColor:{dark:"tw-w-full tw-bg-ionos-blue-900 tw-text-white",blue:"tw-w-full tw-bg-ionos-blue-600 tw-text-white",darkBlue:"tw-w-full tw-bg-ionos-blue-700 tw-text-white",midnightBlue:"tw-w-full tw-bg-ionos-blue-800 tw-text-white",midnightBlackBlue:"tw-w-full tw-bg-ionos-blue-900 tw-text-white",grey:"tw-w-full tw-bg-cool-grey-100 tw-text-cool-grey-700",white:"tw-w-full tw-bg-white tw-text-cool-grey-700"},renderIfNotAbsent:e=>{let{headline:t,text:l,items:r,link:d}=e;return(0,a.dM)(t)||(0,a._B)(l)||(0,a.lU)(d)||!w()(r)}}))}}]);