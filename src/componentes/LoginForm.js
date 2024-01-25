import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import firebase from '../utils/firebase';
function LoginForm(props) {
  const {changeForm} = props;
  const [formData, setFormData] = useState(defaultValue());
  const [formError, setFormError] = useState({});

  const login = () => {
    let errors = {};
    if (!formData.email || !formData.password) {
      if (!formData.email) errors.email = true;
      if (!formData.password) errors.password = true;
    } else {
      firebase
        .auth()
        .signInWithEmailAndPassword(formData.email, formData.password)
        .catch(() => {
          setFormError({
            email: true,
            password: true,
          });
        });
    }
    setFormError(errors);
  };

  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
  };

  return (
    <>
      <TextInput
        style={[styles.input, formError.email && styles.error]}
        placeholder="Correo electronico"
        placeholderTextColor="#969696"
        onChange={(e) => onChange(e, 'email')}
      />
      <TextInput
        style={[styles.input, formError.password && styles.error]}
        placeholder="Contraseña"
        placeholderTextColor="#969696"
        secureTextEntry={true}
        onChange={(e) => onChange(e, 'password')}
      />
      <TouchableOpacity onPress={login}>
        <Text style={styles.botonTexto}>Iniciar sesión</Text>
      </TouchableOpacity>

      <View style={styles.register}>
        <TouchableOpacity onPress={changeForm}>
          <Text style={styles.botonTexto}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

function defaultValue() {
  return {
    email: '',
    password: '',
  };
}

export default LoginForm;

const styles = StyleSheet.create({
  input: {
    height: 40,
    color: '#000',
    width: '70%',
    marginBottom: 25,
    backgroundColor: '#d9d9d9',
    paddingHorizontal: 20,
    // borderRadius: 50,
    fontSize: 18,
    borderWidth: 0.5,
    // borderColor: '#1e3040',
    borderBottomRightRadius: 20,
  },
  register: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 10,
  },

  error: {
    borderColor: '#940c0c',
  },
  botonTexto: {
    color: '#828282',
    fontSize: 18,
  },
});
