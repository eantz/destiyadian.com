import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// import './index.scss';

import './assets/css/_main.scss';
import Home from './components/Home';
import About from './components/About';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import ProjectItem from './components/ProjectItem';
import history from './history';
// import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <BrowserRouter history={history}>
      <div className="root-router-child">
        <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/experiences" component={Experiences} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/:projectid" component={ProjectItem} />
      </div>
      
    </BrowserRouter>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
// registerServiceWorker();
