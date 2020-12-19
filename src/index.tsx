import './i18n'

import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Reset } from 'styled-reset'

import App from './App'
import { ReactComponent as Loader } from './Assets/loader.svg';
import { FallbackWrapper } from './index.css'
import * as serviceWorker from './serviceWorker'
import theme, { GlobalStyle } from './Theme'

const Fallback: React.FC = () => (
  <FallbackWrapper>
    <Loader />
  </FallbackWrapper>
)

ReactDOM.render(
  <React.StrictMode>
    <React.Suspense fallback={<Fallback />}>
      <ThemeProvider theme={theme}>
        <Reset />
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </React.Suspense>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
