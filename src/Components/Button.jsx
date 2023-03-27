import React from 'react'
import { useDispatch } from 'react-redux';
import { daysUpdate } from '../redux/days';

function Button() {
  const dispatch=useDispatch()
  const  daySet =['day','W','M','3M','Y']
  const handleTimeChange =(day)=>{
   let value;
   if(day==="day"){
    value=1
   } else if(day==="W"){
    value=7
   }
   else if(day==="M"){
    value=30
   }else if(day==="3M"){
    value=90
   }else {
    value=365
   }
   
   dispatch(daysUpdate(value))
  }



  return (
    <div className="grid place-content-center ">
      <div className='grid grid-cols-5 md:grid-cols-5  '> {daySet.map((day)=>{
    
        return(
          <div className=' grid mx-1 md:mx-5 justify-centre text-xl text-items-centre h-10 w-10 bg-red-200  hover:bg-blue-500 hover:text-white  rounded-md border-slate-800'
          onClick={(e)=>handleTimeChange(day)}><button onClick={(e)=>handleTimeChange(day)}>{day}</button>
          </div>
          
        )})}
        </div>
    </div>

    // <div>
    //     <div className=' pl-10 grid justify-centre md:boder-2 sm:space-x-6 grid-col-2 border-slate-800 lg:space-12 xl:px-12 py-5 uppercase '>
    //       <div className='grid grid-cols-5  sm:grid-cols-10 xl:ml-[30%] rounded-md '>
    //       {daySet.map((day)=>{
    //         return(<div className=' mx-20 grid justify-centre text-xl text-items-centre h-10 w-10 bg-red-200  hover:bg-blue-500 hover:text-white  rounded-md border-slate-800' onClick={(e)=>handleTimeChange(day)}><button onClick={(e)=>handleTimeChange(day)}>{day}</button></div>)
    //       })}
    //     </div>
    //     {/* <div className='flex flex-wrap'>
    //     <div>list</div>
    //     <div>list</div>

    //     </div> */}
    //     </div>
      
    // </div>
  )
}

export default Button

