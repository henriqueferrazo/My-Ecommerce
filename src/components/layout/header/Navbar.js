import React from 'react';
import { Container, Navbar } from 'react-bootstrap';
import  'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'


import './Navbar.css'
const NavbarContainer = () => {

    const navegate = useNavigate()

    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand>
                        My E-commerce
                        <button onClick = {() => navegate('/carrinho/produtos')} className="btn third">Meu Carrinho</button>
                    </Navbar.Brand>
                </Container>
            </Navbar>
        </>
    )
}

export default NavbarContainer;