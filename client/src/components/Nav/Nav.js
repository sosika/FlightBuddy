import React from "react";
import { Link } from "react-router-dom";


const Nav = () => (
    <div>
        <nav>
            <div className="nav-wrapper grey">
                <a href="" className="brand-logo right">Flight Buddy Logo</a>
                <ul className="">
                    <li className="NavItem"><a href="/">Homepage</a></li>
                    <li className="NavItem"><a href="/about">About</a></li>
                    <li className="NavItem"><a href="/tail">Search a Flight</a></li>
                    <li className="NavItem"><a href="/view">Charts</a></li>
                </ul>
            </div>
        </nav>
    </div>
);

export default Nav;
