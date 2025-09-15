import React,{useEffect} from 'react'
import { useAppContext } from '../../context/context';

const SearchFilters = ({searchInput, setSearchInput, sortInput, setSortInput, setSortedBills}) => {
    const { addedTransactions } = useAppContext()
    const bills = addedTransactions.filter(bill => bill.category.toLowerCase() === "bills")

    useEffect(() => {
        let result = [...bills];
    
        if (searchInput) {
            result = result.filter(trans => trans.name.toLowerCase().startsWith(searchInput.toLowerCase()));
        }
       
        switch (sortInput) {
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
    
        setSortedBills(result);
      }, [searchInput, sortInput, addedTransactions])

  return (
    <header className='flex justify-between'>
        <input 
            type="text" 
            id='searchBill'
            value={searchInput} 
            onChange={(e) => setSearchInput(e.target.value)} 
            name="searchBill" 
            required 
            placeholder='Search bills' 
            className='outline-none mt-1.5 border rounded-md py-2 px-3 border-gray-400'
        />
        <div className='flex items-center gap-3'>
            <label htmlFor="" className='hidden lg:flex text-sm font-semibold text-gray-400 mt-2.5'>Sort by</label>
            <select name="order" id="order" onChange={(e) => setSortInput(e.target.value)} className='outline-none text-[1rem] cursor-pointer mt-1.5 border rounded-md py-2 px-3 border-gray-400'>
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
                <option value="A-Z">A to Z</option>
                <option value="Z-A">Z to A</option>
                <option value="Highest">Highest</option>
                <option value="Lowest">Lowest</option>
            </select>
        </div>
    </header>
  )
}

export default SearchFilters
