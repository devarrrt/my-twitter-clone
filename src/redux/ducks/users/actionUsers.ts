
import { Action } from 'redux';
import { User } from '../user/stateTypes';

export enum UsersActionsType {
	FETCH_USERS = 'users/FETCH_USERS',
	SET_USERS = 'users/SET_USERS',
}


//fetch
export interface FetchUsersAI extends Action<UsersActionsType> {
	type: UsersActionsType.FETCH_USERS
}
export const FetchUsersAction = ( ): FetchUsersAI => ({
	type: UsersActionsType.FETCH_USERS
})


//set
export interface SetUsersAI extends Action <UsersActionsType> {
	type: UsersActionsType.SET_USERS
	payload: User[]
}
export const SetUsersAction = ( payload: User[] ): SetUsersAI =>({
	type: UsersActionsType.SET_USERS,
	payload
})





export type UsersActions = 
FetchUsersAI | 
SetUsersAI
