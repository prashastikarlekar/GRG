/** @format */

import logo from "./logo.svg";
import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Bike from "./components/Bike";
import InfoBlock from "./components/InfoBlock";
import BottomRight from "./components/BottomRight";
import Data from "./components/data";
function App() {
	const [data, setData] = useState(Data);
	return (
		<div className='container-fluid App p-0'>
			<div>
				<img className='bg' src='Gold.png' alt=''></img>
			</div>
			<NavBar></NavBar>
			<Bike />
			<div>
				<InfoBlock />
			</div>
			<BottomRight data={data} />
		</div>
	);
}

export default App;
