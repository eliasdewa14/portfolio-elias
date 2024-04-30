import Contact from './Contact';
import LeftSide from './LeftSide';
import RightSide from './RightSide';

const Home = () => {
  return (
		<section id='home' className='min-h-screen pt-16 dark:bg-[#2B2D42] dark:text-white'>
			<div className='mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:py-16'>
				<div className='flex flex-col gap-8 justify-between sm:flex-row lg:gap-16'>
					<LeftSide />
					<RightSide />
				</div>
			</div>
		</section>
	);
}

export default Home