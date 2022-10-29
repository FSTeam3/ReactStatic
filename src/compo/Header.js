import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Header() {
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg bg-black">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">LOGO</a>

                    <span className="text-light">Sign In</span>

                   
                  
                </div>
            </nav> */}

<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="#">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
          <a className="nav-link active text-light" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="../Pages/About_us.js">About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-light" href="../Pages/Pricing.js">Pricing</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Vehicle Category
          </a>
          <ul className="dropdown-menu bg-dark">
            <li><a className="dropdown-item text-light" href="#">2 Wheeler</a></li>
            <li><a className="dropdown-item text-light" href="#">4 Wheeler</a></li>
            <li><a className="dropdown-item text-light" href="#">Truck</a></li>
            <li><a className="dropdown-item text-light" href="#">Bus</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
            </>
    );
}

export default Header;