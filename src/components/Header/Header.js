import React from 'react';
import classes from './header.module.css';
import { Link } from 'react-router-dom';

export default function Header() {
    const user = {
        name: 'Seihak',
    };

    const cart = {
        totalCount: 10,
    };

    const logout = () => {
        // logout logic here
        console.log('User logged out');
    };

    return (
        <header className={classes.header}>
            <div className={classes.container}>
                <Link to="/" className={classes.logo}>
                    Foodee!
                </Link>
                <nav>
                    <ul>
                        {user ? (
                            <li className={classes.menu_container}>
                                <Link to="/dashboard">{user.name}</Link>
                                <div className={classes.menu}>
                                    <Link to="/profile">Profile</Link>
                                    <Link to="/orders">Orders</Link>
                                    {/* Use button for logout */}
                                    <button 
                                        onClick={logout} 
                                        className={classes.logout_button} // Optional for styling
                                    >
                                        Log Out
                                    </button>
                                </div>
                            </li>
                        ) : (
                            <Link to="/login">Log in</Link>
                        )}

                        <li>
                            <Link to="/cart">
                                Cart
                                {cart.totalCount > 0 && (
                                    <span className={classes.cart_count}>
                                        {cart.totalCount}
                                    </span>
                                )}
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
