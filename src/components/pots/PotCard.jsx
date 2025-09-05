import React,{useState} from 'react'
import EditAndDelete from '../EditAndDelete'

const PotCard = ({pot}) => {
    const [openMenu, setOpenMenu] = useState(null);

    const handleMenuClick = (id) => {
        setOpenMenu((prevId) => (prevId === id ? null : id));
    };

    const handleDeleteClick = (id) => {
        setShowDeleteModal((prevId) => (prevId === id ? null : id));
      };
    
      const confirmDelete = (id) => {
        setPots((prevPots) => prevPots.filter(prev => prev.id !== id))
      }

  return (
    <div key={pot.id} className='bg-white p-4 rounded-md'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3.5'>
                <div className={`size-3 rounded-full`} style={{ backgroundColor: pot.theme }}></div>
                <h2 className='text-xl font-semibold'>{pot.potName}</h2>
            </div>
            <div onClick={() => handleMenuClick(pot.id)} className="flex gap-0.5 cursor-pointer transition duration-200 relative">
                <div className="flex gap-0.5 active:scale-150 transition duration-200">
                    <div className="size-1 rounded-full bg-black"></div>
                    <div className="size-1 rounded-full bg-black"></div>
                    <div className="size-1 rounded-full bg-black"></div>
                </div>
                {openMenu === pot.id && (
                    <div className="absolute top-2 right-0">
                    <EditAndDelete
                        editLabel="Edit pot"
                        deleteLabel="Delete pot"
                        pot={pot}
                        handleDeleteClick={handleDeleteClick}
                        //handleEdit={handleEdit}
                    />
                    </div>
                )}
            </div>
        </div>
        <div className='flex items-center justify-between mt-4'>
            <span className='text-gray-400'>Total spent</span>
            <span className='text-lg font-semibold'>0</span>
        </div>
        <div className='h-2 w-full bg-gray-200 rounded-3xl mt-6'>
            <div className='h-full w-[30%] rounded-3xl' style={{ backgroundColor: pot.theme }}></div>
        </div>
        <div className='text-gray-600 flex justify-between text-sm mt-1'>
            <span>0.00%</span>
            <span>Target of R{pot.amount}</span>
        </div>
        <div className='mb-3 mt-8 grid grid-cols-2 gap-6'>
            <button className='rounded-md text-black bg-gray-200 hover:bg-white hover:border hover:border-gray-600 transition duration-200 cursor-pointer py-3 px-5 text-[1rem] font-semibold' >+ Add Money</button>
            <button className='rounded-md text-black bg-gray-200 hover:bg-white hover:border hover:border-gray-600 transition duration-200 cursor-pointer py-3 px-5 text-[1rem] font-semibold' >Withdraw</button>
        </div>
    </div>
  )
}

export default PotCard