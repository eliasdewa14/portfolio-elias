import { useTypewriter, Cursor } from 'react-simple-typewriter';
import SocialLinks from '../components/SocialLinks';

const LeftBanner = () => {
	const [text] = useTypewriter({
		words: ['Full Stack Developer.', 'Freelancer.', 'Lecturer.'],
		loop: true,
		typeSpeed: 20,
		deleteSpeed: 10,
		delaySpeed: 2000,
	});
	return (
		<div className='relative overflow-hidden rounded-lg lg:order-last'>
			<div className='flex flex-col gap-5'>
				<h1 className='text-xl md:text-2xl font-bold text-[#1A4D2E] dark:text-[#ADD8E6]'>
					Hi, I'm <span className='text-designColor'>Elias Dewa</span>
				</h1>
				<h2 className='text-3xl md:text-5xl font-bold text-black dark:text-white'>
					a <span>{text}</span>
					<Cursor
						cursorBlinking='false'
						cursorStyle='|'
						cursorColor='#ff014f'
					/>
				</h2>
				<p className='text-base font-bodyFont leading-6 tracking-wide sm:py-5'>
					I’m a full-stack developer specializing in building responsive
					full-stack web applications.
				</p>
				<div className='flex flex-col gap-4'>
					<p className='text-xl sm:text-2xl '>LET'S CONNECT</p>
					<SocialLinks />
				</div>
			</div>
		</div>
	);
};

export default LeftBanner;
