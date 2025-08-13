import React,{useState} from 'react'
import close from '../../assets/images/icon-close.svg'
import { useAppContext } from '../../context/context'
import CategoryInput from './CategoryInput'
import AmountInput from './AmountInput'
import ThemeInput from './ThemeInput'

const BudgetForm = ({setShowBudgetForm}) => {
  const {budgets, setBudgets} = useAppContext()
  const [formData, setFormData] = useState({category: "", amount: "", theme: ""})
  const [chosenColor, setChosenColor] = useState([])


  const handleInputChanges = (e) => {
    const {name, type, value, checked} = e.target

    setFormData(prevData => ({
      ...prevData,[name]:type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const newBudget = {
      id: Date.now(),
      category: formData.category,
      amount: parseFloat(formData.amount),
      theme: formData.theme
    }

    if (budgets.some((b) => b.theme === newBudget.theme)) {
      alert(`The theme "${newBudget.theme}" is already used. Please choose a different one.`);
      return;
    }
  
    if (budgets.some((b) => b.category.toLowerCase() === newBudget.category.toLowerCase())) {
      alert(`The category "${newBudget.category}" already exists. Please choose a different one.`);
      return;
    }
    
    setBudgets((prev) => [...prev, newBudget])
    setShowBudgetForm(false)    
 
  }

  return (
    <div className='budgetForm fixed flex items-center transition-all duration-500 justify-center top-0 left-0 w-full h-screen'>
      <div className='bg-white max-w-md w-full p-5 rounded-md'>
        <div className='flex justify-between items-center mb-5'>
          <p className='font-semibold text-md text-[1rem]'>Add new Budget</p>
          <button onClick={() => setShowBudgetForm(false)}><img src={close} alt="" className='size-5 cursor-pointer'/></button>
        </div>
        <p className='text-sm text-gray-400 mb-4'>Choose a category to set a spending budget. These categories can help you monitor spending.</p>
        <form action="" onSubmit={handleSubmit} className='text-[15px] flex flex-col'>
          <label htmlFor="category" className='text-sm font-semibold text-gray-400 mt-2.5'>Category</label>

          <CategoryInput formData={formData} handleInputChanges={handleInputChanges} />

          <label htmlFor="amount" className='text-sm font-semibold text-gray-400 mt-2.5'>Maximum spend</label>

          <AmountInput formData={formData} handleInputChanges={handleInputChanges} />

          <label htmlFor="theme" className='text-sm font-semibold text-gray-400 mt-2.5'>Theme</label>

          <ThemeInput formData={formData} handleInputChanges={handleInputChanges} />

          <button type='submit' className='bg-gray-950 mt-2.5 cursor-pointer hover:bg-gray-700 py-2.5 rounded-md text-white w-full'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default BudgetForm
