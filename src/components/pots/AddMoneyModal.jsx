import React,{useState} from 'react'
import close from '../../assets/images/icon-close.svg'

const AddMoneyModal = () => {
    const [amountToAdd, setAmountToAdd] = useState('')


  return (
    <div className='budgetForm fixed flex items-center transition-all duration-500 justify-center top-0 left-0 w-full h-screen'>
        <div className='bg-white max-w-md w-full p-5 rounded-md'>
            <div className='flex items-center justify-between'>
                <h2 className='text-lg font-semibold'>Delete Groceries?</h2>
                <button><img src={close} alt="" className='size-5 cursor-pointer'/></button>
            </div>
            <p className='text-gray-400 mt-6'>Add money to your pot to keep it separate from your main balance. As soon as you add this money, it will be deducted from your current balance.</p>
            <div className=' flex justify-between mt-5'>
                <span className='text-gray-600 text-sm'>0.00%</span>
                <span className='text-lg font-bold'>R700</span>
            </div>
            <div className='h-2 w-full bg-gray-200 rounded-3xl mt-1'>
                <div className='bg-orange-400 h-full w-[30%] rounded-3xl'></div>
            </div>
            <div className='text-gray-600 flex justify-between text-sm mt-1'>
                <span>0.00%</span>
                <span>Target of R7 000</span>
            </div>
            <form action="" className=' flex flex-col'>
                <label htmlFor="amount" className='text-sm font-semibold text-gray-400 mt-2.5'>Amount to add</label>
                <input 
                type="number" 
                id='amount'
                value={amountToAdd} 
                onChange={(e) => setAmountToAdd(e.target.value)} 
                name="amount" 
                required 
                placeholder='e.g R1000' 
                className='outline-none mt-1.5 border rounded-md py-2 px-3 border-gray-400'
            />
                <button type='submit' className='bg-gray-950 mt-5 cursor-pointer hover:bg-gray-700 py-2.5 rounded-md text-white w-full'>Submit</button>
            </form>
        </div>
    </div>
  )
}

export default AddMoneyModal;
