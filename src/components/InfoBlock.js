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
		<div className='main'>
			<div>&lt;</div>
			<div>2</div>
			<div>
				<input name='range' type='range' min='2' max='10' step='1' />
			</div>
			<div>10</div>
			<div>&gt;</div>

			<div id='text'>{text}</div>
			<img src='photo 3.png' alt='' />
		</div>
	);
}
