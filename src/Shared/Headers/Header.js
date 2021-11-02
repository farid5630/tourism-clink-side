import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const {user, logOut} = useAuth();
    return (
        <div>
            <>
            <Navbar bg="light" expand="lg">
                <Container>
                <Navbar.Brand href="#" className="text-primary fs-2">Travelhub</Navbar.Brand>
                <Navbar.Toggle/>
                <Navbar.Collapse>
                    <Nav
                    className="ms-auto my-2 my-lg-0"
                    style={{ maxHeight: '100px' }}
                    
                    >
                    <Nav.Link className="active" as={Link} to="/home">Home</Nav.Link>
                
                    <Nav.Link as={Link} to="/addservices">Add-Place</Nav.Link>
                    
                    {user?.email ?
                            <Button onClick={logOut} variant="dark">Logout</Button>
                             :
                            <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                    
                    
                   <Navbar.Text>
                            
                           <span>Singed : {user?.displayName}</span> <img src={user?.photoURL} alt="pic"  width="40px" height="40px" className="rounded-pill" />
                    </Navbar.Text>
                    </Nav>  

                </Navbar.Collapse>
                </Container>
            </Navbar>
            </>
        </div>
    );
};

export default Header;