import React from 'react'
import {StackNavigator, navigationOptions} from 'react-navigation'
import Home from './stateless/screens/Home'
import ReposList from './stateless/screens/ReposList'
import ContributorsList from './stateless/screens/ContributorsList'
import RepoOwnerProfile from './stateless/screens/repoOwner-profile/RepoOwnerProfile'
import { SEARCH_QUERY } from './stateless/screens/Home'

const Router = StackNavigator({
  Home: { screen: Home, navigationOptions: { title: 'Home'}  },
  ReposList: { screen: props => <ReposList {...props} searchQuery={SEARCH_QUERY} />, navigationOptions: {title: `"${SEARCH_QUERY}" Repos Result`}},
  ContributorsList: { screen: ContributorsList, navigationOptions: {title: 'List of Contributors'} },
  OwnerProfile: { screen: RepoOwnerProfile, navigationOptions: {title: 'Repo Owner Profile'}}
})

export default Router
