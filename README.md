## How it works
1. Search for any keyword
2. App returns the results of all github repos with the search keyword
3. You can select to view repo owners from the search results
4. Some of these repo owners are Organization or User user types
5. You can also view contributors to each each repo from the search result(WIP because v4 API has no contributors edge)


### Stack
* ReactNative using `create-react-native-app` cli
* Github GraphQL API v4 (apollo-client & react-apollo)
* React navigation for routing

## How to run
* clone this repo
* rename the file `config.sample.js` to `config.js`
* obtain your github access token from [here](https://github.com/settings/tokens)
* insert you access token into your `config.js` file (app wont run without a valid access token)
* `yarn` to install all npm packages
* `yarn start` to run
* install the [expo](https://play.google.com/store/apps/details?id=host.exp.exponent&hl=en)  android app to test your app
* follow instructions on your console when you ran `yarn start`
* you should be able to view and test your app. Enjoy the seemless [hot reloading in react-native](https://facebook.github.io/react-native/blog/2016/03/24/introducing-hot-reloading.html)

### Views
#### Home page
![Home Page](/screenshots/home.png?raw=true "Home Page")

#### loading screen
![Fetching](/screenshots/fetching.jpg?raw=true "fetching")

#### loading error

![Error Fetching](/screenshots/error_fetching.jpg?raw=true "error fetching")

#### Repos Search Results
![Error Fetching](/screenshots/repo_search_result.png?raw=true "Repos Search Result")

### Github username types
#### Organization-user profile
![Organization Profile](/screenshots/repo_owner_organization.png?raw=true "Organization profile")

#### User-user profile
![User Profile](/screenshots/repo_owner_user.png?raw=true "User profile")