import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './components/home/App';
import Contact from './components/home/page/Contact';

const AppRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Contact">Contact</Link>
        </li>
        <li>
          <a
            href="https://www.google.com"
            rel="noopener noreferrer"
            target="_blank"
          >Google</a>
        </li>
      </ul>

      <Route path="/" exact component={App} />
      <Route path="/Contact" component={Contact} />
    </div>
  </Router>
);

export default AppRouter;
