import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const RepoOwnerProfile = ({
  data: { loading, error, networkStatus, user },
  navigation: {
    state: {
      params: { username }
    }
  }
}) => {
  if (!error) {
    if (loading) {
      return <Text>fetching github user...</Text>
    } else {
      const { name, bio, avatarUrl, repositories, followers, following, starredRepositories} = user
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
// docs: https://www.apollographql.com/docs/react/basics/setup.html#graphql-config
export default graphql(
  // the GraphQL document
  getUserProfile,
  // the config object
  {
    // compute options from props - query variable computed from the navigation prop
    options: ({ navigation: { state: { params: { username }}} }) => ({ variables: { login: username } }),
    notifyOnNetworkStatusChange: true
  }
)(RepoOwnerProfile)