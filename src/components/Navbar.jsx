import { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import { FiMenu } from 'react-icons/fi';
import { MdClose } from 'react-icons/md';
import { MdOutlineDarkMode, MdOutlineLightMode } from 'react-icons/md';
import logo from '../assets/images/logo.png';
import { navLink } from '../data/data';
import SocialLinks from './SocialLinks';

const Navbar = () => {
	const [showMenu, setShowMenu] = useState(false);

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
		<div className='w-full sticky top-0 z-50 flex justify-between items-center shadow-md bg-white dark:bg-[#2B2D42] dark:text-white'>
			<div className='ml-8'>
				<Link to='home'>
					<img
						src={logo}
						alt='logo'
						className='w-full h-12 sm:h-16 md:h-20 cursor-pointer'
					/>
				</Link>
			</div>
			<div className='flex justify-between items-center gap-5'>
				<ul className='hidden md:inline-flex items-center gap-6 lg:gap-10'>
					{navLink.map(({ id, title, link }) => (
						<li
							className='font-semibold hover:text-[#08D9D6] cursor-pointer duration-300'
							key={id}
						>
							<Link
								activeClass='active'
								to={link}
								spy={true}
								smooth={true}
								offset={-70}
								duration={500}
							>
								{title}
							</Link>
						</li>
					))}
				</ul>
				<div className='flex items-center'>
					<button
						className='rounded-full dark:text-black font-semibold mr-2'
						onClick={handleThemeSwitch}
					>
						{theme === 'dark' ? (
							<MdOutlineLightMode className='w-8 h-8 text-gray-300' />
						) : (
							<MdOutlineDarkMode className='w-8 h-8 text-gray-400' />
						)}
					</button>
					<span
						onClick={() => setShowMenu(!showMenu)}
						className='text-xl md:hidden bg-black w-10 h-10 inline-flex items-center justify-center rounded-full text-designColor cursor-pointer text-[#0f0] mr-10'
					>
						<FiMenu />
					</span>
				</div>
				{showMenu && (
					<div className='md:hidden w-[50%] h-screen absolute top-0 right-0 bg-gray-900 dark:bg-white p-4'>
						<div className='flex flex-col gap-8 py-4 relative'>
							<ul className='flex flex-col gap-4 pt-3'>
								{navLink.map((item) => (
									<li
										key={item.id}
										className='font-semibold text-gray-400 dark:text-gray-900 cursor-pointer hover:bg-slate-600'
									>
										<Link
											onClick={() => setShowMenu(false)}
											activeClass='active'
											to={item.link}
											// spy={true}
											// smooth={true}
											// offset={-70}
											// duration={500}
										>
											{item.title}
										</Link>
									</li>
								))}
							</ul>
							<span
								onClick={() => setShowMenu(false)}
								className='absolute top-0 right-3 text-gray-400 dark:text-gray-900 hover:text-red-500 text-2xl cursor-pointer'
							>
								<MdClose />
							</span>
							<div className='flex flex-col'>
								<SocialLinks />
							</div>
						</div>
					</div>
				)}
			</div>
		</div>
	);
};

export default Navbar;
