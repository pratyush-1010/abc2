import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, NavLink } from 'react-router-dom';
import Offcan from './Offcan'
import SinRight from './SinRight';
// import { Link } from 'react-router-dom';
const Appbar=()=> {
  return (
    <Navbar expand="lg" variant='' className='navbar'>
      <Container>
        <Navbar.Brand className='brand'>
          <Link to={'*'} className='nav-link'>
          The Story Store
          </Link>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mx-auto mt-0">
            <NavLink to="*" className="nav-link offbut pname ">Home
            
            <hr className='navbarlinks'></hr></NavLink>
            <NavLink  className="nav-link pname "><Offcan/>
            
            <hr className='navbarlinks'></hr></NavLink>
            {/* <NavLink><SinRight/></NavLink> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
            
          </Nav>
          <SinRight/>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Appbar;
