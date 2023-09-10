import React from 'react'
import {BsJustify,BsFillBellFill,BsPersonCircle,BsSearch,BsGear} from 'react-icons/bs';
function Header() {
  return (
    <header className='header'>
            <div className='menu-icon'>
                <BsJustify className='icon'/>Dashboard
        </div>
        <div className='header-right'>
            <input type='text' placeholder='search'></input>
            <BsSearch className='icon' />
            <BsPersonCircle className='icon'/>
            <BsGear className='icon' />
            <BsFillBellFill className='icon' />
        </div>
    </header>
  );
}

export default Header