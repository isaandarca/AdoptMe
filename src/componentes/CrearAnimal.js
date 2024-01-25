import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {TextInput, Headline, Button} from 'react-native-paper';

function CrearAnimal(props) {
  const {navigation} = props;
  const [Nombre, setNombre] = useState('');
  const [Sexo, setSexo] = useState('');
  const [Especie, setEspecie] = useState('');
  const [Edad, setEdad] = useState('');
  const [Raza, setRaza] = useState('');
  const [Color, setColor] = useState('');
  const [Vacunas, setVacunas] = useState('');
  const [Localidad, setLocalidad] = useState('');
  const [Estado, setEstado] = useState('');
  const [Imagen, setImagen] = useState('');
  const [id, setId] = useState('');

  const Registro = () => {
    fetch('http://localhost:3000/registrarAnimal', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        Nombre: Nombre,
        Sexo: Sexo,
        Especie: Especie,
        Edad: Edad,
        Raza: Raza,
        Color: Color,
        Vacunas: Vacunas,
        Localidad: Localidad,
        Estado: Estado,
        Imagen: Imagen,
        id: id,
      }),
    })
      .then(function (results) {
        return results.json();
      })

      .then(function (res) {
        console.log(res);
      });

    setSexo('');
    setEspecie('');
    setEdad('');
    setRaza('');
    setColor('');
    setVacunas('');
    setLocalidad('');
    setEstado('');
    setImagen('');
  };

  const onChangeNombre = (e) => {
    setNombre(e.nativeEvent.text);
  };
  const onChangeSexo = (e) => {
    setSexo(e.nativeEvent.text);
  };
  const onChangeEspecie = (e) => {
    setEspecie(e.nativeEvent.text);
  };
  const onChangeEdad = (e) => {
    setEdad(e.nativeEvent.text);
  };
  const onChangeRaza = (e) => {
    setRaza(e.nativeEvent.text);
  };
  const onChangeColor = (e) => {
    setColor(e.nativeEvent.text);
  };
  const onChangeVacunas = (e) => {
    setVacunas(e.nativeEvent.text);
  };
  const onChangeLocalidad = (e) => {
    setLocalidad(e.nativeEvent.text);
  };
  const onChangeEstado = (e) => {
    setEstado(e.nativeEvent.text);
  };
  const onChangeImagen = (e) => {
    setImagen(e.nativeEvent.text);
  };
  const onChangeId = (e) => {
    setId(e.nativeEvent.text);
  };

  return (
    <View style={styles.todo}>
      <View>
        <Headline style={styles.titulo}>
          Crear Animal en perfil Público
        </Headline>
      </View>
      <View style={styles.contenedor}>
        <TextInput
          style={styles.input}
          value={Nombre}
          label="Nombre"
          placeholder="Escribir nombre de animal"
          onChangeText={(value) => setNombre(value)}
        />
        <TextInput
          style={styles.input}
          value={Sexo}
          label="Sexo"
          placeholder="Escribir sexo de animal"
          onChangeText={(value) => setSexo(value)}
        />
        <TextInput
          style={styles.input}
          value={Especie}
          label="Especie"
          placeholder="Escribir especie de animal"
          onChangeText={(value) => setEspecie(value)}
        />
        <TextInput
          style={styles.input}
          value={Edad}
          label="Edad"
          placeholder="Cachorro/Joven/Adulto"
          onChangeText={(value) => setEdad(value)}
        />
        <TextInput
          style={styles.input}
          value={Raza}
          label="Raza"
          placeholder="Escribir nombre de animal"
          onChangeText={(value) => setRaza(value)}
        />
        <TextInput
          style={styles.input}
          value={Color}
          label="Color"
          placeholder="Escribir color de animal"
          onChangeText={(value) => setColor(value)}
        />
        <TextInput
          style={styles.input}
          value={Vacunas}
          label="Vacunas"
          placeholder="Tiene vacunas:SI/NO"
          onChangeText={(value) => setVacunas(value)}
        />
        <TextInput
          style={styles.input}
          value={Localidad}
          label="Protectora "
          placeholder="Protectora responsable"
          onChangeText={(value) => setLocalidad(value)}
        />
        <TextInput
          style={styles.input}
          value={Estado}
          label="Estado"
          placeholder="En adopción"
          onChangeText={(value) => setEstado(value)}
        />
        <TextInput
          style={styles.input}
          value={Imagen}
          label="Imagen"
          placeholder="Imagen Animal"
          onChangeText={(value) => setImagen(value)}
        />
        <TextInput
          style={styles.input}
          value={id}
          label="Id"
          placeholder="Escribe id animal"
          onChangeText={(value) => setId(value)}
        />

        <Button icon="pencil-circle" onPress={Registro}>
          Crear Animal
        </Button>
      </View>
    </View>
  );
}
export default CrearAnimal;
const styles = StyleSheet.create({
  titulo: {
    textAlign: 'center',
    marginBottom: 5,
    fontSize: 18,
  },
  contenedor: {
    height: '90%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',

    // marginHorizontal:'2.5%',
  },
  input: {
    // height:45,
    // marginBottom:10,
    backgroundColor: 'transparent',
    height: 50,
    width: '80%',
    marginBottom: 10,
  },
  todo: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
