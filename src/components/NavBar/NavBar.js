import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'



function NavBar(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="danger" variant="dark">
            <Container>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Schedule">Schedule</Nav.Link>
                        <Nav.Link href="/Games">Game Results</Nav.Link>
                        <Nav.Link href="/Tournaments">Tournaments</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="/Teams">Team Stats</Nav.Link>
                        <Nav.Link href="/Players">Player Stats</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;