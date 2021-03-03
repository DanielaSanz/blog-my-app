import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import { ThemeProvider} from '@material-ui/core';
import theme from './theme';
import PostsProvider from "./context/posts/posts.provider";

const browserHistory = createBrowserHistory();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <PostsProvider>
        <Router history={browserHistory}>
          <Routes/>
        </Router> 
      </PostsProvider>  
    </ThemeProvider>
  );
}

export default App;