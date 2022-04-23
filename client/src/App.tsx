import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import HandleRedirects from './components/organisms/HandleRedirects';
import Home from './pages/Home';
import './styles/App.css';

const App:React.FC = () => (
  <Router>
    <Routes>
      <Route index element={<Home />} />
      <Route path="/:shortId" element={<HandleRedirects />} />
    </Routes>
  </Router>

);

export default App;
