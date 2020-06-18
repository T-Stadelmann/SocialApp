import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {createGlobalStyle} from 'styled-components';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import store from './store/index.js';

import SignIn  from '../src/containers/SignIn';
import SignUp from '../src/containers/SignUp';
import Feed from '../src/containers/Feed';
import SignUpConfirm from '../src/containers/SignUpConfirm';
import SignUpVerify from '../src/containers/SignUpVerify';
import Friends from '../src/containers/Friends';
import UserProfile from '../src/containers/UserProfile';

import {signInAction} from "./store/actions/signInAction";
import HOCWrapper from './HOC/HOCWrapper';
import HOCVerify from './HOC/HOCVerify';

const token = localStorage.getItem('token');
if (token) {
    store.dispatch(signInAction(token))
}

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    height: 100vh;
    width: 100%;
  }
  * {
    margin: 0;
    padding: 0;
  }
`

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
    <Switch>
      <Route exact path="/signin" component={HOCWrapper(SignIn)} />
      <Route exact path="/signup" component={SignUp} />
      <Route exact path="/" component={HOCWrapper(Feed)} />
      <Route exact path="/friends" component={Friends} />
      <Route exact path="/confirm" component={SignUpConfirm}/>
      <Route exact path="/verify" component={HOCVerify(SignUpVerify)} />
      <Route exact path="/profile" component={UserProfile} />
    </Switch>
    </BrowserRouter>
    <GlobalStyle /> 
  </Provider>,
  document.getElementById('root')
)