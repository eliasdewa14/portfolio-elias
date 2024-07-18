import LeftSide from './LeftSide';
import RightSide from './RightSide';

const Home = () => {
  return (
		<section
			id='home'
			className='min-h-screen'
		>
			<div className='mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10'>
				<div className='flex flex-col gap-4 justify-between sm:flex-row'>
					<LeftSide />
					<RightSide />
				</div>
			</div>
		</section>
	);
}

export default Home