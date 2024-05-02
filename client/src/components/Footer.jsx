import React from 'react'
import SocialLinks from './SocialLinks';

function Footer() {
  return (
		<footer className='footer border-t-2 shadow-md flex flex-col gap-2 justify-between sm:flex-row items-center p-4 bg-neutral text-neutral-content dark:bg-[#2B2D42] dark:text-white'>
			<aside className='items-center grid-flow-col'>
				<p>Copyright © 2024 - All right reserved</p>
			</aside>
			<nav className='flex gap-4 md:place-self-center md:justify-self-end'>
				<SocialLinks />
			</nav>
		</footer>
	);
}

export default Footer