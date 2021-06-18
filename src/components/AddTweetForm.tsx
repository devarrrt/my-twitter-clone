import React, { useState } from 'react'
import { Alert } from '@material-ui/lab';
import { Avatar, CircularProgress, TextareaAutosize, Button } from '@material-ui/core';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
import { useHomeStyles } from '../pages/Home/useHomeStyles';
import { selectAddFormStatus } from '../redux/ducks/tweets/selectorsTweets';
import { FetchAddTweetAction } from './../redux/ducks/tweets/actionsTweets';
import { AddFormStatus } from '../redux/ducks/tweets/stateTypes';



interface IAddTweetForm {
	styles: ReturnType<typeof useHomeStyles>
	maxRows?: number
}

const MAX_LENGTH = 280


const AddTweetForm: React.FC<IAddTweetForm> = ({ styles, maxRows }) => {
	const [value, setValue] = useState<string>("")
	const textLimitPercent = Math.round((value.length / 280) * 100);
	const textCount = MAX_LENGTH - value.length
	const dispatch = useDispatch()
	const addFormStatus = useSelector(selectAddFormStatus)


	const handleChangeValue = (e: React.FormEvent<HTMLTextAreaElement>): void => {
		if (e.currentTarget) {
			setValue(e.currentTarget.value)
		}
	}

	const addTweet = () => {
		dispatch(FetchAddTweetAction(value))
		setValue('')
	}

	return (
		<div>
			<div className={styles.addFormBody}>
				<Avatar className={styles.tweetAvatar} alt={`Аватарка пользователя UserAvatar`} />
				<TextareaAutosize
					placeholder="Что происходит?"
					value={value}
					onChange={handleChangeValue}
					className={styles.addFormTextarea}
					rowsMax={maxRows}
				/>
			</div>
			<div className={styles.addFormBottom}>
				<div className={classNames(styles.tweetFooter, styles.addFormBottomActions)}>
				</div>

				<div className={styles.addFormBottomRight}>
					{value && (
						<>
							<span>{textCount}</span>
							<div className={styles.addFormCircleProgress}>
								<CircularProgress
									variant="static"
									size={20}
									thickness={5}
									value={value.length >= MAX_LENGTH ? 100 : textLimitPercent}
									style={value.length >= MAX_LENGTH ? { color: 'red' } : undefined}
								/>
								<CircularProgress
									style={{ color: 'rgba(0, 0, 0, 0.1)' }}
									variant="static"
									size={20}
									thickness={5}
									value={100}
								/>
							</div>
						</>
					)}
					<Button
						disabled={!value || value.length >= MAX_LENGTH}
						color="primary"
						variant="contained"
						onClick={addTweet}
					>
						{addFormStatus === AddFormStatus.LOADING ? (
							<CircularProgress color="inherit" size={16} />
						) : "Твитнуть"}
					</Button>
				</div>
			</div>
			{addFormStatus === AddFormStatus.ERROR && (
				<Alert severity="error">
					Ошибка при добавлении твита{' '}
					<span aria-label="emoji-plak" role="img">
						😞
					</span>
				</Alert>
			)}
		</div>
	)
}

export default AddTweetForm
