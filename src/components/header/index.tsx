import React from 'react'
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
// Icons
import MenuIcon from '@material-ui/icons/Menu'
// Contexts
import { AppContext } from '../../contexts/app'

const Header: React.FC = () => {
  const { appDispatch } = React.useContext(AppContext)
  return(
    <AppBar position="static">
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
  )
}

export default Header