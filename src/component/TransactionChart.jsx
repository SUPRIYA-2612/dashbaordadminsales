import React, { useState } from 'react';
import { BarChart, Bar, XAxis, Rectangle, Tooltip, ResponsiveContainer } from 'recharts';

const monthlyData = [
  {
    name: 'Jan',
    Earning: 2400
  },
  {
    name: 'Feb',
    Earning: 1398
  },
  {
    name: 'Mar',
    Earning: 9800
  },
  {
    name: 'Apr',
    Earning: 3908
  },
  {
    name: 'May',
    Earning: 4800
  },
  {
    name: 'Jun',
    Earning: 3800
  },
  {
    name: 'July',
    Earning: 4300
  },
  {
    name: 'Aug',
    Earning: 9800
  },
  {
    name: 'Sep',
    Earning: 3908
  },
  {
    name: 'Oct',
    Earning: 4800
  },
  {
    name: 'Nov',
    Earning: 3800
  },
  {
    name: 'Dec',
    Earning: 4300
  }
];

const quarterlyData = [
  {
    name: 'Q1',
    Earning: 15000
  },
  {
    name: 'Q2',
    Earning: 22000
  },
  {
    name: 'Q3',
    Earning: 18000
  },
  {
    name: 'Q4',
    Earning: 21000
  }
];

const yearlyData = [
  {
    name: '2023',
    Earning: 70000
  },
  {
    name: '2024',
    Earning: 80000
  },
  {
    name: '2025',
    Earning: 95000
  }
];

export default function TransactionChart() {
  const [selectedFilter, setSelectedFilter] = useState('monthly');

  const handleFilterChange = (e) => {
    setSelectedFilter(e.target.value);
  };

  const data = selectedFilter === 'monthly' ? monthlyData
    : selectedFilter === 'quarterly' ? quarterlyData
    : yearlyData;

  return (
    <div className="h-[22rem] bg-white p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
      <div className="flex items-center justify-between">
        <strong className="text-gray-700 font-bold">Overview <br/> Monthly Earning</strong>
        <select value={selectedFilter} onChange={handleFilterChange} className="border rounded-md p-2">
          <option value="monthly">Monthly</option>
          <option value="quarterly">Quarterly</option>
          <option value="yearly">Yearly</option>
        </select>
      </div>
      <div className="mt-3 w-full flex-1 text-xs">
      <ResponsiveContainer width="100%" aspect={3}>
          <BarChart data={data}  margin={{ top: 20, right: 20, left: 20, bottom: 20 }}>
            <XAxis dataKey="name" />
            <Tooltip />
            <Bar dataKey="Earning" fill="#C0C0C0"/>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
