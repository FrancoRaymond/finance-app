import React from 'react'
import close from '../../assets/images/icon-close.svg'

const TransactionForm = ({setShowTransactionForm}) => {
  return (
    <div className='transactionForm fixed flex items-center transition-all duration-500 justify-center top-0 left-0 w-full h-screen'>
      <div className='bg-white max-w-md w-full p-5 rounded-md'>
          <div className='flex justify-between items-center mb-5'>
            <p className='font-semibold text-md text-[1rem]'>Add new Transaction</p>
            <button onClick={() => setShowTransactionForm(false)}><img src={close} alt="" className='size-5 cursor-pointer'/></button>
          </div>
          <form action="" className='text-[15px] flex flex-col'>
            <label htmlFor="transactionName" className='text-sm font-semibold text-gray-400'>Transaction name</label>
            <input type="text" placeholder='e.g Urban Service Hub' className='outline-none mt-1.5 border rounded-md py-2 px-3 border-gray-400'/>
            <span className='text-gray-400 ml-auto'>{} Characters left</span>
            <label htmlFor="" className='text-sm font-semibold text-gray-400 mt-2.5'>Transaction Date</label>
            <input type="date" placeholder='Pick a date' className='outline-none mt-1.5 border rounded-md py-2 px-3 border-gray-400'/>
            <label htmlFor="" className='text-sm font-semibold text-gray-400 mt-2.5'>Category</label>
            <select name="" id="" placeholder="Select a category" className='outline-none mt-1.5 border rounded-md py-2 px-3 border-gray-400'>
              <option value="">Select a category</option>
              <option value="entertainment">Entertainment</option>
              <option value="bills">Bills</option>
              <option value="groceries">Groceries</option>
              <option value="diningOut">Dining Out</option>
              <option value="transportation">Transportation</option>
              <option value="personalCare">Personal Care</option>
              <option value="education">Education</option>
              <option value="lifestyle">Lifestyle</option>
              <option value="shopping">Shopping</option>
              <option value="general">General</option>
            </select>
            <label htmlFor="" className='text-sm font-semibold text-gray-400 mt-2.5'>Amount</label>
            <input type="number" placeholder='e.g R1000' className='outline-none mt-1.5 border rounded-md py-2 px-3 border-gray-400'/>
            <div className='flex items-center gap-3 my-2.5'>
              <label htmlFor="recurring" className='text-gray-400'>Recurring</label>
              <input type="checkbox" />
            </div> 
            <button type='submit' className='bg-gray-950 mt-2.5 cursor-pointer hover:bg-gray-700 py-2.5 rounded-md text-white w-full'>Submit</button>
          </form>
      </div>
    </div>
  )
}

export default TransactionForm
