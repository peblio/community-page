import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, Router } from 'react-router';
import { Route } from 'react-router-dom';
import './index.css';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import * as serviceWorker from './utils/serviceWorker';

import About from './pages/About/About';
import Home from './pages/Home/Home';
import Privacy from './pages/Privacy/Privacy';
import Studio from './pages/Studio/Studio';
import Terms from './pages/Terms/Terms';

import rootReducer from './reducers/rootReducer';
import history from './utils/history';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; //eslint-disable-line

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk)
  )
);

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <div>
        <Route exact path="/" component={Home} />
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/terms-of-use" component={Terms} />
          <Route path="/privacy-policy" component={Privacy} />
          <Route path="/studio/:tag" component={Studio} />
        </Switch>
      </div>
    </Router>
  </Provider>,
  document.getElementById('root') //eslint-disable-line
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
