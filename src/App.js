import "animate.css";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProjectDetails from "./components/details";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route exact path='/detail/:name' element={<ProjectDetails />} />
          <Route path='*' element={<h2 className='p-5'>Not found</h2>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
