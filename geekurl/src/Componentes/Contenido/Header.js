import React, { Component } from 'react';
import './css/Header.css';
import ModalAdd from './Modals/ModalAdd'
import { Navbar,Nav, NavItem,MenuItem,NavDropdown} from 'react-bootstrap';

class Header extends Component {
    constructor(props, context) {
        super(props, context);  
        this.state = {
          lgShow: false
        };
      }
      render() {
        let lgClose = () => this.setState({ lgShow: false });
    return (
      <div className="Header">      
       <Navbar inverse>
                <Navbar.Header>
                <Navbar.Brand>
                    <a href="#">GeekURL.com</a>
                </Navbar.Brand>
                <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                <Nav>
                <NavItem eventKey={1} href="#"><span class=""></span>Celulares</NavItem>
                </Nav>
                <Nav pullRight>
                    <NavItem eventKey={1} href="#"><span class="glyphicon glyphicon-user"></span> Registrarse</NavItem>
                    <NavItem eventKey={2} href="#"><span class="glyphicon glyphicon-log-in"></span> Acceder</NavItem>
                </Nav>
                </Navbar.Collapse>
                <ModalAdd show={this.state.lgShow} onHide={lgClose} />
            </Navbar>
      </div>
    );
  }
}

export default Header;
