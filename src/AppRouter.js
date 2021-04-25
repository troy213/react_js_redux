import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import App from './components/home/App';
import Contact from './components/page/Contact';
import Users from './components/page/Users';
import Error from './components/page/Error';
import Person from './components/page/Person';
import Ongkir from './components/page/Ongkir';

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
          <Link to="/ongkir">Ongkir</Link>
        </li>
        <li>
          <a href="https://www.google.com" rel="noopener noreferrer" target="_blank">Google</a>
        </li>
      </ul>
    </div>

    <Switch>
      <Route path="/" exact component={App} />
      <Route path="/contact" component={Contact} />
      <Route path="/users" component={Users} />
      <Route path="/ongkir" component={Ongkir} />
      <Route path="/person/:name" children={<Person />} />
      <Route path="*" component={Error} />
    </Switch>
  </Router>
);

export default AppRouter;
