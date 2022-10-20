/** @format */

import React, { useState } from "react";
import "./InfoBlock.css";
import BottomRight from "./BottomRight";
import Data from "./data";
export default function InfoBlock() {
	const text =
		"The bike comes in all black, with a relatively modern appeal. Chrome accents in just the right places make the bike stand out, while the black-on-black satin text on the bike's fork-guards helps highlight the company's branding without being too direct or obvious.";
	const [data, setData] = useState(Data);

	return (
		<div className='container info-block'>
			<div className='row'>
				<div className='main col-lg-4'>
					<div>&lt;&nbsp;&nbsp;</div>
					<div>2&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</div>
					<div>
						<input name='range' type='range' min='2' max='20' step='1' />
					</div>
					<div>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;10</div>
					<div>&nbsp;&nbsp;&gt;</div>
				</div>
				<div className='col-lg-6 '>
					<div id='text' className='info-text'>
						{text}
					</div>
				</div>
				<div className='col-lg-2'>
					<img id='photo3' src='photo 3.png' alt='' />
				</div>
			</div>
		</div>
	);
}
