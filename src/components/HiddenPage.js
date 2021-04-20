import React from 'react'
import Header from './Header';
import PageMetadata from './PageMetadata';

class HiddenPage extends React.Component {
    render () {
        return (
            <div>
                <PageMetadata />
                
                <Header sectionTitle="Hidden Page" />

                <p>
                    This is hidden page, you will find nothing in this page
                </p>
            </div>
        )
    }
}

export default HiddenPage;