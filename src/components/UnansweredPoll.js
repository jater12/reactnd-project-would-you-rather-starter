import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleAnswerPoll} from '../actions/shared'
class UnansweredPoll extends Component {

	answerPoll = () => {
		var answer = null
		var choice = document.getElementsByName('choice');
		for (var i = 0, length = choice.length; i < length; i++) {
			if (choice[i].checked) {
				answer = choice[i].value
				break;
			}
		}
		this.props.dispatch(handleAnswerPoll(this.props.chosenQuestionId, answer))

	}

	render() {
		let chosenQuestionId = this.props.chosenQuestionId
		let user = this.props.user
		let authedUser = this.props.authedUser
		let question = this.props.question
		let chosenQuestion = question[chosenQuestionId]
		return(
				<div className="unansweredPollDiv">
					<h3>{user[chosenQuestion.author].name} asks: </h3>
					<img src={user[chosenQuestion.author].avatarURL} />
					<h1>Would you Rather ... </h1>
					<form>
		    		<input type="radio" name="choice" value="optionOne" className="radioChoice"/>{chosenQuestion.optionOne.text}<br />
		    		<h4 className="newQuestionOr">or</h4>
					<input type="radio" name="choice" value="optionTwo" className="radioChoice"/>{chosenQuestion.optionTwo.text}<br />
							
					</form>
					<button className="cardButton" onClick={this.answerPoll}> Submit </button>
				</div>
			)
	}
}

function mapStateToProps({ authedUser, user, question}) {
	return {
		authedUser: authedUser,
		user: user,
		question: question
	}
}

export default connect(mapStateToProps)(UnansweredPoll)