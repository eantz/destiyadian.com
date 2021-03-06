import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router } from 'react-router-dom';
// import './index.scss';

import './assets/css/_main.scss';
import Home from './components/Home';
import Contact from './components/Contact';
import Experiences from './components/Experiences';
import Projects from './components/Projects';
import ProjectItem from './components/ProjectItem';
import history from './history';
import HiddenPage from './components/HiddenPage';
import HiddenPage2 from './components/HiddenPage2';
// import registerServiceWorker from './registerServiceWorker';

const Root = () => {
  return (
    <Router history={history}>
      <div className="root-router-child">
        <Route exact path="/" component={Home} />
        <Route path="/contact" component={Contact} />
        <Route path="/experiences" component={Experiences} />
        <Route exact path="/projects" component={Projects} />
        <Route path="/projects/:projectid" component={ProjectItem} />
        <Route path="/hidden" component={HiddenPage} />
        <Route path="/hidden2" component={HiddenPage2} />
      </div>
      
    </Router>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
// registerServiceWorker();
