import React from 'react'
import { NavLink } from 'react-router-dom'
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer'
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Link from '@material-ui/core/Link'
import Box from '@material-ui/core/Box'
import Divider from '@material-ui/core/Divider'
import ListItem from '@material-ui/core/ListItem'
// import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Typography from '@material-ui/core/Typography'
import Avatar from '@material-ui/core/Avatar'
// Contexts
import { AppContext } from '../../contexts/app'
// Constants
import { Routes as Nav } from '../../routes'

const useStyles = makeStyles(() => 
  createStyles({
    drawer: {
      paddingTop: 105
    },
    box: {
      paddingRight: 16,
      paddingBottom: 32,
      paddingLeft: 16,
    },
    avatar: {
      marginBottom: 16,
    },
    list: {
      width: 350
    }
  })
)

const Navigation: React.FC = () => {
  const { appState, appDispatch } = React.useContext(AppContext)
  const { showNav } = appState
  const classes = useStyles()
  const toggleNav = React.useCallback(() => appDispatch({ type: 'toggleNav' }), [])
  return (
    <SwipeableDrawer
      anchor='left'
      open={showNav}
      onClose={toggleNav}
      onOpen={toggleNav}
    >
      <div role="presentation" onClick={toggleNav} className={classes.drawer}>
        <Box className={classes.box}>
          <Avatar className={classes.avatar}>A</Avatar>
          <Typography gutterBottom>WELCOME TO POC-130</Typography>
          <Typography color='textSecondary' variant='body2'>Alen Breznik</Typography>
        </Box>
        <Divider />
        <List className={classes.list}>
        {Nav.map((item) => (
          <Link key={item.key} component={NavLink} to={item.path} color='textPrimary'>
            <ListItem button>
              <ListItemText>{item.title}</ListItemText>
            </ListItem>
          </Link>
        ))}
        </List>
        <Divider />
      </div>
    </SwipeableDrawer>
  )
}

export default Navigation