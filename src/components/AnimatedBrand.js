/** @format */

import React, { Component } from "react";
import { useRef, useEffect } from "react";
import "./AnimatedBrand.css";
export default function AnimatedBrand() {
	const ref = useRef(null);

	useEffect(() => {
		const el2 = ref.current;
		// console.log(el2);

		const el = document.querySelector(".text");
		// console.log(el);
		el.innerHTML = el.innerText
			.split("")
			.map(
				(char, i) =>
					`<span style="transform:rotate(${i * 9.5}deg)">${char}</span>`
			)
			.join("");
	}, []);

	return (
		<div className='main'>
			<div className='circle'>
				<div ref={ref} className='text'>
					<p>MOTORCYCLE MONTBLANC</p>
				</div>
			</div>
		</div>
	);
}
