import React,{useState} from 'react'
import PotsForm from '../components/pots/PotsForm'

const Pots = () => {
  const [showPotForm, setShowPotForm] = useState(false)

  return (
    <div className='py-5 px-2 md:px-5 w-full'>
      {showPotForm && <PotsForm setShowPotForm={setShowPotForm} />}
      <div className='flex items-center justify-between'>
        <h2 className='font-semibold text-2xl sm:text-3xl'>Pots</h2>
        <button className='rounded-md text-white bg-black hover:bg-gray-700 cursor-pointer py-1.5 px-3 text-[1rem] font-semibold' onClick={() => setShowPotForm(true)}>+Add New Pot</button>
      </div>
      <div className='mt-8'>
        <div className='bg-white p-4 rounded-md'>
          <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3.5'>
              <div className='size-3 rounded-full bg-orange-400'></div>
              <h2 className='text-xl font-semibold'>Pot name</h2>
            </div>
            <button className='flex gap-0.5 p-1.5 cursor-pointer active:scale-150 transition duration-200'>
              <div className='size-1 rounded-full bg-black'></div>
              <div className='size-1 rounded-full bg-black'></div>
              <div className='size-1 rounded-full bg-black'></div>
            </button>
          </div>
          <div className='flex items-center justify-between mt-4'>
            <span className='text-gray-400'>Total spent</span>
            <span className='text-lg font-semibold'>R500</span>
          </div>
          <div className='h-2 w-full bg-gray-200 rounded-3xl mt-6'>
            <div className='bg-orange-400 h-full w-[30%] rounded-3xl'></div>
          </div>
          <div className='text-gray-600 flex justify-between text-sm mt-1'>
            <span>0.00%</span>
            <span>Target of R7 000</span>
          </div>
          <div className='mb-3 mt-8 grid grid-cols-2 gap-6'>
            <button className='rounded-md text-black bg-gray-200 hover:bg-white hover:border hover:border-gray-600 transition duration-200 cursor-pointer py-3 px-5 text-[1rem] font-semibold' >+ Add Money</button>
            <button className='rounded-md text-black bg-gray-200 hover:bg-white hover:border hover:border-gray-600 transition duration-200 cursor-pointer py-3 px-5 text-[1rem] font-semibold' >Withdraw</button>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Pots
