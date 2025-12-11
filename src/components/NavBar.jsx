import { NavLink } from "react-router-dom";
import logo from '../assets/logo.jpg'

export default function NavBar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <img id="logo" src={logo} alt="logo" />
          
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <NavLink className="nav-link active" aria-current="page" to="/">
                HomePage
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
