import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; 
import { useAppContext } from '../context/context';
import home from '../assets/images/home.svg'
import transactions from '../assets/images/transactions.svg'
import budget from '../assets/images/budget.svg'
import pots from '../assets/images/pots.svg'
import bills from '../assets/images/bills.svg'
import arrow from '../assets/images/arrow.svg'



const Navbar = () => {
  const location = useLocation(); 
  const [menuMinimized, setMenuMinimized] = useState(false)
  const [size, setSize] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  },[])

  return (
    <div className='bg-gray-200 flex px-1 pt-1 md:max-w-60 md:h-screen md:flex-col md:justify-between md:py-5'>
      <nav className=''>
        <ul className='flex items-center justify-between w-full md:flex-col md:gap-3 md:pr-3'>
          <li>
            <Link
              to="/"
              className={` ${
                location.pathname === '/' ? 'bg-white rounded-md rounded-t-md rounded-b-none md:border-l-4 border-black' : 'border-transparent'
              } flex items-center border-b-4 pb-2 md:border-l-4 md:pl-2 md:border-b-0 md:pb-0 transition-colors duration-300 flex-col py-3 font-semibold text-xs md:flex-row px-2 md:text-[1rem] md:gap-4 md:px-5`}
            >
              <img src={home} alt="" className='size-4 md:size-5'/>
              <span className={`${menuMinimized ? 'w-0 overflow-hidden transition duration-700' : 'w-fit transition duration-700'}`}>Overview</span>
            </Link>
          </li>
          <li>
            <Link
              to="/transactions"
              className={`${
                location.pathname === '/transactions' ? 'bg-white rounded-md border-b-4 rounded-t-md rounded-b-none md:border-l-4 border-black' : ''
              } flex items-center flex-col py-3 font-semibold text-xs md:flex-row px-2 md:text-[1rem] md:gap-4 md:px-5`}
            >
              <img src={transactions} alt="" className='size-4 md:size-5 rotate-90'/>
              <span className={`${menuMinimized ? 'w-0 overflow-hidden transition duration-700' : 'w-fit transition duration-700'}`}>Transactions</span>
            </Link>
          </li>
          <li>
            <Link
              to="/budgets"
              className={`${
                location.pathname === '/budgets' ? 'bg-white rounded-md border-b-4 rounded-t-md rounded-b-none md:border-l-4 border-black' : ''
              } flex items-center flex-col py-3 font-semibold text-xs md:flex-row px-2 md:text-[1rem] md:gap-4 md:px-5`}
            >
              <img src={budget} alt="" className='size-4 md:size-5'/>
              <span className={`${menuMinimized ? 'w-0 overflow-hidden transition duration-700' : 'w-fit transition duration-700'}`}>Budgets</span>
            </Link>
          </li>
          <li>
            <Link
              to="/pots"
              className={`${
                location.pathname === '/pots' ? 'bg-white rounded-md border-b-4 rounded-t-md rounded-b-none md:border-l-4 border-black' : ''
              } flex items-center flex-col py-3 font-semibold text-xs md:flex-row px-2 md:text-[1rem] md:gap-4 md:px-5`}
            >
              <img src={pots} alt="" className='size-5 md:size-6'/>
              <span className={`${menuMinimized ? 'w-0 overflow-hidden transition duration-700' : 'w-fit transition duration-700'}`}>Pots</span>
            </Link>
          </li>
          <li>
            <Link
              to="/recurringbills"
              className={`${
                location.pathname === '/recurringbills' ? 'bg-white rounded-md border-b-4 rounded-t-md rounded-b-none md:border-l-4 border-black' : ''
              } flex items-center flex-col py-3 font-semibold text-xs md:flex-row px-2 md:text-[1rem] md:gap-4 md:px-5`}
            >
              <img src={bills} alt="" className='size-4 md:size-5'/>
              <span className={`${menuMinimized ? 'w-0 overflow-hidden transition duration-700' : 'w-fit transition duration-700'}`}>Recurring bills</span>
            </Link>
          </li>
        </ul>
      </nav>
      <button 
        className='hidden py-3 md:flex items-center font-semibold gap-4 px-6 cursor-pointer '
        onClick={() => setMenuMinimized(menuMinimized ? false : true)}
      >
        <img src={arrow} alt="" className={`size-6 ${menuMinimized ? 'rotate-180 transition duration-700' : 'rotate-0 transition duration-700'}`}/>
        <span className={`${menuMinimized ? 'w-0 overflow-hidden transition duration-700' : 'w-fit transition duration-700'}`}>Minimize Menu</span>
      </button>
    </div>
  )
}

export default Navbar;