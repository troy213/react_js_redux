import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import App from './components/home/App';
import Contact from './components/page/Contact';
import Users from './components/page/Users';

const AppRouter = () => (
  <Router>
    <div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/users">Users</Link>
        </li>
        <li>
          <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">Google</a>
        </li>
      </ul>
    </div>

    <Route path="/" exact component={App} />
    <Route path="/contact" component={Contact} />
    <Route path="/users" component={Users} />
  </Router>
);

export default AppRouter;
