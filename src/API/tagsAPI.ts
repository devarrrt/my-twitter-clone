import axios from 'axios';
import { TagsState } from './../redux/ducks/tags/stateTypes';


export const TagsAPI = {
	async	fetchTags( ):Promise<TagsState['tags']>{
	return axios.get('/tags').then(({ data }) => data)
	}		
}



