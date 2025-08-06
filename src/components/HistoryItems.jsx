import { useDispatch } from "react-redux";
import { removeItem } from "../../utils/expenseDataSlice";

// const HistoryItems=({data,setExpenseData,toDelete,index})=>{
const HistoryItems=({data,index})=>{

    let dispatch=useDispatch();
    
    function handleClick(){
        // {let copyData=toDelete;  
        // // console.log(index);
        
        // copyData.splice(index,1);
        // // console.log(copyData);
        
        // setExpenseData([...copyData])}

        dispatch(removeItem(index))
    }


    return (
        <div className={"flex justify-between w-[312px] bg-white hover:bg-[#faf9f9] p-1 mb-1 rounded border-r-5 "+((data.money>0)?" border-green-400":"border-red-400")}>
            
            <span><button onClick={()=>handleClick()}>❌</button>  {data.name}</span>
            
            <span>
                {/* {(data.type=='income')?"+":"-"} */}
                {data.money}
            </span>
        
        </div>
    )
}

export default HistoryItems;