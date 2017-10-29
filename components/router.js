import React from 'react'
import { StackNavigator } from 'react-navigation'
import Home from './stateless/screens/Home'
import ReposList from './stateless/screens/ReposList'
import { SEARCH_QUERY } from './stateless/screens/Home'

const Router = StackNavigator({
  Home: { screen: Home },
  ReposList: { screen: props => <ReposList {...props} searchQuery={SEARCH_QUERY} /> }
  // ContributorsList: { ContributorsList }
})

export default Router
