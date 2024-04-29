import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SocialLinks from './components/SocialLinks';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
		<BrowserRouter>
			{/* <SocialLinks /> */}
			<Header />
			<Routes>
				<Route path='/' element={<Home />} />
				<Route path='/projects' element={<Projects />} />
				<Route path='/about' element={<About />} />
				<Route path='/contact' element={<Contact />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App
