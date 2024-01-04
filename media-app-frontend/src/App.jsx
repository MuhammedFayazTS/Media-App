import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import LandingPage from './Pages/LandingPage';
import Home from './Pages/Home';
import PageNotFound from './Pages/PageNotFound';
import WatchHistory from './Pages/WatchHistory';


function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        {/* localhost:3000 -landing page */}
          <Route  path='/' element={<LandingPage/>} />
        {/* localhost:3000/home -home page*/}
          <Route  path='/home' element={<Home/>} />
        {/* localhost:3000/watchhistory -watch history*/}
          <Route  path='/watchhistory' element={<WatchHistory/>} />
        {/* localhost:3000/ -page not found*/}
          <Route  path='*' element={<PageNotFound/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
