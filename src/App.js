import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import User from './views/User';
import Landing from './views/Landing';
import Post from './views/Post';
import NotFound from './views/NotFound';
import Header from './components/Header';
import { ThemeProvider } from 'styled-components';

const theme = {
  dark: '#252525',
  clear: 'white',
};

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/user/:userId" component={User} />
          <Route path="/post/:postId" component={Post} />
          <Route default component={NotFound} />
        </Switch>
      </div>
    </ThemeProvider>
  );
};

export default App;
