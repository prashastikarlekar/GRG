/** @format */

import logo from "./logo.svg";
import "./App.css";
import NavBar from "./components/NavBar";
import Bike from "./components/Bike";
import AnimatedBrand from "./components/AnimatedBrand";
function App() {
	return (
		<div className='container-fluid App p-0'>
			<div>
				<img className='bg' src='Gold.png' alt=''></img>
			</div>
			<NavBar></NavBar>
			<Bike />
			<AnimatedBrand />
		</div>
	);
}

export default App;
