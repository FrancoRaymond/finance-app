import React from 'react'

const AmountInput = ({formData, handleInputChanges}) => {
  return (
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
  )
}

export default AmountInput
