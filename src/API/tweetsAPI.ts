import { axios } from '../core/axios'
import { Tweet, TweetsState } from "../redux/ducks/tweets/stateTypes"

interface Response<T> {
	status: string
	data: T
}



export const TweetsAPI = {
	
	async fetchTweets(): Promise<Response<Tweet[]>> {
		const { data } = await axios.get( '/tweets' )
		return data.data
	},
	async fetchTweetData(id: string): Promise<Response<Tweet>> {
		const { data } = await axios.get('/tweets/' + id)
		return data.data
	},
	async addTweet(payload: string): Promise<Tweet> {
		const { data } = await axios.post<Response<Tweet>>('/tweets', { text: payload })
		return data.data
	}
}
