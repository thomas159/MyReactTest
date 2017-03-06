import React, { Component } from "react";
import { connect } from "react-redux";
import ReactDOM from "react-dom";
import { fetchUsers } from "../actions/index";
import { Link, browserHistory } from "react-router";

class Main extends Component {
	
	componentWillMount() {
		this.props.fetchUsers();
		console.log(this.props.fetchUsers);
	}

	renderUsers() {
		return this.props.users.map((user) => {
			return (
				<ul>
					<li>{user.id}</li>
					<li>{user.login}</li>
				</ul>
			);
		}); 
	}

	render() {
		return(
			<div>
				{this.renderUsers()}
			</div>
		);
	}
}

function mapStateToProps(state) {
	return { users: state.users.all };
}

export default connect (mapStateToProps, { fetchUsers })(Main);