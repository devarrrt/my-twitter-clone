import React, { useState } from 'react'
import { Button, Hidden, IconButton, Typography } from '@material-ui/core';
import TwitterIcon from '@material-ui/icons/Twitter';
import SearchIcon from '@material-ui/icons/Search';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MessageIcon from '@material-ui/icons/EmailOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ListIcon from '@material-ui/icons/ListAltOutlined';
import HomeIcon from '@material-ui/icons/HomeOutlined';
import UserIcon from '@material-ui/icons/PermIdentityOutlined';
import CreateIcon from '@material-ui/icons/Create';
import { Link } from 'react-router-dom';

import ModalBlock from './ModalBlock';
import AddTweetForm from './AddTweetForm';
import { useHomeStyles } from '../pages/Home/useHomeStyles';




interface ISideMenu {
	styles: ReturnType<typeof useHomeStyles>
}


const SideMenu: React.FC<ISideMenu> = ({ styles }) => {
const [visibleAddTweet, setVisibleAddTweet] = useState<boolean>(false)


const handleClickOpenAddTweet = ( ) => {
	setVisibleAddTweet( true )
}
const onCloseAddTweet = () => {
	setVisibleAddTweet(false)
}



	return (
		<>
			<ul className={styles.sideMenuList}>

				<li className={styles.sideMenuListItem}>
					<Link to="/home" >
						<IconButton className={styles.logo} aria-label="" color="primary">
							<TwitterIcon className={styles.logoIcon} />
						</IconButton>
					</Link>
				</li>

				<li className={styles.sideMenuListItem}>
					<Link to="/home">
						<div>
							<HomeIcon className={styles.sideMenuListItemIcon} />
							<Hidden smDown>
								<Typography className={styles.sideMenuListItemLabel} variant="h6">
									Главная
                </Typography>
							</Hidden>
						</div>
					</Link>
				</li>

				<li className={styles.sideMenuListItem}>
				<div>
            <SearchIcon className={styles.sideMenuListItemIcon} />
            <Hidden smDown>
              <Typography className={styles.sideMenuListItemLabel} variant="h6">
                Поиск
              </Typography>
            </Hidden>
          </div>
				</li>

				<li className={styles.sideMenuListItem}>
          <div>
            <NotificationIcon className={styles.sideMenuListItemIcon} />
            <Hidden smDown>
              <Typography className={styles.sideMenuListItemLabel} variant="h6">
                Уведомления
              </Typography>
            </Hidden>
          </div>
        </li>

        <li className={styles.sideMenuListItem}>
          <div>
            <MessageIcon className={styles.sideMenuListItemIcon} />
            <Hidden smDown>
              <Typography className={styles.sideMenuListItemLabel} variant="h6">
                Сообщения
              </Typography>
            </Hidden>
          </div>
        </li>

        <li className={styles.sideMenuListItem}>
          <div>
            <BookmarkIcon className={styles.sideMenuListItemIcon} />
            <Hidden smDown>
              <Typography className={styles.sideMenuListItemLabel} variant="h6">
                Закладки
              </Typography>
            </Hidden>
          </div>
        </li>

        <li className={styles.sideMenuListItem}>
          <div>
            <ListIcon className={styles.sideMenuListItemIcon} />
            <Hidden smDown>
              <Typography className={styles.sideMenuListItemLabel} variant="h6">
                Список
              </Typography>
            </Hidden>
          </div>
        </li>

        <li className={styles.sideMenuListItem}>
            <div>
              <UserIcon className={styles.sideMenuListItemIcon} />
              <Hidden smDown>
                <Typography className={styles.sideMenuListItemLabel} variant="h6">
                  Профиль
                </Typography>
              </Hidden>
            </div>
        </li>

				<li className={styles.sideMenuListItem}>
				<Button
				onClick={handleClickOpenAddTweet}
            className={styles.sideMenuTweetButton}
            variant="contained"
            color="primary"
            fullWidth>
            <Hidden smDown>Твитнуть</Hidden>
            <Hidden mdUp>
              <CreateIcon />
            </Hidden>
          </Button>
					<ModalBlock  
					title="Твитнуть"
					visible={ visibleAddTweet } onClose={ onCloseAddTweet }>
						<AddTweetForm maxRows={ 15 } styles={ styles }  />
					</ModalBlock>
				</li>
			</ul>
		</>
	)
}


export default SideMenu
