import { axios } from '../core/axios'
import { Tweet } from "../redux/ducks/tweets/stateTypes"



interface Response<T> {
	status: string
	data: T
}


export const TweetsAPI = {	
	async fetchTweets(): Promise<Response<Tweet[]>> {
		const { data } = await axios.get('/tweets')
		return data.data
	},
	async fetchTweetData(id: string): Promise<Response<Tweet>> {
		const { data } = await axios.get('/tweets/' + id)
		return data.data
	},
	async addTweet(payload: { value: string; images: string[] }): Promise<Tweet> {
		const { data } = await axios.post<Response<Tweet>>('/tweets', payload)
		return data.data
	},
	removeTweet: ( id: string ): Promise<void> => axios.delete('/tweets/' + id) 
 }
