import React from 'react'
import { Paper, List, ListItemText, Typography, Avatar, ListItemAvatar, Button, ListItem } from '@material-ui/core';
import PersonAddIcon from '@material-ui/icons/PersonAddOutlined'
import { useHomeStyles } from '../pages/Home/useHomeStyles';



interface IUsers {
	styles: ReturnType<typeof useHomeStyles>
}



const Users: React.FC<IUsers> = ({ styles }) => {
	return (
		<Paper className={styles.rightSideBlock}>
			<Paper className={styles.rightSideBlockHeader} variant="outlined">
				<b>Кого читать</b>
			</Paper>
			<List>
				<ListItem className={styles.rightSideBlockItem}>
					<ListItemAvatar>
						<Avatar
							alt="Remy Sharp"
							src="https://pbs.twimg.com/profile_images/1267938486566428673/US6KRPbA_normal.jpg"
						/>
					</ListItemAvatar>
					<ListItemText
						primary="Dock Of Shame"
						secondary={
							<Typography component="span" variant="body2" color="textSecondary">
								@FavDockOfShame
                  </Typography>
						}
					/>
					<Button color="primary">
						<PersonAddIcon />
					</Button>
				</ListItem>
			</List>
		</Paper>
	)
}



export default Users
