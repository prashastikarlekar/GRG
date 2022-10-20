/** @format */

import React from "react";
import "./BottomRight.css";
const BottomRight = ({ data }) => {
	console.log(data);
	return (
		<>
			{data.map((currentElement) => {
				const { category, x, y, z } = currentElement;

				return (
					<>
						<div id='bottomright' className='container-fluid'>
							<div className='row'>
								<div className='col-lg-12'>
									<div className='c card h-100' key={category}>
										<h4 className='category'>{category}</h4>
										<h5 className='x'>{x}</h5>
										<h6 className='y'>{y}</h6>
										<p className='z'>{z}</p>
									</div>
								</div>
							</div>
						</div>
					</>
				);
			})}
			;
		</>
	);
};
export default BottomRight;
