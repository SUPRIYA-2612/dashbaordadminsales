import React from 'react';
import { IoBagHandle, IoWalletOutline, IoCartOutline, IoPieChart } from 'react-icons/io5';
import { FaDollarSign,FaCheckCircle  } from 'react-icons/fa'

export default function DashboardStatsGrid() {
  return (
    <div className="flex flex-col md:flex-row gap-4">
      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-green-600">
          <FaDollarSign className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Earning</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">$19.8K</strong>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </span>
            <span className="text-sm text-green-500 pl-2">2%</span>
            <span className="text-black pl-1"> this month</span>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-slate-600">
          <FaCheckCircle artOutline className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Orders</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">$2.4K</strong>
          </div>
          <div className="flex items-center">
            <span className="text-pink-500 ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </span>
            <span className="text-sm text-pink-500 pl-2">2%</span>
            <span className="text-black pl-1">this month</span>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-sky-600">
          <IoWalletOutline className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Balance</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">$2.4K</strong>
          </div>
          <div className="flex items-center">
            <span className="text-pink-500 ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 14l-7 7m0 0l-7-7m7 7V3"
                />
              </svg>
            </span>
            <span className="text-sm text-pink-500 pl-2">2%</span>
            <span className="text-black pl-1"> this month</span>
          </div>
        </div>
      </BoxWrapper>

      <BoxWrapper>
        <div className="rounded-full h-12 w-12 flex items-center justify-center bg-pink-400">
          <IoBagHandle className="text-2xl text-white" />
        </div>
        <div className="pl-4">
          <span className="text-sm text-gray-500 font-light">Total Sales</span>
          <div className="flex items-center">
            <strong className="text-xl text-gray-700 font-semibold">$19.8K</strong>
          </div>
          <div className="flex items-center">
            <span className="text-green-500 ml-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 10l7-7m0 0l7 7m-7-7v18"
                />
              </svg>
            </span>
            <span className="text-sm text-green-500 pl-2">11%</span>
            <span className="text-black pl-1"> this week</span>
          </div>
        </div>
      </BoxWrapper>
    </div>
  );
}

function BoxWrapper({ children }) {
  return <div className="bg-white rounded-sm p-4 md:p-6  flex-1 border border-gray-200 flex items-center">{children}</div>;
}
