import React from 'react'
import OverviewPots from '../components/overview/OverviewPots';
import OverviewBudgets from '../components/overview/OverviewBudgets';
import OverviewTransactions from '../components/overview/OverviewTransactions';
import OverviewRecurringBills from '../components/overview/OverviewRecurringBills';

const Overview = () => {
  return (
    <div className='px-3 lg:px-6 pt-1 pb-14 sm:pb-20 md:pb-0 w-full'>
      <h1 className='text-2xl font-bold mb-6 lg:text-3xl'>Overview</h1>
      <div className='flex flex-col gap-3 sm:grid sm:grid-cols-3'>
        <div className='bg-black p-3 font-semibold rounded-md'>
          <p className='text-gray-300 text-sm'>Current Balance</p>
          <h2 className='text-white text-3xl mt-2'>R9,368.00</h2>
        </div>
        <div className='bg-white p-3 font-semibold rounded-md'>
          <p className='text-gray-500 text-sm'>Income</p>
          <h2 className='text-black text-3xl mt-2'>R6,231.25</h2>
        </div>
        <div className='bg-white p-3 font-semibold rounded-md'>
          <p className='text-gray-500 text-sm'>Expenses</p>
          <h2 className='text-black text-3xl mt-2'>R2,700.50</h2>
        </div>
      </div> 
      <div className='mt-5 grid grid-cols-1 gap-3 lg:grid-cols-5 lg:grid-rows-5'>
        <OverviewPots />
        <OverviewBudgets />
        <OverviewTransactions /> 
        <OverviewRecurringBills />
      </div>
    </div>
  )
}

export default Overview;
