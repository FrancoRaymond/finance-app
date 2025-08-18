export default function ActionButtons({budget, handleEdit, handleDeleteClick, editLabel, deleteLabel}) {
  return (
    <div className="flex flex-col border border-gray-100 bg-white p-2 shadow-2xl rounded-md absolute right-0 w-32 top-3">
      <button
        onClick={() => handleEdit(budget)}
        className=" py-3 text-[12px] font-semibold border-b border-gray-400 cursor-pointer hover:text-sm"
      >
        {editLabel}
      </button>
      <button
         onClick={() => handleDeleteClick(budget.id)}
        className=" py-3 text-red-500 text-[12px] font-semibold cursor-pointer hover:text-sm"
      >
        {deleteLabel}
      </button>
    </div>
  );
}
  