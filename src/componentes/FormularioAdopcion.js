import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {
  TextInput,
  Headline,
  Button,
  Paragraph,
  Dialog,
  Portal,
} from 'react-native-paper';

function FormularioAdopcion(props) {
  const {navigation} = props;
  const [Nombre, setNombre] = useState('');
  console.log(Nombre);
  const [nombrePersona, setnombrePersona] = useState('');
  console.log(nombrePersona);
  const [email, setEmail] = useState('');
  const [telefono, setTelefono] = useState('');
  const [poblacion, setPoblacion] = useState('');
  const [alerta, setAlerta] = useState(false);
  const [alertaerror, setAlertaerror] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [titulo, setTitulo] = useState('');

  const [formError, setFormError] = useState({});

  const onSubmit = () => {
    if (
      Nombre === '' ||
      nombrePersona === '' ||
      email === '' ||
      telefono === '' ||
      poblacion === ''
    ) {
      setAlertaerror(true);
    } else {
      fetch('http://localhost:3000/preadoptar', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Nombre: Nombre,
          nombrePersona: nombrePersona,
          email: email,
          telefono: telefono,
          poblacion: poblacion,
        }),
      })
        .then(function (results) {
          return results.json();
        })

        .then(function (res) {
          console.log(res);
          setTitulo(res.titulo);
          setMensaje(res.mensaje);
          setAlerta(true);
          setNombre('');
          setnombrePersona('');
          setEmail('');
          setPoblacion('');
          setTelefono('');
        });
    }

    //redireccionar

    //limpiar formulario?

    // }
    // setFormError(errors);
  };

  const onChangeNombre = (e) => {
    setNombre(e.nativeEvent.value);
  };
  const onChangenombrePersona = (e) => {
    setnombrePersona(e.nativeEvent.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.nativeEvent.value);
  };
  const onChangeTelefono = (e) => {
    setTelefono(e.nativeEvent.value);
  };
  const onChangePoblacion = (e) => {
    setPoblacion(e.nativeEvent.value);
  };

  return (
    <>
      <View style={styles.contenedor}>
        <Headline style={styles.titulo}>Formulario Adopción</Headline>
        <TextInput
          style={[styles.input, formError.Nombre && {borderColor: '#f80000'}]}
          value={Nombre}
          placeholder="Nombre del animal"
          placeholderTextColor="#afb1b8"
          onChangeText={(value) => setNombre(value)}
        />
        <TextInput
          style={[
            styles.input,
            formError.nombrePersona && {borderColor: '#f80000'},
          ]}
          value={nombrePersona}
          placeholder="Tu Nombre y apellidos"
          placeholderTextColor="#afb1b8"
          onChangeText={(value) => setnombrePersona(value)}
        />
        <TextInput
          style={[styles.input, formError.email && {borderColor: '#f80000'}]}
          value={email}
          placeholder="Email contacto"
          placeholderTextColor="#afb1b8"
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={[styles.input, formError.telefono && {borderColor: '#f80000'}]}
          value={telefono}
          placeholder="Teléfono contacto"
          placeholderTextColor="#afb1b8"
          onChangeText={(value) => setTelefono(value)}
        />
        <TextInput
          style={[
            styles.input,
            formError.poblacion && {borderColor: '#f80000'},
          ]}
          value={poblacion}
          placeholder="Población"
          placeholderTextColor="#afb1b8"
          onChangeText={(value) => setPoblacion(value)}
        />

        {/* <TouchableOpacity onPress={onSubmit}>
            <Text style={styles.anyadir}>Enviar Datos Preadopcion</Text>
            
            </TouchableOpacity> */}
        <Button
          icon="paw"
          mode="contained"
          style={styles.boton}
          onPress={onSubmit}>
          Iniciar preadopción
        </Button>

        <Portal>
          <Dialog visible={alerta}>
            <Dialog.Title>{titulo}</Dialog.Title>
            <Dialog.Content>
              <Paragraph>{mensaje}</Paragraph>
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
}

export default FormularioAdopcion;
const styles = StyleSheet.create({
  contenedor: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  input: {
    height: 40,
    width: '70%',
    marginBottom: 20,
    // backgroundColor:'#afb1b8',
    // textAlign:'center',
    // borderColor:'#afb1b8',
    // borderWidth:1,
    // paddingHorizontal:20,
    // borderRadius:10,
  },

  textoDate: {
    color: '#fff',
    fontSize: 16,
  },
  anyadir: {
    fontSize: 18,
    color: '#7eafc5',
  },
  titulo: {
    marginBottom: 15,
  },
  boton: {
    backgroundColor: '#8c52ff',
  },
});
