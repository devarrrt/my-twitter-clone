
import { takeLatest, call, put } from 'redux-saga/effects';
import { TagsActionsType, SetTagsAction, SetLoadingStatusAction } from './actionsTags';
import { TagsAPI } from './../../../API/tagsAPI';
import { LoadingStatus } from './stateTypes';


export function* fetchTagsRequest() {
	try{
		//@ts-ignore
		const data = yield call ( TagsAPI.fetchTags )
		yield put( SetTagsAction( data ))
	} catch (error) {
		yield put( SetLoadingStatusAction( LoadingStatus.ERROR ))
		console.log( error )
	} 
}



export function* sagasTags() {
yield takeLatest( TagsActionsType.FETCH_TAGS,  fetchTagsRequest )
}