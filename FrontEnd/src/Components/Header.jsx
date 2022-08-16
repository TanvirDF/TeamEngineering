import logo from "../imgs/IMG_1184.png";
import '../CSS/Header.css';

const Header = () => {
  return (

    <header>
      <nav>
        <div className="header-box">
          <img className="Logo" src={logo} alt="DFX Logo" width="50" height="50" />
          <div className="top-links">
          <a className="help" href="#">Need help? Talk to us!</a>
          <a className="menu" href="#">Menu</a>
            <img className="profile-headerImg" src="" alt="DR" />
            </div>
        </div>
      </nav>
    </header>
  )

}

export default Header;