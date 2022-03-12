# Computer builder checker

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Also, I used this libraries : 
* Express
* Jest
* Sass

## How it looks

<img src="https://raw.githubusercontent.com/agustinjacob49/computer-builder-checker/main/readme-files/home.png" width="500" height="400" />

## How to use it

You can make a directed graph with the following sintax

A for node Name
DEPENDS indicates the Node at the left has an edge directed to de node on the right.

i.e 

A DEPENDS B

renders A -> B 

Attention : You cant have circular refereces or loops \

## Code coverage

<img src="https://raw.githubusercontent.com/agustinjacob49/computer-builder-checker/main/readme-files/coverage.png" width="500" height="400" />

## Deployment

The application its deployed into a Heroku server.
You can see in [https://computer-builder-checker.herokuapp.com/](https://computer-builder-checker.herokuapp.com/)

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the Production mode.\
Before to run, yo need to enter `npm run build` to generate de production builds
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm run start-dev`

Runs the app in the development mode.\
You can make changes and the page automatically reload with the new changes. You also con debug in this mode. \
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


### `npm test`

Launches the test runner in the interactive watch mode.\
Actually, the proyects have tests in the pages,components and in the services.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

### To do 
- Integration tests with puppeter
- Proptypes
- Code splitting

