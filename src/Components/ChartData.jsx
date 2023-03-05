import axios from "axios";
import React, { useDeferredValue, useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";

import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/currency";
import { marketupdate } from "../redux/market";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function ChartData() {
  const { marketdata } = useSelector((state) => state.market);
  const { corrency } = useSelector((state) => state.curr);
  const [data, setData] = useState([]);
  const dispatch = useDispatch();
  async function fetchdata() {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${corrency}&days=365&interval=daily`
      );

      // dispatch(marketupdate({resp}))
      setData(response.data);
      console.log(`Market Data: ${data}`);

      console.log(response.data.prices);
    } catch (err) {
      console.log(err);
      console.log(corrency);
    }
  }
  useEffect(() => {
    fetchdata();
  }, [corrency]);
  return <div>ChartData</div>;
}
