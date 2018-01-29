import React from 'react';
import Header from './Header';

import experienceData from './../experienceData';

class Experiences extends React.Component {
  constructor() {
    super();

    this.renderExperience = this.renderExperience.bind(this);
  }

  renderExperience(experience, i) {
    return (
      <li key={i}>
        <div className="experience-year">{experience.year}</div>
        <div className="experience-content">
          <h4 className="experience-title">{experience.title}</h4>
          <p className="experience-description">
            {experience.description}
          </p>
        </div>
      </li>
    )
  }

  render() {
    return (
      <div>
        <Header sectionTitle="Experiences" />

        <ul className="experience-timeline">
          { experienceData.map((experience, i) => this.renderExperience(experience, i))  }
        </ul>
      </div>
      
    )
  }
}

export default Experiences;