import React from 'react'
import { CurrencyFormatter } from '../../utils/CurrencyFormatter'

const Summary = ({paidBills, upcomingBills, dueSoon}) => {

  return (
    <div className='bg-white rounded-md p-4 order-2 w-full'>
        <p className='font-semibold'>Summary</p>
        <div className='flex justify-between py-3 border-b border-gray-200 mt-2'>
            <p className='text-gray-600 text-[14px]'>Paid bills</p>
            <span className='font-semibold text-sm'>{paidBills.length} ( {CurrencyFormatter(paidBills.reduce((acc, bill) => acc + Number(bill.amount.slice(1)), 0))} )</span>
        </div>
        <div className='flex justify-between py-3 border-b border-gray-200'>
            <p className='text-gray-600 text-[14px]'>Total upcoming</p>
            <span className='font-semibold text-sm'>{upcomingBills.length} ( {CurrencyFormatter(upcomingBills.reduce((acc, bill) => acc + Number(bill.amount.slice(1)), 0))} )</span>
        </div>
        <div className='flex justify-between py-3'>
            <p className='text-red-600 text-[14px]'>Due soon</p>
            <span className='font-semibold text-red-600 text-sm'>{dueSoon.length} ( {CurrencyFormatter(dueSoon.reduce((acc, bill) => acc + Number(bill.amount.slice(1)), 0))} )</span>
        </div>
    </div>
  )
}

export default Summary
