import React from 'react'
import Header from './Header';

import contactData from './../contactData';

class About extends React.Component {
  render() {
    return (
      <div>
        <Header sectionTitle="Contact" />

        <div className="contact-content">
          <ul className="contact-list">
            {contactData.map((contact, i) => {
              var url = contact.url;
              if(contact['type'] === 'email') {
                url = 'mailto:' + url;
              } else if(contact['type'] === 'skype') {
                url = 'skype:' + url + '?chat';
              }


              return (
                <li key={i} className="contact-item">
                  <img src={`/images/${contact.image}`} alt="icon contact" className="contact-icon" />
                  <span className="contact-detail">
                    <a href={url} target="_blank">{contact.url}</a>
                  </span>
                </li>
              )
            })}
          </ul>
        </div>
      </div>

    )
  }
}

export default About;