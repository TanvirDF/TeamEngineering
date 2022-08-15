import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header'
// import logo from './logo.svg';
// import './App.css';
import profilecss from './CSS/Profile.css'
import Information from "./component/Information";
import Profile from "./component/Profile";
import Training from './component/Training';

function App() {
  return (
    <>
      <Header />
      <Information />
      <Profile />
      <Training />
      <Footer />
    </>
  );
}

export default App;
