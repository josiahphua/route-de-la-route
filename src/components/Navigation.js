import React from 'react';
import {Nav, Navbar} from 'react-bootstrap'
import {NavLink} from "react-router-dom";

function Navigation(){

    return(
    
    <Navbar bg="dark" variant="dark" expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="flex-grow-0">
            <Nav>
                <NavLink to="/home" className="nav-link">Home</NavLink>
                <NavLink to="/routes" className="nav-link">Routes</NavLink>
            </Nav>
        </Navbar.Collapse>
        <Navbar.Brand href="/home" className="mx-auto">Roùte de la Roùte</Navbar.Brand>
        <Nav>
        <NavLink to="/account" className="nav-link">Account</NavLink>
        <NavLink to="/profile" className="nav-link">Profile</NavLink>
        </Nav>
    </Navbar>
    
    )
}

export default Navigation;