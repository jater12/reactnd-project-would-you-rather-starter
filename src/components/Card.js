import React, {Component} from 'react'
import { Link } from 'react-router-dom'

class Card extends Component {

	render() {
		return (
				<div className="card">
					<h2>{this.props.author.name} asks :</h2>
					<h2>Would you rather</h2>
					<h4 className="optionCard">{this.props.question.optionOne.text}</h4>
					<h4 className="newQuestionOr">or</h4>
					<h4 className="optionCard">{this.props.question.optionTwo.text}</h4>
					<Link to={`/question/${this.props.question.id}`}>
						<button className="cardButton">View Poll</button>
					</Link>
				</div>	
			)
	}
}

export default Card