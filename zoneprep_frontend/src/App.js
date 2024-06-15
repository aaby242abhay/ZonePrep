import React from 'react';
import {BrowserRouter as Router, Route, Routes, Navigate} from 'react-router-dom';
import './App.css';
import LoginPage from './authPages/LoginPage/LoginPage';
import RegisterPage from './authPages/RegisterPage/RegisterPage';
import DashBoard from './Dashboard/DashBoard';
import AlertNotifications from './shared/components/AlertNotifications';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route  path = '/login' element={<LoginPage />} />
          <Route  path = '/register' element= {<RegisterPage />} />
          <Route  path = '/dashboard' element = {<DashBoard/>} />
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </Router>
      <AlertNotifications />
    </>
  );
}

export default App;
