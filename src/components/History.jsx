import HistoryItems from "./HistoryItems"


const History=({expenseData,setExpenseData})=>{
    // console.log(expenseData);
    

    return (
       
      <div className="mt-2 w-88  p-2">
       
        <h2 className="font-semibold border-b-1 border-gray-500 pb-1">History</h2>
        
        <div className="mt-3 h-[192px] p-2 overflow-y-auto custom-scrollbar">
            {
                (expenseData.length==0)?
                (<HistoryItems data={{name:"No Transaction Yet"}}/>)
                :(expenseData.map((el,idx)=><HistoryItems key={idx} data={el} 
                toDelete={expenseData} index={idx} setExpenseData={setExpenseData}/>))
            } 
        </div>
      </div>    
    )
}

export default History;
