/* jshint esversion: 6 */
import './app.scss';
import React from 'react';
import ReactDOM from 'react-dom';
import Popup from './popup';

ReactDOM.render(
  <Popup
    artist="The Offspring"/>,
  document.getElementById('popup')
);
