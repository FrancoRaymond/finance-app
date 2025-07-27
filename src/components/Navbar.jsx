import React,{useState, useEffect, useRef} from 'react'
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom'; 
import { useAppContext } from '../context/context';
import home from '../assets/images/home.svg'
import transactions from '../assets/images/transactions.svg'
import budget from '../assets/images/budget.svg'
import pots from '../assets/images/pots.svg'
import bills from '../assets/images/bills.svg'
import arrow from '../assets/images/arrow.svg'



const Navbar = ({setNavWidth}) => {
  const location = useLocation(); 
  const [menuMinimized, setMenuMinimized] = useState(false)
  const [size, setSize] = useState(window.innerWidth)
  const elementRef = useRef(null);
  
  

  useEffect(() => {
    const handleResize = () => {
      setSize(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => window.removeEventListener('resize', handleResize)
  },[])

  useEffect(() => {
    if (size < 768 && menuMinimized) {
      setMenuMinimized(false);
    }
  }, [size, menuMinimized]);

 
  useEffect(() => {
    const observer = new ResizeObserver((entries) => {
      for (let entry of entries) {
        setNavWidth(entry.contentRect.width);
      }
    });

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [setNavWidth]);

  return (
    <div ref={elementRef} className='bg-gray-300 flex px-1 md:px-0 pt-1 fixed bottom-0 left-0 w-full md:pr-3 md:w-fit md:h-screen md:flex-col md:justify-between md:py-5 md:rounded-tr-2xl md:rounded-br-2xl'>
      <nav className='w-full'>
        {!menuMinimized && <h1 className={`hidden mb-8 font-bold ml-3 text-2xl md:flex pr-24 lg:pr-36`}>Finance</h1>}
        <ul className=' grid grid-cols-5 px-2 md:px-0 md:flex md:flex-col md:gap-3'>
          <li>
            <Link
              to="/"
              className={`navlink ${menuMinimized ? '' : 'md:gap-4'} ${
                location.pathname === '/' ? 'activeLink' : 'border-transparent'
              }`}
            >
              <img src={home} alt="" className='size-6'/>
              <span className={`hidden sm:flex ${menuMinimized ? 'w-0 overflow-hidden transition duration-300' : 'w-fit transition duration-300'}`}>Overview</span>
            </Link>
          </li>
          <li>
            <Link
              to="/transactions"
              className={`navlink ${menuMinimized ? '' : 'md:gap-4'} ${
                location.pathname === '/transactions' ? 'activeLink' : 'border-transparent'
              } `}
            >
              <img src={transactions} alt="" className='size-6 rotate-90'/>
              <span className={`hidden sm:flex ${menuMinimized ? 'w-0 overflow-hidden transition duration-300' : 'w-fit transition duration-300'}`}>Transactions</span>
            </Link>
          </li>
          <li>
            <Link
              to="/budgets"
              className={`navlink ${menuMinimized ? '' : 'md:gap-4'} ${
                location.pathname === '/budgets' ? 'activeLink' : 'border-transparent'
              } `}
            >
              <img src={budget} alt="" className='size-6'/>
              <span className={`hidden sm:flex ${menuMinimized ? 'w-0 overflow-hidden transition duration-300' : 'w-fit transition duration-300'}`}>Budgets</span>
            </Link>
          </li>
          <li>
            <Link
              to="/pots"
              className={`navlink ${menuMinimized ? '' : 'md:gap-4'} ${
                location.pathname === '/pots' ? 'activeLink' : 'border-transparent'
              } `}
            >
              <img src={pots} alt="" className='size-6 md:size-7'/>
              <span className={`hidden sm:flex ${menuMinimized ? 'w-0 overflow-hidden transition duration-300' : 'w-fit transition duration-300'}`}>Pots</span>
            </Link>
          </li>
          <li>
            <Link
              to="/recurringbills"
              className={`navlink ${menuMinimized ? '' : 'md:gap-4'} ${
                location.pathname === '/recurringbills' ? 'activeLink' : 'border-transparent'
              } `}
            >
              <img src={bills} alt="" className='size-6'/>
              <span className={`hidden sm:flex ${menuMinimized ? 'w-0 overflow-hidden transition duration-300' : 'w-fit transition duration-300'}`}>Recurring bills</span>
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className='hidden py-3 md:flex items-center font-semibold gap-4 pl-4 cursor-pointer '
        onClick={() => setMenuMinimized(menuMinimized ? false : true)}
      >
        <img src={arrow} alt="" className={`size-6 ${menuMinimized ? 'rotate-180 transition duration-300' : 'rotate-0 transition duration-300'}`}/>
        <span className={`${menuMinimized ? 'w-0 overflow-hidden transition duration-300' : 'w-fit transition duration-300'}`}>Minimize Menu</span>
      </button>
    </div>
  )
}

export default Navbar;