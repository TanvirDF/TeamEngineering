import './App.css';

import Footer from '../src/Components/Footer';
import Header from '../src/Components/Header'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from '../src/Components/HomePage/HomePage';
import ProfilePage from '../src/Components/ProfilePage/ProfilePage';
import LogIn from '../src/Components/LogIn'
import { useState } from 'react';


function App() {

  const [id, setId] = useState('');

  return (
    <Router>
      <Header />
      <Routes>
        <>
          <Route path='/profile' element={<Homepage id={id} />} />
          <Route path='/edit' element={<ProfilePage />} />
          <Route path='/' element={<LogIn setId={setId} />} />
        </>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
