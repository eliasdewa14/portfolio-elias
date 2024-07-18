import contactImg from "../assets/images/contactImg.jpg";
import { PiPhoneLight } from "react-icons/pi";
import { MdOutlineMailOutline, MdLocationOn } from "react-icons/md";

const ContactLeft = () => {
  return (
    <div className="lg:col-span-2">
      <div className="w-full h-full bg-slate-200 dark:bg-[#1e2024] text-slate-900 dark:text-slate-200 p-4 flex flex-col gap-8 rounded-lg">
        <img
          className="w-full h-full rounded-lg mb-2"
          src={contactImg}
          alt="contactImg"
        />
        <div className="flex flex-col gap-4">
          <h3 className="text-3xl font-bold">Elias Dewa</h3>
          <p className="text-lg font-normal">Full-MERN Stack Developer</p>
          <p className="font-semibold py-2">Let's get in touch</p>
          <p className="flex items-center gap-2">
            <PiPhoneLight /> <span>+251 910634296 / +251 931564881</span>
          </p>
          <p className="flex items-center gap-2">
            <MdOutlineMailOutline /> <span>eliasdewa3@gmail.com</span>
          </p>
          <p className="flex items-center gap-2">
            <MdLocationOn /> <span>Addis Ababa, Ethiopia</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactLeft;
