import axios from "axios";
import React, { useDeferredValue, useEffect } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/currency";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartData(){
    const {corrency}=useSelector(state=> state.curr)
    const dispatch =useDispatch()
async function fetchdata (){
    try{
        const response =await axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${corrency}&days=365&interval=daily`)
   
        dispatch(update(response.data))
        console.log(response.data)
    }
    catch(err){
        console.log(err)
}}
useEffect(()=>{
    fetchdata()

},[corrency]);
    return(
        <div>ChartData</div>
    )
}