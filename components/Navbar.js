import Link from 'next/link';

function Toolbar() {
  return (
    <nav className="navbar navbar-expand-lg  " id="navbar-custom">
      <div className="container-fluid">
        <Link href="/" passHref>
          <a className="navbar-brand">Live Now News</a>
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
          <ul className="navbar-nav ">
            <li className="nav-item">
              <Link href="/" passHref>
                <a className="nav-link" aria-current="page">
                  Home
                </a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/feed/1" passHref>
                <a className="nav-link">News</a>
              </Link>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.linkedin.com/in/mohamad-yehya-73b4a51a0"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Toolbar;
