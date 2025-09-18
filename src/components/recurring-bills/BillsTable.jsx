import React from 'react'
import { CurrencyFormatter } from '../../utils/CurrencyFormatter'
import paidIcon from '../../assets/images/check-icon.svg'
import disclaimerIcon from '../../assets/images/disclaimer.svg'

const BillsTable = ({sortedBills, getBillStatus}) => {

    function dateSuffix(dateString) {
        const date = new Date(dateString);
        const day = date.getDate();
      
        const dayWithZero = day.toString().padStart(2, "0");
        
        let suffix = "th";
        if (day % 10 === 1 && day !== 11) suffix = "st";
        else if (day % 10 === 2 && day !== 12) suffix = "nd";
        else if (day % 10 === 3 && day !== 13) suffix = "rd";
      
        return `${dayWithZero}${suffix}`;
      }
  return (
    <table className='min-w-full table-auto mt-6 text-left flex flex-col gap-3'>
        <thead>
            <tr className='text-sm text-gray-400 px-2 items-center grid grid-cols-4 py-2 border-b border-gray-400'>
                <th className='col-span-2'>Bill title</th>
                <th className='text-center'>Bill date</th>
                <th className='text-center'>Amount</th>
            </tr>
        </thead>
        <tbody className='flex flex-col gap-3 text-sm w-full'>
            {
                sortedBills.map(bill => {
                    const status = getBillStatus(bill.date);

                    return (
                    <tr key={bill.id} className={`py-1.5 text-sm grid grid-cols-4 w-full `}>
                        <td className="flex gap-5 items-center col-span-2">
                            <img src={bill.image} alt="" className="size-7 rounded-full"/>
                            <span className="font-semibold">{bill.name}</span>
                        </td>
                        <td className="flex items-center gap-1 justify-center">
                            <span className={`${status === "paid" ? "text-[#277c78]" : "text-gray-500"}`}>{"monthly-"+ dateSuffix(bill.date)}</span>
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