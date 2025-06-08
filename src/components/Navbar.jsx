import React,{useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/context';


const Navbar = () => {
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
    <div className=''>
      <nav className=''>
        <ul className=''>
          <li><Link to="/">Overview</Link></li>
          <li><Link to="/transactions">transactions</Link></li>
          <li><Link to="/budgets">budgets</Link></li>
          <li><Link to="/pots">pots</Link></li>
          <li><Link to="/recurringbills">recurring bills</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;