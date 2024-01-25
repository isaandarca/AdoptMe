import React, {useState} from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import firebase from '../utils/firebase';
import 'firebase/firestore';
const db = firebase.firestore(firebase);

//para iniciar la base de datos

//moment para formatear la fecha.En la documentacion nos pone como usarlo LL en este caso
function CrearTarea(props) {
  const {user, setShowList, setReloadData} = props;
  const [isDatePicketVisible, setIsDatePicketVisible] = useState(false);
  const [formData, setFormData] = useState({});
  const [formError, setFormError] = useState({});

  const hideDatePicker = () => {
    setIsDatePicketVisible(false);
  };
  const handlerConfirm = (date) => {
    const dateTarea = date;
    dateTarea.setHours(0);
    dateTarea.setMinutes(0);
    dateTarea.setSeconds(0);
    setFormData({...formData, dateTarea});

    hideDatePicker();
  };
  //hacemos una contante para no modificar los props
  const showDatePicker = () => {
    setIsDatePicketVisible(true);
  };
  const onChange = (e, type) => {
    setFormData({...formData, [type]: e.nativeEvent.text});
  };

  const onSubmit = () => {
    let errors = {};
    if (!formData.cita || !formData.hora) {
      if (!formData.cita) errors.cita = true;
      if (!formData.hora) errors.hora = true;
      // if (!formData.dateTarea) errors.dateTarea = true;
    } else {
      const data = formData;
      // data.dateTarea.setYear(0);
      db.collection(user.uid)

        .add(data)
        .then(() => {
          setReloadData(true);
          setShowList(true);
        })
        .catch(() => {
          setFormError({cita: true, hora: true});
        });
    }

    setFormError(errors);
  };

  return (
    <>
      <Image
        style={styles.logo}
        source={require('../imagenes/pruebaportadados.png')}
      />

      <View style={styles.container}>
        <TextInput
          style={[styles.input, formError.cita && {borderColor: 'red'}]}
          label="Recordatorio"
          placeholder="Escribe la acción"
          placeholderTextColor="#969696"
          onChange={(e) => onChange(e, 'cita')}
        />
        <TextInput
          style={[styles.input, formError.hora && {borderColor: 'red'}]}
          label="Fecha"
          placeholder="Registra el día y mes"
          placeholderTextColor="#969696"
          onChange={(e) => onChange(e, 'hora')}
        />
        <View
          style={[
            styles.input,
            styles.datepicker,
            formError.dateTarea && {borderColor: 'red'},
          ]}>
          <Text style={styles.fecha} onPress={showDatePicker}>
            {formData.dateTarea
              ? moment(formData.dateTarea).format('LL')
              : 'Año de la acción'}
          </Text>
        </View>
        <Button icon="pencil-circle" onPress={onSubmit}>
          Registrar nota de mi mascota
        </Button>
      </View>
      <DateTimePickerModal
        isVisible={isDatePicketVisible}
        mode="date"
        onConfirm={handlerConfirm}
        onCancel={hideDatePicker}
      />
    </>
  );
}
export default CrearTarea;
const styles = StyleSheet.create({
  container: {
    height: '50%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    height: 45,
    color: '#000',
    width: '80%',
    marginBottom: 18,
    backgroundColor: 'transparent',
    paddingHorizontal: 20,

    fontSize: 18,
    borderWidth: 1,
    borderColor: '#828282',
  },
  datepicker: {
    justifyContent: 'center',
  },
  fecha: {
    fontSize: 18,
    color: '#828282',
  },

  logo: {
    width: '80%',
    height: 200,

    marginBottom: 50,
    borderTopLeftRadius: 50,
    borderBottomRightRadius: 50,
  },
});
