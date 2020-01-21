import React, {Component} from 'react';
import {View, Text, ScrollView} from 'react-native';
import style from './style';
import Header from '../../components/Header';

export default class InfoScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <Header {...this.props} />
        <ScrollView style={style.body} showsVerticalScrollIndicator={false}>
          <Text style={style.title}>Body mass index</Text>
          <Text style={style.subTitle}>What is BMI?</Text>
          <Text style={style.content}>
            {'\t\t\t'}
            Body mass index (BMI) is a value derived from the mass (weight) and
            height of a person.Body mass index is also the measure of body
            composition. The BMI is defined as the body mass divided by the
            square of the body height, and is universally expressed in units of
            kg/m^2, resulting from mass in kilograms and height in metres.
            {'\n\n\t\t\t'}
            The BMI may be determined using a table or chart which displays BMI
            as a function of mass and height using contour lines or colours for
            different BMI categories, and which may use other units of
            measurement (converted to metric units for the calculation).
            {'\n\n\t\t\t'}
            The BMI is a convenient rule of thumb used to broadly categorize a
            person as underweight, normal weight, overweight, or obese based on
            tissue mass (muscle, fat, and bone) and height. That categorization
            is the subject of some debate about where on the BMI scale the
            dividing lines between categories should be placed. Commonly
            accepted BMI ranges are underweight (under 18.5 kg/m^2), normal
            weight (18.5 to 25), overweight (25 to 30), and obese (over 30).
            {'\n\n\t\t\t'}
            BMIs under 20.0 and over 25.0 have been associated with higher
            all-causes mortality, with the risk increasing with distance from
            the 20.0–25.0 range.[3]{' '}
          </Text>
        </ScrollView>
      </View>
    );
  }
}
