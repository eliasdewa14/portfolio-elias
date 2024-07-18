import ContactLeft from './ContactLeft';
import ContactRight from './ContactRight';

function Contact() {
  return (
		<section id='contact' className='min-h-screen'>
			<div className='mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10'>
				<div className='flex flex-col justify-center items-center gap-2'>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold py-3 text-[#08D9D6]'>
						Get In Touch
					</h1>
					<div className='w-full mt-10'>
						<div className='grid grid-cols-1 gap-x-4 lg:grid-cols-5'>
							<ContactLeft />
							<ContactRight />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Contact