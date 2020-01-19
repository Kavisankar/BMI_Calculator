import React, {Component} from 'react';
import {Text, View, TouchableHighlight} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import style from './style';

export default class Header extends Component {
  render() {
    return (
      <View style={style.header}>
        <Text style={style.center}> BMI Calculator </Text>
        <TouchableHighlight
          style={style.left}
          onPress={() => this.props.navigation.openDrawer()}>
          <Icon name="ios-menu" size={30} color="#ffffff" />
        </TouchableHighlight>
      </View>
    );
  }
}
