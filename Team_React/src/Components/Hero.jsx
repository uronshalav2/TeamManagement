import React from 'react'
import styles from '../style';
import {verified, tablet} from '../Assets';
const Hero = () => 
  <section id="home" className={`flex md:flex-row flex-col`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      <div className='flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2 sm:mb-4'>
          <img src={verified} alt="verified" className='w-[32px] h-[32px]'/>
          <p className={`${styles.paragraph} ml-2`}>
          <span className='text-white'>Fast</span> and  {""}

          <span className='text-white'>safe</span> management
          </p>
      </div>
      <div className='flex flex-row justify-between items-center w-full'>
        <h1 className='flex-1 font-poppins font-semibold ss:text-[72px] text-[46px] text-white ss:leading-[78px] leading-[56px]'>
          The Next <br className='sm:block hidden' /> {""}
          <span
          className='text-gradient'>Generation</span>   
          {" "}
        </h1>
        <div className='ss:flex hidden md:mr-4 mr-0'>

        </div>
      </div>
      <h1 className='font-poppins font-semibold ss:text-[72px] text-[46px] text-white ss:leading-[78px] leading-[56px] w-full'>
        Task Manage.
      </h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
        With a focus on fast, safe, and easy management, our organization embraces an agile approach that propels us towards operational excellence. We understand the value of swift decision-making and execution, allowing us to adapt quickly to changing circumstances.
        </p>
    </div>
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <img src={tablet} alt="hand" className='w-[100%] h-[100%] relative z-[5] object-contain rounded-r-lg'/>
        <div className='absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient'/>
        <div className='absolute z-[1] w-[80%] h-[80%] rounded-full bottom-40 blue__gradient'/>
        <div className='absolute z-[0] w-[50%] h-[50%] bottom-20 blue__gradient'/>
    </div>
  </section>


export default Hero