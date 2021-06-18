import produce, { Draft } from 'immer'
import { TagsActions, TagsActionsType } from './actionsTags';
import { LoadingStatus, TagsState } from './stateTypes';

const intialTagsState: TagsState = {
	tags: [],
	loadingStatus: LoadingStatus.NEVER
}

const reducerTags = produce( ( draft: Draft<TagsState>, action: TagsActions  ) => {

	switch( action.type ) {
		case TagsActionsType.FETCH_TAGS:
			draft.tags = []
			draft.loadingStatus = LoadingStatus.LOADING
			break;

			case TagsActionsType.SET_TAGS:
				draft.tags = action.payload
				draft.loadingStatus = LoadingStatus.LOADED
				break;

			case TagsActionsType.SET_LOADING_STATUS: 
			draft.loadingStatus = action.payload
			break;

			default: break
	}

}, intialTagsState )


export default reducerTags