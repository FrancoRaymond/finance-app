import React from 'react'

const NameInput = ({maxLength, formData, handleInputChanges, placeholder}) => {
  return (
    <input 
        type="text" 
        id='name'
        value={formData.name} 
        onChange={handleInputChanges} 
        maxLength={maxLength}
        name="name" 
        required 
        placeholder={placeholder} 
        className='outline-none mt-1.5 border rounded-md py-2 px-3 border-gray-400'
    />
  )
}

export default NameInput
