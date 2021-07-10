import { call, put, takeLatest } from 'redux-saga/effects'
import { AddTweetAction, FetchAddTweetAI, RemoveTweetAI, SetAddFormStatusAction, SetLoadingStatusAction, SetTweetsAction, TweetsActionsType } from './actionsTweets'
import { TweetsAPI } from './../../../API/tweetsAPI';
import { AddFormStatus, LoadingStatus } from './stateTypes';





export function* fetchTweetsRequest() {
	try {
		//@ts-ignore 
		const data = yield call(TweetsAPI.fetchTweets)
		yield put(SetTweetsAction(data))
	} catch (error) {
		yield put( SetLoadingStatusAction(LoadingStatus.ERROR))
	}
}



export function* fetchAddTweetRequest({ payload }: FetchAddTweetAI) {
	try {
		//@ts-ignore
		const data = yield call(TweetsAPI.addTweet, payload)
		yield put(AddTweetAction(data))
	} catch (error) {
		yield put(SetAddFormStatusAction(AddFormStatus.ERROR))
	}
}


export function* removeTweetRequest({ payload }: RemoveTweetAI ){
	try {
		yield call( TweetsAPI.removeTweet, payload )
	} catch (error) {
		alert( 'Не удалось удалить твит' )
	}
}  


export function* sagasTweets() {
	yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
	yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
	yield takeLatest( TweetsActionsType.REMOVE_TWEET,
	removeTweetRequest)
}
