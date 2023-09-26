import React from "react";
import mainPic from "../Assests/dream11.webp";
import dream11 from "../Assests/dream11video.mp4";
import logo from "../Assests/logo.webp"

const Header = () => {
  return (
    <div>
      <div className="background">
        <div className="flex flex-row justify-between h-19 pr-2 pl-2 pt-5 pb-5 border border-gray-500 bg-richpurple-300">
          <div>
            <img src={logo} alt="" className="w-1/2"/>
          </div>
          <div >
            <select name="" id="" className="rounded-full px-4 py-1 bg-richpurple-200 text-white border-2 border-gray-500">
              <option value="">English</option>
              <option value="">Hindi</option>
            </select>
          </div>
        </div>
        <div>
          <img src={mainPic} alt="" />
        </div>
        <div className="flex justify-center">
        <div className=" flex justify-center gap-2 bg-white items-center pt-5 pb-5 ">
          <h2 className="font-extrabold text-transparent text-xl bg-clip-text bg-gradient-to-r from-richpurple-100 to-richpurple-500">Download official Dream11 app</h2>
          <div className=" flex border-2 border-gray-500 rounded-full text-center p-2">
          <input type="text" placeholder="Enter mobile number"/>
          </div>
         
          <button className="w-1/2 p-2 text-white btn rounded-full">Get App Link</button>
        </div> 
        </div>

      </div>
    </div>
  );
};

export default Header;
