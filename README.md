<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

We will be using a completed full stack project to test both pure functions server/client side and React components. This project will use Jest and react-test-library. You will focus on writing tests for functions/Components that already exist with some slight refactoring on the existing codebase. Run the command `npm run dev` to spin up the express server and React project and then familiarize yourself with the functionality.

## Step 1

### Summary

Let's get all the setup out of the way to begin testing our utility functions. In this step, we will install the required dependency for React testing, create our first test file and tell Jest to ignore our test data file(s).

### Instructions

- Run the command `npm install --save-dev @testing-library/react` in your terminal.
  - Note: This is not a required package for testing React components but it provides some utility methods that make testing easier.
- In the `src` folder create a folder titled `__tests__` and then in that folder create a file called `utilFunctions.test.js`.
  - Jest will automatically detect this folder and run all files inside of it when you run `npm run test`
- In the `package.json` add this code snippet.

```json
"jest": {
    "watchPathIgnorePatterns": [
      "<rootDir>/src/__tests__/__data__"
    ]
  }
```

- Lastly, in the `__tests__` folder create a folder titled `__data__` and inside that folder create the file `testData.js`
- In that new file past the following test data for use later

<details>

<summary> <code> testData.js </code> </summary>
```javascript
export const users = [
  {
    id: 1,
    first: 'Test',
    last: 'User'
  },
  {
    id: 2,
    first: 'Hello',
    last: 'World'
  }
];

export const posts = [
{
id: 1,
userId: 2,
title: 'This is a long post',
text:
'This is a longer string that will be used to test whether or not the shortenText function correctly shortens the text correctly or not.'
},
{
id: 2,
userId: 2,
title: 'This is a short post',
text: 'hello world'
},
{
id: 3,
userId: 1,
title: 'This is a long post',
text:
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
id: 4,
userId: 1,
title: 'This is a long post',
text:
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
},
{
id: 5,
userId: 3,
title: 'This is a long post',
text:
'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'
}
];
export const shortText = 'This is a very short sentence';

export const longText =
'This is a longer string that will be used to test whether or not the shortenText function correctly shortens the text correctly or not.';

```
</details>


## Step 2

### Summary

In this step, we will write unit tests for our three pure functions in this application.

### Instructions

- In `utilFunctions.test.js` import the functions `shortenText`, `wordCount` and `attachUserName`
  - `shortenText` is found in the `src/utils/functions` folder
  - `wordCount` and `attachUserName` are found in the `server/utils` folder
- Import

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
```
