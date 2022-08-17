import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header'
import { useEffect, useState } from 'react';
import axios from 'axios';
import FullProfile from './component/FullProfile';

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
      <FullProfile profileData={profileData} />
      <Footer />
    </>
  );
}

export default App;
