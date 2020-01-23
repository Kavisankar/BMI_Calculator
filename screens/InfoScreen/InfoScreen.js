import React, {Component} from 'react';
import {View} from 'react-native';
import WebView from 'react-native-webview';
import style from './style';
import Header from '../../components/Header';
import content from './content';

export default class InfoScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <Header {...this.props} />
        <View style={style.contentContainer}>
          <WebView
            showsVerticalScrollIndicator={false}
            source={{html: content}}
          />
        </View>
      </View>
    );
  }
}
