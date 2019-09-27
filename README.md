<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250" align="right">

# Project Summary

We will be using a completed full stack project to test both pure functions server/client side and React components. This project will use Jest and react-test-library. You will focus on writing tests for functions/Components that already exist with some slight refactoring on the existing codebase. Run the command `npm run dev` to spin up the express server and React project and then familiarize yourself with the functionality.

To keep the number of libraries you need to learn to a minimum, only Jest and react testing library are included in this project. For shallow testing of components, it is highly recommended you research enzyme. It provided a lot of functionality for easily testing React components. This project is intended to be a starting point for your testing knowledge and not an all inclusive resource.

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
- Import `shortText`, `longText`, `posts` and `users` from your data file
- Create a test for `shortenText` to make sure it will not alter a string under 100 characters
  - use the `.toHaveLength` matcher and the `shortText` variable
- Create a test for `shortenText` to make sure it shortens text over 100 characters and adds 3 periods at the end
  - you will need two assertions in this test; one to check length and the second to see if the last 3 characters are ...
  - use the `.not` matcher on this to compare original `longText` length vs the new length
- Run `npm run test`. The second assertion should fail. You will need to refactor this test to get it to pass.
  - Hint: Check the function logic. Since the string ends with a blank space, the function will incorrectly read it's length as 99
- After refactoring, run the test suite again till it passes
- Write a test for `wordCount` that will check the `posts` array and return a total word count
  - The number of words in the posts array should equal 233
- Write a test for `attachUserName` that will check to see if the first post returned from running this function has a property `displayName`
- Lasty, write a test for `attachUserName` to check if it removes any post with no matching user. This test also has a logic hole and will cause the test to fail. You will need to refactor it.
  - The returned array should only contain posts that had a matching user
  - You should not alter the original array passed in
- After refactoring, run `npm run test` again until it passes

## Step 3

### Summary

Now we will move on to testing individual React Components. Let's start with `Post`. This component is responsible for requesting a single post from the database and rendering it out on the screen in a full width capacity.

### Instructions

- Create a file titled `Post.test.js` in the `__tests__` folder.
- import `React` at the top since it must be in scope
- import `render` and `act` from react testing library
  - The package name is `@testing-library/react`
  - These are not default exports
- Import the `Post` component
  - This file is located in `src/views`
- Import `axios`
- Import `MemoryRouter` from react router
- Import `posts` from our test data
- Create a test to check that our `Post` component actually renders a post
  - You will need to use jest's `spyOn` method to watch for axios get requests and send back an individual post
  - use the async version of act to await the axios request/response cycle
  - use the `.toContain` method to check if the inner textContent of our rendered `Post` matches the posts text that returned as data to the component

## Step 4

### Summary

The next component we will test is `PostWidget` in the `src/components` folder. This component handles rendering out all posts and determines whether the post should be full width or not.

### Instructions

- Create a file titled `PostWidget.test.js` in the `__tests__` folder.
- Import all necessary packages/files (remember relative pathing)
  - `React`
  - `render` and `cleanup` from `@testing-library/react`
  - `PostWidget` from `src/components`
  - `MemoryRouter` from react router
  - `shortenText` from our utils
  - `posts` from our test data
- Create two variables at the top; `longPost` and `post`. These will be used in various tests in the file
  - `longPost` will be the post at 0
  - `post` will be the post at 1
- We will be running multiple tests in this file so it's a good idea to run `afterEach` (Jest) and pass in the `cleanup` method
  - This will keep the test environment clean between each successive test
- Create a test that will render the `PostWidget` and check if the inner text content contains the passed in posts text content
  - You will need to destructure and pass the post data through to `PostWidget`
  - You will need to wrap `PostWidget` in a `MemoryRouter` component
- Create a test that will check if `PostWidget` shortens text when passed a post with text longer than 100 characters
  - pass `longPost` through
  - Call the function `shortenText` to get a shortened version of `longPost`'s text
- Create a test that will check if `PostWidget` displays all text when passed an expanded prop
  - pass `longPost` through
  - expanded must be set to true

## Step 5

### Summary

You have now written multiple unit tests and tested multiple React components! At this point you will want to run `npm run test`. If all of your tests pass, you're done. If not, review the ones that are failing and see if you can figure out what you need to change. You may also reference the detailed instructions included above.

## Contributions

If you see a problem or a typo, please fork, make the necessary changes, and create a pull request so we can review your changes and merge them into the master repo and branch.

## Copyright

© DevMountain LLC, 2017. Unauthorized use and/or duplication of this material without express and written permission from DevMountain, LLC is strictly prohibited. Excerpts and links may be used, provided that full and clear credit is given to DevMountain with appropriate and specific direction to the original content.

<p align="center">
<img src="https://s3.amazonaws.com/devmountain/readme-logo.png" width="250">
</p>
```
