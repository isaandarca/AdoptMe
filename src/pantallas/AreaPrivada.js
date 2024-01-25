import React, {useState} from 'react';
import {StyleSheet, View, Image, Dimensions} from 'react-native';

import FormularioLogin from '../componentes/FormularioLogin';
import FormularioRegistro from '../componentes/FormularioRegistro';
const {width} = Dimensions.get('window');
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

function AreaPrivada(props) {
  const {navigation} = props;
  const [isLogin, setIsLogin] = useState(true);

  const changeEstado = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View style={styles.frente}>
      <View style={styles.container}>
        <View style={styles.imagen}>
          <Image
            source={require('../imagenes/pruebaportada.png')}
            style={{
              width,
              height,
              borderBottomLeftRadius: 120,
            }}
          />
        </View>
        <View style={styles.view}>
          {isLogin ? (
            <FormularioLogin
              changeEstado={changeEstado}
              navigation={navigation}
            />
          ) : (
            <FormularioRegistro changeEstado={changeEstado} />
          )}
        </View>
        <View style={styles.base}></View>
      </View>
    </View>
  );
}
export default AreaPrivada;
const styles = StyleSheet.create({
  view: {
    flex: 1.9,
    alignItems: 'center',
    paddingTop: 70,
    backgroundColor: '#fff',
    borderTopRightRadius: 200,
    borderBottomRightRadius: 100,
    // borderBottomLeftRadius: 200,
  },
  frente: {
    flex: 1,
    backgroundColor: '#000',
  },
  principal: {
    flex: 1,
  },
  container: {
    flex: 0.9,
    backgroundColor: '#fff',
    // borderRadius: 100,
    borderBottomRightRadius: 100,
  },
  //   imagen: {
  //     overflow: 'hidden',
  //     flex: 0.61,
  //   },
});
