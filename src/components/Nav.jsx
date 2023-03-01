import { useState } from 'react';
import { Link } from 'react-router-dom';

function Nav() {
    const [showMenu, setShowMenu] = useState(false);

    const handleMenuToggle = () => {
        setShowMenu(!showMenu);
    };

    return (
        <div className="nav-container">
            <ul className={`menu ${showMenu ? 'show' : ''}`}>
                <li>
                    <Link to="/">Home</Link>
                    <Link to="/register">Create New Account</Link>
                    <Link to="/dashboard">Start Demo</Link>
                    <Link to="/login">Login</Link>
                </li>
            </ul>
            <button className={`menu-toggle ${showMenu ? 'active' : ''}`} onClick={handleMenuToggle}>
                <span></span>
                <span></span>
                <span></span>
            </button>
        </div>
    );

}

export default Nav;
