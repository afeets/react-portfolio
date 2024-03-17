import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Projects from './pages/Projects';
import Header from './components/Header';
import Profile from './pages/Profile';
import './App.css';
import logo from './assets/logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header logo={logo} />
        <Routes>
        <Route 
            path='/'
            element={<Profile username="afeets" />}
          />
          <Route 
          path='/projects'
          element={<Projects username="afeets" />}
        />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
