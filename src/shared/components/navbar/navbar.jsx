import { Link } from "react-router-dom";

import "./navbar.scss";

function Navbar() {
  return (
    <nav className="navbar" aria-label="main navigation" role="navigation">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <picture>
              <source srcSet="logo.webp" type="image/webp" />
              <img src="logo.png" alt="Gedung Tolaram" />
            </picture>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
