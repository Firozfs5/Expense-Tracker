
const Balance=({expenseInfo,expenseData})=>{

    
    return ( 
        // bg-yellow-200
        <div className=" mt-4 w-88 p-3">
                {/* bg-white */}
            <div className=" p-1 mb-2 ">
                <h3 className="font-semibold text-[12px]">YOUR BALANCE</h3>
                <h1 className="font-semibold text-2xl">
                    ${(expenseData.length==0)?0:(expenseInfo[0]-expenseInfo[1])}
                </h1>
            </div>

            <div className="bg-white flex justify-around items-center p-2 border-b-2 border-gray-400 rounded">
               {/* bg-[aliceblue] */}
               <div className=" flex flex-col p-2 items-center justify-center ">
                <span className="font-medium text-[13px] ">INCOME</span> 
                <span className="text-green-500 text-[19px] font-normal">${expenseInfo[0]}</span>
               </div>

            <span className="bg-gray-300 w-[2px] h-9"></span>

               <div className=" flex flex-col p-2 items-center justify-center ">
                 <span className="font-medium text-[13px]">EXPENSE</span>
                 <span className="text-red-500 text-[19px] font-normal">${expenseInfo[1]}</span>
               </div>   
            </div>

        </div>
        


    )
}

export default Balance;