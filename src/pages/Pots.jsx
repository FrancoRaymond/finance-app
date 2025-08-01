import React,{useState} from 'react'
import PotsForm from '../components/pots/PotsForm'

const Pots = () => {
  const [showPotForm, setShowPotForm] = useState(false)

  return (
    <div className='py-5 px-2 md:px-5 w-full'>
      {showPotForm && <PotsForm setShowPotForm={setShowPotForm} />}
     <div className='flex items-center justify-between'>
        <h2 className='font-semibold sm:text-3xl'>Pots</h2>
        <button className='rounded-md text-white bg-black hover:bg-gray-700 cursor-pointer py-1.5 px-3 text-[1rem] font-semibold' onClick={() => setShowPotForm(true)}>+Add New Pot</button>
      </div>
    </div>
  )
}

export default Pots
