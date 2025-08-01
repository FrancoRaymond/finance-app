import React,{useState} from 'react'
import BudgetForm from '../components/budgets/BudgetForm'

const Budgets = () => {
  const [showBudgetForm, setShowBudgetForm] = useState(false)
  return (
    <div className='py-5 px-2 md:px-5 w-full'>
      {showBudgetForm && <BudgetForm setShowBudgetForm={setShowBudgetForm} />}
      <div className='flex items-center justify-between'>
        <h2 className='font-semibold text-2xl sm:text-3xl'>Budgets</h2>
        <button className='rounded-md text-white bg-black hover:bg-gray-700 cursor-pointer py-1.5 px-3 text-[1rem] font-semibold' onClick={() => setShowBudgetForm(true)}>+Add new Budget</button>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-7'>
        <div className='w-full bg-white p-20 rounded-md'></div>
        <div className='bg-white w-full p-5 rounded-md'>
          <div>
            <div className='flex justify-between items-center'>
              <div className='flex items-center gap-3.5'>
                <div className='size-3 rounded-full bg-blue-900'></div>
                <h2 className='text-2xl font-semibold'>Groceries</h2>
              </div>
              <button className='flex gap-0.5 cursor-pointer active:scale-150 transition duration-200'>
                <div className='size-1 rounded-full bg-black'></div>
                <div className='size-1 rounded-full bg-black'></div>
                <div className='size-1 rounded-full bg-black'></div>
              </button>
            </div>
            <span className='text-gray-400'>Maximum of R5000.00</span>
            <div className='h-6 w-full p-1 rounded-md bg-gray-200 mt-5'>
              <div className={`bg-blue-900 h-full w-[60%] rounded-md`}></div>
            </div>
            <div className='grid grid-cols-2 mt-5 py-2'>
              <div className='flex flex-col px-8 border-l-4 border-blue-900 rounded-md'>
                <p className='text-gray-500'>Spent</p>
                <span className='font-semibold'>R900.00</span>
              </div>
              <div className='flex flex-col px-8 border-l-4 border-cyan-500 rounded-md'>
                <p className='text-gray-500'>Free</p>
                <span className='font-semibold'>R900.00</span>
              </div>
            </div>
            <div className='p-4 bg-gray-200 rounded-md lg:col-span-3 lg:row-span-3 mt-4'>
              <div className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold'>Latest spending</h2>
                <button className='text-sm text-gray-500 cursor-pointer'>View All</button>
              </div>
              <div className='mt-3'>
                <div className='flex items-center py-1 last:pb-0 last:border-0 border-b border-gray-200'>
                  <div className='size-7 rounded-full bg-blue-900'></div>
                  <h3 className='font-semibold grow ml-5'>Services</h3>
                  <div>
                    <p className={`font-semibold text-cyan-800`}>R500</p>
                    <span className='text-sm text-gray-500'>12 Aug 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Budgets
