import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import Home from '../components/Home';
import About from '../components/About';
import Portfolio from '../components/Portfolio';
import Project from '../components/Project';
import Contact from '../components/Contact';
import NotFound from '../components/NotFound';

const Router = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/about" component={About} />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path='/portfolio/:slug' component={Project}  />
        <Route path="/contact" component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default Router;




