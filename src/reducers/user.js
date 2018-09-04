import { RECEIVE_USERS } from '../actions/user'
import { NEW_QUESTION, ANSWER_POLL } from '../actions/shared'

export default function users (state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS : 
			return {
				...state,
				...action.users
			} 
		case NEW_QUESTION:
			var user = state[action.question.author]
			user.questions = user.questions.concat([action.question.id])
			return {
				...state,
				[action.question.author]: user,
			}
		case ANSWER_POLL:
			var user = state[action.answerData.authedUser]
			var newAnswer = {
				[action.answerData.qid]: action.answerData.answer,
			}
			user.answers = {
				...user.answers,
				...newAnswer,
			}
			return {
				...state,
				[action.answerData.authedUser]: user,
			}
		default:
			return state
	}
}