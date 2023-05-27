import React from 'react'
import {logos} from '../Static';
import styles from '../style'

const Clients = () => {
  return (
<section id='clients' className={`${styles.flexCenter} bg-discount-gradient p-4 rounded-lg lg:flex-row md:flex-row sm:flex-row xs:flex-row flex-wrap flex-col sm:mb:20 mb-6`}>
      {logos.map((logo) => (
        <div key={logo.id} className={`flex-1 xs:flex-0 sm:flex-0 flex justify-center items-center flex-row  m-5`}>
            <img src={logo.src} className='duration-[0.5s] grayscale hover:grayscale-0 xs:w-[70px] md:w-[70px] lg:w-[90px] sm:w-[70px] w-[72px] h-[100%] object-contain'  alt='logo'/>
        </div>
      ))}
</section>

  )
}

export default Clients