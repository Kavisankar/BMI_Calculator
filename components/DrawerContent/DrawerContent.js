import React from 'react';
import SafeAreaView from 'react-native-safe-area-view';
import {DrawerItems} from 'react-navigation-drawer';
import {ScrollView, Image, Text, View} from 'react-native';

import styles from './style';
const icon = require('./BMI.png');

const DrawerContent = props => {
  return (
    <ScrollView>
      <SafeAreaView
        style={styles.container}
        forceInset={{top: 'always', horizontal: 'never'}}>
        <View style={styles.titileContainer}>
          <Image source={icon} style={styles.icon} />
          <Text style={styles.title}>Calculator</Text>
        </View>
        <DrawerItems
          {...props}
          activeTintColor="#1a73e8"
          activeBackgroundColor="#bbb"
          labelStyle={styles.lableStyle}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default DrawerContent;
