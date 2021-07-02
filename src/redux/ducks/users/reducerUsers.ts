import { LoadingStatus, UsersState } from "./stateTypes"
import { produce, Draft } from 'immer';
import { UsersActions, UsersActionsType } from "./actionUsers";


const initialState: UsersState = {
	users: undefined,
	loadingStatus: LoadingStatus.ERROR
}

const reduserUsers = produce((draft: Draft<UsersState>, action: UsersActions) => {
	switch (action.type) {

		case UsersActionsType.FETCH_USERS:
			draft.loadingStatus = LoadingStatus.LOADING
			break;

		case UsersActionsType.SET_USERS:
			draft.users = action.payload
			draft.loadingStatus = LoadingStatus.LOADED
			break;

		default: break
	}
}, initialState)


export default reduserUsers