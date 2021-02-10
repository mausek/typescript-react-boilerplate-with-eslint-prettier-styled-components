import './i18n'

import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import React from 'react'
import ReactDOM from 'react-dom'

import App from './App'
import Theme from './theme'
import AppContextProvider from './contexts/app'

const Providers: React.FC = ({ children }) => (
  <ThemeProvider theme={Theme}>
    <AppContextProvider>
      {children}
    </AppContextProvider>
  </ThemeProvider>
)

ReactDOM.render(
  <React.Suspense fallback={<div>Loading</div>}>
    <Providers>
      <CssBaseline />
      <App />
    </Providers>
  </React.Suspense>,
  document.getElementById('root')
)

