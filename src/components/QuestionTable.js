import React, {Component} from 'react'
import {connect} from 'react-redux'
import Card from './Card'
class QuestionTable extends Component {

	state = {
		showUnanswered: true,
	}

	setUnanswered = () => {
		this.setState({
			showUnanswered: true,
		})
	}

	setAnswered = () => {
		this.setState({
			showUnanswered: false,
		})
	}

	render () {
		var questions = this.props.question.sort((a,b) => b.timestamp - a.timestamp)
		var answeredQuestions = this.props.question.filter((question) => (this.props.answeredQuestions.includes(question.id)))
		var unansweredQuestions = this.props.question.filter((question) => (!this.props.answeredQuestions.includes(question.id)))
		let cards;
		if (!this.state.showUnanswered) {
			cards = answeredQuestions.map((question) => (
				<Card key={question.id} author={this.props.user[question.author]} question={question} />
			))
		} else {
			cards = unansweredQuestions.map((question) => (
				<Card key={question.id} author={this.props.user[question.author]} question={question} />
			))
		}
		return (
			<div>
				<button className="questionTableButton" onClick={this.setUnanswered}>Unanswered Questions</button>
				<button className="questionTableButton" onClick={this.setAnswered}>Answered Questions</button>
				{cards}
			</div>
			)
	}
}

function mapStateToProps({user, question, authedUser}) {
	return {
		authedUser: authedUser,
		question: Object.values(question),
		user: user,
		answeredQuestions: Object.keys(user[authedUser].answers)
	}
}

export default connect(mapStateToProps)(QuestionTable)