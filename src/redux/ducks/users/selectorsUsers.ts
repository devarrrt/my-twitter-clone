import { RootState } from "../../rootReducer";
import { UsersState } from "./stateTypes";



export const selectUsers = ( state: RootState ): UsersState => state.users

export const selectUsersItems = ( state: RootState ): UsersState['users'] => state.users.users