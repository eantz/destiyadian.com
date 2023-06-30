import contactData from "../constant/contact";
import Header from "../components/header";

function ContactItem(prop: {url: string, image: string, contactType: string}) {
    
    let url = prop.url

    if(prop.contactType === 'email') {
        url = 'mailto:' + prop.url;
    } else if(prop.contactType === 'skype') {
        url = 'skype:' + prop.url + '?chat';
    }


    return (
        <li className="contact-item">
            <img src={`/images/${prop.image}`} alt="icon contact" className="contact-icon" />
            <span className="contact-detail">
            <a href={url} target="_blank">{url}</a>
            </span>
        </li>
    )
}

export default function Page() {
    
    const contactItem = contactData.map((contact, i) => {
        return <ContactItem key={i} url={contact.url} image={contact.image} contactType={contact.type} />
    })

    return (
        <div>
            <Header sectionTitle="Contact" />

            <div className="contact-content">
                <ul className="contact-list">
                    {contactItem}
                </ul>
            </div>
        </div>
  
    )
}