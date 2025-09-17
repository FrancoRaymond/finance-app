import React,{ useEffect, useState } from 'react'
import { useAppContext } from '../context/context.jsx'
import TransactionForm from '../components/transactions/TransactionForm'
import Pagination from '../components/Pagination.jsx'


const Transactions = () => {
  const [showTransactionForm, setShowTransactionForm] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [sortType, setSortType] = useState("Latest");
  const [categoryFilter, setCategoryFilter] = useState("all");
  const { addedTransactions } = useAppContext()
  const [filteredTransactions, setFilteredTransactions] = useState([])

  useEffect(() => {
    let result = [...addedTransactions];

  if (searchTerm) {
    result = result.filter(trans =>
      trans.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
  }
    if (categoryFilter !== "all") {
      result = result.filter(trans => trans.category === categoryFilter);
    }
   
    switch (sortType) {
      case "Latest":
        result.sort((a, b) => new Date(b.date) - new Date(a.date));
        break;
      case "Oldest":
        result.sort((a, b) => new Date(a.date) - new Date(b.date));
        break;
      case "A-Z":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case "Z-A":
        result.sort((a, b) => b.name.localeCompare(a.name));
        break;
      case "Highest":
        result.sort((a, b) => b.amount - a.amount);
        break;
      case "Lowest":
        result.sort((a, b) => a.amount - b.amount);
        break;
    }

    setFilteredTransactions(result);
  }, [searchTerm, sortType, categoryFilter, addedTransactions])


  return (
    <div className='py-5 px-2 md:px-5 w-full mb-10 sm:mb-14 md:mb-0'>
      {showTransactionForm && <TransactionForm setShowTransactionForm={setShowTransactionForm} />}
      <div className='flex items-center justify-between'>
        <h2 className='font-semibold text-2xl sm:text-3xl'>Transactions</h2>
        <button className='rounded-md text-white bg-black hover:bg-gray-700 cursor-pointer py-1.5 px-3 text-[1rem] font-semibold' onClick={() => setShowTransactionForm(true)}>+Add new transaction</button>
      </div>
      {
        addedTransactions.length === 0 ? (
          <div className='mt-5 rounded-md w-full bg-gray-300 py-20 px-5 text-gray-500 text-center'>
            Added transactions will appear here
          </div>
        ) : (
          <div className='px-2 py-5 sm:px-5 bg-white rounded-md mt-7'>
            <div className='flex flex-col gap-2.5 lg:flex-row lg:items-center lg:justify-between '>
              <input onChange={(e) => setSearchTerm(e.target.value)} type="text" placeholder='Search Transaction' className='outline-none max-w-3xs text-[1rem] border rounded-md py-2 px-3 border-gray-400'/>
              <div className='flex items-center gap-3'>
                <label htmlFor="" className='hidden lg:flex text-sm font-semibold text-gray-400 mt-2.5'>Sort by</label>
                <select name="" id="" onChange={(e) => setSortType(e.target.value)} className='outline-none text-[1rem] cursor-pointer mt-1.5 border rounded-md py-2 px-3 border-gray-400'>
                  <option value="Latest">Latest</option>
                  <option value="Oldest">Oldest</option>
                  <option value="A-Z">A to Z</option>
                  <option value="Z-A">Z to A</option>
                  <option value="Highest">Highest</option>
                  <option value="Lowest">Lowest</option>
                </select>
              </div>
              <div className='flex items-center gap-3'>
                <label htmlFor="" className='hidden lg:flex text-sm font-semibold text-gray-400 mt-2.5'>Filter by category</label>
                <select name="" id="" onChange={(e) => setCategoryFilter(e.target.value)} className='outline-none text-[1rem] cursor-pointer mt-1.5 border rounded-md py-2 px-3 border-gray-400'>
                  <option value="all">All Transactions</option>
                  <option value="entertainment">Entertainment</option>
                  <option value="bills">Bills</option>
                  <option value="dinningout">Dinning out</option>
                  <option value="transportation">Transportation</option>
                </select>
              </div>  
            </div>
            <Pagination filteredTransactions={filteredTransactions}/>  
          </div>
        )
      }
    </div>
  )
}

export default Transactions