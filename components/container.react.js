import React from 'react';
import { View } from 'react-native';
import HeaderContainer from './header.react';
import BodyContainer from './body.react';

export default class AppContainer extends React.Component {
  constructor(props) {
    super(props);
  }

  get containerStyle() {
    return {
      marginTop: 20
    };
  }

  render() {
    return (
      <View style={this.containerStyle}>
        <HeaderContainer/>
        <BodyContainer/>
      </View>
    );
  }
}
