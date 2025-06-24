import React from 'react';
import '../Styles/SideBar.css';
import { IoMdPhotos } from "react-icons/io";
import { FaRegCompass } from "react-icons/fa";
import { FaPenNib } from "react-icons/fa6";
import { LuFolders } from "react-icons/lu";
import { PiDownloadSimpleBold } from "react-icons/pi";
import { FaUser, FaGlobe, FaBars } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="sidebar">
    

      <div className="sidebar-icons">
        <div className="sidebar-icon active"><IoMdPhotos size={20} /></div>
        <div className="sidebar-icon"><FaPenNib size={20} /></div>
        <hr className="divider" />
        <div className="sidebar-icon"><FaRegCompass size={20} /></div>
        <div className="sidebar-icon"><LuFolders size={20} /></div>
        <div className="sidebar-icon"><PiDownloadSimpleBold size={20} /></div>
      </div>

      <div className="sidebar-bottom">
        <div className="sidebar-icon"><FaUser size={20} /></div>
        <div className="sidebar-icon"><FaGlobe size={20} /></div>
        <div className="sidebar-icon"><FaBars size={20} /></div>
      </div>
    </div>
  );
}
