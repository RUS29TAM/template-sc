import React from 'react';
import style from './App.module.css';
import Navbar from "../components/Navbar/Navbar";
import PageHeroNext from "../page/page-hero-next/page-hero-next";
import {Route, Routes} from "react-router-dom";
import Footer from "../components/Footer/Footer";

function App() {
  return (
    <div className={style.app}>
      {/*<header className="App-header">*/}
      {/*</header>*/}
        <Navbar />
        <PageHeroNext />
        <Footer />
        <Routes>
            {/*<Route path="/q-general" element={<Navbar/>}/>*/}
            {/*<Route path="/q-economy" element={<Navbar/>}/>*/}
            {/*<Route path="/q-law" element={<Navbar/>}/>*/}
            {/*<Route path="/q-support" element={<Navbar/>}/>*/}
            {/*<Route path="/q-partner" element={<Navbar/>}/>*/}
            {/*<Route path="/about_us" element={<Navbar/>}/>*/}
            {/*<Route path="/SContract" element={<Navbar />}/>*/}
            {/*<Route path="/BoxedSolutions-modal" element={<Navbar />}/>*/}
            {/*<Route path="/BoxedSolutions-page-1" element={<Navbar />}/>*/}
            {/*<Route path="/BoxedSolutions-page-2" element={<Navbar/>}/>*/}
            {/*<Route path="/ChoosingFranchise-modal" element={<Navbar />}/>*/}
            {/*<Route path="/franchbank" element={<Navbar />}/>*/}
            {/*<Route path="/franshiza-ru" element={<Navbar />}/>*/}
            {/*<Route path="/top-franchise" element={<Navbar />}/>*/}
            {/*<Route path="/rusfranch-ru" element={<Navbar />}/>*/}
            {/*<Route path="/start_business" element={<Navbar/>}/>*/}
            {/*<Route path="*" element={<Navbar/>}/>*/}
        </Routes>
    </div>

  );
}

export default App;
