import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Input
} from 'reactstrap';

// import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

class Toolbar extends Component {
    state = {
        isOpen: false,
        setIsOpen: false
    }

    toggle = () => {
        this.setState({isOpen: true, setIsOpen: true});
    }

    render () {
        return (
            <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
        <NavbarToggler onClick={() => this.toggle} />
        <Collapse isOpen={this.stateisOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Options
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  Option 1
                </DropdownItem>
                <DropdownItem>
                  Option 2
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  Reset
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
          <InputGroup>
        <InputGroupAddon addonType="prepend">
          <InputGroupText>@</InputGroupText>
        </InputGroupAddon>
        <Input placeholder="username" />
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