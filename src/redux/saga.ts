import { all } from "redux-saga/effects";
import { sagasTags } from "./ducks/tags/sagasTags";
import { sagasTweet } from "./ducks/tweet/sagasTweet";
import { sagasTweets } from "./ducks/tweets/sagasTweets";


export default function* rootSaga() {
	yield all([
		sagasTweets(),
		sagasTags(),
		sagasTweet()
	])
}