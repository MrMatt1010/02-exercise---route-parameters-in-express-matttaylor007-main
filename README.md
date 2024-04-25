[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-718a45dd9cf7e7f842a935f5ebbe5719a5e09af4491e668f4dbf3b35d5cca122.svg)](https://classroom.github.com/online_ide?assignment_repo_id=11103769&assignment_repo_type=AssignmentRepo)
# 02 Exercise - Route Parameters in Express

## Brief

You will be helping to implement the following user story:

- **As a** customer who has found a property that interests me
- **I want to** be able to share a link to an individual property
- **So that** I can get feedback from my partner before making an enquiry

A developer on your team has updated the React Application to support loading a single property, and now the API needs to be completed to support this feature.

The React app is making requests to the Express application using the following endpoint `/properties/:id`. For example, if the property has an `id` of `1`, the React App will request `http://localhost:5001/properties/1`. 

The React App will also display an error message if a status code of `404` is returned from the API. Returning a 404 allows the React application to show a helpful error message to the customer if they provide an incorrect ID.

[Watch a short video demonstrating this behaviour in the React app](docs/brief.mp4)

**Note** The React App uses a slightly different URL structure than the API endpoints, if you want to view a property in the React Application visit http://localhost:3000/property/1 (property not properties in the URL path)

## Getting Started

The repository is separated into two parts: client and server. `client` contains the React application, and `server` contains the Express server.

### Part 1: Client

1. Open your Terminal in VS Code, and move into the client directory: `cd client`,
2. Install the required dependencies: `npm install`,
3. Start the React server: `npm start`.

### Part 2: Server

1. Open a new Terminal window in VS Code, move into the server directory, type: `cd server`.
2. Install the required dependencies: `npm install`.
3. Start the API server: `npm start` This will start an Express server at `http://localhost:5001`.
4. Open `server/src/app.js` in VS Code

## Instructions - Get property by ID

Implement a new endpoint in the Express application that can return a single property by id. You can test this works as expected by navigating to the React Application. To test the `404` message, type an incorrect `id` in the URL, e.g. http://localhost:3000/property/bad-id

### Acceptance criteria

- An endpoint is created that can return a single property
- The route is formatted like: `/properties/:id` where `:id` is the id of the property
- If the property cannot be found, the response has a status code of 404
- The new route has automated tests for a successful response and a not found response

### Hints 

- There are a few steps you need to take to solve this problem. Break it down into manageable tasks. Write them out.
- Think of the testing pyramid - what are the tests you should write most of? Unit tests! What can you break out into a unit test? Getting a product by id. You can start with this.
- For the unit test, start with the happy path, write a test for it. When complete, think of the unhappy path, write a test for that. 
- When the unit test is complete, use this function in the Express app. Then, write an integration test for the express route for the happy path and then a test for the unhappy path.
- A JavaScript has many helpful array methods, one being: [find](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find_

--- 

# Submit your Exercise

- [ ] Automated tests pass in GitHub
- [ ] Turned in exercise in iQualify
