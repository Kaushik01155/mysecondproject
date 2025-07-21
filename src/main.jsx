import { createRoot } from 'react-dom/client'
// import Home from './Home' // Remove if not used
import 'bootstrap/dist/css/bootstrap.min.css';
import './assets/Style.css';
import React from "react";
import { Dashbord } from './Dashbord';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Menu } from './Menu'; // <-- Fixed case
import { Login } from './Login';
import { Contact } from './Contact';
import { About } from './About';
import { Error404 } from './Error404';
import Result from './Result';

createRoot(document.getElementById('root')).render(
    <>
        <BrowserRouter>
            <Menu />
            <Routes>
                <Route path='/' element={<Dashbord/>}></Route>
                <Route path='/login' element={<Login/>}></Route>
                <Route path='/contact' element={<Contact/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/result/:fname/:mobile/:email/:password' element={<Result/>}></Route>
                <Route path='*' element={<Error404/>}></Route>
            </Routes>
        </BrowserRouter>
    </>
)
