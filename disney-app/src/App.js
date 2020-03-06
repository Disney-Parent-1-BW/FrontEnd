import React from 'react';
import {Route} from 'react-router-dom';
import Login from './pages/login';
import Register from './pages/registration';
import Index from './pages/index';
import Dashboard from './pages/dashboard';
import './App.css';

function App() {
  return (
    <>
    <Route exact path='/'>
      <Index />
    </Route>
    <Route path="/login">
      <Login />
    </Route>
    <Route path="registration">
      <Register />
    </Route>
    <Route path="/dashboard">
      <Dashboard />
    </Route>
    </>
  );
}

export default App;
