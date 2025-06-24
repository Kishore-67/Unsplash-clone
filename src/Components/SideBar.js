import React from 'react';
import '../Styles/SideBar.css';
import { IoMdPhotos } from "react-icons/io";
import { FaRegCompass } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa6";
import { LuFolders } from "react-icons/lu";
import { PiDownloadSimpleBold } from "react-icons/pi";
import logo from '../Assets/unsplash-logo.png';


export default function SideBar() {
  return (
    <div className="sidebar">
         {/* <div className="navbar-left">
                <img src={logo} alt="unsplash" className="logo" />
                <input
                  type="text"
                  className="search"
                  placeholder="Search photos and illustrations"
                />
              </div> */}
      <div className="sidebar-icon active">
        <IoMdPhotos />
      </div>
      <div className="sidebar-icon">
        <FaPenNib />
      </div>
      <div className="sidebar-icon">
       <FaRegCompass />
      </div>
      <div className="sidebar-icon">
        <LuFolders />
      </div>
      <div className="sidebar-icon">
        <PiDownloadSimpleBold />
      </div>
    </div>
  );
}
