import { Provider } from 'react-redux';
import AddTransaction from './components/AddTramsaction'
import Balance from './components/Balance'
import History from './components/History'
import './index.css'
import reduxStore from '../utils/reduxStore';

function App() {
  
  return (

    <Provider store={reduxStore}>
    <div className="bg-[#EFEEEA] h-[100vh] flex justify-center items-center">
        <div className='flex flex-col w-94 h-11/12 justify-center items-center '>
          <h1 className='font-medium text-xl '>Expense Tracker</h1>
          <Balance  />
          <History  />        
          <AddTransaction/>           
        </div>
    </div>       
    </Provider>
     

  )
}

export default App
