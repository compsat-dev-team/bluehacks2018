import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

import * as firebase from 'firebase';

var config = {
	apiKey: "AIzaSyAA9erBlwWmkX49z7O0oKgeBwIoZV0t9p0",
	authDomain: "blue-hacks-2018-1510580815669.firebaseapp.com",
	databaseURL: "https://blue-hacks-2018-1510580815669.firebaseio.com",
	projectId: "blue-hacks-2018-1510580815669",
	storageBucket: "blue-hacks-2018-1510580815669.appspot.com",
	messagingSenderId: "567736624707"
};

firebase.initializeApp(config);

ReactDOM.render((
	<App />
), document.getElementById('root'));

