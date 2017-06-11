import React, { Component } from 'react';
import { Text, View, ListView, Button } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { toArray } from '../../reducers/selectors';
import { AsyncStorage } from 'react-native';
import CategoriesIndexItem from './categories_index_item_container';

class CategoriesIndex extends Component {
    constructor(props) {
        super(props);

        this.ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.handlePress = this.handlePress.bind(this);
    }

    componentWillMount() {
      const currentUserID = parseInt(this.props.data);
      this.props.fetchCurrentUser(currentUserID);
      this.props.requestCategories();
    }

    componentWillReceiveProps(newProps) {
      if (!AsyncStorage.getItem('username')) {
        Actions.splash();
      }
    }


    handlePress(val, id) {
        val.preventDefault();
        Actions.CategoriesIndexItem(id);
    }

    onButtonSubmit() {
      this.props.logout();
    }

    render() {
      const categories = this.ds.cloneWithRows(this.props.categories);


      return(
          <View
              linkAction={ Actions.categoriesIndex }
              style={{backgroundColor: 'green', width: 150}}>
              <Text>Categories</Text>

              <ListView
                dataSource={categories}
                enableEmptySections={true}
                renderRow={(rowData) =>
                    <Button
                        color= 'white'
                        categories={rowData}
                        title={rowData.title}
                        id={rowData.id}
                        onPress={ val => this.handlePress(val, rowData.id) }/>}
              />

            <Button
              style={{marginTop: 20}}
              onPress={this.onButtonSubmit.bind(this)}
              title="Log Out">
            </Button>
          </View>
      );
    }
}

export default CategoriesIndex;
