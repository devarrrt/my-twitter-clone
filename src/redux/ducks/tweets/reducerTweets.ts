import produce, { Draft } from 'immer'
import { TweetsActions, TweetsActionsType } from './actionsTweets';
import { AddFormStatus, LoadingStatus, TweetsState } from './stateTypes';



const initialTweetsState: TweetsState = {
	tweets: [],
	loadingStatus: LoadingStatus.NEVER,
	addTweetStatus: AddFormStatus.NEVER
}


const reducerTweets = produce((draft: Draft<TweetsState>, action: TweetsActions) => {
	switch (action.type) {

		case TweetsActionsType.FETCH_TWEETS:
			draft.tweets = []
			draft.loadingStatus = LoadingStatus.LOADING
			break;

		case TweetsActionsType.SET_TWEETS:
			draft.tweets = action.payload
			draft.loadingStatus = LoadingStatus.LOADED
			break;

		case TweetsActionsType.SET_LOADING_STATUS:
			draft.loadingStatus = action.payload
			break;

		case TweetsActionsType.FETCH_ADD_TWEET:
			draft.addTweetStatus = AddFormStatus.LOADING
			break;

		case TweetsActionsType.ADD_TWEET:
			draft.tweets.push(action.payload)
			draft.tweets.splice( 0, 0, action.payload )
			draft.addTweetStatus = AddFormStatus.NEVER
			break;

		case TweetsActionsType.SET_ADD_FORM_STATUS:
			draft.addTweetStatus = action.payload
			break;

		default:
			break
	}
}, initialTweetsState)

export default reducerTweets





//git add .
//git commit -m d tweet"
//git push"ad
