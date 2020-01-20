import React from 'react';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';

import DrawerContent from '../../components/DrawerContent/DrawerContent';
import InfoScreen from '../../screens/InfoScreen';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';

const RootNavigator = createDrawerNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Info: {
      screen: InfoScreen,
      navigationOptions: {
        drawerLabel: 'What is BMI?',
      },
    },
  },
  {
    initialRouteName: 'Home',
    contentComponent: props => <DrawerContent {...props} />,
    drawerWidth: '80%',
  },
);

export default createAppContainer(RootNavigator);
