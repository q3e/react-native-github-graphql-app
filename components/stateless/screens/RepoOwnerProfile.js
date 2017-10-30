import React from 'react'
import { View, Text } from 'react-native'
import gql from 'graphql-tag'
import { graphql } from 'react-apollo'

const RepoOwnerProfile = ({
  data,
  navigation: {
    state: {
      params: { username }
    }
  }
}) => {
console.log(data)
return <View><Text> Profile @{username}</Text></View>

}

const getUserProfile = gql`
  query getUserProfile($login:String!){
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