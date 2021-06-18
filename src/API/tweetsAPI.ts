import axios from "axios"
import { Tweet, TweetsState } from "../redux/ducks/tweets/stateTypes"




export const TweetsAPI = {
	fetchTweets(): Promise<TweetsState['tweets']> {
		return axios.get( 'http://localhost:3001/tweets' ).then(({data}) => data)
},
	fetchTweetData( id: string ): Promise<Tweet> {
		return axios.get( 'http://localhost:3001/tweets?_id='+id ).then(({ data }) => data)
	},
	addTweet( payload: Tweet ): Promise<Tweet> {
		return axios.post( 'http://localhost:3001/tweets', payload ).then(({ data }) => data)
	}
}

