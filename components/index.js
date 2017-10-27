import React, { Component } from 'react'
import ApolloClient from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo';
import Router from './router'

class App extends Component {
  createClient() {
    const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql'})
    const middleareLink =  new ApolloLink((operation, forward) => {
      operation.setContext({
        headers: {
          authorization: 'GITHUB_ACCESS_TOKEN'
        }
      })
      return forward(operation)
    })
    const link = middleareLink.concat(httpLink)

    // Initialize Apollo Client with URL to our server
    return new ApolloClient({
    link: link,
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
