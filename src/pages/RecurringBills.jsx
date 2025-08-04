import React,{useState, useEffect} from 'react'
import bills from '../assets/images/bills.svg'

const RecurringBills = () => {
  const [searchInput, setSearchInput] = useState('')
  const [sortInput, setSortInput] = useState('')

  useEffect(() => {
    console.log(searchInput)
    console.log("filter: " + sortInput)
  }, [searchInput, sortInput])

  return (
    <div className='py-5 px-2 md:px-5 w-full'>
      <h2 className='font-semibold text-2xl sm:text-3xl'>Recurring bills</h2>
      <div className='grid gap-5 mt-8 grid-cols-1 lg:grid-cols-'>
        <div className='bg-white rounded-md p-4'>
          <img src={bills} alt="" className='size-8 fill-amber-50'/>
          <p className='text-gray-400'>Total bills</p>
          <span className='text-xl font-bold'>R3030</span>
        </div>
        <div className='bg-white rounded-md p-4 order-3'>
          <header className='flex justify-between'>
            <input 
                type="text" 
                id='potName'
                value={searchInput} 
                onChange={(e) => setSearchInput(e.target.value)} 
                name="potName" 
                required 
                placeholder='Search bills' 
                className='outline-none mt-1.5 border rounded-md py-2 px-3 border-gray-400'
            />
            <div className='flex items-center gap-3'>
              <label htmlFor="" className='hidden lg:flex text-sm font-semibold text-gray-400 mt-2.5'>Sort by</label>
              <select name="" id="" onChange={(e) => setSortInput(e.target.value)} className='outline-none text-[1rem] cursor-pointer mt-1.5 border rounded-md py-2 px-3 border-gray-400'>
                <option value="Latest">Latest</option>
                <option value="Oldest">Oldest</option>
                <option value="A-Z">A to Z</option>
                <option value="Z-A">Z to A</option>
                <option value="Highest">Highest</option>
                <option value="Lowest">Lowest</option>
              </select>
          </div>
          </header>
          <table className='min-w-full table-auto mt-6 text-left flex flex-col gap-3'>
            <thead>
              <tr className='text-sm text-gray-400 px-2 items-center grid grid-cols-4 py-2 border-b border-gray-400'>
                <th>Bill title</th>
                <th>Bill date</th>
                <th>Amount</th>
              </tr>
            </thead>
            <tbody className='flex flex-col gap-3'>
              <tr>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='bg-white rounded-md p-4 order-2'>
          <p className='font-semibold'>Summary</p>
          <div className='flex justify-between py-3 border-b border-gray-200 mt-2'>
            <p className='text-gray-600 text-[14px]'>Paid bills</p>
            <span className='font-semibold'>R300</span>
          </div>
          <div className='flex justify-between py-3 border-b border-gray-200'>
            <p className='text-gray-600 text-[14px]'>Total upcoming</p>
            <span className='font-semibold'>R00</span>
          </div>
          <div className='flex justify-between py-3'>
            <p className='text-gray-600 text-[14px]'>Due soon</p>
            <span className='font-semibold text-red-800'>R150</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecurringBills