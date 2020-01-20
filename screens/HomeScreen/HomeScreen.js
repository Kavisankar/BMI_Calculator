import React, {Component} from 'react';
import {View, Text, Keyboard} from 'react-native';

import styles from './style';
import MyButton from '../../components/MyButton';
import Input from '../../components/Input';
import Header from '../../components/Header';

export default class HomeScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bmi: 0,
      discription: '',
      height: 0,
      heightError: '',
      weight: 0,
      weightError: '',
    };
  }

  _validateHeight = value => {
    if (value === '') {
      return 'Please enter the height';
    }
    var num = parseInt(value, 10);
    if (isNaN(value) || num <= 30 || num >= 250) {
      return 'Please enter valid height';
    }
    return '';
  };

  _updateHeight = value => {
    const heightError = this._validateHeight(value);
    let height = 0;
    if (heightError === '') {
      height = parseInt(value, 10);
    }
    this.setState({height, heightError});
  };

  _validateWeight = value => {
    if (value === '') {
      return 'Please enter the weight';
    }
    var num = parseInt(value, 10);
    if (isNaN(value) || num <= 0 || num >= 300) {
      return 'Please enter valid weight';
    }
    return '';
  };

  _updateWeight = value => {
    const weightError = this._validateWeight(value);
    let weight = 0;
    if (weightError === '') {
      weight = parseInt(value, 10);
    }
    this.setState({weight, weightError});
  };

  _submitForm = () => {
    Keyboard.dismiss();
    const heightError = this._validateHeight(this.state.height);
    const weightError = this._validateWeight(this.state.weight);
    if (heightError === '' && weightError === '') {
      const bmi = (
        (10000 * this.state.weight) /
        (this.state.height * this.state.height)
      ).toFixed(1);
      let discription = '';
      if (bmi < 18.5) {
        discription = 'Underweight';
      } else if (bmi < 25) {
        discription = 'Healthy';
      } else if (bmi < 30) {
        discription = 'Overweight';
      } else if (bmi < 40) {
        discription = 'Severely obses';
      } else if (bmi < 50) {
        discription = 'Morbidly obses';
      } else {
        discription = '';
      }
      this.setState({bmi, discription});
    } else {
      this.setState({heightError, weightError});
    }
  };

  render() {
    return (
      <View style={styles.container}>
        <Header {...this.props} />
        <View style={styles.card}>
          <Input
            label="Height (in Centimeter)"
            placeholder="Enter the height"
            errorMessage={this.state.heightError}
            onChangeText={this._updateHeight}
          />
          <Input
            label="Weight (in Kilogram)"
            placeholder="Enter the weight"
            errorMessage={this.state.weightError}
            onChangeText={this._updateWeight}
          />
          <MyButton title="Calculate" onPress={this._submitForm} />
          {this.state.bmi !== 0 && (
            <Text style={styles.result}>
              Your BMI is {this.state.bmi}. {'\n'}This is consider to be{' "'}
              {this.state.discription}
              {'"'}.
            </Text>
          )}
        </View>
      </View>
    );
  }
}
