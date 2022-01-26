import React, { Component, useEffect, useState } from "react";
import "./Summary.css";
import PieRechartComponent from "./PieChart";


const Summary = (props) => {
  const chartCoins = props.coins.map((coinObj) => {
    return {name: coinObj.currency.code, balance: coinObj.balance.amount}
  });

  return (
    <div className="Summary-container">
      <span className="Summary-PV">${props.totalVal.toFixed(2)}</span>
      <span className="Summary-percentage">{props.percentChange}%</span>
      <div className="Summary-principal">Principal: {props.principal}</div>
      <div className="Summary-change">Net Change: ${props.netChange}</div>
      <PieRechartComponent coins={chartCoins} priceData={props.priceData} totalVal={props.totalVal}
        width={300} height={315} outerRadius={120} />
    </div>
  
    );
  };


export default Summary;