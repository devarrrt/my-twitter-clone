
 
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
	_id: string,
	text: string, 
	user: {
		fullname: string,
		username: string,
		avatarUrl: string
	},

}

export interface TweetsState {
	tweets: Tweet[];
  loadingStatus: LoadingStatus;
	addTweetStatus: AddFormStatus
}