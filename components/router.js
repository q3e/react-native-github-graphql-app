import { StackNavigator } from 'react-navigation'
import Home from './stateless/screens/Home'
import ReposList from './stateless/screens/ReposList'

const Router = StackNavigator({
  Home: { screen: Home },
  ReposList: { screen: ReposList }
  // ContributorsList: { ContributorsList }
})

export default Router
