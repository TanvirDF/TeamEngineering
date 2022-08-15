import logo from "../imgs/IMG_1184.png";

const Header = () => {
  return (

    <header>
      <nav>
        <div className="header">
          <img src={logo} alt="DFX Logo" width="50" height="50" />
          <a href="#">Need help? Talk to us!</a>
          <a href="#">Menu</a>
          <img src="" alt="" />
        </div>
      </nav>
    </header>
  )

}

export default Header;