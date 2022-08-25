import './App.css';

import Footer from '../src/Components/Footer';
import Header from '../src/Components/Header'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from '../src/Components/HomePage/HomePage';
import ProfilePage from '../src/Components/ProfilePage/ProfilePage';
import LogIn from '../src/Components/LogIn'
import { useState, useEffect } from 'react';
import axios from 'axios';


function App() {

  const [id, setId] = useState('');
  const [profileData, setProfileData] = useState([]);
  const [trainingData, setTrainingData] = useState([]);
  const [informationData, setInformationData] = useState([]);

  useEffect(() => {
    getInformationData();
    getTrainingData();
    getProfileData();
  }, [id]);

  const getProfileData = async () => {
    try {
      // console.log('Hello from profile');
      const res = await axios.get(`http://localhost:4000/graduate/${id}`);
      setProfileData(res.data);
      // console.log(res.data);
    }
    catch (e) {
      console.log(e);
    }
  }
  const getTrainingData = async () => {
    try {
      console.log('Hello from training');
      const res = await axios.get(`http://localhost:4000/training/${id}`);
      setTrainingData(res.data)
      console.log(res.data)
    }
    catch (e) {
      console.log(e);
    }
  }

  const getInformationData = async () => {
    try {
      // console.log('Hello from information');
      const res = await axios.get(`http://localhost:4000/information/${id}`);
      setInformationData(res.data);
      // console.log(res.data);
    }
    catch (e) {
      console.log(e);
    }
  }

  return (
    <div className='page'>
      <Router>
        <Header />
        <Routes>
          <>
            <Route path='/profile' element={<Homepage profileData={profileData} trainingData={trainingData} informationData={informationData} />} />
            <Route path='/edit' element={<ProfilePage id={id} profileData={profileData} />} />
            <Route path='/' element={<LogIn setId={setId} />} />
          </>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
