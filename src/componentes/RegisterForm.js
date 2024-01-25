import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  View,
} from 'react-native';

import firebase from '../utils/firebase';

export default function RegisterForm(props) {
  const {changeForm} = props;
  const [formData, setFormData] = useState(defaultValue());
  const [formError, setFormError] = useState({});

  const register = () => {
    let errors = {};
    if (!formData.email || !formData.password || !formData.repeatPassword) {
      if (!formData.email) errors.email = true;
      if (!formData.password) errors.password = true;
      if (!formData.repeatPassword) errors.repeatPassword = true;
    } else if (formData.password !== formData.repeatPassword) {
      errors.password = true;
      errors.repeatPassword = true;
    } else if (formData.password.length < 6) {
      errors.password = true;
      errors.repeatPassword = true;
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(formData.email, formData.password)
        .catch(() => {
          setFormError({
            email: true,
            password: true,
            repeatPassword: true,
          });
        });
    }
    setFormError(errors);
  };

  return (
    <>
      <TextInput
        style={[styles.input, formError.email && styles.error]}
        placeholder="Correo electronico"
        placeholderTextColor="#969696"
        onChange={(e) => setFormData({...formData, email: e.nativeEvent.text})}
      />
      <TextInput
        style={[styles.input, formError.password && styles.error]}
        placeholder="Contraseña"
        placeholderTextColor="#969696"
        secureTextEntry={true}
        onChange={(e) =>
          setFormData({...formData, password: e.nativeEvent.text})
        }
      />
      <TextInput
        style={[styles.input, formError.repeatPassword && styles.error]}
        placeholder="Repetir contraseña"
        placeholderTextColor="#969696"
        secureTextEntry={true}
        onChange={(e) =>
          setFormData({...formData, repeatPassword: e.nativeEvent.text})
        }
      />
      <TouchableOpacity onPress={register}>
        <Text style={styles.btnText}>Regístrate</Text>
      </TouchableOpacity>

      <View style={styles.login}>
        <TouchableOpacity onPress={changeForm}>
          <Text style={styles.btnText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

function defaultValue() {
  return {
    email: '',
    password: '',
    repeatPassword: '',
  };
}

const styles = StyleSheet.create({
  btnText: {
    color: '#828282',
    fontSize: 18,
  },
  input: {
    // height: 50,
    // color: '#fff',
    // width: '80%',
    // marginBottom: 25,
    // backgroundColor: '#1e3040',
    // paddingHorizontal: 20,
    // borderRadius: 50,
    // fontSize: 18,
    borderWidth: 0.5,
    // borderColor: '#1e3040',
    height: 40,
    color: '#000',
    width: '70%',
    marginBottom: 25,
    backgroundColor: '#d9d9d9',
    paddingHorizontal: 20,
    // borderRadius: 50,
    fontSize: 18,
    // borderWidth: 1,
    // borderColor: '#1e3040',
    borderBottomRightRadius: 20,
  },
  login: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },
  error: {
    borderColor: '#940c0c',
  },
});
