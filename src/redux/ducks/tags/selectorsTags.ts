import { RootState } from "../../rootReducer";
import { LoadingStatus } from "../tweets/stateTypes";
import { TagsState } from './stateTypes';

 


 export const selectTags = ( state: RootState ): TagsState => state.tags
 export const selectLoadingStatus = ( state: RootState ): LoadingStatus => selectTags( state ).loadingStatus

 //tags
export const selectTagsItems = ( state: RootState ) => selectTags( state ).tags

 //loading
export const selectTagsLoading = ( state: RootState ): boolean => selectTags( state ).loadingStatus === LoadingStatus.LOADING

 //loaded
 export const selectTagsLoaded = ( state: RootState ): boolean => selectTags( state ).loadingStatus === LoadingStatus.LOADED