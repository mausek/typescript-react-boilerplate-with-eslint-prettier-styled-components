import './i18n'

import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline';
import App from './App'
import Theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading</div>}>
      <ThemeProvider theme={Theme}>
        <CssBaseline />
        <App />
      </ThemeProvider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);