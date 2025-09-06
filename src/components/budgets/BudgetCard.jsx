import React,{useState} from 'react'
import EditAndDelete from '../EditAndDelete'
import DeleteModal from '../DeleteModal';

const BudgetCard = ({budget, setBudgets, handleEdit}) => {
  const [openMenu, setOpenMenu] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(null)

  const handleMenuClick = (id) => {
    setOpenMenu((prevId) => (prevId === id ? null : id));
  };

  const handleDeleteClick = (id) => {
    setShowDeleteModal((prevId) => (prevId === id ? null : id));
  };

  const confirmDelete = (id) => {
    setBudgets((prevBudget) => prevBudget.filter(prev => prev.id !== id))
  }

  return (

    <div key={budget.id} className='bg-white w-full p-5 rounded-md'>
      <div className='flex justify-between items-center'>
        <div className='flex items-center gap-3.5'>
          <div className='size-3 rounded-full' style={{ backgroundColor: budget.theme }}></div>
          <h2 className='text-lg font-semibold'>{budget.category.charAt(0).toUpperCase() + budget.category.slice(1)}</h2>
        </div>
        <div onClick={() => handleMenuClick(budget.id)} className="flex gap-0.5 cursor-pointer transition duration-200 relative">
          <div className="flex gap-0.5 active:scale-150 transition duration-200">
            <div className="size-1 rounded-full bg-black"></div>
            <div className="size-1 rounded-full bg-black"></div>
            <div className="size-1 rounded-full bg-black"></div>
          </div>
          {openMenu === budget.id && (
            <div className="absolute top-2 right-0">
              <EditAndDelete
                editLabel="Edit Budget"
                deleteLabel="Delete Budget"
                data={budget}
                handleDeleteClick={handleDeleteClick}
                handleEdit={handleEdit}
              />
            </div>
          )}
        </div>
        {
          showDeleteModal === budget.id &&
          <DeleteModal
          budget={budget}
          confirmDelete={confirmDelete}
          setShowDeleteModal={setShowDeleteModal}
          confirmationParagraph="Are you sure you want to delete this budget? This action cannot be reversed, and all the data inside it will be removed forever."
          confirmDeleteLabel="Yes, Confirm deletion" 
          goBackLabel="No, go back"
         />
        }  
      </div>
      <span className='text-gray-400 text-sm'>Maximum of R{budget.amount}</span>
      <div className='h-3 w-full p-0.5 rounded-md bg-gray-200 mt-5'>
        <div className={`h-full w-[60%] rounded-md`} style={{ backgroundColor: budget.theme }}></div>
      </div>
      <div className='grid grid-cols-2 mt-5 py-2'>
        <div className='flex flex-col px-8 border-l-4 rounded-md' style={{ borderLeft: `5px solid ${budget.theme}` }}>
          <p className='text-gray-500 text-sm'>Spent</p>
          <span className='font-semibold mt-1'>R900.00</span>
        </div>
        <div className='flex flex-col px-8 border-l-4 border-cyan-500 rounded-md'>
          <p className='text-gray-500 text-sm'>Free</p>
          <span className='font-semibold mt-1'>R900.00</span>
        </div>
      </div>
      <div className='p-4 bg-gray-200 rounded-md lg:col-span-3 lg:row-span-3 mt-4'>
        <div className='flex items-center justify-between'>
          <h2 className='font-semibold'>Latest spending</h2>
          <button className='text-sm text-gray-500 cursor-pointer'>View All</button>
        </div>
        <div className='mt-3'>
          <div className='flex items-center py-1 last:pb-0 last:border-0 border-b border-gray-200'>
            <div className='size-7 rounded-full' style={{ backgroundColor: budget.theme }}></div>
            <h3 className='font-semibold grow ml-5 text-sm'>Services</h3>
            <div>
              <p className={`font-semibold text-cyan-800 text-sm`}>R500</p>
              <span className='text-sm text-gray-500'>12 Aug 2024</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BudgetCard