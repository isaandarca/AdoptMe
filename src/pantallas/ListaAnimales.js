import React, {useEffect, useState} from 'react';

import {StyleSheet, Text, View, FlatList} from 'react-native';

import {List, Headline, FAB} from 'react-native-paper';

function ListaAnimales({route, navigation}) {
  const [data, setData] = useState('');

  // const [boolean, setBoolean] = useState(false);

  // const {res} = route;
  // console.log(res);

  const fetchListado = () => {
    fetch('http://localhost:3000/listadoAnimales')
      .then(function (results) {
        return results.json();
      })

      .then(function (res) {
        setData(res);
        console.log(res);
        // setBoolean(!boolean);
        // console.log(boolean);
      });
  };
  useEffect(() => {
    fetchListado();
  }, []);

  return (
    <View style={styles.contenedor}>
      <Headline style={styles.titulo}>
        Registro de animales en pérfil público
      </Headline>
      {/* <Headline style={styles.titulo}>Listado Animales en Adopción</Headline> */}
      <FlatList
        style={styles.flat}
        data={data}
        keyExttractor={(registro) => registro.id.toString()}
        renderItem={({item}) => (
          <List.Item
            icon="heart"
            style={styles.item}
            title={item.Nombre}
            description={item.Localidad}
            onPress={() => navigation.navigate('detalleanimal', {item})}
            left={(props) => <List.Icon {...props} icon="paw" />}
            // left={(props) => (
            //   <Image
            //     style={styles.frente}
            //     source={require('../imagenes/adoptar.png')}
            //   />

            // )}
          />
        )}
      />

      <FAB
        icon="plus"
        style={styles.fab}
        onPress={() => navigation.navigate('registraranimal')}
      />
    </View>
  );
}

export default ListaAnimales;
const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 18,
  },
  contenedor: {
    height: '100%',
    width: '100%',

    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',

    // marginHorizontal:'2.5%',
  },
  fab: {
    position: 'absolute',
    margin: 10,
    right: 20,
    bottom: 60,
  },
  card: {
    marginHorizontal: 10,
    marginVertical: 10,
  },
  flat: {
    marginHorizontal: 10,
  },
  item: {
    marginTop: 15,
    backgroundColor: '#f2ebc7',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    borderBottomLeftRadius: 30,

    borderTopRightRadius: 50,

    borderTopLeftRadius: 30,
    width: 290,
    marginLeft: 20,
  },
  frente: {
    width: '29%',
    height: 70,
  },
});
