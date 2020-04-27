/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import Carousel, {ParallaxImage} from 'react-native-snap-carousel';
import {Dimensions, StyleSheet, View, Platform} from 'react-native';

const {width: screenWidth} = Dimensions.get('screen');

export default class MyCarousel extends Component {
  constructor(props) {
    super();
    this.state = {
      errors: [],
    };
    this.props = props;
    this._carousel = {};
    this.init();
  }
  init() {
    this.state = {
      images: [
        {
          id: '13',
          thumbnail:
            'https://hss.habitatnepal.org/uploads/Slider/1586853626_thump.png',
          title: 'House Design Front Side',
        },
        {
          id: '14',
          thumbnail:
            'https://hss.habitatnepal.org/uploads/Slider/1586853598_thump.png',
          title: 'House Design Back Side',
        },
        {
          id: '15',
          thumbnail:
            'https://hss.habitatnepal.org/uploads/Slider/1586853571_thump.png',
          title: 'Floor Plan',
        },
      ],
    };

    //console.log('ThumbnailCarousel Props: ', this.props);
  }

  _ImageCarousel({item, index}, parallaxProps) {
    return (
      <View style={styles.container}>
        <ParallaxImage
          source={{uri: item.thumbnail}}
          containerStyle={styles.imageContainer}
          style={styles.image}
          parallaxFactor={0.4}
          {...parallaxProps}
        />
      </View>
    );
  }

  render() {
    return (
      <View>
        <Carousel
          sliderWidth={screenWidth}
          itemWidth={screenWidth}
          data={this.state.images}
          renderItem={this._ImageCarousel}
          hasParallaxImages={true}
          layout={'default'}
          loop={true}
          autoplay={true}
          firstItem={0}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    backgroundColor: '#FFF',
  },
  imageContainer: {
    flex: 1,
    width: screenWidth,
    height: screenWidth,
    margin: Platform.select({ ios: 0, android: 1 }), // Prevent a random Android rendering issue
    borderRadius: 8,
  },
  image: {
    resizeMode: 'center',
  },
});
