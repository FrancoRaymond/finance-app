import React,{useEffect, useState} from 'react'
import toast from 'react-hot-toast'
import { useAppContext } from '../../context/context'
import close from '../../assets/images/icon-close.svg'
import AmountInput from '../AmountInput'
import NameInput from '../NameInput'
import ThemeInput from '../ThemeInput'

const PotsForm = ({setShowPotForm, editingPot, setEditingPot}) => {
  const { setPots, pots, setBalance } = useAppContext()
  const [formData, setFormData] = useState(
    {
      id: editingPot ? editingPot.id : Date.now(), 
      name: editingPot ? editingPot.name : "",
      amount: editingPot ? editingPot.amount : "", 
      theme: editingPot ? editingPot.theme : ""
    }
  )

  useEffect(() => {
    if (editingPot) {
      setFormData({
        id: editingPot.id,
        name: editingPot.name,
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
      name: formData.name,
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
      toast.success(`pot updated successfully`)
      setEditingPot(null);
    } else {
      
      if (pots.some((b) => b.theme === updatedPot.theme)) {
        toast.error(`The theme "${updatedPot.theme}" is already used. Please choose a different one.`);
        return;
      }
  
      if (pots.some((b) => b.name.toLowerCase() === updatedPot.name.toLowerCase())) {
        toast.error(`The pot name "${updatedPot.name}" already exists. Please choose a different one.`);
        return;
      }
      setBalance((prev) => prev - updatedPot.amount)
      setPots((prev) => [updatedPot, ...prev]);
      toast.success(`${updatedPot.name} added successfully`)
    }
   
    setShowPotForm(false)
    setFormData({id: Date.now(), name: "", amount: "", theme: ""})
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
            <label htmlFor="name" className='text-sm font-semibold text-gray-400 mt-2.5'>Pot Name</label>
            <NameInput
              placeholder="e.g Rainy days"
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
            <button type='submit' className='bg-gray-950 mt-2.5 cursor-pointer hover:bg-gray-700 py-2.5 rounded-md text-white w-full'>{editingPot ? "Update" : "Submit"}</button>
          </form>
      </div>
    </div>
  )
}

export default PotsForm