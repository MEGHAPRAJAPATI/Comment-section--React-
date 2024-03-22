import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Component } from 'react';
import {assets} from 'react';
import {hooks} from 'react';
import useNode from './hooks/useNode';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    <Component/>
      
      <ReactDOM/>
      <useNode/>
      </React.StrictMode>
);


reportWebVitals();
