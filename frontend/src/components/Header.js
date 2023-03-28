import Container from 'react-bootstrap/Container';
import {Navbar, Nav, Button} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {useNavigate} from 'react-router-dom';
import {useSelector, useDispatch} from 'react-redux';
import {logout, reset} from '../features/auth/authSlice';
import {BsFillPersonFill} from 'react-icons/bs';
import {RiMenuFill} from 'react-icons/ri';
import {TfiClose} from 'react-icons/tfi';
import 'animate.css';

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
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {user} = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate('/');
    resetActiveClasses();
  }

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
            <LinkContainer to="/"><Nav.Link onClick={closeMenu} className="pasa-links">Flights</Nav.Link></LinkContainer>
            <LinkContainer to="/pasa"><Nav.Link onClick={closeMenu} className="pasa-links" href="#pasa">Find a pasa</Nav.Link></LinkContainer>
            <LinkContainer to="/flights"><Nav.Link onClick={closeMenu} className="pasa-links" href="#flights">Find a flight</Nav.Link></LinkContainer>
            <LinkContainer to="/items"><Nav.Link onClick={closeMenu} className="pasa-links" href="#items">Send items</Nav.Link></LinkContainer>
        </Nav>
        <div style={{marginTop:10, backgroundColor:"#fff", color:"#708abb", border:'2px solid #fff', textAlign:'center', fontFamily:'Barlow Condensed', fontSize:30, boxShadow:'rgba(0, 0, 0, 0.24) 0px 3px 8px'}}>Account </div>
        {user ? (<Nav>
          <LinkContainer to="/"><Nav.Link onClick={resetActiveClasses} className="pasa-links">
              <div className="d-flex align-items-center">
              <div className="px-2" style={{fontSize:24, fontFamily:'Barlow Condensed'}}>{user.name}</div>
              </div>
            </Nav.Link></LinkContainer>
            <LinkContainer to="/login"><Nav.Link onClick={onLogout} className="pasa-links">
              <div className="d-flex align-items-center">
              <div className="px-2" style={{fontSize:24, fontFamily:'Barlow Condensed'}}>LOG OUT</div>
              </div>
            </Nav.Link></LinkContainer>
        </Nav>) : (<Nav>
            <LinkContainer to="/login"><Nav.Link onClick={resetActiveClasses} className="pasa-links">
              <div className="d-flex align-items-center">
              <div className="px-2" style={{fontSize:24, fontFamily:'Barlow Condensed'}}>LOG IN</div>
              </div>
            </Nav.Link></LinkContainer>
            <LinkContainer to="/signup"><Nav.Link onClick={resetActiveClasses} className="pasa-links signup" href="#6">
              <div className="d-flex align-items-center">
              <div className="px-2" style={{fontSize:24, fontFamily:'Barlow Condensed'}}>SIGN UP</div>
              </div>
            </Nav.Link>
            </LinkContainer>
        </Nav>) }
        </div>
        <div className="login-mobile">
        <Button className="drawer" style={{backgroundColor:'unset', border:'unset'}} onClick={openMenu}><RiMenuFill size={30} /></Button>
        </div>
        <div className="login-desktop">
        <Nav style={{fontSize:20}}>
            <LinkContainer to="/"><Nav.Link className="pasa-links">Flights</Nav.Link></LinkContainer>
            <LinkContainer to="/pasa"><Nav.Link className="pasa-links">Find a pasa</Nav.Link></LinkContainer>
            <LinkContainer to="/flights"><Nav.Link className="pasa-links">Find a flight</Nav.Link></LinkContainer>
            <LinkContainer to="/items"><Nav.Link className="pasa-links">Send items</Nav.Link></LinkContainer>
        </Nav>
        </div>
        <div className="login-desktop" style={{justifyContent:'flex-end'}}>
        {user ? (        <Nav>
          <LinkContainer to="/">
            <Nav.Link onClick={resetActiveClasses} className="pasa-links"  href="#5">
              <div className="d-flex align-items-center">
              <BsFillPersonFill size={20} />
              <div className="px-2" style={{fontSize:22, fontFamily:'Barlow Condensed'}}>{user.name}</div>
              </div>
            </Nav.Link>
          </LinkContainer>
        <LinkContainer to="/login">
            <Nav.Link onClick={onLogout} className="pasa-links"  href="#5">
              <div className="d-flex align-items-center">
              <BsFillPersonFill size={20} />
              <div className="px-2" style={{fontSize:22, fontFamily:'Barlow Condensed'}}>LOG OUT</div>
              </div>
            </Nav.Link>
          </LinkContainer>
        </Nav>) : (<Nav>
        <LinkContainer to="/login">
            <Nav.Link onClick={resetActiveClasses} className="pasa-links"  href="#5">
              <div className="d-flex align-items-center">
              <BsFillPersonFill size={20} />
              <div className="px-2" style={{fontSize:22, fontFamily:'Barlow Condensed'}}>LOG IN</div>
              </div>
            </Nav.Link>
          </LinkContainer>
          <LinkContainer to="/signup">
            <Nav.Link onClick={resetActiveClasses} className="pasa-links signup"  href="#6">
              <div className="d-flex align-items-center">
              <div className="px-2" style={{fontSize:22, fontFamily:'Barlow Condensed', backgroundColor:'#fff', color:'#8aaae5'}}>SIGN UP</div>
              </div>
            </Nav.Link>
          </LinkContainer>
        </Nav>)}
        </div>
        </Container>
      </Navbar>
    )
};

export default Header;