import React,{useEffect, useState} from 'react'
import bills from '../assets/images/bills.svg'
import { CurrencyFormatter } from '../utils/CurrencyFormatter'
import Summary from '../components/recurring-bills/Summary'
import BillsTable from '../components/recurring-bills/BillsTable'
import SearchFilters from '../components/recurring-bills/SearchFilters'

const RecurringBills = () => {
  const [searchInput, setSearchInput] = useState('')
  const [sortInput, setSortInput] = useState('')
  const [sortedBills, setSortedBills] = useState([])
  const [totalBills, setTotalBills] = useState(0)
  
  useEffect(() => {
    setTotalBills(sortedBills.reduce((total, value) => total + Number(value.amount.slice(1)), 0))
  }, [ sortedBills])
  
  function getBillStatus(billDate) {
    const today = new Date();
    const billDay = new Date(billDate).getDate();
    let dueDate = new Date(today.getFullYear(), today.getMonth(), billDay);
    const diffTime = dueDate - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  
    if (diffDays >= 0 && diffDays <= 3) {
      return "due"; 
    } else if (diffDays > 3 && diffDays <= 7) {
      return "upcoming"; 
    } else if (diffDays < 0 && diffDays >= -7) {
      return "paid";
    } else {
      return "not due"; 
    }
  }
  
  const paidBills = sortedBills.filter(bill => getBillStatus(bill.date) === "paid")
  const upcomingBills = sortedBills.filter(bill => getBillStatus(bill.date) === "upcoming")
  const dueSoon = sortedBills.filter(bill => getBillStatus(bill.date) === "due")

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
          <Summary 
            paidBills={paidBills} 
            upcomingBills={upcomingBills} 
            dueSoon={dueSoon}
          />
        </div>
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
            getBillStatus={getBillStatus}
          />
        </div>
      </div>
    </div>
  )
}

export default RecurringBills