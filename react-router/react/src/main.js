import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

let reactAppRender = (element) => {
  ReactDOM.render(
    <div>Hello World</div>,
    element
  );
};

$(function() {
  let reactApp = document.getElementById('app');
  if (reactApp) {
    reactAppRender(reactApp);
  }
});
