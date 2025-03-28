import React from "react";
import fb from "../assets/facebook_icon.png";
import insta from "../assets/instagram_icon.png";
import tw from "../assets/twitter_icon.png";
import yt from "../assets/youtube_icon.png";
const Footer = () => {
  return (
    <div className="flex flex-col mb-30 text-white p-2">
      <div className="flex mt-30 items-center justify-start pr-5 gap-5">
        <img src={fb} alt="" className="w-7 h-7" />
        <img src={insta} alt="" className="w-7 h-7" />
        <img src={tw} alt="" className="w-7 h-7" />
        <img src={yt} alt="" className="w-7 h-7" />
      </div>
      <div className="text-white mt-12 flex gap-4">
        <div>
          <ul className="flex flex-col gap-5">
            <li>Audio Description</li>
            <li>Investor Relations</li>
            <li>Legal Notices</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-5">
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-5">
            <li>Gift Cards</li>
            <li>Terms of Use</li>
            <li>Corporate Information</li>
          </ul>
        </div>
        <div>
          <ul className="flex flex-col gap-5">
            <li>Media Center</li>
            <li>Privacy</li>
            <li>Contact Us</li>
          </ul>
        </div>
      </div>
      <div className="flex justify-center">
      <p className="mt-10">© 1997 - 2025 Netflix, Inc .</p>
      </div>
      
    </div>
  );
};

export default Footer;
