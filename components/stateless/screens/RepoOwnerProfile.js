import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const RepoOwnerProfile = ({
  // data: { loading, error, networkStatus, user: {
  //   name, bio, avatarUrl, repositories, followers, following, starredRepositories
  //   }
  // },
  data,
  navigation: {
    state: {
      params: { username }
    }
  }
}) => {
  if (!data.error) {
    if (data.loading) {
      return <Text>fetching github user...</Text>
    } else {
      const { name, bio, avatarUrl, repositories, followers, following, starredRepositories} = data.user
      console.log(data)
      return (
        <ScrollView>
          <View style={{ flex: 1}}>
            <Image
              style={{flex: 2}}
              source={{uri: avatarUrl}}
            />
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
              <Text> Profile @{username}</Text>
            </View>
          </View>
        </ScrollView>
       )
    }
  }
}
const getUserProfile = gql`
  query getUserProfile($login: String!){
    user(login: $login) {
      name
      bio
      avatarUrl
      followers {
        totalCount
      }
      starredRepositories {
        totalCount
      }
      following{
        totalCount
      }
      repositories{
        totalCount
      }
    }
  }`

// Execute a GraphQL query and makes the results
// available on the `data` prop of our wrapped component
export default graphql(getUserProfile, {
    // 'username' is available to us on the navigation prop --> see our router navigation options
    // then make `graphql` compute query variable from that prop
    options: ({ navigation: { state: { params: { username }}} }) => ({ variables: { login: username } }), 
    notifyOnNetworkStatusChange: true
})(RepoOwnerProfile)