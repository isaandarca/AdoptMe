import React, {useState, useEffect} from 'react';

import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  Linking,
} from 'react-native';
import {Button} from 'react-native-paper';

import {map} from 'lodash';

const {width} = Dimensions.get('window');
//con esto calculamos el ancho de la pantalla de manera dinamica

function Animal(props) {
  // console.log(props)

  const {route, navigation} = props;
  const {id} = route.params;
  const [animales, setAnimales] = useState({});
  const [foto, setFoto] = useState({});

  const onNavigation = () => {
    navigation.navigate('preadopcion');
  };

  useEffect(() => {
    fetch(`http://localhost:3000/listadoAnimales/${id}`)
      .then(function (results) {
        return results.json();
      })

      .then(function (res) {
        setAnimales(res);
      });
  }, []);

  //hacemos asi el map para recorrer el array que traia cada animal .Muy importante los props.
  return (
    <ScrollView style={styles.pagina}>
      <View style={styles.contenedor}>
        {map(animales, (animal, index) => (
          <GetAnimal key={index} animal={animal} />
        ))}
        <View style={styles.registro}>
          {/* <TouchableOpacity onPress={onNavigation}>
            <Text style={styles.botonTexto}>Iniciar la adopción</Text>
          </TouchableOpacity> */}
          <Button
            icon="paw"
            mode="contained"
            onPress={onNavigation}
            style={styles.botonTexto}>
            Quiero adoptarlo
          </Button>
          <Button
            style={styles.icon}
            icon="instagram"
            mode="contained"
            onPress={() => Linking.openURL('http://instagram.com')}>
            Compártelo
          </Button>
        </View>
      </View>
    </ScrollView>
  );
}

function GetAnimal(props) {
  console.log(props);
  const {animal, navigation} = props;
  const {
    Imagen,
    Nombre,
    Especie,
    Raza,
    Sexo,
    Color,
    Edad,
    Vacunas,
    Localidad,
    Estado,
  } = animal;

  return (
    <>
      <Image style={styles.image} source={{uri: Imagen}} />

      <View style={styles.animal}>
        <Text style={styles.titulo}>{Nombre}</Text>

        <Text style={styles.text}>Especie: {Especie}</Text>
        <Text style={styles.text}>Raza: {Raza}</Text>
        <Text style={styles.text}>Sexo: {Sexo}</Text>
        <Text style={styles.text}>Color: {Color}</Text>
        <Text style={styles.text}>Edad: {Edad}</Text>
        <Text style={styles.text}>Vacunas: {Vacunas}</Text>
        <Text style={styles.text}>Protectora: {Localidad}</Text>
        <Text style={styles.text}>Estado: {Estado}</Text>
      </View>
    </>
  );
}

export default Animal;
const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  },
  animal: {
    width: width,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#545454',
  },
  botonTexto: {
    color: '#8c52ff',
    fontSize: 26,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pagina: {
    backgroundColor: '#fff',
  },
  registro: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 100,
  },
  image: {
    width: '100%',
    height: 350,
  },
  text: {
    fontSize: 15,

    color: '#545454',
  },
  icon: {
    backgroundColor: '#c51d34',
    marginTop: 10,
  },
});
