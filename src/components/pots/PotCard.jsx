import React,{useState} from 'react'
import { useAppContext } from '../../context/context';
import EditAndDelete from '../EditAndDelete'
import DeleteModal from '../DeleteModal';

const PotCard = (
    {
        pot, 
        setPots, 
        handleEdit, 
        setPotToEditId, 
        setShowAddMoneyOrWithdrawModal, 
        setActionType
    }
) => {
    const [openMenu, setOpenMenu] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(null);
    const { balance, setBalance } = useAppContext()

    const handleMenuClick = (id) => {
        setOpenMenu((prevId) => (prevId === id ? null : id));
    };

    const handleDeleteClick = (id) => {
        setShowDeleteModal((prevId) => (prevId === id ? null : id));
    };
    
    const confirmDelete = (id) => {
        setBalance((prev) => prev + pot.amount)
        setPots((prevPots) => prevPots.filter(prev => prev.id !== id))
    }

    const handleAddOrWithdraw = (action, potId) => {
        setActionType(action)
        setPotToEditId(potId)
        setShowAddMoneyOrWithdrawModal(true)
    } 

  return (
    <div className='bg-white p-4 rounded-md'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3.5'>
                <div className={`size-3 rounded-full`} style={{ backgroundColor: pot.theme }}></div>
                <h2 className='text-xl font-semibold'>{pot.potName}</h2>
            </div>
            <div onClick={() => handleMenuClick(pot.id)} className="flex p-2 gap-0.5 cursor-pointer transition duration-200 relative">
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
                        data={pot}
                        handleDeleteClick={handleDeleteClick}
                        handleEdit={handleEdit}
                    />
                    </div>
                )}
            </div>
            {
                showDeleteModal === pot.id &&
                <DeleteModal
                    data={pot}
                    confirmDelete={confirmDelete}
                    setShowDeleteModal={setShowDeleteModal}
                    confirmationParagraph="Are you sure you want to delete this pot? This action cannot be reversed, and all the data inside it will be removed forever."
                    confirmDeleteLabel="Yes, Confirm deletion" 
                    goBackLabel="No, go back"
                />
            }
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
        <div className='mb-3 mt-8 grid grid-cols-2 gap-6 text-sm'>
            <button onClick={() => handleAddOrWithdraw("add", pot.id)} className='rounded-md text-black bg-gray-200 hover:bg-white hover:border hover:border-gray-600 transition duration-200 cursor-pointer py-2 px-5 font-semibold' >+ Add Money</button>
            <button onClick={() => handleAddOrWithdraw("withdraw", pot.id)} className='rounded-md text-black bg-gray-200 hover:bg-white hover:border hover:border-gray-600 transition duration-200 cursor-pointer py-2 px-5 font-semibold' >Withdraw</button>
        </div>
    </div>
  )
}

export default PotCard