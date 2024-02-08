import React from 'react';
import style from './App.module.css';
import Navbar from "../components/Navbar/Navbar";
import PageHeroNext from "../page/page-hero-next/page-hero-next";
import {Route, Routes, useLocation} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import StartBusiness from "../components/start-business/start-business";

function App() {
    const location = useLocation()

    return (
        location.pathname === '/'
            ?
            <div className={style.app}>
                <Navbar/>
                <PageHeroNext/>
                <Footer/>
            </div>
            :
            <Routes>
                <Route path="/start_business" element={<StartBusiness/>}/>
                {/*<Route path="*" element={<Navbar/>}/>*/}
            </Routes>
    );
}

export default App;
