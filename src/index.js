import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './routes/Main'; 
import './assets/input.css';
//import '../dist/output.css';



ReactDOM.render(
  <BrowserRouter>
  <Main />
  </BrowserRouter> ,
  document.getElementById('root')
);


