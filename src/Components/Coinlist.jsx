import React, { useState, useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { updateCoinList } from "../redux/currency";


function Coinlist() {
  const dispatch =useDispatch()
 
  const {corrency}=useSelector(state=> state.curr)
const {coinlist} =useSelector(state=> state.curr)
  useEffect(() => {
    axios
      .get(
       `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${corrency}&order=market_cap_desc&per_page=100&page=1`
      )
      .then((res) => {
        
        dispatch(updateCoinList(res.data))
      })
      .catch((error) => console.log(error));
  }, [corrency]);
  
  return (
    <div className=" ">
      
      <div className="p-3 px-5 text-lg font-bold text-center italic border-b-2 border-solid border-slate-50">
        <span>Cryptocurrency by Market Cap</span>
      </div>
      <div className="p-2 m-2 max-h-[65vh] overflow-auto">
        {coinlist.map((items) => {
          return (
            <div className="my-8 text-sm">
              <div className="flex justify-between">
                <div className="flex font-semibold text-lg">
                  
                  <img className="w-7" src={items.image} alt="" />
                  {items.name}
                </div>
                {items.current_price}
              </div>
              <div className="flex justify-between ">
                <div className="text-slate-500 ">Mkt Cap : {items.market_cap}</div>
                <div>{items.price_change_percentage_24h}</div>
              </div>

              
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Coinlist;
