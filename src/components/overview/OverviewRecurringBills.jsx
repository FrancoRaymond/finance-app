import React from 'react'

const OverviewRecurringBills = () => {
  return (
    <div className='p-4 bg-white rounded-md lg:col-span-2 lg:row-span-2'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold'>Recurring bills</h2>
        <button className='text-sm text-gray-500 cursor-pointer'>See Details</button>
      </div>
      <div className='mt-5 flex flex-col gap-4'>
        <div className='flex justify-between p-4 border-l-4 border-amber-700 rounded-md bg-gray-200'>
          <p className='text-gray-500'>Paid Bills</p>
          <span className='font-semibold'>R900.00</span>
        </div>
        <div className='flex justify-between p-4 border-l-4 border-blue-700 rounded-md bg-gray-200'>
          <p className='text-gray-500'>Total Upcoming</p>
          <span className='font-semibold'>R650.00</span>
        </div>
        <div className='flex justify-between p-4 border-l-4 border-green-700 rounded-md bg-gray-200'>
          <p className='text-gray-500'>Due Soon</p>
          <span className='font-semibold'>R500.00</span>
        </div>
      </div>
    </div>
  )
}

export default OverviewRecurringBills
