import React, { useState } from "react";
import login_img from "../assets/background_banner.jpg";
import { useNavigate } from "react-router-dom";
import { signup } from "../firebase.js";
const Sign = () => {
  const navi  = useNavigate()
  const [name,setname] = useState("")
  const [email,setemail] = useState("")
  const [Password,setpass] = useState("")
  const sign_auth = async(e) =>{
    e.preventDefault()
    await signup(name,email,Password)
  }
  return (
    <div className="h-screen w-full relative">
      <img src={login_img} alt="" className="w-full h-full" />
      <div className="flex justify-center">
      <div className="form w-100 h-130 p-5 absolute text-white top-20">
      <h1 className="text-2xl mt-5 mb-9">Sign Up</h1>
        <form action="" className="pl-10 mt-5">
          
          <input onChange={(e)=>setname(e.target.value)} className="border-2 border-gray-500 outline-0 mb-5 bg-gray- p-2 w-70" type="text" placeholder="Your name" /><br />
          <input onChange={(e)=>setemail(e.target.value)} className="border-2 border-gray-500 outline-0 mb-5 bg-gray- p-2 w-70" type="text" placeholder="Email" /><br />
          <input onChange={(e)=>setpass(e.target.value)} className="border-2 border-gray-500 outline-0 mb-5 bg-gray- p-2 w-70" type="text" placeholder="Password" /><br />
          <button className="bg-red-600 w-70 p-2 border cursor-pointer" onClick={sign_auth}>Sign Up</button>
          <div className="flex justify-end text-sm mt-2" >
         
            
            <p className="pr-10 text-sm cursor-pointer">Need Help?</p>
          </div>
        </form>
        <div className="pl-10 mt-15 flex flex-col justify-between">
          <p className="text-sm">
            New to Netflix? <span className="text-sm cursor-pointer font-bold" onClick={()=>navi("/sign")}>Sign Up Now</span>
          </p>
          <p className="text-sm">Already have account? <span className="text-sm cursor-pointer font-bold" onClick={()=>navi("/login")}>Login Now</span></p>
        </div>
      </div>
      </div>
      
    </div>
  );
};

export default Sign;
