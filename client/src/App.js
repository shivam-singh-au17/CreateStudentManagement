import React, { useContext } from 'react';
import './App.css';
import AllConttestList from './components/AllConttestList';
import AdminPannel from './components/AdminPannel';
import LoginPage from './components/LoginPage';
import Navbar from './components/Navbar';
import UserNavbar from './components/UserNavbar';
import { LoginContext } from './components/LoginContext';


function App() {
  const { role } = useContext( LoginContext );

  return (
    <div className="App">
      { role === "admin" ? <>
        <AdminPannel /></> : role === "user" ? <> <UserNavbar /> <AllConttestList /></> : <><Navbar /> <LoginPage /> </> }
    </div>
  );
}

export default App;
