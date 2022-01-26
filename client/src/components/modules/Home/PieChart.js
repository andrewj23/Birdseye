import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const PieRechartComponent = (props)=> {

  const COLORS = ['var(--primarylight)', 'var(--pink)', 'var(--purple)', 'var(--primary--dim)', 'var(--brightpink)',];

  let pieData = [];

  for (const coin of props.coins){
    let name = coin.currency.code;
    let value = parseFloat((100*props.priceData[name]*coin.balance.amount/props.totalVal).toFixed(2));
    pieData.push({'name':name, 'value':value})
    console.log(pieData)
  }

  const CustomTooltip = ({ active, payload, label }) => {
    if (active) {
      return (
        <div className="custom-tooltip" style={{ backgroundColor: '#ffff', padding: '5px', border: '1px solid #cccc' }}>
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </div>
      );
    }

    return null;
  };

    return (
      <PieChart width={730} height={300}>
        <Pie data={pieData} color="#000000" dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={120} fill="#8884d8" >
          {
            pieData.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
        <Tooltip content={<CustomTooltip />} />
        <Legend />
      </PieChart>
    )
}

export default PieRechartComponent;