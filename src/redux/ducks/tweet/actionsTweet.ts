
import { Action } from 'redux';
import { Tweet } from '../tweets/stateTypes';
import { LoadingStatus, TweetState } from './stateTypes'


export enum TweetActionsType {
	FETCH_TWEET_DATA = 'tweet/FETCH_TWEET_DATA',
	SET_TWEET_DATA = 'tweet/SET_TWEET_DATA',
	SET_LOADING_STATUS = 'tweet/SET_LOADING_STATUS'
}


//fetch 
export interface FetchTweetDataAI extends Action<TweetActionsType> {
	type: TweetActionsType.FETCH_TWEET_DATA
	payload: string
}
export const FetchTweetDataAction = (payload:string): FetchTweetDataAI => ({
	type: TweetActionsType.FETCH_TWEET_DATA,
	payload
})


//set
export interface SetTweetDataAI extends Action<TweetActionsType> {
	type: TweetActionsType.SET_TWEET_DATA
	payload: TweetState['dataTweet']
}
export const SetTweetDataAction = (payload: TweetState['dataTweet']): SetTweetDataAI => ({
	type: TweetActionsType.SET_TWEET_DATA,
	payload
})


//loading
export interface SetLoadingStatusAI extends Action<TweetActionsType> {
	type: TweetActionsType.SET_LOADING_STATUS
	payload: LoadingStatus
}
export const SetLoadingStatusAction = (payload: LoadingStatus): SetLoadingStatusAI => ({
	type: TweetActionsType.SET_LOADING_STATUS,
	payload
})

  
export type TweetActions =
FetchTweetDataAI |
	SetTweetDataAI |
	SetLoadingStatusAI

