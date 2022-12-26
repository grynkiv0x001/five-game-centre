/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyC2RclFVORGaTGrQqPHBGG82dx8ae6vMtY',
  authDomain: 'dev-five-game-centre.firebaseapp.com',
  projectId: 'dev-five-game-centre',
  storageBucket: 'dev-five-game-centre.appspot.com',
  messagingSenderId: '901762524081',
  appId: '1:901762524081:web:c86f04edfd53c28edf9390',
  measurementId: 'G-ED7LDP05WG',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const analytics = getAnalytics(app);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
