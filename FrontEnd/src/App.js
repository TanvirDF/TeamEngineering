import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header'
// import logo from './logo.svg';
// import './App.css';
import './CSS/Profile.css';
import Information from "./component/Information";
import Profile from "./component/Profile";
import Training from './component/Training';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {

  const [profileData, setProfileData] = useState([]);


  useEffect(() => {
    getData();

  }, []);


  const getData = async () => {
    try {
      const res = await axios.get('http://localhost:3000/info');
      setProfileData(res.data.data);
      console.log(res.data.data);
    }
    catch (e) {
      console.log(e);
    }
  }


  return (
    <>
      <Header />
      <Profile />
      <Training />
      <Information profileData={profileData} />
      <Footer />
    </>
  );
}

export default App;
