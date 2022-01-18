import React, { Component, useEffect, useState } from "react";
import "./Summary.css";
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
      <span className="Summary-PV">$420,069</span>
      <span className="Summary-percentage">-1.83%</span>
      <p>insert chart here</p>
      <div className="Summary-principal">Principal: ${(Math.round(props.principal * 100) / 100).toFixed(2)}</div>
      <div className="Summary-change">Net Change: -$79,931</div>
    </div>
  
    );
};

export default Summary;