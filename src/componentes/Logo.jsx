import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';

function Logo() {
  return (
    <Container>
      <Row>
        <Col xs={6} md={4}>
          <Image src="./assets/logo.png" rounded />
        </Col>
      </Row>
    </Container>
  );
}

export default Logo;