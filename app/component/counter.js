import React, { Component,
} from 'react'

import { StyleSheet, View, Text, TouchableOpacity} from 'react-native'

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    padding: 10,
    backgroundColor: 'lightgray',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 3
  }
})

export default class Counter extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    // 从组件的props属性中导出 2个方法 和 一个变量
    const { counter, increment, decrement } = this.props

    return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>
        {counter}
      </Text>
      <TouchableOpacity onPress={increment} style={styles.button}>
        <Text>
          up
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={decrement} style={styles.button}>
        <Text>
          down
        </Text>
      </TouchableOpacity>
    </View>
    )
  }
}
