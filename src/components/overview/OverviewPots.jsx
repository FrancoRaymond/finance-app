import React from 'react'
import potsicon from '../../assets/images/pots.svg'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/context'
import { CurrencyFormatter } from '../../utils/CurrencyFormatter'

const OverviewPots = () => {
  const { pots } = useAppContext()
  return (
    <div className='p-4 bg-white rounded-md lg:col-span-3 lg:row-span-2'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold'>Pots</h2>
        <Link  to="/pots" className='text-sm text-gray-500 cursor-pointer'>See Details</Link>
      </div>
      {
        pots.length === 0 ? (
          <div className='mt-5 rounded-md w-full bg-gray-300 py-10 px-5 text-gray-500 text-center'>
            No pots yet
          </div>
        ) : (
          <div className='sm:grid sm:grid-cols-2 gap-5 items-center'>   
            <div className='mt-4 bg-gray-200 rounded-md p-4 flex items-center gap-5 sm:h-full'>
              <img src={potsicon} alt="" className='size-8'/>
              <div>
                <p className='text-sm text-gray-500'>Total saved</p>
                <h2 className='text-black text-lg mt-2 font-bold'>R980</h2>
              </div>
            </div>
            <div className='grid grid-cols-2 mt-3 gap-4'> 
              {
                pots.map(pot => (
                  <div key={pot.id} className='border-l-4 pl-4' style={{ borderColor: pot.theme }}>
                    <p className='text-sm text-gray-500'>{pot.name}</p>
                    <h3 className='text-sm font-bold text-black'>{CurrencyFormatter(pot.amount)}</h3>
                  </div>
                ))
              }
            </div>
          </div>
        )
      }
    </div>
  )
}

export default OverviewPots
