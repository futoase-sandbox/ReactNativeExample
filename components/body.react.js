import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import Button from 'react-native-button';

const IMAGE_URL = 'https://avatars1.githubusercontent.com/u/72997?v=3&u=16045f7a1f2ac726ff0e727afc7625e329c90c91&s=120';

export default class BodyContainer extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      opacity: 1.0
    };
  }

  get style() {
    return StyleSheet.create({
      image: {
        width: 120,
        height: 120,
        borderRadius: 5
      },
      button: {
        fontSize: 20,
        height: 45,
        width: 100,
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#6495ED',
        color: 'white'
      },
      container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        padding: 0
      },
      column: {
        flex: 1,
        flexDirection: 'column',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center'
      }
    });
  }

  onPressButton() {
    this.setState({
      opacity: this.state.opacity - 0.1
    });
  }

  render() {
    return (
      <View>
        <View style={this.style.container}>
          <View>
            <View style={this.style.column}>
              <Image
                style={this.style.image}
                source={{uri: IMAGE_URL}}
                opacity={this.state.opacity}
              >
              </Image>
            </View>
            <View style={this.style.column}>
              <Button
                style={this.style.button}
                styleDisabled={{color: 'gray'}}
                onPress={() => this.onPressButton()}
              >
                アッ
              </Button>
            </View>
          </View>
        </View>
      </View>
    );
  }
}
