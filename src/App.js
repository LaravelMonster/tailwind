import React from 'react';
import { Switch, Route } from 'react-router-dom';
import One from './pages/one';
import Pricing from './pages/pricing';
import News from './pages/news';
import Login from './pages/login';
import Exam from './pages/exam';
import Widget from './pages/widget';
import Widget2 from './pages/widget-2';
import Grid from './pages/grid';
import Top from './pages/top';
import Contact from './pages/contact';
import Single from './pages/single';

export default (props) => {
  return <Switch>
    <Route exact path='/' component={One} />
    <Route exact path='/pricing' component={Pricing} />
    <Route exact path='/news' component={News} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/exam' component={Exam} />
    <Route exact path='/widget' component={Widget} />
    <Route exact path='/grid' component={Grid} />
    <Route exact path='/top' component={Top} />
    <Route exact path='/widget-2' component={Widget2} />
    <Route exact path='/contact' component={Contact} />
    <Route exact path='/single' component={Single} />
  </Switch>;
}