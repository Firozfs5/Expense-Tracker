import { Provider } from 'react-redux';
import AddTransaction from './components/AddTramsaction'
import Balance from './components/Balance'
import History from './components/History'
import './index.css'
import reduxStore from '../utils/reduxStore';
import { useState } from 'react';

function App() {

  let [light,setLight]=useState(false);

  function handleTheme(){
    setLight(!light)
  }
  
  return (

    <div data-theme={(light)?"":"dark"}>
    <Provider store={reduxStore}>
    <div className="bg-[#EFEEEA] p-1 h-[100vh] flex justify-center items-center  dark:bg-[#121212]">
        <div className='flex flex-col w-94 h-12/12 justify-center items-center dark:bg-[#3f3f3f]'>
        {/*  */}
        <div className='w-12/12 flex justify-around'>
          <h1 className='font-medium text-xl bg-white p-1 px-3 rounded-xl'>Expense Tracker</h1>
          <button
          onClick={handleTheme}
          className='font-medium text-xl bg-white p-1 px-3 rounded-xl'
          >{(light)?"Light":'Dark'}</button>          
        </div>

          {/*  */}
          <Balance  />
          <History  />        
          <AddTransaction/>           
        </div>
    </div>       
    </Provider>      
    </div>

     

  )
}

export default App
