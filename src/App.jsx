import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./Pages/Login";
import Sign from "./Pages/sign";
import Home from "./Pages/Home";
import Footer from "./components/Footer";
import Player from "./components/Player";
import { auth } from "./firebase";
import { ToastContainer, toast } from 'react-toastify';
import { onAuthStateChanged } from "firebase/auth";

const App = () => {
  const navi = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        toast.success("Successfully logged in", { autoClose: 1500 });
        navi('/');
      } else {
        navi('/login');
      }
    });

    return () => unsubscribe(); // Cleanup function
  }, [navi]); // Added `navi` in dependency array

  return (
    <div>
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
