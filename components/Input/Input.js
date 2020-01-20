import React, {Component} from 'react';
import {Text, TextInput, View} from 'react-native';

import style from './style';

export default class MyButton extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.label}>{this.props.label}</Text>
        <TextInput
          style={style.input}
          placeholder={this.props.placeholder}
          onChangeText={this.props.onChangeText}
          keyboardType="numeric"
        />
        {this.props.errorMessage !== '' && (
          <Text style={style.errorMessage}>{this.props.errorMessage}</Text>
        )}
      </View>
    );
  }
}
