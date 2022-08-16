import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header'
// import logo from './logo.svg';
// import './App.css';
// import editpi from './CSS/EditPI.css'
// import profilecss from './CSS/Profile.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './component/Homepage';
import ProfilePage from './component/ProfilePage/ProfilePage';

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
