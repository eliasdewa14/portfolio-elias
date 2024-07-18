import { Card } from 'flowbite-react';


export function ServiceCard({service}) {
	return (
		<Card className='hover:scale-105 transition-all ease-out'>
			<img src={service.image} className='w-full h-[300px] object-contain p-0 mx-auto' />
			<h5 className='text-2xl font-bold tracking-tight text-gray-900 dark:text-white text-center'>
				{service.title}
			</h5>
			<p className='w-full font-normal text-gray-700 dark:text-gray-400'>
				{service.description}
			</p>
		</Card>
	);
}
