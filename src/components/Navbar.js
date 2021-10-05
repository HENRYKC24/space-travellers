import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navbar">
    <h3><a href="/">SPACE TRAVELLERS</a></h3>

    <ul className="nav">
      <li><NavLink to="/" exact>Rockets</NavLink></li>
      <li><NavLink to="/missions" exact>Missions</NavLink></li>
      |
      <li><NavLink to="/profile" exact>My Profile</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
