import React from 'react';
import {StyleSheet} from 'react-native';

import {Provider as PaperProvider} from 'react-native-paper';
import Navegacion from './src/navegacion/Navegacion';
import {NavigationContainer} from '@react-navigation/native';

function App(props) {
  console.log(props);
  return (
    <PaperProvider>
      <NavigationContainer>
        <Navegacion />
      </NavigationContainer>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({});

export default App;
