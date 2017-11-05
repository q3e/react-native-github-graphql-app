import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { graphql, compose } from 'react-apollo'
import queries from '../../../../github-graphql.queries'
import UserProfileComponent from './UserProfileComponent'
import OrganizationProfileComponent from './OrganizationProfileComponent'

const RepoOwnerProfile = ({
  navigation: {
    state: {
      params: { username, typeOfUser }
    }
  }
}) => {
  // Check github username type & render the relevant component already wrapped in a specific username query
  if(typeOfUser === 'User'){
    return <UserProfile username={username}/> // pass route prarams as props to be used in graphql HoC wrapper
  }else if(typeOfUser === 'Organization'){
    return <OrganizationProfile  username={username}/>
  }else return <Text>Error Fetching Profile</Text>
}

// Execute a GraphQL query and makes the results
// available on the `data` prop of our wrapped component
const OrganizationProfile = graphql(
    // the GraphQL document
    queries.fetchOrg,
    // the config object
    {
      // compute options from props - query variable computed from the navigation prop
      options: ({ username }) => ({ variables: { login: username } }), // extract props & make it a query variable
    }
)(OrganizationProfileComponent)

const UserProfile = graphql(
    queries.fetchUser,
    {
      options: ({ username }) => ({ variables: { login: username } }),
    }
  )(UserProfileComponent)

export default RepoOwnerProfile
