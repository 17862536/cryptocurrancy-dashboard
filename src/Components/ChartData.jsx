import axios from "axios";
import moment from "moment/moment"
import React, { useDeferredValue, useEffect, useState } from "react";
import Button from "./Button"
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
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(["null"]);
  const dispatch = useDispatch();
  let option;
  let dataset;
  async function fetchdata() {
    try {
      const response = await axios.get(
        `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${corrency}&days=365&interval=daily`
      );
      setStatus("not null");
      setData(response.data);
      console.log(data);
    } catch (err) {
      console.log(err);
      console.log(corrency);
    }
  }
  useEffect(() => {
    fetchdata();
  }, [corrency, status]);
  if (data !== null) {
    const price = data.prices.map((value) => ({
      x: value[0],
      y: value[1],
    }));
    option = { maintainAspectRatio: false };
    dataset = {
      labels: price.map((value) => moment(value.x).format("MMM DD YYYY")),
      datasets: [
        {
          backgroundColor: "rgba(0,0,255,1.0)",
          borderColor: "rgba(0,0,255,0.1)",
          data: price.map((value) => value.y),
        },
      ],
    };
  }

  return(
      <div>
        <Button/>
      {
    
    data === null ? (
      <div>loading...</div>
    ) : (
      <div>
        <Line height={"200%"} options={option} data={dataset} />
        {console.log(option, dataset)}
      </div>
    )
  }
  </div>

  )}
