import React from 'react'
import TeamTable from './TeamTable'
import styles from '../../style'
import EditTeams from '../DashboardComponents/EditTeams'
const DashboardTeams = () => {
  return (
    <div className='bg-slate-100 w-full  overflow-hidden'>
          <div className='xl:max-w-[1280px] w-full p-5'>
            <TeamTable/>
          </div>
          <div className='xl:max-w-[1280px] w-full'>
          
          </div>

    </div>

  )
}

export default DashboardTeams