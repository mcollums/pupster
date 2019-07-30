import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import NavTabs from "./components/NavTabs";
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <NavTabs />
        <Route exact path="/" component={Home} />
        <Route exact path="/discover" component={Discover} />
        <Route exact path="/seach" component={Search} />
      </div>
    </Router>
  );
}

export default App;
