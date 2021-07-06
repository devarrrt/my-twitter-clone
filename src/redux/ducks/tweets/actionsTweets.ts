import { Action } from "redux";
import { AddFormStatus, LoadingStatus, Tweet, TweetsState } from './stateTypes';


 
export enum TweetsActionsType {
	FETCH_TWEETS = 'tweets/FETCH_TWEETS',
	SET_TWEETS = 'tweets/SET_TWEETS',
	SET_LOADING_STATUS = 'tweets/SET_LOADING_STATUS',
	FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
	ADD_TWEET = 'tweets/ADD_TWEET',
	SET_ADD_FORM_STATUS= 'tweets/SET_ADD_FORM_STATUS'
}



//fetchTweets
export interface FetchTweetsAI extends Action <TweetsActionsType> {
	type: TweetsActionsType.FETCH_TWEETS
}
export const FetchTweetsAction = (): FetchTweetsAI => ({
	type: TweetsActionsType.FETCH_TWEETS
})



//setTweets
export interface SetTweetsAI extends Action<TweetsActionsType> {
	type: TweetsActionsType.SET_TWEETS
	payload: TweetsState['tweets']
}
export const SetTweetsAction = (payload: TweetsState['tweets']): SetTweetsAI => ({
	type: TweetsActionsType.SET_TWEETS,
	payload
})



//setStatus 
export interface SetLoadingStatusAI extends Action<TweetsActionsType> {
	type: TweetsActionsType.SET_LOADING_STATUS
	payload: LoadingStatus
}
export const SetLoadingStatusAction = (payload: LoadingStatus): SetLoadingStatusAI => ({
	type: TweetsActionsType.SET_LOADING_STATUS,
	payload
})



//fetchAdd
export interface FetchAddTweetAI extends Action <TweetsActionsType> {
	type: TweetsActionsType.FETCH_ADD_TWEET,
	payload: string
}
export const FetchAddTweetAction = ( payload: string ): FetchAddTweetAI => ({
	type: TweetsActionsType.FETCH_ADD_TWEET,
	payload
})
 


//AddTweet
export interface AddTweetAI extends Action <TweetsActionsType> {
	type: TweetsActionsType.ADD_TWEET,
	payload: Tweet
}
export const AddTweetAction = ( payload: Tweet ): AddTweetAI => ({
	type: TweetsActionsType.ADD_TWEET,
	payload
})

//form status
export interface SetAddFormStatusAI extends Action <TweetsActionsType> {
	type: TweetsActionsType.SET_ADD_FORM_STATUS,
	payload: AddFormStatus
}
export const SetAddFormStatusAction = ( payload: AddFormStatus ): SetAddFormStatusAI => ({
	type: TweetsActionsType.SET_ADD_FORM_STATUS,
	payload
}) 



export type TweetsActions =
	SetTweetsAI |
	FetchTweetsAI |
	SetLoadingStatusAI |
	FetchAddTweetAI | 
	AddTweetAI |
	SetAddFormStatusAI
	