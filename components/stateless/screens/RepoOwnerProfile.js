import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { graphql, compose } from 'react-apollo'
import queries from '../../../github-graphql.queries'

const RepoOwnerProfile = ({
  fetchOrg,
  fetchUser,
  navigation: {
    state: {
      params: { username }
    }
  }
}) => {
  console.log('fetchOrg', fetchOrg)
  console.log('fetchUser', fetchUser)
  if(!fetchOrg.error || !fetchUser.error) {
    if(fetchOrg.loading || fetchUser.loading) {
      return <Text>Fetching github organization or user profile...</Text>
    }else if(fetchOrg.organization) {
      return <OrgProfileView organization={fetchOrg.organization} />
    }elseif(fetchUser.user) {
      return <UserProfileView user={fetchUser.user} />
    }
  }else return <Text>Error Fetching github organization or user profile...</Text>


// Execute a GraphQL query and makes the results
// available on the `data` prop of our wrapped component
// docs: https://www.apollographql.com/docs/react/basics/setup.html#graphql-config
export default compose( // allows combining multiple enhancers
  graphql(
    // the GraphQL document
    queries.fetchOrg,
    // the config object
    {
      name: "fetchOrg", // attaches response of this query to props of component not the general data prop
      // compute options from props - query variable computed from the navigation prop
      options: ({ navigation: { state: { params: { username }}} }) => ({ variables: { login: username } }),
      notifyOnNetworkStatusChange: true
    }
  ),
  graphql(
    queries.fetchUser,
    {
      name: "fetchUser",
      options: ({ navigation: { state: { params: { username }}} }) => ({ variables: { login: username } }),
      notifyOnNetworkStatusChange: true
    }
  )
)(RepoOwnerProfile)

const OrgProfileView = ({ organization: { name, description, avatarUrl, members }}) => {
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
const UserProfileView = ({ user: { name, bio, avatarUrl, repositories, followers, following, starredRepositories}}) =>{
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
          <Text> Profile @{username}</Text>
        </View>
      </View>
    </ScrollView>
  )
}
