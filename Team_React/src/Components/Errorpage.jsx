import React from 'react'
import { useRouteError } from "react-router-dom";
import styles from '../style'

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div className={`${styles.flexCenter} bg-discount-gradient text-white w-screen h-screen items-center`}>
      <div className={`flex justify-center items-center`}>
        <div id="error-page" className='text-start m-2'>
          <h1 className='font-poppins font-bold text-gradient ss:text-[34px] text-[24px]'>Oops!</h1>
          <p className='font-poppins font-semibold ss:text-[32px] text-[20px]'>Sorry, an unexpected <span>error</span> has occurred.</p>
          <p className='font-poppins font-semibold ss:text-[30px] text-[18px]'>
            <p>{error.statusText || error.message}</p>
          </p>
        </div>
      </div>
    </div>

  );
}

