import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from "firebase";

// Initialize Firebase
var config = {
	apiKey: "AIzaSyBmNtD4XROjbp3u6xWG40eilF8umwbUTLs",
	authDomain: "my-first-app-74b71.firebaseapp.com",
	databaseURL: "https://my-first-app-74b71.firebaseio.com",
	projectId: "my-first-app-74b71",
	storageBucket: "",
	messagingSenderId: "697084337384"
};
firebase.initializeApp(config);


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
