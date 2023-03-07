import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/currency";
import ChartData from "./ChartData";
import DropdownButton from "./DropdownButton";

function Dashbord() {
  const curr = ["USD", "INR", "GBP", "EUR", "ETH", "BTC"];
  const { corrency } = useSelector((state) => state.curr);
  const dispatch = useDispatch();
  const handleCurrencyChange = (item) => {
    dispatch(update(`${item.toLowerCase()}`));
  };
  return (
    <div className="bg-white h-96 flex-col">
      <div class="px-10 py-5" > <DropdownButton
        name={corrency.toUpperCase()}
        list={curr}
        handleChange={handleCurrencyChange}
      /></div>
     
      <div>
        <ChartData />
      </div>
    </div>
  );
}

export default Dashbord;
