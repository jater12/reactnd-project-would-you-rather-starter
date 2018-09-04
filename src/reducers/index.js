import { combineReducers } from 'redux'
import user from './user'
import question from './question'
import authedUser from './authedUser'
import {loadingBarReducer} from 'react-redux-loading'
export default combineReducers({
	user,
	question,
	authedUser,
	loadingBar: loadingBarReducer
})