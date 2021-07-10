import React, { useState, useEffect } from 'react'
import { useHomeStyles } from './../Home/useHomeStyles';
import { Paper, Typography, Avatar, Tabs, Tab, CircularProgress } from '@material-ui/core';
import { RouteComponentProps } from 'react-router-dom';
import classNames from 'classnames'
import Skeleton from '@material-ui/lab/Skeleton';
import BackButton from './../../components/BackButton';
import { selectTweetsItems, selectTweetsLoading } from './../../redux/ducks/tweets/selectorsTweets';
import { useSelector, useDispatch } from 'react-redux';
import { User } from '../../redux/ducks/user/stateTypes';
import { FetchTweetsAction } from './../../redux/ducks/tweets/actionsTweets';
import { AuthApi } from './../../API/authAPI';
import { Tweet } from '../../components';
import './MyProfile.scss'




const MyProfile: React.FC<RouteComponentProps<{ id: string }>> = ({ match }) => {

	const styles = useHomeStyles()
	const tweets = useSelector(selectTweetsItems)
	const loadingTweets = useSelector(selectTweetsLoading)
	const [activeTab, setActiveTab] = useState<number>(0);
	const [userData, setUserData] = React.useState<User | undefined>()
	const dispatch = useDispatch()


	useEffect(() => {
		const userId = match.params.id;
		dispatch(FetchTweetsAction())

		if (userId) {
			AuthApi.getUserInfo(userId).then(({ data }) => {
				setUserData(data)
			})
		}
	}, [])

	const handleChange = (e: React.ChangeEvent<{}>, newValue: number) => {
		setActiveTab(newValue)
	}


	return (
		<Paper className={classNames(styles.tweetsWrapper, 'user')} variant="outlined">
			<Paper className={styles.tweetsHeader} variant="outlined">
				<BackButton />
				<div>
					<Typography variant="h6"> {userData?.username} </Typography>
					<Typography variant="caption" display="block" gutterBottom>
						{tweets.length > 4 ?
							tweets.length + ' твитов' :
							tweets.length + ' твита'
						}
					</Typography>
				</div>
			</Paper>

			<div className="user__header"></div>
			<div className="user__info">
				<Avatar />

				{!userData ? (
					<Skeleton variant="text" width={250} height={30} />
				) : (
					<h2 className="user__info-fullname">{userData?.fullname}</h2>
				)
				}

				{!userData ? (
					<Skeleton variant="text" width={60} />
				) : (
					<span className="user__info-username">@{userData?.username}</span>
				)}




				<p className="user__info-description">
					Frontend Developer / UI Designer / JavaScript / ReactJS
				</p>

				<ul className="user__info-details">
					<li>Russia, St. Petersburg</li>
					<li>
						<a className="link" href="https://github.com/devarrrt">
							devarrrt
						</a>
					</li>
					<li>
						<br />
					</li>
					<li>Дата рождения: 27декабря 1999г. </li>
					<li>Регистрация: январь 2020 г.</li>
				</ul>
			</div>

			<Tabs value={activeTab} indicatorColor="primary" textColor="primary" onChange={handleChange}>
				<Tab label="Твиты" />
				<Tab label="Твиты и ответы" />
				<Tab label="Медиа" />
				<Tab label="Нравится" />
			</Tabs>

			<div className="user__tweets">
				{loadingTweets ?
					(<div className={styles.tweetsCentred}>
						<CircularProgress />
					</div>) :
					(tweets.map((tweet) => (
						<Tweet key={tweet._id} {...tweet} styles={styles} />
					)))
				}
			</div>
		</Paper>
	)
}



export default MyProfile
