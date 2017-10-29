import React, { Component } from 'react';
import { Text, FlatList  } from 'react-native';
import { graphql } from 'react-apollo';
import gql from 'graphql-tag';

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when ready
const ReposList = ({ data: { loading, error, search }, searchQuery}) => {
  if(!error){
    if(loading){
      return <Text>fetching posts... </Text>
    }else {
      const responseData = search.edges
      console.log(searchQuery)
      return (
        <FlatList
          data={responseData}
          renderItem={({item}) => <Text>{item.node.nameWithOwner}</Text>}
        />
      )
    }
  }else <Text> Error Fetching posts</Text>
}

// The `graphql` wrapper executes a GraphQL query and makes the results
// available on the `data` prop of the wrapped component (ReposList here)
export default graphql(gql`{
  search(type: REPOSITORY, query: "react", first: 20) {
    edges {
      node {
        ... on Repository {
          nameWithOwner
          owner {
            login
          }
        }
      }
    }
  }
}`, { options: { notifyOnNetworkStatusChange: true } })(ReposList);
