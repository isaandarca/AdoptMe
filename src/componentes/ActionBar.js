import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import firebase from '../utils/firebase';

function ActionBar(props) {
  const {showList, setShowList} = props;

  return (
    <View style={styles.viewFooter}>
      <View style={styles.viewClose}>
        <Text style={styles.text} onPress={() => firebase.auth().signOut()}>
          Cerrar Sesión
        </Text>
      </View>
      <View style={styles.viewAdd}>
        <Text style={styles.text} onPress={() => setShowList(!showList)}>
          {showList ? 'Nueva Nota' : 'Cancelar Nota'}
        </Text>
      </View>
    </View>
  );
}
export default ActionBar;
const styles = StyleSheet.create({
  viewFooter: {
    position: 'absolute',
    bottom: 0,
    flexDirection: 'row',
    width: '100%',
    height: 50,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  viewClose: {
    backgroundColor: '#828282',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  viewAdd: {
    backgroundColor: '#8c52ff',
    borderRadius: 50,
    paddingVertical: 10,
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
  },
});
