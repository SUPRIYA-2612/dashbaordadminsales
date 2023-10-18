import React from 'react';
import { FcDoughnutChart } from 'react-icons/fc';
import { FaAngleRight } from 'react-icons/fa';
import { DASHBOARD_SIDEBAR_LINKS } from '../../lib/consts/navigation';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import classNames from 'classnames';
import Profile from './Profile';

const linkClass =
  'flex items-center gap-2 font-light px-3 py-2 hover:bg-neutral-700 hover:no-underline active:bg-neutral-600 rounded-sm text-base';

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div className=' flex-col bg-gray-800 w-60 p-3 text-white hidden md:flex'>
      <div className='flex items-center gap-2 px-2 py-4'>
        <FcDoughnutChart fontSize={24} />
        <span className='text-neutral-100 text-lg'>Dashboard</span>
      </div>
      <div className='flex-1 py-4 md:py-8 flex flex-col gap-0.5'>
        {DASHBOARD_SIDEBAR_LINKS.map((item) => (
          <SidebarLink key={item.key} item={item}>
            {item.label}
          </SidebarLink>
        ))}
      </div>
      <div className='py-48 md:py-8 flex flex-col gap-0.5'>
        <Profile />
      </div>
    </div>
  );
}

function SidebarLink({ item }) {
  const { pathname } = useLocation();

  return (
    <Link
      to={item.path}
      className={classNames(
        pathname === item.path ? 'bg-neutral-700 text-white' : 'text-neutral-100',
        linkClass
      )}
    >
      <span className='text-xl'>{item.icon}</span>
      {item.label}
      <FaAngleRight className='ml-auto' />
    </Link>
  );
}
