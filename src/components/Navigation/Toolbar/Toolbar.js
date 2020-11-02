import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input
} from 'reactstrap';

// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

class Toolbar extends Component {
    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({isOpen: !this.state.isOpen});
    }

    render () {
        return (
            <div>
      <Navbar style={{backgroundColor: '#092e42'}} className="fixed-top" expand="md">
        <NavbarBrand className="text-capitalize text-light font-weight-bold" href="/">capricon</NavbarBrand>
        <NavbarToggler onClick={this.toggle} style={{border: '2px solid #092e42'}}>
          <span style={{backgroundImage: "url('https://mdbootstrap.com/img/svg/hamburger7.svg?color=ffffff')"}} class="navbar-toggler-icon"></span>
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink className="text-light" href="/components/">Home</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" href="/">Categories</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" href="/">Profile</NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="text-light" href="/">Logout</NavLink>
            </NavItem>
          </Nav>
          <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="Search ..." />
      </InputGroup>
        </Collapse>
      </Navbar>
    </div>
        );
    }
    
    // <header>
    //     <DrawerToggle />
    // </header>
}

export default Toolbar;