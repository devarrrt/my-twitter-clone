import React, { useState } from 'react'
import { useHomeStyles } from './../pages/Home/useHomeStyles';
import { Avatar, colors, Typography, Menu, MenuItem } from '@material-ui/core';
import ArrowBottomIcon from '@material-ui/icons/KeyboardArrowDown';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { selectUserData } from '../redux/ducks/user/selectorsUser';
import { SignOutAction } from './../redux/ducks/user/actionsUser';





interface IUserSideProfile {
	styles: ReturnType<typeof useHomeStyles>
}




const UserSideProfile: React.FC<IUserSideProfile> = ({ styles }) => {
const dispatch = useDispatch()
const userData = useSelector( selectUserData )
const [visiblePopup, setVisiblePopup] = useState<null | HTMLElement>(null)
const open = Boolean(visiblePopup)



const handleOpenPopup = (e: React.MouseEvent<HTMLDivElement, MouseEvent>): void => {
	setVisiblePopup( e.currentTarget )
}
const handleClosePopup = () => {
	setVisiblePopup( null )
}
const handleSignOut = () => {
	window.localStorage.removeItem('token')
	dispatch(SignOutAction())
}
if (!userData) {
	return null
}






	return (
		<>
			<div className={styles.sideProfile} onClick={ handleOpenPopup } >
				<Avatar />
				<div className={styles.sideProfileInfo}>
			  <b>{userData.fullname}</b>
					<Typography style={{ color: colors.grey[500] }}>@{userData.username}</Typography>
				</div>
				<ArrowBottomIcon />
			</div>
			<Menu
				classes={{
					paper: styles.profileMenu,
				}}
				anchorEl={ visiblePopup }
				open={ open }
				onClose={ handleClosePopup }
				keepMounted
			>
				<Link to={`/user/${userData._id}`}>
					<MenuItem onClick={handleClosePopup}>
						Мой профиль
					</MenuItem>
				</Link>
				<MenuItem onClick={handleSignOut}>Выйти</MenuItem>
			</Menu>
		</>
	)
}



export default UserSideProfile
