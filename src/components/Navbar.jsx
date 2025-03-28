import React, { useEffect, useRef } from 'react'
import logo from "../assets/logo.png";
import search_icon from "../assets/search_icon.svg";
import bell_icon from "../assets/bell_icon.svg"
import profile_img from "../assets/profile_img.png"
import caret from "../assets/caret_icon.svg"
import { NavLink, useNavigate } from 'react-router-dom';
import { logout } from '../firebase';

const Navbar = () => {
  const navi = useNavigate();
  const navref = useRef()
  
  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY>=110){
        navref.current.classList.add("dark")
      }else{
        navref.current.classList.remove("dark")
      }
    })
  },[])
  return (
    <div ref={navref} className="absolute top-0 pl-15 w-full pt-10 flex justify-between text-white z-10 p-4 bg-gradient-to-b from-black/70 to-transparent nav">
      <div onClick={() => navi('/')} className="cursor-pointer flex items-center gap-10">
        <img src={logo} alt="Logo" className="w-40" />
        <div className="md:flex gap-5 hidden">
        <NavLink to="/">Home</NavLink>
        <p>Blockbuster</p>
        <p>Only Netflix</p>
        <p>Upcoming</p>
        <p>Top Picks</p>
      </div>
      <div>
        
      </div>
      </div>

      

      <div className="flex gap-5 items-center">
        <img className="cursor-pointer" src={search_icon} alt="Search" />
        <p>Children</p>
        <img src={bell_icon} alt="Notifications" />
        <img src={profile_img} className="w-6 h-6 cursor-pointer"  onClick={()=>logout()} alt="Profile" />
        <img src={caret} alt="Dropdown" />
      </div>
    </div>
  );
};


export default Navbar