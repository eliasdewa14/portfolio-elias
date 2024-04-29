import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from "react-icons/fa";
import SocialLinks from "../components/SocialLinks";

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Full Stack Developer.", "Freelancer.", "Lecturer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
		<div className='relative overflow-hidden rounded-lg lg:order-last'>
			<div className='flex flex-col gap-5'>
				<h1 className='text-4xl md:text-6xl font-bold text-[#ff014f]'>
					Hi, I'm{' '}
					<span className='text-designColor capitalize'>Elias Dewa</span>
				</h1>
				<h2 className='text-3xl md:text-5xl font-bold text-black'>
					a <span>{text}</span>
					<Cursor
						cursorBlinking='false'
						cursorStyle='|'
						cursorColor='#ff014f'
					/>
				</h2>
				<p className='text-base font-bodyFont leading-6 tracking-wide'>
					I’m a full-stack developer specializing in building (and occasionally
					designing) exceptional digital experiences. Currently, I’m focused on
					building responsive full-stack web applications.
				</p>
			</div>
			{/* Media */}
			<div className="mt-5">
				<h1 className='text-base uppercase font-titleFont mb-4'>
					You can find me in
				</h1>
				<SocialLinks />
			</div>
		</div>
	);
}

export default LeftBanner;