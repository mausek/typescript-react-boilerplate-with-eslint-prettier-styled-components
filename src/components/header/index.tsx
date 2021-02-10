import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { makeStyles, createStyles } from '@material-ui/core/styles'
// Icons
import MenuIcon from '@material-ui/icons/Menu'
// Components
import Navigation from '../navigation'
// Contexts
import { AppContext } from '../../contexts/app'

const useStyles = makeStyles(() =>
  createStyles({
    appBar: {
      zIndex: 1400,
    }
  })
)

const Header: React.FC = () => {
  const { appDispatch } = React.useContext(AppContext)
  const classes = useStyles()
  return(
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={() => appDispatch({ type: 'toggleNav' })}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6">
            POC-130 / Data on demand
          </Typography>
        </Toolbar>
      </AppBar>
      <Navigation />
    </>
  )
}

export default Header