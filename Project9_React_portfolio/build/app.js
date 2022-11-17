import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Footer from './components/Footer';

function App() {
  return (
    <React.Fragment>
      <HashRouter exact> 
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
        </Switch>
        <Footer />
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
