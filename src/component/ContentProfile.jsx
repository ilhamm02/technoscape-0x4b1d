import React from "react";

import { Nav } from "react-bootstrap";
import { Navbar } from "react-bootstrap";
import { Container } from "react-bootstrap";

import finlogo from "../styles/img/fint-black.png";


class ContentProfile extends React.Component {
    render(){
        return(
            <>
            <div className="container">
            <Navbar
            collapseOnSelect
            expand="lg"
            bg="light"
            variant="light"
            className="head-section"
          >
            <Container>
              <Navbar.Brand href="#home">
                <img src={finlogo} alt="fin-logo" width="100" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="me-auto"></Nav>
                <Nav>
                  <Nav.Link href="#deets">Home</Nav.Link>
                  <Nav.Link href="#deets">Notifikasi</Nav.Link>
                  <Nav.Link href="/profile">Profile</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
            </div>
            </>
        )
    }
}

export default ContentProfile;