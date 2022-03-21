import React from 'react'
import {Routes,Route} from 'react-router-dom';
import WebLayout from '../layouts/WebLayout';
import Login from '../views/web/Login';

function Main() {
  return (
    <Routes element={<WebLayout />}>
        <Route path="login" element={<Login />}>
        </Route>
    </Routes>
  )
}

export default Main