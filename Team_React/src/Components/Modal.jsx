import React from "react";
import Login from './Login'
import { Transition } from '@headlessui/react'
export default function Modal() {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <button
        className="bg-transparent text-white py-3"
        type="button"
        onClick={() => setShowModal(true)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
          <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>

      </button>
      {showModal ? (
          <>

          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm"
          >
            <div className="relative w-full  xs:m-20 sm:m-20 m-10 max-w-3xl bg-discount-gradient rounded-lg  ">
              {/*content*/}
                <div className="flex justify-center rounded-t m-10">
                  <div className="flex w-full justify-center">
                  <h3 className="text-3xl  text-center font-bold font-poppins text-gradient">
                    Welcome
                  </h3>
                  </div>

                  <button
                    className="p-1 ml-auto bg-transparent border-0 text-white  float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                    onClick={() => setShowModal(false)}
                  >
                    <span className=" text-white  h-6 w-6 text-2xl block outline-none focus:outline-none">
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>

                    </span>
                  </button>
                </div>
                {/*body*/}
                <div className="relative  flex-auto text-white m-10">
                  <Login/>
                </div>
                {/*footer*/}
              </div>
            </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}