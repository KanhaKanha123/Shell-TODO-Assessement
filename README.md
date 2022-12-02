# Getting Started with Create React App

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\

## App design
1.loosely coupled shareable components.\
2.state is lifted up to parent component and managed from there.\
3.use of context api made easy to share the state to show/hide add TODO component on header button click.\
3.Acessiblity added by aria-labels.\
4.Unit testing added.\
5.All the features added.\
5.By default screen is empty because there is no TODO list. When user will click on Add TODO button on header then text will appear to add TODO.
