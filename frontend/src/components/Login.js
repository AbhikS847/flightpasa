import {React, useState} from 'react';
import {Container, Form, Button} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {login} from '../features/auth/authSlice'; 

const Login = () => {

  const handleSubmit = (event) => {
    event.preventDefault();
    const userData = {
      email,
      password
    };

    dispatch(login(userData));
  }

  const [formData, setFormData] = useState({
    email:'',
    password:''
  });

  const {email, password} = formData;

  const dispatch = useDispatch();

  const {user, isLoading, isSuccess, message} = useSelector(state => state.auth)

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  } 

  return (
    <Container className="component-theme">
      <h2 className="pt-3">LOG IN</h2>
      <div>Welcome back! Your friends are waiting to fly with you :)</div>
      <Form className="component-form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3">
      <div className="small">email</div>
        <Form.Control className="component-form-input" id='email' name='email' value={email} onChange={onChange} type="email" placeholder="enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3">
      <div className="small">password</div>
        <Form.Control className="component-form-input" id='password' name='password' value={password} onChange={onChange} type="password" placeholder="enter password" required />
      </Form.Group>
      <Button className="btn btn-sm" type='submit'>LOG IN</Button>
      <div className="py-3 text-center">
        Don't have an account? <a href="/signup">Sign up </a>
      </div>
      </Form>
    </Container>
  )
}

export default Login;