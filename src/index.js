import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Developers from './components/pages/Developers';
import Contact from './components/pages/Contact';
import Projects from './components/pages/Projects';
import Services from './components/pages/Services';
import About from './components/pages/About';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<Router>
    <Routes>
      <Route path='/' element={<App/>}/>
      <Route path='/developers' element={<Developers/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/projects' element={<Projects/>}/>
      <Route path='/services' element={<Services/>}/>
      <Route path='/about' element={<About/>}/>
    </Routes>
</Router>
);