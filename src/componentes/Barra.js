import React from 'react';
import {Button} from 'react-native-paper';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

function BarraSuperior(props) {
  const {navigation} = props;

  const handlePress = (props) => {
    navigation.navigate('registraranimal');
  };

  return <Button onPress={handlePress}>cliente</Button>;
}
export default BarraSuperior;
const styles = StyleSheet.create({});
