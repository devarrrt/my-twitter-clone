import { RootState } from "../../rootReducer";
import { Tweet } from "../tweets/stateTypes";
import { LoadingStatus, TweetState } from "./stateTypes";



export const selectTweet = ( state: RootState ): TweetState => state.tweet
export const selectLoadintgStatus = ( state: RootState ): LoadingStatus => selectTweet( state ).loadingStatus

//loading
export const selectTweetLoading = ( state: RootState ): boolean => selectLoadintgStatus( state ) === LoadingStatus.LOADING
//loaded
export const selectTweetLoaded = ( state: RootState ): boolean => selectLoadintgStatus( state ) === LoadingStatus.LOADED
//data
export const selectTweetData = ( state: RootState ): Tweet | undefined => selectTweet( state ).dataTweet
 