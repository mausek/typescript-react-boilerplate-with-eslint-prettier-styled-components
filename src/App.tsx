import React from 'react'
import { useTranslation } from 'react-i18next'
import { Box, Text } from 'rebass'

const App: React.FC = () => {
  const { t } = useTranslation()
  return (
    <Box>
      <Text>{t('helloWorld')}</Text>
    </Box>  
  );
}

export default App
