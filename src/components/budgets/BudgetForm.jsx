import React,{useState} from 'react'
import close from '../../assets/images/icon-close.svg'
import { useAppContext } from '../../context/context'

const BudgetForm = ({setShowBudgetForm}) => {
  const {budgets, setBudgets} = useAppContext()
  const [formData, setFormData] = useState({category: "", amount: "", name: ""})

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
      theme: formData.name
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
            <select 
              name="category"
              id='category'
              value={formData.category} 
              onChange={handleInputChanges}
              required 
              placeholder="Select a category" 
              className='outline-none mt-1.5 border rounded-md py-2 px-3 border-gray-400'
            >
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
            <label htmlFor="amount" className='text-sm font-semibold text-gray-400 mt-2.5'>Maximum spend</label>
            <input 
              type="number" 
              id='amount'
              value={formData.amount} 
              onChange={handleInputChanges} 
              name="amount" 
              required 
              placeholder='e.g R1000' 
              className='outline-none mt-1.5 border rounded-md py-2 px-3 border-gray-400'
            />
            <label htmlFor="theme" className='text-sm font-semibold text-gray-400 mt-2.5'>Theme</label>
            <select 
              name="theme" 
              id='theme'
              value={formData.theme} 
              onChange={handleInputChanges}
              required 
              className='outline-none mt-1.5 border rounded-md py-2 px-3 border-gray-400'
            >
              <option value="">Select a theme</option>
              <option value="green">Green</option>
              <option value="grey">Grey</option>
              <option value="cyan">Cyan</option>
              <option value="orange">Orange</option>
              <option value="purple">Purple</option>
              <option value="red">Red</option>
              <option value="yellown">Yellow</option>
              <option value="navy">Navy</option>
              <option value="turquoise">Turquoise</option>
              <option value="brown">Brown</option>
              <option value="magenta">Magenta</option>
            </select>
            <button type='submit' className='bg-gray-950 mt-2.5 cursor-pointer hover:bg-gray-700 py-2.5 rounded-md text-white w-full'>Submit</button>
          </form>
      </div>
    </div>
  )
}

export default BudgetForm
