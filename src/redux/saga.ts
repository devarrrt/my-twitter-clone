import { all } from "redux-saga/effects";
import { sagasTags } from "./ducks/tags/sagasTags";
import { sagasTweet } from "./ducks/tweet/sagasTweet";
import { sagasTweets } from "./ducks/tweets/sagasTweets";
import { sagasUser } from "./ducks/user/sagasUser";
import { sagasUsers } from "./ducks/users/sagasUser";


export default function* rootSaga() {
	yield all([
		sagasTweets(),
		sagasTags(),
		sagasTweet(),
		sagasUser(),
		sagasUsers()
	])
}