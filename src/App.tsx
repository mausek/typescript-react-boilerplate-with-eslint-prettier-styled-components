import React from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Container from '@material-ui/core/Container'
import { makeStyles } from '@material-ui/core/styles'
// Components
import { Header } from './components'
// Constants
import { Routes } from './routes'

const useStyles = makeStyles({
  main: {
    paddingTop: 94
  }
})

const App: React.FC = () => {
  const classes = useStyles()
  return (
    <BrowserRouter>
      <Header />
      <Container maxWidth='md' className={classes.main}>
        <Switch>
            {Routes.map(route => (
              <Route key={route.key} exact path={route.path}>
                {route.component}
              </Route>
            ))}
            <Redirect from='/' to='sign-in' />
        </Switch>
      </Container>
    </BrowserRouter>
  )
}

export default App
