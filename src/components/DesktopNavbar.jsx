import { Link,NavLink } from "react-router-dom";

const DesktopNavbar = () => {
  return (
    <aside className="desktop-nav">
      <Link to="/" className="logo">
        Business <i className="bi bi-exclude"></i> Manager
      </Link>

      <ul className="desktop-nav__links">
        <li>
          <NavLink to="/" end><i className="bi bi-house-door-fill" ></i> Home</NavLink>
        </li>
        <li>
          <NavLink to="products"><i className="bi bi-box-fill"></i> Products</NavLink>
        </li>
        <li>
          <NavLink to="sale"><i className="bi bi-bag-plus-fill"></i> Sale</NavLink>
        </li>
        <li>
          <NavLink to="report"><i className="bi bi-clipboard-data-fill"></i> Reports</NavLink>
        </li>
      </ul>
    </aside>
  );
};

export default DesktopNavbar;
