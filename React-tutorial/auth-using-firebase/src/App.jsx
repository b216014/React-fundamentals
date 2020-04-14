/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import './App.css';
import fire from './config/fire';
import Home from './components/Home';
import Login from './components/Login';

const App = () => {
  const [users, setUsers] = useState({});

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        setUsers(user);
        // localStorage.setItem('user', user.uid);
      } else {
        setUsers(null);
        // localStorage.removeItem('user');
      }
    });
  };
  useEffect(() => {
    console.log('object');
    authListener();
  }, []);
  return (
    <div>
      {
        users ? <Home /> : <Login />
      }
    </div>
  );
};

export default App;
