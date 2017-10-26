import React from 'react';
import { Text } from 'react-native';
// import { graphql } from 'react-apollo';
// import gql from 'graphql-tag';

// The data prop, which is provided by the wrapper below contains,
// a `loading` key while the query is in flight and posts when ready
export default ReposList = ({ data }) => {
  console.log(data)
  return <Text> {data}</Text>
}

// // The `graphql` wrapper executes a GraphQL query and makes the results
// // available on the `data` prop of the wrapped component (PostList here)
// export default graphql(gql`{
//   search(type: REPOSITORY, query: "react", first: 20) {
//     edges {
//       node {
//         ... on Repository {
//           nameWithOwner
//           owner {
//             login
//           }
//         }
//       }
//     }
//   }
// }`, { options: { notifyOnNetworkStatusChange: true } })(ReposList);
