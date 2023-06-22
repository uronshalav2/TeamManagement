import React, { Fragment } from 'react'
import styles from '../style'
import axios from 'axios'
import { Link, NavLink } from 'react-router-dom'
import { useState } from 'react';
import { loginbg } from '../Assets/index'
import { login, logout, isAuthenticated } from '../auth/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {

    const [userName, setUser] = useState('')
    const [password, setPassword] = useState('')
    const [rememberMe] = useState(true)

    const handleSubmit = async(e) => {
        e.preventDefault();
        const success = await login(userName, password, rememberMe);
        if(success){
            alert("jeni kyqur");
           console.log('Jeni kyqur' + rememberMe);
        } else {
        }
    };
    return (
        <Fragment>
            <section className="flex flex-col md:flex-row h-screen justify-center items-center">

                <div className="hidden lg:block w-full md:w-1/2 xl:w-2/3 h-screen">
                    <img src={loginbg} alt="" className="w-full h-full object-cover" />
                </div>

                <div className="bg-white w-full md:max-w-md lg:max-w-full md:mx-auto  md:w-1/2 xl:w-1/3 h-screen px-6 lg:px-16 xl:px-12
      flex items-center justify-center">

                    <div className="w-full h-100">


                        <h1 className="text-xl md:text-2xl text-blue-700 font-bold leading-tight mt-12">Log in to your account</h1>

                        <form className="mt-6" action="#" onSubmit={handleSubmit}>
                            <div>
                                <label className="block text-gray-700">Email Address</label>
                                <input type="username" value={userName} onChange={(e) => setUser(e.target.value)} placeholder="Email Address" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500 focus:bg-white focus:outline-none" required />
                            </div>

                            <div className="mt-4">
                                <label className="block text-gray-700">Password</label>
                                <input type="password" placeholder="Enter Password" className="w-full px-4 py-3 rounded-lg bg-gray-200 mt-2 border focus:border-blue-500
              focus:bg-white focus:outline-none" value={password} onChange={(e) => setPassword(e.target.value)} required />
                            </div>

                            <div className="text-right mt-2">
                                <a href="#" className="text-sm font-semibold text-gray-700 hover:text-blue-700 focus:text-blue-700">Forgot Password?</a>
                            </div>

                            <button type="submit" className="w-full block bg-indigo-500 hover:bg-indigo-400 focus:bg-indigo-400 text-white font-semibold rounded-lg
            px-4 py-3 mt-6">Log In</button>
                        </form>
                        <button className='btn bg-indigo-500 mt-4 p-2 text-white' type='button' onClick={logout}>Logout</button>

                        <hr className="my-6 border-gray-300 w-full" />
                        <p className="mt-8">Need an account? <NavLink to={"/Account/Register"} className="text-blue-500 hover:text-blue-700 font-semibold">Create an
                            account</NavLink></p>


                    </div>
                </div>
         
            </section>
        </Fragment>

    )
}

export default Login 
