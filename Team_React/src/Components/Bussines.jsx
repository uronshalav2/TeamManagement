import React from 'react'
import styles, { layout } from '../style'
import { features } from '../Static'

const FeatureCard = ({icon, title, content, index}) => (
    <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? 'mb-6' : 'mb-0'} duration-[0.5s] grayscale hover:grayscale-0  feature-card`}>
        <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
            <img src={icon} alt='icon' className='w-[50%] h-[50%] object-contain'/>
        </div>
        <div className='flex-1 flex flex-col ml-3'>
            <h4 className='font-poppins font-semibold text-white text-[18px] leading-[23px] mb-1'>
                {title}
            </h4>
            <p className='font-poppins font-normal text-dimWhite text-[18px] leading-[23px] mb-1'>
                {content}
            </p>
        </div>
    </div>
)
export const Bussines = () => {
    return (
        <section id='features' className={layout.section}>
            <div className={layout.sectionInfo}>
                <h2 className={styles.heading2}>You add the tasks, <br className='sm:block hidden' />we'll handle the manage.</h2>
                <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
                    Our focus is on fast, safe, and easy management, combining swift decision-making, robust safety measures, and simplified processes for efficient operations.
                </p>
            </div>
            <div className={`${layout.sectionImg} flex-col` }>
                    {features.map((feature,index) => (
                        <FeatureCard key= {feature.id} {...feature} index={index}/>
                    ))} 
            </div>
        </section>
    )
}

export default Bussines