import React from 'react'
import pots from '../../assets/images/pots.svg'

const OverviewPots = () => {
  return (
    <div className='p-4 bg-white rounded-md lg:col-span-3 lg:row-span-2'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold'>Pots</h2>
        <button className='text-sm text-gray-500 cursor-pointer'>See Details</button>
      </div>
      <div className='sm:grid sm:grid-cols-2 gap-5 items-center'>   
        <div className='mt-4 bg-gray-200 rounded-md p-4 flex items-center gap-5 sm:h-full'>
          <img src={pots} alt="" className='size-8'/>
          <div>
            <p className='text-sm text-gray-500'>Total saved</p>
            <h2 className='text-black text-2xl mt-2 font-bold'>R980</h2>
          </div>
        </div>
        <div className='grid grid-cols-2 mt-3 gap-4'>
          <div className='border-l-4 border-green-800 pl-4'>
            <p className='text-sm text-gray-500'>savings</p>
            <h3 className=' font-bold text-black'>R450</h3>
          </div>
          <div className='border-l-4 border-blue-800 pl-4'>
            <p className='text-sm text-gray-500'>Gift</p>
            <h3 className=' font-bold text-black'>R100</h3>
          </div>
          <div className='border-l-4 border-gray-700 pl-4'>
            <p className='text-sm text-gray-500'>Concert Ticket</p>
            <h3 className=' font-bold text-black'>R260</h3>
          </div>
          <div className='border-l-4 border-red-400 pl-4'>
            <p className='text-sm text-gray-500'>New Laptop</p>
            <h3 className=' font-bold text-black'>R700</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OverviewPots
