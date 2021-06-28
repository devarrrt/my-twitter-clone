import { put, takeLatest, call } from 'redux-saga/effects';
import { Tweet } from '../tweets/stateTypes';
import { TweetsAPI } from './../../../API/tweetsAPI';
import { SetLoadingStatusAction, TweetActionsType, FetchTweetDataAI,SetTweetDataAction } from './actionsTweet';
import { LoadingStatus } from './stateTypes';


export function* fetchTweetDataRequest({ payload: tweetId }: FetchTweetDataAI ){
try {
	const data: Tweet = yield call ( TweetsAPI.fetchTweetData, tweetId )
	yield put( SetTweetDataAction( data ))
} catch ( error ) {
	yield put( SetLoadingStatusAction( LoadingStatus.ERROR ))
	console.log( error, 'ooops' ) 
}
}   


export function* sagasTweet( ){ 
	yield takeLatest( TweetActionsType.FETCH_TWEET_DATA, fetchTweetDataRequest )
}

