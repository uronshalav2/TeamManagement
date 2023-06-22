import React, { Fragment } from 'react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { DashLinks } from '../../Static';
import { Turn as Hamburger } from 'hamburger-react'
const Navbar = () => {
    const [isOpen, setOpen] = useState(false);

    return (
        <nav className='bg-white w-full flex py-6 justify-between items-center navbar rounded-md '>
            <p><NavLink className={"w-[124px] h-[44px] text-indigo-600 font-poppins font-semibold xs:text-[30px] text-[30px] items-center "} to="/Dashboard">Dashboard</NavLink></p>
            <ul className='list-none sm:flex hidden justify-end items-center flex-1'>
                {DashLinks.map((nav, index) => (

                    <li key = {nav.path}  className={`font-poppins font-normal cursor-pointer text-[20px] text-indigo-700 hover:text-indigo-400 ${index === DashLinks.length - 1 ?'mr-0' : 'mr-10'}`}>
                        <NavLink to={
                                `${nav.path}`
                        }>
                            {nav.title}
                        </NavLink>
                    </li>


                ))}

            </ul>
            <div className='sm:hidden flex flex-1 justify-end items-center'>
                <Hamburger toggled={isOpen} toggle={setOpen} color="#4f46e5" easing="ease-in" size={22} />
                <div className={`${isOpen ? 'flex' : 'hidden'} p-6 bg-white drop-shadow-sm absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
                    <ul className='list-none flex flex-col justify-end items-center flex-1 '>
                       {DashLinks.map((nav,index) => (
                        <li key = {nav.path} className={`font-poppins font-normal cursor-pointer text-[16px] text-indigo-700 hover:text-indigo-400 ${index === DashLinks.length - 1 ?'mr-0' : 'mb-4'}`}>
                        <NavLink to={`${nav.path}`}>
                            {nav.title}
                        </NavLink>
                    </li>
                       ))}


                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default Navbar