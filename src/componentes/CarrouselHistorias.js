import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
  Text,
  ScrollView,
} from 'react-native';

import Carousel from 'react-native-snap-carousel';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = Math.round(width * 0.7);

function CarrouselHistorias(props) {
  const {data, navigation} = props;
  console.log(data);
  return (
    <Carousel
      layout="tinder"
      layoutCardOffset="20"
      data={data}
      renderItem={(item) => <RenderItem data={item} navigation={navigation} />}
      sliderWidth={width}
      itemWidth={ITEM_WIDTH}
    />
  );
}

function RenderItem(props) {
  const {data, navigation} = props;
  const {imagen, descripcion} = data.item;

  const onNavigation = () => {
    navigation.navigate('home', {id: id});
  };

  return (
    <TouchableWithoutFeedback onPress={onNavigation}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: imagen}} />
        <ScrollView style={styles.title}>
          <Text style={styles.texto}>{descripcion}</Text>
        </ScrollView>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default CarrouselHistorias;

const styles = StyleSheet.create({
  card: {
    marginTop: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
    height: '100%',
  },

  image: {
    width: '110%',
    height: 440,
    borderRadius: 20,
    paddingBottom: 40,
  },
  title: {
    marginHorizontal: 10,
    marginTop: 20,
    backgroundColor: '#fff',
    width: '100%',
    height: 110,
    borderRadius: 20,
    marginBottom: 20,
  },
  texto: {
    marginLeft: 10,
    marginTop: 20,
    marginRight: 10,
    fontSize: 13,
    color: '#545454',
  },
});
