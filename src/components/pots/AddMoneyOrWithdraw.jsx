import React,{ useState } from 'react'
import { useAppContext } from '../../context/context'
import close from '../../assets/images/icon-close.svg'

const AddMoneyOrWithdraw = (
    { 
        actionType, 
        setActionType, 
        setShowAddMoneyOrWithdrawModal, 
        pots, 
        setPots, 
        potToEditId, 
        setPotToEditId
    }
) => {
    const [amount, setAmount] = useState('')
    const { balance, setBalance } = useAppContext()
    const currentPot = pots.find(pot => pot.id === potToEditId);

    const handleClose = () => {
        setShowAddMoneyOrWithdrawModal(false)
        setActionType("")
        setPotToEditId(null)
        setAmount('')
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const numericAmount = Number(amount);

        if (!numericAmount || numericAmount <= 0) return;
    
        setPots((prev) =>
          prev.map((pot) => pot.id === potToEditId
            ? {
                ...pot,
                amount:
                actionType === "add"
                    ? pot.amount + numericAmount
                    : pot.amount - numericAmount,
            }
            : pot
          )
        );
    
        if (actionType === "add") {
          setBalance((prev) => prev - numericAmount);
        } else if (actionType === "withdraw") {
          setBalance((prev) => prev + numericAmount);
        }
    
        handleClose();
    }
    

  return (
    <div className='potsForm fixed flex items-center transition-all duration-500 justify-center top-0 left-0 w-full h-screen'>
        <div className='bg-white max-w-md w-full p-5 rounded-md'>
            <div className='flex justify-between items-center mb-4'>
                <p className='font-semibold text-md text-2xl'>{actionType === "add" ? "Add to " : "Widthdraw from "}'{currentPot.potName}'</p>
                <button onClick={() => handleClose()}><img src={close} alt="" className='size-5 cursor-pointer'/></button>
            </div>
            <p  className='text-sm text-gray-400 mb-4'>
                {
                    actionType === "add" ? 
                    "Add money to your pot to keep itseparate from your main balance as soon as you add this money, it will be deducted from your current balance." : 
                    "Widthdraw from your pot to put money back in your main balance. This will reduce the amount you have in this pot."
                }   
            </p>
            <div className='flex items-center justify-between mt-4'>
                <span className='text-gray-400'>New Amount</span>
                <span className='text-lg font-semibold'>R{actionType === "add" ? currentPot.amount + Number(amount) : currentPot.amount - Number(amount) }</span>
            </div>
            <div className='h-2 w-full bg-gray-200 rounded-3xl mt-2'>
                <div className='h-full w-[30%] rounded-3xl bg-purple-400' /*style={{ backgroundColor:  }}*/></div>
            </div>
            <div className='text-gray-600 flex justify-between text-sm mt-1'>
                <span className='font-semibold'>0.00%</span>
                <span>Target of R{currentPot.amount}</span>
            </div>
            <form onSubmit={handleSubmit} action="" className='flex flex-col'>
                <label htmlFor="amount" className='text-sm font-semibold text-gray-400 mt-4'>Amount to {actionType === "add" ? "add" : "widthdraw"}</label>
                <input 
                    type="number" 
                    id='amount'
                    value={amount} 
                    onChange={(e) => setAmount(Number(e.target.value))} 
                    name="amount" 
                    required 
                    placeholder='e.g R1000' 
                    className='outline-none mt-1.5 border rounded-md py-2 px-3 border-gray-400'
                />
                <button type='submit' className='bg-gray-950 mt-5 cursor-pointer hover:bg-gray-700 py-2.5 rounded-md text-white w-full'>Confirm {actionType === "add" ? "addition" : "widthdrawal"}</button>
            </form>
        </div> 
    </div>
  )
}

export default AddMoneyOrWithdraw