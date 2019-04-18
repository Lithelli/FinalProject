import React, { Component } from 'react'
import  Icon  from 'react-native-vector-icons/MaterialCommunityIcons';

import MapView from 'react-native-maps'

export default class App extends Component {
  static navigationOptions = ({ navigation }) => {
    return {
        headerBackTitle: null,
        title: "Map",
        headerTitleStyle: { fontSize: 25 },
        headerRight: 
        <Icon
        name="diamond-stone"
        color="blue"
        size ={45}
        style = {{paddingRight: 10}}
        />
    }
}
  render() {
    return (
      <MapView
        style={{flex: 1}}
        region={{
          latitude: 33.5186,
          longitude: -86.8104,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
      />
    );
  }
}

