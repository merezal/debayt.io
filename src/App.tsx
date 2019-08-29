import React from 'react';
import 'bulma/css/bulma.css';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';

const App: React.FC = () => {
  let state={
   page: 'main'
  }
  return (
    <Router>
    <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
    <div className="App">
      <Header />
      <Route exact path='/about' component={About}>

      </Route>
    </div>
    </Router>
  );
}

export default App;
