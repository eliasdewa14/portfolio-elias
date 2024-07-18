import emailjs from '@emailjs/browser';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContactRight() {
  const [username, setUsername] = useState('');
	const [email, setEmail] = useState('');
	const [message, setMessage] = useState('');
	const [errMsg, setErrMsg] = useState('');
	const [successMsg, setSuccessMsg] = useState('');

	// ========== Email Validation start here ==============
	const emailValidation = () => {
		return String(email)
			.toLocaleLowerCase()
			.match(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\.\w{2,3})+$/);
	};
	// ========== Email Validation end here ================

	const handleSubmit = (e) => {
		e.preventDefault();
		if (username === '') {
			toast.error('Username is required!');
		} else if (email === '') {
			toast.error('Please enter your email!');
		} else if (!emailValidation(email)) {
			toast.error('Please enter a valid email!');
		} else if (message === '') {
			toast.error('Your message is important and required!');
		} else {
			toast.success(
				`Thank you ${username}, Your message has been sent Successfully!`
			);
			setErrMsg('');
			setUsername('');
			setEmail('');
			setMessage('');
		}
		//====== EmailJs service Id, template Id, and Public Key ==========
		const serviceId = 'service_n9ftqfq';
		const templateId = 'template_bfr779t';
		const publicKey = 'UgtGCI24IOq9a9y6j';

		//====== Create a new object that contains dynamic template ==========
		const templateParams = {
			username,
			email,
			message,
		};
		//====== Send the email using EmailJs ==========
		emailjs
			.send(serviceId, templateId, templateParams, publicKey)
			.then((response) => {
				console.log('Email sent successfully', response);
			})
			.catch((error) => {
				console.log("Error, the email doesn't sent successfully", error);
			});
	};
  return (
		<div className='rounded-lg p-8 shadow-xl lg:col-span-3 lg:p-12 bg-[#d8dada] dark:bg-[#000]'>
			<form className='space-y-4'>
				{/* Username */}
				<div className='grid grid-cols-1'>
					<div>
						<input
							type='text'
							placeholder='Your Name'
							onChange={(e) => setUsername(e.target.value)}
							value={username}
							className={`${
								errMsg === 'Username is required!' && 'outline-red-500'
							} input`}
						/>
					</div>
				</div>
				{/* Email */}
				<div className='grid grid-cols-1'>
					<div>
						<input
							type='email'
							placeholder='Email address'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							className={`${
								errMsg === 'Please enter your Email!' && 'outline-red-500'
							} input`}
						/>
					</div>
				</div>

				<div>
					<textarea
						type='text'
						placeholder='Write your message here...'
						rows='8'
						value={message}
						onChange={(e) => setMessage(e.target.value)}
						id='message'
						className={`${
							errMsg === 'Your Message is important and required!' &&
							'outline-red-500'
						} w-full rounded-lg border border-gray-500 p-3 text-sm focus:outline-none`}
					></textarea>
				</div>

				<div className='mt-4'>
					<button
						onClick={handleSubmit}
						type='submit'
						className='inline-block w-full rounded-lg bg-indigo-500/60 px-5 py-3 font-medium sm:w-auto hover:bg-indigo-500'
					>
						Send Message
					</button>
				</div>
			</form>
		</div>
	);
}

export default ContactRight