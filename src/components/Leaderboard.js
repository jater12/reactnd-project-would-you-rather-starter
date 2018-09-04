import React, {Component} from 'react'
import {connect} from 'react-redux'
import LeaderBoardCard from './LeaderBoardCard'
import Nav from'./Nav'

class LeaderBoard extends Component {
	render() {
		return (
				<div>
					<Nav />
					<br />
					<h1 className="leaderBoardHeader">LeaderBoard</h1>
					{this.props.userOrder.map((userOrder) => (
							<LeaderBoardCard key={userOrder} userId={userOrder}/>
						))}
				</div>
			)
	}
}

function mapStateToProps({user, authedUser}) {
	return {
		userOrder: Object.keys(user)
			.sort((a,b) => ((Object.keys(user[b].answers).length + user[b].questions.length) - (Object.keys(user[a].answers).length + user[a].questions.length))),
		user: user,
		authedUser: authedUser
	}
}

export default connect(mapStateToProps)(LeaderBoard)