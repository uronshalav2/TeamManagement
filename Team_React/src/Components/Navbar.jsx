import React, { Fragment } from 'react'
import { useState } from 'react'
import {navLinks} from '../Static';
import { NavLink } from 'react-router-dom';
import { Turn as Hamburger } from 'hamburger-react'
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Fragment>
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <p><NavLink className={"w-[124px] h-[44px] text-gradient font-poppins font-semibold xs:text-[40px] text-[30px] items-center"} to="/">Tasks</NavLink></p>
      <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key = {nav.path} className={`font-poppins font-semibold cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ?'mr-0' : 'mr-10'}`}>
            <NavLink to={`${nav.path}`}>
              {nav.title}
            </NavLink>
          </li>          
        ))}
      </ul>
      <div className='sm:hidden flex flex-1 justify-end items-center'>
        <Hamburger toggled={isOpen} toggle= {setOpen} color="#fff" easing="ease-in" size={22}/>
        <div className={`${isOpen ? 'flex' : 'hidden'} p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        <ul className='list-none flex flex-col justify-end items-center flex-1'>
        {navLinks.map((nav, index) => (
          <li key = {nav.path} className={`font-poppins font-normal cursor-pointer text-[16px] text-white ${index === navLinks.length - 1 ?'mr-0' : 'mb-4'}`}>
            <NavLink to={`${nav.path}`}>
              {nav.title}
            </NavLink>
            <a href={`#${nav.path}`}>{nav.sections}</a>
          </li>
        ))}
      </ul>
        </div>
      </div>
    </nav>
    </Fragment>
  )
}

export default Navbar