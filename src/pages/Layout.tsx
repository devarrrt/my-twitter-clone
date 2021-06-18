import React from 'react'
import { Container, Grid, InputAdornment  } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/SearchOutlined';
import { useHomeStyles } from './Home/useHomeStyles';
import { SideMenu, SearchTextField, Tags, Users } from '../components/index'


interface ILayout {
	children: React.ReactNode;
 }



const Layout: React.FC<ILayout> = ({ children }) => {
	const styles = useHomeStyles()


	return (
		<Container className={styles.wrapper} maxWidth="lg">
			<Grid container spacing={3}>
				<Grid sm={1} md={3} item>
					<SideMenu styles={styles} />
				</Grid>
				<Grid sm={8} md={6} item>
          {children}
        </Grid>
				<Grid sm={3} md={3} item>
          <div className={styles.rightSide}>
            <SearchTextField
              variant="outlined"
              placeholder="Поиск по Твиттеру"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon />
                  </InputAdornment>
                ),
              }}
              fullWidth
            />
            <Tags styles={styles}  /> 
            <Users styles={ styles } />
          </div>
        </Grid>


			</Grid>
		</Container>
	)
}



export default Layout
