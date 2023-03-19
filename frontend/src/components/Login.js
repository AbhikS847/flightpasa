import React from 'react';
import {Container, Form, Button} from 'react-bootstrap';

const handleSubmit = (event) => {
  event.preventDefault();
}

const Login = () => {
  return (
    <Container className="component-theme">
      <h2 className="pt-3">LOG IN</h2>
      <div>Welcome back! Your friends are waiting to fly with you :)</div>
      <Form className="component-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="email">
      <div className="small">email</div>
        <Form.Control className="component-form-input" type="email" placeholder="enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="password">
      <div className="small">password</div>
        <Form.Control className="component-form-input" type="password" placeholder="enter password" required />
      </Form.Group>
      <Button className="btn btn-sm" type='submit'>LOG IN</Button>
      <div className="py-3 text-center">
        Don't have an account? <a href="/signup">Sign up </a>
      </div>
      </Form>
    </Container>
  )
}

export default Login