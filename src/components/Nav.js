import React, {Component} from 'react';
import {NavLink, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {setAuthedUser} from '../actions/authedUser'

class Nav extends Component {
	
	logout = () => {
		this.props.dispatch(setAuthedUser(null))
		this.props.history.push("/")
	}
	render () {
		return (
				<nav className='nav'>
					<ul>
						<li>
							<NavLink to='/' exact activeClassName='active'>
								Home
							</NavLink>
						</li>
						<li>
							<NavLink to='/add' exact activeClassName='active'>
								New Question
							</NavLink>
						</li>
						<li>
							<NavLink to='/leaderboard' exact activeClassName='active'>
								Leaderboard
							</NavLink>
						</li>
						<li>
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;

						</li>
						<li>
							<NavLink to='/' exact activeClassName='active'>
								<img className="navAvatar" src={this.props.avatarUrl} />

								Hello, {this.props.userName}
							</NavLink>
						</li>
						<li>
							<button onClick={this.logout}>
								Logout
							</button>
						</li>

					</ul>
				</nav>
			)
	}

}

function mapStateToProps({authedUser, user}) {
	return {
		authedUser: authedUser,
		userName: user[authedUser].name,
		avatarUrl: user[authedUser].avatarURL,
	}
}

export default withRouter(connect(mapStateToProps)(Nav))