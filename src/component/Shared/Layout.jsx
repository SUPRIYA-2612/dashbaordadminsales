import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Header from './Header'

export default function Layout() {
	return (
		<div className="bg-neutral-100 h-screen w-screen overflow-auto flex flex-row">
		<Sidebar />
			<div className=" bg-neutral-100 flex flex-col flex-1 overflow-auto">
				<Header />
				<div className="flex-1 p-4 min-h-0 overflow-auto bg-neutral-100">
					<Outlet />
				</div>
		
			</div>
		</div>
	)
}

