import React from 'react'
import './App.css';
import Home from './Home';
import SearchPage from "./SearchPage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>
          <Route path="/search">
            {/* Search Page (The results page) */}
            <SearchPage />
            {/* <h1>THIS IS THE SEARCH PAGE</h1> */}
          </Route>
          <Route path="/">
            {/* Home Page (the one with the search on) */}
            <Home />
          </Route>
        </Switch>
        
        
      </Router>
      
    </div>
  );
}

export default App;
