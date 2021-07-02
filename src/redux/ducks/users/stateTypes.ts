import { User } from "../user/stateTypes";


export enum LoadingStatus {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  SUCCESS = 'SUCCESS',
}


export interface UsersState {
	users: User[] | undefined,
	loadingStatus: LoadingStatus 
}