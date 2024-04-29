import { Navbar } from 'flowbite-react';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import { links } from '../data/data';

export default function Header() {
	const path = useLocation().pathname;

	const [darkMode, setDarkMode] = useState(false);

	const toggleDarkMode = () => {
		setDarkMode(!darkMode);
	};
	return (
		<div className={`${darkMode && 'dark'}`}>
			<Navbar fluid rounded className='border-b-2 shadow-sm'>
				<Navbar.Brand href='/'>
					<span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
						Elias Dewa
					</span>
				</Navbar.Brand>
				<div className='flex md:order-2'>
					<button
						className='rounded-full dark:text-black font-semibold'
						onClick={toggleDarkMode}
					>
						{darkMode ? (
							<MdOutlineLightMode className='w-10 h-10 text-gray-500' />
						) : (
							<MdOutlineDarkMode className='w-10 h-10 text-gray-500' />
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
		</div>
	);
}
