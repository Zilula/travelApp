
import React from 'react';
import { Text, View } from 'react-native';
import * as theme from '../theme';


class PlaceScreen extends React.Component {
  render() {
    const { navigation } = this.props
    const place = navigation.getParam('place', 'NO-PARAMS GIVEN');

    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', margin: theme.margin.xl }}>
      <Text style={{ fontSize: theme.sizes.font *1.5 }}>
      {place.location}
      </Text>
      <Text style={{ fontSize: theme.sizes.font *1.2 }}>
      {place.description}
      </Text>
      </View>
    );
  }
}

export default PlaceScreen