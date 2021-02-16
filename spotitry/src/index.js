import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './domains/Home'
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route ,Switch} from 'react-router-dom';
import Store from './store'
import {Provider} from 'react-redux'

ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter>
        <Switch>
          <Route
            exact path='/'>
            <App/>
          </Route>
          <Route
            exact path='/home'
          >
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
