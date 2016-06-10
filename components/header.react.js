import React from 'react';
import { StyleSheet, View, Text, Switch } from 'react-native';

export default class HeaderContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      switchIs: false,
    };
  }

  onChangeSwitch(value) {
    this.setState({
      switchIs: value
    })
  }

  get style() {
    return StyleSheet.create({
      text: {
        marginTop: 20,
        textAlign: 'center'
      },
      container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0
      },
      row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
      },
      column1: {
        flex: 1,
        padding: 10
      },
      column2: {
        flex: 2,
        padding: 10
      }
    });
  }

  render () {
    return (
      <View>
        <Text style={this.style.text}>React Native Example</Text>
        <View style={this.style.container}>
          <View style={this.style.row}>
            <View style={this.style.column1}>
              <Switch
                onValueChange={(value) => {this.onChangeSwitch(value)}}
                style={{marginBottom: 10}}
                value={this.state.switchIs}
              />
            </View>
            <View style={this.style.column2}>
              <Text>{String(this.state.switchIs)}</Text>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
