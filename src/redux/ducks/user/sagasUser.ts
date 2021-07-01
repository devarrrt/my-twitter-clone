
import { takeLatest, put, call } from 'redux-saga/effects';
import { FetchSignInAI, SetUserdataAction, SetUserLoadingStatusAction, UserActionsType } from './actionsUser';
import { AuthApi } from './../../../API/authAPI';
import { LoadingStatus } from './stateTypes';

 

export function* fetchSignInRequest({ payload }: FetchSignInAI ) {
	try{
		yield put( SetUserLoadingStatusAction( LoadingStatus.LOADING ))
		const { data } = yield call( AuthApi.signIn, payload )
		yield put( SetUserdataAction( data ))
	} catch ( error ){
		yield put ( SetUserLoadingStatusAction( LoadingStatus.ERROR ))
	}
}


export function* sagasUser() {
	yield takeLatest( UserActionsType.FETCH_SIGN_IN, fetchSignInRequest )
} 