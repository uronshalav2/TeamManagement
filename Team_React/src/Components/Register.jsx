import React, { Fragment } from 'react'
import {Link, NavLink} from 'react-router-dom'

export const Register = () => {
  return (
    <Fragment>
        <div className="bg-discount-gradient w-full h-screen">
        <div className="home flex justify-end">
            <NavLink to={"/"} className={"w-[120px] h-[80px] text-gradient font-poppins mt-5 font-bold text-[24px]"}>Home</NavLink>
        </div>
            <div className="flex xs:p-5 md:p-5 p-0 flex-col justify-center">
                <div className="sm:mx-auto sm:w-full sm:max-w-md">
                    <h2 className='mt-10 text-2xl text-start font-bold font-poppins leading-9 tracking-tight text-gradient'>
                        Register
                    </h2>
                </div>
                <div className='p-3 mt-5 sm:mx-auto rounded-lg sm:w-full sm:max-w-md'>
                    <form className='space-y-6' action='#' method='POST'>
                    <div>
                            <label for="name" className='block text-sm font-normal font-poppins leading-6 text-dimWhite'>Full name</label>
                            <div className='mt-2'>
                                <input id='name' name='name' type='name' autoComplete='name' required className='block w-full duration-[0-3.s] rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inest focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                            </div>
                        </div>
                        <div>
                            <label for="email" className='block text-sm font-normal font-poppins leading-6 text-dimWhite'>Email address</label>
                            <div className='mt-2'>
                                <input id='email' name='email' type='email' autoComplete='email' required className='block w-full duration-[0-3.s] rounded-md border-0 p-2 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inest focus:ring-indigo-600 sm:text-sm sm:leading-6' />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label for="password" className="block text-sm font-poppins font-normal leading-6 text-dimWhite">Password</label>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full  duration-[0.3s] rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center justify-between">
                                <label for="password" className="block text-sm font-poppins font-normal leading-6 text-dimWhite">Confirm Password</label>
                            </div>
                            <div className="mt-2">
                                <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full  duration-[0.3s] rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>
                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-cyan-600 px-3 py-1.5 text-sm font-semibold font-poppins leading-6 text-white shadow-sm hover:bg-cyan-700 duration-[0.3s] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign in</button>
                        </div>
                    </form>
                    <Link to="/Account/Login">
                        <p className="mt-10 font-poppins text-center text-sm text-dimWhite">
                            Already a memeber?
                        </p>
                    </Link>
                </div>
            </div>
        </div>
    </Fragment>
)}

export default Register