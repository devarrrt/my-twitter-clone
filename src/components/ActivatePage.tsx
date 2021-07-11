import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { LoadingStatus } from '../redux/ducks/user/stateTypes';
import { SetUserLoadingStatusAction } from './../redux/ducks/user/actionsUser';
import { AuthApi } from './../API/authAPI';


interface IActivatePage {}


const ActivatePage: React.FC<IActivatePage> = () => {
const dispatch = useDispatch()

useEffect(()=> {
dispatch( SetUserLoadingStatusAction( LoadingStatus.NEVER ))
const hash = window.location.pathname.split('/').pop
if ( hash ) {
	//@ts-ignore
	AuthApi.verify(hash) 
	.then(({ data }) => {
		window.localStorage.setItem('token', data.token)
		window.location.href = '/home'
	})
	.catch( ()=> {
		dispatch( SetUserLoadingStatusAction( LoadingStatus.ERROR ))
	} )
}
},[])

return null
}


export default ActivatePage