import { RECEIVE_QUESTIONS } from '../actions/question'
import { NEW_QUESTION, ANSWER_POLL } from '../actions/shared'

export default function questions ( state = {}, action) {
	switch (action.type) {
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions
			}
		case NEW_QUESTION : 
			return {
				...state,
				[action.question.id]: action.question,
			}
		case ANSWER_POLL:
			var question = state[action.answerData.qid]
			question[action.answerData.answer].votes = question[action.answerData.answer].votes.concat([action.answerData.authedUser])
			return {
				...state,
				[action.answerData.qid]: question

			}
		default :
			return state
	}
}