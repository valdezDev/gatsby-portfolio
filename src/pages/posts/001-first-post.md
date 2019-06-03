---
title: 'Building a Search App with React & Redux: Part 1 of X'
date: 2019-06-01 03:19:00
author: 'Paul Valdez'
image: ../../images/rr-blog.jpg
---
# Building a Search App with React & Redux

## Introduction
Let me start this off with a friendly reminder to eat your vegetables and make sure that you are writing code every single day. Now, I understand that some of you might have found yourself frantically troubleshooting your React / Redux application and trying to wrap your head around state management. I can assure you, that you *will* find great value from understanding the inner workings of your Redux and your new boiler-plate that you can use in your own projects. You might even be thinking why you even need Redux at all. You might be thinking, *I only have one component, Redux is totally overkill!* You would be right, it is overkill. But it's important that we make the habit of using Redux whenever we can since it is in crazy demand! I figured we could start as small as possible by building a Search Application that fetches and renders news articles from Hacker News. If you haven't already, I suggest skimming and/or following along with this [book](https://roadtoreact.com/). It will go through all of the basic fundamentals and best practices of building an awesome React application. The author encourages the developer reading the book that they should try to lift the state of the application into a Redux infrastructure. For our example here, we will do just that, except we are going to strip it down to only carry out two actions from two different events. Let's keep it early 2000s Google homepage simple, here.

![coding](https://media.giphy.com/media/26tn33aiTi1jkl6H6/giphy.gif) 

## Let's build this thing.
Building out our boilerplate will be the most daunting task we face, but once it's all set up, adding actions is profoundly simple. Keep in mind that the Redux store is going to be our *single source of Truth* referring the the state of our components in the application. To keep things as simple as possible, we will be using [create-react-app](https://facebook.github.io/create-react-app/docs/getting-started). After your terminal renders the 'Happy hacking!' message, let's open our favorite text editor and install our project's dependencies.
```
npm install redux react-redux redux-thunk bootstrap node-sass
```
Now, if you've worked with create-react-app before, you'll know that running `npm start` will run your developer server and open your browser to `localhost:3000`. 

*(I'm sure you've worked with SASS and/or Bootstrap before so we won't go into too much detail about it here since our UI isn't going to matter too much. However, I personally find that these technologies make it vastly easier to create responsive designs that look great. You can design your app in any way that makes you happy so don't let me stop you.)*

For those of us writing our code with Visual Studio Code and/or using Google Chrome, I suggest you download the following extensions to keep things looking nice: 
- ◽ ES7 React/Redux by dsznajder
- ◽ Prettier - Code Formatter by Esben Petersen
- ◽ WakaTime by WakaTime (allows you to keep track of how much time you are spending on your coding. You can link your account with your Github. This tool is absolutley amazing)
- ◽ (Chrome) Redux DevTools

Let's clean up a bit. Open up the `src` folder and delete the `App.css`, `index.css`, `logo.svg`, and `App.test.js` files. Open up `App.js` and erase `import './App.css';` and `import logo from './logo.svg';`. Replace all the content inside the main "App" `<div>` so the entire file ends up looking something like this:

```javascript
import React from 'react';

function App() {
  return (
    <div className="App">
      <h1>Search Hacker News</h1>
    </div>
  );
}

export default App;
```

Inside of the `index.js` file delete the CSS import and the comments referring to the serviceworker so you end up with a nice clean file that looks like this: 

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
```

Now, when you run `npm start` you should be able to see the content being rendered from our `App.js` file.

Now, we can start setting up our Redux boiler-plate. As I said earlier, this will be our most intimidating task but once everything is set up, we will be able to add actions like absolute professionals!

Personally, I like to set up all of our folders and files ahead of time, just to keep things organized. So, that's what we are going to do here. In the `src` directory, add 4 new folders: `components`,  `actions`, `reducers`, and `styles`. In the same directory, create a new file, `store.js`.

For the sake of immense simplicity, we will be working with 1 component for now, so in our `components` folder, we can make a new file called `Search.js`. For those unfamiliar with React, it's common practice to start the file name of every component with a capital letter. Ultimately, React is indifferent to how you name your files but we want to make sure we are building good developer habits and being as specific as possible. For now, let's write up the skeleton for our Search component.

🐝 *valdezDev Tips: Remember our VSCode Redux plugin? In our empty `Search.js` file, we can type `rcc` + Tab key to build a quick layout for a React Class Component!*

##### Search.js
```javascript
import React, { Component } from 'react';

class Search extends Component {

  render() {
    return (
      <div>
        <h1>I am but a measly Search Component</h1>
      </div>
    );
  }
}

export default Search;
```  
Now, we are going to want to open our `actions` file in the `src` directory so we can create 2 new files called `searchActions.js` -- where we will keep our action functionality -- and `types.js` -- where we will store our 2 action types.

Back in our `reducers` folder, we want to make `index.js` and `searchReducer.js` and we wrap up our file layout by adding `index.scss` to our `styles` folder.

## 🛑 PAUSE 🛑

Take a breath and set aside a minute to look over the architecture of the files, here. Drink it in because this is as basic as it can get. In the `src` directory, we have our `store.js` which is purposely adjacent to our `App.js`. What the heck is a store?

#### Store - an object that holds the entire state of an application. The only we way will be able to change the state within our **store** is going to be to **dispatch** one of our 2 **actions** to it.



The `store.js` file is where we will set up our `store` object and empty `initialState` object. We will also import our middleware, `redux-thunk`. For those of us unfamiliar with **Redux Thunk** , it's a middleware that will help us call action creators that return a function instead of an action object. That function is going to be what will end up receiving our store's `dispatch({})` method which we'll be running into when we make our actions. Let's write it up the store, first.

#### store.js
```javascript
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
```
*Along with composing our Redux Thunk middleware, we are are setting up syntax that will allow us to use our Redux DevTools extension in the browser. Check your Chrome menu out. If the Redux Icon is glowing green then you're good to go. These DevTools will help us visualize how our state is moving throughout our Redux infrastructure.*

So what's up with the `reducers` folder? Do we really need a root `index.js` *and* `searchReducers.js`? I admit, at this point it's overkill, but it will come in handy as we increase the scale and functionality of our application that we will explore in later editions of this series. Besides, we can begin to build the good habit of combining reducers.

#####reducers/index.js
```javascript
import { combineReducers } from 'redux';
import searchReducer from './searchReducer';

export default combineReducers({
  results: searchReducer,
});
```
*When we render and map out our search results, `'results'` we will call each object carrying `'hits'` data from the API. You can name `'results'` whatever you want just be sure to keep track.*

##### **Reducer:** specifies *how* our application's state changes in response to actions that are being sent to the **store**. Our app's actions will only describe *what happened*. 

We can think of our reducer as a Microwave Oven. It takes in an old, cold slice of pineapple pizza, heats it up, and gives our hungry tummies a different, but warm slice of 'Za. It is taking something old like, say, an `initialState`, and radiates energy into it to make it feel fresh. 

![pizza](https://sparkpeo.hs.llnwd.net/e1/resize/630m620/e4/7/1/l719944983.jpg)
*(Focus, buddy.)*

For now, let's write up the outline of our reducer function. We'll also declare our initial state which will be empty.

##### reducers/searchReducer.js
```javascript
const initialState = {
  text: '', // text that the user will input to the Search Bar
  items: [], // articles that we will map out from the API
}

export default function (state = initialState, action) {
  switch (action.type) {
    
    default:
      return state;
  }
}
```

In our `actions` folder, we can quickly write up the outlines of our `types.js` and `searchActions.js` files. For now, we will only have 2 action types. 

###### actions/types.js
```javascript
export const SEARCH_STORIES = 'SEARCH_STORIES';
export const FETCH_STORIES = 'FETCH_STORIES';
```
In our extremely small scale case, we only have two action types. 

- `FETCH_STORIES` will be dispatched 

**Actions**: payloads of information that will send data from our Search Bar to our store.

Simple enough! Now, we have enough of our infrastructure set up to write out our entire `searchActions.js`. 

###### actions/searchActions.js
```javascript
import {
  SEARCH_STORIES,
  FETCH_STORIES,
} from './types';

// Fired off as soon as user begins to type into the Input
export const searchStories = text => dispatch => {
  console.log("searchStories has been called ");
  dispatch({
    type: SEARCH_STORIES,
    payload: text
  });
};

// Takes the text data from the user's search query, and requests the 
  // term from the API
export const fetchStories = text => dispatch => {
  console.log("fetchStories has been called ");
  fetch(`https://hn.algolia.com/api/v1/search?query=${text}`)
  .then(res => res.json())
  .then(results => dispatch({
    type: FETCH_STORIES,
    payload: results.hits
  }));
}
```
Alright, this might look like more work than expected but don't be overwhelmed. Walk with me, here. Let's take a look at `searchStories`. It's fired off as soon as the user begins typing and it takes in the user's search query text data (what they're looking for). We will use the forementioned `dispatch` to send our **action type** and data **payload** to our `store`. 

In `fetchStories`, we are taking in the user's search term, `text`, and setting it equal to `query` at the end of our fetched API URL. We THEN make two promises. The first promise is to essentially ask our fetched API to respond with the JSON that makes up our search results based on the `text` that was searched. With those results, we THEN `dispatch` our action type and data payload over to our `store`.

*It's totally optional, but I write in the `console.log()` messages just to make super sure that everything is firing off the way it is supposed to. We will mainly watch over the state of our app using the Redux DevTools Chrome Extension but it never hurts to log our functionality into the console as well.*

Our actions are set up now, so let's head back over to `searchReducer.js` and fill in the rest. 

###### reducers/searchReducer.js
```javascript
import {
  SEARCH_STORIES,
  FETCH_STORIES,
} from '../actions/types';

const initialState = {
  text: '',
  items: [],
}

export default function (state = initialState, action) {
  switch (action.type) {
    case SEARCH_STORIES:
      return {
        ...state,
        text: action.payload,
      };
    case FETCH_STORIES:
      return {
        ...state,
        items: action.payload
      };
    default:
      return state;
  }
}
```

So, what is all this new mumbo jumbo we just added? I'll go over it here in detail. We first import our two action types and then declare our empty pieces of our `initialState` as we discussed earlier. 

❗ **Important** ❗

Every reducer function we ever write absolutley *has* to be a pure function,no exceptions. For those of us unfamiliar with what a **pure function** is,it's a function that accepts an input and returns a value without modifying any data outside of it's scope. Its return value MUST depend on the input/arguments. 

Our reducer functions should **NEVER**:

- ◽ Mutate its arguments
- ◽ Perform side effects like calling an API, in our case. This has to be carried out in `searchActions.js`.
- ◽ Call non-pure functions.

**We are not, in any way, mutating the state.** I know this can be confusing, but just remember that our reducer is only describing how the application's state changes. Take a gander at the `switch` statements. In JavaScript, we use it to perform different actions based on 2 different conditions, our action types. These 2 separate `case` instances **must** be supplied with an empty object as our first parameter. In our case, it is `...state`. The ES6 spread operator copies and iterates through properties from one object to another. More info about our particular usage of the spread operator [here](https://redux.js.org/recipes/using-object-spread-operator). 

In our `SEARCH_STORIES` case, the reducer is returning a copy of the state as well as the action's payload, `text`, the user's search term.

In our `FETCH_STORIES` case, it's returning the state as well as the `items` which will be an array full of JSON information having to do with the corresponding search term.

In the case of our reducer, the arguments will be our `state` and our `action`. Since we're working with a pure function here, it will return the previous `state` in the `default` case.

## 🛑 PAUSE 🛑

Hey! We're almost done with our infrastructure. This has been a ton of set up for only two possible actions that the user can set off, and we haven't even built our component, yet. We can do that right now.

###### components/Search.js
```javascript
import React, { Component } from 'react';
import { searchStories, fetchStories } from '../actions/searchActions';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
```
First, we need to import our functions from `searchActions`, as they will be set off in the *event* of the user typing into the `<form>` and/or clicking the search button. We're also going to need PropTypes to document the intended types of properties passed to our component. Lastly, we will import `connect` from our React Redux library that will do just what it says it will do, connect our React component to Redux. Let's go to the bottom of our file, underneath our `render` and `return` statement.

###### components/Search.js
```javascript
SearchBar.propTypes = {
  fetchStories: PropTypes.func.isRequired,
  searchStories: PropTypes.func.isRequired,
  hits: PropTypes.array.isRequired,
}

const mapStateToProps = state => ({
  hits: state.results.items,
  text: state.results.text
});

export default connect(
  mapStateToProps,
  { searchStories, fetchStories }
)(SearchBar);
```

We first document our propTypes, two of which are our action functions, and the last one being the array of `hits`. 

Then, we want to map our `state` to the properties of the reducer. In this case, the only things we need to map are the `hits` and `text` as declared in the reducer. Remember, `results` is what we named the `searchReducer` in our root reducer in `reducers/index.js`.

At the very end of the file, we export our component that's wrapped in the `connect()` function. Again, this is what will connect our `state` and actions to the component.

Now, we can write out our component's functions

###### components/Search.js
```javascript
class SearchBar extends Component {

  onChange = e => {
    this.props.searchStories(e.target.value)
  }

  onSubmit = e => {
    e.preventDefault();
    this.props.fetchStories(this.props.text);
  }

  render() {
    return (
      . . .
    )
  }
}

. . .
```

The first function, `onChange` is an *event* that is triggered when the value inside our input form changes. So when the user begins to type in the form, that is an *event* that fires `onChange`. Similarly, `onSubmit` describes the event of pressing the search button. These two functions will make it so a user searches for something, and the results will render after the query is submitted. 

If you've worked with React before, you might remember that this is usually the chunk of the function where we write out the constructor and declare our local state and properties. Then we make things messier by writing out the data binds and then finally writing out our functionality. Since we are using Redux, we can keep things clean and not have to worry about any of that. Perfect!

Let's fill some more in:
###### components/Search.js
```javascript
class SearchBar extends Component {

  . . . 

  render() {
    const searchResults = this.props.hits.map(hit => (
      <ul key={hit.id}>
        <a
          href={hit.url}
          className="text-blue"
          target="blank"
          rel="noopener noreferrer"
        >
          <li className="search-result">
            {hit.title}
          </li>  
        </a>
      </ul>
    return (
      . . .
    )
  }
}

. . .
```
Here, we declare that `searchResults` is going to render and map through the `hits` and convert them into unordered lists based on the `id`, `title`, and `url`, all properties from the Hacker News API. We're almost done!

###### components/Search.js
```javascript
class SearchBar extends Component {

  . . . 

  render() {
    . . .
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Search Hacker News</h1>
            <form className="text-center" onSubmit={this.onSubmit}>
              <input
                type="text"
                className="search-bar-input col-md-7"
                name="searchQuery"
                placeholder="Start typing..."
                onChange={this.onChange}
              />
              <br /><br />
              <button className="btn btn-primary" type='submit'>Search</button>
            </form>           
            <br /><br />
            <h3 className="text-white text-center results-header">Results....</h3>
            <br />
            <div className="text-white col-md-8 search-results">
              { searchResults }
            </div>
          </div>
        </div>
      </div>
    );
  }
}
```

I would like to encourage taking creative liberties here. It doesn't matter what our Search Bar looks like as long as it has a piece of the component to render out `searchResults`. 

## Wrapping Up

We've reached the end of our journey. All we need to do now is wrap up the entire application in the `provider`. Similar to `connect`, it will link up the entire app to the Redux `store`. The syntax is simple:

###### src/App.js
```javascript
import React from 'react';

import SearchBar from './components/SearchBar';

import { Provider } from 'react-redux';
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <SearchBar />
      </div>
    </Provider>
  );
}

export default App;
```