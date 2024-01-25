import React from 'react';
import {
  StyleSheet,
  View,
  Image,
  Dimensions,
  TouchableWithoutFeedback,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import {Title} from 'react-native-paper';

const {width} = Dimensions.get('window');
const ITEM_WIDTH = Math.round(width * 0.7);

function CarrouselInicio(props) {
  const {data, navigation} = props;
  return (
    <Carousel
      layout="stack"
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
  const {Nombre, Imagen, id} = data.item;

  const onNavigation = () => {
    navigation.navigate('animal', {id: id});
  };

  return (
    <TouchableWithoutFeedback onPress={onNavigation}>
      <View style={styles.card}>
        <Image style={styles.image} source={{uri: Imagen}} />
        <Title style={styles.title}>{Nombre}</Title>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  card: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.5,
    shadowRadius: 8,
  },

  image: {
    width: '110%',
    height: 450,
    borderRadius: 20,
    paddingBottom: 40,
  },
  title: {
    marginHorizontal: 10,
    marginTop: 10,
  },
});

export default CarrouselInicio;
