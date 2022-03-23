import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import Main from './routes/Main'; 
import 'antd/dist/antd.css';
//import "@ant - design/flowchart/dist/index.css";
import './assets/css/index.less'; 
//import '../dist/output.css';



ReactDOM.render(
  <BrowserRouter>
  <Main />
  </BrowserRouter> ,
  document.getElementById('root')
);


