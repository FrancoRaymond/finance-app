import React from 'react'
import { transactions } from '../../assets/data/transactions.js'

const OverviewTransactions = () => {


  return (
    <div className='p-4 bg-white rounded-md lg:col-span-3 lg:row-span-3'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold'>Transaction</h2>
        <button className='text-sm text-gray-500 cursor-pointer'>View All</button>
      </div>
      <div className='mt-4'>
        {
          transactions.map(transaction => (
            <div key={transaction.id} className='flex items-center py-1 last:pb-0 last:border-0 border-b border-gray-200'>
              <img src={transaction.image} alt="" className='size-7 rounded-full'/>
              <h3 className='font-semibold grow ml-5'>{transaction.name}</h3>
              <div>
                <p className={`font-semibold ${transaction.credit ? 'text-cyan-800' : 'text-black'}`}>{transaction.credit ? '+' : '-'}R{transaction.amount}</p>
                <span className='text-sm text-gray-500'>{transaction.date}</span>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default OverviewTransactions
