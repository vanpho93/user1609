import React, { Component } from 'react';
import { SignIn } from './components/SignIn';
import { GoPlay } from './components/GoPlay';
import { StackNavigator } from 'react-navigation';

const Stack = StackNavigator({
  SignIn: { screen: SignIn },
  GoPlay: { screen: GoPlay }
});

export default class App extends Component {
  render() {
    return <Stack />;
  }
}
