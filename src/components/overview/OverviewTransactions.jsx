import React from 'react'

const OverviewTransactions = () => {


  return (
    <div className='p-4 bg-white rounded-md md:col-span-3 md:row-span-3'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold'>Transaction</h2>
        <button className='text-sm text-gray-500 cursor-pointer'>View All</button>
      </div>
    </div>
  )
}

export default OverviewTransactions
