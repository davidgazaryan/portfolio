import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import {Home} from './pages/home';
import {Experience} from './pages/experience';
import {Projects} from './pages/projects';
import { About } from './pages/about';
import Navbar from './components/navbar';
import {Footer} from './components/footer';
import {ProjectDisplay} from './pages/ProjectDisplay';



function App() {
  return(
    <div className="App">
        <Router>
            <Navbar/>
                <Routes>
                    <Route path= '/' element={<Home/>}/>
                    <Route path= '/projects' element={<Projects/>}/>
                    <Route path= '/project/:id' element={<ProjectDisplay/>}/>
                    <Route path= '/experience' element={<Experience/>}/>
                    <Route path='/about' element={<About/>}/>
                </Routes>
            <Footer/>
        </Router>
    </div>
  );
}

export default App;
