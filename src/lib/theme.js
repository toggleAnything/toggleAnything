import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#004261',
    },
    secondary: {
      main: blue[900],
      light: green[400],
    },
  },
  typography: {
    fontFamily: '"Lato", sans-serif',
  },
});

export default theme;
