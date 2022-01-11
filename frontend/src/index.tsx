import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {Provider} from 'react-redux'
import {createStore,applyMiddleware} from 'redux'
import {composeWithDevTools} from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'
import {BrowserRouter as Router} from 'react-router-dom'
import reducers from './Reducers'
import EmployeeSaga from './Sagas/EmployeeSaga'

const sagaMiddleware=createSagaMiddleware()

const store=createStore(
  reducers,composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(EmployeeSaga)

ReactDOM.render(
  <Router>
      <Provider store={store}>
          <React.StrictMode>
            <App />
          </React.StrictMode>
      </Provider>
  </Router>
,
  document.getElementById('root')
);


