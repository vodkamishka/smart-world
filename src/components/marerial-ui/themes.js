import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import grey from '@material-ui/core/colors/grey';
import green from '@material-ui/core/colors/green';

import yellow from '@material-ui/core/colors/yellow';



export const theme = createMuiTheme({
  palette: {
    primary: {
        main: '#eceff1',
      },
  }
  
});

export const themeCheckbox = createMuiTheme({
  palette: {
    primary: green,
    
  },
});
