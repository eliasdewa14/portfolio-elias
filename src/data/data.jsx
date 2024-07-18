import { FaGithub, FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import webDevelopment from '../assets/images/web-development.jpg'
import webDesign from '../assets/images/web-design.jpg'
import teaching from '../assets/images/teaching.jpg'
import medical from '../assets/images/medical.jpg'

// navLinks Data
export const navLink = [
  {
    id: 1,
    title: "Home",
    link: "home",
  },
  {
    id: 2,
    title: "About",
    link: "about",
  },
  {
    id: 3,
    title: "Services",
    link: "services",
  },
  {
    id: 4,
    title: "Projects",
    link: "projects",
  },
  {
    id: 5,
    title: "Contact",
    link: "contact",
  }
];
// Social Links
export const links = [
	{
		id: 1,
		child: (
			<>
				<FaLinkedin size={30} color='#0a66c2' />
			</>
		),
		href: 'https://linkedin.com/in/eliasdewa14/',
		style: 'rounded-tr-md',
	},
	{
		id: 2,
		child: (
			<>
				<FaTwitter size={30} color='#1da1f2' />
			</>
		),
		href: 'https://twitter.com/eliasdewa14/',
		style: 'rounded-tr-md',
	},
	{
		id: 3,
		child: (
			<>
				<FaFacebook size={30} color='#1877f2' />
			</>
		),
		href: 'https://facebook.com/eliasdewa14/',
		style: 'rounded-tr-md',
	},
	{
		id: 4,
		child: (
			<>
				<FaGithub size={30} color='#000' />
			</>
		),
		href: 'https://github.com/eliasdewa14',
	},
	// {
	// 	id: 5,
	// 	child: (
	// 		<>
	// 			<FaYoutube size={30} color='#ff0000' />
	// 		</>
	// 	),
	// 	href: 'https://www.youtube.com/channel/UC0ypST9g7cIDMjgGq9cgkJg',
	// },
	// {
	// 	id: 6,
	// 	child: (
	// 		<>
	// 			<SiGmail size={30} color='#db4437' />
	// 		</>
	// 	),
	// 	href: 'mailto:eliasdewa3@gmail.com',
	// },
	// {
	// 	id: 7,
	// 	child: (
	// 		<>
	// 			<BiBasketball size={30} color='#1da1f2' />
	// 		</>
	// 	),
	// 	href: 'http//www.eliasdewa.com',
	// },
	// {
	//   id: 8,
	//   child: (
	//     <>
	//      <BsFillPersonLinesFill size={30} />
	//     </>
	//   ),
	//   href: "/resume.pdf",
	//   style: "rounded-br-md",
	//   download: true,
	// },
];

// Services
export const services = [
	{
		id: 1,
		title: "Web Development",
		description: "Since 2018, I have been learning a full-stack web application and doing some related projects",
		image: webDevelopment
	},
	{
		id: 2,
		title: "Web Design",
		description: "I have good experience on design a responsible websites",
		image: webDesign
	},
	{
		id: 3,
		title: "Teaching",
		description: "I'm a dedicated lecturer for more than seven years of experiences at Bahir Dar University",
		image: teaching
	},
];

// Services
export const projects = [
	{
		id: 1,
		title: "E-commerce Website",
		description: "Since 2018, I have been learning a full-stack web application and doing some related projects",
		image: webDevelopment
	},
	{
		id: 2,
		title: "Blog App",
		description: "A full MERN stack app with authentication and database functionality",
		image: webDesign
	},
	{
		id: 3,
		title: "Medical Center",
		description: "A full MERN stack medical center app with authentication, database functionality with admin panel",
		image: medical
	},
];