import axios from 'axios';
import { TagsState } from './../redux/ducks/tags/stateTypes';


export const TagsAPI = {
	fetchTags( ):Promise<TagsState['tags']>{
	return axios.get('http://localhost:3001/tags').then(({ data }) => data)
	}		
}



