import React, { useEffect } from 'react'
import { Route } from 'react-router-dom';
import { CircularProgress, Paper, Typography } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';

import { BackButton, AddTweetForm, Tweet, FullTweet } from '../../components/index'
import { useHomeStyles } from './useHomeStyles';
import { selectTweetsItems, selectTweetsLoading } from '../../redux/ducks/tweets/selectorsTweets';
import { FetchTweetsAction } from './../../redux/ducks/tweets/actionsTweets';
import { FetchTagsAction } from './../../redux/ducks/tags/actionsTags';



const Home = () => {
	const styles = useHomeStyles()
	const dispatch = useDispatch()
	const tweets = useSelector(selectTweetsItems)
	const isLoadingTweets = useSelector( selectTweetsLoading ) 

	useEffect(() => {
		dispatch(FetchTweetsAction())
		dispatch(FetchTagsAction())
	}, [dispatch])



	return (
		<Paper className={styles.tweetsWrapper} variant="outlined">

			<Paper className={styles.tweetsHeader} variant="outlined">
				<Route path="/home/:any">
					<BackButton />
				</Route>
				<Route path={['/home', '/home/search']} exact>
					<Typography variant="h6">Твиты</Typography>
				</Route>
				<Route path="/home/tweet">
					<Typography variant="h6">Твитнуть</Typography>
				</Route>
			</Paper>

			<Route path={['/home', '/home/search']} exact>
				<Paper>
					<div className={styles.addForm}>
						<AddTweetForm styles={styles} />
					</div>
					<div className={styles.addFormBottomLine} />
				</Paper>
			</Route>

			<Route path="/home" exact>
				{
						isLoadingTweets ? <div className={ styles.tweetsCentred }> <CircularProgress /> </div> :
						tweets && tweets.map(tweet => (<Tweet styles={styles} {...tweet}  key={tweet._id} />))
				}
			</Route>

			<Route path='/home/tweet/:id' component= { FullTweet } exact />


		</Paper>
	)
}

export default Home
