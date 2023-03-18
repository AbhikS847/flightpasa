import React from 'react'
import { Container, Button} from 'react-bootstrap';
import { LinkContainer} from 'react-router-bootstrap';
import {ImSad} from 'react-icons/im';

const ErrorPage = () => {
  return (
    <div>
            <div className="text-center" style={{backgroundColor:"#708abb", color:"#fff", padding:50}}>
            <div className="display-2">404 error</div>
            <div className="display-2">Page not found</div>
            <div style={{fontSize:32}}>Sorry we can't find the page your are looking for <ImSad /> </div>
            <LinkContainer to="/" style={{backgroundColor:"#fff", border:'unset', color:"#8aaae5", fontWeight:600}}><Button className="py-2 my-3">Back to home page</Button></LinkContainer>
            </div>
    </div>
  )
}

export default ErrorPage