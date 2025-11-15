import React,{useState} from 'react'
import { useRecurringBillsStore } from '../store/recurringBillsStore'
import bills from '../assets/images/bills.svg'
import { CurrencyFormatter } from '../utils/CurrencyFormatter'

import Summary from '../components/recurring-bills/Summary'
import BillsTable from '../components/recurring-bills/BillsTable'
import SearchFilters from '../components/recurring-bills/SearchFilters'

const RecurringBills = () => {
  const { totalBills } = useRecurringBillsStore()
  const [filteredBills, setFilteredBills] = useState([])
  const [searchInput, setSearchInput] = useState('')
  const [sortType, setSortType] = useState('')

  return (
    <div className='py-5 px-2 md:px-5 w-full'>
      <h2 className='font-semibold text-2xl sm:text-3xl'>Recurring bills</h2>
      <div className='grid gap-5 mt-8 grid-cols-1 xl:grid-cols-2 mb-10 sm:mb-14 md:mb-0'>
        <div className='flex flex-col gap-5 lg:flex-row xl:flex-col'>
          <div className='bg-white rounded-md p-4 w-full flex flex-col gap-2 justify-center'>
            <img src={bills} alt="bills icon" className='size-8 fill-amber-50 lg:size-11'/>
            <p className='text-gray-400'>Total bills</p>
            <span className='text-xl font-bold lg:text-2xl'>{CurrencyFormatter(totalBills)}</span>
          </div>

          <Summary />

        </div>
        <div className='bg-white rounded-md p-4 w-full'>

          <SearchFilters 
            filteredBills={filteredBills} 
            setFilteredBills={setFilteredBills} 
            searchInput={searchInput} 
            setSearchInput={setSearchInput}
            sortType={sortType}
            setSortType={setSortType}
          />

          <BillsTable 
            filteredBills={filteredBills} 
            setFilteredBills={setFilteredBills} 
          />

        </div>
      </div>
    </div>
  )
}

export default RecurringBills