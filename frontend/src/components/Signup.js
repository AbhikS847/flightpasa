import {React, useState, useEffect} from 'react';
import {toast} from 'react-toastify';
import {Button, Container, Form} from 'react-bootstrap';
import {useSelector, useDispatch} from 'react-redux';
import {register, reset} from '../features/auth/authSlice'; 
import {useNavigate} from 'react-router-dom';
import Spinner from './Spinner';

const Signup = () => {

  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:'',
    password2:''
  })

  const {name, email, password, password2} = formData;

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {user, isLoading, isSuccess, message, isError} = useSelector(state => state.auth)

  const handleSubmit = (event) => {
    event.preventDefault();
  
    if(password !== password2){
      toast.error('Passwords do not match');
    }
    else{
      const userData = {
        name,
        email,
        password
      };

      dispatch(register(userData));
    }
  }

  useEffect(() => {
    if(isError){
      toast.error(message);
    }
    //Redirect when logged in
    if(isSuccess || user){
      navigate('/');
    }

    dispatch(reset());
  }, [isError, isSuccess, user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]:e.target.value
    }))
  }

  if(isLoading) {
    return <Spinner />
  }

  return (
    <Container className="component-theme">
      <h2 className="pt-3">SIGN UP</h2>
      <div>Let's get you started with your Flight Pasa account</div>
      <Form className="component-form" onSubmit={handleSubmit}>
      <div className="small">username</div>
      <Form.Group className="mb-3">
        <Form.Control className="component-form-input" type="text" id='name' name='name' value={name} onChange={onChange} placeholder="enter username" required/>
      </Form.Group>
      <Form.Group className="mb-3">
      <div className="small">email</div>
        <Form.Control className="component-form-input" type="email" id='email' name='email' value={email} onChange={onChange} placeholder="enter email" required/>
      </Form.Group>
      <Form.Group className="mb-3">
      <div className="small">password</div>
        <Form.Control className="component-form-input" type="password" id='password' name='password' value={password} onChange={onChange} placeholder="enter password" required />
      </Form.Group>
      <Form.Group className="mb-3">
      <div className="small">Confirm password</div>
        <Form.Control className="component-form-input" type="password" id='password2' name='password2'  value={password2} onChange={onChange} placeholder="enter password again" required />
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