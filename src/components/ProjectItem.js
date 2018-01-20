import React from 'react';
import Header from './Header';
import sampleProjects from './../sampleProjects';

class ProjectItem extends React.Component {
  render() {
    const project = sampleProjects[this.props.match.params.projectid];

    return (
      <div>
        <Header sectionTitle="Project" />

        {project.title}
      </div>
    )
  }
}

export default ProjectItem;