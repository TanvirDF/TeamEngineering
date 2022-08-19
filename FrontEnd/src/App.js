import './App.css';
import Footer from '../src/Components/Footer.jsx';
import Header from '../src/Components/Header.jsx'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './Components/HomePage/HomePage.jsx';
import ProfilePage from './Components/ProfilePage/ProfilePage.jsx';



function App() {





  return (
    <Router>
      <Header />
      <Routes>
        <>
          <Route path='/' element={<Homepage />} />
          <Route path='/profilepage' element={<ProfilePage />} />
        </>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
