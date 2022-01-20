import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Container from 'react-bootstrap/Container'




function NavBar(props) {
    return (
        <Navbar collapseOnSelect expand="lg" bg="success" variant="dark">
            <Container>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/Tourneys">Tournaments</Nav.Link>
                        <Nav.Link href="/Games">Game Results</Nav.Link>
                        <Nav.Link href="/Teams">Team Stats</Nav.Link>
                        <Nav.Link href="/Players">Player Stats</Nav.Link>
                    </Nav>
                    <Nav>
                        {props.user && <Nav.Link href="/CreatePlayer">Create Player</Nav.Link>}
                        {props.user && <Nav.Link href="/CreateTeam">Create Team</Nav.Link>}
                        {props.user && <Nav.Link href="/CreateTourney">Create Tournament</Nav.Link>}
                        {props.user && <Nav.Link href="/CreateGame">Enter Game Results</Nav.Link>}
                        {!props.user && <Nav.Link onClick={props.userSignIn} href="/login">Login</Nav.Link>}
                        {!props.user && <Nav.Link onClick={props.createNewUser} href="/register">Register</Nav.Link>}
                        {props.user && <Nav.Link onClick={props.logOutUser} href="/login">Logout</Nav.Link>}
                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
export default NavBar;