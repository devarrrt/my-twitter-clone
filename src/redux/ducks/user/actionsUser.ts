
import { Action } from 'redux';
import { LoginFormProps } from '../../../pages/SignIn/components/LoginModal';
import { LoadingStatus, User, UserState } from './stateTypes';
import { RegisterFormProps } from './../../../pages/SignIn/components/RegisterModal';

export enum UserActionsType  {
  FETCH_USER_DATA = 'user/FETCH_USER_DATA',
	SET_USER_DATA = 'user/SET_USER_DATA',
  FETCH_SIGN_IN = 'user/FETCH_SIGN_IN',
  FETCH_SIGN_UP = 'user/FETCH_SIGN_UP',
  SET_LOADING_STATE = 'user/SET_LOADING_STATE',
  SIGN_OUT = 'user/SIGN_OUT'
}


//fetch user
export interface FetchUserDataAI extends Action <UserActionsType> {
	type: UserActionsType.FETCH_USER_DATA
}
export const FetchUserDataAction = ( ): FetchUserDataAI => ({
	type: UserActionsType.FETCH_USER_DATA
})


//set user
export interface SetUserdataAI extends Action <UserActionsType> {
	type: UserActionsType.SET_USER_DATA,
	payload: User | undefined
}
export const SetUserdataAction = ( payload: UserState['data'] ): SetUserdataAI => ({
	type: UserActionsType.SET_USER_DATA,
	payload
})


//loadingStatus
export interface SetUserLoadingStatusAI extends Action<UserActionsType> {
	type: UserActionsType.SET_LOADING_STATE,
	payload: LoadingStatus
}
export const SetUserLoadingStatusAction = ( payload: UserState['status'] ): SetUserLoadingStatusAI => ({
	type: UserActionsType.SET_LOADING_STATE,
	payload
})


//fetchSignIn  
export interface FetchSignInAI extends Action <UserActionsType> {
	type: UserActionsType.FETCH_SIGN_IN,
	payload: LoginFormProps
}
export const FetchSignInAction = ( payload: LoginFormProps ): FetchSignInAI => ({
	type: UserActionsType.FETCH_SIGN_IN,
	payload
})

// fetchSignUp
export interface FetchSignUpAI extends Action <UserActionsType> {
	type: UserActionsType.FETCH_SIGN_UP
	payload: RegisterFormProps
}
export const FetchSignUpAction = (payload: RegisterFormProps ): FetchSignUpAI => ({
	type: UserActionsType.FETCH_SIGN_UP,
	payload
})





export type UserActions = 
FetchUserDataAI |
SetUserdataAI |
SetUserLoadingStatusAI | 
FetchSignInAI |
FetchSignUpAI

