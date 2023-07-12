import React, { useState, useEffect } from 'react'
import axios from 'axios'
import MenuDropdown from '../MenuDropdown'
import { tabledata } from '../../Static'

const Table = () => {

  const [teams, setTeams] = useState([]);
  useEffect(() => {
    // Make the HTTP request using Axios
    axios.get('http://localhost:5111/api/Teams')
      .then(response => {
        // Set the retrieved data to the 'teams' state
        setTeams(response.data);
      })
      .catch(error => {
        console.error('Error fetching teams:', error);
      });
  }, []);
  return (
    <div className='p-5 h-screen'>
      <div className="overflow-auto rounded-lg shadow hidden md:block  ">
        <table className='w-full mt-10'>
          <thead className='bg-gray-50 boder-b-2 border-gray-200'>
            <tr>
              <th className='p-3 text-sm font-semibold tracking-wide text-left text-indigo-600'>
                Name
              </th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left text-indigo-600'>
                Description
              </th>
              <th className='p-3 text-sm font-semibold tracking-wide text-left text-indigo-600'>
                Actions
              </th>
            </tr>
          </thead>
          <tbody className='divide-y divide-gray-100'>
            {tabledata.map((table) => (
              <tr key={table.id} className='bg-white hover:bg-gray-50'>
                <td className='p-3 text-sm whitespace-nowrap font-bold text-gray-700'>{table.name}</td>
                <td className='p-3 text-sm whitespace-nowrap font-semibold text-gray-500'>{table.Description}</td>
                <td className='p-3 text-sm whitespace-nowrap text-gray-700'>
                  <MenuDropdown />
                </td>
              </tr>

            ))}

          </tbody>

        </table>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 md:hidden'>
      {tabledata.map((table) => (
          <div key={table.id} className='bg-white p-4 space-y-3 rounded-lg shadow'>
            <div className='flex items-center space-x-2 text-sm'>
              <div>
                <p className='text-indigo-700 font-bold text-[18px]'>
                  
                {table.name}
                  </p>
              </div>
            </div>
            <div className='text-gray-400 text-[14px] font-semibold'>
                {table.description}
            </div>
            <div className='flex justify-end'>
                <MenuDropdown/>
              </div>
          </div>
      ))}
      </div>

    </div>

  )
}

export default Table