import React,{useEffect, useState} from 'react'
import { useAppContext } from '../../context/context'
import close from '../../assets/images/icon-close.svg'

const PotsForm = ({setShowPotForm, editingPot, setEditingPot}) => {
  const { setPots, pots, setBalance } = useAppContext()
  const [formData, setFormData] = useState(
    {
      id: editingPot ? editingPot.id : Date.now(), 
      potName: editingPot ? editingPot.potName : "",
      amount: editingPot ? editingPot.amount : "", 
      theme: editingPot ? editingPot.theme : ""
    }
  )

  useEffect(() => {
    if (editingPot) {
      setFormData({
        id: editingPot.id,
        potName: editingPot.potName,
        amount: editingPot.amount,
        theme: editingPot.theme,
      });
    }
  }, [editingPot]);

  const handleInputChanges = (e) => {
    const {name, type, value, checked} = e.target

    setFormData(prevData => ({
      ...prevData,[name]:type === 'checkbox' ? checked : value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const updatedPot = {
      id: editingPot ? editingPot.id : Date.now(),
      potName: formData.potName,
      amount: parseFloat(formData.amount),
      theme: formData.theme,
    };
  
    if (editingPot) {
      
      setPots((prev) =>
        prev.map((b) => (b.id === editingPot.id ? updatedPot : b))
      );

      setBalance((prev) => {
        const oldAmount = editingPot.amount;          
        const newAmount = updatedPot.amount;          
        const difference = newAmount - oldAmount;     
    
        return prev - difference;                     
      });

      setEditingPot(null);
    } else {
      
      if (pots.some((b) => b.theme === updatedPot.theme)) {
        alert(`The theme "${updatedPot.theme}" is already used. Please choose a different one.`);
        return;
      }
  
      if (pots.some((b) => b.potName.toLowerCase() === updatedPot.potName.toLowerCase())) {
        alert(`The pot name "${updatedPot.potName}" already exists. Please choose a different one.`);
        return;
      }
      setBalance((prev) => prev - updatedPot.amount)
  
      setPots((prev) => [updatedPot, ...prev]);
    }
   
    setShowPotForm(false)
    setFormData({id: Date.now(), potName: "", amount: "", theme: ""})
  }
 
  return (
    <div className='potsForm fixed flex items-center transition-all duration-500 justify-center top-0 left-0 w-full h-screen'>
      <div className='bg-white max-w-md w-full p-5 rounded-md'>
          <div className='flex justify-between items-center mb-4'>
            <p className='font-semibold text-md text-[1rem]'>Add new Pot</p>
            <button onClick={() => setShowPotForm(false)}><img src={close} alt="" className='size-5 cursor-pointer'/></button>
          </div>
          <p className='text-sm text-gray-400 mb-4'>Create a pot to set savings targets. These can help keep you on track as you save for special purchases.</p>
          <form action="" onSubmit={handleSubmit} className='text-[15px] flex flex-col'>
            <label htmlFor="potName" className='text-sm font-semibold text-gray-400 mt-2.5'>Pot Name</label>
            <input 
              type="text" 
              id='potName'
              value={formData.potName} 
              onChange={handleInputChanges} 
              name="potName" 
              required 
              placeholder='e.g Rainy days' 
              className='outline-none mt-1.5 border rounded-md py-2 px-3 border-gray-400'
            />
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
              <option value="#5EFF00">Green</option>
              <option value="#6B7280">Grey</option>
              <option value="#008B8B">Cyan</option>
              <option value="#CC5500">Orange</option>
              <option value="#6e0280">Purple</option>
              <option value="#FF0000">Red</option>
              <option value="#B8860B">Yellow</option>
              <option value="#000080">Navy</option>
              <option value="#00CED1">Turquoise</option>
              <option value="#8B4513">Brown</option>
              <option value="#8b008b">Magenta</option>
            </select>
            <button type='submit' className='bg-gray-950 mt-2.5 cursor-pointer hover:bg-gray-700 py-2.5 rounded-md text-white w-full'>{editingPot ? "Update" : "Submit"}</button>
          </form>
      </div>
    </div>
  )
}

export default PotsForm