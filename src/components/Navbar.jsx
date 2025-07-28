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
    <div ref={elementRef} className={`bg-gray-300 flex px-1 md:px-0 pt-1 fixed bottom-0 left-0 w-full md:h-screen md:flex-col md:justify-between md:py-5 md:rounded-tr-2xl md:rounded-br-2xl transition-all duration-300 ease-in-out
    ${menuMinimized ? 'md:w-[4.5rem] pr-3' : 'md:w-64'}`}>
      <nav className='w-full md:pr-3'>
        <div className='font-bold ml-5 text-2xl hidden md:flex mb-6 w-fit'>
          <span>F</span>
          <span className={`hidden sm:inline-block transform transition-all duration-300 ease-in-out origin-left ${menuMinimized ? 'scale-x-0 opacity-0 overflow-hidden' : 'scale-x-100  opacity-100'}`}>inance</span>
        </div>
        <ul className=' grid grid-cols-5 px-2 md:px-0 md:flex md:flex-col md:gap-3'>
          <li>
            <Link
              to="/"
              className={`navlink md:gap-4 ${
                location.pathname === '/' ? 'activeLink' : 'border-transparent'
              }`}
            >
              <img src={home} alt="" className='size-6'/>
              <span className={`hidden sm:inline-block transform transition-all duration-300 ease-in-out origin-left ${menuMinimized ? 'scale-x-0 opacity-0 overflow-hidden' : 'scale-x-100 opacity-100'}`}>Overview</span>
            </Link>
          </li>
          <li>
            <Link
              to="/transactions"
              className={`navlink md:gap-4 ${
                location.pathname === '/transactions' ? 'activeLink' : 'border-transparent'
              } `}
            >
              <img src={transactions} alt="" className='size-6 rotate-90'/>
              <span className={`hidden sm:inline-block transform transition-all duration-300 ease-in-out origin-left ${menuMinimized ? 'scale-x-0 opacity-0 overflow-hidden' : 'scale-x-100 opacity-100'}`}>Transactions</span>
            </Link>
          </li>
          <li>
            <Link
              to="/budgets"
              className={`navlink md:gap-4 ${
                location.pathname === '/budgets' ? 'activeLink' : 'border-transparent'
              } `}
            >
              <img src={budget} alt="" className='size-6'/>
              <span className={`hidden sm:inline-block transform transition-all duration-300 ease-in-out origin-left ${menuMinimized ? 'scale-x-0 opacity-0 overflow-hidden' : 'scale-x-100 opacity-100'}`}>Budgets</span>
            </Link>
          </li>
          <li>
            <Link
              to="/pots"
              className={`navlink md:gap-4 ${
                location.pathname === '/pots' ? 'activeLink' : 'border-transparent'
              } `}
            >
              <img src={pots} alt="" className='size-6 md:size-7'/>
              <span className={`hidden sm:inline-block transform transition-all duration-300 ease-in-out origin-left ${menuMinimized ? 'scale-x-0 opacity-0 overflow-hidden' : 'scale-x-100 opacity-100'}`}>Pots</span>
            </Link>
          </li>
          <li>
            <Link
              to="/recurringbills"
              className={`navlink md:gap-4 ${
                location.pathname === '/recurringbills' ? 'activeLink' : 'border-transparent'
              } `}
            >
              <img src={bills} alt="" className='size-6'/>
              <span className={`hidden sm:inline-block transform transition-all duration-300 ease-in-out origin-left ${menuMinimized ? 'scale-x-0 opacity-0 overflow-hidden' : 'scale-x-100 opacity-100'}`}>Recurring bills</span>
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className='hidden py-3 w-fit md:flex items-center font-semibold gap-4 pl-4 cursor-pointer '
        onClick={() => setMenuMinimized(menuMinimized ? false : true)}
      >
        <img src={arrow} alt="" className={`size-6 ${menuMinimized ? 'rotate-180 transition duration-300' : 'rotate-0 transition duration-300'}`}/>
        <span className={`hidden sm:inline-block transform transition-all duration-300 ease-in-out origin-left ${menuMinimized ? 'scale-x-0 opacity-0 overflow-hidden' : 'scale-x-100 opacity-100'}`}>Minimize Menu</span>
      </button>
    </div>
  )
}

export default Navbar;