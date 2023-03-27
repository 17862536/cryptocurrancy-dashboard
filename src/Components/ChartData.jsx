import axios from "axios";
import moment from "moment/moment";
import React, { useDeferredValue, useEffect, useState } from "react";
import Button from "./Button";
import ChartButton from "./ChartButton";
import CryptoButton from "./CryptoButton";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import { Bar } from 'react-chartjs-2';



import { useDispatch, useSelector } from "react-redux";
import { update } from "../redux/currency";
import { marketupdate } from "../redux/market";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,

  Title,
  Tooltip,
  Legend
);


export default function ChartData() {
  
  
  const { corrency, chartlist} = useSelector((state) => state.curr);
  const { days } = useSelector((state) => state.days);
  const [data, setData] = useState(null);
  const [status, setStatus] = useState(["null"]);
  const dispatch = useDispatch();
//  
let optionHorizontal;
let optionVertical;
let dataset;
async function fetchdata() {
  try {
    const response = await axios.get(
      `https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=${corrency}&days=${days}&interval=daily`
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
}, [corrency, status, days]);
if (data !== null) {
  const price = data.prices.map((value) => ({
    x: value[1],
    y: value[0],
  }));
  optionVertical = { maintainAspectRatio: false ,  indexAxis: 'x', };
  optionHorizontal = {maintainAspectRatio: false ,
    indexAxis: 'y',
    // elements: {
    //   bar: {
    //     borderWidth: 2,
    //   },
    // },
    // responsive: true,
    // plugins: {
    //   legend: {
    //     position: 'right',
    //   },
     
    // },
  };
  dataset = {
    labels: price.map((value) => moment(value.x).format("MMM DD YYYY")),
    datasets: [
      {
        backgroundColor: "rgba(0,0,255,1.0)",
        borderColor: "rgba(0,0,255,0.1)",
        data: price.map((value) => value.x),
      },
    ],
  };
}

return (
  <div>
    <div className="grid grid-cols-2 sm:justify-around">
      <div>
        <Button />
      </div>
      <div className="grid grid-cols-2 md:grid-cols-2 justify-around">
        <div className=" sm:mx-2">
          <ChartButton />
        </div>
        <div className="sm:mx-2">
          
          <CryptoButton/>
        </div>
      </div>
    </div>
    {data === null ? (
      <div> loading...</div>
    ) : chartlist === "Line-Chart" ? (
      <div className=" lg:w-[63vw] w-[90vw] ">
        <Line height={"200%"} options={optionVertical} data={dataset} />
      </div>
    ) : chartlist === "Horizontal-barChart" ? (
      
      <div>
        <Bar height={"260%"} options={optionHorizontal} data={dataset} />
      {console.log(dataset)}
      </div>
    ) : (chartlist ==="Vertical-Barchart" ?
      <div>
        <Bar height={"300%"} options={optionVertical} data={dataset} />
  {console.log(dataset)}
      </div> :null
    )}
  </div>
);
}



