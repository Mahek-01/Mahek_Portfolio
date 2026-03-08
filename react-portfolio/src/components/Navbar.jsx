import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ toggleDarkMode }) => {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    return (
        <nav id="nav" className="glass">
            <div className="logo">
                <span className="text-gradient">Mahek</span> Portfolio
            </div>

            <ul id="navbar" className={isMobileOpen ? 'com' : ''}>
                <li><Link to="/" onClick={() => setIsMobileOpen(false)}>Home</Link></li>
                <li><Link to="/about" onClick={() => setIsMobileOpen(false)}>About</Link></li>
                <li><Link to="/services" onClick={() => setIsMobileOpen(false)}>Services</Link></li>
                <li><Link to="/contact" onClick={() => setIsMobileOpen(false)}>Contact</Link></li>
                <li><Link to="/projects" onClick={() => setIsMobileOpen(false)}>Projects</Link></li>
                <a href="#" id="close" onClick={(e) => { e.preventDefault(); setIsMobileOpen(false); }}>
                    <i className="fa-solid fa-x"></i>
                </a>
            </ul>

            <button onClick={toggleDarkMode} id="btn">
                <img src="/night.png" alt="Toggle Dark Mode" />
            </button>

            {/* mobile bar */}
            <div id="mobile" onClick={() => setIsMobileOpen(true)}>
                <i className="fa-solid fa-bars"></i>
            </div>
        </nav>
    );
};

export default Navbar;
