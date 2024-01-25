import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';

import {Avatar} from 'react-native-paper';
function Tareas(props) {
  const {tarea, deleteBirthday} = props;
  const {cita, hora, dateTarea} = tarea;
  const fecha = tarea.seconds;

  return (
    <TouchableOpacity style={styles.card} onPress={() => deleteBirthday(tarea)}>
      <Avatar.Icon size={24} icon="paw" />
      <Text>{cita}</Text>
      <Text>{hora}</Text>
    </TouchableOpacity>
  );
}
export default Tareas;
const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 60,
    alignItems: 'center',
    paddingHorizontal: 10,
    margin: 10,
    borderRadius: 15,
    backgroundColor: '#f7bd4f',
  },
});
