import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { Outlet, Link } from "react-router-dom";

function Header() {
    return (
        <>
            {/* <nav className="navbar navbar-expand-lg bg-black">
                <div className="container-fluid">
                    <a className="navbar-brand text-light" href="#">LOGO</a>

                    <span className="text-light">Sign In</span>

                   
                  
                </div>
            </nav> */}

<nav className="navbar navbar-expand-lg bg-dark rounded-bottom">
  <div className="container-fluid">
    <Link className="navbar-brand text-light font-weight-bold mx-3" to="/">Autowa.</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNavDropdown">
      <ul className="navbar-nav">
        <li className="nav-item">
        <Link  className="nav-link active text-light" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link text-light" to="/about_us">About Us</Link>
        </li>
        {/* <li className="nav-item">
          <Link className="nav-link text-light" to="/pricing">Pricing</Link>
        </li> */}
        {/* <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle text-light" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Vehicle Category
          </a>
          <ul className="dropdown-menu bg-dark">
            <li><a className="dropdown-item text-light" href="#">2 Wheeler</a></li>
            <li><a className="dropdown-item text-light" href="#">4 Wheeler</a></li>
            <li><a className="dropdown-item text-light" href="#">Truck</a></li>
            <li><a className="dropdown-item text-light" href="#">Bus</a></li>
          </ul>
        </li> */}
      </ul>
    </div>
  </div>
</nav>
<Outlet/>
            </>
    );
}

export default Header;