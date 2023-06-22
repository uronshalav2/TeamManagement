import React from 'react'
import MenuDropdown from '../MenuDropdown'
import { tabledata } from '../../Static'

const Table = () => {
  return (
    <table className='table-auto w-full mt-10'>
      <thead className='bg-gray-50 boder-b-2 border-gray-200'>
        <tr>
          <th className='p-3 text-sm font-semibold tracking-wide text-left text-indigo-600'>
            Name
          </th>
          <th className='p-3 text-sm font-semibold tracking-wide text-left text-indigo-600'>
            Description
          </th>
          <th className='p-3 text-sm font-semibold tracking-wide text-left text-indigo-600'>
            Location
          </th>
          <th className='p-3 text-sm font-semibold tracking-wide text-left text-indigo-600'>
            Status
          </th>
          <th className='p-3 text-sm font-semibold tracking-wide text-left text-indigo-600'>
            Actions
          </th>
        </tr>
      </thead>
      <tbody>
      {tabledata.map((table) => (
        <tr key={table.id} className='bg-white hover:bg-gray-50'>
          <td className='p-3 text-sm text-gray-700'>{table.name}</td>
          <td className='p-3 text-sm text-gray-700'>{table.Description}</td>
          <td className='p-3 text-sm text-gray-700'>{table.Location}</td>
          <td className={`p-3 text-sm text-gray-700 ${table.Status === 'Active' ? 'text-green-400' : 'text-red-500'}`}>{table.Status}</td>
          <td className='p-3 text-sm text-gray-700'>
            <MenuDropdown/>
          </td>
        </tr>

      ))}

      </tbody>

    </table>
  )
}

export default Table