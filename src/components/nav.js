import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link, browserHistory } from "react-router";

class Nav extends Component {
	
	render() {
		return(
			<div>
				<Link to="/">Home</Link>
				<Link to="/contact">Contact</Link>
				<Link to="/reviews">Reviews</Link>
			</div>
		);
	}
}


export default Nav;