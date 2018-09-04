import React, {Component} from 'react'
import {connect} from 'react-redux'
import {handleNewQuestion} from '../actions/shared'
import Nav from './Nav'
import {withRouter} from 'react-router-dom'

class CreateNewQuestion extends Component {

	state = {
		optionOneText: null,
		optionTwoText: null,
	}

	handleChangeOne = (e) => {
		const text = e.target.value
		this.setState(() => ({
			optionOneText: text
		}))
	}

	handleChangeTwo = (e) => {
		const text = e.target.value
		this.setState(() => ({
			optionTwoText: text
		}))
	}

	addNewQuestion = () => {
		this.props.dispatch(handleNewQuestion(this.state.optionOneText, this.state.optionTwoText, this.props.authedUser))
		this.props.history.push('/')
	}

	render() {
		return (
				<div>
					<Nav />
					<br />
					<div className="newQuestionDiv">
						<h1> Create New Question </h1>
						<h4>Complete the question: </h4>
						<h2> Would you rather ... </h2>
						<form>
							<input type="text" name="option1" onChange={this.handleChangeOne} placeholder="Enter option one text here"/> <br/>
							<h4 className="newQuestionOr">or</h4>
							<input type="text" name="option2" onChange={this.handleChangeTwo} placeholder="Enter option two text here"/>
						</form>
						<button className="cardButton" onClick={this.addNewQuestion} disabled={!this.state.optionOneText || !this.state.optionTwoText}>submit</button>
					</div>
				</div>
			)
	}
}

function mapStateToProps({authedUser, user}) {
	return {
		authedUser: authedUser,
		user: user,
	}
}

export default withRouter(connect(mapStateToProps)(CreateNewQuestion))