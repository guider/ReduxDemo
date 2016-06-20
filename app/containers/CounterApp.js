'use strict'

import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import Counter from '../component/counter'
import * as counterAction from '../action/counterAction'
import { connect } from 'react-redux'
class CounterApp extends Component {
  constructor (props) {
    super(props)
  }
  render () {
    const {state, actions} = this.props
    return (<Counter counter={state.count} {...actions}>
            </Counter>)
  }
}

//第一个参数是function  将state.counter绑定到props的counter
//第二个参数也是function  将action的所有方法绑定到props上

//通过react-redux提供的connect方法将我们需要的state中的数据和actions中的方法绑定到props上
export default connect(state => ({
  state: state.counter
}), (dispatch) => ({
  actions: bindActionCreators(counterAction, dispatch)
}))(CounterApp)
