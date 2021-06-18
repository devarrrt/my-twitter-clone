import React from 'react'
import { Route, Switch } from 'react-router-dom';
import SignIn from './pages/SignIn/index';
import Layout from './pages/Layout';
import Home from './pages/Home';



const App = () => {
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
