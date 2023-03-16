import Container from 'react-bootstrap/Container';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {BsFillPersonFill} from 'react-icons/bs';
import {RiMenuFill} from 'react-icons/ri';
import {TfiClose} from 'react-icons/tfi';

const resetActiveClasses = () => {
  const activeNames = document.querySelectorAll('.pasa-links');
  activeNames.forEach((activeName)=> {
    activeName.classList.contains('active') ? activeName.classList.remove('active') : activeName.classList.toggle('0');
  })
  closeMenu();
}

const closeMenu = () => {
  const menuName = document.querySelector('.mobile-menu');
  const drawer = document.querySelector('.drawer');
  menuName.classList.add('d-none');
  drawer.classList.remove('d-none');
}

const openMenu = () =>{
  const drawer = document.querySelector('.drawer');
  const menuName = document.querySelector('.mobile-menu');
  menuName.classList.remove('d-none');
  drawer.classList.add('d-none');
}

const Header = () => {
    return (
        <Navbar sticky='true' bg="light" expand="lg">
        <Container className="d-flex align-items-center">
        <div><Navbar.Brand href="/" style={{color:'#fff'}}>Flight Pasa</Navbar.Brand></div>
        <div className="mobile-menu d-none">
        <div className="mobile-menu-padding" style={{backgroundColor:'#fff'}}>
        <Navbar.Brand href="/" style={{color:'#708abb'}}>Flight Pasa</Navbar.Brand>
        <Button style={{position:'absolute', right:4, top:12, border:'unset', backgroundColor:'unset', color:'#708abb'}} onClick={closeMenu}><TfiClose size={28}/></Button>
        </div>
        <Nav className="mobile-menu-padding" style={{fontSize:20}}>
            <Nav.Link onClick={closeMenu} className="pasa-links" href="#home">Flights</Nav.Link>
            <Nav.Link onClick={closeMenu} className="pasa-links" href="#pasa">Find a pasa</Nav.Link>
            <Nav.Link onClick={closeMenu} className="pasa-links" href="#flights">Post a flight</Nav.Link>
            <Nav.Link onClick={closeMenu} className="pasa-links" href="#items">Send items</Nav.Link>
        </Nav>
        <div style={{marginTop:10, backgroundColor:"#fff", color:"#708abb", border:'2px solid #fff', fontSize:15, textAlign:'center', fontFamily:'Barlow Condensed', fontSize:30, boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>Account </div>
        <Nav>
            <Nav.Link onClick={resetActiveClasses} className="pasa-links"  href="#5">
              <div className="d-flex align-items-center">
              <div className="px-2" style={{fontSize:22, fontFamily:'Barlow Condensed'}}>LOG IN</div>
              </div>
            </Nav.Link>
            <Nav.Link onClick={resetActiveClasses} className="pasa-links signup" href="#6">
              <div className="d-flex align-items-center">
              <div className="px-2" style={{fontSize:22, fontFamily:'Barlow Condensed'}}>SIGN UP</div>
              </div>
            </Nav.Link>
        </Nav>
        </div>
        <div className="login-mobile">
        <Button className="drawer" style={{backgroundColor:'unset', border:'unset'}} onClick={openMenu}><RiMenuFill size={30} /></Button>
        </div>
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