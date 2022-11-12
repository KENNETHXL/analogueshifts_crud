import{u as o,a as e,j as r}from"./app.ad36974c.js";import{A as s}from"./AuthenticatedLayout.108df26b.js";import"./Navbar.9d534c13.js";import"./iconBase.8e51450e.js";import"./index.esm.9cfe9b8b.js";function g(){var a,d;const l=o().props.auth;return e(s,{children:e("div",{className:"min-h-screen py-12",children:r("div",{className:"max-w-7xl mx-auto px-3 md:px-8",children:[e("div",{className:"bg-white overflow-hidden shadow-sm sm:rounded-lg",children:e("div",{className:"p-6 bg-white border-b border-gray-200",children:"Welcome Back, We miss you!"})}),r("div",{className:"grid md:grid-cols-3 gap-5 bg-white p-3 md:p-6 m-2 md:m-3 rounded-lg",children:[r("div",{className:"grid gap-3 md:col-span-1",children:[r("div",{className:"grid w-full max-w-sm bg-white rounded-lg border border-gray-200 shadow-md relative",children:[r("div",{className:"flex justify-end px-4 pt-4",children:[r("button",{id:"dropdownButton",className:"inline-block text-gray-500 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg text-sm p-1.5",type:"button",children:[e("span",{className:"sr-only",children:"Open dropdown"}),e("svg",{className:"w-6 h-6","aria-hidden":"true",fill:"currentColor",viewBox:"0 0 20 20",xmlns:"http://www.w3.org/2000/svg",children:e("path",{d:"M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z"})})]}),e("div",{id:"dropdown",className:"hidden z-10 w-44 text-base list-none bg-white rounded divide-y divide-gray-100 shadow absolute top-3 right-3",children:r("ul",{className:"py-1",children:[e("li",{children:e("a",{href:"#",className:"block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100",children:"Edit"})}),e("li",{children:e("a",{href:"#",className:"block py-2 px-4 text-sm text-gray-700 hover:bg-gray-100",children:"Export Data"})}),e("li",{children:e("a",{href:"#",className:"block py-2 px-4 text-sm text-red-600 hover:bg-gray-100",children:"Delete"})})]})})]}),r("div",{className:"flex flex-col items-center pb-10",children:[e("img",{className:"mb-3 w-24 h-24 rounded-full shadow-lg",src:"images/ceo.jpeg",alt:"profile image"}),e("h5",{className:"mb-1 text-xl font-medium text-gray-900",children:(a=l==null?void 0:l.user)==null?void 0:a.name}),r("span",{className:"text-sm text-gray-500 uppercase",children:["Validation: ",(d=l==null?void 0:l.user)==null?void 0:d.role]})]})]}),e("div",{className:"grid md:col-span-1 p-3 bg-white rounded-lg border border-gray-200 shadow-md",children:r("div",{className:"mb-6",children:[e("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"Change password"}),r("form",{className:"grid gap-3",children:[e("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"Old password"}),e("input",{type:"password",id:"old-password",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5",required:""}),e("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"New password"}),e("input",{type:"password",id:"new-password",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5",required:""}),e("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"Confirm password"}),e("input",{type:"password",id:"repeat-password",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5",required:""})]})]})})]}),e("div",{className:"grid md:col-span-2 p-3 bg-white rounded-lg border border-gray-200 shadow-md relative",children:r("form",{children:[r("div",{className:"mb-6",children:[e("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"Your email"}),e("input",{type:"email",id:"email",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5",placeholder:"name@emailprovider.com",required:""})]}),r("div",{className:"mb-6",children:[e("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"Contact"}),e("input",{type:"tel",id:"tel",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5",placeholder:"name@emailprovider.com",required:""})]}),r("div",{className:"mb-6",children:[e("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"Stack"}),e("input",{type:"text",id:"stack",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5",placeholder:"name@emailprovider.com",required:""})]}),r("div",{className:"mb-6",children:[e("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"Role"}),e("input",{type:"text",id:"role",className:"shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full p-2.5",placeholder:"name@emailprovider.com",required:""})]}),e("div",{className:"mb-6"}),r("div",{className:"mb-6",children:[e("label",{className:"block mb-2 text-sm font-medium text-gray-900",children:"About Me"}),e("textarea",{id:"message",rows:"4",className:"block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-yellow-500 focus:border-yellow-500",placeholder:"Leave a comment..."})]}),e("button",{type:"submit",className:"text-white bg-yellow-700 hover:bg-yellow-800 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center",children:"Update Profile"})]})})]})]})})})}export{g as default};