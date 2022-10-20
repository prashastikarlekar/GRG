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
		<div className='container-fluid App'>
			<div className='row'>
				<div className='col-lg-9'>
					<NavBar></NavBar>
				</div>
			</div>

			<div className='row'>
				<div className='col-lg-9 background-black'>
					<div className='row'>
						<div className='col-lg-10'>
							<Bike />
						</div>
						<div className='col-lg-2'>
							<img src='photo 2.png' className='p-4' alt='' />
						</div>
					</div>

					<div className='row background-black'>
						<div className='col-lg-12'>
							<InfoBlock />
						</div>
					</div>
				</div>

				{/* <div className='col-lg-3 infoColumn'>
					<div className='bottomRight'>
						<BottomRight data={data} />
					</div>
				</div> */}
			</div>
		</div>
	);
}

export default App;
