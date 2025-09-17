import React from 'react'
import { Link } from 'react-router-dom'
import { useAppContext } from '../../context/context.jsx'

const OverviewTransactions = () => {
  const { addedTransactions } = useAppContext()

  return (
    <div className='p-4 bg-white rounded-md lg:col-span-3 lg:row-span-3'>
      <div className='flex items-center justify-between'>
        <h2 className='text-lg font-semibold'>Transaction</h2>
        <Link  to="/transactions" className='text-sm text-gray-500 cursor-pointer'>View All</Link>
      </div>
      {
        addedTransactions.length === 0 ? (
          <div className='mt-5 rounded-md w-full bg-gray-300 py-10 px-5 text-gray-500 text-center'>
            No transactions yet
          </div>
        ) : (
          <div className='mt-4'>
            {
              addedTransactions.slice(0, 5).map(transaction => (
                <div key={transaction.id} className='flex items-center py-1 last:pb-0 last:border-0 border-b border-gray-200'>
                  <img src={transaction.image} alt="" className='size-7 rounded-full'/>
                  <h3 className='font-semibold grow ml-5'>{transaction.name}</h3>
                  <div>
                    <p className={`font-semibold ${transaction.amount[0] === '+' ? 'text-cyan-800' : 'text-black'}`}>{transaction.amount[0]}R{transaction.amount.slice(1)}</p>
                    <span className='text-sm text-gray-500'>{transaction.date}</span>
                  </div>
                </div>
              ))
            }
          </div>
        )
      }
    </div>
  )
}

export default OverviewTransactions
