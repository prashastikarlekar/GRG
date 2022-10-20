/** @format */

import React from "react";
import AnimatedBrand from "./AnimatedBrand";
import "./Bike.css";
export default function Bike() {
	return (
		<>
			<div className='bike row'>
				<div className='col-lg-9 bikeCol'>
					<img src='bike.png' alt='bike' />
					<span>
						<AnimatedBrand />
					</span>
					{/* <img className='vector' src='VECTOR.png' alt='bike' /> */}
				</div>

				{/* <div className='col-lg-3'>
					<img src='photo 2.png' alt='bike' />
				</div> */}
			</div>
		</>
	);
}
