import React  from "react";
import Main from './components/main.js';
import Contact  from "./components/contact.js";
import Data from './file/data.json';
import {BrowserRouter,Route,Routes} from 'react-router-dom';



export default function App(){
    return (
        <BrowserRouter>   
          <Routes>
            <Route path="/" element={<Main items={Data}/>}></Route>
            <Route path="/contact" element={<Contact/>}></Route>
          </Routes>
        </BrowserRouter>
    )
}

