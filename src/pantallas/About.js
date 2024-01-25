import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Animated, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Title} from 'react-native-paper';

function About(props) {
  const {navigation} = props;
  const [animacion1] = useState(new Animated.Value(0));
  const [animacion2] = useState(new Animated.Value(1));

  useEffect(() => {
    Animated.sequence([
      Animated.timing(animacion1, {
        toValue: 20,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.spring(animacion2, {
        toValue: 45,
        useNativeDriver: true,
      }),
      Animated.spring(animacion2, {
        toValue: 2,
        useNativeDriver: true,
      }),
      Animated.timing(animacion1, {
        toValue: 300,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  const estiloAnimacion = {
    transform: [{translateY: animacion1}, {scale: animacion2}],
  };

  const navegar = () => {
    navigation.navigate('usuario');
  };

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.caja, estiloAnimacion]}></Animated.View>

      {/* <Animated.Image
        style={[styles.imagen, estiloAnimacion]}
        source={require('../imagenes/pruebaportada.png')}
      /> */}

      <Image
        style={styles.imagen}
        source={require('../imagenes/adoptalogotres.png')}
      />
      <Text style={styles.texto}>Adopta [me]</Text>

      <Image
        style={styles.imagendos}
        source={require('../imagenes/myowngris.png')}
      />
      {/* </Animated.View> */}
      <TouchableOpacity onPress={navegar}>
        <Text style={styles.textodos}>Empieza a usar my Own</Text>
      </TouchableOpacity>
    </View>
  );
}
export default About;
const styles = StyleSheet.create({
  caja: {
    width: 300,
    height: 40,

    backgroundColor: '#fab766',
  },
  imagen: {
    width: 450,
    height: 200,
    borderBottomRightRadius: 150,
  },
  container: {
    backgroundColor: '#fff',
    height: '100%',
    alignItems: 'center',
    alignContent: 'center',
  },

  imagendos: {
    marginTop: 0,
    width: 450,
    height: 250,
    borderBottomRightRadius: 150,
    borderTopLeftRadius: 150,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 11,
  },
  texto: {
    marginTop: 70,
    marginBottom: 60,
    fontSize: 37,
    marginLeft: 15,
    color: '#fff',
    fontWeight: 'bold',
  },
  textodos: {
    fontSize: 18,
    marginTop: 5,
    color: '#000',
    fontWeight: 'bold',
  },
});
