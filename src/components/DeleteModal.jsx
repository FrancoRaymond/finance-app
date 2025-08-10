import close from '../assets/images/icon-close.svg'

export default function DeleteModal({ onBack, onDelete, confirmationParagraph, confirmDeleteLabel , goBackLabel}) {

    return (
        <div className='potsForm fixed flex items-center transition-all duration-500 justify-center top-0 left-0 w-full h-screen'>
            <div className="flex flex-col gap-6 bg-white rounded-md p-5 max-w-[500px]">
                <div className='flex items-center justify-between'>
                    <h2 className='text-lg font-semibold'>Delete Groceries?</h2>
                    <button onClick={() => setShowDeleteModal(false)}><img src={close} alt="" className='size-5 cursor-pointer'/></button>
                </div>
                <p className='text-sm text-gray-400'>{confirmationParagraph}</p>
                <div className='flex items-center gap-5 ml-auto'>
                    <button className="bg-red-400 hover:bg-red-300 py-2.5 text-sm font-semibold px-3 text-white rounded-md transition duration-200 cursor-pointer">{confirmDeleteLabel}</button>
                    <button className="bg-gray-200 hover:bg-gray-300 py-2.5 px-3 text-sm font-semibold text-black rounded-md transition duration-200 cursor-pointer">{goBackLabel}</button>
                </div>
            </div>
      </div>
    );
}
  