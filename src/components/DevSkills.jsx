import { motion } from 'framer-motion';

const DevSkills = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1, transition: { duration: 0.5 } }}
			className='w-full flex flex-col lg:flex-row gap-10 lg:gap-20'
		>
			<div className='w-full p-2'>
				<h2 className='text-3xl md:text-4xl font-bold text-center py-3'>
					Development Skill
				</h2>
				<div className='flex flex-col gap-6 mt-6'>
					<div className='overflow-x-hidden'>
						<p className='text-sm uppercase font-medium'>HTML 5</p>
						<span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
							<motion.span
								initial={{ x: '-100%', opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className='w-[95%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
							>
								<span className='absolute -top-7 right-0'>95%</span>
							</motion.span>
						</span>
					</div>
					<div className='overflow-x-hidden'>
						<p className='text-sm uppercase font-medium'>CSS3</p>
						<span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
							<motion.span
								initial={{ x: '-100%', opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className='w-[83%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
							>
								<span className='absolute -top-7 right-0'>83%</span>
							</motion.span>
						</span>
					</div>
					<div className='overflow-x-hidden'>
						<p className='text-sm uppercase font-medium'>JAVASCRIPT</p>
						<span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
							<motion.span
								initial={{ x: '-100%', opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className='w-[78%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
							>
								<span className='absolute -top-7 right-0'>78%</span>
							</motion.span>
						</span>
					</div>
					<div className='overflow-x-hidden'>
						<p className='text-sm uppercase font-medium'>React</p>
						<span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
							<motion.span
								initial={{ x: '-100%', opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
							>
								<span className='absolute -top-7 right-0'>90%</span>
							</motion.span>
						</span>
					</div>
					<div className='overflow-x-hidden'>
						<p className='text-sm uppercase font-medium'>Node.js</p>
						<span className='w-[85%] h-2 bgOpacity rounded-md inline-flex mt-2'>
							<motion.span
								initial={{ x: '-100%', opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className='w-full h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
							>
								<span className='absolute -top-7 right-0'>85%</span>
							</motion.span>
						</span>
					</div>
					<div className='overflow-x-hidden'>
						<p className='text-sm uppercase font-medium'>Express.js</p>
						<span className='w-full h-2 bgOpacity rounded-md inline-flex mt-2'>
							<motion.span
								initial={{ x: '-100%', opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className='w-[85%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
							>
								<span className='absolute -top-7 right-0'>85%</span>
							</motion.span>
						</span>
					</div>
					<div className='overflow-x-hidden'>
						<p className='text-sm uppercase font-medium'>Python</p>
						<span className='w-[70%] h-2 bgOpacity rounded-md inline-flex mt-2'>
							<motion.span
								initial={{ x: '-100%', opacity: 0 }}
								animate={{ x: 0, opacity: 1 }}
								transition={{ duration: 0.5, delay: 0.5 }}
								className='w-[90%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative'
							>
								<span className='absolute -top-7 right-0'>70%</span>
							</motion.span>
						</span>
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default DevSkills;
