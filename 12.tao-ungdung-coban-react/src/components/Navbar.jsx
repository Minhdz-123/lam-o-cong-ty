import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo-container">
        <div className="navbar-logo-bars">
          {/* Three vertical bars of increasing height */}
          <div className="navbar-logo-bar navbar-logo-bar-1"></div>
          <div className="navbar-logo-bar navbar-logo-bar-2"></div>
          <div className="navbar-logo-bar navbar-logo-bar-3"></div>
        </div>
        <span className="navbar-logo-text">Graph Page</span>
      </div>

      {/* Navigation Links */}
      <div className="navbar-nav">
        <a href="#" className="navbar-nav-link navbar-nav-link-active">Home</a>
        <a href="#" className="navbar-nav-link">Dashboard</a>
        <a href="#" className="navbar-nav-link">Analytics</a>
        <a href="#" className="navbar-nav-link">Reports</a>
        <a href="#" className="navbar-nav-link">Contact</a>
      </div>

      {/* Search Icon */}
      <div className="navbar-search">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      </div>
    </nav>
  );
};

export default Navbar;