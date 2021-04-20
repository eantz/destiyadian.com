import React from 'react';
import MetaTags from 'react-meta-tags';

class PageMetadata extends React.Component {

    constructor() {
        super();
        this.state = {metadata: []}
    }

    componentWillMount() {
        setTimeout(() => {
            this.setState({metadata: [
                {
                    'property': 'og:title',
                    'content': 'This is hidden page title'
                },
                {
                    'property': 'og:image',
                    'content': '/images/logo_psynaptica.png'
                },
                {
                    'property': 'og:description',
                    'content': 'this is description'
                },
            ]});
        }, 3000);
    }

    render () {
        return (
            <MetaTags>
                {this.state.metadata.map(el => (
                    <meta property={el.property} content={el.content} />
                ))}
            </MetaTags>
        )
    }
}

export default PageMetadata;