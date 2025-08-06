import { useSelector } from "react-redux";
import HistoryItems from "./HistoryItems"


const History=()=>{
    
    let cart=useSelector((store)=>store.expense.dataItems)

    return (
       
      <div className="mt-2 w-88  p-2">
       
        <h2 className="font-semibold border-b-1 border-gray-500 pb-1">History</h2>
        
        <div className="mt-3 h-[192px] p-2 overflow-y-auto custom-scrollbar">
            {
                (cart.length==0)?
                (<HistoryItems data={{name:"No Transaction Yet"}}/>)
                :(cart.map((el,idx)=><HistoryItems key={idx} data={el} index={idx} />))                
            } 
        </div>
      </div>    
    )
}

export default History;
