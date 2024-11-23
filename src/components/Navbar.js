import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav>
            {/* Logo Section */}
            <div style={{
                display: 'inline-block', 
                fontSize: '24px', 
                fontWeight: 'bold', 
                color: 'white', 
                marginRight: '20px',
                paddingRight:'60px',
            }}>
                S K Explore
            </div>

            {/* Navigation Links */}
            <Link to="/" style={{ margin: '10px' }}>Home</Link>
            <Link to="/about" style={{ margin: '10px' }}>About</Link>
            <Link to="/contact" style={{ margin: '10px' }}>Contact</Link>
        </nav>
    );
};

export default Navbar;
