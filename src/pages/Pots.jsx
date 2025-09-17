import React,{useState} from 'react'
import { useAppContext } from '../context/context'
import PotsForm from '../components/pots/PotsForm'
import PotCard from '../components/pots/PotCard'
import AddMoneyOrWithdraw from '../components/pots/AddMoneyOrWithdraw'

const Pots = () => {
  const [showPotForm, setShowPotForm] = useState(false)
  const { pots, setPots } = useAppContext()
  const [editingPot, setEditingPot] = useState(null);
  const [showAddMoneyOrWithdrawModal, setShowAddMoneyOrWithdrawModal] = useState(false)
  const [actionType, setActionType] = useState("")
  const [potToEditId, setPotToEditId] = useState(null)

  const handleEdit = (pots) => {
    setEditingPot(pots);
    setShowPotForm(true);
  };

  return (
    <div className='py-5 px-2 md:px-5 w-full'>
      {
        showPotForm && 
        <PotsForm 
          setShowPotForm={setShowPotForm} 
          editingPot={editingPot}
          setEditingPot={setEditingPot}
        />
      }
      <div className='flex items-center justify-between'>
        <h2 className='font-semibold text-2xl sm:text-3xl'>Pots</h2>
        <button className='rounded-md text-white bg-black hover:bg-gray-700 cursor-pointer py-1.5 px-3 text-[1rem] font-semibold' onClick={() => setShowPotForm(true)}>+Add New Pot</button>
      </div>
      {
        pots.length === 0 ? (
          <div className='mt-5 rounded-md w-full bg-gray-300 py-20 px-5 text-gray-500 text-center'>
            Added pots will appear here
          </div>
        ) : (
          <div className='mt-8 grid gap-5 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mb-10 sm:mb-14 md:mb-0'>
            {
              pots.map(pot => (
                <PotCard 
                  key={pot.id} 
                  pot={pot} 
                  setPots={setPots} 
                  handleEdit={handleEdit}
                  setPotToEditId={setPotToEditId}
                  setShowAddMoneyOrWithdrawModal={setShowAddMoneyOrWithdrawModal}
                  setActionType={setActionType}
                />
              ))
            }
          </div> 
        )
      }
      {
        showAddMoneyOrWithdrawModal && 
        <AddMoneyOrWithdraw 
          setShowAddMoneyOrWithdrawModal={setShowAddMoneyOrWithdrawModal}
          actionType={actionType}
          setActionType={setActionType}
          pots={pots}
          setPots={setPots}
          potToEditId={potToEditId}
          setPotToEditId={setPotToEditId}   
        />
      }
    </div>
  )
}

export default Pots
