import react, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import React from "react";
import Login from "./Pages/Login";
import Sign from "./Pages/sign";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Player from "./components/Player";
import { auth } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import { onAuthStateChanged } from "firebase/auth";
import Titlecards from "./components/Titlecards";
const App = () => {
  const navi = useNavigate()
  useEffect(() => {
    onAuthStateChanged(auth,async (user)=>{
      if(user){
        toast.success("Successfully logined")
        navi('/')
      }else{
        
        navi('/login')
      }
    })
  }, []);
  return (
    <div className="">
      <ToastContainer theme="dark" />
      <Routes>
        
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign" element={<Sign />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
};

export default App;
