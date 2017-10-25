import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Alert } from 'react-native';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: 'me'};
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <View style={[{flex: 3, backgroundColor: 'lightblue'}, styles.container]}>
          <Text>Aurity Code Challenge</Text>
          <Text>Github Search App.</Text>
        </View>

        <View style={{flex: 4, backgroundColor: 'grey'}} >
          <View style={[{flex:1}, styles.container]}>
          <TextInput
            style={{height: 40, width: 150}}
            placeholder="Search GitHub"
            onChangeText={text => this.setState({text})}
          />
          <Button
            onPress={() => { Alert.alert('You tapped the button!')}}
            title="Search"
          />
          </View>
        </View>
        <View style={{flex:1, flexDirection: 'row'}}>
          <View style={{flex: 1, backgroundColor: 'cyan'}} />
          <View style={{flex: 1, backgroundColor: 'skyblue'}} />
        </View>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
