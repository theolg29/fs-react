import React from "react";
import { NavLink } from "react-router-dom"

const Navigation = () => {
    return (
        <div className="navigation">
            <ul>
                <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>accueil</li>    
                </NavLink>
                <NavLink to="/about" className={(nav) => (nav.isActive ? "nav-active" : "")}>
                    <li>a propos</li>    
                </NavLink>
                <NavLink to={"/pricing"} className={(nav) => nav.isActive ? "nav-active" : ""}>
                    <li>Tarifs</li>
                </NavLink>
            </ul>
        </div>
    );
};

export default Navigation;