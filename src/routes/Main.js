import React from 'react'
import {Routes,Route} from 'react-router-dom';
import WebLayout from '../layouts/WebLayout';
import DashboardLayout from '../layouts/DashboardLayout';
import Dashboard from '../views/dashboard/Dashboard';
import { Navigate } from 'react-router-dom';
import Login from '../views/web/Login';
import TableView from '../views/dashboard/TableView';

function Main() {
  return (
    <Routes >
      <Route element={<WebLayout />}>
        <Route path="login" element={<Login />} />
      </Route>

      <Route path="/*" element={<DashboardLayout />}>
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="table" element={<TableView />} />
      <Route path="*" element={<Navigate replace to="/dashboard" />} />
      </Route>
    </Routes>
  )
}

export default Main