import { RootState } from '../../rootReducer';
import { AddFormStatus, LoadingStatus } from './stateTypes';


export const selectTweets = ( state: RootState ) => state.tweets
export const selectLoadingStatus = ( state: RootState ): LoadingStatus => selectTweets(state).loadingStatus
 
//tweets 
export const selectTweetsItems = ( state: RootState ) => selectTweets(state).tweets

//loading
export const selectTweetsLoading = ( state: RootState ): boolean => selectTweets( state ).loadingStatus === LoadingStatus.LOADING

//loaded
export const selectTweetsLoaded = ( state: RootState ): boolean => selectTweets( state ).loadingStatus === LoadingStatus.LOADED 

//add form status 
export const selectAddFormStatus = ( state: RootState ): AddFormStatus => selectTweets( state ).addTweetStatus 