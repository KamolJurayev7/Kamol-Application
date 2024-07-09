import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
    return (
        <div className="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom container pt-3">
            <Link to={'/'} className="d-flex align-items-center text-dark text-decoration-none">
                <span className="fs-1">KAMOL</span>
            </Link>
            <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
                <Link to={'/login'} className="me-3 py-2 text-dark text-decoration-none">Login</Link>
                <Link to={'/register'} className="me-3 py-2 text-dark text-decoration-none">Register</Link>
            </nav>
        </div>
    );
}

export default Navbar;
