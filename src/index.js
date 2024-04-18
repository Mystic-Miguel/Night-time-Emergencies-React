import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import ContactUs from './views/contact-us'
import Home from './views/home'
import Gallery from './views/gallery'
import Services from './views/services'
import AboutUs from './views/about-us'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={ContactUs} exact path="/contact-us" />
        <Route component={Home} exact path="/" />
        <Route component={Gallery} exact path="/gallery" />
        <Route component={Services} exact path="/services" />
        <Route component={AboutUs} exact path="/about-us" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
