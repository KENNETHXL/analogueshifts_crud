import React from 'react'
import { BsEye, BsEyeSlash } from 'react-icons/bs';


export default function ShowPassword() {

    function showpass() {
        const x = document.getElementById("password");
        const show = document.getElementById("show");
        const hide = document.getElementById("hide");
        if (x.type === "password" ){
            x.type = "text";
            show.classList.add("hidden");
            hide.classList.remove("hidden");
        }else{
            x.type = "password"
            show.classList.remove("hidden");
            hide.classList.add("hidden");
        }
    }

  return (
    <div onClick={showpass} className="cursor-pointer absolute right-3 inset-y-3">
        <span id="show" className="">
            <BsEye className="flex items-center h-5 w-5" />
        </span>
        <span id="hide" className="hidden">
            <BsEyeSlash className="flex items-center h-5 w-5" />
        </span>
    </div>
  )
}


export function ShowPassword2() {

    function showpass2() {
        const y = document.getElementById("password2");
        const show2 = document.getElementById("show2");
        const hide2 = document.getElementById("hide2");
        if (y.type === "password" ){
            y.type = "text";
            show2.classList.add("hidden");
            hide2.classList.remove("hidden");
        }else{
            y.type = "password"
            show2.classList.remove("hidden");
            hide2.classList.add("hidden");
        }
    }

  return (
    <div onClick={showpass2} className="cursor-pointer absolute right-3 inset-y-3">
        <span id="show2" className="">
            <BsEye className="flex items-center h-5 w-5" />
        </span>
        <span id="hide2" className="hidden">
            <BsEyeSlash className="flex items-center h-5 w-5" />
        </span>
    </div>
  )
}
