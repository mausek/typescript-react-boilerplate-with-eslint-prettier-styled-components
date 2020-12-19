import React from 'react'
import { useTranslation } from 'react-i18next'

const App: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div>
      {t('helloWorld')}
    </div>  
  );
}

export default App
