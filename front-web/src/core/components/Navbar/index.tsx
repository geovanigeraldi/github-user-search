import { Link } from 'react-router-dom';
import './styles.css';

const Navbar = () => (
  <nav className="main-nav">
    <div className="col-2">
      <Link to="/" className="nav-logo-text">
        Bootcamp DevSuperior
      </Link>
    </div>
  </nav>
);

export default Navbar;