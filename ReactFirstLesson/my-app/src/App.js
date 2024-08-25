import './App.css';
import { BrowserRouter as Router, Link, Routes, Route, useNavigate } from "react-router-dom"
import Poem from "./firstTask/Parent"
import Clicker from "./secondTask/Clicker"
import Riddle from "./riddleTask/mainRiddle"
import Resume from "./resumeTask/mainResume"
import { useState } from "react";


export default function App() {
	const routes = ["/Poem", "/Clicker", "/Riddle", "/Resume"];
	const [currentIndex, setCurrentIndex] = useState(0);
	const navigate = useNavigate();

	const handlePrevious = () => {
		if (currentIndex > 0) {
			const newIndex = currentIndex - 1;
			setCurrentIndex(newIndex);
			navigate(routes[newIndex]);
		}
	};

	const handleNext = () => {
		if (currentIndex < routes.length - 1) {
			const newIndex = currentIndex + 1;
			setCurrentIndex(newIndex);
			navigate(routes[newIndex]);
		}
	};

	return (
		<div>
			<nav>
				<ul>
					<li><Link to="/Poem">Poem</Link></li>
					<li><Link to="/Clicker">Clicker</Link></li>
					<li><Link to="/Riddle">Riddle</Link ></li>
					<li><Link to="/Resume">Resume</Link ></li>
				</ul>
				<button onClick={handlePrevious} disabled={currentIndex === 0}>Back</button>
				<button onClick={handleNext} disabled={currentIndex === routes.length - 1}>Next</button>
			</nav>
			<Routes>
				<Route path="/Poem" element={<Poem />} />
				<Route path="/Clicker" element={<Clicker />} />
				<Route path="/Riddle" element={<Riddle />} />
				<Route path="/Resume" element={<Resume />} />
			</Routes>
		</div>
	);
}