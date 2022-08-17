import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header'
// import logo from './logo.svg';
// import './App.css';
import './CSS/Profile.css'
import Information from "./component/Information";
import Profile from "./component/Profile";
import Training from './component/Training';
import EditPI from './component/EditPI';

function App() {
  return (
    <>

      <Header />
      <Information />
      <Profile />

      <Training />
      <EditPI />
      <Footer />
    </>
  );
}

export default App;
