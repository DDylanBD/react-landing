import React from 'react';
import Container from './Container';

const styles = {
    containerStyle: {
        height: '500px'
    },
    backgroundStyle: {
        backgroundImage: 'url(https://images.unsplash.com/photo-1429626037532-62a28ac3ccc7?dpr=1&auto=compress,format&fit=crop&w=767&h=511&q=80&cs=tinysrgb&crop=)'
    }
}

class HomeSection extends React.Component {
    render() {
        return (
            <Container backgroundStyle={styles.backgroundStyle} containerStyle={styles.containerStyle}>
                <h1>
                    Home section
                </h1>
            </Container>
        );
    }
}
export default HomeSection;
