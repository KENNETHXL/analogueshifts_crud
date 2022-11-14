import{r as l,u as d,a as e,j as r,L as s,H as p}from"./app.10251d14.js";import{A as u}from"./AuthenticatedLayout.25754b88.js";import{G as f}from"./Navbar.b0cf2499.js";import{a as t}from"./index.esm.e8e47f9c.js";import{d as c}from"./index.esm.09d5fb3b.js";import{b as o}from"./index.esm.b63effd8.js";import"./iconBase.7aba668f.js";function h(){return l.exports.useRef(),l.exports.useState(!1),d().props.auth.user,e("div",{className:"",children:r("div",{className:"grid md:grid-cols-3 md:justify-center gap-2",children:[r(s,{href:route("learn.index"),className:"flex justify-center gap-3 border items-center p-5 w-full rounded-lg bg-orange-400",children:[e(t,{className:"w-12 h-12 border rounded-full p-2"}),e("span",{className:"",children:"Learn Dashboard"})]}),r(s,{href:route("blog.index"),className:"flex justify-center gap-3 border items-center p-5 w-full rounded-lg bg-amber-400",children:[e(c,{className:"w-12 h-12 border rounded-full p-2"}),e("span",{className:"",children:"Blog Dashboard"})]}),r(s,{href:route("learn.index"),className:"flex justify-center gap-3 border items-center p-5 w-full rounded-lg bg-green-400",children:[e(o,{className:"w-12 h-12 border rounded-full p-2"}),e("span",{className:"",children:"Payments"})]})]})})}function g(){return l.exports.useRef(),l.exports.useState(!1),d().props.auth.user,e("div",{className:"",children:r("div",{className:"grid md:grid-cols-3 justify-center gap-2",children:[r(s,{href:route("learn.all"),className:"flex justify-center gap-3 border items-center p-5 w-full bg-orange-400",children:[e(t,{}),e("span",{className:"p-2",children:"Learn"})]}),r(s,{href:route("blogs"),className:"flex justify-center gap-3 border items-center p-5 w-full bg-amber-400",children:[e(c,{}),e("span",{className:"p-2",children:"Blog"})]}),r(s,{href:route("learn"),className:"flex justify-center gap-3 border items-center p-5 w-full bg-green-400",children:[e(o,{}),e("span",{className:"p-2",children:"Make Payments"})]})]})})}function A(m){var n,i;const a=d().props.auth;return r(u,{errors:m.errors,children:[e(p,{title:"Dashboard"}),e("div",{className:"min-h-screen py-12",children:r("div",{className:"grid gap-3 max-w-7xl mx-auto px-3 md:px-8",children:[r("div",{className:"grid md:flex md:justify-between bg-white overflow-hidden shadow-sm sm:rounded-lg",children:[e("div",{className:"p-6 bg-white border-b border-gray-200",children:"Welcome Back, We miss you!"}),r(s,{href:route("profile"),className:"flex justify-between gap-3 items-center p-2 md:p-0",children:[e("span",{children:(n=a==null?void 0:a.user)==null?void 0:n.name}),e("span",{className:"border rounded-full p-5",children:e(f,{className:"h-7 w-7 text-gray-700"})})]})]}),e("div",{className:"",children:((i=a==null?void 0:a.user)==null?void 0:i.role)=="admin"?e(h,{}):e(g,{})})]})})]})}export{A as default};
