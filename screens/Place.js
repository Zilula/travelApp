
import React from 'react';
import { Text, View } from 'react-native';
import * as theme from '../theme';
import getResortData from '../services/index'


class PlaceScreen extends React.Component {
  state = {
    resort: null
  }

  componentDidMount() {
    const { navigation } = this.props
    const place = navigation.getParam('place', 'NO-PARAMS GIVEN');
    getResortData(place.id)
      .then(resort => {
        console.log('API CALl', resort)
        this.setState({resort: resort})
      })

  }

  render() {
    const { navigation } = this.props
    const place = navigation.getParam('place', 'NO-PARAMS GIVEN');

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: theme.margin.xl }}>
      <Text style={{ fontSize: theme.sizes.font *1.5 }}>
      {place.name}
      </Text>
      <Text style={{ fontSize: theme.sizes.font *1.2 }}>
      {place.id}
      </Text>
      </View>
    );
  }
}

export default PlaceScreen