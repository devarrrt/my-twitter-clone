import { User } from "../user/stateTypes";

 
export enum LoadingStatus {
	LOADED = 'LOADED',
	ERROR = 'ERROR',
	NEVER = 'NEVER',
	LOADING = 'LOADING'
}

export enum AddFormStatus {
	LOADING = 'LOADING',
	ERROR = 'ERROR',
	NEVER = 'NEVER',
}

export interface Tweet {
  _id: string;
  text: string;
  images?: [];
  createdAt: string;
  user: User;
}

export interface TweetsState {
	tweets: Tweet[];
  loadingStatus: LoadingStatus;
	addTweetStatus: AddFormStatus
}