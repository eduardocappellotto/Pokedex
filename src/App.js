import React from 'react';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';
import Dashboard from './components/layout/Dashboard';
import Pokemon from './components/pokemon/Pokemon.js';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css'
import backgroundImage from './pattern.png';

function App() {
  return (
    <Router>
      <div className="App" style={{ background: `url(${backgroundImage})` }}>
        < NavBar />
        <div className="container">

          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/pokemon/:pokemonIndex" component={Pokemon} />
          </Switch>
        
        </div>
      </div>
    <Footer/>
    </Router>
    
  );
}

export default App;
