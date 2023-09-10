import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import React from 'react';
import './App.css';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import User from "./User"

function App() {
  return (
    <div className='grid-container'>
        <Router>
        <Header />
      <Sidebar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/page" element={<User/>}></Route>
        </Routes>
      
      </Router>
    </div>
  );
}

export default App;
