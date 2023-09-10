import React from 'react'
import {FcBullish} from 'react-icons/fc';
//import {BsX} from 'react-icons/bs';
import {BiSolidDashboard,BiImage,BiSolidGrid,BiCart,BiFile} from 'react-icons/bi';
function Sidebar() {
  return (
    <aside id="sidebar">
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <FcBullish className='icon_header'/>
                <span className='sidebar-text'>Material Dashboard PRO </span>
            </div>
            <span className='icon close_icon'>X</span>
        </div>
        <hr style={{background: "#B5C0BA",height: "0.5px",border: "none"}}/>
        <img src="./bhav.jpeg" className='imaging' alt='image'/>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href='/'>
                    <BiSolidDashboard className='icon' />Dashboard
                </a>
            </li>
        </ul>
        <hr style={{background: "#B5C0BA",height: "0.5px",border: "none"}}/>
        <div>pages</div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href='/page'>
                    <BiImage className='icon' />pages
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BiSolidGrid className='icon'/>Applications
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BiCart className='icon'/>ECommerce
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BiFile className='icon' />Authentication
                </a>
            </li>
        </ul>
        <hr style={{background: "#B5C0BA",height: "0.5px",border: "none"}}/>
        <div>Docs</div>
        <ul className='sidebar-list'>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BiImage className='icon' />Basic
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BiSolidGrid className='icon'/>Components
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href=''>
                    <BiCart className='icon'/>Change Log
                </a>
            </li>
        </ul>
    </aside>
  );
}

export default Sidebar;