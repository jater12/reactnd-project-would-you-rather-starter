import React, {Component} from 'react'
import {connect} from 'react-redux'

class AnsweredPoll extends Component {

	render() {
		var {user, authedUser, question, chosenQuestionId} = this.props
		var chosenQuestion = question[chosenQuestionId]
		var optionOne = chosenQuestion.optionOne.text
		var optionOneVotes = chosenQuestion.optionOne.votes.length
		var optionTwo = chosenQuestion.optionTwo.text
		var optionTwoVotes = chosenQuestion.optionTwo.votes.length
		var total = optionTwoVotes + optionOneVotes
		var userChoice = user[authedUser].answers[chosenQuestionId]
		return (
				<div className="answeredPollDiv">
					<h1 className="answeredPollHeader">Asked by: {user[chosenQuestion.author].name}</h1>
					<h1> Results </h1>
					<div className="chosenCard">
						{userChoice === "optionOne" ? <h4>You chose this</h4> : null}
						<h1>{optionOne}</h1>
						<h5>{optionOneVotes} out of {total} votes </h5>
						<h5>{optionOneVotes/total * 100}%</h5>
						<h5 className="choseHeader">People who chose this: </h5><br />
						{chosenQuestion.optionOne.votes.map((userId) => (
							<img key={userId} className="choseAvatar"src={this.props.user[userId].avatarURL} />
						))}
					</div>
					<div className="chosenCard">
						{userChoice === "optionTwo" ? <h1>You chose this</h1> : null}
						<h3>{optionTwo}</h3>
						<h5>{optionTwoVotes} out of {total} votes</h5>
						<h5>{optionTwoVotes/total * 100}%</h5>
						<h5 className="choseHeader">People who chose this: </h5><br />
						{chosenQuestion.optionTwo.votes.map((userId) => (
							<img key={userId} className="choseAvatar"src={this.props.user[userId].avatarURL} />
						))}
					</div>
				</div>
			)
	}
}

function mapStateToProps({question, user, authedUser}) {
	return {
		authedUser,
		user,
		question,
	}
}

export default connect(mapStateToProps)(AnsweredPoll)