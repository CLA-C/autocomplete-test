# autocomplete-test
Simple app to test an autocomplete input written in AngularJS. 
The input search through a list of movie titles based on the string inserted, you can navigate through the titles shown using up and down arrow keys, then right key or enter to select the title.

## Setup
To get up and running as soon as possible I used the angular starter app at [https://github.com/preboot/angularjs-webpack](https://github.com/preboot/angularjs-webpack), with some minor tweaks. It uses **Webpack 2.x** for all bundling and building purposes.

To begin clone the repository then run `npm install` (NodeJS and NPM are requested).
After installing you can use the following commands:
```
# start a live server at http://localhost:8080 
$ npm start

# build files in /dist folder 
$ npm run build
```

## App structure
The app is quite basic, all the interesting parts are in the autocomplete component under `src/app/autocomplete`.
`autocomplete.component.js` is where all the logic for the autocomplete input is kept; `movie.service.js` handles the call to fetch the data.

## Live data
The app call the open API at [www.omdbapi.com](http://www.omdbapi.com/) to get movie data. While this is convenient since no complex authentication is required, there are a few limitations:
 * Maximum of 10 results per call
 * Little customization of search (just full word search on title)


