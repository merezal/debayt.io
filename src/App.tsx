import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './components/Header';

const App: React.FC = () => {
  return (
    <Router>
    <div className="App">
      <Header />
    </div>
    </Router>
  );
}

export default App;
