import React, { Component } from 'react'
import ApolloClient from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo';
import Router from './router'

class App extends Component {
  createClient() {
    // Initialize Apollo Client with URL to our server
    return new ApolloClient({
    link: new HttpLink({ uri: 'https://api.github.com/graphql' }),
    cache: new InMemoryCache(),
    })
  }
  render () {
    return (
      <ApolloProvider client={this.createClient()}>
        <Router />
      </ApolloProvider>
    )
  }
}

export default App
