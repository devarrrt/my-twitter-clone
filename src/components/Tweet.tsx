import React from 'react'
import classNames from 'classnames';
import CommentIcon from '@material-ui/icons/ChatBubbleOutlineOutlined';
import RepostIcon from '@material-ui/icons/RepeatOutlined';
import LikeIcon from '@material-ui/icons/FavoriteBorderOutlined';
import ShareIcon from '@material-ui/icons/ReplyOutlined';
import { Link } from 'react-router-dom';
import { Avatar, Paper, IconButton, Typography } from '@material-ui/core';


import { useHomeStyles } from './../pages/Home/useHomeStyles';



interface ITweet {
	styles: ReturnType<typeof useHomeStyles>,
	_id: string;
  text: string;
  createdAt?: string;
  images?: string[];
}

const Tweet: React.FC<ITweet> = ({ styles, _id, text }) => {
	return (
		<Link className={styles.tweetWrapper} to={`/home/tweet/${_id}`}>
			<Paper className={classNames(styles.tweet, styles.tweetsHeader)} variant="outlined">
				<Avatar 
				className={styles.tweetAvatar}
					alt={`Аватарка пользователя`} />
				<div className={styles.tweetContent}>
					<div className={styles.tweetHeader}>
						<div>
							<b>user.fullname</b>&nbsp;
              <span className={styles.tweetUserName}>@user.username</span>&nbsp;
              <span className={styles.tweetUserName}>·</span>&nbsp;
              {/* <span className={styles.tweetUserName}>{formatDate(new Date(createdAt))}</span> */}
						</div>
					</div>
					{/* <IconButton
                aria-label="more"
                aria-controls="long-menu"
                aria-haspopup="true"
                >
                <MoreVertIcon />
              </IconButton> */}
					<Typography variant="body1" gutterBottom>
						{text}
          </Typography>

					<div className={styles.tweetFooter}>
						<div>
							<IconButton>
								<CommentIcon style={{ fontSize: 20 }} />
							</IconButton>
							<span>1</span>
						</div>
						<div>
							<IconButton>
								<RepostIcon style={{ fontSize: 20 }} />
							</IconButton>
						</div>
						<div>
							<IconButton>
								<LikeIcon style={{ fontSize: 20 }} />
							</IconButton>
						</div>
						<div>
							<IconButton>
								<ShareIcon style={{ fontSize: 20 }} />
							</IconButton>
						</div>
					</div>
				</div>
			</Paper>
		</Link>
	)
}

export default Tweet
