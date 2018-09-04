import {SET_AUTHED_USER} from '../actions/authedUser'

export default function handleSetAuthedUser(state=null, action) {
	switch(action.type){
		case SET_AUTHED_USER:
			return action.userId
		default:
			return state
	}
}