import { NavLink } from 'react-router-dom';
import Image from '../logo.png';

const Navbar = () => (
  <nav className="navbar">
    <NavLink to="/" exact><img src={Image} alt="space x" width="60" height="60" /></NavLink>

    <ul className="nav">
      <li><NavLink to="/" exact>Rockets</NavLink></li>
      <li><NavLink to="/missions" exact>Missions</NavLink></li>
      <li className="pipe">|</li>
      <li><NavLink to="/profile" exact>My Profile</NavLink></li>
    </ul>
  </nav>
);

export default Navbar;
