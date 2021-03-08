import React from 'react';
import { Router } from 'react-router-dom';
import { createBrowserHistory } from 'history';
import Routes from './Routes';
import { ThemeProvider} from '@material-ui/core';
import theme from './theme';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClient, QueryClientProvider } from 'react-query';

const browserHistory = createBrowserHistory();
const queryClient = new QueryClient();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router history={browserHistory}>
          <Routes/>
        </Router> 
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>  
    </ThemeProvider>
  );
}

export default App;