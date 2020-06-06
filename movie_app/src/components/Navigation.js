import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css"

function Navigation() {
    return (
        <div>
            <div>
                <Link className="nav__link" to="/">Home</Link>
            </div>
            <div>
                <Link className="nav__link" to="/about">About</Link>
            </div>
        </div>
    );
}
export default Navigation;