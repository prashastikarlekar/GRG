/** @format */

import React from "react";
import "./BottomRight.css";
const BottomRight = ({ data }) => {
	console.log(data);
	return (
		<div id='bottomright' className='container'>
			{data.map((currentElement) => {
				const { category, x, y, z } = currentElement;

				return (
					<>
						<div className='c'>
							<div className='row' key={category}>
								<div className='col-lg-2 p-0 catBlock'>
									<p className='category'>{category}</p>
								</div>
								<div className='col-lg-10'>
									<p className='x '>{x}</p>
									<p className='y'>{y}</p>
									<p className='z'>{z}</p>
								</div>
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
