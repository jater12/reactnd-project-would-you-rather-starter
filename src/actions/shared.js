import { _getUsers, _getQuestions, _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA.js'
import { receieveUsers } from './user'
import { receiveQuestions } from './question'
import { setAuthedUser } from './authedUser'
import {showLoading, hideLoading} from 'react-redux-loading'

export const NEW_QUESTION = 'NEW_QUESTION'
export const ANSWER_POLL = 'ANSWER_POLL'

function getInitialData() {
	return Promise.all([
		_getUsers(),
		_getQuestions(),
		]).then(([users, questions]) => ({
			users,
			questions,
		}))
}

const AUTHED_ID = null

export function handleInitialData() {
	return (dispatch) => {
		dispatch(showLoading())
		return getInitialData()
			.then(({ users,questions }) => {
				dispatch(receieveUsers(users))
				dispatch(receiveQuestions(questions))
				dispatch(setAuthedUser(AUTHED_ID))
				dispatch(hideLoading())
			})
	}
}

function newQuestion (question) {
	return {
		type: NEW_QUESTION,
		question
	}
}

export function handleNewQuestion (optionOneText, optionTwoText ) {
	return (dispatch, getState) => {
		const {authedUser} = getState()
		dispatch(showLoading())
		return _saveQuestion({
			optionOneText,
			optionTwoText,
			author: authedUser,
		})
			.then((question) => {
				dispatch(newQuestion(question))
				dispatch(hideLoading())
			})
	}
}

function answerPoll (answer) {
	return {
		type: ANSWER_POLL,
		answerData:answer,
	}
}

export function handleAnswerPoll (qid, answer) {
	return (dispatch, getState) => {
		const {authedUser} = getState()
		let answerJson = {
			authedUser,
			qid,
			answer,
		}
		dispatch(showLoading())
		return _saveQuestionAnswer(answerJson)
			.then(() => {
				dispatch(answerPoll(answerJson))
				dispatch(hideLoading())
			})
	}
}