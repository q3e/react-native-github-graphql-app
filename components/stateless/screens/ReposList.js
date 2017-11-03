import React, { Component } from 'react';
import { Text, FlatList, View } from 'react-native';
import { graphql } from 'react-apollo';
import queries from '../../../github-graphql.queries'

// The data prop, which is provided by the wrapper below contains,
// react-navigation also provides a 'navigation' prop
const ReposList = ({
  data: { loading, error, search, networkStatus, refetch },
  searchQuery,
  navigation:{ navigate }
}) => {
  if(!error){
    if(loading){
      return <Text>fetching posts... </Text>
    }else {
      const responseData = search.edges
      console.log(searchQuery) // did we need to pass props :(
      return (
        <FlatList
          data={responseData}
          refreshing={networkStatus === 4}
          onRefresh={() => refetch()}
          onEndReachedThreshold={0.5}
          renderItem={({item}) =>(
            <View style={{flex: 1, flexDirection: 'row', margin: 5 }}>
              <View style={{flex: 1}} >
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'lightyellow', padding: 10 }}>
                  <View style={{ flex: 1 }}>
                    <Text style={{ fontSize: 20 }}>{item.node.nameWithOwner}</Text>
                  </View>
                  <View style={{ flex: 1 }}>
                    <Text style={{ color: 'blue' }} onPress={() => navigate('ContributorsList')}>view contributors</Text>
                  </View>
                </View>
                <View style={{ flex: 1, flexDirection: 'row', backgroundColor: 'grey', padding: 10 }}>
                  <View style={{flex:1}}>
                    <Text style={{ fontSize: 14, left: 5 }}>owner: @{item.node.owner.login}</Text>
                  </View>
                  <View style={{ flex:1}}>
                    <Text style={{ color: 'blue' }} onPress={() => navigate('OwnerProfile', {username: item.node.owner.login} )}>view profile</Text>
                  </View>
                </View>
              </View>
            </View>
          )
          }
        />
      )
    }
  }else <Text> Error Fetching posts</Text>
}

export default graphql(
  queries.fetchRepos,
  {
    options: ({ searchQuery }) => ({ variables: { query: searchQuery } }), // compute query variable from prop
    notifyOnNetworkStatusChange: true
  }
)(ReposList)

