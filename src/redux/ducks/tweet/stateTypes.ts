import { Tweet } from "../tweets/stateTypes";

 
  
export enum LoadingStatus {
	LOADED = 'LOADED',
	ERROR = 'ERROR',
	NEVER = 'NEVER',
	LOADING = 'LOADING'
}

export interface TweetState {
	dataTweet?: Tweet,
	loadingStatus: LoadingStatus
}