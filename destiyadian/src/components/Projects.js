import React from 'react'
import { Link } from 'react-router-dom';

import Header from './Header';

import sampleProjects from './../sampleProjects';

class Projects extends React.Component {

  constructor() {
    super();

    this.renderItem = this.renderItem.bind(this);

    
  }

  state = {
    projects: {}
  }

  componentDidMount() {
    this.setState({
      projects: sampleProjects
    });
  }

  renderItem(key) {
    const project = this.state.projects[key];

    return (
      <Link to={`projects/${key}`} key={key} className="project-item">

        <div className="project-logo-container">
          <img src={`/images/${project.logo}`} alt={`Logo ${project.title}`} className="project-logo" />
        </div>
        

        <h3 className="project-title">
          {project.title}
        </h3>

        <ul className="project-stacks">
          {project.stack.map((stack, i) => <li>#{stack}</li>)}
        </ul>
      </Link>
    )
  }

  render() {
    return (
      <div>
        <Header sectionTitle="Projects" />

        <div className="projects">
          { Object.keys(this.state.projects).map(this.renderItem) }
        </div>
      </div>
    )
  }
}

export default Projects;