import React, { useState } from 'react'
import { Alert } from '@material-ui/lab';
import { Avatar, CircularProgress, TextareaAutosize, Button } from '@material-ui/core';
import classNames from 'classnames';
import { useDispatch, useSelector } from 'react-redux';
// import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
// import AssignmentOutlinedIcon from '@material-ui/icons/AssignmentOutlined';

import { useHomeStyles } from '../pages/Home/useHomeStyles';
import { selectAddFormStatus } from '../redux/ducks/tweets/selectorsTweets';
import { FetchAddTweetAction, SetAddFormStatusAction } from './../redux/ducks/tweets/actionsTweets';
import { AddFormStatus, LoadingStatus } from '../redux/ducks/tweets/stateTypes';
import UploadImages from './UploadImages';
import { uploadImage } from './../utils/uploadImage';




interface IAddTweetForm {
	styles: ReturnType<typeof useHomeStyles>
	maxRows?: number
}

export interface ImageObj {
  blobUrl: string;
  file: File;
}


const MAX_LENGTH = 280

const AddTweetForm: React.FC<IAddTweetForm> = ({ styles, maxRows }) => {
	const [value, setValue] = useState<string>("")
	const [images, setImages] = React.useState<ImageObj[]>([])

	const textLimitPercent = Math.round((value.length / 280) * 100);
	const textCount = MAX_LENGTH - value.length
	const dispatch = useDispatch()
	const addFormStatus = useSelector(selectAddFormStatus)

	const handleChangeValue = (e: React.FormEvent<HTMLTextAreaElement>): void => {
		if (e.currentTarget) {
			setValue(e.currentTarget.value)
		}
	}

	const addTweet = async (): Promise<void> => {
		try {
			let imagesRes = []
			dispatch( SetAddFormStatusAction( AddFormStatus.LOADING ))
			for ( let i = 0; i < images.length; i++ ) {
				const file = images[0].file
				const { url } = await uploadImage( file )
				imagesRes.push(url)
			}
			dispatch(FetchAddTweetAction({value, images: imagesRes }))
			setValue('')
			setImages([])
		} catch (error) {
			console.log(error)
		} finally {
			dispatch( SetAddFormStatusAction( AddFormStatus.NEVER ))
		}
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
		

					{/* <IconButton color="primary">
						<InsertEmoticonIcon color="primary"/>  
						</IconButton>

						<IconButton color="primary">
							<AssignmentOutlinedIcon color="primary"/> 
						</IconButton> */}

						<UploadImages 
						images={images} 
						onChangeImages={setImages} />			
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
