import React from 'react'
import styles from '../style';
import { footerLinks } from '../Static/'
import { NavLink } from 'react-router-dom'
const Footer = () => {
  return (
    <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
      <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
        <div className='flex-1 flex flex-col justify-start mr-10'>
          <p><NavLink className={"w-[266px] h-[72px] object-contain text-gradient font-poppins font-semibold xs:text-[40px] text-[30px] items-center"} to="/">Tasks</NavLink></p>
          <p className={`${styles.paragraph} mt-4 max-w-[310px]`}>Everything you need to manage your tasks easily and faster.</p>
        </div>
      <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
        {footerLinks.map((footerLinks) => (
          <div key={footerLinks.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[18px] leading-[27px] text-white">
              {footerLinks.title}
            </h4>
            <ul className="list-none mt-4">
              {footerLinks.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[16px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerLinks.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      </div>
    </section>
  )
}

export default Footer