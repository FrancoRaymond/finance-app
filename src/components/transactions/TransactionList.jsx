import React, { useState } from "react";
import { useTransactionStore } from "../../store/transactionStore";

const TransactionList = () => {
  const { filteredTransactions } = useTransactionStore()
  const [page, setPage] = useState(0);
  const itemsPerPage = 10;

  const start = page * itemsPerPage;
  const end = start + itemsPerPage;
  const currentTransactions = filteredTransactions.slice(start, end);

  const nextPage = () => {
    if (end < filteredTransactions.length) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };

  return (
    <div>
      <div className='overflow-x-auto'>
          <table className='min-w-full table-auto mt-6 text-left flex flex-col gap-3'>
            <thead>
              <tr className='text-[12px] sm:text-sm font-semibold text-center text-gray-400 px-2 items-center grid grid-cols-4 py-2 borde-b border-gray-400'>
                <th>Recepient / Sender</th>
                <th>Category</th>
                <th>Transactiion Date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className='flex flex-col gap-3'>
              {
                currentTransactions.map(transaction => (
                  <tr key={transaction.id} className='even:bg-gray-100 text-[12px] sm:text-sm text-center px-2 grid grid-cols-4 items-center'>
                    <td className='flex items-center gap-3'><img src={transaction.image} alt="" className='size-5 sm:size-7 rounded-full'/> {transaction.name}</td>
                    <td>{transaction.category}</td>
                    <td>{transaction.date}</td>
                    <td>{transaction.amount[0]}R{transaction.amount.slice(1)}</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

      <div className="flex gap-2 mt-4 justify-between">
        <button 
          onClick={prevPage} 
          disabled={page === 0}
          className="px-2 py-1 text-sm bg-gray-300 rounded disabled:opacity-50 cursor-pointer"
        >
          Prev
        </button>

        <div className="bg-black text-white px-2 py-1 rounded-md text-center text-sm">{page + 1}</div>

        <button 
          onClick={nextPage} 
          disabled={end >= filteredTransactions.length}
          className="px-2 py-1 text-sm bg-gray-300 rounded disabled:opacity-50 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default TransactionList;