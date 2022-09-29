import { NavLink } from "react-router-dom";

const MobileNavbar = () => {
  return (
    <nav className="mobile-nav">
      <ul className="mobile-nav__links">
        <li>
          <NavLink to="/" end>
            <i className="bi bi-house-door-fill"></i> Home
          </NavLink>
        </li>
        <li>
          <NavLink to="products">
            <i className="bi bi-box-fill"></i> Products
          </NavLink>
        </li>
        <li>
          <NavLink to="sale">
            <i className="bi bi-bag-plus-fill"></i> Sale
          </NavLink>
        </li>
        <li>
          <NavLink to="report">
            <i className="bi bi-clipboard-data-fill"></i> Reports
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default MobileNavbar;
