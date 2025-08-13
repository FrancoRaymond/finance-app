import React from 'react'

const ThemeInput = ({formData, handleInputChanges}) => {
  return (
    <select 
        name="theme" 
        id='theme'
        value={formData.theme} 
        onChange={handleInputChanges}
        required 
        className='outline-none mt-1.5 border rounded-md py-2 px-3 border-gray-400'
    >
        <option value="">Select a theme</option>
        <option value="#f1cdab">Beige</option>
        <option value="#6B7280">Grey</option>
        <option value="#008B8B">Cyan</option>
        <option value="#CC5500">Orange</option>
        <option value="#247976">Green</option>
        <option value="#83c8d8">Blue</option>
        <option value="#B8860B">Yellow</option>
        <option value="#f16b76">Crimson</option>
        <option value="#00CED1">Turquoise</option>
        <option value="#8B4513">Brown</option>
        <option value="#8b008b">Magenta</option>
    </select>
  )
}

export default ThemeInput
