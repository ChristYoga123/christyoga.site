import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Social from "./components/Socials";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
function App() {
	return (
		<>
			<Navbar />
			<Hero />
			<About />
			<Portfolio />
			<Experience />
			<Contact />
			<Social />
		</>
	);
}

export default App;
