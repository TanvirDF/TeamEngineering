import logo from "../imgs/IMG_1184.png";
import '../CSS/Header.css';

const Header = () => {
  return (

    <header>
      <nav>

        <div className="header-box">
          <img className="Logo" src={logo} alt="DFX Logo" width="50" height="50" data-testid="dfx-logo" />
          <div className="top-links">
            {/* <a className="help" data-testid="need-help-link" href="#">Need help? Talk to us!</a> */}
            {/* <a className="menu" data-testid="menu-link" href="#">Menu</a> */}
            {/* <img className="profile-headerImg" src="" alt="DR" data-testid="profile-pic-nav" /> */}
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;