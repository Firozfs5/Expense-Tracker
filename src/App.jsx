import AddTransaction from './components/AddTramsaction'
import Balance from './components/Balance'
import History from './components/History'
import './index.css'
import { useEffect, useState } from 'react';


function App() {

  let [expenseData,setExpenseData]=useState([]);
  let [saving,setSaving]=useState(0)
  let [expense,setExpense]=useState(0)

  console.log('hi');
  
  useEffect(()=>{
      let sav=0;
      let exp=0;

        expenseData.forEach(el=>{
        if(el.money<0){
            exp+=(Math.abs(el.money));
        }
        else{
            sav+=(Math.abs(el.money));
        }

      })

    setExpense(exp);
    setSaving(sav);
  },[expenseData])

  console.log(expenseData);
  
  return (

    <div className="bg-[#EFEEEA] h-[100vh] flex justify-center items-center">
        
        <div className='flex flex-col w-94 h-11/12 justify-center items-center '>
          <h1 className='font-medium text-xl '>Expense Tracker</h1>
          <Balance expenseData={expenseData} expenseInfo={[saving,expense]} />
          <History expenseData={expenseData} setExpenseData={setExpenseData} />        
          <AddTransaction expenseData={expenseData} seData={expenseData} setExpenseData={setExpenseData} /> 
        </div>
    </div>      

  )
}

export default App
