import React, {useState} from 'react';

import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import {TextInput} from 'react-native-paper';

const FormularioLogin = (props) => {
  const {changeEstado, navigation} = props;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [alerta, setAlerta] = useState(false);
  const [alertaerror, setAlertaerror] = useState(false);

  const [formError, setFormError] = useState({});
  const [usuario, setUsuario] = useState({});

  const onNavigation = (user) => {
    if (user.administrador) {
      navigation.navigate('administrador');
    } else {
      navigation.navigate('home');
    }
  };

  const login = () => {
    fetch('http://localhost:3000/api/login', {
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
        //      console.log(res)
        setUsuario(res.usuario);

        onNavigation(res.usuario);

        console.log(res);
        setAlerta(true);
        setEmail('');
        setPassword('');
      });

    // navigation.navigate('administrador')
    // //    }
    // //    setFormError(errors)
  };

  //coges los daton con onChange
  //TouchableOpcacity se comporta como button.
  //para poner varios estilos lo guardas en un array y lo separas con comas creando una condicion con && .

  const onChangeEmail = (e) => {
    setEmail(e.nativeEvent.value);
  };
  const onChangePassword = (e) => {
    setPassword(e.nativeEvent.value);
  };

  return (
    <>
      <TextInput
        value={email}
        placeholder="Usuario"
        //  placeholderTextColor='#fff'
        style={[styles.input, formError.username && styles.error]}
        onChangeText={(value) => setEmail(value)}
      />

      <TextInput
        value={password}
        placeholder="Password"
        //  placeholderTextColor='#fff'
        style={[styles.input, formError.password && styles.error]}
        secureTextEntry={true}
        onChangeText={(value) => setPassword(value)}
      />
      <TouchableOpacity onPress={login}>
        <Text style={styles.botonTexto}>Inicia Sesión</Text>
      </TouchableOpacity>
      <View style={styles.registro}>
        <TouchableOpacity onPress={changeEstado}>
          <Text style={styles.botonTexto}>Regístrate</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default FormularioLogin;

const styles = StyleSheet.create({
  botonTexto: {
    color: '#828282',
    fontSize: 18,
  },
  input: {
    height: 40,
    width: '70%',
    marginBottom: 20,
    // height:40,
    // width:"70%",
    // marginBottom:18,
    // color:'#828282',
    // backgroundColor:'#dae7ee',
    // // borderRadius:5,
    // textAlign:'center',
    // // borderColor:'#afb1b8',
    // // borderWidth:1,
  },
  registro: {
    flex: 1,
    justifyContent: 'flex-end',
    // paddingTop: 100,
    marginBottom: 20,
  },
  error: {
    borderColor: '#f80000',
  },
});
