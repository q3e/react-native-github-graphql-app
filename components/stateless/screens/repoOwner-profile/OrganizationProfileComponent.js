import React from 'react'
import { ScrollView, View, Image, Text } from 'react-native'

// Organization Profile view
// Data from Github 'Organization' Query
const OrganizationProfileComponent = ({ data }) => {
  if(data.loading) return <Text>Loading Organization Profile</Text>
  else {
    const{ name, description, avatarUrl, members, repositories } = data.organization // extracted after response loads
    return (
      <ScrollView>
        <View style={{ flex: 1}}>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Image
              style={{width: 100, height: 100}}
              source={{uri: avatarUrl}}
            />
          </View>
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <View style={{flex: 1}}>
              <Text>Name: {name}</Text>
            </View>
            <View style={{ flex: 1}}>
                <Text>About: {description}</Text>
            </View>
            <View style={{ flex: 1}}>
              <Text>Repos: {repositories.totalCount}</Text>
            </View>
            <View style={{ flex: 1}}>
              <Text>members: {members.totalCount}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default OrganizationProfileComponent
