import React,{useState} from 'react'
import { useAppContext } from '../context/context'
import { CurrencyFormatter } from '../utils/CurrencyFormatter'
import Chart from '../components/Chart'
import BudgetForm from '../components/budgets/BudgetForm'
import BudgetCard from '../components/budgets/BudgetCard'


const Budgets = () => {
  const [showBudgetForm, setShowBudgetForm] = useState(false)
  const {budgets, setBudgets, addedTransactions} = useAppContext()
  const [editingBudget, setEditingBudget] = useState(null);
  
  const handleEdit = (budget) => {
    setEditingBudget(budget);
    setShowBudgetForm(true);
  };

  const amountSpent = (budget, trans) => {
    return CurrencyFormatter(
      trans
      .filter(item => item.category.toLowerCase() === budget.category.toLowerCase() && item.amount[0] === "-")
      .reduce((accumulator, current) => accumulator + Number(current.amount.slice(1)), 0))
  } 


  return (
    <div className='py-5 px-2 md:px-5 w-full'>
      {
        showBudgetForm && 
        <BudgetForm 
          setShowBudgetForm={setShowBudgetForm}  
          editingBudget={editingBudget}
          setEditingBudget={setEditingBudget}
        />
      }
      <div className='flex items-center justify-between'>
        <h2 className='font-semibold text-xl sm:text-3xl'>Budgets</h2>
        <button className='rounded-md text-white bg-black hover:bg-gray-700 cursor-pointer py-1.5 px-3 text-sm sm:text-[1rem] font-semibold' onClick={() => setShowBudgetForm(true)}>+Add new Budget</button>
      </div>
      <div className='grid grid-cols-1 items-start lg:grid-cols-[40%_60%] gap-4 mt-7'>
        <div className='w-full bg-white py-10 px-5 rounded-md'>
          <Chart />
          <div className='flex flex-col gap-5 mt-10'>
            <h2 className={`font-semibold text-lg ${budgets.length === 0 ? 'hidden' : 'flex'}`}>Spending summary</h2>
            {
              budgets.map(budget => (
                <div key={budget.id} className='flex justify-between py-2 px-4 border-l-4 rounded-md'  style={{ borderColor: budget.theme }}>
                  <span className='text-gray-400 text-sm'>{budget.category.charAt(0).toUpperCase() + budget.category.slice(1)}</span>
                  <div className='flex'>
                    <strong className='text-sm'>{amountSpent(budget, addedTransactions)}</strong>
                    <span className='text-gray-400 text-sm ml-1'>of {CurrencyFormatter(budget.amount)}</span>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
        <div className='flex flex-col gap-4 mb-10 sm:mb-14 md:mb-0'>
          {
            budgets.length === 0 ? (
              <div className='rounded-md bg-gray-300 py-20 px-5 text-gray-500 text-center'>
                Added budgets will appear here
              </div>
            ) : (
              budgets.map(budget => (
                <BudgetCard key={budget.id} budget={budget} setBudgets={setBudgets} handleEdit={handleEdit}/>
              ))
            )
          }
        </div> 
      </div>
    </div>
  )
}

export default Budgets
