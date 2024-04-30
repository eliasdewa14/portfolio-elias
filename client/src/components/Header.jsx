import { Navbar } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import SocialLinks from './SocialLinks';


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
				<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
					Elias Dewa
				</span>
			</Navbar.Brand>
			<div className='flex md:order-2 items-center justify-between gap-3'>
				<SocialLinks />
				<button
					className='rounded-full dark:text-black font-semibold'
					onClick={handleThemeSwitch}
				>
					{theme === 'dark' ? (
						<MdOutlineLightMode className='w-8 h-8 text-gray-500' />
					) : (
						<MdOutlineDarkMode className='w-8 h-8 text-gray-500' />
					)}
				</button>
				<Navbar.Toggle />
			</div>
			<Navbar.Collapse>
				<Navbar.Link active={path === '/'} as={'div'}>
					<Link to='/'>Home</Link>
				</Navbar.Link>
				<Navbar.Link active={path === '/projects'} as={'div'}>
					<Link to='/projects'>Projects</Link>
				</Navbar.Link>
				<Navbar.Link active={path === '/about'} as={'div'}>
					<Link to='/about'>About</Link>
				</Navbar.Link>
				<Navbar.Link active={path === '/contact'} as={'div'}>
					<Link to='/contact'>Contact</Link>
				</Navbar.Link>
				<Navbar.Link active={path === '/resume'} as={'div'}>
					<Link to='/resume'>Resume</Link>
				</Navbar.Link>
			</Navbar.Collapse>
		</Navbar>
	);
}
