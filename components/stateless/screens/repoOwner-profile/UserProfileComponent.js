import React from 'react'
import { ScrollView, View, Image, Text } from 'react-native'

// User Profile view
// Data from Github 'User' Query
const UserProfileComponent = ({ data }) => {
  if(data.loading) return <Text>Loading User Profile</Text>
  else {
    const { name, bio, avatarUrl, repositories, followers, following, starredRepositories } = data.user // extracted after response loads
    return(
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
              <Text>Bio: {bio}</Text>
            </View>
            <View style={{ flex: 1}}>
                <Text>Total Repos: {repositories.totalCount}</Text>
            </View>
            <View style={{ flex: 1}}>
              <Text>starred Repos: {starredRepositories.totalCount}</Text>
            </View>
            <View style={{ flex: 1}}>
              <Text>followers: {followers.totalCount}</Text>
            </View>
            <View style={{ flex: 1}}>
              <Text>following: {following.totalCount}</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

export default UserProfileComponent
