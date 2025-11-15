import React,{useState, useEffect} from 'react'
import toast from 'react-hot-toast'
import close from '../../assets/images/icon-close.svg'
import { useBudgetsStore } from '../../store/budgetsStore'
import CategoryInput from '../CategoryInput'
import AmountInput from '../AmountInput'
import ThemeInput from '../ThemeInput'

const BudgetForm = ({setShowBudgetForm, setEditingBudget, editingBudget}) => {
  const { budgets, addBudget, editBudget } = useBudgetsStore()
  const [formData, setFormData] = useState({
    category: editingBudget ? editingBudget.category : "",
    amount: editingBudget ? editingBudget.amount : "",
    theme: editingBudget ? editingBudget.theme : "",
  });

  useEffect(() => {
    if (editingBudget) {
      setFormData({
        category: editingBudget.category,
        amount: editingBudget.amount,
        theme: editingBudget.theme,
      });
    }
  }, [editingBudget]);


  const handleInputChanges = (e) => {
    const {name, type, value, checked} = e.target
    setFormData(prevData => ({
      ...prevData,[name]:type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const updatedBudget = {
      id: editingBudget ? editingBudget.id : Date.now(),
      category: formData.category,
      amount: parseFloat(formData.amount),
      theme: formData.theme,
    };
  
    if (editingBudget) {
      
      editBudget(updatedBudget.id, updatedBudget)
      toast.success(`${updatedBudget.category} budget updated successfully`)
      setEditingBudget(null);
    } else {
      
      if (budgets.some((b) => b.theme === updatedBudget.theme)) {
        toast.error(`Theme already used — please select a different one.`);
        return;
      }
  
      if (budgets.some((b) => b.category.toLowerCase() === updatedBudget.category.toLowerCase())) {
        toast.error(`The category "${updatedBudget.category}" already exists. Please choose a different one.`);
        return;
      }
  
      addBudget(updatedBudget);
      toast.success(`${updatedBudget.category} budget added successfully`)
    }
  
    setFormData({ category: "", amount: "", theme: "" });
    setEditingBudget(null);
    setShowBudgetForm(false);
  };

  const handleClose = () => {
    setShowBudgetForm(false)
    setEditingBudget(null)
  }
  
  return (
    <div className='budgetForm fixed flex items-center transition-all duration-500 justify-center top-0 left-0 w-full h-screen'>
      <div className='bg-white max-w-md w-full p-5 rounded-md'>
        <div className='flex justify-between items-center mb-5'>
          <p className='font-semibold text-md text-[1rem]'>Add new Budget</p>
          <button 
            onClick={() => handleClose()}
          >
            <img 
              src={close} 
              alt="" 
              className='size-5 cursor-pointer'
            />
          </button>
        </div>
        <p className='text-sm text-gray-400 mb-4'>Choose a category to set a spending budget. These categories can help you monitor spending.</p>
        <form 
          action="" 
          onSubmit={handleSubmit} 
          className='text-[15px] flex flex-col'
        >
          <label htmlFor="category" className='text-sm font-semibold text-gray-400 mt-2.5'>Category</label>
          <CategoryInput 
            formData={formData} 
            handleInputChanges={handleInputChanges} 
          />
          <label htmlFor="amount" className='text-sm font-semibold text-gray-400 mt-2.5'>Maximum spend</label>
          <AmountInput 
            type="number"
            formData={formData} 
            handleInputChanges={handleInputChanges} 
          />
          <label htmlFor="theme" className='text-sm font-semibold text-gray-400 mt-2.5'>Theme</label>
          <ThemeInput 
            formData={formData} 
            handleInputChanges={handleInputChanges} 
          />
          <button type='submit' className='bg-gray-950 mt-2.5 cursor-pointer hover:bg-gray-700 py-2.5 rounded-md text-white w-full'>{editingBudget ? "Update" : "Submit"}</button>
        </form>
      </div>
    </div>
  )
}

export default BudgetForm