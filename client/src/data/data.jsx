import { FaTwitter} from "react-icons/fa";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

// Social Links
export const links = [
    {
      id: 1,
      child: (
        <>
          <FaLinkedin size={30} />
        </>
      ),
      href: "https://linkedin.com/in/eliasdewa14/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          <FaTwitter size={30} />
        </>
      ),
      href: "https://twitter.com/eliasdewa14/",
      style: "rounded-tr-md",
    },
    {
      id: 3,
      child: (
        <>
          <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/eliasdewa14",
    },
    {
      id: 4,
      child: (
        <>
          <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:eliasdewa3@gmail.com",
    },
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


