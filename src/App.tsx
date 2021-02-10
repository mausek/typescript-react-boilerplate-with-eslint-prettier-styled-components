import React from 'react'
import { BrowserRouter } from 'react-router-dom'
// Hooks
import { useTranslation } from 'react-i18next'
// Components


const App: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div>hello world!</div>
  );
}

export default App
