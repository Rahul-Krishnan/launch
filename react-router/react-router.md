## Learning Objectives

* Understand how URLS work within a web application
* Learn how to create links, nested routes, and back buttons for rendering React components

## Following Along

From your challenges directory, run the following:

```sh
$ et get react-router
$ cd react-router
$ bundle install
$ bundle exec ruby app.rb -o 0.0.0.0
```

In another terminal tab, run:

```sh
$ npm install
$ npm start
```

At this point, `ruby app.rb` is running in one tab and `npm start` is running in another. Navigate to http://localhost:4567/ to see our app. You should see the text "Hello World" on the page, with no errors displayed in the console.

We are in the middle of building a React and Sinatra app for restaurant reviews, and we need your help! Here are our requirements:

* The homepage will show an index page (a list) of restaurants.
* Clicking on a restaurant should update the URL from `/` to `/restaurants/:id`, and we should be able to view additional information -- including reviews -- for a particular restaurant.
* A nav bar should be present on every page.
* Clicking the back button should take us back to the previous page we were just looking at, and update our URL appropriately.

Let's get started! But first...

## What is React Router, anyway?

A library built on top of React, Router allows you to quickly add multiple pages and flows of information, and to keep the browser in touch with what's being displayed on the page. At a lower level, Router is really just a _component_ that loads other components based on the URL.

Among the many reasons why Router is great: It offers you links to other parts of your React app, allows you to nest routes, and uses JavaScript to update the URL without making an HTTP request. Router also allows you to use dynamic routing, rather than manually coding the links in your app.

Going a step further, creating distinct URLs for different "pages" in your web application also means that you can link directly to a specific page _section_. For instance, if you wanted to link to a _particular_ restaurant tile on the homepage, rather than the top of the list of restaurants on that page, you could do so easily.

## Mapping URLs to React Components

To use Router, instead of using `App` as usual, you'll wrap everything in a new top-level component called `Root` that utilizes everything we need from Router.

`Root` will take `browserHistory` and `routes` -- both of which we get from Router -- as props. `browserHistory` uses the [History API](https://developer.mozilla.org/en-US/docs/Web/API/History) built into the browser to create clean, easy-to-read URLs. `routes` is a collection of `Route` components, each of which takes _another_ component as props. This may sound a tiny bit Inception-y, but we promise it's not too bad!

![Root Component Diagram](https://s3.amazonaws.com/horizon-production/images/react-router-article-image.png)

By doing this, you're giving Router instructions about how to match the URL in your browser, and about what component to display when the URL matches.

Replace the code in `react/src/main.js` with the following:

```
import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import routes from './routes';
import Root from './components/Root';

let reactAppRender = (element) => {
  ReactDOM.render(
    <Root browserHistory={browserHistory} routes={routes} />,
    element
  );
};

$(function() {
  let reactApp = document.getElementById('app');
  if (reactApp) {
    reactAppRender(reactApp);
  }
});
```

Here, we're setting up our `Root` component and giving it `browserHistory` (imported from 'react-router') and `routes` (imported from our `routes.js` file) as props. Next, we're telling React that, whenever we have a div with an id of `app` on the page, we want to render the `Root` component, given our browser history and the correct route.


In your `routes.js` file, write the following:

```
import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './components/Layout';
import RestaurantsIndexContainer from './containers/RestaurantsIndexContainer';
import RestaurantShowContainer from './containers/RestaurantShowContainer';

let routes = (
  <Route path="/" component={Layout}>
    <IndexRoute component={RestaurantsIndexContainer} />
    <Route path="restaurants/:id" component={RestaurantShowContainer} />
  </Route>
);

export default routes;
```

Here, we're setting our `IndexRoute`, or default component, so it displays the `RestaurantsIndexContainer`, or the list of all the restaurants. When we navigate to our root path for the application `/`, it will display that list.

We also have a `Route` for our `RestaurantShowContainer`, and both this route and our `IndexRoute` are wrapped inside a `Route` which renders our `Layout` component. More on that in a minute.

A few things to note:

* Most of the components that get passed into our `Route` components tend to be "containers" that store the state for each page (or URL) in our app, rather than presentational components.
* All our URLs need to be initially defined in our `app.rb` file.
* We only pass URLs that display _views_ into our `Route` components. The API endpoints that we use to fetch our data (i.e., `/api/v1/restaurants.json` in the `RestaurantsIndexContainer`) only need to be defined inside our Sinatra `app.rb` file. We do not tell Router to listen to those.

At this point, try visiting <localhost:4567>. You should see some `RestaurantTile` components rendered to the page.

## Creating Links in our Nav Bar

To create links between pages in our application, we will use React Router's `Link` component, which performs similarly to an anchor tag (`<a>`), except that it's aware of its Router context. Clicking on a `Link` component will take you to the specified part of your React app without making an HTTP request. You can also use it to dynamically create links.

We've built a simple nav bar in `Layout.js` with a `Link` to the homepage. Check it out:

```
import React from 'react';
import { Link } from 'react-router';

const Layout = (props) => {
  return(
    <div>
      <span>
        When I grow up, I will be a dope header.
      </span>
      <br />
      <Link to='/'> HOME </Link>
      <br />
      <h1 className="page-title"> Restaurant Reviews </h1>
      { props.children }
    </div>
  )
}

export default Layout;
```

Here, we're providing a `Link` to our homepage from the nav bar.

Add a few more links (perhaps to external resources) to the nav bar!

## Creating Dynamic Links to a Particular Restaurant's Page

Let's update our `RestaurantTile` component so that, when we navigate to the index page and click on the first restaurant we see, the URL will dynamically update to something like `/restaurants/1`. Within `RestaurantTile.js`, add the following line to the div that has a `className` of `restaurant`:

```
<h1><Link to={`/restaurants/${id}`}> {name} </Link></h1>
```

This way, whenever we click on the name of a restaurant from our index page, the URL will update and give us more information about that particular restaurant.

## Using Nested Routes

But what's that `Layout` component all about, and why do we render it in a top-level `Route` in our `routes.js` file?

Well, it probably makes sense to have our nav bar (even if it does nothing else but link back to our homepage, at the moment) present on every page, so we need to find a way to share that bit of UI. Creating a `Layout` component is a good way to keep things semantically nice and organized. Next, in order to force all our pages to render the nav bar, we nest all the other routes below the one that renders it. The `this.props.children` line in `Layout.js` allows us to render "children" components in addition to our ubiquitous nav bar.

React is often referred to as a series of "boxes within boxes," and it's a pretty apt metaphor. Putting routes inside other routes allows us to have greater control over which UI is rendered where.

## Implementing Back Buttons

Let's say we've checked out the reviews for a new restaurant, and we want to navigate back to our master list of restaurants. `browserHistory` lets us do this, and gives us a `.goBack()` function, allowing us to go back to our previous page or URL in our browser's history.

Let's add a back button to our nav bar to make our app more user-friendly. Inside `BackButton.js`, add:

```
import React from 'react';
import { browserHistory } from 'react-router'

const BackButton = () => {
  return(
    <div>
      <button onClick={browserHistory.goBack}>Back</button>
    </div>
  )
}

export default BackButton;
```

Then, inside the nav bar in `Layout.js`, add the `BackButton` component to your nav bar. Your finished nav bar should look like this:

```
import React from 'react';
import { Link } from 'react-router';
import BackButton from './BackButton.js';

const Layout = (props) => {
  return(
    <div>
      <BackButton />
      <span>
        When I grow up, I will be a dope header.
      </span>
      <br />
      <Link to='/'> HOME </Link>
      <br />
      <h1 className="page-title"> Bars </h1>
      { props.children }
    </div>
  )
}

export default Layout;
```

The Back Button component, at this point, should essentially behave the same as the "back" button for the native browser. Especially in larger apps, it's useful when you want to go back to the previous page in the session history.

## Summary

React Router is a library built on top of React that allows us to quickly and easily create a multi-page experience within our app. We pass `browserHistory` and `routes` into our top-level `Root` component, and we can use `Link`, `Route`, and `IndexRoute` -- and nested routes -- to further customize our UI. We use API endpoints to fetch our data via containers, and we include links to views in our Routes.

Importantly, `props.children` allows us to render "children" components in addition to whatever is in our `Layout`, or displayed on every page.

Please note that this lesson has focused on React Router v2. You may see some slight syntactical differences between v2 and subsequent versions.

## Resources

* [ReactTraining/React Router](https://github.com/ReactTraining/react-router)
* [ReactJS/React Router Tutorial](https://github.com/reactjs/react-router-tutorial)
