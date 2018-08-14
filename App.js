import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import UsersInput from './components/users/UsersInput'
import UsersList from './components/users/UsersList'

export default class App extends React.Component {
    state = {
        users: [
            {name: 'Falah'},
            {name: 'John Saha'},
            {name: 'Hery'},
            {name: 'Aceng'},
            {name: 'Irma'},
            {name: 'Candra'},
            {name: 'Idrus'},
            {name: 'Falah'},
            {name: 'John Saha'},
            {name: 'Hery'},
            {name: 'Aceng'},
            {name: 'Irma'},
            {name: 'Candra'},
            {name: 'Idrus'}
        ]
    }
  render() {
    return (
      <View style={styles.container}>
          <UsersInput/>
          <UsersList users={this.state.users}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      paddingTop: 30,
      paddingHorizontal: 20,
      backgroundColor: '#F5FCFF',
      alignItems: 'center',
      justifyContent: 'space-between',
  },
});
