import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header'


// import editpi from './CSS/EditPI.css'
// import profilecss from './CSS/Profile.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import ProfilePage from './component/ProfilePage/ProfilePage';


import { useEffect, useState } from 'react';
import axios from 'axios';
import FullProfile from './component/FullProfile';

import './CSS/Profile.css'
import Information from "./component/Information";
import Profile from "./component/Profile";
import Training from './component/Training';
import EditPI from './component/EditPI';


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
    <Router>
      <Header />

      <Routes>
        <>
          <Route path='/' element={<Homepage />} />
          <Route path='/profilepage' element={<ProfilePage />} />

        </>
      </Routes>


      <FullProfile profileData={profileData} />

      <EditPI />

      <Footer />
    </Router>
  );
}

export default App;
