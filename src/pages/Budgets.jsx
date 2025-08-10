import React,{useState} from 'react'
import { useAppContext } from '../context/context'
import Chart from '../components/Chart'
import BudgetForm from '../components/budgets/BudgetForm'
import BudgetCard from '../components/budgets/BudgetCard'
import DeleteModal from '../components/DeleteModal'


const Budgets = () => {
  const [showBudgetForm, setShowBudgetForm] = useState(false)
  const {budgets, setBudgets} = useAppContext()

  return (
    <div className='py-5 px-2 md:px-5 w-full'>
      {showBudgetForm && <BudgetForm setShowBudgetForm={setShowBudgetForm} />}
      <div className='flex items-center justify-between'>
        <h2 className='font-semibold text-2xl sm:text-3xl'>Budgets</h2>
        <button className='rounded-md text-white bg-black hover:bg-gray-700 cursor-pointer py-1.5 px-3 text-[1rem] font-semibold' onClick={() => setShowBudgetForm(true)}>+Add new Budget</button>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-4 mt-7'>
        <div className='w-full bg-white p-20 rounded-md'>
          <Chart />
        </div>
        {
          budgets.length === 0 ? (
            <div className='rounded-md bg-gray-300 py-20 px-5 text-gray-500 text-center'>
              Added budgets will appear here
            </div>
          ) : (
            budgets.map(budget => (
              <BudgetCard key={budget.id} budget={budget} />
            ))
          )
        }
      </div>
    </div>
  )
}

export default Budgets
