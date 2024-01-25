import React, {useState} from 'react';

import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

import {TextInput, Paragraph, Dialog, Portal, Button} from 'react-native-paper';

const FormularioRegistro = (props) => {
  const {changeEstado} = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const [formError, setFormError] = useState({});
  const [alerta, setAlerta] = useState(false);
  const [alertaerror, setAlertaerror] = useState(false);

  const registar = () => {
    if (email === '' || password === '' || repeatPassword === '') {
      setAlertaerror(true);
    }
    if (password.length < 6) {
      setAlerta(true);
    } else {
      fetch('http://localhost:3000/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({email: email, password: password}),
      })
        .then(function (results) {
          return results.json();
        })

        .then(function (res) {
          console.log(res);
          setEmail('');
          setPassword('');
          setRepeatPassword('');
        });

      // }
      // setFormError(errors)
      // console.log(errors);
    }
  };
  const onChangeEmail = (e) => {
    setEmail(e.nativeEvent.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.nativeEvent.value);
  };
  const onChangerepeatPassword = (e) => {
    setRepeatPassword(e.nativeEvent.value);
  };

  return (
    <>
      <TextInput
        style={[styles.input, formError.email && styles.error]}
        value={email}
        placeholder="Correo electrónico"
        placeholderTextColor="#828282"
        onChangeText={(value) => setEmail(value)}
      />
      <TextInput
        value={password}
        style={[styles.input, formError.password && styles.error]}
        placeholder="Password"
        placeholderTextColor="#828282"
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
      />
      <TextInput
        value={repeatPassword}
        style={[styles.input, formError.repeatPassword && styles.error]}
        placeholder="Repeat Password"
        placeholderTextColor="#828282"
        secureTextEntry={true}
        onChangeText={(value) => setRepeatPassword(value)}
      />

      <TouchableOpacity onPress={registar}>
        <Text style={styles.botonTexto}>Regístrate</Text>
      </TouchableOpacity>
      <View style={styles.login}>
        <TouchableOpacity onPress={changeEstado}>
          <Text style={styles.botonTexto}>Inicia Sesión</Text>
        </TouchableOpacity>

        <Portal>
          <Dialog visible={alerta}>
            <Dialog.Title>Error</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                La contraseña tiene que tener mínimo 6 caracteres
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setAlerta(false)}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>

        <Portal>
          <Dialog visible={alertaerror}>
            <Dialog.Title>Error</Dialog.Title>
            <Dialog.Content>
              <Paragraph>
                Todos los campos son obligatorios para iniciar el proceso de
                preadopción{' '}
              </Paragraph>
            </Dialog.Content>
            <Dialog.Actions>
              <Button onPress={() => setAlertaerror(false)}>OK</Button>
            </Dialog.Actions>
          </Dialog>
        </Portal>
      </View>
    </>
  );
};

export default FormularioRegistro;
const styles = StyleSheet.create({
  botonTexto: {
    color: '#828282',
    fontSize: 18,
  },
  input: {
    // height:48,
    // width:"70%",
    // marginBottom:20,
    // color:'#828282',
    // backgroundColor:'#dae7ee',
    // borderRadius:5,
    // textAlign:'center',
    // borderColor:'#afb1b8',
    // borderWidth:1,
    height: 40,
    width: '70%',
    marginBottom: 20,
  },
  login: {
    flex: 1,
    justifyContent: 'flex-end',
    marginBottom: 20,
  },
  error: {
    borderColor: '#f80000',
  },
});
