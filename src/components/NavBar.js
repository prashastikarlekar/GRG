/** @format */

import React, { Component } from "react";
import "./NavBar.css";
export default class NavBar extends Component {
	render() {
		return (
			<div className='container-fluid'>
				<nav className='navbar navbar-expand-lg '>
					<div className='collapse navbar-collapse' id='navbarNavAltMarkup'>
						<div className='navbar-nav'>
							<a className='nav-item nav-link menu' href='#'>
								<img className='navbar-brand' src='logo.png' alt=''></img>
							</a>
							<a className='nav-item nav-link menu' href='#'>
								BIKES <span className='sr-only'>(current)</span>
							</a>
							<a className='nav-item nav-link menu' href='#'>
								ACCESSORIES
							</a>
							<a className='nav-item nav-link menu' href='#'>
								NEW TECH
							</a>
							<a className='nav-item nav-link menu' href='#'>
								EXPLORE
							</a>
						</div>
					</div>
				</nav>
			</div>
		);
	}
}
