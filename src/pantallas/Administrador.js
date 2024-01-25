import React from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native';
import {Card, Paragraph, Title, Button} from 'react-native-paper';
const {width} = Dimensions.get('window');
const aspectRatio = 750 / 1125;
const height = width * aspectRatio;

function Administrador(props) {
  const {navigation} = props;

  const onNavigation = () => {
    navigation.navigate('ficheropreadopcion');
  };

  const onNavigationFichero = () => {
    navigation.navigate('listado');
  };

  const onNavigationBorrar = () => {
    navigation.navigate('borraranimal');
  };

  return (
    <View style={styles.caja}>
      <View style={styles.cajados}>
        <View style={styles.imagen}>
          <Image
            source={require('../imagenes/pruebaportadados.png')}
            style={{
              width,
              height,
              borderBottomRightRadius: 120,
            }}
          />

          <Card style={styles.card} onPress={onNavigation}>
            <Card.Content>
              <Title>Fichero de preadopciones</Title>
              <Paragraph>Acceder datos contacto adoptantes</Paragraph>
            </Card.Content>
          </Card>

          <Card style={styles.card} onPress={onNavigationFichero}>
            <Card.Content>
              <Title> Registrar y borrar animal </Title>
              <Paragraph>Crear fichero/borrar del perfil público</Paragraph>
            </Card.Content>
          </Card>
          {/* 
        <Card style={styles.card} onPress={onNavigationBorrar}>
          <Card.Content>
            <Title>Borrar animal de la base de datos</Title>
            <Paragraph>Borrar del perfil público una vez adoptados</Paragraph>
          </Card.Content>
        </Card> */}
        </View>
      </View>
    </View>
  );
}
export default Administrador;
const styles = StyleSheet.create({
  card: {
    marginHorizontal: 0,
    marginVertical: 20,
    height: 100,
    borderBottomRightRadius: 60,

    marginRight: 80,
    borderTopRightRadius: 10,
    marginTop: 55,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 6,
    },
    shadowOpacity: 0.5,
    shadowRadius: 11,
  },
  caja: {
    flex: 1,
    backgroundColor: '#000',
  },
  cajados: {
    flex: 0.88,
    backgroundColor: '#f2ebc7',
    borderBottomRightRadius: 100,
  },
});
