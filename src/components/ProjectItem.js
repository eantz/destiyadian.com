import React from 'react';
import Header from './Header';
import sampleProjects from './../sampleProjects';
import ModalImage from './ModalImage';

class ProjectItem extends React.Component {
  constructor() {
    super();

    this.state = {
      showModal: false,
      modalImg: {}
    }

    this.handleImageClick = this.handleImageClick.bind(this);
  }

  handleImageClick(imgObj) {
    this.setState({ showModal: true, modalImg: imgObj });
  }

  render() {
    const project = sampleProjects[this.props.match.params.projectid];

    const modalImage = this.state.showModal === true ? <ModalImage image={this.state.modalImg} showModal={true} /> : null;

    return (
      <div>
        <Header sectionTitle={project.title} />

        <div className="project-single">
          <img src={`/images/${project.logo}`} alt={`Logo ${project.title}`} className="project-logo" />

          <a href={project.url} target="_blank" rel="noreferrer" className="project-url">{project.url}</a>

          <ul className="project-stacks">
            {project.stack.map((stack, i) => <li key={i}>#{stack}</li>)}
          </ul>

          <p className="project-description">
            {project.description}
          </p>

          <div className="project-images">
            {project.images.map((image, i) => {
              return (
                <div className="project-thumbnail" key={i} onClick={() => { this.handleImageClick(image) }} >
                  <img src={`/images/${image.thumb}`} alt="thumb" />
                </div>
              )
            })}
          </div>

          {modalImage}
        </div>

      </div>
    )
  }
}

export default ProjectItem;