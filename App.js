import React, { Component } from 'react';
import { SignIn } from './SignIn';
import { GoPlay } from './GoPlay';
import { StackNavigator } from 'react-navigation';

const Stack = StackNavigator({
  SignIn: { screen: SignIn },
  GoPlay: { screen: GoPlay }
}, { headerMode: 'none' });

export default class App extends Component {
  render() {
    return <Stack />;
  }
}
