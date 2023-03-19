import React from 'react';
import {Button, Container, Form} from 'react-bootstrap';

const handleSubmit = (event) => {
  event.preventDefault();
}

const Signup = () => {
  return (
    <Container className="component-theme">
      <h2 className="pt-3">SIGN UP</h2>
      <div>Let's get you started with your Flight Pasa account</div>
      <Form className="component-form" onSubmit={handleSubmit}>
      <div className="small">username</div>
      <Form.Group className="mb-3" controlId="username">
        <Form.Control className="component-form-input" type="text" placeholder="enter username" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="email">
      <div className="small">email</div>
        <Form.Control className="component-form-input" type="email" placeholder="enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
      <div className="small">password</div>
        <Form.Control className="component-form-input" type="password" placeholder="enter password" required />
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
      <div className="small">Confirm password</div>
        <Form.Control className="component-form-input" type="password" placeholder="enter password again" required />
      </Form.Group>
      <Button className="btn btn-sm" type='submit'>SIGN UP</Button>
      <div className="py-3 text-center">
        Already have an account? <a href="/login">Login</a>
      </div>
      </Form>
    </Container>
  )
}

export default Signup