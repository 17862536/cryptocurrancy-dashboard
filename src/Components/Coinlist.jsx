import React, { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";


function Coinlist() {
  const [coins, setCoins] = useState([]);
  const {corrency}=useSelector(state=> state.curr)

  useEffect(() => {
    axios
      .get(
       `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${corrency}&order=market_cap_desc&per_page=100&page=1`
      )
      .then((res) => {
        setCoins(res.data);
      })
      .catch((error) => console.log(error));
  }, [corrency]);
  
  return (
    <div>
      <div className="text-blue-600 absolute top-[7rem]">COIN LIST</div>
      <div className="overflow-auto">
        {coins.map((items) => {
          return (
            <div className="my-4">
              <div className="flex justify-between">
                <div className="flex">
                  
                  <img className="w-8" src={items.image} alt="" />
                  {items.name}
                </div>
                {items.current_price}
              </div>
              <div className="flex justify-between ">
                <div>{items.market_cap}</div>
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
