import React, { Component } from "react";
import ReactDOM from "react-dom";
import Nav from "./nav";


class App extends Component {
	
	constructor(props) { 
		super(props);

		this.state = { testing: "abcdefg" };
	}

	render() {
		return(
			<div>
				<Nav />
				{this.props.children}
			</div>
		);
	}
}


export default App;