import bannerImg from '../assets/images/Ed.png';

const RightBanner = () => {
	return (
		<div className='relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full'>
			<img
				className='w-full h-full lg:h-[500px] object-contain z-10'
				src={bannerImg}
				alt='bannerImg'
			/>
		</div>
	);
};

export default RightBanner;
