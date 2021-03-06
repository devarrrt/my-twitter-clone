import { combineReducers } from "redux";
import reducerTweets from './ducks/tweets/reducerTweets';
import { TweetsState } from './ducks/tweets/stateTypes';
import { TagsState } from './ducks/tags/stateTypes';
import reducerTags from './ducks/tags/reducerTags';
import { TweetState } from "./ducks/tweet/stateTypes";
import reducerTweet from './ducks/tweet/reducerTweet';
import { UserState } from './ducks/user/stateTypes';
import reducerUser from "./ducks/user/reducerUser";
import { UsersState } from "./ducks/users/stateTypes";
import reduserUsers from './ducks/users/reducerUsers';



export const rootReducer = combineReducers({
	tweets: reducerTweets,
	tags: reducerTags,
	tweet: reducerTweet,
	user: reducerUser,
	users: reduserUsers
})

export interface RootState {
	tweets: TweetsState,
	tags: TagsState,
	tweet: TweetState,
	user: UserState,
	users: UsersState
}