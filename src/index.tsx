import React from 'react';
import ReactDOM from 'react-dom';
import {  BrowserRouter } from 'react-router-dom'
import { RealIrrigationApp } from './RealIrrigationApp';


import './index.css';
import './firebase/firebase';

ReactDOM.render(
        <BrowserRouter>
            <RealIrrigationApp />
        </BrowserRouter>
    
    ,
  document.getElementById('root')
);

