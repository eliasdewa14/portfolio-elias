import { ServiceCard } from "../components/ServiceCard";
import { services } from '../data/data';


function Services() {
	return (
		<section id='services' className='min-h-screen'>
			<div className='mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10'>
				<div className='flex flex-col justify-center items-center gap-2'>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold py-3 text-[#08D9D6]'>
						Here's what I'm good at
					</h1>
					<p className='text-xl'>These are the services I can offer</p>
					<div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
						{services.map((service) => (
							<ServiceCard key={service.id} service={service} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Services;
