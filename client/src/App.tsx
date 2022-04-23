import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Home from './pages/Home';
import './styles/App.css';

const App:React.FC = () => (
  <Router>
    <Routes>
      <Route path="/:shortId">
        <div>
          {console.log('this a redirect page')}
        </div>
      </Route>
      <Route path="/">
        <Home />
      </Route>
    </Routes>
  </Router>

);

export default App;
