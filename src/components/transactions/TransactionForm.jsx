import React,{useState} from 'react'
import close from '../../assets/images/icon-close.svg'

const TransactionForm = ({setShowTransactionForm}) => {
  const [formData, setFormData] = useState({name: "", date: "", category: "", amount: null, recurring: false})

  const handleInputChanges = (e) => {
    const {name, type, value, checked} = e.target

    setFormData(prevData => ({
      ...prevData,[name]:type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowTransactionForm(false) 
  }

  return (
    <div className='transactionForm fixed flex items-center transition-all duration-500 justify-center top-0 left-0 w-full h-screen'>
      <div className='bg-white max-w-md w-full p-5 rounded-md'>
          <div className='flex justify-between items-center mb-5'>
            <p className='font-semibold text-md text-[1rem]'>Add new Transaction</p>
            <button onClick={() => setShowTransactionForm(false)}><img src={close} alt="" className='size-5 cursor-pointer'/></button>
          </div>
          <form action="" onSubmit={handleSubmit} className='text-[15px] flex flex-col'>
            <label htmlFor="transactionName" className='text-sm font-semibold text-gray-400'>Transaction name</label>
            <input 
              type="text" 
              value={formData.name} 
              onChange={handleInputChanges} 
              name="name" 
              id='name' 
              length="30"
              required 
              placeholder='e.g Urban Service Hub' 
              className='outline-none mt-1.5 border rounded-md py-2 px-3 border-gray-400'
            />
            <span className='text-gray-400 ml-auto'>{30 - formData.name.length} Characters left</span>
            <label htmlFor="transaction date" className='text-sm font-semibold text-gray-400 mt-2.5'>Transaction Date</label>
            <input 
              type="date" 
              id='date' 
              value={formData.date} 
              onChange={handleInputChanges} 
              name="date" 
              required 
              placeholder='Pick a date' 
              className='outline-none mt-1.5 border rounded-md py-2 px-3 border-gray-400'
            />
            <label htmlFor="" className='text-sm font-semibold text-gray-400 mt-2.5'>Category</label>
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
            <label htmlFor="" className='text-sm font-semibold text-gray-400 mt-2.5'>Amount</label>
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
            <div className='flex items-center gap-3 my-2.5'>
              <label htmlFor="recurring" className='text-gray-400'>Recurring</label>
              <input 
                type="checkbox" 
                id='recurring'
                checked={formData.recurring} 
                onChange={handleInputChanges} 
                name="recurring"
              />
            </div> 
            <button type='submit' className='bg-gray-950 mt-2.5 cursor-pointer hover:bg-gray-700 py-2.5 rounded-md text-white w-full'>Submit</button>
          </form>
      </div>
    </div>
  )
}

export default TransactionForm
