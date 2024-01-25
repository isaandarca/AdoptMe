import React from 'react';
import {StyleSheet, View, Image, Alert} from 'react-native';
import {
  Headline,
  Text,
  Card,
  Paragraph,
  Title,
  Button,
} from 'react-native-paper';

function DetAnimal({route, navigation}) {
  const {Imagen, Nombre, Localidad, Especie, id} = route.params.item;

  const mostrarConfirmacion = () => {
    Alert.alert(
      ' ¿Deseas eliminar este animal?',
      'Un animal eliminado ya no se puede recuperar',

      [
        {text: 'Si Eliminar', onPress: () => eliminarAnimal()},
        {text: 'Cancelar', style: 'cancel'},
      ],
    );
  };
  const eliminarAnimal = () => {
    fetch(`http://localhost:3000/borrarAnimal/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id: id}),
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
      <Card style={styles.card}>
        <Image style={styles.image} source={{uri: Imagen}} />
        <Headline style={styles.titulo}>{Nombre}</Headline>
        <Card.Content>
          <Paragraph>Protectora:{Localidad}</Paragraph>
          <Paragraph>Número identificación:{id}</Paragraph>
          <Paragraph>Especie:{Especie}</Paragraph>
        </Card.Content>
      </Card>
      <Button
        style={styles.boton}
        mode="contained"
        icon="cancel"
        onPress={() => mostrarConfirmacion()}>
        Eliminar de pérfil público
      </Button>
    </View>
  );
}
export default DetAnimal;
const styles = StyleSheet.create({
  contenedor: {
    height: '100%',
    width: '100%',
    // alignItems: 'center',
    // justifyContent: 'center',

    // marginHorizontal:'2.5%',
    backgroundColor: '#fff',
  },

  titulo: {
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 28,
    alignContent: 'center',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    height: 350,
  },
  contenido: {
    marginTop: 20,
    textAlign: 'center',
    alignContent: 'center',
    alignItems: 'center',
  },
  card: {
    marginHorizontal: 20,
    marginVertical: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 10,
    backgroundColor: '#f2ebc7',
  },
  boton: {
    marginTop: 100,
    backgroundColor: 'red',
    marginHorizontal: 50,
  },
});
