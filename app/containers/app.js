'use strict'

import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import * as reducers from '../reducer'
import CounterApp from './CounterApp'

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer)

export default class App extends Component {
  render () {
    return (<Provider store = {store}>
              <CounterApp />
            </Provider>)
  }

}
