import React, { useState } from 'react'
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import PeopleIcon from '@material-ui/icons/PeopleOutline';
import MessageIcon from '@material-ui/icons/ModeCommentOutlined';
import { Typography, Button } from '@material-ui/core';

import { useStylesSignIn } from './stylesSignIn'
import LoginModal from './components/LoginModal';
import RegisterModal from './components/RegisterModal';







const SignIn = () => {
	const styles = useStylesSignIn()
	const [ visibleModal, setVisibleModal ] = useState<'register' | 'login'>()

	const handleCloseModal = ( ) => {
		setVisibleModal( undefined )
	}
	const  handleClickOpenSignUp = ( ) => {
		setVisibleModal('register')
	}
	const handleClickOpenSignIn = ( ) => {
		setVisibleModal('login')
	}



	return (
		<div className={styles.wrapper} >

			<section className={styles.blueSide}>
				<TwitterIcon color="primary" className={styles.blueSideBigIcon} />
				<ul className={styles.blueSideListInfo}>
					<li className={styles.blueSideListInfoItem}>
						<Typography variant="h6">
							<SearchIcon className={styles.blueSideListInfoIcon} />
							Читайте о том, что вам интересно.
						</Typography>
					</li>
					<li className={styles.blueSideListInfoItem}>
						<Typography variant="h6">
							<PeopleIcon className={styles.blueSideListInfoIcon} />
							Узнайте, о чем говорят в мире.
						</Typography>
					</li>
					<li className={styles.blueSideListInfoItem}>
						<Typography variant="h6">
							<MessageIcon className={styles.blueSideListInfoIcon} />
							Присоединяйтесь к общению.
						</Typography>
					</li>
				</ul>
			</section>

			<section className={styles.loginSide}>
				<div className={styles.loginSideWrapper}>
					<TwitterIcon color="primary" className={styles.loginSideTwitterIcon} />
					<Typography className={styles.loginSideTitle} gutterBottom variant="h4">
						Узнайте, что происходит в мире прямо сейчас
					</Typography>
					<Typography>
						<b>Присоединяйтесь к Твиттеру прямо сейчас!</b>
					</Typography>
					<br />

					<Button
						onClick={handleClickOpenSignUp}
						style={{ marginBottom: 20 }}
						variant="contained"
						color="primary"
						fullWidth>
						Зарегистрироваться
					</Button>

					<Button
						onClick={handleClickOpenSignIn}
						variant="outlined"
						color="primary"
						fullWidth>
						Войти
					</Button>

					<LoginModal open={visibleModal === 'login'}
						onCloseModal={handleCloseModal} />
					<RegisterModal open={visibleModal === 'register'}
						onCloseModal={handleCloseModal} />
				</div>
			</section>

		</div>
	)
}

export default SignIn
