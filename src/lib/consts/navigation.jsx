import {
	HiOutlineViewGrid,
	HiOutlineCube,

	HiOutlineUsers,

	HiOutlineAnnotation,
	HiOutlineQuestionMarkCircle,

    HiCash 
} from 'react-icons/hi'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HiOutlineViewGrid />
	},
	{
		key: 'products',
		label: 'Products',
		path: '/products',
		icon: <HiOutlineCube />
	},
	
	{
		key: 'customers',
		label: 'Customers',
		path: '/customers',
		icon: <HiOutlineUsers />
	},
	{
		key: 'income',
		label: 'Income',
		path: '/income',
		icon: <HiCash />
	},
	{
		key: 'promote',
		label: 'Promote',
		path: '/promote',
		icon: <HiOutlineAnnotation />
	},

    {
		key: 'help',
		label: 'Help',
		path: '/help',
		icon: <HiOutlineQuestionMarkCircle />
	}
]

