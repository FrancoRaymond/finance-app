import { useState } from "react";

const Pagination = ({ totalPages = 5 }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const handlePrev = () => {
    if (currentPage > 1) {
      setCurrentPage((prev) => prev - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <div className='flex justify-between items-center my-8'>
      <button
        onClick={handlePrev}
        disabled={currentPage === 1}
        className={`px-2 py-1 rounded-md ${
          currentPage === 1
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-black text-white"
        }`}
      >
        Prev
      </button>

      <span className='px-1.5 py-1 bg-black text-white rounded-md'>
        {currentPage}
      </span>

      <button
        onClick={handleNext}
        disabled={currentPage === totalPages}
        className={`px-2 py-1 rounded-md ${
          currentPage === totalPages
            ? "bg-gray-200 text-gray-400 cursor-not-allowed"
            : "bg-black text-white"
        }`}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;
