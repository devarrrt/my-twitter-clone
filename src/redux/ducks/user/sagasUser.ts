
import { takeLatest, put, call } from 'redux-saga/effects';
import { FetchSignInAI, FetchSignUpAI, SetUserdataAction, SetUserLoadingStatusAction, UserActionsType } from './actionsUser';
import { AuthApi } from './../../../API/authAPI';
import { LoadingStatus } from './stateTypes';
import { UsersActionsType } from '../users/actionUsers';



export function* fetchSignInRequest({ payload }: FetchSignInAI) {
	try {
		yield put(SetUserLoadingStatusAction(LoadingStatus.LOADING))
		const { data } = yield call(AuthApi.signIn, payload)
		window.localStorage.setItem('token', data.token)
		yield put(SetUserdataAction(data))
	} catch (error) {
		yield put(SetUserLoadingStatusAction(LoadingStatus.ERROR))
	}
}


export function* fetchSignUpRequest({ payload }: FetchSignUpAI) {
	try {
		yield put ( SetUserLoadingStatusAction(LoadingStatus.LOADING))
		yield call(AuthApi.signUp, payload)
		yield put ( SetUserLoadingStatusAction(LoadingStatus.SUCCESS))
	} catch (error) {
		yield put(SetUserLoadingStatusAction(LoadingStatus.ERROR))
	}
}





export function* sagasUser() {
	yield takeLatest(UserActionsType.FETCH_SIGN_IN, fetchSignInRequest)
	yield takeLatest( UserActionsType.FETCH_SIGN_UP, fetchSignUpRequest )
}