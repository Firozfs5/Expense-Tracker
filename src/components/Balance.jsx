import { useSelector } from "react-redux";

const Balance=()=>{

    let balance=useSelector((store)=>store.expense.dataItems)

    console.log(balance);

    function saving(){
        if(balance.length==0){
            return 0;
        }else{
            let val=0;
            for(let i=0;i<balance.length;i++){
                if(balance[i].money>0){
                    val=val+balance[i].money
                }
            }
            console.log(val);
            
            return val;
        }
    }

    function expense(){

        if(balance.length==0){
            return 0;
        }else{
            let negative=balance.filter((el)=> el.money<0)
            console.log(negative);

            if(negative.length!==0){
                let sum=0;
                
                for(let i=0;i<negative.length;i++){
                    sum=sum-(negative[i].money)
                }
                console.log(sum);
                
                return sum;
            }
            

        }
    }

    function funcBalance(){
        if(balance.length==0){
            return 0
        }else{
            let sav=(saving()==undefined)?0:saving();
            let exp=(expense()==undefined)?0:expense();
           
             return sav-exp
        }
    }
    
    return ( 
        <div className=" mt-4 w-88 p-3">
            <div className=" p-1 mb-2 ">
                <h3 className="font-semibold text-[12px] mb-1"><span className="bg-white p-1.5 rounded-xl">YOUR BALANCE</span></h3>
                <h1 className="font-semibold text-2xl mt-3 dark:text-white">
                    ${funcBalance()}
                </h1>
            </div>

            <div className="bg-white dark:bg-[#717171] flex justify-around items-center p-2 border-b-2 border-gray-400 rounded">

               <div className=" flex flex-col p-2 items-center justify-center ">
                <span className="font-medium text-[13px] dark:text-white">INCOME</span> 
                <span className="text-green-500 text-[19px] font-normal ">${(saving()==undefined)?0:saving()}</span>
               </div>

            <span className="bg-gray-300 w-[2px] h-9"></span>

               <div className=" flex flex-col p-2 items-center justify-center ">
                 <span className="font-medium text-[13px] dark:text-white">EXPENSE</span>
                 <span className="text-red-500 text-[19px] font-normal">${(expense()==undefined)?0:(expense())}</span>
               </div>   
            </div>

        </div>
        


    )
}

export default Balance;