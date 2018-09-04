import React, {Component} from 'react'
import { connect } from 'react-redux'
import { setAuthedUser } from '../actions/authedUser'
import './App.css'
class SignIn extends Component {

	handleSignIn = (e) => {
		e.preventDefault()
		var select = document.getElementById("signInDropDown")
		var signInUser = select.options[select.selectedIndex].value;
		this.props.dispatch(setAuthedUser(signInUser))

	}

	render() {
		return (

				<div>
					<div id="headerSignInDiv">
						<h1 className="headerSignIn">Welcome to the Would You Rather App!</h1>
						<h4 className="subHeaderSignIn"> Please sign in to continue </h4>
					</div>
					<div id="signInMenu">
						<h1 className="headerSignIn"> Sign in </h1>
						<select id="signInDropDown" className="dropDownSignIn">
							{this.props.users.map((user) => (
									<option key={user.id} value={user.id}>{user.name}</option>
								))}
						</select>
						<br />
						<button onClick={this.handleSignIn} className="buttonSignIn"> Sign In </button>
					</div>
				</div>
			)
	}
}

function mapStateToProps({user}) {
	return {users: Object.values(user)}
}

export default connect(mapStateToProps)(SignIn)