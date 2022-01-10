import React, { Component } from "react";
import "./Summary.css";

const Summary = (props) => {
  return (

    <div className="Summary-container">
      <span className="Summary-PV">$420,069</span>
      <span className="Summary-percentage">-1.83%</span>
      <p>insert chart here</p>
      <div className="Summary-principal">Principal: $500,000</div>
      <div className="Summary-change">Net Change: -$79,931</div>
    </div>
  
    );
};

export default Summary;