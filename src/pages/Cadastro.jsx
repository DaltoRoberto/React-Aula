import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import NavBar from '../componentes/NavBar';

function Cadastro() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <NavBar>
    <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom01">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="João"
            defaultValue=""
          />
          <Form.Control.Feedback>Aceito!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustom02">
          <Form.Label>Sobrenome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Souza da Silva"
            defaultValue=""
          />
          <Form.Control.Feedback>Aceito!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" controlId="validationCustomUsername">
          <Form.Label>E-mail</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
            <Form.Control
              type="text"
              placeholder="E-mail"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Por favor informe um E-mail.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom03">
          <Form.Label>Cidade</Form.Label>
          <Form.Control type="text" placeholder="Curitiba" required />
          <Form.Control.Feedback type="invalid">
            Por favor informe uma cidade.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom04">
          <Form.Label>Estado</Form.Label>
          <Form.Control type="text" placeholder="PR" required />
          <Form.Control.Feedback type="invalid">
            Por favor informe um estado.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="3" controlId="validationCustom05">
          <Form.Label>Cep</Form.Label>
          <Form.Control type="text" placeholder="82.000-500" required />
          <Form.Control.Feedback type="invalid">
            Por favor informe um CEP.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Aceito os termos e condições"
          feedback="Você precisa aceitar os termos para efetuar o cadastro."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Cadastrar</Button>
    </Form>
    </NavBar>
  );
}

export {Cadastro};