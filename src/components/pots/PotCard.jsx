import React,{useState} from 'react'
import toast from 'react-hot-toast';
import { useTransactionStore } from '../../store/transactionStore'
import { usePotsStore } from '../../store/potsStore';
import { CurrencyFormatter } from '../../utils/CurrencyFormatter'
import EditAndDelete from '../EditAndDelete'
import DeleteModal from '../DeleteModal';

const PotCard = (
    {
        pot, 
        handleEdit, 
        setPotToEditId, 
        setShowAddMoneyOrWithdrawModal, 
        setActionType
    }
) => {
    const { transactions } = useTransactionStore()
    const { deletePot } = usePotsStore()
    const [openMenu, setOpenMenu] = useState(null);
    const [showDeleteModal, setShowDeleteModal] = useState(null);


    const handleMenuClick = (id) => {
        setOpenMenu((prevId) => (prevId === id ? null : id));
    };

    const handleDeleteClick = (id) => {
        setShowDeleteModal((prevId) => (prevId === id ? null : id));
    };
    
    const confirmDelete = (id) => {
        deletePot(id)
        toast.success("pot deleted successfully")
    }

    const handleAddOrWithdraw = (action, potId) => {
        setPotToEditId(potId)
        setActionType(action)
        setShowAddMoneyOrWithdrawModal(true)
    }

    const amountSpent =  transactions
    .filter(item => item.category.toLowerCase() === pot.name.toLowerCase() && item.amount[0] === "-")
    .reduce((accumulator, current) => accumulator + Number(current.amount.slice(1)), 0)
    
    const percentageSpent = (amountSpent / Number(pot.amount) * 100).toFixed(2)

  return (
    <div className='bg-white p-4 rounded-md'>
        <div className='flex justify-between items-center'>
            <div className='flex items-center gap-3.5'>
                <div className={`size-3 rounded-full`} style={{ backgroundColor: pot.theme }}></div>
                <h2 className='text-lg font-semibold'>{pot.name}</h2>
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
            <span className='text-gray-400 text-sm'>Total spent</span>
            <span className='text-l font-semibold'>{CurrencyFormatter(amountSpent)}</span>
        </div>
        <div className='h-2 w-full bg-gray-200 rounded-3xl mt-6'>
            <div className='h-full w-[30%] rounded-3xl' style={{ backgroundColor: pot.theme, width: `${percentageSpent}%` }}></div>
        </div>
        <div className='text-gray-600 flex justify-between text-sm mt-1'>
            <span>{percentageSpent}%</span>
            <span>Target of {CurrencyFormatter(pot.amount)}</span>
        </div>
        <div className='mb-3 mt-8 grid grid-cols-2 gap-6 text-sm'>
            <button onClick={() => handleAddOrWithdraw("add", pot.id)} className='rounded-md text-black bg-gray-200 hover:bg-white hover:shadow-2xl transition duration-200 cursor-pointer py-2 px-5 font-semibold' >+ Add Money</button>
            <button onClick={() => handleAddOrWithdraw("withdraw", pot.id)} className='rounded-md text-black bg-gray-200 hover:bg-white hover:shadow-2xl transition duration-200 cursor-pointer py-2 px-5 font-semibold' >Withdraw</button>
        </div>
    </div>
  )
}

export default PotCard