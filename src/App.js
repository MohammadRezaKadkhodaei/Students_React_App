import React, {useState, useEffect} from 'react';
import Toolbar from './containers/Header/Toolbar/Toolbar';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddStudent from './pages/AddStudent';
import EditStudent from './pages/EditStudent';
import './App.css';

const App = () => {

  return(
    <BrowserRouter>
      <div className="container">
        <Toolbar/>
        <br/>
        <Switch>
        <Route path="/" exact component= {HomePage} />
        <Route path="/add-student" exact component= {AddStudent} />
        <Route path="/student/:id" exact component= {EditStudent} />
        <Route render={() => <h1 style={{textAlign:"center",marginTop:"100px"}}>404 NOT FOUND</h1>} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
