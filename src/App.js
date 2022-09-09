import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar';
import Footer from './components/footer';
import arrow from "./images/icons/arrow-up.svg";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <NavBar />
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='*' element={<h2 className='p-5'>Not found</h2>} />
        </Routes>
        <Footer />
        <Link to="#" className="back-to-top d-flex align-items-center justify-content-center">
          <img src={arrow} alt="" />
        </Link>
      </div>
    </BrowserRouter>
  );
}

export default App;
