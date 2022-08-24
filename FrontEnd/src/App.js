import './App.css';

import Footer from '../src/Components/Footer';
import Header from '../src/Components/Header'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from '../src/Components/HomePage/HomePage';
import ProfilePage from '../src/Components/ProfilePage/ProfilePage';
import LogIn from '../src/Components/LogIn'



function App() {


  return (
    <Router>
      <Header />
      <Routes>
        <>
          <Route path='/' element={<Homepage />} />
          <Route path='/profilepage' element={<ProfilePage />} />
          <Route path='/login' element={<LogIn />} />
        </>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
