import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Routes from './routes';
import { Actions } from 'react-native-router-flux';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.getToken = this.getToken.bind(this);
    this.verifyToken = this.verifyToken.bind(this);
  }

  componentWillMount() {
    this.getToken();
  }

  componentDidMount() {
    this.getToken();
  }

  async getToken() {
    try {
      let sessionToken = await this.props.storage.getItem('sessionToken');

      if (!sessionToken) {
        console.log("Token not set");
      } else {
        this.verifyToken(sessionToken)
      }
    } catch (error) {
      console.log("Error finding token");
    }
  }

  async verifyToken(token) {
    const sessionToken = token;

    try {
      let response = await fetch('http://localhost:3000/api/verify?session%5Bsession_token%5D=' + sessionToken);
      let res = await response.text();
      if (response.status >= 200 && response.status < 300) {
        //Verified token means user is logged in so we redirect them home.
        console.log('user still logged in');
        Actions.categoriesIndex();
      } else {
        //Handle error
        const error = res;
        throw error;
      }
    } catch (error) {
      console.log("error response: " + error);
    }
  }

  render() {
    return (
      <View style={styles.viewStyle}>
        < Routes />
      </View>
    );
  }
}

const styles = {
  viewStyle: {
    flex: 1,
    backgroundColor: '#008080'
  }
};
