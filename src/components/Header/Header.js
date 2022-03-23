import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.scss"
const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const toggleMenu = () => setMenuOpen(!menuOpen)
    return (
        <header className="header">
            <div className="logo">
                <div>Logo</div>
            </div>
            <nav>
                <div onClick={toggleMenu}>Menu</div>
                <div className={menuOpen ? "menu_open" : "menu_close"}>
                    <span className="x" onClick={toggleMenu}>X</span>
                    <ul>
                        <li>
                            <Link to="/" onClick={toggleMenu}>Home</Link>
                        </li>
                        <li>
                            <Link to="/register" onClick={toggleMenu}>Register</Link>
                        </li>

                    </ul>
                </div>
            </nav>


        </header>
    )
}
export default Header