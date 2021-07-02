import React, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom';
import SignIn from './pages/SignIn/index';
import Layout from './pages/Layout';
import Home from './pages/Home';
import { useDispatch, useSelector } from 'react-redux';
import { selectIsAuth } from './redux/ducks/user/selectorsUser';
import { FetchUserDataAction } from './redux/ducks/user/actionsUser';



const App = () => {
const history = useHistory()
const dispatch = useDispatch()
const isAuth = useSelector( selectIsAuth )

useEffect(()=> {
	dispatch( FetchUserDataAction() )
},[dispatch])
	
useEffect(()=> {
	if ( !isAuth ) {
		history.push('/signin')
	} else {
		history.push('/home')
	}
},[isAuth, history])  


	return (
		<div className="App">
			 <Switch>
			 		<Route path="/signin" component={ SignIn } exact />
					 <Layout>
			 		<Route path="/home" component={ Home } />
					 </Layout>
			 </Switch>
		</div>
	)
}


export default App
