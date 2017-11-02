import gql from 'graphql-tag'

const queries = {
  // All github queries used in our app
  // fetch github user Profile
  fetchUser: gql `
  query fetchUser($login: String!){
    user(login: $login) {
      name
      bio
      avatarUrl
      followers {
        totalCount
      }
      starredRepositories {
        totalCount
      }
      following{
        totalCount
      }
      repositories{
        totalCount
      }
    }
  }`,
  // fetch github Organization Profile
  fetchOrg: gql `
    query fetchOrg($login: String!){
      organization(login:$login){
      name
      repositories{
        totalCount
      }
      description
      members{
        totalCount
      }
    }
  }`,
  // fetches all repos matching search text
  fetchRepos: gql`
  query fetchRepos($query: String!) {
    search(type: REPOSITORY, query: $query, first: 100) {
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
  }`
}

export default queries