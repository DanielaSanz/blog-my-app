import React from "react";
import { ThemeProvider} from '@material-ui/core';
import theme from './theme';
import Home from './views/Home';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <Home/>
    </ThemeProvider>
  );
}

export default App;