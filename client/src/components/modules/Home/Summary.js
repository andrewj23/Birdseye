import React, { Component, useEffect, useState } from "react";
import "./Summary.css";
import PieRechartComponent from "./PieChart";
import { getTotalDeposited } from "../../../../../server/coinImports";

const Summary = (props) => {
//   const [principal, setPrincipal] = useState(0);
//
// useEffect(()=>{
//   if (props.userId){
//   getTotalDeposited().then((response) =>{
//     setPrincipal(response)
//   })}
// },[props.userId])
  return (

    <div className="Summary-container">
      <span className="Summary-PV">${props.totalVal.toFixed(2)}</span>
      <span className="Summary-percentage">{props.percentChange}%</span>
      <div className="Summary-principal">Principal: {props.principal}</div>
      <div className="Summary-change">Net Change: ${props.netChange}</div>
      <PieRechartComponent coins={props.coins} priceData={props.priceData} totalVal={props.totalVal}/>
    </div>
  
    );
};

export default Summary;