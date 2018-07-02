import React from "react";
import {NavLink} from "react-router-dom";
import {
    Navbar,
    Nav,
    NavItem} from 'reactstrap';

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <Navbar color="light" className={"mb-2"} light>
                    <Nav className="mr-auto">
                        <NavItem className="mr-2">
                            <NavLink exact to="/">Product List</NavLink>
                        </NavItem>
                        <NavItem className="mr-2">
                            <NavLink to="/about">New Product</NavLink>
                        </NavItem>
                        <NavItem className="mr-2">
                            <NavLink to="/projects">Login</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        )}
}

export default Navigation;