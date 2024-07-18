import { ProjectCard } from '../components/ProjectCard';
import { ServiceCard } from '../components/ServiceCard';
import { projects } from '../data/data';

function Projects() {
	return (
		<section id='projects' className='min-h-screen'>
			<div className='mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10'>
				<div className='flex flex-col justify-center items-center gap-2'>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold py-3 text-[#08D9D6]'>
						My Portfolio
					</h1>
					<p className='text-xl'>
						These are the projects that I have done in the past
					</p>
					<div className='mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5'>
						{projects.map((project) => (
							<ProjectCard key={project.id} project={project} />
						))}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;
