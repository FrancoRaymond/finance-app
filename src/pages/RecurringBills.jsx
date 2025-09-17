import React,{useState} from 'react'
import bills from '../assets/images/bills.svg'
import { CurrencyFormatter } from '../utils/CurrencyFormatter'
import Summary from '../components/recurring-bills/Summary'
import BillsTable from '../components/recurring-bills/BillsTable'
import SearchFilters from '../components/recurring-bills/SearchFilters'

const RecurringBills = () => {
  const [searchInput, setSearchInput] = useState('')
  const [sortInput, setSortInput] = useState('')
  const [sortedBills, setSortedBills] = useState([])
  const totalBills = sortedBills.reduce((total, value) => total + Number(value.amount.slice(1)), 0)

  return (
    <div className='py-5 px-2 md:px-5 w-full'>
      <h2 className='font-semibold text-2xl sm:text-3xl'>Recurring bills</h2>
      <div className='grid gap-5 mt-8 grid-cols-1 xl:grid-cols-2 mb-10 sm:mb-14 md:mb-0'>
        <div className='flex flex-col gap-5 lg:flex-row xl:flex-col'>
          <div className='bg-white rounded-md p-4 w-full'>
            <img src={bills} alt="bills icon" className='size-8 fill-amber-50'/>
            <p className='text-gray-400 mt-2'>Total bills</p>
            <span className='text-xl font-bold mt-2'>{CurrencyFormatter(totalBills)}</span>
          </div>
          <Summary sortedBills={sortedBills}/>
        </div>
        {
          sortedBills.length === 0 ? (
            <div className='rounded-md w-full bg-gray-300 py-20 px-5 text-gray-500 text-center'>
              No bills yet
            </div>
          ) : (
            <div className='bg-white rounded-md p-4 w-full'>
              <SearchFilters 
                searchInput={searchInput}
                setSearchInput={setSearchInput}
                sortInput={sortInput}
                setSortInput={setSortInput}
                sortedBills={sortedBills}
                setSortedBills={setSortedBills}
              />
              <BillsTable 
                sortedBills={sortedBills}
              />
            </div>
          )
        }  
      </div>
    </div>
  )
}

export default RecurringBills