import React,{useState} from 'react'
import { useTransactionStore } from '../../store/transactionStore';
import toast from "react-hot-toast";
import AmountInput from '../AmountInput'
import close from '../../assets/images/icon-close.svg'
import icon1 from '../../assets/images/Logo-1.jpg'
import icon2 from '../../assets/images/Logo-3.jpg'
import icon3 from '../../assets/images/Logo-3.jpg'
import icon4 from '../../assets/images/Logo-4.jpg'
import icon5 from '../../assets/images/Logo-5.jpg'
import icon6 from '../../assets/images/Logo-6.jpg'
import icon7 from '../../assets/images/Logo-7.jpg'
import icon8 from '../../assets/images/Logo-8.jpg'
import icon9 from '../../assets/images/Logo-9.jpg'
import icon10 from '../../assets/images/Logo-10.jpg'
import icon11 from '../../assets/images/Logo-11.jpg'
import icon12 from '../../assets/images/Logo-12.jpg'
import icon13 from '../../assets/images/logo-13.jpg'
import CategoryInput from '../CategoryInput'
import NameInput from '../NameInput'


const TransactionForm = ({setShowTransactionForm}) => {
  const [amountError, setAmountError ] = useState(false)
  const images = [icon1, icon2, icon3, icon4, icon5, icon6, icon6, icon7, icon8, icon9, icon10, icon11, icon12, icon13]
  const [formData, setFormData] = useState(
    {
      image: images[Math.floor(Math.random() * images.length)],
      name: "", 
      date: "", 
      category: "", 
      amount: "", 
      recurring: false
    }
  )

  const { addTransaction } = useTransactionStore()

  const handleInputChanges = (e) => {
    const {name, type, value, checked} = e.target

    setFormData(prevData => ({
      ...prevData,[name]:type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault() 
   
    let formattedAmount = formData.amount.trim()
  
    if((!formattedAmount.startsWith("+") && !formattedAmount.startsWith("-")) || isNaN(parseInt(formattedAmount.slice(1)))) {
      setAmountError(true);
      return;
    } else {
      setAmountError(false);
    }
  
    const newTransaction = {
      ...formData,
      amount: formattedAmount
    }

    addTransaction({id:Date.now(), ...newTransaction}) 
    toast.success(`${formData.name} added succesfully`)
    setFormData({
      image: images[Math.floor(Math.random() * images.length)],
      name: "",
      date: "",
      category: "",
      amount: "",
      recurring: false
    })
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
          <label htmlFor="name" className='text-sm font-semibold text-gray-400'>Transaction name</label>
          <NameInput
            placeholder="e.g Urban Studios" 
            formData={formData} 
            handleInputChanges={handleInputChanges} 
            maxLength={30}
          />
          <span className='text-gray-400 ml-auto'>{30 - formData.name.length} Characters left</span>
          <label htmlFor="date" className='text-sm font-semibold text-gray-400 mt-2.5'>Transaction Date</label>
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
          <label htmlFor="category" className='text-sm font-semibold text-gray-400 mt-2.5'>Category</label>
          <CategoryInput
            formData={formData.category} 
            handleInputChanges={handleInputChanges}
          />
          <label htmlFor="amount" className='text-sm font-semibold text-gray-400 mt-2.5'>Amount</label>
          <AmountInput 
            type="text" 
            formData={formData} 
            handleInputChanges={handleInputChanges} 
          />
          { amountError && <span className='text-[12px] text-red-600'>please start with + or - to indicate credit or derbit</span>}
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