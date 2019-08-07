import React, { Component } from 'react'
import {
  Animated,
  Text,
  StyleSheet,
  View,
  ScrollView,
  FlatList,
  Image,
  ImageBackground,
  Dimensions,
  Platform,
  TouchableOpacity
} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import * as theme from '../theme';
import resorts from '../assets/data/resortData.js'



class Articles extends React.Component {
  scrollX = new Animated.Value(0);

  
  renderList = () => {

      return resorts.map(place => {
          return<Text style={{ fontSize: theme.sizes.font * 1.2, margin: theme.margin.sm }}  onPress={() => this.props.navigation.navigate('Place', {place: place})}  >{place.name}</Text>
      })
  }

  render() {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: theme.sizes.padding }}
      >
          <Text style={{ fontSize: theme.sizes.font * 1.4, margin: theme.sizes.margin}}>Japan Resorts</Text>

      {this.renderList()}
      </ScrollView>
    )
  }
}

Articles.defaultProps = {
  destinations: resorts
};

export default Articles;