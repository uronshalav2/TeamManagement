import React from 'react'
import {stats} from '../Static';
import styles from '../style'

const Stats = () => 
   (
   <section id="stats" className={`${styles.flexCenter} flex-row flex-wrap sm:mb-20 mb-6`}>
    {stats.map((stat) => (
        <div key={stat.id} className={`md:flex-1 xs:flex-0 flex justify-start items-center flex-row m-3`}>
                <h4 className='font-poppins font-bold xs:text-[45px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</h4>
                <p className='font-poppins font-semibold xs:text-[20px] text-[18px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
        </div>
    ))}
   </section>
  )


export default Stats