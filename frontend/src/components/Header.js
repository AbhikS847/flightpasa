import Container from 'react-bootstrap/Container';
import {Navbar, Nav} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {BsFillPersonFill} from 'react-icons/bs';

const resetActiveClasses = () => {
  const activeNames = document.querySelectorAll('.pasa-links');
  activeNames.forEach((activeName)=> {
    activeName.classList.contains('active') ? activeName.classList.remove('active') : activeName.classList.toggle('0');
  })
}

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
        <Container className="d-flex align-items-center">
        <div><Navbar.Brand href="/">Flight Pasa</Navbar.Brand></div>
        <div className="login-desktop">
        <Nav style={{fontSize:20}}>
            <Nav.Link className="pasa-links" href="#home">Flights</Nav.Link>
            <Nav.Link className="pasa-links" href="#pasa">Find a pasa</Nav.Link>
            <Nav.Link className="pasa-links" href="#flights">Post a flight</Nav.Link>
            <Nav.Link className="pasa-links" href="#items">Send items</Nav.Link>
        </Nav>
        </div>
        <div className="login-desktop" style={{justifyContent:'flex-end'}}>
        <Nav>
            <Nav.Link onClick={resetActiveClasses} className="pasa-links"  href="#5">
              <div className="d-flex align-items-center">
              <BsFillPersonFill size={20} />
              <div className="px-2" style={{fontSize:22, fontFamily:'Barlow Condensed'}}>LOG IN</div>
              </div>
            </Nav.Link>
            <Nav.Link onClick={resetActiveClasses} className="pasa-links signup"  href="#6">
              <div className="d-flex align-items-center">
              <div className="px-2" style={{fontSize:22, fontFamily:'Barlow Condensed', backgroundColor:'#fff', color:'#8aaae5'}}>SIGN UP</div>
              </div>
            </Nav.Link>
        </Nav>
        </div>
        </Container>
      </Navbar>
    )
};

export default Header;