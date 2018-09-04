import React, {Component} from 'react'
import {connect} from 'react-redux'

class LeaderBoardCard extends Component {
	render() {
		let userId = this.props.userId
		let ans = Object.keys(this.props.user[userId].answers).length
		let created = this.props.user[userId].questions.length
		return (
				<div className="leaderBoardCard">
					<h1 className="leaderBoardCardHeader">{this.props.user[userId].name}</h1>
					<img className="leaderImage" src={this.props.user[userId].avatarURL} />
					<h3> Answered Questions : {ans}</h3>
					<h3> Created Questions : {created}</h3>
					<h3> Score : {ans+created}</h3>
				</div>
			)
	}
}
function mapStateToProps({user}) {
	return {
		user: user,
	}
}

export default connect(mapStateToProps)(LeaderBoardCard)