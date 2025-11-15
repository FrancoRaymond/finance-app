import React from 'react'
import { useRecurringBillsStore } from '../../store/recurringBillsStore'
import { CurrencyFormatter } from '../../utils/CurrencyFormatter'
import paidIcon from '../../assets/images/check-icon.svg'
import disclaimerIcon from '../../assets/images/disclaimer.svg'

const BillsTable = ({ filteredBills }) => {
    const { getBillStatus, dateSuffix } = useRecurringBillsStore()

  return (
    <table className='min-w-full table-auto mt-6 text-left flex flex-col gap-3'>
        <thead>
            <tr className='text-sm text-gray-400 px-2 items-center grid grid-cols-3 sm:grid-cols-4 py-2 border-b border-gray-400'>
                <th className='sm:col-span-2'>Bill title</th>
                <th className='text-center'>Bill date</th>
                <th className='text-center'>Amount</th>
            </tr>
        </thead>
        <tbody className='flex flex-col gap-3 text-sm w-full'>
            {
                filteredBills.map(bill => {
                    const status = getBillStatus(bill.date);

                    return (
                    <tr key={bill.id} className={`even:bg-gray-100 py-1.5 text-sm grid grid-cols-3 sm:grid-cols-4 w-full `}>
                        <td className="flex gap-2 sm:gap-5 items-center sm:col-span-2">
                            <img src={bill.image} alt="" className="size-7 rounded-full"/>
                            <span className="font-semibold">{bill.name}</span>
                        </td>
                        <td className="flex items-center gap-1 justify-center px-2">
                            <span className={`${status === "paid" ? "text-[#277c78]" : "text-gray-500"}`}>{"Monthly-"+ dateSuffix(bill.date)}</span>
                            <img src={status === "paid" ? paidIcon : status === "due" ? disclaimerIcon : null} />
                        </td>
                        <td className={`${status === "due" ? 'text-red-700' : ''} text-center font-semibold `}>{CurrencyFormatter(bill.amount.slice(1))}</td>
                    </tr>
                    );
                })
            }
        </tbody>
    </table>
  )
}

export default BillsTable