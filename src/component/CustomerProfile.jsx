import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer} from 'recharts';

const data = [
 
  { name: 'Male', value: 540 },
  { name: 'Female', value: 620 },
  { name: 'Other', value: 210 }
];

const RADIAN = Math.PI / 180;
const COLORS = ['#E03FD8', '#C0C0C0', 'blue'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  if (index === 0) {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    
  }
  return null; // Hide labels for other data points
};

export default function CustomerProfile() {
  return (
    <div className="w-[20rem] h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col">
      <strong className="text-gray-700 font-bold">Customers <br />Customers that buy products</strong>
      <div className="mt-3 w-full flex-1 text-xs">
      <ResponsiveContainer width="100%" height="100%">
          <PieChart width={400} height={350}>
            <Pie
              data={data}
              cx="50%"
              cy="50%" // Adjust the cy to center the PieChart
              labelLine={false}
              label={renderCustomizedLabel}
              innerRadius={75} // Increase the innerRadius to create a gap
              outerRadius={100}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              
            </Pie>
            <text x={150} y={150} textAnchor="middle" dominantBaseline="middle" className="chart-center-text">
            <tspan fill="red" fontWeight="bold">65%</tspan>
             <tspan>Total New Customer </tspan>
             
            </text>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
