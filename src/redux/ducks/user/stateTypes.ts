
export enum LoadingStatus {
  LOADED = 'LOADED',
  LOADING = 'LOADING',
  ERROR = 'ERROR',
  NEVER = 'NEVER',
  SUCCESS = 'SUCCESS',
}


export interface User {
  _id?: string;
  email: string;
  fullname: string;
  username: string;
  password: string;
  confirmHash: string;
  confirmed?: boolean;
  location?: string;
  about?: string;
  website?: string;


}

export interface UserState {
	data: User | undefined,
	status: LoadingStatus
}