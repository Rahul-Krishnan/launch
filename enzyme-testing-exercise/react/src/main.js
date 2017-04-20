/* jshint esversion: 6 */
import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Game from './Game';

(() => {
  ReactDOM.render(
    <Game />,
    document.getElementById('app')
  );
})()
