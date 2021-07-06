import { UserActions, UserActionsType } from "./actionsUser"
import { LoadingStatus, UserState } from "./stateTypes"
import { produce, Draft } from 'immer';


const initialUserState: UserState = {
	data: undefined,
	status: LoadingStatus.NEVER
}



const reducerUser = produce((draft: Draft<UserState>, action: UserActions) => {

	switch (action.type) { 

		case UserActionsType.SET_USER_DATA: //8 шаг. когда вызывается это тип, данные о юзере с undefined меняются на те, которые перешли из сервера --> selectorsUser
			draft.data = action.payload
			draft.status = LoadingStatus.SUCCESS
			break;

		case UserActionsType.SET_LOADING_STATE:
			draft.status = action.payload
			break;

			

		default:
			break;


	}
}, initialUserState)


export default reducerUser

