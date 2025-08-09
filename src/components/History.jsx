import { useDispatch, useSelector } from "react-redux";
import HistoryItems from "./HistoryItems"
import { clearItem } from "../../utils/expenseDataSlice";


const History=()=>{
    
    let cart=useSelector((store)=>store.expense.dataItems)

    let dispatch=useDispatch();
    

    return (
       
      <div className=" w-88  p-2">
       
      <div className="flex justify-between items-center">
        <h2 className="font-semibold pb-1 dark:text-white">History</h2>
        <button className="font-semibold hover:bg-white p-1 rounded-xl dark:hover:text-black dark:text-white"
        onClick={()=>dispatch(clearItem())}
        >Clear</button>
      </div>
      <hr />


        
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
