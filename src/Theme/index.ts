import grey from '@material-ui/core/colors/grey';
import { createMuiTheme } from '@material-ui/core/styles'

const theme = createMuiTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        body: {
          background: grey[100],
        }
      },
    },
  },
})

export default theme