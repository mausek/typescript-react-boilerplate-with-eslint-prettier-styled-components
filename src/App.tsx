import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
// Components
import { Header } from './components'
import { Navigation } from './components'
// Constants
import { Routes } from './routes'

const useStyles = makeStyles({
  main: {
    paddingTop: '30px'
  }
})

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <BrowserRouter>
      <Header />
      <Navigation />
      <Switch>
        <Container maxWidth='md' className={classes.main}>
          {Routes.map(route => (
            <Route key={route.key} exact path={route.path}>
              {route.component}
            </Route>
          ))}
          <Redirect from='/' to='sign-in' />
        </Container>
      </Switch>
    </BrowserRouter>
  )
}

export default App
