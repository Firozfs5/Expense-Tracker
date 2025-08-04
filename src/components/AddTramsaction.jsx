import { useState } from "react";

const AddTransaction=({expenseData,setExpenseData})=>{

    let [Name,setName]=useState("");
    let [Money,setMoney]=useState("");

    function handleOnClick(){

        console.log(Name)
        if(Name==""||Money==""){
            alert("Yov'e Have'nt filled all Data")
            return;
        }


        if(expenseData.length==0){
        setExpenseData([{name:(Name),money:Number(Money)}])
        }else{
        setExpenseData([{name:(Name),money:Number(Money)},...expenseData])
        }

        setMoney("");
        setName("")
    }

    return (
     
        <div className="p-2  w-88">
            <h2 className=" font-semibold text-[16px] p-1 border-b-2 border-gray-400">Add New Transactions</h2>

            <div className="flex justify-between mt-4 items-center">
               <h1>Name</h1>
               <input type="text" value={Name} onChange={(e)=>setName(e.target.value)} className="bg-white w-64 p-1 rounded" placeholder="Enter Name ..." /> 
            </div>

            <div className="flex justify-between mt-4 items-center">
               <h1>Amount</h1>
               <input type="text" value={Money} onChange={(e)=>setMoney(e.target.value)} className="bg-white w-64 p-1 rounded" placeholder="Enter Amount ..." /> 
            </div>

            <button className="bg-[#9694FF] hover:bg-[#A294F9] mt-4 p-1 rounded w-[100%] text-white text-[16px] font-semibold "
             onClick={()=>handleOnClick()}
            >Add Transaction</button>
        
        </div>
    )
}

export default AddTransaction;