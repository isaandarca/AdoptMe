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

function ComparteHistoria(props) {
  const {navigation} = props;
  const [imagen, setImagen] = useState('');

  const [descripcion, setDescripcion] = useState('');

  const [email, setEmail] = useState('');
  const [alertaerror, setAlertaerror] = useState(false);
  const [alerta, setAlerta] = useState(false);

  const [formError, setFormError] = useState({});

  const onSubmit = () => {
    if (imagen === '' || descripcion === '' || email === '') {
      setAlertaerror(true);
    } else {
      fetch('http://localhost:3000/historias', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          descripcion: descripcion,
          imagen: imagen,
          email: email,
        }),
      })
        .then(function (results) {
          return results.json();
        })

        .then(function (res) {
          console.log(res);

          setAlerta(true);
          setImagen('');
          setDescripcion('');
          setEmail('');
        });
    }

    //redireccionar

    //limpiar formulario?

    // }
    // setFormError(errors);
  };

  const onChangeNombre = (e) => {
    setImagen(e.nativeEvent.value);
  };
  const onChangenombrePersona = (e) => {
    setDescripcion(e.nativeEvent.value);
  };
  const onChangeEmail = (e) => {
    setEmail(e.nativeEvent.value);
  };

  return (
    <>
      <View style={styles.contenedor}>
        <Headline style={styles.titulo}>Mándanos tu historia</Headline>

        <TextInput
          style={[styles.input, formError.email && {borderColor: '#f80000'}]}
          value={email}
          placeholder="Email contacto"
          placeholderTextColor="#afb1b8"
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={[styles.input, formError.telefono && {borderColor: '#f80000'}]}
          value={imagen}
          placeholder="Añade una imagen con tus mascotas"
          placeholderTextColor="#afb1b8"
          onChangeText={(value) => setImagen(value)}
        />
        <TextInput
          style={[
            styles.inputdos,
            formError.poblacion && {borderColor: '#f80000'},
          ]}
          value={descripcion}
          placeholder="Comparte tu historia"
          placeholderTextColor="#afb1b8"
          onChangeText={(value) => setDescripcion(value)}
        />

        {/* <TouchableOpacity onPress={onSubmit}>
            <Text style={styles.anyadir}>Enviar Datos Preadopcion</Text>
            
            </TouchableOpacity> */}
        <Button
          icon="paw"
          mode="contained"
          style={styles.boton}
          onPress={onSubmit}>
          Mandar Historia
        </Button>

        <Portal>
          <Dialog visible={alerta}>
            <Dialog.Title>Hola</Dialog.Title>
            <Dialog.Content>
              <Paragraph>Hola</Paragraph>
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
                Todos los campos son obligatorios para mandar la historia.
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

export default ComparteHistoria;
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
  inputdos: {
    height: 250,
    width: '70%',
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
    marginTop: 15,
  },
});
