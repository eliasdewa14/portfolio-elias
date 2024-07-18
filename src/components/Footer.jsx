import SocialLinks from './SocialLinks';

function Footer() {
  return (
		<footer className='footer border-t-2 shadow-md flex flex-col sm:flex-row gap-4 justify-between items-center p-4 bg-neutral text-neutral-content dark:bg-[#2B2D42] dark:text-white'>
			<aside className='order-2 items-center grid-flow-col'>
				<p>© 2024 Elias Dewa - All right reserved</p>
			</aside>
			<nav className='sm:order-2 flex gap-4 md:place-self-center md:justify-self-end'>
				<SocialLinks />
			</nav>
		</footer>
	);
}

export default Footer