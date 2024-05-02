import { FaGithub, FaLinkedin, FaTwitter, FaFacebook, FaYoutube } from 'react-icons/fa';
import { SiGmail } from 'react-icons/si';
import { BiBasketball } from 'react-icons/bi';

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
	// 	href: 'http//:eliasdewa.com',
	// },
	// {
	//   id: 4,
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


