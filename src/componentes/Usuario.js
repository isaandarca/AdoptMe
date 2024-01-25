import React, {useState, useEffect} from 'react';
import {StyleSheet, StatusBar} from 'react-native';
import firebase from '../utils/firebase';
import 'firebase/auth';
import {SafeAreaView} from 'react-native-safe-area-context';
import Auth from './Auth';
import ListTarea from '../componentes/ListTareas';

function User() {
  const [user, setUser] = useState(undefined);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((response) => {
      setUser(response);
    });
  }, []);

  if (user === undefined) return null;

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.background}>
        {user ? <ListTarea user={user} /> : <Auth />}
      </SafeAreaView>
    </>
  );
}

export default User;
const styles = StyleSheet.create({
  background: {
    backgroundColor: '#fff',
    height: '100%',
    flex: 1,
  },
});
