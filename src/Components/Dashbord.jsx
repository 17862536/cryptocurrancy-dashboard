import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import {update} from "../redux/currency"
import ChartData from './ChartData';

function Dashbord() {
  const curr =["USD","INR","GBP","EUR","ETH","BTC"]
  const {corrency}=useSelector(state=> state.curr)
const dispatch =useDispatch()
const handleCurrencyChange =(item)=>{
  dispatch(update(`${item.toLowerCase()}`))
}
  return (
    <div className='bg-green-400 w-64 h-96 flex-col'>
     <div class="p-10">

<div class="dropdown inline-block relative">
  <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
    <span class="mr-1">USD</span>
    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
  </button>
  <ul class="dropdown-menu absolute hidden text-gray-700 pt-1">
    {curr.map((item)=>{
      return <li class="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap" onClick={(e)=>handleCurrencyChange(item)}>{item}</li>
    
    })}
    
    
  </ul>
</div>
<div>
  <ChartData/>
</div>
</div>
      </div>
  
  )
}

export default Dashbord
