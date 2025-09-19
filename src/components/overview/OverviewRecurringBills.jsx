import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/context'
import { CurrencyFormatter } from '../../utils/CurrencyFormatter'

const OverviewRecurringBills = () => {
  const { paidBills, upcomingBills, dueSoon, sortedBills } = useAppContext()


  return (
    <div className='p-4 bg-white rounded-md lg:col-span-2 lg:row-span-2'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold'>Recurring bills</h2>
        <Link  to="/recurringbills" className='text-sm text-gray-500 cursor-pointer'>See Details</Link>
      </div>
      {
        sortedBills.filter(trans => trans.recurring === true).length === 0 ? (
          <div className='mt-5 rounded-md w-full bg-gray-300 py-10 px-5 text-gray-500 text-center'>
            No recurring transactions yet
          </div>
        ) : (
          <div className='mt-5 flex flex-col gap-4 text-sm'>
            <div className='flex justify-between p-4 border-l-4 border-amber-700 rounded-md bg-gray-200'>
              <p className='text-gray-500'>Paid Bills</p>
              <span className='font-semibold'>{CurrencyFormatter(paidBills.reduce((acc, bill) => acc + Number(bill.amount.slice(1)), 0))}</span>
            </div>
            <div className='flex justify-between p-4 border-l-4 border-blue-700 rounded-md bg-gray-200'>
              <p className='text-gray-500'>Total Upcoming</p>
              <span className='font-semibold'>{CurrencyFormatter(upcomingBills.reduce((acc, bill) => acc + Number(bill.amount.slice(1)), 0))}</span>
            </div>
            <div className='flex justify-between p-4 border-l-4 border-green-700 rounded-md bg-gray-200'>
              <p className='text-gray-500'>Due Soon</p>
              <span className='font-semibold'>{CurrencyFormatter(dueSoon.reduce((acc, bill) => acc + Number(bill.amount.slice(1)), 0))}</span>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default OverviewRecurringBills