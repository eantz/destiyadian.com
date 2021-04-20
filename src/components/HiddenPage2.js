import React from 'react'
import Header from './Header';
import MetaTags from 'react-meta-tags';

class HiddenPage2 extends React.Component {
    constructor() {
        super();
        this.state = {metadata: []}
    }

    render () {
        return (
            <div>
                <MetaTags>
                    <meta property="og:title" content="this is hidden page title" />
                    <meta property="og:description" content="this is hidden page description" />
                    <meta property="og:image" content="/images/logo_psynaptica.png" />
                </MetaTags>
                
                <Header sectionTitle="Hidden Page" />

                <p>
                    This is hidden page, you will find nothing in this page
                </p>
            </div>
        )
    }
}

export default HiddenPage2;