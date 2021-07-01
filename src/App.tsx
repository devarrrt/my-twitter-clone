import React, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom';
import SignIn from './pages/SignIn/index';
import Layout from './pages/Layout';
import Home from './pages/Home';
import { useDispatch } from 'react-redux';



const App = () => {
const history = useHistory()
const dispatch =useDispatch()
	
useEffect( ()=> {

},[] )

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
