import React,{ useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom';
import AppProvider from './context/context';
import Navbar from './components/Navbar';
import Home from './pages/Overview';
import Transactions from './pages/Transactions';
import Budgets from './pages/Budgets';
import Pots from './pages/Pots';
import RecurringBills from './pages/RecurringBills';


function App() {
  const [navWidth, setNavWidth] = useState(0);

  return (
    <AppProvider>
      <div className='flex flex-col md:flex-row'>
        <Navbar setNavWidth={setNavWidth} />
    <div className={`flex-1 transition-all duration-300 ${navWidth > 72  ? "md:ml-[205px] lg:ml-[250px]" : "md:ml-[84px] lg:ml-[70px]"}`}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/transactions' element={<Transactions />} />
            <Route path='/budgets' element={<Budgets />} />
            <Route path='/pots' element={<Pots />} />
            <Route path='/recurringbills' element={<RecurringBills />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes> 
        </div>
      </div>
    </AppProvider>
  )
}

export default App;