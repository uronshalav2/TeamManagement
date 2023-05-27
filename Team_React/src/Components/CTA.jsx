import React from 'react'
import styles from '../style'
import { Link } from 'react-router-dom'

 const CTA = () =>
    (
        <section className={`${styles.flexCenter} ${styles.marginY} ${styles.padding}  sm:flex-row flex-col rounded-lg`}>
            <div className='flex-1 flex flex-col'>
                <h2 className={`${styles.heading2}`}>Try to work with us now!</h2>
                <p className={styles.paragraph}>Everything you need to manage your tasks easily and faster.</p>
            </div>
            <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
                <Link to="/Account">
                <button type='button' className={`py-4 px-6 font-poppins font-medium text-[18px] text-primary bg-blue-gradient rounded-[10px] outline-none ${styles}`}>
                    Get Started
                </button>
                </Link>

            </div>
        </section>
    )


export default CTA
