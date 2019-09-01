import React from 'react';
import 'bulma/css/bulma.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import Engine from './components/Engine';
import About from './components/pages/About';

const App: React.FC = () => {
  return (
    <Router>
    <Route exact path='/' >
      <div className="App">
        <Header />
            <Engine />
      </div>
    </Route>
    <Route exact path='/about' component={About}></Route>
    </Router>
  );
}

export default App;
