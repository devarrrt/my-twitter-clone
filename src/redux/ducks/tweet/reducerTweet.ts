import { LoadingStatus } from "../tweets/stateTypes"
import { TweetState } from "./stateTypes"
import { produce, Draft } from 'immer';
import { TweetActions, TweetActionsType } from "./actionsTweet";



const initialTweetState: TweetState = {
	dataTweet: undefined,
	loadingStatus:LoadingStatus.NEVER
}

const reducerTweet = produce((draft: Draft<TweetState>, action: TweetActions ) => {
switch ( action.type ) {

case TweetActionsType.FETCH_TWEET_DATA: 
	draft.dataTweet = undefined
	draft.loadingStatus = LoadingStatus.LOADING
	break;

	case TweetActionsType.SET_TWEET_DATA:
	draft.dataTweet = action.payload
	draft.loadingStatus = LoadingStatus.LOADED
	break;

	case TweetActionsType.SET_LOADING_STATUS: 
	draft.loadingStatus = action.payload
	break;

}}, initialTweetState)

export default reducerTweet
