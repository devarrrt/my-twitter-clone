import React, { useEffect } from 'react'
import { Route, Switch, useHistory } from 'react-router-dom';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useDispatch, useSelector } from 'react-redux';


import SignIn from './pages/SignIn/index';
import Layout from './pages/Layout';
import Home from './pages/Home';
import { selectIsAuth, selectUserStatus } from './redux/ducks/user/selectorsUser';
import { FetchUserDataAction } from './redux/ducks/user/actionsUser';
import { LoadingStatus } from './redux/ducks/user/stateTypes';
import { useHomeStyles } from './pages/Home/useHomeStyles';
import MyProfile from './pages/MyProfile/index'
import { ActivatePage } from './components/index'


const App = () => {
	const styles = useHomeStyles()
	const history = useHistory()
	const dispatch = useDispatch()
	const loadingStatus = useSelector(selectUserStatus)
	const isAuth = useSelector(selectIsAuth) //10 шаг. если данные есть - значит, авторизованы
	const isReady = loadingStatus !== LoadingStatus.NEVER && loadingStatus !== LoadingStatus.LOADING



	useEffect(() => {
		dispatch(FetchUserDataAction()) //1 шаг. при монтировании компонента запускается экшен FetchUserDataAction. --> actionsUser
	}, [dispatch])


	useEffect(() => {
		if (!isAuth && isReady) { //если нет авторизации(данных о пользователе) и статус загрузки соответствующий, то перебрасывает на форму регистрации
			history.push('/signin')
		} else {
			history.push('/home') //если все успешно - на домашнюю страницу
		}
	}, [isAuth, history, isReady])


	if (!isReady) {
		return (
			<div className={styles.centered}>
				<TwitterIcon color="primary" style={{ width: 80, height: 80 }} />
			</div>
		)
	}


	return (
		<div className="App">
			<Switch>
				<Route path="/signin" component={SignIn} exact />
				<Layout>
					<Route path="/home" component={Home} />
					<Route path="/user/:id" component={MyProfile} exact />
					{/* <Route path="/user/activate/:hash" component={ActivatePage}/> */}
				</Layout>
			</Switch>
		</div>
	)
}


export default App




