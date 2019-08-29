import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';

const App: React.FC = () => {
  let state={
   page: 'main'
  }
  return (
    <Router>
    <div className="App">
      <Header />
      <Route exact path='/about' component={About}>

      </Route>
    </div>
    </Router>
  );
}

export default App;
