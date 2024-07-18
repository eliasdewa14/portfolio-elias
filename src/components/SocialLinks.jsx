import { FaFacebook, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';

const SocialLinks = () => {
	return (
		<div className='flex gap-4'>
			<span className='socialIcon'>
				<FaLinkedinIn />
			</span>
			<span className='socialIcon'>
				<FaTwitter />
			</span>
			<span className='socialIcon'>
				<FaFacebook />
			</span>
			<span className='socialIcon'>
				<FaGithub />
			</span>
		</div>
	);
};

export default SocialLinks;
