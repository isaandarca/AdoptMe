import React from 'react';
import {
  StyleSheet,
  View,
  Alert,
  Linking,
  Dimensions,
  Image,
  Caption,
} from 'react-native';
import {
  Headline,
  Text,
  Card,
  Paragraph,
  Title,
  Button,
} from 'react-native-paper';

function Adopcion({route, navigation}) {
  const {
    nombrePersona,
    Nombre,
    email,
    telefono,
    poblacion,
    Imagen,
    _id,
  } = route.params.item;

  const {width} = Dimensions.get('window');
  const aspectRatio = 600 / 750;
  const height = 190;

  const handleEmailPress = async () => {
    await Linking.openURL('tel:+0034690805752');
  };

  const mostrarConfirmacion = () => {
    Alert.alert(
      ' ¿Deseas eliminar este animal?',
      'Un animal eliminado ya no se puede recuperar',

      [
        {text: 'Si Eliminar', onPress: () => eliminarficheroAdopcion()},
        {text: 'Cancelar', style: 'cancel'},
      ],
    );
  };
  const eliminarficheroAdopcion = () => {
    fetch(`http://localhost:3000/preadoptar/${Nombre}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({Nombre: Nombre}),
    })
      .then(function (results) {
        return results.json();
      })

      .then(function (res) {
        console.log(res);
      });
    navigation.navigate('administrador');
  };

  return (
    <View style={styles.contenedor}>
      {/* <View style={styles.contenido}>
        <Text>Protectora:{Localidad}</Text>
        <Text>Especie:{Especie}</Text>
        <Text>Id:{id}</Text>
      </View> */}
      <Image
        source={require('../imagenes/adoptado.png')}
        style={{
          width,
          height,
          borderBottomRightRadius: 120,
        }}
      />

      <Card style={styles.card}>
        {/* <Image style={styles.image} source={{uri: Imagen}} /> */}

        <Headline style={styles.titulo}>{Nombre}</Headline>
        <Card.Content style={styles.carta}>
          {/* <Image style={styles.image} source={{uri: Imagen}} /> */}
          <Paragraph style={styles.title}> Adoptante:{nombrePersona}</Paragraph>
          <Paragraph> Población :{poblacion}</Paragraph>
          <Paragraph> Teléfono:{telefono}</Paragraph>
          <Paragraph> E-mail :{email}</Paragraph>
        </Card.Content>
      </Card>
      <Button
        style={styles.boton}
        mode="contained"
        // icon="cancel"
        onPress={handleEmailPress}>
        Mandar Mail
      </Button>
      <Button
        style={styles.botondos}
        mode="contained"
        icon="cancel"
        onPress={mostrarConfirmacion}>
        Eliminar de Adopcion
      </Button>
    </View>
  );
}
export default Adopcion;
const styles = StyleSheet.create({
  contenedor: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    // alignItems: 'center',
    // justifyContent: 'center',

    // marginHorizontal:'2.5%',
    backgroundColor: '#fff',
  },

  titulo: {
    textAlign: 'center',
    marginBottom: 5,
    marginTop: 60,
    fontSize: 24,
    alignContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: '50%',
    height: 150,
  },
  contenido: {
    marginTop: 20,
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  card: {
    // marginTop: 20,
    // marginHorizontal: 20,
    // marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    height: 300,
    backgroundColor: '#f2ebc7',
    paddingBottom: 60,
    flex: 0.55,
  },
  boton: {
    marginTop: 50,
    backgroundColor: '#7fa5f7',
    marginHorizontal: 10,
  },
  botondos: {
    marginTop: 10,
    backgroundColor: 'red',
  },
  image: {
    width: '100%',
    height: '50%',
    resizeMode: 'cover',
    justifyContent: 'center',
  },
});
