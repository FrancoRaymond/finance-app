import React,{ useEffect } from 'react'
import { useTransactionStore } from '../store/transactionStore';
import { usePotsStore } from '../store/potsStore';
import { useTotalsStore } from '../store/totalsStore';
import { CurrencyFormatter } from '../utils/CurrencyFormatter';
import OverviewPots from '../components/overview/OverviewPots';
import OverviewBudgets from '../components/overview/OverviewBudgets';
import OverviewTransactions from '../components/overview/OverviewTransactions';
import OverviewRecurringBills from '../components/overview/OverviewRecurringBills';

const Overview = () => {
  const { pots} = usePotsStore()
  const { transactions } = useTransactionStore()
  const { calculateTotals, income, expenses, balance } = useTotalsStore()

  useEffect(() => {
    calculateTotals()
  }, [transactions, pots])
  
  return (
    <div className='px-3 lg:px-6 pt-1 pb-14 sm:pb-20 md:pb-0 w-full'>
      <h1 className='text-2xl font-bold mb-6 lg:text-3xl'>Overview</h1>
      <div className='flex flex-col gap-3 sm:grid sm:grid-cols-3'>
        <div className='bg-black p-3 font-semibold rounded-md'>
          <p className='text-gray-300 text-sm'>Current Balance</p>
          <h2 className='text-white text-2xl mt-2'>{CurrencyFormatter(balance)}</h2>
        </div>
        <div className='bg-white p-3 font-semibold rounded-md'>
          <p className='text-gray-500 text-sm'>Income</p>
          <h2 className='text-black text-2xl mt-2'>{CurrencyFormatter(income)}</h2>
        </div>
        <div className='bg-white p-3 font-semibold rounded-md'>
          <p className='text-gray-500 text-sm'>Expenses</p>
          <h2 className='text-black text-2xl mt-2'>{CurrencyFormatter(expenses)}</h2>
        </div>
      </div> 
      <div className='mt-5 grid grid-cols-1 gap-3 xl:grid-cols-5 lg:grid-rows-5'>
        <OverviewPots />
        <OverviewBudgets />
        <OverviewTransactions /> 
        <OverviewRecurringBills />
      </div>
    </div>
  )
}

export default Overview;
