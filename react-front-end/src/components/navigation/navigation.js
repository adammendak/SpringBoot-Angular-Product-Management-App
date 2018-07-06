import React from "react";
import {NavLink} from "react-router-dom";

class Navigation extends React.Component {
    render() {
        return (
            <div>
                <div className={"navbar light mb-2"}>
                    <div className={"nav mr-auto"}>
                        <div className={"nav-item mr-2"}>
                            <NavLink exact to="/">Product List</NavLink>
                        </div>
                        <div className={"nav-item mr-2"}>
                            <NavLink to="/about">New Product</NavLink>
                        </div>
                        <div className={"nav-item mr-2"}>
                            <NavLink to="/projects">Login</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )}
}

export default Navigation;