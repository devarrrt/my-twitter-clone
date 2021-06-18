import { call, put, takeLatest } from 'redux-saga/effects'
import { AddTweetAction, FetchAddTweetAI, SetAddFormStatusAction, SetLoadingStatusAction, SetTweetsAction, TweetsActionsType } from './actionsTweets'
import { TweetsAPI } from './../../../API/tweetsAPI';
import { AddFormStatus, LoadingStatus } from './stateTypes';


 

	export function* fetchTweetsRequest() {
		try {
			//@ts-ignore
			const data = yield call( TweetsAPI.fetchTweets )
			yield put ( SetTweetsAction( data ))
		} catch ( error ) {
			yield put ( SetLoadingStatusAction( LoadingStatus.ERROR ))
			console.log( error )
		}
	}

 export function* fetchAddTweetRequest({ payload } : FetchAddTweetAI) {
	 	try{
		 const tweet = {
			_id: Math.random().toString(36).substr(2),
			 text: payload,
			 "user": {
        "fullname": "Test",
        "username": "devarrrt",
        "avatarUrl": "https://sun1-21.userapi.com/impg/QQh8O3aLreAYJd7LA9anm4lYYfjPG29KZC2RKg/35r2rbfNAjI.jpg?size=100x0&quality=96&crop=160,160,1280,1280&sign=4602bdb31e0553905d13ee60a612a832&ava=1"
      },
		 }
			 //@ts-ignore
			 const data = yield call( TweetsAPI.addTweet, tweet )
			 yield put ( AddTweetAction( data ))
		 } catch ( error ) {
			yield put ( SetAddFormStatusAction( AddFormStatus.ERROR ))
		}
 }

 
	export function* sagasTweets() {
		yield takeLatest( TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest )
		yield takeLatest( TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest )
	}