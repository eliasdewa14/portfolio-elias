import DevSkills from "../components/DevSkills";
import elias from '../assets/images/Elias.png'
import resume from '../assets/resume/EliasDewa_resume.pdf'
import { Link } from "react-router-dom";
import { Button } from "flowbite-react";


function About() {
  return (
		<section id='about' className='min-h-screen'>
			<div className='mx-auto max-w-screen-xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10'>
				<div className='flex flex-col justify-center items-center gap-2'>
					<h1 className='text-3xl sm:text-4xl md:text-5xl font-semibold py-3 text-[#08D9D6]'>
						Who am I?
					</h1>
					<div className='flex flex-col sm:flex-row justify-center items-start gap-5'>
						<div className=' w-full sm:w-[35%] flex-col sm:flex-row  mb-5'>
							<img
								src={elias}
								alt='elias image'
								className='w-[150px] h-[150px] mx-auto p-2 md:w-[200px] md:h-[200px]'
							/>
							<p className='p-2 my-2 flex-1'>
								I am passionate about building excellent software that improves
								the lives of those around me. I specialize in creating software
								for clients ranging from individuals and small-businesses all
								the way to large enterprise corporations. What would you do if
								you had a software expert available at your fingertips?
							</p>
							<div>
								<a
									href={resume}
									download='EliasDewa_resume'
									target='_blank'
									rel='noopener noreferrer'
								>
									<Button>Download my CV</Button>
								</a>
							</div>
						</div>
						<DevSkills />
					</div>
				</div>
			</div>
		</section>
	);
}
export default About;