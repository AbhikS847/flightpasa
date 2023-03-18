import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import Signup from './components/Signup';
import ErrorPage from './components/ErrorPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
    <Header />
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
