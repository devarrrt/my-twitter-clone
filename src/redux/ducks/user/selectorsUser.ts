import { RootState } from "../../rootReducer"
import { LoadingStatus, UserState } from "./stateTypes"

 
export const selectUserState = (state: RootState): UserState => state.user

export const selectUserData = ( state: RootState ): UserState['data'] => selectUserState( state ).data  //изначально undefined

export const selectUserStatus = ( state: RootState ): UserState['status'] => selectUserState( state ).status

export const selectUserLoading = ( state: RootState ): boolean => selectUserState( state ).status === LoadingStatus.LOADING 

export const selectUserIsLoaded = ( state: RootState ): boolean => selectUserState( state ).status === LoadingStatus.LOADED

export const selectIsAuth = ( state: RootState ): boolean => !!selectUserState(state).data //9 шаг. если данные пришли, то true, иначе false --> App