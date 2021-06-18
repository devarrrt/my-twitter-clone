import { Action } from 'redux';
import { LoadingStatus } from '../tweets/stateTypes';
import { TagsState } from './stateTypes';


export enum TagsActionsType {
	FETCH_TAGS = 'tags/FETCH_TWEETS',
	SET_TAGS = 'tags/SET_TAGS',
	SET_LOADING_STATUS = 'tags/SET_LOADING_STATUS'
}	


//fetch
export interface FetchTagsAI extends Action <TagsActionsType> {
	type: TagsActionsType.FETCH_TAGS
}
export const FetchTagsAction = ( ): FetchTagsAI => ({
	type: TagsActionsType.FETCH_TAGS
})

 
//set 
export interface SetTagsAI extends Action <TagsActionsType> {
	type: TagsActionsType.SET_TAGS, 
	payload: TagsState['tags']
}
export const SetTagsAction = (payload: TagsState['tags']): SetTagsAI => ({
	type: TagsActionsType.SET_TAGS,
	payload
})


//loading 
export interface SetLoadingStatusAI extends Action <TagsActionsType> {
	type: TagsActionsType.SET_LOADING_STATUS,
	payload: LoadingStatus
}
export const SetLoadingStatusAction = ( payload: LoadingStatus ): SetLoadingStatusAI => ({
 type: TagsActionsType.SET_LOADING_STATUS,
 payload
})







export type TagsActions =
FetchTagsAI |
SetTagsAI |
SetLoadingStatusAI
