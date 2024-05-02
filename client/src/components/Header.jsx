import { Navbar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import logo from '../assets/images/logo.png';


export default function Header() {
	const path = useLocation().pathname;

	// to change theme, light or dark theme
	const [theme, setTheme] = useState(null);
	const element = document.documentElement;
	useEffect(() => {
		if (theme === 'dark') {
			element.classList.add('dark');
		} else {
			element.classList.remove('dark');
		}
	}, [theme]);

	const handleThemeSwitch = () => {
		setTheme(theme === 'dark' ? 'light' : 'dark');
	};

	return (
		<Navbar
			fluid
			className='shadow-md fixed top-0 w-full z-50 dark:bg-[#2B2D42] dark:text-white'
		>
			<Navbar.Brand href='/'>
				<img
					src={logo}
					className='mr-3 w-full h-20 sm:h-30 dark:text-white'
					alt='Ed Logo'
				/>
				<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'></span>
			</Navbar.Brand>
			<div className='flex md:order-2 items-center justify-between gap-3'>
				<button
					className='rounded-full dark:text-black font-semibold'
					onClick={handleThemeSwitch}
				>
					{theme === 'dark' ? (
						<MdOutlineLightMode className='w-8 h-8 text-gray-300' />
					) : (
						<MdOutlineDarkMode className='w-8 h-8 text-dark' />
					)}
				</button>
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<Navbar.Link active={path === '/'} as={'div'}>
					<Link to='/' className='text-xl'>
						Home
					</Link>
				</Navbar.Link>
				<Navbar.Link active={path === '/projects'} as={'div'}>
					<Link to='/projects' className='text-xl'>Projects</Link>
				</Navbar.Link>
				<Navbar.Link active={path === '/about'} as={'div'}>
					<Link to='/about' className='text-xl'>About</Link>
				</Navbar.Link>
				<Navbar.Link active={path === '/contact'} as={'div'}>
					<Link to='/contact' className='text-xl'>Contact</Link>
				</Navbar.Link>
				<Navbar.Link active={path === '/resume'} as={'div'}>
					<Link to='/resume' className='text-xl'>Resume</Link>
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}
