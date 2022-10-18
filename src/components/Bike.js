/** @format */

import React from "react";
import AnimatedBrand from "./AnimatedBrand";
import "./Bike.css";
export default function Bike() {
	return (
		<>
			<div className='bike'>
				<img src='bike.png' alt='bike' />
				<AnimatedBrand />
				<img src='photo 2.png' alt='bike' />
				<img className='vector' src='VECTOR.png' alt='bike' />
			</div>
		</>
	);
}
