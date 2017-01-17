import React from 'react';
import Container from './Container';

const styles = {
  containerStyle : {
    height: '100vh',
  }
}

class AdvantageSection extends React.Component {
  render() {
    return(
    <Container containerStyle={styles.containerStyle}>
      <h1> Advantage section </h1>
    </Container>
    );
  }
}
export default AdvantageSection;
