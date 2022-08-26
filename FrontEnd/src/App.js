import './App.css';

import Footer from '../src/Components/Footer';
import Header from '../src/Components/Header'


import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from '../src/Components/HomePage/HomePage';
import ProfilePage from '../src/Components/ProfilePage/ProfilePage';
import LogIn from '../src/Components/LogIn'
import { useState } from 'react';
import axios from 'axios';


function App() {

  // const [profileData, setProfileData] = useState([]);
  // const [trainingData, setTrainingData] = useState([]);
  // const [informationData, setInformationData] = useState([]);
  // const [personalStory, setPersonalStory] = useState([]);
  const [id, setId] = useState('');





  // const handleData = () => {
  //   getInformationData();
  //   getTrainingData();
  //   getProfileData();
  //   getPersonalStory();

  // };

  // const getProfileData = async () => {
  //   try {
  //     console.log('Hello from profile');
  //     const res = await axios.get(`http://localhost:4000/graduate/${id}`);
  //     setProfileData(res.data);
  //     console.log(res.data);
  //   }
  //   catch (e) {
  //     console.log(e);
  //   }
  // }
  // const getTrainingData = async () => {
  //   try {
  //     // console.log('Hello from training');
  //     const res = await axios.get(`http://localhost:4000/training/${id}`);
  //     setTrainingData(res.data)
  //     // console.log(res.data)
  //   }
  //   catch (e) {
  //     console.log(e);
  //   }
  // }

  // const getInformationData = async () => {
  //   try {
  //     // console.log('Hello from information');
  //     const res = await axios.get(`http://localhost:4000/information/${id}`);
  //     setInformationData(res.data);
  //     // console.log(res.data);
  //   }
  //   catch (e) {
  //     console.log(e);
  //   }
  // }
  // const getPersonalStory = async () => {
  //   // console.log('Hello from personal story');
  //   const res = await axios.get(`http://localhost:4000/personalStory/${id}`);
  //   setPersonalStory(res.data);
  //   // console.log(res.data);
  // }




  return (
    <div className='page'>
      <Router>
        <Header />
        <Routes>
          <>
            {/* <Route path='/profile' element={<Homepage profileData={profileData} trainingData={trainingData} informationData={informationData} personalStory={personalStory} />} />
            <Route path='/edit' element={<ProfilePage profileData={profileData} personalStory={personalStory} />} />
            <Route path='/' element={<LogIn setId={setId} handleData={handleData} />} /> */}
            <Route path='/profile' element={<Homepage id={id} />} />
            <Route path='/edit' element={<ProfilePage id={id} />} />
            <Route path='/' element={<LogIn setId={setId} />} />
          </>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
