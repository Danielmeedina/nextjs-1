import Link from "next/link";

const Navbar = () => {
  return (
    <header className="navbar navbar-expand-lg navbar-dark bg-dark">
      <nav className="container-fluid">
        <Link className="navbar-brand" href="/">
          Logo
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link" aria-current="page" href="/about">
                About
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" href="/services">
                Services
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default Navbar;
