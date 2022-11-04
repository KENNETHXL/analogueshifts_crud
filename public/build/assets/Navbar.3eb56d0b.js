import{R as d,a as e,L as n,r as h,u,j as o}from"./app.02bef50a.js";import{G as a}from"./iconBase.ad77547f.js";import{B as v,a as f}from"./index.esm.229b7d63.js";d.createContext();function r({method:t="get",as:s="a",href:l,active:i=!1,children:c}){return e(n,{method:t,as:s,href:l,className:`text-xl capitalize font-medium hover:pl-5 py-3 hover:border-l-8 w-full hover:border-yellow-400 hover:text-yellow-400 ${i?"text-xl capitalize font-medium p-3 hover:pl-5 py-3 border-l-8 w-full border-yellow-400 rounded bg-yellow-200 text-yellow-400 ":"text-xl capitalize font-medium pl-5 py-3 hover:border-l-8 w-full hover:border-yellow-400 hover:text-yellow-400"} hover:border-l-8 w-full hover:border-yellow-400 hover:text-yellow-400 transition duration-150 ease-in-out`,children:c})}function p(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M3,3 L21,21 M3,21 L21,3"}}]})(t)}function L(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M6,3 L18,3 L22,9 L12,21 L2,9 L6,3 Z M2,9 L22,9 M11,3 L7,9 L12,20 M13,3 L17,9 L12,20"}}]})(t)}function w(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",stroke:"#000",strokeWidth:"2",d:"M8,11 C10.7614237,11 13,8.76142375 13,6 C13,3.23857625 10.7614237,1 8,1 C5.23857625,1 3,3.23857625 3,6 C3,8.76142375 5.23857625,11 8,11 Z M14.6431888,15.6961461 C14.3091703,14.6675626 13.7524493,13.7598949 13.0233822,13.0234994 C11.7718684,11.7594056 10.0125018,11 8,11 C4,11 1,14 1,18 L1,23 L11,23 M12,18.8235294 L16.1904762,22 L23,13"}}]})(t)}function M(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M7 5h10v2h2V3c0-1.1-.9-1.99-2-1.99L7 1c-1.1 0-2 .9-2 2v4h2V5zm8.41 11.59L20 12l-4.59-4.59L14 8.83 17.17 12 14 15.17l1.41 1.42zM10 15.17L6.83 12 10 8.83 8.59 7.41 4 12l4.59 4.59L10 15.17zM17 19H7v-2H5v4c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2v-4h-2v2z"}}]})(t)}function N(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M7.41 8.59L12 13.17l4.59-4.58L18 10l-6 6-6-6 1.41-1.41z"}}]})(t)}function g(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0z"}},{tag:"path",attr:{d:"M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"}}]})(t)}function z(t){return a({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{fill:"none",d:"M0 0h24v24H0V0z"}},{tag:"path",attr:{d:"M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z"}}]})(t)}function y({Guest:t}){const s=h.exports.useRef(),[l,i]=h.exports.useState(!1),c=u().props.auth.user;return e("nav",{ref:s,className:"navbar "+(l&&"active"),children:o("div",{className:"wrapper",children:[o(n,{href:"/",className:"logo",children:[e("img",{src:"logo.png",className:"w-12 h-12",alt:""}),o("h3",{className:"md:text-xl text-lg font-bold uppercase text-zinc-600 leading-5",children:[e("span",{className:"tracking-widest text-yellow-400",children:"Analogue"}),e("br",{}),e("span",{className:"tracking-[1rem]",children:"Shifts"})]})]}),o("div",{className:"flex gap-3 items-center",children:[c?e(n,{className:"border rounded-full p-3 text-gray-700 hover:text-red-500",href:route("logout"),method:"post",as:"button",children:e(v,{className:"text-xl"})}):e(n,{href:route("login"),className:"border rounded-full p-3 text-gray-700 hover:text-green-500",children:e(f,{className:"text-xl"})}),e("button",{onClick:()=>i(!l),className:"close-btn",children:l?e(p,{}):e(g,{})})]}),o("div",{className:"nav-menu",children:[e(r,{href:route("dashboard"),active:route().current("dashboard"),children:"Dashboard"}),e(r,{href:route("vetting"),active:route().current("vetting"),children:"talent as a service"}),e(r,{href:route("blog"),active:route().current("blog"),children:"news"}),e(r,{href:route("about"),active:route().current("about"),children:"about"}),e(r,{href:route("learn"),active:route().current("learn"),children:"Learn"}),e(r,{href:route("vets"),active:route().current("vets"),children:"vet your talent"}),e(r,{href:route("talents"),active:route().current("talents"),className:"find",children:"hire talent"}),e(r,{href:route("package"),active:route().current("package"),children:"Premium plans"}),e(r,{href:route("profile"),active:route().current("profile"),children:"profile"})]})]})})}export{p as G,g as M,y as N,r as a,z as b,w as c,M as d,L as e,N as f};
