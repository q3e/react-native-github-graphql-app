import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, StatusBar } from 'react-native';
import { SearchBar } from 'react-native-elements'

export let SEARCH_QUERY = ''
const Home = ({ navigation: { navigate }}) => {
  console.log('Home rendered!!')
  return (
    <View style={{flex: 1}}>
    <StatusBar hidden />
        <View style={[{flex: 3, backgroundColor: 'lightblue'}, styles.container]}>
        <Text>Aurity Code Challenge</Text>
        <Text>Github Search App.</Text>
      </View>

      <View style={{flex: 4, backgroundColor: 'grey'}} >
        <View style={{flex:1}}>
        <SearchBar
          lightTheme
          onChangeText={(text) => SEARCH_QUERY = text}
          placeholder='Search Github'
        />
        <Button 
          onPress={() => navigate('ReposList')}
          title="Search"
        />
        </View>
      </View>
      <View style={{flex:1, flexDirection: 'row'}}>
        <View style={{flex: 1, backgroundColor: 'cyan'}} />
        <View style={{flex: 1, backgroundColor: 'skyblue'}} />
      </View>
  </View>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Home