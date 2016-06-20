'use strict'

import React, { Component } from 'react'
import { View, Text } from 'react-native'

import { createStore, applyMiddleware, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

// 引入reducer 目录下所有export 到reducers
import * as reducers from '../reducer'
import CounterApp from './CounterApp'

// applyMiddleware、thunk
// applyMiddleware来自redux可以包装 store 的 dispatch()

// thunk作用使action创建函数可以返回一个function代替一个action对象

//applyMiddleware来自redux可以包装 store 的 dispatch
//thunk作用是使action创建函数可以返回一个function代替一个action对象

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
const reducer = combineReducers(reducers)
const store = createStoreWithMiddleware(reducer)

export default class App extends Component {
  render () {
    // 将store放进provider
    return (<Provider store = {store}>
              <CounterApp />
            </Provider>)
  }

}
