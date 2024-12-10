import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext'
import { useContext } from "react";

export default function Layout() {
  const {logout} =useContext(AuthContext);

  const handleLogout = () => {
    logout(); // Kijelentkezés meghívása
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bejelentkezés és regisztráció</h1>
      </header>
      <nav>
        <ul className="nav">
          <li className="nav-item">
            <Link to="/" className="nav-link" href="#">Kezdőlap</Link>
          </li>
          <li className="nav-item">
            <Link to="/login" className="nav-link" href="#">Bejelentkezés</Link>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link" href="#">Regisztráció</Link>
          </li>
          <li className="nav-item">
            <button onClick={handleLogout} className="nav-link" href="#">Kijelentkezés</button>
          </li>
        </ul>
        <Outlet />
        <footer>@ Minden jog fenntartva</footer>
      </nav>
    </div>
  )
}
