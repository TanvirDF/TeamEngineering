import logo from "../imgs/IMG_1184.png";

const Header = () => {
  return (

    <header>
      <nav>
        <div className="header">
          <img src={logo} alt="DFX Logo" width="50" height="50" data-testid="dfx-logo" />
          <a href="#" data-testid="need-help-link">Need help? Talk to us!</a>
          <a href="#" data-testid="menu-link">Menu</a>
          <img src="" alt="" data-testid="profile-pic-nav"/>
        </div>
      </nav>
    </header>
  )

}

export default Header;