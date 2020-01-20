import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';

import style from './style';

export default class MyButton extends Component {
  render() {
    return (
      <View style={style.container}>
        <TouchableHighlight
          style={style.button}
          onPress={this.props.onPress}
          underlayColor="#53dafb">
          <Text style={style.text}>{this.props.title}</Text>
        </TouchableHighlight>
      </View>
    );
  }
}
