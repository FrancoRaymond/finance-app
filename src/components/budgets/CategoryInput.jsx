import React from 'react'

const CategoryInput = ({formData, handleInputChanges}) => {
  return (
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
  )
}

export default CategoryInput
