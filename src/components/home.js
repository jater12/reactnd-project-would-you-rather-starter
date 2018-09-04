import React, {Component} from 'react'
import Nav from './Nav'
import QuestionTable from './QuestionTable'
class Home extends Component {
	render() {
		return (
				<div> 
					<Nav />
					<br />
					<div id="questionTableDiv">
						<QuestionTable />
					</div>
				</div>
			)
	}
}

function mapStateToProps({authedUser, user, question}) {
	return {
		authedUser: authedUser,
		user: user,
		question: question,
	}
}

export default Home