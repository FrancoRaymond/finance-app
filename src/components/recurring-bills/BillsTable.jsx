import React from 'react'
import { CurrencyFormatter } from '../../utils/CurrencyFormatter'
import { formatDate } from '../../utils/DateFormatter'

const BillsTable = ({sortedBills}) => {
  return (
    <table className='min-w-full table-auto mt-6 text-left flex flex-col gap-3'>
        <thead>
            <tr className='text-sm text-gray-400 px-2 items-center grid grid-cols-4 py-2 border-b border-gray-400'>
            <th className='col-span-2'>Bill title</th>
            <th className='text-center'>Bill date</th>
            <th className='text-center'>Amount</th>
            </tr>
        </thead>
        <tbody className='flex flex-col gap-3'>
            {
                sortedBills.map(bill => (
                    <tr key={bill.id} className='py-1.5 text-sm grid grid-cols-4'>
                        <td className='flex gap-5 items-center col-span-2'><img src={bill.image} alt="" className='size-7 rounded-full' /><span className='font-semibold'>{bill.name}</span></td>
                        <td className='text-center'>{formatDate(bill.date)}</td>
                        <td className='text-center font-semibold'>{CurrencyFormatter(bill.amount.slice(1))}</td>
                    </tr>
                ))
            }
        </tbody>
    </table>
  )
}

export default BillsTable