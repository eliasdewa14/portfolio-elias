import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Services from './pages/Services';
import Navbar from './components/Navbar';

function App() {
  return (
		<>
			<Navbar />
			<div className='max-w-screen dark:bg-[#2B2D42] dark:text-white'>
				<Home />
				<About />
				<Services />
				<Projects />
				<Contact />
				<Footer />
			</div>
		</>
	);
}

export default App
