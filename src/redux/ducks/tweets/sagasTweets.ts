import { call, put, takeLatest } from 'redux-saga/effects'
import { AddTweetAction, FetchAddTweetAI, SetAddFormStatusAction, SetLoadingStatusAction, SetTweetsAction, TweetsActionsType } from './actionsTweets'
import { TweetsAPI } from './../../../API/tweetsAPI';
import { AddFormStatus, LoadingStatus } from './stateTypes';




export function* fetchTweetsRequest() {
	try {
		//@ts-ignore
		const data = yield call(TweetsAPI.fetchTweets)
		yield put(SetTweetsAction(data))
	} catch (error) {
		yield put(SetLoadingStatusAction(LoadingStatus.ERROR))
		console.log(error)
	}
}

export function* fetchAddTweetRequest({ payload: text }: FetchAddTweetAI) {
	try {
		//@ts-ignore
		const data = yield call(TweetsAPI.addTweet, text)
		yield put(AddTweetAction(data))
	} catch (error) {
		yield put(SetAddFormStatusAction(AddFormStatus.ERROR))
	}
}


export function* sagasTweets() {
	yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest)
	yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest)
}

//1.2 Ошибка при добавлении твита, тк нет авторизации