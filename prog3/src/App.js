import React  from "react";
import Header from './components/header.js';
import Main from './components/main.js';
import About from "./components/about.js";
import Service from "./components/service.js";
import Contact from "./components/contact.js";
import Data from './file/data.json';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'

export default function App(){
    return (
        <div>
          <Router>
            <div>
              <Header></Header>
              <Routes>
                  <Route path="/" element={<Main/>}/>
                  <Route path="/about" element={<About/>}/>
                  <Route path="/service" element={<Service/>}/>
                  <Route path="/contact" element={<Contact/>}/>
              </Routes>
            </div>
          </Router>
          <Main items={Data}/>
        </div>
    )
}