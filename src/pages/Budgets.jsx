import React,{useState} from 'react'
import BudgetForm from '../components/budgets/BudgetForm'

const Budgets = () => {
  const [showBudgetForm, setShowBudgetForm] = useState(false)
  return (
    <div className='py-5 px-2 md:px-5 w-full'>
      {showBudgetForm && <BudgetForm setShowBudgetForm={setShowBudgetForm} />}
      <div className='flex items-center justify-between'>
        <h2 className='font-semibold sm:text-3xl'>Budgets</h2>
        <button className='rounded-md text-white bg-black hover:bg-gray-700 cursor-pointer py-1.5 px-3 text-[1rem] font-semibold' onClick={() => setShowBudgetForm(true)}>+Add new Budget</button>
      </div>
    </div>
  )
}

export default Budgets
