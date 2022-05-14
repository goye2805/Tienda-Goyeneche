import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyBA6WCMOr-f9nz3Xl_npJ8pEYaGxCNBcUA",
  authDomain: "e-commerce-b526a.firebaseapp.com",
  projectId: "e-commerce-b526a",
  storageBucket: "e-commerce-b526a.appspot.com",
  messagingSenderId: "711342705883",
  appId: "1:711342705883:web:a256eb6f51f908205e50fe",
  measurementId: "G-BTVZDZ0ZHR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
