import React from 'react'
import TeamTable from './TeamTable'
import styles from '../../style'
const DashboardTeams = () => {
  return (
    <div className='bg-slate-100 w-full h-screen overflow-hidden'>
      <section className={`${styles.flexCenter}`}>
        <TeamTable />
      </section>
    </div>

  )
}

export default DashboardTeams