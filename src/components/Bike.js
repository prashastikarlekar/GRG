/** @format */

import React from "react";
import AnimatedBrand from "./AnimatedBrand";
import "./Bike.css";
export default function Bike() {
	return (
		<>
			<div className='row bikerow'>
				<div className='col-lg-11 bikeCol'>
					<img id='bikeImage' src='bike.png' alt='bike' />
					{/* <img className='vector' src='VECTOR.png' alt='bike' /> */}
				</div>
				<div className='col-lg-1'>
					<span>
						<AnimatedBrand />
					</span>
				</div>

				{/* <div className='col-lg-3'>
					<img src='photo 2.png' alt='bike' />
				</div> */}
			</div>
		</>
	);
}
