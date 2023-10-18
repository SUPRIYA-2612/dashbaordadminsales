import React from 'react';
import DashboardStatsGrid from './DashboardStatsGrid';
import TransactionChart from './TransactionChart';
import CustomerProfile from './CustomerProfile';
import ProductTable from './ProductTable';

export default function Dashboard() {
  return (
    <div className="flex flex-col gap-4">
      <DashboardStatsGrid />

      <div className="flex flex-col md:flex-row gap-4">
        <TransactionChart />
        <CustomerProfile />
      </div>

	  <div className="flex flex-col gap-4 w-full">
        <ProductTable />
      </div>
    </div>
  );
}

