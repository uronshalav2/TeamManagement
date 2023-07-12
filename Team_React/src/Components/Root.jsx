import React from 'react'
import { Navbar, Hero, Clients, Testimonials, Footer, CTA, Bussines } from '../Components';
import Stats from '../Components/Stats'
const Root = () => {
  return (
    <div className='bg-primary w-full overflow-hidden'>
    <div className='sm:px-16 px-6 flex justify-center items-center'>
      <div className='xl:max-w-[1280px] w-full'>
        <Navbar />
      </div>
    </div>
    <div className='bg-primary flex justify-center items-start'>
      <div className='xl:max-w-[1280px] w-full'>
        <Hero />
      </div>
    </div>
    <div className='bg-primary sm:px-16 px-6 flex justify-center items-start'>
      <div className='xl:max-w-[1280px] w-full'>
        <Stats />
      </div>
    </div>
    <div className='bg-primary sm:px-16 px-6 flex justify-center items-start'>
      <div className='xl:max-w-[1280px] w-full'>
      <Bussines />
      </div>
    </div>
    <div className='bg-primary sm:px-16 px-6 flex justify-center items-start'>
      <div className='xl:max-w-[1280px] w-full'>
      <Clients />
      </div>
    </div>
    <div className='bg-primary sm:px-16 px-6 flex justify-center items-start'>
      <div className='xl:max-w-[1280px] w-full'>
      <CTA />
      </div>
    </div>
    <div className='bg-primary sm:px-16 px-6 flex justify-center items-start'>
      <div className='xl:max-w-[1280px] w-full'>
      <Footer />
      </div>
    </div>
    <Testimonials />
  </div>
  )
}

export default Root