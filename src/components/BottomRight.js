/** @format */

import React from "react";

export default function BottomRight({ data }) {
	console.log(data);
	{
		data.map((currentElement) => {
			const { category, x, y, z } = currentElement;

			return (
				<div id='bottomright' className='container'>
					<div className='card' key={category}>
						<div className='card-body'>
							<h5 className='card-title'>{x}</h5>
							<h6 className='card-subtitle mb-2 text-muted'>{y}</h6>
							<p className='card-text'>{z}</p>
						</div>
					</div>
				</div>
			);
		});
	}
}
