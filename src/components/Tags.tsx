import React  from 'react'
import { Divider, List, ListItem, ListItemText, Paper, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import {  useSelector } from 'react-redux';
import { selectTagsItems, selectTagsLoaded } from '../redux/ducks/tags/selectorsTags';
import { Tag } from '../redux/ducks/tags/stateTypes'
import { useHomeStyles } from '../pages/Home/useHomeStyles';
 
interface ITags {
	styles: ReturnType< typeof useHomeStyles >
}


const Tags: React.FC<ITags> = ({ styles }) => {
	const tags = useSelector(selectTagsItems)
	const isLoadedTags = useSelector(selectTagsLoaded )


	if ( !isLoadedTags ) {
		return <p>  </p>
	}

	return (
		<Paper className={styles.rightSideBlock}>
			 <Paper className={styles.rightSideBlockHeader} variant="outlined">
        <b>Актуальные темы</b>
      </Paper>
			<List>
				{ tags && tags.map(( tag: Tag) => (
						<React.Fragment key={ tag._id }>
            <ListItem className={styles.rightSideBlockItem}>
              <Link to={ `home/tags/${ tag.name }` }>
                <ListItemText
                  primary={ tag.name }
                  secondary={
                    <Typography component="span" variant="body2" color="textSecondary">
                      Твитов: { tag.count }
                    </Typography>
                  }
                />
              </Link>
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
				))}
			</List>
		</Paper>
	)
}


export default Tags
