import React, {useState} from 'react';
import {View, StyleSheet, Image, Dimensions} from 'react-native';
// const {width} = Dimensions.get('window');
// const aspectRatio = 750 / 1125;
// const height = width * aspectRatio;
import LoginForm from './LoginForm';
import RegisterForm from './RegisterForm';
//githubbbbb

function Auth() {
  const [isLogin, setIsLogin] = useState(true);
  const changeForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <View style={styles.view}>
      <Image
        style={styles.logo}
        source={require('../imagenes/myownlogo.png')}
      />
      {isLogin ? (
        <LoginForm changeForm={changeForm} />
      ) : (
        <RegisterForm changeForm={changeForm} />
      )}
    </View>
  );
}
export default Auth;
const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    width: '80%',
    height: 240,
    marginTop: 50,
    marginBottom: 50,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
});
