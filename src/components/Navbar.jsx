import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{backgroundColor:"#D94F04",color:"#F4E2DE"}}>
  <NavLink className="navbar-brand" to="/" style={{color:"#F4E2DE"}}>Anthony Harold</NavLink>
  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item">
        <NavLink className="nav-link" to="/" style={{color:"#F4E2DE"}}>Home</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/turkey-map" style={{color:"#F4E2DE"}}>Türkiye Haritası</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/turkey-list" style={{color:"#F4E2DE"}}>Türkiye İller Listesi</NavLink>
      </li>
      <li className="nav-item">
        <NavLink className="nav-link" to="/about" style={{color:"#F4E2DE"}}>About</NavLink>
      </li>
    </ul>
  </div>
</nav>
  )
}

export default Navbar