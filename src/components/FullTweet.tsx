import React from 'react'
import { Link, useParams } from 'react-router-dom';
import cn from 'classnames'
import { Avatar, Paper, Typography, IconButton, Divider, CircularProgress } from '@material-ui/core';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import format from 'date-fns/format';
import ruLang from 'date-fns/locale/ru';
import { useDispatch, useSelector } from 'react-redux';

import { useHomeStyles } from '../pages/Home/useHomeStyles';
import { selectTweetData } from '../redux/ducks/tweet/selectorsTweet';
import { selectTweetLoading } from './../redux/ducks/tweet/selectorsTweet';
import { FetchTweetDataAction, SetTweetDataAction } from './../redux/ducks/tweet/actionsTweet';
import Tweet from './Tweet';




interface IFullTweet { }



const FullTweet: React.FC<IFullTweet> = (): React.ReactElement | null => {

	const styles = useHomeStyles()
	const dispatch = useDispatch()
	const params: { id?: string } = useParams()
	const id = params.id
	const tweetData = useSelector(selectTweetData)
	const isLoading = useSelector(selectTweetLoading)


	React.useEffect(() => {
		if (id) {
			dispatch(FetchTweetDataAction(id))
		}

		return () => {
			dispatch(SetTweetDataAction(undefined))
		};
	}, [dispatch, id])

	if (isLoading) {
		return (
			<div className={styles.tweetsCentred}>
				<CircularProgress />
			</div>

		)
	}


	if (tweetData) {
		return (
			<>
				<Paper className={styles.fullTweet}>
					<div className={cn(styles.tweetsHeaderUser)}>
						<Avatar
							className={styles.tweetAvatar}
							alt="avatar"
							src={""}
						/>
						<Typography>
							<Link
								className={styles.linkNameUser}
								to={`/user/`}>
								<b> {tweetData.user.fullname} </b>&nbsp;
							</Link>
							<div>
								<span className={styles.tweetUserName}>
									@{tweetData.user.username}</span>&nbsp;
							</div>
						</Typography>
					</div>
					<Typography className={styles.fullTweetText} gutterBottom>
						{tweetData.text}
						<div className="tweet-images">

						</div>
					</Typography>


					<Typography>
						<span className={styles.tweetUserName}>
						{format(new Date(tweetData.createdAt), 'H:mm', { locale: ruLang })} ·{' '}	 &nbsp;
						</span>
						<span className={styles.tweetUserName}>
						{format(new Date(tweetData.createdAt), 'dd MMM yyyy г.', { locale: ruLang })}
						</span>
					</Typography>

					<div className={cn(styles.tweetFooter, styles.fullTweetFooter)}>
						<IconButton>
							<CommentIcon style={{ fontSize: 25 }} />
						</IconButton>
						<IconButton>
							<RepostIcon style={{ fontSize: 25 }} />
						</IconButton>
						<IconButton>
							<LikeIcon style={{ fontSize: 25 }} />
						</IconButton>
						<IconButton>
							<ShareIcon style={{ fontSize: 25 }} />
						</IconButton>
					</div>
				</Paper>
				<Divider />

				<Tweet
					_id="1"
					text="Any more to move? You might need to adjust your stretching routines!"
					createdAt={new Date().toString()}
					user={{
						fullname: 'Arlene Andrews',
						username: 'ArleneAndrews_1',
					}}
					styles={styles}
				/>

			</>
		)
	} 
	return null
}


export default FullTweet

