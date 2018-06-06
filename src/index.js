import React from 'react';
import ReactDOM from 'react-dom';
import createSagaMiddleware from 'redux-saga'
import { applyMiddleware, compose, createStore } from 'redux'
import { Provider } from 'react-redux'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import rootReducer from './reducers';
import sagas from './sagas'
import { App } from './components'
import './index.css'

const sagaMiddleware = createSagaMiddleware()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const middlewares = [ sagaMiddleware ]

const enhancers = composeEnhancers(
  applyMiddleware(...middlewares),
)

const store = createStore(rootReducer, enhancers)

sagaMiddleware.run(sagas)

const theme = createMuiTheme()

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <Provider store={store}>
      <App />
    </Provider>
  </MuiThemeProvider>,
  document.getElementById('root')
);
