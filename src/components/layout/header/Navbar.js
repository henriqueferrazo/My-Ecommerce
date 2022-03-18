import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css';
import './Navbar.css'
const NavbarContainer = () => {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">
                        My E-commerce
                        <button className="btn third">Meu Carrinho</button>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )

}

export default NavbarContainer;