import React, {useState, useEffect} from 'react';
import {StyleSheet, View, ScrollView, Alert} from 'react-native';
import Tareas from '../componentes/Tareas';
import moment from 'moment';
import ActionBar from './ActionBar';
import CrearTarea from './CrearTareas';
import firebase from '../utils/firebase';
import 'firebase/firestore';
import {map} from 'lodash';

const db = firebase.firestore(firebase);

//sin esto no se reciben datos ni se muesttran de firebase.Si tb hiciese para android necesitaria otras configuraciones.

function ListTarea(props) {
  const {user} = props;
  const [showList, setShowList] = useState(true);
  //cuando entre ve la lista poniendolo en true
  const [tarea, setTarea] = useState([]);
  const [pasatBirthday, setPasatBirthday] = useState([]);
  const [reloadData, setReloadData] = useState(false);
  console.log(tarea);
  useEffect(() => {
    db.collection(user.uid)
      .orderBy('dateTarea', 'asc')
      .get()
      .then((response) => {
        const itemsArray = [];
        response.forEach((doc) => {
          const data = doc.data();
          data.id = doc.id;
          itemsArray.push(data);
        });
        setTarea(itemsArray);
      });
    setReloadData(false);
  }, [reloadData]);

  const formatData = (items) => {
    const currentDate = moment().set({
      hour: 0,
      minute: 0,
      second: 0,
      millisecond: 0,
    });

    const birthdayTempArray = [];
    const pasatBirthdayTempArray = [];

    items.forEach((item) => {
      const dateTarea = new Date(item.dateTarea.seconds * 1000);
      const dateRecuerdo = moment(dateTarea);
      const currentYear = moment().get('year');
      dateRecuerdo.set({year: currentYear});

      const diffDate = currentDate.diff(dateRecuerdo, 'days');
      const itemTemp = item;
      itemTemp.dateTarea = dateRecuerdo;
      itemTemp.days = diffDate;

      if (diffDate <= 0) {
        birthdayTempArray.push(itemTemp);
      } else {
        pasatBirthdayTempArray.push(itemTemp);
      }
    });

    setTarea(birthdayTempArray);
    setPasatBirthday(pasatBirthdayTempArray);
  };

  const deleteBirthday = (tarea) => {
    Alert.alert(
      'Eliminar Acción',
      `¿Estas seguro de eliminar los datos de ${tarea.cita} ${tarea.hora}`,
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Eliminar',
          onPress: () => {
            db.collection(user.uid)
              .doc(tarea.id)
              .delete()
              .then(() => {
                setReloadData();
              });
          },
        },
      ],
      {cancelable: false},
    );
  };

  return (
    <View style={styles.contenedor}>
      {showList ? (
        <ScrollView style={styles.scrollview}>
          {tarea.map((item, index) => (
            <Tareas key={index} tarea={item} deleteBirthday={deleteBirthday} />
          ))}
        </ScrollView>
      ) : (
        <CrearTarea
          user={user}
          setShowList={setShowList}
          setReloadData={setReloadData}
        />
      )}

      <ActionBar setShowList={setShowList} showList={showList} />
    </View>
  );
}
export default ListTarea;
const styles = StyleSheet.create({
  contenedor: {
    height: '100%',
    alignItems: 'center',
  },
  scrollview: {
    width: '100%',
    marginBottom: 50,
  },
});
