import { NavLink } from 'react-router-dom';
import Image from '../logo.png';

const Navbar = () => (
  <nav className="navbar">
    <img src={Image} alt="space x" width="80" height="80" />

    <ul className="nav">
      <li><NavLink to="/" exact>Rockets</NavLink></li>
      <li><NavLink to="/missions" exact>Missions</NavLink></li>
      |
      <li><NavLink to="/profile" exact>My Profile</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
