import React from 'react'
import Chart from '../Chart';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/context';

const OverviewBudgets = () => { 
const { budgets } = useAppContext()
  return (
    <div className='p-4 bg-white rounded-md lg:col-span-2 lg:row-span-3'>
      <div className='flex items-center justify-between mb-4'>
        <h2 className='text-lg font-semibold'>Budgets</h2>
        <Link  to="/budgets" className='text-sm text-gray-500 cursor-pointer'>See Details</Link>
      </div>
      <div className='sm:flex sm:items-center sm:justify-around lg:flex-col'>  
        <Chart />
        <div className='grid grid-cols-2 gap-3 sm:items-start h-fit sm:grid-cols-1 lg:grid-cols-2 lg:mt-2 lg:gap-x-10 lg:my-3'>
        { 
          budgets.slice(0, 4).map(budget => (
            <div key={budget.id} className='flex flex-col gap-1 py-1 px-2.5 border-l-4 rounded-md'  style={{ borderColor: budget.theme }}>
              <span className='text-gray-400 text-sm'>{budget.category.charAt(0).toUpperCase() + budget.category.slice(1)}</span>
              <span className='text-sm font-semibold'>R{budget.amount}</span>
            </div>
          ))
        }
        </div>
      </div>
    </div>
  )
}

export default OverviewBudgets;
