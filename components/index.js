import React, { Component } from 'react'
import ApolloClient from 'apollo-client'
import { ApolloLink } from 'apollo-link'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo';
import { onError } from 'apollo-link-error';
import Router from './router'
import { GITHUB_ACCESS_TOKEN } from '../config'

class App extends Component {
  createClient() {
    const httpLink = createHttpLink({ uri: 'https://api.github.com/graphql'})

    // handle network error
    const errorLink = onError(({ networkError }) => {
        if (networkError.statusCode === 401) {
          console.log(networkError)
        }
      // let errorMessage = networkError.statusCode === 401 ? 'Network error 104, handled' : 'link sucess'
      // console.log(errorMessage, networkError)
    })

    // apply widdleware to add access token to request
    let middlewareLink =  new ApolloLink((operation, forward) => {
      operation.setContext({
        headers: {
        authorization : `Bearer ${GITHUB_ACCESS_TOKEN}`
        }
      })
      return forward(operation)
    })
    const link = middlewareLink.concat(httpLink)
    

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
