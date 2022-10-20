/** @format */

import React from "react";
import "./BottomRight.css";
const BottomRight = ({ data }) => {
	console.log(data);
	return (
		<div id='bottomright' className='container card-container'>
			{data.map((currentElement) => {
				const { category, x, y, z } = currentElement;

				return (
					<>
						<div className='c row' key={category}>
							<h4 className='category col-lg-2'>{category}</h4>
							<div className='col-lg-10'>
								<h5 className='x '>{x}</h5>
								<h6 className='y'>{y}</h6>
								<p className='z'>{z}</p>
							</div>
						</div>
					</>
				);
			})}
			;
		</div>
	);
};
export default BottomRight;
