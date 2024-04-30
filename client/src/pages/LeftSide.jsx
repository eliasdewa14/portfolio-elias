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
				<h2 className='text-3xl md:text-5xl font-bold text-black dark:text-white'>
					a <span>{text}</span>
					<Cursor
						cursorBlinking='false'
						cursorStyle='|'
						cursorColor='#ff014f'
					/>
				</h2>
				<p className='text-base pt-5 font-bodyFont leading-6 tracking-wide'>
					I’m a full-stack developer specializing in building exceptional digital experiences. Currently, I’m focused on
					building responsive full-stack web applications.
				</p>
			</div>
		</div>
	);
}

export default LeftBanner;