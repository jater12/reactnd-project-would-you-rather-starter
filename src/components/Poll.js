import React, {Component} from 'react'
import {connect} from 'react-redux'
import LoadingBar from 'react-redux-loading'
import AnsweredPoll from './AnsweredPoll'
import UnansweredPoll from './UnansweredPoll'
import Nav from './Nav'
import NotFound from './NotFound'
class Poll extends Component {
	render() {
		let chosenQuestionId = this.props.match.params.id
		let showPoll = null
		let answered = Object.keys(this.props.user[this.props.authedUser].answers).includes(chosenQuestionId)
		let unanswered = Object.keys(this.props.question).includes(chosenQuestionId);
		if(answered) {
			showPoll = <AnsweredPoll chosenQuestionId={chosenQuestionId} />
		} else if (unanswered) {
			showPoll = <UnansweredPoll chosenQuestionId={chosenQuestionId} />
		} else {
			showPoll = <NotFound />
		}

		return (
				<div>
					<LoadingBar />
					<Nav />
					{showPoll}
				</div>
			)
	}
}

function mapStateToProps({question, user, authedUser}) {
	return {
		user,
		question,
		authedUser,
	}
}

export default connect(mapStateToProps)(Poll)