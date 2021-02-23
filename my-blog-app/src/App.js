import React from "react";
import { Router } from "react-router-dom";
import { createBrowserHistory } from "history";
import Routes from "./Routes";
import { ThemeProvider} from '@material-ui/core';
import theme from './theme';

const browserHistory = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
        <Routes/>
      </Router>
    </ThemeProvider>
  );
}

export default App;