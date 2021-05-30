import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ExcelToJson from './pages/ExceltoJson';
import Home from './pages/Home'

import Post_List from './pages/PostList';

function App() {
  return (
  
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/home' exact component={Home} />
          <Route path='/exceltojson' component={ExcelToJson} />
          <Route path='/reports' component={Post_List} />
        
        </Switch>
      </Router>
    </>
  );
}

export default App;