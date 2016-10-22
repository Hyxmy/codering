import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/Main';
import Header from './components/header';
import Footer from './components/footer';

// Render the main component into the dom
ReactDOM.render(<Header />, document.getElementById('header-wrapper'));
ReactDOM.render(<App />, document.getElementById('printing'));
ReactDOM.render(<Footer />, document.getElementById('footer'));
