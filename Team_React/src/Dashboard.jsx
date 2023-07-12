import React, { Fragment } from 'react'
import DashboardNavbar from './Components/DashboardComponents/DashboardNavbar'
import { Outlet } from 'react-router-dom'
import { ChakraProvider } from '@chakra-ui/react'

const Dashboard = () => {
  return (

    <Fragment>

      <div className='bg-slate-100 w-full overflow-hidden'>
        <div className='sm:px-16 px-6 flex justify-center items-center bg-white drop-shadow-sm'>
          <div className='xl:max-w-[1280px] w-full  '>
            <DashboardNavbar />
          </div>
        </div>
        <div className='bg-slate-100 flex justify-center items-start'>
          <div className='xl:max-w-[1280px] w-full'>
            <Outlet/>
          </div>
        </div>
      </div>


    </Fragment>




  )
}

export default Dashboard