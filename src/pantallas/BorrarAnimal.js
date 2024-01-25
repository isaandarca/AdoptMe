import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  LayoutAnimation,
  TouchableOpacity,
} from 'react-native';
import {Card, Button, Paragraph} from 'react-native-paper';
function BorrarAnimal() {
  const [expanded, setExpanded] = useState(false);
  return (
    <View>
      <Card>
        <Card.Cover source={require('../imagenes/acogida.png')} />
        <Paragraph style={styles.texto}>
          Muchos animales al ser rescatados necesitan una familia de acogida
          mientras son adoptados.
        </Paragraph>
      </Card>

      <Card>
        <Card.Cover source={require('../imagenes/voluntariado.png')} />
        <Paragraph style={styles.texto}>
          Las protectoras y asociaciones necesitan personas que les ayuden a
          pasear animales o a su limpieza.
        </Paragraph>
      </Card>

      <Card>
        <Card.Cover source={require('../imagenes/colaboracuatro.png')} />
        <Paragraph style={styles.texto}>
          Las aportaciones económicas ayudan a afrontar los gastos veterinarios
          y de alimentación.
        </Paragraph>
      </Card>
      <View style={styles.press}>
        <TouchableOpacity
          onPress={() => {
            LayoutAnimation.configureNext(LayoutAnimation.Presets.spring);
            setExpanded(!expanded);
          }}>
          <Text style={styles.textos}>
            Aprieta para {expanded ? 'cerrar' : 'colaborar'}!
          </Text>
        </TouchableOpacity>
        {expanded && (
          <View style={styles.tile}>
            <Text>IBAN:2082-7789-0987-0987</Text>
            <Text>IBAN:2076-9876-6754-7654</Text>
          </View>
        )}
      </View>
    </View>
  );
}
export default BorrarAnimal;
const styles = StyleSheet.create({
  imagen: {
    height: 200,
  },
  press: {
    width: '100%',

    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: 'pink',
  },
  textos: {
    fontSize: 20,
  },

  texto: {
    marginLeft: 10,
    alignContent: 'center',
    alignItems: 'center',
    marginRight: 10,
    marginTop: 5,
  },
});
