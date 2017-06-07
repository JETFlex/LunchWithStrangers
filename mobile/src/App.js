import React, { Component } from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import SessionForm from './components/session/sessionContainer';

export default class App extends Component {
  componentWillMount() {
    let username = AsyncStorage.getItem('username').then(user => console.log(user));
    debugger
  }

  render() {
    return (
      <View>
        < SessionForm />
      </View>
    );
  }
}

// TODO:
import { requestUser } from './actions/user_actions';

window.requestUser = requestUser;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
