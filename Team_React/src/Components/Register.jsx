import React, { Fragment } from 'react'
import styles from '../style'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
import { loginbg } from '../Assets/index'

export const Register = () => {
    return (
        <Fragment>
            <section className="flex flex-col md:flex-row h-screen items-center">

                <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img src={loginbg} alt="" class="w-full h-full object-cover" />
                </div>

                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
flex items-center justify-center">

                    <div className="w-full h-100">


                        <h1 className="text-xl md:text-2xl text-blue-700 font-bold leading-tight mt-12">Create your account</h1>

                        <form className="mt-6" action="#" method="POST">
                            <div>
                                <label className="block text-gray-700">Write your first name</label>
                                <input type="name" name="" id="" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                            </div>
                            <div className='mt-4'>
                                <label className="block text-gray-700">Write your last name</label>
                                <input type="name" name="" id="" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                            </div>
                            <div className='mt-4'>
                                <label className="block text-gray-700">Your email address</label>
                                <input type="name" name="" id="" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" autofocus autocomplete required />
                            </div>
                            <div className="mt-4">
                                <label className="block text-gray-700">Choose a password</label>
                                <input type="password" name="" id="" minlength="6" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
      focus:bg-white focus:outline-none" required />
                            </div>

                            <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
    px-4 py-3 mt-6">Sign Up</button>
                        </form>

                        <hr className="my-6 border-gray-300 w-full" />
                        <p className="mt-8">Already a member?<NavLink to={"/Account/Login"} className="text-blue-500 hover:text-blue-700 font-semibold"> Login instead</NavLink></p>

                    </div>
                </div>

            </section>
        </Fragment>
    )
}

export default Register