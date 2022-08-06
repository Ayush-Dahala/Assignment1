import React from "react";
import { useState } from "react";
import { Bar,Line,Pie } from "react-chartjs-2";
import { UserData } from "./Data";
import {Chart as ChartJS} from 'chart.js/auto'
import "./Chart.css";
const Chart= () => {
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Gained",
        data: UserData.map((data) => data.userGain),
        backgroundColor:['green','grey'],
        borderColor: "black",
        borderWidth:1,
      },
    ],
  });

  const [userLostData, setUserLostData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "User Lost",
        data: UserData.map((data) => data.userLost),
        backgroundColor:['green','grey'],
        borderColor: "black",
        borderWidth:1,
      },
    ],
  });

  return(
  <div style={{width:700}}>
    <div className="userData" style={{width:1000}}>
    <Bar data={userData} />;
    </div>
    <div className="userLost">
    <Line data={userLostData}/>
    <Pie data={userLostData}/>
    </div>
  </div> 
   )
};

export default Chart;
