import React,{useEffect} from 'react'
import { useRecurringBillsStore } from '../../store/recurringBillsStore'
import { useTransactionStore } from '../../store/transactionStore'
import { CurrencyFormatter } from '../../utils/CurrencyFormatter'


const Summary = () => {
  const { getPaidBills, getUpcomingBills, getDueSoonBills, getBills} = useRecurringBillsStore()
  const { transactions } = useTransactionStore()
  const paidBills = getPaidBills()
  const upcomingBills = getUpcomingBills()
  const dueSoon = getDueSoonBills()

  const paidTotal = paidBills.reduce((acc, bill) => acc + Number(bill.amount.slice(1)), 0)
  const upcomingTotal = upcomingBills.reduce((acc, bill) => acc + Number(bill.amount.slice(1)), 0)
  const dueTotal = dueSoon.reduce((acc, bill) => acc + Number(bill.amount.slice(1)), 0)

  useEffect(() => {
    getBills()
  }, [transactions])

  return (
    <div className='bg-white rounded-md p-4 order-2 w-full'>
      <p className='font-semibold'>Summary</p>
      <div className='flex justify-between py-3 border-b border-gray-200 mt-2'>
        <p className='text-gray-600 text-[14px]'>Paid bills</p>
        <span className='font-semibold text-sm text-[#277c78]'>{paidBills.length} ( {CurrencyFormatter(paidTotal)} )</span>
      </div>
      <div className='flex justify-between py-3 border-b border-gray-200'>
        <p className='text-gray-600 text-[14px]'>Total upcoming</p>
        <span className='font-semibold text-sm'>{upcomingBills.length} ( {CurrencyFormatter(upcomingTotal)} )</span>
      </div>
      <div className='flex justify-between py-3'>
        <p className='text-red-600 text-[14px]'>Due soon</p>
        <span className='font-semibold text-red-600 text-sm'>{dueSoon.length} ( {CurrencyFormatter(dueTotal)} )</span>
      </div>
    </div>
  )
}

export default Summary
