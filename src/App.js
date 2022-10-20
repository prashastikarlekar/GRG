/** @format */

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
				<div className='col-lg-8'>
					<NavBar></NavBar>
				</div>
			</div>

			<div className='row'>
				<div className='col-lg-10 main-content background-black'>
					<div className='row '>
						<div className='col-lg-9'>
							<Bike />
						</div>
						{/* <div className='col-lg-1'>
							<span>
								<AnimatedBrand />
							</span>
						</div> */}
						<div className='col-lg-3'>
							<img src='photo 2.png' className='photo2' alt='' />
						</div>
					</div>
					<div className='row'>
						<div className='col-lg-12 p-0'>
							<img className='vector' src='VECTOR.png' alt='bike' />
						</div>
					</div>
					<div className='row background-black'>
						<div className='col-lg-12'>
							<InfoBlock />
						</div>
					</div>
				</div>

				<div className='col-lg-2 infoColumn'>
					<div className='bottomRight background-black'>
						<BottomRight data={data} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
