import React, { useEffect, useState } from "react";
import hero_banner from "../assets/hero_banner.jpg";
import hero_title from "../assets/hero_title.png";
import info from "../assets/info_icon.png";
import play from "../assets/play_icon.png";
import Titlecards from "../components/Titlecards";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
const Home = () => {

  return (
      <div className="">
        <div>
        <Navbar/>
        </div>
        
        <div className="relative">
          <img
            src={hero_banner}
            alt=""
            className="w-full h-190 sm:m-h-screen"
            style={{
              WebkitMaskImage:
                "linear-gradient(to right, transparent, black 65%)",
              maskImage: "linear-gradient(to right, transparent, black 75%)",
              WebkitTapHighlightColor: "transparent",
            }}
          />
        </div>
        <div className="absolute bottom-45 md:bottom-55  ml-15 flex flex-col gap-10">
          <img src={hero_title} alt="" className="w-100 md:w-120 " />
          <p className="text-white md:text-xl w-120 md:w-150 ">
            Discovering his tries to a secret ancient order, a young man living
            in modern life on a quest to save the city from on immortal enemy
          </p>
          <div className="flex gap-10 ">
          <Link to={`/player/1125899`}>
            <button
              className="w-40 h-13 border flex items-center justify-center gap-3 font-bold bg-white cursor-pointer"
              style={{ borderRadius: "5px" }}
            >
             
            
              <img src={play} alt="" className="w-5" />
              Play
              
            </button>
            </Link>
            <button 
              className="w-40 h-13  text-white flex items-center justify-center gap-3 font-bold bg-transparent border-1 border-white  cursor-pointer"
              style={{ borderRadius: "5px" }}
            >
              <img src={info} alt="" className="w-5" />
              More Info
            </button>
          </div>
        </div>
        <div className="absolute top-[calc(100%-140px)] pl-16  w-full overflow-x-auto no-scrollbar">
          <Titlecards t1={"Blockbuster Movies"} category={"now_playing"}/>
          <Titlecards t2={"Only on Netflix "} category={"popular"}/>
          <Titlecards t3={"Upcoming"} category={"top_rated"}/>
          <Titlecards t4={"Top Picks fro you"} category={"upcoming"} />
          <Footer />
        </div>
    </div>
  );
};

export default Home;
